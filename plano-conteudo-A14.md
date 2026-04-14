# Plano de Conteúdo — A14 (16/04 Qui)

> Gerado por `@planejador-curricular` em 14/04/2026.
> Fonte base: `roadmap-t1.md` · Enriquecido com fontes web.
> Para gerar slides: `@produtor-aula A14` (pula entrevista, lê este arquivo).

---

## Composição da Aula

| Bloco | UC | Disciplina | HA | Horário |
|---|---|---|---|---|
| 1 | UC07 | Transformação Digital | 3HA | 7h10–9h40 |
| 2 | UC01 | Fundamentos de Computação | 2HA | 9h50–11h30 |
| 3 | UC02 | Inglês Instrumental | 1HA | 11h30–12h20 |

**Tipo:** Sem2-Qui
**Avaliações neste dia:** Nenhuma (Av.1 TC tem prazo A14/A15 — apenas lembrar os alunos)

---

## Bloco 1 — UC07: LGPD na Prática + Segurança Digital (3HA)

### Objetivo de Aprendizagem
Ao final deste bloco, o aluno será capaz de identificar os princípios da LGPD, diferenciar dados pessoais de dados sensíveis, reconhecer os direitos do titular de dados, e aplicar práticas básicas de segurança digital (senhas fortes, 2FA, identificação de phishing).

### Indicadores Avaliados
- UC07-Ind.3: Considera a segurança digital na transformação digital em uma organização
- UC07-Ind.1: Compreende as aplicações dos fundamentos em transformação digital (reforço)
- ECs: UC07-K5 (ferramentas digitais, segurança, LGPD/GDPR), UC07-H4 (aplicar segurança conforme boas práticas)

### Conteúdo Detalhado

#### 1. O que é a LGPD (~20min)
A LGPD (Lei nº 13.709/2018) foi criada para proteger os direitos fundamentais de liberdade e privacidade. Estabelece regras sobre coleta, armazenamento, tratamento e compartilhamento de dados pessoais. Vigente desde agosto de 2020, afeta todos os setores — de compras online a redes sociais, hospitais, bancos, escolas.

- **Pontos-chave:**
  - A lei se aplica a qualquer organização que processe dados de pessoas no Brasil, mesmo com sede no exterior
  - Define agentes de tratamento: Controlador (decide), Operador (executa), Encarregado (canal de comunicação)
  - A ANPD (Autoridade Nacional de Proteção de Dados) fiscaliza e pode penalizar
  - Multas: até 2% do faturamento anual, limite de R$ 50 milhões por infração
- **Exemplo prático:** "Quando você se cadastra no Instagram, seus dados (nome, email, fotos) são tratados pela Meta. Se eles vazarem, a Meta pode ser multada pela ANPD."
- **Conexão com IA:** Modelos de IA treinam com dados — se esses dados são pessoais, a LGPD se aplica. Ex: reconhecimento facial em câmeras de segurança.

> 📚 **Fonte:** [Gov.br — LGPD](https://www.gov.br/esporte/pt-br/acesso-a-informacao/lgpd) — Visão geral da lei, agentes de tratamento, direitos dos titulares.
> 📝 **Trecho adaptado (pt-BR):** "A LGPD foi promulgada para proteger os direitos fundamentais de liberdade e de privacidade, e a livre formação da personalidade de cada indivíduo. O tratamento de dados diz respeito a qualquer atividade que utiliza um dado pessoal — coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação."

> 📚 **Fonte:** [Serpro — O que muda com a LGPD](https://www.serpro.gov.br/lgpd/menu/a-lgpd/o-que-muda-com-a-lgpd) — Consentimento, automatização, gestão de riscos, penalidades.
> 📝 **Trecho adaptado (pt-BR):** "O consentimento do cidadão é a base para que dados pessoais possam ser tratados. A lei traz várias garantias ao cidadão, que pode solicitar que dados sejam deletados, revogar um consentimento, transferir dados para outro fornecedor de serviços."

#### 2. Dados Pessoais vs Sensíveis (~15min)
Nem todos os dados são iguais perante a lei. Dados pessoais identificam alguém (nome, CPF, email). Dados sensíveis exigem proteção extra por seu potencial discriminatório.

- **Dados pessoais:** nome, endereço, CPF, RG, e-mail, telefone, IP, geolocalização, cookies
- **Dados sensíveis:** origem racial/étnica, convicção religiosa, opinião política, saúde, vida sexual, dados genéticos, biometria
- **Dados anonimizados:** não são considerados dados pessoais pela LGPD (se irreversivelmente anonimizados)
- **Exercício rápido (5min):** Lista de 10 dados → alunos classificam cada um como pessoal, sensível ou anônimo
  - Ex: "Nome completo" (pessoal), "Tipo sanguíneo" (sensível), "Média de vendas por bairro sem identificação" (anônimo)

#### 3. Direitos do Titular (~15min)
A LGPD garante ao cidadão uma série de direitos sobre seus próprios dados.

- **Direitos principais:**
  - Confirmação: "Vocês tratam meus dados?"
  - Acesso: "Quais dados vocês têm sobre mim?"
  - Correção: "Meu endereço mudou, atualizem"
  - Anonimização/bloqueio/eliminação: "Deletem meus dados"
  - Portabilidade: "Transfira para outro serviço"
  - Revogação do consentimento: "Não autorizo mais"
- **Exemplo cotidiano:** "No Instagram, você pode baixar todos os seus dados em Configurações → Sua Atividade → Baixar suas informações"
- **Atividade (5min):** Em duplas, tentem exercer o direito de acesso em um app que usam (verificar se o app tem "Baixar meus dados")

#### 4. LGPD em Apps do Cotidiano (~15min)
Aplicação prática dos conceitos em apps que os alunos usam diariamente.

- **WhatsApp:** criptografia ponta a ponta (protege o conteúdo), mas Meta coleta metadados (com quem você fala, quando, frequência)
- **Uber:** coleta geolocalização em tempo real — dado pessoal. Política de retenção: mantém dados mesmo após exclusão da conta por período determinado
- **TikTok:** coleta dados biométricos (reconhecimento facial) — dado sensível. Polêmica internacional sobre armazenamento em servidores na China
- **Instagram:** algoritmo de recomendação usa dados de comportamento para personalizar feed — tratamento automatizado de dados pessoais

#### 5. Segurança Digital — Senhas, 2FA, Phishing (~30min)
Parte mais prática e interativa. Conecta LGPD (proteção de dados) com ações individuais de segurança.

- **Senhas fortes:**
  - Regra: mínimo 12 caracteres, misturar maiúsculas + minúsculas + números + símbolos
  - Nunca reutilizar senhas entre serviços
  - Gerenciadores de senha: Bitwarden (gratuito), Google Password Manager
  - Demonstração: "Quanto tempo leva para quebrar sua senha?" → usar howsecureismypassword.net (site didático)
- **2FA (Autenticação em Dois Fatores):**
  - O que é: algo que você sabe (senha) + algo que você tem (celular)
  - Tipos: SMS (menos seguro), app autenticador (Google Authenticator, Authy), chave física (YubiKey)
  - Demonstração: ativar 2FA na conta Google do aluno (exercício guiado)
- **Phishing e Engenharia Social:**
  - O que é phishing: e-mail/SMS falso que imita uma empresa real para roubar dados
  - Sinais de phishing: URL incorreta, urgência ("sua conta será bloqueada"), erros de português, remetente estranho
  - Engenharia social: manipulação psicológica para obter informações (ex: ligação se passando por banco)
  - Exercício: analisar 3 e-mails (1 real + 2 phishing) → identificar qual é falso e por quê

#### 6. Caso Real: Vazamento de Dados (~15min)
Estudo de caso real para consolidar conceitos.

- **Caso sugerido:** Vazamento Serasa (2021) — 223 milhões de CPFs expostos
  - O que aconteceu: base de dados com nome, CPF, renda, score de crédito, endereço vazou
  - Consequências: golpes com dados reais (fraude financeira, abertura de contas falsas)
  - LGPD aplicada: quais artigos foram violados, o que a ANPD fez (ou deveria ter feito)
- **Debate em grupo (10min):** "Uma empresa vazou seus dados. O que você faz?" — direitos do titular na prática
- **Fechamento:** checklist pessoal de segurança digital (3 ações para implementar hoje)

### Exercício Sugerido
**Tipo:** Análise de caso em dupla + debate coletivo
**Descrição:** Dado um cenário fictício de empresa que coleta dados (app de delivery), identificar: quais dados são pessoais/sensíveis, quais princípios da LGPD estão sendo seguidos/violados, quais direitos o usuário tem. Depois, apresentar ao grupo.
**Entrega:** Oral (sem entrega escrita)

### Metodologia Aplicada
Estudos de caso reais + análise em grupos (metodologia ativa baseada em problemas reais). Debate estruturado. Foco na visão sistêmica e no diagnóstico de cenários práticos, conforme recomendado para UC07.

### Avaliação Alinhada
Este bloco prepara para Av.2 Quiz (Q14 sobre segurança digital, Q11-15 sobre TD). Não há avaliação neste dia.

### Cross-UC
- **UC01:** LGPD relevante para proteção de dados pessoais — conexão com Sociologia+Tecnologia (fundamentos de computação)
- **UC04:** Ética em IA se conecta a LGPD (uso responsável de dados para treinar modelos)

---

## Bloco 2 — UC01: Word Avançado — Preparação Av.1 (2HA)

### Objetivo de Aprendizagem
Ao final deste bloco, o aluno será capaz de criar um sumário automático usando estilos de Heading, inserir cabeçalho e rodapé, numerar páginas, usar revisão ortográfica e exportar para PDF — habilidades necessárias para entregar o Av.1 (Glossário IA).

### Indicadores Avaliados
- UC01-Ind.2: Cria, edita, formata e imprime documentos digitais no Word
- UC01-Ind.3: Aplica estratégias de edição e revisão para solucionar problemas de digitação e estrutura
- ECs: UC01-K5 (Word), UC01-H2 (produzir e revisar documentos com formatação adequada)

### Conteúdo Detalhado

#### 1. Revisão Rápida — Estilos H1/H2 (~10min)
Recapitular o que foi ensinado em A11: aplicar estilos Heading 1 e Heading 2 ao texto. Estilos são a base do sumário automático.

- **Ponto-chave:** Estilos não são "só negrito grande" — são marcadores semânticos que o Word usa para identificar estrutura do documento
- **Demonstração:** Abrir documento de exemplo → aplicar H1 ao título do capítulo → aplicar H2 aos subtítulos → mostrar como o Painel de Navegação se atualiza automaticamente

#### 2. Sumário Automático (~20min)
O sumário automático é gerado a partir dos estilos de Heading aplicados. É uma das funcionalidades mais profissionais do Word.

- **Passo a passo:**
  1. Aplicar estilos (H1, H2, H3) ao documento
  2. Posicionar o cursor onde o sumário deve ficar (geralmente após a capa)
  3. Referências → Sumário → Tabela Automática 1 ou 2
  4. O sumário mostra títulos + números de página
  5. Atualizar sumário: clique direito → Atualizar campo → Atualizar tabela inteira
- **Conexão prática:** "No glossário do Av.1, vocês terão seções. O sumário automático vai criar o índice."
- **Erro comum:** Formatar texto manualmente (negrito + tamanho 16) em vez de usar estilos → sumário fica vazio

> 📚 **Fonte:** [Microsoft Support — Criar um sumário no Word](https://support.microsoft.com/pt-br/office/inserir-um-sum%C3%A1rio-882e8564-0edb-435e-84b5-1d8552571df0) — Tutorial oficial passo a passo.
> 📝 **Nota:** Link 404 no momento da verificação. Usar documentação alternativa do Word 365 ou demonstração ao vivo como substituto.

#### 3. Cabeçalho e Rodapé (~15min)
Cabeçalho e rodapé são áreas que se repetem em todas as páginas do documento.

- **Inserir:** Inserir → Cabeçalho (ou Rodapé) → escolher modelo
- **Conteúdo típico:** cabeçalho = nome do aluno + disciplina; rodapé = número da página
- **Numeração de páginas:** Inserir → Número de Página → posição (inferior, centralizado)
- **Dica:** A capa normalmente não tem numeração → usar "Primeira página diferente" nas opções de cabeçalho
- **Exercício guiado:** Inserir cabeçalho com "Técnico em IA — Senac" e rodapé com número de página

#### 4. Revisão Ortográfica e Gramatical (~10min)
O Word tem corretor embutido que sublinha erros em vermelho (ortografia) e azul (gramática).

- **Revisão completa:** Revisão → Verificação → percorrer documento corrigindo sugestões
- **Idioma:** Verificar se o idioma está em Português (Brasil)
- **Limitações:** O corretor não pega erros de contexto (ex: "cessa" vs "sessa") → revisar manualmente
- **Exercício:** Abrir documento propositalmente com 5 erros → aluno usa revisão para encontrar e corrigir

#### 5. Exportar para PDF (~5min)
PDF é o formato universal para entrega de documentos — mantém a formatação em qualquer computador.

- **Passo a passo:** Arquivo → Salvar como → Tipo: PDF ou Arquivo → Exportar → PDF
- **Dica:** Sempre verificar o PDF gerado — às vezes tabelas ou imagens mudam de posição

#### 6. Prática Guiada — Montando o Glossário (~40min)
Os alunos aplicam tudo em um documento real: o glossário do Av.1 (10 termos de IA em inglês com tradução e significado).

- **Estrutura do documento:**
  - Capa (nome, disciplina, data)
  - Sumário automático
  - Seção 1: Glossário (tabela com 3 colunas: Termo EN, Tradução PT, Significado)
  - Seção 2: "Minha Opinião" (reflexão ética sobre IA — parágrafo curto)
  - Cabeçalho + rodapé + numeração de páginas
  - Exportar para PDF
- **Entrega:** Quem terminar pode entregar o Av.1 no mesmo dia. Os demais têm até A15 (17/04).

### Exercício Sugerido
**Tipo:** Prática guiada individual (com apoio do professor)
**Descrição:** Criar documento Word com capa, sumário automático, tabela de glossário (pelo menos 5 termos), seção de reflexão, cabeçalho/rodapé, exportar PDF.
**Entrega:** Push no repositório ou upload no Classroom

### Metodologia Aplicada
Prática em laboratório — método 4 passos (demonstrar → guiar → praticar → validar). Conforme UC01: desenvolvimento do raciocínio lógico, organização e interpretação de dados via ferramentas digitais.

### Avaliação Alinhada
**Av.1 (TC) — Glossário IA Word Bilíngue.** Prazo: A14 (16/04) ou A15 (17/04). Este bloco é diretamente dedicado a preparar os alunos para a entrega. Quem terminar na aula já pode entregar.

### Cross-UC
- **UC02:** Os 10 termos do glossário são em inglês → aproveitam o vocabulário dos Blocos 1-3 já ensinados + os novos termos do Bloco 4 (programação) que serão dados no Bloco 3 desta aula
- **UC04:** Os termos do glossário são de IA (machine learning, dataset, model, training, inference, bias, token, embedding, epoch, GPU) — conteúdo de UC04 já consolidado

---

## Bloco 3 — UC02: Programming Vocabulary — Bloco 4 (1HA)

### Objetivo de Aprendizagem
Ao final deste bloco, o aluno será capaz de reconhecer e definir 10 termos de programação em inglês (variable, function, loop, string, integer, float, boolean, parameter, return, error), relacionando cada termo ao seu uso em Python.

### Indicadores Avaliados
- UC02-Ind.1: Reconhece vocabulário técnico em inglês presente em softwares e ambientes de programação
- UC02-Ind.2: Interpreta instruções simples em inglês em manuais, menus e tutoriais
- ECs: UC02-K1 (vocabulário essencial), UC02-H4 (relacionar termos ao uso prático)

### Conteúdo Detalhado

#### 1. Introdução: Why English in Programming? (~5min)
Contextualizar por que programação usa inglês: Python, como a maioria das linguagens, tem keywords em inglês. Documentação oficial é em inglês. Mensagens de erro são em inglês.

- **Dado curioso:** Python tem 35 keywords (palavras reservadas) — todas em inglês
- **Conexão:** "Vocês já viram `if`, `else`, `print`, `input` nas aulas de Python. Hoje vamos entender o que essas palavras significam em inglês."

> 📚 **Fonte:** [Real Python — Python Keywords: An Introduction](https://realpython.com/python-keywords/) — Lista completa de keywords com explicações.
> 📝 **Trecho adaptado (pt-BR):** "Python keywords são palavras reservadas especiais que têm significados e propósitos específicos e não podem ser usadas para nenhum outro propósito. Essas keywords estão sempre disponíveis — nunca precisam ser importadas."

#### 2. Vocabulário do Dia — 10 Termos (~20min)

| # | Termo EN | Pronúncia aprox. | Tradução PT | Definição simples | Exemplo em Python |
|---|---|---|---|---|---|
| 1 | **variable** | /ˈveriəbəl/ | variável | Um nome que guarda um valor na memória | `nome = "Ana"` |
| 2 | **function** | /ˈfʌŋkʃən/ | função | Um bloco de código reutilizável que faz uma tarefa | `def saudacao():` |
| 3 | **loop** | /luːp/ | laço/repetição | Código que se repete várias vezes | `for i in range(5):` |
| 4 | **string** | /strɪŋ/ | texto/cadeia | Sequência de caracteres entre aspas | `"Hello, World"` |
| 5 | **integer** | /ˈɪntɪdʒər/ | inteiro | Número sem casas decimais | `idade = 17` |
| 6 | **float** | /floʊt/ | flutuante | Número com casas decimais | `nota = 8.5` |
| 7 | **boolean** | /ˈbuːliən/ | booleano | Valor que é True ou False | `ativo = True` |
| 8 | **parameter** | /pəˈræmɪtər/ | parâmetro | Valor que uma função recebe para trabalhar | `def soma(a, b):` |
| 9 | **return** | /rɪˈtɜːrn/ | retornar | Resultado que a função devolve | `return a + b` |
| 10 | **error** | /ˈerər/ | erro | Quando o código não funciona como esperado | `SyntaxError: ...` |

- **Método:** Apresentar cada termo com 3 elementos: palavra EN → definição PT → snippet de Python
- **Repetição oral:** Professor fala a pronúncia, alunos repetem em coro (baixa pressão, lúdico)

> 📚 **Fonte:** [Real Python — Python Keywords](https://realpython.com/python-keywords/) — Seções sobre `def`, `return`, `for`, `if`, `True/False/None`.
> 📝 **Trecho adaptado (pt-BR):** "A keyword `def` é usada para definir uma função ou método. A keyword `return` especifica o que é retornado de uma função. A keyword `for` é usada para criar um loop que itera sobre uma sequência."

#### 3. Exercício — Match & Code (~15min)
Exercício interativo em duas partes:

**Parte A — Match (5min):** Coluna A (termo EN) ↔ Coluna B (definição PT) ↔ Coluna C (exemplo Python)
- Alunos fazem em dupla, depois corrigem juntos

**Parte B — Read the Code (10min):** Dado um snippet de Python com comentários em inglês:
```python
# This function calculates the average of three grades
def calculate_average(grade1, grade2, grade3):
    total = grade1 + grade2 + grade3  # sum all grades
    average = total / 3  # divide by number of grades
    return average  # return the result

# Call the function with three integer values
result = calculate_average(8, 7, 9)
print(f"The average is: {result}")  # print the output
```
Perguntas:
1. What does this function do? (resposta em PT)
2. How many parameters does it receive?
3. What type is the variable `result`? (integer or float?)
4. What does `return` do in this code?

#### 4. Quick Quiz Oral (~10min)
Professor mostra a palavra na tela → aluno diz a tradução + uso em Python. Quem acertar mais rápido ganha ponto simbólico.

- Variação: mostrar um snippet com um erro → aluno identifica o erro E diz o nome do erro em inglês ("It's a SyntaxError because...")

### Exercício Sugerido
**Tipo:** Match em dupla + leitura de código + quiz oral
**Descrição:** Match de termos, leitura interpretativa de snippet Python com comentários em inglês, quiz de velocidade oral
**Entrega:** Sem entrega formal (participação)

### Metodologia Aplicada
Vocabulário técnico contextualizado em interfaces e programação real, conforme diretriz de UC02: "amplia vocabulário técnico e familiaridade com termos e anglicismos essenciais usados em TI, permitindo o acesso a documentações, tutoriais e manuais de softwares."

### Avaliação Alinhada
- **Av.1 (TC):** Reforça vocabulário para o glossário bilíngue (termos de programação complementam os termos de IA já conhecidos)
- **Av.2 (PQ):** Prepara Q16 do quiz — leitura de trecho de manual/documentação em inglês

### Cross-UC
- **UC05:** Todos os 10 termos são usados diretamente nas aulas de Python. O bloco "for" (loop) será ensinado em A15.
- **UC04:** Termos como "model", "training", "bias" (já vistos em blocos anteriores) se conectam aos novos termos de programação

---

## Notas para o @produtor-aula
- **Ritmo:** UC07 (3HA) é o bloco mais denso — intercalar exposição com atividades curtas para manter engajamento. Turma responde bem a debates (feedback A07).
- **UC01:** Bloco 100% prático. Alunos devem sair com o documento do Av.1 quase pronto. Deixar tempo suficiente para a prática guiada (~40min).
- **UC02:** Bloco curto (1HA). Manter dinâmico — evitar slides longos. Quiz oral no final engaja bem.
- **Lembrete Av.1:** Iniciar a aula lembrando que o prazo do Av.1 (Glossário IA) é 16/04 ou 17/04. Quem terminar no Bloco 2, pode entregar na hora.
- **Cross-UC forte:** Os 3 blocos se conectam naturalmente — LGPD (UC07) → glossário tem termos de IA (UC01+UC02) → termos de programação (UC02) usados em Python (UC05). Aproveitar essa coesão nos slides.
- **Pendência A13:** A sala invertida de UC03 ficou incompleta — alunos precisam terminar apresentações em A17 (próximo slot UC03). Mencionar brevemente se algum aluno perguntar.

## Fontes Consolidadas

| # | UC | Título | URL | Idioma | Usado em |
|---|---|---|---|---|---|
| 1 | UC07 | Gov.br — LGPD | https://www.gov.br/esporte/pt-br/acesso-a-informacao/lgpd | PT | §1 O que é a LGPD |
| 2 | UC07 | Serpro — O que muda com a LGPD | https://www.serpro.gov.br/lgpd/menu/a-lgpd/o-que-muda-com-a-lgpd | PT | §1 LGPD, §3 Direitos, §6 Caso |
| 3 | UC01 | Microsoft Support — Sumário no Word | https://support.microsoft.com/pt-br/office/ | PT | §2 Sumário (link 404, usar demo) |
| 4 | UC02 | Real Python — Python Keywords | https://realpython.com/python-keywords/ | EN | §1 Intro, §2 Vocabulário |
