---
theme: ../../../neural-slides-template
colorSchema: dark
title: "Técnico em IA — Aula 21"
author: Leonardo Zanini
github: LeoZanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 21"
aulaDate: "2026-05-08"
unlockHour: 13
bgPreset: palette
layout: cover
---

# Aula 21

## Seminário de Funções Matemáticas
## Av.06 - Desenvolvimento em Sala | 08/05/2026

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
---

# PARTE 1 - Av.06: Seminário de Funções Matemáticas
*Hoje: pesquisa + Colab. Amanhã: apresentação sem consulta.*

---
layout: default
card: true
bgPreset: animate
---

<!-- objetivo: aluno compreende o formato e o cronograma do seminário antes de começar a trabalhar -->

# O que é o Seminário de Funções

**Você vai pesquisar, montar um gráfico em Python e apresentar o que aprendeu.**

- Cada grupo recebe um tipo de função matemática
- Na **quinta (hoje):** você pesquisa, experimenta e monta o Colab em sala
- Na **sexta (amanhã):** você apresenta para a turma - sem celular, sem consulta, sem leitura

> A nota **é** individual: dois alunos do mesmo grupo podem ter avaliações diferentes se um explicou bem e o outro não soube responder.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno sabe exatamente qual é o seu tema e o que a função central representa -->

# Grupos e Temas

<SlideTable fullWidth>

| Grupo | Tema | Função central |
|---|---|---|
| **1** | Funções Lineares | y = ax + b |
| **2** | Funções Quadráticas | y = ax² + bx + c |
| **3** | Funções Polinomiais (grau 3+) | y = ax³ + bx² + ... |
| **4** | Funções Logarítmicas | y = log(x) |
| **5** | Funções Exponenciais | y = a * e^x |
| **6** | Sequências e Padrões Numéricos | PA, PG, Fibonacci, crescimento |

</SlideTable>

*Os grupos são definidos pelo professor agora.*

---
layout: default
card: true
bgPreset: default
---

<!-- objetivo: aluno sabe o que precisa entregar ao final da quinta para estar preparado para a sexta -->

# O que preparar hoje (três coisas)

**1. A teoria - você explica, não lê**

- O que é esse tipo de função?
- Como é a fórmula? O que cada letra significa?
- O gráfico cresce, cai, satura, oscila? Por que?
- Onde aparece na vida real? Em dados, tecnologia ou IA?

**2. O código no Colab**

- Use `numpy` e `matplotlib` para plotar sua função
- O gráfico precisa ter: título, rótulos nos eixos, pelo menos uma curva visível

**3. Um exemplo real em IA ou dados**

- Onde sua função aparece em Machine Learning, dados ou tecnologia?

---
layout: default
card: true
bgPreset: default
---

<!-- objetivo: aluno sabe o que cada grupo precisa levar de exemplo real para a apresentação -->

# Exemplos reais por função

- **Linear:** previsão de consumo, regressão linear em ML
- **Quadrática:** otimização de custo, parabola de trajetoria em robotica
- **Polinomial:** curvas de ajuste em datasets complexos
- **Logarítmica:** escala de decibeis, complexidade O(log n) de algoritmos
- **Exponencial:** crescimento de usuarios, treinamento de redes neurais, juros compostos
- **Sequências:** progressão de camadas em redes neurais, Fibonacci na natureza

> Escolha **um** exemplo concreto e saiba explicar por que sua função aparece ali.

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
---

# Scaffolds de Código
*Estrutura de partida - você completa os parâmetros*

---
layout: default
card: true
bgPreset: default
---

<!-- objetivo: aluno entende o scaffold padrão do Colab antes de abrir os slides específicos do seu grupo -->

# Setup obrigatório - primeira célula do Colab

```python
# Av.06 - Seminario: Funcoes Matematicas
# Grupo N - [NOME DO TEMA]
# Alunos: [NOME1], [NOME2], [NOME3]
# Data: 08/05/2026

import numpy as np
import matplotlib.pyplot as plt
```

> Renomeie o notebook para: `Av06 - Grupo N - [TEMA]`
> Todo o código do grupo fica neste mesmo notebook.

---
layout: default
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 1 completa os parâmetros da função linear com os valores corretos -->

# Scaffold - Grupo 1: Funções Lineares

```python
# Grupo 1 - Linear: y = ax + b

x = np.linspace([INICIO], [FIM], [N_PONTOS])

# Defina os coeficientes:
a = [COEFICIENTE_ANGULAR]   # inclinacao da reta
b = [COEFICIENTE_LINEAR]    # onde a reta cruza o eixo y

y = a * x + b

plt.plot(x, y, label="[NOME_DA_FUNCAO_ex: y = 2x + 3]")
plt.title("[TITULO_DO_GRAFICO]")
plt.xlabel("[ROTULO_EIXO_X]")
plt.ylabel("[ROTULO_EIXO_Y]")
plt.legend()
plt.grid(True)
plt.show()
```

> O que muda quando `a` e negativo? E quando `a = 0`? Saiba responder isso amanhã.

---
layout: default
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 2 completa os parâmetros da função quadrática com os valores corretos -->

# Scaffold - Grupo 2: Funções Quadráticas

```python
# Grupo 2 - Quadratica: y = ax² + bx + c

x = np.linspace([INICIO], [FIM], [N_PONTOS])

a = [VALOR_A]   # abre para cima (a > 0) ou para baixo (a < 0)
b = [VALOR_B]
c = [VALOR_C]   # ponto onde a parabola cruza o eixo y

y = a * x**2 + b * x + c

plt.plot(x, y, label="[NOME_DA_FUNCAO]")
plt.title("[TITULO_DO_GRAFICO]")
plt.xlabel("[ROTULO_EIXO_X]")
plt.ylabel("[ROTULO_EIXO_Y]")
plt.legend()
plt.grid(True)
plt.show()
```

> Por que a parabola tem um ponto mais alto ou mais baixo? Saiba explicar isso amanhã.

---
layout: default
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 3 completa os parâmetros da função polinomial de grau 3 ou superior -->

# Scaffold - Grupo 3: Funções Polinomiais

```python
# Grupo 3 - Polinomial grau 3+: y = ax³ + bx² + cx + d

x = np.linspace([INICIO], [FIM], [N_PONTOS])

a = [VALOR_A]
b = [VALOR_B]
c = [VALOR_C]
d = [VALOR_D]

y = a * x**3 + b * x**2 + c * x + d

plt.plot(x, y, label="[NOME_DA_FUNCAO]")
plt.title("[TITULO_DO_GRAFICO]")
plt.xlabel("[ROTULO_EIXO_X]")
plt.ylabel("[ROTULO_EIXO_Y]")
plt.legend()
plt.grid(True)
plt.show()
```

> O que acontece com y quando x fica muito grande numa cúbica? Pesquise isso.

---
layout: default
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 4 completa os parâmetros da função logarítmica e entende a restrição x > 0 -->

# Scaffold - Grupo 4: Funções Logarítmicas

```python
# Grupo 4 - Logaritmica: y = log(x)
# ATENCAO: x deve ser > 0 para o logaritmo funcionar

x = np.linspace([INICIO], [FIM], [N_PONTOS])   # [INICIO] deve ser > 0

y = np.[FUNCAO_LOG](x)   # np.log = ln (base e) | np.log10 = log base 10

plt.plot(x, y, label="[NOME_DA_FUNCAO_ex: y = ln(x)]")
plt.title("[TITULO_DO_GRAFICO]")
plt.xlabel("[ROTULO_EIXO_X]")
plt.ylabel("[ROTULO_EIXO_Y]")
plt.legend()
plt.grid(True)
plt.show()
```

> `np.log10(1000)` retorna quanto? Por que? Saiba responder isso amanhã.

---
layout: default
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 5 completa os parâmetros da função exponencial e entende o crescimento rápido -->

# Scaffold - Grupo 5: Funções Exponenciais

```python
# Grupo 5 - Exponencial: y = a * e^x

x = np.linspace([INICIO], [FIM], [N_PONTOS])

a = [COEFICIENTE]   # escala vertical da curva

y = a * np.[FUNCAO_EXP](x)   # np.exp(x) = e^x

plt.plot(x, y, label="[NOME_DA_FUNCAO_ex: y = e^x]")
plt.title("[TITULO_DO_GRAFICO]")
plt.xlabel("[ROTULO_EIXO_X]")
plt.ylabel("[ROTULO_EIXO_Y]")
plt.legend()
plt.grid(True)
plt.show()
```

> `np.exp(0)` retorna quanto? E `np.exp(1)`? Saiba responder isso amanhã.

---
layout: default
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 6 completa os parâmetros da sequência e entende a diferença entre PA e PG -->

# Scaffold - Grupo 6: Sequências e Padrões

```python
# Grupo 6 - Sequencias: PA, PG, Fibonacci ou crescimento

n = np.arange([INICIO], [FIM])   # indices da sequencia

# Escolha UMA das opcoes abaixo e complete os valores:

# Opcao A - Progressao Aritmetica (PA): an = a1 + (n-1) * r
y = [PRIMEIRO_TERMO] + (n - 1) * [RAZAO_PA]

# Opcao B - Progressao Geometrica (PG): an = a1 * q^(n-1)
# y = [PRIMEIRO_TERMO] * [RAZAO_PG] ** (n - 1)

plt.scatter(n, y, label="[NOME_DA_SEQUENCIA]")   # scatter para sequencias discretas
plt.title("[TITULO_DO_GRAFICO]")
plt.xlabel("[ROTULO_EIXO_X_ex: n (indice)]")
plt.ylabel("[ROTULO_EIXO_Y_ex: valor]")
plt.legend()
plt.grid(True)
plt.show()
```

> A sequência 2, 4, 8, 16 é PA ou PG? Como você sabe? Saiba explicar amanhã.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno compreende os critérios pelos quais será avaliado individualmente na sexta -->

# Critérios de Avaliação Individual

<SlideTable fullWidth>

| Critério | A - Atendido | PA - Parcialmente | NA - Não Atendido |
|---|---|---|---|
| Explica a função | Claro, com fórmula e comportamento do gráfico | Explica mas comete imprecisão | Não consegue explicar |
| Exemplo real | Concreto e correto em IA/dados | Vago ou só repete o enunciado | Sem exemplo |
| Explica o código | Sabe o que cada função faz | Sabe o que o código faz, mas não as funções | Não sabe explicar |
| Responde perguntas | Corretamente sem ajuda | Com pequena correção | Não responde ou responde errado |

</SlideTable>

> A nota é individual. Garanta que você sabe explicar cada linha do código do grupo.

---
layout: default
card: true
bgPreset: animate
---

<!-- objetivo: aluno sabe o que acontece na sexta e como se preparar hoje para a apresentação -->

# O que acontece na sexta (amanhã)

**Formato da apresentação:**

- Cada grupo tem **12 minutos** no total
- Cada aluno fala pelo menos **2 minutos** sobre a parte que pesquisou
- Mostram o gráfico na tela (Colab aberto no projetor)
- Explicam o código - o professor pode perguntar sobre qualquer linha
- Explicam o exemplo real

**Regras na sexta:**

- Sem celular na mão durante a apresentação
- Sem ler folhas ou copiar da tela enquanto fala
- Pode gesticular, desenhar no quadro, usar o gráfico na tela

> Ao final: o professor faz perguntas rápidas para a turma. Qualquer aluno pode ser chamado.

---
layout: default
card: true
bgPreset: default
---

<!-- objetivo: aluno conhece as perguntas que o professor pode fazer ao final e se prepara para elas -->

# Perguntas que o professor pode fazer amanhã

<SlideTable compact fullWidth>

| UC/Indicador | Pergunta possível |
|---|---|
| UC09 - Linear | "Se o coeficiente angular dobra, o que acontece com a inclinação?" |
| UC09 - Polinomial | "O que acontece com y quando x fica muito grande numa cúbica?" |
| UC09 - Logarítmica | "O que `np.log10(1000)` retorna? Por que?" |
| UC09 - Exponencial | "Qual a diferença entre crescimento linear e exponencial?" |
| UC03 - Sequências | "A sequência 2, 4, 8, 16 é PA ou PG? Como você sabe?" |
| UC05 - Bibliotecas | "Para que serve o `np.linspace`? Por que é melhor que `range`?" |

</SlideTable>

> Estude essas perguntas com o grupo hoje. Qualquer aluno pode ser chamado amanhã.

---
layout: default
card: true
bgPreset: default
---

<!-- [ATIV AVALIATIVA] -->

# Checklist da Av.06 - O que entregar hoje

**Antes de sair da aula, o grupo deve ter:**

- [ ] Notebook do Colab renomeado: `Av06 - Grupo N - [TEMA]`
- [ ] `import numpy as np` e `import matplotlib.pyplot as plt` na primeira célula
- [ ] Gráfico plotado com título, rótulos nos eixos e pelo menos uma curva visível
- [ ] Todos os `[PLACEHOLDERS]` substituídos por valores reais
- [ ] Exemplo real em IA/dados identificado e anotado no notebook

**Cada aluno deve saber explicar:**

- [ ] O que é a função do grupo e qual a fórmula
- [ ] O que cada parâmetro do código faz
- [ ] Por que o gráfico tem o formato que tem
- [ ] Onde essa função aparece em IA ou dados reais

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
---

# PARTE 2 - Av.05: Quem Ainda Não Terminou
*Só para quem não entregou a Av.05*

---
layout: default
card: true
bgPreset: default
---

<!-- [ATIV AVALIATIVA] -->

# Av.05 - Finalize agora se não entregou

**Se você não terminou a Av.05 na A20:**

- Os slides de referência da A20 continuam disponíveis no link do curso
- Use os scaffolds de código da aula anterior como guia
- Entregue o link do Colab ao professor **antes do fim desta aula**
- Formato do email: `Av05 - Nome1 e Nome2: [link do Colab]`

**Prioridade de hoje:**

- Quem ainda está na Av.05: termine e entregue até o final desta aula
- Depois de entregar: une-se ao grupo da Av.06 imediatamente

> Não deixe para amanhã. Na sexta é dia de apresentação da Av.06.

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
---

# Organização dos grupos agora

**O professor define os grupos.**

Enquanto isso, pense:

- Qual função matemática você ja viu em algum lugar da vida real?
- Onde você ja percebeu um crescimento que não era linear?
- Alguma coisa que você usa todo dia tem um gráfico por tras. Qual?

> Anote uma ideia no caderno antes de começar. Vai ajudar na pesquisa.

---
layout: end
bgPreset: animate
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
---

# Até a A22!

**Hoje:** desenvolvimento do Seminário de Funções - pesquisa e Colab em sala

**Amanhã (A22 - sexta 09/05):** apresentações - 6 grupos × 12 min - sem consulta

Email para entregas: Leonardo.niclote@docente.pr.senac.br

*Quem sabe explicar o código que escreveu ja e programador.*
