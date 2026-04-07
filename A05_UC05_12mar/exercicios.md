# Exercícios — Aula 05: Python Loops e Listas, Matemática, Estatística

**Data:** 12/03/2026 | **Disciplinas:** UC05, UC03, UC09

---

<!-- EX-05-00 -->

```yaml
id: EX-05-00
aula: 5
uc: "UC03"
tipo: leitura
nivel: 0
titulo: "Leia e Preveja"
pontuacao: 5
dupla: false
testes:
  - input: ""
    expected: "Fruta: maçã\nFruta: banana\nFruta: uva\nFruta: morango\nTotal: 4 frutas"
```

## EX00 - Leia e Preveja

**Disciplina:** UC05 Python | **Nível 0:** leitura e previsão | **Individual**

Leia o código abaixo e escreva no caderno o que cada linha vai imprimir na tela. Só rode no Colab depois de terminar.

```python
# EX00 - Leia e Preveja
# Técnico em IA — Aula 05
# Nome: __________________

frutas = ["maçã", "banana", "uva", "morango"]

for fruta in frutas:
    print("Fruta:", fruta)

print(f"Total: {len(frutas)} frutas")
```

**No caderno:**
1. Quantas linhas esse código imprime no total?
2. Qual é a terceira linha impressa?
3. O que `len(frutas)` retorna?

Após escrever as respostas, rode no Colab e compare.

---

<!-- EX-05-01 -->

```yaml
id: EX-05-01
aula: 5
uc: "UC03"
tipo: python
nivel: 1
titulo: "Complete a Chamada"
pontuacao: 10
dupla: true
testes:
  - input: ""
    expected: "Alice - Presente!\nBruno - Presente!\nCarla - Presente!\nDaniel - Presente!\nEduarda - Presente!\nTotal de alunos: 5\n1\n2\n3\n4\n5"
```

## EX01 - Complete a Chamada

**Disciplina:** UC05 Python | **Nível 1:** preencher lacunas | **Dupla**

Complete os `___`. A estrutura já está pronta — vocês só preenchem os espaços:

```python
# EX01 - Chamada digital da turma
# Técnico em IA — Aula 05
# Dupla: __________________

turma = ["Alice", "Bruno", "Carla", "Daniel", "Eduarda"]

# TAREFA 1: imprima cada nome com "Presente!" na frente
for ___ in turma:
    print(___, "- Presente!")

# TAREFA 2: conte quantos alunos há na turma
total = ___(turma)         # dica: use len()
print(f"Total de alunos: {total}")

# TAREFA 3: imprima os números de 1 a 5 usando range
for numero in range(___):  # dica: range(1, 6) vai de 1 até 5
    print(numero)
```

---

<!-- EX-05-02 -->

```yaml
id: EX-05-02
aula: 5
uc: "UC03"
tipo: python
nivel: 1
titulo: "Contagem Regressiva"
pontuacao: 10
dupla: true
testes:
  - input: ""
    expected: "10...\n9...\n8...\n7...\n6...\n5...\n4...\n3...\n2...\n1...\n🚀 Lançamento!"
```

## EX02 - Contagem Regressiva

**Disciplina:** UC05 Python | **Nível 1:** preencher lacunas | **Dupla**

Complete a contagem regressiva do foguete. Apenas dois `___` para preencher:

```python
# EX02 - Contagem Regressiva
# Técnico em IA — Aula 05
# Dupla: __________________

contagem = 10

while ___:                   # enquanto contagem > 0
    print(f"{contagem}...")
    ___ -= 1                 # diminui 1 na contagem

print("🚀 Lançamento!")

# BÔNUS difícil: pule o número 7 na contagem
# dica: use if + continue dentro do while
```

---

<!-- EX-05-03 -->

```yaml
id: EX-05-03
aula: 5
uc: "UC03"
tipo: python
nivel: 2
titulo: "Boletim da Turma"
pontuacao: 15
dupla: false
testes:
  - input: ""
    expected: "Notas: [5.0, 5.8, 6.6, 7.4, 8.2]\nMelhor nota: 8.2\nPior nota: 5.0\nQuantidade: 5"
```

## EX03 - Boletim da Turma

**Disciplina:** UC05 Python | **Nível 2:** aplicação guiada | **Individual**

Construa o boletim ao longo de 5 provas. Use `append` para montar a lista:

```python
# EX03 - Boletim da Turma
# Técnico em IA — Aula 05
# Nome: __________________

notas_turma = []
nota_base = 5.0

for prova in range(5):
    nota = nota_base + ___ * 0.8    # melhora 0.8 a cada prova
    notas_turma.___(___)             # adiciona à lista

print("Notas:", notas_turma)
print("Melhor nota:", max(notas_turma))
print("Pior nota:", min(notas_turma))
print("Quantidade:", len(notas_turma))
```

> Dica: `prova` vale 0, 1, 2, 3, 4 a cada rodada do loop. Como usar isso na conta `nota_base + ___ * 0.8`?

---

<!-- EX-05-04 -->

```yaml
id: EX-05-04
aula: 5
uc: "UC01"
tipo: python
nivel: 1
titulo: "Ordem das Operações"
pontuacao: 10
dupla: false
testes:
  - input: ""
    expected: "14 20 3 1 9\nFalse"
```

## EX04 - Ordem das Operações

**Disciplina:** UC03 Matemática | **Nível 1:** calcular na mão e verificar | **Individual**

Calcule cada linha **no caderno** antes de rodar no Colab. Escreva o resultado que você acha que vai sair:

```python
# EX04 - Ordem das Operações
# Técnico em IA — Aula 05
# Nome: __________________

a = 2 + 3 * 4       # meu resultado: ___
b = (2 + 3) * 4     # meu resultado: ___
c = 10 // 3         # meu resultado: ___
d = 10 % 3          # meu resultado: ___
e = 2 ** 3 + 1      # meu resultado: ___

print(a, b, c, d, e)

# BONUS: por que isso retorna False?
print(0.1 + 0.2 == 0.3)  # escreva a explicação em comentário: ___
```

---

<!-- EX-05-05 -->

```yaml
id: EX-05-05
aula: 5
uc: "UC01"
tipo: python
nivel: 2
titulo: "Tabela da Equação Linear"
pontuacao: 15
dupla: true
testes:
  - input: ""
    expected: "0  |  5\n1  |  7\n2  |  9\n3  |  11\n4  |  13\n5  |  15"
```

## EX05 - Tabela da Equação Linear

**Disciplina:** UC03 Matemática | **Nível 2:** aplicação guiada | **Dupla**

Gere a tabela de valores para `y = 2x + 5`. A função já está criada — complete só o `return`:

```python
# EX05 - Tabela da Equação Linear
# Técnico em IA — Aula 05
# Dupla: __________________

def calcular_y(x):
    """Retorna y para a equação y = 2x + 5"""
    return ___   # complete aqui: y = 2*x + 5

# gerar tabela para x de 0 a 5
print("x  |  y = 2x + 5")
print("---|-------------")
for x in range(___):       # de 0 até 5 inclusive
    y = calcular_y(x)
    print(f"{x}  |  {y}")
```

> Quando x=0: y deve ser 5. Quando x=3: y deve ser 11. Verifique no Colab.

---

<!-- EX-05-06 -->

```yaml
id: EX-05-06
aula: 5
uc: "UC07"
tipo: python
nivel: 1
titulo: "Tabela da Função Linear"
pontuacao: 10
dupla: false
testes:
  - input: ""
    expected: "0  |  -1\n1  |  2\n2  |  5\n3  |  8\n4  |  11\n5  |  14"
```

## EX06 - Tabela da Função Linear

**Disciplina:** UC09 Estatística | **Nível 1:** completar a função | **Individual**

Calcule os valores para `f(x) = 3x - 1`. Complete só o `return` da função:

```python
# EX06 - Tabela da Função Linear
# Técnico em IA — Aula 05
# Nome: __________________

def f_linear(x, a, b):
    """Calcula y = ax + b para os coeficientes dados"""
    return ___   # complete: a*x + b

# coeficientes: a=3, b=-1
a = 3
b = -1

print("x  |  f(x) = 3x - 1")
print("---|------------------")
for x in range(6):    # x de 0 a 5
    y = f_linear(x, a, b)
    print(f"{x}  |  {y}")
```

> Quando x=0: f(0) = -1. Quando x=2: f(2) = 5. Confira no Colab.


---

<!-- EX-05-01 -->

```yaml
id: EX-05-01
aula: 5
uc: "UC03"
tipo: python
nivel: 1
titulo: "Iterando Tokens"
pontuacao: 10
dupla: true
testes:
  - input: ""
    expected: "machine\nlearning\né\nincrível\nmesmo\nTotal de tokens: 5"
```

## EX01 - Iterando Tokens

**Disciplina:** UC05 Python | **Nível 1:** compreensão | **Dupla**

Complete o código para imprimir cada token da lista e contar quantos existem:

```python
# EX01 - Iterando Tokens
# Técnico em IA — Aula 05
# Dupla: __________________

tokens = ["machine", "learning", "é", "incrível", "mesmo"]

# TAREFA 1: imprimir cada token
for ___ in ___:
    print(___)

# TAREFA 2: contar tokens
contador = 0
for t in tokens:
    ___ += 1

print(f"Total de tokens: {contador}")
```

---

<!-- EX-05-02 -->

```yaml
id: EX-05-02
aula: 5
uc: "UC03"
tipo: python
nivel: 2
titulo: "Limiar de Confiança"
pontuacao: 15
dupla: true
testes:
  - input: ""
    expected: "Modelo pronto após 7 tentativas!"
```

## EX02 - Limiar de Confiança

**Disciplina:** UC05 Python | **Nível 2:** aplicação guiada | **Dupla**

O modelo treina até atingir 85% de acurácia. Complete o loop `while` com a condição correta:

```python
# EX02 - Limiar de Confiança
# Técnico em IA — Aula 05
# Dupla: __________________

acuracia = 0.50
tentativa = 0

while ___:            # continue enquanto acurácia < 0.85
    acuracia += 0.05
    tentativa += 1
    print(f"Tentativa {tentativa}: acurácia = {acuracia:.2f}")

    if acuracia >= 1.0:
        break         # limite de segurança

print(f"Modelo pronto após {tentativa} tentativas!")
```

---

<!-- EX-05-03 -->

```yaml
id: EX-05-03
aula: 5
uc: "UC03"
tipo: python
nivel: 2
titulo: "Histórico de Acurácias"
pontuacao: 15
dupla: false
testes:
  - input: ""
    expected: "[0.5, 0.58, 0.66, 0.74, 0.8200000000000001]\nMelhor acurácia: 0.8200000000000001\nPior acurácia: 0.5"
```

## EX03 - Histórico de Acurácias

**Disciplina:** UC05 Python | **Nível 2:** aplicação guiada | **Individual**

Construa o histórico de treino de um modelo ao longo de 5 épocas:

```python
# EX03 - Histórico de Acurácias
# Técnico em IA — Aula 05
# Nome: __________________

acuracias = []
acuracia_inicial = 0.50

for epoca in range(5):
    acuracia = acuracia_inicial + ___ * 0.08   # cresce 8% por época
    acuracias.___(___)                          # adiciona à lista

print("Histórico completo:", acuracias)
print("Melhor acurácia:", max(acuracias))
print("Pior acurácia:", min(acuracias))
```

---

<!-- EX-05-04 -->

```yaml
id: EX-05-04
aula: 5
uc: "UC01"
tipo: python
nivel: 1
titulo: "Ordem das Operações"
pontuacao: 10
dupla: false
testes:
  - input: ""
    expected: "14 20 3 1 9\nFalse"
```

## EX04 - Ordem das Operações

**Disciplina:** UC03 Matemática | **Nível 1:** compreensão | **Individual**

Calcule cada linha **na mão** antes de rodar no Colab e explique o resultado em comentário:

```python
# EX04 - Ordem das Operações
# Técnico em IA — Aula 05
# Nome: __________________

a = 2 + 3 * 4       # calcule manualmente: ___
b = (2 + 3) * 4     # calcule manualmente: ___
c = 10 // 3         # calcule manualmente: ___
d = 10 % 3          # calcule manualmente: ___
e = 2 ** 3 + 1      # calcule manualmente: ___

print(a, b, c, d, e)

# BONUS: por que retorna False?
print(0.1 + 0.2 == 0.3)  # resposta em comentário: ___
```

---

<!-- EX-05-05 -->

```yaml
id: EX-05-05
aula: 5
uc: "UC01"
tipo: python
nivel: 2
titulo: "Tabela da Equação Linear"
pontuacao: 15
dupla: true
testes:
  - input: ""
    expected: "0  |  5\n1  |  7\n2  |  9\n3  |  11\n4  |  13\n5  |  15"
```

## EX05 - Tabela da Equação Linear

**Disciplina:** UC03 Matemática | **Nível 2:** aplicação guiada | **Dupla**

Gere a tabela de valores para `y = 2x + 5`:

```python
# EX05 - Tabela da Equação Linear
# Técnico em IA — Aula 05
# Dupla: __________________

def calcular_y(x):
    """Retorna y para a equação y = 2x + 5"""
    return ___   # complete a equação aqui

# gerar tabela para x de 0 a 5
print("x  |  y = 2x + 5")
print("---|-------------")
for x in range(___):       # de 0 até 5 inclusive
    y = calcular_y(x)
    print(f"{x}  |  {y}")
```

---

<!-- EX-05-06 -->

```yaml
id: EX-05-06
aula: 5
uc: "UC07"
tipo: python
nivel: 1
titulo: "Tabela da Função Linear"
pontuacao: 10
dupla: false
testes:
  - input: ""
    expected: "0  |  -1\n1  |  2\n2  |  5\n3  |  8\n4  |  11\n5  |  14"
```

## EX06 - Tabela da Função Linear

**Disciplina:** UC09 Estatística | **Nível 1:** compreensão | **Individual**

Calcule os valores para `f(x) = 3x - 1`:

```python
# EX06 - Tabela da Função Linear
# Técnico em IA — Aula 05
# Nome: __________________

def f_linear(x, a, b):
    """Calcula y = ax + b para os coeficientes dados"""
    return ___   # complete a função

# coeficientes: a=3, b=-1
a = 3
b = -1

print("x  |  f(x) = 3x - 1")
print("---|------------------")
for x in range(6):    # x de 0 a 5
    y = f_linear(x, a, b)
    print(f"{x}  |  {y}")
```
