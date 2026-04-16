---
# A15
# ──────────────────────────────────────────────────────────────
theme: ../slidev-theme-neural
colorSchema: dark
title: "Técnico em IA — Aula 15"
author: Leonardo Zanini
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
bgPreset: animate
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
bgPreset: animate
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

| Parte | Funcao |
|---|---|
| `while condicao:` | testa antes de cada volta |
| corpo | o que executa em cada repeticao |
| atualizacao | muda algo para a condicao virar `False` |

<v-click>

> Esqueceu a atualizacao? **Loop infinito** — o programa nunca para. Use `Ctrl+C` no terminal para interromper.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 5 — [TEORIA] while na Pratica -->

# `while` na Pratica

Caixa eletronico: 3 tentativas de senha

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

> `break` sai do loop imediatamente — sem ele, o `while` continuaria mesmo apos acertar a senha.

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 6 — [EXERCICIO] EX01 — HP Zero -->

# <carbon-code /> EX01 — HP Zero

**Individual · 7 min · Colab · Entrega obrigatoria**

Personagem de RPG com **100 HP**. Cada rodada perde entre 15 e 30 HP. O loop para quando HP chegar a 0 ou menos.

```python
from random import randint

hp = 100
rodada = 0

while ___:                         # enquanto hp > 0
    dano = randint(15, 30)
    hp -= ___                      # subtrai o dano
    rodada += 1
    print(f"Rodada {rodada}: -{dano} HP | HP restante: {hp}")

print(f"Game over em {rodada} rodadas!")
```

<v-click>

> **Gabarito:**
> ```python
> while hp > 0:
>     dano = randint(15, 30)
>     hp -= dano
> ```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 7 — [TEORIA] Mini Cola — while vs for -->

# Mini Cola — `while` vs `for`

> Este slide fica projetado durante os exercicios de lista.

| | `for` | `while` |
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

Listas tem acoes prontas — use com ponto depois da variavel:

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

> `.sort()` modifica a lista original. Para nao modificar, use `sorted(lista)` — retorna uma nova lista.

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 9 — [EXERCICIO] EX02 Parte 1 — .append -->

# <carbon-add /> EX02 · Parte 1 — Montando a Fila

**Dupla · Colab · Fila de pedidos de lanchonete**

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

<v-click>

> **Gabarito:**
> ```python
> fila.append("X-Bacon")
> fila.append("Batata G")
> fila.append("Refri")
> fila.append("Sorvete")
> ```
> Saida: `Fila atual: ['X-Bacon', 'Batata G', 'Refri', 'Sorvete']`

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 10 — [EXERCICIO] EX02 Parte 2 — .pop -->

# <carbon-subtract /> EX02 · Parte 2 — Servindo a Fila

**Dupla · Colab — continue no mesmo arquivo**

```python
# fila = ["X-Bacon", "Batata G", "Refri", "Sorvete"]

servido = fila.pop(___)        # remove o primeiro (indice 0)
print("Servido:", servido)

desistiu = fila.___()          # remove o ultimo sem indice
print("Cancelado:", desistiu)

print("Fila restante:", fila)
```

<v-click>

> **Gabarito:**
> ```python
> servido = fila.pop(0)    # "X-Bacon"
> desistiu = fila.pop()    # "Sorvete"
> ```
> Fila restante: `['Batata G', 'Refri']`

</v-click>

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

<v-click>

> **Gabarito:**
> ```python
> cardapio.sort()
> cardapio[0]    # "Acai"
> cardapio[-1]   # "X-Tudo"
> ```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 12 — [TEORIA] Mini Cola — Metodos de Lista -->

# Mini Cola — Metodos de Lista

> Este slide fica projetado durante os exercicios de BD.

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
bgPreset: animate
---

<!-- SLIDE 13 — Intervalo -->

# Intervalo

*8h50 - 9h00*

Proximo bloco: **Banco de Dados** — NoSQL e BD local

---
layout: center
card: true
bgPreset: animate
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

::left::

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

<v-click>

> NoSQL **nao** significa "sem SQL". Significa **"Not Only SQL"** — bancos que vao alem do modelo relacional tabular.

</v-click>

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

<v-click>

```json
// Documento MongoDB — pedido completo em um unico objeto
{
  "cliente": "Ana",
  "itens": ["X-Bacon", "Batata G"],
  "total": 42.50,
  "entregue": false
}
```

</v-click>

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
2. Clique em **"DB Browser for SQLite — Standard installer"** (Windows)
3. Execute o instalador → avance com Next em tudo
4. Abra pelo menu Iniciar: procure por **"DB Browser"**

<v-click>

Quando abrir, voce vera tres abas principais:

| Aba | Para que serve |
|---|---|
| **Database Structure** | ver tabelas criadas |
| **Browse Data** | ver os dados em formato visual |
| **Execute SQL** | digitar e rodar comandos SQL |

> Se nao conseguir instalar, fale com o professor — ha uma versao portatil no pendrive.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 19 — [TEORIA] Projetando o E-commerce -->

# Projetando o E-commerce

Tres tabelas que se relacionam:

```
clientes                  produtos
---------                 --------
id  (PK)                  id      (PK)
nome                      nome
email                     preco
cidade                    estoque

               pedidos
               -------
               id          (PK)
               cliente_id  (FK → clientes.id)
               produto_id  (FK → produtos.id)
               quantidade
               data
```

> Cada pedido aponta para um cliente e um produto. Um cliente pode ter varios pedidos. Um produto pode aparecer em varios pedidos.

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

> Clique em **Run** (triangulo verde) e depois em **Write Changes** para salvar no .db.

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

<v-click>

`FOREIGN KEY` diz ao banco: o valor aqui deve existir na outra tabela. Isso evita pedidos de clientes inexistentes.

| Coluna | Aponta para |
|---|---|
| `cliente_id` | `clientes.id` |
| `produto_id` | `produtos.id` |

</v-click>

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

> Clique em **Browse Data** para ver as tres tabelas preenchidas.

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

> **Entrega:** print do resultado no grupo antes do segundo intervalo.

<v-click>

> **Gabarito da estrutura:**
> ```sql
> SELECT clientes.nome, produtos.nome, produtos.preco
> FROM pedidos
> INNER JOIN clientes ON pedidos.cliente_id = clientes.id
> INNER JOIN produtos ON pedidos.produto_id = produtos.id
> WHERE produtos.preco > 100;
> ```

</v-click>

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 25 — Intervalo -->

# Intervalo

*10h40 - 10h50*

Proximo bloco: **Arquitetura e GPU** — CPU-Z na pratica

---
layout: center
card: true
bgPreset: animate
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

> Util para: saber se o PC aguenta um modelo de IA, comparar com colegas, preparar specs para suporte tecnico.

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

<!-- SLIDE 29 — [EXERCICIO] EX04 — Os 5 Dados do Meu PC -->

# <carbon-document /> EX04 — Os 5 Dados do Meu PC

**Individual · CPU-Z aberto · Anota no caderno · Obrigatorio**

Com o CPU-Z aberto, preencha no caderno:

| Campo | Onde achar | Seu valor |
|---|---|---|
| Nome do processador | Aba CPU → Name | |
| Velocidade do clock (MHz) | Aba CPU → Core Speed | |
| Numero de nucleos fisicos | Aba CPU → Cores | |
| Tamanho do cache L3 | Aba Cache → L3 | |
| Nome da GPU | Aba Graphics → Display Device Name | |

Ao terminar, **levante a mao** — o professor vai coletar para a proxima atividade.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 30 — [TEORIA] O Que Cada Dado Significa -->

# O Que Cada Dado Significa

| Dado | Em linguagem simples | Impacto em IA |
|---|---|---|
| **Clock (MHz/GHz)** | Velocidade de cada nucleo | Mais alto = 1 tarefa mais rapida |
| **Cores (nucleos)** | Tarefas em paralelo | Mais nucleos = mais processos simultaneos |
| **Cache L3** | Memoria ultrarapida dentro da CPU | Mais cache = menos espera de dados |
| **GPU** | Placa de video | GPU dedicada = treino de ML muito mais rapido |
| **RAM** | Espaco de trabalho ativo | Mais RAM = modelos maiores na memoria |

<v-click>

> **Regra pratica:** GPU decide se voce treina em 10 min ou 10 horas. CPU decide o tempo de resposta. Cache decide o quanto a CPU fica esperando dados.

</v-click>

---
layout: brainstorm
card: true
bgPreset: animate
pulse: true
---

<!-- SLIDE 31 — [DEBATE] CPU vs GPU — O Que Voce Viu? -->

# CPU vs GPU — O Que Voce Viu?

O professor vai anotar no quadro. Turma, respondam:

1. Qual foi o maior numero de nucleos na sala?
2. Qual foi o menor clock registrado?
3. Quantos PCs tem GPU dedicada (nao integrada)?
4. Quem tem o maior cache L3?

<v-click>

> **Conclusao coletiva:** nossos PCs variam bastante — e isso explica por que alguns treinam modelos mais rapido que outros. Em empresas, clusters de GPU (AWS, GCP) resolvem isso com dezenas de placas em paralelo.

</v-click>

---
layout: end
bgPreset: animate
---

<!-- SLIDE 32 — Encerramento -->

# Aula 15 — Concluida

**Hoje voce aprendeu:**

- Loop `while` com condicao de parada e `break`
- Metodos de lista: `.append()`, `.pop()`, `.sort()`
- Diferenca entre bancos relacionais e NoSQL (4 tipos)
- Como criar um BD completo do zero com SQLite local
- Como ler o hardware real do seu PC com CPU-Z

*Proxima aula (A16 — 20/04): Visita Tecnica + Classificacao em IA*

<!-- SLIDE 1 — Capa -->

# Aula 15
## while, BD Local e CPU-Z na Pratica

*17 de abril de 2026*

---
layout: center
card: true
bgPreset: palette
---

<!-- SLIDE 2 — Roteiro do Dia -->

# Roteiro do Dia

| Bloco | Horario | Disciplina |
|---|---|---|
| 1 | 7h10–8h50 | UC05 — Python: `while` e metodos de lista |
| — | 8h50–9h00 | Intervalo |
| 2 | 9h00–10h40 | UC08 — Banco de Dados: NoSQL + BD local |
| — | 10h40–10h50 | Intervalo |
| 3 | 10h50–12h20 | UC06 — Arquitetura: CPU-Z na pratica |

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 3 — [DIVISOR] Bloco 1: Python -->

# Bloco 1
## Python para IA

*UC05 · 7h10–8h50 · while e metodos de lista*

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 4 — [TEORIA] Loop while — Sintaxe -->

# Loop `while` — Sintaxe

```python
while condicao:
    # corpo do loop
    # OBRIGATORIO: atualizar algo para a condicao virar False algum dia
```

| Parte | O que faz |
|---|---|
| `while condicao:` | repete enquanto `condicao` for `True` |
| corpo | bloco de codigo executado a cada volta |
| atualizacao | muda a variavel que controla a condicao |

<v-click>

> **Regra de ouro:** se nada dentro do `while` mudar a condicao, o loop roda para sempre — isso se chama **loop infinito** e trava o programa.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 5 — [TEORIA] while na Pratica -->

# `while` na Pratica

**Exemplo — maquina de cafe:**

```python
credito = 10.00

while credito >= 2.50:
    print(f"Comprando cafe... credito: R$ {credito:.2f}")
    credito -= 2.50

print(f"Credito insuficiente. Sobrou: R$ {credito:.2f}")
```

<v-click>

**Saida:**
```
Comprando cafe... credito: R$ 10.00
Comprando cafe... credito: R$ 7.50
Comprando cafe... credito: R$ 5.00
Comprando cafe... credito: R$ 2.50
Credito insuficiente. Sobrou: R$ 0.00
```

> 4 cafes. O `while` parou porque `credito` ficou `0.00`, que nao satisfaz `>= 2.50`.

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 6 — [EXERCICIO] EX01 — while -->

# EX01 — Fila de Suporte

**Individual · 8 minutos · Colab**

O suporte tem 5 chamados abertos. Escreva um `while` que:

1. Imprima `Atendendo chamado N...` para cada chamado (do 5 ate o 1)
2. Reduza o contador a cada volta
3. Ao terminar, imprima `Fila zerada!`

```python
chamados = 5

# escreva seu while aqui
```

<v-click>

> **Gabarito:**
> ```python
> chamados = 5
>
> while chamados > 0:
>     print(f"Atendendo chamado {chamados}...")
>     chamados -= 1
>
> print("Fila zerada!")
> ```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 7 — [TEORIA] Mini Cola: while vs for -->

# Mini Cola — `while` vs `for`

| Use `for` quando... | Use `while` quando... |
|---|---|
| voce **sabe** quantas voltas dar | voce **nao sabe** quantas iteracoes vai precisar |
| esta percorrendo lista ou `range()` | tem uma **condicao de parada** |
| quer usar `enumerate` ou `zip` | a condicao depende de calculo ou entrada |

**Exemplos rapidos:**

```python
for i in range(5):          # exatamente 5 vezes — use for
    print(i)

while senha != "1234":      # nao sei quantas tentativas — use while
    senha = input("Senha: ")
```

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 8 — [TEORIA] Metodos de Lista -->

# Metodos de Lista

```python
playlist = ["The Weeknd", "Kendrick", "Frank Ocean"]

playlist.append("Tyler")      # adiciona "Tyler" no final
# ["The Weeknd", "Kendrick", "Frank Ocean", "Tyler"]

removido = playlist.pop()     # remove e retorna o ultimo
# removido = "Tyler"
# ["The Weeknd", "Kendrick", "Frank Ocean"]

playlist.pop(0)               # remove pelo indice (posicao 0)
# ["Kendrick", "Frank Ocean"]

playlist.sort()               # ordena em ordem alfabetica
# ["Frank Ocean", "Kendrick"]

playlist.sort(reverse=True)   # ordena do maior para o menor
# ["Kendrick", "Frank Ocean"]
```

<v-click>

> `.sort()` modifica a lista original. Para uma copia ordenada sem alterar a original, use `sorted(playlist)`.

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 9 — [EXERCICIO] EX02 Parte 1 — .append -->

# EX02 — Carrinho de Compras · Parte 1: `.append`

**Individual · 4 minutos · Colab**

Comece com uma lista vazia e adicione 4 itens usando `.append()`.
Imprima o carrinho apos cada adicao para ver ele crescer.

```python
carrinho = []

# Adicione: "notebook", "mouse", "teclado", "monitor"
```

<v-click>

> **Gabarito:**
> ```python
> carrinho = []
> for item in ["notebook", "mouse", "teclado", "monitor"]:
>     carrinho.append(item)
>     print(carrinho)
> # ['notebook']
> # ['notebook', 'mouse']
> # ['notebook', 'mouse', 'teclado']
> # ['notebook', 'mouse', 'teclado', 'monitor']
> ```

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 10 — [EXERCICIO] EX02 Parte 2 — .pop -->

# EX02 — Carrinho de Compras · Parte 2: `.pop`

**Individual · 3 minutos · mesmo Colab**

Continue com o carrinho da Parte 1:

1. Remova o ultimo item com `.pop()` e guarde em uma variavel
2. Imprima `Removido: {item}`
3. Imprima o carrinho atualizado

```python
# continue o codigo da Parte 1 aqui
```

<v-click>

> **Gabarito:**
> ```python
> removido = carrinho.pop()
> print(f"Removido: {removido}")
> print(carrinho)
> # Removido: monitor
> # ['notebook', 'mouse', 'teclado']
> ```

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 11 — [EXERCICIO] EX02 Parte 3 — .sort -->

# EX02 — Carrinho de Compras · Parte 3: `.sort`

**Individual · 3 minutos · mesmo Colab**

Com o carrinho atual (`['notebook', 'mouse', 'teclado']`):

1. Ordene em ordem alfabetica com `.sort()` e imprima
2. Ordene em ordem inversa com `.sort(reverse=True)` e imprima

```python
# continue o codigo aqui
```

<v-click>

> **Gabarito:**
> ```python
> carrinho.sort()
> print(carrinho)
> # ['mouse', 'notebook', 'teclado']
>
> carrinho.sort(reverse=True)
> print(carrinho)
> # ['teclado', 'notebook', 'mouse']
> ```

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 12 — [TEORIA] Mini Cola: Metodos de Lista -->

# Mini Cola — Metodos de Lista

| Metodo | O que faz | Retorna |
|---|---|---|
| `.append(x)` | adiciona `x` no final | `None` |
| `.pop()` | remove e retorna o ultimo item | o item removido |
| `.pop(i)` | remove e retorna o item no indice `i` | o item removido |
| `.sort()` | ordena a lista no lugar (modifica original) | `None` |
| `.sort(reverse=True)` | ordena do maior para o menor | `None` |
| `sorted(lista)` | retorna nova lista ordenada sem alterar original | nova lista |
| `len(lista)` | conta quantos itens ha | inteiro |

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 13 — Intervalo -->

# Intervalo

*8h50 – 9h00*

Proximo bloco: **Banco de Dados** — relacional vs nao-relacional + e-commerce local

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 14 — [DIVISOR] Bloco 2: Banco de Dados -->

# Bloco 2
## Banco de Dados

*UC08 · 9h00–10h40 · NoSQL + e-commerce local*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 15 — [TEORIA] Relacional vs Nao-Relacional -->

# Relacional vs Nao-Relacional

| | Relacional (SQL) | Nao-Relacional (NoSQL) |
|---|---|---|
| Estrutura | Tabelas com colunas fixas | Flexivel: documentos, grafos, chave-valor |
| Exemplos | MySQL, PostgreSQL, SQLite | MongoDB, Redis, Neo4j |
| Surgiu | Anos 1970 — modelo relacional de Codd | Anos 2000 — escala da web |
| Relacionamentos | FK + JOIN | Embutido no documento ou sem relacao |
| Melhor para | Dados estruturados, transacoes, consistencia | Big Data, velocidade, estrutura variavel |

<v-click>

> **Por que o NoSQL surgiu?** Google, Amazon e Facebook acumulavam bilhoes de registros. Bancos relacionais nao conseguiam escalar com a mesma facilidade. Precisavam de algo mais rapido e flexivel para volumes absurdos.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 16 — [TEORIA] Tipos de NoSQL -->

# Tipos de NoSQL

**Documento — MongoDB**
```json
{ "nome": "Ana", "pedidos": ["notebook", "mouse"], "cidade": "Sao Paulo" }
```
Armazena objetos JSON. Cada documento pode ter campos diferentes — perfeito para catalogo de produtos.

**Chave-Valor — Redis:** `usuario:1001 → "Ana Silva"` · `sessao:abc → { token, expiracao }`
Ultrarapido. Nao tem estrutura interna — ideal para cache, sessoes e filas em tempo real.

**Grafo — Neo4j:** `(Ana) -[COMPROU]-> (Notebook)` · `(Ana) -[CONHECE]-> (Bruno)`
Armazena nos e arestas. Ideal para relacionamentos complexos: redes sociais, recomendacoes, deteccao de fraude.

---
layout: two-cols-text
card: true
bgPreset: default
---

<!-- SLIDE 17 — [TEORIA] Quando Usar Qual -->

# Quando Usar Qual

::left::

**Use SQL (Relacional) quando:**
- Dados tem estrutura previsivel e fixa
- Precisar de transacoes seguras (banco, hospital)
- Relacionamentos entre entidades sao centrais
- A equipe ja conhece SQL

*Exemplos reais: sistema financeiro, ERP, plataforma de ensino, RH*

::right::

**Use NoSQL quando:**
- Estrutura varia entre os registros
- Precisar escalar horizontalmente (muitos servidores)
- Velocidade de leitura e critica (cache, sessoes)
- Dados sao hierarquicos ou em rede

*Exemplos reais: catalogo e-commerce, feed de noticias, GPS tempo real*

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 18 — [TEORIA] Infra Local — DB Browser SQLite -->

# Infra Local — DB Browser for SQLite

**O que e:** editor visual para bancos SQLite. Sem servidor, sem senha, sem configuracao — um arquivo `.db` unico no seu PC.

**Como instalar:**
1. Acesse `https://sqlitebrowser.org/dl/`
2. Baixe o instalador Windows (coluna Standard installer)
3. Execute o `.exe` — clique Next > I Agree > Next > Install > Finish
4. Abra pelo menu Iniciar: **DB Browser for SQLite**

<v-click>

**O que voce vai ver:**
- Aba **Database Structure** — suas tabelas e colunas
- Aba **Browse Data** — os dados linha por linha
- Aba **Execute SQL** — onde escrevemos e rodamos os comandos

> Sem internet na sala? Avise o professor — pendrive com instalador disponivel.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 19 — [TEORIA] Projetando o E-commerce -->

# Projetando o E-commerce

Tres entidades, tres tabelas:

<SlideTable>

| Tabela | Colunas principais | Chave |
|---|---|---|
| `clientes` | id, nome, email | PK: id |
| `produtos` | id, nome, preco, estoque | PK: id |
| `pedidos` | id, cliente_id, produto_id, quantidade, data | PK: id · FK: cliente_id, produto_id |

</SlideTable>

**Relacoes:**
- Um cliente pode ter varios pedidos (1 para N)
- Um produto pode aparecer em varios pedidos (1 para N)
- `pedidos` e a tabela de juncao que une clientes a produtos

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 20 — [TEORIA] CREATE TABLE — clientes e produtos -->

# `CREATE TABLE` — clientes e produtos

```sql
CREATE TABLE clientes (
    id     INTEGER PRIMARY KEY AUTOINCREMENT,
    nome   TEXT    NOT NULL,
    email  TEXT    UNIQUE NOT NULL
);

CREATE TABLE produtos (
    id      INTEGER PRIMARY KEY AUTOINCREMENT,
    nome    TEXT    NOT NULL,
    preco   REAL    NOT NULL,
    estoque INTEGER DEFAULT 0
);
```

> Execute na aba **Execute SQL**. Depois va em **Database Structure** para confirmar que as duas tabelas aparecem.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 21 — [TEORIA] CREATE TABLE — pedidos com FK -->

# `CREATE TABLE` — pedidos com FK

```sql
CREATE TABLE pedidos (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente_id  INTEGER NOT NULL,
    produto_id  INTEGER NOT NULL,
    quantidade  INTEGER DEFAULT 1,
    data        TEXT    DEFAULT (date('now')),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);
```

<v-click>

**O que a FK garante:**
- Nao da para inserir `cliente_id = 99` se o cliente 99 nao existe na tabela `clientes`
- O banco mantem **integridade referencial** — dados nunca ficam orfaos

> `date('now')` e uma funcao do SQLite que insere a data atual automaticamente.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 22 — [TEORIA] INSERT — populando o BD -->

# INSERT — Populando o Banco

```sql
-- Clientes
INSERT INTO clientes (nome, email) VALUES ('Ana Silva',   'ana@email.com');
INSERT INTO clientes (nome, email) VALUES ('Bruno Costa', 'bruno@email.com');

-- Produtos
INSERT INTO produtos (nome, preco, estoque) VALUES ('Notebook', 3500.00, 10);
INSERT INTO produtos (nome, preco, estoque) VALUES ('Mouse',      89.90, 50);
INSERT INTO produtos (nome, preco, estoque) VALUES ('Teclado',   149.90, 30);

-- Pedidos (cliente_id e produto_id referenciam os ids das tabelas acima)
INSERT INTO pedidos (cliente_id, produto_id, quantidade) VALUES (1, 1, 1);
INSERT INTO pedidos (cliente_id, produto_id, quantidade) VALUES (1, 2, 2);
INSERT INTO pedidos (cliente_id, produto_id, quantidade) VALUES (2, 3, 1);
```

> Depois de executar, va em **Browse Data**, selecione cada tabela e verifique os dados inseridos.

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 23 — [TEORIA] SELECT com JOIN -->

# SELECT com JOIN — Unindo as 3 Tabelas

```sql
SELECT
    clientes.nome                        AS cliente,
    produtos.nome                        AS produto,
    pedidos.quantidade,
    produtos.preco * pedidos.quantidade  AS total
FROM pedidos
INNER JOIN clientes ON pedidos.cliente_id = clientes.id
INNER JOIN produtos ON pedidos.produto_id = produtos.id
ORDER BY clientes.nome;
```

**Resultado esperado:**

| cliente | produto | quantidade | total |
|---|---|---|---|
| Ana Silva | Notebook | 1 | 3500.00 |
| Ana Silva | Mouse | 2 | 179.80 |
| Bruno Costa | Teclado | 1 | 149.90 |

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 24 — [EXERCICIO] EX03 — Meu E-commerce -->

# EX03 — Meu E-commerce

**Dupla · 15 minutos · DB Browser**

Com o banco do slide anterior ja criado e populado:

1. Adicione 1 cliente novo e 2 produtos novos (voce escolhe nomes e precos)
2. Crie 3 pedidos novos ligando seus clientes aos produtos
3. Escreva uma query que mostre: nome do cliente, produto e total gasto
4. Adicione um `WHERE` para mostrar apenas pedidos com total acima de R$ 100

<v-click>

> **Gabarito da query (passo 4):**
> ```sql
> SELECT
>     clientes.nome                        AS cliente,
>     produtos.nome                        AS produto,
>     produtos.preco * pedidos.quantidade  AS total
> FROM pedidos
> INNER JOIN clientes ON pedidos.cliente_id = clientes.id
> INNER JOIN produtos ON pedidos.produto_id = produtos.id
> WHERE  produtos.preco * pedidos.quantidade > 100
> ORDER BY total DESC;
> ```

</v-click>

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 25 — Intervalo -->

# Intervalo

*10h40 – 10h50*

Proximo bloco: **CPU-Z na pratica** — instalar e ler o hardware do seu proprio PC

---
layout: center
card: true
bgPreset: animate
---

<!-- SLIDE 26 — [DIVISOR] Bloco 3: Arquitetura e GPU -->

# Bloco 3
## Arquitetura de Computadores e GPU

*UC06 · 10h50–12h20 · CPU-Z na pratica*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 27 — [TEORIA] O Que e CPU-Z -->

# O Que e CPU-Z?

**CPU-Z** e um programa gratuito que le os dados reais do hardware do computador diretamente do chip — em tempo real, sem abrir o gabinete.

| O que ele mostra | Por que isso importa |
|---|---|
| Modelo e fabricante da CPU | saber exatamente o que voce tem |
| Clock atual (MHz) | velocidade real de processamento |
| Numero de nucleos | quantas tarefas em paralelo |
| Cache L1/L2/L3 | memoria ultrarapida dentro do chip |
| Velocidade da RAM | DDR4? DDR5? Qual frequencia? |
| Modelo da GPU | integrada ou dedicada? |

<v-click>

> E como ter uma radiografia tecnica do PC — sem precisar desmontar nada.

</v-click>

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 28 — [TEORIA] Instalando o CPU-Z -->

# Instalando o CPU-Z

**Link direto:** `https://www.cpuid.com/softwares/cpu-z.html`

**Passos:**
1. Clique em **Download** (coluna "Windows — Setup")
2. Execute o arquivo `.exe` baixado
3. Clique em **Next** > **I Agree** > **Next** > **Install** > **Finish**
4. Abra pelo atalho na area de trabalho ou pelo menu Iniciar

<v-click>

**Primeira tela que voce ve:** aba **CPU** com o modelo e clock do processador ja carregados automaticamente.

**Sem internet na sala?** Avise o professor — instalador disponivel em pendrive.

</v-click>

---
layout: default
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 29 — [EXERCICIO] EX04 — Os 5 Dados do Meu PC -->

# EX04 — Os 5 Dados do Meu PC

**Individual · 10 minutos · caderno obrigatorio**

Abra o CPU-Z e anote os dados abaixo no caderno. Nao anotar = nao vale.

| # | O que buscar | Onde no CPU-Z | Minha resposta |
|---|---|---|---|
| 1 | Modelo da CPU | Aba CPU — campo "Name" | ____________ |
| 2 | Clock atual (MHz) | Aba CPU — secao "Clocks" > "Core Speed" | ____________ |
| 3 | Numero de nucleos | Aba CPU — campo "Cores" | ____________ |
| 4 | Velocidade da RAM (MHz) | Aba Memory — campo "DRAM Frequency" | ____________ |
| 5 | Modelo da GPU | Aba Graphics — campo "Display Device" | ____________ |

> **Bonus:** qual o tamanho do cache L3? (Aba Cache — campo "L3")

---
layout: default
card: true
bgPreset: default
---

<!-- SLIDE 30 — [TEORIA] O Que Cada Dado Significa -->

# O Que Cada Dado Significa

| Dado | Explicacao acessivel |
|---|---|
| **Modelo da CPU** | O "nome" do processador — como o modelo de um carro |
| **Clock (MHz/GHz)** | Operacoes por segundo em cada nucleo — mais alto = mais rapido individualmente |
| **Nucleos (Cores)** | Quantas tarefas simultaneas — mais nucleos = melhor para IA e renders |
| **Velocidade da RAM** | Quao rapido dados chegam da memoria ate a CPU — gargalo frequente |
| **GPU** | Processador grafico — integrada (fraca) ou dedicada (potente para modelos de IA) |

<v-click>

**Contexto IA:** treinar redes neurais usa GPU porque ela tem **milhares de nucleos** calculando em paralelo. A CPU tem poucos nucleos, mas cada um e muito mais rapido para logica sequencial.

</v-click>

---
layout: brainstorm
card: true
bgPreset: animate
pulse: true
---

<!-- SLIDE 31 — [DEBATE] CPU vs GPU — O Que Voce Viu? -->

# CPU vs GPU — O Que Voce Viu?

**Compartilhe 1 dado com a turma:**

- Quem tem o maior numero de nucleos na sala?
- Alguem tem GPU dedicada (diferente de "Intel Graphics" ou "Radeon Graphics" integrada)?
- Qual e a maior velocidade de RAM encontrada?
- O que mais surpreendeu voce ao abrir o CPU-Z pela primeira vez?

> **Professor:** anote no quadro os dados da turma e compare. Com base nos numeros de hoje, qual PC da sala seria melhor para treinar um modelo de IA?

---
layout: end
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
bgPreset: animate
---

<!-- SLIDE 32 — Encerramento -->

# A15 encerrada

**O que foi coberto hoje:**

- `while` — loop com condicao de parada: maquina de cafe, fila de suporte
- `.append()`, `.pop()`, `.sort()` — metodos essenciais de lista: carrinho de compras
- Relacional vs NoSQL — quando usar cada tipo de banco e por que
- BD local com SQLite: projetar esquema, criar tabelas com FK, inserir e consultar com JOIN
- CPU-Z — leitura real do hardware: clock, nucleos, RAM, GPU

**Proxima aula (A16 — 20/04):**

Visita tecnica + Classificacao em IA — Decision Trees e K-Means
