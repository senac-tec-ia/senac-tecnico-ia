---
# ─────────────────────────────────────────────────────────────────
#  AULA 08 — 20/03/2026 (Sexta-feira)
#  BLOCO 1: UC05 · Python — Primeiro if/elif       (7h10–9h10)
#  BLOCO 2: UC08 · Banco de Dados — DDL/CREATE     (9h25–11h25)
#  BLOCO 3: UC06 · Arquitetura e GPU — Pipeline    (11h35–12h20)
# ─────────────────────────────────────────────────────────────────
theme: ./
colorSchema: dark
title: "Técnico em IA — Aula 08"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 08"
bgPreset: palette
layout: cover
# ─────────────────────────────────────────────────────────────────
---

<!-- SLIDE 1 — Capa -->

# Aula 08
## if · CREATE TABLE · Pipeline da GPU

*20 de março de 2026 · Python · Banco de Dados · Arquitetura*

<!-- ============================================================
     BLOCO 1 — UC05 · PYTHON (slides 2–13)
     Estreia do if/elif — escalando de comparações a classificadores
     ============================================================ -->

---
layout: center
bgPreset: palette
card: true
---

<!-- SLIDE 2 — Divisor Bloco 1 -->

# Bloco 1
## Python: o programa aprende a decidir

*7h10 – 9h10 · 2 HA · UC05*

> **Fio condutor do dia:** Python **manipula** dados · BD **organiza** dados · GPU **processa** dados

---
layout: brainstorm
bgPreset: animate
pulse: true
---

<!-- SLIDE 3 — Revisão Relâmpago -->

# <carbon-flash /> Revisão Relâmpago

## O que você ainda lembra da última aula de Python?

Responda em voz alta — sem consultar caderno:

1. Como se lê um valor digitado pelo usuário em Python?
2. O que `int("7")` faz? E `float("3.5")`?
3. O que `True and False` retorna? E `True or False`?
4. O que `!=` significa?

> Essas ferramentas são o **ingrediente** que você já tem. O `if` é a **receita** que vai juntar tudo.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 4 — O Que é uma Condição? -->

# O Que é uma Condição?

**Condição** = uma pergunta que tem resposta SIM ou NÃO.

<v-click>

| Situação do dia a dia | A condição |
|---|---|
| Semáforo 🚦 | Verde? → passa. Vermelho? → para. |
| Nota na escola 📚 | Tirou 6 ou mais? → passou. Menos? → recuperação. |
| App de banco 💳 | Saldo suficiente? → aprova. Sem saldo? → recusa. |
| Login 🔐 | Senha correta? → entra. Errada? → bloqueia. |

</v-click>

<v-click>

> Em Python, você escreve essas perguntas com o `if`. O programa **decide** o caminho com base na resposta.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 5 — if/else Sintaxe -->

# `if` / `else` — O Programa Decide

## Leitura em voz alta: "se... senão..."

```python
nota = float(input("Digite sua nota: "))

if nota >= 6:
    print("Aprovado! ✅")
else:
    print("Recuperação 😢")
```

<v-click>

**Regras de ouro:**
- O `if` termina com `:` (dois-pontos)
- O bloco dentro do `if` tem **4 espaços de recuo** (indentação)
- O `else` cobre **todo o resto** — quando a condição for falsa

</v-click>

<v-click>

> Python é como um semáforo: só pode estar na cor verde **ou** na cor vermelha — nunca nas duas ao mesmo tempo.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 6 — EX01 Aprovado ou Reprovado -->

# <carbon-terminal /> EX01 — Aprovado ou Reprovado?

**Individual · 8 minutos · Nível 1–2**

> Salve como `SENAC-TecIA/Aula-08/ex01_nota.py`

```python
# EX01 — Aprovado ou Reprovado
# Técnico em IA — Aula 08
# Nome: __________________

nota = float(input("Digite sua nota (0 a 10): "))

# TAREFA: escreva o if/else abaixo
# Se nota for maior ou igual a 6: imprima "Aprovado!"
# Caso contrário: imprima "Recuperação."
```

Teste com pelo menos 3 valores: `5.5`, `6.0`, `8.2`

<v-click>

> **Gabarito:**
> ```python
> if nota >= 6:
>     print("Aprovado!")
> else:
>     print("Recuperação.")
> ```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 7 — elif -->

# `elif` — Quando Há Mais de 2 Caminhos

## "Se não for A, mas for B, então..."

```python
nota = float(input("Digite sua nota: "))

if nota >= 9:
    print("Conceito A 🏆")
elif nota >= 7:
    print("Conceito B 👍")
elif nota >= 5:
    print("Conceito C ⚠️")
else:
    print("Reprovado ❌")
```

<v-click>

**Como Python lê isso:**
1. Testa a condição do `if`. Se for verdade → executa e **para**.
2. Se não, testa o `elif`. Se for verdade → executa e **para**.
3. Continua até o `else`, que pega **todo o restante**.

> Ordem importa! Python para na **primeira condição verdadeira**.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 8 — EX02 Classificador de Notas -->

# <carbon-terminal /> EX02 — Classificador de Notas

**Individual · 8 minutos · Nível 2**

> Salve como `SENAC-TecIA/Aula-08/ex02_classificador.py`

```python
# EX02 — Classificador de Notas
# Técnico em IA — Aula 08
# Nome: __________________

nota = float(input("Digite a nota: "))

# TAREFA: use if/elif/else para classificar
# >= 9  → "Excelente!"
# >= 7  → "Bom!"
# >= 5  → "Recuperação!"
# < 5   → "Reprovado!"
```

Teste com: `9.5`, `7.3`, `5.0`, `4.9`

<v-click>

> **Gabarito:**
> ```python
> if nota >= 9:
>     print("Excelente!")
> elif nota >= 7:
>     print("Bom!")
> elif nota >= 5:
>     print("Recuperação!")
> else:
>     print("Reprovado!")
> ```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 9 — Juntando Tudo: input + conversão + if/elif/else -->

# Juntando Tudo: o Fluxo Completo

## `input()` → converter → comparar → responder

```python
# Programa completo — sem lacunas
nome = input("Qual é o seu nome? ")
nota = float(input(f"Olá, {nome}! Qual foi sua nota? "))

if nota >= 9:
    resultado = "Excelente!"
elif nota >= 7:
    resultado = "Bom!"
elif nota >= 5:
    resultado = "Recuperação."
else:
    resultado = "Reprovado."

print(f"{nome}: {resultado} (nota: {nota})")
```

<v-click>

**O que esse código faz em 4 passos:**
1. **Lê** o nome e a nota do usuário
2. **Converte** a string `"7.5"` para o número `7.5`
3. **Decide** qual conceito com `if/elif/else`
4. **Imprime** tudo junto com f-string

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 10 — EX03 Classificador Completo (dupla) -->

# <carbon-user-multiple /> EX03 — Classificador Completo

**Dupla · 10 minutos · Nível 3**

> Salve como `SENAC-TecIA/Aula-08/ex03_completo.py`

```python
# EX03 — Classificador Completo
# Técnico em IA — Aula 08
# Dupla: __________ e __________

# TAREFA: escreva um programa que:
# 1. Peça o nome do aluno
# 2. Peça a nota (lembre de converter!)
# 3. Classifique: A (>=9), B (>=7), C (>=5), Reprovado (<5)
# 4. Imprima: "NOME - Conceito X - nota Y.Y"
#
# DESAFIO: peça nota para 3 alunos diferentes
# e no final imprima quem teve o maior conceito
```

<v-click>

> **Gabarito (versão básica):**
> ```python
> nome = input("Nome do aluno: ")
> nota = float(input("Nota: "))
> if nota >= 9: conceito = "A"
> elif nota >= 7: conceito = "B"
> elif nota >= 5: conceito = "C"
> else: conceito = "Reprovado"
> print(f"{nome} - Conceito {conceito} - nota {nota}")
> ```

</v-click>

---
layout: brainstorm
bgPreset: animate
pulse: true
---

<!-- SLIDE 11 — Dinâmica Caça ao Bug -->

# <carbon-debug /> Dinâmica — Caça ao Bug!

## Encontre o(s) erro(s) neste código — duplas, 5 minutos

```python
nota = float(input("Nota: "))

if nota >= 7
    print("Aprovado")
  elif nota >= 5:
    print("Recuperacao")
else
    print("Reprovado")
```

**Há 3 erros escondidos. Quais são?**

<v-click>

> **Erros:**
> 1. Linha 3: `if nota >= 7` — falta `:` no final
> 2. Linha 5: `elif` com 2 espaços de recuo em vez de 0 (deve estar na mesma coluna do `if`)
> 3. Linha 7: `else` — falta `:` no final

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 12 — Síntese Python + Gancho BD -->

# Você Ensinou o Python a Decidir!

**O que você aprendeu hoje em Python:**

- `if` / `else` — o programa escolhe um de dois caminhos
- `elif` — quando há mais de duas opções
- Combine `input()` + conversão de tipo + condicionais
- Indentação obrigatória: 4 espaços definem o bloco

<v-click>

**Gancho para o próximo bloco:**

> Esses dados que o Python processa — notas, nomes, resultados — vivem só enquanto o programa roda. Quando você fecha, **tudo some**.
>
> E se precisasse guardar 1.000 notas de alunos? Em disco, organizado, para consultar depois? Isso é o trabalho do **Banco de Dados**.

</v-click>

---
layout: center
bgPreset: default
card: true
---

<!-- SLIDE 13 — INTERVALO -->

# ☕ Intervalo

*9h10 – 9h25*

> Próximo bloco: **Banco de Dados** — você vai criar sua primeira tabela SQL do zero.

<!-- ============================================================
     BLOCO 2 — UC08 · BANCO DE DADOS (slides 14–24)
     DDL: CREATE TABLE, tipos SQL, constraints, INSERT INTO
     ============================================================ -->

---
layout: center
bgPreset: palette
card: true
---

<!-- SLIDE 14 — Divisor Bloco 2 -->

# Bloco 2
## Banco de Dados: criando estrutura

*9h25 – 11h25 · 2 HA · UC08*

> **Fio condutor:** BD **organiza** dados

---
layout: brainstorm
bgPreset: animate
pulse: true
---

<!-- SLIDE 15 — Flash Revisão SELECT -->

# <carbon-flash /> Flash Revisão — SQL que Você Já Sabe

## Complete em voz alta — sem olhar para o caderno

| Para fazer isso... | Palavra-chave SQL |
|---|---|
| Escolher quais colunas ver | `___________` |
| Indicar de qual tabela vêm os dados | `___________` |
| Filtrar por condição | `___________` |
| Ordenar os resultados | `___________` |
| Contar registros | `___________` |

<v-click>

> **Respostas:** `SELECT` · `FROM` · `WHERE` · `ORDER BY` · `COUNT(*)`
>
> Esse SQL **consulta** dados que já existem. Mas de onde vêm as tabelas? Quem as **cria**?

</v-click>

---
layout: two-cols
bgPreset: default
card: true
---

<!-- SLIDE 16 — DDL vs DML -->

# DDL vs DML — Dois Mundos do SQL

## DDL — Data Definition Language
*"Cria a estrutura"*

- `CREATE TABLE` — cria uma nova tabela
- `ALTER TABLE` — modifica uma tabela existente
- `DROP TABLE` — apaga uma tabela inteira

> Como **construir** o prédio antes de colocar gente dentro.

::right::

## DML — Data Manipulation Language
*"Manipula os dados"*

- `SELECT` — consulta dados *(você já sabe!)*
- `INSERT INTO` — insere novas linhas
- `UPDATE` — altera dados existentes
- `DELETE` — apaga linhas específicas

> Como **usar** o prédio depois de construído.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 17 — CREATE TABLE Sintaxe -->

# `CREATE TABLE` — Sintaxe Completa

```sql
CREATE TABLE alunos (
    id        INTEGER      PRIMARY KEY,
    nome      VARCHAR(100) NOT NULL,
    nota      FLOAT,
    aprovado  BOOLEAN
);
```

**Lendo em voz alta:**
> "Crie a tabela chamada `alunos`, com as colunas: `id` inteiro e chave primária, `nome` texto até 100 caracteres e obrigatório, `nota` número decimal, `aprovado` verdadeiro ou falso."

<v-click>

**Estrutura geral:**
```sql
CREATE TABLE nome_da_tabela (
    nome_coluna  TIPO_DE_DADO  CONSTRAINT,
    ...
);
```

</v-click>

---
layout: two-cols
bgPreset: default
card: true
---

<!-- SLIDE 18 — Tipos SQL vs Python -->

# Tipos SQL vs Python — Mesma Ideia, Outro Nome

## Em Python você usa...

| Tipo | Exemplo |
|---|---|
| `int` | `17`, `0`, `-5` |
| `str` | `"Ana"`, `"Técnico"` |
| `float` | `9.5`, `3.14` |
| `bool` | `True`, `False` |

::right::

## Em SQL você escreve...

| Tipo SQL | Equivalente Python |
|---|---|
| `INTEGER` | `int` |
| `VARCHAR(N)` | `str` (máx N chars) |
| `FLOAT` | `float` |
| `BOOLEAN` | `bool` |
| `DATE` | data no formato `"2026-03-20"` |

<v-click>

> A diferença é que no SQL você **declara** o tipo ao criar a tabela. O banco não aceita um número onde espera texto — e dá erro.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 19 — Constraints PK e NOT NULL -->

# Constraints — As Regras da Tabela

**Constraint** = regra que o banco vai **garantir automaticamente**.

<v-click>

## `PRIMARY KEY` — O Identificador Único

```sql
id  INTEGER  PRIMARY KEY
```

- Cada linha tem um `id` diferente — nunca repetido
- Como o **CPF**: duas pessoas não podem ter o mesmo
- O banco rejeita automaticamente ids duplicados

</v-click>

<v-click>

## `NOT NULL` — Campo Obrigatório

```sql
nome  VARCHAR(100)  NOT NULL
```

- Essa coluna não pode ficar vazia
- Como um **formulário de cadastro**: sem nome, não cadastra
- Se você tentar inserir sem `nome`, o banco dá erro

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 20 — Como Usar db-fiddle.com -->

# <carbon-tools /> Como Usar o db-fiddle.com

**Sem instalação · Sem conta · Funciona direto no navegador**

**Passo a passo:**

1. Abra `db-fiddle.com` no navegador
2. No canto superior esquerdo, selecione **SQLite** (versão 3.x)
3. Na área esquerda (**Schema SQL**), cole seu `CREATE TABLE`
4. Na área direita (**Query SQL**), cole seu `SELECT` ou `INSERT INTO`
5. Clique em **Run** (botão azul no topo)
6. O resultado aparece na parte de baixo da tela

<v-click>

> **Dica:** após clicar Run, a URL da barra de endereços muda — copie e cole para o professor como entrega.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 21 — EX04 Crie Sua Tabela -->

# <carbon-data-table /> EX04 — Crie Sua Tabela

**Individual · 10 minutos · Nível 2**

Abra o **db-fiddle.com** e **escolha um tema** para criar sua tabela:

| Tema | Colunas sugeridas |
|---|---|
| 🎮 Games | `id`, `titulo`, `plataforma`, `preco`, `nota_media` |
| 🎵 Músicas | `id`, `titulo`, `artista`, `duracao_segundos`, `genero` |
| 🛒 Produtos | `id`, `nome`, `categoria`, `preco`, `estoque` |

Escreva o `CREATE TABLE` na área Schema, clique **Run**. Sem erro = tabela criada com sucesso!

<v-click>

> **Gabarito (tema Games):**
> ```sql
> CREATE TABLE games (
>     id         INTEGER      PRIMARY KEY,
>     titulo     VARCHAR(100) NOT NULL,
>     plataforma VARCHAR(50),
>     preco      FLOAT,
>     nota_media FLOAT
> );
> ```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 22 — INSERT INTO -->

# `INSERT INTO` — Colocando Dados na Tabela

```sql
INSERT INTO games (id, titulo, plataforma, preco, nota_media)
VALUES (1, 'Minecraft', 'PC', 89.90, 9.5);

INSERT INTO games (id, titulo, plataforma, preco, nota_media)
VALUES (2, 'Fortnite', 'PS5', 0.00, 7.8);
```

**Lendo em voz alta:**
> "Insira na tabela `games`, nas colunas `id`, `titulo`..., os valores `1`, `'Minecraft'`..."

<v-click>

**Regras obrigatórias:**
- Textos entre aspas simples: `'Minecraft'`
- Números sem aspas: `89.90`
- A ordem dos valores deve bater com a ordem das colunas
- Não pode repetir o mesmo `id` (PRIMARY KEY!)

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 23 — EX05 Popule e Consulte (dupla) -->

# <carbon-user-multiple /> EX05 — Popule e Consulte

**Dupla · 10 minutos · Nível 3**

No mesmo db-fiddle do EX04, adicione na área **Schema SQL** três linhas com `INSERT INTO`. Depois, na área **Query SQL**, consulte:

```sql
-- 1. Ver todas as linhas
SELECT * FROM games;

-- 2. Filtrar por plataforma
SELECT titulo, preco FROM games WHERE plataforma = 'PC';

-- 3. Ordenar por nota média (maior primeiro)
SELECT titulo, nota_media FROM games ORDER BY nota_media DESC;
```

Clique **Run** e confirme que os 3 resultados aparecem corretamente.

<v-click>

> **Resultado esperado:** 3 jogos na query 1 · somente os PCs na query 2 · ordenados do maior para o menor na query 3.

</v-click>

---
layout: brainstorm
bgPreset: animate
pulse: true
---

<!-- SLIDE 24 — Debate: Tabela de um Modelo de IA -->

# <carbon-machine-learning /> Debate — Tabela de um Modelo de IA

## Se você fosse guardar modelos de IA num banco de dados...

**Que colunas teria essa tabela?** O que você quer saber sobre cada modelo treinado?

<v-click>

**Sugestão:**
```sql
CREATE TABLE modelos_ia (
    id          INTEGER      PRIMARY KEY,
    nome        VARCHAR(100) NOT NULL,
    precisao    FLOAT,
    epochs      INTEGER,
    gpu_usada   VARCHAR(50),
    data_treino DATE
);
```

> Esse debate conecta os 3 blocos do dia: **Python** treina o modelo, **BD** guarda os resultados, **GPU** é o hardware que fez o treino.

</v-click>

<!-- ============================================================
     BLOCO 3 — UC06 · ARQUITETURA E GPU (slides 25–35)
     Paralelismo reforçado + Pipeline 4 estágios + GPUs no mercado
     ============================================================ -->

---
layout: center
bgPreset: palette
card: true
---

<!-- SLIDE 25 — Divisor Bloco 3 -->

# Bloco 3
## Arquitetura e GPU: como a máquina pensa rápido

*11h35 – 12h20 · 2 HA · UC06*

> **Fio condutor:** GPU **processa** dados

---
layout: brainstorm
bgPreset: animate
pulse: true
---

<!-- SLIDE 26 — Revisão Oral GPU -->

# O Que Você Lembra da GPU?

## Fala sem consultar — qualquer coisa que vier à cabeça!

- O que é uma GPU?
- Qual a diferença entre CPU e GPU?
- Por que a GPU é importante para IA?
- Você já viu o nome "NVIDIA" em algum lugar?

<v-click>

> Não se preocupe se não lembrar tudo — hoje vamos revisitar e ir **muito mais fundo**. O conceito de **paralelismo** é a chave para entender por que GPUs existem.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 27 — Paralelismo: O Segredo da GPU -->

# Paralelismo — O Segredo da GPU

## Imagine um banco com fila

**CPU — 1 caixa aberto:**
- Atende 1 cliente por vez
- Cada cliente demora 2 minutos
- Para 100 clientes: **200 minutos**

<v-click>

**GPU — 1.000 caixas abertos ao mesmo tempo:**
- Atende 1.000 clientes **simultaneamente**
- Para 100 clientes: **menos de 1 minuto**

</v-click>

<v-click>

**Mais exemplos:**
- **TikTok:** a GPU mostra vídeo para 1.000 usuários ao mesmo tempo, cada um com seu frame
- **Minecraft:** cada pedacinho da tela é calculado em paralelo — é por isso que não trava

> **Paralelismo = fazer muitas coisas ao mesmo tempo, não mais rápido individualmente.**

</v-click>

---
layout: two-cols
bgPreset: default
card: true
---

<!-- SLIDE 28 — CPU vs GPU Quadro Comparativo -->

# CPU vs GPU — Quadro Comparativo

## CPU (Central Processing Unit)

- **Núcleos:** 4 a 16 cores
- **Especialidade:** lógica complexa e variada
- **Velocidade por core:** muito alta
- **Analogia:** artesão expert — faz qualquer coisa com perfeição, um item por vez
- **Uso em IA:** rodar código Python, pré-processar dados

::right::

## GPU (Graphics Processing Unit)

- **Núcleos:** 4.000 a 16.000+ cores
- **Especialidade:** mesma operação para muitos dados ao mesmo tempo
- **Velocidade por core:** menor que a CPU
- **Analogia:** fábrica — faz 1 tarefa simples em 10.000 unidades ao mesmo tempo
- **Uso em IA:** treinar modelos (bilhões de cálculos em paralelo)

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 29 — EX06 CPU ou GPU? -->

# <carbon-terminal /> EX06 — CPU ou GPU?

**Individual · 5 minutos · Nível 1**

Para cada tarefa abaixo, escolha: **CPU** ou **GPU**?

| Tarefa | CPU ou GPU? |
|---|---|
| Abrir o VS Code e editar código Python | |
| Renderizar cada frame de um jogo em tempo real | |
| Treinar uma rede neural com 1 bilhão de parâmetros | |
| Mandar mensagem no WhatsApp | |
| Somar 10 milhões de números em paralelo | |
| Navegar em sites e abrir o Teams | |

<v-click>

> **Gabarito:** CPU · GPU · GPU · CPU · GPU · CPU

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 30 — Pipeline: O Que É? -->

# Pipeline — A Linha de Produção do Processador

## Você já viveu um pipeline hoje

Pense no **McDonald's** quando você pede um lanche:

<v-click>

| Etapa | O que acontece |
|---|---|
| 🧾 **Caixa** | Recebe e registra o pedido |
| 📋 **Gerente** | Lê o pedido e distribui as tarefas |
| 👨‍🍳 **Cozinha** | Prepara o lanche |
| 🎁 **Entrega** | Coloca na bandeja e entrega ao cliente |

</v-click>

<v-click>

> Essas 4 etapas acontecem **em paralelo** para pedidos diferentes:
> enquanto a cozinha prepara o seu lanche, o caixa já está recebendo o próximo pedido.
>
> **Isso é um pipeline:** várias etapas trabalhando ao mesmo tempo em coisas diferentes.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 31 — Os 4 Estágios do Pipeline da GPU -->

# Os 4 Estágios do Pipeline da GPU

Todo cálculo que uma GPU faz passa por 4 etapas — **ao mesmo tempo para cada core**:

<v-click>

**1. Fetch — "Buscar a instrução"**
> Seu cérebro lembra onde deixou o celular na cama. O core busca a próxima operação na memória.

</v-click>

<v-click>

**2. Decode — "Entender o que fazer"**
> Você lê a mensagem e entende o que a pessoa quis dizer. O core decodifica: "preciso somar dois números".

</v-click>

<v-click>

**3. Execute — "Fazer o cálculo"**
> Você responde a mensagem. O core executa a operação: `a + b = resultado`.

</v-click>

<v-click>

**4. Write Back — "Anotar o resultado"**
> Você anota na agenda que já respondeu. O core grava o resultado na memória para uso posterior.

</v-click>

---
layout: two-cols
bgPreset: default
card: true
---

<!-- SLIDE 32 — CPU Serial vs GPU Paralela -->

# CPU Serial vs GPU Paralela

## CPU — Pipeline serial

```
Instrução 1: [Fetch]→[Decode]→[Execute]→[Write]
Instrução 2:                              [Fetch]→...
```

- Poucos pipelines (1 por core)
- Cada instrução espera a anterior terminar
- Muito rápido por instrução, mas **sequencial**

::right::

## GPU — Milhares de pipelines

```
Core 1: [F]→[D]→[E]→[W]
Core 2: [F]→[D]→[E]→[W]
Core 3: [F]→[D]→[E]→[W]
  ...    (×10.000 cores)
```

- Todos os cores rodam **ao mesmo tempo**
- Cada core faz a **mesma operação** em dados diferentes
- Perfeito para: pixels, gradientes de IA

<v-click>

> Treinar IA = somar e multiplicar bilhões de números. A GPU faz isso em paralelo. A CPU precisaria de anos.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 33 — EX07 Monte o Pipeline (dupla) -->

# <carbon-user-multiple /> EX07 — Monte o Pipeline

**Dupla · 8 minutos · Nível 2**

Reordene as etapas abaixo na sequência correta do pipeline da GPU:

| Carta | Descrição |
|---|---|
| 🔵 | O core grava o resultado na memória |
| 🟡 | O core busca a instrução na memória |
| 🔴 | O core executa o cálculo (soma/multiplicação) |
| 🟢 | O core lê a instrução e entende o que fazer |

**Qual é a ordem correta?** Escreva as cores na sequência.

<v-click>

> **Gabarito:** 🟡 Fetch → 🟢 Decode → 🔴 Execute → 🔵 Write Back

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 34 — GPUs no Mercado -->

# GPUs no Mercado — Do Gaming ao Treino de IA

<SlideTable>

| GPU | Uso principal | Para quem |
|---|---|---|
| **NVIDIA GeForce RTX 4090** | Gaming, estudo, protótipos de IA | Estudantes, devs, gamers |
| **NVIDIA A100** | Treino de modelos grandes | Empresas, pesquisa |
| **NVIDIA H100** | LLMs, ChatGPT, modelos enormes | OpenAI, Google, Meta |
| **AMD Radeon RX 7900** | Gaming, alternativa mais barata | Gamers, criadores |

</SlideTable>

<v-click>

**Contexto de preços (referência 2025):**
- RTX 4090: ~R$ 15.000 — PC gamer topo de linha
- A100: ~US$ 10.000 — servidores de empresas
- H100: ~US$ 30.000 — clusters de IA em escala industrial

> O ChatGPT foi treinado em **milhares de A100 e H100** por meses. Agora você entende por que IA custa caro.

</v-click>

---
layout: end
bgPreset: palette
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
aulaNum: "Aula 08"
---

<!-- SLIDE 35 — Encerramento A08 -->

# Aula 08 — Concluída!

## O fio condutor de hoje:

**Python manipula dados** → `if/elif/else` decide o caminho com base em condições

**BD organiza dados** → `CREATE TABLE` cria a estrutura, `INSERT INTO` preenche

**GPU processa dados** → paralelismo massivo + pipeline de 4 estágios (Fetch → Decode → Execute → Write Back)

*Próxima aula: Python com loops `for` — o código começa a processar listas inteiras de dados de uma vez.*
