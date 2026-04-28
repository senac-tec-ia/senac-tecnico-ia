# Skill: Densidade de Slides — Técnico em IA

Use esta skill ao criar ou editar slides para verificar se o conteúdo cabe no layout. Quando um slide ultrapassa os limites, **expanda em múltiplos slides — nunca corte conteúdo**.

---

## Regra de ouro

> Conteúdo nunca desaparece. Ele é redistribuído entre 2 ou mais slides.

Errado: remover um bloco de código para o slide caber.
Certo: criar um slide filho com o segundo bloco de código.

---

## Limites por layout

### `default`

| Elemento | Limite seguro | Limite crítico |
|---|---|---|
| Linhas de texto corrido | 6-8 | > 10 |
| Linhas dentro de bloco de código | 12-15 | > 18 |
| Blocos de código no mesmo slide | 1 | >= 2 |
| Itens de lista (`-` ou numerados) | 5-6 | > 8 |
| Conceitos distintos | 1 | >= 2 |
| Tabela no mesmo slide que código | 0 | >= 1 |
| Subtítulos `##` dentro do slide | 1 | >= 2 |

### `two-cols-text`

| Elemento | Limite seguro |
|---|---|
| Linhas por coluna | 10-12 |
| Blocos de código por coluna | 1 |
| Itens de lista por coluna | 5-6 |

### `center` / `brainstorm` / `cover` / `end`

Raramente estouram. Se estourarem, verificar se o layout correto foi usado antes de dividir.

---

## Regras de corte natural

| Situação | Ação |
|---|---|
| 2 blocos de código em `default` | 1 bloco por slide. Slide filho herda título com ` (cont.)` |
| Tabela + bloco de código | Slide 1: tabela. Slide 2: código |
| Texto corrido > 10 linhas | Corta no parágrafo mais natural. Slide filho com ` (cont.)` |
| Lista > 8 itens | Divide em partes iguais. Slide filho com ` (cont.)` |
| 2 subtítulos `##` com conceitos distintos | Um `##` por slide |
| Bloco de código único > 18 linhas | Divide com comentário `# ... continua` dentro do código |
| `<v-click>` que introduz conceito novo | Conteúdo dentro do `<v-click>` vira slide próprio (sem o wrapper) |

---

## Frontmatter dos slides filhos

Ao criar slides filhos de uma divisão:
- **Copiar** `layout`, `card`, `bgPreset` do slide pai
- Os slides filhos recebem `pulse: false` se o pai tinha `pulse: true` (continuações não precisam de urgência visual)
- O slide pai mantém seu frontmatter e conteúdo inicial

---

## Como localizar um slide pelo número

O arquivo `slides.md` é separado por `---`. O **primeiro bloco** é o frontmatter global e **não conta** como slide.

- Bloco 1 após o frontmatter global = Slide 1
- Bloco N = Slide N

Verificação cruzada: use o comentário `<!-- SLIDE N -->` dentro do corpo para confirmar. Se o número divergir da contagem de separadores, o comentário prevalece.

**Ghost slides:** um `---` imediatamente seguido de outro `---` (com linha vazia) cria um slide vazio — ignorar na contagem.

---

## Sinais de slide sobrecarregado

Ao revisar slides gerados, sinalize overflow quando:
- O preview quebra visualmente (texto cortado, scroll)
- Mais de 2 blocos de código visíveis sem clique
- Mais de 8 bullets sem agrupamento
- Tabela grande + texto explicativo no mesmo slide
- Dois subtítulos `##` com conteúdo distinto
