#!/usr/bin/env node
/**
 * senac.mjs — CLI principal do monorepo senac-tecnico-ia
 *
 * Uso:  node scripts/senac.mjs
 *
 * Menu interativo que lista todas as operações do workspace e
 * delega para o script correspondente.
 *
 * Cross-platform: Linux + Windows (Node.js 18+)
 */

import { spawnSync } from 'child_process'
import readline from 'readline'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const c = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  cyan:   '\x1b[36m',
  green:  '\x1b[32m',
  yellow: '\x1b[33m',
  red:    '\x1b[31m',
  gray:   '\x1b[90m',
  dim:    '\x1b[2m',
}

// ---------------------------------------------------------------------------
// Definição das operações disponíveis
// ---------------------------------------------------------------------------

const OPS = [
  {
    label: 'Criar nova aula',
    desc:  'Scaffold completo a partir do neural-slides-template (interativo)',
    script: 'criar-aula.mjs',
    // Modo interativo: o script faz seus próprios prompts
    interactive: true,
  },
  {
    label: 'Renomear aula',
    desc:  'Renomeia dir, slug e scripts do package.json (ex: UCXX → UC05+01)',
    script: 'renomear-aula.mjs',
    // Coletamos os args aqui antes de chamar o script
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
    desc:  'Detecta slides com conteúdo além do limite de layout',
    script: 'check-overflow.mjs',
  },
  {
    label: 'Lint de slides',
    desc:  'Valida formatação e convenções nos slides.md',
    script: 'lint-slides.mjs',
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
  console.log(`${c.cyan}${c.bold}`)
  console.log(`  ╔════════════════════════════════════════════════════╗`)
  console.log(`  ║   SENAC Técnico em IA — CLI                       ║`)
  console.log(`  ╚════════════════════════════════════════════════════╝`)
  console.log(c.reset)
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
    // Windows precisa do shell para resolver 'node'
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

    // Abre um readline por iteração do loop para não conflitar com scripts filhos
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
    const _ask = (q) => ask(rl, q)

    const input = (await _ask(`  Escolha [1-${OPS.length}] ou q: `)).trim().toLowerCase()

    // Sair
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
    console.log(`\n${c.cyan}  → ${op.label}${c.reset}\n`)

    // Coletar args se necessário (ex: renomear-aula)
    let args = []
    if (op.getArgs) {
      try {
        args = await op.getArgs(_ask)
      } catch {
        rl.close()
        continue
      }
    }

    rl.close()
    // Aguarda readline ser totalmente fechado antes de spawnar o filho
    await new Promise(r => setImmediate(r))

    // Executa o script filho (herda stdin/stdout/stderr)
    const exitCode = runScript(op.script, args)

    if (exitCode !== 0) {
      console.log(`\n${c.red}  Script encerrou com código ${exitCode}.${c.reset}`)
    }

    // Pergunta se quer fazer outra operação
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
