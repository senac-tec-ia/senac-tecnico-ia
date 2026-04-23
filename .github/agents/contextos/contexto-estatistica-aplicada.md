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
| 5 | matplotlib + numpy: importar, plotar `y = ax + b` em Python, personalizar eixos | 1 | 1 | Primeiro gráfico real — "ver a reta que vocês calcularam" |
| 6 | Scatter plot: dados reais (~8 pontos, ex: horas de estudo vs nota), observar tendência visual | 1 | 1 | Dataset de exemplo tabular simples |
| 7 | Pandas: `read_csv`, `.head()`, `.describe()` — explorar dataset aberto real | 1 | 1–2 | Primeiro contato com DataFrame |
| 8 | Média e mediana: `np.mean()`, `np.median()` — o que dizem sobre os dados; linha de média no gráfico | 1 | 1 | Estatística descritiva + visual lado a lado |
| 9 | Exercício integrador (pt.1): carregar CSV → scatter → calcular média/mediana → gráfico final | 1 | 1–4 | Dataset aberto (temperaturas, preços, notas) |
| 10–11 | Exercício integrador (pt.2): análise em dupla → gráfico + conclusão em 3 linhas → apresentar | 2 | 1–4 | Laboratório de dados completo |

---

## Vocabulário a Introduzir

| Termo | Definição | Status |
|---|---|---|
| função linear | f(x) = ax + b — relação proporcional | **Introduzido A05** |
| coeficiente angular | `a` = inclinação da reta | **Introduzido A05** |
| coeficiente linear | `b` = onde a reta cruza o eixo y | **Introduzido A05** |
| matplotlib | biblioteca Python para criar gráficos (`plt.plot`, `plt.scatter`, `plt.show`) | Pendente — A18 |
| numpy | biblioteca para cálculos numéricos com arrays (`np.mean`, `np.median`, `np.array`) | Pendente — A18 |
| pandas | biblioteca para dados tabulares — `DataFrame`, `read_csv`, `.describe()` | Pendente — A18 |
| scatter plot | gráfico de pontos — cada ponto é um par (x, y) de dados reais | Pendente — A18 |
| dataset | conjunto de dados estruturado em linhas e colunas para análise | Pendente — A18 |


---

## Regras para o Copilot

1. **Metodologia obrigatória:** Python + matplotlib + numpy + pandas em todo bloco UC09 — nunca gerar teoria pura sem código rodável em aula.
2. **Baseline da turma:** Alunos sabem função linear y=ax+b (conceito), Python básico (variáveis, if, for, print, f-string). **Não assumir nenhum conhecimento de NumPy/Pandas/matplotlib** — introduzir do zero com scaffold visual.
3. **Coordenar com UC03:** Verificar `contexto-fundamentos-matematicos.md` antes de gerar — nunca repetir conteúdo matemático já coberto lá.
4. **1 HA = 1 conceito + 1 exercício em código:** Sempre terminar com alunos tendo um gráfico ou cálculo rodando na tela.
5. **Datasets reais e abertos:** Usar CSVs simples (dados públicos, Kaggle) — não inventar dados fictícios. Preferir contextos próximos: notas, temperaturas, preços locais.
6. **Sem funções avançadas em T1:** sigmoid, softmax, log, exponencial não são o foco agora — focar em linear + matplotlib + estatística descritiva básica até a turma consolidar o laboratório de dados.
