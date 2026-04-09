#!/usr/bin/env node
/**
 * build-all.mjs
 * Builda todas as aulas Slidev do monorepo e agrega em platform/dist/
 *
 * Filtro de release: só builda aulas com status: published
 * Use --all para incluir todas (modo dev/preview local)
 *
 * Uso:
 *   node platform/scripts/build-all.mjs          ← só published
 *   node platform/scripts/build-all.mjs --all    ← todas (dev local)
 */

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT  = path.resolve(__dirname, '../..')
const DIST  = path.resolve(__dirname, '../dist')

const includeAll = process.argv.includes('--all')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** A{NN}_UC07+01+02_09abr → a11-uc07-01-02-09abr */
function toSlug(dirName) {
  return dirName.toLowerCase().replace(/_/g, '-').replace(/\+/g, '-')
}

/** Parse simples de YAML linha a linha (sem dep externa) */
function parseYaml(content) {
  const result = {}
  for (const line of content.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const colonIdx = trimmed.indexOf(':')
    if (colonIdx === -1) continue
    const key = trimmed.slice(0, colonIdx).trim()
    const value = trimmed.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '')
    if (key && value) result[key] = value
  }
  return result
}

function readMeta(aulaDir) {
  const metaPath = path.join(aulaDir, 'meta.yaml')
  if (!fs.existsSync(metaPath)) return null
  return parseYaml(fs.readFileSync(metaPath, 'utf8'))
}

function log(msg, color = '') {
  const colors = { green: '\x1b[32m', yellow: '\x1b[33m', red: '\x1b[31m', cyan: '\x1b[36m', reset: '\x1b[0m' }
  console.log(`${colors[color] || ''}${msg}${colors.reset}`)
}

// ---------------------------------------------------------------------------
// 1. Descobrir pastas de aula
// ---------------------------------------------------------------------------

const AULAS_BASE = path.join(ROOT, 'aulas')
const AULA_PATTERN = /^A\d+/

// Escaneia aulas/{mes}/{dirName}/ e ordena pelo número da aula (A01, A02...)
const aulaDirs = []
if (fs.existsSync(AULAS_BASE)) {
  for (const mes of fs.readdirSync(AULAS_BASE).sort()) {
    const mesDir = path.join(AULAS_BASE, mes)
    if (!fs.statSync(mesDir).isDirectory()) continue
    for (const name of fs.readdirSync(mesDir).sort()) {
      if (!AULA_PATTERN.test(name)) continue
      if (!fs.statSync(path.join(mesDir, name)).isDirectory()) continue
      aulaDirs.push({ dirName: name, aulaDir: path.join(mesDir, name) })
    }
  }
}
// Garante ordem cronológica pelo número (A01 < A02 < ... independente do mês)
aulaDirs.sort((a, b) => {
  const nA = parseInt(a.dirName.match(/^A(\d+)/)?.[1] ?? '0')
  const nB = parseInt(b.dirName.match(/^A(\d+)/)?.[1] ?? '0')
  return nA - nB
})

log(`\n📚 Plataforma LMS — Build das Aulas`, 'cyan')
log(`   Root: ${ROOT}`, 'cyan')
log(`   Modo: ${includeAll ? 'ALL (dev)' : 'published only'}`, 'cyan')
log(`   Aulas encontradas: ${aulaDirs.length}\n`, 'cyan')

// ---------------------------------------------------------------------------
// 2. Filtrar por status e coletar metadados
// ---------------------------------------------------------------------------

const aulasMeta = []

for (const { dirName, aulaDir } of aulaDirs) {
  const meta = readMeta(aulaDir)

  if (!meta) {
    log(`  ⚠  ${dirName} — sem meta.yaml, pulando`, 'yellow')
    continue
  }

  const status = meta.status || 'draft'
  const isPublished = status === 'published'

  if (!includeAll && !isPublished) {
    log(`  ⏭  ${dirName} — status: ${status} (pulado)`, 'yellow')
    continue
  }

  const slug = toSlug(dirName)

  // Verificar colisão de slug
  const collision = aulasMeta.find(a => a.slug === slug)
  if (collision) {
    log(`  ⛔ Colisão de slug "${slug}": ${collision.dirName} e ${dirName} — abortando`, 'red')
    process.exit(1)
  }

  aulasMeta.push({ dirName, aulaDir, slug, meta, status })
  log(`  ✓  ${dirName} → /${slug}/  [${status}]`)
}

if (aulasMeta.length === 0) {
  log(`\n  Nenhuma aula para buildar. Use --all ou publique uma aula (status: published).`, 'yellow')
  // Gera aulas.json vazio para o portal não quebrar com 404
  if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true })
  fs.writeFileSync(path.join(DIST, 'aulas.json'), '[]', 'utf8')
  log(`\n  📄 aulas.json gerado: 0 aulas (nenhuma published)`, 'yellow')
  process.exit(0)
}

log(`\n  ${aulasMeta.length} aula(s) para buildar\n`, 'green')

// ---------------------------------------------------------------------------
// 3. Preparar pasta dist
// ---------------------------------------------------------------------------

if (!fs.existsSync(DIST)) {
  fs.mkdirSync(DIST, { recursive: true })
}

// ---------------------------------------------------------------------------
// 4. Buildar cada aula
// ---------------------------------------------------------------------------

const results = []

for (const { dirName, aulaDir, slug, meta } of aulasMeta) {
  log(`\n─────────────────────────────────────────`, 'cyan')
  log(`  Buildando: ${dirName}`, 'cyan')
  log(`  Slug: /${slug}/`, 'cyan')

  const aulaDistDir = path.join(DIST, slug)

  // Limpar dist anterior desta aula
  if (fs.existsSync(aulaDistDir)) {
    fs.rmSync(aulaDistDir, { recursive: true })
  }

  try {
    // O Slidev usa --base para definir o subpath e --out para o output
    execSync(
      `npx slidev build --base "/${slug}/" --out "${aulaDistDir}"`,
      { cwd: aulaDir, stdio: 'inherit' }
    )

    results.push({ dirName, slug, status: 'ok', meta })
    log(`  ✅ ${dirName} buildado com sucesso`, 'green')
  } catch (err) {
    log(`  ❌ Erro ao buildar ${dirName}: ${err.message}`, 'red')
    results.push({ dirName, slug, status: 'error', meta, error: err.message })
  }
}

// ---------------------------------------------------------------------------
// 5. Gerar aulas.json
// ---------------------------------------------------------------------------

const aulasJson = results
  .filter(r => r.status === 'ok')
  .map(({ dirName, slug, meta }) => {
    // Extrair UCs do nome do dir (ex: A11_UC07+01+02_09abr → ['07','01','02'])
    const ucMatch = dirName.match(/_UC([^_]+)_/)
    const ucs = ucMatch
      ? ucMatch[1].split('+').map(uc => uc.replace(/^0+/, '')).filter(Boolean)
      : []

    return {
      slug,
      dirName,
      numero: meta.aula || '',
      data: meta.date || '',
      titulo: meta.title || `Aula ${meta.aula || dirName}`,
      ucs,
      tipo: meta.tipo || 'normal',
      status: meta.status || 'published',
    }
  })
  // Ordenar por número da aula
  .sort((a, b) => Number(a.numero) - Number(b.numero))

fs.writeFileSync(
  path.join(DIST, 'aulas.json'),
  JSON.stringify(aulasJson, null, 2),
  'utf8'
)

log(`\n  📄 aulas.json gerado: ${aulasJson.length} aulas`, 'green')

// ---------------------------------------------------------------------------
// 6. Relatório final
// ---------------------------------------------------------------------------
const ok    = results.filter(r => r.status === 'ok').length
const error = results.filter(r => r.status === 'error').length

log(`\n═══════════════════════════════════════`, 'cyan')
log(`  ✅ OK:    ${ok} aula(s)`, 'green')
if (error > 0) {
  log(`  ❌ Erro:  ${error} aula(s)`, 'red')
  results.filter(r => r.status === 'error').forEach(r => {
    log(`     - ${r.dirName}`, 'red')
  })
}
log(`  📁 Output: ${DIST}`, 'cyan')
log(`\n  Próximo passo: npm run build:portal`, 'cyan')
log(`═══════════════════════════════════════\n`, 'cyan')

if (error > 0) process.exit(1)
