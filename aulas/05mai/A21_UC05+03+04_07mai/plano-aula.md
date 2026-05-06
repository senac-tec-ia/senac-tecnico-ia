# Plano de Aula — A21
**Data:** 07/05/2026 (Quinta-feira)
**Pasta:** `aulas/05mai/A21_UC05+03+04_07mai/`
**Status:** Aguardando implementação

---

## Composição do Dia

| Bloco | UC | HA | Papel no dia |
|---|---|---|---|
| Bloco 1 (manhã) | UC05 Python para IA | 2 HA | Janela final Av05 — encerrar esse ciclo |
| Bloco 2 (tarde) | UC03 + UC04 | 3 HA | Lançamento Av06 — Seminário de Funções (sala de aula invertida) |

> **Nota pedagógica:** A manhã é uma janela de resgate para Av05. A tarde é o lançamento da Av06 (Seminário de Funções). São duas fases distintas em um mesmo dia. O professor demarca o intervalo como ponto de virada explícito.

---

## Avaliações do Dia

**Av05 — SQL+Python: Banco na Prática**
- Janela: início da aula até o intervalo das 09h35
- Quem não entregou até o intervalo: essa era a última janela em sala. Não há mais tempo para Av05 após o intervalo.

**Av06 — Seminário de Funções Matemáticas (lançamento)**
- Tipo: trabalho em grupo (5 alunos por grupo, 6 grupos)
- Começa após o intervalo — grupos formados, papéis distribuídos, código-base entregue
- Entrega do Colab: ao final da aula (ou início da sexta)
- Apresentações: A22 (sexta-feira, após o intervalo)

---

## Decisões Pedagógicas

| Decisão | Escolha |
|---|---|
| Foco manhã | Av05: alunos em silêncio no Colab — professor circula |
| Foco tarde | Sala de aula invertida — grupo pesquisa, professor não entrega resposta |
| Regra explícita | Quem tocar em Av05 depois do intervalo está prejudicando o próprio grupo na Av06 |
| Estrutura do grupo | 5 alunos por grupo, 5 papéis distintos mas todos mexem no código |
| Código-base | Fornecido com placeholder `y = [INSIRA AQUI SUA FUNÇÃO]` — sem resposta explícita |
| Fontes | Fornecidas nos slides — NumPy docs, Matplotlib gallery, Khan Academy, 3Blue1Brown |
| Palavra proibida | Nunca usar "scaffold" em nenhum slide |
| Linguagem alvo | ~14 anos, direta, sem jargão desnecessário |

---

## Os 5 Papéis (valem para todos os 6 grupos)

Cada aluno é dono de um bloco do código + uma camada conceitual. Todos mexem no código.

| # | Papel | Bloco do código | Camada conceitual |
|---|---|---|---|
| 1 | Fórmula | Identifica onde os parâmetros (a, b, c…) aparecem no código | Explica a fórmula matematicamente — o que cada parâmetro muda |
| 2 | Dados | Explica e ajusta `np.linspace(início, fim, qtd_pontos)` | O que é "gerar dados", por que aqueles valores de intervalo |
| 3 | Cálculo | Explica a linha que calcula `y` (`np.exp(x)`, `np.log(x)`, `x**2`, etc.) | O que a biblioteca fez por eles — por que não calcularam na mão |
| 4 | Gráfico | Explica `plt.plot`, `plt.xlabel`, `plt.ylabel`, `plt.title` | O que cada eixo representa e o que a curva mostra |
| 5 | Mundo real | Modifica os parâmetros para simular o exemplo real | Traz um número concreto (ex: Instagram de 1M→100M usuários) e conecta com IA/dados |

**Regra do papel Mundo real:** não basta dizer "é usado em IA". O aluno modifica os parâmetros do código para simular o dado concreto que pesquisou.

---

## Os 6 Grupos e Temas

| Grupo | Função | Fórmula de referência |
|---|---|---|
| 1 | Linear | y = ax + b |
| 2 | Quadrática | y = ax² + bx + c |
| 3 | Polinomial grau 3 | y = ax³ + bx² + cx + d |
| 4 | Logarítmica | y = log(x) |
| 5 | Exponencial | y = a·eˣ |
| 6 | Sigmoide | y = 1 / (1 + e^(−x)) |

**Grupo 6 recebe auxílio adicional:**
- Comentário no código: `# Dica: y = 1 / (1 + np.exp(-x))`
- Dica: `np.exp(-x)` já existe na biblioteca
- Pergunta-gatilho no slide: "Qual é a saída quando x é 0? E quando x é 10? Por que isso importa num neurônio artificial?"

---

## Código-Base por Grupo (com placeholder)

```python
import numpy as np
import matplotlib.pyplot as plt

# Defina seus parâmetros aqui
a = 1
b = 0

x = np.linspace(-10, 10, 100)

y = # [INSIRA AQUI SUA FUNÇÃO]

plt.plot(x, y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("Grupo X — Nome da Função")
plt.grid(True)
plt.show()
```

---

## Fontes para os Alunos

Listar nos slides como ponto de partida antes de qualquer pesquisa:
- NumPy: numpy.org/doc/stable/reference/routines.math.html
- Matplotlib: matplotlib.org/stable/gallery/index.html
- Google Colab intro: colab.research.google.com/notebooks/intro.ipynb
- Khan Academy (funções): pt.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions
- 3Blue1Brown: youtube.com/@3blue1brown (buscar "functions" ou "neural networks")

---

## Verificação de Pré-requisitos

| Conceito necessário | Status |
|---|---|
| Tipos de funções (linear, quadrática, exponencial, logarítmica) | ✅ Dado em UC09 A05-A06 |
| `import` em Python | ✅ Visto informalmente — A21 formaliza o conceito |
| `numpy` e `matplotlib` | ⚠️ Não ensinados formalmente — propósito da sala invertida |
| Variáveis e parâmetros em Python | ✅ Dado em UC05 A04 |

> ⚠️ `numpy` e `matplotlib` não foram ensinados formalmente. Isso é intencional — a Av06 usa sala de aula invertida. Os grupos pesquisam a biblioteca com autonomia. O papel "Dados" e "Cálculo" exigem que entendam o que cada função faz.

---

## Lista de Slides

### PARTE 0 — CAPA E REGRA DO DIA (~5 min)

| # | Título | Tag | Resumo |
|---|---|---|---|
| 1 | Capa: Aula 21 — Dois Momentos, Uma Meta | [TEORIA] | Cover slide — manhã: fechar Av05 / tarde: lançar Av06 |
| 2 | Como funciona o dia de hoje | [TEORIA] | Mapa visual: até 09h35 = Av05 / depois do intervalo = Av06. Regra explícita sobre não misturar. |

---

### PARTE 1 — MANHÃ: JANELA FINAL AV05 (~até 09h35)

| # | Título | Tag | Resumo |
|---|---|---|---|
| 3 | Av05 — Últimos minutos | [ATIV AVALIATIVA] | Silêncio, Colab aberto. Quem não entregou: essa é a última janela em sala. Checklist de entrega. |

---

### PARTE 2 — TARDE: LANÇAMENTO AV06 (após intervalo)

| # | Título | Tag | Resumo |
|---|---|---|---|
| 4 | O que é sala de aula invertida? | [TEORIA] | Conceito rápido: aqui você pesquisa, descobre, constrói. Professor não dá a resposta. |
| 5 | O que é a Av06? | [TEORIA] | Apresentação em grupo: cada um explica sua parte. Avaliação individual. |
| 6 | Os 6 temas e os grupos | [TEORIA] | Tabela dos 6 grupos com os temas — professor sorteia ou atribui em sala |
| 7 | Os 5 papéis dentro do grupo | [TEORIA] | Tabela dos 5 papéis com bloco de código e camada conceitual — todos mexem no código |
| 8 | O papel Mundo real — o que não pode | [TEORIA] | "Não é 'é usado em IA e boa'. É: Instagram foi de 1M para 100M usuários — qual é a base?" |
| 9 | O que é `import`? | [TEORIA] | Conceito simples: import traz uma biblioteca pronta para você usar. Analogia: caixa de ferramentas |
| 10 | Como usar o que foi importado | [TEORIA] | `np.linspace`, `np.exp`, `plt.plot` — como descobrir o que existe via documentação |
| 11 | Onde encontrar ajuda (sem ChatGPT) | [TEORIA] | Fontes: NumPy docs, Matplotlib gallery, Khan Academy, 3Blue1Brown — links nos slides |
| 12 | Código-base — Grupo 1 (Linear) | [EXERCICIO] | Código com placeholder para y = ax + b. Papel Fórmula: onde está o a e o b? |
| 13 | Código-base — Grupo 2 (Quadrática) | [EXERCICIO] | Código com placeholder para y = ax² + bx + c |
| 14 | Código-base — Grupo 3 (Polinomial) | [EXERCICIO] | Código com placeholder para y = ax³ + bx² + cx + d |
| 15 | Código-base — Grupo 4 (Logarítmica) | [EXERCICIO] | Código com placeholder — dica: `np.log(x)` existe |
| 16 | Código-base — Grupo 5 (Exponencial) | [EXERCICIO] | Código com placeholder — dica: `np.exp(x)` existe |
| 17 | Código-base — Grupo 6 (Sigmoide) | [EXERCICIO] | Código com placeholder + comentário dica: `# y = 1 / (1 + np.exp(-x))` + pergunta-gatilho |
| 18 | O que entregar hoje | [ATIV AVALIATIVA] | Colab funcionando com gráfico + cada membro sabe sua parte. Entrega ao final da aula. |
| 19 | Tarefa de Casa — A21 | [TAREFA DE CASA] | Praticar sua parte, anotar o exemplo real com número concreto, pesquisar mais na documentação |
| 20 | Encerramento — Até amanhã! | [TEORIA] | Preview da A22: apresentações após o intervalo. Cada um fala sua parte. |

---

## Totais e Lint

| Item | Valor |
|---|---|
| Total de slides | 20 |
| [TEORIA] | 10 |
| [ATIV AVALIATIVA] | 2 |
| [EXERCICIO] | 6 |
| [TAREFA DE CASA] | 1 |
| [DEBATE] | 0 |

> ⚠️ **LINT NOTE:** Os slides 12–17 são 6 [EXERCICIO] consecutivos (um por grupo). Isso é intencional — são slides de código-base para cada grupo. O professor projeta apenas o slide do grupo que está sendo atendido. Não são slides expositivos sequenciais. Marcar como [EXCEÇÃO: slides-por-grupo].

---

## Status das UCs Neste Plano

| UC | Status |
|---|---|
| UC05 (2 HA manhã) | Janela Av05 — sem conteúdo novo |
| UC03 (2 HA tarde) | Conceitos de funções aplicados na Av06 — implícito nos slides de código |
| UC04 (1 HA tarde) | Conexão IA/neurônio — slides 8 e 17 (Sigmoide) |
| **Todos** | ⏳ Aguardando implementação |
