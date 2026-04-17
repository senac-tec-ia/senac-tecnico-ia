---
# A15
# ──────────────────────────────────────────────────────────────
theme: ../../../neural-slides-template
colorSchema: dark
title: "Técnico em IA — Aula 15"
author: Leonardo Zanini
github: LeoZanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 15"
bgPreset: palette
layout: cover
# ──────────────────────────────────────────────────────────────
---

<!-- SLIDE 1 — Capa -->

# Aula 15
## while, Listas, NoSQL e CPU-Z na Pratica

*17 de abril de 2026*

---
layout: center
card: true
bgPreset: palette
animate: true
---

<!-- SLIDE 2 — [TEORIA] Roteiro do Dia -->

# O Que Vem Por Ai

| Bloco | Horario | Disciplina | Conteudo |
|---|---|---|---|
| 1 | 7h10–8h50 | Python para IA | Loop while + metodos de lista |
| Intervalo | 8h50–9h00 | — | — |
| 2 | 9h00–10h40 | Banco de Dados | NoSQL + BD local e-commerce |
| Intervalo | 10h40–10h50 | — | — |
| 3 | 10h50–12h20 | Arquitetura e GPU | CPU-Z na pratica |

---
layout: center
card: true
bgPreset: palette
animate: true
---

<!-- SLIDE 3 — [TEORIA] Divisor Bloco 1: Python -->

# Bloco 1
## Python para IA

*UC05 · 7h10-8h50 · while e metodos de lista*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 4 — [TEORIA] Loop while — Sintaxe -->

# Loop `while` — Sintaxe

O `while` repete enquanto uma condicao for **verdadeira**:

```python
while condicao:
    # corpo do loop
    # alguma coisa muda aqui — senao loop infinito!
```

| Parte | Função |
|---|---|
| `while condicao:` | testa antes de cada volta |
| corpo | o que executa em cada repeticao |
| atualizacao | muda algo para a condicao virar `False` |

Esqueceu a atualizacao? **Loop infinito** — o programa nunca para. Use `Ctrl+C` no terminal para interromper.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 5 — [TEORIA] while na Pratica -->

# `while` na Pratica

```python
tentativas = 0
senha_correta = "1234"

while tentativas < 3:
    senha = input("Digite a senha: ")
    tentativas += 1

    if senha == senha_correta:
        print("Acesso liberado!")
        break

    print(f"Senha errada. Tentativas: {tentativas}/3")

if tentativas == 3 and senha != senha_correta:
    print("Cartao bloqueado.")
```

<v-click>

`break` sai do loop imediatamente — sem ele, o `while` continuaria mesmo apos acertar a senha.

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 6 — [EXERCICIO] EX01 — HP Zero -->

# <carbon-code /> EX01 — HP Zero

**Individual · Entrega obrigatoria**

Personagem de RPG com **100 HP**. A cada rodada o personagem sofre um dano **aleatorio entre 0 e 10 HP**. O jogo termina quando o HP chegar a 0 ou menos. Para isso iremos utilizar While, condições, um gerador de número aleatórios inteiros, e um código inicial.

---
layout: default
card: true
bgPreset: palette
pulse: true
---


# O que voce vai precisar usar:

| Conceito | O que faz | Exemplo |
|---|---|---|
| `randint(a,b)` | sorteia um numero inteiro entre `a` e `b` — **inclui os dois extremos** | `randint(0, 10)` pode sair 0, 3, 7, 10... |
| `-=` | desconta um valor da variavel | `hp -= dano` e o mesmo que `hp = hp - dano` |
| `+=` | soma um valor a variavel | `rodada += 1` e o mesmo que `rodada = rodada + 1` |
| `while hp>0:` | condicao: repete enquanto HP for positivo | quando HP chegar a 0 ou menos, o loop para |

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 6b — [EXERCICIO] EX01 — HP Zero (Codigo) -->

# <carbon-code /> EX01 — Preencha os SUBSTITUIR

```python
from random import randint  # randint(inicio, fim) — inclui os dois extremos

hp = 100
rodada = 0

while SUBSTITUIR:           # condicao: o loop roda enquanto o HP for...?
    dano = SUBSTITUIR       # sorteie o dano com randint — use os valores do enunciado
    hp -= SUBSTITUIR        # desconte o dano do HP (use -=)
    rodada += 1
    print(f"Rodada {rodada}: -{dano} HP | HP restante: {hp}")

print(f"Game over em {rodada} rodadas!")
```

**Entrega:** quando o codigo estiver funcionando, ANEXE o .py num e-mail para **leonardo.niclote@docente.pr.senac.br** mas **nao envie ainda**. Aguarde todos os exercicios de hoje e mande tudo junto no final da aula.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 7 — [TEORIA] Mini Cola — while vs for -->

# Mini Cola — `while` vs `for`


| Caso| `for` | `while` |
|---|---|---|
| **Quando usar** | sabe quantas vezes / percorre lista | condicao de parada desconhecida |
| **Sintaxe** | `for item in lista:` | `while condicao:` |
| **Risco** | nenhum | loop infinito sem atualizacao |
| **Exemplos** | iterar lista, `range(10)` | HP > 0, senha correta, input valido |

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 8 — [TEORIA] Metodos de Lista -->

# Metodos de Lista

```python
lista = ["rock", "pop", "funk"]

lista.append("sertanejo")   # adiciona no final
# ["rock", "pop", "funk", "sertanejo"]

lista.pop()                  # remove e retorna o ultimo
# "sertanejo"  →  lista = ["rock", "pop", "funk"]

lista.pop(0)                 # remove pelo indice
# "rock"       →  lista = ["pop", "funk"]

lista.sort()                 # ordena no lugar (a-z / menor-maior)
# ["funk", "pop"]
```

<v-click>

`.sort()` modifica a lista original. Para nao modificar, use `sorted(lista)` — retorna uma nova lista.

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 9 — [EXERCICIO] EX02 Parte 1 — .append -->

# <carbon-add /> EX02 · Parte 1 — Montando a Fila

**Dupla · Fila de pedidos de lanchonete**

Comece com a fila vazia e adicione 4 pedidos na ordem:

```python
fila = []

fila.append(___)   # "X-Bacon"
fila.append(___)   # "Batata G"
fila.append(___)   # "Refri"
fila.append(___)   # "Sorvete"

print("Fila atual:", fila)
print("Total de pedidos:", len(fila))
```


---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 10 — [EXERCICIO] EX02 Parte 2 — .pop -->

# <carbon-subtract /> EX02 · Parte 2 — Servindo a Fila

**Dupla — continue no mesmo arquivo**

```python
# fila = ["X-Bacon", "Batata G", "Refri", "Sorvete"]

servido = fila.pop(___)        # remove o primeiro (indice 0)
print("Servido:", servido)

desistiu = fila.___()          # remove o ultimo sem indice
print("Cancelado:", desistiu)

print("Fila restante:", fila)
```


---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 11 — [EXERCICIO] EX02 Parte 3 — .sort -->

# <carbon-sort-ascending /> EX02 · Parte 3 — Cardapio em Ordem

**Dupla · Colab — continue no mesmo arquivo**

```python
cardapio = ["Milkshake", "X-Tudo", "Acai", "Batata", "Nuggets"]

print("Antes:", cardapio)

cardapio.___()             # ordena no lugar

print("Depois:", cardapio)
print("Primeiro da lista:", cardapio[___])   # indice 0
print("Ultimo da lista:",  cardapio[___])    # indice -1
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 12 — [TEORIA] Mini Cola — Metodos de Lista -->

# Mini Cola — Metodos de Lista

| Metodo | O que faz | Exemplo |
|---|---|---|
| `.append(x)` | adiciona `x` no final | `lista.append("novo")` |
| `.pop()` | remove e retorna o ultimo | `ultimo = lista.pop()` |
| `.pop(i)` | remove e retorna indice `i` | `primeiro = lista.pop(0)` |
| `.sort()` | ordena a lista no lugar | `lista.sort()` |
| `len(lista)` | quantidade de itens | `print(len(lista))` |
| `lista[0]` | primeiro item | — |
| `lista[-1]` | ultimo item | — |


---
layout: center
card: true
animate: true
bgPreset: palette
---

<!-- SLIDE 14 — [TEORIA] Divisor Bloco 2: Banco de Dados -->

# Bloco 2
## Banco de Dados

*UC08 · 9h00-10h40 · NoSQL + BD local e-commerce*

---
layout: two-cols-text
card: true
bgPreset: palette
---

<!-- SLIDE 15 — [TEORIA] Relacional vs Nao-Relacional -->

# Relacional vs Nao-Relacional

## Relacional (SQL)

- Dados em **tabelas** com colunas fixas
- Esquema **rigido** — estrutura definida antes
- **JOINs** para cruzar tabelas
- Ideal para: dados estruturados, transacoes
- Exemplos: MySQL, PostgreSQL, **SQLite**

::right::

## Nao-Relacional (NoSQL)

- Dados em documentos, grafos, chave-valor...
- Esquema **flexivel** — estrutura pode mudar
- Sem JOINs obrigatorios
- Ideal para: escala massiva, dados variados
- Exemplos: MongoDB, Redis, Neo4j


---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 16 — [TEORIA] Tipos de NoSQL -->

# Tipos de NoSQL

| Tipo | Como guarda | Banco | Caso de uso |
|---|---|---|---|
| **Documento** | JSON/BSON aninhado | MongoDB | perfil de usuario, catalogo de produtos |
| **Chave-Valor** | chave → valor simples | Redis | sessao de login, cache, ranking real-time |
| **Grafo** | nos e arestas | Neo4j | redes sociais, recomendacoes |
| **Colunar** | colunas agrupadas | Cassandra | logs massivos, series temporais |



---
layout: default
card: true
bgPreset: default
---

# Exemplo de estrutura de um único objeto

```json
// Documento MongoDB — pedido completo em um unico objeto
{
  "cliente": "Ana",
  "itens": ["X-Bacon", "Batata G"],
  "total": 42.50,
  "entregue": false
}
```

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 17 — [TEORIA] Quando Usar Qual -->

# Quando Usar Qual

| Cenario | Banco ideal | Por que |
|---|---|---|
| Sistema financeiro / ERP | SQL (MySQL, PostgreSQL) | Transacoes criticas, consistencia |
| Rede social — quem segue quem | Neo4j (Grafo) | Relacionamentos em multiplas direcoes |
| Cache de sessao de login | Redis (Chave-Valor) | Leitura ultrarapida, dado temporario |
| Catalogo de e-commerce variado | MongoDB (Documento) | Cada produto tem campos diferentes |
| Logs de servidor / metrics de IA | Cassandra (Colunar) | Escrita massiva, consulta por periodo |
| **Nosso e-commerce de hoje** | **SQLite (SQL)** | Estrutura previsivel, JOINs necessarios |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 18 — [TEORIA] Infra Local — DB Browser for SQLite -->

# Infra Local — DB Browser for SQLite

**Instale agora antes de continuar:**

1. Acesse: **https://sqlitebrowser.org/dl/**
2. Clique em **"DB Browser for SQLite — Standard installer 64 Bits"** (Windows)
3. Execute o instalador → avance com Next em tudo
4. Abra pelo menu Iniciar: procure por **"DB Browser"**

---
layout: default
card: true
bgPreset: default
---

# Infra Local — DB Browser for SQLite

Quando abrir, voce vera tres abas principais:

| Aba | Para que serve |
|---|---|
| **Database Structure** | ver tabelas criadas |
| **Browse Data** | ver os dados em formato visual |
| **Execute SQL** | digitar e rodar comandos SQL |



---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 19 — [TEORIA] Projetando o E-commerce -->

# Projetando o E-commerce

Tres tabelas que se relacionam:

```
clientes       produtos       pedidos
---------      --------       -------
id  (PK)       id  (PK)       id          (PK)
nome           nome           cliente_id  (FK → clientes.id)
email          preco          produto_id  (FK → produtos.id)
cidade         estoque        quantidade
                              data
```

 Cada pedido aponta para um cliente e um produto. Um cliente pode ter varios pedidos. Um produto pode aparecer em varios pedidos.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 20 — [TEORIA] CREATE TABLE — clientes e produtos -->

# CREATE TABLE — clientes e produtos

No **DB Browser → Execute SQL**:

```sql
CREATE TABLE clientes (
    id      INTEGER PRIMARY KEY AUTOINCREMENT,
    nome    TEXT    NOT NULL,
    email   TEXT    UNIQUE,
    cidade  TEXT
);

CREATE TABLE produtos (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    nome     TEXT    NOT NULL,
    preco    REAL    NOT NULL,
    estoque  INTEGER DEFAULT 0
);
```
Clique em **Run** (triangulo verde) e depois em **Write Changes** para salvar no .db.


---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 21 — [TEORIA] CREATE TABLE — pedidos com FK -->

# CREATE TABLE — pedidos com FK

```sql
CREATE TABLE pedidos (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente_id  INTEGER NOT NULL,
    produto_id  INTEGER NOT NULL,
    quantidade  INTEGER DEFAULT 1,
    data        TEXT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);
```


---
layout: default
card: true
bgPreset: default
---


# OLHA A FOREIGN KEY, TROPA!

`FOREIGN KEY` diz ao banco: o valor aqui deve existir na outra tabela. Isso evita pedidos de clientes inexistentes.

| Coluna | Aponta para |
|---|---|
| `cliente_id` | `clientes.id` |
| `produto_id` | `produtos.id` |


---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 22 — [TEORIA] INSERT — Populando o BD -->

# INSERT — Populando o BD

```sql
INSERT INTO clientes (nome, email, cidade) VALUES
    ('Ana',   'ana@email.com',   'Sao Paulo'),
    ('Bruno', 'bru@email.com',   'Campinas'),
    ('Carla', 'carla@email.com', 'Santos');

INSERT INTO produtos (nome, preco, estoque) VALUES
    ('Camiseta',  59.90, 100),
    ('Tenis',    299.90,  30),
    ('Mochila',  149.90,  50);

INSERT INTO pedidos (cliente_id, produto_id, quantidade, data) VALUES
    (1, 2, 1, '2026-04-17'),
    (1, 3, 2, '2026-04-17'),
    (2, 1, 3, '2026-04-17');
```
Clique em **Browse Data** para ver as tres tabelas preenchidas.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 23 — [TEORIA] SELECT com JOIN -->

# SELECT com JOIN — Cruzando as Tabelas

```sql
SELECT
    clientes.nome        AS cliente,
    produtos.nome        AS produto,
    pedidos.quantidade,
    (produtos.preco * pedidos.quantidade) AS total
FROM pedidos
INNER JOIN clientes ON pedidos.cliente_id = clientes.id
INNER JOIN produtos ON pedidos.produto_id = produtos.id
ORDER BY clientes.nome;
```

<v-click>

| cliente | produto | quantidade | total |
|---|---|---|---|
| Ana | Tenis | 1 | 299.90 |
| Ana | Mochila | 2 | 299.80 |
| Bruno | Camiseta | 3 | 179.70 |

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 24 — [EXERCICIO] EX03 — Meu E-commerce -->

# <carbon-data-table /> EX03 — Meu E-commerce

**Dupla · 15 min · DB Browser · Entrega obrigatoria**

1. Crie um novo arquivo .db no DB Browser
2. Use o mesmo esquema (clientes, produtos, pedidos)
3. Insira **3 clientes**, **4 produtos** e **5 pedidos** com dados proprios
4. Escreva um SELECT com JOIN: nome do cliente, produto e preco
5. Filtre apenas produtos com `preco > 100` usando `WHERE`

 **Entrega:** Print da resposta no EMAIL

<!-- <v-click>

> **Gabarito da estrutura:**
> ```sql
> SELECT clientes.nome, produtos.nome, produtos.preco
> FROM pedidos
> INNER JOIN clientes ON pedidos.cliente_id = clientes.id
> INNER JOIN produtos ON pedidos.produto_id = produtos.id
> WHERE produtos.preco > 100;
> ```

</v-click> -->

---
layout: center
card: true
bgPreset: palette
animate: true
---

<!-- SLIDE 26 — [TEORIA] Divisor Bloco 3: Arquitetura -->

# Bloco 3
## Arquitetura de Computadores e GPU

*UC06 · 10h50-12h20 · CPU-Z — conheca o hardware de verdade*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 27 — [TEORIA] O Que E CPU-Z -->

# O Que E CPU-Z?

CPU-Z e um programa gratuito que le os sensores do hardware e mostra o que o SO esconde:

| O que revela | Onde fica no CPU-Z |
|---|---|
| Nome e geracao do processador | Aba CPU — "Name" |
| Velocidade real do clock | Aba CPU — "Core Speed" |
| Numero de nucleos e threads | Aba CPU — "Cores" / "Threads" |
| Tamanho do cache L1/L2/L3 | Aba Cache |
| Tipo e velocidade da RAM | Aba Memory |
| Nome e VRAM da GPU | Aba Graphics |

<v-click>

 Util para: saber se o PC aguenta um modelo de IA, comparar com colegas, preparar specs para suporte tecnico.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 28 — [TEORIA] Instalando o CPU-Z -->

# Instalando o CPU-Z

**3 passos — faca agora:**

**Passo 1** — Acesse **https://www.cpuid.com/softwares/cpu-z.html**

Clique em **"Setup · English"** (versao de instalacao)

**Passo 2** — Execute o instalador

Avance com **Next** em tudo, deixe as opcoes padrao

**Passo 3** — Abra o CPU-Z

Menu Iniciar → procure "CPU-Z" → clique duas vezes

<v-click>

Se aparecer aviso do Windows "Publisher: CPUID" → clique **"Executar assim mesmo"**. O programa e legitimo.

Se nao conseguir instalar → **fale com o professor agora** para receber a versao portatil.

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 29 — [EXERCICIO] EX04 — Os 8 Dados do Meu PC -->

# <carbon-document /> EX04 — Os 8 Dados do Meu PC

**Individual · CPU-Z aberto · Preencha a tabela abaixo · Obrigatorio**

PRIMEIRO, baixe o arquivo template.

https://docs.google.com/document/d/1Uaj7jelTP09gPPuoTRQD4EXpuPImO6fd/edit?usp=drive_link&ouid=111674990987426040152&rtpof=true&sd=true

SEGUNDO, abra no seu computador com o word e insira seu nome.



---
layout: default
card: true
bgPreset: palette
pulse: true
---

# LEIA O ARQUIVO COM ATENÇÃO, LOCALIZE NO CPU-Z E PREENCHA NO WORD O VALOR

| Campo | Onde achar | Seu valor |
|---|---|---|
| Nome do processador | Aba CPU → Name | |
| Velocidade do clock (MHz) | Aba CPU → Core Speed | |
| Numero de nucleos fisicos | Aba CPU → Cores | |
| Numero de nucleos virtuais | Aba CPU → Threads | |
| Tamanho do cache L3 | Aba Cache → LEVEL 3 | |
| Nome da GPU | Aba Graphics → GPU → name | |
| Quantidade de RAM | Aba Memory → SIZE | |
| Modelo da placa-mae | Aba Mainboard → MODEL | |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 30 — [TEORIA] O Que Cada Dado Significa (CPU) -->

# O Que Cada Dado Significa

| Campo | Em linguagem simples | Impacto em IA |
|---|---|---|
| **Nome do processador** | Modelo e geracao do chip | Define o que o PC consegue rodar |
| **Clock (MHz)** | Velocidade de cada nucleo | Mais alto = 1 tarefa mais rapida |
| **Nucleos fisicos** | Tarefas em paralelo reais | Mais nucleos = mais processos simultaneos |
| **Nucleos virtuais** | Nucleos logicos (hyper-threading) | Dobra a capacidade aparente de threads |
| **Cache L3** | Memoria ultrarapida dentro da CPU | Mais cache = menos espera de dados |

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 30b — [TEORIA] O Que Cada Dado Significa (GPU, RAM, Placa-Mae) -->

# O Que Cada Dado Significa

| Campo | Em linguagem simples | Impacto em IA |
|---|---|---|
| **GPU** | Placa de video | GPU dedicada = treino de ML muito mais rapido |
| **RAM** | Espaco de trabalho ativo | Mais RAM = modelos maiores na memoria |
| **Placa-mae** | Base que conecta todos os componentes | Define quais upgrades sao possiveis |

<v-click>

**Regra pratica:** GPU decide se voce treina em 10 min ou 10 horas. CPU (clock + nucleos) decide o tempo de resposta. Cache decide o quanto a CPU fica esperando dados. RAM decide o tamanho do modelo que cabe na memoria.

</v-click>

---
layout: brainstorm
card: true
bgPreset: palette
animate: true
---

<!-- SLIDE 31 — [DEBATE] Nosso PC Aguenta IA? -->

# Nosso PC Aguenta IA?

O professor vai anotar no quadro. Turma, respondam:

1. GPU de vcs é dedicada ou integrada? Qual a diferenca na pratica?
2. Quanto de RAM voces tem? O que da pra rodar com isso?
3. Se quisessemos treinar um modelo de IA aqui — o que seria o gargalo?
4. O que teria que mudar no hardware para rodar IA pesada localmente?

<v-click>

> **Conclusao:** nossos PCs sao de uso geral — bons para aprender, programar e rodar modelos pequenos. Para treinar redes neurais grandes, empresas usam **clusters de GPU** (dezenas de placas em paralelo na nuvem — AWS, GCP, Azure). O conhecimento do hardware é o primeiro passo para entender por que isso e necessario.

</v-click>

---
layout: end
bgPreset: animate
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
---

<!-- SLIDE 32 — Encerramento -->


# Hoje voce aprendeu:

- Loop `while` com condicao de parada e `break`
- Metodos de lista: `.append()`, `.pop()`, `.sort()`
- Diferenca entre bancos relacionais e NoSQL (4 tipos)
- Como criar um BD completo do zero com SQLite local
- Como ler o hardware real do seu PC com CPU-Z

<br/>

*Proxima aula (A16 — 20/04 SEGUNDA FEIRA REPOSIÇÃO): Visita Tecnica + Classificacao em IA*

