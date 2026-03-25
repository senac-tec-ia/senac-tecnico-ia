---
# A09 — 25/03/2026
# BLOCO 1: Python — Fundamentos com Vocabulário  (7h10–9h10)
# BLOCO 2: Python — elif em Cadeias             (9h25–11h25)
# BLOCO 3: Python — Tabela Verdade + Desafio    (11h35–12h20)
# ─────────────────────────────────────────────────────────────────
theme: ./
colorSchema: dark
title: "Técnico em IA — Aula 09"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 09"
bgPreset: palette
layout: cover
# ─────────────────────────────────────────────────────────────────
---

<!-- SLIDE 1 — Capa -->

# Aula 09
## Python: falando a língua do interpretador

*25 de março de 2026 · Fundamentos · Comparação · elif*

<!-- ============================================================
     BLOCO 1 — PYTHON: FUNDAMENTOS COM VOCABULÁRIO (slides 2–11)
     Anatomia das ferramentas que já usamos + operadores de comparação
     ============================================================ -->

---
layout: center
bgPreset: palette
card: true
---

<!-- SLIDE 2 — Divisor Bloco 1 -->

# Bloco 1
## Python: falando a língua do interpretador

*7h10 – 9h10 · 2 HA · UC05*

> Hoje a gente para e pergunta: **por que** as coisas funcionam do jeito que funcionam?

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 3 — Anatomia de uma Variável -->

# Anatomia de uma Variável

Toda variável tem **três partes** — e cada parte tem um nome técnico:

```python
nome   =   "Ada"
 ↑     ↑     ↑
nome  operador  valor
da    de        da
variável  atribuição  variável
```

<v-click>

| Parte | O que é | Exemplo |
|---|---|---|
| **Nome** | Identificador escolhido pelo programador | `nome`, `nota`, `idade` |
| **`=`** | Operador de atribuição — "receba o valor" | `=` (não é igualdade!) |
| **Valor** | O dado guardado — pode ser texto, número, verdadeiro/falso | `"Ada"`, `7.5`, `True` |

</v-click>

<v-click>

> `=` em Python **não** pergunta se são iguais — ele **entrega** o valor da direita para a variável da esquerda.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 4 — Tipos de Dados + type() -->

# Tipos de Dados e `type()`

Python tem **quatro tipos básicos** — e `type()` te diz qual é qual:

```python
nome      = "Leonardo"     # str  → texto (sempre entre aspas)
idade     = 17             # int  → número inteiro (sem aspas, sem ponto)
altura    = 1.72           # float → número com casa decimal
aprovado  = True           # bool → só pode ser True ou False
```

<v-click>

```python
print(type(nome))      # <class 'str'>
print(type(idade))     # <class 'int'>
print(type(altura))    # <class 'float'>
print(type(aprovado))  # <class 'bool'>
```

</v-click>

<v-click>

**Dica de diagnóstico:** quando algo dá errado (`TypeError`), use `type()` para descobrir o que Python enxerga.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 5 — E0: Qual o type()? -->

# <carbon-search /> Leitura: Qual o `type()`?

**Em dupla · 6 minutos · Nível 0 — NÃO rode ainda**

Olhe para cada variável abaixo e escreva qual seria a saída de `type()`:

```python
cidade    = "São Paulo"
pontos    = 100
velocidade = 3.14
ativo     = False
ano       = "2026"          # atenção nessa!
```

<v-click>

**Gabarito:**

| Variável | `type()` | Observação |
|---|---|---|
| `cidade` | `str` | — |
| `pontos` | `int` | — |
| `velocidade` | `float` | — |
| `ativo` | `bool` | — |
| `ano` | `str` | **Aspas** deixam qualquer coisa como texto! |

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 6 — Funções Embutidas (built-ins) -->

# Funções Embutidas do Python

Python já vem com várias **funções prontas** — chamadas de **built-ins**.

<v-click>

| Função | O que faz | Exemplo |
|---|---|---|
| `print()` | Mostra algo na tela | `print("Oi")` |
| `input()` | Lê o que o usuário digita | `input("Nome: ")` |
| `type()` | Revela o tipo do dado | `type(7)` |
| `int()` | Transforma em número inteiro | `int("5")` → `5` |
| `float()` | Transforma em número decimal | `float("3.5")` → `3.5` |
| `str()` | Transforma em texto | `str(42)` → `"42"` |
| `len()` | Conta caracteres ou itens | `len("Python")` → `6` |

</v-click>

<v-click>

**Anatomia de uma chamada de função:**

```
  print  (  "Olá, mundo!"  )
   ↑             ↑
  nome      argumento
 da função  (o que você passa para ela)
```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 7 — Por que float(input())? -->

# Por que `float(input())`?

`input()` **sempre** retorna texto — mesmo que o usuário digite um número.

```python
valor = input("Digite um número: ")
print(type(valor))   # <class 'str'> ← Python vê TEXTO, não número!
```

<v-click>

**Problema:** não dá para fazer conta com texto:

```python
valor = input("Digite a nota: ")
media = valor / 2   # ❌ TypeError: can't divide str by int
```

</v-click>

<v-click>

**Solução:** empilhar funções — a saída de `input()` vira argumento de `float()`:

```python
nota = float(input("Digite a nota: "))
#            └── input() retorna "7.5" (str)
#      └── float() transforma "7.5" → 7.5 (float)
media = nota / 2    # ✅ funciona!
```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 8 — EX01: Nome + Ano → Idade -->

# <carbon-user-multiple /> EX01 — Nome + Ano → Idade

**Duplas · 12 minutos · Nível 1**

> Salve como `SENAC-TecIA/Aula-09/ex01_idade.py`

**Tarefa:** leia o nome e o ano de nascimento via `input()`, calcule a idade em 2026 e imprima uma mensagem personalizada com f-string.

```python
nome = input("Qual é o seu nome? ")
ano_nasc = int(input("Qual é o seu ano de nascimento? "))
# Calcule a idade e imprima uma mensagem personalizada
```

**Exemplo de saída esperada:**
```
Olá, Ada! Você tem 17 anos em 2026.
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 9 — Gabarito EX01 -->

# <carbon-checkmark /> Gabarito — EX01

```python
nome = input("Qual é o seu nome? ")
ano_nasc = int(input("Qual é o seu ano de nascimento? "))

idade = 2026 - ano_nasc

print(f"Olá, {nome}! Você tem {idade} anos em 2026.")
```

<v-click>

**Pontos de atenção:**
- `int(input(...))` porque ano é número inteiro — não precisa de decimal
- `2026 - ano_nasc` é uma expressão aritmética simples
- f-string usa `{variavel}` para inserir o valor direto na mensagem

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 10 — Operadores de Comparação -->

# Operadores de Comparação

Esses operadores **comparam** dois valores e retornam `True` ou `False`:

| Operador | Lê-se | Exemplo | Resultado |
|---|---|---|---|
| `==` | é igual a | `5 == 5` | `True` |
| `!=` | é diferente de | `5 != 3` | `True` |
| `>` | maior que | `10 > 7` | `True` |
| `<` | menor que | `3 < 1` | `False` |
| `>=` | maior ou igual a | `6 >= 6` | `True` |
| `<=` | menor ou igual a | `4 <= 4` | `True` |

<v-click>

> ⚠️ **Não confunda:** `=` **atribui** um valor. `==` **verifica** se dois valores são iguais.

```python
nota = 7.5          # atribuição
nota == 7.5         # comparação → True
```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 11 — E0: True ou False? -->

# <carbon-search /> Leitura: True ou False?

**Em dupla · 6 minutos · Nível 0 — NÃO rode ainda**

Para cada expressão, escreva o resultado (`True` ou `False`):

```python
10 > 5
3 == 3.0
"Python" != "python"
7 <= 6
100 >= 100
4 != 4
```

<v-click>

**Gabarito:**

| Expressão | Resultado | Por quê |
|---|---|---|
| `10 > 5` | `True` | 10 é maior que 5 |
| `3 == 3.0` | `True` | Python compara valor, não tipo aqui |
| `"Python" != "python"` | `True` | Maiúscula ≠ minúscula |
| `7 <= 6` | `False` | 7 não é menor nem igual a 6 |
| `100 >= 100` | `True` | Igual já satisfaz `>=` |
| `4 != 4` | `False` | São iguais |

</v-click>

<!-- ============================================================
     BLOCO 2 — PYTHON: elif EM CADEIAS (slides 12–20)
     Do cotidiano para classificadores com múltiplas condições
     ============================================================ -->

---
layout: center
bgPreset: palette
card: true
---

<!-- SLIDE 12 — Divisor Bloco 2 -->

# Bloco 2
## Python: vários caminhos, uma escolha

*9h25 – 11h25 · 2 HA · UC05*

> Nem tudo na vida é sim ou não — às vezes há **muitas opções**.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 13 — elif: Quando Há Mais de 2 Caminhos -->

# `elif`: Quando Há Mais de 2 Caminhos

**`if`** → primeiro teste. **`elif`** → "e se não for aquilo, mas for isso...". **`else`** → todo o resto.

```python
nota = float(input("Nota: "))

if nota >= 9:
    print("Conceito A")
elif nota >= 7:
    print("Conceito B")
elif nota >= 5:
    print("Conceito C")
else:
    print("Reprovado")
```

<v-click>

**Regra de ouro:** Python testa cada condição **de cima para baixo** e **para na primeira verdadeira**. As seguintes nem são testadas.

| Nota digitada | Qual bloco executa? |
|---|---|
| 9.5 | `if nota >= 9` → "Conceito A" ✓ |
| 7.0 | `elif nota >= 7` → "Conceito B" ✓ |
| 4.9 | `else` → "Reprovado" ✓ |

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 14 — Exemplo Cotidiano: Desconto na Loja -->

# Exemplo: Desconto na Loja

Você está numa liquidação. Dependendo do desconto, sua reação é diferente:

```python
desconto = int(input("Desconto (%): "))

if desconto >= 50:
    print("Meu Deus, COMPRA AGORA!")
elif desconto >= 30:
    print("Opa, tá legal!")
elif desconto >= 20:
    print("Talvez... vale a pena pensar.")
else:
    print("Não dá pra comprar ainda.")
```

<v-click>

**Por que os limiares são testados de maior para menor?**

Se você testasse `desconto >= 20` primeiro, um desconto de 50% também passaria nesse teste — e nunca chegaria à mensagem "COMPRA AGORA". A **ordem** define o resultado.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 15 — E0: Trace o Desconto -->

# <carbon-search /> Leitura: Trace o Desconto

**Em dupla · 8 minutos · Nível 0 — acompanhe com o dedo**

Use o código do slide anterior. Para cada valor digitado, qual mensagem aparece na tela?

| `desconto` digitado | Mensagem impressa |
|---|---|
| `25` | ??? |
| `55` | ??? |
| `30` | ??? |
| `10` | ??? |

<v-click>

**Gabarito:**

| `desconto` | Mensagem |
|---|---|
| `25` | `"Talvez... vale a pena pensar."` (`>= 20`, antes de `>= 30`) |
| `55` | `"Meu Deus, COMPRA AGORA!"` (`>= 50`) |
| `30` | `"Opa, tá legal!"` (`>= 30`) |
| `10` | `"Não dá pra comprar ainda."` (`else`) |

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 16 — EX02: Alerta de Reator -->

# <carbon-user-multiple /> EX02 — Alerta de Reator

**Duplas · 15 minutos · Nível 1**

> Salve como `SENAC-TecIA/Aula-09/ex02_reator.py`

**Contexto:** você programou o sistema de monitoramento de um reator. Dependendo da capacidade, o sistema emite alertas diferentes:

| Capacidade | Alerta |
|---|---|
| >= 90% | `"CRÍTICO: evacuação imediata!"` |
| >= 80% | `"ALTO: reduzir carga agora."` |
| >= 70% | `"MODERADO: monitorar de perto."` |
| < 70% | `"NORMAL: tudo sob controle."` |

```python
capacidade = int(input("Capacidade do reator (%): "))

if capacidade >= 90:
    # complete aqui
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 17 — Gabarito EX02 -->

# <carbon-checkmark /> Gabarito — EX02

```python
capacidade = int(input("Capacidade do reator (%): "))

if capacidade >= 90:
    print("CRÍTICO: evacuação imediata!")
elif capacidade >= 80:
    print("ALTO: reduzir carga agora.")
elif capacidade >= 70:
    print("MODERADO: monitorar de perto.")
else:
    print("NORMAL: tudo sob controle.")
```

<v-click>

Teste com: `95`, `85`, `72`, `60`

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 18 — Combinando Comparação + Lógico -->

# Combinando Comparação + `and` / `or`

Você pode juntar operadores de comparação com `and`/`or` dentro de um `if`:

```python
nota = float(input("Nota: "))
freq = int(input("Frequência (%): "))

# and — AMBAS as condições precisam ser verdadeiras
if nota >= 6 and freq >= 75:
    print("Aprovado!")

# or — BASTA UMA condição ser verdadeira
if nota < 6 or freq < 75:
    print("Requer atenção.")
```

<v-click>

**Como Python lê `nota >= 6 and freq >= 75`:**

1. Avalia `nota >= 6` → `True` ou `False`
2. Avalia `freq >= 75` → `True` ou `False`
3. Aplica `and` → só é `True` se os **dois** forem `True`

> O mesmo `and`/`or`/`not` da tabela verdade — agora com comparações reais.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19 — EX03: Classificador de Modelo IA -->

# <carbon-user-multiple /> EX03 — Classificador de Modelo de IA

**Duplas · 15 minutos · Nível 2**

> Salve como `SENAC-TecIA/Aula-09/ex03_modelo.py`

**Contexto:** após treinar um modelo de IA, você precisa classificar a qualidade dele pela precisão obtida:

| Precisão | Classificação |
|---|---|
| >= 90% | `"Excelente — pronto para produção."` |
| >= 75% | `"Bom — revisar antes de publicar."` |
| >= 60% | `"Atenção — precisa melhorar."` |
| < 60% | `"Retreinar — dados insuficientes."` |

```python
precisao = float(input("Precisão do modelo (%): "))

if precisao >= 90:
    # complete aqui
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 20 — Gabarito EX03 -->

# <carbon-checkmark /> Gabarito — EX03

```python
precisao = float(input("Precisão do modelo (%): "))

if precisao >= 90:
    print("Excelente — pronto para produção.")
elif precisao >= 75:
    print("Bom — revisar antes de publicar.")
elif precisao >= 60:
    print("Atenção — precisa melhorar.")
else:
    print("Retreinar — dados insuficientes.")
```

<v-click>

Teste com: `92`, `78`, `63`, `45`

</v-click>

<!-- ============================================================
     BLOCO 3 — PYTHON: TABELA VERDADE REFORÇO + DESAFIO (slides 21–25)
     Fechar o dia consolidando lógica booleana e integrando tudo
     ============================================================ -->

---
layout: center
bgPreset: palette
card: true
---

<!-- SLIDE 21 — Divisor Bloco 3 -->

# Bloco 3
## Python: fechando o dia

*11h35 – 12h20 · 1 HA · UC05*

> Vamos juntar tudo que vimos hoje em um único desafio.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 22 — Tabela Verdade: Revisão com Exemplos Reais -->

# Tabela Verdade — Revisão com Exemplos Reais

| `A` | `B` | `A and B` | `A or B` | `not A` |
|---|---|---|---|---|
| `True` | `True` | **True** | **True** | **False** |
| `True` | `False` | **False** | **True** | **False** |
| `False` | `True` | **False** | **True** | **True** |
| `False` | `False` | **False** | **False** | **True** |

<v-click>

**Traduzindo para situações reais:**

| Situação | Operador | Exemplo Python |
|---|---|---|
| Aprovação de crédito: renda alta **E** sem dívida | `and` | `renda > 3000 and divida == 0` |
| Login: senha correta **OU** biometria ok | `or` | `senha_ok or biometria_ok` |
| Sensor: **NÃO** está em modo seguro | `not` | `not modo_seguro` |

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 23 — E0: Expressões Lógicas Compostas -->

# <carbon-search /> Leitura: Expressões Lógicas Compostas

**Em dupla · 6 minutos · Nível 0 — NÃO rode ainda**

Para cada expressão, escreva `True` ou `False`:

```python
True and False
True or False
not True
(5 > 3) and (2 < 4)
(10 == 9) or (7 != 6)
```

<v-click>

**Gabarito:**

| Expressão | Resultado | Por quê |
|---|---|---|
| `True and False` | `False` | `and` exige os dois `True` |
| `True or False` | `True` | `or` basta um `True` |
| `not True` | `False` | inverte |
| `(5 > 3) and (2 < 4)` | `True` | `True and True` |
| `(10 == 9) or (7 != 6)` | `True` | `False or True` |

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 24 — EX04: Desafio Integrador -->

# <carbon-trophy /> EX04 — Desafio Integrador

**Duplas · 15 minutos · Nível 2–3**

> Salve como `SENAC-TecIA/Aula-09/ex04_status.py`

**Tarefa:** leia nome, nota e frequência de um aluno. Determine o status usando `if/elif/else` com `and`/`or`. Imprima tudo com f-string.

| Condição | Status |
|---|---|
| `nota >= 6` **e** `freq >= 75` | `"Aprovado"` |
| `nota >= 6` **e** `freq < 75` | `"Conselho de classe"` |
| `nota < 6` **e** `freq >= 75` | `"Recuperação"` |
| `nota < 6` **e** `freq < 75` | `"Reprovado"` |

```python
nome = input("Nome: ")
nota = float(input("Nota (0–10): "))
freq = int(input("Frequência (%): "))

# Use if/elif/else com and para determinar o status
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 25 — Gabarito EX04 -->

# <carbon-checkmark /> Gabarito — EX04

```python
nome = input("Nome: ")
nota = float(input("Nota (0–10): "))
freq = int(input("Frequência (%): "))

if nota >= 6 and freq >= 75:
    status = "Aprovado"
elif nota >= 6 and freq < 75:
    status = "Conselho de classe"
elif nota < 6 and freq >= 75:
    status = "Recuperação"
else:
    status = "Reprovado"

print(f"{nome}: {status} (nota: {nota} | freq: {freq}%)")
```

<v-click>

**Saída esperada (exemplo):**
```
Ada: Aprovado (nota: 8.5 | freq: 80%)
```

> Isso é o **padrão completo** de Python até agora: `input()` → converter → comparar → decidir → imprimir.

</v-click>

