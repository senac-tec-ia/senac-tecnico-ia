# Plano de Aula — A15 · 17/04/2026 (Sexta-feira)
**Arquivo gerado em:** 2026-04-15
**Status geral:** aguardando "Implementar"

> Este arquivo funciona como plano-aula antes da implementacao e sera substituido
> pela estrutura real de slides apos a geracao.

---

## 1. Composicao do Dia

| Bloco | Horario | Disciplina | HA |
|---|---|---|---|
| 1 | 7h10–8h50 | UC05 — Python para IA | 2 |
| Intervalo | 8h50–9h00 | — | — |
| 2 | 9h00–10h40 | UC08 — Banco de Dados | 2 |
| Intervalo | 10h40–10h50 | — | — |
| 3 | 10h50–12h20 | UC06 — Arquitetura e GPU | 2 |

**Total:** 6 HA | **Tipo:** Sem2-Sex

---

## 2. Decisoes Tomadas

### Round 1

| Item | Decisao |
|---|---|
| Av.1 | Sem slide de lembrete — A14/A15/A16 planejadas em paralelo, nenhuma dada ainda |
| UC05 — conteudo | while primeiro, depois .append / .pop / .sort — 2HA sera apertado |
| UC08 — conteudo | Relacional vs Nao-Relacional aprofundado + criacao de BD e-commerce local |
| UC06 — conteudo | Instalacao CPU-Z + roteiro exercicio de exploracao do proprio PC |
| Ritmo UC05 | 1 slide teoria alternado com 1 exercicio por topico |
| Eventos especiais | Nenhum — aula normal |

### Round 2

| Item | Decisao |
|---|---|
| UC05 — exercicio listas | Unico progressivo quebrado em 3 partes, contexto engajador (nao lista de modelos), gabarito via v-click em cada parte |
| UC08 — NoSQL | Completo: 3 tipos (Documento/MongoDB, Chave-Valor/Redis, Grafo/Neo4j) + dicas visuais de cenarios de uso |
| UC08 — BD local | E-commerce (clientes + produtos + pedidos), infra: SQLite + DB Browser for SQLite |
| UC06 — CPU-Z instalacao | Slide simples: link direto + passos minimos + onde abre |
| UC06 — exploracao | Roteiro estilo exercicio obrigatorio — aluno anota 5 dados: clock, cores, cache, RAM, GPU |

---

## 3. Alertas

### Pre-requisito — Metodos de lista (UC05)
Listas como iteraveis ja foram usadas nos loops for de A12 (ex: `modelos = ["GPT", "BERT"]`).
Porem `.append() / .pop() / .sort()` NAO constam em AULAS-DADAS.md como conteudo ensinado.
-> Tratar como conteudo novo: slide de sintaxe antes do exercicio progressivo.

### Infra local — UC08 (ACAO NECESSARIA antes de 17/04)
O professor quer BD rodando local, nao db-fiddle.
Proposta: SQLite + DB Browser for SQLite (https://sqlitebrowser.org)
- Gratuito, sem servidor, arquivo .db unico
- Os PCs da sala precisam ter o DB Browser instalado ANTES da aula
- Alternativa: professor leva pendrive com instalador portatil
-> Confirmar infra antes de 17/04.

---

## 4. Lista de Slides

### Slides Globais (1–2)

| # | Titulo | Tag | Nota |
|---|---|---|---|
| 1 | Capa — A15: while, BD Local e CPU-Z | [TEORIA] | layout: cover |
| 2 | Roteiro do Dia | [TEORIA] | layout: center, card: true |

### BLOCO 1 — UC05 · Python para IA (slides 3–13)

| # | Titulo | Tag | Nota |
|---|---|---|---|
| 3 | Divisor — Python para IA | [TEORIA] | layout: center |
| 4 | Loop while — Sintaxe | [TEORIA] | anatomia: condicao + corpo + atualizacao |
| 5 | while na Pratica | [TEORIA] | exemplo engajador fora do contexto IA |
| 6 | EX01 — while (individual, Colab) | [EXERCICIO] | gabarito v-click |
| 7 | Mini Cola — while vs for | [TEORIA] | tabela de referencia — fica projetada durante exercicios |
| 8 | Metodos de Lista — .append / .pop / .sort | [TEORIA] | sintaxe + exemplos encadeados |
| 9 | EX02 Parte 1 — .append | [EXERCICIO] | gabarito v-click |
| 10 | EX02 Parte 2 — .pop | [EXERCICIO] | gabarito v-click |
| 11 | EX02 Parte 3 — .sort | [EXERCICIO] | gabarito v-click |
| 12 | Mini Cola — Metodos de Lista | [TEORIA] | tabela de referencia |
| 13 | Intervalo | [TEORIA] | layout: center, bgPreset: animate |

### BLOCO 2 — UC08 · Banco de Dados (slides 14–25)

| # | Titulo | Tag | Nota |
|---|---|---|---|
| 14 | Divisor — Banco de Dados | [TEORIA] | layout: center |
| 15 | Relacional vs Nao-Relacional | [TEORIA] | o que mudou, quando surgiu o NoSQL |
| 16 | Tipos de NoSQL | [TEORIA] | Documento (MongoDB), Chave-Valor (Redis), Grafo (Neo4j) |
| 17 | Quando Usar Qual | [TEORIA] | tabela visual de cenarios com dica por tipo |
| 18 | Infra Local — DB Browser SQLite | [TEORIA] | link + passos de instalacao + como abrir |
| 19 | Projetando o E-commerce | [TEORIA] | esquema das 3 tabelas: clientes, produtos, pedidos |
| 20 | CREATE TABLE — clientes + produtos | [TEORIA] | SQL com tipos e constraints |
| 21 | CREATE TABLE — pedidos com FK | [TEORIA] | FK referenciando as outras duas tabelas |
| 22 | INSERT — populando o BD | [TEORIA] | inserts de exemplo + verificacao |
| 23 | SELECT com JOIN | [TEORIA] | query que cruza as 3 tabelas |
| 24 | EX03 — Meu E-commerce (dupla) | [EXERCICIO] | gabarito v-click |
| 25 | Intervalo | [TEORIA] | layout: center, bgPreset: animate |

### BLOCO 3 — UC06 · Arquitetura e GPU (slides 26–32)

| # | Titulo | Tag | Nota |
|---|---|---|---|
| 26 | Divisor — Arquitetura e GPU | [TEORIA] | layout: center |
| 27 | O Que e CPU-Z? | [TEORIA] | para que serve, o que revela sobre o hardware |
| 28 | Instalando o CPU-Z | [TEORIA] | link direto + 3 passos simples + onde abre |
| 29 | EX04 — Os 5 Dados do Meu PC | [EXERCICIO] | roteiro formulario: clock/cores/cache/RAM/GPU — anota no caderno |
| 30 | O Que Cada Dado Significa | [TEORIA] | clock vs cores vs cache vs RAM vs GPU em linguagem acessivel |
| 31 | CPU vs GPU — O Que Voce Viu? | [DEBATE] | turma compara dados ao vivo, professor media |
| 32 | Encerramento | [TEORIA] | layout: end |

**Total estimado: 32 slides**

---

## 5. Status por UC

| UC | Status |
|---|---|
| UC05 — Python para IA | ✅ gerado (slides 3–12) |
| UC08 — Banco de Dados | ✅ gerado (slides 14–24) |
| UC06 — Arquitetura e GPU | ✅ gerado (slides 26–31) |

---

## Legenda de Tags

| Tag | Significado |
|---|---|
| `[TEORIA]` | Slide expositivo de conteúdo teórico |
| `[DEBATE]` | Pergunta aberta para debate coletivo ou brainstorming |
| `[EXERCICIO]` | Atividade individual ou em dupla com entrega ou resposta |
| `[DINAMICA]` | Atividade interativa, jogo, roleplay ou dinâmica de grupo |
| `[ATIV AVALIATIVA]` | Atividade com critério de avaliação formal (Kahoot, entrega, etc.) |
| `[TAREFA DE CASA]` | Atividade para fazer fora da aula |

---

## SECAO 1 — Nome do Bloco Principal
**Slides: ~X a ~Y** | Tópico principal: Descreva o tópico

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 1 | Capa da Aula | `[TEORIA]` | Slide de abertura |

---

## SECAO 2 — Bloco de Exercícios
**Slides: ~X a ~Y**

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| X | Nome do Exercício | `[EXERCICIO]` | Descrição breve |

---

## SECAO 3 — Fechamento
**Slides: ~X a ~Y**

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| X | Encerramento | `[TEORIA]` | Síntese e gancho para próxima aula |
