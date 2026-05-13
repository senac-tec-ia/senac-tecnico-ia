# Av.05 — SQL+Python: Banco na Prática

**Tipo:** AS — Atividade em Sala · **Em dupla** · **Entrega: link do Colab**

**UCs:** UC08 Banco de Dados · UC05 Python · UC03 Fundamentos Matemáticos

**Data:** 07/05/2026 — durante a aula (UC08 + UC05)

---

Voce ja sabe criar tabelas no SQL e escrever scripts em Python. Agora vamos unir os dois: criar um banco de dados em SQLite, relacionar duas tabelas com chave estrangeira, inserir 100 registros com um loop, consultar com JOIN, alterar um dado e calcular estatisticas com Python puro.

Neste projeto, voce e sua dupla vao construir um **registro de alunos e notas** do zero.

---

## Fase 1 — Conectar e Criar as Tabelas

```python
# Dupla: Nome1 e Nome2
# SQLite: SGBD embutido no Python, sem instalacao, arquivo local.

import sqlite3
import random

conn = sqlite3.connect('escola.db')
cursor = conn.cursor()

cursor.execute("DROP TABLE IF EXISTS notas")
cursor.execute("DROP TABLE IF EXISTS alunos")

cursor.execute("""
    CREATE TABLE alunos (
        id      INTEGER PRIMARY KEY,
        nome    [TIPO DO DADO SQLITE] [CONSTRAINTS REGRA],
        turma   [TIPO DO DADO SQLITE] [CONSTRAINTS REGRA]
    )
""")

cursor.execute("""
    CREATE TABLE notas (
        id        [TIPO DO DADO SQLITE] [CONSTRAINTS REGRA],
        aluno_id  [TIPO DO DADO SQLITE] [CONSTRAINTS REGRA],
        materia   [TIPO DO DADO SQLITE] [CONSTRAINTS REGRA],
        avaliacao [TIPO DO DADO SQLITE] [CONSTRAINTS REGRA],
        valor     [TIPO DO DADO SQLITE] [CONSTRAINTS REGRA],
        FOREIGN KEY (aluno_id) REFERENCES alunos(id)
    )
""")

"""substitua [TIPO DO DADO SQLITE] por INTEGER, TEXT ou REAL (decimal no sqlite)
   substitua [CONSTRAINTS REGRA] por NOT NULL, PRIMARY KEY, AUTOINCREMENT conforme cada campo
   referencia: https://www.w3schools.com/sql/sql_datatypes.asp"""

conn.commit()
```

> **Por que a chave estrangeira fica em `notas.aluno_id` e nao em `alunos`?**
>
> Um aluno pode ter **muitas** notas, mas cada nota pertence a **um** aluno.
> Isso e uma relacao 1:N — um para muitos.
>
> Em relacoes 1:N, a chave estrangeira sempre fica no lado **muitos** (tabela `notas`).
>
> Se guardassemos `nota_ids` dentro de `alunos`, cada aluno precisaria de uma lista de IDs.
> SQL nao funciona assim: cada celula guarda um unico valor.
> Uma lista quebraria a estrutura basica do banco relacional.
>
> **Regra pratica: quem depende de quem guarda o ID.**
> A nota depende do aluno → `notas` guarda `aluno_id`.

---

## Fase 2 — Inserir 100 Alunos e Notas com For

```python
materias = ["Matematica", "Python", "Banco de Dados", "Ingles"]

for i in range(1, 101):
    nome  = f"Aluno {i:03d}"
    turma = "TecIA-2026"
    cursor.execute("INSERT INTO alunos ([COLUNAS]) VALUES (?, ?)", ([VALORES_TUPLA]))

    aluno_id = cursor.lastrowid              # id do aluno recem inserido — nao altere essa linha
    materia  = random.choice([LISTA])        # escolhe um item aleatorio da lista
    valor    = round(random.uniform([MIN], [MAX]), 1)
    cursor.execute(
        "INSERT INTO notas ([COLUNAS]) VALUES (?, ?, ?, ?)",
        ([VALORES_TUPLA])
    )

conn.commit()
```

```
# dica: cursor.execute recebe a query com ? como placeholder e uma tupla com os valores na ordem
# dica: random.choice(lista) sorteia um item | random.uniform(a, b) gera um decimal entre a e b
# referencia random: https://docs.python.org/3/library/random.html
# referencia sqlite3: https://docs.python.org/3/library/sqlite3.html
```

Depois do loop, mostre os primeiros 5 registros de `alunos` no terminal com `cursor.fetchmany(5)`.

---

## Fase 3 — Consultar com JOIN

Agora una as duas tabelas para ver o nome do aluno junto com a nota dele.

```python
cursor.execute("""
    SELECT [TABELA].[COLUNA], [TABELA].[COLUNA], [TABELA].[COLUNA]
    FROM [TABELA_PRINCIPAL]
    JOIN [OUTRA_TABELA] ON [CHAVE_ESTRANGEIRA] = [CHAVE_PRIMARIA]
    LIMIT 10
""")

resultados = cursor.fetchall()
for linha in resultados:
    print(linha)
```

```
# dica: no JOIN voce escreve tabela.coluna para especificar de qual tabela cada coluna vem
# dica: ON liga a chave estrangeira de uma tabela com a primaria da outra
# referencia: https://www.w3schools.com/sql/sql_join.asp
```

> O `JOIN` funciona porque `notas.aluno_id` aponta para `alunos.id`.
> Sem a `FOREIGN KEY`, o banco aceitaria qualquer numero como `aluno_id`.
> Com ela, garante que cada nota pertence a um aluno que existe de verdade.

Depois do JOIN, atualize um campo de um registro com `UPDATE ... SET ... WHERE` e confirme com um `SELECT`.

```python
cursor.execute("""
    UPDATE [TABELA]
    SET [COLUNA] = [NOVO_VALOR]
    WHERE [COLUNA] = [CONDICAO]
""")
conn.commit()

cursor.execute("SELECT [COLUNAS] FROM [TABELA] WHERE [CONDICAO]")
print(cursor.fetchall())
```

```
# dica: UPDATE altera linhas existentes | SET define o novo valor | WHERE filtra qual linha
# referencia: https://www.w3schools.com/sql/sql_update.asp
```

---

## Fase 4 — Estatísticas com Python Puro

```python
cursor.execute("SELECT [COLUNA_NUMERICA] FROM [TABELA]")
notas = [row[0] for row in cursor.fetchall()]   # transforma o resultado numa lista de numeros

media = [FUNCAO_SOMA](notas) / [FUNCAO_TAMANHO](notas)
maior = [FUNCAO_MAX](notas)
menor = [FUNCAO_MIN](notas)

print(f"Media:  {media:.2f}")
print(f"Maior:  {maior} | Menor: {menor}")

if [CONDICAO_APROVACAO]:
    print("Turma aprovada!")
else:
    print("Turma precisa de reforco.")

conn.close()
```

```
# dica: Python tem funcoes built-in para isso — nao precisa importar nada
# funcoes disponiveis: sum(), len(), max(), min()
# referencia: https://docs.python.org/3/library/functions.html
```

---

## Fase Bonus — se der tempo

```python
import pandas as pd

conn = sqlite3.connect('escola.db')
df = pd.read_sql_query(
    """[QUERY SQL COM JOIN — adapte a consulta da Fase 3]""",
    conn
)
conn.close()

print(df.head())
print(f"Media Pandas: {df['[NOME_DA_COLUNA]'].mean():.2f}")
```

```
# dica: pd.read_sql_query recebe uma query SQL e uma conexao aberta, e retorna um DataFrame
# dica: df['coluna'].mean() calcula a media de uma coluna numerica
# referencia: https://pandas.pydata.org/docs/reference/api/pandas.read_sql_query.html
```

---

## Como entregar

1. Renomear o notebook: `Av05 - Nome1 e Nome2`
2. Salvar no Colab (Ctrl+S)
3. Compartilhar → "Qualquer pessoa com o link pode ver"
4. Enviar o link pelo WhatsApp da turma

---

## Checklist obrigatorio

- [ ] Duas tabelas criadas (`alunos` e `notas`) com tipos e constraints corretos
- [ ] `FOREIGN KEY (aluno_id) REFERENCES alunos(id)` declarada em `notas`
- [ ] 100 registros inseridos com `for` + `random`
- [ ] `JOIN` consultando nome + materia + valor
- [ ] `UPDATE` em 1 registro + `SELECT` para confirmar
- [ ] `sum/len/max/min` + `if/else` sobre a media
- [ ] Link do Colab enviado ao professor

## Checklist bonus

- [ ] `pd.read_sql_query()` com JOIN carregando os dados
- [ ] `.mean()` calculando e comparando com a Fase 4

---

## Recuperação — 14/05/2026

**Quem faz:** alunos com PA ou NA em qualquer indicador desta avaliação.

Versão simplificada com **1 tabela, 10 registros e estatísticas básicas** — sem JOIN, sem FK, sem Pandas.

**Fase 1 — Conectar e criar a tabela**

```python
# Rec05 — Recuperacao
# Nome: _______________

import sqlite3
import random

conn = sqlite3.connect('escola_rec.db')
cursor = conn.cursor()

cursor.execute("DROP TABLE IF EXISTS alunos")

cursor.execute("""
    CREATE TABLE alunos (
        id    [TIPO] [CONSTRAINT],
        nome  [TIPO] [CONSTRAINT],
        nota  [TIPO] [CONSTRAINT]
    )
""")

conn.commit()
```

> Substitua `[TIPO]` por `INTEGER`, `TEXT` ou `REAL` e `[CONSTRAINT]` por `PRIMARY KEY`, `NOT NULL` ou `AUTOINCREMENT` conforme cada campo.

**Fase 2 — Inserir 10 alunos com `for`**

```python
for i in range(1, 11):
    nome = f"Aluno {i:02d}"
    nota = round(random.uniform(4.0, 10.0), 1)
    cursor.execute("INSERT INTO alunos ([COLUNAS]) VALUES (?, ?)", ([VALORES]))

conn.commit()

cursor.execute("SELECT * FROM alunos")
for linha in cursor.fetchall():
    print(linha)
```

**Fase 3 — Estatísticas com Python puro**

```python
cursor.execute("SELECT nota FROM alunos")
notas = [row[0] for row in cursor.fetchall()]

media = [FUNCAO](notas) / [FUNCAO](notas)
maior = [FUNCAO](notas)
menor = [FUNCAO](notas)

print(f"Media: {media:.2f}")
print(f"Maior: {maior} | Menor: {menor}")

if [CONDICAO]:
    print("Turma aprovada!")
else:
    print("Turma precisa de reforco.")

conn.close()
```

> Use as funções built-in do Python: `sum()`, `len()`, `max()`, `min()`.

**Como entregar:**

1. Salve no Colab como `Rec05 - [Seu Nome]`
2. Compartilhe → "Qualquer pessoa com o link pode ver"
3. Envie o link pelo WhatsApp da turma

**Prazo:** 14/05/2026
