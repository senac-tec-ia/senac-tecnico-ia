---
# A12
# ──────────────────────────────────────────────────────────────
theme: ../slidev-theme-neural
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

<v-click>

```python
# conta numeros com range()
for i in range(5):          # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):       # 1, 2, 3, 4, 5
    print(i)

for i in range(1, 11, 2):   # 1, 3, 5, 7, 9 (pula de 2 em 2)
    print(i)
```

</v-click>

<v-click>

> **Regra:** o `for` repete uma vez por item. Quando os itens acabam, ele para sozinho.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 5 — [TEORIA] for na pratica — exemplos com contexto de IA -->

# `for` na Pratica

**Exemplo 1 - historico de treino de um modelo:**

```python
acuracias = [0.82, 0.87, 0.91, 0.79, 0.93]

for i, valor in enumerate(acuracias, 1):
    print(f"Epoca {i}: {valor:.0%}")
# Epoca 1: 82%   Epoca 2: 87%   ...
```

<v-click>

**Exemplo 2 - chamada da turma:**

```python
turma = ["Ana", "Bruno", "Carla", "Diego"]

for aluno in turma:
    print(f"{aluno} - Presente!")

print(f"Total: {len(turma)} alunos")
```

</v-click>

<v-click>

> Contexto IA: treinar um modelo por **N epocas** e um `for` por baixo dos panos. A cada volta, o modelo ve os dados e ajusta os pesos.

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 6 — [EXERCICIO] EX01 — for — Escreve do Zero -->

# <carbon-code /> EX01 — Chamada Digital

**Individual - 8 min - Colab - Entrega obrigatoria**

Escreva um programa do zero que:

1. Crie uma lista com **5 nomes de modelos de IA** (pode inventar)
2. Use `for` para imprimir cada nome com o numero da posicao:
   ```
   1. GPT-4
   2. BERT
   3. LLaMA
   ...
   ```
3. Ao final, imprima: `Total: 5 modelos`

> **Entrega obrigatoria:** copie o codigo no grupo do WhatsApp antes de continuar. Sem entrega = nao conta.

<v-click>

> **Gabarito:**

```python
modelos = ["GPT-4", "BERT", "LLaMA", "Claude", "Gemini"]

for i, modelo in enumerate(modelos, 1):
    print(f"{i}. {modelo}")

print(f"Total: {len(modelos)} modelos")
```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 7 — [TEORIA] Loop while — Sintaxe -->

# Loop `while` — Sintaxe

O `while` repete **enquanto a condicao for `True`**:

```python
nota = 4.0

while nota < 7.0:
    print(f"Nota {nota:.1f} - estudando mais...")
    nota += 0.5

print(f"Aprovado com nota {nota}!")
```

<v-click>

```python
contagem = 1

while contagem <= 5:
    print(f"Contagem: {contagem}")
    contagem += 1   # ESSENCIAL: sem isso, loop infinito!

print("Fim!")
```

</v-click>

<v-click>

> **Atencao:** voce precisa garantir que a condicao vai virar `False` em algum momento. Se esquecer de atualizar a variavel, o programa trava.

</v-click>

---
layout: two-cols-text
bgPreset: palette
card: true
---

<!-- SLIDE 8 — [TEORIA] for vs while — Quando Usar -->

# `for` vs. `while` — Quando Usar

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

<!-- SLIDE 9 — [TEORIA] Loop Infinito e break -->

# Alerta: Loop Infinito

Se a condicao nunca virar `False`, o programa trava:

```python
# ESTE CODIGO TRAVA — NAO RODE
x = 1
while x > 0:   # sempre True!
    print(x)
    # esqueceu de diminuir x
```

<v-click>

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

</v-click>

<v-click>

> No Colab, se travar: clique no **quadrado preto** ao lado da celula para interromper.

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 10 — [EXERCICIO] EX02 — while — Escreve do Zero -->

# <carbon-code /> EX02 — Limiar de Acuracia

**Individual - 10 min - Colab - Entrega obrigatoria**

Escreva do zero um programa que simule treino de modelo:

1. Comece com `acuracia = 0.50` e `epoca = 0`
2. Use `while` para treinar **ate a acuracia chegar em 0.85**
3. A cada volta: incremente `epoca`, some `0.05` na acuracia e imprima:
   ```
   Epoca 1: acuracia = 0.55
   Epoca 2: acuracia = 0.60
   ...
   ```
4. Ao final: `Modelo pronto! Epocas necessarias: X`

> **Entrega obrigatoria:** copie o codigo no grupo antes de go ao intervalo.

<v-click>

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

</v-click>

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 11 — Intervalo -->

# Intervalo

*9h10 - 9h25*

Proximo bloco: **SQL - INNER JOIN**

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 12 — [TEORIA] Divisor Bloco 2: Banco de Dados -->

# Bloco 2
## Banco de Dados

*UC08 · 9h25-11h25 · Hoje: FK e INNER JOIN*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 13 — [TEORIA] O Problema da Tabela Unica -->

# O Problema da Tabela Unica

Imagine guardar clientes e pedidos na mesma tabela:

| id | cliente | email | produto | preco |
|---|---|---|---|---|
| 1 | Ana | ana@x.com | Notebook | 3500 |
| 2 | Ana | ana@x.com | Mouse | 80 |
| 3 | Bruno | bru@x.com | Teclado | 150 |

<v-click>

**Problemas:**
- Nome e email da Ana aparecem **2 vezes** - dados duplicados
- Se Ana muda o email, precisa atualizar **todas** as linhas dela
- A tabela cresce sem controle quando um cliente faz muitos pedidos

</v-click>

<v-click>

> **Solucao:** separar em duas tabelas ligadas por uma chave. E assim que bancos de dados reais funcionam.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 14 — [TEORIA] Chave Estrangeira FK -->

# Chave Estrangeira (FK)

**Solucao:** duas tabelas. A tabela de pedidos guarda apenas o `id` do cliente:

**Tabela `clientes`:**
| id (PK) | nome | email |
|---|---|---|
| 1 | Ana | ana@x.com |
| 2 | Bruno | bru@x.com |

**Tabela `pedidos`:**
| id (PK) | cliente_id **(FK)** | produto | preco |
|---|---|---|---|
| 1 | 1 | Notebook | 3500 |
| 2 | 1 | Mouse | 80 |
| 3 | 2 | Teclado | 150 |

<v-click>

> **FK (Foreign Key)** e a coluna `cliente_id` - ela "aponta" para o `id` da tabela `clientes`. E o elo entre as tabelas.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 15 — [TEORIA] INNER JOIN — Sintaxe -->

# INNER JOIN — Juntando Tabelas

O `INNER JOIN` combina os dados de duas tabelas usando a FK:

```sql
SELECT colunas
FROM tabela_a
INNER JOIN tabela_b ON tabela_a.id = tabela_b.fk_a;
```

<v-click>

**No nosso exemplo:**

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

</v-click>

<v-click>

> O `INNER JOIN` so retorna linhas que tem **par nos dois lados**. Sem par = fora do resultado.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 16 — [TEORIA] Criando o Exemplo no db-fiddle -->

# Criando o Exemplo no db-fiddle

**Cole na area Schema SQL (esquerda):**

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

<!-- SLIDE 17 — [EXERCICIO] EX03 — JOIN simples -->

# <carbon-data-table /> EX03 — JOIN Simples

**Individual - 10 min - db-fiddle - Entrega obrigatoria**

Use o Schema do slide anterior. Na area **Query SQL**, escreva uma consulta que:

1. Mostre `nome` do cliente, `produto` e `preco`
2. Use `INNER JOIN` para ligar as tabelas
3. Ordene pelo `preco` do maior para o menor (`ORDER BY ... DESC`)

**Resultado esperado:**
| nome | produto | preco |
|---|---|---|
| Ana | Notebook | 3500.00 |
| Bruno | Teclado | 150.00 |
| Ana | Mouse | 80.00 |

<v-click>

> **Gabarito:**

```sql
SELECT clientes.nome, pedidos.produto, pedidos.preco
FROM clientes
INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
ORDER BY pedidos.preco DESC;
```

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 18 — [EXERCICIO] EX04 — JOIN + WHERE -->

# <carbon-data-table /> EX04 — JOIN + WHERE

**Individual - 10 min - db-fiddle - Entrega obrigatoria**

No mesmo db-fiddle, escreva uma consulta que:

1. Mostre apenas pedidos com **preco acima de R$ 100**
2. Exiba: `nome` do cliente e `produto`
3. Use `INNER JOIN` + `WHERE pedidos.preco > 100`

**Resultado esperado:**
| nome | produto |
|---|---|
| Ana | Notebook |
| Bruno | Teclado |

> **Entrega obrigatoria:** copie o output do db-fiddle no chat antes de ir para o proximo bloco.

<v-click>

> **Gabarito:**

```sql
SELECT clientes.nome, pedidos.produto
FROM clientes
INNER JOIN pedidos ON clientes.id = pedidos.cliente_id
WHERE pedidos.preco > 100;
```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19 — [TEORIA] O que o INNER JOIN exclui -->

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

<v-click>

**Resultado:** Carla **nao aparece** - ela nao tem nenhum pedido.

| nome | produto |
|---|---|
| Ana | Notebook |
| Ana | Mouse |
| Bruno | Teclado |

</v-click>

<v-click>

> Para incluir clientes sem pedidos, usaríamos `LEFT JOIN`. Por hoje: INNER JOIN = so quem tem par nos dois lados.

</v-click>

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 20 — [TEORIA] Divisor Bloco 3: Arquitetura e GPU -->

# Bloco 3
## Arquitetura de Computadores e GPU

*UC06 · 11h35-12h20 · Paralelismo, Pipeline e CPU-Z*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 21 — [TEORIA] Serie vs. Paralelo -->

# Serie vs. Paralelo

**Em serie:** uma tarefa de cada vez, na fila.

Supermercado com **1 caixa**. 10 clientes. Cada cliente leva 2 min.

Tempo total = 10 x 2 = **20 minutos**.

<v-click>

**Em paralelo:** varias tarefas ao mesmo tempo.

Agora o supermercado abre **10 caixas**. Todos sao atendidos simultaneamente.

Tempo total = **2 minutos**.

</v-click>

<v-click>

> Isso e a diferenca entre **CPU** (poucos caixas, cada um super rapido) e **GPU** (muitos caixas em paralelo). Treinar IA exige calcular milhoes de operacoes ao mesmo tempo - tarefa perfeita para GPU.

</v-click>

---
layout: two-cols-text
bgPreset: default
card: true
---

<!-- SLIDE 22 — [TEORIA] CPU vs GPU — A Diferenca Fundamental -->

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

<v-click>

> Treinar uma rede neural e multiplicar matrizes gigantescas milhares de vezes. Tarefa perfeita para GPU.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 23 — [TEORIA] Por que GPU treina IA mais rapido? -->

# Por Que a GPU Treina IA?

Treinar um modelo = calcular multiplicacoes de matrizes enormes simultaneamente.

**Na CPU:** calculos em fila (sequencial):
```
calculo 1 >> calculo 2 >> calculo 3 >> ... >> calculo 1.000.000
```

<v-click>

**Na GPU:** calculos em paralelo:
```
calculo 1 |
calculo 2 | >> todos ao mesmo tempo >> resultado
calculo 3 |
...       |
```

</v-click>

<v-click>

**Exemplo real:** treinar GPT-2 (modelo pequeno) na CPU = semanas. Na GPU A100 = horas.

> E por isso que todo projeto de IA usa GPU. No Google Colab, voce ja tem acesso gratuito a uma GPU na nuvem - e so ativar em Ambiente de execucao > Alterar tipo de ambiente.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 24 — [TEORIA] Pipeline da GPU — 4 Estagios -->

# Pipeline da GPU — Linha de Montagem

A GPU processa imagens em 4 estagios em paralelo:

| Estagio | O que faz | Analogia na fabrica |
|---|---|---|
| **1. Vertex** | Processa posicoes dos pontos 3D | Corta as pecas |
| **2. Rasterizacao** | Converte 3D em pixels 2D | Monta o chassi |
| **3. Fragment** | Aplica cor e textura a cada pixel | Pinta o carro |
| **4. Output** | Envia o frame final para a tela | Entrega ao cliente |

<v-click>

> Enquanto o frame 1 esta em Fragment, o frame 2 ja esta em Rasterizacao e o frame 3 em Vertex - tudo ao mesmo tempo. Isso gera 60 ou 120 frames por segundo.

</v-click>

<v-click>

> **Conexao com IA:** foi criado para jogos, mas pesquisadores perceberam que o mesmo paralelismo funciona perfeitamente para treinar redes neurais.

</v-click>

---
layout: default
card: true
bgPreset: animate
---

<!-- SLIDE 25 — [DINAMICA] Instalando o CPU-Z -->

# Instalando o CPU-Z

**CPU-Z** e um software gratuito que mostra as specs reais do hardware da sua maquina.

**Passos:**

1. Abra o navegador
2. Acesse: **cpuid.com/softwares/cpu-z.html**
3. Clique em **Setup - English** (versao Windows)
4. Instale e abra o programa

<v-click>

Quando abrir, voce vera 4 abas principais:

| Aba | O que mostra |
|---|---|
| **CPU** | Processador: nome, nucleos, velocidade, cache |
| **Memory** | RAM: tipo, quantidade, frequencia |
| **SPD** | Detalhes tecnicos dos pentes de memoria |
| **Graphics** | GPU: nome, VRAM, tipo de memoria |

</v-click>

<v-click>

> Professor demonstra ao vivo primeiro. Depois voce abre no seu computador.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 26 — [TEORIA] CPU-Z — Aba CPU -->

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

<v-click>

> **Cores vs. Threads:** 6 nucleos fisicos, mas com hyperthreading cada nucleo parece dois para o sistema operacional - por isso 12 threads. Em Python: `import os; print(os.cpu_count())` retorna os threads.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 27 — [TEORIA] CPU-Z — Memory e Graphics -->

# CPU-Z — Memory e Graphics

**Aba Memory - sua RAM:**

| Campo | O que e | Exemplo |
|---|---|---|
| **Type** | Geracao da RAM | DDR4, DDR5 |
| **Size** | Quantidade total | 8 GB, 16 GB |
| **DRAM Frequency** | Velocidade da RAM | 1600 MHz (DDR4-3200) |

<v-click>

**Aba Graphics - sua GPU:**

| Campo | O que e | Exemplo |
|---|---|---|
| **Name** | Fabricante e modelo | NVIDIA GTX 1650 |
| **Memory Size** | VRAM (memoria da GPU) | 4 GB, 8 GB |
| **Memory Type** | Tipo de VRAM | GDDR5, GDDR6 |

</v-click>

<v-click>

> **VRAM** e crucial para IA: modelos maiores precisam de mais VRAM. O GPT-3 precisaria de 700 GB de VRAM para rodar localmente - e por isso a nuvem existe.

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 28 — [EXERCICIO] EX05 — Ficha do Hardware -->

#  EX05 — Ficha do Seu Hardware

**Individual - 8 min - CPU-Z aberto - Entrega na voz**

Com o CPU-Z aberto, registre no caderno:

| Campo | Seu valor |
|---|---|
| Nome do processador | |
| Numero de Cores | |
| Numero de Threads | |
| Velocidade atual (MHz) | |
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

<!-- SLIDE 29 — [DINAMICA] Comparativo da Turma -->

# Comparativo da Turma

**Quem tem o hardware mais poderoso para treinar IA?**

Professor anota na lousa: nome / CPU / Cores / RAM / GPU.

<v-click>

**Perguntas para a turma:**
- Qual computador da sala teria mais facilidade para rodar um modelo local?
- O que voce atualizaria primeiro: RAM ou GPU?
- Como o Google Colab resolve o problema de quem nao tem GPU?

</v-click>

<v-click>

**O que aprendemos hoje:**
- `for` percorre itens | `while` repete ate uma condicao
- `INNER JOIN` conecta duas tabelas pela FK - so retorna quem tem par nos dois lados
- CPU: poucos nucleos rapidos | GPU: milhares de nucleos em paralelo
- CPU-Z revela o hardware real da sua maquina

</v-click>

---
layout: end
bgPreset: animate
---

<!-- SLIDE 30 — Encerramento -->

# Ate semana que vem!

## A13 - 16/04/2026 (Quinta-feira)

*Proximo: Python - listas e funcoes com parametro | SQL - GROUP BY e agregacoes*

> **AV01 - Glossario de IA:** prazo ate **16/04/2026**. Envie pelo WhatsApp com o arquivo nomeado: `av01-glossario-ia-SeuNome.md`
