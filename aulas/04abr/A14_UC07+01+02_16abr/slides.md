---
theme: ../slidev-theme-neural
colorSchema: dark
title: "Técnico em IA — Aula 14"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 14"
bgPreset: palette
layout: cover
---

<!-- SLIDE 1 — Capa -->

# Aula 14
## LGPD, Word Avançado e Vocabulário de Programação

*16 de abril de 2026 · UC07 · UC01 · UC02*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 2 — Roteiro do dia -->

# O Que Vem Por Aí Hoje

<v-clicks>

- 🔐 **Bloco 1 — UC07 (7h10–9h40):** LGPD na prática + Segurança digital
- 📝 **Bloco 2 — UC01 (9h50–11h30):** Word avançado — sumário, cabeçalho, PDF
- 🇬🇧 **Bloco 3 — UC02 (11h30–12h20):** Programming vocabulary — 10 termos em inglês

</v-clicks>

> ⚠️ **Av.1 — Glossário IA:** prazo hoje (16/04) ou amanhã (17/04). Quem terminar o Word no Bloco 2 já entrega na hora!

---
layout: center
card: true
bgPreset: palette
---

<!-- SLIDE 3 — Divisor Bloco 1 -->

# Bloco 1
## Transformação Digital — UC07

**7h10 – 9h40 · 3 horas-aula**

*LGPD na Prática + Segurança Digital*

---
layout: center
wide: true
card: true
bgPreset: animate
---

<!-- SLIDE 4 — Pergunta de abertura -->

# Você já teve seus dados vazados?

**Pense por 30 segundos antes de responder...**

> 🔎 Acesse **haveibeenpwned.com** e coloque seu e-mail. O que aparece?

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 5 — O que é a LGPD -->

# <carbon-security /> LGPD — Lei nº 13.709/2018

**O Brasil tem uma lei para proteger seus dados pessoais.**

<v-clicks>

- Aprovada em **agosto de 2018**, em vigor desde **agosto de 2020**
- Protege **direitos fundamentais** de liberdade e privacidade
- Afeta **todas as organizações** que tratam dados de pessoas no Brasil — mesmo empresas com sede no exterior
- **ANPD** (Autoridade Nacional de Proteção de Dados) fiscaliza e aplica penalidades
- Multas: até **2% do faturamento anual** ou **R$ 50 milhões por infração**

</v-clicks>

> 💡 "Tratar dados" = coletar, armazenar, usar, compartilhar, deletar — qualquer operação com dados pessoais.

---
layout: two-cols-text
card: true
bgPreset: palette
---

<!-- SLIDE 6 — Dados pessoais vs sensíveis -->

# Nem Todo Dado É Igual



## 📋 Dados Pessoais
*Identificam uma pessoa*

- Nome completo
- CPF / RG
- E-mail, telefone
- Endereço
- IP, cookies, geolocalização
- Foto (que identifica o rosto)

Precisam de proteção adequada.

::right::

## 🔴 Dados Sensíveis
*Exigem proteção reforçada*

- Origem racial ou étnica
- Convicção religiosa
- Opinião política
- Dados de saúde
- Vida sexual
- Dados genéticos
- **Biometria** (impressão digital, face ID)

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 7 — Agentes de tratamento -->

# Quem É Quem na LGPD

<v-clicks>

- 🏢 **Controlador** — quem **decide** como os dados serão usados (ex: a empresa que criou o app)
- ⚙️ **Operador** — quem **executa** o tratamento em nome do controlador (ex: empresa de cloud hosting)
- 📣 **Encarregado (DPO)** — canal de comunicação entre empresa, titulares e a ANPD

</v-clicks>

<v-click>

**Exemplo real:** Você usa o iFood → iFood é o **controlador** → AWS (que hospeda os servidores) é o **operador** → tem um DPO responsável pelos dados dos clientes.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 8 — Direitos do titular -->

# Seus Direitos Como Titular de Dados

A LGPD garante que **você tem controle** sobre seus próprios dados:

<v-clicks>

- 🔍 **Confirmação:** "Vocês tratam meus dados?"
- 📂 **Acesso:** "Quais dados vocês têm sobre mim?"
- ✏️ **Correção:** "Meu endereço mudou, atualizem"
- 🗑️ **Eliminação:** "Deletem meus dados"
- 📤 **Portabilidade:** "Transfira para outro serviço"
- ❌ **Revogação:** "Não autorizo mais o uso"

</v-clicks>

<v-click>

> 💡 **Teste depois:** No Instagram → Configurações → Sua Atividade → Tudo sobre você está aqui

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 9 — LGPD em apps do cotidiano -->

# LGPD no Seu Dia a Dia

<v-clicks>

- 💬 **WhatsApp:** criptografia ponta a ponta protege o *conteúdo* das mensagens — mas a Meta coleta *metadados* (quem você fala, quando, frequência)
- 🚗 **Uber:** coleta geolocalização em tempo real — dado pessoal. Retém dados mesmo após exclusão da conta por período determinado
- 🎵 **TikTok:** coleta dados biométricos (reconhecimento facial) para filtros — **dado sensível**. Polêmica: servidores na China
- 📸 **Instagram:** algoritmo de recomendação analisa comportamento de forma automatizada — tratamento de dados pessoais

</v-clicks>

<v-click>

> 🤖 **Conexão com IA:** Modelos de IA treinam com dados. Se esses dados são pessoais (fotos, textos, voz), a **LGPD se aplica**. É por isso que empresas de IA precisam de políticas de privacidade robustas.

</v-click>

---
layout: brainstorm
card: true
bgPreset: animate
pulse: true
---

<!-- SLIDE 10 — Atividade dados pessoais vs sensíveis -->

# Classify It!

Para cada item abaixo, classifique: **Pessoal / Sensível / Anônimo**

1. Seu nome completo
2. Seu tipo sanguíneo
3. Média de vendas por bairro (sem nomes)
4. Sua localização GPS em tempo real
5. Sua foto de perfil
6. Sua preferência política
7. Temperatura média da cidade hoje
8. Seu histórico de pesquisas no Google

> Discutam em dupla, depois compartilhamos com a turma!

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 11 — Segurança digital: senhas -->

# <carbon-password /> Senhas Fortes — A Primeira Linha de Defesa

<v-clicks>

- **howsecureismypassword.net** 
- **Regra mínima:** 12+ caracteres · maiúsculas + minúsculas + números + símbolos
- **Nunca reutilize** senhas entre serviços diferentes
- Use um **gerenciador de senhas:** Bitwarden (gratuito e open source), Google Password Manager

</v-clicks>

<v-click>

| Senha | Tempo estimado |
|---|---|
| `12345678` | Instantâneo |
| `Leo2026` | 2 horas |
| `Leo@Senac#2026!` | 400 anos |
| `#kP9!mQ2@vR7$nL` | Trilhões de anos |

</v-click>

---
layout: two-cols-text
card: true
bgPreset: palette
---

<!-- SLIDE 12 — 2FA -->

# <carbon-two-factor-authentication /> Autenticação em Dois Fatores (2FA)

## O Que É

**Algo que você sabe** + **Algo que você tem**

- Senha × Código do celular
- Mesmo que roubem sua senha, sem o segundo fator não entram

## Tipos de 2FA (do - ao + seguro)

1. SMS (⚠️ vulnerável a SIM swap)
2. App autenticador (Google Authenticator, Authy) ✅
3. Chave física (YubiKey) 🔒

::right::

## Como Ativar no Google

1. Acesse **myaccount.google.com**
2. Segurança → Verificação em duas etapas
3. Escolha "App autenticador"
4. Escaneie o QR code com Google Authenticator
5. ✅ Pronto — sua conta tem 2FA

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 13 — Phishing e engenharia social -->

# <carbon-warning-alt /> Phishing — Quando o Ataque É Você

**Phishing** é quando alguém te engana para roubar seus dados, sem invadir nada tecnicamente.

<v-clicks>

1. **E-mail falso** que imita banco, operadora, Receita Federal
2. **SMS falso** ("seu pacote não pôde ser entregue — clique aqui")
3. **Ligação falsa** ("sou do suporte da Microsoft, seu computador está infectado")
4. **Link malicioso** que parece legítimo mas vai para site clone

</v-clicks>

<v-click>

**Sinais de phishing:**
- URL incorreta (`bradesco-seguro.xyz` em vez de `bradesco.com.br`)
- Urgência artificial ("Sua conta será bloqueada em 24h!")
- Erros de português
- Remetente suspeito mesmo com nome familiar

</v-click>

---
layout: default
card: true
bgPreset: animate
pulse: true
---

<!-- SLIDE 14 — Exercício phishing -->

# Qual E-mail É Phishing?

**Analise os 3 e-mails abaixo e identifique o(s) falso(s):**

**E-mail A:** *De: noreply@netflix.com.br · "Sua conta Netflix está prestes a ser cancelada. Atualize seu pagamento em: netflix-pagamento-brasil.com"*

**E-mail B:** *De: suporte@bradesco.com.br · "Prezado cliente, sua fatura de abril está disponível para download no app Bradesco."*

**E-mail C:** *De: receita.federal@gov.br.servidores.ru · "Você tem restituição de R$ 2.847,00. Clique para receber."*

> 💬 Discutam em dupla: qual(is) é(são) phishing? Por quê? O que denuncia cada um?

<v-click>

**Gabarito:** A e C são phishing · A = URL errada · C = domínio `.ru` e urgência financeira

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 15 — Caso real: Serasa 2021 -->

# Caso Real: Vazamento Serasa (2021)

**O maior vazamento de dados do Brasil.**

<v-clicks>

- **O que:** 223 milhões de CPFs expostos — mais que a população brasileira (inclui falecidos)
- **Dados vazados:** nome completo, CPF, data de nascimento, endereço, renda, score de crédito, dados de veículos, benifícios sociais
- **Consequências:** golpes com dados reais (abertura de contas, empréstimos fraudulentos, clonagem de identidade)
- **LGPD:** violação dos princípios de segurança, prevenção e necessidade — ANPD abriu investigação

</v-clicks>

---
layout: default
card: true
bgPreset: palette
---


# O que você pode fazer se tiver dados vazados:
1. Verificar em **haveibeenpwned.com** e **registrato.bcb.gov.br**
2. Ativar bloqueio de crédito no Serasa/SPC
3. Monitorar seu CPF no **gov.br**
4. Trocar senhas de serviços onde usa o mesmo e-mail


---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
---

<!-- SLIDE 16 — Debate final LGPD -->

# Uma Empresa Vazou Seus Dados. E Agora? 

**Debate em duplas: 10 minutos**

Cenário: *Uma fintech startup coletou seus dados financeiros para oferecer crédito. Sofreu um ataque hacker e 50.000 CPFs foram expostos.*

<br/> 

- Quais **direitos** da LGPD foram violados?
- O que a **empresa** é obrigada a fazer agora?
- O que a **ANPD** pode fazer?
- O que **você** faria se fosse um dos afetados?

> 🎯 Após o debate: cada grupo apresenta 1 ação prática que tomaria.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 17 — Checklist segurança digital -->

# Checklist Pessoal de Segurança Digital

**3 ações para implementar hoje:**

<v-clicks>

1. 🔑 **Ative o 2FA** na sua conta Google agora (fazemos juntos!)
2. 🔐 **Troque senhas fracas** por senhas com 12+ caracteres — use Bitwarden
3. 🔍 **Verifique seu e-mail** em haveibeenpwned.com

</v-clicks>

<v-click>

**E para praticar os direitos da LGPD:**
- Acesse as configurações de privacidade de um app que você usa
- Veja quais dados eles coletam e se você concorda
- Se não concordar → revogar consentimento ou excluir conta

</v-click>

---
layout: center
card: true
bgPreset: palette
---

<!-- SLIDE 18 — Divisor Bloco 2 -->

# Bloco 2
## Fundamentos de Computação — UC01

**9h50 – 11h30 · 2 horas-aula**

*Word Avançado — Prepare a Entrega do Av.1*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 19 — Revisão: estilos Heading -->

# <carbon-text-font /> Revisão Rápida: Estilos de Heading

**Estilos não são "negrito grande" — são marcadores de estrutura.**

<v-clicks>

- **Heading 1 (H1):** seção principal — ex: "Glossário", "Referências"
- **Heading 2 (H2):** subseção — ex: "Termos de IA", "Termos de Programação"
- **Heading 3 (H3):** subsubseção (se precisar)
- **Normal:** corpo do texto normal

</v-clicks>

<v-click>

**Por que isso importa?**
O Word usa os Headings para gerar o **sumário automático**. Se você não usar estilos, o sumário fica vazio.

💡 *Abra o Painel de Navegação (Visualizar → Painel de Navegação) para ver a estrutura do documento em tempo real.*

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 20 — Sumário automático passo a passo -->

# <carbon-list-numbered /> Sumário Automático — Passo a Passo

**Demonstração ao vivo — acompanhe no seu computador:**

<v-clicks>

1. Aplique estilos H1/H2 aos títulos do documento
2. Posicione o cursor **logo após a capa** (página 2)
3. **Referências → Sumário → Tabela Automática 1**
4. O Word gera o índice com títulos + números de página automaticamente!

</v-clicks>

---
layout: default
card: true
bgPreset: palette
---

# <carbon-list-numbered /> Sumário Automático — Passo a Passo

<v-click>

**Para atualizar o sumário depois de editar:**
- Clique no sumário → botão **"Atualizar Sumário"**
- Ou: clique direito → **Atualizar Campo → Atualizar tabela inteira**

</v-click>

<v-click>

> ⚠️ **Erro mais comum:** esquecer de aplicar estilos e formatar manualmente → sumário fica em branco. Se isso acontecer, selecione o texto → aplique o estilo no menu Página Inicial.

</v-click>

---
layout: two-cols-text
card: true
bgPreset: palette
---

<!-- SLIDE 21 — Cabeçalho e rodapé -->

# <carbon-page-break /> Cabeçalho e Rodapé

## Como Inserir

1. **Inserir → Cabeçalho** → escolha um modelo
2. Digite o texto: `Técnico em IA — Senac`
3. **Inserir → Rodapé** → escolha um modelo
4. **Inserir → Número de Página** → Inferior da Página → Centralizado

- Opções do cabeçalho → ✅ **"Primeira página diferente"**
- A capa não recebe cabeçalho nem numeração

::right::

## Conteúdo Típico

**Cabeçalho:**
```
Técnico em Inteligência Artificial — Senac
```

**Rodapé:**
```
[Nome do Aluno]                  Página 1
```

> 💡 Duplo clique no cabeçalho/rodapé para editar. ESC para sair.

> Dica: Capa Sem Número

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 22 — Revisão ortográfica e exportar PDF -->

# Revisar e Exportar

**Antes de entregar, sempre:**

<v-clicks>

- 🔴 **Verificação ortográfica:** Revisão → Verificação — percorrer e corrigir
- 🔵 **Verificação gramatical:** sublinhado azul — erros de concordância, pontuação
- ⚠️ O corretor **não pega tudo** — ex: "cessa" e "sessa" passam despercebidos. Leia em voz alta para revisar.
- 🌐 **Idioma do documento:** Revisão → Idioma → Definir Idioma de Revisão → Português (Brasil)

</v-clicks>

---
layout: default
card: true
bgPreset: palette
---

# Revisar e Exportar

<v-click>

**Exportar para PDF:**
- **Arquivo → Salvar como → Tipo: PDF**
- Ou: **Arquivo → Exportar → Criar PDF/XPS**
- ✅ Sempre abra o PDF gerado para conferir antes de entregar

</v-click>

---
layout: default
card: true
bgPreset: animate
pulse: true
---

<!-- SLIDE 23 — Prática guiada: montando o Av.1 -->

# Vamos finalizar avaliação 1

**Estrutura do Glossário (Av.1):**

1. **Capa:** nome, turma, data
2. **Sumário automático** (gerado pelos Headings)
3. **H1: Glossário** → tabela com 10 termos (Coluna: Termo EN | Tradução PT | Significado)
4. **H1: Minha Opinião** → parágrafo curto sobre IA
5. Cabeçalho + rodapé + numeração de páginas
6. Exportar para PDF

> 🕐 **40 minutos de prática.** Professor circula para ajudar.  

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 24 — Termos do Av.1 (referência) -->

# Referência: 10 Termos do Glossário Av.1

<SlideTable>

| # | Termo EN | Tradução PT | Dica de significado |
|---|---|---|---|
| 1 | Machine Learning | Aprendizado de Máquina | Algoritmo que aprende com dados |
| 2 | Dataset | Conjunto de Dados | Coleção de dados para treinar IA |
| 3 | Training | Treinamento | Processo de ensinar o modelo com dados |
| 4 | Model | Modelo | A IA treinada, pronta para prever |
| 5 | Inference | Inferência | Usar o modelo para fazer previsões |

</SlideTable>

> Estes são os 10 termos cobrados no **Av.1**. Adicione: definição em PT completa + conexão com o que aprendemos.

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 24 — Termos do Av.1 (referência) -->

# Referência: 10 Termos do Glossário Av.1

<SlideTable>

| # | Termo EN | Tradução PT | Dica de significado |
|---|---|---|---|
| 6 | Bias | Viés | Erro sistemático nos dados ou modelo |
| 7 | Token | Token | Unidade mínima de texto (palavra ou parte) |
| 8 | Embedding | Incorporação | Representação numérica de palavras |
| 9 | Epoch | Época | Uma passagem completa pelos dados de treino |
| 10 | GPU | GPU | Processador gráfico usado para treinar IA |

</SlideTable>

> Estes são os 10 termos cobrados no **Av.1**. Adicione: definição em PT completa + conexão com o que aprendemos.

---
layout: center
card: true
bgPreset: palette
---

<!-- SLIDE 25 — Divisor Bloco 3 -->

# Bloco 3
## Inglês Instrumental — UC02

**11h30 – 12h20 · 1 hora-aula**

*Programming Vocabulary — Bloco 4*

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 26 — Por que inglês em programação? -->

# <carbon-language /> Por Que Programação É em Inglês?

<v-clicks>

- Python, JavaScript, Java, C — todas as linguagens populares têm **keywords em inglês**
- Documentação oficial de toda linguagem é **primariamente em inglês**
- Mensagens de erro são em inglês: `SyntaxError`, `TypeError`, `IndexError`
- Repositórios no GitHub: READMEs, issues, pull requests — inglês é o padrão global

</v-clicks>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 26 — Por que inglês em programação? -->

# <carbon-language /> Por Que Programação É em Inglês?

<v-click>

**Python tem 35 keywords — todas em inglês:**
```python
False   None    True    and    as      assert  async
await   break   class   continue  def  del    elif
else    except  finally for   from   global  if
import  in      is      lambda  nonlocal  not  or
pass    raise   return  try    while  with   yield
```

</v-click>

<v-click>

> 💡 Vocês já conhecem várias: `for`, `if`, `else`, `print`, `input`, `def` — hoje vamos entender o que cada uma **significa em inglês**.

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 27 — Vocabulário: variable, function, loop -->

# Vocabulário do Dia — Parte 1 de 4

<SlideTable>

| Termo EN | Pronúncia | Tradução | Definição simples | Python |
|---|---|---|---|---|
| **variable** | /ˈveriəbəl/ | variável | Nome que guarda um valor na memória | `nome = "Ana"` |
| **function** | /ˈfʌŋkʃən/ | função | Bloco de código reutilizável para uma tarefa | `def saudacao():` |
| **loop** | /luːp/ | laço | Código que se repete várias vezes | `for i in range(5):` |

</SlideTable>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 27 — Vocabulário: variable, function, loop -->

# Vocabulário do Dia — Parte 1 de 3

<v-click>

```python
# variable — guarda um valor
idade = 17           # variable: idade

# function — bloco reutilizável
def saudacao(nome):  # function com um parameter
    print(f"Olá, {nome}!")

# loop — repete o código
for i in range(3):   # loop que roda 3 vezes
    print(i)
```

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 28 — Vocabulário: string, integer, float, boolean -->

# Vocabulário do Dia — Parte 2 de 3

<SlideTable>

| Termo EN | Pronúncia | Tradução | Definição simples | Python |
|---|---|---|---|---|
| **string** | /strɪŋ/ | texto | Sequência de caracteres entre aspas | `"Hello, World"` |
| **integer** | /ˈɪntɪdʒər/ | inteiro | Número sem casas decimais | `idade = 17` |
| **float** | /floʊt/ | flutuante | Número com casas decimais | `nota = 8.5` |
| **boolean** | /ˈbuːliən/ | booleano | Valor verdadeiro ou falso | `ativo = True` |

</SlideTable>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 28 — Vocabulário: string, integer, float, boolean -->

# Vocabulário do Dia — Parte 2 de 3

<v-click>

```python
nome = "Leonardo"   # string — texto entre aspas
turma = 1           # integer — número inteiro
media = 7.8         # float — número com decimal
aprovado = True     # boolean — True ou False

# Python é tipado dinamicamente:
# o tipo é inferido pelo valor atribuído
print(type(nome))     # <class 'str'>
print(type(turma))    # <class 'int'>
print(type(media))    # <class 'float'>
print(type(aprovado)) # <class 'bool'>
```

</v-click>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 29 — Vocabulário: parameter, return, error -->

# Vocabulário do Dia — Parte 3 de 3

<SlideTable>

| Termo EN | Pronúncia | Tradução | Definição simples | Python |
|---|---|---|---|---|
| **parameter** | /pəˈræmɪtər/ | parâmetro | Valor que uma função recebe para trabalhar | `def soma(a, b):` |
| **return** | /rɪˈtɜːrn/ | retornar | Resultado que a função devolve | `return a + b` |
| **error** | /ˈerər/ | erro | Quando o código não funciona como esperado | `SyntaxError: ...` |

</SlideTable>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 29 — Vocabulário: parameter, return, error -->

# Vocabulário do Dia — Parte 3 de 3


<v-click>


```python
# parameter e return — o par mais importante de funções
def calcular_media(nota1, nota2, nota3):  # 3 parameters
    total = nota1 + nota2 + nota3
    media = total / 3
    return media  # return — devolve o resultado

resultado = calcular_media(8, 7, 9)
print(f"Média: {resultado}")  # Média: 8.0

# error — Python avisa quando algo está errado
# print("olá"   ← faltou fechar o parêntese
# SyntaxError: '(' was never closed
```

</v-click>

---
layout: defaultS
card: true
bgPreset: animate
pulse: true
---

<!-- SLIDE 30 — Exercício: Read the Code -->
# Read the Code!

```python
# This function calculates the average of three grades
def calculate_average(grade1, grade2, grade3):
    total = grade1 + grade2 + grade3  # sum all grades
    average = total / 3               # divide by number of grades
    return average                    # return the result

result = calculate_average(8, 7, 9)
print(f"The average is: {result}")
```
---
layout: defaultS
card: true
bgPreset: animate
pulse: true
---

# Read the Code!

1. **What does this function do?** (responda em português)
2. **How many parameters does it receive?** Quais são os nomes?
3. **What type is the variable `result`?** integer ou float?
4. **What does `return` do** neste código?

<v-click>

**Gabarito:** (1) Calcula a média de 3 notas · (2) 3 parameters: grade1, grade2, grade3 · (3) float (8.0) · (4) devolve o valor calculado para quem chamou a função

</v-click>

---
layout: default
card: true
bgPreset: animate
---

<!-- SLIDE 31 — Quiz oral -->

# <carbon-flash /> Quiz Oral

**Professor mostra a palavra — você responde: tradução + uso em Python!**

<v-clicks>

1. `variable` → ?
2. `function` → ?
3. `loop` → ?
4. `string` → ?
5. `integer` → ?

</v-clicks>

---
layout: default
card: true
bgPreset: animate
---

<!-- SLIDE 31 — Quiz oral -->

# <carbon-flash /> Quiz Oral

**Professor mostra a palavra — você responde: tradução + uso em Python!**

<v-clicks>

6. `float` → ?
7. `boolean` → ?
8. `parameter` → ?
9. `return` → ?
10. `error` → ?

</v-clicks>

---
layout: default
card: true
bgPreset: palette
---

<!-- SLIDE 32 — Conexão com o Av.1 -->

# Os 10 Termos de Hoje Ajudam no Av.1 🔗

**O Glossário do Av.1 tem 10 termos de IA. Os de programação de hoje se conectam:**

<v-clicks>

- **Model** treina com **datasets** → o modelo usa **functions** internas
- **Token** é processado como **string** (texto)
- **Epoch** = número **integer** de passagens pelos dados
- **Inference** = chamar a função `predict()` que **returns** uma previsão
- Erros de **bias** podem aparecer como **errors** nas métricas de avaliação

</v-clicks>

<v-click>

> 💡 Cada vez que você escreve código Python, está usando vocabulário em inglês. Entender o significado das palavras faz você programar com mais confiança e ler documentação com mais facilidade.

</v-click>

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 33 — Encerramento A14 -->

# Até Amanhã, tropinha!

**Hoje você aprendeu:**

- 🔐 **LGPD:** seus dados têm proteção legal — dados pessoais vs sensíveis, direitos do titular, segurança digital
- 📝 **Word:** sumário automático, cabeçalho/rodapé, PDF — ferramentas profissionais de formatação
- 🇬🇧 **Inglês:** 10 termos de programação com contexto Python real
---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 33 — Encerramento A14 -->

# Até Amanhã, tropinha!

**Para amanhã (A15 — 17/04):**
- 🐍 **UC05:** Loops `while` em Python, metodos de listas
- 🗄️ **UC08:** Nosso banco de dados
- 🖥️ **UC06:** CPU-Z

⚠️ **Av.1 — prazo final amanhã, 17/04.** Quem não entregou hoje, entrega até o fim da A15!
