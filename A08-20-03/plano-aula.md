# Plano de Aula — A08 · 20/03/2026 (Sexta-feira)
**Arquivo gerado em:** 2026-03-18
**Status geral:** ✅ slides.md gerado (35 slides — 20/03/2026)

---

## 1. Composição do Dia

| Bloco | Horário | Disciplina | HA | Foco |
|---|---|---|---|---|
| 1 | 7h10–9h10 | UC05 — Python | 2 | Estreia do `if` / `elif` — escalando de comparações simples a classificadores |
| 2 | 9h25–11h25 | UC08 — Banco de Dados | 2 | DDL: CREATE TABLE, tipos SQL, constraints, INSERT INTO, db-fiddle.com |
| 3 | 11h35–12h20 | UC06 — Arquitetura e GPU | 2 | Paralelismo reforçado + Pipeline da GPU (4 estágios, analogias 14 anos) |

---

## 2. Decisões Tomadas (Rounds 1 e 2)

### Round 1

| Ponto | Decisão |
|---|---|
| Ritmo / energia | Sexta de manhã: turma chega com menos energia — usar quebras, exercícios curtos entre teorias, dinâmicas leves; mesmo assim desenvolver bem as duas disciplinas técnicas |
| Python — estado real | A05 cobriu APENAS até operadores lógicos, `input()` e conversão de tipos — `if` ainda NÃO foi ensinado; A08 é a estreia absoluta do `if` |
| BD — próximo passo | DDL: `CREATE TABLE`, tipos de dados SQL, constraints (PK, NOT NULL) — conexão explícita com tipos do Python que alunos já conhecem |
| GPU — foco | Paralelismo reforçado (foi básico em A03, alunos não lembram bem) + Pipeline conceitual com estágios nomeados (Fetch → Decode → Execute → Write Back) |
| Exercícios | Mão na massa no computador; SQL via **db-fiddle.com** (navegador puro, sem instalação, sem conta — cada aluno no próprio) |
| Fio condutor | Temático: "dados" — Python **manipula** dados · BD **organiza** dados · GPU **processa** dados |

### Round 2

| UC | Ponto | Decisão |
|---|---|---|
| UC05 | Teto do `if` no dia | `if` / `else` + `elif` — simples mas consolidados; `if` aninhado fica para próxima aula |
| UC08 | Tema do CREATE TABLE | Turma escolhe entre 3 temas projetados no slide: **games** · **músicas** · **produtos** |
| UC06 | Profundidade do pipeline | Estágios nomeados (Fetch → Decode → Execute → Write Back) + comparativo CPU serial vs GPU paralela — MUITOS exemplos de cotidiano para turma de 14 anos |

---

## 3. Lista de Slides

### BLOCO 1 — UC05 · Python (slides 1–13)

| # | Título | Tag | Nota |
|---|---|---|---|
| 1 | Capa A08 — if, CREATE TABLE e Pipeline | `[TEORIA]` | layout: cover |
| 2 | Divisor Bloco 1 — Python | `[TEORIA]` | layout: center — fio condutor: "Python manipula dados" |
| 3 | Revisão Relâmpago: Operadores e input() | `[DINAMICA]` | quiz oral 2 min — retomada A05; prepara terreno para o `if` |
| 4 | O Que é uma Condição? | `[TEORIA]` | analogias 14 anos: semáforo, nota mínima pra passar, senha correta |
| 5 | `if` / `else` — Sintaxe em Python | `[TEORIA]` | code block; leitura em voz alta "se... senão..." |
| 6 | EX01 — Aprovado ou Reprovado? | `[EXERCICIO]` | individual N1-N2: `input()` float + `if/else`; gabarito em `<v-click>` |
| 7 | `elif` — Quando Há Mais de 2 Caminhos | `[TEORIA]` | analogia: nota A/B/C/F; Python verifica de cima para baixo |
| 8 | EX02 — Classificador de Notas | `[EXERCICIO]` | individual N2: `if/elif/else` retorna A/B/C/Reprovado; gabarito em `<v-click>` |
| 9 | Condicionais + `input()` — Juntando Tudo | `[TEORIA]` | exemplo completo: pede nota, classifica, imprime resultado |
| 10 | EX03 — Classificador Completo (dupla) | `[EXERCICIO]` | dupla N3: input + conversão + if/elif/else integrados; gabarito em `<v-click>` |
| 11 | Dinâmica — Caça ao Bug! | `[DINAMICA]` | código bugado com erros de indentação e lógica de if — duplas encontram o erro |
| 12 | O Que Você Aprendeu + Gancho | `[TEORIA]` | síntese Python; gancho: "dados existem na memória do Python — como guardá-los para sempre?" → BD |
| 13 | INTERVALO | `[TEORIA]` | layout: center — 9h10–9h25 |

---

### BLOCO 2 — UC08 · Banco de Dados (slides 14–24)

| # | Título | Tag | Nota |
|---|---|---|---|
| 14 | Divisor Bloco 2 — Banco de Dados | `[TEORIA]` | layout: center — fio condutor: "BD organiza dados" |
| 15 | Flash Revisão: SELECT que Vocês Já Sabem | `[DINAMICA]` | quiz oral 2 min — SELECT/FROM/WHERE/ORDER BY; turma responde em coro |
| 16 | De Onde Vêm as Tabelas? — DDL vs DML | `[TEORIA]` | DDL cria estrutura (CREATE), DML manipula dados (SELECT/INSERT) |
| 17 | `CREATE TABLE` — Sintaxe Completa | `[TEORIA]` | code SQL; leitura em voz alta; identificar cada parte |
| 18 | Tipos de Dados SQL vs Python | `[TEORIA]` | two-cols: INT↔int · VARCHAR↔str · FLOAT↔float · DATE↔str · BOOLEAN↔bool; ponte direta |
| 19 | Constraints: `PRIMARY KEY` e `NOT NULL` | `[TEORIA]` | PK = id único (como CPF); NOT NULL = campo obrigatório; analogia: formulário de cadastro |
| 20 | Como Usar o db-fiddle.com | `[TEORIA]` | passo-a-passo visual: abrir, escolher SQLite, colar CREATE, clicar Run |
| 21 | EX04 — Crie Sua Tabela | `[EXERCICIO]` | individual N2: escolha games/músicas/produtos, escreva o CREATE TABLE no db-fiddle; gabarito modelo em `<v-click>` |
| 22 | `INSERT INTO` — Colocando Dados na Tabela | `[TEORIA]` | sintaxe + exemplo; conecta com a tabela criada no EX04 |
| 23 | EX05 — Popule e Consulte (dupla) | `[EXERCICIO]` | dupla N3: INSERT 3 linhas + SELECT * no db-fiddle; gabarito em `<v-click>` |
| 24 | Debate — Tabela de um Modelo de IA | `[DEBATE]` | que colunas teria? `modelo`, `precisao`, `epochs`, `gpu_usada` — conexão com GPU (Bloco 3) |

---

### BLOCO 3 — UC06 · Arquitetura e GPU (slides 25–35)

| # | Título | Tag | Nota |
|---|---|---|---|
| 25 | Divisor Bloco 3 — Arquitetura e GPU | `[TEORIA]` | layout: center — fio condutor: "GPU processa dados" |
| 26 | Revisão Oral — O Que Você Lembra da GPU? | `[DEBATE]` | 2-3 min; turma fala livremente; professor complementa pontos esquecidos |
| 27 | Paralelismo: O Segredo da GPU | `[TEORIA]` | analogia 14 anos: fila de banco 1 caixa vs 1000 caixas abertas ao mesmo tempo |
| 28 | CPU vs GPU — Quadro Comparativo | `[TEORIA]` | tabela visual: núcleos, velocidade, especialidade, uso em IA; analogia: artesão vs fábrica |
| 29 | EX06 — CPU ou GPU? | `[EXERCICIO]` | individual N1: classificar 6 tarefas (jogar Minecraft, editar foto, treinar GPT, mandar WhatsApp...) — gabarito em `<v-click>` |
| 30 | Pipeline — O Que É um Pipeline? | `[TEORIA]` | analogia McDonald's/McLanche Feliz: caixa → gerente → preparação → entrega (linha de produção) |
| 31 | Os 4 Estágios do Pipeline da GPU | `[TEORIA]` | Fetch (buscar instrução) · Decode (entender o pedido) · Execute (fazer o cálculo) · Write Back (anotar o resultado) — analogia cotidiana de 14 anos para cada estágio |
| 32 | CPU Serial vs GPU Paralela | `[TEORIA]` | visual: CPU = 1 pipeline processsando 1 tarefa por vez; GPU = millions de pipelines simultâneos |
| 33 | EX07 — Monte o Pipeline (dupla) | `[EXERCICIO]` | dupla N2: cartas embaralhadas com os 4 estágios — ordenar e explicar o que acontece em cada um; gabarito em `<v-click>` |
| 34 | GPUs no Mercado — RTX vs A100 vs H100 | `[TEORIA]` | GeForce RTX (gaming/estudos), NVIDIA A100/H100 (treino de IA profissional), AMD Radeon; contexto de custo |
| 35 | Encerramento A08 | `[TEORIA]` | layout: end; síntese do fio condutor + gancho A09 |

---

## 4. Notas de Implementação

- **db-fiddle.com**: cada aluno abre no próprio navegador — sem conta, sem instalação, SQLite mode, UI simples
- **Pipeline analogias 14 anos** (Slide 31):
  - **Fetch** → "seu cérebro se lembra onde deixou o celular" (busca na memória)
  - **Decode** → "você lê a mensagem e entende o que a pessoa quis dizer"
  - **Execute** → "você responde a mensagem"
  - **Write Back** → "você anota na agenda que já respondeu"
- **Paralelismo analogias 14 anos** (Slide 27):
  - Fila de banco com 1 caixa: CPU
  - Banco com 1000 caixas abertas ao mesmo tempo: GPU
  - No TikTok, a GPU mostra 1000 vídeos para 1000 usuários ao mesmo tempo
  - Em Minecraft, cada núcleo da GPU renderiza um pedaço diferente da tela
- **Ponte Python ↔ SQL tipos** (Slide 18): usar exatamente os 4 tipos que alunos já conhecem (`int`, `str`, `float`, `bool`)
- **Gabarito obrigatório** via `<v-click>` em todos os exercícios com resposta esperada

---

## 5. Status por UC

| UC | Status |
|---|---|
| UC05 — Python | ✅ gerado (slides 1–13) |
| UC08 — Banco de Dados | ✅ gerado (slides 14–24) |
| UC06 — Arquitetura e GPU | ✅ gerado (slides 25–35) |
