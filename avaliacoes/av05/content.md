# Av.05 - SQL+Python: Banco na Prática

**Tipo:** AS - Atividade em Sala · **Em dupla** · **Entrega: link do Colab**

**UCs:** UC08 Banco de Dados · UC05 Python · UC03 Fundamentos Matemáticos

**Data:** 07/05/2026 - durante a aula A20 (UC05 3HA)

---

Você já sabe criar tabelas no SQL e escrever scripts em Python. Agora vamos unir os dois: criar um banco de dados em SQLite, inserir 100 registros com um loop, consultar no terminal, alterar um dado e calcular estatísticas com Python puro.

Neste projeto, você e sua dupla vão construir um **registro de alunos e notas** do zero.

---

## Fase 1 - Conectar e Criar as Tabelas

```python
# Dupla: Nome1 e Nome2
# SQLite: SGBD embutido no Python, sem instalacao.

import sqlite3
import random

conn = sqlite3.connect('escola.db')
cursor = conn.cursor()
```

Crie duas tabelas usando `DROP TABLE IF EXISTS` antes de `CREATE TABLE IF NOT EXISTS`. A dupla decide os nomes dos campos.

> Dica: uma tabela guarda os alunos, a outra guarda as notas. Pense em quais campos cada uma precisa.

---

## Fase 2 - Inserir 100 Alunos com For

Use um `for` loop para inserir 100 alunos com notas aleatórias. Consulte o slide de referência do `random`.

```python
for i in range(1, 101):
    nome = f"Aluno {i}"
    nota = round(random.uniform(0, 10), 1)
    # insira na tabela de alunos
    # insira na tabela de notas

conn.commit()
```

Depois do loop, mostre os primeiros registros no terminal com `cursor.fetchall()`.

---

## Fase 3 - Alterar e Mostrar de Novo

Atualize a turma de um aluno com `UPDATE ... WHERE`. Depois mostre a tabela de alunos completa com `SELECT` para confirmar a mudança.

---

## Fase 4 - Estatísticas com Python Puro

```python
cursor.execute("SELECT valor FROM nota")
notas = [row[0] for row in cursor.fetchall()]

media = sum(notas) / len(notas)
maior = max(notas)
menor = min(notas)

print(f"Media: {media:.2f}")
print(f"Maior: {maior} | Menor: {menor}")

if media >= 6:
    print("Turma aprovada!")
else:
    print("Turma precisa de reforco.")

conn.close()
```

---

## Fase Bonus - se der tempo

Importe `pandas` e carregue a tabela de notas com `pd.read_sql_query()`. Calcule a media com `.mean()` e compare com o resultado da Fase 4.

---

## Como entregar

1. Renomear o notebook para: `Av05 - Nome1 e Nome2`
2. Salvar no Colab (Ctrl+S)
3. Clicar em **Compartilhar** - "Qualquer pessoa com o link pode ver"
4. Enviar o link pelo WhatsApp da turma

---

## Checklist obrigatório

- [ ] Duas tabelas criadas com `DROP TABLE IF EXISTS` + `CREATE TABLE IF NOT EXISTS`
- [ ] 100 alunos inseridos com `for` + `random.uniform()`
- [ ] `SELECT` + `fetchall()` mostrando os registros no terminal
- [ ] `UPDATE` em 1 registro + `SELECT` para confirmar
- [ ] `sum/len/max/min` sobre lista de notas + if/else sobre a média
- [ ] Link do Colab enviado ao professor

## Checklist bonus

- [ ] `pd.read_sql_query()` carregando a tabela de notas
- [ ] `.mean()` calculando a media via Pandas
