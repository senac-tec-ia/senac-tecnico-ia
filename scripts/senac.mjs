#!/usr/bin/env node
/**
 * senac.mjs — CLI principal do monorepo senac-tecnico-ia
 *
 * Uso:  node scripts/senac.mjs
 *
 * Cross-platform: Linux + Windows (Node.js 18+)
 */

import { spawnSync } from 'child_process'
import readline from 'readline'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const c = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  cyan:   '\x1b[36m',
  green:  '\x1b[32m',
  yellow: '\x1b[33m',
  red:    '\x1b[31m',
  gray:   '\x1b[90m',
}

// ---------------------------------------------------------------------------
// Estado de sessão — path do slides.md selecionado, persiste durante o loop
// ---------------------------------------------------------------------------
let sessionSlidesPath = null  // caminho absoluto para slides.md da aula ativa

// ---------------------------------------------------------------------------
// Seletor de aula — lista meses → lista aulas → retorna path absoluto do slides.md
// ---------------------------------------------------------------------------
async function pickSlidesPath(ask) {
  const aulasDir = path.join(ROOT, 'aulas')

  // Lista meses disponíveis (ex: 02fev, 03mar, 04abr, 05mai)
  const months = fs.readdirSync(aulasDir, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name)
    .sort()

  if (months.length === 0) {
    console.log(`${c.red}  Nenhuma pasta de mês encontrada em aulas/.${c.reset}`)
    return null
  }

  // Seleciona mês
  console.log(`\n${c.cyan}  ┌─ Meses disponíveis ─────────────────────┐${c.reset}`)
  months.forEach((m, i) => {
    console.log(`  ${c.yellow}${String(i + 1).padStart(2)}.${c.reset} ${m}`)
  })
  console.log(`${c.cyan}  └─────────────────────────────────────────┘${c.reset}`)

  const mInput = (await ask(`  ${c.yellow}Mês${c.reset} [1-${months.length}]: `)).trim()
  const mIdx = parseInt(mInput, 10) - 1
  if (isNaN(mIdx) || mIdx < 0 || mIdx >= months.length) {
    console.log(`${c.red}  Seleção inválida.${c.reset}`)
    return null
  }
  const monthDir = path.join(aulasDir, months[mIdx])

  // Lista aulas do mês selecionado
  const aulas = fs.readdirSync(monthDir, { withFileTypes: true })
    .filter(e => e.isDirectory() && fs.existsSync(path.join(monthDir, e.name, 'slides.md')))
    .map(e => e.name)
    .sort()

  if (aulas.length === 0) {
    console.log(`${c.red}  Nenhuma aula com slides.md encontrada em ${months[mIdx]}/.${c.reset}`)
    return null
  }

  console.log(`\n${c.cyan}  ┌─ Aulas em ${months[mIdx]} ${'─'.repeat(Math.max(0, 30 - months[mIdx].length))}┐${c.reset}`)
  aulas.forEach((a, i) => {
    console.log(`  ${c.yellow}${String(i + 1).padStart(2)}.${c.reset} ${a}`)
  })
  console.log(`${c.cyan}  └─────────────────────────────────────────┘${c.reset}`)

  const aInput = (await ask(`  ${c.yellow}Aula${c.reset} [1-${aulas.length}]: `)).trim()
  const aIdx = parseInt(aInput, 10) - 1
  if (isNaN(aIdx) || aIdx < 0 || aIdx >= aulas.length) {
    console.log(`${c.red}  Seleção inválida.${c.reset}`)
    return null
  }

  return path.join(monthDir, aulas[aIdx], 'slides.md')
}

// ---------------------------------------------------------------------------
// Resolve o slides.md para operações que precisam de um arquivo
// Reutiliza sessionSlidesPath se já definido, perguntando se é o mesmo
// ---------------------------------------------------------------------------
async function resolveSlidesPath(ask) {
  if (sessionSlidesPath) {
    const rel = path.relative(ROOT, sessionSlidesPath)
    console.log(`\n  ${c.gray}Aula ativa: ${c.bold}${rel}${c.reset}`)
    const reuse = (await ask(`  Usar a mesma aula? [S/n]: `)).trim().toLowerCase()
    if (reuse !== 'n' && reuse !== 'nao' && reuse !== 'não') {
      return sessionSlidesPath
    }
  }
  const chosen = await pickSlidesPath(ask)
  if (chosen) sessionSlidesPath = chosen
  return chosen
}

// ---------------------------------------------------------------------------
// Definição das operações disponíveis
// ---------------------------------------------------------------------------
const OPS = [
  {
    label: 'Criar nova aula',
    desc:  'Scaffold completo a partir do neural-slides-template (interativo)',
    script: 'criar-aula.mjs',
    interactive: true,
  },
  {
    label: 'Renomear aula',
    desc:  'Renomeia dir, slug e scripts do package.json (ex: UCXX → UC05+01)',
    script: 'renomear-aula.mjs',
    getArgs: async (ask) => {
      console.log(`${c.gray}  Exemplo: A21_UCXX_07mai  →  A21_UC05+01+02_07mai${c.reset}\n`)
      const old = (await ask(`${c.yellow}Nome atual${c.reset} (ex: A21_UCXX_07mai): `)).trim()
      const neo = (await ask(`${c.yellow}Novo nome${c.reset}  (ex: A21_UC05+01+02_07mai): `)).trim()
      return [old, neo]
    },
  },
  {
    label: 'Validar horas-aula (HA)',
    desc:  'Verifica se o total de HA por UC bate com o esperado',
    script: 'validate-ha.mjs',
  },
  {
    label: 'Verificar overflow de slides',
    desc:  'Detecta slides com conteúdo além do limite de layout (dev server obrigatório)',
    script: 'check-overflow.mjs',
    getArgs: async (ask) => {
      const slides = await resolveSlidesPath(ask)
      if (!slides) return null   // sinaliza cancelamento
      const port = (await ask(`  ${c.yellow}Porta do dev server${c.reset} (Enter = 3030): `)).trim()
      const args = [`--slides=${slides}`]
      if (port) args.push(`--port=${port}`)
      return args
    },
  },
  {
    label: 'Lint de slides',
    desc:  'Valida formatação e convenções nos slides.md',
    script: 'lint-slides.mjs',
    getArgs: async (ask) => {
      const slides = await resolveSlidesPath(ask)
      if (!slides) return null
      return [slides]
    },
  },
  {
    label: 'Gerar dashboard',
    desc:  'Gera dashboard HTML com status de todas as aulas',
    script: 'generate-dashboard.mjs',
  },
  {
    label: 'Revisar staged (pre-commit)',
    desc:  'Review semântico dos arquivos em staging antes do commit',
    script: 'review-staged.mjs',
  },
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function ask(rl, question) {
  return new Promise(resolve => rl.question(question, resolve))
}

function printMenu() {
  console.clear()
  const active = sessionSlidesPath
    ? `${c.gray}  Aula ativa: ${c.bold}${path.relative(ROOT, sessionSlidesPath)}${c.reset}`
    : `${c.gray}  Nenhuma aula selecionada${c.reset}`

  console.log(`${c.cyan}${c.bold}`)
  console.log(`  ╔════════════════════════════════════════════════════╗`)
  console.log(`  ║   SENAC Técnico em IA — CLI                       ║`)
  console.log(`  ╚════════════════════════════════════════════════════╝`)
  console.log(c.reset)
  console.log(`  ${active}\n`)
  OPS.forEach((op, i) => {
    const num = String(i + 1).padStart(2)
    console.log(`  ${c.yellow}${num}.${c.reset} ${c.bold}${op.label}${c.reset}`)
    console.log(`      ${c.gray}${op.desc}${c.reset}`)
  })
  console.log(`\n  ${c.gray} q.  Sair${c.reset}\n`)
}

function runScript(scriptName, args = []) {
  const scriptPath = path.join(__dirname, scriptName)
  const result = spawnSync('node', [scriptPath, ...args], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })
  return result.status ?? 0
}

// ---------------------------------------------------------------------------
// Main loop
// ---------------------------------------------------------------------------
async function main() {
  while (true) {
    printMenu()

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
    const _ask = (q) => ask(rl, q)

    const input = (await _ask(`  Escolha [1-${OPS.length}] ou q: `)).trim().toLowerCase()

    if (input === 'q' || input === 'quit' || input === 'sair' || input === '') {
      rl.close()
      console.log(`\n  ${c.gray}Até mais!${c.reset}\n`)
      break
    }

    const idx = parseInt(input, 10) - 1
    if (isNaN(idx) || idx < 0 || idx >= OPS.length) {
      rl.close()
      console.log(`\n  ${c.red}Opção inválida. Digite um número de 1 a ${OPS.length}.${c.reset}`)
      await pause(1200)
      continue
    }

    const op = OPS[idx]
    console.log(`\n${c.cyan}  → ${op.label}${c.reset}`)

    let args = []
    if (op.getArgs) {
      try {
        const result = await op.getArgs(_ask)
        if (result === null) {   // cancelado pelo seletor
          rl.close()
          await pause(800)
          continue
        }
        args = result
      } catch {
        rl.close()
        continue
      }
    }

    rl.close()
    await new Promise(r => setImmediate(r))

    console.log()
    const exitCode = runScript(op.script, args)

    if (exitCode !== 0) {
      console.log(`\n${c.red}  Script encerrou com código ${exitCode}.${c.reset}`)
    }

    const rl2 = readline.createInterface({ input: process.stdin, output: process.stdout })
    const cont = (await ask(rl2, `\n  Fazer outra operação? [S/n]: `)).trim().toLowerCase()
    rl2.close()

    if (cont === 'n' || cont === 'nao' || cont === 'não') {
      console.log(`\n  ${c.gray}Até mais!${c.reset}\n`)
      break
    }
  }
}

function pause(ms) {
  return new Promise(r => setTimeout(r, ms))
}

main().catch(err => {
  console.error(`\n${c.red}✗ Erro inesperado:${c.reset}`, err.message)
  process.exit(1)
})
