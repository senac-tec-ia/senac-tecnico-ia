---
theme: ../../../neural-slides-template
colorSchema: dark
title: "Técnico em IA - Aula 22"
author: Leonardo Zanini
github: LeoZanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 22"
aulaDate: "2026-05-08"
unlockHour: 7
bgPreset: palette
layout: cover
---

# Aula 22

## Hora de Apresentar
## Av.06 - Seminário de Funções | 08/05/2026

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 22"
---

<!-- SLIDE 2 -->
<!-- objetivo: aluno sabe o que acontece em cada bloco do dia antes de começar -->

# Como funciona o dia de hoje

**Manhã (até o intervalo)**

- Tempo livre para ajuste final do Colab.
- Última chance de entregar a Av.05 - quem não entregar até o intervalo perde o prazo definitivamente

**Tarde (após o intervalo)**

- Apresentações da Av.06 - 6 grupos
- Cada grupo tem cerca de 10 minutos
- A nota é individual: dois alunos do mesmo grupo podem ter notas diferentes

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 22"
---

<!-- SLIDE 3 -->
<!-- objetivo: aluno usa o tempo da manhã para corrigir o código e preparar a fala -->

# Últimos ajustes no Colab

Você tem até o intervalo para:

- Verificar se o gráfico aparece corretamente
- Testar os parâmetros da função (mudar `a`, `b`, `c` e ver o que muda)
- Praticar a explicação do seu bloco em voz alta

**Av.05 ainda não entregou?**
Envie agora: `Av05 - NomeParceiro1 e NomeParceiro2: [link do Colab]` pelo Classroom.
Após o intervalo, a Av.05 está encerrada.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 22"
---

<!-- SLIDE 4 -->
<!-- objetivo: aluno verifica individualmente se está pronto para apresentar -->

# Checklist antes de apresentar

Antes de o intervalo acabar, confirme:

- Meu bloco do código roda sem erro?
- Consigo explicar o que cada linha faz, sem ler?
- Sei qual é a pergunta pontual do meu grupo?
- (Papel Mundo real) Trouxe um número concreto e mostrei ele no código?

Se algum ponto ainda está travado, use os minutos que restam para resolver.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 22"
---

<!-- SLIDE 5 -->
<!-- objetivo: aluno conhece as regras da apresentação antes de subir ao projetor -->

# Regras das apresentações

- Sem celular na mão enquanto você fala
- Sem ler papel ou tela - você explica com as suas palavras
- Cada membro fala o seu bloco
- O professor pode perguntar qualquer coisa para qualquer aluno durante ou após a apresentação
- A ordem dos grupos pode ser sorteada na hora

Se você travar, o professor faz uma pergunta para te ajudar a lembrar. Mas não vai dar a resposta.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 22"
---

<!-- SLIDE 6 -->
<!-- objetivo: aluno entende exatamente como a nota dele será formada -->

# Como você será avaliado

Cada aluno é avaliado pelo seu papel, individualmente:

1. Explica o seu bloco do código sem ler e sem ajuda do colega
2. Responde a pergunta pontual do seu grupo
3. Responde pelo menos uma pergunta comum (pode vir para qualquer grupo)
4. (Papel Mundo real) Trouxe um número concreto e modificou o código para refletir o exemplo

---
layout: default
card: true
bgPreset: animate
aulaNum: "Aula 22"
---

<!-- SLIDE 7 -->
<!-- objetivo: qualquer aluno sabe quais perguntas comuns pode receber durante as apresentações -->

# Perguntas que podem vir para qualquer grupo

Este slide fica projetado durante todas as apresentações.

- O que o `import` faz? Por que precisamos disso?
- Quais bibliotecas foram usadas e para que serve cada uma?
- O que é `np.linspace`? O que os três números dentro dele significam?
- O que acontece se você mudar o número de pontos do `linspace`?
- O que `plt.show()` faz?

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 22"
---

<!-- SLIDE 8 -->
<!-- objetivo: painel projetado enquanto o Grupo 1 apresenta -->

# Grupo 1 - Função Linear

**Fórmula:** `y = ax + b`

<SlideTable fullWidth>

| Papel | Bloco do código | O que explica |
|---|---|---|
| Fórmula | Parâmetros `a` e `b` no código | O que muda no gráfico ao alterar cada um |
| Dados | `np.linspace(início, fim, pontos)` | Por que esses valores de intervalo foram escolhidos |
| Cálculo | `y = a*x + b` | O que cada termo faz — por que a curva é uma reta |
| Gráfico | `plt.plot`, labels, title | O que cada eixo representa |
| Mundo real | Modifica `a` e `b` com dado real no código | Número concreto + fonte + por que a função modela isso |

</SlideTable>

O que muda no gráfico se você dobrar o valor de `a`?

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 22"
---

<!-- SLIDE 9 -->
<!-- objetivo: painel projetado enquanto o Grupo 2 apresenta -->

# Grupo 2 - Função Quadrática

**Fórmula:** `y = ax² + bx + c`

<SlideTable fullWidth>

| Papel | Bloco do código | O que explica |
|---|---|---|
| Fórmula | Parâmetros `a`, `b` e `c` no código | O que muda na parábola ao alterar cada um |
| Dados | `np.linspace(início, fim, pontos)` | Por que esses valores de intervalo foram escolhidos |
| Cálculo | `y = a*x**2 + b*x + c` | O que cada termo faz — por que a curva dobra |
| Gráfico | `plt.plot`, labels, title | O que cada eixo representa e onde está o vértice |
| Mundo real | Modifica `a`, `b` e `c` com dado real no código | Número concreto + fonte + por que a função modela isso |

</SlideTable>

Onde está o vértice da parábola? Como o código te ajuda a ver isso?

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 22"
---

<!-- SLIDE 10 -->
<!-- objetivo: painel projetado enquanto o Grupo 3 apresenta -->

# Grupo 3 - Função Polinomial (grau 3)

**Fórmula:** `y = ax³ + bx² + cx + d`

<SlideTable fullWidth>

| Papel | Bloco do código | O que explica |
|---|---|---|
| Fórmula | Parâmetros `a`, `b`, `c` e `d` no código | O que muda no gráfico ao alterar cada coeficiente |
| Dados | `np.linspace(início, fim, pontos)` | Por que esses valores de intervalo foram escolhidos |
| Cálculo | `y = a*x**3 + b*x**2 + c*x + d` | Por que o grau 3 faz a curva "dobrar" mais de uma vez |
| Gráfico | `plt.plot`, labels, title | O que cada eixo representa e o formato da curva |
| Mundo real | Modifica os parâmetros com dado real no código | Número concreto + fonte + por que a função modela isso |

</SlideTable>

Por que o gráfico tem mais de uma "curva"?

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 22"
---

<!-- SLIDE 11 -->
<!-- objetivo: painel projetado enquanto o Grupo 4 apresenta -->

# Grupo 4 - Função Logarítmica

**Fórmula:** `y = log(x)`

<SlideTable fullWidth>

| Papel | Bloco do código | O que explica |
|---|---|---|
| Fórmula | Parâmetro `x` e domínio no código | Por que `x` precisa ser maior que zero |
| Dados | `np.linspace(início, fim, pontos)` | Por que o intervalo não começa em zero |
| Cálculo | `np.log(x)` | O que a biblioteca calcula — o que log significa |
| Gráfico | `plt.plot`, labels, title | Como a curva desacelera conforme `x` cresce |
| Mundo real | Modifica o intervalo com dado real no código | Número concreto + fonte + por que a função modela isso |

</SlideTable>

O que acontece com `np.log(0)`? Por que o gráfico não começa em x=0?

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 22"
---

<!-- SLIDE 12 -->
<!-- objetivo: painel projetado enquanto o Grupo 5 apresenta -->

# Grupo 5 - Função Exponencial

**Fórmula:** `y = a·eˣ`

<SlideTable fullWidth>

| Papel | Bloco do código | O que explica |
|---|---|---|
| Fórmula | Parâmetro `a` no código | O que muda no gráfico ao alterar `a` |
| Dados | `np.linspace(início, fim, pontos)` | Por que esses valores de intervalo foram escolhidos |
| Cálculo | `a * np.exp(x)` | O que a base `e` significa — diferença para `2**x` |
| Gráfico | `plt.plot`, labels, title | Como o crescimento acelerado aparece na curva |
| Mundo real | Modifica `a` com dado real no código | Número concreto + fonte + por que a função modela isso |

</SlideTable>
Qual é a diferença entre `np.exp(x)` e `2**x`?

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 22"
---

<!-- SLIDE 13 -->
<!-- objetivo: painel projetado enquanto o Grupo 6 apresenta - inclui contexto de neurônio artificial -->

# Grupo 6 - Função Sigmoide

<SlideTable fullWidth>

| Papel | Bloco do código | O que explica |
|---|---|---|
| Fórmula | `1 / (1 + np.exp(-x))` | O que cada parte da fórmula faz e os limites entre 0 e 1 |
| Dados | `np.linspace(início, fim, pontos)` | Por que o intervalo em torno do zero mostra melhor o formato em "S" |
| Cálculo | `np.exp(-x)` dentro da fórmula | O que a biblioteca calcula,por que não deu pra fazer na mão |
| Gráfico | `plt.plot`, labels, title | O formato em "S" e o que os eixos mostram |
| Mundo real | Modifica o intervalo de `x` com dado real no código | Número concreto + fonte + por que isso aparece num neurônio artificial |

</SlideTable>
Qual é o valor máximo e mínimo que essa função pode produzir? Por que isso é útil numa rede neural?

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
aulaNum: "Aula 22"
---

<!-- SLIDE 14 -->
<!-- debate: [Aula 22] - reflexão final sobre funções em IA -->

# Debate final: o que você realmente aprendeu hj?

**Discussão coletiva - 5 minutos**

- Qual função você encontrou com mais frequência em IA ao longo do projeto?
- O que foi surpresa para você neste seminário?
- Se você fosse explicar função sigmoide,
- para alguém que não sabe nada de matemática, o que diria?
-

**Conexão com o futuro do curso:** funções como sigmoide e ReLU aparecem dentro de redes neurais. O que vocês estudaram agora é a base do que vem pela frente.

---
layout: end
bgPreset: palette
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
---

<!-- SLIDE 15 -->

# Até 14/05

**Hoje (sexta 08/05):** Av.06 - Seminário de Funções Matemáticas - apresentações
