---
# ─────────────────────────────────────────────────────────────────
#  A05 · 12/03/2026 · Python: print, input, Operadores e Condicionais · Matemática · Estatística
# ─────────────────────────────────────────────────────────────────
theme: ./
colorSchema: dark

title: "Técnico em IA: Aula 05"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 05"

bgPreset: palette
# ─────────────────────────────────────────────────────────────────
---


# Aula 05
## Python: print, input, Operadores e Condicionais · Matemática · Estatística

*12 de março de 2026*

---
layout: default
card: true
bgPreset: default
---

<a>https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=pt-BR&instance_id=b45bd662-d1b0-4591-b7f1-31a76311a207</a>


---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 2 - Revisão rápida: o que você já sabe -->
<!-- objetivo: ativar memória de A04 sem reintroduzir conteúdo no mesmo nível -->

# O Que Você Já Sabe

Na aula passada (A04), você viu:

<v-click>

- **Variáveis**: `nome = "Ana"` — um nome para guardar um valor
- **Tipos**: `str`, `int`, `float`, `bool` — cada caixinha aceita um tipo de dado
- **`print()`**: exibe qualquer valor na tela

</v-click>

<v-click>

```python
nome = "GPT-4"
versao = 4
temperatura = 0.7
ativo = True

print(nome)           # GPT-4
print(versao)         # 4
print(temperatura)    # 0.7
print(ativo)          # True
```

> Hoje vamos aprofundar essas ferramentas e adicionar novas. Mão na massa.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 2b - print(): como funciona por dentro -->
<!-- objetivo: garantir que todos dominam o mecanismo básico antes do aprofundamento -->

# `print()`: Como Funciona?

`print()` exibe qualquer valor na tela e pula uma linha ao final:

```python
# string direta
print("Olá, turma!")           # Olá, turma!

# variável — exibe o valor guardado
modelo = "BERT"
print(modelo)                   # BERT

# expressão — Python calcula antes de exibir
print(10 + 5)                   # 15
print(3 > 2)                    # True

# vários valores ao mesmo tempo — separados por espaço
print("Modelo:", "BERT", "v4")  # Modelo: BERT v4
print("Precisão:", 0.94)        # Precisão: 0.94
```

<v-click>

> Cada `print()` termina com uma quebra de linha automaticamente. No próximo slide veremos como mudar isso — e outras formas de formatar a saída.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 3 - print(): além do básico -->
<!-- objetivo: aprofundar print com f-string, sep e end antes de ir para input -->

# `print()`: Além do Básico

Você já usou `print("texto")`. Mas ele faz muito mais:

```python {1-4|5-8|9-13|all}
# vários valores de uma vez — sep define o separador (padrão: espaço)
print("Modelo:", "GPT-4", "Versão:", 4)    # Modelo: GPT-4 Versão: 4
print("a", "b", "c", sep=" - ")           # a - b - c
print("a", "b", "c", sep="")              # abc

# end define o que vem depois (padrão: nova linha)
print("Carregando", end="")               # sem pular linha
print("...")                               # continua: Carregando...

# f-string: a forma profissional de montar texto
nome = "BERT"
precisao = 0.94
print(f"Modelo: {nome} | Precisão: {precisao}")   # Modelo: BERT | Precisão: 0.94
print(f"Aprovado: {precisao >= 0.90}")             # Aprovado: True
```

<v-click>

> `f-string` = `f` antes das aspas + `{expressao}` dentro. O Python executa a expressão e cola o resultado.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 3b - EX-print: na prática -->
<!-- objetivo: consolidar sep, end e f-string com um mini-exercício antes de tipos -->

# EX - `print()` na Prática

**Individual · 3 minutos · Nível 0**

Complete cada `print()` para obter a saída indicada:

```python
precisao = 0.94
modelo   = "BERT"
versao   = 4

# 1. saída esperada:  BERT
print(___)

# 2. saída esperada:  BERT-4
print(modelo, versao, sep=___)

# 3. saída esperada:  Modelo: BERT | Precisão: 0.94
print(f"Modelo: {___} | Precisão: {___}")

# 4. tudo na mesma linha:  Carregando...
print("Carregando", end=___)
print("...")
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 4 - Os 4 tipos de dados básicos -->
<!-- objetivo: consolidar os 4 tipos com exemplos práticos antes de ir para input -->

# Os 4 Tipos de Dados Básicos

| Tipo | Guarda | Exemplos |
|---|---|---|
| `str` | texto | `"Ana"`, `"GPT-4"` |
| `int` | número inteiro | `14`, `2026`, `100` |
| `float` | número decimal | `9.5`, `0.94` |
| `bool` | sim ou não | `True`, `False` |

<v-click>

```python
nome     = "GPT-4"      # str
versao   = 4             # int
precisao = 0.94          # float
ativo    = True          # bool

print(type(nome))        # <class 'str'>
print(type(versao))      # <class 'int'>
print(type(precisao))    # <class 'float'>
print(type(ativo))       # <class 'bool'>
```

> O Python decide o tipo pelo que você escreveu: aspas = `str`, ponto decimal = `float`, `True`/`False` = `bool`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 4b - type(): descobrindo o tipo de qualquer valor -->
<!-- objetivo: mostrar que type() é uma ferramenta de diagnóstico essencial -->

# `type()`: Qual É o Tipo?

Use `type()` para perguntar ao Python qual é o tipo de uma variável:

```python
nome     = "GPT-4"
versao   = 4
precisao = 0.94
ativo    = True

print(type(nome))        # <class 'str'>
print(type(versao))      # <class 'int'>
print(type(precisao))    # <class 'float'>
print(type(ativo))       # <class 'bool'>

# funciona com literais também
print(type("texto"))     # <class 'str'>
print(type(42))          # <class 'int'>
print(type(3.14))        # <class 'float'>
print(type(True))        # <class 'bool'>
```

<v-click>

> `type()` é uma ferramenta de diagnóstico: quando algo não funciona como esperado, use ela para ver o que o Python realmente guarda na variável.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 4c - misturando tipos: o que pode dar errado -->
<!-- objetivo: mostrar que tipos incompatíveis causam erro e que conversão resolve -->

# Tipos Incompatíveis: O Python Reclama

Python não mistura `str` com número sem permissão:

```python
# ERRO: não pode somar str com int
idade = "18"
print(idade + 1)      # TypeError: can only concatenate str!

# SOLUÇÃO: converter antes com int()
idade = int("18")
print(idade + 1)      # 19

# os quatro conversores mais usados:
int("14")       # "14"  → 14    (str para int)
float("9.5")    # "9.5" → 9.5   (str para float)
str(42)         # 42   → "42"  (int para str)
int(9.9)        # 9.9  → 9     (corta, NÃO arredonda!)
```

<v-click>

> `int(9.9)` dá `9`, não `10`. Ele *corta* os decimais. Use `round()` antes se precisar arredondar: `int(round(9.9))` → `10`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 5 - input(): lendo do usuário -->
<!-- objetivo: apresentar input() como ferramenta de leitura interativa -->

# `input()`: Lendo do Usuário

Até agora os dados estavam **fixos no código**. Com `input()`, o usuário digita:

```python {1-3|4-7|all}
# input() pausa o programa e espera o usuário digitar
nome = input("Digite seu nome: ")

# o que foi digitado fica na variável
print("Olá,", nome)             # Olá, Ana
print(f"Bem-vindo, {nome}!")    # Bem-vindo, Ana!
```

<v-click>

```python
# exemplo com modelo de IA
modelo = input("Nome do modelo: ")
print(f"Avaliando: {modelo}")
```

</v-click>

<v-click>

| O que acontece | Exemplo |
|---|---|
| Programa exibe a mensagem | `"Digite seu nome: "` aparece na tela |
| Aguarda o usuário digitar e pressionar Enter | usuário digita `"Ana"` |
| O valor digitado é atribuído à variável | `nome = "Ana"` |

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 6 - input() + tipos: a armadilha clássica -->
<!-- objetivo: mostrar que input() SEMPRE retorna str e precisa de conversão -->

# `input()` Sempre Retorna `str`

Essa é a armadilha mais comum no começo:

```python {1-4|5-9|10-14|all}
# o usuário digita 8 — mas input() guarda como str!
nota = input("Digite a nota: ")
print(type(nota))    # <class 'str'> ← ATENÇÃO: é texto, não número!

# problema: tentar somar dois "números" digitados
a = input("Número 1: ")     # usuário digita 5
b = input("Número 2: ")     # usuário digita 3
print(a + b)                 # "53" ← colou textos, não somou!

# solução: converter com int() ou float()
nota = float(input("Digite a nota: "))
print(type(nota))    # <class 'float'> ← agora é número
print(nota >= 7)     # True (se digitou >= 7)
```

<v-click>

**Regra:** `input()` retorna sempre `str`. Para usar como número, converta: `int(input(...))` ou `float(input(...))`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 6b - receita da conversão com input -->
<!-- objetivo: fixar o padrão int(input()) e float(input()) como receita memorável -->

# A Receita: Converter na Hora do `input()`

Converta direto ao capturar — não espere:

```python
# RECEITA para inteiro:  int(input("mensagem: "))
quantidade = int(input("Quantos exemplos? "))
print(type(quantidade))        # <class 'int'> ✓
print(quantidade + 1)          # funciona!

# RECEITA para decimal:  float(input("mensagem: "))
precisao = float(input("Precisão (ex: 0.87): "))
print(type(precisao))          # <class 'float'> ✓
print(precisao >= 0.80)        # True ou False

# NUNCA precisa de str(input()):  input() já retorna str
nome = input("Seu nome: ")     # já é str
```

<v-click>

```
int(input(...))    → número inteiro
float(input(...))  → número com casas decimais
input(...)         → texto (str) — sem conversão necessária
```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 7 - EX00: Seu primeiro input -->
<!-- objetivo: praticar input + print + f-string de forma simples -->

# EX00 - Seu Primeiro `input()`

**Individual · 5 minutos · Nível 0**

Complete o código para que funcione como no exemplo:

```python
# EX00 - Seu Primeiro input()
# Digite seu nome e sua cidade — o programa vai saudar você

nome   = input(___)    # mensagem: "Seu nome: "
cidade = input(___)    # mensagem: "Sua cidade: "

print(f"Olá, {___}!")        # Olá, Ana!
print(f"Você é de {___}.")   # Você é de SP.

# BONUS: peça também a idade e converta para int
# idade = ___(input("Sua idade: "))
# print(f"{nome} tem {idade} anos.")
```

<v-click>

`input("mensagem")` — a mensagem é opcional, mas sempre coloque: fica muito mais claro para quem usa o programa.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 7b - EX00b: calculadora de modelo com input -->
<!-- objetivo: praticar int/float(input()) com contexto de métricas de IA -->

# EX00b - Calculadora de Modelo

**Individual · 5 minutos · Nível 0**

Complete o código para que funcione como nos comentários:

```python
# EX00b - Calculadora de Modelo
# Lê corretos e total com input(), calcula precisão e erros.

corretos = ___(input("Acertos do modelo: "))    # converta para int
total    = ___(input("Total de amostras: "))    # converta para int

precisao = ___                                   # corretos / total
erros    = ___                                   # total - corretos

print(f"Precisão : {precisao}")    # ex: 0.87
print(f"Erros    : {erros}")       # ex: 130

# BONUS: exiba a precisão em %
print(f"Porcentagem: {___ * 100}%")   # ex: 87.0%
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 8 - Operadores aritméticos básicos: +, -, *, / -->
<!-- objetivo: apresentar +, -, *, / com exemplos dos 4 operadores fundamentais -->

# Operadores Aritméticos: `+` `-` `*` `/`

Python faz cálculos como uma calculadora:

```python
# os 4 operadores fundamentais
acertos = 90
total   = 100

soma  = acertos + 5       # 95
subtr = total - acertos   # 10 (erros)
mult  = acertos * 2       # 180
div   = acertos / total   # 0.9 — divisão SEMPRE retorna float
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 8-prec - Operadores aritméticos: calculando métricas reais -->
<!-- objetivo: aplicar +, -, *, / em cálculo de precisão de modelo -->

# Operadores Aritméticos: Calculando Métricas

Aplicando os operadores em contexto real de IA:

```python
# contexto real: calcular precisão de um modelo
corretos = 850
amostras = 1000

precisao = corretos / amostras        # 0.85
print(f"Precisão: {precisao}")        # Precisão: 0.85
print(f"Precisão %: {precisao * 100}%")  # Precisão %: 85.0%
```

<v-click>

> `/` (barra simples) **sempre** retorna `float`. `850 / 1000 = 0.85`, nunca `0`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 8b - / vs //: comportamento de cada operador -->
<!-- objetivo: mostrar como / sempre retorna float e // sempre retorna inteiro -->

# `/` vs `//`: Comportamento

`/` e `//` fazem divisão, mas de formas diferentes:

```python
# /  sempre retorna float (mesmo que seja "exato")
print(10 / 2)    # 5.0   ← float, não 5!
print(9  / 3)    # 3.0   ← float, não 3!
print(7  / 2)    # 3.5   ← float correto

# // retorna inteiro (corta os decimais, não arredonda)
print(10 // 2)   # 5     ← int
print(9  // 3)   # 3     ← int
print(7  // 2)   # 3     ← cortou o 0.5!
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 8b-uso - / vs //: quando usar cada um -->
<!-- objetivo: orientar a escolha entre / e // por contexto de uso em IA -->

# `/` vs `//`: Quando Usar Cada Um

Escolha o operador pelo tipo de resultado que você precisa:

```python
# quando usar cada um:
# /  → precisões, médias, percentuais (precisa de decimal)
# // → índices, batches, divisão de grupos (precisa de inteiro)

# exemplo concreto:
corretos = 870
total    = 1000

precisao = corretos / total      # 0.87  ← float correto!
batch    = total // 32           # 31    ← inteiro correto!
```

<v-click>

> Para precisão: `corretos / total` retorna `0.87` (float — correto!). Use `//` apenas quando o resultado inteiro for o que você precisa.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 9 - Operadores especiais: // e % -->
<!-- objetivo: apresentar // e % como novidades para a turma -->

# Operadores Especiais: `//` e `%`

Divisão inteira e resto:

```python
# // divisão inteira: corta os decimais (não arredonda!)
print(10 // 3)    # 3   ← quantas vezes 3 cabe em 10?
print(7 // 2)     # 3   ← 3, não 3.5
print(9 // 3)     # 3

# % módulo: o RESTO da divisão inteira
print(10 % 3)     # 1   ← sobra 1 depois de tirar os 3s
print(7 % 2)      # 1   ← 7 é ímpar: sobra 1
print(6 % 2)      # 0   ← 6 é par: sobra 0
```

<v-click>

**Truque do `%`:** se `x % 2 == 0`, o número é par. Se `x % 2 == 1`, é ímpar.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 9-pot - Operador especial: ** potência -->
<!-- objetivo: apresentar ** como o terceiro operador especial -->

# Operador Especial: `**` Potência

Potências com `base ** expoente`:

```python
# ** potência: base ** expoente
print(2 ** 3)     # 8    ← 2³
print(10 ** 2)    # 100  ← 10²
print(9 ** 0.5)   # 3.0  ← raiz quadrada de 9

# em IA: camadas com potências de 2
print(2 ** 6)     # 64   ← neurônios por camada
print(2 ** 7)     # 128
print(2 ** 8)     # 256
print(2 ** 9)     # 512
```

<v-click>

> Camadas de redes neurais têm 64, 128, 256, 512 neurônios: todas potências de 2. Isso é eficiência computacional, não coincidência.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 9b - %: par, ímpar -->
<!-- objetivo: aprofundar o operador % para verificar paridade -->

# `%` na Prática: Par e Ímpar

O módulo (`%`) é o **resto** da divisão:

```python
# par: resto 0 ao dividir por 2
print(10 % 2)    # 0  ← par
print(7  % 2)    # 1  ← ímpar
print(42 % 2)    # 0  ← par
print(99 % 2)    # 1  ← ímpar

# divisível por N: resto 0
print(15 % 5)    # 0  ← 15 é divisível por 5
print(16 % 5)    # 1  ← não é divisível
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 9b-batch - %: batches e épocas em IA -->
<!-- objetivo: mostrar uso do % para controle de progresso em treino de modelos -->

# `%` na Prática: Batches e Épocas

Usado para checar progresso periódico em IA:

```python
# em IA: checar progresso a cada N épocas
epoca = 30
print(epoca % 10)   # 0 ← época 30 é múltiplo de 10!

epoca = 25
print(epoca % 10)   # 5 ← não é múltiplo de 10

# no treino: imprimir perda a cada 10 épocas
# if epoca % 10 == 0:
#     print(f"Época {epoca}: perda = {perda}")
```

<v-click>

> `n % N == 0` pergunta: "N divide n sem sobrar nada?" Aparece muito em loops de treino para saber quando imprimir o progresso do modelo.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 9c - **: potências de 2 em computação -->
<!-- objetivo: aprofundar ** com potências de 2 e seus significados computacionais -->

# `**`: Potências de 2 na Computação

`**` significa "elevado a":

```python
# potências básicas de 2
print(2 ** 1)     # 2
print(2 ** 8)     # 256    ← bits em 1 byte
print(2 ** 10)    # 1024   ← camadas com 1024 neurônios
print(2 ** 32)    # 4294967296 ← endereços IPv4 possíveis
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 9c-raiz - **: raiz quadrada em IA -->
<!-- objetivo: mostrar que expoente 0.5 calcula raiz quadrada, com contexto de desvio padrão -->

# `**`: Raiz Quadrada

Expoente `0.5` calcula raiz quadrada:

```python
# raiz quadrada: expoente 0.5
print(9  ** 0.5)  # 3.0    ← raiz de 9
print(16 ** 0.5)  # 4.0    ← raiz de 16
print(25 ** 0.5)  # 5.0    ← raiz de 25

# em IA: desvio padrão usa raiz quadrada
variancia = 0.04
desvio = variancia ** 0.5
print(desvio)     # 0.2
```

<v-click>

> Camadas de redes neurais têm 64, 128, 256, 512 neurônios: todas potências de 2. Isso é eficiência computacional, não coincidência.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 10 - Prioridade dos operadores: tabela -->
<!-- objetivo: mostrar a ordem de precedência em formato de tabela visual -->

# Prioridade: A Ordem Importa

Python segue a mesma ordem da matemática:

| Nível | Operadores | Exemplo |
|---|---|---|
| 1 (maior) | `**` potência | `2 ** 3` = 8 |
| 2 | `*`, `/`, `//`, `%` | `3 * 4` = 12 |
| 3 (menor) | `+`, `-` | `10 - 2` = 8 |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 10-cod - Prioridade: exemplos em código -->
<!-- objetivo: demonstrar a precedência com código Python executável -->

# Prioridade: Exemplos em Código

Veja a precedência em ação:

```python
# sem parênteses: multiplicação antes da soma
resultado = 2 + 3 * 4       # 14 (não 20!)

# parênteses forçam a prioridade
resultado = (2 + 3) * 4     # 20

# potência antes de tudo
resultado = 2 ** 3 + 1      # 9 (8 + 1, não 2 ** 4)

print(2 + 3 * 4)    # 14
print((2 + 3) * 4)  # 20
```

<v-click>

> Dúvida? Use parênteses. Deixa o código mais claro e evita bugs.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 11 - EX01: Calculando métricas com operadores (parte 1) -->
<!-- objetivo: praticar / e - com contexto de métricas de modelo -->

# EX01 - Calculando Métricas (1/2)

**Em dupla · 8 minutos · Nível 1**

```python
# EX01 - Calculando Métricas de um Modelo
corretos  = 870
total     = 1000

# 1. precisão: corretos dividido por total
precisao = ___
print(f"Precisão: {precisao}")           # 0.87

# 2. erros: quantos acertos faltaram para o total?
erros = ___
print(f"Erros: {erros}")                 # 130
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 11-cont - EX01: Calculando métricas com operadores (parte 2) -->
<!-- objetivo: praticar % e ** completando o exercício iniciado no slide anterior -->

# EX01 - Calculando Métricas (2/2)

**Em dupla · continuação**

```python
# continuação do EX01
total    = 1000
base     = 2
expoente = 10

# 3. quanto sobra ao dividir total por 3?
resto = ___
print(f"Resto de 1000÷3: {resto}")      # 1

# 4. 2 elevado a 10 (quantas combinações possíveis?)
combinacoes = ___
print(f"Combinações: {combinacoes}")    # 1024

# BONUS: (2 ** 3 + 1) * 2 — calcule na mão primeiro!
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 12 - Operadores de Comparação: sintaxe -->
<!-- objetivo: apresentar os 6 operadores de comparação com exemplos simples -->

# Operadores de Comparação

Toda comparação retorna `True` ou `False`:

```python
10 == 10    # True: igual a
10 != 9     # True: diferente de
10 > 5      # True: maior que
5 < 10      # True: menor que
10 >= 10    # True: maior ou igual
5 <= 10     # True: menor ou igual
```

<v-click>

> O resultado é sempre `bool`: `True` ou `False`. Esse valor pode ser guardado em variável ou usado direto num `if`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 12-ap - Operadores de Comparação: aplicados a nota e precisão -->
<!-- objetivo: praticar comparações com variáveis reais de nota e precisão de modelo -->

# Operadores de Comparação: na Prática

Comparando notas e métricas de modelo:

```python
nota = 7.5
print(nota >= 7)      # True: aprovado!
print(nota == 10)     # False: não é nota máxima
print(nota < 5)       # False: não está reprovado

precisao = 0.87
print(precisao > 0.90)    # False: não atingiu meta
print(precisao >= 0.70)   # True: aceitável
```

<v-click>

> Use comparações para validar entradas, classificar notas e checar se métricas de modelo atingiram metas.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 12a - ==: perguntando sobre igualdade -->
<!-- objetivo: isolar o operador == com exemplos de strings e números -->

# `==`: São Iguais?

`==` pergunta "são iguais?" e retorna `True` ou `False`:

```python
# == : são iguais? (dois sinais de igual!)
print(10 == 10)           # True  ← iguais
print(10 == 9)            # False ← diferentes
print("BERT" == "BERT")   # True
print("bert" == "BERT")   # False ← maiúsculas importam!

# com variáveis
modelo = "GPT-4"
print(modelo == "GPT-4")  # True
print(modelo == "BERT")   # False
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 12a-ne - !=: perguntando sobre diferença -->
<!-- objetivo: isolar o operador != e reforçar a diferença entre = e == -->

# `!=`: São Diferentes?

`!=` pergunta "são diferentes?":

```python
# != : são diferentes?
print(10 != 9)            # True  ← são diferentes
print(10 != 10)           # False ← são iguais, não diferentes

# com variáveis
modelo = "GPT-4"
print(modelo != "BERT")   # True  ← modelos diferentes
print(modelo != "GPT-4")  # False ← são iguais!
```

<v-click>

> **Erro clássico:** `if nota = 7:` dá erro de sintaxe. `=` atribui, `==` compara. São operações completamente diferentes.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 12b - < e >: comparando grandezas -->
<!-- objetivo: isolar os operadores < e > com exemplos de nota -->

# `<` e `>`: Menor e Maior

Comparam tamanho ou quantidade:

```python
nota = 7.5

print(nota > 7)      # True  ← 7.5 é maior que 7
print(nota < 7)      # False ← 7.5 não é menor que 7
print(nota > 7.5)    # False ← maior estrito, não igual
print(nota < 7.5)    # False ← menor estrito, não igual
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 12b-ge - <= e >=: maior/menor ou igual -->
<!-- objetivo: isolar <= e >= e mostrar diferença com < e > -->

# `<=` e `>=`: Menor/Maior ou Igual

`>=` e `<=` incluem o valor limite:

```python
nota = 7.5

print(nota >= 7)     # True  ← 7.5 é maior OU igual a 7
print(nota <= 7)     # False ← 7.5 não é menor nem igual a 7
print(nota >= 7.5)   # True  ← igual também vale no >=

# contexto IA
precisao = 0.87
print(precisao > 0.90)    # False: não bateu a meta
print(precisao >= 0.70)   # True: aceitável para produção
```

<v-click>

> Use `>=` (maior ou igual) para "aprovado": nota 7.0 exato ainda passa. Use `>` estrito quando o valor limite não conta.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 13 - EX02: Verdadeiro ou Falso? (parte 1) -->
<!-- objetivo: calcular expressões de comparação na mão antes de rodar código -->

# EX02 - Verdadeiro ou Falso? (1/2)

**Individual · 5 minutos · Nível 0: calcule na mão**

Antes de rodar, escreva `True` ou `False` para cada linha:

```python
# EX02 - Verdadeiro ou Falso?
a = 8
b = 5

print(a > b)         # ___
print(a == b)        # ___
print(a != b)        # ___
print(b >= 5)        # ___
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 13-cont - EX02: Verdadeiro ou Falso? (parte 2) -->
<!-- objetivo: continuar o exercício com expressões que combinam operadores aritméticos e de comparação -->

# EX02 - Verdadeiro ou Falso? (2/2)

**Individual · continuação**

```python
# EX02 - continuação (a = 8, b = 5)
print(a + b > 15)    # ___
print(a * 2 == 16)   # ___
print(10 // 3 == 3)  # ___
print(7 % 2 == 0)    # ___
```

<v-click>

Agora rode no VS Code e confira.

> Cuidado com `==` vs `=`: `==` pergunta, `=` atribui.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 13b - EX02b: compare os modelos (parte 1) -->
<!-- objetivo: praticar == != com contexto de comparação de dois modelos -->

# EX02b - Compare os Modelos (1/2)

**Em dupla · 4 minutos · Nível 1**

Dois modelos foram treinados. Complete as comparações:

```python
# EX02b - Compare os Modelos
modelo_a    = "BERT"
modelo_b    = "GPT-4"
precisao_a  = 0.91
precisao_b  = 0.86

# 1. os modelos têm nomes iguais?
print(modelo_a == modelo_b)         # ___

# 2. a precisão do modelo A é maior que a do B?
print(precisao_a ___ precisao_b)   # True
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 13b-cont - EX02b: compare os modelos (parte 2) -->
<!-- objetivo: praticar < > >= com contexto de precisão de modelos de IA -->

# EX02b - Compare os Modelos (2/2)

**Em dupla · continuação**

```python
# EX02b - continuação (precisao_a=0.91, precisao_b=0.86)

# 3. o modelo B tem precisão menor que 0.70?
print(precisao_b ___ 0.70)         # False

# 4. o modelo A atingiu a meta de 0.90?
print(precisao_a ___ 0.90)         # True

# 5. os dois têm precisão diferente?
print(precisao_a ___ precisao_b)   # True
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 14 - Operadores Lógicos: and e or -->
<!-- objetivo: apresentar and e or com exemplos de aprovação e IA -->

# Operadores Lógicos: `and` e `or`

Combinam comparações — resultado é sempre `bool`:

```python
# and: as DUAS precisam ser verdade
nota      = 7.5
frequencia = 0.80

print(nota >= 7 and frequencia >= 0.75)   # True: aprovado nos dois!
print(nota >= 7 and frequencia >= 0.90)   # False: frequência insuficiente

# or: pelo MENOS UMA precisa ser verdade
modelo = "BERT"
tamanho = 350
print(modelo == "GPT-4" or tamanho > 100)  # True: tamanho é maior que 100
print(modelo == "GPT-4" or tamanho > 500)  # False: nenhuma é verdade
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 14-not - Operador Lógico: not -->
<!-- objetivo: apresentar not com exemplos de inversão de booleano -->

# Operador Lógico: `not`

`not` inverte o valor booleano:

```python
# not: inverte
ativo = False
print(not ativo)    # True: se não está ativo, imprime True
print(not True)     # False

# com métricas de modelo
bloqueado = True
print(not bloqueado)   # False: não está desbloqueado
```

<v-click>

> `not` lê ao contrario: `not bloqueado` é mais claro que `bloqueado == False`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 14b - and: tabela de verdade completa -->
<!-- objetivo: isolar and com tabela de verdade e exemplo de aprovação -->

# `and`: Tabela de Verdade

`and` retorna `True` apenas quando **ambas** as condições são `True`:

```python
# tabela de verdade do and:
print(True  and True)    # True  ← ambas verdade
print(True  and False)   # False ← uma é falsa
print(False and True)    # False ← uma é falsa
print(False and False)   # False ← ambas falsas
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 14b-ap - and: aplicado a aprovação -->
<!-- objetivo: mostrar and em contexto real de nota e frequência -->

# `and`: Nota E Frequência

Aplicando `and` em aprovação escolar:

```python
# exemplo real: aprovação por nota E frequência
nota       = 8.0
frequencia = 0.85

print(nota >= 7.0 and frequencia >= 0.75)   # True: aprovado!
print(nota >= 7.0 and frequencia >= 0.95)   # False: frequência baixa
```

<v-click>

> Pense em `and` como "E": "nota boa **E** frequência boa". Qualquer uma que falha reprova.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 14c - or: tabela de verdade completa -->
<!-- objetivo: isolar or com tabela de verdade e exemplo de acesso VIP -->

# `or`: Tabela de Verdade

`or` retorna `True` quando **pelo menos uma** condição é `True`:

```python
# tabela de verdade do or:
print(True  or True)    # True  ← pelo menos uma é True
print(True  or False)   # True  ← a primeira é True
print(False or True)    # True  ← a segunda é True
print(False or False)   # False ← nenhuma é True
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 14c-ap - or: aplicado a acesso e acurácia -->
<!-- objetivo: mostrar or em contexto real de acesso VIP e acurácia excelente -->

# `or`: VIP ou Acurácia Excelente

Aplicando `or` em controle de acesso:

```python
# exemplo real: acesso liberado se VIP ou acurácia excelente
vip      = False
acuracia = 0.95

print(vip or acuracia >= 0.90)   # True: acurácia é excelente!
print(vip or acuracia >= 0.99)   # False: nenhuma condição atendida
```

<v-click>

> Pense em `or` como "OU": "é VIP **OU** tem acurácia excelente". Basta uma para entrar.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 14d - not: invertendo o resultado -->
<!-- objetivo: isolar not com exemplos claros de inversão -->

# `not`: Invertendo o Resultado

`not` inverte o valor booleano:

```python
# not inverte True em False e False em True
print(not True)     # False
print(not False)    # True

# com variáveis
ativo    = False
bloqueado = True

print(not ativo)      # True  ← SE não está ativo...
print(not bloqueado)  # False ← não está desbloqueado
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 14d-ap - not: aplicado a aprovacao e reprovacao -->
<!-- objetivo: mostrar not em contexto de nota e reforçar legível como alternativa a == False -->

# `not`: Quando Usar

Aplicando `not` com notas e situações de modelo:

```python
# usando not com comparação
nota = 4.5
reprovado = nota < 5.0
print(reprovado)        # True
print(not reprovado)    # False ← passou? Não.
```

<v-click>

> Use `not` para inverter quando a condição fica mais legível "ao contrário": `not bloqueado` é mais claro que `bloqueado == False`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 15 - Operadores Lógicos: Resumo (tabela) -->
<!-- objetivo: tabela resumo para fixar and/or/not antes de ir para if -->

# Operadores Lógicos: Resumo

| Operador | Resultado `True` quando... | Exemplo |
|---|---|---|
| `a and b` | `a` E `b` são True | `nota >= 7 and freq >= 0.75` |
| `a or b` | `a` OU `b` são True | `vip == True or pontos > 100` |
| `not a` | `a` é False | `not bloqueado` |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 15-cod - Operadores Lógicos: Resumo em código -->
<!-- objetivo: exibir os três operadores em código Python antes de avançar para if -->

# Operadores Lógicos: Em Código

Usando `and`, `or` e `not` juntos:

```python
nota      = 8.0
frequencia = 0.85
bonus      = True

aprovado     = nota >= 7 and frequencia >= 0.75
tem_bonus    = bonus or nota >= 9
nao_reprovado = not (nota < 5)

print(aprovado)       # True
print(tem_bonus)      # True
print(nao_reprovado)  # True
```

<v-click>

> `and`, `or`, `not` — o vocabulário para montar condições complexas. A partir de agora, eles entram dentro do `if`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 16 - if simples: estrutura e sintaxe -->
<!-- objetivo: introduzir if simples com bloco indentado -->

# Condicional: `if` Simples

O `if` executa um bloco **só se** a condição for `True`:

```python
# estrutura básica
nota = 8.5
if nota >= 7:
    print("Aprovado!")    # só roda se nota >= 7
```

<v-click>

```
if <condição>:
    <código que roda SE verdadeiro>
    <pode ter várias linhas>
```

**A indentação (4 espaços ou 1 Tab) é obrigatória.** O Python usa isso para saber o que pertence ao `if`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 16-ia - if simples: exemplo com precisão de modelo -->
<!-- objetivo: reforçar if simples com contexto de aprovação de modelo de IA para produção -->

# `if` Simples: Aprovação de Modelo

Aplicando `if` em contexto de IA:

```python
# exemplo com contexto de IA
precisao = 0.93
if precisao >= 0.90:
    print("Modelo aprovado para produção")
    print(f"Precisão atingida: {precisao}")
```

<v-click>

> O bloco dentro do `if` pode ter quantas linhas precisar. Todas precisam ter a mesma indentação de 4 espaços.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 16b - indentação: o Python vê espaços (correto) -->
<!-- objetivo: mostrar indentação correta com exemplo visual do bloco if -->

# Indentação: O Python Vê Espaços

Em Python, **os espaços importam**. O bloco do `if` precisa estar recuado:

```python
# CORRETO: 4 espaços de recuo
nota = 8.5
if nota >= 7:
    print("Aprovado!")    # ← pertence ao if (roda SÓ se nota >= 7)
    print("Parabéns!")    # ← também pertence ao if

print("Fim.")             # ← sem recuo: SEMPRE roda
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 16b-err - indentação: erro e regra visual -->
<!-- objetivo: mostrar o IndentationError e a regra dos 4 espaços -->

# Indentação: Erro e Regra

Faltar a indentação causa erro:

```python
# ERRO: IndentationError
if nota >= 7:
print("Aprovado!")    # ← faltou o recuo! Python vai reclamar.
```

<v-click>

```
if <condição>:
    código A   ← 4 espaços (pertence ao if)
    código B   ← 4 espaços (também pertence)
código C       ← sem recuo (SEMPRE roda, fora do if)
```

> Use sempre 4 espaços (ou 1 Tab). **Nunca misture** espaços com tabs.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 17 - if/else: estrutura com dois caminhos -->
<!-- objetivo: adicionar o else como alternativa ao bloco if -->

# Condicional: `if` / `else`

`else` define o que acontece quando a condição é `False`:

```python
# um caminho para cada lado
nota = 4.5
if nota >= 7:
    print("Aprovado!")
else:
    print("Reprovado.")
```

<v-click>

```
if <condição>:
    <roda quando True>
else:
    <roda quando False>
```

> `else` não tem condição é o "senão" geral. Só um `else` por `if`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 17-ia - if/else: contexto de deploy de modelo -->
<!-- objetivo: mostrar if/else em contexto real de aprovação de modelo de IA -->

# `if` / `else`: Deploy de Modelo

Aplicando `if/else` em validação de modelo:

```python
# contexto IA: aprovação de modelo
precisao = 0.65
if precisao >= 0.80:
    print("Deploy liberado")
else:
    print("Modelo precisa de mais treino")
    print(f"Meta: 0.80 | Atual: {precisao}")
```

<v-click>

> O bloco `else` também pode ter várias linhas — todas com o mesmo recuo de 4 espaços.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 18 - if/elif/else: múltiplos caminhos (classificação de nota) -->
<!-- objetivo: apresentar elif com exemplo de classificação de nota em conceitos -->

# Condicional: `if` / `elif` / `else`

Para mais de dois casos, use `elif` (senão, se...):

```python
# classificando nota com múltiplos casos
nota = 7.5
if nota >= 9.0:
    print("Conceito A")
elif nota >= 7.0:
    print("Conceito B")    # ← cai aqui
elif nota >= 5.0:
    print("Conceito C")
elif nota >= 3.0:
    print("Conceito D")
else:
    print("Conceito F")
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 18-ia - if/elif/else: com operadores lógicos e contexto de IA -->
<!-- objetivo: mostrar elif com critérios combinados de precisão e ambiente de produção -->

# `if/elif/else`: Com Operadores Lógicos

Combinando `elif` com `and` em contexto de IA:

```python
# com operadores lógicos combinados
precisao = 0.85
ambiente = "producao"
if precisao >= 0.90 and ambiente == "producao":
    print("Deploy aprovado")
elif precisao >= 0.70:
    print("Deploy em homologação")
else:
    print("Reprovar modelo")
```

<v-click>

> Cada `elif` é avaliado em ordem. Assim que um vira `True`, os outros são ignorados. O `else` só roda se nenhum foi `True`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 18b - condicionais com and -->
<!-- objetivo: mostrar como usar and dentro do if para combinar critérios -->

# Condicionais com `and`

`and` dentro do `if` exige que **ambas** as condições sejam verdade:

```python
# and no if: AMBAS precisam ser verdade
nota       = 7.5
frequencia = 0.80

if nota >= 7 and frequencia >= 0.75:
    print("Aprovado!")       # ← só roda se as DUAS forem True
else:
    print("Reprovado.")
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 18b-ornot - condicionais com or e not -->
<!-- objetivo: mostrar or e not dentro de if com contexto de modelo VIP e usuário padrão -->

# Condicionais com `or` e `not`

`or` e `not` dentro do `if`:

```python
# or no if: BASTA UMA
vip      = False
precisao = 0.92

if vip or precisao >= 0.90:
    print("Deploy autorizado")   # ← roda se qualquer uma for True

# not no if
if not vip:
    print("Usuário padrão — verificar métricas")
```

<v-click>

> Leia em voz alta: `if nota >= 7 and frequencia >= 0.75` → "SE nota maior ou igual a 7 E frequência maior ou igual a 0.75". Isso ajuda a evitar erros de lógica.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19 - EX03: Classificador de notas -->
<!-- objetivo: praticar if/elif/else no nível 1 com starter code -->

# EX01 - Classificador de Notas

**Em dupla · 8 minutos · Nível 1**

```python
# EX01 - Classificador de Notas
nota = float(input("Digite a nota (0 a 10): "))

if nota >= 9.0:
    conceito = ___    # "A"
elif nota >= 7.0:
    conceito = ___    # "B"
elif nota >= 5.0:
    conceito = ___    # "C"
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19-cont - EX03: Classificador de notas (continuação) -->
<!-- objetivo: completar o elif/else e imprimir o resultado do classificador -->

# EX01 - Classificador de Notas (cont.)

**Em dupla · continuação**

```python
# EX01 - continuação
# (nota já foi lida no slide anterior)

elif nota >= 3.0:
    conceito = ___    # "D"
else:
    conceito = ___    # "F"

print(f"Nota {nota}: Conceito {conceito}")

# teste com: 9.5 → A | 7.0 → B | 4.9 → D | 1.0 → F
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 15 - Funções de string: len, strip, upper, lower -->
<!-- objetivo: apresentar as funções de string mais usadas -->

# Funções de String

Strings têm ferramentas prontas. Use o `.` para chamar:

```python
modelo = "  GPT-4 Turbo  "

len(modelo)               # 16: tamanho (conta espaços!)
modelo.strip()            # "GPT-4 Turbo": sem espaços nas pontas
modelo.upper()            # "  GPT-4 TURBO  ": tudo maiúsculo
modelo.lower()            # "  gpt-4 turbo  ": tudo minúsculo
modelo.replace("4", "5")  # "  GPT-5 Turbo  ": troca trecho
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 15-enc - Funções de string: encadeamento -->
<!-- objetivo: mostrar encadeamento de funções de string e contexto de limpeza de dados -->

# Funções de String: Encadeamento

Aplique várias funções de uma vez:

```python
# Encadeamento: aplicar várias de uma vez
nome_limpo = "  gpt-4 turbo  ".strip().upper()
print(nome_limpo)   # "GPT-4 TURBO"
```

<v-click>

> Em dados reais, nomes de modelos e labels chegam sujos: espaços extras, caixa errada, caracteres estranhos. Essas funções são o primeiro passo de limpeza.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 16 - EX02: Processe o nome do modelo -->
<!-- objetivo: praticar strip, upper, lower, replace e len com contexto de nome de modelos de IA -->

# EX02 - Processe o Nome do Modelo

**Individual · 8 minutos · Nível 1**

```python
# EX02 - Processe o Nome do Modelo
entrada = "  gemini 1.5 pro  "   # dado "sujo" de entrada

# 1. qual o tamanho do texto (com espaços)?
print(len(entrada))               # ___

# 2. remova os espaços das pontas
limpo = ___                       # use .strip()
print(limpo)                      # "gemini 1.5 pro"

# 3. coloque em maiúsculo
maiusculo = ___                   # use .upper()
print(maiusculo)                  # "GEMINI 1.5 PRO"

# 4. troque "pro" por "flash" (na versão limpa)
novo = limpo.replace(___, ___)
print(novo)                       # "gemini 1.5 flash"
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 17 - Funções de número: abs e round -->
<!-- objetivo: apresentar abs e round como ferramentas numéricas -->

# Funções de Número: `abs()` e `round()`

```python
# abs(): valor absoluto (sem sinal negativo)
abs(-7.5)           # 7.5
abs(3)              # 3

# round(): arredonda para N casas decimais
round(3.14159, 2)   # 3.14
round(7.5)          # 8: arredonda para inteiro
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 17-conv - Funções de número: conversores int/float/str -->
<!-- objetivo: apresentar os conversores de tipo como parte da caixa de ferramentas numérica -->

# Funções de Número: Conversores

Conversores traduzem entre tipos:

```python
# conversores: traduzem entre tipos
int("14")           # 14: str para int
int(9.9)            # 9: float para int (corta, não arredonda!)
float("9.5")        # 9.5: str para float
str(42)             # "42": int para str
```

<v-click>

> `int(9.9)` dá `9`, não `10`. Ele corta o decimal, não arredonda. Use `round()` para arredondar antes se precisar.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 18 - EX03: Formate o relatório (exercício) -->
<!-- objetivo: combinar abs, round, str e f-string para montar saída formatada -->

# EX03 - Formate o Relatório

**Individual · 8 minutos · Nível 2**

```python
# EX03 - Formate o Relatório
precisao_bruta = 0.91666666
variacao = -0.045
nome_modelo = "  claude-3  "

# 1. arredonde a precisão para 2 casas decimais
precisao = ___             # use round()

# 2. valor absoluto da variação (sem sinal)
variacao_abs = ___         # use abs()

# 3. limpe o nome: sem espaços, em maiúsculo
nome = ___                 # use .strip() e .upper()
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 18-saida - EX03: saída esperada do relatório -->
<!-- objetivo: exibir o print final e a saída esperada do EX03 -->

# EX03 - Saída Esperada

**Individual · continuação**

```python
# EX03 - continuação
# (precisao, variacao_abs e nome já calculados)

# 4. monte o relatório com f-string:
print(f"Modelo: {nome}")
print(f"Precisão: {precisao}")
print(f"Variação: {variacao_abs}")
```

Saída esperada:
```
Modelo: CLAUDE-3
Precisão: 0.92
Variação: 0.045
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19 - Integração: condicional + funções juntos (código) -->
<!-- objetivo: mostrar como operadores, condicionais e funções trabalham juntos -->

# Tudo Junto: Validação de Entrada

Na prática, você vai combinar operadores, condicionais e funções:

```python
nome_modelo = "  claude-3  "
precisao_bruta = 0.876543

nome_limpo = nome_modelo.strip().upper()
precisao_ok = round(precisao_bruta, 3)
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19-if - Integração: condicional após limpeza de dados -->
<!-- objetivo: mostrar o if/elif/else após limpar e arredondar os dados -->

# Tudo Junto: Classificando após Limpeza

Após limpar os dados, classifique com `if/elif/else`:

```python
# (nome_limpo e precisao_ok já foram calculados)
if precisao_ok >= 0.90:
    print(f"{nome_limpo}: EXCELENTE ({precisao_ok})")
elif precisao_ok >= 0.70:
    print(f"{nome_limpo}: BOM ({precisao_ok})")
else:
    print(f"{nome_limpo}: BAIXO ({precisao_ok})")
```

<v-click>

> Isso é o que acontece em pipelines de ML reais: limpa o dado, valida, classifica, formata a saída.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 20 - EX04: Validador de entrada (parte 1) -->
<!-- objetivo: praticar integração completa de funções de string, round e condicionais -->

# EX04 - Validador de Entrada (1/2)

**Em dupla · 10 minutos · Nível 2**

```python
# EX04 - Validador de Entrada
nome_aluno = input("Nome do aluno: ")
nota_bruta = float(input("Nota bruta: "))

# 1. limpe o nome: sem espaços extras, em maiúsculo
nome = ___

# 2. arredonde nota para 1 casa decimal
nota = ___
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 20-if - EX04: Validador de entrada (parte 2) -->
<!-- objetivo: completar a classificação e imprimir o resultado do EX04 -->

# EX04 - Validador de Entrada (2/2)

**Em dupla · continuação**

```python
# EX04 - continuação
# 3. classifique: >= 7.0 Aprovado | >= 5.0 Recuperação | senão Reprovado
if ___:
    situacao = ___
elif ___:
    situacao = ___
else:
    situacao = ___

print(f"{nome}: {nota} - {situacao}")

# teste: "  ana  " + 7.666 → ANA: 7.7 - Aprovado
# teste: " bruno " + 4.999 → BRUNO: 5.0 - Recuperação
```

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 21 - DINAMICA: Triagem de Dados -->
<!-- objetivo: fixar operadores e funções de string em situação lúdica de dupla -->

# Dinâmica em Dupla: Triagem de Dados

**10 minutos · Nível 2**

**Colega A:** define os dados do modelo:

```python
nome = "  gpt-4 turbo  "
precisao = 0.8733
```

**Colega B:** escreve o código que:
- Limpa o nome (`.strip().upper()`)
- Arredonda a precisão (`round()`)
- Classifica com `if/elif/else`
- Imprime o resultado com f-string

<v-click>

Depois: troquem de papel. Colega A vira programador.

> Sem listas. Sem loops. Só operadores, funções de string/número e condicionais.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 22 - Síntese: o que aprendeu hoje (lista) -->
<!-- objetivo: consolidar o que foi aprendido na aula -->

# O Que Você Aprendeu Hoje

<v-click>

- **Operadores de comparação**: `==`, `!=`, `<`, `>`, `<=`, `>=` retornam `bool`
- **Operadores lógicos**: `and`, `or`, `not` combinam condições
- **Condicionais**: `if/elif/else` decide com base em comparações
- **Funções de string**: `.strip()`, `.upper()`, `.lower()`, `.replace()`, `len()`
- **Funções de número**: `abs()`, `round()`, `int()`, `float()`, `str()`

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 22-gancho - Síntese: gancho para A06 -->
<!-- objetivo: preparar o aluno para loops e listas na próxima aula -->

# Gancho para a Próxima Aula

<v-click>

**A06:** com essas ferramentas na mão, vamos aprender `for`, `while` e, depois, listas.
Os loops vão repetir tudo isso que você já sabe, muitas vezes, de forma automática.

> Hoje você aprendeu a tomar decisões. Amanhã você aprende a repetir.

</v-click>

---
layout: cover
bgPreset: palette
---

<!-- SLIDE 23 - Abertura Bloco 2 -->

# Bloco 2
## Matemática: Aritmética e Álgebra

*9h50 - 11h10 · 2 HA · UC03 · Primeiro contato*

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 15 - Abertura motivadora D03 -->
<!-- objetivo: mostrar que toda operação de IA é uma operação matemática, motivando o estudo formal -->

# Matemática é a Linguagem da IA

<v-click>

- Um modelo de linguagem executa **bilhões de multiplicações por segundo**
- Uma rede neural é **álgebra linear aplicada em matrizes gigantes**
- Uma classificação é **uma equação que separa grupos de dados**

</v-click>

<v-click>

> Você já faz matemática toda vez que escreve Python.
> Hoje vamos dar nome aos conceitos que usamos sem saber.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 16 - Aritmética computacional: divisão, potência e decimal -->
<!-- objetivo: dominar divisão inteira, real, potência e precisão de float -->

# Aritmética Computacional

```python
# divisão: inteira vs real
7 / 2    # 3.5  (float - resultado exato)
7 // 2   # 3    (int - descarta a vírgula)
7 % 2    # 1    (resto da divisão)
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 16b - Aritmética computacional: potência, precedência e imprecisão de float -->
<!-- objetivo: mostrar precedência PEMDAS e alerta de float32/float16 em IA -->

# Aritmética Computacional: Precedência e Float

```python
# potência e precedência (PEMDAS)
2 ** 10       # 1024 (2 elevado a 10)
2 + 3 * 4     # 14   (multiplicação antes!)
(2 + 3) * 4   # 20   (parênteses mudam tudo)

# float: cuidado com precisão
0.1 + 0.2     # 0.30000000000000004
```

<v-click>

<MLToast title="ATENÇÃO">
  Em IA, imprecisão de float acumula ao longo de <strong>milhões de operações</strong>. Por isso modelos usam <code>float32</code> e <code>float16</code>.
</MLToast>

</v-click>

<style>
pre code, pre code span { color: #111 !important; }
pre { background: #f0f0f0 !important; }
</style>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 17 - EX04 -->

# EX04 - Ordem das Operações

**Individual · 5 minutos · Nível 1**

Calcule cada linha **na mão** antes de rodar no VS Code:

```python
# EX04 - Ordem das Operações
# Calcule mentalmente, depois verifique no Colab

a = 2 + 3 * 4       # qual o resultado?
b = (2 + 3) * 4     # e agora?
c = 10 // 3         # divisão inteira de 10 por 3?
d = 10 % 3          # sobra quanto?
e = 2 ** 3 + 1      # potência antes da soma?

print(a, b, c, d, e)

# BONUS: por que isso retorna False?
print(0.1 + 0.2 == 0.3)
```

---
layout: two-cols-text
card: true
bgPreset: default
---

<!-- SLIDE 18 - Variável matemática vs Python -->
<!-- objetivo: diferenciar o conceito de variável em álgebra do conceito em programação -->

# Variável: Matemática vs Python

## Em Matemática

- `x` é uma **incógnita** - valor desconhecido
- `x + 3 = 10` - resolve-se para encontrar x
- `=` significa **igualdade** (verdade ou falsidade)

::right::

## Em Python

- `x` é um **rótulo** - aponta para um valor na memória
- `x = 10` - **atribui** o valor 10 à variável
- `=` significa **atribuição** (comando, não pergunta)

```python
x = 3
y = 2 * x + 5   # y = 11
print(y)         # 11
```

> Em IA: `y = wx + b` é a equação de um neurônio linear.

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 19b - A equação da reta -->
<!-- objetivo: instigar intuição geométrica antes de calcular a tabela de valores -->

# A Reta no Gráfico

**Você calculou `y = 2x + 5` há pouco.**

<v-click>

- Quando `x = 0`, `y = 5`
- Quando `x = 1`, `y = 7`
- Quando `x = 2`, `y = 9`
- Quando `x = 3`, `y = 11`

</v-click>

<v-click>

**O que esses pontos formam num gráfico?**

Um ponto isolado? Uma curva? Uma parábola? Uma **reta**?

> Anote sua resposta antes de continuar.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19 - EX05: Calculando a equação linear (parte 1: x=0 a 2) -->
<!-- objetivo: calcular y = 2x + 5 substituindo x para x=0, 1, 2 -->

# EX05 - Calculando a Equação Linear (1/2)

**Em dupla · 8 minutos · Nível 1**

Para `y = 2x + 5`, substitua cada valor de x diretamente na fórmula:

```python
# EX05 - Calculando a Equação Linear
# Fórmula: y = 2 * x + 5

x = 0
y = 2 * x + 5
print(f"x={x}: y = {y}")    # esperado: y = 5

x = 1
y = 2 * x + 5
print(f"x={x}: y = {y}")    # esperado: y = 7

x = 2
y = ___                      # complete: 2 * x + 5
print(f"x={x}: y = {y}")    # esperado: y = 9
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19-cont - EX05: Calculando a equação linear (parte 2: x=3 a 5) -->
<!-- objetivo: continuar o EX05 para x=3, 4, 5 e refletir sobre o coeficiente angular -->

# EX05 - Calculando a Equação Linear (2/2)

**Em dupla · continuação**

```python
# EX05 - continuação (fórmula: y = 2 * x + 5)

x = 3
y = ___
print(f"x={x}: y = {y}")    # esperado: y = 11

x = 4
y = ___
print(f"x={x}: y = {y}")    # esperado: y = 13

x = 5
y = ___
print(f"x={x}: y = {y}")    # esperado: y = 15
```

> BONUS: quando `x` aumenta 1, quanto `y` aumenta? O que isso tem a ver com o `2` na fórmula?

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 20 - DEBATE: Álgebra em IA -->

# Debate: Álgebra em IA

**Discussão coletiva - 8 minutos**

<v-click>

**O gráfico de `y = 2x + 5`:**
- O `2` é a *inclinação*: a reta sobe 2 unidades a cada passo em `x`
- O `5` é onde a reta *começa*: quando `x = 0`, `y = 5`
- Se o `2` fosse negativo, a reta desceria. Se fosse zero, seria horizontal.

</v-click>

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 20-cont - DEBATE: Álgebra em IA (relações reais e conclusão) -->
<!-- objetivo: conectar a equação linear a relações reais e treino de modelos lineares -->

# Debate: Álgebra em IA (cont.)

**Discussão coletiva - continuação**

<v-click>

**Relações do mundo real: qual é o x e qual é o y?**
- Horas de estudo e nota na prova
- Temperatura e consumo de energia do datacenter
- Tamanho do dataset e acurácia do modelo
- Quantidade de parâmetros e custo de treinamento

</v-click>

<v-click>

> **Em IA:** treinar um modelo linear é encontrar os melhores `a` e `b` para descrever os dados reais. Você fez isso manualmente no EX05.

</v-click>

---
layout: cover
bgPreset: palette
---

<!-- SLIDE 21 - Abertura Bloco 3 -->

# Bloco 3
## Estatística: Função Linear

*11h10 - 12h00 · 1 HA · UC09 · Primeiro contato*

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 22 - Funções descrevem comportamento (parte 1) -->
<!-- objetivo: introduzir o conceito de função matemática com exemplos do cotidiano -->

# O Que É uma Função Matemática?

> Antes de responder: o que você acha?

<v-click>

**Situações que você conhece:**
- Quanto mais você estuda, maior é a nota
- Quanto mais frio, mais energia o computador gasta para resfriar
- Quanto mais dados o modelo vê, melhor ele aprende

Em todas: um valor *depende* do outro.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 22-def - Função matemática: definição formal e notação -->
<!-- objetivo: formalizar o conceito de variável dependente e independente com notação y = f(x) -->

# Função: Definição

<v-click>

- `x` = **variável independente**: o que você controla
- `y` = **variável dependente**: o que muda por causa de `x`

**Função:** para cada `x`, existe exatamente **um** `y`. Escrevemos: `y = f(x)`

</v-click>

<v-click>

> Funções estão em todo lugar: temperatura ao longo do dia, saldo após investimento, crescimento de uma planta. A mais simples é a **reta**: `y = ax + b`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 23 - Função linear coeficientes -->
<!-- objetivo: compreender os coeficientes a e b de uma função linear -->

# Função Linear: `y = ax + b`

<SlideTable>

| Componente | Nome | Papel |
|---|---|---|
| `a` | coeficiente angular | inclinação da reta: positivo sobe, negativo desce |
| `b` | coeficiente linear | onde a reta cruza o eixo y (valor quando x = 0) |

</SlideTable>

<v-click>

> Conexão direta com o EX05: você já calculou isso! Agora temos o nome matemático.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 23b - Função linear exemplo de cálculo -->
<!-- objetivo: mostrar como calcular y = ax + b para valores concretos de x -->

# Função Linear: Calculando na Prática

```python
# a=2, b=5: y cresce 2 unidades para cada 1 de x
# x=0  ->  y = 2(0) + 5 =  5
# x=1  ->  y = 2(1) + 5 =  7
# x=3  ->  y = 2(3) + 5 = 11
```

<v-click>

> Em IA, a equação `y = ax + b` descreve o neurônio mais simples. `a` é o **peso** e `b` é o **viés** (bias). Treinar um modelo é encontrar os melhores valores de `a` e `b`.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 24 - EX06: Calculando y = 3x - 1 (parte 1: x=0 a 2) -->
<!-- objetivo: praticar cálculos da função linear com a=3 e b=-1 para x=0, 1, 2 -->

# EX06 - Calculando y = 3x - 1 (1/2)

**Individual · 8 minutos · Nível 1**

Para cada `x`, substitua diretamente na fórmula `y = 3 * x - 1`:

```python
# EX06 - Calculando y = 3x - 1
# Fórmula: y = 3 * x - 1

x = 0
y = 3 * x - 1
print(f"x={x}: y = {y}")    # esperado: -1

x = 1
y = ___                      # complete: 3 * x - 1
print(f"x={x}: y = {y}")    # esperado: 2

x = 2
y = ___
print(f"x={x}: y = {y}")    # esperado: 5
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 24-cont - EX06: Calculando y = 3x - 1 (parte 2: x=3 a 5) -->
<!-- objetivo: completar o EX06 para x=3, 4, 5 -->

# EX06 - Calculando y = 3x - 1 (2/2)

**Individual · continuação**

```python
# EX06 - continuação (fórmula: y = 3 * x - 1)

x = 3
y = ___
print(f"x={x}: y = {y}")    # esperado: 8

x = 4
y = ___
print(f"x={x}: y = {y}")    # esperado: 11

x = 5
y = ___
print(f"x={x}: y = {y}")    # esperado: 14
```

<v-click>

> Qual é o coeficiente angular (a) nessa função? O coeficiente linear (b)? Qual o valor de f(0)?

</v-click>

> BONUS: quando `x` cresce 1, `y` cresce quanto? O que o `3` da fórmula representa no gráfico?

---
layout: default
card: true
bgPreset: animate
---

<!-- SLIDE 25 - Tarefa de Casa -->

# Tarefa de Casa

**12ª Maratona de CiberEducação Cisco — Senac PR**

<v-click>

Curso **"Introdução à Cibersegurança"** com certificação Cisco, gratuito e online.

| | |
|---|---|
| Período | 09/03 a 29/03/2026 |
| Carga horária | 6 horas |
| Formato | online, autodidata |
| Nível | iniciante |

</v-click>

<v-click>

**Acesse o link da nossa turma:**

[netacad.com — Introdução à Cibersegurança](https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=pt-BR&instance_id=b45bd662-d1b0-4591-b7f1-31a76311a207)

> Prazo: **29 de março de 2026.** Certificado Cisco ao final. Adicione ao seu portfólio!

</v-click>

---
layout: end
bgPreset: palette
---

<!-- SLIDE 26 - Encerramento -->

# Até amanhã!

**Hoje cobrimos:**

operadores · condicionais · `if`/`elif`/`else` · funções de string · funções de número · aritmética computacional · equação linear

*Amanhã (A06 - 13/03): Banco de Dados entra em cena - primeiro contato com SQL.*
