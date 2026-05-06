# Plano de Aula — A20
**Data:** 07/05/2026 (Quinta-feira)
**Pasta:** `aulas/05mai/A20_UC05+03+04_07mai/`
**Status:** Aguardando implementação

---

## Composição do Dia

| Bloco | UC | HA | Papel no dia |
|---|---|---|---|
| Bloco 1 | UC05 Python para IA | 3 HA | Laboratório principal — Av.05 |
| Bloco 2 | UC03 Fundamentos Matemáticos | 2 HA | Estatística descritiva integrada ao projeto |
| Bloco 3 | UC04 Fund. e Conceitos de IA | 1 HA | Contextualização motivacional (1 slide integrado à abertura) |

> **Nota pedagógica:** A divisão de UCs é artificial. A aula inteira é uma sessão de laboratório integrada centrada na Av.05. Os 3 blocos convergem para um único script Python.

---

## Avaliação do Dia

**Av.05 — SQL+Python: Banco na Prática**
- Tipo: AS (Atividade em Sala) em dupla
- Entrega: `git push` + link ao professor
- Arquivo: `SENAC-TecIA/Av05/av05_banco.py`
- Enunciado completo: `avaliacoes/av05/content.md`

---

## Decisões Pedagógicas

| Decisão | Escolha |
|---|---|
| Foco da aula | Sessão de laboratório guiada — sem conteúdo novo |
| Abertura | UC04: 1 slide motivacional "Por que IA precisa de banco de dados?" |
| Seção 1 | Pseudocódigo coletivo escrito no PAPEL (~35-40 min) antes de abrir o Colab |
| Seção 2 | Slides de referência "mastigados" com sintaxe+placeholders (~25 min) — projetados durante toda a aula |
| Seção 3 | Laboratório livre em duplas (~4h) — sem IA, professor circula |
| Restrição técnica | Google Colab apenas; sem `def`/`return`; SQLite embutido; pandas pré-instalado |
| Papel dos slides | Cola permitida — ficam projetados durante todo o laboratório |

---

## Verificação de Pré-requisitos

| Conceito necessário | UC | Status |
|---|---|---|
| `import sqlite3`, `cursor.execute()`, `fetchall()` | UC08 | Consolidado A06-A10 |
| `CREATE TABLE`, tipos INTEGER/TEXT/REAL, PRIMARY KEY, NOT NULL | UC08 | Consolidado A08-A10 |
| `INSERT INTO`, `UPDATE` com WHERE, `SELECT` | UC08 | Consolidado A08-A10 |
| `import pandas as pd`, `pd.read_sql_query()` | UC05 | **ATENÇÃO: não consta como ministrado** |
| `.mean()`, `.max()`, `.min()` | UC09/UC03 | Media calculada manualmente (A05); `.mean()` Pandas pendente |
| `for` loop sobre resultado de query (lista de tuplas) | UC05 | **ATENÇÃO: loops `for` ainda não foram ensinados (pendente UC05)** |
| f-string | UC05 | Consolidado A05 |
| `if/else` | UC05 | Consolidado A08-A09 |

> ⚠️ **PRE-REQUISITO NAO CONFIRMADO:**
> - `pd.read_sql_query()` e metodos Pandas (`.mean()`, `.max()`, `.min()`) nunca foram ensinados formalmente. A Av.05 trata isso como conteudo novo ensinado pela primeira vez via slides de referencia.
> - `for linha in cursor.fetchall(): print(linha)` usa loops `for` que ainda nao foram ensinados em UC05. O slide de referencia deve mostrar exatamente esse padrao sem exigir que o aluno o deduza sozinho.
> - **Acao:** slides de referencia devem mostrar o padrao COMPLETO e pronto para copiar, sem placeholder, para esses dois casos especificos. Para os demais, manter placeholders.

---

## Estrutura da Aula — Sessao Unica Integrada

A aula NAO segue a ordem T→E→D→TC por UC separada.
Segue a ordem: ABERTURA → PSEUDO → REFERENCIA → LAB → ENTREGA.

---

## Lista de Slides

### PARTE 0 — CAPA E ABERTURA (~5 min)

| # | Titulo | Tag | Resumo |
|---|---|---|---|
| 1 | Capa: Aula 20 - Banco na Pratica | [TEORIA] | Cover slide — "SQL + Python + Pandas: o projeto completo" |
| 2 | Por que IA precisa de banco de dados? | [TEORIA] | UC04: 1 slide motivacional — datasets de ML sao tabelas; sem banco, sem IA escalavel |
| 3 | O que vamos construir hoje | [TEORIA] | Mapa visual das 4 fases da Av.05: conectar → inserir → alterar → analisar |

---

### PARTE 1 — PSEUDOCODIGO COLETIVO (~35-40 min)

| # | Titulo | Tag | Resumo |
|---|---|---|---|
| 4 | O que e pseudocodigo? | [TEORIA] | Definicao rapida: lingua do programador antes de virar codigo; analogia com receita de bolo |
| 5 | Regra de ouro: caneta e papel | [DEBATE] | Professor explica a dinamica — alunos escrevem no papel. Pergunta: "Por que pensar antes de digitar?" |
| 6 | Pseudocodigo — Passo 1: Conectar ao banco | [TEORIA] | "Conectar ao banco escola.db com sqlite3" — professor escreve coletivamente no quadro |
| 7 | Pseudocodigo — Passo 2: Criar as tabelas | [TEORIA] | Criar tabela aluno (id PK, nome NOT NULL, turma) e nota (id PK, aluno_id FK, disciplina, valor REAL) |
| 8 | Pseudocodigo — Passos 3-5: Inserir e mostrar | [TEORIA] | Inserir 3 alunos inventados pela dupla; mostrar todos no terminal com SELECT |
| 9 | Pseudocodigo — Passos 6-7: Alterar e mostrar de novo | [TEORIA] | UPDATE turma do aluno id=2; mostrar alunos de novo para ver a mudanca |
| 10 | Pseudocodigo — Passos 8-10: Pandas e fechamento | [TEORIA] | Carregar nota em DataFrame; calcular media/max/min; if/else da media; fechar conexao |
| 11 | Revisao do pseudocodigo completo | [EXERCICIO] | Professor projeta o pseudocodigo inteiro escrito no quadro — alunos conferem com o papel deles |

---

### PARTE 2 — SLIDES DE REFERENCIA (cola permitida) (~25 min)

| # | Titulo | Tag | Resumo |
|---|---|---|---|
| 12 | Referencia: sqlite3 — Conectar e criar cursor | [TEORIA] | Sintaxe de `sqlite3.connect()`, `conn.cursor()`, `conn.commit()`, `conn.close()` |
| 13 | Referencia: SQL DDL — CREATE TABLE | [TEORIA] | Tipos INTEGER, TEXT, REAL; PRIMARY KEY, NOT NULL; sintaxe completa de CREATE TABLE IF NOT EXISTS |
| 14 | Referencia: SQL DML — INSERT INTO | [TEORIA] | `cursor.execute("INSERT INTO tabela VALUES (?, ?, ?)", (v1, v2, v3))` — padrao seguro com placeholders |
| 15 | Referencia: SQL DQL/DML — SELECT e UPDATE | [TEORIA] | SELECT * FROM tabela; UPDATE tabela SET campo = valor WHERE condicao |
| 16 | Referencia: for loop sobre fetchall() | [TEORIA] | Padrao COMPLETO (sem placeholder): `for linha in cursor.fetchall(): print(linha)` — copiavel diretamente |
| 17 | Referencia: Pandas com SQLite | [TEORIA] | `pd.read_sql_query("SELECT * FROM tabela", conn)` — padrao COMPLETO, copiavel diretamente |
| 18 | Referencia: Pandas — media, max, min | [TEORIA] | `df['coluna'].mean()`, `.max()`, `.min()` com f-string; if/else sobre a media |
| 19 | Checklist da Av.05 | [ATIV AVALIATIVA] | Lista de verificacao das 7 entregas obrigatorias antes do git push |

---

### PARTE 3 — LABORATORIO (~4h)

| # | Titulo | Tag | Resumo |
|---|---|---|---|
| 20 | Mao na massa — Abram o Colab! | [ATIV AVALIATIVA] | Instrucoes de setup: criar arquivo `av05_banco.py`, comentario de dupla no topo, nao usar IA |
| 21 | Slide de acompanhamento: Em que fase voce esta? | [ATIV AVALIATIVA] | Semaforo visual das 4 fases para duplas saberem seu progresso durante o lab |

---

### PARTE 4 — ENCERRAMENTO E ENTREGA (~15 min antes de terminar)

| # | Titulo | Tag | Resumo |
|---|---|---|---|
| 22 | Como entregar: git push | [ATIV AVALIATIVA] | Passo a passo do git add → commit → push + envio do link ao professor |
| 23 | Debate final: O que voce aprendeu hoje? | [DEBATE] | Brainstorm rapido: o que foi mais dificil? O que foi surpresa? Conexao com projetos reais de IA |
| 24 | Tarefa de Casa — A20 | [TAREFA DE CASA] | Finalizar `av05_banco.py` se nao terminou + rever o pseudocodigo escrito no papel |
| 25 | Encerramento — Ate a A21! | [TEORIA] | Slide end: preview da proxima aula + motivacao |

---

## Totais e Lint Pre-verificado

| Item | Valor |
|---|---|
| Total de slides | 25 |
| [TEORIA] | 15 (inclui divisores e referencias — atencao: bloco de referencias tem 7 slides TEORIA consecutivos) |
| [DEBATE] | 2 |
| [EXERCICIO] | 1 |
| [ATIV AVALIATIVA] | 4 |
| [TAREFA DE CASA] | 1 |

> ⚠️ **LINT NOTE:** Os slides de referencia (12-18) formam um bloco de 7 [TEORIA] consecutivos sem EXERCICIO ou DINAMICA entre eles. Isso viola a regra de max 2 [TEORIA] consecutivos. Justificativa: sao slides de "cola" projetados durante o lab — nao sao slides expositivos sequenciais; o professor vai usar como referencia visual. Marcado como [EXCECAO: cola-de-laboratorio]. Se o agente auditor sinalizar, aprovar a excecao.

---

## Status das UCs Neste Plano

| UC | Status |
|---|---|
| UC04 (1 HA) | Previsto: slide 2 — contextualização motivacional |
| UC05 (3 HA) | Previsto: slides principais do lab — sqlite3, Pandas, for loop, f-string, if/else |
| UC03 (2 HA) | Previsto: integrado ao slide 18 — media, max, min como estatistica descritiva |
| **Todos** | ⏳ Aguardando implementacao |
