# Estrutura A09 — Python: Fundamentos em Palavras + Comparação + elif Completo

**Data:** 25/03/2026  
**UC:** UC05 — Python para IA  
**Tema:** Aula de balanceamento — terminologia técnica, comparação e elif em cadeias  
**Carga:** 5 HA (3 blocos Python — dia inteiro dedicado a Python)  
**Densidade:** 50% — turma com ritmo real de ~20 slides / 3 HA

> **Decisão pedagógica:** Alunos chegam com dificuldade em if/else e operadores lógicos.  
> Esta aula consolida vocabulário (por que as funções funcionam desse jeito), introduz  
> operadores de comparação (`==`, `!=`, `<`, etc.) e treina elif em cadeia com situações  
> do cotidiano antes de ir para as de IA.  
> NÃO cobre `//`, `%`, `**`, loops ou listas — ainda fora do alcance consolidado da turma.

---

## Legenda de Tags

| Tag | Significado |
|---|---|
| `T` | Slide expositivo de conteúdo teórico |
| `E0` | Exercício de leitura — prever saída sem rodar |
| `E1` | Exercício de escrita guiada — código starter fornecido |
| `E2` | Exercício de escrita com contexto IA |
| `TC` | Desafio integrador / mini-projeto |
| `Gab` | Gabarito (v-click inline) |

---

## BLOCO 1 — Fundamentos com Vocabulário (7h10–9h10 · 2 HA)

| # | Tipo | Título | Resumo |
|---|------|--------|--------|
| S01 | — | Capa | "Aula 09 · Python: falando a língua do interpretador" |
| S02 | — | Divisor BL1 | "Python — Falando a língua do interpretador" |
| S03 | T | Anatomia de uma variável | `nome` · `=` (operador de atribuição) · valor · tipo — linha por linha com terminologia técnica |
| S04 | T | Tipos de dados + `type()` | str/int/float/bool revisitados com `type()` para checar cada um |
| S05 | E0 | Leitura: qual o `type()`? | Dado bloco de variáveis, prever `type()` sem rodar |
| S06 | T | Funções embutidas (built-ins) | O que são; `print`, `input`, `type`, `float`, `int`, `str`, `len` — anatomia: nome + `()` + argumento |
| S07 | T | Por que `float(input())`? | Empilhar funções: saída de uma vira argumento da outra |
| S08 | E1 | EX01 — Nome + ano → idade | input nome + ano de nascimento, calcular idade, responder f-string — duplas · 12 min |
| S09 | Gab | Gabarito EX01 | v-click com gabarito |
| S10 | T | Operadores de comparação | `==`, `!=`, `<`, `>`, `<=`, `>=` — um por um, com exemplo cotidiano e retorno True/False |
| S11 | E0 | Leitura: True ou False? | 6 expressões de comparação com valores fixos — prever resultado |

---

## BLOCO 2 — elif em Cadeias (9h25–11h25 · 2 HA)

| # | Tipo | Título | Resumo |
|---|------|--------|--------|
| S12 | — | Divisor BL2 | "Python continua — vários caminhos" |
| S13 | T | elif: quando há mais de 2 caminhos | Regra de avaliação sequencial — Python para na 1ª verdadeira |
| S14 | T | Exemplo cotidiano: desconto | 10%, 20%, 30%, 50% → mensagens diferentes — código completo |
| S15 | E0 | Leitura: trace o desconto | Qual mensagem sai para desconto = 25%? E para 55%? |
| S16 | E1 | EX02 — Alerta de reator | capacidade >=90%, >=80%, >=70%, <70% → alertas crescentes — duplas · 15 min |
| S17 | Gab | Gabarito EX02 | v-click com gabarito |
| S18 | T | Comparação + lógico no if/elif | Combinar `and`/`or` com `<`/`>=` dentro do if |
| S19 | E2 | EX03 — Classificador de modelo IA | precisão >=90 → Excelente, >=75 → Bom, >=60 → Atenção, <60 → Retreinar — duplas · 15 min |
| S20 | Gab | Gabarito EX03 | v-click com gabarito |

---

## BLOCO 3 — Tabela Verdade Reforço + Desafio (11h35–12h20 · 1 HA)

| # | Tipo | Título | Resumo |
|---|------|--------|--------|
| S21 | — | Divisor BL3 | "Python — fechando o dia" |
| S22 | T | Tabela verdade revisão | and/or/not com exemplos coloquiais (aprovação de crédito, login, sensor) |
| S23 | E0 | Leitura: expressões lógicas | 5 expressões compostas → True ou False? |
| S24 | TC | EX04 — Desafio integrador | lê nome + nota + frequência, usa and/or + comparação, imprime status — duplas · 15 min |
| S25 | Gab | Gabarito EX04 | v-click com gabarito |

---

## Totais

| Bloco | Slides | HA |
|---|---|---|
| BL1 | 11 | 2 |
| BL2 | 9 | 2 |
| BL3 | 5 | 1 |
| **Total** | **25** | **5** |

> 25 slides para 5 HA = 5 slides/HA — margem de fôlego para exercícios demorados

---

## O Que NÃO Entra Nesta Aula

- `//`, `%`, `**` — mencionados em A04 mas não consolidados; não cobrar em exercícios
- Raiz quadrada / `math.sqrt`
- Loops (`for`, `while`) — apenas após condicionais estarem sólidas
- Listas e dicionários

---

## Código Starter dos Exercícios (referência)

**S08 — EX01:**
```python
nome = input("Qual é o seu nome? ")
ano_nasc = int(input("Qual é o seu ano de nascimento? "))
# Calcule a idade e imprima uma mensagem personalizada
```

**S16 — EX02:**
```python
capacidade = int(input("Capacidade do reator (%): "))

if capacidade >= 90:
    # complete aqui
```

**S19 — EX03:**
```python
precisao = float(input("Precisão do modelo (%): "))

if precisao >= 90:
    # complete aqui
```

**S24 — EX04:**
```python
nome = input("Nome: ")
nota = float(input("Nota (0–10): "))
freq = int(input("Frequência (%): "))

# Use if/elif/else com and/or para determinar o status
```
