# Contexto de IA — Como Gerar Slides para Este Curso

Este arquivo instrui o GitHub Copilot (e qualquer outro assistente de IA) sobre como gerar slides `.md` para o Slidev neste workspace. Leia este arquivo antes de gerar qualquer conteúdo de slide.

---

## Identidade do Curso

- **Curso**: Técnico em Inteligência Artificial
- **Instituição**: SENAC
- **Público-alvo**: Jovens e adultos sem necessariamente background técnico prévio em programação
- **Tom**: Didático, direto, com linguagem acessível mas rigoroso nos conceitos técnicos
- **Professor**: Leonardo Zanini

---

## Regras de Geração de Slides

### Frontmatter obrigatório (no início de todo `slides.md`)

```yaml
---
theme: ../slidev-theme-neural
title: "Aula XX — Título da Disciplina"
titleTemplate: "%s | Técnico em IA"
colorSchema: dark
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
footerLogo: /assets/senac-logo.png
transition: slide-left
mdc: true
---
```

### Layouts disponíveis (do tema `slidev-theme-neural`)

| Layout | Quando usar |
|--------|-------------|
| `cover` | Slide de abertura da aula (título + subtítulo) |
| `default` | Conteúdo regular com texto, listas e código |
| `center` | Conteúdo centralizado — boa para citações, perguntas, conceitos-chave |
| `two-cols` | Comparações, lado a lado (Ex: "antes vs depois", "IA fraca vs forte") |
| `two-cols-img-and-text` | Imagem à esquerda + explicação à direita |
| `two-cols-img` | Duas imagens comparativas |
| `three-cols-img` | Três imagens em grade |
| `brainstorm` | Perguntas abertas para reflexão da turma, atividades |
| `social` | Conteúdo sobre plataformas (instagram, tiktok, youtube, python, chatgpt) |
| `end` | Último slide da aula |

### Componentes disponíveis

| Componente | Uso |
|-----------|-----|
| `<MLToast title="...">texto</MLToast>` | Destaque/dica com animação — usar com `v-click` |
| `<ZoomImage src="..." />` | Imagem com zoom animado, boa para diagramas |
| `<PixelZoom src="..." />` | Zoom pixel-a-pixel, boa para matrizes e imagens de CV |
| `<SocialLogosClick />` | Logos de plataformas reveladas com clique |
| `<BrazilFlagIcon />` | Ícone da bandeira brasileira inline |

### Prop `bgPreset` (fundo animated neural network)

Todos os layouts aceitam `bgPreset`:
- `"default"` — fundo estático sutil (padrão)
- `"animate"` — rede neural animada pulsando
- `"palette"` — versão mais colorida/expressiva

Exemplo: `---\nlayout: brainstorm\nbgPreset: animate\n---`

---

## Padrões de Conteúdo

### Estrutura padrão de uma aula (10–15 slides)

1. **Cover** — título + subtítulo com tema da aula
2. **Objetivos da aula** — lista com 3 a 5 objetivos de aprendizagem
3. **Conceito central** — definição clara, sem jargão desnecessário
4. **Contextualização** — onde alunos já viram isso no cotidiano
5. **Aprofundamento** — 3 a 5 slides técnicos com exemplos
6. **Atividade / Reflexão** — slide `brainstorm` para interação
7. **Código / Demo** (quando aplicável) — slide `default` com bloco de código
8. **Recapitulação** — 3 pontos-chave da aula
9. **Próximos passos** — o que vem na próxima aula
10. **End** — fechamento

### Regras de texto nos slides

- Máximo de **6 itens** por lista
- Máximo de **3 linhas** por item de lista
- Títulos: **direto ao ponto**, sem artigos desnecessários ("Redes Neurais" > "O que são as Redes Neurais")
- Evitar parágrafos longos — slides são apoio visual, não teleprompter
- Código: sempre usar blocos com linguagem especificada (` ```python `, ` ```bash `)

### Vocabulário técnico preferido (PT-BR)

| Evitar | Usar |
|--------|------|
| "machine learning" sem contexto | "aprendizado de máquina (ML)" na primeira ocorrência |
| "dataset" | "conjunto de dados" ou "dataset" (ambos ok) |
| "deploy" | "colocar em produção" |
| "accuracy" | "acurácia" |
| "feature" | "variável" ou "característica" |
| "label" | "rótulo" |
| "training" | "treinamento" |

---

## Como Pedir Slides ao Copilot

Exemplos de prompts eficazes:

```
Crie os slides para a aula-02 seguindo a estrutura padrão de aula descrita em 
base-conteudo/ai-context.md. O conteúdo deve seguir o roteiro em 
base-conteudo/disciplinas/02-ml-conceitos/roteiro.md.
```

```
Adicione 2 slides sobre regressão linear para aula-05/slides.md,
usando layout two-cols para comparar modelos lineares e não-lineares.
Siga as regras de conteúdo de base-conteudo/ai-context.md.
```

---

## Assets e Mídias

- Imagens específicas de cada aula ficam em `aula-XX/assets/`
- Referenciar como `/assets/nome-da-imagem.png` dentro de `slides.md`
- Logo SENAC já disponível no tema: `/assets/senac-logo.png`
- Ícones disponíveis no tema: `chatgpt`, `instagram`, `python`, `spotify`, `tiktok`, `youtube`
