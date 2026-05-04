# Av.06 — Seminário: Funções Matemáticas na Prática

**Tipo:** Seminário em grupo · Avaliação individual por aluno

**UCs:** UC09 Estatistica Aplicada · UC03 Fundamentos Matematicos · UC05 Python

**Indicadores:** UC09 Ind.1+2+3+4 · UC03 Ind.4 · UC05 Ind.2

**Quinta (desenvolvimento):** preparar o trabalho em sala, em grupo
**Sexta (seminário):** cada aluno apresenta sua parte — sem celular, sem anotacoes, sem leitura

---

## O que e este seminario

Cada grupo vai pesquisar um tipo de funcao matematica, criar um grafico usando Python no Colab e apresentar o que aprendeu para a turma. A avaliacao e **individual**: o professor observa o que cada aluno consegue explicar com as proprias palavras.

Na quinta voce pesquisa, monta, experimenta. Na sexta voce fala. Simples assim.

---

## Grupos e Temas

| Grupo | Tema | Funcao central |
|---|---|---|
| **1** | Funcoes Lineares | y = ax + b |
| **2** | Funcoes Quadraticas | y = ax² + bx + c |
| **3** | Funcoes Polinomiais (grau 3+) | y = ax³ + bx² + ... |
| **4** | Funcoes Logaritmicas | y = log(x) |
| **5** | Funcoes Exponenciais | y = a · eˣ |
| **6** | Sequencias e Padroes Numericos | PA, PG, Fibonacci, crescimento |

Os grupos sao definidos pelo professor na quinta.

---

## O que preparar na quinta (em sala)

Cada grupo prepara **tres coisas**:

### 1. A teoria (voce explica, nao le)

- O que e esse tipo de funcao?
- Como e a formula? O que cada letra significa?
- O grafico cresce, cai, satura, oscila? Por que?
- Onde aparece na vida real? Pense em dados, tecnologia, IA.

### 2. O codigo no Colab

Use `numpy` e `matplotlib` para plotar a sua funcao. O grafico precisa ter:
- Titulo com o nome da funcao
- Eixos com rotulos (x e y)
- Pelo menos uma curva visivel

Exemplos de ponto de partida (adapte para o seu tema):

```python
import numpy as np
import matplotlib.pyplot as plt

# Grupo 1 — Linear
x = np.linspace(0, 10, 100)
y = 2 * x + 3
plt.plot(x, y, label="y = 2x + 3")

# Grupo 2 — Quadratica
y = x**2 - 4*x + 4
plt.plot(x, y, label="y = x² - 4x + 4")

# Grupo 3 — Polinomial grau 3
y = x**3 - 6*x**2 + 9*x
plt.plot(x, y, label="y = x³ - 6x² + 9x")

# Grupo 4 — Logaritmica
x = np.linspace(0.1, 10, 100)
y = np.log(x)
plt.plot(x, y, label="y = ln(x)")

# Grupo 5 — Exponencial
x = np.linspace(0, 3, 100)
y = np.exp(x)
plt.plot(x, y, label="y = e^x")

# Grupo 6 — Sequencia (exemplo: progressao geometrica)
n = np.arange(1, 11)
y = 2 ** n
plt.scatter(n, y, label="PG: 2^n")

plt.title("Nome da Funcao")
plt.xlabel("x")
plt.ylabel("y")
plt.legend()
plt.grid(True)
plt.show()
```

Pesquise como as funcoes do `numpy` funcionam (`np.log`, `np.exp`, `np.linspace`, etc).
Voce vai precisar explicar o que cada uma faz na sexta.

### 3. Um exemplo real em IA ou dados

Escolha uma situacao concreta onde sua funcao aparece:
- Linear: previsao de consumo, regressao linear em ML
- Quadratica: otimizacao de custo, parabola de trajetoria
- Polinomial: curvas de ajuste de dados complexos
- Logaritmica: escala de decibeis, complexidade O(log n) de algoritmos
- Exponencial: crescimento de usuarios, treinamento de redes neurais, juros compostos
- Sequencias: progressao de camadas em redes neurais, Fibonacci na natureza

---

## Formato da apresentacao na sexta

**Cada grupo tem 12 minutos.**

- Cada aluno fala pelo menos **2 minutos** sobre a parte que pesquisou
- Mostram o grafico na tela (Colab aberto)
- Explicam o codigo — o professor pode perguntar sobre qualquer linha
- Explicam o exemplo real

**Regras:**
- Sem celular na mao durante a apresentacao
- Sem ler folhas ou copiar da tela enquanto fala
- Pode gesticular, desenhar no quadro, usar o grafico na tela

A nota e individual. Dois alunos do mesmo grupo podem ter avaliacoes diferentes se um explicou bem e o outro nao soube responder.

---

## Perguntas do professor ao final

Depois de todas as apresentacoes, o professor faz perguntas rapidas para a turma.
Qualquer aluno pode ser chamado para responder.

**Por indicador:**

| Indicador | Pergunta 1 | Pergunta 2 |
|---|---|---|
| UC09 Ind.1 — Linear | "Se o coeficiente angular dobra, o que acontece com a inclinacao da reta?" | "Cite um exemplo real de relacao linear em dados." |
| UC09 Ind.2 — Polinomial | "Por que a parabola tem um ponto mais alto ou mais baixo?" | "O que acontece com y quando x fica muito grande numa cubica?" |
| UC09 Ind.3 — Logaritmica | "Por que usamos escala logaritmica para medir decibeis?" | "O que np.log10(1000) retorna? Por que?" |
| UC09 Ind.4 — Exponencial | "Qual a diferenca entre crescimento linear e exponencial de usuarios?" | "O que np.exp(0) retorna? E np.exp(1)?" |
| UC03 Ind.4 — Sequencias | "A sequencia 2, 4, 8, 16 e uma PA ou PG? Como voce sabe?" | "Qual funcao matematica representa esse padrao?" |
| UC05 Ind.2 — Bibliotecas | "Para que serve o np.linspace? Por que e melhor que um range normal?" | "O que plt.legend() faz no grafico?" |

---

## Criterios de avaliacao (professor)

| Criterio | A — Atendido | PA — Parcialmente Atendido | NA — Nao Atendido |
|---|---|---|---|
| Explica a funcao com as proprias palavras | Claro, com formula e comportamento do grafico | Explica mas comete imprecisao | Nao consegue explicar |
| Relaciona com exemplo real | Exemplo concreto e correto em IA/dados | Exemplo vago ou so repete o enunciado | Sem exemplo |
| Explica o codigo numpy/matplotlib | Sabe o que cada funcao faz | Sabe o que o codigo faz mas nao as funcoes | Nao sabe explicar o codigo |
| Responde as perguntas finais | Responde corretamente sem ajuda | Responde com pequena correcao | Nao responde ou responde errado |

---

## Resumo do cronograma

| Dia | O que acontece |
|---|---|
| **Quinta** | Professor define grupos · cada grupo pesquisa e monta o Colab em sala |
| **Sexta** | 6 grupos × 12 min de apresentacao · perguntas ao final · avaliacao individual |
| **14/05** | Recuperacao — alunos com PA ou NA reapresentam a parte pendente (15 min) |
