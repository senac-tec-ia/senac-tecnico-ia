---
# ─────────────────────────────────────────────────────────────────
#  CONFIGURAÇÃO GLOBAL DA AULA: preencha antes de começar
# ─────────────────────────────────────────────────────────────────
theme: ../../../neural-slides-template
colorSchema: dark                # não alterar

# Metadados da aula
title: "Técnico em IA: Aula 03"  # título da janela/aba do browser
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial  # rodapé centro
aulaNum: "Aula 03"

# Plano de fundo padrão para todos os slides
# "default"  → rede neural em repouso (sutil)
# "animate"  → rede neural pulsando uniformemente
# "palette"  → rede neural pulsando com cores variadas (mais vibrante)
bgPreset: palette
layout: cover
# ─────────────────────────────────────────────────────────────────
---

# Técnico em Inteligência Artificial

## Aula 03 - Conceitos de Inteligência Artificial

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: marcar transição para a nova Parte 4 -->

# Parte 4
## Fundamentos de Inteligência Artificial

*Uma introdução acessível ao que é a IA, como surgiu e como funciona*

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno tem uma definição simples e precisa do que é IA -->

# O Que é Inteligência Artificial?

Inteligência Artificial é a capacidade de um sistema computacional de **aprender com dados**, **identificar padrões** e **tomar decisões** com mínima intervenção humana.

Não é mágica. É matemática, estatística e computação em ação.

| Tipo | Definição | Exemplos |
|---|---|---|
| **IA Fraca** | Focada em uma tarefa específica | Siri, Alexa, ChatGPT, filtro de spam |
| **IA Forte** | Inteligência geral como a humana | Ainda não existe em forma prática |

> Toda a IA que você usa hoje é **IA Fraca**: poderosa, mas especializada.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno distingue concretamente IA Fraca vs IA Forte com exemplos -->

<img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# IA Fraca vs IA Forte

**IA Fraca (Narrow AI)**: toda a IA existente hoje

Executa uma única tarefa com alta performance, mas não generaliza fora do seu domínio.

Exemplos: Siri, ChatGPT, Face ID, filtro de spam, recomendação no Spotify.

**IA Forte (AGI: Inteligência Geral Artificial)**

Raciocínio geral igual ao humano: aprenderia qualquer tarefa. Ainda não existe. Apenas teórica.

> Toda a IA que você usa hoje é **Narrow AI**. Poderosa, mas especializada em apenas uma coisa.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno conhece Alan Turing como figura fundadora da IA -->

<img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Alan Turing: O Pai da IA

**1936**: "On Computable Numbers": inventa os fundamentos teóricos do computador moderno.

**1943–45: Segunda Guerra Mundial:** cria a máquina **Bombe**, que decifra o código **Enigma** nazista. Estima-se que encurtou a guerra em 2 anos e salvou milhões de vidas.

**1950**: "Computing Machinery and Intelligence": pergunta *"Podem as máquinas pensar?"* e propõe o Teste de Turing.

**1952**: Perseguido pelo governo britânico. Morreu em 1954 com 41 anos.

> Em 2009, o primeiro-ministro britânico pediu desculpas formalmente. O prêmio mais importante da computação carrega seu nome.

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- objetivo: aluno compreende o mecanismo do Teste de Turing (1/2) -->

# O Teste de Turing (1/2)

**3 participantes, 1 pergunta central:**

1. Um avaliador humano faz perguntas livres em texto
2. Um humano responde normalmente
3. Um computador responde tentando parecer humano

Se o avaliador **não conseguir distinguir** qual é o computador, a máquina passou no teste.

> Isso não exige que a máquina "entenda": apenas que se **comporte como inteligente**.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno vê casos reais do Teste de Turing (2/2) -->

# O Teste de Turing (2/2)

**Quando aconteceu na vida real:**

**2014: Eugene Goostman:** programa simulando um menino de 13 anos enganou 30% dos juízes em competição formal.

**2018: Google Duplex:** o Assistente ligou para um salão de beleza e marcou consulta: a atendente não percebeu.

**Hoje: ChatGPT:** aprovado no exame da OAB americana, no ENEM e em entrevistas de emprego simuladas.


---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende a ligação histórica entre o cérebro biológico e as redes neurais artificiais -->

<img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# O Cérebro e a Máquina

**1943: McCulloch e Pitts**
Dois pesquisadores publicaram um **artigo** revolucionário: funções do cérebro como neurônios e sinapses podiam ser explicadas por **lógica matemática**.

Eles modelaram o neurônio biológico como uma função matemática simples: com entradas, pesos e uma saída.

**A hipótese:** Uma rede de unidades lógicas poderia processar informação, aprender e pensar.

> Ironicamente, neurologistas ignoraram o artigo. Quem prestou atenção foram os engenheiros de computadores.

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: aluno situa o marco de 1943 na história da IA -->

<div class="flex items-center gap-10 justify-center">
  <div class="flex-shrink-0 flex flex-col items-center">
    <div class="w-44 h-44 rounded-full overflow-hidden border-4 border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.45)]">
      <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80&fit=crop" class="w-full h-full object-cover" />
    </div>
    <div class="mt-3 text-4xl font-bold text-sky-400">1943</div>
  </div>
  <div class="max-w-lg">
    <h2 class="text-2xl font-bold text-white mb-3">McCulloch & Pitts — O Primeiro Modelo do Neurônio</h2>
    <p class="text-white/85 text-lg leading-relaxed">Dois pesquisadores publicam um artigo revolucionário: funções do cérebro podem ser descritas por <strong>lógica matemática</strong>. Modelam o neurônio biológico como uma função com entradas, pesos e saída.</p>
    <p class="text-white/60 mt-3 text-base italic">Neurologistas ignoraram. Engenheiros de computação prestaram atenção.</p>
  </div>
</div>

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: aluno situa o marco de 1950 na história da IA -->

<div class="flex items-center gap-10 justify-center">
  <div class="flex-shrink-0 flex flex-col items-center">
    <div class="w-44 h-44 rounded-full overflow-hidden border-4 border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.45)]">
      <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80&fit=crop" class="w-full h-full object-cover" />
    </div>
    <div class="mt-3 text-4xl font-bold text-sky-400">1950</div>
  </div>
  <div class="max-w-lg">
    <h2 class="text-2xl font-bold text-white mb-3">Alan Turing — "Podem as Máquinas Pensar?"</h2>
    <p class="text-white/85 text-lg leading-relaxed">Publica <em>Computing Machinery and Intelligence</em> e propõe o <strong>Teste de Turing</strong> — o primeiro critério prático para avaliar inteligência em máquinas.</p>
    <p class="text-white/60 mt-3 text-base italic">O artigo que lançou a pergunta central da IA — debatida até hoje.</p>
  </div>
</div>

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: aluno situa o marco de 1956 na história da IA -->

<div class="flex items-center gap-10 justify-center">
  <div class="flex-shrink-0 flex flex-col items-center">
    <div class="w-44 h-44 rounded-full overflow-hidden border-4 border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.45)]">
      <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80&fit=crop" class="w-full h-full object-cover" />
    </div>
    <div class="mt-3 text-4xl font-bold text-sky-400">1956</div>
  </div>
  <div class="max-w-lg">
    <h2 class="text-2xl font-bold text-white mb-3">Dartmouth — Nasce o Termo "Inteligência Artificial"</h2>
    <p class="text-white/85 text-lg leading-relaxed">John McCarthy organiza o <strong>Dartmouth Summer Research Project</strong>, reunindo os maiores pesquisadores da área. É a primeira vez que "Inteligência Artificial" é usado oficialmente.</p>
    <p class="text-white/60 mt-3 text-base italic">O momento em que um campo científico ganhou nome e identidade.</p>
  </div>
</div>

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: aluno situa o marco de 1959 na história da IA -->

<div class="flex items-center gap-10 justify-center">
  <div class="flex-shrink-0 flex flex-col items-center">
    <div class="w-44 h-44 rounded-full overflow-hidden border-4 border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.45)]">
      <img src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?w=400&q=80&fit=crop" class="w-full h-full object-cover" />
    </div>
    <div class="mt-3 text-4xl font-bold text-sky-400">1959</div>
  </div>
  <div class="max-w-lg">
    <h2 class="text-2xl font-bold text-white mb-3">Arthur Samuel — Primeiro Programa de Machine Learning</h2>
    <p class="text-white/85 text-lg leading-relaxed">Cria um programa de damas na IBM que <strong>aprende jogando</strong> — sem ser programado para cada jogada. É o primeiro exemplo registrado de aprendizado de máquina.</p>
    <p class="text-white/60 mt-3 text-base italic">Samuel inventou o termo "Machine Learning". Sua ideia central continua válida 65 anos depois.</p>
  </div>
</div>

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: aluno situa o marco de 1961 na história da IA -->

<div class="flex items-center gap-10 justify-center">
  <div class="flex-shrink-0 flex flex-col items-center">
    <div class="w-44 h-44 rounded-full overflow-hidden border-4 border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.45)]">
      <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80&fit=crop" class="w-full h-full object-cover" />
    </div>
    <div class="mt-3 text-4xl font-bold text-sky-400">1961</div>
  </div>
  <div class="max-w-lg">
    <h2 class="text-2xl font-bold text-white mb-3">Unimate — Primeiro Robô Industrial da História</h2>
    <p class="text-white/85 text-lg leading-relaxed">Vendido à <strong>General Motors</strong>, o Unimate realiza soldagem e manuseio de peças quentes 24/7. A IA começa a sair dos laboratórios e entrar nas fábricas.</p>
    <p class="text-white/60 mt-3 text-base italic">O início da automação industrial que transformou a manufatura global.</p>
  </div>
</div>

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: aluno situa o marco de 1965 na história da IA -->

<div class="flex items-center gap-10 justify-center">
  <div class="flex-shrink-0 flex flex-col items-center">
    <div class="w-44 h-44 rounded-full overflow-hidden border-4 border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.45)]">
      <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&fit=crop" class="w-full h-full object-cover" />
    </div>
    <div class="mt-3 text-4xl font-bold text-sky-400">1965</div>
  </div>
  <div class="max-w-lg">
    <h2 class="text-2xl font-bold text-white mb-3">ELIZA — O Primeiro Chatbot da História</h2>
    <p class="text-white/85 text-lg leading-relaxed">Joseph Weizenbaum cria o <strong>ELIZA</strong> no MIT — um programa que simula conversa usando padrões de texto. Usuários acreditavam estar conversando com um humano.</p>
    <p class="text-white/60 mt-3 text-base italic">O antepassado direto do ChatGPT, criado 58 anos antes.</p>
  </div>
</div>

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: aluno situa o marco de 1966 na história da IA -->

<div class="flex items-center gap-10 justify-center">
  <div class="flex-shrink-0 flex flex-col items-center">
    <div class="w-44 h-44 rounded-full overflow-hidden border-4 border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.45)]">
      <img src="https://images.unsplash.com/photo-1516116216624-53ad0571bbbb?w=400&q=80&fit=crop" class="w-full h-full object-cover" />
    </div>
    <div class="mt-3 text-4xl font-bold text-sky-400">1966</div>
  </div>
  <div class="max-w-lg">
    <h2 class="text-2xl font-bold text-white mb-3">Visão Computacional — Máquinas que Enxergam</h2>
    <p class="text-white/85 text-lg leading-relaxed">O MIT realiza as <strong>primeiras experiências de visão computacional</strong>: algoritmos que identificam objetos em imagens digitais. A base do Face ID e da direção autônoma.</p>
    <p class="text-white/60 mt-3 text-base italic">Uma pesquisa de verão que se tornou uma das áreas mais importantes da IA moderna.</p>
  </div>
</div>

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: aluno situa o marco de 1969 na história da IA -->

<div class="flex items-center gap-10 justify-center">
  <div class="flex-shrink-0 flex flex-col items-center">
    <div class="w-44 h-44 rounded-full overflow-hidden border-4 border-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.45)]">
      <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=400&q=80&fit=crop" class="w-full h-full object-cover" />
    </div>
    <div class="mt-3 text-4xl font-bold text-sky-400">1969</div>
  </div>
  <div class="max-w-lg">
    <h2 class="text-2xl font-bold text-white mb-3">McCarthy — Primeiro Carro Controlado por Computador</h2>
    <p class="text-white/85 text-lg leading-relaxed">John McCarthy projeta o <strong>Stanford Cart</strong>, o primeiro veículo navegado por computador. Precursor dos carros autônomos da Tesla, Waymo e Mercedes de hoje.</p>
    <p class="text-white/60 mt-3 text-base italic">55 anos depois, esse projeto virou uma indústria de trilhões de dólares.</p>
  </div>
</div>

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno conhece o contexto histórico do surgimento do termo IA em 1956 -->

<img src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Dartmouth 1956: O Nascimento da IA

John McCarthy organizou um estudo de 10 semanas em Dartmouth University com os maiores pesquisadores da área.

Foi a primeira vez que o termo **"Inteligência Artificial"** foi usado oficialmente.

**O objetivo declarado:**
*"Todo aspecto da aprendizagem e todas as características da inteligência podem ser descritos com tanta precisão que uma máquina pode ser programada para simulá-los."*

> O primeiro programa de IA da história, o Logic Theorist, resolveu teoremas matemáticos de forma mais elegante que os autores originais.

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende por que a IA passou por períodos de abandono e o que isso significa -->

# O Inverno da IA: Por Que Falhou?

## Expectativas demais (anos 70)

- Pesquisadores prometeram demais e entregaram menos
- Computadores da época tinham memória de apenas 128KB
- Fundos do governo americano foram cortados drasticamente
- Relatório Lighthill (1973, UK) condenou a IA por "objetivos grandiosos"

::right::

## O que ficou de lição

- Tecnologia leva mais tempo do que o previsto para maturar
- Sistemas baseados em regras fixas têm limites sérios
- Dados insuficientes inviabilizam qualquer modelo
- Computadores precisavam ficar mais rápidos e baratos

> Em 1970, Simon previu que em 3 a 8 anos uma máquina poderia fazer qualquer coisa que um humano faz. **Ele estava errado**.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno conhece Hinton como o homem que não desistiu durante o inverno da IA -->

<img src="https://awards.acm.org/binaries/content/gallery/acm/awards/photo/h-j/hinton_4791679" class="w-full h-full object-cover rounded-xl" />

::right::

# Geoffrey Hinton: O Homem que Não Desistiu

Anos 70 e 80: o "Inverno da IA". O mundo havia abandonado as redes neurais.

Financiamentos cortados. Pesquisadores mudando de área.

**Geoffrey Hinton ficou.**

Enquanto quase todo mundo desistia, ele continuou acreditando que o cérebro humano poderia ser modelado em código: e que computadores mais rápidos um dia provariam isso.

> "Às vezes você precisa ignorar o consenso científico para chegar ao que é verdadeiro." — Geoffrey Hinton

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende backpropagation de forma coloquial, sem jargão técnico, acessível para quem nunca viu computador -->

# Como uma Rede Neural Aprende a Acertar

Imagine que você aprende a jogar dardos **de olhos vendados**. Alguém te diz o quão longe do alvo foi. Você ajusta o ângulo e a força. Com o tempo, acerta.

**É assim que funciona o backpropagation.** Quando a rede erra uma previsão:

1. **Mede o erro**: o quão longe ficou da resposta certa
2. **Percorre de trás pra frente**: identifica quais conexões causaram o erro
3. **Ajusta os pesos**: corrige cada conexão matematicamente

Repetido **milhões de vezes**, a rede vai errando cada vez menos: até ficar precisa.

> Antes de Hinton (1986), ninguém sabia como ensinar redes com muitas camadas. **Ele resolveu esse problema.**

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende o problema de 1986 e a solução de Hinton (1/2) -->

# 1986: O Artigo que Ninguém Ouviu (1/2)

## O problema da época

- Redes neurais profundas **não conseguiam aprender**
- Ninguém sabia distribuir o erro por múltiplas camadas
- Computadores de 1986 eram lentos demais para testar em escala

::right::

## O que o artigo de Hinton fez

Mostrou como **propagar o erro de volta** por toda a rede, camada a camada: o backpropagation.

Ficou **ignorado por 26 anos**.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno conhece a virada de 2012 que validou Hinton (2/2) -->

# 1986: O Artigo que Ninguém Ouviu (2/2)

**2012: A Virada**

A rede **AlexNet**, usando backpropagation, venceu o ImageNet Challenge com margem histórica.

O erro em reconhecimento de imagens caiu de **26% para 15%**: um salto sem precedentes.

> O mundo parou e disse: **ele estava certo o tempo todo.**

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno conhece o reconhecimento final de Hinton e reflete sobre persistência e legado -->

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg/250px-Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg" class="w-full h-full object-cover rounded-xl" />

::right::

# 2018: O Nobel da Computação

Em 2018, Geoffrey Hinton, Yann LeCun e Yoshua Bengio dividiram o **Prêmio Turing**: o Nobel da computação: pelo desenvolvimento do Deep Learning (prêmio de US$ 1 milhão).

**A lição de Hinton:**
Décadas de pesquisa ignorada. Sem financiamento consistente. Resultados duvidados. Ele nunca parou.

Em 2012 o mundo percebeu que ele estava certo. Em 2018 recebeu o reconhecimento máximo.

> Em 2023, saiu do Google e alertou o mundo sobre os **riscos da IA que ajudou a criar**. Mesmo assim, diz que valeu a pena.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende o papel das GPUs como o hardware que viabilizou a IA moderna -->

# GPUs: O Hardware que Mudou a IA

A GPU foi criada para gráficos em jogos: mas sua arquitetura é perfeita para IA: treinar redes neurais exige a mesma operação matemática repetida **bilhões de vezes em paralelo**.

| Hardware | Núcleos | Melhor para |
|---|---|---|
| CPU | 8–16 | Lógica geral e tarefas variadas |
| GPU | 4.000–10.000 | Cálculo massivo em paralelo: IA |

Com GPU, o que levaria **semanas** passa a levar horas.

> A NVIDIA A100 executa 312 trilhões de operações por segundo: viabilizando modelos como o GPT-4.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno visualiza a linha do tempo 1986–2012 (1/2) -->

<img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Linha do Tempo: 1986–2012 (1/2)

**1986**: Backpropagation muda o jogo das redes neurais

**1997**: Deep Blue (IBM) vence Kasparov no xadrez

**2011**: IBM Watson vence os campeões do Jeopardy!

**2012**: AlexNet vence o ImageNet: renascimento do Deep Learning

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno visualiza a linha do tempo 2016–hoje (2/2) -->

<img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Linha do Tempo: 2016–Hoje (2/2)

**2016**: AlphaGo vence o campeão mundial de Go

**2022**: ChatGPT ultrapassa 100 milhões de usuários em 2 meses

**2023–hoje**: IA generativa transforma todas as indústrias

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: aluno absorve onde a IA está hoje — ubíqua mas ainda estreita -->

# Onde Estamos Hoje

A IA já está em todo lugar: mas ainda é Fraca.

- **Google** se define como uma empresa "IA-first" desde 2016
- **Meta, Microsoft, Amazon, Apple** investem bilhões por ano em IA
- Cada smartphone moderno tem um **chip dedicado a IA** (neural engine)
- O ChatGPT atingiu 100 milhões de usuários em **2 meses**: o produto de maior adoção da história

> Larry Page, co-fundador do Google: "A IA seria a versão ultimate do Google: um motor de busca que entende exatamente o que você quer e te dá a coisa certa."

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende o conceito de dado como matéria-prima da IA -->

# O Que São Dados para a IA?

Dados são qualquer informação que pode ser registrada, armazenada e processada.

Para a IA, dados são a **matéria-prima sem a qual nenhum modelo pode aprender**.

**Da menor à maior unidade:**

`1 bit → 1 byte → 1 KB → 1 MB → 1 GB → 1 TB → 1 PB → 1 EB → 1 ZB`

| Unidade | Equivalente |
|---|---|
| 1 Megabyte | Um livro pequeno |
| 1 Gigabyte | Cerca de 230 músicas |
| 1 Terabyte | 500 horas de filme |
| 1 Petabyte | 5 anos do sistema de observação da Terra |

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno distingue dados estruturados de não estruturados com exemplos concretos -->

<img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Dados Estruturados vs Não Estruturados

**Dados Estruturados (20% do total)**
Armazenados em linhas e colunas, como planilhas ou bancos de dados.
Exemplos: CPF, endereço, valor de compra, temperatura

**Dados Não Estruturados (80% do total)**
Sem formato pré-definido.
Exemplos: imagens, vídeos, áudios, textos de posts, tweets

**Dados Semi-Estruturados**
Têm algumas marcações de organização.
Exemplos: arquivos JSON e XML: usados em APIs

> A maior parte dos dados do mundo é **não estruturada**: e é aí que a IA faz a diferença.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno visualiza como o Big Data está presente no cotidiano -->

<img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Big Data no Dia a Dia

Cada ação digital gera dados:

- Você pesquisa no Google: dado de **intenção**
- Você assiste YouTube: dado de **preferência**
- Você paga com cartão: dado **financeiro**
- Você usa o GPS: dado de **localização**
- Você posta nas redes sociais: dado de **comportamento**

Por minuto no mundo: **156 milhões de emails** enviados, **4 milhões de vídeos** assistidos no YouTube.

> Os dados que você gera hoje estão treinando modelos que vão tomar decisões sobre você amanhã.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno conhece o ciclo de vida dos dados em um projeto de IA (CRISP-DM simplificado) -->

# A Jornada dos Dados em um Projeto de IA

O processo padrão de ciência de dados: **CRISP-DM**: organiza projetos em 6 etapas:

| Etapa | O que acontece |
|---|---|
| **1. Entender o problema** | Qual pergunta queremos responder? |
| **2. Entender os dados** | Quais dados temos? São confiáveis? |
| **3. Preparar os dados** | Limpar, organizar, remover erros |
| **4. Modelar** | Escolher e treinar o algoritmo |
| **5. Avaliar** | O modelo funcionou? Com que precisão? |
| **6. Implantar** | Colocar o modelo em produção |

> As etapas 1–3 consomem **80% do tempo**. Dados sujos geram modelos errados: *garbage in, garbage out*.

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: introduzir Machine Learning como o núcleo da IA moderna -->

# Como as Máquinas Aprendem?

Machine Learning é a capacidade de um sistema **melhorar automaticamente** com a experiência.

Em vez de programar regras explícitas, você fornece **dados e exemplos**: e o algoritmo descobre os padrões sozinho.

> "Um breakthrough em ML valeria dez Microsofts.": Bill Gates

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende a origem do ML com uma história cativante e acessível -->

<img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# O Jogo de Damas de Arthur Samuel

Em 1959, Arthur Samuel criou um programa que jogava damas na IBM.

**A revolução:** O programa **aprendia** jogando: sem ser explicitamente programado para cada jogada.

Cada partida melhorava o modelo. Com o tempo, o computador batia jogadores humanos.

**Lição central do ML:**
Um computador pode processar dados, encontrar padrões e fazer previsões **sem código explícito para cada situação**.

> Este foi o primeiro programa de Machine Learning da história.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno compreende o Aprendizado Supervisionado e vê onde já o usa no dia a dia -->

<img src="https://images.unsplash.com/photo-1527430253228-e93688616381?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Aprendizado Supervisionado

O algoritmo aprende com dados **rotulados**: que já têm a resposta certa. Como estudar com gabarito.

**Onde você já usou:**
- **Gmail** classifica spam automaticamente
- **Face ID** reconhece seu rosto e não o de mais ninguém
- **Score de crédito** prevê se um cliente vai pagar
- **Diagnóstico médico** classifica exames como positivo ou negativo

> Toda vez que o Gmail descarta um spam corretamente, um modelo supervisionado tomou essa decisão: silenciosamente.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende aprendizado não supervisionado e sua diferença com supervisionado -->

<img src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Aprendizado Não Supervisionado

O algoritmo recebe dados **sem rótulos** e descobre padrões por conta própria. Como um explorador sem mapa.

**Técnica mais usada: Clustering**: agrupar itens similares automaticamente.

**Onde é aplicado:**
- Segmentação de clientes por comportamento de compra
- Detecção de anomalias em redes (cibersegurança)
- "Quem comprou X também comprou Y" no e-commerce

> O aprendizado humano é amplamente não supervisionado: descobrimos a estrutura do mundo observando-o.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende aprendizado por reforço com exemplos cativantes de jogos e robótica -->

<img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Aprendizado por Reforço

O algoritmo aprende por tentativa e erro, recebendo **recompensas** por boas ações e **penalidades** por erros. Como aprender futsal sem manual.

**Casos históricos:**
- **AlphaGo**: venceu o campeão mundial de Go simulando milhões de partidas
- **OpenAI Five**: derrotou os melhores humanos no Dota 2
- Robôs que aprendem a caminhar em ambientes desconhecidos

> O robô Dactyl (OpenAI) aprendeu a resolver um cubo mágico equivalendo a 100 anos de prática humana: simulados em semanas.

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- objetivo: aluno consolida os 3 tipos de ML com comparação visual clara -->

# Os Três Tipos de Machine Learning

## Supervisionado
Dados com resposta certa: aprende com gabarito.
*Spam, fraude, diagnóstico, Face ID*

## Não Supervisionado
Dados sem rótulos: descobre padrões sozinho.
*Segmentação, anomalias, recomendações*

## Por Reforço
Aprende por tentativa e erro com recompensas.
*AlphaGo, robótica, veículos autônomos*

::right::

## Quando usar cada um?

| Você tem... | Use... |
|---|---|
| Dados + respostas certas | Supervisionado |
| Apenas dados brutos | Não Supervisionado |
| Ambiente interativo | Por Reforço |

> Na prática, um projeto de IA pode **combinar os três tipos** em etapas diferentes do processo.

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: introduzir redes neurais — o coração do Deep Learning -->

# O Que é uma Rede Neural?

Uma rede neural artificial é inspirada no funcionamento do **cérebro humano**.

O cérebro tem aproximadamente **86 bilhões de neurônios**, cada um conectado a milhares de outros.

As redes neurais artificiais imitam essa estrutura para **aprender padrões complexos** em dados.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno visualiza a analogia entre neurônio biológico e neurônio artificial -->

<img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Do Neurônio Biológico ao Artificial

**Neurônio biológico:**
- Recebe sinais (dendrites) → processa (corpo celular) → dispara (axônio)

**Neurônio artificial (Perceptron):**
- Recebe entradas com pesos (importância)
- Calcula a soma ponderada e aplica função de ativação
- Produz uma saída: dispara ou não

Em 1957, Frank Rosenblatt criou o **Mark 1 Perceptron**: o primeiro hardware que aprendia automaticamente ajustando pesos.

> O *New York Times* chamou de “embrião de um cérebro eletrônico”. Décadas depois, redes neurais provaram que a ideia era exatamente isso.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende a estrutura de camadas de uma rede neural -->

# Camadas: Entrada, Oculta e Saída

Uma rede neural é organizada em **camadas**: cada grupo de neurônios processa os dados de forma específica:

| Camada | Função | Exemplo |
|---|---|---|
| **Entrada** | Recebe os dados brutos | Pixels de uma imagem |
| **Ocultas** | Aprendem padrões progressivos | Bordas → formas → rostos |
| **Saída** | Gera o resultado final | "Gato" ou "Cachorro" |

**"Deep" Learning = rede com muitas camadas ocultas.** Cada camada aprende algo mais abstrato que a anterior: como uma hierarquia de percepção.

> Camada 1 detecta bordas. Camada 5 detecta olhos. Camada 10 reconhece rostos completos. Isso é aprendizado profundo.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno compreende o que é Deep Learning e por que é diferente do ML tradicional -->

<img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Deep Learning: Aprendizado Profundo

Deep Learning é um subconjunto do Machine Learning que usa **redes neurais com muitas camadas**.

**Por que é revolucionário:**
- Aprende características sozinho (sem seleção manual de atributos / feature engineering)
- Funciona muito bem com imagens, áudio, texto e vídeo
- Precisão superior em tarefas complexas

**Habilitado por:**
- Grandes volumes de dados (Big Data)
- GPUs com processamento massivo em paralelo
- Algoritmo de backpropagation (Hinton, 1986)

> Em 2012, a rede AlexNet reduziu o erro em reconhecimento de imagens de 26% para **15%**: um salto que levou o campo a uma revolução instantânea.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno conhece os tipos principais de redes neurais e onde cada uma é usada no cotidiano -->

# Diferentes Redes para Diferentes Problemas

## CNN: Para Imagens e Vídeos

Analisa imagens em pequenos pedaços, detectando padrões visuais como bordas, texturas e formas.

**Onde você já usou:**
- Face ID do iPhone
- Diagnóstico por imagem médica
- Câmeras de segurança inteligentes
- Moderação automática de fotos em redes sociais

::right::

## RNN: Para Texto, Fala e Séries

Processa dados em sequência, onde a **ordem importa**, com memória do contexto anterior.

**Onde você já usou:**
- Google Translate
- Siri, Alexa, Google Assistente
- Geração de texto pelo ChatGPT
- Legendas automáticas no YouTube

> Cada tipo de problema pede um tipo de rede. O técnico em IA aprende a escolher a ferramenta certa para cada situação.

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- objetivo: aluno vê casos reais de Deep Learning impactando saúde e meio ambiente -->

# Deep Learning em Ação

## Na Saúde

- Detecta **Alzheimer 6 anos antes** por análise de imagens cerebrais (UCSF)
- Reduz tempo de MRI em **10 vezes** com maior precisão (Subtle Medical, aprovado pelo FDA)
- Identifica câncer de pele com precisão igual ou superior a dermatologistas

::right::

## No Meio Ambiente

- **DeepMind (Google)** usa DL para gerenciar energia eólica: +20% de valor
- Previsão de terremotos com redes neurais (Caltech)
- Modelos climáticos: a primeira rede neural que ultrapassou 1 bilhão de bilhões de cálculos (NERSC)

> A IA vai além da tecnologia. Está resolvendo problemas que humanos sozinhos nunca resolveriam.

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: introduzir NLP como a forma de IA mais visível no cotidiano -->

# IA e Linguagem: NLP

**Natural Language Processing** é a capacidade da IA de **entender, interpretar e gerar linguagem humana**.

É o ramo de IA com maior impacto direto no dia a dia de estudantes, profissionais e consumidores.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende o que é NLP e por que é complexo -->

# O Que é NLP?

Linguagem humana é complexa: ambígua, cheia de contexto, metáforas e variações culturais.

**O que o NLP resolve:**
- Reconhecimento de fala (transformar voz em texto)
- Compreensão de texto (entender o significado)
- Geração de linguagem (escrever como um humano)
- Tradução automática (de um idioma para outro)
- Análise de sentimentos (detectar emoções em textos)

**Desafios:**
- Ambiguidade: "Banco" é um banco financeiro ou um banco de madeira?
- Ironia e sarcasmo são difíceis de detectar
- Diferentes dialetos e sotaques

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno reconhece as ferramentas de NLP que usa no cotidiano -->

<img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Siri, Alexa e ChatGPT

Todos usam NLP: mas em graus diferentes.

**Assistentes de voz (Siri, Alexa, Google)**
- Reconhecem fala e convertem em texto
- Interpretam a intenção da pergunta
- Executam ações ou fornecem respostas
- Aprendem com o uso

**ChatGPT e modelos generativos**
- Treinados com bilhões de páginas de texto
- Geram texto coerente, criativo e contextual
- Respondem perguntas, escrevem código, resumem textos

> Em 2019, o GPT-2 gerou 377 palavras de ficção convincente a partir de uma frase. Em 2022, o ChatGPT atingiu 100 milhões de usuários em 2 meses.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende como chatbots funcionam e onde já os usou -->

<img src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Como os Chatbots Funcionam

**Chatbots** são sistemas de IA que conversam com humanos: por texto ou voz.

**Pipeline básico:**
1. Usuário escreve uma mensagem
2. NLP processa e identifica a **intenção**
3. Sistema busca a resposta ou ação correta
4. Resposta é gerada e enviada ao usuário
5. O sistema aprende com o feedback

**Já usou sem perceber:**
- Suporte automático de e-commerce
- Chatbot do banco no app
- Assistente de agendamento online
- SAC de operadoras e companhias aéreas

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende o GPT como caso paradigmático de geração de linguagem por IA -->

<img src="https://images.unsplash.com/photo-1655720031554-a929595ffad7?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# GPT: Geração de Texto pela IA

O GPT (Generative Pre-trained Transformer) é treinado para **prever a próxima palavra** em um texto.

**GPT-2 (OpenAI, 2019):**
- Treinado em 8 milhões de páginas da web
- Gerou histórias, artigos e código convincentes
- OpenAI decidiu **não liberar o modelo completo** com medo de fake news

**ChatGPT (GPT-4):**
- Resolveu o ENEM com nota acima da média
- Passa na prova da Ordem dos Advogados dos EUA
- Escreve, programa, explica e raciocina

> A IA não entende o que escreve: ela prevê padrões estatísticos. Mas o resultado parece compreensão.

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: introduzir a seção sobre robôs físicos como manifestação da IA no mundo físico -->

# IA e Robôs Físicos

A IA não fica restrita ao digital. Ela usa os olhos, os braços e as pernas dos robôs para **agir no mundo físico**.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno conhece a evolução dos robôs com IA e os setores já transformados -->

<img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Robôs com IA: De Unimate ao Cobot

**1961: Unimate:** primeiro robô industrial, soldagem 24/7 na General Motors: sem aprender nada.

**2019: Flippy:** robô que cozinha hambúrgueres aprendendo com simulações em nuvem em tempo real.

**Hoje: Cobots:** trabalham ao lado de humanos, aprendem com visão computacional e se adaptam a ambientes imprevisíveis.

**Setores já transformados:**
- Logística: Amazon opera 750.000 robôs e continua contratando humanos
- Agricultura: robôs colhem frutas sensíveis sem causar danos
- Construção: drones inspecionam obras com visão computacional

> A Amazon tem 750.000 robôs nos seus centros de distribuição: e continua **contratando humanos** para trabalhar com eles.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno conhece os 5 níveis de autonomia de carros como exemplo tangível de IA aplicada -->

# Carros Autônomos: Os 5 Níveis

<SlideTable fullWidth>

| Nível | Descrição | Exemplo |
|---|---|---|
| **0** | Controle totalmente humano | Carro convencional |
| **1** | Assistência em uma função | Cruise control ou freio automático |
| **2** | Automação de duas funções | Tesla Autopilot |
| **3** | IA dirige, humano pode intervir | Mercedes EQS Drive Pilot |
| **4** | IA dirige em áreas definidas | Waymo em Phoenix, AZ |
| **5** | Completamente autônomo | Ainda não existe comercialmente |

</SlideTable>

> 71% dos americanos disseram ter **medo de andar em um carro autônomo** (AAA, 2019). A tecnologia avança mais rápido que a aceitação.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno vê os avanços reais de Tesla e Waymo como casos da IA em veículos -->

<img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Tesla e Waymo

**Tesla**
- Frota de carros coleta dados de todos os veículos do mundo
- Cada quilômetro treinado melhora o modelo para todos
- Chip próprio de IA: 6 bilhões de transistores, 36 trilhões de operações/segundo
- CEO Elon Musk: usou robôs demais na fábrica e quase faliu: "humanos são subestimados"

**Waymo (Google)**
- Opera serviço de táxi autônomo em Phoenix desde 2020
- 10 milhões de quilômetros em vias públicas
- Sem motorista de segurança em alguns modelos
- Chat de suporte no app para passageiros com dúvidas

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: marcar a transição para o tema de ética — crítico para a formação profissional -->

# Ética na Inteligência Artificial

A tecnologia mais poderosa da história também é a mais perigosa se mal utilizada.

**O que você precisa saber como futuro profissional de IA.**

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende o viés algorítmico com exemplos reais e memoráveis -->

<img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Viés Algorítmico: Quando a IA Erra

O Pinterest enviou emails de "parabéns pelo casamento" para pessoas que já eram casadas ou não pretendiam se casar: baseado em comportamento de pins.

O Target identificou gravidez de uma adolescente por padrões de compra e enviou anúncios para a casa: antes que ela contasse ao pai.

**Por que acontece?**
- Os dados de treinamento refletem preconceitos históricos
- Variáveis erradas ou irrelevantes são incluídas no modelo
- Falta de diversidade na equipe que criou o algoritmo

> Um modelo de reconhecimento facial treinado principalmente com rostos brancos erra muito mais ao reconhecer rostos negros: porque o dataset era enviesado.

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno conhece a LGPD e entende por que é fundamental para o profissional de IA -->

# Privacidade e LGPD

A **Lei Geral de Proteção de Dados (LGPD)**, Lei 13.709/2018, regula como dados pessoais podem ser coletados, usados e armazenados no Brasil.

Como profissional de IA, você **é diretamente responsável** por isso.

| Princípio | O que significa |
|---|---|
| **Finalidade** | Dados coletados só para fins declarados |
| **Necessidade** | Coletar apenas o mínimo necessário |
| **Consentimento** | Usuário deve aceitar explicitamente |
| **Segurança** | Dados devem ser protegidos contra acesso indevido |
| **Responsabilização** | Empresa e profissional respondem por violações |

> Em 2018, o Facebook perdeu US$ 100 bilhões em valor de mercado em um dia após o escândalo Cambridge Analytica: violação de dados de milhões de usuários.

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- objetivo: aluno conhece os princípios centrais de IA responsável -->

# IA Responsável: Os 5 Princípios

## Para quem desenvolve IA

- **Transparência**: o modelo pode ser explicado
- **Justiça**: não discrimina por raça, gênero ou origem
- **Privacidade**: dados protegidos e usados com consentimento
- **Responsabilidade**: o profissional responde pelo que criou
- **Robustez**: o sistema funciona mesmo em condições inesperadas

::right::

## Por que isso importa para você

Em 3 anos, você vai desenvolver modelos que afetam vidas reais:

- Um modelo de crédito pode negar financiamento injustamente
- Um sistema de recrutamento pode excluir candidatos por viés
- Um chatbot de saúde pode dar orientação errada

> Ética não é opcional. É parte da competência técnica de um profissional de IA.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno reflete sobre o impacto da IA nos empregos — com equilíbrio -->

<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# IA e o Futuro dos Empregos

**O que os dados mostram:**
- Empregos repetitivos e baseados em regras são os mais ameaçados
- Empregos que exigem julgamento, criatividade e empatia têm maior resistência
- 97 milhões de novos cargos serão criados (WEF 2024)

**O paradoxo:**
- A IA elimina trabalho de entrada de dados: cria demanda por engenheiros de dados
- Robôs substituem operadores: cria demanda por técnicos em automação e IA
- Chatbots atendem SAC simples: cria demanda por especialistas em NLP

> IBM: a IA vai mudar **todos os empregos** nos próximos 5 a 10 anos. Isso inclui quem desenvolve IA.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende a parceria humano+IA como modelo vencedor e vê exemplos concretos do seu futuro -->

<img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Humanos + IA: A Parceria que Vence

A questão não é: "A IA vai me substituir?"

A questão real é: **"Como usar a IA para fazer o que sozinho eu nunca conseguiria?"**

**O que a IA faz melhor:**
- Processar bilhões de dados sem errar
- Trabalhar 24/7 sem descanso
- Encontrar padrões invisíveis

**O que o humano faz melhor: e continuará fazendo:**
- Médicos com IA diagnosticam mais rápido e com mais precisão
- Programadores com Copilot escrevem código mais limpo
- Agricultores com drones monitoram hectares em horas
- Analistas com ML enxergam padrões em milhões de registros

> Você vai crescer como profissional sendo a **ponte** entre esses dois mundos.

---
layout: center
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- aula 01 — abertura dos fundamentos de computação -->

# Parte 5
## Fundamentos de Computação

*A base que todo profissional de tecnologia precisa dominar*

---
layout: big-img-text
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno constrói modelo mental claro de computador usando analogia do escritório -->

<img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# O Computador é Como um Escritório

- **A mesa** → onde você trabalha agora (**RAM**)
- **As gavetas** → onde você guarda tudo (**HD / SSD**)
- **Você, o funcionário** → quem processa e decide (**CPU**)
- **As ferramentas** → caneta, telefone, calculadora (**periféricos**)
- **O manual de procedimentos** → as regras de como trabalhar (**Sistema Operacional**)
- **As tarefas que recebeu** → o problema que o computador vai resolver (**dados de entrada**)

> Um computador é um **sistema organizado** que recebe informações, as processa seguindo instruções, e entrega resultados.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno aprende o modelo fundamental de computação: Entrada → Processamento → Saída -->

# A Regra de Ouro da Computação

Todo computador do mundo, sem exceção, funciona assim:

<div class="flex justify-center items-center gap-8 my-8 text-2xl font-bold">
  <div class="bg-blue-900 px-10 py-5 rounded-2xl text-center">ENTRADA</div>
  <div class="text-4xl opacity-60">→</div>
  <div class="bg-purple-900 px-10 py-5 rounded-2xl text-center">PROCESSAMENTO</div>
  <div class="text-4xl opacity-60">→</div>
  <div class="bg-green-900 px-10 py-5 rounded-2xl text-center">SAÍDA</div>
</div>

| Entrada | Processamento | Saída |
|---|---|---|
| Você digita uma palavra | O corretor analisa a grafia | Sugere a correção |
| Foto enviada ao app | IA detecta rostos | Tagueia as pessoas |
| Você aperta o volante | Computador calcula força e tração | Carro vira |

---
layout: big-img-text
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno define hardware com precisão e associa a uma analogia visual -->

<img src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# O Que é Hardware?

**Hardware** é tudo que você pode **tocar**: tem peso, forma, existe no mundo real.

<v-click>

**Exemplos:** CPU · GPU · RAM · SSD / HD · Teclado · Mouse · Monitor · Placa-mãe · Cooler

</v-click>

<v-click>

**Analogia com o corpo humano:** CPU = cérebro · RAM = memória de curto prazo · SSD = memória de longo prazo · Monitor = saída visual · Teclado = entrada de dados

</v-click>

<v-click>

> Sem hardware, não existe computador. Hardware é a **existência física** da máquina.

</v-click>

---
layout: big-img-text
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno define software com precisão e entende a relação inseparável com o hardware -->

<img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# O Que é Software?

**Software** é tudo que você **não pode tocar**: mas que diz ao hardware o que fazer. É a parte **lógica**: existe como código, instruções e dados.

<v-click>

**Exemplos:** Windows · Linux · macOS · Word · Excel · Chrome · Python · VS Code · WhatsApp · YouTube · Modelos de IA (GPT, Gemini)

</v-click>

<v-click>

**Analogia:** software é como uma **partitura musical**: o violão (hardware) existe fisicamente, mas sem a partitura (software) ele fica parado. Sem violão, a música não soa.

</v-click>

<v-click>

> Hardware e software são **inseparáveis**. Um precisa do outro para ter propósito.

</v-click>

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno distingue hardware de software rapidamente com tabela comparativa -->

# Hardware vs Software: Comparação Direta

<SlideTable :fullWidth="true">

| Característica | Hardware | Software |
|---|---|---|
| Pode ser tocado? | ✅ Sim | ❌ Não |
| Tem peso e forma? | ✅ Sim | ❌ Não |
| Como é alterado? | Troca física de peça | Atualização / reinstalação |
| Exemplos | CPU, RAM, mouse, SSD | Windows, Chrome, Python |
| O que faz? | Executa fisicamente | Instrui o hardware |
| Quem cria? | Engenheiros de hardware | Programadores |

</SlideTable>

> **Regra prática:** Se você derrubou no chão e pode quebrar: é **hardware**. Se você pode instalar e desinstalar: é **software**.

---
layout: big-img-text
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno entende a CPU sem excesso de jargão técnico -->

<img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# O Processador: CPU

**CPU = Central Processing Unit**

O **cérebro generalista** do computador: executa instruções uma por vez, com enorme velocidade.

- **Clock (GHz)**: quantas operações por segundo
- **Núcleos (Cores)**: processamentos paralelos
- **Cache**: memória ultrarrápida interna

Fabricantes: **Intel** e **AMD**

**Analogia:** a CPU é como um gerente inteligente: recebe tarefas (instruções do software), decide a ordem de execução e distribui para os núcleos.

> Para IA, vamos precisar de outro componente: a **GPU**.

---
layout: big-img-text
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno entende GPU no contexto de IA com analogia acessível -->

<img src="https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# A GPU: O Motor da IA

**GPU = Graphics Processing Unit**: criada para jogos, tornou-se essencial para treinar IA graças ao seu processamento paralelo massivo.

| | CPU | GPU |
|---|---|---|
| Núcleos | 8–16 | 4.000–16.000+ |
| Especialidade | Lógica geral | Cálculo paralelo |
| Uso em IA | Pré-processamento | Treinar modelos |

**Analogia:** CPU = artesão de alto nível: faz qualquer coisa com perfeição, mas um por um. GPU = linha de produção de fábrica: faz a mesma operação em 10.000 unidades ao mesmo tempo.

> Treinar IA = repetir a mesma operação matemática bilhões de vezes. Para isso, a **GPU** vence de longe.

---
layout: big-img-text
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno entende RAM de forma intuitiva com analogia da mesa de trabalho -->

<img src="https://images.unsplash.com/photo-1562976540-1502c2145186?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Memória RAM

**RAM = Random Access Memory**: a **mesa de trabalho** do computador. Tudo que está em uso agora fica aqui.

- **Temporária** → ao desligar, tudo é apagado
- **Veloz** → muito mais rápida que o SSD
- Medida em **GB**: 8, 16, 32, 64...

| RAM | O que consegue fazer |
|---|---|
| 8 GB | Programar Python, scripts simples |
| 16 GB | ML básico, datasets médios |
| 32 GB | Deep Learning intermediário |
| 64 GB+ | Modelos grandes, dados pesados |

> Quanto maior a mesa, mais documentos você mantém abertos ao mesmo tempo: sem precisar guardar e buscar nas gavetas.

---
layout: big-img-text
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno entende HD vs SSD de forma prática para o contexto do curso -->

<img src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Armazenamento: HD vs SSD

| | HD (Hard Disk) | SSD (Solid State) |
|---|---|---|
| Tecnologia | Disco magnético mecânico | Memória flash |
| Velocidade | ~120 MB/s | 3.000–7.000 MB/s |
| Resistência | Sensível a impactos | Resistente |
| Custo | Mais barato por GB | Mais caro |
| Uso ideal | Backup, arquivos frios | SO, projetos, código |

**Analogia:** HD = gaveta de arquivo físico: organizado, mas lento. SSD = post-its na tela: acesso imediato.

> Para programar e desenvolver IA: use sempre o **SSD**. O HD é para backups e arquivos frios.

---
layout: big-img-text
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno classifica periféricos e reconhece os do laboratório -->

<img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# Periféricos: Entrada e Saída

Os periféricos conectam o computador ao mundo externo.

| Entrada | Saída | Entrada/Saída |
|---|---|---|
| Teclado | Monitor | Pen drive |
| Mouse | Impressora | HD externo |
| Microfone | Caixas de som | Placa de rede |
| Webcam | Projetor | Touch screen |
| Scanner | Fones de ouvido | Headset |

---
layout: big-img-text
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno entende o papel do sistema operacional com analogia clara -->

<img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# O Sistema Operacional

O **Sistema Operacional (SO)** gerencia o hardware e fornece a base para todos os outros programas.

**Analogia:** O SO é o **gerente geral do escritório**: organiza recursos, distribui tarefas e garante que tudo funcione junto.

| SO | Uso principal |
|---|---|
| **Windows** | PCs domésticos e empresas |
| **macOS** | Computadores Apple |
| **Linux** | Servidores e IA |
| **Android / iOS** | Smartphones e tablets |

> Você aprende a programar no **Windows**. No mundo real, seus modelos de IA vão rodar em servidores **Linux**.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno aprende a usar o Windows como profissional de tecnologia -->

# Windows: Como um Profissional

Elementos essenciais que você precisa dominar:

<v-clicks>

- **Área de trabalho**: atalhos e janelas abertas
- **Barra de tarefas**: programas em execução e notificações
- **Menu Iniciar**: todos os programas instalados
- **Explorador de Arquivos**: navegar, criar e organizar pastas
- **Configurações**: personalizar o sistema
- **Terminal (PowerShell / Prompt)**: interface de texto para programadores

</v-clicks>

> Profissionais de tecnologia usam o **terminal** constantemente para rodar scripts, comandos de IA e operações de dados.

---
layout: two-cols
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno aprende a organizar arquivos de forma profissional desde o início -->

# Organização de Arquivos e Pastas

**Boas práticas:**
- Nomes **descritivos** e sem espaços
- Sem acentos em arquivos de código
- Use `_` para separar palavras: `analise_dados.py`
- Organize por **projeto**, não por tipo
- Pasta raiz clara: `meu_projeto/dados/`, `meu_projeto/notebooks/`

::right::

| Errado | Certo |
|---|---|
| `Meu Arquivo (1).py` | `analise_vendas.py` |
| `análise de dados.csv` | `dados_vendas.csv` |
| `TRABALHO FINAL v3.docx` | `relatorio_final.docx` |
| `pasta nova/copia.ipynb` | `projeto/exploracao.ipynb` |

> Convenção Python: **snake\_case** → letras minúsculas separadas por `_`

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno identifica extensões de arquivo que usará ao longo do curso -->

# Extensões de Arquivo: O Que Cada Uma Significa

<SlideTable :fullWidth="true">

| Extensão | Tipo | Quando você vai usar |
|---|---|---|
| `.py` | Script Python | Todo programa e script do curso |
| `.ipynb` | Jupyter Notebook | Análises interativas com gráficos |
| `.csv` | Dados tabulares | Datasets de Machine Learning |
| `.json` | Dados estruturados | Configurações e APIs |
| `.txt` | Texto puro | Logs e documentação simples |
| `.pkl` | Modelo salvo | Modelos de ML exportados |
| `.xlsx` / `.ods` | Planilha | LibreOffice Calc / Excel |
| `.zip` | Compactado | Enviar projetos e datasets |

</SlideTable>

---
layout: two-cols
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno aprende atalhos de teclado que aumentam produtividade imediatamente -->

# Atalhos de Teclado Essenciais

| Atalho | Função |
|---|---|
| `Ctrl + C` | Copiar |
| `Ctrl + V` | Colar |
| `Ctrl + X` | Recortar |
| `Ctrl + Z` | Desfazer |
| `Ctrl + S` | Salvar |
| `Ctrl + A` | Selecionar tudo |
| `Ctrl + F` | Buscar |

::right::

| Atalho | Função |
|---|---|
| `Alt + Tab` | Alternar janelas |
| `Win + E` | Explorador de Arquivos |
| `Win + D` | Área de trabalho |
| `F2` | Renomear arquivo |
| `F5` | Atualizar |
| `Ctrl + Shift + N` | Nova pasta |
| `Shift + Delete` | Excluir permanentemente |

> Dominar atalhos economiza **até 2 horas de trabalho por semana**.

---
layout: two-cols
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno conhece as ferramentas gratuitas que usará durante todo o curso -->

# Ferramentas do Profissional de IA

## No laboratório (já instalado)

- **VS Code**: editor de código mais usado do mundo
- **Python 3**: linguagem principal do curso
- **LibreOffice Calc**: planilhas e organização de dados
- **Git**: versionar e guardar seus projetos

::right::

## Online: grátis com conta Google

- **Google Colab**: Python + GPU gratuita no navegador
  [`colab.research.google.com`](https://colab.research.google.com)
- **GitHub**: guardar e mostrar projetos (portfólio)
- **Kaggle**: datasets reais + GPU gratuita
- **Hugging Face**: testar modelos de IA prontos

> Todas essas ferramentas são **gratuitas**: as mesmas usadas por profissionais de IA do mundo inteiro.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- objetivo: aluno visualiza o ambiente de desenvolvimento que usará desde a primeira aula prática -->

# Python e o Ambiente de Desenvolvimento

Python é a linguagem dominante em IA e ciência de dados.

**Por que Python?**
- Sintaxe clara: próxima ao inglês
- Maior ecossistema de bibliotecas para IA
- Gratuito e open source
- Usado por Google, Meta, NASA, CERN

| Ferramenta | Para que serve |
|---|---|
| Python | Linguagem principal |
| VS Code | Editor de código profissional |
| Jupyter Notebook | Análise e experimentos interativos |
| Google Colab | IA na nuvem, gratuito |
| Git / GitHub | Versionamento e portfólio |

> Na próxima aula prática, você vai escrever seu primeiro código Python.

---
layout: center
card: true
bgPreset: palette
---

<!-- objetivo: marcar transição para a Parte 6: síntese e encerramento -->

# Parte 6
## Conectando Tudo

*De onde viemos e para onde vamos*

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- objetivo: aluno entende por que os fundamentos de computação são base necessária para IA -->

# Por Que Fundamentos Importam para a IA?

## A IA não é mágica

É matemática, lógica e computação em ação.

Para desenvolver soluções de IA você precisa:

- Entender **como o hardware processa** dados
- Organizar **arquivos e projetos** profissionalmente
- Usar o **sistema operacional** com fluência
- Conhecer **memória e armazenamento** de dados

::right::

## A cadeia do aprendizado

```
Hardware (CPU/GPU/RAM/SSD)
        ↓
Sistema Operacional (Linux/Windows)
        ↓
Terminal / Linha de Comando
        ↓
Python + Bibliotecas (NumPy, Pandas)
        ↓
Machine Learning (Scikit-Learn)
        ↓
Redes Neurais e Deep Learning
        ↓
Soluções reais de IA
```

---
layout: default
card: true
bgPreset: palette
---

<!-- objetivo: aluno consolida a relação entre cada componente de hardware e seu papel em IA -->

# Hardware e IA: A Relação Direta

| Componente | Papel no Desenvolvimento de IA |
|---|---|
| **CPU** | Executa código Python e pré-processa dados |
| **GPU** | Treina modelos de Deep Learning em paralelo |
| **RAM** | Carrega datasets e modelos na memória ativa |
| **SSD** | Acesso rápido aos dados durante o treinamento |
| **Rede** | Baixa datasets, acessa APIs e serviços cloud |

> A NVIDIA A100 executa **312 trilhões de operações por segundo**: essencial para treinar modelos como o GPT e o Gemini.

---
layout: big-img-text
card: true
bgPreset: palette
---

<!-- objetivo: aluno visualiza a cadeia completa de conhecimento do curso de forma inspiradora -->

<img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&q=80&fit=crop" class="w-full h-full object-cover rounded-xl" />

::right::

# A Cadeia Completa do Técnico em IA

Tudo que você aprendeu hoje se conecta:

**Fundamentos** de computação sustentam...

**...o ambiente** de desenvolvimento que habilita...

**...o Python** que expressa...

**...os algoritmos** de ML e Deep Learning que processam...

**...os dados** que se tornam...

**...soluções de IA** que impactam o mundo real.

> Não há atalho. Cada parte da base torna o topo mais sólido.

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- objetivo: aluno sabe o que fazer agora e o que virá nos próximos meses -->

# O Caminho Pela Frente

## Primeiros passos (agora)

- Compreender o ambiente computacional
- Instalar e configurar ferramentas (Python, VS Code)
- Primeiros passos em Python
- Conceitos fundamentais de IA

::right::

## Próximas etapas do curso

- Lógica de programação em Python
- Banco de dados e SQL
- Estatística e visualização de dados
- Primeiros algoritmos de Machine Learning
- Redes Neurais Artificiais
- Deep Learning, NLP e Visão Computacional
- **Projeto integrador real de IA**

---
layout: brainstorm
card: true
bgPreset: palette
---

<!-- objetivo: aluno sai da aula com as ideias centrais consolidadas na memória -->

# Recapitulando

**O mundo está mudando** · **IA está em todo lugar** · **Você pode fazer parte disso**

- O mercado de IA cresce exponencialmente: 97 milhões de novos empregos
- O curso Técnico em IA prepara você em 3 anos com projeto real
- IA não é mágica: é matemática, dados e computação em ação
- Machine Learning aprende com dados; Deep Learning usa redes neurais profundas
- NLP é a IA que processa linguagem: de chatbots ao ChatGPT
- Ética e privacidade (LGPD) são responsabilidade do profissional de IA
- Python, GPU, RAM e SSD são sua infraestrutura de trabalho
- Fundamentos sólidos constroem carreiras longas e relevantes

---
layout: center
card: true
bgPreset: palette
pulse: true
---

# Recursos para Continuar Aprendendo

- **Curso Básico de Python - Aula 1 - Introdução ao Python: Hashtag Programação**
- **YouTube: Você sabe o que é Machine Learning? - Curso em vídeo**

## Avançado:

- **Kaggle.com**
- **Scikit-learn**
- **Pandas.py**

---
layout: two-cols
card: true
bgPreset: palette
---

<!-- objetivo: aluno e professor têm referências concretas para aprofundamento -->

# Referências e Recursos

## Documentação e aprendizado

- **Python.org**: documentação oficial
- **Google AI Education**: materiais gratuitos do Google
- **Kaggle.com**: datasets e competições de ML
- **fast.ai**: curso prático de Deep Learning
- **Papers with Code**: artigos com implementações reais

::right::

## Ferramentas do curso

- Python + VS Code
- Jupyter Notebook / Google Colab
- Pandas, NumPy, Matplotlib
- Scikit-Learn, TensorFlow

## Leitura recomendada

- *Artificial Intelligence Basics*: Tom Taulli
- *Inteligência Artificial*: Russell & Norvig
- *Hands-On Machine Learning*: Aurelien Geron

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
aulaNum: "Aula 01"
---

<!-- DIVISOR: início da Aula 01 — conteúdo prático -->

# AULA 01
## Fundamentos da Computação e Nivelamento

*Exercícios, Dinâmicas e Prática no LibreOffice Calc*

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- exercício 01 — classificação hardware vs software (slide 1/2) -->

# Exercício 01: Hardware ou Software? (1/2)

Classifique como **H** (Hardware) ou **S** (Software):

| Item | H ou S? |
|---|---|
| Mouse | ? |
| Windows 11 | ? |
| Memória RAM | ? |
| Microsoft Excel | ? |
| Placa de vídeo (GPU) | ? |

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- exercício 01 — classificação hardware vs software (slide 2/2) -->

# Exercício 01: Hardware ou Software? (2/2)

Continuação:

| Item | H ou S? |
|---|---|
| Google Chrome | ? |
| Teclado | ? |
| Python | ? |
| Monitor | ? |
| LibreOffice Calc | ? |

*Guarde as respostas: você vai usá-las no Calc 02.*

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- exercício 02 — reconhecer hardware real no Gerenciador de Dispositivos — nível 2: execução guiada -->

# Exercício 02: Identifique o Hardware do Seu Computador

Abra o **Gerenciador de Dispositivos** (`Win + X` → Gerenciador de Dispositivos) e preencha:

| Componente | Valor encontrado |
|---|---|
| Modelo do processador (CPU) | |
| Adaptador de vídeo (GPU) | |
| Unidades de disco listadas | |
| Nome da placa de rede | |
| Algum driver com erro (ícone ⚠️)? | Sim / Não |

> ⚠️ **Anote o modelo do processador e da GPU**: você vai usá-los no Calc 03.


---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- conceito: Entrada → Processamento → Saída — introdução antes do exercício 03 -->

# Entrada → Processamento → Saída

Todo sistema computacional segue este modelo:

<div class="flex justify-center items-center gap-6 my-6 text-xl font-bold">
  <div class="bg-blue-900 px-8 py-4 rounded-2xl text-center">ENTRADA<br/><span class="text-sm font-normal opacity-75">dados que chegam</span></div>
  <div class="text-3xl opacity-60">→</div>
  <div class="bg-purple-900 px-8 py-4 rounded-2xl text-center">PROCESSAMENTO<br/><span class="text-sm font-normal opacity-75">cálculo / decisão</span></div>
  <div class="text-3xl opacity-60">→</div>
  <div class="bg-green-900 px-8 py-4 rounded-2xl text-center">SAÍDA<br/><span class="text-sm font-normal opacity-75">resultado entregue</span></div>
</div>

| Exemplo | Entrada | Processamento | Saída |
|---|---|---|---|
| Assistente de voz | Sua voz | Análise de áudio | Resposta falada |
| GPS | Localização + destino | Cálculo de rota | Rota no mapa |
| Calculadora | Dois números | Operação matemática | Resultado |

> Este modelo se aplica a **todo** computador, programa ou sistema de IA do mundo.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- exercício 03 — modelo entrada-processamento-saída — nível 3: execução independente -->

# Exercício 03: Entrada → Processamento → Saída

Complete a tabela. Identifique a **Entrada**, o **Processamento** e a **Saída** em cada caso:

| Sistema | Entrada | Processamento | Saída |
|---|---|---|---|
| Assistente de voz (Google) | Sua voz | ? | ? |
| GPS calculando rota | ? | Análise de mapas e tráfego | ? |
| Corretor ortográfico | Texto com erro | ? | ? |
| Reconhecimento facial | ? | IA identifica o rosto | ? |
| Calculadora | Dois números + operação | ? | ? |

> **Guarde um exemplo do seu dia a dia no caderno**: você vai usá-lo no Exercício 05.

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 01"
---

<!-- debate 01 — reflexão após exercícios 01-03: modelo E→P→S na prática -->

# Debate: E→P→S ao Redor de Você


Pense nos sistemas que você usa todos os dias (celular, streaming, GPS, assistente de voz):

- **Entrada:** o que você fornece ao sistema?
- **Processamento:** o que o sistema calcula ou decide?
- **Saída:** o que você recebe como resultado?

> **Pergunta para debate:** existe algum sistema digital que **não** siga o modelo E→P→S? Por quê?

*Objetivo: consolidar o modelo antes de avançar para hardware e nomenclatura profissional.*

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 01"
---

<!-- exercício 04 — criar estrutura de projeto (slide 1/2) -->

# Exercício 04: Crie a Estrutura do Projeto (1/2)

Crie esta estrutura em **Documentos** agora:

```
SENAC-TecIA/
├── Aula-01/
│   ├── dados/
│   ├── anotacoes/
│   └── planilhas/
├── glossario/
└── projetos/
```

1. `Win + E` → Documentos → botão direito → Nova Pasta
2. Nome: `SENAC-TecIA` *(sem espaços, sem acento)*
3. Crie as subpastas conforme a estrutura acima

