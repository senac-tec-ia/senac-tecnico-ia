# Av.05 - SQL+Python: Banco na Prática

**Tipo:** AS - Atividade em Sala · **Em dupla** · **Entrega: git push**

**UCs:** UC08 Banco de Dados · UC05 Python · UC03 Fundamentos Matemáticos

**Data:** 07/05/2026 - durante a aula A20 (UC05 3HA)

---

Você já sabe criar tabelas no SQL e escrever scripts em Python. Agora vamos unir os dois: criar um banco de dados em SQLite, inserir 100 registros com um loop, consultar no terminal, alterar um dado, e analisar com Pandas e Matplotlib.

Neste projeto, você e sua dupla vão construir um **registro de alunos e notas** do zero.

---

## Fase 1 - Conectar e Criar as Tabelas

```python
# Dupla: Nome1 e Nome2
# SQLite: SGBD embutido no Python, sem instalacao.

import sqlite3
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import random

conn = sqlite3.connect('escola.db')
cursor = conn.cursor()
```

Crie duas tabelas usando `CREATE TABLE IF NOT EXISTS`. A dupla decide os nomes dos campos - consulte os slides de referência para ver quais tipos de dados usar e quais constraints aplicar.

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

Depois do loop, mostre os primeiros 5 registros no terminal com `SELECT`.

---

## Fase 3 - Alterar e Mostrar de Novo

Atualize a turma de um aluno com `UPDATE ... WHERE`. Depois mostre a tabela de alunos completa com `SELECT` para confirmar a mudança.

---

## Fase 4 - Pandas e Estatísticas

```python
df_notas = pd.read_sql_query("SELECT * FROM nota", conn)

media = df_notas["valor"].mean()
maior = df_notas["valor"].max()
menor = df_notas["valor"].min()

print(f"Media: {media:.2f}")
print(f"Maior: {maior} | Menor: {menor}")

if media >= 6:
    print("Turma aprovada!")
else:
    print("Turma precisa de reforco.")
```

---

## Fase 5 - Grafico com Matplotlib

Plote as notas dos 100 alunos como pontos e adicione uma reta de tendência. Consulte o slide de referência do matplotlib.

O gráfico deve ter:
- Eixo X: número do aluno
- Eixo Y: nota
- Pontos azuis para cada aluno
- Reta vermelha tracejada mostrando a tendência
- Título e legendas

---

## Fase Bonus - se der tempo

Plote as notas dos 100 alunos como dispersão e adicione uma reta de tendência. Consulte o slide de referência do matplotlib. O gráfico deve ter pontos azuis, reta vermelha tracejada, eixos com label e título.

---

## Como entregar

1. Renomear o notebook para: `Av05 - Nome1 e Nome2`
2. Salvar no Colab (Ctrl+S)
3. Clicar em **Compartilhar** - "Qualquer pessoa com o link pode ver"
4. Enviar o link pelo WhatsApp da turma

---

## Checklist obrigatório

- [ ] Duas tabelas criadas com `CREATE TABLE IF NOT EXISTS`
- [ ] 100 alunos inseridos com `for` + `random.uniform()`
- [ ] `SELECT` mostrando os primeiros registros no terminal
- [ ] `UPDATE` em 1 registro + `SELECT` para confirmar
- [ ] Pandas: `.mean()` / `.max()` / `.min()` + if/else sobre a média
- [ ] Link do Colab enviado ao professor

## Checklist bonus

- [ ] Gráfico de dispersão com 100 pontos
- [ ] Reta de tendência com `np.polyfit`
