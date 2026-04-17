---
# A09 — 25/03/2026
# BLOCO 1: Python — Fundamentos com Vocabulário  (7h10–9h10)
# BLOCO 2: Python — elif em Cadeias             (9h25–11h25)
# BLOCO 3: Python — Tabela Verdade + Desafio    (11h35–12h20)
# ─────────────────────────────────────────────────────────────────
theme: ../../../neural-slides-template
colorSchema: dark
title: "Técnico em IA — Aula 09"
author: Leonardo Zanini
github: LeoZanini
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

> `=` em Python **não** pergunta se são iguais — ele **entrega** o valor da direita para a variável da esquerda.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 3b — Partes da Variável: Tabela -->

# Anatomia de uma Variável (cont.)

| Parte | O que é | Exemplo |
|---|---|---|
| **Nome** | Identificador escolhido pelo programador | `nome`, `nota`, `idade` |
| **`=`** | Operador de atribuição: "receba o valor" | `=` (não é igualdade!) |
| **Valor** | O dado guardado: texto, número ou verdadeiro/falso | `"Ada"`, `7.5`, `True` |

<v-click>

> Dica: o nome da variável deve descrever o que ela guarda. `x = 7.5` funciona, mas `nota = 7.5` é muito mais claro.

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

> Use `type()` para confirmar o que Python guardou. Quando algo dá errado (`TypeError`), essa é a primeira ferramenta que você puxa.

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 6 — Funções Embutidas (built-ins) -->

# Funções Embutidas do Python

Python já vem com várias **funções prontas** — chamadas de **built-ins**.

| Função | O que faz | Exemplo |
|---|---|---|
| `print()` | Mostra algo na tela | `print("Oi")` |
| `input()` | Lê o que o usuário digita | `input("Nome: ")` |
| `type()` | Revela o tipo do dado | `type(7)` |
| `int()` | Transforma em número inteiro | `int("5")` → `5` |
| `float()` | Transforma em número decimal | `float("3.5")` → `3.5` |
| `str()` | Transforma em texto | `str(42)` → `"42"` |
| `len()` | Conta caracteres ou itens | `len("Python")` → `6` |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 6b — Anatomia de uma Chamada de Função -->

# Anatomia de uma Chamada de Função

**Anatomia de uma chamada de função:**

```
  print  (  "Olá, mundo!"  )
   ↑             ↑
  nome      argumento
 da função  (o que você passa para ela)
```

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 7b — Solução: empilhar float() + input() -->

# Solução: Empilhando `float()` com `input()`

**Solução:** empilhar funções — a saída de `input()` vira argumento de `float()`:

```python
nota = float(input("Digite a nota: "))
#            └── input() retorna "7.5" (str)
#      └── float() transforma "7.5" → 7.5 (float)
media = nota / 2    # ✅ funciona!
```

<v-click>

> Regra prática: use `int(input(...))` para números inteiros (ano, quantidade) e `float(input(...))` para números com decimal (nota, precisão).

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

**Exemplo de saída esperada:** `Olá, Ada! Você tem 17 anos em 2026.`

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 10b — Operadores de Comparação: = vs == -->

# `=` vs `==`: Não Confunda!

```python
nota = 7.5          # = atribui: nota RECEBE o valor 7.5
nota == 7.5         # == compara: nota É IGUAL a 7.5? → True
```

<v-click>

> ⚠️ Erro clássico: `if nota = 7:` gera `SyntaxError`. O Python espera `==` dentro de condições. `=` só funciona fora dos `if`, para atribuir valor.

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 11b — Gabarito: True ou False? -->

# <carbon-search /> Leitura: True ou False? — Gabarito

**Gabarito:**

| Expressão | Resultado | Por quê |
|---|---|---|
| `10 > 5` | `True` | 10 é maior que 5 |
| `3 == 3.0` | `True` | Python compara valor, não tipo aqui |
| `"Python" != "python"` | `True` | Maiúscula é diferente de minúscula |
| `7 <= 6` | `False` | 7 não é menor nem igual a 6 |
| `100 >= 100` | `True` | Igual já satisfaz `>=` |
| `4 != 4` | `False` | São iguais |

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 13b — elif: Qual Bloco Executa? -->

# `elif`: Qual Bloco Executa?

**Regra de ouro:** Python para na primeira condição verdadeira.

| Nota digitada | Qual bloco executa? |
|---|---|
| 9.5 | `if nota >= 9` → "Conceito A" ✓ |
| 7.0 | `elif nota >= 7` → "Conceito B" ✓ |
| 4.9 | `else` → "Reprovado" ✓ |

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 14b — Desconto: Por que a Ordem Importa? -->

# Exemplo: Desconto na Loja (cont.)

**Por que os limiares são testados de maior para menor?**

Se você testasse `desconto >= 20` primeiro, um desconto de 50% também passaria nesse teste — e nunca chegaria à mensagem "COMPRA AGORA". A **ordem** define o resultado.

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 15b — Trace o Desconto: Gabarito -->

# <carbon-search /> Leitura: Trace o Desconto — Gabarito

**Gabarito:**

| `desconto` | Mensagem |
|---|---|
| `25` | `"Talvez... vale a pena pensar."` (`>= 20`, antes de `>= 30`) |
| `55` | `"Meu Deus, COMPRA AGORA!"` (`>= 50`) |
| `30` | `"Opa, tá legal!"` (`>= 30`) |
| `10` | `"Não dá pra comprar ainda."` (`else`) |

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 16b — EX02: Alerta de Reator (Starter) -->

# <carbon-user-multiple /> EX02 — Alerta de Reator (cont.)

**Starter code:**

```python
capacidade = int(input("Capacidade do reator (%): "))

if capacidade >= 90:
    # complete aqui
```

Test with: `95`, `85`, `72`, `60`

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 18b — Como Python Avalia and/or -->

# Combinando Comparação + `and` / `or` (cont.)

**Como Python lê `nota >= 6 and freq >= 75`:**

1. Avalia `nota >= 6` → `True` ou `False`
2. Avalia `freq >= 75` → `True` ou `False`
3. Aplica `and` → só é `True` se os **dois** forem `True`

> O mesmo `and`/`or`/`not` da tabela verdade — agora com comparações reais.

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19b — EX03: Starter Code -->

# <carbon-user-multiple /> EX03 — Classificador de Modelo de IA (cont.)

**Código inicial:**

```python
precisao = float(input("Precisão do modelo (%): "))

if precisao >= 90:
    # complete aqui
```

Complete os `elif` e `else` com as classificações da tabela anterior.

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 22b — Tabela Verdade: Exemplos Reais -->

# Tabela Verdade — Na Prática

**Traduzindo para situações reais:**

| Situação | Operador | Exemplo Python |
|---|---|---|
| Aprovação de crédito: renda alta **E** sem dívida | `and` | `renda > 3000 and divida == 0` |
| Login: senha correta **OU** biometria ok | `or` | `senha_ok or biometria_ok` |
| Sensor: **NÃO** está em modo seguro | `not` | `not modo_seguro` |

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 23b — Expressões Lógicas: Gabarito -->

# <carbon-search /> Expressões Lógicas — Gabarito

**Gabarito:**

| Expressão | Resultado | Por quê |
|---|---|---|
| `True and False` | `False` | `and` exige os dois `True` |
| `True or False` | `True` | `or` basta um `True` |
| `not True` | `False` | inverte |
| `(5 > 3) and (2 < 4)` | `True` | `True and True` |
| `(10 == 9) or (7 != 6)` | `True` | `False or True` |

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 24b — EX04: Código Inicial -->

# <carbon-trophy /> EX04 — Desafio Integrador (cont.)

**Starter code:**

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

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 25b — Gabarito EX04: Saída Esperada -->

# <carbon-checkmark /> Gabarito — EX04 (cont.)

**Saída esperada (exemplo):**

```
Ada: Aprovado (nota: 8.5 | freq: 80%)
```

> Isso é o **padrão completo** de Python até agora: `input()` → converter → comparar → decidir → imprimir.

<!-- ============================================================
     BLOCO 4 — FUNDAMENTOS MATEMÁTICOS: POTÊNCIAS, RAÍZES E EXPRESSÕES
     UC03 · Ind. 1 — operações aritméticas + álgebra elementar
     Sem def, sem for — código linear com variáveis e print
     ============================================================ -->

---
layout: center
bgPreset: palette
card: true
---

<!-- SLIDE 26 — Divisor Bloco 4 -->

# Bloco 4
## Matemática: potências, raízes e expressões

*26 de março de 2026 · 2 HA · UC03*

> A mesma calculadora que já usamos em Python — agora com olhos matemáticos.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 27 — Potência: Multiplicação Repetida -->

# Potência: Multiplicação Repetida

**Potência** é um atalho para multiplicar um número por ele mesmo várias vezes:

$$2^3 = 2 \times 2 \times 2 = 8$$

Em Python, você já conhece o operador `**`:

```python
print(2 ** 3)    # 8
print(5 ** 2)    # 25   ← "5 ao quadrado"
print(10 ** 3)   # 1000 ← "10 ao cubo"
```

> **Próximo passo:** por que potências de 2? Porque computadores falam em bits.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 27b — Bits e Bytes -->

# Bits e Bytes: a moeda do computador

O computador só entende **dois estados**: liga ou desliga. Verdadeiro ou falso. `1` ou `0`.

**Cada um desses estados é 1 bit.**

| Agrupamento | Nome | O que guarda |
|---|---|---|
| 1 estado (`0` ou `1`) | **bit** | uma decisão: sim/não, liga/desliga |
| 8 bits juntos | **byte** | 1 caractere — a letra "A", por exemplo |
| 1024 bytes | **KB** (kilobyte) | uma mensagem curta de texto |
| 1024 KB | **MB** (megabyte) | uma foto, uma música |

<v-click>

> Por que **8** bits = 1 byte? Com 8 casas de `0` ou `1`, dá para representar $2^8 = 256$ combinações diferentes — o suficiente para cobrir todas as letras, números e símbolos básicos.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 28 — Tabela de Potências de 2 -->

# Potências de 2 — a linguagem dos computadores

| Expressão | Python | Resultado | Onde aparece |
|---|---|---|---|
| $2^1$ | `2 ** 1` | 2 | — |
| $2^3$ | `2 ** 3` | 8 | 8 bits = 1 byte |
| $2^8$ | `2 ** 8` | 256 | valores de cor RGB (0–255) |
| $2^{10}$ | `2 ** 10` | 1024 | 1 KB de memória |
| $2^{20}$ | `2 ** 20` | 1.048.576 | 1 MB de memória |

> Rode cada linha no terminal Python e confirme. RGB vai de 0 a 255 — exatamente $2^8 - 1$ valores. Pixels de uma imagem são feitos disso.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 29 — E0: Quanto Vale? -->

# <carbon-search /> Leitura: Quanto Vale?

**Em dupla · 6 minutos · Nível 0 — calcule de cabeça primeiro, depois rode**

```python
print(2 ** 4)     # quanto é?
print(3 ** 3)     # e esse?
print(10 ** 2)    # e esse?
print(5 ** 0)     # surpresa — o que acontece com expoente 0?
print(2 ** 10)    # e esse? (dica: é um número importante em computação)
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 30 — Gabarito E0: Quanto Vale? -->

# <carbon-checkmark /> Gabarito — Quanto Vale?

| Expressão | Resultado | Observação |
|---|---|---|
| `2 ** 4` | `16` | 2×2×2×2 |
| `3 ** 3` | `27` | 3×3×3 |
| `10 ** 2` | `100` | quadrado de 10 |
| `5 ** 0` | `1` | **qualquer número elevado a 0 vale 1 — sempre** |
| `2 ** 10` | `1024` | 1 KB! |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 31 — Raiz: A Pergunta Inversa -->

# Raiz: A Pergunta Inversa

**Potência** pergunta: *"2 multiplicado por si mesmo 3 vezes dá quanto?"*
**Raiz** pergunta: *"qual número multiplicado por si mesmo dá 25?"*

$$\sqrt{25} = 5 \quad \text{porque} \quad 5 \times 5 = 25$$

Em Python, raiz quadrada é **potência de `0.5`** — mesmo operador `**`:

```python
print(25 ** 0.5)    # 5.0  ← raiz quadrada de 25
print(9  ** 0.5)    # 3.0
print(16 ** 0.5)    # 4.0
print(2  ** 0.5)    # 1.4142... ← raiz de 2 (não é inteiro!)
```

> Você não precisa memorizar comando novo. `**` faz tudo — potência e raiz.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 32 — EX01: Calculadora de Potências -->

# <carbon-user-multiple /> EX01 — Calculadora de Potências

**Duplas · 12 minutos · Nível 1**

> Salve como `SENAC-TecIA/Aula-09/mat_ex01_potencia.py`

**Tarefa:** leia base e expoente via `input()`, calcule e imprima o resultado.

```python
base     = float(input("Digite a base: "))
expoente = float(input("Digite o expoente: "))

resultado = base ** expoente

print(f"{base} elevado a {expoente} = {resultado}")
```

**Teste com:** `2` e `10` → deve dar `1024.0` | depois `25` e `0.5` → deve dar `5.0`

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 33 — Gabarito EX01 -->

# <carbon-checkmark /> Gabarito — EX01

```python
base     = float(input("Digite a base: "))
expoente = float(input("Digite o expoente: "))

resultado = base ** expoente

print(f"{base} elevado a {expoente} = {resultado}")
```

<v-click>

**Pontos de atenção:**
- `float(input(...))` porque base e expoente podem ter decimal (`0.5` para raiz)
- `**` é o mesmo operador de antes — não existe sintaxe nova aqui
- Testar `base=25, expoente=0.5` confirma que raiz quadrada é uma potência

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 34 — Expressão Algébrica: Receita com Ingrediente -->

# Expressão Algébrica: Receita com Ingrediente

Uma **expressão algébrica** é uma receita matemática onde **x é o ingrediente que muda** — a receita é sempre a mesma.

$$2x + 5$$

| x (ingrediente) | Conta | Resultado |
|---|---|---|
| 0 | 2×0 + 5 | **5** |
| 1 | 2×1 + 5 | **7** |
| 3 | 2×3 + 5 | **11** |
| 10 | 2×10 + 5 | **25** |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 34b — Expressão Algébrica em Python -->

# Expressão Algébrica em Python

Em Python, `x` é uma variável normal. A expressão usa os operadores que você já sabe:

```python
x = 3
resultado = 2 * x + 5
print(resultado)    # 11
```

> Troque o `3` por qualquer número da tabela anterior — o resultado vai bater!

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 35 — E0: Qual o Resultado da Expressão? -->

# <carbon-search /> Leitura: Qual o Resultado?

**Em dupla · 6 minutos · Nível 0 — calcule no papel, depois confirme rodando**

Para cada valor de `x`, qual é o resultado de `3 * x + 2`?

| x | Conta | Resultado |
|---|---|---|
| 0 | `3 * 0 + 2` | ??? |
| 1 | `3 * 1 + 2` | ??? |
| 4 | `3 * 4 + 2` | ??? |
| 10 | `3 * 10 + 2` | ??? |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 36 — Gabarito E0: Qual o Resultado? -->

# <carbon-checkmark /> Gabarito — Qual o Resultado?

| x | Resultado | Passo a passo |
|---|---|---|
| 0 | **2** | 3×0 = 0, mais 2 = 2 |
| 1 | **5** | 3×1 = 3, mais 2 = 5 |
| 4 | **14** | 3×4 = 12, mais 2 = 14 |
| 10 | **32** | 3×10 = 30, mais 2 = 32 |

<v-click>

> Percebeu o padrão? Cada vez que x aumenta 1, o resultado aumenta **3** — exatamente o número que multiplica x. Isso é o que o `3` da expressão significa.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 37 — EX02: Verificador de Equação -->

# <carbon-user-multiple /> EX02 — Verificador de Equação

**Duplas · 15 minutos · Nível 1–2**

> Salve como `SENAC-TecIA/Aula-09/mat_ex02_equacao.py`

**Contexto:** precisamos encontrar o valor de `x` que resolve a equação $2x + 5 = 11$.

**Tarefa:** use Python para **testar valores** até o programa imprimir `True`:

```python
x = float(input("Tente um valor para x: "))
verificacao = 2 * x + 5 == 11
print(f"x = {x} resolve a equação? {verificacao}")
```

Tente `x = 1`, depois `x = 2`, depois `x = 3`... qual dá `True`?

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 38 — Gabarito EX02 -->

# <carbon-checkmark /> Gabarito — EX02

```python
x = float(input("Tente um valor para x: "))
verificacao = 2 * x + 5 == 11
print(f"x = {x} resolve a equação? {verificacao}")
```

<v-click>

**Resposta: `x = 3`**

```
x = 1 → 2×1 + 5 = 7  ≠ 11  → False
x = 2 → 2×2 + 5 = 9  ≠ 11  → False
x = 3 → 2×3 + 5 = 11 = 11  → True ✓
```

> `==` aparece nos dois mundos: **em Python** compara valores e retorna `True`/`False`. **Em matemática** define a equação. São exatamente a mesma ideia.

</v-click>

<!-- ============================================================
     BLOCO UC04 — FUNDAMENTOS DE IA: MAPEANDO OS SUBCAMPOS
     ~1 HA · recall debate ética + distinção ML / CV / NLP
     ============================================================ -->
---
layout: center
bgPreset: palette
card: true
---

<!-- SLIDE 39 — Divisor UC04 -->

# Fundamentos de IA
## Mapeando os Subcampos

*UC04 · 1 HA · Ind. 2*

> Na última aula vocês debateram: **ferramenta essencial ou trapaça?**  
> Hoje vamos precisar dos conceitos para responder isso com mais rigor.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 40 — O Mapa da IA -->

# IA não é uma coisa só

```
Inteligência Artificial  ◀── guarda-chuva
│
├── Machine Learning      ◀── aprende com dados
│   │
│   └── Deep Learning     ◀── aprende com muitas camadas
│       │
│       ├── Computer Vision  ◀── enxergar imagens
│       ├── NLP              ◀── entender texto e fala
│       └── Reinforcement L. ◀── aprender por tentativa/erro
│
└── Sistemas Especialistas ◀── regras escritas por humanos (anos 80)
```

<v-click>

> ML ⊂ IA. Deep Learning ⊂ ML. CV e NLP ⊂ Deep Learning.  
> Quando alguém diz "IA", geralmente quer dizer um desses subcampos.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 41 — Computer Vision -->

# Computer Vision — A IA que enxerga

**O que é:** treinar um modelo para *interpretar* imagens e vídeos como um humano faria.

| Aplicação | Como CV entra |
|---|---|
| Reconhecimento facial (Face ID) | Detecta e mapeia pontos do rosto |
| Carro autônomo (Tesla, Waymo) | Identifica placa, pedestre, semáforo |
| Diagnóstico médico por imagem | Detecta tumor em raio-X |
| Moderação de conteúdo (Instagram) | Remove imagens proibidas automaticamente |


---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 41b — Computer Vision: Como funciona -->

# Computer Vision — Como funciona

**CNN** (Rede Neural Convolucional): varre a imagem em pequenas janelas procurando padrões (borda, textura, forma).

```python
# sklearn não serve para CV de verdade — aqui entra PyTorch/TensorFlow:
from torchvision import models
model = models.resnet50(pretrained=True)   # modelo já treinado em 1M imagens
```

> CNN = Convolutional Neural Network. Camadas iniciais detectam bordas; camadas finais identificam objetos completos.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 42 — NLP -->

# NLP — A IA que lê e fala

**O que é:** treinar um modelo para *entender e gerar* linguagem humana (texto ou fala).

| Aplicação | Como NLP entra |
|---|---|
| ChatGPT, Gemini, Claude | Geram texto coerente em qualquer idioma |
| Tradução automática (DeepL) | Converte significado entre idiomas |
| Análise de sentimento | "Esse review é positivo ou negativo?" |
| Autocomplete do teclado | Prevê a próxima palavra |


---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 42b — NLP: Como funciona -->

# NLP — Como funciona

**Embeddings + Transformer + Token**: palavras viram vetores numéricos, passam por camadas Transformer, e o modelo prevê o próximo token.

```python
# Exemplo real (biblioteca transformers da HuggingFace):
from transformers import pipeline
sentiment = pipeline("sentiment-analysis")
print(sentiment("Essa aula foi incrível!"))
# → [{'label': 'POSITIVE', 'score': 0.9998}]
```

> **Token** = pedaço mínimo de texto. LLMs nunca leem frases inteiras — prevêem token por token.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 43 — CV vs NLP vs ML: O que diferencia? -->

# O que diferencia CV, NLP e ML?

| | **ML geral** | **Computer Vision** | **NLP** |
|---|---|---|---|
| **Entrada** | tabela de dados | imagem / vídeo | texto / áudio |
| **Arquitetura típica** | Decision Tree, SVM, RF | CNN | Transformer |
| **Bibliotecas** | scikit-learn | PyTorch + torchvision | HuggingFace |
| **Exemplo de output** | preço previsto | "gato detectado (97%)" | "texto positivo" |

<v-click>

> Todos **aprendem com exemplos** — mas o *tipo de dado* e a *arquitetura* mudam completamente.  
> Saber isso é saber pedir a ferramenta certa para o problema certo.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 44 — De volta ao debate: dois lados -->

# De volta ao debate

Na última aula, dois grupos defenderam posições opostas:

**Grupo A — "IA é ferramenta essencial"**  
→ Aumenta produtividade, acelera aprendizado, democratiza acesso ao conhecimento.

**Grupo B — "IA é trapaça"**  
→ Substitui o esforço cognitivo, apaga autoria, cria dependência.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 44b — O que os conceitos adicionam -->

# O que os conceitos de hoje adicionam

<v-click>

- CV e NLP *imitam* capacidades humanas (visão, linguagem) — **não pensam, prevêem**
- LLMs são máquinas de *autocomplete* muito sofisticadas — não "entendem"
- **Consequência:** usar IA sem entender o que ela faz é trapaça; usar sabendo o que faz é ferramenta

</v-click>

<v-click>

> **Pergunta para levar pra casa:** se um médico usa CV para diagnosticar, quem assina o laudo?

</v-click>

