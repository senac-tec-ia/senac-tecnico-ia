---
theme: ./
colorSchema: dark
title: "Técnico em IA: Aula 04"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 04"
bgPreset: palette
layout: cover
---

# Técnico em Inteligência Artificial
## Aula 04

*Fundamentos de Computação, Inglês Técnico e Primeiros Passos em Python*

**Leonardo Zanini**

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
aulaNum: "Aula 04"
---

# RECAPITULANDO
## Finalizando os Exercícios da Aula Anterior

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 04  criar estrutura de projeto (slide 2/2) -->

# Exercício 04: Crie a Estrutura do Projeto (2/2)

Conclua a configuração:

4. Dentro de `Aula-04/anotacoes/`, crie `README.txt`
5. Escreva: `Projeto SENAC-TecIA | [Seu Nome] | Aula 04 | [Data]`
6. Salve e feche

> **Por que sem espaços no nome da pasta?** Você vai descobrir no próximo exercício.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 05  snake_case vs espaços no terminal  nível 4: raciocínio (slide 1/2) -->

# Exercício 05: Por Que snake_case Importa? (Parte 1)

**Parte 1: Crie dois arquivos de teste** em `Aula-04/anotacoes/`:
1. `meu arquivo de teste.txt`
2. `meu_arquivo_de_teste.txt`

**Parte 2: Abra o Prompt de Comando** (`Win + R`  `cmd`):

```
cd %USERPROFILE%\Documents\SENAC-TecIA\Aula-04\anotacoes
type "meu arquivo de teste.txt"
type meu_arquivo_de_teste.txt
```

Observe o comportamento: sem aspas, cada palavra torna-se um argumento separado e o terminal retorna erro.

> Anote o que aconteceu ao rodar cada comando.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 05  snake_case vs espaços no terminal  nível 4: raciocínio (slide 2/2) -->

# Exercício 05: Por Que snake_case Importa? (Parte 2)

**Responda no caderno com base na demonstração anterior:**

| Pergunta | Sua resposta |
|---|---|
| Por que o arquivo com espaços precisou de aspas? | |
| O que acontece se esquecer as aspas? | |
| Qual convenção evita esse problema? | |
| Onde mais você usará snake_case neste curso? | |

> O terminal interpreta espaços como separadores de argumento. `snake_case` elimina essa ambiguidade.

> Salve suas respostas em `SENAC-TecIA/Aula-04/anotacoes/README.txt`.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: convenções de nomenclatura em programação -->

# Convenções de Nomenclatura em Programação

Todo ecossistema de programação tem regras de como nomear arquivos, pastas e variáveis. Essas regras existem para que qualquer desenvolvedor, em qualquer computador do mundo, consiga trabalhar com o mesmo código.

| Convenção | Exemplo | Usado em |
|---|---|---|
| `snake_case` | `analise_dados.py` | Python, variáveis, arquivos de código |
| `kebab-case` | `meu-projeto-ia` | Pastas, URLs, endereços web |
| `PascalCase` | `MinhaClasse` | Classes em Python, Java, C# |
| `camelCase` | `minhaVariavel` | JavaScript, Java |
| `SCREAMING_SNAKE_CASE` | `TAXA_MAXIMA` | Constantes em Python |

**Regra deste curso — sem exceções:**

| O que é | Convenção | Exemplo correto | Exemplo errado |
|---|---|---|---|
| **Pasta** | `kebab-case` | `aula-04`, `meu-projeto` | `Aula 04`, `MeuProjeto` |
| **Arquivo de código** | `snake_case` | `calcula_media.py` | `Calcula Media.py` |
| **Constante** | `SCREAMING_SNAKE_CASE` | `TAXA_MAXIMA` | `taxaMaxima` |

> **Nunca use espaços. Nunca use acentos (ã, ç, é, á...) em nomes de arquivos ou pastas de código.**

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- vocabulário base (slide 1/2) -->

# Vocabulário Técnico Essencial (1/2)

| Termo em Inglês | Tradução | Contexto de uso |
|---|---|---|
| **Hardware** | Hardware | Peças físicas do computador |
| **Software** | Software | Programas e sistemas |
| **File** | Arquivo | Um documento salvo no computador |
| **Folder** | Pasta | Diretório que organiza arquivos |
| **Save** | Salvar | Gravar um arquivo no disco |
| **Open** | Abrir | Acessar um arquivo ou programa |
| **Close** | Fechar | Encerrar um programa ou janela |

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- vocabulário base (slide 2/2) -->

# Vocabulário Técnico Essencial (2/2)

| Termo em Inglês | Tradução | Contexto de uso |
|---|---|---|
| **Keyboard** | Teclado | Periférico de entrada de texto |
| **Mouse** | Mouse | Periférico de ponteiro |
| **Screen / Monitor** | Tela / Monitor | Periférico de saída visual |
| **Computer** | Computador | A máquina completa |
| **Processor** | Processador | CPU: unidade de processamento |
| **Memory** | Memória | RAM ou armazenamento |

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 01  estágio 1: reconhecimento (slide 1/2) -->

# ING 01: Reconheça os Termos (1/2)

Escreva a tradução sem consultar:

| Inglês | Português |
|---|---|
| File | |
| Keyboard | |
| Folder | |
| Screen | |
| Save | |

> **Regra:** sem consulta. O objetivo é saber o que você já conhece.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 01  estágio 1: reconhecimento (slide 2/2) -->

# ING 01: Reconheça os Termos (2/2)

Continuação: sem consultar:

| Inglês | Português |
|---|---|
| Memory | |
| Open | |
| Processor | |
| Close | |
| Hardware | |

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 02  estágio 1: associação (slide 1/2) -->

# ING 02: Una as Palavras (1/2)

Ligue cada termo em inglês ao seu equivalente em português:

| **Inglês** | **Português** |
|---|---|
| Hardware | Pasta |
| Software | Arquivo |
| File | Tela |
| Folder | Salvar |
| Save | Peças físicas |

*Escreva no caderno e trace as linhas de conexão.*

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 02  estágio 1: associação (slide 2/2) -->

# ING 02: Una as Palavras (2/2)

Continuação:

| **Inglês** | **Português** |
|---|---|
| Mouse | Programas e sistemas |
| Screen | Teclado |
| Keyboard | Mouse |
| Memory | Processador |
| Processor | Memória |

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 05  vocabulário em contexto  escolher a palavra certa -->

# ING 05: Escolha a Palavra Certa

**Exercício individual: 8 minutos**

**Banco de palavras:** `processor` / `storage` / `keyboard` / `screen` / `file explorer`

Escolha UMA palavra do banco para cada lacuna:

1. The ________ processes all instructions. *(processador)*
2. I save my files on the ________. *(armazenamento)*
3. Use the ________ to type text. *(teclado)*
4. The ________ displays the image. *(monitor)*
5. Open the ________ to browse files. *(explorador de arquivos)*

> Cada lacuna tem apenas uma resposta certa. Escolha do banco acima — não é para inventar.

<v-click>

**Respostas:** `processor` / `storage` / `keyboard` / `screen` / `file explorer`

</v-click>

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- slide de introdução ao conceito de duplas  ponto de partida para as atividades em dupla -->

# Trabalhando em Duplas

A partir daqui, os exercícios são feitos **em dupla**.

**Como funciona:**
- **Aluno A** lê o enunciado em voz alta e começa a resposta
- **Aluno B** observa, completa ou corrige
- Depois de cada atividade, os papéis se invertem

**Por que duplas?**
- Você aprende mais explicando para outra pessoa do que lendo sozinho
- Na área de IA, programadores revisam o código uns dos outros  isso se chama *code review*

> Escolham agora quem é A e quem é B. Anote no caderno.

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 04"
---

<!-- ING 03  estágio 1 oral: apontar objeto real e dizer o nome em inglês  em duplas -->

# ING 03: Aponte e Diga em Inglês (em dupla)

**Aluno A aponta** para um objeto da lista e pergunta: *"What is this?"*
**Aluno B responde** com o nome correto em inglês. Depois invertem.

| Objeto | Nome em inglês |
|---|---|
| O teclado na mesa | **Keyboard** |
| O mouse ao lado | **Mouse** |
| A tela do computador | **Screen** / **Monitor** |
| O computador em si | **Computer** |
| Uma pasta aberta | **Folder** |
| Um arquivo aberto | **File** |


> Sem frases completas ainda: apenas a **palavra correta** dita em voz alta.

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 04"
---

<!-- dinâmica: verdade ou mentira  inglês técnico  ativação rápida antes do próximo bloco -->

# Verdade ou Mentira?

**Em dupla: 5 minutos**  Discutam e decidam: V ou M para cada frase.
Quando o professor sinalizar, todos revelam juntos.

<v-click>

1. GPU, CPU e RAM têm o mesmo nome em português e em inglês.

</v-click>
<v-click>

2. Para usar ferramentas de IA como o ChatGPT, você precisa saber falar inglês fluentemente.

</v-click>
<v-click>

3. A documentação oficial do Python está disponível em português.

</v-click>
<v-click>

4. Mensagens de erro do terminal sempre aparecem em inglês, mesmo que o Windows esteja em português.

</v-click>
<v-click>

5. Saber ler inglês técnico é diferente de saber falar inglês.

</v-click>
<v-click>

**Respostas:** 1. V &nbsp;|&nbsp; 2. M &nbsp;|&nbsp; 3. M &nbsp;|&nbsp; 4. V &nbsp;|&nbsp; 5. V

</v-click>

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 04"
---

<!-- dinâmica em dupla: duelo de definições  explicar o termo sem falar a palavra -->

# Duelo de Definições (em dupla)

**Em dupla: 8 minutos**  Um explica, o outro adivinha. Depois trocam.

**Regras:**
- Aluno A escolhe uma palavra da lista e explica **em português o que ela faz**  sem falar a palavra em inglês
- Aluno B tem 15 segundos para dizer a palavra em inglês

**Lista de palavras:** `Keyboard` / `Mouse` / `Screen` / `Processor` / `Memory` / `Folder` / `File` / `Save` / `Open` / `Close`

> Exemplo: *"É o que você usa para digitar texto"*  **Keyboard**


---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 04"
---

<!-- dinâmica: leitura de mensagem de erro em inglês  em dupla  substitui caça ao termo (1/2) -->

# Encontre a Palavra-Chave no Erro! (1/2) (em dupla)

**Em dupla: 8 minutos**  Leia cada mensagem de erro e identifique **a palavra-chave** em inglês.

Para cada erro abaixo, respondam juntos:
1. Qual é a **palavra mais importante** da mensagem?
2. O que essa palavra significa em português?
3. O que o computador está tentando dizer?

> Não é preciso traduzir frase por frase  identifique a palavra que diz **o que aconteceu**.

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 04"
---

<!-- dinâmica: leitura de mensagem de erro em inglês  em dupla  substitui caça ao termo (2/2) -->

# Encontre a Palavra-Chave no Erro! (2/2) (em dupla)

| Mensagem de erro | Palavra-chave | Significado |
|---|---|---|
| `File not found` | | |
| `Permission denied` | | |
| `No such file or directory` | | |
| `Invalid input` | | |
| `Operation completed successfully` | | |

> Não é preciso traduzir frase por frase  identifique a palavra que diz **o que aconteceu**.

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 04"
---

<!-- dinâmica: adivinhe o termo  turma escreve no computador, resposta revelada no clique (1/2) -->

# Adivinhe o Termo! (1/2) (turma + computador)

**Dinâmica: 8 minutos** | 3 rodadas

**Como funciona:**
1. Um voluntário **escolhe** uma palavra da lista visível na tela
2. Ele lê em voz alta a **descrição em português** (mostrada pelo professor no próximo clique)
3. A turma toda **abre um bloco de notas** e digita a palavra em inglês
4. Quando todos digitarem, o professor clica e a resposta aparece na tela
5. Quem acertou? Todos verificam juntos.

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 04"
---

<!-- dinâmica: adivinhe o termo  turma escreve no computador, resposta revelada no clique (2/2) -->

# Adivinhe o Termo! (2/2) (turma + computador)

**Lista de palavras:**

`Keyboard` | `Mouse` | `Screen` | `Processor` | `Memory`

<v-click>

**Respostas / Descrições:**
- *"O que você usa para digitar texto"* → **Keyboard**
- *"O ponteiro que você move na mesa"* → **Mouse**
- *"O que exibe a imagem do computador"* → **Screen**
- *"O componente que executa os cálculos"* → **Processor**
- *"Onde o computador guarda o que está usando agora"* → **Memory**

</v-click>

> Regra: todos digitam antes do professor revelar. Não é competição — é prática coletiva.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 07  estágio 3: completar comandos técnicos com uma palavra (slide 1/2)  em dupla -->

# ING 07: Complete o Comando (1–5) (em dupla)

**Em dupla: 5 minutos** | Complete com **uma palavra** do banco:

*(save / open / close / file / folder / keyboard / screen / processor / memory / hardware)*

1. Click ___ to write. *(o que você usa para digitar?)*
2. Press Ctrl+S to ___ the document.
3. Double-click to ___ the program.
4. Click X to ___ the window.
5. Create a ___ to organize your files.

> Cada lacuna tem apenas uma resposta correta. Não é tradução: é escolha técnica.

<v-click>

**Respostas:** `keyboard` / `save` / `open` / `close` / `folder`

</v-click>

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 07  estágio 3: completar comandos técnicos com uma palavra (slide 2/2)  em dupla -->

# ING 07: Complete o Comando (6–10) (em dupla)

Continue. Mesmo banco de palavras:

*(save / open / close / file / folder / keyboard / screen / processor / memory / hardware)*

6. Your report is saved as a ___ on the SSD.
7. The ___ runs all the calculations.
8. The ___ shows what the computer outputs.
9. The computer needs more ___ to open more programs.
10. The mouse is part of the computer's ___.

> Cada lacuna tem apenas uma resposta correta.

<v-click>

**Respostas:** `file` / `processor` / `screen` / `memory` / `hardware`

</v-click>

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 08  quiz de velocidade PT para EN (slide 1/2)  em dupla -->

# ING 08: Quiz de Velocidade PT → EN (1–5) (em dupla)

**Em dupla: 3 minutos** | Aluno A fala o português, Aluno B diz o inglês. Depois trocam.

| # | Português | Inglês |
|---|---|---|
| 1 | Teclado | |
| 2 | Salvar | |
| 3 | Arquivo | |
| 4 | Processador | |
| 5 | Pasta | |

> Apenas a palavra em inglês. Sem frase completa.

<v-click>

**Respostas:** `Keyboard` / `Save` / `File` / `Processor` / `Folder`

</v-click>

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 08  quiz de velocidade PT para EN (slide 2/2)  em dupla -->

# ING 08: Quiz de Velocidade PT → EN (6–10) (em dupla)

Continue. Mesmo formato:

| # | Português | Inglês |
|---|---|---|
| 6 | Memória | |
| 7 | Fechar | |
| 8 | Tela | |
| 9 | Abrir | |
| 10 | Peças físicas do computador | |

<v-click>

**Respostas:** `Memory` / `Close` / `Screen` / `Open` / `Hardware`

</v-click>

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 09  nomear pastas do projeto em inglês (slide 1/2)  em dupla -->

# ING 09: Nomeie Seu Projeto em Inglês (1/2) (em dupla)

Abra o Explorador em `SENAC-TecIA/Aula-04/` e escrevam o nome equivalente em inglês:

| Nome atual | Equivalente em inglês |
|---|---|
| `dados/` | |
| `anotacoes/` | |
| `planilhas/` | |

> Programadores do mundo inteiro nomeiam pastas em inglês. Nomes curtos e claros, sem acento, sem espaço.

<v-click>

**Respostas:** `data` / `notes` / `spreadsheets`

</v-click>

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 09  nomear pastas do projeto em inglês (slide 2/2)  em dupla -->

# ING 09: Nomeie Seu Projeto em Inglês (2/2) (em dupla)

Continue para as demais pastas:

| Nome atual | Equivalente em inglês |
|---|---|
| `glossario/` | |
| `projetos/` | |

<v-click>

**Respostas:** `glossary` / `projects`

</v-click>

> 💡 **E o `README`?** Não precisa traduzir — ele **já é inglês**. Vem de *"Read Me"* (Leia-me) e é o nome padrão universal para arquivos de introdução de projetos em todo o mundo. Você vai usar `README.md` em todos os seus projetos daqui em diante.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 10  vocabulário de mensagens de erro (slide 1/3): lendo uma mensagem completa -->

# ING 10: Lendo uma Mensagem de Erro

Todo erro do terminal tem uma estrutura. Veja este exemplo real:

```
File not found: analise_dados.py
```

A mensagem diz tudo que você precisa saber **em inglês**. Mas você não precisa traduzir a frase inteira.

Você precisa identificar **as palavras-chave**. Qual palavra diz o que aconteceu?

> O terminal sempre fala inglês — mesmo que o Windows esteja em português.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 10  vocabulário de mensagens de erro (slide 2/3): palavras uma por uma -->

# ING 10: Quebrando a Mensagem em Palavras

A frase `File not found: analise_dados.py` tem 4 partes:

| Palavra | Tradução | O que diz |
|---|---|---|
| `File` | Arquivo | O que foi procurado |
| `not` | não | Negação |
| `found` | encontrado | O resultado da busca |
| `analise_dados.py` | — | O arquivo específico que não foi achado |

**Conclusão:** *"O arquivo `analise_dados.py` não foi encontrado."*

> A palavra mais importante é `found`. Saber que `not found` = "não encontrado" já resolve a maior parte dos erros do terminal.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 10  vocabulário de mensagens de erro (slide 3/3): tabela de referência -->

# ING 10: Palavras-Chave dos Erros do Terminal

Essas são as palavras que mais vão aparecer no dia a dia:

| Palavra em inglês | Tradução | Aparece quando... |
|---|---|---|
| `not found` | não encontrado | arquivo ou pasta não existe |
| `denied` | negado | você não tem permissão |
| `invalid` | inválido | o que foi digitado está errado |
| `warning` | aviso | algo suspeito, mas não travou |
| `error` | erro | o programa parou |
| `successfully` | com sucesso | deu certo |
| `exists` | existe | já havia algo com esse nome |

> Reconhecer essas 7 palavras é suficiente para entender **80% dos erros do terminal**.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 10  leitura de mensagens de erro em inglês (slide 1/2)  em dupla  nível 3 -->

# ING 10: Leia o Erro! (1/2) (em dupla)

**Em dupla: 8 minutos** | Nível 3: leitura técnica em contexto

Para cada mensagem: identifiquem a **palavra-chave** e escrevam o que o computador está dizendo:

| Mensagem em inglês | Palavra-chave | O que aconteceu? |
|---|---|---|
| `File not found` | | |
| `Permission denied` | | |
| `Access is denied` | | |
| `No such file or directory` | | |
| `The system cannot find the path specified` | | |

<v-click>

**Respostas:** `not found` – arquivo não existe | `denied` – sem permissão de acesso | `denied` – variação de permissão | `no such` – caminho não existe | `cannot find` – diretório não existe

</v-click>

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING 10  leitura de mensagens de erro em inglês (slide 2/2)  em dupla  nível 3 -->

# ING 10: Leia o Erro! (2/2) (em dupla)

Continue com mais mensagens comuns. Identifiquem a palavra-chave e escrevam o que fazer:

| Mensagem em inglês | Palavra-chave | O que fazer? |
|---|---|---|
| `Press any key to continue` | | |
| `Are you sure? (Y/N)` | | |
| `Warning: file already exists` | | |
| `Operation completed successfully` | | |
| `Invalid input` | | |

<v-click>

**Respostas:** `any key` – pressione qualquer tecla | `sure` – confirmar (Y) ou cancelar (N) | `warning` – cuidado, arquivo já existe | `successfully` – funcionou | `invalid` – redigite com valor correto

</v-click>

> Saber ler erros em inglês é uma habilidade real do técnico em IA. Não é preciso falar fluentemente — é preciso entender o terminal.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- organização de arquivos e pastas -->

# Organização no Explorer

**Estrutura do projeto:**

```
SENAC-TecIA/
  Aula-01/
    dados/
    anotacoes/
    planilhas/
  Aula-04/    ← criar hoje
  glossario/
```

**Regra:** pastas em `kebab-case` — sem espaços, sem acentos.

**Atalhos no gerenciador de arquivos:**

| Ação | Windows | Linux |
|---|---|---|
| Abrir gerenciador | `Win + E` | `Files` no menu |
| Nova pasta | `Ctrl + Shift + N` | `Ctrl + Shift + N` |
| Renomear | `F2` | `F2` |
| Mover | `Ctrl + X` → `Ctrl + V` | `Ctrl + X` → `Ctrl + V` |

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício prático no Windows Explorer (slide 1/2) -->

# Exercício: Organizando Seus Arquivos (1/2)

**Individual: 10 minutos**  Estrutura a criar em `Documentos/SENAC-TecIA`:

```
SENAC-TecIA/
 Aula-01/     já existe
 Aula-04/     CRIAR AGORA
    exercicios/
    anotacoes/
 glossario/   já existe
 projetos/    já existe
```

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício prático no Windows Explorer (slide 2/2) -->

# Exercício: Organizando Seus Arquivos (2/2)

Passo a passo:

1. Abra o gerenciador de arquivos e navegue até `Documentos/SENAC-TecIA`
2. Crie `Aula-04/exercicios/` e `Aula-04/anotacoes/`
3. Crie `README.txt` em `Aula-04/anotacoes/` com: `Aula 04 | [Seu Nome] | [Data]`

> Ou, pelo terminal: `mkdir -p ~/Documents/SENAC-TecIA/Aula-04/exercicios` e `mkdir ~/Documents/SENAC-TecIA/Aula-04/anotacoes`

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- nomenclatura profissional de arquivos (slide 1/2) -->

# Nomenclatura Profissional de Arquivos

Por que nomear arquivos corretamente importa:

- **Erros de código:** Python e Linux não toleram espaços e acentos em caminhos
- **Colaboração:** outras pessoas precisam entender sem abrir o arquivo
- **Automação:** scripts dependem de nomes previsíveis

> **Regra universal:** nunca use espaços, nunca use acentos em arquivos de código.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- nomenclatura profissional de arquivos (slide 2/2)  reforço de acentos e maiúsculas -->

# Atenção: Acentos e Maiúsculas São Caracteres Diferentes!

Em programação, **cada byte conta**. Para o computador, "a" e "á" não são a mesma letra:

| Comparação | É o mesmo arquivo? |
|---|---|
| `arquivo.py` vs `Arquivo.py` | **NÃO** — maiúscula é um byte diferente em Linux/Python |
| `analise.py` vs `análise.py` | **NÃO** — `á` (á com acento) é um caractere diferente de `a` |
| `analise.py` vs `analiseç.py` | **NÃO** — `ç` (c-cedilha) não existe no charset ASCII padrão |
| `nao.py` vs `não.py` | **NÃO** — `ã` (a com til) causa encoding diferente |

**Exemplos de erros reais causados por acentos:**

```python
import analise_dados   # funciona
import Analise_dados   # ModuleNotFoundError  (A maiúscula ≠ a minúscula)
import análise_dados   # SyntaxError  (á não é ASCII)
import análise_ção   # SyntaxError  (ç, ã não são ASCII)
```

> Em servidores Linux, arquivos com `ç`, `ã`, `é`, `á` simplesmente não são encontrados ou causam erro de encoding. **Use sempre letras sem acento e minúsculas em nomes de arquivos.**

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício prático: aplicar convenções de nomenclatura -->

# Exercício: Corrija os Nomes! (em dupla)

**Em dupla: 8 minutos** | Apliquem as convenções corretas

Cada nome abaixo está errado. Escrevam como deveria ser:

| Nome errado | Convenção que deve usar | Nome correto |
|---|---|---|
| `Analise Dados.py` | `snake_case` | |
| `Meu Projeto IA/` | `kebab-case` | |
| `minhaclasse.py` *(classe Python)* | `PascalCase` | |
| `TAXA-maxima = 100` *(constante)* | `SCREAMING_SNAKE_CASE` | |
| `Anotações/` | `kebab-case` | |

<v-click>

**Respostas:** `analise_dados.py` | `meu-projeto-ia/` | `MinhaClasse.py` | `TAXA_MAXIMA = 100` | `anotacoes/`

</v-click>

> Regra de ouro: sem espaços, sem acentos (ç, ã, é, á...), minúsculas para arquivos e pastas.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- pesquisa técnica eficiente na internet (slide 1/2)  demonstração ao vivo -->

# Como Pesquisar Tecnicamente na Internet

**Demonstração ao vivo** — o professor vai pesquisar agora, veja a diferença:

| Pesquisa ruim | Pesquisa boa |
|---|---|
| `python erro` | `"ModuleNotFoundError" python site:stackoverflow.com` |
| `como salvar arquivo` | `"save file python" site:docs.python.org` |
| `instalar biblioteca` | `pip install pandas python tutorial` |

**Operadores de busca que você vai usar a partir de hoje:**

| Operador | Exemplo | O que faz |
|---|---|---|
| `""` (aspas) | `"File not found"` | Busca a frase **exata** |
| `site:` | `Python site:python.org` | Busca **dentro de um site específico** |
| `-` (menos) | `Python -snake` | **Exclui** um termo da busca |

> O segredo é pesquisar a mensagem de erro **exata**, entre aspas, em inglês.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- pesquisa técnica eficiente na internet (slide 2/2)  fontes de referência -->

# Onde Buscar a Resposta?

Quando encontrar um erro, estas são as fontes certas:

**Stack Overflow** (`stackoverflow.com`)

Forum mundial onde desenvolvedores postam erros e a comunidade responde com soluções testadas. É a maior base de soluções técnicas do planeta. Pesquise a mensagem de erro exata em inglês e você encontrará dezenas de respostas prontas com exemplos de código.

**GitHub Issues** (`github.com`)

É onde os próprios criadores de ferramentas como Python, Pandas e TensorFlow registram problemas e divulgam soluções. Quando uma biblioteca tem um bug, a discussão e a correção oficial aparecem aqui. Você vai cruzar com isso ao instalar pacotes.

**Documentação oficial**

Cada ferramenta tem sua própria página de documentos. Exemplos: `docs.python.org`, `pandas.pydata.org/docs`. É a fonte mais confiável e sem opinião.

> **Regra:** pesquise sempre em inglês. A maioria das soluções úteis está lá.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- método para resolver problemas técnicos  passo 1 -->

# Como Resolver Problemas Técnicos

## Passo 1  IDENTIFICAR

*O que exatamente está falhando?*

Um técnico em IA não chuta soluções. Primeiro, entende o problema.

- **Qual erro aparece?** Copie a mensagem exata  não resuma, não parafrase.
- **Quando começou?** O que mudou logo antes do erro aparecer?
- **Onde está o erro?** Em qual linha, em qual arquivo, em qual comando?

```
ERRADO: "deu erro no Python"
CERTO:  "ModuleNotFoundError: No module named 'pandas' na linha 3 do arquivo analise.py"
```

> Se você não consegue descrever o problema com precisão, você ainda não o identificou.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- método para resolver problemas técnicos  passo 2 -->

# Como Resolver Problemas Técnicos

## Passo 2  PESQUISAR

*Alguém já teve esse problema?*

Quase sempre: sim. A internet tem a resposta.

- Google com a **mensagem de erro exata entre aspas**
- Consulte **Stack Overflow**  filtre por respostas com mais votos
- Consulte a **documentação oficial** da ferramenta
- Consulte **GitHub Issues** da biblioteca

```
Busca ruim:  erro no python
Busca boa:   "ModuleNotFoundError: No module named" python pip
```

> Pesquise em inglês. Há 10x mais resultados úteis do que em português.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- método para resolver problemas técnicos  passo 3 -->

# Como Resolver Problemas Técnicos

## Passo 3  TESTAR SOLUÇÕES

*Uma coisa de cada vez.*

- Tente **uma solução** e observe o resultado
- **Nunca mude duas coisas ao mesmo tempo**  se o problema sumir, você não saberá o que funcionou
- Se não resolver: desfaça a mudança antes de tentar a próxima
- Leia a nova mensagem de erro  ela pode ser diferente da anterior

> Mudar várias coisas de uma vez elimina a única ferramenta que você tem para aprender: a relação de causa e efeito.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- método para resolver problemas técnicos  passo 4 -->

# Como Resolver Problemas Técnicos

## Passo 4  DOCUMENTAR

*O que funcionou?*

- Anote o **problema exato** e a **solução que funcionou**
- Anote também o que **não funcionou**  economiza tempo na próxima vez
- Guarde o link da fonte que te ajudou

> Isso constrói seu conhecimento técnico acumulado.

```
PROBLEMA: ModuleNotFoundError: No module named 'pandas'
CAUSA: pandas não estava instalado no ambiente
SOLUÇÃO: pip install pandas
FONTE: https://stackoverflow.com/a/12345
```

> Técnicos em IA experientes têm arquivos de notas cheios de problemas resolvidos. Você está construindo o seu agora.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- vocabulário inglês técnico ampliado (slide 1/2) -->

# Vocabulário Técnico: Bloco 2 (1/2)

| Inglês | Português | Contexto |
|---|---|---|
| **Desktop** | Área de trabalho | Tela inicial do sistema |
| **Install** | Instalar | Adicionar um software |
| **Update** | Atualizar | Nova versão de um software |
| **Browser** | Navegador | Chrome, Firefox, Edge |
| **Download** | Baixar | Salvar da internet |

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- vocabulário inglês técnico ampliado (slide 2/2) -->

# Vocabulário Técnico: Bloco 2 (2/2)

| Inglês | Português | Contexto |
|---|---|---|
| **Upload** | Enviar / Subir | Do computador para a internet |
| **Network** | Rede | Conexão entre computadores |
| **Password** | Senha | Autenticação de acesso |
| **Settings** | Configurações | Painel de ajustes do sistema |
| **Error** | Erro | Mensagem de falha do sistema |

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
aulaNum: "Aula 04"
---

<!-- divisor: início do bloco Python -->

# PYTHON DO ZERO
## Terminal, Variáveis e Primeiras Decisões

*Do Explorador de Arquivos para a linha de comando. Da linha de comando para o Python.*

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: terminal  o que é e por que usar -->

# O Terminal: O Painel de Controle Real

O **terminal** é a interface de texto do sistema. Em vez de clicar, você digita instruções.

| Interface | Como navegar | Usado por |
|---|---|---|
| Explorador de Arquivos | Clicar em pastas e ícones | Uso geral |
| Terminal (bash / zsh) | Digitar comandos | Técnicos em IA |

**Por que o terminal importa em IA:**
- Scripts Python rodam pelo terminal
- Servidores e GPUs na nuvem **não têm interface gráfica**
- Ferramentas como `pip`, `git` e `python` só existem no terminal

**Neste curso usaremos Linux** — o sistema que domína os servidores de IA no mundo.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: comandos essenciais de navegação -->

# Comandos Essenciais de Navegação (Linux)

| Comando | O que faz | Exemplo |
|---|---|---|
| `cd nome` | Entra em uma pasta | `cd SENAC-TecIA` |
| `cd ..` | Volta uma pasta | `cd ..` |
| `ls` | Lista o conteúdo da pasta | `ls` |
| `mkdir nome` | Cria uma nova pasta | `mkdir Aula-04` |
| `clear` | Limpa a tela | `clear` |
| `pwd` | Mostra em qual pasta você está | `pwd` |

> Regra: antes de criar arquivos, confirme onde você está com `pwd`. Use `ls` como hábito para ver o que há na pasta.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício terminal 1/2  navegação real no projeto SENAC-TecIA -->

# Exercício Terminal: Navegando no Projeto (1/2)

**Individual: 8 minutos**

Abra o terminal e execute em sequência:

```bash
cd ~/Documents/SENAC-TecIA
ls
cd Aula-01
ls
cd ..
pwd
```

Para cada comando, anote no caderno:
- O que o terminal exibiu?
- Em qual pasta você estava antes e depois?

> **Antes de avançar:** confirme com o professor que o terminal mostrou as pastas corretas.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício terminal 2/2  criar Aula-04 pelo terminal -->

# Exercício Terminal: Navegando no Projeto (2/2)

Ainda no terminal, crie a estrutura da Aula 04 **sem usar o Explorador**:

```bash
cd ~/Documents/SENAC-TecIA
mkdir Aula-04
cd Aula-04
mkdir exercicios
mkdir anotacoes
ls
```

Confira: o `ls` final deve mostrar as duas subpastas criadas.

> Crie `README.txt` em `Aula-04/anotacoes/` com: `Aula 04 | [Seu Nome] | [Data]`

<v-click>

**Perguntas para reflexão — anote no caderno:**

1. Qual comando criou a pasta `Aula-04`?
2. O `ls` mostrou arquivos ou pastas? Como você sabe a diferença?

</v-click>

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: o que é programação  analogia receita de bolo -->

# O Que é Programação?

Programar é escrever uma **sequência de instruções** que o computador executa na ordem.

**Analogia:** receita de bolo

```
1. Preaqueça o forno a 180°C
2. Misture farinha, ovos e açúcar
3. Coloque na forma
4. Asse por 40 minutos
```

Se você trocar o passo 4 com o passo 1, o resultado é errado. O computador faz o mesmo: executa cada linha, em ordem, sem questionar.

> **Conclusão:** um programa é uma lista de instruções. Python é a linguagem que usamos para escrevê-las.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: por que Python  3 razões visuais -->

# Por Que Python?

<v-click>

**1. Lê como inglês simples**

```python
nome = "Ana"
print(f"Olá, {nome}!")
```

</v-click>
<v-click>

**2. É a linguagem da IA**
- Google, Meta, OpenAI e NASA usam Python
- TensorFlow, PyTorch, scikit-learn: todos em Python

</v-click>
<v-click>

**3. Gratuito e aberto**
- Funciona em Windows, Linux e Mac
- Mais de 500.000 bibliotecas disponíveis gratuitamente

</v-click>

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: variáveis  analogia caixa com etiqueta -->

# Variáveis: Caixas com Etiqueta

Uma **variável** é uma caixa com etiqueta. A etiqueta é o nome. O conteúdo é o valor.

```python
nome = "Ana"
idade = 17
curso = "Técnico em IA"
```

- `nome` é a etiqueta. `"Ana"` é o que está dentro da caixa.
- O `=` não é "igual": significa **"guarde este valor nesta variável"**.
- Você pode trocar o conteúdo a qualquer momento.

> Regra: nome de variável em snake\_case, sem acento, sem espaço.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 01  primeiras variáveis em Python -->

# Exercício 01: Suas Primeiras Variáveis

**Individual: 10 minutos** | Nível 1: execução direta

> Salve como `SENAC-TecIA/Aula-04/exercicios/variaveis_aula04.py`

Abra o arquivo em qualquer editor de texto e escreva:

```python
nome = "seu nome aqui"
idade = 0
curso = "Técnico em IA"

print(nome)
print(idade)
print(curso)
```

Execute no terminal: `python variaveis_aula04.py`

**O que você deve ver:** três linhas impressas com os seus dados.

> Se der erro: leia a mensagem. Qual linha causou o problema?

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: tipos de dados  conceito -->

# Tipos de Dados: o Que a Caixa Guarda?

Uma variável não guarda apenas qualquer coisa  ela guarda um **tipo** de valor.

Por que isso importa?
- Python trata números e textos de formas diferentes
- Você não pode somar texto com número diretamente
- Funções esperam tipos específicos  dar o tipo errado causa erro

Python identifica o tipo **automaticamente** quando você cria a variável.

```python
nota = 9.5      # Python sabe que é decimal
aprovado = True # Python sabe que é verdadeiro/falso
nome = "Ana"    # Python sabe que é texto
```

> Mas você precisa saber qual tipo está usando para evitar erros.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: tipos de dados  tabela -->

# Tipos de Dados: Tabela de Referência

| Tipo | Nome Python | Exemplo | Quando usar |
|---|---|---|---|
| Texto | `str` | `"Ana"` | Nomes, frases, caminhos |
| Inteiro | `int` | `17` | Contagens, idades, índices |
| Decimal | `float` | `9.5` | Notas, medidas, pesos |
| Verdadeiro/Falso | `bool` | `True` | Sim/Não, ligado/desligado |

> Python identifica o tipo automaticamente quando você cria a variável. Mas você precisa saber qual tipo está usando para evitar erros.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: tipos de dados  exemplos de código -->

# Tipos de Dados: Exemplos no Código

Veja como o Python identifica cada tipo automaticamente:

```python
nota = 9.5        # float  → número com casas decimais
aprovado = True   # bool   → verdadeiro ou falso
turma = "Tarde"   # str    → texto entre aspas
alunos = 25       # int    → número inteiro
```

Para descobrir o tipo de qualquer variável:

```python
print(type(nota))      # <class 'float'>
print(type(aprovado))  # <class 'bool'>
print(type(turma))     # <class 'str'>
print(type(alunos))    # <class 'int'>
```

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 02  descobrindo os tipos com type() -->

# Exercício 02: Descobrindo os Tipos

**Individual: 8 minutos** | Nível 2: execução guiada

Adicione estas linhas **ao final** do `variaveis_aula04.py` que você criou:

```python
print(type(nome))
print(type(idade))
print(type(curso))
```

Execute: `python variaveis_aula04.py`

No caderno, registre a saída de cada `type()`:

| Variável | Valor | type() retornou |
|---|---|---|
| nome | "seu nome" | |
| idade | 0 | |
| curso | "Técnico em IA" | |

> **Pergunta:** o que acontece se você mudar `idade = 0` para `idade = 0.5`? Teste e anote.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: concatenação  unir textos com + -->

# Concatenação: Unindo Textos com `+`

**Concatenar** significa juntar dois ou mais textos em um só.

Em Python, você usa o operador `+` para concatenar strings:

```python
nome = "Ana"
curso = "Técnico em IA"

mensagem = "Olá, " + nome + "! Bem-vindo ao " + curso + "."
print(mensagem)
```

**Saída:** `Olá, Ana! Bem-vindo ao Técnico em IA.`

**Atenção:** você não pode concatenar texto com número diretamente:

```python
idade = 17
print("Eu tenho " + idade + " anos.")  # ERRO!
print("Eu tenho " + str(idade) + " anos.")  # correto
```

> Precisa converter o número para texto com `str()` antes de concatenar.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício: concatenação com + -->

# Exercício: Apresentação com Concatenação

**Individual: 8 minutos**

> Salve como `SENAC-TecIA/Aula-04/exercicios/apresentacao.py`

Crie variáveis com seus dados e monte uma apresentação usando **concatenação com `+`**:

```python
nome = "seu nome"
idade = 0
cidade = "sua cidade"
curso = "Técnico em IA"

apresentacao = "Olá! Meu nome é " + nome + ", tenho " + str(idade) + " anos, sou de " + cidade + " e estou no " + curso + "."
print(apresentacao)
```

Substitua os valores e execute. Verifique a saída.

> Observe: você precisou converter `idade` com `str()`. Por quê?

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: interpolação com f-string -->

# Interpolação: F-strings

**Interpolação** é inserir o valor de uma variável diretamente dentro de um texto.

Em Python, usamos **f-strings** (strings formatadas):

```python
nome = "Ana"
idade = 17
cidade = "Campinas"

mensagem = f"Olá! Meu nome é {nome}, tenho {idade} anos e sou de {cidade}."
print(mensagem)
```

**Como funciona:**
- Coloque um `f` antes das aspas
- Use `{nome_da_variavel}` dentro do texto
- Python substitui automaticamente pelo valor  sem precisar de `str()`

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício: apresentação com f-string -->

# Exercício: Apresentação com F-string

**Individual: 8 minutos**

> Adicione ao final do `apresentacao.py` que você criou

Refaça a mesma apresentação, agora usando **f-string**:

```python
apresentacao_fstring = f"Olá! Meu nome é {nome}, tenho {idade} anos, sou de {cidade} e estou no {curso}."
print(apresentacao_fstring)
```

Execute e compare com a versão anterior.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: concatenação vs f-string  comparação -->

# Concatenação vs F-string: Qual Usar?

| | Concatenação com `+` | F-string |
|---|---|---|
| Precisa de `str()` para números? | **Sim** | **Não** |
| Fácil de ler? | Menos | Mais |
| Considera o padrão atual? | Não | **Sim** |
| Quando usar? | Código legado | **Sempre prefira esta** |

**Regra prática:** use f-string. Concatenação existe, você vai ver em código antigo, mas f-strings são o padrão moderno do Python.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 03 em dupla 1/2  script com input e print -->

# Exercício 03: Olá, Turma! (em dupla) (1/2)

**Em dupla: 12 minutos** | Nível 2-3: aplicação com f-string

> Salve como `SENAC-TecIA/Aula-04/exercicios/ola_turma.py`

**Aluno A digita, Aluno B observa e sugere:**

Criem um script que:
1. Pergunta o nome do aluno com `input()`
2. Pergunta a idade com `input()`
3. Imprime com f-string: `f"Olá, {nome}! Você tem {idade} anos e está no Técnico em IA."`

Execute e teste com os dois nomes da dupla.

> **Atenção:** `input()` sempre retorna texto (`str`). Se precisar de número, use `int(input(...))`.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 03 em dupla 2/2  trocar scripts entre duplas e testar -->

# Exercício 03: Olá, Turma! (em dupla) (2/2)

**Troca de scripts entre duplas:**

1. Salve o `ola_turma.py` e passe o caminho para a dupla vizinha
2. **A dupla vizinha** executa o script de vocês
3. A dupla vizinha anota:
   - O script rodou sem erros?
   - A mensagem foi exibida corretamente?
   - O que mudaria para melhorar?

> Se o script da outra dupla quebrou: identifique a linha do erro, leia a mensagem e explique o problema para eles.

> **Ler erros é uma habilidade tão importante quanto escrever código.**

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: o que são operadores? -->

# O Que São Operadores?

**Operadores** são símbolos que dizem ao Python qual operação realizar entre dois valores.

```python
resultado = 10 + 3
```

No exemplo acima, `+` é o operador. Ele instrui o Python a **somar** `10` e `3`.

Python tem vários tipos de operadores:
- **Aritméticos:** fazem cálculos matemáticos (`+`, `-`, `*`, `/`)
- **De comparação:** comparam dois valores (`>`, `<`, `==`, `!=`)
- **Lógicos:** combinam condições (`and`, `or`, `not`)

> Neste exercício vamos focar nos **operadores aritméticos**  os de cálculo.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: operadores aritméticos  tabela -->

# Operadores Aritméticos

| Operador | Nome | Exemplo | Resultado |
|---|---|---|---|
| `+` | Soma | `10 + 3` | `13` |
| `-` | Subtração | `10 - 3` | `7` |
| `*` | Multiplicação | `10 * 3` | `30` |
| `/` | Divisão | `10 / 3` | `3.333...` |
| `//` | Divisão inteira | `10 // 3` | `3` |
| `%` | Resto | `10 % 3` | `1` |

> `//` e `%` aparecem muito em IA: paginação de dados, divisão de batches, verificar par/ímpar.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- teoria: operadores aritméticos  exemplo de uso -->

# Operadores Aritméticos: Exemplo Real

Usando os operadores em conjunto para calcular uma média:

```python
nota1 = 9
nota2 = 7
nota3 = 8

media = (nota1 + nota2 + nota3) / 3
print(f"Média: {media}")

media_inteira = (nota1 + nota2 + nota3) // 3
print(f"Média inteira: {media_inteira}")
```

**Saída:**
```
Média: 8.0
Média inteira: 8
```

> A diferença entre `/` e `//`: o primeiro dá o decimal completo, o segundo corta e mantém só o inteiro.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 04  calculadora de idades da turma (1/2) -->

# Exercício 04: Calculadora de Turma (1/2)

**Individual: 10 minutos** | Nível 3: aplicação independente

> Salve como `SENAC-TecIA/Aula-04/exercicios/calculadora_turma.py`

Crie um script que:
1. Pede a idade de **3 colegas** com `input()` (use `int(input(...))`)
2. Calcula a **média** das três idades
3. Imprime: `f"Média de idades: {media}"`
4. Imprime também: `f"Soma total: {soma}"`

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 04  calculadora de idades da turma (2/2) -->

# Exercício 04: Calculadora de Turma (2/2)

**Extensão (quem terminar antes):**

- Use `//` para calcular a média sem casas decimais
- Imprima as duas versões: com `/` e com `//`

```python
media_exata = soma / 3
media_inteira = soma // 3

print(f"Média exata: {media_exata}")
print(f"Média inteira: {media_inteira}")
```

**Pergunta no caderno:** o que a diferença entre `/` e `//` significa no resultado? Em qual situação você usaria cada um?

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 04"
---

<!-- dinâmica: caça ao bug em dupla -->

# Dinâmica: Caça ao Bug! (em dupla)

**Em dupla: 10 minutos**

O professor vai distribuir um script Python com **3 erros intencionais**. Para cada erro:

1. Execute o script e leia a mensagem de erro
2. Identifique **a linha** onde está o problema
3. Expliquem com suas palavras **por que é um erro**
4. Corrijam e executem novamente

Ao final: cada dupla apresenta **1 erro** encontrado e como corrigiu.

> Erros comuns plantados: aspas não fechadas, `print` sem parênteses, variável não declarada, `int()` esquecido no `input()`.
>
> **Regra:** a mensagem de erro do Python diz a linha. Leiam antes de tentar adivinhar.

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 6
aulaNum: "Aula 04"
---

<!-- encerramento bloco terminal + python básico -->

# Você Escreveu Seu Primeiro Programa Python!

O que você aprendeu hoje:

- Navegar no terminal com `cd`, `dir` e `mkdir`
- Criar variáveis e entender tipos: `str`, `int`, `float`, `bool`
- Unir textos com concatenação e f-string
- Calcular com os 6 operadores aritméticos
- Ler e corrigir mensagens de erro

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 8
aulaNum: "Aula 04"
---

<!-- divisor: conceitos de IA -->

# CONCEITOS DE IA
## Vocabulário Avançado e Primeiras Decisões no Código

*Termos reais do mercado e as primeiras decisões do seu código*

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 04"
---

<!-- abertura  ativação de conhecimento prévio sobre IA -->

# O Que Você Já Sabe Sobre IA?

**Discussão coletiva: 5 minutos**

Responda sem pesquisar:

- Quando você usa o ChatGPT e ele "entende" sua mensagem, o que você acha que acontece por baixo dos panos?
- Você já ouviu as siglas LLM, NLP ou GPT? O que cada uma significa para você agora?
- Por que um modelo de IA às vezes erra em perguntas simples mas acerta em perguntas difíceis?

> Não há resposta errada. O objetivo é mapear o que a turma já sabe antes de entrar nos conceitos formais.

---
layout: default
card: true
bgPreset: animate
aulaNum: "Aula 04"
---

<!-- objetivo: aluno entende o que é NLP em inglês e em português com exemplos do cotidiano -->

# NLP: Natural Language Processing

**Em inglês:** *Natural Language Processing*
**Em português:** Processamento de Linguagem Natural

**O que significa:** a área da IA que ensina computadores a **ler, entender e gerar texto em linguagem humana**.

| Você faz isso todo dia | O NLP está por trás |
|---|---|
| Digitar uma pergunta no ChatGPT | O modelo lê e interpreta seu texto |
| Usar o Google Tradutor | Tradução automática é NLP |
| Falar com a Siri ou Alexa | Reconhecimento de fala + NLP |
| Receber um e-mail marcado como spam | Classificação de texto é NLP |

> **Resumo em uma frase:** NLP é o que permite que computadores entendam frases escritas por humanos  não apenas números.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING-ADV 01: leitura de NLP em contexto real  em dupla -->

# ING-ADV 01: Leia e Explique o NLP (em dupla)

**Em dupla: 8 minutos** | Nível 2: leitura técnica em contexto

Leia cada frase, escreva a tradução e explique o que está acontecendo:

| Frase em inglês | Tradução | O que está acontecendo? |
|---|---|---|
| "The NLP model reads your sentence and finds the meaning." | | |
| "Natural Language Processing allows machines to understand human text." | | |
| "ChatGPT uses NLP to generate responses in natural language." | | |

<!-- RESPOSTAS: O modelo de NLP lê sua frase e encontra o significado / PLN permite que máquinas entendam texto humano / ChatGPT usa PLN para gerar respostas em linguagem natural -->

<v-click>

**Traduções:** O modelo lê sua frase e encontra o significado | O PLN permite que máquinas entendam texto humano | O ChatGPT usa PLN para gerar respostas em linguagem natural

</v-click>

> **Dica de leitura técnica:** identifique o sujeito (quem faz), o verbo (o que faz) e o objeto (sobre o que é) antes de traduzir.

---
layout: default
card: true
bgPreset: animate
aulaNum: "Aula 04"
---

<!-- objetivo: aluno entende o conceito de token como unidade mínima de texto processada por IA -->

# Token: A Unidade Mínima do Texto

**Em inglês:** *Token*
**Em português:** Token (sem tradução direta  o termo é universal)

**O que é:** quando um modelo de IA recebe um texto, ele **não lê palavra por palavra**. Ele divide o texto em pedaços menores chamados tokens.

**Exemplo visual:**

| Texto original | Tokens |
|---|---|
| `"Olá, mundo!"` | `"Olá"` / `","` / `"mundo"` / `"!"` = **4 tokens** |
| `"I love AI"` | `"I"` / `"love"` / `"AI"` = **3 tokens** |
| `"backpropagation"` | `"back"` / `"prop"` / `"ag"` / `"ation"` = **4 tokens** |

> Palavras comuns viram 1 token. Palavras longas e raras são quebradas em partes.
> Isso explica por que o ChatGPT tem um limite de "tokens" por conversa, não de palavras.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING-ADV 02: tokenização manual em dupla -->

# ING-ADV 02: Tokenize Você Mesmo (em dupla)

**Em dupla: 10 minutos** | Nível 3: análise e raciocínio

Regra simplificada: cada palavra = 1 token. Pontuação (`,` `!` `?` `.`) = 1 token separado.

Contem os tokens de cada frase:

| Frase | Sua contagem de tokens |
|---|---|
| `"Python é a linguagem da IA."` | |
| `"Natural Language Processing teaches machines to understand text."` | |
| `"O modelo teve um erro de backpropagation durante o treino."` | |

<v-click>

**Respostas aproximadas:** 7 tokens / 9 tokens / 11 tokens

</v-click>

> `"backpropagation"` na regra simplificada conta como 1. Em modelos reais, seria quebrado em sub-partes.

---
layout: default
card: true
bgPreset: animate
aulaNum: "Aula 04"
---

<!-- objetivo: aluno entende o que é LLM -->

# LLM: Large Language Model

**Em inglês:** *Large Language Model*
**Em português:** Modelo de Linguagem Grande

Vamos expandir cada palavra:

| Palavra em inglês | Em português | O que significa na prática |
|---|---|---|
| **Large** | Grande | Treinado com bilhões de textos da internet |
| **Language** | Linguagem | Trabalha com texto em linguagem humana |
| **Model** | Modelo | Um programa que aprendeu padrões e faz previsões |

**Exemplos reais de LLMs:**

- **GPT-4** (OpenAI) - por trás do ChatGPT
- **Gemini** (Google)
- **LLaMA** (Meta - gratuito e aberto)
- **Claude** (Anthropic)

> Um LLM não "entende" como humano. Ele aprendeu a prever qual palavra vem depois da outra com base em trilhões de exemplos.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING-ADV 03: expandir acrônimos de IA em inglês e português  em dupla -->

# ING-ADV 03: Expanda o Acrônimo (em dupla)

**Em dupla: 8 minutos** | Nível 2: reconhecimento e tradução

Escrevam o significado completo em inglês e depois em português funcional:

<SlideTable>

| Sigla | Completo em inglês | Tradução em português |
|---|---|---|
| LLM | | |
| NLP | | |
| GPT | | |
| ML | | |
| API | | |
| GPU | | |
| CPU | | |
| AI | | |

</SlideTable>

<!-- RESPOSTAS: Large Language Model / Natural Language Processing / Generative Pre-trained Transformer / Machine Learning / Application Programming Interface / Graphics Processing Unit / Central Processing Unit / Artificial Intelligence -->

<v-click>

**Respostas:** LLM = Large Language Model | NLP = Natural Language Processing | GPT = Generative Pre-trained Transformer | ML = Machine Learning | API = Application Programming Interface | GPU = Graphics Processing Unit | CPU = Central Processing Unit | AI = Artificial Intelligence

</v-click>

> GPU e CPU você já viu antes. Veja se lembra sem consultar.

---
layout: default
card: true
bgPreset: animate
aulaNum: "Aula 04"
---

<!-- objetivo: aluno entende o conceito de backpropagation como mecanismo de aprendizado -->

# Backpropagation: Como a Rede Neural Aprende

**Em inglês:** *Backpropagation* (ou *Backprop*)
**Em português:** Retropropagação (o mercado usa o termo em inglês)

**Analogia:** é como estudar para uma prova com gabarito.

<v-click>

**Passo 1 - Forward Pass (Passagem para frente):**
A rede faz uma previsão com o que sabe. É como responder a prova.

</v-click>
<v-click>

**Passo 2 - Calcular o Erro (Loss):**
Compara a previsão com a resposta certa. É como corrigir a prova com o gabarito.

</v-click>
<v-click>

**Passo 3 - Backward Pass (Passagem para trás):**
A rede ajusta seus pesos internos para errar menos na próxima vez. É como rever o assunto onde errou.

</v-click>

> Isso se repete milhões de vezes. Cada repetição é chamada de **epoch** (época).

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING-ADV 04: ordenar e traduzir os passos do backpropagation  em dupla -->

# ING-ADV 04: O Ciclo de Aprendizado (em dupla)

**Em dupla: 8 minutos** | Nível 3: análise e sequenciação

Os passos do backpropagation estão fora de ordem. Numerem de 1 a 3 na ordem correta e escrevam a tradução:

| Ordem | Passo em inglês | Tradução |
|---|---|---|
| | "Adjust the weights to reduce the error." | |
| | "Compare the prediction with the correct answer." | |
| | "Make a prediction using current knowledge." | |

<!-- RESPOSTAS: 3 / 2 / 1 -->

<v-click>

**Respostas:** 1º “Make a prediction” | 2º “Compare the prediction” | 3º “Adjust the weights”

</v-click>

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- ING-ADV 05: glossário avançado de IA (1/2)  em dupla -->

# ING-ADV 05: Glossário Avançado de IA (1/2) (em dupla)

Para cada termo, escribam a tradução **e** a função em **máximo 5 palavras** em português:

<SlideTable>

| Termo em inglês | Tradução | Função em 5 palavras |
|---|---|---|
| **Input** | | |
| **Output** | | |
| **Layer** | | |
| **Weight** | | |
| **Loss** | | |

</SlideTable>

<!-- RESPOSTAS GUIA: Inputentrada/dado que entra na rede | Outputsaída/resultado gerado pela rede | Layercamada/grupo de neurônios por função | Weightpeso/valor ajustado durante treino | Lossperda/medida do erro do modelo -->

> Exemplo: `Layer  camada  agrupa neurônios por função`

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- ING-ADV 05: glossário avançado de IA (2/2)  em dupla -->

# ING-ADV 05: Glossário Avançado de IA (2/2) (em dupla)

Continue:

<SlideTable>

| Termo em inglês | Tradução | Função em 5 palavras |
|---|---|---|
| **Batch** | | |
| **Epoch** | | |
| **Gradient** | | |
| **Embedding** | | |
| **Training** | | |

</SlideTable>

<!-- RESPOSTAS GUIA: Batchlote/conjunto de amostras por iteração | Epochépoca/passagem completa pelos dados | Gradientgradiente/direção do ajuste dos pesos | Embeddingincorporação/representação numérica de texto | Trainingtreino/processo de aprendizado do modelo -->

> Salve a tabela preenchida em `SENAC-TecIA/Aula-04/anotacoes/glossario_avancado.txt`

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- ING-ADV 06: quiz rápido EN para PT  termos avançados de IA -->

# ING-ADV 06: Quiz Rápido EN para PT (em dupla)

**Em dupla: 5 minutos** | Sem consulta

| # | Inglês | Português |
|---|---|---|
| 1 | Token | |
| 2 | Training | |
| 3 | Loss | |
| 4 | Epoch | |
| 5 | Embedding | |
| 6 | Backpropagation | |
| 7 | Large Language Model | |
| 8 | Natural Language Processing | |

<!-- RESPOSTAS: Token/token | Treinamento | Perda/erro | Época | Incorporação/representação vetorial | Retropropagação | Modelo de Linguagem Grande | Processamento de Linguagem Natural -->

> Corrija com o professor. Para cada erro, escreva o termo correto 3 vezes no caderno.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- objetivo: aluno entende estrutura if/else como decisão binária -->

# if e else: O Programa Decide

Todo programa precisa tomar decisões. Em Python, usamos `if` (se) e `else` (senão).

**Analogia:** semáforo
- **Se** o sinal está verde: avance
- **Senão:** pare

```python
nota = 7

if nota >= 6:
    print("Aprovado")
else:
    print("Reprovado")
```

- A linha com `if` termina com `:` (dois-pontos)
- O bloco de dentro tem **4 espaços** de indentação
- `else` nunca tem condição: é o "em todos os outros casos"

> Regra: Python usa indentação para definir blocos. Esquecer os 4 espaços causa erro.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 05: if/else  aprovado ou reprovado -->

# Exercício 05: Aprovado ou Reprovado?

**Individual: 10 minutos** | Nível 2: execução guiada

> Salve como `SENAC-TecIA/Aula-04/exercicios/ex05_aprovado.py`

Crie um script que:
1. Pede a nota do aluno com `input()` (use `float(input(...))`)
2. Se a nota for maior ou igual a 6: imprime `"Aprovado!"`
3. Senão: imprime `"Reprovado. Tente novamente."`

**Teste com 3 valores:** `8.5`, `5.9`, `6.0`

**Perguntas para o caderno:**
- O que acontece com a nota `6.0` exatamente? Por quê?
- O que você precisaria mudar para aprovar apenas com nota acima de 7?

> Se der erro: verifique os dois-pontos e a indentação primeiro.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- objetivo: aluno entende elif como extensão natural -->

# elif: Mais de Duas Opções

`if` e `else` cobrem dois casos. `elif` (abreviação de *else if*) cobre quantos casos você precisar.

**Analogia:** semáforo com 3 cores  verde, amarelo, vermelho  são 3 casos, não 2.

```python
nota = float(input("Nota: "))

if nota >= 9:
    print("Conceito A")
elif nota >= 7:
    print("Conceito B")
elif nota >= 6:
    print("Conceito C")
else:
    print("Reprovado")
```

- Python testa as condições **de cima para baixo** e para no primeiro `True`
- Só um bloco é executado por vez
- `else` no final captura tudo que não se encaixou

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 06: if/elif/else  classificador de notas completo -->

# Exercício 06: Classificador de Notas

**Individual: 10 minutos** | Nível 3: aplicação independente

> Salve como `SENAC-TecIA/Aula-04/exercicios/ex06_classificador.py`

Crie um script que lê uma nota e imprime o conceito:

| Nota | Conceito |
|---|---|
| 9 a 10 | A - Excelente |
| 7 a 8.9 | B - Bom |
| 6 a 6.9 | C - Regular |
| abaixo de 6 | Reprovado |

**Teste com:** `10`, `8.5`, `6.0`, `5.9`, `0`

**Extensão:** adicione uma mensagem diferente para nota igual a `0`:
`"Nota zero. Verifique a presença."`

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 07 em dupla: classificador de texto conectado ao conceito de token -->

# Exercício 07: Classifique o Texto (em dupla)

**Em dupla: 12 minutos** | Nível 3-4: aplicação interdisciplinar

> Salve como `SENAC-TecIA/Aula-04/exercicios/ex07_classifica_texto.py`

Lembra que tokens são unidades de texto? Vamos simular isso.

Crie um script que:
1. Pede um texto com `input()`
2. Conta o número de **caracteres** com `len(texto)`
3. Classifica com `if/elif/else`:
   - Menos de 20 caracteres: `"Texto muito curto  poucos tokens"`
   - 20 a 100 caracteres: `"Texto médio  tokens moderados"`
   - Mais de 100 caracteres: `"Texto longo  muitos tokens"`
4. Imprime o texto, o número de caracteres e a classificação

**Teste com:** seu nome, uma frase curta e um parágrafo.

> `len()` conta letras, espaços e pontuação  assim como um tokenizador real.

---
layout: brainstorm
card: true
bgPreset: palette
pulse: true
aulaNum: "Aula 04"
---

<!-- dinâmica: adivinhe o número  if/elif/else em ação -->

# Dinâmica: Adivinhe o Número! (em dupla)

**Em dupla: 10 minutos**

> Salve como `SENAC-TecIA/Aula-04/exercicios/ex08_adivinhe.py`

**Aluno A** escreve o script com um número fixo no código (ex: `numero_secreto = 42`).
**Aluno B** executa e tenta adivinhar digitando palpites.

O script usa `if/elif/else` para responder:
- Se o palpite for menor: `"Muito baixo! Tente maior."`
- Se for maior: `"Muito alto! Tente menor."`
- Se acertar: `f"Acertou! O número era {numero_secreto}."`

Depois, troquem os papéis.

> Cada rodada deve ter no máximo 5 tentativas. Quem adivinhou em menos tentativas?

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- objetivo: aluno entende def como forma de criar funções -->

# def: Criando Sua Própria Instrução

Você já usou `print()` e `input()`. Elas são funções prontas do Python.
Com `def` você cria **suas próprias funções**.

**Analogia:** uma função é uma receita com nome. Você escreve uma vez e usa quantas vezes quiser.

```python
def saudacao(nome):
    print(f"Olá, {nome}! Bem-vindo ao curso.")
```

- `def` declara que uma função vai começar
- `saudacao` é o nome que você escolheu
- `nome` é o **parâmetro**: uma informação que a função recebe
- Para usar a função, você a **chama** pelo nome:

```python
saudacao("Ana")
saudacao("Carlos")
```

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 09: primeira função com def -->

# Exercício 09: Sua Primeira Função

**Individual: 8 minutos** | Nível 2: execução guiada

> Salve como `SENAC-TecIA/Aula-04/exercicios/ex09_primeira_funcao.py`

```python
def saudacao(nome):
    print(f"Olá, {nome}! Você está no Técnico em IA.")

saudacao("seu nome aqui")
saudacao("colega 1")
saudacao("colega 2")
```

1. Escreva e execute o script
2. Substitua os 3 nomes pelos nomes reais da sua dupla e de um colega
3. Adicione uma quarta chamada com o nome do professor

**Pergunta no caderno:** qual a diferença entre escrever `print()` 4 vezes com o texto completo e usar a função `saudacao()` 4 vezes?

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- objetivo: aluno entende parâmetros e return -->

# Parâmetros e Retorno

Uma função pode **receber valores** (parâmetros) e **devolver um resultado** (return).

**Analogia:** liquidificador. Entra fruta (parâmetro), sai suco (return).

```python
def calcular_media(a, b, c):
    soma = a + b + c
    media = soma / 3
    return media
```

- `a`, `b`, `c` são os parâmetros: os ingredientes que entram
- `return` devolve o resultado calculado
- Para usar o resultado, **capture o retorno**:

```python
resultado = calcular_media(8, 7, 9)
print(f"Média: {resultado}")
```

> Sem `return`, a função faz algo mas não devolve nada. Use `return` quando precisar do valor calculado.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 10: função com parâmetros e return  calculadora -->

# Exercício 10: Função Calculadora

**Individual: 10 minutos** | Nível 3: aplicação independente

> Salve como `SENAC-TecIA/Aula-04/exercicios/ex10_funcao_calculadora.py`

Crie duas funções:

```python
def calcular_media(a, b, c):
    # calcule a media dos tres valores e use return

def classificar_nota(media):
    # use if/elif/else para retornar o conceito A, B, C ou Reprovado
```

Depois, use as duas funções juntas:

```python
media = calcular_media(8, 6, 9)
conceito = classificar_nota(media)
print(f"Média: {media} | Conceito: {conceito}")
```

> Você acabou de compor duas funções. Isso é programação modular: cada função faz uma coisa só.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 11 em dupla: refatorar código usando funções -->

# Exercício 11: Refatore Seu Código (em dupla)

**Em dupla: 12 minutos** | Nível 4: análise e reestruturação

> Salve como `SENAC-TecIA/Aula-04/exercicios/ex11_refatorado.py`

Abra o `calculadora_turma.py` que você criou hoje.
**Aluno A lê, Aluno B sugere:** identifiquem juntos os cálculos que se repetem.

Agora criem uma versão nova onde cada operação vira uma função:

```python
def calcular_soma(a, b, c):
    # ...

def calcular_media(a, b, c):
    # ...
```

O resultado final deve ser **idêntico** ao anterior  mas organizado em funções.

**Pergunta:** se você precisasse adicionar uma operação nova (ex: maior valor), qual versão seria mais fácil de modificar? Por quê?

---
layout: default
card: true
bgPreset: animate
aulaNum: "Aula 04"
---

<!-- objetivo: aluno visualiza o ecossistema de ferramentas ao redor do Python para IA -->

# O Ecossistema Python para IA

Python é o centro  mas não trabalha sozinho:

| Ferramenta | Tipo | Para que serve em IA |
|---|---|---|
| **Jupyter Notebook** | Ambiente | Escrever e executar Python de forma interativa |
| **SQL** | Linguagem | Buscar e filtrar dados antes de processar |
| **Markdown** | Linguagem | Documentar projetos e notebooks |
| **JSON** | Formato | Trocar dados entre sistemas e APIs de IA |
| **YAML** | Formato | Configurar modelos e pipelines de ML |
| **Bash / Terminal** | Shell | Executar scripts, navegar pastas, instalar pacotes |

> Você não precisa dominar todos agora. Você precisa reconhecer cada um quando aparecer e saber para que serve.

---
layout: default
card: true
bgPreset: animate
aulaNum: "Aula 04"
---

<!-- objetivo: aluno entende o que é Jupyter Notebook e Google Colab -->

# Jupyter Notebook: Python no Navegador

**O que é:** um ambiente onde você escreve Python em **células**  blocos independentes que podem ser executados um a um.

| Tipo de célula | Para que serve |
|---|---|
| **Código** | Escreve e executa Python |
| **Texto (Markdown)** | Escreve explicações, títulos, listas |

**Onde você vai usar:**
- **Google Colab**  funciona no navegador, sem instalar nada: `colab.research.google.com`
- **Kaggle Notebooks**  plataforma de competições de IA com Jupyter integrado
- **Localmente**  com o comando `jupyter notebook` no terminal (futuramente)

**Por que importa em IA:** todos os tutoriais, papers e datasets de ML são distribuídos como notebooks `.ipynb`. Saber ler um notebook é obrigatório na área.

---
layout: default
card: true
bgPreset: palette
aulaNum: "Aula 04"
---

<!-- exercício 12 em dupla: explorar google colab -->

# Exercício 12: Primeiro Notebook no Google Colab (em dupla)

**Em dupla: 12 minutos** | Nível 2: execução guiada

1. Abra `colab.research.google.com` (faça login com Google)
2. Clique em **Novo notebook**
3. Na primeira célula, escreva e execute:

```python
nome = "seu nome"
print(f"Olá do Colab, {nome}!")
```

4. Crie uma segunda célula e execute as funções do `ex10_funcao_calculadora.py`
5. Crie uma terceira célula de **texto** (Markdown) e escreva:

```markdown
## Meu Primeiro Notebook
Aula 04  Técnico em IA  [Seu Nome]  [Data]
```

**Salve o notebook:** `Arquivo  Salvar uma cópia no Drive`  nome: `aula04_primeira_funcao`

> Se o laboratório não tiver internet: execute as células no terminal normalmente.

---
layout: default
card: true
bgPreset: default
aulaNum: "Aula 04"
---

<!-- objetivo: aluno reconhece SQL e Markdown como ferramentas complementares ao Python -->

# SQL e Markdown: Cúmplices do Python

Duas linguagens que aparecem em todo projeto de IA:

**SQL  para buscar dados:**

```sql
SELECT nome, idade FROM alunos WHERE aprovado = 1;
```

> Antes de processar dados com Python, você vai buscá-los de um banco com SQL.
> SQL diz ao banco: "me dê apenas as linhas que me interessam."

**Markdown  para documentar:**

```markdown
# Projeto de Classificação
## Objetivo
Classificar alunos aprovados com base na média final.
```

> Todo `README.md`, todo notebook Jupyter e toda documentação de projeto usa Markdown.
> Você já escreveu Markdown na célula de texto do Colab agora mesmo.

---
layout: center
card: true
bgPreset: palette
pulse: true
pulseDuration: 6
aulaNum: "Aula 04"
---

<!-- encerramento aula 04 -->

# Você Ensinou o Python a Decidir!

O que você aprendeu hoje:

- NLP, Token, LLM e Backpropagation: o vocabulário real da IA
- `if`, `elif` e `else`: o programa escolhe um caminho
- `def`, parâmetros e `return`: criando suas próprias instruções
- Jupyter Notebook, SQL e Markdown: o ecossistema ao redor do Python

**Próxima Aula:** `for` e `while`  repetição automática + listas e coleções de dados

---
layout: end
bgPreset: palette
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
aulaNum: "Aula 04"
---