#!/usr/bin/env node
/**
 * check-overflow.mjs — Detecta overflow visual de slides Slidev
 *
 * Navega todos os slides via teclado (sem recarregar a SPA) e verifica
 * scroll overflow no elemento de conteúdo de cada slide.
 *
 * PRÉ-REQUISITO: dev server já rodando (npm run dev:aNNN)
 *
 * Uso:
 *   node scripts/check-overflow.mjs --slides=aulas/05mai/A21_.../slides.md
 *   node scripts/check-overflow.mjs --slides=aulas/05mai/A21_.../slides.md --port=3031
 *   node scripts/check-overflow.mjs --slides=aulas/05mai/A21_.../slides.md --wait=300
 */

import { chromium } from 'playwright'
import fs from 'fs'
import path from 'path'

const args = Object.fromEntries(
  process.argv.slice(2)
    .filter(a => a.startsWith('--'))
    .map(a => { const [k, v] = a.slice(2).split('='); return [k, v ?? true] })
)

const PORT     = args.port  ?? 3030
const WAIT_MS  = Number(args.wait ?? 350)
const BASE_URL = `http://localhost:${PORT}`
const SLIDES_PATH = args.slides ?? null

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
// Conta slides pelo arquivo .md
// Cada slide com frontmatter usa 2 "---" (abre e fecha).
// O frontmatter global do arquivo também usa 2 "---".
// Total de separadores = 2 * N_slides  →  N = (total - 1) / 2, arredondado
// ---------------------------------------------------------------------------
function countSlidesFromFile(slidesPath) {
  if (!slidesPath || !fs.existsSync(slidesPath)) return null
  const content = fs.readFileSync(slidesPath, 'utf8')
  const separators = content.split('\n').filter(l => l.trim() === '---').length
  // Fórmula empírica para slides.md com frontmatter por slide
  return Math.round(separators / 2) || null
}


// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function run() {
  console.log(`\n${c.cyan}${c.bold}╔══════════════════════════════════════════════════╗`)
  console.log(`║    Check Overflow — Senac Técnico IA             ║`)
  console.log(`╚══════════════════════════════════════════════════╝${c.reset}\n`)
  console.log(`Dev server: ${BASE_URL}`)

  // Conta slides pelo arquivo se disponível
  let total = SLIDES_PATH ? countSlidesFromFile(SLIDES_PATH) : null
  if (total) {
    console.log(`Slides (contados do arquivo): ${c.bold}${total}${c.reset}`)
  }

  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1280, height: 720 })

  // Captura console do browser — useOverflowGuard loga lá
  const overflowing = new Set()
  page.on('console', msg => {
    const text = msg.text()
    // Formato: "[OverflowGuard] Slide 5 está estourando a altura do layout!"
    const m = text.match(/\[OverflowGuard\].*?Slide\s+(\d+)/i)
    if (m) overflowing.add(Number(m[1]))
  })

  // Conecta ao dev server — carrega uma vez
  try {
    await page.goto(`${BASE_URL}/1`, { waitUntil: 'domcontentloaded', timeout: 10000 })
  } catch {
    console.error(`\n${c.red}❌ Não conseguiu conectar em ${BASE_URL}${c.reset}`)
    console.error(`   Inicie o dev server primeiro: npm run dev:aNNN\n`)
    await browser.close()
    process.exit(1)
  }

  // Aguarda Vue montar completamente
  await page.waitForTimeout(1500)

  // Se não temos o total pelo arquivo, tenta ler do DOM
  if (!total) {
    total = await page.evaluate(() => {
      const nav = document.querySelector('.slidev-nav-page')
      if (nav) {
        const m = nav.textContent?.match(/\d+\s*\/\s*(\d+)/)
        if (m) return Number(m[1])
      }
      return null
    })
    if (total) {
      console.log(`Slides (lido do DOM): ${c.bold}${total}${c.reset}`)
    } else {
      console.error(`${c.red}❌ Não conseguiu determinar o total de slides.${c.reset}`)
      console.error(`   Passe --slides=caminho/para/slides.md para contar pelo arquivo.\n`)
      await browser.close()
      process.exit(1)
    }
  }

  console.log(`Navegando... (${WAIT_MS}ms por slide)\n`)

  // Navega todos os slides via teclado — sem recarregar a SPA
  // Slide 1 já está carregado; aguarda o ResizeObserver do OverflowGuard disparar
  await page.waitForTimeout(WAIT_MS)
  process.stdout.write(`  Slide   1 / ${total}\n`)

  for (let i = 2; i <= total; i++) {
    process.stdout.write(`  Slide ${String(i).padStart(3, ' ')} / ${total}\n`)
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(WAIT_MS)
  }

  process.stdout.write('\n')
  await browser.close()

  // Relatório final
  const sorted = [...overflowing].sort((a, b) => a - b)

  if (sorted.length === 0) {
    console.log(`${c.green}${c.bold}✅ Nenhum overflow detectado em ${total} slides.${c.reset}\n`)
    process.exit(0)
  }

  console.log(`${c.yellow}${c.bold}⚠️  ${sorted.length} slide(s) com overflow:${c.reset}\n`)
  for (const n of sorted) {
    console.log(`   ${c.red}❌ Slide ${n}${c.reset}  →  ${BASE_URL}/${n}`)
  }
  console.log(`\n   Use @editor-slides --mode=overflow para corrigir.\n`)
  process.exit(1)
}

run().catch(err => {
  console.error(`\n${c.red}Erro inesperado:${c.reset}`, err.message)
  process.exit(1)
})
