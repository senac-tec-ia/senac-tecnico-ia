# Av.06 — Projeto Integrado: SQL + Python + Pandas + Matplotlib

**Tipo:** MP — Mini Projeto · **Em dupla** · **Entrega: git push + relatório PDF**

**UCs:** UC05 Python · UC08 Banco de Dados · UC09 Estatística Aplicada · UC03 Matemática

**Data:** 08/05/2026 — dia inteiro (A21 — UC08 3HA + UC09 3HA)

---

Você e sua dupla vão criar um sistema completo que conecta **banco de dados**, **Python** e **gráficos**. É o tipo de coisa que um analista de dados faz no dia a dia.

O tema é livre: notas de alunos, placar de jogos, vendas de uma loja, consumo de energia — o que a dupla preferir, desde que os dados façam sentido juntos.

---

## Parte 1 — Banco de Dados com FK e JOIN

Crie um arquivo `banco.db` (SQLite) com **pelo menos 2 tabelas relacionadas** por chave estrangeira.

**Exemplo (tema livre — jogos):**

```sql
CREATE TABLE times (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    cidade TEXT
);

CREATE TABLE partidas (
    id INTEGER PRIMARY KEY,
    time_id INTEGER,
    adversario TEXT,
    gols_marcados INTEGER,
    gols_sofridos INTEGER,
    FOREIGN KEY (time_id) REFERENCES times(id)
);
```

Insira pelo menos **8 registros no total**. Faça uma consulta com JOIN:

```sql
SELECT times.nome, partidas.adversario, partidas.gols_marcados
FROM partidas
JOIN times ON partidas.time_id = times.id;
```

Salve o script SQL como `av06_banco.sql`.

---

## Parte 2 — Python + Pandas + NumPy

No arquivo `av06_analise.py`:

```python
import sqlite3
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

conn = sqlite3.connect("banco.db")
df = pd.read_sql("SELECT ... FROM ... JOIN ...", conn)
conn.close()

print(df)
print(df.describe())
```

Calcule pelo menos **3 das 4 funções** abaixo com NumPy:

| Função | Exemplo |
|---|---|
| **Linear** y = ax + b | Tendência de crescimento |
| **Exponencial** | Crescimento acelerado |
| **Logarítmica** | Saturação, rendimento decrescente |
| **Polinomial** | Ponto ótimo, parábola |

---

## Parte 3 — Gráfico com Matplotlib

Gere 1 gráfico com:
- Título
- Rótulos nos eixos x e y
- Legenda (se tiver mais de uma linha)

Salve como `av06_grafico.png`.

---

## Parte 4 — Relatório (1 página, PDF)

No Word, salvo como PDF, inclua:

1. Título + nomes da dupla
2. O que são os dados (tema escolhido)
3. O que o gráfico mostra (3–4 linhas)
4. Qual função matemática usaram e o que ela revelou
5. Imagem do gráfico colada no documento

Não precisa de ABNT completo — só organização básica.

---

## Entregaveis

| Arquivo | O que é |
|---|---|
| `av06_banco.sql` | Script SQL com CREATE + INSERT + JOIN |
| `banco.db` | Arquivo SQLite com os dados |
| `av06_analise.py` | Script Python completo |
| `av06_grafico.png` | Gráfico gerado |
| `av06_relatorio.pdf` | Relatório de 1 página |

Todos dentro de `SENAC-TecIA/Av06/` no GitHub.

---

## Como entregar

```bash
git add .
git commit -m "Av06 — [Nomes da dupla]"
git push origin main
```

Envie o link do repositório ao professor.

---

## Checklist

- [ ] 2 tabelas com FK criadas no banco
- [ ] 8+ registros inseridos
- [ ] JOIN funcionando
- [ ] `pd.read_sql()` carregando os dados
- [ ] 3+ funções matemáticas com NumPy
- [ ] Gráfico com título e eixos
- [ ] Relatório PDF com o gráfico
- [ ] Git push feito
