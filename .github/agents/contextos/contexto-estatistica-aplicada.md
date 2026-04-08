# Contexto — Estatística Aplicada e Lógica Matemática em IA (UC09)

**Código:** UC09  
**UC:** UC09 — Utilização da Estatística Aplicada e Lógica Matemática em IA  
**Disciplina:** Estatística Aplicada e Lógica Matemática  
**Carga Total:** 33h (40 HA) | `T1: 13 HA (ajustado: 11) · T2: 14 HA · T3: 13 HA`

---

## Estado Geral

| Trim. | HA Alocado | HA Dado | HA Restante |
|---|---|---|---|
| T1 | 11 (ajustado) | 4 | 7 |
| T2 | 14 | 0 | 14 |
| T3 | 13 | 0 | 13 |

---

## Indicadores Curriculares

| Ind. | Descrição | Status T1 |
|---|---|---|
| 1 | Compreende e aplica funções matemáticas lineares | 🟡 Em andamento (A05–A06) |
| 2 | Compreende e aplica funções matemáticas polinomiais | 🟡 Em andamento (A06) |
| 3 | Compreende e aplica funções matemáticas logarítmicas | 🟡 Em andamento (A06) |
| 4 | Compreende e aplica funções matemáticas exponenciais | 🟡 Em andamento (A06) |
| 5 | Relaciona probabilidades básicas em situações presentes no cotidiano (T2) | Pendente |
| 6 | Distingue variáveis qualitativas e quantitativas em conjuntos de dados (T2) | Pendente |
| 7 | Diferencia dados discretos de contínuos para representação estatística (T2–T3) | Pendente |
| 8 | Calcula e interpreta frequência absoluta e relativa (T3) | Pendente |
| 9 | Calcula e interpreta medidas de tendência central (média, mediana, moda) (T3) | Pendente |
| 10 | Calcula e interpreta variância e desvio padrão em distribuições (T3) | Pendente |

---

## Resumo por Aula

| Aula | Data | HA | Conteúdo |
|---|---|---|---|
| A01 | 26/02/2026 | 0 | Não trabalhada |
| A02 | 27/02/2026 | 0 | Não trabalhada |
| A03 | 05/03/2026 | 0 | Não trabalhada |
| A04 | 06/03/2026 | 0 | Não trabalhada |
| A05 | 12/03/2026 | ~1 | **INICIO:** Conceito de função `y = f(x)`, função linear `y = ax + b`, coeficiente angular `a` e coeficiente linear `b`, implementação em Python: `def f_linear(x, a, b): return a*x + b` |
| A06 | 13/03/2026 | ~3 | Revisão e aprofundamento função linear (Uber, salário, água); função polinomial `f(x)=ax²+bx+c` (frenagem de carro, parábola, área); função exponencial `f(x)=a·bˣ` (post viral, juros compostos, crescimento de dados); função logarítmica `f(x)=log_b(x)` (Richter, decíbeis, faturamentos); exercício em dupla: identificar tipo de função em 5 situações; Kahoot 10 perguntas |
| A07 | 19/03/2026 | 0 | Não trabalhada (Sem2-Qui — bloco UC07/UC01/UC02) |
| A08 | 20/03/2026 | 0 | Não trabalhada (Sem2-Sex — bloco UC05/UC08/UC06) |
| A09 | 26/03/2026 | 0 | Não trabalhada (Sem1-Qui — bloco UC05/UC03/UC04) |
| A10 | 27/03/2026 | 0 | Não trabalhada — bloco da Sem1-Sex foi gincana Python (UC05) + SQL extenso (UC08); UC09 não chegou a ser aberta |

---

## Pré-requisitos dos Alunos

Conceitos que os alunos já têm (relevantes para esta disciplina):
- **Operadores aritméticos Python:** `+, -, *, /, //, **` — vistos em UC05 A04
- **Funções `def/return`:** Vistos em UC05 A04 — conectar `f(x)` matemático com `def f(x):`
- **UC03:** Verificar antes de cada aula o que foi coberto lá — não repetir

---

## Sequência Planejada T1 (11 HA, 1 HA/aula)

| Seq. | Tópico | HA | Ind. | Conexão IA |
|---|---|---|---|---|
| 1 | Função linear: `y = ax + b`, coeficientes, gráfico | 1 | 1 | Regressão linear — prever preço de GPU por ano |
| 2 | Função linear: predição prática, erro de predição (MAE intuitivo) | 1 | 1 | Exercício: prever custo de treino com n epochs |
| 3 | Função polinomial: quadrática, raízes, gráfico em forma de U | 1 | 2 | Curva de loss em overfitting (formato U) |
| 4 | Função polinomial: cúbica e comportamento — padrões em séries temporais | 1 | 2 | Previsão de demanda em sazonalidade |
| 5 | Função logarítmica: `log(x)`, propriedades, escala logarítmica | 1 | 3 | Log-transformação de dados enviesados |
| 6 | Função logarítmica: entropia e cross-entropy — intuição sem fórmula pesada | 1 | 3 | Loss function de classificação |
| 7 | Função exponencial: `e^x`, crescimento exponencial | 1 | 4 | Crescimento de parâmetros de LLMs (1B → 175B) |
| 8 | Função exponencial: sigmoid, softmax — intuição como funções de ativação | 1 | 4 | Sigmoid classifica, softmax distribui probabilidade |
| 9 | Revisão T1: identificar o tipo de função em gráficos de treino | 1 | 1–4 | Dado um gráfico de loss/accuracy, nomear a função |
| 10–11 | Exercício integrador: análise de gráficos de treino de um modelo real | 2 | 1–4 | Dataset real do TensorFlow/Keras loss history |

---

## Vocabulário a Introduzir

| Termo | Definição | Status |
|---|---|---|
| função linear | f(x) = ax + b — relação proporcional | **Introduzido A05** |
| coeficiente angular | `a` = inclinação da reta | **Introduzido A05** |
| coeficiente linear | `b` = onde a reta cruza o eixo y | **Introduzido A05** |
| regressão linear | modelo que ajusta uma reta a dados | Pendente |
| coeficiente angular | `a` em `ax + b` — inclinação da reta | Pendente |
| função quadrática | f(x) = ax² + bx + c — parábola | **Introduzido A06** |
| logaritmo | inverso da exponencial — log₂(8) = 3 | **Introduzido A06** |
| exponencial | crescimento multiplicativo — `e^x`, `2^n` | **Introduzido A06** |
| sigmoid | função que mapeia qualquer valor para [0,1] | Pendente |
| softmax | normaliza vetor de scores em distribuição de probabilidade | Pendente |
| loss function | função que mede o erro do modelo | Mencionado em D04 |
| cross-entropy | loss para classificação — baseada em logaritmo | Pendente |

---

## Regras para o Copilot

1. **Coordenar com UC03:** Verificar `contexto-fundamentos-matematicos.md` antes de gerar — nunca repetir o que foi coberto lá
2. **Gráfico real de IA em toda aula:** Não introduzir função matemática sem mostrar onde ela aparece em treino de modelos
3. **Python para plotar:** `import matplotlib.pyplot as plt; import numpy as np` — todo exercício deve ter versão em código
4. **1 HA = 1 conceito + 1 exercício:** Disciplina enxuta — alta densidade de prática por HA
5. **Sigma, log e e com intuição:** Não derivar — mostrar o comportamento visualmente e o uso em IA
6. **Sigmoid/softmax como funções de ativação:** Introduzir a intuição, não a backpropagation completa (isso é D04)
