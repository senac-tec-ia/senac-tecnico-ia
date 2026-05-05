---
theme: ../../../neural-slides-template
colorSchema: dark
title: "Técnico em IA - Aula 21"
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

# O que preparar hoje

**1. A teoria** - você explica, não lê

- O que é a função? Como é a fórmula? O que cada letra significa?
- O gráfico cresce, cai, satura? Por que? Onde aparece em IA?

**2. O código no Colab** - use `numpy` e `matplotlib`

- Gráfico com título, rótulos nos eixos, pelo menos uma curva visível

**3. Um exemplo real** - concreto, em ML, dados ou tecnologia

- Não vale "aparece em matemática" - precisa de contexto real

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
layout: two-cols
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 1 completa os parâmetros da função linear com os valores corretos -->

# Scaffold - Grupo 1: Linear

```python
x = np.linspace([INICIO], [FIM], [N_PONTOS])

a = [COEFICIENTE_ANGULAR]   # inclinação
b = [COEFICIENTE_LINEAR]    # intercepto y

y = a * x + b

plt.plot(x, y, label="[y = ax + b]")
plt.title("[TITULO]")
plt.xlabel("[EIXO_X]")
plt.ylabel("[EIXO_Y]")
plt.legend()
plt.grid(True)
plt.show()
```

::right::

**y = ax + b**

- `a` → inclinação da reta
- `b` → onde cruza o eixo y
- `a > 0` → sobe · `a < 0` → desce
- `a = 0` → reta horizontal

> O que muda quando `a` dobra?

---
layout: two-cols
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 2 completa os parâmetros da função quadrática com os valores corretos -->

# Scaffold - Grupo 2: Quadrática

```python
x = np.linspace([INICIO], [FIM], [N_PONTOS])

a = [VALOR_A]   # a > 0 → abre pra cima
b = [VALOR_B]
c = [VALOR_C]   # cruza o eixo y

y = a * x**2 + b * x + c

plt.plot(x, y, label="[y = ax²+bx+c]")
plt.title("[TITULO]")
plt.xlabel("[EIXO_X]")
plt.ylabel("[EIXO_Y]")
plt.legend()
plt.grid(True)
plt.show()
```

::right::

**y = ax² + bx + c**

- `a > 0` → parábola abre pra cima
- `a < 0` → parábola abre pra baixo
- vértice = ponto mais alto ou mais baixo
- `c` → onde cruza o eixo y

> Por que a parábola tem um ponto extremo?

---
layout: two-cols
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 3 completa os parâmetros da função polinomial de grau 3 ou superior -->

# Scaffold - Grupo 3: Polinomial

```python
x = np.linspace([INICIO], [FIM], [N_PONTOS])

a = [VALOR_A]
b = [VALOR_B]
c = [VALOR_C]
d = [VALOR_D]
y = a * x**3 + b * x**2 + c * x + d

plt.plot(x, y, label="[y = ax³+bx²+cx+d]")
plt.title("[TITULO]")
plt.xlabel("[EIXO_X]")
plt.ylabel("[EIXO_Y]")
plt.legend()
plt.grid(True)
plt.show()
```

::right::

**y = ax³ + bx² + cx + d**

- grau 3 → pode ter até 2 "curvas"
- `a > 0` → sobe no infinito
- `a < 0` → desce no infinito
- pode ter inflexão (muda a concavidade)

> O que acontece com y quando x → ∞?

---
layout: two-cols
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 4 completa os parâmetros da função logarítmica e entende a restrição x > 0 -->

# Scaffold - Grupo 4: Logarítmica

```python
# ATENÇÃO: [INICIO] deve ser > 0
x = np.linspace([INICIO], [FIM], [N_PONTOS])

y = np.[FUNCAO_LOG](x)

plt.plot(x, y, label="[y = log(x)]")
plt.title("[TITULO]")
plt.xlabel("[EIXO_X]")
plt.ylabel("[EIXO_Y]")
plt.legend()
plt.grid(True)
plt.show()
```

::right::

**y = log(x)**

- `np.log` → logaritmo natural (base e)
- `np.log10` → log base 10
- x deve ser **> 0** (log de 0 é -∞)
- cresce infinitamente, mas devagar

> `np.log10(1000)` retorna quanto? Por quê?

---
layout: two-cols
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 5 completa os parâmetros da função exponencial e entende o crescimento rápido -->

# Scaffold - Grupo 5: Exponencial

```python
x = np.linspace([INICIO], [FIM], [N_PONTOS])

a = [COEFICIENTE]   # escala vertical

y = a * np.[FUNCAO_EXP](x)

plt.plot(x, y, label="[y = a·eˣ]")
plt.title("[TITULO]")
plt.xlabel("[EIXO_X]")
plt.ylabel("[EIXO_Y]")
plt.legend()
plt.grid(True)
plt.show()
```

::right::

**y = a · eˣ**

- `np.exp(x)` = eˣ (e ≈ 2,718)
- `a` escala a curva verticalmente
- cresce muito rápido → "explosão"
- `np.exp(0)` = 1 · `np.exp(1)` = e

> Diferença entre crescimento linear e exponencial?

---
layout: two-cols
card: true
bgPreset: default
---

<!-- objetivo: aluno do Grupo 6 completa os parâmetros da sequência e entende a diferença entre PA e PG -->

# Scaffold - Grupo 6: Sequências

```python
n = np.arange([INICIO], [FIM])

# Opção A - PA: an = a1 + (n-1) * r
y = [PRIMEIRO_TERMO] + (n - 1) * [RAZAO_PA]

# Opção B - PG: an = a1 * q^(n-1)
# y = [PRIMEIRO_TERMO] * [RAZAO_PG] ** (n - 1)

plt.scatter(n, y, label="[NOME]")
plt.title("[TITULO]")
plt.xlabel("[n (índice)]")
plt.ylabel("[valor]")
plt.legend()
plt.grid(True)
plt.show()
```

::right::

**PA vs PG**

- PA → soma razão constante: 2, 5, 8, 11...
- PG → multiplica razão: 2, 6, 18, 54...
- use `scatter` (pontos) - sequência é discreta

> 2, 4, 8, 16 é PA ou PG? Como sabe?

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno compreende os critérios pelos quais será avaliado individualmente na sexta -->

# Critérios - nota individual

| | **A** | **PA** | **NA** |
|---|---|---|---|
| Explica a função | Com fórmula e gráfico | Com imprecisão | Não consegue |
| Exemplo real | Concreto em IA/dados | Vago | Sem exemplo |
| Explica o código | Sabe cada função | Sabe o geral | Não sabe |
| Responde perguntas | Correto sem ajuda | Com correção | Não responde |

legenda: A=Atendido, PA=Parcialmente Atendido (recuperação simples), NA = Não atendido (recuperação completa, nova atividade)

---
layout: default
card: true
bgPreset: animate
---

<!-- objetivo: aluno sabe o que acontece na sexta e como se preparar hoje para a apresentação -->

# O que acontece na sexta (amanhã)

- Cada grupo tem **12 minutos** no total
- Cada aluno fala pelo menos **2 minutos** sobre a parte que pesquisou
- Mostram o gráfico na tela (Colab aberto no projetor)
- O professor pode perguntar sobre qualquer linha do código
- Sem celular na mão · sem ler folhas · sem copiar da tela
- Pode gesticular, desenhar no quadro, usar o gráfico na tela

Ao final: o professor faz perguntas rápidas para a turma.

---
layout: default
card: true
bgPreset: default
---

<!-- objetivo: aluno conhece as perguntas que o professor pode fazer ao final e se prepara para elas -->

# Perguntas amanhã - qualquer aluno pode ser chamado

<SlideTable compact fullWidth>

| Indicador | Pergunta |
|---|---|
| Linear | "Se `a` dobra, o que muda na inclinação?" |
| Polinomial | "O que acontece com y quando x → ∞?" |
| Logarítmica | "`np.log10(1000)` retorna quanto?" |
| Exponencial | "Diferença entre crescimento linear e exponencial?" |
| Sequências | "2, 4, 8, 16 é PA ou PG?" |
| Bibliotecas | "Para que serve `np.linspace`?" |

</SlideTable>

---
layout: default
card: true
bgPreset: default
---

<!-- [ATIV AVALIATIVA] -->

# Checklist da Av.06

- [ ] Notebook: `Av06 - Grupo N - [TEMA]`
- [ ] Gráfico com título, rótulos e curva visível
- [ ] `[PLACEHOLDERS]` substituídos e exemplo real anotado
- [ ] Sabe explicar a fórmula e cada parâmetro
- [ ] Sabe explicar o que cada linha do código faz
- [ ] Sabe onde a função aparece em IA ou dados

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

# Av.05 - Finalize agora

- Os slides de referência da A20 estão disponíveis no link do curso
- Use os scaffolds como guia e entregue o Colab **antes do fim desta aula**
- Formato: `Av05 - Nome1 e Nome2: [link do Colab]`
- Depois de entregar: una-se ao grupo da Av.06 imediatamente

Na sexta é dia de apresentação da Av.06 - não deixe para amanhã.

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
