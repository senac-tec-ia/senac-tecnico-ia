---
# ─────────────────────────────────────────────────────────────────
#  CONFIGURAÇÃO GLOBAL DA AULA — preencha antes de começar
# ─────────────────────────────────────────────────────────────────
theme: ./                        # não alterar — aponta para o tema local
colorSchema: dark                # não alterar

# Metadados da aula
title: "Técnico em IA — Aula 10"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 10"

# Plano de fundo padrão para todos os slides
# "default"  → rede neural em repouso (sutil)
# "animate"  → rede neural pulsando uniformemente
# "palette"  → rede neural pulsando com cores variadas (mais vibrante)
bgPreset: palette
# ─────────────────────────────────────────────────────────────────
---

---
layout: cover
bgPreset: animate
---

<!-- kahoot cover -->

# Revisão — Kahoot
## Python · Aula 09

*Variáveis · Tipos · `input()` · Operadores Lógicos*

---
layout: default
bgPreset: palette
kahootColors: true
codeSize: lg
highContrast: true
---

<!-- Q1 — type() com string -->

# Q1 — O que imprime?

```python
nome = "Maria"
print(type(nome))
```

- **A)** <class 'int'>
- **B)** <class 'float'>
- **C)** <class 'str'>
- **D)** Maria

<v-click>

> ✅ **C — `<class 'str'>`** — aspas sempre criam uma string

</v-click>

---
layout: default
bgPreset: palette
kahootColors: true
codeSize: lg
highContrast: true
---

<!-- Q2 — type() com int -->

# Q2 — O que imprime?

```python
x = 42
print(type(x))
```

- **A)** <class 'float'>
- **B)** <class 'int'>
- **C)** <class 'bool'>
- **D)** <class 'str'>

<v-click>

> ✅ **B — `<class 'int'>`** — número sem ponto decimal é sempre `int`

</v-click>

---
layout: two-cols
bgPreset: palette
kahootColors: true
codeSize: lg
---

<!-- Q3 — input() sempre retorna str -->

# Q3 — O usuário digitou `42`. Qual o tipo de `x`?

```python
x = input("Valor: ")
print(type(x))
```

::right::

- **A)** <class 'int'> — porque digitou número
- **B)** <class 'float'>
- **C)** Depende do que for digitado
- **D)** <class 'str'>

<v-click>

> ✅ **D — `<class 'str'>`** — `input()` **sempre** retorna `str`, não importa o que for digitado

</v-click>

---
layout: default
bgPreset: palette
kahootColors: true
codeSize: lg
highContrast: true
---

<!-- Q4 — int("abc") ValueError -->

# Q4 — O que acontece?

```python
print(int("abc"))
```

- **A)** Retorna 0
- **B)** Converte letra por letra
- **C)** ValueError — não consegue converter texto em número
- **D)** Retorna None

<v-click>

> ✅ **C — `ValueError`** — só funciona com texto que representa número: `int("42")` ✔️ · `int("abc")` ✗

</v-click>

---
layout: two-cols
bgPreset: palette
kahootColors: true
codeSize: lg
---

<!-- Q5 — NameError variável não criada -->

# Q5 — O que acontece?

```python
print(nota)
```

*A variável `nota` nunca foi criada.*

::right::

- **A)** NameError — variável não existe
- **B)** Imprime vazio
- **C)** Imprime None
- **D)** Imprime 0

<v-click>

> ✅ **A — `NameError`** — Python não inventa valor; toda variável precisa ser criada antes de ser usada

</v-click>

---
layout: two-cols
bgPreset: palette
kahootColors: true
codeSize: sm
---

<!-- Q6 — f-string -->

# Q6 — O que imprime?

```python
nome = "Ana"
nota = 8.5
print(f"{nome} tirou {nota}")
```

::right::

- **A)** {nome} tirou {nota}
- **B)** Erro de sintaxe
- **C)** Ana tirou nota
- **D)** Ana tirou 8.5

<v-click>

> ✅ **D — `Ana tirou 8.5`** — o `f` antes das aspas ativa as `{}` como variáveis

</v-click>

---
layout: two-cols
bgPreset: palette
kahootColors: true
codeSize: lg
---

<!-- Q7 — if/else leitura -->

# Q7 — O que imprime?

```python
temperatura = 35
if temperatura >= 38:
    print("Febre")
else:
    print("Normal")
```

::right::

- **A)** Febre
- **B)** Normal
- **C)** Nada
- **D)** Erro

<v-click>

> ✅ **B — `Normal`** — `35 >= 38` é `False`, então cai no `else`

</v-click>

---
layout: two-cols
bgPreset: palette
kahootColors: true
codeSize: sm
---

<!-- Q8 — str() para concatenar -->

# Q8 — O que imprime?

```python
ano = 2026
print("Ano: " + str(ano))
```

::right::

- **A)** Ano: str(2026)
- **B)** Erro — não dá somar str com int
- **C)** Ano2026
- **D)** Ano: 2026

<v-click>

> ✅ **D — `Ano: 2026`** — `str(ano)` converte o inteiro para texto antes de concatenar

</v-click>

---
layout: default
bgPreset: palette
kahootColors: true
codeSize: sm
highContrast: true
---

<!-- Q9 — True and False -->

# Q9 — Qual o resultado?

```python
print(True and False)
```

- **A)** False
- **B)** True
- **C)** None
- **D)** Erro

<v-click>

> ✅ **A — `False`** — `and` só retorna `True` se **os dois** lados forem `True`

</v-click>

---
layout: default
bgPreset: palette
kahootColors: true
codeSize: sm
highContrast: true
---

<!-- Q10 — not (True and False) -->

# Q10 — Qual o resultado?

```python
print(not (True and False))
```

- **A)** False
- **B)** None
- **C)** True
- **D)** Erro

<v-click>

> ✅ **C — `True`** — passo a passo: `(True and False)` → `False`, depois `not False` → `True`

</v-click>

---
layout: two-cols
bgPreset: palette
kahootColors: true
codeSize: lg
---

<!-- Q11 — TypeError input() sem converter -->

# Q11 — O usuário digitou `5`. O que acontece?

```python
x = input("Número: ")
print(x + 1)
```

::right::

- **A)** Imprime 6
- **B)** TypeError — não dá somar str com int
- **C)** Imprime 51
- **D)** Imprime 5

<v-click>

> ✅ **B — `TypeError`** — `x` é `str` porque veio do `input()`. Correto: `int(x) + 1`

</v-click>

---
layout: two-cols
bgPreset: palette
kahootColors: true
codeSize: sm
---

<!-- Q12 — elif exercício do reator (A09) -->

# Q12 — O que imprime?

```python
capacidade = 85
if capacidade >= 90:
    print("CRÍTICO")
elif capacidade >= 80:
    print("ALTO")
elif capacidade >= 70:
    print("MODERADO")
else:
    print("NORMAL")
```

::right::

- **A)** ALTO
- **B)** CRÍTICO
- **C)** NORMAL
- **D)** MODERADO

<v-click>

> ✅ **A — `ALTO`** — `85 >= 90` é `False`; `85 >= 80` é `True` → para aqui

</v-click>

---
layout: center
card: true
bgPreset: palette
---

<!-- divisor bloco UC08 -->

# Bloco 1 · UC08
## Banco de Dados

*DDL · DML · DQL · DCL — os 4 Ds do SQL*

---
layout: default
card: true
bgPreset: palette
---

<!-- os 4 Ds do SQL — visão geral -->

# Os 4 Ds do SQL

| Família | Sigla | O que faz | Comandos |
|---|---|---|---|
| **DDL** | Data Definition Language | Define **estrutura** | `CREATE` `ALTER` `DROP` `TRUNCATE` |
| **DML** | Data Manipulation Language | **Manipula dados** | `INSERT` `UPDATE` `DELETE` |
| **DQL** | Data Query Language | **Consulta dados** | `SELECT` |
| **DCL** | Data Control Language | Controla **permissões** | `GRANT` `REVOKE` |

> Na aula passada: DDL (`CREATE TABLE`) + DML (`INSERT INTO`). Hoje: completar o quadro.

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- DDL recap + ALTER TABLE conceito -->

# DDL — Você já usou, vamos aprofundar

**`CREATE TABLE`** — cria a estrutura ✅ já fizemos

**`ALTER TABLE`** — modifica uma tabela que já existe

> **Analogia Excel:** `ALTER TABLE` = inserir/renomear/deletar uma **coluna** na planilha — mas com regras rígidas.

::right::

```sql
-- Adicionar coluna nova
ALTER TABLE modelo_ia ADD COLUMN versao VARCHAR(10);

-- Renomear coluna
ALTER TABLE modelo_ia RENAME COLUMN nome TO nome_modelo;

-- Remover coluna
ALTER TABLE modelo_ia DROP COLUMN descricao;
```

---
layout: default
card: true
bgPreset: palette
---

<!-- Constraints — conceito e tipos -->

# Constraints — As Regras da Tabela

> **Constraint** = restrição de integridade. Define o que é **obrigatório** ou **proibido** em cada coluna.

| Constraint | O que faz | Exemplo |
|---|---|---|
| `PRIMARY KEY` | ID único, nunca nulo, nunca repetido | `id INTEGER PRIMARY KEY` |
| `NOT NULL` | Campo obrigatório — não aceita vazio | `nome VARCHAR(100) NOT NULL` |
| `UNIQUE` | Valor não pode se repetir (≠ PK) | `email VARCHAR UNIQUE` |
| `DEFAULT` | Valor padrão se não informar | `ativo BOOLEAN DEFAULT TRUE` |

---
layout: default
card: true
bgPreset: palette
---

<!-- Constraints — CREATE TABLE com restrições -->

# Constraints na Prática — CREATE TABLE

Aplicando todas as constraints em uma só tabela:

```sql
CREATE TABLE modelo_ia (
    id        INTEGER PRIMARY KEY,
    nome      VARCHAR(100) NOT NULL,
    email     VARCHAR(150) UNIQUE,
    ativo     BOOLEAN DEFAULT TRUE
);
```

> Cada coluna tem sua regra: `id` nunca repete, `nome` nunca fica vazio, `email` nunca duplica, `ativo` já tem valor padrão.

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
---

<!-- Analogia Excel para constraints -->

# Por que o Excel não tem isso?

**Discussão rápida — 3 min**

- No Excel, o que impede alguém de deixar uma célula vazia que não deveria?
- O que acontece se duas linhas tiverem o mesmo "CPF" numa planilha?
- Como você saberia que um email está duplicado em 10.000 linhas?

> **Constraints são a diferença entre "planilha caótica" e "banco de dados confiável"**

---
layout: default
card: true
bgPreset: palette
---

<!-- DML UPDATE — conceito + sintaxe + perigo -->

# DML — UPDATE: editar o que já existe

```sql
-- Sintaxe
UPDATE nome_tabela
SET coluna1 = novo_valor, coluna2 = outro_valor
WHERE condicao;
```

```sql
-- Exemplo: corrigir a acurácia do modelo GPT-mini
UPDATE modelo_ia
SET acuracia = 0.94
WHERE nome = 'GPT-mini';
```

> ⚠️ **PERIGO — nunca esqueça o `WHERE`:**
>
> ```sql
> UPDATE modelo_ia SET acuracia = 0.94;
> -- ☠️ Atualiza TODOS os registros!
> ```

---
layout: default
card: true
bgPreset: palette
---

<!-- Exercício UPDATE -->

# Exercício — UPDATE

Dada a tabela `produto`:

| id | nome | preco | estoque |
|---|---|---|---|
| 1 | Teclado | 120.00 | 10 |
| 2 | Mouse | 75.00 | 25 |
| 3 | Monitor | 850.00 | 3 |

**Escreva o UPDATE para:**
1. Alterar o preço do Mouse para `89.90`
2. Zerar o estoque do Monitor

<v-click>

```sql
UPDATE produto SET preco = 89.90 WHERE id = 2;
UPDATE produto SET estoque = 0 WHERE id = 3;
```

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- DML DELETE — sintaxe e perigo -->

# DML — DELETE: remover registros

```sql
-- Deletar um registro específico
DELETE FROM modelo_ia WHERE id = 5;

-- Deletar com condição
DELETE FROM modelo_ia WHERE ativo = FALSE;
```

> ⚠️ **Mesma armadilha do UPDATE — sem `WHERE` apaga TUDO:**
>
> ```sql
> DELETE FROM modelo_ia;  -- ☠️ tabela vazia!
> ```

---
layout: default
card: true
bgPreset: palette
---

<!-- DELETE vs TRUNCATE vs DROP -->

# DELETE, TRUNCATE e DROP — qual usar?

**Três formas de "limpar" uma tabela:**

| Comando | O que faz | Recuperável? |
|---|---|---|
| `DELETE FROM t` | Remove todos os registros | Sim (com transação) |
| `TRUNCATE TABLE t` | Apaga tudo mais rápido, reseta IDs | Não |
| `DROP TABLE t` | Apaga a tabela inteira (estrutura + dados) | Não |

> Regra prática: use `DELETE` com `WHERE` no dia a dia. `TRUNCATE` para resetar dados de teste. `DROP` só se quiser apagar a tabela para sempre.

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- Exercício DELETE -->

# Exercício — DELETE

Ainda com a tabela `produto`:

| id | nome | preco | estoque |
|---|---|---|---|
| 1 | Teclado | 120.00 | 10 |
| 2 | Mouse | 89.90 | 25 |
| 3 | Monitor | 850.00 | 0 |

::right::

**Escreva o SQL para:**
1. Remover todos os produtos com estoque `= 0`
2. Remover o produto de id `1`

<v-click>

```sql
DELETE FROM produto WHERE estoque = 0;
DELETE FROM produto WHERE id = 1;
```

</v-click>

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- DQL SELECT aprofundado: LIMIT, DISTINCT, AS -->

# DQL — SELECT++

```sql
-- LIMIT: limitar número de linhas retornadas
SELECT * FROM modelo_ia ORDER BY acuracia DESC LIMIT 3;

-- DISTINCT: eliminar duplicatas
SELECT DISTINCT categoria FROM produto;
```

::right::

```sql
-- AS: renomear coluna no resultado (alias)
SELECT nome AS modelo, acuracia AS score
FROM modelo_ia
WHERE ativo = TRUE;
```

> **Por que LIMIT importa em IA?** — Tabelas de log de treino podem ter **milhões** de linhas. `LIMIT` evita travar o sistema.

---
layout: default
card: true
bgPreset: palette
---

<!-- Exercício SELECT++ -->

# Exercício — SELECT Avançado

Tabela `modelo_ia` com colunas: `id`, `nome`, `acuracia`, `ativo`

**Escreva o SQL para:**
1. Os 2 modelos com maior acurácia (usar `LIMIT`)
2. Apenas os nomes de modelos ativos (usar `WHERE` + `DISTINCT`)
3. Renomear `acuracia` como `score` no resultado

<v-click>

```sql
-- 1
SELECT * FROM modelo_ia ORDER BY acuracia DESC LIMIT 2;

-- 2
SELECT DISTINCT nome FROM modelo_ia WHERE ativo = TRUE;

-- 3
SELECT nome, acuracia AS score FROM modelo_ia;
```

</v-click>

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- Mapa final dos 4 Ds na prática -->

# Os 4 Ds — Mapa Completo na Prática

```sql
-- DDL: estrutura
CREATE TABLE modelo_ia (...);
ALTER TABLE modelo_ia ADD COLUMN versao VARCHAR(10);
DROP TABLE modelo_ia;

-- DML: dados
INSERT INTO modelo_ia VALUES (1, 'GPT-mini', 0.91, TRUE);
UPDATE modelo_ia SET acuracia = 0.94 WHERE id = 1;
DELETE FROM modelo_ia WHERE ativo = FALSE;
```

::right::

```sql
-- DQL: consulta
SELECT nome, acuracia AS score
FROM modelo_ia
WHERE ativo = TRUE
ORDER BY acuracia DESC
LIMIT 5;

-- DCL: permissões (ver em T2)
GRANT SELECT ON modelo_ia TO analista;
REVOKE DELETE ON modelo_ia FROM estagiario;
```

---
layout: default
card: true
bgPreset: animate
---

<!-- fechamento bloco BD -->

# Síntese — Aula 10 · Banco de Dados

- **DDL** → `CREATE` `ALTER` `DROP` — você controla a **estrutura**
- **DML** → `INSERT` `UPDATE` `DELETE` — você controla os **dados**
- **DQL** → `SELECT` com `LIMIT`, `DISTINCT`, `AS` — você **consulta** com precisão
- **DCL** → `GRANT` `REVOKE` — você controla o **acesso** *(T2)*
- **Constraints** → `PRIMARY KEY` · `NOT NULL` · `UNIQUE` · `DEFAULT`

> **Próxima aula:** relacionamentos entre tabelas — chave estrangeira (FK) e `JOIN`

---
layout: end
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
bgPreset: animate
---
