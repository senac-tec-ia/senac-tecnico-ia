---
# ─────────────────────────────────────────────────────────────────
#  A07 — 19/03/2026 (Quinta-feira) — Semana 2
#  BLOCO 1: UC07 · Transformação Digital — Ferramentas de IA (3 HA)
#  BLOCO 2: UC01 · Fundamentos da Computação — Word (2 HA)
#  BLOCO 3: UC02 · Inglês Instrumental — Fixação Vocabulário IA (1 HA)
# ─────────────────────────────────────────────────────────────────
theme: ./
colorSchema: dark
transition: slide-left
title: "Técnico em IA — Aula 07"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 07"
bgPreset: palette
# ─────────────────────────────────────────────────────────────────
---

<!-- ============================================================
     BLOCO 1 — UC07 · TRANSFORMAÇÃO DIGITAL (slides 1–18)
     Ferramentas de IA · Prompt Engineering · LGPD básico
     ============================================================ -->

---
layout: cover
bgPreset: palette
---

# Ferramentas de IA na Prática

## Aula 07 · 19/03/2026 · Quinta-feira
**UC07 · Transformação Digital · UC01 · Fundamentos da Computação · UC02 · Inglês Instrumental**

---
layout: cover
bgPreset: animate
---

# Bloco 1 · Transformação Digital

## 7h10 – 9h35 · 3 horas-aula
**Ferramentas de IA · Prompt Engineering · Cases 2025 · LGPD Básico**

> Indicadores: Ind.2 — utiliza ferramentas digitais de IA conforme boas práticas · Ind.3 — considera segurança digital na transformação digital

---
layout: brainstorm
bgPreset: palette
pulse: true
---

<!-- objetivo: aluno reativa conhecimento de A01/A02 sobre 4ª Revolução e IA setorial (WEF, 2016) -->

# O Que Você Já Sabe?

## Revisão rápida — responda em voz alta

- 🏭 O que é a **4ª Revolução Industrial**?
- 📊 O que é **Big Data** — dê um exemplo do seu cotidiano
- 🏥 **IA em qual setor** você mais lembra das aulas anteriores?
- 💼 Qual profissão você viu que **IA está transformando**?

> 💡 Não há resposta errada. O objetivo é lembrar — não repetir.

---
layout: brainstorm
bgPreset: palette
pulse: true
---

<!-- objetivo: aluno conecta uso cotidiano de IA com conceito formal de transformação digital -->

# Você Usou IA Hoje?

## Antes de chegar aqui, quantas IAs você já ativou?

- 📱 **WhatsApp** → sugestão de resposta automática
- 🎵 **Spotify / YouTube** → playlist recomendada pra você
- 📸 **Google Photos / TikTok** → reconhecimento de rosto
- 🗺️ **Waze / Google Maps** → rota inteligente com trânsito em tempo real
- 🛒 **iFood / Magazine Luiza** → "você também pode gostar de..."

> A IA não é tecnologia do futuro — **é o que está ligado agora enquanto você lê isso.**

---
layout: default
bgPreset: palette
card: true
---

<!-- objetivo: aluno categoriza ferramentas de IA em 4 famílias funcionais (OpenAI, Anthropic, Adobe, ElevenLabs, 2024) -->

# As 4 Famílias de Ferramentas de IA

## Um mapa para não se perder

| Família | O que faz | Exemplos |
|---|---|---|
| 📝 **Texto** | Escreve, resume, responde, explica | ChatGPT · Claude · Gemini · Copilot |
| 🖼️ **Imagem** | Cria e edita imagens a partir de texto | Midjourney · DALL-E · Firefly |
| 💻 **Código** | Escreve, sugere e corrige código | GitHub Copilot · Cursor · Tabnine |
| 🎙️ **Voz / Áudio** | Clona voz, cria música, transcreve | ElevenLabs · Suno · Whisper |

> Toda ferramenta de IA que você vai encontrar no mercado cabe em uma dessas 4 caixas.

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno identifica ferramentas de IA de texto e seus casos de uso reais -->

# 📝 Família Texto

## ChatGPT · Claude · Gemini · Microsoft Copilot

**O que fazem:**
- Respondem perguntas em linguagem natural
- Resumem textos longos (artigos, contratos, relatórios)
- Redigem e-mails, relatórios, código, roteiros
- Explicam conceitos em qualquer nível de complexidade

**Quem usa:**
- Estudantes → resumos e explicações de matéria
- Profissionais de RH → triagem de currículos
- Jornalistas → esboços de artigos
- Você → para ajudar nos exercícios **deste curso**

> 🔗 **Conexão futura:** em Python (A08+) você vai aprender a chamar essas APIs programaticamente.

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno compreende como ferramentas de geração de imagem funcionam via texto (prompt-to-image) -->

# 🖼️ Família Imagem

## Midjourney · DALL-E 3 · Adobe Firefly

**Como funciona:**
1. Você escreve um **texto descritivo** (prompt)
2. A IA interpreta cores, estilos, composição
3. Gera imagens originais em segundos

**Casos de uso reais:**
- 🎨 Criação de capas para portfólios e apresentações
- 📣 Material para redes sociais (posts, thumbnails)
- 🏗️ Visualização de produtos antes de existirem
- 📚 Ilustrações para materiais didáticos

**Detalhe importante:** as imagens geradas são **originais** — não são cópias de imagens existentes.

> 💡 Adobe Firefly usa apenas conteúdo licenciado para treino — é o mais seguro para uso profissional.

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno reconhece que ferramentas de IA de código aceleram programação mesmo para iniciantes -->

# 💻 Família Código

## GitHub Copilot · Cursor · Tabnine

**O que fazem:**
- Sugerem a próxima linha de código enquanto você digita
- Completam funções inteiras a partir de um comentário
- Explicam o que um código faz em português
- Identificam e corrigem erros automaticamente

**Por que importa para você:**
- Você vai usar **Python** neste curso a partir da A08
- GitHub Copilot está disponível **grátis** para estudantes
- Cursor é um editor de código com IA integrada

**Analogia:** é como ter um programador sênior sentado ao lado, sugerindo soluções em tempo real.

> 🔗 Vocês vão configurar o Copilot no VS Code ainda neste trimestre.

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno conhece ferramentas de IA de voz/áudio e seus casos de uso e riscos éticos -->

# 🎙️ Família Voz / Áudio

## ElevenLabs · Suno · OpenAI Whisper

**ElevenLabs — Clonagem de Voz:**
- Replica voz humana com qualidade profissional
- Usado em audiolivros, podcast, dublagem
- ⚠️ Risco: deepfake de voz — saber identificar é essencial

**Suno — Geração de Música:**
- Cria músicas completas (letra + melodia) a partir de texto
- "Crie uma música de reggae sobre banco de dados"
- 2025: mais de 10 milhões de músicas geradas por dia

**OpenAI Whisper — Transcrição:**
- Converte fala em texto com alta precisão
- Suporta português do Brasil
- Usado em legendas automáticas e acessibilidade

> 🧠 O próximo slide tem um fato sobre o Suno que vai te surpreender.

---
layout: default
bgPreset: palette
card: true
---

<!-- objetivo: aluno aplica categorização das 4 famílias a situações do cotidiano -->

# ✏️ Exercício N1 — Qual Família Usaria?

## Leia cada situação e identifique a família correta

*Famílias: 📝 Texto · 🖼️ Imagem · 💻 Código · 🎙️ Voz-Áudio*

1. Você precisa criar uma capa bonita para seu portfólio do curso de IA.
2. Você quer que a IA te ajude a corrigir um erro no seu código Python.
3. Você gravou um áudio de 10 minutos e quer converter em texto escrito.
4. Você quer que a IA escreva um e-mail formal para um professor.
5. Você quer criar uma vinheta musical para o seu canal do YouTube.

<v-click>

> **Gabarito:**
> 1. 🖼️ Imagem
> 2. 💻 Código
> 3. 🎙️ Voz-Áudio (Whisper)
> 4. 📝 Texto
> 5. 🎙️ Voz-Áudio (Suno)

</v-click>

---
layout: center
bgPreset: animate
card: true
pulse: true
---

<!-- objetivo: quebra cognitiva — aluno processa escala real da criação musical por IA -->

# 💡 Fato Curioso

## Suno AI — 2025

### Em **um único dia**, o Suno gera mais músicas do que toda a indústria fonográfica mundial produziu **em um século**.

> 🎵 10 milhões de músicas por dia.
> A Sony Music lançou ~300.000 faixas em toda a sua história.

**O que isso muda?**
Não é o fim da música — é o fim da escassez de produção.
O valor migra da *execução técnica* para a *curadoria e identidade*.

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno compreende que a qualidade do output da IA depende diretamente da qualidade do input (prompt) -->

# Prompt Engineering

## O que separa um resultado medíocre de um resultado excelente?

**Analogia:** Pedir para a IA fazer algo é como **dar instrução para um estagiário brilhante que não conhece nada do seu contexto.**

| Instrução vaga | Instrução clara |
|---|---|
| "Me explica banco de dados" | "Você é professor de TI. Explique banco de dados para um aluno de 16 anos que nunca programou. Use uma analogia com agenda de contatos. Máximo 5 linhas." |

**O que acontece com instrução vaga:**
- Resposta genérica demais
- Nível errado (muito técnico ou muito simples)
- Formato inadequado para o que você precisa

> A IA não lê a sua mente — **ela usa exatamente o que você escreve.**

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno memoriza os 4 componentes do prompt estruturado e aplica em situações reais -->

# Anatomia do Prompt

## 4 componentes que garantem um resultado profissional

**🎭 Papel** — Defina quem a IA deve ser
> "Você é um professor de Python para iniciantes..."

**📋 Contexto** — Dê o cenário
> "...estou aprendendo a programar, tenho 17 anos, nunca vi código antes..."

**🎯 Tarefa** — Diga exatamente o que quer
> "...explique o que é uma lista em Python..."

**📐 Formato** — Especifique como quer a resposta
> "...use 3 exemplos do cotidiano, máximo 10 linhas, sem jargão técnico."

**Prompt completo:**
> "Você é um professor de Python para iniciantes. Estou aprendendo a programar, tenho 17 anos, nunca vi código antes. Explique o que é uma lista em Python usando 3 exemplos do cotidiano, máximo 10 linhas, sem jargão técnico."

---
layout: default
bgPreset: palette
card: true
---

<!-- objetivo: aluno reescreve prompts ruins aplicando a estrutura Papel·Contexto·Tarefa·Formato -->

# ✏️ Exercício N2 — Melhore Este Prompt

## Reescreva usando: 🎭 Papel · 📋 Contexto · 🎯 Tarefa · 📐 Formato

**Prompt ruim 1:**
> "Me explica banco de dados"

**Prompt ruim 2:**
> "Faz um texto sobre transformação digital"

Reescreva cada um com os 4 componentes. Use o modelo do slide anterior.

<v-click>

> **Gabarito sugerido — Prompt 1:**
> "Você é um professor de TI do Senac. Sou aluno do curso Técnico em IA, ja vi o que é hardware e software. Explique banco de dados usando a analogia de uma planilha do Excel, em no máximo 8 linhas, com 2 exemplos práticos."

> **Gabarito sugerido — Prompt 2:**
> "Você é um consultor de tecnologia. Preciso apresentar transformação digital para colegas do meu curso técnico de 16-18 anos. Escreva um parágrafo de abertura (5–6 linhas) mostrando como IA mudou o varejo, com pelo menos 1 exemplo brasileiro."

</v-click>

---
layout: default
bgPreset: palette
card: true
---

<!-- objetivo: aluno cria prompt estruturado autônomo para situação real do seu cotidiano -->

# ✏️ Exercício N3 — Prompt do Zero

## Escolha uma situação e escreva um prompt completo (mínimo 4 linhas)

- [ ] **A)** Prompt para IA te ajudar a estudar funções matemáticas
- [ ] **B)** Prompt para criar roteiro de vídeo do TikTok sobre seu curso técnico
- [ ] **C)** Prompt para IA explicar um erro de Python que você não entendeu
- [ ] **D)** Prompt para criar apresentação sobre IA para sua família

**Use obrigatoriamente os 4 componentes:**
🎭 Papel · 📋 Contexto · 🎯 Tarefa · 📐 Formato

<v-click>

> **Critério de avaliação:** o prompt precisa ter os 4 componentes identificáveis. Não há um único gabarito correto — a qualidade está na estrutura e especificidade. Um bom prompt permite que qualquer pessoa saiba exatamente o que você quer.

</v-click>

---
layout: two-cols-text
bgPreset: default
---

<!-- objetivo: aluno relaciona ferramentas de IA com transformação digital em empresas brasileiras reais -->

# IA no Brasil — Cases 2025

## Empresas brasileiras que já transformaram operações com IA

**🍔 iFood — Rota Inteligente**

O iFood usa IA para calcular a rota de entrega em tempo real, considerando trânsito, clima, capacidade do entregador e pedidos simultâneos. Resultado: **redução de 18% no tempo médio de entrega** em 2024.

A IA do iFood processa mais de **1,5 milhão de pedidos por dia** — nenhum humano conseguiria rotear isso manualmente.

::right::

**🏛️ GOV.BR — Atendimento por IA**

O portal GOV.BR implementou assistente virtual com IA para atender cidadãos em serviços como CPF, INSS e Título de Eleitor.

- **12 milhões** de atendimentos/mês em 2025
- Redução de **40%** na fila de atendimento humano
- Disponível 24h — sem horário de expediente

> 💡 Ambos os cases mostram IA resolvendo problema de **escala** — fazer muito mais com os mesmos recursos humanos.

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno aplica princípios básicos da LGPD ao uso cotidiano de ferramentas de IA (ANPD, Lei 13.709/2018) -->

# 🔒 LGPD Básico ao Usar IA

## O que você **não deve** colocar em ChatGPT, Claude ou qualquer IA

**⛔ Dados pessoais sensíveis:**
- CPF · RG · número de cartão · senha
- Endereço completo · data de nascimento completa
- Dados de saúde · diagnósticos · laudos

**⛔ Dados de terceiros sem consentimento:**
- Informações de colegas, familiares ou clientes
- Fotos de pessoas sem autorização

**✅ O que é seguro:**
- Textos genéricos · conceitos · dúvidas técnicas
- Código sem dados reais · resumos de conteúdo público

**Por quê?** As IAs gratuitas podem usar seus inputs para treinar futuros modelos. Você consente com isso nos Termos de Uso — mas **você não pode consentir pelos dados de outras pessoas.**

> 📜 LGPD (Lei 13.709/2018) — Princípio da **Finalidade**: dados só podem ser usados para o fim pelo qual foram coletados.

---
layout: brainstorm
bgPreset: palette
pulse: true
---

<!-- objetivo: aluno formula posição argumentada sobre uso ético de IA em contexto educacional -->

# IA é Trapaça ou Ferramenta?

## Debate Estruturado — 10 minutos

**Grupo A — Trapaça:** *"Usar IA para fazer trabalho escolar é trapaça porque o aluno não aprende."*

**Grupo B — Ferramenta:** *"Usar IA é uma habilidade do século XXI — proibir é como proibir calculadora."*

### Regras:
1. Cada grupo tem **3 minutos** para preparar 2 argumentos
2. Apresentação: **1 minuto** por grupo
3. Réplica: **30 segundos** cada
4. Professor media e conclui

> 🔗 **Próximo:** Intervalo 9h35 → Bloco 2 (Word no VS Code) às 9h50

<!-- ============================================================
     BLOCO 2 — UC01 · FUNDAMENTOS DA COMPUTAÇÃO (slides 19–29)
     Word: Interface · Criar e Salvar · Formatação · Margens ABNT
     ============================================================ -->

---
layout: cover
bgPreset: animate
---

# Bloco 2 · Fundamentos da Computação

## 9h50 – 11h30 · 2 horas-aula
**Word: Interface · Criar e Salvar · Formatação · Margens ABNT**

> Indicador: Ind.3 — cria, nomeia e formata documentos digitais conforme padrões profissionais

---
layout: brainstorm
bgPreset: palette
---

<!-- objetivo: aluno confirma domínio de comandos mkdir e cd no terminal integrado do VSCode -->

# 🛠 Hands-on: Terminal no VSCode

## Abram o VS Code → Terminal → New Terminal

**Missão em 5 minutos:**

1. `mkdir relatorios` — crie uma pasta nova
2. `cd relatorios` — entre nela
3. `dir` — confirme que está vazia
4. `cd ..` — volte para a pasta anterior

**Quem terminar primeiro:** digita o caminho completo da nova pasta no chat da turma.

> 🔑 Lembrete: `Tab` autocompleta o nome da pasta. `cls` limpa o terminal.

---
layout: brainstorm
bgPreset: palette
pulse: true
---

<!-- objetivo: aluno conecta ferramenta Word a situações reais do seu cotidiano profissional -->

# Para Que Serve o Word?

## Antes de usar, entenda quando usar

**Pergunta para a turma:**
> Quando foi a última vez que alguém te pediu um documento escrito?

**Situações reais onde Word é necessário:**
- 📄 **Currículo** — na maioria das vagas ainda se pede .docx ou .pdf
- 📊 **Relatório técnico** — resultado de projeto, trabalho escolar
- 📑 **Contrato** — freelance, estágio, prestação de serviços
- 🎓 **TCC / Monografia** — regras ABNT que o Word suporta nativamente
- 📧 **Ofício / Carta formal** — comunicações institucionais

> O Word não é "velho" — é o idioma do mundo corporativo. Saber usar é diferencial.

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno navega pelas abas principais da Faixa de Opções com vocabulário correto -->

# Interface do Word — Faixa de Opções

## O que fica em cada aba (Ribbon)

| Aba | Nome em inglês | O que tem dentro |
|---|---|---|
| **Página Inicial** | Home | Fonte, tamanho, negrito, itálico, alinhamento, marcadores |
| **Inserir** | Insert | Tabelas, imagens, cabeçalho, rodapé, número de página |
| **Layout** | Layout | Margens, orientação, tamanho do papel, colunas |
| **Referências** | References | Sumário automático, notas de rodapé, citações |
| **Exibir** | View | Zoom, régua, modo de leitura, painel de navegação |

**Dica:** quando não sabe onde está algo, use a **barra de pesquisa** no topo (`Alt+Q`).

> 📌 Foco desta aula: **Página Inicial** e **Layout**.

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno cria e salva documento Word com nomenclatura profissional em snake_case -->

# Criar, Salvar e Nomear

## As 4 regras de um documento profissional

**1. 💾 Ctrl+S — salve agora e salve sempre**
> Hábito: a cada parágrafo concluído, Ctrl+S. O Word trava. O servidor cai. O notebook fecha.

**2. 📁 snake_case no nome do arquivo**
> ✅ `relatorio_ia_joao_silva.docx`
> ❌ `Relatório IA João Silva final (1) NOVO.docx`

**3. 📄 Extensão certa**
> `.docx` → para edição | `.pdf` → para envio

**4. 📂 Pasta correta**
> `SENAC-TecIA/Aula-07/` — estrutura que vamos usar em Python também

**Salvar Como:** Arquivo → Salvar Como → navegar até a pasta → nomear → Salvar

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno configura margens ABNT no Word seguindo norma técnica brasileira (ABNT NBR 14724) -->

# Configurar Página — Margens ABNT

## Caminho: Layout → Margens → Personalizar Margens

**Margens padrão ABNT NBR 14724:**

| Margem | Medida |
|---|---|
| Superior | 3 cm |
| Esquerda | 3 cm |
| Inferior | 2 cm |
| Direita | 2 cm |

**Demais configurações:**
- **Orientação:** Retrato (Portrait) — padrão para relatórios
- **Tamanho do papel:** A4 (21 × 29,7 cm)
- **Espaçamento entre linhas:** 1,5 — definir em Parágrafo → Espaçamento

> 💡 Salve um modelo `.dotx` com as configurações ABNT e reutilize em todos os trabalhos.

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno aplica formatação básica de texto e alinhamento conforme documento técnico -->

# Formatação de Texto

## Aba Página Inicial — os controles que você mais vai usar

| Ação | Atalho | Quando usar |
|---|---|---|
| **Negrito** | Ctrl+B | Termos técnicos, títulos internos, ênfase |
| **Itálico** | Ctrl+I | Estrangeirismos, títulos de obras, destaque suave |
| **Sublinhado** | Ctrl+U | Evite — parece link. Use negrito no lugar |
| **Centralizado** | Ctrl+E | Títulos, cabeçalhos |
| **Justificado** | Ctrl+J | Corpo do texto — padrão ABNT |
| **Espaçamento** | Parágrafo → 1,5 | ABNT para texto corrido |

**Fonte padrão:**
- Corpo do texto: **Arial ou Times New Roman, 12pt**
- Títulos: **14pt ou 16pt, negrito**

> 🚫 Evite: Comic Sans, letras coloridas, múltiplos tamanhos, tudo em maiúsculas.

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno entende diferença entre .docx (edição) e .pdf (envio) e executa exportação -->

# Por Que Exportar em PDF?

## Arquivo → Exportar → Criar PDF/XPS

**O problema do .docx enviado:**
- Fonte diferente no destinatário → layout quebra
- Margens podem mudar conforme versão do Word
- O destinatário pode editar (proposital ou acidental)

**O PDF resolve tudo:**
- ✅ Layout preservado em qualquer dispositivo
- ✅ Não editável sem querer
- ✅ Menor tamanho para envio
- ✅ Impressão idêntica ao que você vê

**Regra prática:**
> Trabalhe em `.docx`. Antes de enviar, exporte para `.pdf`.
> Entregue o `.pdf`. Guarde o `.docx` para revisões futuras.

**Atalho alternativo:** `F12` → Salvar Como → tipo "PDF"

---
layout: default
bgPreset: palette
card: true
---

<!-- objetivo: aluno cria documento técnico completo com estrutura, formatação ABNT e exportação em PDF -->

# ✏️ Exercício N3 — Crie Seu Primeiro Relatório Técnico

## Você tem 15 minutos. Abra o Word e crie:

**Estrutura obrigatória:**
1. **Título** — "Ferramentas de IA que Eu Usaria" (14pt, negrito, centralizado)
2. **Seu nome e data** (12pt, centralizado, abaixo do título)
3. **Seção 1 — Introdução** (12pt, negrito): 2 frases sobre o que é IA
4. **Seção 2 — Ferramentas** (12pt, negrito): 2 ferramentas com 1 frase cada
5. **Seção 3 — Conclusão** (12pt, negrito): 1 frase sobre o que aprendeu hoje

**Requisitos:** margens ABNT (3-3-2-2) · Arial/TNR 12pt · espaçamento 1,5 · exportar como `relatorio_ia_seunome.pdf`

<v-click>

> **Critério de avaliação:**
> - Estrutura completa (título + 3 seções): 4 pts
> - Formatação correta (fonte, tamanho, espaçamento): 3 pts
> - Margens ABNT: 2 pts
> - Nome do arquivo em snake_case: 1 pt
>
> **Total: 10 pts** — base para a Tarefa de Casa

</v-click>

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno aplica convenções de versionamento e backup para documentos profissionais -->

# Boas Práticas: Versionar e Nomear com Data

## A diferença entre amador e profissional está na organização

**❌ Como a maioria faz:**

```
relatorio.docx
relatorio_final.docx
relatorio_final_v2.docx
relatorio_FINAL_DE_VERDADE.docx
```

**✅ Como profissional faz:**

```
relatorio_ia_2026-03-19_v1.docx
relatorio_ia_2026-03-19_v2.docx
relatorio_ia_2026-03-19_final.pdf
```

**3 regras:**
1. **Data no formato ISO:** `YYYY-MM-DD` — ordena cronologicamente
2. **Versão no final:** `_v1`, `_v2` — nunca "final_v2"
3. **Backup em nuvem:** OneDrive, Google Drive — antes de dormir

> 💡 Você vai usar essa convenção nos projetos Python também.

---
layout: center
bgPreset: default
---

<!-- objetivo: aluno consolida aprendizado do Bloco 2 e recebe gancho para próxima aula -->

# Resumo do Bloco 2

## O que você aprendeu sobre documentos digitais

- 📁 **Criar e nomear** com snake_case
- 📐 **Margens ABNT** — 3 cm sup/esq · 2 cm inf/dir
- ✏️ **Formatar** — Arial 12pt · 1,5 · justificado
- 💾 **Exportar** .docx → .pdf antes de enviar
- 🔢 **Versionar** — `_v1`, `_v2`, data ISO

> 🔗 **A08 (20/03):** tabela no Word + cabeçalho e rodapé
> 🔗 **Agora:** Inglês Instrumental às 11h30

<!-- ============================================================
     BLOCO 3 — UC02 · INGLÊS INSTRUMENTAL (slides 30–36)
     Fixação Bloco 3 — 10 Termos de IA em Inglês
     ============================================================ -->

---
layout: cover
bgPreset: animate
---

# Bloco 3 · Inglês Instrumental

## 11h30 – 12h20 · 1 hora-aula
**Fixação Bloco 3 — 10 Termos de IA em Inglês**

> Indicador: Ind.1 — reconhece e usa vocabulário técnico de IA em inglês em contexto real

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno localiza os 10 termos de IA no fluxo real de um projeto de machine learning -->

# O Pipeline de IA — Onde Vivem os Termos

## Um projeto de ML passa por estas etapas — e cada termo aparece aqui

| Etapa | O que acontece | Termos desta aula |
|---|---|---|
| **1. Dados** | Textos/imagens viram números | **token**, **embedding** |
| **2. Arquitetura** | Definição das camadas do modelo | **neural network**, **layer**, **weight** |
| **3. Treino** | Modelo aprende com exemplos | **epoch**, **gradient**, **loss** |
| **4. Avaliação** | Medição da qualidade | **model**, **pipeline** |

> Cada termo dos flash cards aparece numa dessas caixas.
> Em Python, você vai escrever todos eles no código.

---
layout: default
bgPreset: palette
card: true
---

<!-- objetivo: aluno memoriza definição funcional dos 10 termos de IA em inglês (vocabulário Bloco 3) -->

# Flash Cards — 10 Termos de IA

## Leia, repita em voz alta, guarde o conceito

| Termo | Definição funcional |
|---|---|
| **token** | Unidade mínima de texto que a IA processa (≈ palavra ou pedaço de palavra) |
| **embedding** | Representação numérica de uma palavra — IA vê números, não letras |
| **neural network** | Sistema de camadas que imita neurônios para aprender padrões |
| **layer** | Uma camada dentro da rede neural — entrada, oculta ou saída |
| **weight** | Peso ajustável que determina a importância de cada conexão |
| **epoch** | Uma passagem completa pelo conjunto de dados de treino |
| **gradient** | Direção e intensidade do ajuste dos pesos durante o treino |
| **loss** | Erro do modelo — quanto mais baixo, melhor o aprendizado |
| **model** | O resultado treinado: o arquivo que faz as previsões |
| **pipeline** | Sequência de etapas: dados → pré-processamento → modelo → resultado |

---
layout: brainstorm
bgPreset: palette
pulse: true
---

<!-- objetivo: aluno reconhece definição de termos de IA em inglês via dinâmica oral competitiva -->

# Quizão — "Levante a Mão" (1/2)

## Professor lê a definição — quem souber o termo levanta a mão primeiro

**Pergunta 1:** *"Número que mede o erro do modelo — quanto menor, melhor o aprendizado."*
<v-click>
> ✅ **loss**
</v-click>

**Pergunta 2:** *"Fazer uma passagem completa por todos os dados de treino. Treinar por 10 ___ significa repetir isso 10 vezes."*
<v-click>
> ✅ **epochs**
</v-click>

**Pergunta 3:** *"Uma camada de processamento dentro de uma rede neural."*
<v-click>
> ✅ **layer**
</v-click>

**Pergunta 4:** *"A sequência completa de etapas de um projeto de IA — do dado bruto ao resultado."*
<v-click>
> ✅ **pipeline**
</v-click>

---
layout: brainstorm
bgPreset: palette
pulse: true
---

<!-- objetivo: aluno identifica termos de IA em inglês a partir de exemplo concreto de uso -->

# Quizão — "Levante a Mão" (2/2)

## Agora com exemplos de uso real

**Pergunta 5:** *"O ChatGPT divide seu texto em pedaços chamados ___ antes de processar."*
<v-click>
> ✅ **tokens**
</v-click>

**Pergunta 6:** *"O arquivo que você baixa quando usa um modelo pré-treinado como o GPT-4 — é o ___ treinado."*
<v-click>
> ✅ **model**
</v-click>

**Pergunta 7:** *"Parâmetro numérico ajustado durante o treino — a rede tem bilhões desses."*
<v-click>
> ✅ **weight**
</v-click>

**Pergunta 8:** *"Vetor numérico que representa o significado de uma palavra — permite calcular que 'rei' − 'homem' + 'mulher' ≈ 'rainha'."*
<v-click>
> ✅ **embedding**
</v-click>

---
layout: default
bgPreset: default
card: true
---

<!-- objetivo: aluno reconhece palavras-chave do Python antes da primeira aula de programação (A08) -->

# Preview: Python Keywords (A08 — amanhã)

## Você vai usar esses termos em código na próxima aula

| Keyword | O que faz | Exemplo |
|---|---|---|
| `print` | Exibe resultado na tela | `print("Olá, mundo!")` |
| `if` | Condição — "se isso, faça aquilo" | `if nota >= 7:` |
| `for` | Repetição sobre uma sequência | `for item in lista:` |
| `def` | Define uma função reutilizável | `def calcular():` |
| `import` | Importa biblioteca externa | `import pandas as pd` |

**Conexão com os termos de hoje:**
> Em Python você vai escrever `model.fit(X, y, epochs=10)` para treinar por 10 **epochs** e avaliar o **loss** a cada rodada.

> 🔗 **A08 — 20/03 (amanhã):** primeiro código Python — `print()`, variáveis e tipos de dados.

---
layout: end
---