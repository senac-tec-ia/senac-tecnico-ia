# Av.05 — Python N2: DataList 📊

**Tipo:** AS — Atividade em Sala · **Em dupla** · **Entrega: git push**

**UCs:** UC05 Python · UC03 Fundamentos Matemáticos

**Data:** 07/05/2026 — durante a aula A20 (UC05 3HA)

---

Você já sabe criar variáveis, condicionais e calcular custos de tokens. Agora vamos dar um passo a mais: organizar dados em **listas** e **dicionários**, criar **funções reutilizáveis**, e começar a usar o **Pandas** para trabalhar com tabelas de verdade.

Neste projeto, você e sua dupla vão construir um **analisador de notas** de uma turma imaginária.

---

## Fase 1 — Dados e Listas

Crie uma lista com os nomes de 5 alunos e outra com as notas deles (0 a 10). Use dados inventados pela dupla.

```python
nomes = ["Ana", "Bruno", "Carla", "Diego", "Elena"]
notas = [8.5, 6.0, 9.2, 4.5, 7.8]
```

Imprima cada aluno com sua nota usando `for` e `range()`.

---

## Fase 2 — Dicionário por Aluno

Crie um dicionário onde a chave é o nome e o valor é a nota:

```python
turma = {
    "Ana": 8.5,
    "Bruno": 6.0,
    ...
}
```

Imprime o aluno com maior nota e o com menor nota.

---

## Fase 3 — Funções

Crie as duas funções abaixo:

```python
def calcular_media(notas):
    # recebe lista de notas, retorna a média
    ...

def classificar_aluno(nota):
    # retorna "Aprovado" se nota >= 6, "Recuperação" se < 6
    ...
```

Use as funções para cada aluno da turma.

---

## Fase 4 — Pandas

```python
import pandas as pd

df = pd.DataFrame({
    "Nome": nomes,
    "Nota": notas
})

df["Situação"] = df["Nota"].apply(classificar_aluno)

print(df)
print(f"\nMédia da turma: {df['Nota'].mean():.2f}")
print(f"Maior nota: {df['Nota'].max()}")
print(f"Menor nota: {df['Nota'].min()}")
```

---

## Como entregar

1. Salve como `av05_datalist.py` na pasta `SENAC-TecIA/Av05/`
2. Comentário no topo: `# Dupla: Nome1 e Nome2`
3. `git push` até o final da aula
4. Envie o link do repositório ao professor

---

## Checklist

- [ ] Lista `nomes` e `notas` com 5 entradas
- [ ] Dicionário `turma` criado
- [ ] Função `calcular_media()` com `def` e `return`
- [ ] Função `classificar_aluno()` com `def` e `return`
- [ ] DataFrame Pandas com coluna `Situação`
- [ ] `git push` feito
