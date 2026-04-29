#!/usr/bin/env node
/**
 * check-overflow.mjs — Detecta overflow visual de slides Slidev
 *
 * Usa Playwright + o useOverflowGuard já embutido no tema para navegar
 * todos os slides headless e reportar quais ultrapassam a altura do layout.
 *
 * PRÉ-REQUISITO: dev server já rodando (npm run dev:aNNN)
 *
 * Uso:
 *   node scripts/check-overflow.mjs                  # porta 3030 (padrão)
 *   node scripts/check-overflow.mjs --port=3031
 *   node scripts/check-overflow.mjs --port=3031 --wait=600  # ms por slide (padrão 400)
 */

import { chromium } from 'playwright'

const args = Object.fromEntries(
  process.argv.slice(2)
    .filter(a => a.startsWith('--'))
    .map(a => { const [k, v] = a.slice(2).split('='); return [k, v ?? true] })
)

const PORT = args.port ?? 3030
const WAIT_MS = Number(args.wait ?? 400)
const BASE_URL = `http://localhost:${PORT}`

async function getTotalSlides(page) {
  // Slidev expõe o total de slides no DOM via data attribute ou na nav
  const total = await page.evaluate(() => {
    // Tenta pelo atributo slidev injeta no <html>
    const el = document.querySelector('[slidev-total]')
    if (el) return Number(el.getAttribute('slidev-total'))
    // Fallback: conta os slides pelo presença da rota atual
    const nav = document.querySelector('.slidev-nav-page')
    if (nav) {
      const match = nav.textContent?.match(/\d+\s*\/\s*(\d+)/)
      if (match) return Number(match[1])
    }
    // Fallback: REST API do Slidev
    return null
  })
  if (total) return total

  // Tenta a REST API do Slidev
  try {
    const res = await page.evaluate(async (url) => {
      const r = await fetch(`${url}/api/total`)
      if (r.ok) return r.json()
      return null
    }, BASE_URL)
    if (res?.total) return res.total
  } catch (_) {}

  // Fallback binário: navega até 404 para descobrir o total
  return await probeTotal(page)
}

async function probeTotal(page) {
  let lo = 1, hi = 200
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2)
    await page.goto(`${BASE_URL}/${mid}`, { waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => {})
    const exists = await page.evaluate(() => !document.querySelector('.slidev-error, #error-overlay'))
    if (exists) lo = mid
    else hi = mid - 1
  }
  return lo
}

async function getOverflowingSlides(page) {
  // Lê o store exposto pelo GlobalBottom.vue via DOM
  const panelText = await page.$eval('.overflow-panel-slides', el => el.textContent).catch(() => null)
  if (!panelText) return []
  // Formato: "slides: 3, 7, 12"
  return panelText.replace('slides:', '').split(',').map(s => Number(s.trim())).filter(Boolean)
}

async function run() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  // Viewport padrão Slidev
  await page.setViewportSize({ width: 1280, height: 720 })

  console.log(`\n╔══════════════════════════════════════════════════╗`)
  console.log(`║    Check Overflow — Senac Técnico IA             ║`)
  console.log(`╚══════════════════════════════════════════════════╝\n`)
  console.log(`Dev server: ${BASE_URL}`)

  // Conecta ao dev server
  try {
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 8000 })
  } catch {
    console.error(`\n❌ Não conseguiu conectar em ${BASE_URL}`)
    console.error(`   Inicie o dev server primeiro: npm run dev:aNNN\n`)
    await browser.close()
    process.exit(1)
  }

  await page.waitForTimeout(800) // aguarda Vue montar

  const total = await getTotalSlides(page)
  console.log(`Total de slides: ${total}`)
  console.log(`Navegando... (${WAIT_MS}ms por slide)\n`)

  // Navega todos os slides em sequência
  for (let i = 1; i <= total; i++) {
    process.stdout.write(`\r  Slide ${String(i).padStart(3, ' ')} / ${total}`)
    await page.goto(`${BASE_URL}/${i}`, { waitUntil: 'domcontentloaded', timeout: 8000 })
    await page.waitForTimeout(WAIT_MS) // ResizeObserver precisa de tempo para disparar
  }

  process.stdout.write('\n\n')

  // Lê resultado acumulado na store (via GlobalBottom.vue no DOM)
  const overflowing = await getOverflowingSlides(page)

  await browser.close()

  // Relatório
  if (overflowing.length === 0) {
    console.log(`✅ Nenhum overflow detectado em ${total} slides.\n`)
    process.exit(0)
  }

  console.log(`⚠️  ${overflowing.length} slide(s) com overflow visual detectado:\n`)
  for (const n of overflowing) {
    console.log(`   ❌ Slide ${n}`)
  }
  console.log(`\n   → Abra ${BASE_URL}/${overflowing[0]} para inspecionar.`)
  console.log(`   → Use @editor-slides --mode=overflow para corrigir.\n`)

  process.exit(1)
}

run().catch(err => {
  console.error('\nErro inesperado:', err.message)
  process.exit(1)
})
