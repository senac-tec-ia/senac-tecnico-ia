# Av.05 — SQL+Python: Banco na Prática

**Tipo:** AS — Atividade em Sala · **Em dupla** · **Entrega: git push**

**UCs:** UC08 Banco de Dados · UC05 Python · UC03 Fundamentos Matemáticos

**Data:** 07/05/2026 — durante a aula A20 (UC05 3HA)

---

Você já sabe criar tabelas no SQL e escrever scripts em Python. Agora vamos unir os dois: criar um banco de dados diretamente no Python com SQLite, inserir dados, consultar no terminal, alterar um registro, consultar de novo, e analisar com Pandas.

Neste projeto, você e sua dupla vão construir um **registro de alunos e notas** em SQLite.

---

## Fase 1 — Conectar e Criar as Tabelas

```python
# Dupla: Nome1 e Nome2
# SQLite foi escolhido porque é um SGBD embutido — não precisa de instalação.
# Funciona como um arquivo .db salvo na pasta do projeto.

import sqlite3
import pandas as pd

conn = sqlite3.connect('escola.db')
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS aluno (
        id INTEGER PRIMARY KEY,
        nome TEXT NOT NULL,
        turma TEXT
    )
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS nota (
        id INTEGER PRIMARY KEY,
        aluno_id INTEGER,
        disciplina TEXT,
        valor REAL
    )
''')

conn.commit()
print("Tabelas criadas!")
```

**O que você fez:** escolheu o SQLite como SGBD e criou a estrutura física do banco com duas tabelas.

---

## Fase 2 — Inserir e Mostrar

Insira pelo menos **3 alunos** e **3 notas** (uma por aluno). Use dados inventados pela dupla.

```python
cursor.execute("INSERT INTO aluno VALUES (1, 'Ana', 'IA-T1')")
cursor.execute("INSERT INTO aluno VALUES (2, 'Bruno', 'IA-T1')")
cursor.execute("INSERT INTO aluno VALUES (3, 'Carla', 'IA-T1')")

cursor.execute("INSERT INTO nota VALUES (1, 1, 'Python', 8.5)")
cursor.execute("INSERT INTO nota VALUES (2, 2, 'Python', 6.0)")
cursor.execute("INSERT INTO nota VALUES (3, 3, 'Python', 9.2)")
conn.commit()

print("\n--- ANTES da alteração ---")
cursor.execute("SELECT * FROM aluno")
for linha in cursor.fetchall():
    print(linha)
```

---

## Fase 3 — Alterar e Mostrar de Novo

Altere a turma de um aluno com `UPDATE`. Depois mostre a tabela completa de novo.

```python
cursor.execute("UPDATE aluno SET turma = 'IA-T2' WHERE id = 2")
conn.commit()

print("\n--- DEPOIS da alteração ---")
cursor.execute("SELECT * FROM aluno")
for linha in cursor.fetchall():
    print(linha)
```

---

## Fase 4 — Pandas e Análise

```python
df = pd.read_sql_query("SELECT * FROM nota", conn)

print("\n--- Tabela de notas ---")
print(df)

media = df['valor'].mean()
maxima = df['valor'].max()
minima = df['valor'].min()

print(f"\nMédia: {media:.2f}")
print(f"Maior nota: {maxima}")
print(f"Menor nota: {minima}")

if media >= 7:
    print("Turma acima da média!")
else:
    print("Turma precisa de reforço.")

conn.close()
```

---

## Como entregar

1. Salve como `av05_banco.py` na pasta `SENAC-TecIA/Av05/`
2. Comentário no topo: `# Dupla: Nome1 e Nome2` + por que o SQLite foi escolhido
3. `git push` até o final da aula
4. Envie o link do repositório ao professor

---

## Checklist

- [ ] Comentário no topo com a dupla + justificativa do SQLite
- [ ] Duas tabelas criadas com `CREATE TABLE` (tipos e `PRIMARY KEY` corretos)
- [ ] Pelo menos 3 alunos e 3 notas inseridos
- [ ] `SELECT` antes e `SELECT` depois do `UPDATE` (mostrar a diferença)
- [ ] `pd.read_sql_query()` + `.mean()` + `.max()` + `.min()`
- [ ] `if/else` interpretando a média
- [ ] `git push` feito
