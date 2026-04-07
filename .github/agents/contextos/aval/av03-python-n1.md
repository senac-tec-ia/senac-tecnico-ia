---
id: av03
titulo: Python N1 — TriaBot 🏥
tipo: AS
ucs: UC05, UC03
indicadores: "UC05: Ind.1 · UC03: Ind.1+2"
data-alvo: "16/04/2026"
aula-alvo: A13
status: detalhada
---

# Av.03 — Python N1: TriaBot 🏥

**Tipo:** AS — Atividade em Sala  
**Data de aplicação:** A13 · 16/04/2026 (Quinta-feira)  
**Duração estimada (aluno):** ~50 minutos  
**Formação:** Dupla  
**Entrega:** `git push` ao final da aula — arquivo `av03_triabot.py` na pasta `SENAC-TecIA/Av03/`  
**UCs cobertas:** UC05, UC03  
**Indicadores:** UC05 Ind.1 · UC03 Ind.1+2

---

## Enunciado (vai para o aluno)

### 🏥 TriaBot — Triagem Automática de Pacientes

Hospitais usam um sistema de **triagem** para decidir quem precisa de atendimento urgente. Você e sua dupla vão criar o **TriaBot**: um programa que lê os sinais vitais de um paciente e classifica a **prioridade de atendimento**.

O programa vai:

1. Pedir o **nome do paciente**
2. Ler 3 **sinais vitais**: temperatura, frequência cardíaca (BPM) e saturação de oxigênio (SpO2)
3. Analisar os sinais e determinar o **nível de prioridade**
4. Exibir o resultado final com a mensagem de encaminhamento

---

### Referência: sinais vitais saudáveis

| Sinal vital | Faixa saudável |
|---|---|
| Temperatura | 36,0°C a 37,5°C |
| Frequência cardíaca (BPM) | 60 a 100 bpm |
| Saturação de oxigênio (SpO2) | 96% a 100% |

---

### Como classificar a prioridade

| Prioridade | Critério | Mensagem de encaminhamento |
|---|---|---|
| `"🔴 CRÍTICO"` | `temperatura >= 40` **ou** `spo2 < 90` **ou** (`temperatura >= 39` **e** `bpm > 110`) | `"→ Encaminhar imediatamente para atendimento."` |
| `"🟠 URGENTE"` | (`temperatura >= 38.5` **e** `bpm > 100`) **ou** `spo2 < 94` | `"→ Chamar médico em até 15 minutos."` |
| `"🟡 MODERADO"` | `temperatura >= 37.8` **ou** `bpm > 95` **ou** `spo2 < 96` | `"→ Aguardar na fila de observação."` |
| `"🟢 LEVE"` | nenhuma das anteriores | `"→ Registrar e monitorar."` |

> ⚠️ **Atenção à ordem!** Teste sempre do mais grave para o mais leve — o Python para no primeiro `True`.

---

### O que o programa precisa fazer

1. Criar uma **função** chamada `analisar_sinais(temperatura, bpm, spo2)` que aplica as condições da tabela e **retorna** a prioridade
2. Criar uma **função** chamada `mensagem_prioridade(prioridade)` que recebe a prioridade e **retorna** a mensagem de encaminhamento
3. Usar `input()` para ler os 4 dados do usuário
4. Chamar as duas funções na ordem certa
5. Imprimir o resultado nesse formato exato:

```
Paciente: CARLOS SILVA
Temperatura: 39.2°C | BPM: 112 | SpO2: 95%
Prioridade: 🔴 CRÍTICO
→ Encaminhar imediatamente para atendimento.
```

> ⚠️ O nome deve aparecer em **letras maiúsculas**. A temperatura deve ter **1 casa decimal**.

---

### O que deve ser entregue

- [ ] Arquivo `av03_triabot.py` salvo na pasta `SENAC-TecIA/Av03/`
- [ ] Os nomes da dupla em comentário no topo do arquivo
- [ ] `git push` feito até o final da aula
- [ ] O programa roda sem erros e imprime o resultado no formato pedido

---

## Mini Dicas 💡

> Não é obrigatório ler antes — só consulte se travar em algum ponto específico.

**Dica 1 — Como ler temperatura (número com decimal):**
```python
temperatura = float(input("Temperatura (°C): "))
```

**Dica 2 — Como combinar condições com `and` e `or`:**
```python
if temperatura >= 40 or spo2 < 90:       # basta UMA ser verdadeira
    return "🔴 CRÍTICO"
elif temperatura >= 38.5 and bpm > 100:   # precisam ser as DUAS verdadeiras
    return "🟠 URGENTE"
```

**Dica 3 — Como usar parênteses para agrupar condições:**
```python
if x > 10 or (y > 5 and z < 2):   # y > 5 e z < 2 são avaliados como um bloco
```

**Dica 4 — Como imprimir com 1 casa decimal:**
```python
temperatura = 39.233
print(f"Temperatura: {temperatura:.1f}°C")   # imprime: Temperatura: 39.2°C
```

---

## Glossário Python — Mini Documentação

> Referência rápida dos comandos que podem aparecer nesse exercício.

| Termo | O que faz | Exemplo rápido |
|---|---|---|
| `def` | Define uma nova *function* (função) | `def analisar(t, b, s):` |
| `return` | Devolve um valor (*return* = retornar) | `return "🔴 CRÍTICO"` |
| `int()` | Converte texto em número inteiro (*integer*) | `int("72")` → `72` |
| `float()` | Converte texto em número decimal (*float*) | `float("36.8")` → `36.8` |
| `input()` | Lê um texto digitado pelo usuário (*input* = entrada) | `input("BPM: ")` |
| `and` | Condição composta — as **duas** partes precisam ser verdadeiras | `temp >= 39 and bpm > 110` |
| `or` | Condição composta — **basta uma** parte ser verdadeira | `temp >= 40 or spo2 < 90` |
| `if / elif / else` | Estrutura de decisão — o código escolhe um caminho | `if prioridade == "🔴 CRÍTICO":` |
| `f-string` | Texto com variáveis embutidas, entre `{}` | `f"Paciente: {nome}"` |
| `.upper()` | Transforma *string* em maiúsculas (*uppercase*) | `"carlos".upper()` → `"CARLOS"` |
| `:.1f` | Formata número com 1 casa decimal (*float*) | `f"{36.833:.1f}"` → `"36.8"` |
| `#` | *Comment* — o Python ignora, serve para anotar | `# dupla: Ana e João` |

---

## Critérios de Avaliação por Indicador

| UC | Indicador | O que evidencia **A** | O que evidencia **PA** | O que evidencia **NA** |
|---|---|---|---|---|
| UC05 | Ind.1 — Elabora código conforme funcionalidades do aplicativo | Código roda sem erros, usa `def`/`return` em pelo menos 1 função, faz `git push` no caminho certo | Erros menores mas estrutura compreendida; ou código funciona sem usar `def` | Código não roda, não entregue, ou sem relação com o problema |
| UC03 | Ind.1 — Aplica aritmética em problemas de computação | `float()` para temperatura e `int()` para BPM e SpO2 corretamente; tipos adequados para cada sinal vital | Um sinal com tipo errado mas lógica geral correta | Sem leitura numérica dos sinais ou tipos completamente errados |
| UC03 | Ind.2 — Utiliza lógica matemática para estruturar raciocínios | `if/elif/else` com `and`/`or` e os limiares corretos, na ordem certa (crítico → leve) | Condicionais presentes mas falta `and`/`or`, ou ordem errada em 1 nível | Sem estrutura condicional composta |

---

## Orientações para o Professor (não vai para o aluno)

**Antes da aula:**
- Projetar o enunciado logo no início do bloco UC05
- Confirmar que todos têm o repositório `SENAC-TecIA` clonado e conseguem fazer `git push`
- Se algum aluno não tiver acesso: aceitar entrega por outro meio combinado

**Durante a aula:**
- Primeiros 5 min: ler o enunciado juntos, especialmente a tabela de prioridades — enfatizar a diferença entre `and` e `or`
- Bloqueio mais comum: confusão entre `and` e `or` → analogia: `and` é "precisa de carteirinha E senha"; `or` é "basta carteirinha OU senha"
- Segundo bloqueio: ordem invertida dos `elif` — deixar a dupla testar com os casos abaixo e descobrir o bug sozinha
- Se dupla travar muito: autorizar fazer só as 2 primeiras prioridades para garantir alguma entrega

**Correção — casos de teste:**

| Paciente | Temperatura | BPM | SpO2 | Prioridade esperada | Condição acionada |
|---|---|---|---|---|---|
| `"Carlos"` | 39.2 | 112 | 95 | 🔴 CRÍTICO | `temperatura >= 39 and bpm > 110` |
| `"Maria"` | 38.7 | 105 | 96 | 🟠 URGENTE | `temperatura >= 38.5 and bpm > 100` |
| `"Pedro"` | 37.9 | 90 | 96 | 🟡 MODERADO | `temperatura >= 37.8` |
| `"Ana"` | 36.5 | 72 | 98 | 🟢 LEVE | nenhuma acima |

- Carlos é o caso mais sutil: requer `(temperatura >= 39 and bpm > 110)` — duplas que testarem só temperatura 39.2 sem checar BPM vão errar
- Output sem emoji: aceitar como **PA** se o resto estiver correto
- UC03 Ind.2: avaliar pelo **código** — conferir os `and`/`or` nos `if/elif`

**Nota sobre os termos em inglês:**  
`input`, `output`, `function`, `return`, `float`, `integer`, `status` estão no enunciado e no glossário propositalmente — reforço natural de UC02 Ind.2.

**Link de entrega:**  
`[preencher após publicar]`
