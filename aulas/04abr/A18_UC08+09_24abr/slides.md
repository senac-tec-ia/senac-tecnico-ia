---
theme: ../../../neural-slides-template
colorSchema: dark
title: "Técnico em IA — Aula 18"
author: Leonardo Zanini
courseTitle: Técnico em Inteligência Artificial
aulaNum: "Aula 18"
bgPreset: palette
layout: cover
---

<!-- SLIDE 1 — [TEORIA] Capa A18 -->

# Aula 18
## TokenLab · Laboratório de Dados

*24 de abril de 2026*


---
layout: default
bgPreset: default
card: true
---

<!-- SLIDE 3 — [TEORIA] Plano da Aula Hoje -->

# Plano da Aula Hoje

**Parte 1 — 7h10 até o intervalo**

- Finalizar o `av03_tokenlab.py`
- Fazer o `git push` com os nomes da dupla no topo
- Enviar o link do repositório para o professor

**Parte 2 — depois do intervalo**

- Estatística com Python: vamos plotar gráficos reais
- `import matplotlib.pyplot as plt` + `import numpy as np`
- Quem terminar a Av.03 antes do intervalo já pode começar

---
layout: default
bgPreset: default
card: true
---

<!-- SLIDE 4 — [EXERCICIO] Starter Code — Esqueleto do TokenLab -->

# <carbon-code /> Starter Code — TokenLab

**Copie, cole e preencha os `???`**

```python
# av03_tokenlab.py
# Dupla: _____________ e _____________

texto = input("Digite o prompt: ")
caracteres = len(texto)
tokens = caracteres // 4
if tokens == 0:
    tokens = 1

print("============================================")
print("       TOKENLAB — Calculadora de Custo IA")
print("============================================")
print(f"??? : {???}")
print(f"???  : {???}")
print(f"???: {???}")

# Fase 1 — classifique o tamanho (curto / médio / longo)
tamanho = ???

# Fase 2 — custo para 1 chamada
custo_gpt4   = ???
custo_gpt35  = ???
custo_gemini = ???
```

---
layout: default
bgPreset: default
card: true
---

<!-- SLIDE 5 — [EXERCICIO] Checklist de Entrega -->

# ✅ Checklist de Entrega — Av.03

Antes de mandar o link, confirme cada item:

- [ ] Arquivo salvo como **`av03_tokenlab.py`**
- [ ] Dentro da pasta **`SENAC-TecIA/Av03/`**
- [ ] **Nomes da dupla** em comentário no topo do arquivo
- [ ] O programa **roda sem erros** com qualquer texto digitado
- [ ] **`git push`** feito com sucesso
- [ ] **Link do repositório** enviado ao professor

<br>

---
layout: default
bgPreset: default
card: true
---

<!-- SLIDE 6 — [TEORIA] Como Fazer o Push -->

# <carbon-logo-github /> Como Fazer o Push

**3 comandos — nessa ordem:**

```bash
git add av03_tokenlab.py
```

```bash
git commit -m "Av03 TokenLab — [Nomes da dupla]"
```

```bash
git push origin main
```

<br>

> Se aparecer erro de autenticação, chama o professor.

---
layout: center
bgPreset: animate
---

<!-- SLIDE 8 — [TEORIA] Divisor — Estatística com Python -->

# 📊 Bloco 2
## Estatística com Python

*Primeiro gráfico real da turma*

*9h50 – 12h20 · UC09*

---
layout: two-cols
bgPreset: default
card: true
---

<!-- SLIDE 9 — [TEORIA] Por Que Gráfico? -->

# Por Que Gráfico?

Esses são os mesmos dados:

| Aluno | Horas | Nota |
|---|---|---|
| Ana | 2 | 5.0 |
| Bruno | 4 | 6.5 |
| Carla | 6 | 7.0 |
| Diego | 8 | 8.5 |
| Eva | 10 | 9.0 |

::right::

<br><br>

**Com a tabela**, você lê número por número.

**Com o gráfico**, você vê a tendência em 1 segundo:

> 📈 *Quanto mais horas de estudo, maior a nota.*

<br>

**É por isso que estatística usa gráficos.**
Nosso trabalho hoje é fazer o Python desenhar isso pra gente.

---
layout: default
bgPreset: default
card: true
---

<!-- SLIDE 10 — [TEORIA] Importando as Bibliotecas -->

# Importando as Bibliotecas

**Duas linhas que abrem o laboratório de dados:**

```python
import matplotlib.pyplot as plt
import numpy as np
```

<br>

| Biblioteca | Para que serve |
|---|---|
| `matplotlib` | Desenha gráficos — linhas, pontos, barras, histogramas |
| `numpy` | Faz cálculos numéricos rápidos — médias, arrays, operações em lote |

<br>

> Essas duas bibliotecas aparecem juntas em praticamente todo projeto de dados com Python.
> Na próxima aula vamos adicionar `pandas` para ler arquivos CSV.

---
layout: default
bgPreset: default
card: true
---

<!-- SLIDE 10b — [TEORIA] Funções do plt — Cola Rápida -->

# Funções do `plt` — Cola Rápida

`plt` é o **apelido** de `matplotlib.pyplot` — o "pincel" do Python para gráficos.
Você chama uma função, ela configura o gráfico. No final, `plt.show()` abre a janela.

| Função | O que faz |
|---|---|
| `plt.plot(x, y)` | Linha contínua — ideal para fórmulas e sequências |
| `plt.scatter(x, y)` | Pontos soltos — ideal para dados reais medidos |
| `plt.title("texto")` | Título do gráfico |
| `plt.xlabel("texto")` | Rótulo do eixo horizontal (x) |
| `plt.ylabel("texto")` | Rótulo do eixo vertical (y) |
| `plt.axhline(valor)` | Linha horizontal em um valor fixo (ex: média) |
| `plt.legend()` | Mostra a legenda (funciona com `label=` nas funções acima) |
| `plt.grid(True)` | Adiciona grade ao gráfico |
| `plt.show()` | Exibe o gráfico na tela — sempre a última linha |

> 📚 Documentação completa (em inglês, com exemplos visuais):
> **matplotlib.org/stable/api/pyplot_summary.html**

---
layout: default
bgPreset: default
card: true
---

<!-- SLIDE 11 — [TEORIA] Seu Primeiro Plot — 5 Linhas -->

# Seu Primeiro Plot — 5 Linhas

**Execute isso no VS Code ou Colab agora:**

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [3, 5, 7, 9, 11]   # y = 2x + 1

plt.plot(x, y)
plt.show()
```

<br>

O que cada linha faz:
- `x` → eixo horizontal (valores de entrada)
- `y` → eixo vertical (valores calculados)
- `plt.plot(x, y)` → desenha a linha
- `plt.show()` → abre a janela com o gráfico

---
layout: default
bgPreset: default
card: true
---

<!-- SLIDE 12 — [TEORIA] Personalizando o Gráfico -->

# Personalizando o Gráfico

**Adicione título e nomes nos eixos:**

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [3, 5, 7, 9, 11]

plt.plot(x, y, color='green', linewidth=2)
plt.title("Minha Primeira Reta")
plt.xlabel("Entrada (x)")
plt.ylabel("Saída (y)")
plt.grid(True)
plt.show()
```

<br>

> Um gráfico sem título e sem nomes nos eixos não comunica nada.
> Sempre identifique o que está sendo mostrado.

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 13 — [EXERCICIO] Exercício 1 — Plote y = 3x + 2 -->

# <carbon-code /> Exercício 1 — Plote y = 3x + 2

**Copie o código abaixo e substitua os `???`:**

```python
import matplotlib.pyplot as plt

x = [0, 1, 2, 3, 4, 5]
y = [??? * i + ??? for i in x]   # y = 3x + 2

plt.plot(x, y, color='blue', linewidth=2)
plt.title("???")
plt.xlabel("x")
plt.ylabel("y")
plt.grid(True)
plt.show()
```

**O que esperar:** uma reta que começa em y=2 quando x=0 e sobe com inclinação 3.


---
layout: two-cols
bgPreset: default
card: true
---

<!-- SLIDE 14 — [TEORIA] Scatter Plot — Dados Reais -->

# Scatter Plot — Dados Reais

`plt.scatter(x, y)` plota **pontos separados** — ideal quando os dados são observações reais, não uma fórmula.

```python
import matplotlib.pyplot as plt

horas  = [2, 4, 4, 6, 6, 8, 8, 10]
notas  = [5.0, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0]

plt.scatter(horas, notas, color='orange')
plt.title("Horas de Estudo vs Nota")
plt.xlabel("Horas estudadas")
plt.ylabel("Nota")
plt.grid(True)
plt.show()
```

::right::

<br><br>

**`plt.plot` vs `plt.scatter`**

| | `plot` | `scatter` |
|---|---|---|
| Usa | fórmulas, sequências | medições reais |
| Desenha | linha contínua | pontos isolados |
| Exemplo | y = 3x + 2 | notas de alunos |

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 15 — [EXERCICIO] Exercício 2 — Scatter dos Seus Dados -->

# <carbon-code /> Exercício 2 — Scatter dos Seus Dados

**Use os dados abaixo para criar um scatter plot:**

| Temperatura (°C) | Sorvetes vendidos |
|---|---|
| 20 | 30 |
| 22 | 35 |
| 25 | 50 |
| 28 | 65 |
| 30 | 80 |
| 33 | 100 |

**Starter code — copie e preencha os `???`:**

```python
import matplotlib.pyplot as plt

temp   = [??????????????????????]
vendas = [??????????????????????]

plt.scatter(???, ???)        # passe as duas listas
plt.title("???")
plt.xlabel("???")
plt.ylabel("???")
plt.grid(True)
plt.show()
```

<!-- <v-click>

> **Gabarito:**
> ```python
> import matplotlib.pyplot as plt
> temp   = [20, 22, 25, 28, 30, 33]
> vendas = [30, 35, 50, 65, 80, 100]
> plt.scatter(temp, vendas, color='red')
> plt.title("Temperatura vs Sorvetes Vendidos")
> plt.xlabel("Temperatura (°C)")
> plt.ylabel("Sorvetes vendidos")
> plt.grid(True)
> plt.show()
> ```

</v-click> -->

---
layout: default
bgPreset: default
card: true
---

<!-- SLIDE 16 — [TEORIA] Média com numpy -->

# Média com numpy

**`np.mean()` calcula a média de uma lista. Você pode desenhar essa média no gráfico:**

```python
import matplotlib.pyplot as plt
import numpy as np

temp   = [20, 22, 25, 28, 30, 33]
vendas = [30, 35, 50, 65, 80, 100]

media_vendas = np.mean(vendas)   # → 60.0

plt.scatter(temp, vendas, color='red', label='Dados')
plt.axhline(media_vendas, color='blue', linestyle='--', label=f'Média: {media_vendas:.1f}')
plt.title("Temperatura vs Sorvetes — com Média")
plt.xlabel("Temperatura (°C)")
plt.ylabel("Sorvetes vendidos")
plt.legend()
plt.grid(True)
plt.show()
```

> `plt.axhline()` desenha uma linha horizontal no valor da média.
> `plt.legend()` mostra a legenda com os rótulos (`label=`).

---
layout: default
bgPreset: palette
card: true
---

<!-- SLIDE 17 — [EXERCICIO] Exercício 3 — Adicione a Média -->

# <carbon-code /> Exercício 3 — Adicione a Média

**Pegue o scatter do Exercício 2 e adicione:**

1. A linha da média de `vendas` em azul tracejado
2. Um `label` na linha com o valor da média
3. `plt.legend()` para aparecer a legenda

**Pergunta:** Olhando o gráfico, quantos pontos estão **acima** da média? Quantos estão **abaixo**?

<v-click>

> **Gabarito:**
> ```python
> media_vendas = np.mean(vendas)   # 60.0
> plt.axhline(media_vendas, color='blue', linestyle='--',
>             label=f'Média: {media_vendas:.1f}')
> plt.legend()
> ```
> **Resposta:** 3 pontos abaixo da média (30, 35, 50) e 3 acima (65, 80, 100).
> A média não é o "meio" — é o equilíbrio matemático da distribuição.

</v-click>

---
layout: default
bgPreset: default
card: true
---

<!-- SLIDE 18 — [TEORIA] O Que Vimos Hoje -->

# O Que Vimos Hoje

**Os blocos do laboratório de dados:**

| Ferramenta | Para que serve | Comando principal |
|---|---|---|
| `matplotlib` | Visualizar dados em gráficos | `plt.plot()`, `plt.scatter()` |
| `numpy` | Calcular estatísticas | `np.mean()` |
| `plt.axhline()` | Marcar a média no gráfico | `axhline(valor)` |
| `plt.grid()` | Adicionar grade | `grid(True)` |
| `plt.legend()` | Mostrar legenda | `legend()` |

<br>

**Fluxo que usamos hoje:**
> dados → `scatter` → calcular média → `axhline` → `show()`

---
layout: default
bgPreset: animate
card: true
---

<!-- SLIDE 19 — [TEORIA] Próxima Aula: Dados de um CSV Real -->

# Próxima Aula: Dados de um CSV Real

Hoje criamos os dados na mão (listas). Na próxima aula vamos **carregar dados reais de um arquivo**:

```python
import pandas as pd

df = pd.read_csv('dados.csv')
print(df.head())       # primeiras 5 linhas
print(df.describe())   # média, min, max de todas as colunas
```

**O que é `pandas`?**
Uma biblioteca que transforma arquivos CSV em tabelas manipuláveis em Python — como uma planilha do Excel, mas programável.

<br>

> 🎯 **Desafio para casa (opcional):** Instale o pandas com `pip install pandas` e tente abrir qualquer CSV que você tenha.

---
layout: end
github: LeoZanini
avatar: https://github.com/LeoZanini.png?size=256
---

<!-- SLIDE 20 — [TEORIA] Encerramento -->

# Até a próxima aula!

**O que fizemos hoje:**
TokenLab entregue · Primeiro gráfico com matplotlib · Scatter plot · Média com numpy

**O que vem aí:**
Pandas + CSV real · Laboratório de dados completo

