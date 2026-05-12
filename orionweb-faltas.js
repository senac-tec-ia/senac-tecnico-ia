// orionweb-faltas.js
// Gera tabela markdown de faltas totais: aluno x disciplina
//
// Uso:
//   node orionweb-faltas.js          → tabela pivot (aluno x UC)
//   node orionweb-faltas.js --flat   → tabela longa (disciplina | aluno | faltas)
//
// Progresso vai para stderr; tabela vai para stdout.
// Pipe para arquivo: node orionweb-faltas.js > faltas.md

// ─── CONFIGURAÇÃO ─────────────────────────────────────────────────────────────
const UNI_COD = 9
const TUR_COD = "202600029"
const BASE    = "https://www.pr.senac.br/orionweb/site"

// ATUALIZAR: cole aqui o cookie copiado do DevTools (F12 → Network → Cookie)
const COOKIES = "ASPSESSIONIDAGAQSCAD=AOHDGIIBBJBOLHFOCNHHILHE; tipoLogin=1"
// ──────────────────────────────────────────────────────────────────────────────

const MODE_FLAT = process.argv.includes("--flat")

// ─── MAPA DE ALUNOS ───────────────────────────────────────────────────────────
const ALUNOS = {
  "9034470": "AGATHA SEIBEL SOUZA",
  "9034462": "ANA CLARA PIRES LOPES",
  "9034476": "ANA JULIA FONTANA BROL",
  "9034472": "ANDERSON NUNES MARQUEZ",
  "9034474": "ANTONELLA SOPHIA MATA VASQUEZ",
  "666859":  "ARTHUR HAACKE",
  "9034459": "BIANCA PEREIRA GOMES",
  "9034457": "EDSON MACIEL FALCÃO",
  "9034456": "GABRIEL ANTUNES CARDOSO",
  "9034460": "GABRIELLA JAIANY DE OLIVEIRA ALBRECH",
  "9034461": "GRAZIELY SIQUEIRA RODRIGUES",
  "9034464": "GUSTAVO CORREIA FERREIRA",
  "9034467": "IGOR RAVANELI",
  "620312":  "ISABELLA TROJAN ELIAS",
  "9034468": "JOÃO LUCAS CADENA",
  "9034463": "JOÃO VITOR GODOY VIEIRA",
  "9034471": "JULIA GABRIELA GLOVACKI RODRIGUES",
  "9034480": "JULLYA EDUARDA ALBANI DA SILVA",
  "9034539": "KALIEL PAGNONCELI",
  "9033459": "LIVIA HOFMANN DE MELLO COSTA",
  "9034466": "LUCAS DE JESUS MIRANDA",
  "9034519": "LUDMYLA DUARTE PORFIRIO SILVA",
  "9034477": "MARIANYELI ALEXANDRA ESPINOZA BALZA",
  "9034481": "PEDRO RICARDO DALMAGRO GHIGGI",
  "9034469": "PEDRO SILVA MATHIASS FEDERIGHI",
  "9034525": "RAUL CEZAR SOUZA BOFF",
  "9034531": "SAMUEL PRESTES DE OLIVEIRA",
  "9034473": "STHEFANY MARTINS DE JESUS",
  "619688":  "VALENTINA FAGUNDES CALDART",
  "9034458": "VITÓRIA HENNIH BESSA",
}

// ─── MAPA DE UC ───────────────────────────────────────────────────────────────
const UC_ABREV = {
  "17525": "UC01",
  "17526": "UC02",
  "17527": "UC03",
  "17528": "UC04",
  "17529": "UC05",
  "17530": "UC06",
  "17531": "UC07",
  "17532": "UC08",
  "17533": "UC09",
}

const HEADERS = {
  Cookie: COOKIES,
  "User-Agent": "Mozilla/5.0",
  Referer: `${BASE}/InstrutorTurma.asp`,
}

// ─── HTTP ─────────────────────────────────────────────────────────────────────

async function get(url) {
  const r = await fetch(url, { headers: HEADERS })
  if (!r.ok) throw new Error(`HTTP ${r.status}: ${url}`)
  return r.text()
}

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// ─── PARSERS ──────────────────────────────────────────────────────────────────

/**
 * Extrai lista de disciplinas de InstrutorDisciplina.asp.
 * Procura links para InstrutorCalendario com DisCod + texto vizinho.
 */
/**
 * Extrai datas disponíveis (DatCal=YYYYMMDD) do calendário de uma disciplina.
 * Retorna da mais recente para a mais antiga.
 */
function parseCalendarDates(html) {
  const seen = new Set()
  const re   = /DatCal=(\d{8})/g
  let m
  while ((m = re.exec(html)) !== null) seen.add(m[1])
  return [...seen].sort().reverse()
}

/**
 * Extrai o nome da disciplina do calendário.
 * Padrão: <h4>17525 - Fundamentos de computação</h4>
 */
function parseDiscNome(html) {
  const flat = html.replace(/[\r\n\t]+/g, " ")
  const m = flat.match(/<h4>\d+\s*-\s*([^<]+)<\/h4>/i)
  return m ? m[1].trim() : null
}

/**
 * Extrai alunos e faltas totais da página de chamada.
 * Padrão HTML:
 *   <b>CodAluno</b> 9034470 |
 *   Normal <strong></strong> |
 *   <b>Faltas</b> 2
 */
function parseChamada(html) {
  const students = []
  const flat     = html.replace(/[\r\n\t]+/g, " ")
  const re       = /<b>CodAluno<\/b>\s*(\d+).*?<b>Faltas<\/b>\s*(\d+)/g
  let m
  while ((m = re.exec(flat)) !== null) {
    students.push({ codAluno: m[1], faltas: parseInt(m[2], 10) })
  }
  return students
}

// ─── LÓGICA PRINCIPAL ─────────────────────────────────────────────────────────

function fetchDisciplines() {
  // DisCod 17525–17533 = 9 UCs desta turma (202600029)
  // Nomes serão descobertos ao parsear cada página de chamada
  return Array.from({ length: 9 }, (_, i) => ({
    disCod: String(17525 + i),
    nome:   null, // preenchido depois
  }))
}

async function fetchStudentsForDisc(disc) {
  log(`\nDisCod=${disc.disCod}`)

  let dates
  try {
    const calHtml = await get(
      `${BASE}/InstrutorCalendario.asp?UniCod=${UNI_COD}&TurCod=${TUR_COD}&DisCod=${disc.disCod}`
    )
    dates = parseCalendarDates(calHtml)
    disc.nome = parseDiscNome(calHtml) ?? `DisCod-${disc.disCod}`
    log(`  Nome: ${disc.nome}`)
  } catch (e) {
    log(`  ERRO calendário: ${e.message}`)
    return { students: [], date: null }
  }

  if (dates.length === 0) {
    log(`  Sem datas no calendário`)
    return { students: [], date: null }
  }

  log(`  ${dates.length} data(s) — usando as mais recentes...`)

  for (const date of dates.slice(0, 3)) {
    await sleep(300)

    try {
      const chamHtml = await get(
        `${BASE}/InstrutorChamada.asp?UniCod=${UNI_COD}&TurCod=${TUR_COD}&DisCod=${disc.disCod}&DatCal=${date}&Grp=0`
      )

      const students = parseChamada(chamHtml)
      if (students.length > 0) {
        log(`  OK: ${students.length} alunos (data=${date})`)
        return { students, date }
      }

      log(`  ${date}: 0 alunos, tentando data anterior...`)
    } catch (e) {
      log(`  ERRO ${date}: ${e.message}`)
    }
  }

  log(`  Sem dados de chamada encontrados`)
  return { students: [], date: null }
}

// ─── OUTPUT ───────────────────────────────────────────────────────────────────

function buildPivot(rows, disciplines) {
  const allAlunos = [...new Set(rows.map(r => r.codAluno))].sort(
    (a, b) => (ALUNOS[a] ?? a).localeCompare(ALUNOS[b] ?? b)
  )
  // Usa abreviação UC01-UC09 como cabeçalho de coluna
  const allDiscs  = disciplines.map(d => d.nome)
  const allAbrevs = disciplines.map(d => UC_ABREV[d.disCod] ?? d.nome)

  const lookup = {}
  for (const r of rows) {
    lookup[r.codAluno] ??= {}
    lookup[r.codAluno][r.disciplina] = r.faltas
  }

  const alunoLabel = (cod) => ALUNOS[cod] ? `${ALUNOS[cod]} (${cod})` : cod

  const headers = ["Aluno", ...allAbrevs, "TOTAL"]
  const widths  = headers.map(h => Math.max(h.length, 6))

  const pad     = (s, w) => String(s ?? "-").padEnd(w)
  const mkRow   = cells => `| ${cells.map((c, i) => pad(c, widths[i])).join(" | ")} |`
  const divider = `| ${widths.map(w => "-".repeat(w)).join(" | ")} |`

  const lines = []
  lines.push(mkRow(headers))
  lines.push(divider)

  for (const aluno of allAlunos) {
    const cells = allDiscs.map(d => lookup[aluno]?.[d] ?? "-")
    const total = cells.reduce((s, v) => s + (typeof v === "number" ? v : 0), 0)
    lines.push(mkRow([alunoLabel(aluno), ...cells, total]))
  }

  return lines
}

function buildFlat(rows, disciplines) {
  const nomeToAbrev = Object.fromEntries(
    disciplines.map(d => [d.nome, UC_ABREV[d.disCod] ?? d.nome])
  )
  const W   = { disciplina: 8, aluno: 44, faltas: 6 }
  const pad = (s, w) => String(s).padEnd(w)
  const line = (d, a, f) =>
    `| ${pad(d, W.disciplina)} | ${pad(a, W.aluno)} | ${pad(f, W.faltas)} |`
  const div  = `| ${"-".repeat(W.disciplina)} | ${"-".repeat(W.aluno)} | ${"-".repeat(W.faltas)} |`

  const lines = [line("UC", "Aluno", "Faltas"), div]
  for (const r of rows.sort((a, b) => a.disciplina.localeCompare(b.disciplina) || (ALUNOS[a.codAluno] ?? a.codAluno).localeCompare(ALUNOS[b.codAluno] ?? b.codAluno))) {
    const abrev = nomeToAbrev[r.disciplina] ?? r.disciplina
    const nome  = ALUNOS[r.codAluno] ? `${ALUNOS[r.codAluno]} (${r.codAluno})` : r.codAluno
    lines.push(line(abrev, nome, r.faltas))
  }
  return lines
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

import { writeFileSync } from "fs"
import { resolve } from "path"

const OUT_FILE = resolve(import.meta.dirname, "faltas.md")

async function main() {
  const disciplines = fetchDisciplines()

  log(`\n${disciplines.length} disciplina(s) para buscar (DisCod ${disciplines[0].disCod}–${disciplines.at(-1).disCod})`)

  const rows = []
  const dataSources = [] // { disc, date } — qual data foi usada por cada UC

  for (const disc of disciplines) {
    const { students, date } = await fetchStudentsForDisc(disc)
    for (const s of students) {
      rows.push({ disciplina: disc.nome, codAluno: s.codAluno, faltas: s.faltas })
    }
    if (date) dataSources.push({ nome: disc.nome, date })
  }

  if (rows.length === 0) {
    die("Nenhum dado de chamada extraído. Cookie provavelmente expirado.")
  }

  const now     = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
  const lines   = MODE_FLAT ? buildFlat(rows, disciplines) : buildPivot(rows, disciplines)

  // Cabeçalho do arquivo
  const header = [
    `# Faltas — Turma ${TUR_COD}`,
    ``,
    `**Gerado em:** ${now}`,
    ``,
    `**Fonte por UC** (aula mais recente com chamada registrada):`,
    ...dataSources.map(s => `- ${s.nome}: \`${s.date.replace(/(\d{4})(\d{2})(\d{2})/, "$3/$2/$1")}\``),
    ``,
    `---`,
    ``,
  ]

  const content = [...header, ...lines, ""].join("\n")

  writeFileSync(OUT_FILE, content, "utf8")
  log(`\nSalvo em: ${OUT_FILE}`)

  // Também imprime no terminal
  lines.forEach(l => console.log(l))
}

function log(msg) { process.stderr.write(msg + "\n") }
function die(msg) { log("FATAL: " + msg); process.exit(1) }

main().catch(err => { log("ERRO: " + err.message); process.exit(1) })
