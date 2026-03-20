---
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
     BLOCO 1 — UC05 · PYTHON (slides 2–17)
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
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 3 — Revisão Relâmpago -->

# <carbon-flash /> Revisão Relâmpago

## O que você ainda lembra da última aula de Python?

1. Como se lê um valor digitado pelo usuário em Python?
2. O que `int("7")` faz? E `float("3.5")`?
3. O que `True and False` retorna? E `True or False`?
4. O que `!=` significa?

> Essas ferramentas são o **ingrediente** que você já tem. O `if` é a **receita** que vai juntar tudo.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 4 — Tabela Verdade -->

# Tabela Verdade: `and`, `or`, `not`

| `A` | `B` | `A and B` | `A or B` | `not A` |
|---|---|---|---|---|
| `True` | `True` | `True` | `True` | `False` |
| `True` | `False` | `False` | `True` | `False` |
| `False` | `True` | `False` | `True` | `True` |
| `False` | `False` | `False` | `False` | `True` |

> **and** só é `True` quando os **dois** são `True` · **or** é `True` quando **pelo menos um** é · **not** inverte o valor

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 5 — Tabela Verdade na Prática -->

# Tabela Verdade na Prática

## Combinando `and`, `or`, `not` no `if`

```python
nota = float(input('Nota: '))
frequencia = int(input('Frequência (%): '))

# and — precisa de nota E frequência altas
if nota >= 6 and frequencia >= 75:
    print('Aprovado')

# or — basta um critério falhar
if nota < 6 or frequencia < 75:
    print('Requer atenção')

# not — inverte o booleano
if not (frequencia >= 75):
    print('Frequência insuficiente')
```

> Python avalia cada comparação para `True`/`False` e depois aplica `and`/`or`/`not` exatamente como a tabela acima.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 6 — O Que é uma Condição? -->

# O Que é uma Condição?

**Condição** = uma pergunta que tem resposta SIM ou NÃO.

<v-click>

| Situação do dia a dia | A condição |
|---|---|
| Semáforo | Verde? → passa. Vermelho? → para. |
| Nota na escola | Tirou 6 ou mais? → passou. Menos? → recuperação. |
| App de banco | Saldo suficiente? → aprova. Sem saldo? → recusa. |
| Login | Senha correta? → entra. Errada? → bloqueia. |

</v-click>

<v-click>

> Em Python, você escreve essas perguntas com o `if`. O programa **decide** o caminho com base na resposta.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 7 — if/else Sintaxe -->

# `if` / `else` — O Programa Decide

## Leitura em voz alta: "se... senão..."

```python
nota = float(input("Digite sua nota: "))

if nota >= 6:
    print("Aprovado!")
else:
    print("Recuperação.")
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

<!-- SLIDE 8 — EX01 Aprovado ou Reprovado -->

# <carbon-terminal /> EX01 — Aprovado ou Reprovado?

**Individual · 8 minutos · Nível 1–2**

> Salve como `SENAC-TecIA/Aula-08/ex01_nota.py`

**Tarefa:** leia a nota e escreva um `if/else`:
- nota maior ou igual a 6 → imprima `"Aprovado!"`
- caso contrário → imprima `"Recuperação."`

```python
nota = float(input("Digite sua nota (0 a 10): "))
```

Teste com pelo menos 3 valores: `5.5`, `6.0`, `8.2`

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 8 Gabarito — EX01 -->

# <carbon-checkmark /> Gabarito — EX01

```python
nota = float(input("Digite sua nota (0 a 10): "))

if nota >= 6:
    print("Aprovado!")
else:
    print("Recuperação.")
```
---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 9 — Indentação: Como Funciona -->

# Indentação: Python Usa Espaços para Pensar

Em Python, **indentação define o que pertence a cada bloco**.

```python
nota = 8.5

if nota >= 7:
    print("Aprovado!")    # 4 espaços: só roda se nota >= 7
    print("Boa nota!")    # 4 espaços: também pertence ao if

print("Avaliação concluída.")  # 0 espaços: roda SEMPRE
```

<v-click>

**Regra:** tudo dentro de `if`, `else` ou `elif` precisa de **4 espaços** de recuo. Esquecer causa `IndentationError`, o programa não roda.

</v-click>

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- SLIDE 10 — Indentação: Mapa do if/elif/else -->

# Mapa de Indentação: if / elif / else

```python
nota = float(input("Nota: "))

if nota >= 9:              # coluna 0
    print("Conceito A")   # 4 espaços — dentro do if
elif nota >= 7:            # coluna 0 — mesmo nível do if
    print("Conceito B")   # 4 espaços — dentro do elif
elif nota >= 5:            # coluna 0
    print("Conceito C")   # 4 espaços — dentro do elif
else:                      # coluna 0
    print("Reprovado")    # 4 espaços — dentro do else

print("Avaliação concluída.")  # SEMPRE EXECUTA 
```
::right::
<v-click>

- `if` / `elif` / `else` → **coluna 0**, sem nenhum espaço antes
- Código de cada bloco → **4 espaços** de recuo
- Código após o bloco → volta à **coluna 0**, sempre executa

</v-click>

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- SLIDE 11 — elif: Quando Há Mais de 2 Caminhos -->
# elif: Quando Há Mais de 2 Caminhos

## "Se não for A, mas for B, então..."

```python
nota = float(input("Digite sua nota: "))

if nota >= 9:
    print("Conceito A")
elif nota >= 7:
    print("Conceito B")
elif nota >= 5:
    print("Conceito C")
else:
    print("Reprovado")
```
::right::
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

<!-- SLIDE 12 — EX02 Classificador de Notas -->

# <carbon-terminal /> EX02 — Classificador de Notas

**Individual · 8 minutos · Nível 2**

> Salve como `SENAC-TecIA/Aula-08/ex02_classificador.py`

**Tarefa:** leia a nota e use `if/elif/else` para classificar:
- Maior ou igual a 9 → `"Excelente!"` · Maior ou igual 7 → `"Bom!"` · Maior ou igual 5 → `"Recuperação!"` · menor que 5 → `"Reprovado!"`

```python
nota = float(input("Digite a nota: "))
```

Teste com: `9.5`, `7.3`, `5.0`, `4.9`

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 12 Gabarito — EX02 -->

# <carbon-checkmark /> Gabarito — EX02

```python
nota = float(input("Digite a nota: "))

if nota >= 9:
    print("Excelente!")
elif nota >= 7:
    print("Bom!")
elif nota >= 5:
    print("Recuperação!")
else:
    print("Reprovado!")
```

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 13 — Juntando Tudo: input + conversão + if/elif/else -->

# Juntando Tudo: o Fluxo Completo

## `input()` → converter → comparar → responder

```python
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

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 13b — Fluxo Completo: Leitura em 4 Passos -->

# Fluxo Completo: Lendo o Código

**O que esse programa faz em 4 passos:**

1. **Lê** o nome e a nota do usuário com `input()`
2. **Converte** a string `"7.5"` para o número `7.5` com `float()`
3. **Decide** qual conceito com `if/elif/else`
4. **Imprime** tudo junto com f-string: `f"{nome}: {resultado} (nota: {nota})"`

> Esse é o **padrão completo** que você vai usar em todos os próximos exercícios.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 14 — EX03 Situacao do Aluno (dupla) -->

# <carbon-user-multiple /> EX03 — Situacao do Aluno


> Salve como `SENAC-TecIA/Aula-08/ex03_situacao.py`

**Tarefa:** leia nome, nota e frequência.

| Nota | Frequência | Situação |
|---|---|---|
| >= 6 | >= 75% | `"Aprovado"` |
| >= 6 | < 75% | `"Conselho de classe"` |
| < 6 | >= 75% | `"Recuperacao"` |
| < 6 | < 75% | `"Reprovado"` |

Imprima: `"NOME: SITUACAO (nota N.N | freq F%)"`

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 14 Gabarito — EX03 -->

# <carbon-checkmark /> Gabarito — EX03

```python
nome = input("Nome do aluno: ")
nota = float(input("Nota (0 a 10): "))
frequencia = int(input("Frequencia (%): "))

if nota >= 6 and frequencia >= 75:
    situacao = "Aprovado"
elif nota >= 6 and frequencia < 75:
    situacao = "Aprovado - frequencia baixa"
elif nota < 6 and frequencia >= 75:
    situacao = "Recuperacao"
else:
    situacao = "Reprovado"

print(f"{nome}: {situacao} (nota {nota} | freq {frequencia}%)")  
```

---
layout: default
card: true
bgPreset: animate
---

<!-- SLIDE 15 — Dinâmica Caça ao Bug -->

# <carbon-debug /> Dinâmica — Caça ao Bug!

## Encontre o(s) erro(s) neste código:

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
---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 16 — Síntese Python + Gancho BD -->

# Você Ensinou o Python a Decidir!

**O que você aprendeu hoje em Python:**

- `if` / `else` — o programa escolhe um de dois caminhos
- `elif` — quando há mais de duas opções
- Combine `input()` + conversão de tipo + condicionais
- Indentação obrigatória: 4 espaços definem o bloco



---
layout: center
bgPreset: palette
card: true
---

<!-- SLIDE 17 — INTERVALO -->

# Banco De Dados

*9h25 – 11h25 · 2 HA · UC08*

> Próximo bloco: **Banco de Dados**, você vai criar sua primeira tabela SQL do zero.

<!-- ============================================================
     BLOCO 2 — UC08 · BANCO DE DADOS (slides 18–28)
     DDL: CREATE TABLE, tipos SQL, constraints, INSERT INTO
     ============================================================ -->

---
layout: default
card: true
bgPreset: animate
---

<!-- SLIDE 19 — Flash Revisão SELECT -->

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
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 20a — DDL vs DML: Os Dois Mundos -->

# DDL vs DML: Dois Tipos de Acao no Banco



**DDL: mexer na estrutura**

(Data Definition Language)
Criar uma tabela. Adicionar uma coluna. Apagar uma tabela inteira.
Isso muda **o que existe** no banco, nao os dados guardados.

**DML: mexer nos dados**

(Data Manipulation Language)
Inserir uma linha. Consultar registros. Atualizar um valor. Apagar uma linha.
Isso muda **o que esta guardado**, nao a estrutura.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 20a-b — DDL vem antes de DML -->

# DDL vem antes de DML — sempre

Pense na diferença entre **construir uma gaveta** e **colocar meias dentro da gaveta**.

Voce nao pode guardar meias numa gaveta que ainda nao existe. No banco de dados é a mesma logica:

| Ordem | Acao | Tipo |
|---|---|---|
| 1. | `CREATE TABLE` — cria a tabela | DDL |
| 2. | `INSERT INTO` — coloca dados dentro | DML |
| 3. | `SELECT` — consulta os dados | DML |

**Regra:** sem tabela criada, nao ha onde guardar nada. DDL primeiro, DML depois.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 20b — DDL: CREATE TABLE -->

# DDL na Pratica: `CREATE TABLE`

DDL muda o que o banco **conhece**. Antes do `CREATE TABLE`, a tabela simplesmente nao existe.

O comando mais importante do DDL para hoje:

```sql
CREATE TABLE alunos (
    id    INTEGER      PRIMARY KEY,
    nome  VARCHAR(100) NOT NULL,
    nota  FLOAT
);
```

Lendo em voz alta: "Crie a tabela `alunos` com as colunas `id` (inteiro, chave primaria), `nome` (texto ate 100 caracteres, obrigatorio) e `nota` (numero decimal)."

Depois de rodar esse comando, a tabela existe, mas esta **completamente vazia**. Nenhum dado ainda.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 20b-2 — DDL: ALTER TABLE e DROP TABLE -->

# DDL: Alterando e Apagando Estruturas

Alem do `CREATE TABLE`, o DDL tem mais dois comandos importantes:

**`ALTER TABLE` — adicionar ou modificar colunas numa tabela que ja existe**

```sql
ALTER TABLE alunos ADD COLUMN email VARCHAR(200);
```

Isso nao apaga nenhum dado. So adiciona a coluna nova em todas as linhas (com valor vazio por enquanto).

---
layout: default
card: true
bgPreset: palette
---

# DDL: Alterando e Apagando Estruturas

**`DROP TABLE` — apaga a tabela inteira**

```sql
DROP TABLE alunos;
```

**Atencao:** nao tem como desfazer. O banco apaga estrutura e todos os dados sem confirmar. Em empresas reais, um `DROP TABLE` errado pode apagar anos de dados em segundos.


---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 20c — DML: INSERT INTO e SELECT -->

# DML na Pratica: Inserir e Consultar

Voce usa DML depois que a estrutura ja existe (depois do `CREATE TABLE`).

**`INSERT INTO` — adiciona uma linha nova na tabela**

```sql
INSERT INTO alunos (id, nome, nota)
VALUES (1, 'Ana', 8.5);
```

---
layout: default
bgPreset: palette
card: true
---

# DML na Pratica: Inserir e Consultar
A ordem dos valores tem que bater exatamente com a ordem das colunas. Texto entre aspas simples, numero sem aspas.

**`SELECT` — consulta os dados que ja estao guardados**

```sql
SELECT nome, nota
FROM alunos
WHERE nota >= 6;
```

"Mostre nome e nota de todos os alunos com nota maior ou igual a 6."

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 20c-2 — DML: UPDATE e DELETE -->

# DML na Pratica: Alterar e Remover

**`UPDATE` — muda o valor de uma linha que ja existe**

```sql
UPDATE alunos
SET nota = 9.0
WHERE nome = 'Ana';
```

---
layout: default
bgPreset: palette
card: true
---

# DML na Pratica: Alterar e Remover

Sempre use `WHERE` com `UPDATE`. Sem ele, o banco muda **todas** as linhas da tabela ao mesmo tempo.

**`DELETE` — remove uma linha especifica**

```sql
DELETE FROM alunos
WHERE id = 1;
```

Assim como o `UPDATE`, sempre filtre com `WHERE`. Sem filtro, apaga tudo.

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 20c-3 — DML: Sequencia Correta -->

# A Sequencia Correta no Banco de Dados

Toda vez que voce trabalha com SQL, a ordem e sempre essa:

| Passo | Comando | Tipo | O que faz |
|---|---|---|---|
| 1 | `CREATE TABLE` | DDL | Cria a estrutura |
| 2 | `INSERT INTO` | DML | Coloca dados dentro |
| 3 | `SELECT` | DML | Consulta o que esta guardado |
| 4 | `UPDATE` | DML | Corrige ou atualiza um valor |
| 5 | `DELETE` | DML | Remove uma linha |

Exatamente essa sequencia voce vai usar hoje no db-fiddle.

---
layout: default
card: true
bgPreset: palette
---


# Estrutura geral da sintaxe
<v-click>

**Exemplo:**
```sql
CREATE TABLE nome_da_tabela (
    nome_coluna  TIPO_DE_DADO  CONSTRAINT,
    ...
);
```

</v-click>

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- SLIDE 20e — Tabela vs CREATE TABLE -->

# Da Tabela ao `CREATE TABLE`

## Como fica no banco:

| id | nome | nota |
|---|---|---|
| 1 | Ana | 8.5 |
| 2 | Bruno | 6.0 |
| 3 | Carla | 9.2 |

Cada **coluna** da tabela corresponde a uma linha no `CREATE TABLE`.

::right::

## O SQL que cria essa estrutura:

```sql
CREATE TABLE alunos (
    id    INTEGER      PRIMARY KEY,
    nome  VARCHAR(100) NOT NULL,
    nota  FLOAT
);
```

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 21 — CREATE TABLE Sintaxe -->

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



---
layout: two-cols
bgPreset: palette
card: true
---

<!-- SLIDE 22 — Tipos SQL vs Python -->

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

---
layout: brainstorm
bgPreset: palette
card: true
---

# O que acontece se o tipo estiver errado?

Em SQL, o tipo é declarado na criação da tabela. O banco **recusa** qualquer valor que não bata com o tipo esperado.

**Pense em voz alta:**

- A coluna `nota` é `FLOAT`. Você tenta inserir `'oito virgula cinco'`. O que o banco faz?
- A coluna `id` é `INTEGER PRIMARY KEY`. Você tenta inserir `id = 1` duas vezes. O que acontece?
- A coluna `nome` é `VARCHAR(100) NOT NULL`. Você tenta inserir sem informar o nome. O banco aceita?

> Diferente do Python, que converte tipos na hora (`int("7")` funciona), o SQL **rejeita e dá erro imediatamente**. O tipo certo é responsabilidade de quem cria a tabela.



---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 23 — Constraints PK e NOT NULL -->

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


---
layout: default
card: true
bgPreset: palette
---

# Constraints — As Regras da Tabela

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
bgPreset: palette
---

<!-- SLIDE 24 — Como Usar db-fiddle.com -->

# <carbon-tools /> Como Usar o db-fiddle.com

**Sem instalação · Sem conta · Funciona direto no navegador**

**Passo a passo:**

1. Abra `db-fiddle.com` no navegador
2. No canto superior esquerdo, selecione **SQLite** (versão 3.x)
3. Na área esquerda (**Schema SQL**), cole seu `CREATE TABLE`
4. Na área direita (**Query SQL**), cole seu `SELECT` ou `INSERT INTO`
5. Clique em **Run** (botão azul no topo)
6. O resultado aparece na parte de baixo da tela


---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 25 — EX04 Crie Sua Tabela -->

# <carbon-data-table /> EX04 — Crie Sua Tabela

**Individual · 10 minutos · Nível 2**

Abra o **db-fiddle.com** e **escolha um tema** para criar sua tabela:

| Tema | Colunas sugeridas |
|---|---|
| Games | `id`, `titulo`, `plataforma`, `preco`, `nota_media` |

Escreva o `CREATE TABLE` na área Schema, clique **Run**. Sem erro = tabela criada com sucesso!

Na área da direita, você precisa fazer o SELECT, para ver a tabela que acabou de criar

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 25 Gabarito — EX04 -->

# <carbon-checkmark /> Gabarito — EX04 (tema Games)

```sql
CREATE TABLE games (
    id         INTEGER      PRIMARY KEY,
    titulo     VARCHAR(100) NOT NULL,
    plataforma VARCHAR(50),
    preco      FLOAT,
    nota_media FLOAT
);
```

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 26 — INSERT INTO -->

# `INSERT INTO` — Colocando Dados na Tabela

```sql
INSERT INTO games (id, titulo, plataforma, preco, nota_media)
VALUES (1, 'Minecraft', 'PC', 89.90, 9.5);

INSERT INTO games (id, titulo, plataforma, preco, nota_media)
VALUES (2, 'Fortnite', 'PS5', 0.00, 7.8);
```

**Lendo em voz alta:**
> "Insira na tabela `games`, nas colunas `id`, `titulo`..., os valores `1`, `'Minecraft'`..."

---
layout: default
card: true
bgPreset: palette
---

# `INSERT INTO` — Colocando Dados na Tabela

**Regras obrigatórias:**
- Textos entre aspas simples: `'Minecraft'`
- Números sem aspas: `89.90`
- A ordem dos valores deve bater com a ordem das colunas
- Não pode repetir o mesmo `id` (PRIMARY KEY!)

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 27a — EX05 Popule e Consulte -->

# <carbon-user-multiple /> EX05a — Popule e Consulte

**5 minutos · Nível 2**

No mesmo db-fiddle do EX04, adicione **3 jogos** na área **Schema SQL** com `INSERT INTO`. Depois, na área **Query SQL**, rode as consultas abaixo:

**Ver todos os jogos:**
```sql
SELECT * FROM games;
```

**Ordenar do maior para o menor por nota:**
```sql
SELECT titulo, nota_media
FROM games
ORDER BY nota_media DESC;
```

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 27b — EX05b Filtre os Dados -->

# <carbon-user-multiple /> EX05b — Filtre os Dados

**5 minutos · Nível 3**

Ainda no mesmo db-fiddle, use `WHERE` para filtrar os resultados:

**Ver apenas os jogos de PC:**
```sql
SELECT titulo, preco
FROM games
WHERE plataforma = 'PC';
```

**Ver apenas jogos com nota acima de 8:**
```sql
SELECT titulo, nota_media
FROM games
WHERE nota_media > 8;
```


---
layout: center
bgPreset: palette
card: true
---

<!-- SLIDE 29 — Divisor Bloco 3 -->

# Bloco 3
## Arquitetura e GPU: como a máquina pensa rápido

*11h35 – 12h20 · 2 HA · UC06*

> **Fio condutor:** GPU **processa** dados

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 30 — Revisão Oral GPU -->

# O Que Você Lembra da GPU?

## Fala sem consultar qualquer coisa que vier à cabeça!

- O que é uma GPU?
- Qual a diferença entre CPU e GPU?
- Por que a GPU é importante para IA?
- Você já viu o nome "NVIDIA" em algum lugar?

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 31 — Paralelismo: O Segredo da GPU -->

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

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 32 — Paralelismo no Dia a Dia -->

# Paralelismo no Dia a Dia

**Onde você já viu isso acontecer:**

<v-click>

- **TikTok:** a GPU renderiza o vídeo para 1.000 usuários ao mesmo tempo, cada um com seu frame
- **Minecraft:** cada pedacinho da tela é calculado em paralelo — é por isso que não trava
- **Redes neurais:** cada peso da rede é ajustado ao mesmo tempo durante o treino

</v-click>

<v-click>

> **Paralelismo = fazer muitas coisas ao mesmo tempo, não mais rápido individualmente.**
>
> A GPU não é mais "esperta" que a CPU — ela só consegue fazer **muito mais coisas ao mesmo tempo**.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 33 — CPU Também Tem Cores — Qual a Diferença? -->

# CPU Também Tem Cores — Qual a Diferença?

**"Mas a CPU não consegue fazer paralelismo também?"** — Sim!

<v-click>

Uma CPU moderna tem **4 a 16 cores** e roda 4–16 tarefas ao mesmo tempo. Isso já é paralelismo. O problema é a **escala:**

| | CPU | GPU |
|---|---|---|
| Cores típicos | 4 a 16 | 4.000 a 16.000+ |
| Paralelismo | Sim, limitado | Sim, massivo |
| Ponto forte | Lógica complexa e variada | Mesma operação em milhões de dados |

</v-click>

<v-click>

> Quando uma rede neural soma valores em 10 milhões de posições ao mesmo tempo, a CPU com 16 cores precisa de muitas rodadas. A GPU faz tudo de uma vez.
>
> **CPU: 16 caixas. GPU: 10.000 caixas. Para treinar IA, escala é tudo.**

</v-click>

---
layout: two-cols
bgPreset: palette
card: true
---

<!-- SLIDE 34 — CPU vs GPU Quadro Comparativo -->

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

<!-- SLIDE 35 — EX06 CPU ou GPU? -->

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
bgPreset: palette
---

<!-- SLIDE 36 — Pipeline: O Que É? -->

# Pipeline — A Linha de Produção do Processador

## Você já viveu um pipeline hoje

Pense no **McDonald's** quando você pede um lanche:

<v-click>

| Etapa | O que acontece |
|---|---|
| **Caixa** | Recebe e registra o pedido |
| **Gerente** | Lê o pedido e distribui as tarefas |
| **Cozinha** | Prepara o lanche |
| **Entrega** | Coloca na bandeja e entrega ao cliente |

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
bgPreset: palette
---

<!-- SLIDE 37 — Pipeline da GPU: Fetch e Decode -->

# Os 4 Estágios do Pipeline da GPU (1/2)

Todo cálculo que uma GPU faz passa por 4 etapas — **ao mesmo tempo para cada core**:

<v-click>

**1. Fetch — "Buscar a instrução"**
> Seu cérebro lembra onde deixou o celular na cama. O core busca a próxima operação na memória.

</v-click>

<v-click>

**2. Decode — "Entender o que fazer"**
> Você lê a mensagem e entende o que a pessoa quis dizer. O core decodifica: "preciso somar dois números".

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 38 — Pipeline da GPU: Execute e Write Back -->

# Os 4 Estágios do Pipeline da GPU (2/2)

<v-click>

**3. Execute — "Fazer o cálculo"**
> Você responde a mensagem. O core executa a operação: `a + b = resultado`.

</v-click>

<v-click>

**4. Write Back — "Anotar o resultado"**
> Você anota na agenda que já respondeu. O core grava o resultado na memória para uso posterior.

</v-click>

> Fetch → Decode → Execute → Write Back: os 4 passos que qualquer core de GPU repete bilhões de vezes por segundo.

---
layout: two-cols
bgPreset: palette
card: true
---

<!-- SLIDE 39 — CPU Serial vs GPU Paralela -->

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

<!-- SLIDE 40 — EX07 Monte o Pipeline (dupla) -->

# <carbon-user-multiple /> EX07 — Monte o Pipeline

**Dupla · 8 minutos · Nível 2**

Reordene as etapas abaixo na sequência correta do pipeline da GPU:

| Cor | Descrição |
|---|---|
| Azul | O core grava o resultado na memória |
| Amarelo | O core busca a instrução na memória |
| Vermelho | O core executa o cálculo (soma/multiplicação) |
| Verde | O core lê a instrução e entende o que fazer |

**Qual é a ordem correta?** Escreva as cores na sequência.

<v-click>

> **Gabarito:** Amarelo Fetch → Verde Decode → Vermelho Execute → Azul Write Back

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 41 — GPUs no Mercado -->

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
card: true
bgPreset: palette
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
aulaNum: "Aula 08"
---

<!-- SLIDE 42 — Encerramento A08 -->

# Aula 08 Concluída!

## O fio condutor de hoje:

**Python manipula dados** → `if/elif/else` decide o caminho com base em condições

**BD organiza dados** → `CREATE TABLE` cria a estrutura, `INSERT INTO` preenche

**GPU processa dados** → paralelismo massivo + pipeline de 4 estágios (Fetch → Decode → Execute → Write Back)

*Próxima aula: Python com loops `for` — o código começa a processar listas inteiras de dados de uma vez.*
