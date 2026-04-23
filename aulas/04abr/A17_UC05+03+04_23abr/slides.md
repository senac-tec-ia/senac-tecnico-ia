---
theme: ../../../neural-slides-template
colorSchema: dark
title: "Técnico em IA — Aula 17"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 17"
bgPreset: palette
layout: cover
---

<!-- SLIDE 1 — [CAPA] TokenLab -->

# Aula 17
## Av.03 — TokenLab 🧮

*23 de abril de 2026 · Avaliação em Dupla*

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 2 — [TEORIA] Agenda do dia -->

# Como vai funcionar hoje

**2 momentos · dia inteiro de avaliação**

| Momento | Local | O que acontece |
|---|---|---|
| ✏️ Parte 1 | Sala de aula | Contexto + cartão + pseudocódigo no papel |
| 💻 Parte 2 | Laboratório | GitHub + TokenLab em 4 fases + entrega |

> **Formação:** dupla · **Entrega:** link do repositório GitHub

---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 3 — [DIVISOR] Parte 1 -->

# ✏️ Parte 1 — Sala de aula
## Caneta e papel · sem computador

---
layout: center
bgPreset: palette
wide: true
card: true
---

<!-- SLIDE 4 — [TEORIA] Contexto: o que são tokens -->

# Toda mensagem que você envia para uma IA tem um custo

Quando você digita no ChatGPT, a OpenAI não cobra por palavra — cobra por **token**.

**Um token ≈ 4 caracteres em português**

`"transformação digital"` → ~5 tokens · `"olá"` → ~1 token

Empresas que usam IA em larga escala (atendimento, relatórios, análise) precisam calcular quanto vão gastar. Uma chamada de 50 tokens parece barata — mas **× 10.000 chamadas por dia**, o custo explode.

---
layout: brainstorm
bgPreset: animate
---

<!-- SLIDE 5 — [DEBATE] Você percebeu? -->

# Você já percebeu que o ChatGPT "esquece" mensagens antigas?

Isso acontece porque cada modelo tem um **context window** — um limite de quantos tokens ele consegue "lembrar" ao mesmo tempo.

Quando o contexto estoura, o modelo descarta as mensagens mais antigas.

> Isso é exatamente o que vocês vão verificar no programa de hoje 👇

---
layout: default
bgPreset: default
---

<!-- SLIDE 6 — [TEORIA] Modelos e preços -->

# Os 3 modelos que vocês vão calcular

| Modelo | Preço por 1.000 tokens (R$) | Context window |
|---|---|---|
| GPT-4 | R$ 0,30 | 8.000 tokens |
| GPT-3.5 | R$ 0,03 | 4.000 tokens |
| Gemini Flash | R$ 0,01 | 32.000 tokens |

**Fórmula geral:**

```
custo = tokens × preço / 1000
```

> Os preços da sua dupla estão no **cartão impresso** entregue agora.

---
layout: default
bgPreset: default
---

<!-- SLIDE 7 — [TEORIA] Glossário TokenLab -->

# Glossário — entenda os termos

| Termo | O que significa |
|---|---|
| `token` | Unidade de texto (~4 chars) — o que a IA realmente processa |
| `context window` | Limite de tokens que o modelo "lembra" de uma vez |
| `prompt` | O texto que você envia para a IA |
| `API` | Como código Python chama a IA externamente |
| `len()` | Função que conta caracteres de uma string |
| `//` | Divisão inteira — descarta os decimais |

---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 8 — [DIVISOR] Pseudocódigo -->

# ✏️ Pseudocódigo no papel
## 15 minutos · antes de qualquer computador

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 9 — [EXERCICIO] Pseudocódigo no papel -->

# Escreva a lógica antes de codar

**No verso do cartão de referência (ou folha avulsa):**

> Descreva em português o que o programa vai fazer, passo a passo. Sem código — só a lógica.

**Exemplo de pseudocódigo (de outro problema):**
```
1. Pedir uma informação ao usuário
2. Transformar essa informação em número
3. Fazer um cálculo com esse número
4. Mostrar o resultado na tela
```

> Agora escreva o pseudocódigo do **TokenLab** com suas próprias palavras.

> Chame o professor quando terminar — ele assina o papel ✅ · só depois vamos para o lab


---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 11 — [DIVISOR] Bloco GitHub -->

# 📂 Primeiro passo no lab
## GitHub — onde o seu código vai viver

---
layout: default
bgPreset: palette
---

<!-- SLIDE 12 — [TEORIA] O que é o GitHub -->

# O que é o GitHub?

**Git** é um sistema que rastreia todas as versões do seu código.
**GitHub** é o serviço online que guarda esse histórico na nuvem.

- 📁 Você escreve código no seu computador
- 🔄 `git add` + `git commit` — "salva" uma versão com mensagem
- ☁️ `git push` — envia para o GitHub (visível para o professor)
- 🔗 Cada repositório tem um link único — é a sua entrega

> Pense no GitHub como o Google Drive do código: versiona, compartilha e registra quem fez o quê.

---
layout: two-cols-text
bgPreset: palette
---

<!-- SLIDE 13 — [TEORIA] Criando o repositório -->

# Criando o repositório

**Passo a passo no github.com**

1. Acesse **github.com** → faça login
2. Clique em **"New"** (botão verde)
3. Nome do repositório: `SENAC-TecIA`
4. Deixe em **Public**
5. Marque **"Add a README file"**
6. Clique em **"Create repository"**

::right::

**Estrutura esperada ao final**

```
SENAC-TecIA/
└── Av03/
    └── av03_tokenlab.py
```

> Copie a URL do repositório — vai ser a sua entrega no final da aula.

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 14 — [TEORIA] Conectando e fazendo push -->

# Conectando o VS Code ao GitHub

**Na primeira vez (configuração):**

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

**Para enviar o código:**

```bash
git init
git remote add origin https://github.com/SEU-USUARIO/SENAC-TecIA.git
git add av03_tokenlab.py
git commit -m "Av03 TokenLab entregue"
git push origin main
```

---
layout: brainstorm
bgPreset: palette
---

<!-- SLIDE 15 — [EXERCICIO] Faça agora: criar repositório -->

# ⚡ Faça agora — 10 minutos

**Antes de começar o TokenLab, cada dupla precisa:**

1. Criar o repositório `SENAC-TecIA` no GitHub (se não tiver)
2. Criar a pasta `Av03/` localmente
3. Confirmar que consegue fazer `git push` (pode ser um arquivo vazio)

> ✅ Quando terminar: levante a mão ou me mostre o link do repo

---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 16 — [DIVISOR] TokenLab -->

# 🧮 Agora sim — Abram o VS Code
## `av03_tokenlab.py` na pasta `Av03/`

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 17 — [TEORIA] Contando tokens no Python -->

# Recapitulando — como contar tokens no código

**Regra do exercício:**

```python
tokens = len(texto) // 4
```

`len()` conta os caracteres. `//` é divisão inteira (sem decimais).

```python
# Exemplo
texto = "Escreva sobre IA"   # 16 caracteres
tokens = 16 // 4             # = 4 tokens
```

**Mínimo de 1 token:**

```python
if tokens == 0:
    tokens = 1
```

---
layout: default
bgPreset: palette
---

<!-- SLIDE 18 — [EXERCICIO] Fase 1+2 — tokens e custo -->

# Fase 1 + 2 — Tokens e custo de 1 chamada

**Fase 1 — Ler e contar tokens:**
- Ler o texto digitado com `input()`
- Calcular `tokens = len(texto) // 4` (mínimo 1)
- Classificar: `curto` (≤20) · `médio` (≤100) · `longo` (>100)

**Fase 2 — Custo para 1 chamada nos 3 modelos:**

```python
custo_gpt4    = tokens * 0.30 / 1000
custo_gpt35   = tokens * 0.03 / 1000
custo_gemini  = tokens * 0.01 / 1000
```

> Imprima os 3 valores formatados com `f"R$ {valor}"`

---
layout: default
bgPreset: palette
---

<!-- SLIDE 19 — [EXERCICIO] Fase 3 — volumes de uso -->

# Fase 3 — Custo para 100 e 1.000 chamadas

Para cada modelo, calcule o custo multiplicando:

```python
# Para 100 chamadas
custo_gpt4_100   = custo_gpt4   * 100
custo_gpt35_100  = custo_gpt35  * 100
custo_gemini_100 = custo_gemini * 100

# Para 1.000 chamadas
custo_gpt4_1000   = custo_gpt4   * 1000
custo_gpt35_1000  = custo_gpt35  * 1000
custo_gemini_1000 = custo_gemini * 1000
```

> Imprima em 3 blocos separados: "1 chamada", "100 chamadas", "1.000 chamadas"

---
layout: default
bgPreset: palette
---

<!-- SLIDE 20 — [EXERCICIO] Fase 4 — recomendação e context window -->

# Fase 4 — Recomendação e Context Window

**Modelo mais barato** (`if/elif/else` com `and`):

```python
if custo_gpt4 <= custo_gpt35 and custo_gpt4 <= custo_gemini:
    mais_barato = "GPT-4"
elif custo_gpt35 <= custo_gemini:
    mais_barato = "GPT-3.5"
else:
    mais_barato = "Gemini Flash"
```

**Context window** (para cada modelo):

```python
if tokens <= 8000:
    print(f"  GPT-4        : ✅ cabe    ({tokens} / 8000 tokens)")
else:
    print(f"  GPT-4        : ❌ não cabe ({tokens} / 8000 tokens)")
```

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 21 — [TEORIA] Saída esperada -->

# Saída esperada do programa

```
============================================
       TOKENLAB — Calculadora de Custo IA
============================================

Texto analisado : Escreva um texto sobre IA
Caracteres      : 31
Tokens estimados: 7
Tamanho         : curto

--------------------------------------------
 CUSTO POR MODELO (1 chamada)
--------------------------------------------
  GPT-4        : R$ 0.0021
  GPT-3.5      : R$ 0.00021
  Gemini Flash : R$ 7e-05
============================================
```

> A formatação dos decimais pode variar — o valor precisa estar **certo**, não o formato exato.

---
layout: two-cols-text
bgPreset: palette
---

<!-- SLIDE 22 — [TEORIA] Mini dicas Python -->

# Mini dicas de referência

**`len()` e `//`**

```python
texto = "olá mundo"
print(len(texto))   # 9
print(9 // 4)       # 2
print(9 / 4)        # 2.25
```

**Formatar decimais:**

```python
valor = 0.00036
print(f"R$ {valor:.4f}")  # R$ 0.0004
```

::right::

**Ler com espaços:**

```python
texto = input("Digite o prompt: ")
# input() já lê espaços normalmente
```

**Comparar 3 valores:**

```python
# a menor que b E menor que c
if a <= b and a <= c:
    print("a é o menor")
```

> Mantenha o **cartão de referência** visível enquanto codifica 👆

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 23 — [EXERCICIO] Fase Bônus — funções -->

# 🚀 Fase Bônus — se sobrar tempo

Transforme os cálculos de custo em **uma função**:

```python
def calcular_custo(tokens, preco_por_mil):
    return tokens * preco_por_mil / 1000
```

Use-a no lugar das 9 fórmulas repetidas:

```python
custo_gpt4   = calcular_custo(tokens, 0.30)
custo_gpt35  = calcular_custo(tokens, 0.03)
custo_gemini = calcular_custo(tokens, 0.01)
```

> Entregue como `av03_tokenlab_bonus.py` na mesma pasta `Av03/`.
> O programa deve funcionar igual — apenas mais organizado.

---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 24 — [DIVISOR] Entrega -->

# 📤 Hora de entregar
## git push + link para o professor

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 25 — [TEORIA] Como entregar -->

# Como fazer o push e entregar

**No terminal (dentro da pasta `Av03/`):**

```bash
git add av03_tokenlab.py
git commit -m "Av03 TokenLab — [Nomes da dupla]"
git push origin main
```

**Checklist de entrega:**

- [ ] Arquivo `av03_tokenlab.py` na pasta `SENAC-TecIA/Av03/`
- [ ] Nomes da dupla em comentário no topo do arquivo
- [ ] `git push` feito com sucesso
- [ ] O programa roda sem erros com qualquer texto

> **Entrega:** envie o link do repositório GitHub por mensagem até o final da aula 🔗

---
layout: center
bgPreset: palette
pulse: true
---

<!-- SLIDE 26 — [DIVISOR] Av.02 Relatório Limber -->

# 📝 Av.02 — Relatório de Visita Técnica
## Limber · em dupla · entrega por e-mail

---
layout: default
bgPreset: default
card: true
---

<!-- SLIDE 27 — [TEORIA] O que é o relatório -->

# O que é este trabalho?

Vocês visitaram a **Limber** e viram como uma empresa real funciona. Agora é hora de organizar isso em um relatório formal.

**4 seções obrigatórias:**

1. Estrutura organizacional da empresa
2. Ramo de atuação e tempo de mercado
3. Uso de IA — qual ferramenta, em qual setor, como usa
4. Estratégia da empresa e onde a IA entra

> Escrito em dupla · Word formatado em ABNT · Entregue como **PDF por e-mail**

---
layout: two-cols-text
bgPreset: default
---

<!-- SLIDE 28 — [TEORIA] As 4 seções -->

# As 4 seções

**Seção 1 — Estrutura organizacional**

Quais departamentos existem? Quantos funcionários? Como a hierarquia funciona? Como os times se comunicam?

**Seção 2 — Ramo de atuação**

O que a empresa faz? Quem são os clientes? Há quanto tempo existe? Atua local, nacional ou internacionalmente?

::right::

**Seção 3 — Uso de IA**

Usam IA em algum setor? Qual ferramenta (ChatGPT, Gemini, etc.)? Quem opera? Qual impacto percebido?

**Seção 4 — Estratégia e IA**

Qual é o plano da empresa? A IA faz parte da estratégia ou é experimental? Onde poderia complementar processos manuais?

---
layout: default
bgPreset: default
---

<!-- SLIDE 29 — [TEORIA] Formatação ABNT -->

# Formatação obrigatória — ABNT

| Item | Especificação |
|---|---|
| Fonte | Arial, tamanho 12 |
| Margens | Superior/Esquerda: 3 cm · Inferior/Direita: 2 cm |
| Espaçamento | 1,5 entre linhas |
| Recuo | 1,25 cm no início de cada parágrafo |
| Numeração de páginas | Canto superior direito |

**Capa obrigatória:**
- Nome da escola e do curso
- Título: *Relatório de Visita Técnica - Limber*
- Nomes completos da dupla
- Data de entrega

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 30 — [TEORIA] Como entregar o relatório -->

# Como entregar o relatório

**Formato:** salve o Word como PDF antes de enviar

```
Para: leonardo.niclote@docente.pr.senac.br
Assunto: Av02 - Relatório Limber - [Nomes da dupla]
Anexo: relatorio-limber-[nomes].pdf
```

**Checklist antes de enviar:**
- [ ] As 4 seções respondidas com texto próprio
- [ ] Capa com nomes e data
- [ ] Fonte Arial 12, espaçamento 1,5
- [ ] Salvo como PDF
- [ ] E-mail com assunto correto

> **Prazo:** a confirmar — anotem quando o professor informar

---
layout: end
bgPreset: animate
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
---

<!-- SLIDE 31 — [ENCERRAMENTO] -->

# Fiquem de olho nos prazos de entrega!

TokenLab + Av.02 — dois desafios, um dia.

Qualquer dúvida, chame o professor.


