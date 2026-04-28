# Claude Code — Instruções do Workspace

Este workspace é um monorepo de apresentações Slidev para o **Curso Técnico em Inteligência Artificial do SENAC**.

## Estrutura do Projeto

```
senac-tecnico-ia/
├── .github/agents/             ← FONTE DA VERDADE — agentes e contextos (Copilot)
├── .claude/agents/             ← Agentes para Claude Code (mesmas instruções, frontmatter Claude)
│   ├── produtor-aula.md
│   ├── atualizador-pos-aula.md
│   ├── criar-nova-aula.md
│   ├── auditor-estrutura.md
│   ├── autor-slides.md
│   ├── autor-exercicios.md
│   ├── editor-slides.md
│   ├── editor-tamanho.md
│   ├── planejador-avaliacoes.md
│   ├── revisor-commit.md
│   ├── uc01-fundamentos-computacao.md … uc09-estatistica-aplicada.md
│   └── platform-agent.md (name: Leovio)
├── .github/agents/contextos/   ← memória viva por disciplina (compartilhada por ambos)
│   ├── contexto-calendario.md
│   ├── ATIVIDADES_AVALIATIVAS.md
│   ├── contexto-banco-de-dados.md
│   ├── contexto-python-para-ia.md
│   └── … (9 arquivos contexto-*.md)
├── .github/agents/referencia-tecnica.md  ← referência técnica (ler antes de gerar slides)
├── AULAS-DADAS.md              ← histórico cronológico de todas as aulas (A01–atual)
├── AULAS-DESENVOLVIMENTO-PROG.md ← tracking de produção de slides por sprint
├── slidev-theme-neural/        ← tema Slidev personalizado (NÃO editar para criar conteúdo)
├── neural-slides-template/     ← template Slidev puro — base para novas aulas (SEM .github/)
├── aulas/                      ← pastas de aula organizadas por mês (02fev/, 03mar/, 04abr/)
├── avaliacoes/                 ← avaliações T1 (av01–av06)
└── package.json                ← raiz do monorepo
```

## Como usar com Claude Code

```bash
# Iniciar o Claude Code na raiz do projeto
cd /home/leo-zanini/Documents/senac-tecnico-ia
claude

# No REPL do Claude Code, invocar agentes por nome:
# "use produtor-aula" → produz uma aula completa no modo iterativo
# "use atualizador-pos-aula" → atualiza contextos após uma aula dada
# "use criar-nova-aula" → cria nova pasta de aula (ex: A20 05mai)
# "use autor-slides" → gera slides para uma UC
# "use editor-slides" → edita slides existentes cirurgicamente
```

## Regras Fundamentais

1. **Agentes vivem em `.claude/agents/`** (Claude Code) ou `.github/agents/` (Copilot) — nunca criar `.github/` dentro de subpastas de aula
2. **Contextos são a memória viva** — antes de gerar qualquer slide, leia `.github/agents/contextos/contexto-{disciplina}.md`
3. **Horário trimestral** — para montar blocos de aulas e planejar avaliações, leia `.github/agents/contextos/contexto-horario-trimestral.md`
4. **Plano de avaliações T1** — para saber avaliações pendentes e aprovadas, leia `.github/agents/contextos/ATIVIDADES_AVALIATIVAS.md`
5. **Nunca** criar arquivos de apresentação dentro de `slidev-theme-neural/`
6. **Nunca** copiar `.github/agents/` para pastas de aula — os agentes são globais
7. **referencia-tecnica.md** — leia SEMPRE em `.github/agents/referencia-tecnica.md` antes de gerar qualquer slide

## Fluxo Pós-Aula (após cada aula dada)

Use o agente `atualizador-pos-aula` com um relato em linguagem natural:
> "Na A07 dei Python: operadores de comparação ==, !=, <, > e lógicos and/or/not, if/elif/else com comparação. ~3 HA. Turma teve dificuldade com precedência de operadores."

O agente vai atualizar automaticamente:
- `.github/agents/contextos/contexto-python-para-ia.md`
- `AULAS-DADAS.md`

## Fluxo de Nova Aula

Use o agente `criar-nova-aula` para criar a próxima pasta de aula. O agente copia a estrutura Slidev do `neural-slides-template/`, configura `package.json`. Nunca cria `.github/` na nova pasta.

## Contexto Atual do Curso

- **Última aula ministrada**: A18 (24/04/2026) — UC08 (SQL avançado: JOIN, índices, subconsultas), UC09 (estatística descritiva com Python)
- **Próxima aula**: A19 (30/04/2026) — UC07+UC01+UC02 — abertura: Av.04 Quiz GPU (25 min)
- **Avaliações aplicadas**: Av.01 (concluída), Av.03 (23/04 — TriaBot TokenLab)
- **Avaliações pendentes**: Av.02 (30/04 Limber), Av.04 (30/04 Quiz GPU), Av.05 (07/05), Av.06 (08/05)
- **Histórico completo**: ver `AULAS-DADAS.md`
- **Calendário e composição de UCs**: ver `.github/agents/contextos/contexto-calendario.md`
- **Plano de avaliações T1**: ver `.github/agents/contextos/ATIVIDADES_AVALIATIVAS.md`

> ⚠️ **Manter esta seção atualizada** após cada uso de `atualizador-pos-aula`.

## Comandos Principais

```bash
# Rodar uma aula em modo desenvolvimento
npm run dev:a05

# Build de uma aula
npm run build:a06

# Trabalhar no tema
npm run theme:dev
```

## Tecnologias

- **Slidev** `^0.49` — framework de apresentações em Markdown
- **slidev-theme-neural** — tema local com fundo de rede neural animado, dark mode, IBM Plex Sans
- **Vue 3**, **TailwindCSS**, **Shiki** (syntax highlighting)
- **TypeScript**
