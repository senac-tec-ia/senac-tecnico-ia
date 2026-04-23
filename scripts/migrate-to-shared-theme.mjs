#!/usr/bin/env node
/**
 * migrate-to-shared-theme.mjs
 *
 * Migra todas as aulas de "cópia local de tudo" para usar o
 * neural-slides-template como tema compartilhado.
 *
 * Para cada aula em aulas/{mes}/{nome}/:
 *   1. Compara components/, layouts/, styles/, composables/ com o template
 *   2. Se houver diferença "perigosa" (arquivo exclusivo da aula ou conteúdo diferente),
 *      loga um AVISO e PULA a deleção daquela pasta — não deleta nada sem certeza
 *   3. Se tudo for idêntico ao template, deleta a pasta local
 *   4. Atualiza slides.md e slides-demo.md com theme: ../../../neural-slides-template
 *
 * Uso:
 *   node scripts/migrate-to-shared-theme.mjs          ← dry-run (mostra o que faria)
 *   node scripts/migrate-to-shared-theme.mjs --apply  ← aplica as mudanças
 */

import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const TEMPLATE = path.resolve(ROOT, 'neural-slides-template')
const AULAS_BASE = path.resolve(ROOT, 'aulas')

const APPLY = process.argv.includes('--apply')
const THEME_PATH = '../../../neural-slides-template'

// Pastas que serão migradas para o tema compartilhado
const SHARED_DIRS = ['components', 'layouts', 'styles', 'composables']

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const c = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  bold: '\x1b[1m',
}

function log(msg, color = '') { console.log(`${c[color] || ''}${msg}${c.reset}`) }
function bold(msg) { return `${c.bold}${msg}${c.reset}` }

function md5(filePath) {
  return crypto.createHash('md5').update(fs.readFileSync(filePath)).digest('hex')
}

/**
 * Compara recursivamente os arquivos de uma pasta da aula com a pasta equivalente no template.
 * Retorna { identical: bool, diffs: string[] }
 * - diffs lista arquivos que existem só na aula (override) ou que têm conteúdo diferente
 */
function compareDirWithTemplate(aulaDir, dirName) {
  const aulaDirPath = path.join(aulaDir, dirName)
  const tplDirPath = path.join(TEMPLATE, dirName)

  if (!fs.existsSync(aulaDirPath)) return { exists: false, identical: true, diffs: [] }
  if (!fs.existsSync(tplDirPath)) {
    // Pasta existe na aula mas NÃO no template — é override puro, não migrar
    const files = walkFiles(aulaDirPath).map(f => path.relative(aulaDir, f))
    return { exists: true, identical: false, diffs: files.map(f => `ONLY_IN_AULA: ${f}`) }
  }

  const diffs = []
  const aulaFiles = walkFiles(aulaDirPath)

  for (const aulaFile of aulaFiles) {
    const rel = path.relative(aulaDirPath, aulaFile)
    const tplFile = path.join(tplDirPath, rel)

    if (!fs.existsSync(tplFile)) {
      diffs.push(`ONLY_IN_AULA: ${dirName}/${rel}`)
      continue
    }

    if (md5(aulaFile) !== md5(tplFile)) {
      diffs.push(`MODIFIED: ${dirName}/${rel}`)
    }
  }

  // Arquivos que existem no template mas não na aula são irrelevantes (a aula vai herdar)
  return { exists: true, identical: diffs.length === 0, diffs }
}

function walkFiles(dir) {
  const results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) results.push(...walkFiles(full))
    else results.push(full)
  }
  return results
}

function patchTheme(filePath, themeValue) {
  if (!fs.existsSync(filePath)) return false
  const original = fs.readFileSync(filePath, 'utf8')
  // Substitui qualquer linha que comece com "theme:" dentro do frontmatter
  const patched = original.replace(/^(theme:\s*).*$/m, `$1${themeValue}`)
  if (patched === original) return false
  if (APPLY) fs.writeFileSync(filePath, patched, 'utf8')
  return true
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

log(`\n${bold('migrate-to-shared-theme')} — Neural Slides`, 'cyan')
log(`   Template: ${TEMPLATE}`, 'gray')
log(`   Modo: ${APPLY ? bold('APPLY (vai modificar arquivos)') : bold('DRY-RUN (simulação — use --apply para aplicar)')}`, APPLY ? 'yellow' : 'cyan')
log('')

if (!fs.existsSync(TEMPLATE)) {
  log(`ERRO: neural-slides-template não encontrado em ${TEMPLATE}`, 'red')
  process.exit(1)
}

// Descobrir todas as aulas
const aulaDirs = []
for (const mes of fs.readdirSync(AULAS_BASE).sort()) {
  const mesDir = path.join(AULAS_BASE, mes)
  if (!fs.statSync(mesDir).isDirectory()) continue
  for (const name of fs.readdirSync(mesDir).sort()) {
    if (!/^A\d+/.test(name)) continue
    const aulaDir = path.join(mesDir, name)
    if (!fs.statSync(aulaDir).isDirectory()) continue
    aulaDirs.push({ name, aulaDir })
  }
}

log(`Aulas encontradas: ${aulaDirs.length}\n`, 'cyan')

let countOk = 0
let countSkipped = 0
let countWarning = 0

for (const { name, aulaDir } of aulaDirs) {
  log(`─── ${bold(name)}`, 'cyan')

  // 1. Analisar cada pasta compartilhada
  const toDelete = []
  const toKeep = []

  for (const dir of SHARED_DIRS) {
    const { exists, identical, diffs } = compareDirWithTemplate(aulaDir, dir)
    if (!exists) {
      log(`    ${dir}/  não existe (já migrado ou aula mais antiga)`, 'gray')
      continue
    }
    if (identical) {
      log(`    ${dir}/  idêntico ao template → ${APPLY ? 'DELETAR' : 'vai deletar'}`, 'green')
      toDelete.push(dir)
    } else {
      log(`    ${dir}/  DIFERENTE — mantendo local:`, 'yellow')
      for (const d of diffs) log(`       ⚠  ${d}`, 'yellow')
      toKeep.push({ dir, diffs })
    }
  }

  // 2. Aplicar deleção das pastas idênticas
  if (APPLY) {
    for (const dir of toDelete) {
      fs.rmSync(path.join(aulaDir, dir), { recursive: true, force: true })
    }
  }

  // 3. Atualizar theme no slides.md
  const slidesMd = path.join(aulaDir, 'slides.md')
  const patched = patchTheme(slidesMd, THEME_PATH)
  if (patched) {
    log(`    slides.md  theme: → ${THEME_PATH}`, APPLY ? 'green' : 'gray')
  } else {
    log(`    slides.md  theme: já correto ou não encontrado`, 'gray')
  }

  // 4. Atualizar theme no slides-demo.md (se existir)
  const slidesDemoMd = path.join(aulaDir, 'slides-demo.md')
  const patchedDemo = patchTheme(slidesDemoMd, THEME_PATH)
  if (patchedDemo) {
    log(`    slides-demo.md  theme: → ${THEME_PATH}`, APPLY ? 'green' : 'gray')
  }

  // Status final da aula
  if (toKeep.length > 0) {
    log(`    STATUS: ⚠  PARCIAL — ${toKeep.length} pasta(s) com override local mantidas`, 'yellow')
    countWarning++
  } else if (toDelete.length === 0 && !patched && !patchedDemo) {
    log(`    STATUS: já migrada`, 'gray')
    countSkipped++
  } else {
    log(`    STATUS: ✓ OK`, 'green')
    countOk++
  }
  log('')
}

// ---------------------------------------------------------------------------
// Sumário
// ---------------------------------------------------------------------------
log('═══════════════════════════════════', 'cyan')
log(`  Migradas:  ${countOk}`, 'green')
log(`  Avisos:    ${countWarning}`, countWarning > 0 ? 'yellow' : 'gray')
log(`  Puladas:   ${countSkipped}`, 'gray')
log('═══════════════════════════════════', 'cyan')

if (!APPLY) {
  log(`\n  ⚠  Este foi um DRY-RUN. Nada foi modificado.`, 'yellow')
  log(`     Para aplicar: node scripts/migrate-to-shared-theme.mjs --apply\n`, 'yellow')
} else {
  log(`\n  ✓  Migração aplicada.`, 'green')
  log(`     Próximo passo: teste 'npm run dev' em uma aula migrada.\n`, 'green')
}
