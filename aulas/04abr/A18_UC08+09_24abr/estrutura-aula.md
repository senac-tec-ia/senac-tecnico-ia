# Plano de Aula — A18 · 24/04/2026 (Sexta-feira)
**Arquivo gerado em:** 2026-04-23
**Status geral:** ✅ slides.md gerado (20 slides — 23/04/2026)

---

## 1. Composição do Dia

| Bloco | UC | Disciplina | HA | Horário |
|---|---|---|---|---|
| 1 | — | Finalização Av.03 (TokenLab) | ~3HA | 7h10–9h40 |
| 2 | UC09 | Estatística com Python — Primeiro Gráfico | ~3HA | 9h50–12h20 |

**Tipo:** Sem1-Sex
**Desvio do roadmap:** UC08 (Banco de Dados) suspenso nesta aula — recuperação futura.
**⚠️ Alerta roadmap:** A18 previa Av.5 — professor optou por não aplicar nesta data.

---

## 2. Decisões Tomadas

| Item | Decisão |
|---|---|
| UC08 | Suspenso — turma ainda finalizando Av.03 |
| Bloco 1 | Slides de apoio à entrega da Av.03: instrução, starter code, checklist, git push |
| Starter code | Código do professor colado no slide para alunos copiarem e completarem |
| UC09 ritmo | Primeiro laboratório de dados — matplotlib + numpy do zero |
| UC09 tópicos | Por que gráfico → importar libs → plotar y=ax+b → scatter com dados reais → média |
| Exercícios | 3 exercícios inline com gabarito v-click (plot, scatter, média no gráfico) |
| Gancho próxima | pandas `read_csv` — próxima aula abre CSV real |

---

## 3. Lista de Slides

### BLOCO 0 — Capa (slide 1)

| # | Título | Tag | Nota |
|---|---|---|---|
| 1 | Capa A18 — TokenLab + Laboratório de Dados | `[TEORIA]` | layout: cover |

---

### BLOCO 1 — Finalização Av.03 (slides 2–7 · 7h10–9h40)

| # | Título | Tag | Nota |
|---|---|---|---|
| 2 | Divisor — Finalizando o TokenLab | `[TEORIA]` | layout: center — "Até o intervalo: foco total na Av.03" |
| 3 | Plano da Aula Hoje | `[TEORIA]` | instrução: parte 1 = finalizar av.03, parte 2 = estatística nova |
| 4 | Starter Code — Esqueleto do TokenLab | `[EXERCICIO]` | código base para copiar; fases marcadas como `???` |
| 5 | Checklist de Entrega | `[EXERCICIO]` | av03_tokenlab.py · pasta Av03/ · nomes no topo · roda sem erro |
| 6 | Como Fazer o Push | `[TEORIA]` | git add / git commit / git push — 3 comandos em slide de código |
| 7 | Intervalo | `[TEORIA]` | layout: center, bgPreset: animate |

---

### BLOCO 2 — UC09: Estatística com Python — Primeiro Gráfico (slides 8–20 · 9h50–12h20)

| # | Título | Tag | Nota |
|---|---|---|---|
| 8 | Divisor — Estatística com Python: Vamos Plotar | `[TEORIA]` | layout: center — "Primeiro gráfico real da turma" |
| 9 | Por Que Gráfico? | `[TEORIA]` | tabela de números vs gráfico — o que o olho percebe imediatamente; motivação para matplotlib |
| 10 | Importando as Bibliotecas | `[TEORIA]` | `import matplotlib.pyplot as plt` e `import numpy as np` — o que cada uma faz em 1 linha |
| 11 | Seu Primeiro Plot — 5 Linhas | `[TEORIA]` | `x = [1,2,3,4,5]` → `y = [2*i+1 for i in x]` → `plt.plot(x,y)` → `plt.show()` — ao vivo no projetor |
| 12 | Personalizando o Gráfico | `[TEORIA]` | `plt.title()`, `plt.xlabel()`, `plt.ylabel()`, cor da linha — slide de código comentado |
| 13 | Exercício 1 — Plote y = 3x + 2 | `[EXERCICIO]` | aluno copia scaffold e troca os coeficientes (gabarito v-click com gráfico esperado) |
| 14 | Scatter Plot — Dados Reais | `[TEORIA]` | `plt.scatter(x, y)` com 8 pontos de exemplo: horas de estudo vs nota; comparar com `plt.plot` |
| 15 | Exercício 2 — Scatter dos Seus Dados | `[EXERCICIO]` | tabela de dados na tela → aluno plota scatter (gabarito v-click) |
| 16 | Média com numpy | `[TEORIA]` | `np.mean(lista)` → número; `plt.axhline(np.mean(y), color='red')` → linha no gráfico |
| 17 | Exercício 3 — Adicione a Média | `[EXERCICIO]` | adicionar `axhline` no scatter do exercício anterior; o que a linha vermelha significa? (gabarito v-click) |
| 18 | O Que Vimos Hoje | `[TEORIA]` | matplotlib + numpy + função linear + média — esses são os blocos do laboratório de dados |
| 19 | Próxima Aula: Dados de um CSV Real | `[TEORIA]` | gancho: `import pandas as pd` + `pd.read_csv('arquivo.csv')` — na próxima aula carregamos dados reais |
| 20 | Encerramento | `[TEORIA]` | layout: end |

---

## 4. Pré-requisitos Verificados

| Pré-requisito | Status |
|---|---|
| Função linear y = ax + b — conceito | ✅ A05 (~1HA) |
| Python básico: variáveis, for, print, f-string | ✅ A04–A17 |
| matplotlib/numpy/pandas | ⚠️ PRIMEIRO CONTATO — introduzir do zero |
| Av.03 iniciada em A17 | ✅ continuação hoje |

---

## 5. Status por UC

| UC | Status |
|---|---|
| Bloco Av.03 | ✅ gerado (slides 1–7) |
| UC09 — Estatística Aplicada | ✅ gerado (slides 8–20) |

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

