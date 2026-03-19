utura da Aula  Mapeamento Completo
**Arquivo:** `slides.md` | **Última revisão:** 2026-03-05
**Total de slides existentes:** ~100 | Deck cobre Aulas 01, 02, 03 e 04 (atualizado 2026-03-05).
**Nota de numbering:** todos os ranges de SECAO 3 em diante foram deslocados +1 após reordenação da SECAO 2 e adição de 2 slides à SECAO 3.

---

## Regra: Cover sempre no Slide 01

O frontmatter global (`theme`, `layout: cover`, `aulaNum`, etc.) e o **conteúdo do slide capa** devem estar no mesmo bloco — slide 01. Não usar `---` duplo entre o frontmatter e o primeiro conteúdo, pois isso cria slide 1 vazio e empurra o conteúdo para o slide 2.

**Correto:**
```
---
theme: ./
layout: cover
---

# Título da Aula
## Subtítulo
```

**Errado:**
```
---
theme: ./
layout: cover
---
---
layout: center
...
```

---

## Legenda de Tags

| Tag | Significado |
|---|---|
| `[TEORIA]` | Slide expositivo de conteúdo teórico |
| `[DEBATE]` | Pergunta aberta para debate coletivo ou brainstorming |
| `[EXERCICIO]` | Atividade individual ou em dupla com entrega ou resposta |
| `[DINAMICA]` | Atividade interativa, jogo, roleplay ou dinâmica de grupo |
| `[ATIV AVALIATIVA]` | Atividade com critério de avaliação formal (Kahoot, entrega, etc.) |
| `[TAREFA DE CASA]` | Atividade para fazer fora da aula |

---

## SECAO 1  Aula 01: Recapitulando a Aula Anterior
**Disciplina (UC):** Fundamentos de Computação
**Slides: 1 a 5** | Tópico principal: Finalizar exercícios de nomenclatura e terminal da aula anterior

> Nota: Exercício 04 (1/2) foi realizado no deck anterior. Este deck começa pela conclusão.

| Slide | Título | Tag | Resumo |
|---|---|---|---|
| 1 | Capa | `[TEORIA]` | Cover do deck |
| 2 | RECAPITULANDO (divisor) | `[TEORIA]` | Divisor: Finalizando os Exercícios da Aula Anterior |
| 3 | Exercício 04: Crie a Estrutura do Projeto (2/2) | `[EXERCICIO]` | Concluir estrutura SENAC-TecIA; criar README.txt; nível 2 |
| 4 | Exercício 05: Por Que snake_case Importa? (Parte 1) | `[EXERCICIO]` | Criar dois arquivos com e sem espaços; testar no terminal; nível 4 |
| 5 | Exercício 05: Por Que snake_case Importa? (Parte 2) | `[EXERCICIO]` | Responder tabela de raciocínio; salvar em README.txt; nível 4 |

---

## SECAO 2  Aula 01: Inglês Técnico (ING 01 a ING 11)
**Disciplina (UC):** Inglês Técnico
**Slides: 6 a 27** | Tópico principal: Vocabulário técnico em inglês do básico à produção escrita

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 6-7 | Vocabulário Técnico Essencial (1/2 e 2/2) | `[TEORIA]` | 12 termos: hardware, software, file, folder, save, open, close, keyboard, screen, processor, memory, desktop |
| 8-9 | ING 01: Reconheça os Termos (1/2 e 2/2) | `[EXERCICIO]` | Traduzir 10 termos sem consulta; nível 1 |
| 10-11 | ING 02: Una as Palavras (1/2 e 2/2) | `[EXERCICIO]` | Ligar 10 termos EN ao equivalente PT; nível 1 |
| 12 | ING 05: Escreva em Inglês (Produção Controlada) | `[EXERCICIO]` | Completar 5 frases técnicas em inglês com o termo correto; nível 2 |
| 13 | ING 03: Aponte e Diga em Inglês | `[DINAMICA]` | Oral com objetos reais; aluno aponta e pergunta ao colega |
| 14 | Verdade ou Mentira? | `[DINAMICA]` | Escrever V/M para 5 afirmações técnicas sobre inglês; revelação com v-click; 5 min |
| 15 | Duelo de Definições | `[DINAMICA]` | Em dupla: explicar conceito sem falar a palavra em inglês; ponto por acerto; 8 min |
| 16 | Caça ao Termo! | `[DINAMICA]` | Competição individual: encontrar 5 termos inglês nos programas do laboratório; 6 min |
| 17 | Mímica Técnica | `[DINAMICA]` | Imitar uso de componente sem falar; turma adivinha o nome em inglês; 8 min |
| 18-19 | ING 07: Complete o Comando (1-5 e 6-10) | `[EXERCICIO]` | 10 lacunas com banco de palavras; escolha técnica, não tradução; nível 3 |
| 20-21 | ING 08: Quiz de Velocidade PT para EN (1-5 e 6-10) | `[EXERCICIO]` | Traduzir 10 termos PT para EN sem consulta; nível 2 |
| 22-23 | ING 09: Nomeie Seu Projeto em Inglês (1/2 e 2/2) | `[EXERCICIO]` | Equivalentes em inglês para pastas do SENAC-TecIA; nível 3 |
| 24-25 | ING 10: Leia o Erro! (1/2 e 2/2) | `[EXERCICIO]` | Traduzir 10 mensagens de erro do terminal e Python; comparar em dupla; nível 3 |
| 26 | ING 11: Descreva Seu Setup em Inglês | `[EXERCICIO]` | Escrever 5 frases em inglês sobre o computador; sem tradutor automático; nível 3-4 |
| 27 | Tarefa de Casa: Aula 01 | `[TAREFA DE CASA]` | Criar glossario_ingles_aula01.txt com 15 entradas; bônus 3 termos extras |
---

## SECAO 3  Aula 02: Fundamentos da Computação na Prática
**Disciplina (UC):** Fundamentos de Computação
**Slides: 28 a 45** | Tópico principal: Organização, resolução de problemas e vocabulário ampliado

| Slide | Título | Tag | Resumo |
|---|---|---|---|
| 28 | DIVISOR: AULA 02 | `[TEORIA]` | Divisor: Fundamentos da Computação na Prática |
| 29-30 | Revisão Oral: Aula 01 (1/2 e 2/2) | `[DEBATE]` | 8 perguntas sem consulta: hardware, software, RAM, SSD, CPU, GPU, SO, inglês |
| 31 | Organização no Windows Explorer | `[TEORIA]` | Estrutura do projeto e atalhos de navegação no Windows |
| 32-33 | Exercício: Organizando Seus Arquivos (1/2 e 2/2) | `[EXERCICIO]` | Criar Aula-02 com subpastas; mover arquivos; criar README; nível 2 |
| 34-35 | Nomenclatura Profissional de Arquivos (1/2 e 2/2) | `[TEORIA]` | snake_case, kebab-case, PascalCase, YYYY-MM-DD |
| 36-37 | Exercício Calc: Planilha de Projetos (1/2 e 2/2) | `[EXERCICIO]` | controle_projetos_aula02.xlsx; lista suspensa; formatação condicional; nível 3 |
| 38-39 | Como Pesquisar Tecnicamente na Internet (1/2 e 2/2) | `[TEORIA]` | Operadores de busca; pesquisar em inglês para soluções técnicas |
| 40 | Como Resolver Problemas Técnicos | `[TEORIA]` | Método dos 4 passos: Identificar, Pesquisar, Testar, Documentar |
| 41 | Exercício: Resolva o Problema! | `[DINAMICA]` | Computador lento: diagnóstico em dupla + Gerenciador de Tarefas |
| 42-43 | Vocabulário Técnico: Aula 02 (1/2 e 2/2) | `[TEORIA]` | Desktop, install, update, browser, download, upload, network, password, settings, error |
| 44 | Debate: Nomenclatura e Resolução de Problemas | `[DEBATE]` | 3 perguntas técnicas dirigidas sobre snake_case no terminal, método dos 4 passos e pesquisa EN/PT |
| 45 | Tarefa de Casa: Aula 02 | `[TAREFA DE CASA]` | Atualizar planilha + criar metodo4passos.txt com problema real usando os 4 passos |

---

## SECAO 4  Aula 03: Terminal e Introdução ao Python
**Disciplina (UC):** Fundamentos de Computação + Python para IA
**Slides: 46 a 65** | Tópico principal: Terminal de comandos e Python do zero

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 46 | DIVISOR: AULA 03 | `[TEORIA]` | Divisor: Terminal e Python do Zero |
| 47 | O Terminal: O Painel de Controle Real | `[TEORIA]` | Analogia com Explorador; como abrir; por que é essencial em IA |
| 48 | Comandos Essenciais de Navegação | `[TEORIA]` | cd, dir/ls, mkdir, cls; tabela compacta |
| 49-50 | Exercício Terminal: Navegando no Projeto (1/2 e 2/2) | `[EXERCICIO]` | Abrir terminal; navegar; criar Aula-03; nível 2 |
| 50 | O Que é Programação? | `[TEORIA]` | Analogia receita de bolo; instrução + sequência = programa |
| 51 | Por Que Python? | `[TEORIA]` | 3 razões: legibilidade, onipresença em IA, open source |
| 52 | Variáveis: Caixas com Etiqueta | `[TEORIA]` | Analogia caixa com etiqueta; nome = valor; 1 exemplo de código |
| 53 | Exercício 01: Suas Primeiras Variáveis | `[EXERCICIO]` | Criar variaveis_aula03.py; declarar nome, idade, curso; print(); nível 1 |
| 54 | Tipos de Dados: o Que a Caixa Guarda? | `[TEORIA]` | str, int, float, bool com exemplo de cada; tabela compacta |
| 55 | Exercício 02: Descobrindo os Tipos | `[EXERCICIO]` | Usar type() em cada variável; escrever saída no caderno; nível 2 |
| 56 | print() e input(): Conversa com a Máquina | `[TEORIA]` | print() exibe; input() recebe; f-string para formatar |
| 57-58 | Exercício 03: Olá, Turma! (em dupla) (1/2 e 2/2) | `[EXERCICIO]` | Dupla cria script com input + f-string; troca com dupla vizinha; nível 2-3 |
| 59 | Operadores Básicos: Calcule com Python | `[TEORIA]` | Tabela com 6 operadores e 1 exemplo cada |
| 60 | Exercício 04: Calculadora de Turma | `[EXERCICIO]` | Script calcula média de idades; input() + int() + operadores; nível 3 |
| 61 | Dinâmica: Caça ao Bug! (em dupla) | `[DINAMICA]` | Scripts com 3 erros intencionais; duplas identificam e corrigem; 10 min |
| 62 | Tarefa de Casa: Aula 03 | `[TAREFA DE CASA]` | Script tarefa_aula03.py: input de nome e cidade + soma de dois números |
| 63 | Encerramento: Você Escreveu Seu Primeiro Programa! | `[TEORIA]` | Recapitulação da Aula 03; próxima aula: if/elif/else |
| 64 | Slide de Encerramento do Deck | `[TEORIA]` | layout: end; Leonardo Zanini; GitHub LeoZanini |

---

## SECAO 5  Aula 04: Vocabulário Avançado de IA em Inglês e Português
**Disciplina (UC):** Fundamentos e Conceitos de IA
**Slides: 66 a 80** | Tópico principal: NLP, Token, LLM, Backpropagation — inglês técnico nível avançado

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 66 | DIVISOR: AULA 04 | `[TEORIA]` | Divisor: Vocabulário Avançado + Python na Prática |
| 67 | Abertura: O Que Você Já Sabe Sobre IA? | `[DEBATE]` | 3 perguntas concretas: o que é LLM, o que é token, por que ChatGPT entende você; ativar intuição |
| 68 | NLP: Natural Language Processing | `[TEORIA]` | Definição EN + PT; o que é; onde aparece; exemplos reais (ChatGPT, Google Tradutor, Siri) |
| 69 | ING-ADV 01: Leia e Explique o NLP | `[EXERCICIO]` | Individual: ler 3 frases em inglês com o termo NLP; traduzir e identificar o contexto; nível 2 |
| 70 | Token: A Unidade Mínima de Texto | `[TEORIA]` | Definição EN + PT; como texto é quebrado em tokens; exemplo visual 4 tokens; nível 2 |
| 71 | ING-ADV 02: Tokenize Você Mesmo | `[EXERCICIO]` | Em dupla: contar tokens de 3 frases; comparar contagem manual vs. regra; nível 3 |
| 72 | LLM: Large Language Model | `[TEORIA]` | Definição EN + PT; expansão de cada palavra; exemplos: GPT-4, Gemini, LLaMA, Claude |
| 73 | ING-ADV 03: Expanda o Acrônimo | `[EXERCICIO]` | Individual: expandir LLM, NLP, GPT, ML, API, GPU, CPU, AI em EN + PT; nível 2 |
| 74 | Backpropagation: Como a Rede Neural Aprende | `[TEORIA]` | Definição EN + PT; analogia prova+gabarito; 3 passos com v-click |
| 75 | ING-ADV 04: O Ciclo de Aprendizado | `[EXERCICIO]` | Individual: ordenar 3 passos em inglês e traduzir; nível 3 |
| 76-77 | ING-ADV 05: Glossário Avançado (1/2 e 2/2) | `[EXERCICIO]` | 10 termos (input, output, layer, weight, loss, batch, epoch, gradient, embedding, training); nível 3-4 |
| 78 | ING-ADV 06: Quiz Rápido EN para PT | `[EXERCICIO]` | 8 termos avançados sem consulta; correção coletiva; nível 2 |
| 79 | Debate: Jargão Técnico de IA — Limite ou Ferramenta? | `[DEBATE]` | 3 perguntas sobre jargão, entrevistas e quando usar PT vs. EN |
| 80 | Tarefa de Casa: Glossário Avançado de IA | `[TAREFA DE CASA]` | Criar glossario_avancado_ia.txt com 12 termos EN + PT + função em 1 frase |

---

## SECAO 6  Aula 04: Python Condicionais (if, elif, else)
**Disciplina (UC):** Python para IA
**Slides: 81 a 88** | Tópico principal: Decisões no código — o programa escolhe um caminho

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 81 | Divisor interno: AGORA: Python na Prática | `[TEORIA]` | Divisão interna: transição do bloco de vocabulário para Python |
| 82 | if e else: O Programa Decide | `[TEORIA]` | Analogia semáforo verde/para; estrutura simples com código em 4 linhas |
| 83 | Exercício 05: Aprovado ou Reprovado? | `[EXERCICIO]` | Individual: if/else com input() float; testar 3 valores; nível 2 |
| 84 | elif: Mais de Duas Opções | `[TEORIA]` | Extensão natural; analogia semáforo 3 cores; Python testa de cima para baixo |
| 85 | Exercício 06: Classificador de Notas | `[EXERCICIO]` | Individual: if/elif/else classifica nota A/B/C/Reprovado; nível 3 |
| 86 | Exercício 07: Classifique o Texto (em dupla) | `[EXERCICIO]` | Em dupla: len() + if/elif/else classifica texto por comprimento; conexão com tokens; nível 3-4 |
| 87 | Dinâmica: Adivinhe o Número! | `[DINAMICA]` | Em dupla: número fixo no código; palpites com if/elif/else; máx 5 tentativas |
| 88 | Debate: if/else no Mundo da IA | `[DEBATE]` | 3 perguntas: regra manual vs. modelo aprendido; quando usar if e quando usar ML |

---

## SECAO 7  Aula 04: Funções em Python (def, parâmetros, retorno)
**Disciplina (UC):** Python para IA
**Slides: 89 a 94** | Tópico principal: Organizar código em blocos reutilizáveis

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 89 | def: Criando Sua Própria Instrução | `[TEORIA]` | Analogia: função é uma receita com nome; def, dois-pontos, indentação; 4 linhas de código |
| 90 | Exercício 09: Sua Primeira Função | `[EXERCICIO]` | Individual: def saudacao(nome) que imprime "Olá, [nome]!"; chamar a função 3 vezes com nomes diferentes; nível 2 |
| 91 | Parâmetros e Retorno | `[TEORIA]` | Parâmetro = entrada da função; return = saída; analogia liquidificador: entra fruta, sai suco; 5 linhas de código |
| 92 | Exercício 10: Função Calculadora | `[EXERCICIO]` | Individual: def calcular_media(a, b, c) retorna média; usar return; imprimir resultado com f-string; nível 3 |
| 93 | Exercício 11: Refatore Seu Código (em dupla) | `[EXERCICIO]` | Em dupla: pegar o script tarefa_aula03.py e transformar os cálculos em funções def; nível 4 |
| 94 | Debate: Funções e Módulos — a Base de Todo Projeto de IA | `[DEBATE]` | 3 perguntas: por que o Pandas tem funções como .head() e .describe()? O que é um módulo? Quando parar de copiar código e criar uma função? |

---

## SECAO 8  Aula 04: Ecossistema Python para IA
**Disciplina (UC):** Python para IA
**Slides: 96 a 101** | Tópico principal: Ferramentas e linguagens complementares ao Python no mundo de IA

| Slide(s) | Título | Tag | Resumo |
|---|---|---|---|
| 96 | O Ecossistema Python para IA | `[TEORIA]` | Tabela: Python no centro; SQL, Markdown, Bash, JSON, YAML, Jupyter; cada um com 1 linha de função |
| 97 | Jupyter Notebook: Python no Navegador | `[TEORIA]` | Célula de código vs. célula de texto; Google Colab, Kaggle; por que notebooks são obrigatórios em IA |
| 98 | Exercício 12: Primeiro Notebook no Google Colab | `[EXERCICIO]` | Em dupla: criar notebook no Colab; executar 3 células; criar célula de texto Markdown; nível 2 |
| 99 | SQL e Markdown: Cúmplices do Python | `[TEORIA]` | SQL: consultar dados antes do Python; Markdown: documentar notebooks e projetos |
| 100 | Tarefa de Casa: Aula 04 | `[TAREFA DE CASA]` | tarefa_aula04.py com def classificar_nota() + README.md com Markdown; ambos em Aula-04/exercicios/ |
| 101 | Encerramento: Aula 04 — Você Ensinou o Python a Decidir | `[TEORIA]` | Recapitulação da Aula 04; próxima aula: for e while + listas |

---

## Resumo Quantitativo por Tag (atualizado 2026-03-05)

| Tag | Aulas 01-03 | Aula 04 | Total estimado |
|---|---|---|---|
| `[TEORIA]` | 17 | 10 | 27 |
| `[EXERCICIO]` | 27 | 15 | 42 |
| `[DEBATE]` | 4 | 5 | 9 |
| `[DINAMICA]` | 6 | 2 | 8 |
| `[TAREFA DE CASA]` | 3 | 2 | 5 |
| **Total** | **57** | **34** | **~101** |

> **Nota:** Aulas 01-03 ganharam 3 unidades após reordenação (5 dinâmicas em Aula 01 + debate + tarefa em Aula 02) e perderam 2 debates que foram convertidos em dinâmicas interativas. Proporções recalculadas em 2026-03-05.

---

## Observações e Pendências

> **Atualizado em 2026-03-05**

1. **Estrutura verificada e corrigida em 2026-03-05:** order T→E→D→TC validada em todas as aulas; UC labels adicionados; slide ranges recalculados.
2. **Aula 01 reordenada:** ING 05 (nível 2) movido para antes das dinâmicas; 5 dinâmicas consolidadas no final da aula após todos os exercícios progressivos nível 1-4.
3. **Aula 02 completada:** debate técnico dirigido e tarefa de casa adicionados ao final (estavam ausentes).
4. **Conexão interdisciplinar ativa:** SECAO 5 (vocabulário avançado) conecta com Fundamentos e Conceitos de IA (LLM, NLP, backpropagation).
5. **Exercício 07 (SECAO 6):** une vocabulário de tokens com condicionais Python — integração interdisciplinar.
6. **Exercício 11 (SECAO 7):** usa `tarefa_aula03.py` como ponto de partida — exige entrega anterior.
7. **Google Colab (Exercício 12):** requer internet no laboratório. Se indisponível, substituir por Thonny local.

---

## Plano de Correção Executado — 2026-03-05

| # | Arquivo | Tipo | Problema Detectado | Ação Executada | Resultado |
|---|---|---|---|---|---|
| C1 | `slides.md` | Reordenação | ING 05 [EXERCICIO nível 2] aparecia depois de 3 dinâmicas, interrompendo progressão de exercícios | ING 05 movido para logo após ING 02 (antes de ING 03) | ✅ Exercícios agora progridem nível 1→4 antes das dinâmicas |
| C2 | `slides.md` | Inserção | Aula 02 não tinha [DEBATE] nem [TAREFA DE CASA] — terminava em vocabulário [TEORIA]×2 | Adicionados 2 slides: "Debate: Nomenclatura e Resolução de Problemas" e "Tarefa de Casa: Aula 02" | ✅ Aula 02 agora tem todos os blocos obrigatórios |
| C3 | `slides.md` | Correção | Cover mostrava `## Aulas 04` e subtítulo pertencia à Aula 03 | Corrigido para `## Aulas 01 a 04` + subtítulo atualizado refletindo o escopo real do deck | ✅ Cover sincronizado com o conteúdo real |
| E1 | `estrutura-aula.md` | Sincronização | 4 slides reescritos em sessão anterior (Verdade ou Mentira, Duelo, Caça ao Termo, Mímica) ainda listados com nomes e tags antigos | Tabela SECAO 2 atualizada com nomes e tags `[DINAMICA]` corretos | ✅ Estrutura sincronizada com slides.md |
| E2 | `estrutura-aula.md` | Metadado | Nenhuma seção tinha `**Disciplina (UC):**` — sem rastreabilidade de UC por seção | Campo UC adicionado a todas as 8 seções com a UC correta | ✅ Rastreabilidade de UC implementada |
| E3 | `estrutura-aula.md` | Correção | Ranges de slide errados em todas as seções após SECAO 2 (shift de +1 não propagado) + overlap SECAO 6/7 | Ranges recalculados para todas as seções; SECAO 6 corrigida de "80-88" para "81-88" | ✅ Ranges corrigidos e consistentes |
| E4 | `estrutura-aula.md` | Limpeza | Seção "Regra: Cover" duplicada nos metadados | Segunda ocorrência removida | ✅ Sem duplicata |
| V1 | Diagnóstico | Verificação de ordem | `[DINAMICA]` aparecia no meio de exercícios progressivos na Aula 01 — violação T→E→D→TC | Documentado e corrigido via C1 | ✅ Resolvido |
| V2 | Diagnóstico | Verificação de UC | CAs seções não tinham UC identificada | Documentado e corrigido via E2 | ✅ Resolvido |
| V3 | Diagnóstico | Verificação de coerência | Aula 02 sem [DEBATE] e [TAREFA DE CASA] — bloco incompleto | Documentado e corrigido via C2 | ✅ Resolvido |
| V4 | Diagnóstico | Verificação de sync | estrutura-aula.md desatualizado em relação a slides.md (4 slides reescritos) | Documentado e corrigido via E1 | ✅ Resolvido |

