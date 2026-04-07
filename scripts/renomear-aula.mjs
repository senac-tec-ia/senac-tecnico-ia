#!/usr/bin/env node
/**
 * renomear-aula.mjs
 * Renomeia uma pasta de aula para o novo padrão A{NN}_UC{XX}+{XX}_{DD}{MMM}
 *
 * Uso:
 *   node scripts/renomear-aula.mjs <nome-antigo> <nome-novo>
 *   node scripts/renomear-aula.mjs A11 A11_UCXX_09abr
 *   node scripts/renomear-aula.mjs A11_UCXX_09abr A11_UC07+01+02_09abr
 */

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Converte nome do dir em slug de URL: A11_UC07+01+02_09abr → a11-uc07-01-02-09abr */
function toSlug(dirName) {
  return dirName.toLowerCase().replace(/_/g, '-').replace(/\+/g, '-')
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8')
}

function run(cmd, cwd = ROOT) {
  try {
    execSync(cmd, { cwd, stdio: 'pipe' })
    return true
  } catch {
    return false
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const [, , oldName, newName] = process.argv

if (!oldName || !newName) {
  console.error('Uso: node scripts/renomear-aula.mjs <nome-antigo> <nome-novo>')
  process.exit(1)
}

const oldDir = path.join(ROOT, oldName)
const newDir = path.join(ROOT, newName)
const oldSlug = toSlug(oldName)
const newSlug = toSlug(newName)

// --- Validações ---
if (!fs.existsSync(oldDir)) {
  console.error(`Erro: pasta "${oldName}" não encontrada.`)
  process.exit(1)
}
if (fs.existsSync(newDir)) {
  console.error(`Erro: pasta "${newName}" já existe.`)
  process.exit(1)
}

console.log(`\nRenomeando: ${oldName} → ${newName}`)
console.log(`  Slug antigo: ${oldSlug}`)
console.log(`  Slug novo:   ${newSlug}\n`)

// --- 1. Renomear diretório ---
fs.renameSync(oldDir, newDir)
console.log(`[1/4] Dir renomeado ✓`)

// --- 2. Atualizar name no package.json da aula ---
const aulaPkgPath = path.join(newDir, 'package.json')
if (fs.existsSync(aulaPkgPath)) {
  const pkg = readJson(aulaPkgPath)
  pkg.name = newSlug
  writeJson(aulaPkgPath, pkg)
  console.log(`[2/4] ${newName}/package.json — name: "${newSlug}" ✓`)
} else {
  console.warn(`[2/4] package.json não encontrado na pasta da aula — pulando`)
}

// --- 3. Atualizar root package.json (scripts dev/build/export) ---
const rootPkgPath = path.join(ROOT, 'package.json')
const rootPkg = readJson(rootPkgPath)
const scripts = rootPkg.scripts

const scriptKeys = ['dev', 'build', 'export']
let updatedCount = 0

for (const key of scriptKeys) {
  const oldKey = `${key}:${oldSlug}`
  const newKey = `${key}:${newSlug}`
  if (scripts[oldKey] !== undefined) {
    scripts[newKey] = scripts[oldKey].replace(`--workspace=${oldSlug}`, `--workspace=${newSlug}`)
    delete scripts[oldKey]
    updatedCount++
  }
}

if (updatedCount > 0) {
  writeJson(rootPkgPath, rootPkg)
  console.log(`[3/4] package.json raiz — ${updatedCount} script(s) atualizados ✓`)
} else {
  // Adiciona scripts caso não existam ainda
  scripts[`dev:${newSlug}`]    = `npm run dev --workspace=${newSlug}`
  scripts[`build:${newSlug}`]  = `npm run build --workspace=${newSlug}`
  scripts[`export:${newSlug}`] = `npm run export --workspace=${newSlug}`
  writeJson(rootPkgPath, rootPkg)
  console.log(`[3/4] package.json raiz — scripts criados para "${newSlug}" ✓`)
}

// --- 4. Tentar renomear repositório no GitHub ---
const ghAvailable = run('gh auth status')
if (ghAvailable) {
  // Detectar org: lê remote origin do repo da aula se existir
  const aula_git = path.join(newDir, '.git')
  if (fs.existsSync(aula_git)) {
    console.log(`[4/4] Tentando renomear repo no GitHub...`)
    const orgRepo = `senac-tec-ia/${oldName}`
    const renamed = run(`gh repo rename ${newName} --repo ${orgRepo} --yes`)
    if (renamed) {
      console.log(`[4/4] GitHub repo renomeado: ${orgRepo} → senac-tec-ia/${newName} ✓`)
      // Atualizar remote no repo local
      run(`git remote set-url origin https://github.com/senac-tec-ia/${newName}.git`, newDir)
    } else {
      console.warn(`[4/4] GitHub rename falhou (repo pode não existir ainda) — faça manualmente se necessário`)
    }
  } else {
    console.log(`[4/4] Sem .git na pasta da aula — pulando rename no GitHub`)
  }
} else {
  console.warn(`[4/4] gh não autenticado — faça "gh auth login" e depois:`)
  console.warn(`      gh repo rename ${newName} --repo senac-tec-ia/${oldName} --yes`)
}

console.log(`\n✅ Concluído: ${newName} (slug: ${newSlug})`)
console.log(`   dev:   npm run dev:${newSlug}`)
console.log(`   build: npm run build:${newSlug}\n`)
