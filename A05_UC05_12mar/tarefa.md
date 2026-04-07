# Tarefa de Casa — Aula 05: Loops, Álgebra e Função Linear

---
aula: 5
titulo: "Loops, Álgebra e Função Linear"
prazo: "próxima aula (13/03/2026)"
pontuacao_maxima: 30
entrega: "arquivo .py salvo em SENAC-TecIA/Aula-05/tarefa/"
nome_arquivo: "tarefa_05_loops_algebra.py"
---

## Objetivo

Consolidar os três temas da Aula 05 em um único script: filtrar dados com loops, calcular valores de equação linear e interpretar os coeficientes da função.

---

## Descrição

**Parte 1 - Python:** Dado o dataset abaixo com notas de modelos, escreva um loop que filtre apenas os valores `float` e calcule a média das acurácias válidas.

**Parte 2 - Matemática:** Usando a função `f_linear()`, gere a tabela de `y = 3x + 2` para `x` de 0 a 9 e imprima cada par `(x, y)`.

**Parte 3 - Reflexão:** Responda em comentário no código: quando `x` dobra de 3 para 6, `y` dobra também? Por que não?

---

## Código Starter

```python
# tarefa_05_loops_algebra.py
# Técnico em IA — Aula 05
# Nome: __________________

# ─── PARTE 1: Filtro de Dataset ───────────────────────────────
dataset = [0.91, None, 0.73, "", 0.85, 0.44, None]
acuracias_validas = []

for item in dataset:
    # CONDIÇÃO: apenas floats válidos
    if ___:
        acuracias_validas.append(item)

media = sum(acuracias_validas) / len(acuracias_validas)
print(f"Acurácias válidas: {acuracias_validas}")
print(f"Média: {media:.2f}")


# ─── PARTE 2: Tabela da Equação Linear ────────────────────────
def f_linear(x, a, b):
    """Calcula y = ax + b"""
    return ___

a = 3
b = 2

print("\nx  |  y = 3x + 2")
print("---|-------------")
for x in range(___):
    y = f_linear(x, a, b)
    print(f"{x}  |  {y}")


# ─── PARTE 3: Reflexão ────────────────────────────────────────
# Quando x dobra de 3 para 6, y dobra também?
# Resposta: ___
# Por que não (dica: pense no papel de b):
# ___
```

---

## Critérios de Avaliação

| Critério | Pontos |
|---|---|
| Parte 1: filtro correto (apenas floats) | 8 |
| Parte 1: média calculada corretamente | 4 |
| Parte 2: `f_linear()` implementada | 6 |
| Parte 2: tabela completa e formatada | 6 |
| Parte 3: reflexão respondida com sentido | 6 |
| **Total** | **30** |
| Arquivo salvo no caminho correto com nome correto | 5 |
| ... | ... |
