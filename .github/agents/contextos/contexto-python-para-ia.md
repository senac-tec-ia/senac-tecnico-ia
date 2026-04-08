# Contexto — Desenvolvimento de Linguagem Python (D05-UC03)

**Código:** D05-UC03  
**UC:** UC03 — Desenvolvimento de Linguagem Python  
**Disciplina:** Python para IA  
**Carga Total:** 67h (80 HA) | `T1: 26 HA (ajustado: 20) · T2: 27 HA · T3: 27 HA`  
**Peso no dia:** Pesado (3 HA/bloco, sempre no Bloco 1)

---

## Estado Geral

| Trim. | HA Alocado | HA Dado | HA Restante |
|---|---|---|---|
| T1 | 20 (ajustado) | 12 | 8 |
| T2 | 27 | 0 | 27 |
| T3 | 27 | 0 | 27 |

---

## Indicadores Curriculares

| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Elabora código conforme funcionalidades e características do aplicativo, na linguagem Python | Em andamento |
| 2 | Utiliza comandos de integração dos códigos construídos em Python, conforme estrutura projetada | Pendente |
| 3 | Realiza a depuração, verificando e corrigindo erros na programação, de acordo com recomendação técnica (T2) | Pendente |
| 4 | Utiliza bibliotecas de manipulação de dados para aplicações de IA (T3) | Pendente |

---

## Aulas Realizadas

| Aula | Data | HA (D05) | Tópicos Principais | Status |
|---|---|---|---|---|
| A01 | 26/02/2026 | 0 | Não trabalhada | - |
| A02 | 27/02/2026 | ~0,5 | Reconhecimento do ambiente: VS Code, GitHub, Jupyter Notebook, onde rodar Python | Ministrada |
| A03 | 05/03/2026 | 0 | Não trabalhada | - |
| A04 | 06/03/2026 | ~2 | Variáveis, tipos (str/int/float/bool), `print()`, `input()`, operadores aritméticos (+, -, *, /, //, %, **), `if/elif/else`, `def/return`, ecossistema Python (Jupyter/Colab, pip) | Ministrada |
| A05 | 12/03/2026 | ~2 | `print()` aprofundado: f-string, `sep`, `end`; consolidação de tipos com `type()` e armadilhas; `input()` + conversão de tipo: `float(input())`, `int(input())`; exercício livre: 3 notas via `input()`, cálculo de média manual com f-string — ~20 slides percorridos | Ministrada |
| A06 | 13/03/2026 | 0 | Não trabalhada | - |
| A07 | 19/03/2026 | 0 | Não trabalhada | - |
| A08 | 20/03/2026 | ~2 | if/else (introdução e reforço), operadores lógicos `and`, `or`, `not`, tabela verdade | Ministrada |
| A09 | 26/03/2026 | ~4 | Anatomia de variável + vocabulário técnico; tipos + `type()`; built-ins e `float(input())`; operadores de comparação (`==`, `!=`, `<`, `>`, `<=`, `>=`); `elif` em cadeias; comparação + `and`/`or`; tabela verdade revisão; desafio integrador — aula não rendeu, turma com grande dificuldade de solidificação; ~2 exercícios concluídos | Ministrada |
| A10 | 27/03/2026 | ~2 | Gincana de Python em times: questões de código e leitura de output ("o que é impresso"); alunos engajaram bem; reforço de conceitos já vistos | Ministrada |

---

## Conceitos Consolidados (não reintroduzir no mesmo nível)

| Conceito | Aula | Nível de Profundidade |
|---|---|---|
| Ambientes Python (VS Code, Jupyter) | A02 | Reconhecimento |
| Variáveis e atribuição | A04 | Introdutório |
| Tipos de dados: str, int, float, bool | A04 | Introdutório |
| `print()` básico | A04 | Introdutório |
| `input()` básico | A04 | Introdutório |
| Operadores aritméticos (+, -, *, /, //, %, **) | A04 | Introdutório |
| `print()` aprofundado: f-string, `sep`, `end` | A05 | Introdutório |
| `type()` para diagnóstico de tipo | A05 | Introdutório |
| Conversão de tipo: `float()`, `int()`, `str()` | A05 | Introdutório |
| `float(input())` e `int(input())` como padrão de leitura numérica | A05 | Introdutório |
| Condicionais: `if/elif/else` básico | A08 | Introdutório |
| Operadores lógicos: `and`, `or`, `not` | A08 | Introdutório |
| Tabela verdade (and, or, not) | A08 | Introdutório |
| Vocabulário técnico: operador de atribuição, built-in, argumento | A09 | Introdutório |
| Operadores de comparação: `==`, `!=`, `<`, `>`, `<=`, `>=` | A09 | Introdutório |
| `elif` em cadeias com múltiplos limiares | A09 | Introdutório |
| Comparação + `and`/`or` no `if` | A09 | Introdutório |
| Leitura e rastreamento de output de código (output tracing) | A10 | Reconhecimento |

---

## Tópicos Pendentes no T1 (~10 HA restantes)

> A09 cobriu: operadores de comparação, elif em cadeias, comparação + and/or, tabela verdade revisão, vocabulário técnico.

| Seq. | Tópico | HA | Ind. |
|---|---|---|---|
| — | ~~Operadores de comparação~~ | ~~0,5~~ | — |
| — | ~~Condicionais com múltiplas condições + elif + lógico~~ | ~~1~~ | — |
| 3 | Loops: `for` com `range()` e sobre listas, `while`, `break`, `continue` | 2 | 1 |
| 4 | Listas: criação, indexação, `append`, `len`, `max`, `min`, `for` sobre listas | 2 | 1 |
| 5 | Funções avançadas: parâmetros default, docstrings, escopo | 1,5 | 1 |
| 6 | Módulos e importações: `import`, `random`, `math`, `os` | 2 | 2 |
| 7 | Leitura e escrita de arquivos: `open()`, `read()`, `write()`, `.csv` | 2 | 2 |
| 8 | Tratamento de erros: `try/except` | 1 | 1 |
| 9 | Exercício integrador: mini-projeto com dados de IA | 1,5 | 1, 2 |

---

## Recomendações para o Próximo Encontro

> A09 cobriu vocabulário técnico, operadores de comparação, elif em cadeias e comparação + lógico.
> Próximo bloco Python: verificar se turma absorveu elif (via exercício N0 no início) e, se sim, iniciar `for` com `range()` — primeiro contato com loops.
> Manter densidade baixa. Começar sempre com E0 (leitura de código) antes de qualquer exercício de escrita.
> Se elif ainda fraco: fazer mais um exercício de elif antes de avançar para loops.

---

## Feedback de Campo

| Data | Observacao | Acao tomada |
|---|---|---|
| 2026-03-05 | Alunos sem nenhuma experiencia previa em programacao | Introducao ao Python iniciada em Fundamentos de Computacao com ritmo bem lento |
| 2026-03-05 | Dinamicas em dupla funcionam melhor do que exercicios individuais para programacao | Estrutura de pares adotada como padrao para exercicios de codigo |
| 2026-03-12 | Turma absorveu apenas ~20 slides em 3 HA de bloco Python | Densidade dos slides reduzida; planejamento A06 readequado para comecar com comparacao antes de loops |
| 2026-03-12 | O unico exercicio completo da aula foi o EX-print() (sep, end, f-string) + exercicio livre do professor: 3 notas via input, calculo de media | Confirma que ritmo real e muito abaixo do planejado > planejar com 50% da densidade original |
| 2026-03-20 | Alunos com muita dificuldade em if/else e operadores logicos; demorou muito para conseguir fazer exercicios | Reforcar logica booleana no inicio do proximo bloco Python; manter densidade baixa |
| 2026-03-27 | Gincana de Python rendeu bastante; já notada dificuldade de alguns alunos em programar por conta própria | Próximas aulas com exercícios de escrita guiada; suporte individual para alunos com mais dificuldade |
| 2026-03-27 | Professor deu chamada de atenção entre A09 e A10 nos alunos desmotivados — engajamento voltou na gincana | Manter postura firme de cobrança; dinâmicas em time ajudam a mobilizar quem trava sozinho |

---

## Conexoes com Outras Disciplinas

| Conceito | Disciplina Relacionada | Observacao |
|---|---|---|
| GPU para treino | Arquitetura de Computadores e GPU | Python usa PyTorch/TF que dependem de GPU |
| CSV como formato de dados | Fundamentos de Computacao | Base para Pandas e leitura de datasets |
| Estatistica descritiva | Estatistica Aplicada a IA | Pandas describe() vai precisar desse embasamento |
