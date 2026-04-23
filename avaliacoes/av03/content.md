# Av.03 — TokenLab: Calculadora de Custo de IA

**Tipo:** AS — Atividade em Sala · **Em dupla** · **Entrega: link do repositório GitHub**

**UCs:** UC05 Python · UC03 Fundamentos Matemáticos · UC04 Fundamentos de IA

**Data:** 23/04/2026 · Entrega até o final da aula

---

Toda mensagem que você envia para uma IA tem um custo. Empresas que usam IA em larga escala precisam calcular exatamente quanto vão gastar. Neste projeto, você vai construir em Python uma **calculadora de custo de tokens** para 3 modelos de IA diferentes.

---

## Como funciona

O programa lê um texto digitado pelo usuário, estima quantos tokens esse texto tem, e calcula o custo para rodar nos modelos GPT-4, GPT-3.5 e Gemini Flash.

**Regra de estimativa de tokens:**

```
tokens = len(texto) // 4   (mínimo: 1 token)
```

**Modelos e preços:**

| Modelo | Preço por 1.000 tokens | Context window |
|---|---|---|
| GPT-4 | R$ 0,30 | 8.000 tokens |
| GPT-3.5 | R$ 0,03 | 4.000 tokens |
| Gemini Flash | R$ 0,01 | 32.000 tokens |

> Os preços exatos da sua dupla estão no **cartão impresso** entregue pelo professor.

---

## Estrutura do programa — 4 fases

### Fase 1 — Ler e contar tokens

- Ler o texto digitado com `input()`
- Calcular `tokens = len(texto) // 4` (mínimo 1)
- Classificar o texto: `curto` (até 20 tokens) · `médio` (até 100) · `longo` (acima de 100)

### Fase 2 — Custo para 1 chamada

Calcular o custo para cada um dos 3 modelos e imprimir os resultados:

```python
custo_gpt4    = tokens * 0.30 / 1000
custo_gpt35   = tokens * 0.03 / 1000
custo_gemini  = tokens * 0.01 / 1000
```

### Fase 3 — Custo para 100 e 1.000 chamadas

Para cada modelo, calcule o custo acumulado para 100 e 1.000 chamadas. Imprima em blocos separados.

### Fase 4 — Recomendação e Context Window

- Identificar qual dos 3 modelos é o mais barato para o texto dado
- Para cada modelo, verificar se o número de tokens **cabe** no context window

---

## Saída esperada (exemplo)

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

--------------------------------------------
 CUSTO PARA 100 CHAMADAS
--------------------------------------------
  GPT-4        : R$ 0.21
  GPT-3.5      : R$ 0.021
  Gemini Flash : R$ 0.007

--------------------------------------------
 CONTEXT WINDOW
--------------------------------------------
  GPT-4        : ✅ cabe    (7 / 8000 tokens)
  GPT-3.5      : ✅ cabe    (7 / 4000 tokens)
  Gemini Flash : ✅ cabe    (7 / 32000 tokens)

--------------------------------------------
 RECOMENDAÇÃO
--------------------------------------------
  Modelo mais barato: Gemini Flash
============================================
```

> A formatação exata pode variar — o valor calculado precisa estar **correto**.

---

## Fase Bônus — Funções (se sobrar tempo)

Transforme os cálculos em uma função e entregue como um arquivo separado:

```python
def calcular_custo(tokens, preco_por_mil):
    return tokens * preco_por_mil / 1000
```

**Arquivo:** `av03_tokenlab_bonus.py` na mesma pasta `Av03/`.

---

## Como entregar

1. Crie o repositório `SENAC-TecIA` no GitHub (se ainda não tiver)
2. Salve o arquivo como `av03_tokenlab.py` dentro da pasta `Av03/`
3. Faça o push para o GitHub:

```bash
git add av03_tokenlab.py
git commit -m "Av03 TokenLab — [Nomes da dupla]"
git push origin main
```

4. Envie o **link do repositório** para o professor por mensagem até o final da aula

---

## Checklist de entrega

- [ ] Arquivo `av03_tokenlab.py` na pasta `SENAC-TecIA/Av03/`
- [ ] Nomes da dupla em comentário no topo do arquivo (`# Dupla: Nome1 e Nome2`)
- [ ] O programa roda sem erros com qualquer texto digitado
- [ ] `git push` feito com sucesso
- [ ] Link do repositório enviado ao professor

---

## Dicas rápidas

| O que preciso | Como fazer |
|---|---|
| Contar caracteres | `len(texto)` |
| Divisão sem decimais | `//` (ex: `9 // 4` = 2) |
| Formatar decimal | `f"R$ {valor:.4f}"` |
| Comparar 3 valores | `if a <= b and a <= c:` |
