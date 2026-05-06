# Plano de Aula — A22
**Data:** 08/05/2026 (Sexta-feira)
**Pasta:** `aulas/05mai/A22_UC08+09_08mai/`
**Status:** Aguardando implementação

---

## Composição do Dia

| Bloco | UC | HA | Papel no dia |
|---|---|---|---|
| Bloco 1 (manhã) | UC09 Estatística Aplicada | 2 HA | Retificação final Av06 + última janela Av05 |
| Bloco 2 (tarde) | UC09 + UC03 | 3 HA | Apresentações Av06 — Seminário de Funções |

> **Nota pedagógica:** A manhã é tempo de ajuste e encerramento de Av05. Após o intervalo: apresentações. A aula de sexta fecha o arco aberto na quinta (A21).

---

## Avaliações do Dia

**Av05 — SQL+Python: Banco na Prática**
- Última janela: início da aula até o intervalo
- Quem não entregou até o intervalo da sexta: Av05 encerrada definitivamente

**Av06 — Seminário de Funções Matemáticas (apresentações)**
- Começa após o intervalo
- 6 grupos × ~10 min cada
- Avaliação individual por papel
- Perguntas comuns (para qualquer aluno) + perguntas pontuais (por grupo)

---

## Decisões Pedagógicas

| Decisão | Escolha |
|---|---|
| Foco manhã | Ajuste final do Colab + entrega Av05 (última chance) |
| Foco tarde | Apresentações Av06 — cada aluno fala sua parte sem leitura |
| Avaliação | Individual por papel — dois do mesmo grupo podem ter notas diferentes |
| Perguntas | Comuns (qualquer grupo) + pontuais (por grupo) |
| Ordem grupos | Professor decide na hora — pode sortear |
| Linguagem alvo | ~14 anos, direta, sem jargão desnecessário |
| Palavra proibida | Nunca usar "scaffold" em nenhum slide |

---

## Perguntas da Apresentação

### Perguntas comuns (qualquer grupo pode receber)
- O que o `import` faz? Por que precisamos disso?
- Quais bibliotecas foram usadas e para que serve cada uma?
- O que é `np.linspace`? O que os três números dentro dele significam?
- O que acontece se você mudar o número de pontos do `linspace`?
- O que `plt.show()` faz?

### Perguntas pontuais por grupo
- **Grupo 1 (Linear):** O que muda no gráfico se você dobrar o valor de `a`?
- **Grupo 2 (Quadrática):** Onde está o vértice da parábola? Como o código te ajuda a ver isso?
- **Grupo 3 (Polinomial):** Por que o gráfico tem mais de uma "curva"?
- **Grupo 4 (Logarítmica):** O que acontece com `np.log(0)`? Por que o gráfico não começa em x=0?
- **Grupo 5 (Exponencial):** Qual é a diferença entre `np.exp(x)` e `2**x`?
- **Grupo 6 (Sigmoide):** Qual é o valor máximo e mínimo que essa função pode produzir? Por que isso é útil numa rede neural?

---

## Critérios de Avaliação (Av06 — por aluno)

Cada aluno é avaliado individualmente pelo seu papel:
1. Explica o seu bloco do código sem ler, sem ajuda do colega
2. Responde a pergunta pontual do grupo
3. Responde pelo menos uma pergunta comum
4. (Papel Mundo real) Trouxe número concreto + modificou o código para refletir o exemplo

---

## Lista de Slides

### PARTE 0 — CAPA E ABERTURA (~5 min)

| # | Título | Tag | Resumo |
|---|---|---|---|
| 1 | Capa: Aula 22 — Hora de Apresentar | [TEORIA] | Cover slide — arco fecha hoje: manhã = ajuste / tarde = apresentações |
| 2 | Como funciona o dia de hoje | [TEORIA] | Mapa do dia: manhã retificação e Av05 / após intervalo = apresentações Av06 |

---

### PARTE 1 — MANHÃ: RETIFICAÇÃO E ÚLTIMA JANELA AV05 (~até intervalo)

| # | Título | Tag | Resumo |
|---|---|---|---|
| 3 | Últimos ajustes no Colab | [ATIV AVALIATIVA] | Tempo para retificar o gráfico, ajustar parâmetros, preparar a fala. Av05: quem não entregou, entrega agora. |
| 4 | Checklist antes de apresentar | [EXERCICIO] | Cada membro: seu bloco roda? Você sabe explicar sem ler? Tem o número concreto do Mundo real? |

---

### PARTE 2 — TARDE: APRESENTAÇÕES AV06 (após intervalo)

| # | Título | Tag | Resumo |
|---|---|---|---|
| 5 | Regras das apresentações | [TEORIA] | Sem leitura, sem celular, cada membro fala sua parte. Professor pode perguntar qualquer coisa. |
| 6 | Como você será avaliado | [TEORIA] | Critérios por papel: explica código, responde pergunta pontual, responde pergunta comum, número concreto |
| 7 | Perguntas que podem vir pra qualquer grupo | [TEORIA] | Lista das 5 perguntas comuns — O que o import faz? O que é np.linspace? etc. |
| 8 | Grupo 1 — Linear (slide de apresentação) | [EXERCICIO] | Slide projetado enquanto o grupo apresenta — fórmula, papéis, pergunta pontual do grupo |
| 9 | Grupo 2 — Quadrática (slide de apresentação) | [EXERCICIO] | Idem — fórmula, papéis, pergunta pontual |
| 10 | Grupo 3 — Polinomial (slide de apresentação) | [EXERCICIO] | Idem |
| 11 | Grupo 4 — Logarítmica (slide de apresentação) | [EXERCICIO] | Idem |
| 12 | Grupo 5 — Exponencial (slide de apresentação) | [EXERCICIO] | Idem |
| 13 | Grupo 6 — Sigmoide (slide de apresentação) | [EXERCICIO] | Idem — inclui contexto de neurônio artificial |
| 14 | Debate final: o que você vai lembrar daqui 10 anos? | [DEBATE] | Pergunta aberta pós-apresentações — qual função você encontrou mais em IA? O que foi surpresa? |
| 15 | Encerramento — T1 fechando | [TEORIA] | Slide end: o que vem por aí + motivação para o T2 |

---

## Totais e Lint

| Item | Valor |
|---|---|
| Total de slides | 15 |
| [TEORIA] | 6 |
| [ATIV AVALIATIVA] | 1 |
| [EXERCICIO] | 7 |
| [DEBATE] | 1 |
| [TAREFA DE CASA] | 0 |

> ⚠️ **LINT NOTE:** Os slides 8–13 são 6 [EXERCICIO] consecutivos (um por grupo). Intencional — cada slide é o painel de apresentação do grupo, projetado enquanto aquele grupo fala. Não são slides expositivos sequenciais. Marcar como [EXCEÇÃO: painel-por-grupo].

---

## Status das UCs Neste Plano

| UC | Status |
|---|---|
| UC09 (2 HA manhã) | Retificação Av06 — aplicação de funções matemáticas em Python |
| UC09 + UC03 (3 HA tarde) | Apresentações Av06 — funções matemáticas contextualizadas em IA |
| **Todos** | ⏳ Aguardando implementação |
