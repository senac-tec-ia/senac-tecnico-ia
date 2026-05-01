---
name: estilo-pedagogico
description: Estilo de escrita para alunos do Técnico em IA (~14 anos): linguagem simples, exemplos em contexto IA/dados, sem en-dash, termos em inglês explicados na primeira ocorrência.
---
---
name: estilo-pedagogico
---
# skillname:Estilo Pedagógico — Técnico em IA (Senac)

Aplicar este estilo sempre que escrever conteúdo visível para os alunos: slides, enunciados de exercícios, tarefas e gabaritos.

---

## Público

Alunos com 14–17 anos, sem formação técnica prévia em TI ou programação. Muitos têm o smartphone como principal relação com tecnologia.

---

## Regras de escrita (invioláveis)

### Proibições absolutas

- **Proibido `—` (em-dash)** em qualquer título, bullet ou corpo de texto. Substitua por:
  - `:` em enumerações e títulos
  - `-` em listas e comparações
  - vírgula em prosa natural
- **Sem emojis** no corpo de slides e enunciados
- **Sem jargão sem âncora**: nunca use um termo técnico em inglês sem explicá-lo na primeira ocorrência da aula
- **Proibida linguagem voltada ao professor** em slides visíveis aos alunos. Exemplos proibidos:
  - "Professor projeta...", "Professor apresenta...", "Professor circula..."
  - "Orientação para o docente:", "Nota pedagógica:", "Dinâmica sugerida:"
  - Qualquer frase que descreva o que o professor fará em vez do que o aluno verá
  - Se precisar de instrução ao professor, use `<!-- comentário HTML -->` — invisível no Slidev

### Termos em inglês

Todo termo técnico em inglês que aparecer pela primeira vez em uma aula deve ter a explicação entre parênteses inline:

```
dataset (conjunto de dados de treinamento)
token (unidade mínima de texto que o modelo processa)
loop (repetição: o código executa várias vezes)
```

Em aulas posteriores onde o termo já foi consolidado, use-o livremente sem repetir a explicação.

### Progressão: concreto antes do abstrato

1. **Analogia do cotidiano adolescente** — playlist, chamada de vídeo, jogo, celular
2. **Mecanismo** — como funciona passo a passo (sem formalismo)
3. **Aplicação em IA/dados** — o mesmo conceito no contexto profissional
4. **Código ou exercício** — prática imediata

Nunca abrir um conceito novo diretamente com tokens, modelos ou vocabulário técnico.

### Tom e voz

- Diretivo e contextualizado: "Você vai escrever uma função que..." em vez de "Funções são..."
- Sem condicional passivo: "é possível fazer X" → "faça X"
- Frases curtas, máximo 25 palavras por bullet
- Cite autores, empresas ou ferramentas reais como âncoras: "O GPT-4 da OpenAI usa..."

---

## Contexto de IA em exemplos

Todo exemplo prático deve simular um contexto real de mercado de IA:

| Evitar | Usar |
|---|---|
| `soma = a + b` | `nota_modelo = precisao + recall` |
| `lista = [1, 2, 3]` | `tokens = ["Olá", "mundo", "!"]` |
| `for i in range(10)` | `for epoch in range(10):` |
| calcular área de triângulo | calcular F1-score de classificador |

---

## Língua

- Todo texto visível nos slides é **pt-BR sem exceção**
- Nomes de arquivo, funções, variáveis: inglês em `snake_case`
- Imports, comandos de terminal: inglês (não traduzir `print`, `def`, `import`)
