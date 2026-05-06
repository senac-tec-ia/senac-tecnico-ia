---
theme: ../../../neural-slides-template
colorSchema: dark
title: "Técnico em IA - Aula 21"
author: Leonardo Zanini
github: LeoZanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 21"
aulaDate: "2026-05-07"
unlockHour: 13
bgPreset: palette
layout: cover
---

# Aula 21 Dois Momentos, Uma Meta

## Fim Av05 - Começo Av06

---
layout: default
card: true
bgPreset: animate
aulaNum: "Aula 21"
---

<!-- SLIDE 2 -->
<!-- objetivo: aluno entende a estrutura do dia antes de qualquer atividade -->

# Como funciona o dia de hoje

**Dois momentos separados. Não misture.**

| Período | Horário | O que acontece |
|---|---|---|
| Manhã | Até 09h35 | Av05 aberta - Colab, silêncio, entrega |
| Intervalo | 09h35 | Ponto de virada. Av05 encerra aqui. |
| Manhã | Após intervalo | Av06 começa - grupos, papéis, código-base |

<MLToast title="REGRA EXPLÍCITA">
  Quem tocar na Av05 depois do intervalo está prejudicando o próprio grupo e a si mesmo na AV06
</MLToast>

---
layout: default
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 21"
---

<!-- SLIDE 3 -->
<!-- [ATIV AVALIATIVA] - Av05 janela final -->
<!-- objetivo: aluno sabe que esta é a última chance de entregar a Av05 em sala -->

# Av05 - Últimos minutos

**Silêncio. Colab aberto. Essa é a última janela em sala.**

Checklist antes de entregar:

- Colab com nome correto: `Av05 - Nome1 e Nome2`
- Código rodando sem erros
- SQL + Python integrados conforme o enunciado
- Entregue via formulário ou e-mail do professor

> Quem não entregou até o intervalo: essa era a última janela em sala. Não há mais prazo para Av05 após 09h35.

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
aulaNum: "Aula 21"
---

<!-- SLIDE 4 - divisor de bloco, não conta para consecutivos -->

# PARTE 2
## Av06: Seminário de Funções Matemáticas

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 21"
---

<!-- SLIDE 5 -->
<!-- [DEBATE] -->
<!-- objetivo: ativar o que os alunos já sabem sobre pesquisar e descobrir por conta própria -->

# Sala de aula invertida

**Discussão coletiva:**

- Quando você quer aprender algo novo no YouTube, o que faz?
- Você já montou algo lendo uma documentação ou tutorial sozinho?
- Qual é a diferença entre alguém te explicar e você descobrir por conta?

> Hoje você pesquisa, descobre e constrói. O professor não dá a resposta.

---
layout: default
card: true
bgPreset: animate
aulaNum: "Aula 21"
---

<!-- SLIDE 6 -->
<!-- [TEORIA] -->
<!-- objetivo: aluno entende o formato da Av06 e que a nota é individual -->

# O que é a Av06?

**Seminário de Funções Matemáticas - trabalho em grupo, nota individual.**

- Cada grupo recebe uma função matemática para pesquisar
- Hoje: você pesquisa, experimenta e monta o Colab em sala
- Amanhã (A22): você apresenta para a turma, sem consulta, sem celular

> A nota é individual: dois alunos do mesmo grupo podem ter notas diferentes se um soube explicar e o outro não.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 21"
---

<!-- SLIDE 7 -->
<!-- [TEORIA] -->
<!-- objetivo: aluno sabe exatamente qual tema é do seu grupo -->

# Os 6 temas e os grupos

<SlideTable fullWidth>

| Grupo | Função | Fórmula |
|---|---|---|
| 1 | Linear | y = ax + b |
| 2 | Quadrática | y = ax² + bx + c |
| 3 | Polinomial grau 3 | y = ax³ + bx² + cx + d |
| 4 | Logarítmica | y = log(x) |
| 5 | Exponencial | y = a · eˣ |
| 6 | Sigmoide | y = 1 / (1 + e⁻ˣ) |

</SlideTable>

<!-- nota do professor: definir grupos e sortear temas em sala agora -->

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 21"
---

<!-- SLIDE 8 -->
<!-- [TEORIA] -->
<!-- objetivo: aluno entende o papel que recebeu e o que precisa fazer -->

# Os 5 papéis dentro do grupo

**Todos mexem no código. Cada um é dono de uma parte.**

<SlideTable fullWidth>

| # | Papel | Bloco do código | Camada conceitual |
|---|---|---|---|
| 1 | Fórmula | Onde os parâmetros (a, b...) aparecem | A fórmula e o que cada parâmetro muda |
| 2 | Dados | `np.linspace(início, fim, pontos)` | O que é gerar dados e por que esses valores |
| 3 | Cálculo | A linha que calcula y | O que a biblioteca fez por eles |
| 4 | Gráfico | `plt.plot`, labels, title | O que cada eixo representa |
| 5 | Mundo real | Modifica parâmetros com dado real | Número concreto + fonte |

</SlideTable>

---
layout: two-cols-text
card: true
bgPreset: animate
aulaNum: "Aula 21"
---

<!-- SLIDE 9 -->
<!-- [TEORIA] -->
<!-- objetivo: aluno do papel Mundo real entende o que se espera dele com precisão -->

# O papel Mundo real - o que não pode

**O que não serve:**
- "A função exponencial é usada em IA."
- "O crescimento logarítmico aparece em computação."
- Frases vazias sem dado concreto.

::right::

**O que serve:**
- "O Instagram saiu de 1 milhão para 100 milhões de usuários em dois anos. Eu mudei o parâmetro `a` para simular esse crescimento no gráfico."
- Um número real + a modificação no código que prova.

> Não é citar. É simular.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 21"
---

<!-- SLIDE 10 -->
<!-- [TEORIA] -->
<!-- objetivo: aluno entende o que é `import` sem nunca ter visto numpy ou matplotlib formalmente -->

# O que é `import`?

**`import` traz uma biblioteca pronta para você usar.**

Pense assim: você não precisa fabricar um martelo para pregar um prego. Você pega o martelo de uma caixa de ferramentas que já existe.

```python
import numpy as np          # biblioteca de cálculos numéricos
import matplotlib.pyplot as plt  # biblioteca para criar gráficos
```

- `numpy` (lê-se "nam-pai") faz cálculos com listas de números de forma rápida
- `matplotlib` cria gráficos de linha, pontos, barras e mais
- O `as np` e `as plt` são apelidos para escrever menos

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 21"
---

<!-- SLIDE 11 -->
<!-- [TEORIA] -->
<!-- objetivo: aluno sabe como ler e descobrir funções numpy e matplotlib via documentação -->

# Como usar o que foi importado

Depois do `import`, você usa o apelido seguido de ponto e o nome da função:

```python
np.linspace(-10, 10, 100)   # gera 100 pontos entre -10 e 10
np.exp(x)                    # calcula e elevado a x para cada ponto
np.log(x)                    # logaritmo natural de x

plt.plot(x, y)               # desenha a curva
plt.xlabel("eixo x")         # nome do eixo horizontal
plt.ylabel("eixo y")         # nome do eixo vertical
plt.title("Meu gráfico")     # título do gráfico
plt.grid(True)               # mostra a grade
plt.show()                   # exibe o gráfico
```

> Não sabe o que uma função faz? Leia a documentação. O próximo slide mostra onde.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 21"
---

<!-- SLIDE 12 -->
<!-- [TEORIA] -->
<!-- objetivo: aluno sabe onde pesquisar sem depender do ChatGPT ou do professor -->

# Onde encontrar ajuda (sem ChatGPT)

**Use essas fontes antes de pedir ajuda:**

- **NumPy:** `numpy.org/doc/stable/reference/routines.math.html`
- **Matplotlib:** `matplotlib.org/stable/gallery/index.html`
- **Google Colab:** `colab.research.google.com/notebooks/intro.ipynb`
- **Khan Academy (funções):** `pt.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions`
- **3Blue1Brown:** `youtube.com/@3blue1brown` - busque "functions" ou "neural networks"

> Pesquisar documentação é parte do trabalho de quem programa. Quem souber fazer isso na apresentação amanhã vai bem.

---
layout: two-cols-header
card: true
bgPreset: default
aulaNum: "Aula 21"
---

<!-- SLIDE 13 -->
<!-- [EXERCICIO] - Grupo 1, Linear -->
<!-- [EXCECAO: slides-por-grupo] -->
<!-- objetivo: Grupo 1 recebe o código-base e entende onde cada papel age -->

# Grupo 1 - Linear &nbsp;|&nbsp; `y = ax + b`

::left::

```python
import numpy as np
import matplotlib.pyplot as plt

a, b = 1, 0
x = np.linspace(-10, 10, 100)
y = # [INSIRA AQUI SUA FUNÇÃO]

plt.plot(x, y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("Grupo 1 - Linear")
plt.grid(True)
plt.show()
```

::right::

**O que cada papel apresenta:**

- **Fórmula:** onde estão `a` e `b` no código?
- **Dados:** por que -10 a 10? O que muda com mais pontos?
- **Cálculo:** qual linha calcula `y`?
- **Gráfico:** o que os eixos mostram?
- **Mundo real:** número concreto + modifica o código

> O que muda no gráfico se dobrar `a`?

---
layout: two-cols-header
card: true
bgPreset: default
aulaNum: "Aula 21"
---

<!-- SLIDE 14 -->
<!-- [EXERCICIO] - Grupo 2, Quadrática -->
<!-- [EXCECAO: slides-por-grupo] -->
<!-- objetivo: Grupo 2 recebe o código-base e entende onde cada papel age -->

# Grupo 2 - Quadrática &nbsp;|&nbsp; `y = ax² + bx + c`

::left::

```python
import numpy as np
import matplotlib.pyplot as plt

a, b, c = 1, 0, 0
x = np.linspace(-10, 10, 100)
y = # [INSIRA AQUI SUA FUNÇÃO]

plt.plot(x, y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("Grupo 2 - Quadratica")
plt.grid(True)
plt.show()
```

::right::

**O que cada papel apresenta:**

- **Fórmula:** onde estão `a`, `b` e `c` no código?
- **Dados:** por que -10 a 10? O que muda com mais pontos?
- **Cálculo:** qual linha calcula `y`?
- **Gráfico:** onde está o vértice? O que os eixos mostram?
- **Mundo real:** número concreto + modifica o código

> O que muda quando `a` é negativo?

---
layout: two-cols-header
card: true
bgPreset: default
aulaNum: "Aula 21"
---

<!-- SLIDE 15 -->
<!-- [EXERCICIO] - Grupo 3, Polinomial -->
<!-- [EXCECAO: slides-por-grupo] -->
<!-- objetivo: Grupo 3 recebe o código-base e entende onde cada papel age -->

# Grupo 3 - Polinomial &nbsp;|&nbsp; `y = ax³ + bx² + cx + d`

::left::

```python
import numpy as np
import matplotlib.pyplot as plt

a, b, c, d = 1, 0, 0, 0
x = np.linspace(-10, 10, 100)
y = # [INSIRA AQUI SUA FUNÇÃO]

plt.plot(x, y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("Grupo 3 - Polinomial grau 3")
plt.grid(True)
plt.show()
```

::right::

**O que cada papel apresenta:**

- **Fórmula:** onde estão `a`, `b`, `c` e `d`?
- **Dados:** por que -10 a 10? O que muda com mais pontos?
- **Cálculo:** qual linha calcula `y`?
- **Gráfico:** quantas "curvas" o gráfico tem? Por quê?
- **Mundo real:** número concreto + modifica o código

> O que acontece com `y` quando `x` cresce muito?

---
layout: two-cols-header
card: true
bgPreset: default
aulaNum: "Aula 21"
---

<!-- SLIDE 16 -->
<!-- [EXERCICIO] - Grupo 4, Logarítmica -->
<!-- [EXCECAO: slides-por-grupo] -->
<!-- objetivo: Grupo 4 recebe o código-base e entende onde cada papel age -->

# Grupo 4 - Logarítmica &nbsp;|&nbsp; `y = log(x)`

::left::

```python
import numpy as np
import matplotlib.pyplot as plt

# x deve ser > 0 para log funcionar
x = np.linspace(0.1, 10, 100)
y = # [INSIRA AQUI SUA FUNÇÃO]
# Dica: np.log(x) existe na biblioteca

plt.plot(x, y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("Grupo 4 - Logaritmica")
plt.grid(True)
plt.show()
```

::right::

**O que cada papel apresenta:**

- **Fórmula:** o que o log faz com os valores de `x`?
- **Dados:** por que começa em 0.1 e não em 0?
- **Cálculo:** qual linha calcula `y`? O que `np.log` faz?
- **Gráfico:** a curva sobe mais rápido no começo ou no final?
- **Mundo real:** número concreto + modifica o código

> O que acontece se tentar `np.log(0)`?

---
layout: two-cols-header
card: true
bgPreset: default
aulaNum: "Aula 21"
---

<!-- SLIDE 17 -->
<!-- [EXERCICIO] - Grupo 5, Exponencial -->
<!-- [EXCECAO: slides-por-grupo] -->
<!-- objetivo: Grupo 5 recebe o código-base e entende onde cada papel age -->

# Grupo 5 - Exponencial &nbsp;|&nbsp; `y = a · eˣ`

::left::

```python
import numpy as np
import matplotlib.pyplot as plt

a = 1
x = np.linspace(-5, 5, 100)
y = # [INSIRA AQUI SUA FUNÇÃO]
# Dica: np.exp(x) existe na biblioteca

plt.plot(x, y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("Grupo 5 - Exponencial")
plt.grid(True)
plt.show()
```

::right::

**O que cada papel apresenta:**

- **Fórmula:** o que `a` controla? O que é `e`?
- **Dados:** por que -5 a 5? O que acontece com x muito grande?
- **Cálculo:** o que `np.exp(x)` calcula exatamente?
- **Gráfico:** por que a curva dispara para x positivo?
- **Mundo real:** número concreto + modifica o código

> Qual é a diferença entre `np.exp(x)` e `2**x`?

---
layout: two-cols-header
card: true
bgPreset: default
aulaNum: "Aula 21"
---

<!-- SLIDE 18 -->
<!-- [EXERCICIO] - Grupo 6, Sigmoide -->
<!-- [EXCECAO: slides-por-grupo] -->
<!-- objetivo: Grupo 6 recebe o código-base com dica e pergunta-gatilho sobre o neurônio artificial -->

# Grupo 6 - Sigmoide &nbsp;|&nbsp; `y = 1 / (1 + e⁻ˣ)`

::left::

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-10, 10, 100)
y = # [INSIRA AQUI SUA FUNÇÃO]
# Dica: y = 1 / (1 + np.exp(-x))

plt.plot(x, y)
plt.xlabel("x")
plt.ylabel("y")
plt.title("Grupo 6 - Sigmoide")
plt.grid(True)
plt.show()
```

::right::

**O que cada papel apresenta:**

- **Fórmula:** o que a fórmula calcula? Qual é o resultado máximo e mínimo?
- **Dados:** por que -10 a 10?
- **Cálculo:** o que `np.exp(-x)` faz? Por que o `1 +` e o `1 /`?
- **Gráfico:** o formato em "S" - o que ele mostra?
- **Mundo real:** saída de um neurônio artificial: o que isso significa?

> Qual é a saída quando `x` é 0? E quando `x` é 10?

---
layout: default
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 21"
---

<!-- SLIDE 19 -->
<!-- [ATIV AVALIATIVA] - Av06 -->
<!-- objetivo: aluno sabe exatamente o que precisa entregar ao final do dia -->

# O que entregar hoje

**Entrega ao final da aula (ou início de amanhã, antes das apresentações).**

- Colab com nome: `Av06 - Grupo N - [Nome da Função]`
- Código rodando sem erros, gráfico visível com título e rótulos nos eixos
- Cada membro sabe explicar a parte que é sua
- Exemplo real anotado no código com pelo menos um número concreto

**Lembre:** amanhã o professor pode perguntar qualquer linha do código para qualquer membro do grupo.

> Quem entender o que cada linha faz vai bem. Quem só copiou vai travar.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 21"
---

<!-- SLIDE 20 -->
<!-- [TAREFA DE CASA] -->
<!-- tarefa de casa: aula 21 -->

# Tarefa de Casa: Aula 21

> Prazo: amanhã (A22), antes das apresentações

**O que fazer:**
- Rode o Colab em casa e teste mudar os parâmetros
- Pesquise um dado real com número concreto para a sua função
- Anote o dado, a fonte e como o código simula isso
- Explore a doc: `numpy.org/doc/stable` e `matplotlib.org/stable/gallery`

---
layout: end
bgPreset: animate
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
aulaNum: "Aula 21"
---

# Até a A22!

**Hoje:** pesquisa em grupo, Colab pronto, cada um sabe sua parte

**Amanhã:** apresentações após o intervalo - 6 grupos, cada aluno explica o seu bloco
