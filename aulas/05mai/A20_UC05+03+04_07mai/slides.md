---
# ─────────────────────────────────────────────────────────────────
#  CONFIGURAÇÃO GLOBAL DA AULA
# ─────────────────────────────────────────────────────────────────
theme: ./
colorSchema: dark

title: "Técnico em IA - Aula 20"
author: Leonardo Zanini
github: LeoZanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 20"

aulaDate: "2026-05-07"
unlockHour: 13

bgPreset: palette
# ─────────────────────────────────────────────────────────────────
---

---
layout: cover
bgPreset: palette
---

# Aula 20

*SQL + Python + Pandas: o Projeto Completo*

*Av.05 - Banco na Prática | 07/05/2026*

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno compreende por que IA precisa de banco de dados (UC04 - contextualização motivacional) -->

# Por que IA precisa de banco de dados?

- **Todo modelo de ML começa em uma tabela** - dataset é um banco estruturado
- **Sem banco, sem escala** - 10 linhas no papel funcionam; 10 milhões de registros precisam de SQL
- **Pipeline real de IA:** coleta dados → salva no banco → lê com Python → treina modelo
- **Hoje:** você vai construir o início desse pipeline do zero

> "Dados sem estrutura são ruído. Dados em banco são combustível para IA." (Andrew Ng, 2022)

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno visualiza o mapa das 4 fases da Av.05 antes de começar -->

# O que vamos construir hoje

**4 fases obrigatórias + 1 bônus**

**Fase 1 - Conectar:** criar o banco e abrir conexão com `sqlite3`

**Fase 2 - Inserir:** criar tabelas + 100 alunos com `for` + `random`

**Fase 3 - Alterar:** `UPDATE` em 1 registro + `SELECT` para confirmar

**Fase 4 - Analisar:** Pandas `.mean()` / `.max()` / `.min()` + if/else

**Fase Bonus - Gráfico:** dispersão + reta de tendência com matplotlib

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
---

# PARTE 1 - Pseudocódigo Coletivo
*Caneta e papel - antes de abrir o Colab*

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende o conceito de pseudocódigo como ferramenta de planejamento -->

# O que é pseudocódigo?

- **Pseudocódigo** é escrever a lógica do programa em português simples, antes de virar código real
- Analogia: é a **receita de bolo** antes de ir para a cozinha
- Programador experiente **nunca abre o editor sem planejar**
- Vantagem: você detecta erros de lógica no papel, onde é mais fácil corrigir

**Regra de hoje:** escreva TUDO no papel antes de digitar qualquer linha

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
---

# Regra de ouro: caneta e papel

**Dinâmica: ~35 minutos escrevendo no papel**

- Por que pensar antes de digitar evita retrabalho?
- O que acontece quando você começa a codar sem um plano?
- Como um engenheiro de dados planeja um script de 500 linhas?

> Escreva no papel agora - você vai usar essa folha como guia durante o lab.

---
layout: default
card: true
bgPreset: palette
---

# Pseudocódigo - Passo 1: Conectar ao banco

```
IMPORTAR sqlite3
IMPORTAR pandas como pd

CONECTAR ao arquivo "escola.db"
CRIAR um cursor para executar comandos SQL
```

**O que esse passo faz?**
- Cria o arquivo `escola.db` se ele não existir
- Abre um "canal" para enviar comandos SQL dentro do Python

---
layout: default
card: true
bgPreset: palette
---

# Pseudocódigo - Passo 2: Criar as tabelas

```
CRIAR TABELA 1 SE NÃO EXISTIR:
  - campo de identificação única (inteiro, chave primária)
  - campo de texto obrigatório
  - campo de texto opcional

CRIAR TABELA 2 SE NÃO EXISTIR:
  - campo de identificação única (inteiro, chave primária)
  - campo que liga à Tabela 1
  - campo de texto (nome da disciplina)
  - campo numérico decimal (a nota)

CONFIRMAR as mudanças no banco
```

*Quais campos cada tabela vai ter? A dupla decide os nomes.*

---
layout: default
card: true
bgPreset: palette
---

# Pseudocódigo - Passo 3: Inserir 100 alunos com for

```
PARA cada número de 1 até 100:
  GERAR um nome: "Aluno 1", "Aluno 2", ... "Aluno 100"
  GERAR uma nota aleatória entre 0.0 e 10.0

  INSERIR na Tabela 1: (número, nome, "TurmaA")
  INSERIR na Tabela 2: (número, número, "Python", nota)

CONFIRMAR todas as inserções de uma vez

MOSTRAR os primeiros 5 registros no terminal
```

*Use `import random` e `random.uniform(0, 10)` para as notas*

---
layout: default
card: true
bgPreset: palette
---

# Pseudocódigo - Passos 6-7: Alterar e mostrar de novo

```
ALTERAR a turma do aluno com id = 2
  NOVO VALOR: "TurmaB" (ou o que a dupla preferir)

CONFIRMAR alteração

MOSTRAR todos os alunos de novo
  → para ver que a mudança funcionou
```

---
layout: default
card: true
bgPreset: palette
---

# Pseudocódigo - Passos 8-11: Pandas + Matplotlib

```
CARREGAR a tabela de notas em um DataFrame

CALCULAR: média, maior nota, menor nota
SE a média >= 6: IMPRIMIR mensagem positiva
SENÃO: IMPRIMIR alerta

CRIAR um gráfico de pontos:
  eixo X = número do aluno (id)
  eixo Y = nota

CALCULAR a reta de tendência sobre esses pontos

PLOTAR a reta por cima dos pontos

MOSTRAR o gráfico
FECHAR a conexão com o banco
```

---
layout: default
card: true
bgPreset: palette
---

<!-- [EXERCICIO] -->

# Revisão do pseudocódigo completo

Confira seu papel com o pseudocódigo no quadro:

- [ ] Passo 1: conectar e cursor
- [ ] Passo 2: criar tabelas (aluno + nota)
- [ ] Passos 3-5: inserir 3 alunos + notas, mostrar com SELECT
- [ ] Passos 6-7: UPDATE, mostrar de novo
- [ ] Passos 8-10: Pandas, média/max/min, if/else, fechar conexão

> Corrija seu papel agora - ele vai ser sua cola durante o laboratório.

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
---

# PARTE 2 - Slides de Referência
*Consulte no seu dispositivo quando precisar*

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno copia o padrão sqlite3 de conexão sem erros de sintaxe -->

# Referência: sqlite3 - Conectar e criar cursor

```python {1-2|4-5|7-8|10}
import sqlite3
import pandas as pd

# Conecta ao banco (cria o arquivo se não existir)
conn = sqlite3.connect("escola.db")

# Cursor: canal para enviar comandos SQL
cursor = conn.cursor()

# ... seu código aqui ...

conn.commit()   # salva as mudanças
conn.close()    # fecha a conexão
```

> Sempre termine com `conn.commit()` antes de `conn.close()`.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno usa CREATE TABLE IF NOT EXISTS com tipos e constraints corretos -->

# Referência: SQL DDL - CREATE TABLE

```python
# Se rodar o script de novo: limpe as tabelas antes
cursor.execute("DROP TABLE IF EXISTS nota")
cursor.execute("DROP TABLE IF EXISTS aluno")
conn.commit()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS nome_tabela1 (
        id    INTEGER PRIMARY KEY,
        campo TEXT NOT NULL,
        outro TEXT
    )
""")
cursor.execute("""
    CREATE TABLE IF NOT EXISTS nome_tabela2 (
        id       INTEGER PRIMARY KEY,
        liga_id  INTEGER,
        texto    TEXT,
        numero   REAL
    )
""")
conn.commit()
```

> Drope `nota` antes de `aluno` - sempre na ordem inversa.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno usa INSERT INTO com placeholders ? para evitar SQL injection -->

# Referência: SQL DML - INSERT INTO

```python {1-4|6-11|13}
# Inserir UM registro
cursor.execute(
    "INSERT INTO aluno VALUES (?, ?, ?)",
    (1, "Maria Silva", "TurmaA")
)

# Inserir VÁRIOS de uma vez
alunos = [
    (2, "João Souza",  "TurmaA"),
    (3, "Ana Lima",    "TurmaB"),
]
cursor.executemany("INSERT INTO aluno VALUES (?, ?, ?)", alunos)

conn.commit()
```

> Use sempre `?` como placeholder - nunca concatene strings com f-string no SQL.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno usa SELECT e UPDATE com WHERE corretamente -->

# Referência: SQL DQL/DML - SELECT e UPDATE

```python
# Mostrar todos os alunos
cursor.execute("SELECT * FROM aluno")
for linha in cursor.fetchall():
    print(linha)

# Alterar turma do aluno id=2
cursor.execute(
    "UPDATE aluno SET turma = ? WHERE id = ?",
    ("TurmaB", 2)
)
conn.commit()

# Mostrar de novo para confirmar
cursor.execute("SELECT * FROM aluno")
for linha in cursor.fetchall():
    print(linha)
```

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno usa o padrão for + fetchall() sem ter visto loops formalmente - padrão completo e copiável -->

# Referência: for loop sobre fetchall()

**Padrão completo - copie exatamente assim:**

```python
cursor.execute("SELECT * FROM aluno")
resultados = cursor.fetchall()

for linha in resultados:
    print(linha)
```

**O que cada parte faz:**
- `cursor.fetchall()` - pega todos os registros como lista de tuplas
- `for linha in resultados:` - passa por cada registro um a um
- `print(linha)` - imprime cada registro no terminal

> Exemplo de saída: `(1, 'Maria Silva', 'TurmaA')`

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno carrega tabela SQL no Pandas sem ter visto Pandas antes - padrão completo e copiável -->

# Referência: Pandas com SQLite

**Padrão completo - copie exatamente assim:**

```python
import pandas as pd

# Carrega a tabela 'nota' inteira em um DataFrame
df_notas = pd.read_sql_query("SELECT * FROM nota", conn)

# Ver as primeiras linhas
print(df_notas)

# Ver só a coluna 'valor'
print(df_notas["valor"])
```

**O que é um DataFrame?**
- Uma tabela do Python - linhas e colunas, como Excel
- `pd.read_sql_query(...)` roda o SQL e devolve o resultado como DataFrame
- Você **não precisa** de `cursor.execute()` aqui - o Pandas faz tudo por dentro

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno usa .mean(), .max(), .min() e if/else sobre a média - padrão completo e copiável -->

# Referência: Pandas - média, max, min

**Padrão completo - copie exatamente assim:**

```python {1-5|7-11|13-17}
# Calcular estatísticas da coluna "valor"
media = df_notas["valor"].mean()
maior = df_notas["valor"].max()
menor = df_notas["valor"].min()

# Mostrar os resultados com f-string
print(f"Média das notas: {media:.2f}")
print(f"Maior nota:      {maior}")
print(f"Menor nota:      {menor}")

# Decisão com if/else
if media >= 6:
    print("Turma aprovada!")
else:
    print("Turma precisa de reforço.")
```

> `.mean()` - média aritmética | `.max()` - maior valor | `.min()` - menor valor

---
layout: default
card: true
bgPreset: palette
---

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno gera dados com for + random sem ter o código pronto -->

# Referência: for loop + random

```python
import random

for i in range(1, 101):
    nome = f"Aluno {i}"
    nota = round(random.uniform(0, 10), 1)

    cursor.execute(
        "INSERT INTO aluno VALUES (?, ?, ?)",
        (i, nome, "TurmaA")
    )
    cursor.execute(
        "INSERT INTO nota VALUES (?, ?, ?, ?)",
        (i, i, "Python", nota)
    )

conn.commit()
```

> `random.uniform(0, 10)` gera um decimal aleatório entre 0 e 10.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno plota pontos e reta de tendência - padrão completo copiável pois nunca usou matplotlib -->

# Referência: Matplotlib - pontos + reta de tendência

**Padrão completo - copie exatamente assim:**

```python
import matplotlib.pyplot as plt
import numpy as np

x = df_notas["id"]
y = df_notas["valor"]

# Pontos dos alunos
plt.scatter(x, y, color="blue", alpha=0.5, label="Notas")

# Reta de tendência
z = np.polyfit(x, y, 1)
p = np.poly1d(z)
plt.plot(x, p(x), "r--", label="Tendência")

plt.xlabel("Aluno")
plt.ylabel("Nota")
plt.title("Notas da Turma - Python")
plt.legend()
plt.show()
```

---
layout: default
card: true
bgPreset: palette
---
<!-- [ATIV AVALIATIVA] -->

# Checklist da Av.05

**Obrigatório - antes de entregar:**

- [ ] Duas tabelas criadas com `CREATE TABLE IF NOT EXISTS`
- [ ] 100 alunos inseridos com `for` + `random.uniform()`
- [ ] `SELECT` mostrando os primeiros registros
- [ ] `UPDATE` em 1 registro + `SELECT` para confirmar
- [ ] Pandas: `.mean()` / `.max()` / `.min()` + if/else

**Bonus - se der tempo:**

- [ ] Gráfico de dispersão + reta de tendência com matplotlib

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
---

# PARTE 3 - Laboratório
*Mão na massa - abram o Colab!*

---
layout: default
card: true
bgPreset: palette
---

<!-- [ATIV AVALIATIVA] -->

# Mão na massa - Abram o Colab!

**Setup - faça agora antes de começar:**

1. Abrir `colab.research.google.com`
2. Criar novo notebook
3. Renomear para: `Av05 - Nome1 e Nome2`
4. Primeira célula:

```python
# Av.05 - Banco na Pratica
# Dupla: Nome1 e Nome2
# Data: 07/05/2026
```

5. Os **slides de referência** ficam projetados - use como cola
6. **Sem IA** para gerar o código

> Travou? Levanta a mão. Nao fica parado olhando pra tela.

---
layout: default
card: true
bgPreset: palette
---

<!-- [ATIV AVALIATIVA] -->

# Em que fase você está?

**Acompanhe seu progresso durante o lab:**

**Fase 1 - Conectar** - banco criado + `cursor` funcionando

**Fase 2 - Inserir** - tabelas + 100 alunos via `for` + `SELECT` mostrando os primeiros

**Fase 3 - Alterar** - `UPDATE` executado + `SELECT` confirmando mudança

**Fase 4 - Analisar** - Pandas + media/max/min + if/else imprimindo resultado

**Fase Bonus - Grafico** - dispersão + reta de tendência plotadas

> Terminou a Fase 4? Vai pro bônus ou ajuda o colega ao lado.

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
---

# PARTE 4 - Entrega e Encerramento

---
layout: default
card: true
bgPreset: palette
---

<!-- [ATIV AVALIATIVA] -->

# Como entregar: link do Colab

**3 passos - faça agora:**

**1. Salvar o notebook**
- No Colab: `Arquivo → Salvar` (ou Ctrl+S)
- Confirme que o nome do notebook tem o nome da dupla

**2. Compartilhar o link**
- Botão **Compartilhar** (canto superior direito)
- Trocar para: "Qualquer pessoa com o link pode ver"
- Copiar o link

**3. Enviar ao professor**
- Mande o link pelo WhatsApp da turma
- Formato: `Av05 - Nome1 e Nome2: [link]`

---
layout: default
card: true
bgPreset: palette
---

<!-- [DEBATE] - Exit Ticket -->

# Exit Ticket - Antes de sair, me conta

**Cada dupla responde em voz alta ou no papel:**

**1. O que você fez hoje?**
- Descreva em 1 frase o que seu script faz

**2. O que ainda está travado?**
- Qual parte não funcionou? Qual erro apareceu?
- Não terminou? Em que fase parou?

> Professor coleta o feedback agora - isso vai definir o início da próxima aula.

---
layout: default
card: true
bgPreset: palette
---

<!-- [TAREFA DE CASA] -->

# Tarefa de Casa - Aula 20

**Se não terminou em aula:**

- [ ] Finalizar `av05_banco.py` com as 4 fases completas
- [ ] Fazer o `git push` e enviar o link

**Se terminou:**

- [ ] Reler o pseudocódigo escrito no papel
- [ ] Adicionar comentários em **cada bloco** do script explicando o que faz
- [ ] (Desafio) Inserir uma segunda disciplina na tabela `nota` e calcular a média por disciplina separadamente

**Entrega:** antes da A21 | Arquivo: `SENAC-TecIA/Av05/av05_banco.py`

---
layout: end
bgPreset: palette
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
---

# Até a A21!

**Hoje:** SQL + Python + Pandas integrados em um projeto real

**Na A21:** revisão das entregas da Av.05 + próximos passos em Python - loops `for` com `range()` e listas

*Você acabou de construir o início de um pipeline real de IA.*
