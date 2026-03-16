# Estrutura da Aula — A05 / 12/03/2026 (Quinta-Feira)
**Arquivo:** `slides.md` | **Última revisão:** 2026-03-11
**Total verificado de slides Slidev:** 35 (auditado 2026-03-11)

> PRÉ-DOCUMENTO aprovado pelo orquestrador. Não modificar `slides.md` antes da aprovação deste plano.

---

## Composição do Dia — Decisão do Orquestrador

| Bloco | Horário | HA | Disciplina | Tópico Central |
|---|---|---|---|---|
| 1 | 7h10–9h30 | 3 | UC05 Python | Operadores, Condicionais, Funções de String e Número |
| — | 9h30–9h50 | — | Intervalo | — |
| 2 | 9h50–11h10 | 2 | UC03 Matemática | **INÍCIO** — Aritmética comp. + Álgebra linear |
| 3 | 11h10–12h00 | 1 | UC09 Estatística | **INÍCIO** — Função linear `y = ax + b` |

### Justificativa da composição

- **D05 no Bloco 1 (3 HA):** Python tem momentum — A04 encerrou com variáveis/condicionais. Loops/listas são a progressão natural e exigem tempo contínuo para prática em dupla. Disciplina pesada sempre no Bloco 1.
- **D03 no Bloco 2 (2 HA):** Urgência 🔴 — ainda não iniciada. Aritmética computacional e álgebra fazem ponte direta com operadores Python vistos em A04, reduzindo a curva de abstração.
- **D09 no Bloco 3 (1 HA):** Urgência 🔴 — ainda não iniciada. Função linear `y = ax + b` conecta com a álgebra recém-vista no Bloco 2 (ponte cognitiva imediata). 1 HA suficiente para introdução conceitual com exercício.
- **D08 (Banco de Dados) NÃO entra hoje:** Introduzir D03 + D09 juntos cria ponte matemática coesa. D08 entra em A06 (13/03) no Bloco 1 (3 HA), conforme regra: "D08 iniciar no Bloco 1 — disciplina nova + pesada requer foco total".

---

## Legenda de Tags

| Tag | Significado |
|---|---|
| `[TEORIA]` | Slide expositivo de conteúdo teórico |
| `[DEBATE]` | Pergunta aberta para debate coletivo ou brainstorming |
| `[EXERCICIO]` | Atividade individual ou em dupla com entrega ou resposta |
| `[DINAMICA]` | Atividade interativa, jogo, roleplay ou dinâmica de grupo |
| `[TAREFA DE CASA]` | Atividade para fazer fora da aula |

---

## BLOCO 0 — Pré-aquecimento: Tipos de Dados e Strings (UC05)
**Disciplina (UC):** UC05 Python para IA
**Slides: 1 a 8** | Horário: 7h10–7h30 | 0,5 HA
**Nota:** Consolidação de A04. Slides 2-7 = 6 teoria consecutivos (violação V2 não corrigível por reordenação — requer novo exercício intercalado).

| Slide | Título | Tag | Resumo |
|---|---|---|---|
| 1 | Capa — A05: Python, Matemática e Estatística | `[TEORIA]` | Abertura geral da aula, roadmap do dia |
| 2 | Tipos de Dados: Por Que Isso Importa? | `[TEORIA]` | `x = 5` vs `x = '5'` — comportamento diferente de `+` por tipo |
| 3 | Aspas em Python: `'` ou `"` ? | `[TEORIA]` | Simples vs duplas — regra do apóstrofo, escape |
| 4 | Interpolação com f-string | `[TEORIA]` | `f"...{variavel}..."` — forma profissional de montar texto |
| 5 | `print()` — Fixando a Ferramenta | `[TEORIA]` | Consolida print() com str/int/float/bool antes dos loops |
| 6 | Os 4 Tipos de Dados Básicos | `[TEORIA]` | Tabela str/int/float/bool com regra de inferência do Python |
| 7 | Cuidado com as Armadilhas de Tipo | `[TEORIA]` | TypeError, type(), diferença numérico/texto |
| 8 | Aquecimento — Qual o Tipo? | `[EXERCICIO]` | Nível 0: identificar tipos no caderno, depois verificar com type() no Colab |

---

## BLOCO 1 — UC05 Python: Operadores, Condicionais e Funções
**Disciplina (UC):** UC05 Python para IA
**Slides: 9 a 22** | Horário: 7h30–9h30 | 2,5 HA (~120 min)
**Contexto IA:** validar entradas de modelo (nome, acurácia) com operadores e funções de string
**Dinâmica:** exercícios em dupla, dinâmica Triagem de Dados

| Slide | Título | Tag | Resumo |
|---|---|---|---|
| 9 | O Que Vamos Fazer Hoje | `[TEORIA]` | Roteiro do bloco: operadores, lógicos, condicionais, str, número |
| 10 | Operadores de Comparação | `[TEORIA]` | `==`, `!=`, `<`, `>`, `<=`, `>=` — resultado sempre `bool` |
| 11 | EX00 - Verdadeiro ou Falso? | `[EXERCICIO]` | Nível 0: calcular expressões de comparação na mão antes de rodar |
| 12 | Operadores Lógicos | `[TEORIA]` | `and`, `or`, `not` — combinar condições com tabela de verdade resumida |
| 13 | Condicionais: `if`, `elif`, `else` | `[TEORIA]` | Aprofundamento A04: múltiplas condições com `and`, bloco animado |
| 14 | EX01 - Classificador de Notas | `[EXERCICIO]` | Nível 1: preencher return em if/elif/else com conceitos A-F |
| 15 | Funções de String | `[TEORIA]` | `.strip()`, `.upper()`, `.lower()`, `.replace()`, `len()` — contexto: limpeza de nomes de modelo |
| 16 | EX02 - Processe o Nome do Modelo | `[EXERCICIO]` | Nível 1: strip, upper, replace em dado de entrada sujo |
| 17 | Funções de Número | `[TEORIA]` | `abs()`, `round()`, `int()`, `float()`, `str()` — diferença entre cortar e arredondar |
| 18 | EX03 - Formate o Relatório | `[EXERCICIO]` | Nível 2: combinar round, abs, strip, upper e f-string num relatório de modelo |
| 19 | Tudo Junto: Validação de Entrada | `[TEORIA]` | Funções + condicionais integrados: pipelines de validação de ML |
| 20 | EX04 - Validador de Entrada | `[EXERCICIO]` | Nível 2: função completa com nome, nota, round, if/elif/else |
| 21 | Dinâmica em Dupla: Triagem de Dados | `[DINAMICA]` | 10 min: dupla A cria dado sujo, dupla B escreve função de limpeza e classificação |
| 22 | O Que Você Aprendeu Hoje | `[TEORIA]` | Síntese do bloco + gancho para A06: loops e listas virão depois |

---

## BLOCO 2 — UC03 Fundamentos Matemáticos: Aritmética + Álgebra
**Disciplina (UC):** UC03 Fundamentos Matemáticos
**Slides: 23 a 29** | Horário: 9h50–11h10 | 2 HA (~100 min)
**Status:** INÍCIO DA DISCIPLINA
**Contexto IA:** operadores Python já vistos em A04 — agora formalizando a notação matemática por trás

| Slide | Título | Tag | Resumo |
|---|---|---|---|
| 23 | Divisor: Bloco 2 — Matemática: Aritmética e Álgebra | `[TEORIA]` | Separador de bloco (layout: cover) — não conta para consecutivo |
| 24 | Matemática é a Linguagem da IA | `[TEORIA]` | Motivação: bilhões de multiplicações, álgebra linear, classificação = equação |
| 25 | Aritmética Computacional | `[TEORIA]` | `//`, `%`, `**`, precedência PEMDAS — alerta float32/float16 em IA |
| 26 | EX04 - Ordem das Operações | `[EXERCICIO]` | Nível 1: calcular à mão, verificar no Colab — bônus: `0.1 + 0.2 == 0.3` |
| 27 | Variável: Matemática vs Python | `[TEORIA]` | `=` atribuição vs `=` igualdade — equação linear `y = 2x + 5` com neurônio |
| 28 | EX05 - Tabela da Equação Linear | `[EXERCICIO]` | Nível 2: `def calcular_y(x):` — tabela for x=0..5 de `y = 2x + 5` |
| 29 | Debate: Álgebra em IA | `[DEBATE]` | Treinar modelo linear = encontrar a e b — coleta de intuições |

---

## BLOCO 3 — UC09 Estatística: Função Linear
**Disciplina (UC):** UC09 Estatística Aplicada
**Slides: 30 a 35** | Horário: 11h10–12h00 | 1 HA (~50 min)
**Status:** INÍCIO DA DISCIPLINA
**Contexto IA:** regressão linear como "prever preço de GPU pelo ano" — intuição sem fórmulas pesadas

| Slide | Título | Tag | Resumo |
|---|---|---|---|
| 30 | Divisor: Bloco 3 — Estatística: Função Linear | `[TEORIA]` | Separador de bloco (layout: cover) — não conta para consecutivo |
| 31 | Funções Descrevem Comportamento | `[TEORIA]` | `y = f(x)` — curva de perda, predição, sigmoid como funções |
| 32 | Função Linear: `y = ax + b` | `[TEORIA]` | Tabela a (angular) / b (linear) — conexão com EX05 |
| 33 | EX06 - Tabela da Função Linear | `[EXERCICIO]` | Nível 1: `def f_linear(x, a, b):` — tabela para a=3, b=-1, x=0..5 |
| 34 | Tarefa A05 | `[TAREFA DE CASA]` | 3 partes: filtrar floats com loop, tabela y=3x+2, reflexão sobre linearidade |
| 35 | Até amanhã! | `[TEORIA]` | Slide de encerramento (layout: end) |

---

## Tarefa de Casa

> Incluída como slide 34 (dentro do Bloco 3, após EX06).

---

## Resumo Quantitativo por Tag

| Bloco | Disciplina | Slides | `[TEORIA]` | `[EXERCICIO]` | `[DINAMICA]` | `[DEBATE]` | `[TAREFA DE CASA]` |
|---|---|---|---|---|---|---|---|
| 0 | UC05 Pré-aquecimento | 1–8 | 7 (slides 1-7) | 1 (slide 8) | — | — | — |
| 1 | UC05 Operadores e Funções | 9–22 | 7 | 4 (EX00-EX03) | 1 | — | — |
| 2 | UC03 Matemática | 23–29 | 3 | 2 (EX04-EX05) | — | 1 | — |
| 3 | UC09 Estatística | 30–35 | 3 | 1 (EX06) | — | — | 1 |
| **Total** | | **35** | **20** | **8** | **1** | **1** | **1** |

---

## Checklist de Validação (preencher antes de gerar slides)

- [x] Nenhum conteúdo de A04 reintroduzido no mesmo nível (variáveis, tipos, condicionais, def/return)
- [x] Todo exercício tem starter code
- [x] Máx. 2 slides [TEORIA] seguidos sem interação — **Bloco 1 e 2 corrigidos. Bloco 0 tem violação residual (6 consecutivos, ver log)**
- [x] Sem em-dash (`—`) em título de slide
- [x] Ordem dentro de cada bloco: T → E → D → TC
- [x] D03 e D09 marcadas como "iniciadas" nos contextos após a aula
- [ ] `meta.yaml` atualizado com `aulaNum: A05`

---

## Revisão Curricular Executada — 2026-03-11 (segunda passagem)

| # | Arquivo | Tipo | Problema/Decisão | Ação Executada | Resultado |
|---|---|---|---|---|---|
| R1 | `slides.md` | Revisão curricular | Listas introduzidas antes de loops: dificuldade muito alta para turma com 1 aula de Python | Slides 9-22 reescritos: listas removidas, conteúdo substituído por operadores, condicionais, funções de string e número | ✅ Executado |
| R2 | `slides.md` | Referência de ferramenta | "Colab" no slide de EX04 Matemática — alunos usam VS Code | Corrigido para "VS Code" | ✅ Executado |
| R3 | `slides.md` | Título da capa | Subtitle dizia "Tipos, Listas e Conversão" | Atualizado para "Operadores, Strings e Condicionais" | ✅ Executado |
| R4 | `slides.md` | Encerramento | Slide 35 listava `for`/`while`/listas como conteúdo da aula | Atualizado para refletir conteúdo real do dia | ✅ Executado |
| R5 | `estrutura-aula.md` | Sincronização | Bloco 1 descrevia Loops e Listas | Tabela e título do bloco atualizados para Operadores, Condicionais e Funções | ✅ Executado |

---

## Plano de Correção Executado — 2026-03-11

| # | Arquivo | Tipo | Problema Detectado | Ação Executada | Resultado |
|---|---|---|---|---|---|
| C1a | `slides.md` | Reordenação | Slides 10,11,12 = 3 teoria consecutivos sem exercício (violação V2) | Moveu EX00 (slide 13→12) antes de "O loop for — Sintaxe Completa" (slide 12→13) | ✅ Executado |
| C1b | `slides.md` | Reordenação | Slides 15,16,17 = 3 teoria consecutivos sem exercício (violação V2) | Moveu EX02 (slide 18→17) antes de "break e continue" (slide 17→18) | ✅ Executado |
| V2 | Diagnóstico | Verificação de ordem | Slides 2-7 = 6 teoria consecutivos no pré-aquecimento (violação V2 ×4) | Nenhuma — bloco só tem 1 exercício (slide 8) disponível. Seria necessário inserir 2 novos exercícios de reconhecimento para resolver. Recomendação: adicionar mini-exercício após slide 4 (f-string) | ⚠️ Parcial |
| V3 | Diagnóstico | Progressão de dificuldade | Verificado por bloco: EX00(N0)→EX01(N1)→EX02(N1)→EX03(N2) / EX04(N1)→EX05(N2) / EX06(N1) | Nenhuma — progressão correta em todos os blocos | ✅ Conforme |
| V4 | Diagnóstico | Blocos obrigatórios | Verificado: Aula 05 tem [DINAMICA] (slide 21), [DEBATE] (slide 29), [TAREFA DE CASA] (slide 34) | Nenhuma — todos presentes | ✅ Conforme |
| V5 | `estrutura-aula.md` | Range de slides | Arquivo dizia "~21 slides"; contagem real = 35 | Atualizado total para 35; ranges por bloco: Bloco 0 = 1-8, Bloco 1 = 9-22, Bloco 2 = 23-29, Bloco 3 = 30-35 | ✅ Executado |
| E1 | `estrutura-aula.md` | Sincronização | Tabelas de conteúdo com títulos desatualizados (baseados no plano original, não no deck real) | Todas as tabelas reescritas com títulos e tags reais do `slides.md` auditado | ✅ Executado |
| E2 | `estrutura-aula.md` | Metadado UC | Seções sem `**Disciplina (UC):**` identificado | Adicionado em todos os blocos: UC05, UC03, UC09 | ✅ Executado |
| E3 | `estrutura-aula.md` | Resumo quantitativo | Tabela desatualizada (22 slides, 6 exercícios) | Atualizada: 35 slides, 8 exercícios, 1 dinâmica, 1 debate, 1 tarefa | ✅ Executado |
| V1 | Diagnóstico | Identificação de UC | UC05 = slides 1-22 (Python); UC03 = slides 23-29 (Matemática); UC09 = slides 30-35 (Estatística) | Nenhuma — classificação correta confirmada | ✅ Conforme |

---

## Registro de Campo — O Que Aconteceu Realmente em 12/03/2026

> **Fonte:** relato direto do professor após a aula.
> Este registro tem precedência sobre qualquer planejamento anterior presente neste arquivo.

### O que foi efetivamente ministrado (D05-UC03)

- Cobertura real: **~20 slides** em ~3 HA de bloco Python
- **Único exercício completo da aula:** EX-print() — completar `sep`, `end` e f-string com variáveis
- **Exercício livre do professor (não estava no deck):** digitar 3 notas com `input()`, converter para `float`, calcular a média manualmente, imprimir com f-string

### Tópicos efetivamente vistos

| Tópico | Status |
|---|---|
| `print()` básico | Revisão de A04 |
| `print()` com f-string, `sep`, `end` | ✅ Introduzido |
| Tipos de dados: str, int, float, bool + `type()` | ✅ Consolidado |
| `input()` + `float(input())` e `int(input())` | ✅ Introduzido |
| Cálculo de média com 3 notas (exercício livre) | ✅ Praticado |

### O que NÃO foi coberto em A05 (estava no plano mas ficou pendente)

- Operadores de comparação (`==`, `!=`, `<`, `>`, `<=`, `>=`)
- Operadores lógicos (`and`, `or`, `not`)
- if/elif/else com condições combinadas
- Funções de string (`.strip()`, `.upper()`, `.lower()`, etc.)
- Funções de número (`abs()`, `round()`)
- Loops e listas

### Implicação para A06

> A próxima aula de Python (A06 - 13/03) deve começar com operadores de comparação e if com comparação antes de qualquer loop. Densidade: planejar com no máximo 50% da quantidade de slides original.

