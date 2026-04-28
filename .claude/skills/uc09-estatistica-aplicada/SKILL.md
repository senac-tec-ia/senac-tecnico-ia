---
name: uc09-estatistica-aplicada
description: Diretrizes pedagógicas, sequência sugerida e indicadores de UC09 — Estatística Aplicada e Lógica Matemática em IA.
---
---
name: uc09-estatistica-aplicada
---
# Skill: UC09 — Estatística Aplicada e Lógica Matemática em IA

**Código:** UC09 | **Carga Total:** 33h (40 HA) | **Peso no dia:** Leve (1 HA/bloco, Bloco 3)

Contexto vivo em: `.github/agents/contextos/contexto-estatistica-aplicada.md`

---

## Diretrizes metodológicas

- **IA como âncora de todo gráfico:** toda função introduzida com gráfico real de IA (curva de loss, acurácia, distribuição de dados)
- **Python para plotar:** todo exercício numérico tem versão em código Python (Matplotlib/NumPy) — não apenas "calcule na mão"
- **1 HA = máximo 1 conceito novo:** introduza 1 função por aula, exercite imediatamente, feche com conexão IA
- **Datasets de fontes abertas:** toda prática usa dataset real (Kaggle, dados.gov.br, IBGE, UCI ML Repository)
- **Coordenação com UC03:** verificar o que foi coberto em Fundamentos Matemáticos — nunca repetir o que foi consolidado lá
- **Com apenas 1 HA, máx. 3-4 slides por este bloco**

---

## Indicadores Curriculares — T1

| Ind. | Descrição |
|---|---|
| 1 | Compreende e aplica funções matemáticas lineares |
| 2 | Compreende e aplica funções matemáticas polinomiais |
| 3 | Compreende e aplica funções matemáticas logarítmicas |
| 4 | Compreende e aplica funções matemáticas exponenciais |

**HA no T1 restantes:** ~11 (disciplina iniciada em A06)

---

## Sequência sugerida T1

| Aula | Conteúdo | HA |
|---|---|---|
| 1-2 | Função linear `y = ax + b`, regressão linear simples | 2 |
| 3-4 | Função polinomial, quadrática, curva de aprendizado (loss curve) | 2 |
| 5-6 | Função logarítmica, log-transformação, entropia | 2 |
| 7-8 | Função exponencial, sigmoid, softmax (intuição) | 2 |
| 9 | Revisão — identificar tipos de função em gráficos de treino | 1 |
| 10-11 | Exercício integrador — dado um gráfico de loss, identificar curva e comportamento | 2 |

---

## Conexões com outras UCs

| Conceito | UC | Observação |
|---|---|---|
| Funções matemáticas | UC03 Matemática | Esta disciplina é a extensão aplicada de UC03 |
| Regressão linear em Python | UC05 | `sklearn.linear_model.LinearRegression` |
| Loss curves e métricas | UC04 | Sigmoid, softmax, cross-entropy já ouviram falar |
| NumPy e gráficos | UC05 | `numpy.array`, `matplotlib.pyplot.plot()` |
