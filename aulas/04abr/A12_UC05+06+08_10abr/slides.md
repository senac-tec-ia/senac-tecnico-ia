---
# A12
# ──────────────────────────────────────────────────────────────
theme: ../../../neural-slides-template
colorSchema: dark
title: "Técnico em IA — Aula 12"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 12"
bgPreset: palette
layout: cover
# ──────────────────────────────────────────────────────────────
---

<!-- SLIDE 1 — Capa -->

# Loops, JOIN e Hardware
## Python: for/while | SQL: INNER JOIN | CPU-Z na pratica

*10 de abril de 2026*

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 2 — [TEORIA] Divisor Bloco 1: Python -->

# Bloco 1
## Python para IA

*UC05 · 7h10-9h10 · Hoje: loops for e while*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 3 — [TEORIA] O Que E um Loop? -->

# O Que e um Loop?

Imagine que voce acorda todo dia e faz a mesma sequencia: acorda, escova o dente, toma cafe, vai para a escola. Isso e um **loop** — uma tarefa que repete.

| Sem loop | Com loop |
|---|---|
| `print("Modelo 1")` | `for m in modelos:` |
| `print("Modelo 2")` | `    print(m)` |
| `print("Modelo 3")` | *(1 bloco, N itens)* |
| `print("Modelo 4")` | — |

<v-click>

> Python tem dois tipos: **`for`** — quando voce sabe quantas vezes repetir — e **`while`** — enquanto uma condicao for verdadeira.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 4 — [TEORIA] Loop for — Sintaxe e range() -->

# Loop `for` — Sintaxe e `range()`

```python
# percorre cada item de uma lista
modelos = ["GPT", "BERT", "LLaMA"]
for modelo in modelos:
    print(modelo)
# GPT
# BERT
# LLaMA
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 5 — [TEORIA] Loop for — range() (cont.) -->

# Loop `for` — `range()` (cont.)

```python
# conta numeros com range()
for i in range(5):          # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):       # 1, 2, 3, 4, 5
    print(i)

for i in range(1, 11, 2):   # 1, 3, 5, 7, 9 (pula de 2 em 2)
    print(i)
```

> **Regra:** o `for` repete uma vez por item. Quando os itens acabam, ele para sozinho.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 6 — [TEORIA] for na pratica — exemplos com contexto de IA -->

# `for` na Pratica

**Exemplo 1 - historico de treino de um modelo:**

```python
acuracias = [0.82, 0.87, 0.91, 0.79, 0.93]

for i, valor in enumerate(acuracias, 1):
    print(f"Epoca {i}: {valor:.0%}")
# Epoca 1: 82%   Epoca 2: 87%   ...
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 7 — [TEORIA] for na Pratica (cont.) -->

# `for` na Pratica (cont.)

**Exemplo 2 - chamada da turma:**

```python
turma = ["Ana", "Bruno", "Carla", "Diego"]

for aluno in turma:
    print(f"{aluno} - Presente!")

print(f"Total: {len(turma)} alunos")
```

> Contexto IA: treinar um modelo por **N epocas** e um `for` por baixo dos panos. A cada volta, o modelo ve os dados e ajusta os pesos.

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 8a — [EXERCICIO] EX01 — Chamada Digital -->

# <carbon-code /> EX01 — Chamada Digital

**Individual - 8 min - Colab - Entrega obrigatoria**

Escreva um programa do zero que:

1. Crie uma lista com **5 nomes de modelos de IA** (pode inventar)
2. Use `for` para imprimir cada nome com o numero da posicao: `1. GPT-4`, `2. BERT`, `3. LLaMA`...
3. Ao final, imprima: `Total: 5 modelos`

> **Entrega obrigatoria:** copie o codigo no grupo do WhatsApp antes de continuar. Sem entrega = nao conta.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 8b — [EXERCICIO] EX01 — Gabarito -->

# <carbon-code /> EX01 — Gabarito

```python
modelos = ["GPT-4", "BERT", "LLaMA", "Claude", "Gemini"]

for i, modelo in enumerate(modelos, 1):
    print(f"{i}. {modelo}")

print(f"Total: {len(modelos)} modelos")
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 9 — [TEORIA] Loop while — Sintaxe -->

# Loop `while` — Sintaxe

O `while` repete **enquanto a condicao for `True`**:

```python
nota = 4.0

while nota < 7.0:
    print(f"Nota {nota:.1f} - estudando mais...")
    nota += 0.5

print(f"Aprovado com nota {nota}!")
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 10 — [TEORIA] Loop while — Sintaxe (cont.) -->

# Loop `while` — Sintaxe (cont.)

```python
contagem = 1

while contagem <= 5:
    print(f"Contagem: {contagem}")
    contagem += 1   # ESSENCIAL: sem isso, loop infinito!

print("Fim!")
```

> **Atencao:** voce precisa garantir que a condicao vai virar `False` em algum momento. Se esquecer de atualizar a variavel, o programa trava.

---
layout: two-cols-text
bgPreset: palette
card: true
---

<!-- SLIDE 11 — [TEORIA] for vs while — Quando Usar -->

# for vs. while — Quando Usar

**Use `for` quando o numero de repeticoes e conhecido:**

```python
# sabe que vai iterar 5 vezes
for epoca in range(5):
    treina_modelo(epoca)

# sabe que vai percorrer a lista inteira
for dado in dataset:
    processa(dado)
```

::right::

**Use `while` quando tem uma condicao de parada:**

```python
# nao sabe quantas tentativas vai precisar
acuracia = 0.0

while acuracia < 0.90:
    acuracia = treina_mais()

print("Meta atingida!")
```

<v-click>

> **Regra rapida:** lista ou numero fixo de vezes: `for`. Condicao de parada: `while`.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 12 — [TEORIA] Loop Infinito e break -->

# Alerta: Loop Infinito

Se a condicao nunca virar `False`, o programa trava:

```python
# ESTE CODIGO TRAVA — NAO RODE
x = 1
while x > 0:   # sempre True!
    print(x)
    # esqueceu de diminuir x
```

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 13 — [TEORIA] Escapando com break (cont.) -->

# Escapando com `break` (cont.)

**Como escapar com `break`:**

```python
tentativas = 0

while True:
    tentativas += 1
    acuracia = treina()
    if acuracia >= 0.90 or tentativas >= 100:
        break   # sai do loop de forma segura

print(f"Parou apos {tentativas} tentativas. Acuracia: {acuracia:.2f}")
```

> No Colab, se travar: clique no **quadrado preto** ao lado da celula para interromper.

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 14a — [EXERCICIO] EX02 — Limiar de Acuracia (parte 1) -->

# <carbon-code /> EX02 — Limiar de Acuracia

**Individual - 10 min - Colab - Entrega obrigatoria**

Escreva do zero um programa que simule treino de modelo:

1. Comece com `acuracia = 0.50` e `epoca = 0`
2. Use `while` para treinar **ate a acuracia chegar em 0.85**

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 14b — [EXERCICIO] EX02 — Limiar de Acuracia (parte 2) -->

# <carbon-code /> EX02 — Limiar de Acuracia (cont.)

3. A cada volta: incremente `epoca`, some `0.05` na acuracia e imprima:
   `Epoca 1: acuracia = 0.55`, `Epoca 2: acuracia = 0.60`...
4. Ao final: `Modelo pronto! Epocas necessarias: X`

> **Entrega obrigatoria:** copie o codigo no grupo antes de ir ao intervalo.

---
layout: default
card: true
bgPreset: palette
pulse: false
---

<!-- SLIDE 15 — [EXERCICIO] EX02 — Gabarito -->

# <carbon-code /> EX02 — Gabarito

> **Gabarito:**

```python
acuracia = 0.50
epoca = 0

while acuracia < 0.85:
    epoca += 1
    acuracia += 0.05
    print(f"Epoca {epoca}: acuracia = {acuracia:.2f}")

print(f"\nModelo pronto! Epocas necessarias: {epoca}")
```

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 16 — Intervalo -->

# Intervalo

*9h10 - 9h25*

Proximo bloco: **SQL - INNER JOIN**

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 17 — [TEORIA] Divisor Bloco 2: Banco de Dados -->

# Bloco 2
## Banco de Dados

*UC08 · 9h25-11h25 · Hoje: FK e INNER JOIN*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 18a — [TEORIA] O Problema da Tabela Unica -->

# O Problema da Tabela Unica

Imagine guardar clientes e pedidos na mesma tabela:

| id | cliente | email | produto | preco |
|---|---|---|---|---|
| 1 | Ana | ana@x.com | Notebook | 3500 |
| 2 | Ana | ana@x.com | Mouse | 80 |
| 3 | Bruno | bru@x.com | Teclado | 150 |

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 18b — [TEORIA] O Problema da Tabela Unica (cont.) -->

# O Problema da Tabela Unica (cont.)

**Problemas desta abordagem:**
- Nome e email da Ana aparecem **2 vezes** — dados duplicados
- Se Ana muda o email, precisa atualizar **todas** as linhas dela
- A tabela cresce sem controle quando um cliente faz muitos pedidos

> **Solucao:** separar em duas tabelas ligadas por uma chave. E assim que bancos de dados reais funcionam.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19a — [TEORIA] Chave Estrangeira FK — Tabela Clientes -->

# Chave Estrangeira (FK)

**Solucao:** duas tabelas. A tabela de pedidos guarda apenas o `id` do cliente.

**Tabela `clientes`:**
| id (PK) | nome | email |
|---|---|---|
| 1 | Ana | ana@x.com |
| 2 | Bruno | bru@x.com |

> Cada cliente tem um `id` unico chamado **PK (Primary Key)** — chave primaria.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19b — [TEORIA] Chave Estrangeira FK — Tabela Pedidos -->

# Chave Estrangeira (FK) — Tabela Pedidos

**Tabela `pedidos`:**
| id (PK) | cliente_id **(FK)** | produto | preco |
|---|---|---|---|
| 1 | 1 | Notebook | 3500 |
| 2 | 1 | Mouse | 80 |
| 3 | 2 | Teclado | 150 |

> **FK (Foreign Key)** e a coluna `cliente_id` — ela "aponta" para o `id` da tabela `clientes`. E o elo entre as tabelas.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 20a — [TEORIA] INNER JOIN — Sintaxe -->

# INNER JOIN — Juntando Tabelas

O `INNER JOIN` combina os dados de duas tabelas usando a FK:

```sql
SELECT colunas
FROM tabela_a
INNER JOIN tabela_b ON tabela_a.id = tabela_b.fk_a;
```

> A palavra `ON` define a **condicao de ligacao**: qual coluna da tabela A bate com qual da tabela B.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 20b — [TEORIA] INNER JOIN — Exemplo Completo -->

# INNER JOIN — Exemplo Completo

```sql
SELECT clientes.nome, pedidos.produto, pedidos.preco
FROM clientes
INNER JOIN pedidos ON clientes.id = pedidos.cliente_id;
```

**Resultado:**
| nome | produto | preco |
|---|---|---|
| Ana | Notebook | 3500 |
| Ana | Mouse | 80 |
| Bruno | Teclado | 150 |

> O `INNER JOIN` so retorna linhas que tem **par nos dois lados**. Sem par = fora do resultado.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 21a — [TEORIA] db-fiddle — CREATE TABLE -->

# db-fiddle — Criando as Tabelas

Acesse **db-fiddle.com**. Na area Schema SQL (esquerda), cole:

```sql
CREATE TABLE clientes (
  id INTEGER PRIMARY KEY,
  nome VARCHAR(50),
  email VARCHAR(100)
);
CREATE TABLE pedidos (
  id INTEGER PRIMARY KEY,
  cliente_id INTEGER,
  produto VARCHAR(100),
  preco DECIMAL(10,2)
);
```

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 21b — [TEORIA] db-fiddle — INSERT e Query -->

# db-fiddle — Inserindo Dados e Consultando

**Ainda no Schema SQL, adicione os dados:**

```sql
INSERT INTO clientes VALUES (1,'Ana','ana@x.com');
INSERT INTO clientes VALUES (2,'Bruno','bru@x.com');
INSERT INTO pedidos VALUES (1,1,'Notebook',3500);
INSERT INTO pedidos VALUES (2,1,'Mouse',80);
INSERT INTO pedidos VALUES (3,2,'Teclado',150);
```

**Na area Query SQL (direita):** escreva o SELECT com JOIN e clique **Run**.

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 22a — [EXERCICIO] EX03 — JOIN Simples -->

# <carbon-data-table /> EX03 — JOIN Simples

**Individual - 10 min - db-fiddle - Entrega obrigatoria**

Use o Schema do slide anterior. Na area **Query SQL**, escreva uma consulta que:

1. Mostre `nome` do cliente, `produto` e `preco`
2. Use `INNER JOIN` para ligar as tabelas
3. Ordene pelo `preco` do maior para o menor (`ORDER BY ... DESC`)

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 22b — [EXERCICIO] EX03 — Resultado esperado -->

# <carbon-data-table /> EX03 — Resultado Esperado

**Resultado esperado:**
| nome | produto | preco |
|---|---|---|
| Ana | Notebook | 3500.00 |
| Bruno | Teclado | 150.00 |
| Ana | Mouse | 80.00 |

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 22c — [EXERCICIO] EX03 — Gabarito -->

# <carbon-data-table /> EX03 — Gabarito

```sql
SELECT clientes.nome, pedidos.produto, pedidos.preco
FROM clientes
INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
ORDER BY pedidos.preco DESC;
```

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 23a — [EXERCICIO] EX04 — JOIN + WHERE -->

# <carbon-data-table /> EX04 — JOIN + WHERE

**Individual - 10 min - db-fiddle - Entrega obrigatoria**

No mesmo db-fiddle, escreva uma consulta que:

1. Mostre apenas pedidos com **preco acima de R$ 100**
2. Exiba: `nome` do cliente e `produto`
3. Use `INNER JOIN` + `WHERE pedidos.preco > 100`

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 23b — [EXERCICIO] EX04 — Resultado esperado -->

# <carbon-data-table /> EX04 — Resultado Esperado

**Resultado esperado:**
| nome | produto |
|---|---|
| Ana | Notebook |
| Bruno | Teclado |

> **Entrega:** copie o output do db-fiddle no chat antes de ir para o proximo bloco.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 23c — [EXERCICIO] EX04 — Gabarito -->

# <carbon-data-table /> EX04 — Gabarito

```sql
SELECT clientes.nome, pedidos.produto
FROM clientes
INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
WHERE pedidos.preco > 100;
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 24a — [TEORIA] O que o INNER JOIN exclui -->

# O Que o INNER JOIN Exclui

**INNER JOIN** so retorna linhas que tem correspondencia nos dois lados.

Se eu adicionar um cliente sem pedidos:

```sql
INSERT INTO clientes VALUES (3,'Carla','carla@x.com');
```

```sql
SELECT clientes.nome, pedidos.produto
FROM clientes
INNER JOIN pedidos ON clientes.id = pedidos.cliente_id;
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 24b — [TEORIA] O que o INNER JOIN exclui (resultado) -->

# O Que o INNER JOIN Exclui (cont.)

**Resultado:** Carla **nao aparece** - ela nao tem nenhum pedido.

| nome | produto |
|---|---|
| Ana | Notebook |
| Ana | Mouse |
| Bruno | Teclado |

> Para incluir clientes sem pedidos, usaríamos `LEFT JOIN`. Por hoje: INNER JOIN = so quem tem par nos dois lados.

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 25 — [TEORIA] Divisor Bloco 3: Arquitetura e GPU -->

# Bloco 3
## Arquitetura de Computadores e GPU

*UC06 · 11h35-12h20 · Paralelismo, Pipeline e CPU-Z*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 26a — [TEORIA] Serie vs. Paralelo -->

# Serie vs. Paralelo

**Em serie:** uma tarefa de cada vez, na fila.

Supermercado com **1 caixa**. 10 clientes. Cada cliente leva 2 min.

Tempo total = 10 x 2 = **20 minutos**.

<v-click>

**Em paralelo:** varias tarefas ao mesmo tempo.

Agora o supermercado abre **10 caixas**. Todos sao atendidos simultaneamente.

Tempo total = **2 minutos**.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 26b — [TEORIA] Serie vs. Paralelo — CPU e GPU -->

# Serie vs. Paralelo — CPU e GPU

> Isso e a diferenca entre **CPU** (poucos caixas, cada um super rapido) e **GPU** (muitos caixas em paralelo). Treinar IA exige calcular milhoes de operacoes ao mesmo tempo - tarefa perfeita para GPU.

| | CPU | GPU |
|---|---|---|
| Analogia | 1 caixa muito rapido | 10 caixas em paralelo |
| Nucleos | Poucos (4–32) | Milhares |
| Uso em IA | Logica e controle | Treino e inferencia |

---
layout: two-cols-text
bgPreset: default
card: true
---

<!-- SLIDE 27a — [TEORIA] CPU vs GPU — A Diferenca Fundamental -->

# CPU vs. GPU — A Diferenca

**CPU: poucos nucleos, muito rapidos**

- 4 a 32 nucleos tipicos
- Cada nucleo e muito poderoso
- Otima para tarefas sequenciais: SO, navegador, logica complexa
- Analogia: **cirurgiao especialista** — faz uma tarefa de cada vez com maestria total

::right::

**GPU: milhares de nucleos, mais simples**

- Centenas a milhares de CUDA cores
- Cada nucleo e mais simples individualmente
- Otima para tarefas paralelas e repetitivas: renderizacao, treino de IA, calculos matriciais
- Analogia: **exercito de trabalhadores** — cada um faz algo simples, juntos sao invenciveis

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 27b — [TEORIA] CPU vs GPU — Por que isso importa para IA -->

# CPU vs. GPU — Por Que Isso Importa para IA

> Treinar uma rede neural e multiplicar matrizes gigantescas milhares de vezes. Tarefa perfeita para GPU.

| Caracteristica | CPU | GPU |
|---|---|---|
| Nucleos | 4–32, poderosos | Centenas/milhares, simples |
| Uso ideal | Logica sequencial | Calculo paralelo em massa |
| Exemplo IA | Preprocessamento | Treino de modelos |
| Analogia | Cirurgiao especialista | Exercito de trabalhadores |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 28a — [TEORIA] Por que GPU treina IA — CPU -->

# Por Que a GPU Treina IA?

Treinar um modelo = calcular multiplicacoes de matrizes enormes simultaneamente.

**Na CPU:** calculos em fila (sequencial):
```
calculo 1 >> calculo 2 >> calculo 3 >> ... >> calculo 1.000.000
```

> Um nucleo de CPU termina o calculo 1 antes de comecar o calculo 2. E lento para matrizes gigantescas.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 28b — [TEORIA] Por que GPU treina IA — GPU -->

# Por Que a GPU Treina IA? (GPU)

**Na GPU:** calculos em paralelo:
```
calculo 1 |
calculo 2 | >> todos ao mesmo tempo >> resultado
calculo 3 |
...       |
```

**Exemplo real:** treinar GPT-2 na CPU = semanas. Na GPU A100 = horas.

> No Google Colab: Ambiente de execucao > Alterar tipo de ambiente > GPU.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 29a — [TEORIA] Pipeline da GPU — 4 Estagios -->

# Pipeline da GPU — Linha de Montagem

A GPU processa imagens em 4 estagios em paralelo:

| Estagio | O que faz | Analogia na fabrica |
|---|---|---|
| **1. Vertex** | Processa posicoes dos pontos 3D | Corta as pecas |
| **2. Rasterizacao** | Converte 3D em pixels 2D | Monta o chassi |
| **3. Fragment** | Aplica cor e textura a cada pixel | Pinta o carro |
| **4. Output** | Envia o frame final para a tela | Entrega ao cliente |

> Enquanto o frame 1 esta em Fragment, o frame 2 ja esta em Rasterizacao e o frame 3 em Vertex - tudo ao mesmo tempo. Isso gera 60 ou 120 frames por segundo.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 29b — [TEORIA] Pipeline da GPU — Conexao com IA -->

# Pipeline da GPU — Conexao com IA

> **Conexao com IA:** foi criado para jogos, mas pesquisadores perceberam que o mesmo paralelismo funciona perfeitamente para treinar redes neurais.

**Por que o mesmo hardware serve para jogos e IA?**

- Jogos: calcular cor de milhoes de pixels ao mesmo tempo
- IA: calcular milhoes de operacoes matriciais ao mesmo tempo
- Em ambos os casos: **muitas operacoes simples em paralelo**

> O pipeline de rendering e o pipeline de treino de IA usam o mesmo principio: dividir o trabalho em etapas e processar tudo simultaneamente.

---
layout: default
card: true
bgPreset: animate
---

<!-- SLIDE 30a — [DINAMICA] Instalando o CPU-Z -->

# Instalando o CPU-Z

**CPU-Z** e um software gratuito que mostra as specs reais do hardware da sua maquina.

**Passos:**

1. Abra o navegador
2. Acesse: **cpuid.com/softwares/cpu-z.html**
3. Clique em **Setup - English** (versao Windows)
4. Instale e abra o programa

> Professor demonstra ao vivo primeiro. Depois voce abre no seu computador.

---
layout: default
card: true
bgPreset: animate
---

<!-- SLIDE 30b — [DINAMICA] CPU-Z — Abas Principais -->

# CPU-Z — Abas Principais

Quando abrir, voce vera 4 abas principais:

| Aba | O que mostra |
|---|---|
| **CPU** | Processador: nome, nucleos, velocidade, cache |
| **Memory** | RAM: tipo, quantidade, frequencia |
| **SPD** | Detalhes tecnicos dos pentes de memoria |
| **Graphics** | GPU: nome, VRAM, tipo de memoria |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 31a — [TEORIA] CPU-Z — Aba CPU — Tabela -->

# CPU-Z — Aba CPU

O que cada campo significa:

| Campo | O que e | Exemplo |
|---|---|---|
| **Name** | Nome do processador | Intel Core i5-12400 |
| **Cores** | Nucleos fisicos | 6 |
| **Threads** | Nucleos logicos (hyperthreading) | 12 |
| **Core Speed** | Velocidade atual do clock | 3600 MHz |
| **Max TDP** | Consumo de energia maximo | 65W |
| **L3 Cache** | Memoria cache compartilhada | 18 MB |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 31b — [TEORIA] CPU-Z — Cores vs. Threads -->

# CPU-Z — Cores vs. Threads

> **Cores vs. Threads:** 6 nucleos fisicos, mas com hyperthreading cada nucleo parece dois para o sistema operacional — por isso 12 threads.

Verifique no Python:

```python
import os
print(os.cpu_count())  # retorna o numero de threads
```

> O SO enxerga os **threads** como nucleos. Por isso `cpu_count()` retorna 12, nao 6.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 32a — [TEORIA] CPU-Z — Aba Memory -->

# CPU-Z — Aba Memory (RAM)

| Campo | O que e | Exemplo |
|---|---|---|
| **Type** | Geracao da RAM | DDR4, DDR5 |
| **Size** | Quantidade total | 8 GB, 16 GB |
| **DRAM Frequency** | Velocidade da RAM | 1600 MHz (DDR4-3200) |

> A frequencia mostrada pelo CPU-Z e a metade da frequencia real: DDR4-3200 aparece como 1600 MHz. DDR = **D**ouble **D**ata **R**ate.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 32b — [TEORIA] CPU-Z — Aba Graphics (GPU) -->

# CPU-Z — Aba Graphics (GPU)

| Campo | O que e | Exemplo |
|---|---|---|
| **Name** | Fabricante e modelo | NVIDIA GTX 1650 |
| **Memory Size** | VRAM (memoria da GPU) | 4 GB, 8 GB |
| **Memory Type** | Tipo de VRAM | GDDR5, GDDR6 |

> **VRAM** e crucial para IA: modelos maiores precisam de mais VRAM. O GPT-3 precisaria de 700 GB de VRAM para rodar localmente — e por isso a nuvem existe.

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 33a — [EXERCICIO] EX05 — Ficha do Hardware (parte 1) -->

#  EX05 — Ficha do Seu Hardware

**Individual - 8 min - CPU-Z aberto - Entrega na voz**

Com o CPU-Z aberto, registre no caderno:

| Campo | Seu valor |
|---|---|
| Nome do processador | |
| Numero de Cores | |
| Numero de Threads | |
| Velocidade atual (MHz) | |

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 33b — [EXERCICIO] EX05 — Ficha do Hardware (parte 2) -->

#  EX05 — Ficha do Seu Hardware (cont.)

| Campo | Seu valor |
|---|---|
| RAM - Tipo | |
| RAM - Quantidade | |
| GPU - Nome | |
| GPU - VRAM | |

> Quando o professor chamar, fale em voz alta seu processador e sua RAM. Vamos montar o comparativo da turma na lousa.

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 34a — [DINAMICA] Comparativo da Turma -->

# Comparativo da Turma

**Quem tem o hardware mais poderoso para treinar IA?**

Professor anota na lousa: nome / CPU / Cores / RAM / GPU.

**Perguntas para a turma:**
- Qual computador da sala teria mais facilidade para rodar um modelo local?
- O que voce atualizaria primeiro: RAM ou GPU?
- Como o Google Colab resolve o problema de quem nao tem GPU?

---
layout: brainstorm
card: true
bgPreset: palette
---

<!-- SLIDE 34b — [DINAMICA] O Que Aprendemos Hoje -->

# O Que Aprendemos Hoje

- `for` percorre itens | `while` repete ate uma condicao
- `INNER JOIN` conecta duas tabelas pela FK — so retorna quem tem par nos dois lados
- CPU: poucos nucleos rapidos | GPU: milhares de nucleos em paralelo
- CPU-Z revela o hardware real da sua maquina

---
layout: end
bgPreset: animate
---

<!-- SLIDE 35 — Encerramento -->

# Ate semana que vem!

## A13 - 16/04/2026 (Quinta-feira)

*Proximo: Python - listas e funcoes com parametro | SQL - GROUP BY e agregacoes*

> **AV01 - Glossario de IA:** prazo ate **16/04/2026**. Envie pelo WhatsApp com o arquivo nomeado: `av01-glossario-ia-SeuNome.md`
