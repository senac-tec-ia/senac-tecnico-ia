#!/usr/bin/env node
/**
 * review-staged.mjs — Coleta diff e contexto do repositório para revisão pré-commit ou CI.
 *
 * Uso local (pre-commit hook):
 *   node scripts/review-staged.mjs              → mostra relatório no terminal
 *   node scripts/review-staged.mjs --json       → saída JSON (consumo programático)
 *   node scripts/review-staged.mjs --summary    → versão compacta (apenas alertas)
 *
 * Uso CI (GitHub Actions — compara contra branch base):
 *   node scripts/review-staged.mjs --ci --base=origin/master
 *   node scripts/review-staged.mjs --ci --base=origin/master --json
 *
 * O script NÃO bloqueia o commit sozinho — ele produz o relatório.
 * O git hook pre-commit chama este script e apresenta o resultado.
 */

import { execSync } from 'child_process'
import { readFileSync, existsSync } from 'fs'
import { join, relative, extname } from 'path'

const ROOT = join(import.meta.dirname, '..')
const args = process.argv.slice(2)
const jsonMode = args.includes('--json')
const summaryMode = args.includes('--summary')
const ciMode = args.includes('--ci')
const baseArg = args.find(a => a.startsWith('--base='))
const baseBranch = baseArg ? baseArg.split('=')[1] : 'origin/master'

// ── Helpers ──────────────────────────────────────────────

function git(cmd) {
  return execSync(`git ${cmd}`, { cwd: ROOT, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }).trim()
}

function fileCategory(filepath) {
  if (filepath.startsWith('.github/agents/contextos/')) return 'contexto'
  if (filepath.startsWith('.github/agents/') && filepath.endsWith('.agent.md')) return 'agente'
  if (filepath.includes('slides.md')) return 'slides'
  if (filepath.includes('exercicios.md') || filepath.includes('tarefa.md')) return 'exercicios'
  if (filepath.startsWith('scripts/')) return 'script'
  if (filepath.startsWith('platform/')) return 'platform'
  if (filepath.startsWith('slidev-theme-neural/')) return 'theme'
  if (filepath.includes('package.json')) return 'config'
  if (filepath.endsWith('.md')) return 'docs'
  if (filepath.endsWith('.vue') || filepath.endsWith('.ts') || filepath.endsWith('.js') || filepath.endsWith('.mjs')) return 'code'
  return 'other'
}

function severity(level) {
  const icons = { error: '🔴', warn: '🟡', info: '🔵', ok: '🟢' }
  return icons[level] || '⚪'
}

// ── 1. Collect changed files ─────────────────────────────

// In CI mode, compare HEAD against base branch; locally, use staged (--cached)
const diffRef = ciMode ? `${baseBranch}...HEAD` : '--cached'

let stagedFiles
try {
  const raw = git(`diff ${diffRef} --name-status`)
  if (!raw) {
    if (!jsonMode) console.log('✅ Nenhuma mudança detectada. Nada para revisar.')
    process.exit(0)
  }
  stagedFiles = raw.split('\n').map(line => {
    const [status, ...pathParts] = line.split('\t')
    const filepath = pathParts.join('\t') // handle renames with tab
    return { status: status[0], filepath }
  })
} catch (e) {
  if (ciMode) {
    console.error(`Erro ao comparar com ${baseBranch}. Fetch feito? (git fetch origin)`)
  } else {
    console.error('Erro ao executar git diff --cached')
  }
  process.exit(1)
}

// ── 2. Collect diff ──────────────────────────────────────

const diff = git(`diff ${diffRef} --unified=3`)
const diffStat = git(`diff ${diffRef} --stat`)
const diffLines = diff.split('\n')

// ── 3. Categorize changes ────────────────────────────────

const categories = {}
const alerts = []

for (const { status, filepath } of stagedFiles) {
  const cat = fileCategory(filepath)
  if (!categories[cat]) categories[cat] = []
  categories[cat].push({ status, filepath })
}

// ── 4. Run checks ────────────────────────────────────────

// Check 4a: Agent files modified — warn about cascade effects
if (categories.agente) {
  for (const { filepath } of categories.agente) {
    const name = filepath.split('/').pop().replace('.agent.md', '')
    alerts.push({
      level: 'warn',
      file: filepath,
      rule: 'agent-cascade',
      msg: `Agente "${name}" modificado — verificar se agentes que invocam @${name} continuam compatíveis`
    })
  }
}

// Check 4b: Context files — verify structure preserved
if (categories.contexto) {
  for (const { filepath } of categories.contexto) {
    // Files inside the /aval sub-directory are evaluation sheets, not HA context files
    if (filepath.includes('/contextos/aval/')) continue
    const fullpath = join(ROOT, filepath)
    if (existsSync(fullpath)) {
      const content = readFileSync(fullpath, 'utf8')
      // Must have Estado Geral or HA tracking
      if (!content.includes('Estado Geral') && !content.includes('## HA') && !content.includes('Alocação')) {
        alerts.push({
          level: 'error',
          file: filepath,
          rule: 'contexto-structure',
          msg: 'Arquivo de contexto sem seção "Estado Geral" ou tabela de HA — pode quebrar validate-ha.mjs e dashboard'
        })
      }
    }
  }
}

// Check 4c: slides.md — basic checks
if (categories.slides) {
  for (const { filepath } of categories.slides) {
    const fullpath = join(ROOT, filepath)
    if (existsSync(fullpath)) {
      const content = readFileSync(fullpath, 'utf8')
      const lines = content.split('\n')

      // Check frontmatter exists
      if (!content.startsWith('---')) {
        alerts.push({
          level: 'error',
          file: filepath,
          rule: 'slides-frontmatter',
          msg: 'slides.md não começa com frontmatter YAML (---)'
        })
      }

      // Check for em-dashes in slide content
      const emDashSlides = []
      let slideNum = 0
      for (const line of lines) {
        if (line.startsWith('---')) slideNum++
        if (line.includes('—') && !line.startsWith('#') && !line.startsWith('<!--')) {
          if (!emDashSlides.includes(slideNum)) emDashSlides.push(slideNum)
        }
      }
      if (emDashSlides.length > 5) {
        alerts.push({
          level: 'warn',
          file: filepath,
          rule: 'slides-em-dash',
          msg: `${emDashSlides.length} slides com em-dash (—) — considerar substituir por "-" ou ":"`
        })
      }

      // Check total line count
      if (lines.length > 3000) {
        alerts.push({
          level: 'warn',
          file: filepath,
          rule: 'slides-size',
          msg: `slides.md tem ${lines.length} linhas — arquivos muito grandes degradam performance do Slidev`
        })
      }
    }
  }
}

// Check 4d: package.json — verify no accidental workspace removal
if (categories.config) {
  for (const { filepath } of categories.config) {
    if (filepath === 'package.json') {
      const added = []
      const removed = []
      let inPkgDiff = false
      for (const line of diffLines) {
        if (line.startsWith('diff --git') && line.includes('package.json')) {
          inPkgDiff = line.includes('a/package.json')
        }
        if (inPkgDiff) {
          if (line.startsWith('+') && !line.startsWith('+++') && line.includes('workspace')) {
            added.push(line)
          }
          if (line.startsWith('-') && !line.startsWith('---') && line.includes('workspace')) {
            removed.push(line)
          }
        }
      }
      if (removed.length > 0 && added.length === 0) {
        alerts.push({
          level: 'error',
          file: filepath,
          rule: 'config-workspace-removed',
          msg: `${removed.length} workspace(s) removido(s) do package.json sem substituição — pode ser acidental`
        })
      }
    }
  }
}

// Check 4e: Scripts modified — remind to test
if (categories.script) {
  for (const { filepath } of categories.script) {
    alerts.push({
      level: 'info',
      file: filepath,
      rule: 'script-test',
      msg: 'Script modificado — confirmar que foi testado antes de commitar'
    })
  }
}

// Check 4f: Theme changes — high impact
if (categories.theme) {
  alerts.push({
    level: 'warn',
    file: categories.theme.map(f => f.filepath).join(', '),
    rule: 'theme-impact',
    msg: `Mudança no tema neural afeta TODAS as aulas — testar com pelo menos 2 aulas diferentes`
  })
}

// Check 4g: Large diff detection
const totalAdditions = diffLines.filter(l => l.startsWith('+') && !l.startsWith('+++')).length
const totalDeletions = diffLines.filter(l => l.startsWith('-') && !l.startsWith('---')).length
if (totalAdditions + totalDeletions > 500) {
  alerts.push({
    level: 'warn',
    file: '(global)',
    rule: 'large-diff',
    msg: `Diff grande: +${totalAdditions} -${totalDeletions} linhas — considerar dividir em commits menores`
  })
}

// Check 4h: .copilot-instructions.md — remind to keep updated
const copilotChanged = stagedFiles.some(f => f.filepath === '.copilot-instructions.md')
const contextosChanged = categories.contexto?.length > 0
if (contextosChanged && !copilotChanged) {
  alerts.push({
    level: 'info',
    file: '.copilot-instructions.md',
    rule: 'copilot-sync',
    msg: 'Contextos atualizados mas .copilot-instructions.md não foi alterado — verificar se "Contexto Atual" ainda está correto'
  })
}

// Check 4i: Detect accidental commits of node_modules, .slidev, dist
for (const { filepath } of stagedFiles) {
  if (filepath.includes('node_modules/') || filepath.includes('.slidev/') || filepath.includes('/dist/')) {
    alerts.push({
      level: 'error',
      file: filepath,
      rule: 'gitignore-leak',
      msg: 'Arquivo que deveria estar no .gitignore foi staged — remover antes de commitar'
    })
  }
}

// Check 4j: AULAS-DADAS.md format compliance
if (stagedFiles.some(f => f.filepath === 'AULAS-DADAS.md')) {
  const content = readFileSync(join(ROOT, 'AULAS-DADAS.md'), 'utf8')
  const headerPattern = /^## A\d{2} — \d{2}\/\d{2}\/\d{4}/gm
  const headers = content.match(headerPattern) || []
  const allH2 = content.match(/^## .+/gm) || []
  // Filter out non-lesson H2s like template sections
  const lessonH2 = allH2.filter(h => !h.includes('Template') && !h.includes('<!--'))
  if (lessonH2.length > headers.length + 1) {
    alerts.push({
      level: 'warn',
      file: 'AULAS-DADAS.md',
      rule: 'aulas-dadas-format',
      msg: 'Algumas entradas em AULAS-DADAS.md não seguem o formato ## A{NN} — DD/MM/AAAA'
    })
  }
}

// ── 5. Generate report ───────────────────────────────────

const errors = alerts.filter(a => a.level === 'error')
const warns = alerts.filter(a => a.level === 'warn')
const infos = alerts.filter(a => a.level === 'info')

if (jsonMode) {
  const report = {
    timestamp: new Date().toISOString(),
    stagedFiles: stagedFiles.length,
    categories: Object.fromEntries(Object.entries(categories).map(([k, v]) => [k, v.length])),
    diffStats: { additions: totalAdditions, deletions: totalDeletions },
    alerts,
    summary: { errors: errors.length, warnings: warns.length, info: infos.length },
    pass: errors.length === 0
  }
  console.log(JSON.stringify(report, null, 2))
  process.exit(errors.length > 0 ? 1 : 0)
}

// ── Markdown output (for GitHub PR comments) ────────────

const markdownMode = args.includes('--markdown')
if (markdownMode) {
  const lines = []
  const verdict = errors.length > 0 ? '🔴 Bloqueado' : warns.length > 0 ? '🟡 Aprovado com ressalvas' : '🟢 Aprovado'

  lines.push(`## 📋 Review Automático — ${verdict}`)
  lines.push('')
  lines.push(`**Arquivos:** ${stagedFiles.length} alterado(s) | \`+${totalAdditions}\` \`-${totalDeletions}\` linhas`)
  lines.push('')

  // Categories table
  lines.push('### Categorias')
  lines.push('')
  const catIcons = {
    agente: '🤖', contexto: '🧠', slides: '📊', exercicios: '✏️',
    script: '⚙️', platform: '🌐', theme: '🎨', config: '📦', docs: '📝', code: '💻', other: '📄'
  }
  for (const [cat, files] of Object.entries(categories)) {
    lines.push(`- ${catIcons[cat] || '📄'} **${cat}:** ${files.map(f => `\`${f.filepath.split('/').pop()}\``).join(', ')}`)
  }
  lines.push('')

  // Alerts
  if (alerts.length > 0) {
    lines.push('### Alertas')
    lines.push('')
    if (errors.length > 0) {
      lines.push('<details open><summary>🔴 Erros (' + errors.length + ')</summary>')
      lines.push('')
      for (const a of errors) lines.push(`- **\`${a.rule}\`** \`${a.file}\`: ${a.msg}`)
      lines.push('')
      lines.push('</details>')
      lines.push('')
    }
    if (warns.length > 0) {
      lines.push('<details open><summary>🟡 Avisos (' + warns.length + ')</summary>')
      lines.push('')
      for (const a of warns) lines.push(`- **\`${a.rule}\`** \`${a.file}\`: ${a.msg}`)
      lines.push('')
      lines.push('</details>')
      lines.push('')
    }
    if (infos.length > 0) {
      lines.push('<details><summary>🔵 Info (' + infos.length + ')</summary>')
      lines.push('')
      for (const a of infos) lines.push(`- **\`${a.rule}\`** \`${a.file}\`: ${a.msg}`)
      lines.push('')
      lines.push('</details>')
      lines.push('')
    }
  } else {
    lines.push('### ✅ Nenhum alerta')
    lines.push('')
  }

  lines.push('---')
  lines.push(`<sub>Gerado automaticamente por <code>review-staged.mjs</code> em ${new Date().toISOString().slice(0, 16)}</sub>`)

  console.log(lines.join('\n'))
  process.exit(errors.length > 0 ? 1 : 0)
}

// Terminal output
console.log('╔═════════════════════════════════════════════════╗')
console.log('║        Review Pré-Commit — Senac Técnico IA    ║')
console.log('╚═════════════════════════════════════════════════╝')
console.log()

if (!summaryMode) {
  // File summary
  console.log(`📁 ${stagedFiles.length} arquivo(s) staged  |  +${totalAdditions} -${totalDeletions} linhas`)
  console.log()
  console.log('Categorias:')
  for (const [cat, files] of Object.entries(categories)) {
    const icons = {
      agente: '🤖', contexto: '🧠', slides: '📊', exercicios: '✏️',
      script: '⚙️', platform: '🌐', theme: '🎨', config: '📦', docs: '📝', code: '💻', other: '📄'
    }
    console.log(`  ${icons[cat] || '📄'} ${cat}: ${files.map(f => f.filepath.split('/').pop()).join(', ')}`)
  }
  console.log()
  console.log('─'.repeat(50))
  console.log()
}

// Alerts
if (alerts.length === 0) {
  console.log('🟢 Nenhum alerta. Commit limpo!')
} else {
  console.log(`Alertas: ${errors.length} erro(s), ${warns.length} aviso(s), ${infos.length} info(s)`)
  console.log()

  for (const alert of alerts) {
    const icon = severity(alert.level)
    const fileLabel = alert.file.length > 50 ? '...' + alert.file.slice(-47) : alert.file
    console.log(`${icon} [${alert.rule}] ${fileLabel}`)
    console.log(`   ${alert.msg}`)
    console.log()
  }
}

// Verdict
console.log('─'.repeat(50))
if (errors.length > 0) {
  console.log(`🔴 ${errors.length} ERRO(S) encontrado(s) — corrigir antes de commitar`)
  console.log('   Use: git reset HEAD <file> para unstage, corrija, e re-stage')
  process.exit(1)
} else if (warns.length > 0) {
  console.log(`🟡 ${warns.length} aviso(s) — revise antes de prosseguir`)
  console.log('   Commit permitido, mas considere resolver os avisos.')
  process.exit(0)
} else {
  console.log('🟢 Tudo certo. Pode commitar!')
  process.exit(0)
}
