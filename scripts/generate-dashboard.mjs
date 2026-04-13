#!/usr/bin/env node
/**
 * generate-dashboard.mjs — Gera estado-atual.md a partir dos 9 contextos
 *
 * Lê todos os contexto-*.md, extrai HA dado/restante, último tópico,
 * e gera uma tabela-resumo em estado-atual.md na raiz.
 *
 * Uso: node scripts/generate-dashboard.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(import.meta.dirname, '..')
const CONTEXTOS_DIR = join(ROOT, '.github/agents/contextos')
const OUTPUT = join(ROOT, 'estado-atual.md')

const UC_MAP = {
  'fundamentos-de-computacao': { uc: 'UC01', nome: 'Fund. Computação' },
  'ingles-instrumental': { uc: 'UC02', nome: 'Inglês Instrumental' },
  'fundamentos-matematicos': { uc: 'UC03', nome: 'Fund. Matemáticos' },
  'fundamentos-e-conceitos-de-ia': { uc: 'UC04', nome: 'Conceitos de IA' },
  'python-para-ia': { uc: 'UC05', nome: 'Python para IA' },
  'arquitetura-computadores-gpu': { uc: 'UC06', nome: 'Arquitetura e GPU' },
  'transformacao-digital': { uc: 'UC07', nome: 'Transformação Digital' },
  'banco-de-dados': { uc: 'UC08', nome: 'Banco de Dados' },
  'estatistica-aplicada': { uc: 'UC09', nome: 'Estatística Aplicada' },
}

function parseContext(slug) {
  const filepath = join(CONTEXTOS_DIR, `contexto-${slug}.md`)
  let content
  try {
    content = readFileSync(filepath, 'utf8')
  } catch {
    return null
  }

  const result = { slug }

  // Extract T1 row from Estado Geral: | T1 | alocado | dado | restante |
  const t1Match = content.match(/\|\s*T1\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|/)
  if (t1Match) {
    result.t1Alocado = parseInt(t1Match[1])
    result.t1Dado = parseInt(t1Match[2])
    result.t1Restante = parseInt(t1Match[3])
  }

  // Extract last aula from "Resumo por Aula" or "Aulas Realizadas"
  const aulaMatches = [...content.matchAll(/\|\s*(A\d{2})\s*\|/g)]
  if (aulaMatches.length > 0) {
    result.ultimaAula = aulaMatches[aulaMatches.length - 1][1]
  }

  // Extract first pending topic from "Tópicos Pendentes"
  const pendingSection = content.match(/## Tópicos Pendentes[\s\S]*?\n\|[^\n]+\n\|[-|\s]+\n([\s\S]*?)(?=\n---|\n## |\n$)/)
  if (pendingSection) {
    const firstRow = pendingSection[1].match(/\|[^|]+\|\s*([^|]+)\|/)
    if (firstRow) {
      result.proximoTopico = firstRow[1].trim().substring(0, 50)
    }
  }

  // Extract indicators status
  const indicatorMatches = [...content.matchAll(/\|\s*(\d+)\s*\|[^|]+\|\s*\*{0,2}([^|*]+)\*{0,2}\s*\|/g)]
  const statuses = indicatorMatches.map(m => m[2].trim())
  result.indicadoresTotal = statuses.length
  result.indicadoresAtivos = statuses.filter(s =>
    s.toLowerCase().includes('andamento') || s.toLowerCase().includes('progresso')
  ).length
  result.indicadoresPendentes = statuses.filter(s =>
    s.toLowerCase().includes('pendente')
  ).length

  // Extract feedback entries
  const feedbackSection = content.match(/## Feedback de Campo[\s\S]*?\n\|[^\n]+\n\|[-|\s]+\n([\s\S]*?)(?=\n---|\n## |\n$)/)
  if (feedbackSection) {
    const feedbackRows = feedbackSection[1].match(/\|/g)
    result.feedbackEntries = feedbackRows ? Math.floor(feedbackRows.length / 3) : 0
  } else {
    result.feedbackEntries = 0
  }

  return result
}

// ── Main ──
const now = new Date().toISOString().slice(0, 10)
const rows = []

for (const [slug, meta] of Object.entries(UC_MAP)) {
  const ctx = parseContext(slug)
  if (!ctx) {
    rows.push(`| ${meta.uc} | ${meta.nome} | ? | ? | ? | ? | ? |`)
    continue
  }

  const pct = ctx.t1Alocado ? Math.round((ctx.t1Dado / ctx.t1Alocado) * 100) : '?'
  const bar = ctx.t1Alocado
    ? '█'.repeat(Math.round(pct / 10)) + '░'.repeat(10 - Math.round(pct / 10))
    : '??????????'

  rows.push(`| ${meta.uc} | ${meta.nome} | ${ctx.t1Dado || 0}/${ctx.t1Alocado || '?'} | ${bar} ${pct}% | ${ctx.ultimaAula || '-'} | ${ctx.proximoTopico || '-'} | ${ctx.indicadoresAtivos}✅ ${ctx.indicadoresPendentes}⏳ |`)
}

// Read AULAS-DADAS.md for last aula
let ultimaAulaGlobal = '?'
try {
  const aulasDadas = readFileSync(join(ROOT, 'AULAS-DADAS.md'), 'utf8')
  const allAulas = [...aulasDadas.matchAll(/## (A\d{2}) — (\d{2}\/\d{2}\/\d{4})/g)]
  if (allAulas.length > 0) {
    const last = allAulas[allAulas.length - 1]
    ultimaAulaGlobal = `${last[1]} (${last[2]})`
  }
} catch {}

// Read AULAS-DESENVOLVIMENTO-PROG.md for sprint
let sprintAtual = '?'
try {
  const devProg = readFileSync(join(ROOT, 'AULAS-DESENVOLVIMENTO-PROG.md'), 'utf8')
  const sprintMatch = devProg.match(/## Sprint atual:\s*(A\d+)/)
  if (sprintMatch) sprintAtual = sprintMatch[1]
} catch {}

const output = `# Estado Atual do Curso — Dashboard

> **Gerado automaticamente** por \`scripts/generate-dashboard.mjs\` em ${now}.
> NÃO editar manualmente — será sobrescrito na próxima execução.

---

## Visão Geral

| Campo | Valor |
|---|---|
| Última aula ministrada | ${ultimaAulaGlobal} |
| Sprint de produção | ${sprintAtual} |
| Data de geração | ${now} |

---

## HA por Disciplina — T1

| UC | Disciplina | HA Dado/Aloc | Progresso | Última Aula | Próximo Tópico | Indicadores |
|---|---|---|---|---|---|---|
${rows.join('\n')}

---

## Legenda

- **HA Dado/Aloc**: Horas-aula ministradas / alocadas para T1
- **Progresso**: Barra visual (cada █ = 10%)
- **Indicadores**: ✅ = em andamento, ⏳ = pendente

---

*Para detalhes de uma UC específica, leia \`.github/agents/contextos/contexto-{slug}.md\`*
`

writeFileSync(OUTPUT, output, 'utf8')
console.log(`✅ Dashboard gerado em estado-atual.md (${now})`)
