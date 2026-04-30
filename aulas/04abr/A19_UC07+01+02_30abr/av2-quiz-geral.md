# Av.2 — Quiz Geral Digital
## A19 · 30/04/2026 · Google Forms · 16 questões · ~90 minutos

##https://docs.google.com/forms/d/e/1FAIpQLSfsOLIxBsZMmEnaHei2FMZZjA9DrCmXP72e74I6kswPfdFfig/viewform?usp=publish-editor

**Tipo:** PQ — Prova Individual · Google Forms · sem consulta
**Indicadores:** UC04:Ind.2 · UC06:Ind.1+2 · UC07:Ind.1–4 · UC01:Ind.1 · UC02:Ind.2
**Horário:** 7h35–9h35 (encerra automaticamente)

---

## Cabeçalho do Forms (texto para o aluno)

> Você já viu muito neste trimestre: GPU, Transformação Digital, LGPD, Python e vocabulário técnico em inglês. Agora é a hora de mostrar o que ficou.
>
> Esta avaliação é **individual**. Seu celular ou notebook deve ter **apenas esta aba aberta**. Não converse durante a prova. Se tiver dúvida sobre o enunciado, levante a mão.
>
> Leia cada pergunta com calma. Boa sorte!

---

## PARTE 1 — Computação e Hardware (4 questões · UC01/UC06)

---

**Q1.** Você está escrevendo um trabalho no Word há 30 minutos. O computador desliga de repente antes de salvar. Por que o arquivo foi perdido?

- ( ) O HD apagou o arquivo automaticamente para liberar espaço
- ( ) O SSD não suporta arquivos do Word sem conexão com a internet
- (✅) O arquivo estava na RAM, que é volátil — ela perde todos os dados quando o computador desliga
- ( ) O Windows deletou o arquivo por segurança ao detectar desligamento abrupto

---

**Q2.** A CPU segue um ciclo para executar qualquer instrução. Pense assim: primeiro ela **busca** a instrução na memória, depois **entende** o que precisa fazer, depois **faz**, depois **guarda** o resultado. Qual alternativa representa essa ordem?

- (✅) Fetch → Decode → Execute → Store
- ( ) Execute → Fetch → Store → Decode
- ( ) Decode → Fetch → Execute → Store
- ( ) Store → Execute → Decode → Fetch

---

**Q3.** Um modelo de IA está sendo treinado. O PyTorch divide os dados em lotes (*batches*) e processa vários ao mesmo tempo na GPU. Esse comportamento é possível por causa de:

- ( ) Fetch-decode-execute — ciclo de instrução sequencial da CPU
- (✅) Pipeline paralelo na GPU — os CUDA cores processam múltiplos dados simultaneamente
- ( ) Cache da CPU — dados guardados temporariamente para acesso rápido
- ( ) Virtualização — emulação de hardware por software

---

**Q4.** Qual dos itens abaixo é **software** e não hardware?

- ( ) Placa de vídeo (GPU)
- ( ) Pente de memória RAM
- (✅) Sistema operacional Windows
- ( ) Processador (CPU)

---

## PARTE 2 — Transformação Digital e LGPD (4 questões · UC07)

---

**Q5.** Uma empresa tradicional de varejo decide usar IA para recomendar produtos personalizados, automação de estoque e atendimento via chatbot. Isso é um exemplo de:

- ( ) Digitalização — apenas converter documentos físicos em PDF
- (✅) Transformação Digital — uso estratégico de tecnologia para mudar processos e o modelo de negócio
- ( ) Marketing digital — usar redes sociais para divulgar produtos
- ( ) Automação industrial — uso de robôs físicos na linha de produção

---

**Q6.** O caso Serasa Experian envolveu o uso de dados de **223 milhões de brasileiros** sem o consentimento deles. Qual artigo da LGPD foi diretamente violado?

- ( ) Art. 3º — que define o território de aplicação da lei
- ( ) Art. 12º — que trata de anonimização de dados
- (✅) Art. 7º — que exige base legal explícita para o tratamento de dados pessoais
- ( ) Art. 20º — que regula decisões automatizadas

---

**Q7.** Você recebe um e-mail do "Banco Real" dizendo que sua conta será bloqueada se você não clicar em um link e confirmar sua senha. Esse tipo de ataque se chama:

- ( ) Ransomware — sequestro de arquivos por criptografia
- (✅) Phishing — tentativa de enganar o usuário para roubar dados por e-mail ou mensagem falsa
- ( ) Brute force — tentativas automáticas de adivinhar sua senha
- ( ) SQL Injection — injeção de código malicioso em bancos de dados

---

**Q8.** Qual dos exemplos abaixo representa corretamente o uso de **IA como ferramenta** no ambiente de trabalho, seguindo boas práticas?

- ( ) Copiar integralmente um texto gerado pelo ChatGPT e entregar como trabalho próprio sem revisão
- ( ) Usar IA para fazer todas as decisões da empresa sem nenhuma supervisão humana
- (✅) Usar o Copilot para sugerir um trecho de código e revisar o resultado antes de usar
- ( ) Proibir qualquer uso de IA para evitar riscos de segurança

---

## PARTE 3 — Python Básico (4 questões · UC05)

---

**Q9.** Analise o código abaixo:

```python
nota = input("Qual sua nota? ")   # usuário digita: 8
print(nota + 2)
```

O que acontece ao rodar esse código?

- ( ) Imprime `10`
- ( ) Imprime `82`
- (✅) Erro — `input()` sempre retorna texto (`str`); não dá pra somar com número sem converter antes com `int()` ou `float()`
- ( ) Imprime `8.2`

---

**Q10.** Trace o código abaixo e diga o que ele imprime:

```python
precisao = 78
if precisao >= 90:
    print("Excelente")
elif precisao >= 75:
    print("Bom")
elif precisao >= 60:
    print("Atenção")
else:
    print("Retreinar")
```

- ( ) Excelente
- (✅) Bom
- ( ) Atenção
- ( ) Retreinar

---

**Q11.** No **TokenLab** você calculou tokens com o código abaixo. Sabendo que `"Olá, mundo!"` tem **11 caracteres**, qual valor é impresso?

```python
texto = "Olá, mundo!"
tokens = len(texto) // 4
print(tokens)
```

- ( ) 2.75
- (✅) 2
- ( ) 3
- ( ) 11

---

**Q12.** Qual é o valor de `total` quando o `print` for executado?

```python
total = 0
for i in range(1, 5):
    total = total + i
print(total)
```

- (✅) 10
- ( ) 15
- ( ) 6
- ( ) 4

---

## PARTE 4 — Inglês Técnico (4 questões · UC02)

---

**Q13.** Leia o trecho abaixo:

> *"The **data breach** exposed 223 million CPF numbers from Brazilian citizens."*

O que significa **data breach** no contexto acima?

- ( ) Proteção de dados pessoais
- ( ) Acordo de privacidade entre empresas
- (✅) Vazamento de dados — acesso não autorizado que expõe informações pessoais
- ( ) Criptografia de arquivos sensíveis

---

**Q14.** Qual das frases abaixo usa corretamente o termo **consent** no contexto da LGPD?

- ( ) "The company gave consent to all users automatically."
- (✅) "Serasa did not obtain the users' **consent** before using their personal data."
- ( ) "Consent means the government approved the data collection."
- ( ) "Users must pay for consent to use digital services."

---

**Q15.** Leia o trecho abaixo e responda:

> *"To train a deep learning model, you need a large dataset and significant GPU processing power. The model learns by adjusting weights through backpropagation."*

O que este trecho descreve?

- ( ) Como instalar o Python no computador
- ( ) Como criar um banco de dados relacional
- (✅) O processo de treinamento de um modelo de deep learning usando GPU
- ( ) Como configurar a rede Wi-Fi de um servidor

---

**Q16.** Leia o trecho abaixo:

> *"Companies must ensure **compliance** with the LGPD to avoid fines of up to 2% of their annual revenue."*

O que significa **compliance** no contexto acima?

- ( ) Acesso ilegal a dados de usuários
- ( ) Cancelamento de contratos com empresas estrangeiras
- ( ) Armazenamento de dados em nuvem
- (✅) Conformidade legal — estar em acordo com as normas e leis aplicáveis

---

## Gabarito (não compartilhar com os alunos antes da prova)

| Q | Resposta | UC | Indicador | Tema |
|---|---|---|---|---|
| 01 | C | UC01 | Ind.1 | RAM volátil — dado perdido ao desligar |
| 02 | A | UC06 | Ind.1 | Ciclo fetch-decode-execute |
| 03 | B | UC06 | Ind.2 | Pipeline paralelo GPU — CUDA cores e PyTorch |
| 04 | C | UC01 | Ind.1 | Hardware vs software |
| 05 | B | UC07 | Ind.1 | Def. Transformação Digital |
| 06 | C | UC07 | Ind.3 | LGPD — Art. 7º base legal |
| 07 | B | UC07 | Ind.3 | Segurança digital — phishing |
| 08 | C | UC07 | Ind.2 | Boas práticas com IA |
| 09 | C | UC05 | Ind.1 | Python — variáveis: `input()` retorna `str` |
| 10 | B | UC05 | Ind.1 | Python — trace if/elif com precisão |
| 11 | B | UC05 | Ind.1 | Python — `len()` e `//` divisão inteira (TokenLab) |
| 12 | A | UC05 | Ind.1 | Python — `for range(1,5)` com acumulador |
| 13 | C | UC02 | Ind.2 | Inglês — data breach |
| 14 | B | UC02 | Ind.2 | Inglês — consent |
| 15 | C | UC02 | Ind.2 | Inglês — deep learning trecho |
| 16 | D | UC02 | Ind.2 | Inglês — compliance |

---

## Critérios A/PA/NA por indicador

| UC | Ind. | A (Atendido) | PA (Parcialmente) | NA (Não Atendido) |
|---|---|---|---|---|
| UC01 | 1 | Q1 + Q4 corretas (2/2) | 1/2 correta | nenhuma correta |
| UC06 | 1 | Q2 correta | — | Q2 errada |
| UC06 | 2 | Q3 correta | — | Q3 errada |
| UC07 | 1 | Q5 correta | — | Q5 errada |
| UC07 | 2 | Q8 correta | — | Q8 errada |
| UC07 | 3 | Q6 + Q7 corretas (2/2) | 1/2 correta | nenhuma correta |
| UC05 | 1 | Q9+Q10+Q11+Q12 — 3/4 ou mais corretas | 2/4 corretas | 0–1/4 |
| UC02 | 2 | Q13+Q14+Q15+Q16 — 3/4 ou mais corretas | 2/4 corretas | 0–1/4 |

---

> **Configuração do Forms:** Forms → Configurações → Quiz mode ativado → Coletar e-mail → Limitar a 1 resposta → Data e hora de encerramento: 30/04/2026 9h35.
> Após encerrar: Respostas → Ver planilha → exportar CSV para lançar no diário.
