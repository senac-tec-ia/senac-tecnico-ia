---
theme: ../../../neural-slides-template
colorSchema: dark
title: "Técnico em IA - Aula 20"
author: Leonardo Zanini
github: LeoZanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 20"
aulaDate: "2026-05-07"
unlockHour: 13
bgPreset: palette
layout: cover
---

# Aula 20

## SQL + Python: o Projeto Completo
## Av.05 - Banco na Prática | 07/05/2026

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

**Fase 1 — Conectar e Criar:** banco SQLite + duas tabelas com `FOREIGN KEY`

**Fase 2 — Inserir:** 100 alunos com `for` + `random` + mostrar os 5 primeiros

**Fase 3 — Consultar e Alterar:** `JOIN` unindo as tabelas + `UPDATE` em 1 registro

**Fase 4 — Analisar:** `sum/len/max/min` + `if/else` sobre a média

**Fase Bonus:** `pd.read_sql_query()` com JOIN + `.mean()` no Pandas

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

**Regra de hoje:** escreva TUDO no papel antes de digitar qualquer linha E NÃO VAMOS SER GENÉRICOS IGUAL A ÚLTIMA VEZ

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
---

# Caneta e papel

**Dinâmica: ~35 minutos escrevendo no papel**

- Por que pensar antes de digitar evita retrabalho?
- O que acontece quando você começa a codar sem um plano?
- Como um engenheiro de dados planeja um script de 500 linhas?

>Escreva no papel agora - você vai usar essa folha como guia durante o lab.

---
layout: default
card: true
bgPreset: palette
pulse: true
---

# Problema

Um professor precisa organizar as **notas de seus alunos**, mas não sabe usar Excel e decidiu utilizar um **programa em Python com banco de dados** para resolver isso. Ele precisa armazenar os dados de forma estruturada, garantindo que seja possível **registrar os alunos e suas respectivas notas**.

## Além disso, ele deseja:

- Cadastrar uma quantidade grande de alunos automaticamente (100) 
- Consultar os dados armazenados sempre que necessário  
- Corrigir ou atualizar a informação de um aluno específico  
- Analisar o desempenho da turma como um todo  
- A média das notas da turma, Qual foi a maior nota e menor nota

---
layout: default
card: true
bgPreset: palette
pulse: true
---

# Problema

Com base nesse problema, vocês devem:

- Definir quais estruturas serão necessárias  
- Planejar como os dados serão armazenados e manipulados  
- Descrever o passo a passo da solução em pseudocódigo  


---
layout: default
card: true
bgPreset: palette
---

# Pseudocódigo - Passo 1: Conectar ao banco

```
IMPORTAR sqlite3

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
CRIAR TABELA alunos:
  - id: [TIPO] [CONSTRAINT]
  - nome: [TIPO] [CONSTRAINT]
  - turma: [TIPO] [CONSTRAINT]

CRIAR TABELA notas:
  - id: [TIPO] [CONSTRAINT] [CONSTRAINT]
  - aluno_id: [TIPO] [CONSTRAINT] → FOREIGN KEY → alunos.id
  - materia: [TIPO] [CONSTRAINT]
  - avaliacao: [TIPO] [CONSTRAINT]
  - valor: [TIPO] [CONSTRAINT]

CONFIRMAR as mudanças no banco
```

*A chave estrangeira `aluno_id` garante que cada nota pertence a um aluno real — relacao 1:N (um aluno, muitas notas).*

---
layout: default
card: true
bgPreset: palette
---

# Pseudocódigo - Passo 3: Inserir 100 alunos com for

```
PARA cada número de 1 até 100:
  GERAR nome: "Aluno 001", "Aluno 002", ... "Aluno 100"
  SORTEAR uma materia da lista ["Matematica", "Python", "BD", "Ingles"]
  GERAR uma nota decimal aleatória entre 0.0 e 10.0

  INSERIR em alunos: (nome, turma)
  GUARDAR o id do aluno recém inserido
  INSERIR em notas: (aluno_id, materia, avaliacao, valor)

CONFIRMAR todas as inserções de uma vez

MOSTRAR os primeiros 5 registros de alunos no terminal
```

*`cursor.lastrowid` retorna o id do último INSERT — não precisa calcular.*

---
layout: default
card: true
bgPreset: palette
---

# Pseudocódigo - Passo 4: Consultar com JOIN

```
SELECIONAR: nome do aluno, materia, valor da nota
UNINDO tabela alunos COM tabela notas
  ONDE alunos.id = notas.aluno_id
LIMITAR a 10 resultados

PARA cada linha do resultado:
  IMPRIMIR a linha
```

*O JOIN funciona porque `notas.aluno_id` aponta para `alunos.id`. Sem FK, o banco aceitaria qualquer numero como aluno_id.*

---
layout: default
card: true
bgPreset: palette
---

# Pseudocódigo - Passo 5: Alterar e confirmar

```
ALTERAR em notas: SET valor = novo_valor
  ONDE id = 1

CONFIRMAR alteração

SELECIONAR as colunas de notas
  ONDE id = 1
IMPRIMIR resultado para confirmar
```

---
layout: default
card: true
bgPreset: palette
---

# Pseudocódigo - Passo 4: Estatísticas com Python puro

```
BUSCAR todos os valores da coluna nota com SELECT

GUARDAR os resultados numa lista

CALCULAR: média 
CALCULAR: maior 
CALCULAR: menor 

IMPRIMIR os três valores com f-string

SE média > q algo: IMPRIMIR mensagem positiva
SENÃO: IMPRIMIR alerta

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

- [ ] Passo 1: conectar + criar tabelas `alunos` e `notas`
- [ ] Passo 2: `FOREIGN KEY (aluno_id) REFERENCES alunos(id)` declarada
- [ ] Passo 3: 100 inserções com `for` + `random` + `cursor.lastrowid`
- [ ] Passo 4: `JOIN` unindo nome do aluno + materia + nota
- [ ] Passo 5: `UPDATE` em 1 registro + `SELECT` confirmando
- [ ] Passo 6: `sum/len/max/min` + `if/else` + `conn.close()`

> Corrija seu papel agora — ele vai ser sua cola durante o laboratório.

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

```python 
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

<!-- objetivo: aluno usa CREATE TABLE com tipos e constraints corretos, declarando FK -->

# Referência: SQL DDL - CREATE TABLE

```python
cursor.execute("DROP TABLE IF EXISTS notas")
cursor.execute("DROP TABLE IF EXISTS alunos")

cursor.execute("""
    CREATE TABLE alunos (
        id      INTEGER PRIMARY KEY,
        nome    [TIPO DO DADO SQLITE] [CONSTRAINTS REGRA],
        turma   [TIPO DO DADO SQLITE] [CONSTRAINTS REGRA]
    )
""")
```
> Tipos SQLite: `INTEGER` · `TEXT` · `REAL` (decimal) · Constraints: `NOT NULL` · `PRIMARY KEY` · `AUTOINCREMENT`
> Referência: https://www.w3schools.com/sql/sql_datatypes.asp

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno usa CREATE TABLE com tipos e constraints corretos, declarando FK -->

# Referência: SQL DDL - CREATE TABLE

```python
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
conn.commit()
```

> Tipos SQLite: `INTEGER` · `TEXT` · `REAL` (decimal) · Constraints: `NOT NULL` · `PRIMARY KEY` · `AUTOINCREMENT`
> Referência: https://www.w3schools.com/sql/sql_datatypes.asp

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno usa INSERT INTO com ? como placeholder, dentro do for com cursor.lastrowid -->

# Referência: Fase 2 — INSERT com for + random

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

> `cursor.lastrowid` retorna o id do último INSERT — use para ligar nota ao aluno certo.
> Referências: https://docs.python.org/3/library/random.html · https://docs.python.org/3/library/sqlite3.html

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno usa JOIN para unir tabelas e UPDATE com WHERE para alterar um registro -->

# Referência: Fase 3 — JOIN + UPDATE

```python
# Consultar com JOIN
cursor.execute("""
    SELECT [TABELA].[COLUNA], [TABELA].[COLUNA], [TABELA].[COLUNA]
    FROM [TABELA_PRINCIPAL]
    JOIN [OUTRA_TABELA] ON [CHAVE_ESTRANGEIRA] = [CHAVE_PRIMARIA]
    LIMIT 10
""")
resultados = cursor.fetchall()
for linha in resultados:
    print(linha)

# Alterar um registro
cursor.execute("""
    UPDATE [TABELA]
    SET [COLUNA] = [NOVO_VALOR]
    WHERE [COLUNA] = [CONDICAO]
""")
conn.commit()

cursor.execute("SELECT [COLUNAS] FROM [TABELA] WHERE [CONDICAO]")
print(cursor.fetchall())
```

> Referências: https://www.w3schools.com/sql/sql_join.asp · https://www.w3schools.com/sql/sql_update.asp

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

- `cursor.fetchall()` - pega todos os registros como lista de tuplas
- `for linha in resultados:` - passa por cada registro um a um
- `print(linha)` - imprime cada registro no terminal
- Exemplo de saída: `(1, 'Maria Silva', 'TurmaA')`

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno usa sum/len/max/min e if/else para analisar a lista de notas -->

# Referência: Fase 4 — Estatísticas com Python puro

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

> Funcoes built-in do Python: `sum()` · `len()` · `max()` · `min()` — sem importar nada.
> Referencia: https://docs.python.org/3/library/functions.html

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno usa pd.read_sql_query com JOIN e .mean() como bonus -->

# Referência Bônus: Pandas com SQLite

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

> `pd.read_sql_query` recebe uma query SQL e uma conexao aberta, e retorna um DataFrame.
> Compare `.mean()` com o resultado da Fase 4 — tem que ser o mesmo.
> Referencia: https://pandas.pydata.org/docs/reference/api/pandas.read_sql_query.html


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
<!-- [ATIV AVALIATIVA] -->

# Checklist da Av.05

**Obrigatório - antes de entregar:**

- [ ] Duas tabelas criadas (`alunos` e `notas`) com tipos e constraints corretos
- [ ] `FOREIGN KEY (aluno_id) REFERENCES alunos(id)` declarada em `notas`
- [ ] 100 registros inseridos com `for` + `random`
- [ ] `JOIN` consultando nome + materia + valor
- [ ] `UPDATE` em 1 registro + `SELECT` para confirmar
- [ ] `sum/len/max/min` + `if/else` sobre a média
- [ ] Link do Colab enviado ao professor

**Bonus - se der tempo:**

- [ ] `pd.read_sql_query()` com JOIN carregando os dados
- [ ] `.mean()` calculando e comparando com a Fase 4

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

---
layout: default
card: true
bgPreset: palette
---

<!-- [ATIV AVALIATIVA] -->

# Em que fase você está?

**Acompanhe seu progresso durante o lab:**

**Fase 1 — Conectar e Criar** — banco + tabelas `alunos` e `notas` com FK criadas

**Fase 2 — Inserir** — 100 inserções via `for` + `random` + 5 primeiros no terminal

**Fase 3 — Consultar e Alterar** — `JOIN` rodando + `UPDATE` + `SELECT` confirmando

**Fase 4 — Analisar** — `sum/len/max/min` + `if/else` + `conn.close()`

**Fase Bônus** — `pd.read_sql_query()` com JOIN + `.mean()` no Pandas

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

---
layout: default
card: true
bgPreset: palette
---

# Como entregar: link do Colab

**2. Compartilhar o link**
- Botão **Compartilhar** (canto superior direito)
- Trocar para: "Qualquer pessoa com o link pode ver"
- Copiar o link

**3. Enviar ao professor**
- Mande o link pelo Email do professor
- Formato: `Av05 - Nome1 e Nome2: [link]`

---
layout: default
card: true
bgPreset: palette
---

<!-- [DEBATE] - Exit Ticket -->

# Exit Ticket - Antes de sair, me conta

**Cada dupla responde em voz alta:**

**1. O que você fez hoje?**
- Descreva em 1 frase o que seu script faz

**2. O que ainda está travado?**
- Qual parte não funcionou? Qual erro apareceu?
- Não terminou? Em que fase parou?
- Quais as dificuldades?

---
layout: default
card: true
bgPreset: palette
---

<!-- [TAREFA DE CASA] -->

# Tarefa de Casa - Aula 20

**Se não terminou em aula:**

- [ ] Finalizar `av05_banco.py` com as 4 fases completas

**Entrega:** antes da A21 | Arquivo: `SENAC-TecIA/Av05/av05_banco.py`

---
layout: end
bgPreset: animate
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
---

# Até a A21!

**Hoje:** SQL + Python + Pandas integrados em um projeto real

**Na A21:** revisão das entregas da Av.05

Email para entregas: Leonardo.niclote@docente.pr.senac.br

*Você acabou de construir o início de um pipeline real de IA.*
