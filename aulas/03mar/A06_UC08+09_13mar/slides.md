---
# ─────────────────────────────────────────────────────────────────
#  AULA 06 — 13/03/2026 (Sexta-feira)
#  BLOCO 1: D08-UC06 · Banco de Dados (3 HA)
#  BLOCO 2: D09-UC07 · Funções Matemáticas (3 HA)
# ─────────────────────────────────────────────────────────────────
theme: ./
colorSchema: dark
title: "Técnico em IA — Aula 06"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 06"
bgPreset: palette
# ─────────────────────────────────────────────────────────────────
---

---
layout: cover
bgPreset: palette
---

<!-- capa da aula -->

# Aula 06
## Banco de Dados + Funções Matemáticas

*13 de março de 2026 · Primeira aula de duas novas disciplinas*

---
layout: center
card: true
bgPreset: animate
---

<!-- divisor de bloco 1 -->

# Bloco 1
## Desenvolvimento de Banco de Dados

*D08-UC06 · 7h10 - 9h30 · Indicadores 1 e 2*

---
layout: brainstorm
bgPreset: palette
pulse: true
---

<!-- [DEBATE] abertura: onde estao seus dados -->

# Onde seus dados estão guardados agora?

**Pense nos últimos 10 minutos da sua manhã...**

Você desbloqueou o celular. Abriu o WhatsApp. Viu o cardápio no iFood. Ouviu uma música no Spotify.

*Cada uma dessas ações criou ou leu dados. Mas onde eles ficam?*

---
layout: default
card: true
bgPreset: palette
---

<!-- [TEORIA] voce produz dados sem perceber -->

# Você produz dados sem perceber

- **Toda ação digital gera um registro** — hora, local, dispositivo, duração
- O Waze sabe onde você está e como está o trânsito na sua rua agora
- O Instagram mede por quantos segundos você parou em cada post
- O Google sugere a busca antes de você terminar de digitar

> Dados não são novidade. Catálogos telefônicos, fichas de biblioteca, cadernos de recados: sempre foram bancos de dados. O que mudou foi a **escala** e a **velocidade**.

---
layout: three-cols-img
bgPreset: palette
caption: "A organização de dados sempre existiu. O que mudou foi a escala e a velocidade."
---

<!-- [TEORIA] evolucao da organizacao de dados -->

::header::

# A evolução da organização de dados

**Um mesmo problema, três épocas diferentes**

---

**Caderno de Recados**

*(busca manual, uma pessoa por vez)*

![Caderno de recados e agenda de contatos](https://picsum.photos/seed/agenda2026/400/300)

::center::

**Planilha Excel**

*(centenas de linhas, uso pessoal)*

![Planilha eletrônica no computador](https://picsum.photos/seed/planilha2026/400/300)

::right::

**Banco de Dados**

*(milhões de registros, múltiplos usuários)*

![Servidor de banco de dados](https://picsum.photos/seed/servidor2026/400/300)

---
layout: default
card: true
bgPreset: animate
---

<!-- [EXERCICIO] N1 reconhecimento rapido -->

# Exercício rápido: é banco de dados?

**Levante a mão se você acha que o exemplo abaixo é um banco de dados:**

1. A lista de contatos do seu celular
2. Um cardápio escrito num quadro de giz
3. O histórico de pedidos do iFood
4. Uma foto salva na sua galeria
5. A playlist de músicas do Spotify

> **Spoiler:** quase todos os exemplos são ou dependem de um banco de dados. Até a foto salva nos servidores do Google Fotos conta! Vamos entender o porquê.

---
layout: default
card: true
bgPreset: animate
---

<!-- [TEORIA] excel como banco de dados -->

# Excel: o banco de dados que você já conhece

Quando você cria uma planilha com nome de alunos e notas, você está **modelando dados**. A estrutura é exatamente a mesma:

- **Planilha (aba)** — equivale a uma **tabela** no banco de dados
- **Linha** — um **registro** (um aluno, um produto, um pedido)
- **Coluna** — um **atributo** (nome, nota, telefone, cidade)
- **Célula** — um **valor individual** (o cruzamento de linha e coluna)

> Se você já usou Excel, você já praticou os conceitos fundamentais de banco de dados. O vocabulário muda, mas a lógica é a mesma.

---
layout: default
card: true
bgPreset: palette
---

<!-- [TEORIA] anatomia de uma tabela de dados -->

# Anatomia de uma tabela de dados

| id | nome | nota | cidade |
|---|---|---|---|
| 1 | Ana Silva | 8,5 | São Paulo |
| 2 | Bruno Costa | 7,2 | Campinas |
| 3 | Carla Mota | 9,0 | Santos |

**Regras de ouro de uma boa tabela:**

- Cada linha tem um **id único** — a chave primária (não se repete nunca)
- Cada coluna armazena **um único tipo de informação**
- Nenhuma célula fica vazia sem necessidade real

---
layout: default
card: true
bgPreset: animate
---

<!-- [EXERCICIO] N2 monte sua tabela -->

# Exercício 01: monte uma tabela

**Contexto:** você trabalha numa loja de games e precisa organizar o estoque.

No papel ou no bloco de notas, crie uma tabela com:

1. Pelo menos **4 colunas** relevantes para um produto de games
2. Pelo menos **3 linhas** com dados fictícios
3. Defina qual coluna seria a **chave primária** (identificador único)
4. Escreva uma "pergunta" que você faria a essa tabela

> **Exemplo de pergunta:** "Quais jogos de PS5 custam menos de R$200?"
> Em banco de dados, essa pergunta vira uma **query** (consulta). É exatamente o que o SQL resolve.

---
layout: default
card: true
bgPreset: palette
---

<!-- [TEORIA] quando o excel nao basta -->

# Quando o Excel começa a "travar"

**O Excel funciona bem para:** planilhas pessoais, relatórios mensais, até ~50 mil linhas.

**O Excel sofre quando:**

- Você tem **1 milhão de registros** (pedidos de um e-commerce)
- **Várias pessoas** precisam editar ao mesmo tempo (estoque de loja)
- Dados precisam se **relacionar**: uma venda tem um cliente, que tem um endereço...
- Você precisa de **segurança**: quem pode ver o CPF dos clientes?

> O banco de dados existe exatamente para resolver esses problemas em escala.

---
layout: brainstorm
bgPreset: animate
pulse: true
---

<!-- [DEBATE] o tamanho do banco do ifood -->

# Qual o tamanho do "Excel" do iFood?

Em 2023, o iFood processou mais de **600 milhões de pedidos**.

Cada pedido tem: cliente, restaurante, itens, preço, horário, endereço, avaliação...

*Uma planilha com 600 milhões de linhas pesaria mais de 100 GB e travaria qualquer computador ao abrir.*

**Para isso existe o SGBD.**

---
layout: default
card: true
bgPreset: animate
---

<!-- [TEORIA] o que e um SGBD -->

# SGBD: o programa que cuida de tudo

**SGBD** — Sistema de Gerenciamento de Banco de Dados

É o software que fica entre os dados e o usuário, garantindo:

- **Velocidade** — busca entre milhões de registros em milissegundos
- **Segurança** — controle de quem pode ver ou editar cada dado
- **Integridade** — impede dados inválidos (nota = "banana"? Bloqueado!)
- **Simultaneidade** — mil pessoas acessando ao mesmo tempo, sem conflito

**Exemplos do mercado:** MySQL (mais usado no mundo), PostgreSQL (open source robusto), SQLite (leve, está no seu celular), Oracle (grandes empresas)

---
layout: two-cols-text
bgPreset: palette
---

<!-- [TEORIA] excel vs sql comparacao -->

# Excel e SQL: a mesma língua, dois dialetos

## No Excel você...

- Seleciona colunas específicas para ver
- Filtra linhas por condição (ex: nota > 7)
- Ordena os resultados de A a Z
- Conta quantas linhas atendem a um critério
- Soma os valores de uma coluna

::right::

## Em SQL você escreve...

- `SELECT nome, nota`
- `WHERE nota > 7`
- `ORDER BY nome ASC`
- `COUNT(*)`
- `SUM(nota)`

---
layout: default
card: true
bgPreset: palette
---

<!-- [EXERCICIO] N2 jogo diga em SQL -->

# Jogo rápido: diga em SQL!

**Eu descrevo a ação no Excel, você completa a palavra-chave SQL:**

| Ação descrita | Palavra-chave SQL |
|---|---|
| "Mostrar" as colunas que quero ver | `___________` |
| "De qual tabela?" pegamos os dados | `___________` |
| "Filtrar" apenas linhas que atendem a condição | `___________` |
| "Ordenar" os resultados | `___________` |

> **Respostas:** SELECT / FROM / WHERE / ORDER BY
> O SQL foi criado para soar como inglês comum: *"Select nome from alunos where nota > 7"* — qualquer pessoa entende!

---
layout: default
card: true
bgPreset: animate
---

<!-- [TEORIA] primeira query SQL -->

# Sua primeira query SQL

**Tabela:** `alunos` com as colunas: `nome`, `nota`, `cidade`

**Pergunta:** como ver o nome e nota de quem tirou 7 ou mais, do maior para o menor?

```sql
SELECT nome, nota
FROM alunos
WHERE nota >= 7
ORDER BY nota DESC
```

**Lendo em voz alta:** selecione nome e nota / da tabela alunos / onde a nota for maior ou igual a 7 / ordenado por nota de forma decrescente.

---
layout: default
card: true
bgPreset: palette
---

<!-- [EXERCICIO] N3 traduza para SQL -->

# Exercício 02: traduza para SQL

**Você tem uma tabela `produtos` com: `nome`, `preco`, `categoria`, `estoque`.**

Escreva a query para cada situação:

1. Mostre o nome e preço de **todos** os produtos
2. Mostre apenas os produtos da categoria `'Eletronicos'`
3. Mostre produtos com `estoque` **menor que 5** (hora de repor o estoque!)
4. **(Desafio)** Mostre os **3 produtos mais caros** (pesquise a palavra-chave `LIMIT`)

> Escreva no papel. SQL é uma linguagem que se aprende **escrevendo**, não só lendo.

---
layout: brainstorm
bgPreset: animate
pulse: true
---

<!-- [DINAMICA] verdade ou mito BD -->

# Verdade ou Mito: Banco de Dados

**Levante a mão se você acha que é VERDADE:**

1. "Banco de dados e planilha Excel são exatamente a mesma coisa"
2. "O SGBD controla quem pode acessar ou editar os dados"
3. "SQL é uma linguagem de programação igual ao Python"
4. "Uma tabela pode ter duas linhas com o mesmo `id`"

*Vamos discutir cada uma agora, antes do intervalo!*

---
layout: center
card: true
bgPreset: palette
---

<!-- divisor intervalo -->

# INTERVALO
## 9h35 — 9h50

*Descanse, beba água e volte com energia para o Bloco 2!*

---
layout: center
card: true
bgPreset: animate
---

<!-- divisor bloco 2 -->

# Bloco 2
## Estatística Aplicada e Lógica Matemática

*D09-UC07 · 9h50 - 12h00 · Indicadores 1, 2, 3 e 4*

---
layout: brainstorm
bgPreset: palette
pulse: true
---

<!-- [DEBATE] matematica no cotidiano -->

# Matemática? Você já usa todos os dias!

**Nos últimos 30 minutos, você usou matemática sem perceber:**

- Calculou quanto tempo levaria para chegar aqui
- Olhou quanto de bateria tem no celular (porcentagem!)
- Decidiu se valia pagar mais no lanche ou economizar

*Matemática não é decorar fórmulas. É a linguagem que usamos para descrever como as coisas **mudam**.*

---
layout: default
card: true
bgPreset: palette
---

<!-- [TEORIA] o que e uma funcao matematica -->

# O que é uma função matemática?

Uma função é uma **regra** que transforma uma entrada em uma saída:

$$f(x) = \text{alguma operação com } x$$

**Entrada** → **Regra** → **Saída**

**Exemplos do dia a dia:**

- Termômetro: °C como entrada, °F como saída — a regra é $f(C) = 1{,}8C + 32$
- Uber: quilômetros percorridos como entrada, preço da corrida como saída
- Caixa de futebol: placar do jogo como entrada, resultado como saída

> Toda função tem uma entrada, uma regra e uma saída. Sem exceção.

---
layout: two-cols-text
bgPreset: animate
---

<!-- [TEORIA] funcao linear -->

# Função Linear: a linha reta

$$f(x) = ax + b$$

onde **a** é a taxa de variação (inclinação) e **b** é o valor de partida (ponto fixo).

**Exemplo: corrida de aplicativo**

- Bandeirada fixa: R$4,50 — esse é o **b**
- Taxa por km: R$1,80 — esse é o **a**
- Fórmula: $f(d) = 1{,}80 \cdot d + 4{,}50$

::right::

## Reconhecendo no cotidiano

- **Plano de telefone:** taxa fixa + custo por GB extra
- **Hora extra no trabalho:** salário base + taxa por hora
- **Conta de água:** taxa mínima + preço por m³ consumido
- **Corrida de ônibus:** tarifa fixa independente da distância

**Gráfico:** linha reta crescendo para a direita. Se dobrar x, o resultado cresce de forma previsível e proporcional.

---
layout: default
card: true
bgPreset: palette
---

<!-- [EXERCICIO] N2 calcule a corrida -->

# Exercício 03: calcule a corrida

**Um aplicativo de mobilidade cobra:**

- Bandeirada: R$4,50
- Taxa por km: R$1,80
- Taxa por minuto parado: R$0,50

**Calcule o valor para cada situação:**

1. Corrida de 5 km sem espera
2. Corrida de 8 km com 3 minutos parado no trânsito
3. **(Desafio)** Com R$25,00 no bolso e sem tempo de espera, qual é a distância máxima que você consegue percorrer?

> Escreva a função matemática **antes** de calcular: $f(d) = ?$

---
layout: default
card: true
bgPreset: animate
---

<!-- [TEORIA] funcao polinomial -->

# Função Polinomial: quando a curva aparece

$$f(x) = ax^2 + bx + c$$

A variável **x** aparece elevada a uma potência maior que 1. O gráfico não é mais uma linha reta — é uma **curva**.

**Exemplos no cotidiano:**

- **Distância de frenagem de um carro:** dobrar a velocidade não dobra a distância, **quadruplica** (regra do quadrado)
- **Trajetória de uma bola jogada para cima:** sobe e desce desenhando uma parábola
- **Área de uma sala:** se você dobra o lado, o espaço fica 4 vezes maior

> Em IA: as curvas de aprendizado de modelos frequentemente seguem funções polinomiais.

---
layout: brainstorm
bgPreset: animate
pulse: true
---

<!-- [DEBATE] crescimento viral -->

# Já viu isso acontecer?

**Um post que do nada explode no Instagram...**

Na 1ª hora: 10 curtidas

Na 2ª hora: 100 curtidas

Na 3ª hora: 1.000 curtidas

Na 4ª hora: 10.000 curtidas

*Qual é o padrão? Cada hora **multiplica** o resultado por 10.*

**Isso não é função linear. É algo completamente diferente.**

---
layout: default
card: true
bgPreset: palette
---

<!-- [TEORIA] funcao exponencial -->

# Função Exponencial: crescimento que explode

$$f(x) = a \cdot b^x \quad \text{onde } b > 1$$

A diferença fundamental: **x é o expoente**, não a base. O crescimento acelera cada vez mais rápido.

**Exemplos extremos:**

- **Viral nas redes:** cada compartilhamento gera mais compartilhamentos
- **Juros compostos:** R$1.000 a 10% ao ano vira R$2.594 em 10 anos
- **Crescimento de dados na internet:** o volume dobra aproximadamente a cada 2 anos

> Para a IA: o crescimento de dados que alimenta os modelos é exponencial. Por isso os modelos recentes são muito mais poderosos que os de 5 anos atrás.

---
layout: default
card: true
bgPreset: animate
---

<!-- [TEORIA] funcao logaritmica -->

# Função Logarítmica: comprimindo escalas gigantes

$$f(x) = \log_b(x)$$

O logaritmo é o **inverso** da exponencial. Serve para **comparar coisas muito diferentes** numa mesma escala visual.

**Por que isso é necessário?**

- **Escala Richter:** um terremoto 7.0 não é "um pouco" maior que 6.0, é **10 vezes** mais poderoso
- **Decibéis:** uma conversa normal (60 dB) não é o dobro de um sussurro (30 dB) em termos de energia sonora
- **Faturamento de empresas:** comparar startup com R$100 mil e gigante com R$100 bilhões na mesma escala

> Em IA: a função `log` aparece na fórmula de **entropia cruzada**, que é como os modelos medem o próprio erro durante o treinamento.

---
layout: default
card: true
bgPreset: palette
---

<!-- [EXERCICIO] N3 identifique a funcao -->

# Exercício 04: identifique o tipo de função

**Para cada situação, indique qual tipo melhor descreve o comportamento:**

**Linear / Polinomial / Exponencial / Logarítmica**

1. O preço de um táxi: R$3,00 fixo + R$2,00 por km
2. A trajetória de uma bola lançada para o alto
3. O número de views de um vídeo que viralizou
4. A escala de magnitudes de terremotos (Richter)
5. A área de um quadrado em função do comprimento do lado

> Discuta com o colega ao lado. Você tem **3 minutos** — depois vamos alinhar as respostas com a turma.

---
layout: center
card: true
bgPreset: animate
---

<!-- [ATIV AVALIATIVA] Kahoot final -->

# KAHOOT: Aula 06

**10 perguntas cobrindo Banco de Dados e Funções Matemáticas!**

Acesse **kahoot.it** no celular

**Código da sala:** *[insira o PIN aqui]*

*Quem acertar mais... ganha o respeito eterno da turma.*

---
layout: default
card: true
bgPreset: palette
---

<!-- [TAREFA DE CASA] -->

# Tarefa de Casa

**Para a próxima aula (sem entrega formal):**

**Banco de Dados:**
- Abra o Excel ou Google Sheets e crie uma tabela com tema livre (músicas, filmes, jogos, receitas...)
- Use pelo menos 5 colunas e 10 linhas de dados reais
- Identifique a chave primária e escreva 3 perguntas que você faria a essa tabela

**Funções Matemáticas:**
- Encontre 2 exemplos do cotidiano para cada tipo (linear, polinomial, exponencial, logarítmica)
- Anote por que você classifica cada um assim

> Se você fizer, a próxima aula vai fazer muito mais sentido. Prometido.

---
layout: end
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
bgPreset: animate
---

# Até a próxima aula!

## O que vem por aí

Banco de Dados: modelagem com múltiplas tabelas e SQL intermediário.

Estatística: probabilidade e medidas de tendência central no cotidiano.

*Dúvidas? Canal do Discord ou grupo do WhatsApp da turma.*
