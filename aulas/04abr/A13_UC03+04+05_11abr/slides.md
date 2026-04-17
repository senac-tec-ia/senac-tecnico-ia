---
# A13
# ──────────────────────────────────────────────────────────────
theme: ../../../neural-slides-template
colorSchema: dark
title: "Técnico em IA — Aula 13"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 13"
aulaDate: "2026-04-11"
unlockHour: 13
bgPreset: palette
layout: cover
# ──────────────────────────────────────────────────────────────
---

<!-- SLIDE 1 — [CAPA] -->

# Sábado de Gincana
## UC 03 + 04 + 05
## > Python · Matemática · Fundamentos de IA
## — de pé, em times, com placar
*11 de abril de 2026 — Sábado (Reposição)*



---
layout: default
card: true
bgPreset: palette
highContrast: true
---

<!-- SLIDE 2 — [SETUP] Material do Dia -->

# <carbon-tool-kit /> Antes de começar — precisamos montar tudo

**Quem terminar de preparar o seu item, senta. Silêncio quando todos sentarem.**

| # | O que fazer | Quantos alunos |
|---|---|---|
| 1 | Pegar folhas A4 e recortar em 8 tiras cada | 2 |
| 2 | Escrever nas tiras: `nota` · `if` · `bloco-verdadeiro` · `bloco-falso` · `for` · `print` — uma por tira | 2 |
| 3 | Recortar cartões pequenos e escrever **SIM** em verde, **NÃO** em vermelho, **DEPENDE** em amarelo — 1 jogo por time | 3 |
| 4 | Desenhar o eixo cartesiano no quadro (x de -5 a 5, y de -10 a 10) | 2 |
| 5 | Escrever o placar no canto do quadro: Times 1 a N, coluna de pontos | 1 |

---
layout: default
card: true
bgPreset: palette
highContrast: true
---

<!-- SLIDE 3 — [SETUP] Formação dos Times -->

# <carbon-group /> Formação dos Times

**Agora dividam em times de 3.**

- Cada time escolhe um **nome** (pode ser nome de modelo de IA, linguagem de programação, o que quiser)
- O professor anota o nome de cada time no placar do quadro
- Guardem os cartões **SIM / NÃO / DEPENDE** — vocês vão usar no Bloco 5

> Quando todos os times tiverem nome e o placar estiver pronto: **avisa o professor.**

---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 4 — [TEORIA] Placar do Dia -->

# Hoje tem gincana

**5 blocos · 5 dinâmicas · 1 campeão**

| Bloco | Disciplina | Dinâmica | Pts |
|---|---|---|---|
| 1 | Python | Python Humano (if/else + for) | 6 |
| 2 | Python | Fila do Bug + Código no Papel | 30 |
| 3 | Matemática | Plano Cartesiano Vivo | 8 |
| 4 | Matemática | Mini-Aula dos Alunos | avaliação |
| 5 | Fund. IA | Tribunal da IA | 8 |


---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 3 — [DIVISOR] Bloco 1 — Python Humano -->

# Bloco 1
## Python Humano

*UC05 · 30 min · de pé, sem computador*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 4 — [DINAMICA] Python Humano — Regras -->

# <carbon-user-multiple /> Python Humano — Como funciona

**Você recebe um cartão com um papel:**

| Cartão | O que você faz |
|---|---|
| `nota` | Você é a variável. Atualiza seu valor quando o professor falar |
| `if` | Você avalia a condição e aponta para o caminho certo |
| `for` | Você aponta para cada item da lista em ordem |
| `print` | Você anuncia em voz alta o que recebeu |

o programa executa linha por linha, de cima para baixo. Silêncio total até ser a sua vez.

---
layout: default
card: true
bgPreset: palette
colorSchema: dark
codeSize: lg
highContrast: true
---

<!-- SLIDE 5 — [DINAMICA] Rodada 1 — if/else -->

# <carbon-branch /> Rodada 1 — `if / else`

**Código no quadro:**

```python
nota = float(input("Nota: "))
if nota >= 6:
    print("Aprovado!")
else:
    print("Recuperação.")
```

**Papéis:** `nota` · `if`  · `print`
---
layout: default
card: true
bgPreset: palette
---
**O professor vai "digitar" 3 valores em sequência:**


| Rodada | Valor | Quem executa? |
|---|---|---|
| 1 | `nota = 4.5` | bloco-falso → print("Recuperação.") |
| 2 | `nota = 7.0` | bloco-verdadeiro → print("Aprovado!") |
| 3 | `nota = 6.0` | **caso-limite** — discutir em grupo |



> Troca metade dos atores a cada rodada. Todo mundo joga.

---
layout: default
card: true
bgPreset: palette
codeSize: lg
highContrast: true
---

<!-- SLIDE 6 — [DINAMICA] Rodada 2 — for -->

# <carbon-repeat /> Rodada 2 — `for`

**Código no quadro:**

```python
modelos = ["GPT-4", "CLAUDIO", "GEMINI"]

for modelo in modelos:
    print(f"Testando: {modelo}...")

print("Todos os modelos testados!")
```
---
layout: default
card: true
bgPreset: palette
---

**Papéis:**
- **1 aluno** = `for` — aponta para cada item em ordem, um de cada vez
- **1 aluno** = `print` dentro do loop — fala *"Testando: [nome]..."* a cada apontada
- **1 aluno** = `print` fora do loop — fica sentado, só levanta no final

<v-click>

**Perguntas após a rodada:**
1. O que acontece se a lista tiver **0 itens**?
2. O `print` de fora executou **quantas vezes**?
3. O `print` de dentro executou **quantas vezes**?

</v-click>

---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 7 — [DIVISOR] Bloco 2 — Fila do Bug -->

# Bloco 2
## Fila do Bug

*UC05 · 60 min · times de 3*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 8 — [DINAMICA] Fila do Bug — Regras -->

# <carbon-warning /> Fila do Bug — Regras

**Cada time forma uma fila de 3.**

O aluno na **frente** responde. Os outros: **silêncio absoluto.**

| Pontuação | Condição |
|---|---|
| **3 pts** | Acertou sozinho |
| **0 pts** | Precisou de ajuda |
| **+1 pt bônus** | Explicou a regra geral ("o problema é que...") |

O último da fila passa para a frente após cada bug. Todos respondem individualmente.

---
layout: default
card: true
bgPreset: palette
codeSize: lg
highContrast: true
---

<!-- SLIDE 9 — [DINAMICA] Bug 01 e 02 -->

# <carbon-code /> Bugs 01 e 02

**BUG 01 — O que está errado?**

```python
nota = float(input("Nota: "))
if nota >= 6:
print("Aprovado")
```

<AdminOnly>

> **Gabarito:** indentação. O `print` precisa de 4 espaços antes dele — é o que define que ele está dentro do `if`.

</AdminOnly>

---

**BUG 02 — O que esse código imprime de fato?**

```python
for i in range(5):
    print(i)
# deveria imprimir 1, 2, 3, 4, 5
```

<AdminOnly>

> **Gabarito:** imprime `0, 1, 2, 3, 4`. O `range(5)` começa em 0. Para imprimir 1 a 5: `range(1, 6)`.

</AdminOnly>

---
layout: default
card: true
bgPreset: palette
codeSize: lg
highContrast: true
---

<!-- SLIDE 10 — [DINAMICA] Bug 03 e 04 -->

# <carbon-code /> Bugs 03 e 04

**BUG 03 — Por que esse código dá erro?**

```python
n = input("Número: ")
if n > 5:
    print("Grande")
```

<AdminOnly>

> **Gabarito:** `input()` retorna texto (`str`), não número. Não dá para comparar texto com número. Correto: `n = float(input(...))` ou `int(input(...))`.

</AdminOnly>

---

**BUG 04 — Qual símbolo está faltando?**

```python
if nota >= 6
    print("Aprovado")
```

<AdminOnly>

> **Gabarito:** falta os dois-pontos `:` no final do `if`. Todo `if`, `else`, `elif`, `for` termina com `:`.

</AdminOnly>

---
layout: default
card: true
bgPreset: palette
codeSize: lg
highContrast: true
---

<!-- SLIDE 11 — [DINAMICA] Bug 05 e 06 -->

# <carbon-code /> Bugs 05 e 06

**BUG 05 — Qual o problema aqui?**

```python
if nota = 10:
    print("Perfeito")
```

<AdminOnly>

> **Gabarito:** `=` é atribuição (guardar valor). `==` é comparação (verificar se é igual). Dentro de `if`, sempre `==`.

</AdminOnly>

---
layout: default
card: true
bgPreset: palette
codeSize: lg
highContrast: true
---

**BUG 06 — O que vai aparecer na tela?**

```python
nome = "Leo"
print(nomes)
```

<AdminOnly>

> **Gabarito:** erro `NameError: name 'nomes' is not defined`. A variável foi criada como `nome` (sem o s), mas chamada como `nomes`.

</AdminOnly>

---
layout: default
card: true
bgPreset: palette
codeSize: md
highContrast: true
---

<!-- SLIDE 12 — [DINAMICA] Bug 07 e 08 -->

# <carbon-code /> Bugs 07 e 08

**BUG 07 — O que está na ordem errada?**

```python
if nota >= 6:
    print("Aprovado")
else:
    print("Recuperação")
elif nota >= 4:
    print("Pendente")
```

<AdminOnly>

> **Gabarito:** `elif` não pode vir depois do `else`. A ordem correta é sempre: `if` → `elif` → `else`. O `else` é sempre o último.

</AdminOnly>

---
layout: default
card: true
bgPreset: palette
codeSize: lg
highContrast: true
---

**BUG 08 — O que está errado na f-string?**

```python
nome = "Ana"
print("Olá, {nome}!")
```

<AdminOnly>

> **Gabarito:** falta o `f` antes das aspas. Sem o `f`, as chaves são tratadas como texto literal. Correto: `print(f"Olá, {nome}!")`.

</AdminOnly>

---
layout: default
card: true
bgPreset: palette
codeSize: lg
highContrast: true
---

<!-- SLIDE 13 — [DINAMICA] Bug 09 e 10 -->

# <carbon-code /> Bugs 09 e 10

**BUG 09 — O que falta nessa linha?**

```python
for item in lista
    print(item)
```

<AdminOnly>

> **Gabarito:** falta os dois-pontos `:` no final do `for`. Regra geral: toda estrutura de controle (`if`, `for`, `elif`, `else`) termina com `:`.

</AdminOnly>

---
layout: default
card: true
bgPreset: palette
codeSize: lg
highContrast: true
---

**BUG 10 — Por que dá erro?**

```python
print(resultado)
resultado = 10 + 5
```

<AdminOnly>

> **Gabarito:** você usou `resultado` antes de criar ela. Python executa linha por linha — a variável precisa existir antes de ser usada. Inverta as linhas.

</AdminOnly>

---
layout: default
card: true
bgPreset: palette
codeSize: lg
highContrast: true
---

<!-- SLIDE 14 — [DINAMICA] Código no Papel -->

# <carbon-edit /> Código no Papel — Individual

**Sem computador. Sem olhar para o lado. Caneta e papel.**

Escreva um programa completo que:

1. Leia o nome do aluno com `input()`
2. Leia a nota com `float(input())`
3. Se a nota for `>= 6`, imprima `"[nome]: Aprovado"`
4. Senão, imprima `"[nome]: Recuperação"`

> **10 minutos.** Após o tempo, 2 voluntários leem em voz alta. O professor "executa" no quadro.

<AdminOnly>

**Gabarito:**
```python
nome = input("Nome: ")
nota = float(input("Nota: "))
if nota >= 6:
    print(f"{nome}: Aprovado")
else:
    print(f"{nome}: Recuperação")
```

</AdminOnly>

---
layout: default
card: true
bgPreset: palette
codeSize: lg
highContrast: true
---

<!-- SLIDE 15 — [EXERCICIO] Código no Quadro — Tabuada do 5 -->

# <carbon-code /> Código no Quadro — Tabuada do 5

**Escreva no quadro. A turma lê linha por linha em voz alta.**

```python
for numero in range(1, 11):
    resultado = 5 * numero
    print(f"5 x {numero} = {resultado}")
```

**Perguntas enquanto executa:**
1. O loop roda quantas vezes? Por quê?
2. O que `range(1, 11)` significa? Qual o primeiro e o último valor?
3. O que muda se trocar `5` por `7`?

<v-click>

**Desafio rápido:** reescreva para imprimir a tabuada do 9. O que muda no código?

</v-click>

---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 16 — [DIVISOR] Bloco 3 — Plano Cartesiano -->

# Bloco 3
## Plano Cartesiano Vivo

*UC03 · 45 min · times de 3*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 16 — [TEORIA] O que é uma função linear -->

# <carbon-chart-line /> O que é uma função linear?

Uma **função linear** relaciona dois valores: para cada `x` que você coloca, ela devolve um `y`.

**Forma geral:** $f(x) = ax + b$

| Parte | Nome | O que controla |
|---|---|---|
| `a` | coeficiente angular | a inclinação da reta |
| `b` | coeficiente linear | onde a reta cruza o eixo Y |
---
layout: default
card: true
bgPreset: palette
---

**Exemplo:** $f(x) = 2x + 1$

| x | Conta | y |
|---|---|---|
| 0 | 2·0 + 1 | 1 |
| 1 | 2·1 + 1 | 3 |
| 2 | 2·2 + 1 | 5 |
| -1 | 2·(-1) + 1 | -1 |

> Em Python: `y = 2*x + 1` — exatamente a mesma coisa.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 17 — [DINAMICA] Plano Cartesiano Vivo — Regras -->

# <carbon-user-multiple /> Plano Cartesiano Vivo

**Cada time recebe um cartão com um valor de `x` (de -4 a 4).**

**Função do dia:** $y = 2x + 1$

**Etapa 1 — Individual (10 min):**
Cada membro do time calcula `y` para o `x` recebido. Anota no caderno. **Sem comunicação.**

**Etapa 2 — Confronto do time (5 min):**
Os 3 comparam. Se tiver divergência, chegam num consenso. **Só um representante vai ao quadro.**

**Etapa 3 — Grafando (10 min):**
Cada representante escreve no eixo desenhado no quadro, no ponto $(x, y)$ correto.

---
layout: default
card: true
bgPreset: palette
---

**Etapa 4 — Perguntas individuais (20 min):**
O professor aponta para alunos específicos:
- *"Seu x foi -2. O y ficou positivo ou negativo? Por quê?"*
- *"Em Python: `if y > 0: print('positivo')` — quais de vocês entrariam no if?"*


---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 18 — [DIVISOR] Bloco 4 — Mini-Aula dos Alunos -->

# Bloco 4
## Mini-Aula dos Alunos

*UC03 · 45 min · sala de aula invertida*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 19 — [DINAMICA] Mini-Aula — Regras -->

# <carbon-education /> Mini-Aula dos Alunos — Regras

**8 times · cada um pesquisa e ensina um tópico de matemática.**

**Cronograma:**
- **8 min** — pesquisa individual/equipe (pode usar celular)
- **3 min** — apresentação para a turma
- **1 min** — avaliação por pares

**Regra de protagonismo:** cada membro do time **deve falar pelo menos 1 minuto**. O professor cronometra e pode intervir.

**Avaliação por pares:** cada aluno da turma dá nota **1 a 5** no caderno para o time que apresentou. O professor coleta e faz a média. Time com maior nota ganha pontos no placar.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 20 — [DINAMICA] Mini-Aula — Tópicos -->

# <carbon-document /> Tópicos Sorteados

| Time | Tópico |
|---|---|
| 1 | O que é coeficiente angular (inclinação da reta)? |
| 2 | O que é coeficiente linear (onde a reta cruza o eixo Y)? |
| 3 | O que muda no gráfico quando `a` é negativo vs positivo? |
| 4 | Como calcular `y` dado um `x` em `y = 3x − 2`? |
| 5 | O que é uma função crescente e uma função decrescente? |
| 6 | O que é o domínio de uma função? |
| 7 | Qual a diferença entre `f(x) = x` e `f(x) = x²`? |
| 8 | Como escrever uma função linear em Python com `for`? |

> **Dica para o Time 8:** `for x in range(-3, 4): print(f"x={x}, y={2*x+1}")`

---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 21 — [DIVISOR] Bloco 5 — Tribunal da IA -->

# Bloco 5
## Tribunal da IA

*UC04 · 45 min · times de 3*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 22 — [DINAMICA] Tribunal da IA — Regras -->

# <carbon-scales /> Tribunal da IA — Regras

**Professor projeta um caso real. Times votam em 60 segundos.**

Cada time levanta um cartão: **SIM · NÃO · DEPENDE**

Após o voto, o professor aponta para **um aluno específico** de um time e pergunta o raciocínio. Não o time — o aluno.

> **Não existe resposta certa ou errada.** O que vale é o raciocínio.

**Como dar o ponto:**

| O aluno fez isso | Ponto? |
|---|---|
| Explicou o raciocínio com 1 frase clara | ✅ 1 pt |
| Respondeu só "sim" ou "não" sem justificar | ❌ 0 pt |
| Contradisse o próprio time (e justificou) | ✅ 1 pt bônus |

> Marque os pontos no quadro em tempo real — um risco por ponto, por time.

---
layout: default
card: true
bgPreset: palette

---

<!-- SLIDE 23 — [DINAMICA] Caso 1 e 2 -->

# <carbon-play /> Casos 1 e 2

**CASO 1**
> *YouTube te sugere um vídeo que "você vai gostar"*
>
> Tem IA aqui? **SIM · NÃO · DEPENDE**

<v-click>

> **Pergunta do debate:** *"O que o YouTube precisou aprender sobre você para fazer isso?"*

</v-click>

---

**CASO 2**
> *Filtro de spam bloqueou um e-mail importante seu*
>
> A IA errou? **SIM · NÃO · DEPENDE**

<v-click>

> **Pergunta do debate:** *"Por que a IA errou? O que poderia ter confundido ela?"*

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 24 — [DINAMICA] Caso 3 e 4 -->

# <carbon-play /> Casos 3 e 4

**CASO 3**
> *Carro freia sozinho porque detectou um pedestre*
>
> É IA ou só sensor? **SIM · NÃO · DEPENDE**

<v-click>

> **Pergunta do debate:** *"Que informação o carro usou para tomar essa decisão?"*

</v-click>

---

**CASO 4**
> *Médico usou IA para ler raio-X. O diagnóstico foi errado.*
>
> A culpa é da IA? **SIM · NÃO · DEPENDE**

<v-click>

> **Pergunta do debate:** *"Se fosse um médico humano que errou, seria diferente? Por quê?"*

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 25 — [DINAMICA] Caso 5 e 6 -->

# <carbon-play /> Casos 5 e 6

**CASO 5**
> *App identificou a foto da sua comida como 320 calorias*
>
> Você confia nesse número? **SIM · NÃO · DEPENDE**

<v-click>

> **Pergunta do debate:** *"O que poderia fazer o app errar? Você mudaria seu comportamento baseado nisso?"*

</v-click>

---

**CASO 6**
> *Escola usa IA para prever quais alunos vão reprovar*
>
> Deve ser usado? **SIM · NÃO · DEPENDE**

<v-click>

> **Pergunta do debate:** *"Se a IA previu que você vai reprovar, isso te ajuda ou te prejudica?"*

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 26 — [DINAMICA] Caso 7 e 8 -->

# <carbon-play /> Casos 7 e 8

**CASO 7**
> *Chatbot do banco resolveu um caso de fraude sem nenhum humano*
>
> Isso é bom? **SIM · NÃO · DEPENDE**

<v-click>

> **Pergunta do debate:** *"Em que momento você exigiria falar com um humano de verdade?"*

</v-click>

---

**CASO 8**
> *Um texto que você recebeu pode ter sido gerado por IA*
>
> Importa saber? **SIM · NÃO · DEPENDE**

<v-click>

> **Pergunta do debate:** *"Como você tentaria descobrir se foi IA ou humano? Existe jeito?"*

</v-click>

---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 27 — [TEORIA] Placar Final -->

# Placar Final

**Somem os pontos do dia:**

| Dinâmica | Pts máx. |
|---|---|
| Python Humano | 6 |
| Fila do Bug (10 bugs × 3 pts) | 30 |
| Código no Papel | — |
| Plano Cartesiano | 8 |
| Mini-Aula (avaliação por pares) | 5 |
| Tribunal da IA (8 casos) | 8 |


---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 29 — [DESEMPATE] Critério de Desempate -->

# <carbon-trophy /> Critério de Desempate

**Se dois ou mais times estiverem empatados no placar final:**

**Cada time escreve no caderno (2 min):**
1. **Qual time** — que não o seu — deu a **melhor justificativa** no dia
2. **Por quê** — 1 frase explicando o raciocínio deles

> Não pode votar no próprio time.

<v-click>

**Votação aberta:** o professor coleta e lê em voz alta.

O time mais votado como *"melhor argumento"* vence o empate.

> Se ainda empatar: o professor escolhe o argumento mais criativo que ouviu no dia.

</v-click>

---
layout: end
bgPreset: palette
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
aulaNum: "Aula 13"
---
