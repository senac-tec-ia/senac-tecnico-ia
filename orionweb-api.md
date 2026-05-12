# OrionWeb API — Documentação de Rotas

Base: `https://www.pr.senac.br/orionweb/site/`

## Autenticação

Cookie de sessão ASP obrigatório em todos os requests:

```
Cookie: ASPSESSIONIDAGAQSCAD=<valor>; tipoLogin=1
```

- Separador entre cookies: `;` (ponto-e-vírgula)
- Sessão expira em horas — renovar após novo login
- Para obter: DevTools (F12) → Network → qualquer request → Request Headers → `Cookie`

---

## Parâmetros fixos da turma

| Parâmetro | Valor       | Descrição            |
|-----------|-------------|----------------------|
| UniCod    | `9`         | Unidade SENAC-PR     |
| TurCod    | `202600029` | Turma Técnico em IA  |
| DisCod    | `17525–17533` | Disciplinas (veja mapa abaixo) |

---

## Mapa de DisCod → Disciplina

| DisCod | UC   | Nome completo                                                                                     | CH  |
|--------|------|---------------------------------------------------------------------------------------------------|-----|
| 17525  | UC01 | Fundamentos de computação                                                                         | 34h |
| 17526  | UC02 | Inglês Instrumental aplicado à computação                                                         | 33h |
| 17527  | UC03 | Fundamentos matemáticos para computação e Inteligência Artificial                                 | 33h |
| 17528  | UC04 | Fundamentos e conceitos de Inteligência Artificial                                                | 33h |
| 17529  | UC05 | Desenvolvimento de linguagem de programação Python                                                | 67h |
| 17530  | UC06 | Reconhecimento de modelos de arquitetura de computadores e GPU                                    | 33h |
| 17531  | UC07 | Compreensão sobre a transformação digital e análise sobre estratégias de informação para IA       | 67h |
| 17532  | UC08 | Desenvolvimento de banco de dados                                                                 | 67h |
| 17533  | UC09 | Utilização da estatística aplicada e lógica matemática em aplicações de Inteligência Artificial   | 33h |

---

## Endpoints

### `InstrutorDisciplina.asp` — Lista de disciplinas da turma
```
GET InstrutorDisciplina.asp?UniCod=9&TurCod=202600029
```
- **Retorna:** tabela HTML com as 9 UCs, nomes, CH, datas de início/fim e links para calendário/relatório
- **Status:** funciona com `TurCod` na query; **504 sem parâmetros**
- **Parse:** `<b>DISCODE - Nome da disciplina</b>` dentro de `<td>`
- **Contém links para:**
  - `InstrutorCalendario.asp?UniCod=9&TurCod=202600029&DisCod=XXXXX`
  - `RelChamada.asp?UniCod=9&TurCod=202600029&DisCod=XXXXX`

---

### `InstrutorCalendario.asp` — Calendário de datas de uma disciplina
```
GET InstrutorCalendario.asp?UniCod=9&TurCod=202600029&DisCod=17525
```
- **Retorna:** HTML com links de chamada para cada data de aula
- **Status:** funciona ✓ (pode dar 504 esporadicamente)
- **Parse nome da UC:** `<h4>17525 - Fundamentos de computação</h4>`
- **Parse datas:** `DatCal=(\d{8})` em regex — formato `YYYYMMDD`
- **Datas ordenadas:** mais recente primeiro após sort().reverse()

---

### `InstrutorChamada.asp` — Chamada de um dia específico (leitura)
```
GET InstrutorChamada.asp?UniCod=9&TurCod=202600029&DisCod=17525&DatCal=20260430&Grp=0
```
- **Retorna:** HTML com formulário de chamada (checkboxes por aluno, 2 HAs por aula)
- **Status:** o mais estável — funciona mesmo quando outros endpoints dão 504 ✓
- **Parse alunos + faltas totais:**
  ```
  <b>CodAluno</b> 9034470 |
  Normal <strong></strong> |
  <b>Faltas</b> 2
  ```
  Regex: `/<b>CodAluno<\/b>\s*(\d+).*?<b>Faltas<\/b>\s*(\d+)/g` (com newlines removidos)
- **Campo `Faltas`:** total acumulado da disciplina (não só do dia)
- **Checkboxes desabilitados** quando a data já passou (form read-only)
- **Campos de POST para marcar falta:** `frm_{CodAluno}_1=1` e `frm_{CodAluno}_2=1`
- **Marcar presença:** não enviar o campo (ausência do campo = compareceu)

---

### `InstrutorChamada.asp` — Gravar chamada (POST)
```
POST InstrutorChamada.asp?UniCod=9&TurCod=202600029&DisCod=17525&DatCal=20260507&Grp=0
Content-Type: application/x-www-form-urlencoded

frm_9034470_1=1&frm_9034470_2=1   ← aluno faltou nas 2 HAs
frm_9034462_1=1                    ← aluno faltou só na 1ª HA
(omitir campo = presença)
```
- **Nota:** só funciona em datas futuras ou do dia corrente; datas passadas têm form `disabled`

---

### `RelChamada.asp` — Relatório de chamada (impressão)
```
GET RelChamada.asp?UniCod=9&TurCod=202600029&DisCod=17525
GET RelChamada.asp?UniCod=9&TurCod=202600029&DisCod=17525&DatCalIni=2026-03-19&DatCalFim=2026-12-18
```
- **Retorna:** HTML com tabela completa de presença/falta por aluno × data
- **Status:** funciona ✓
- **Contém nomes dos alunos** (não só CodAluno): `<td>NOME COMPLETO <b></b></td>`
- **Parse nomes:** `/<th scope=row>\d+<\/th>\s*<td>([^<]+)<b>/g`
- **Estrutura da linha:** `#` | `Nome` | `C/F por data...` | `total faltas` | (vazio)
- **Útil para:** obter mapeamento completo Nome ↔ CodAluno (comparando com InstrutorChamada)

---

### `InstrutorCadastro.asp` — Dados do instrutor (não útil para alunos)
```
GET InstrutorCadastro.asp
```
- Retorna dados pessoais do próprio instrutor. Sem dados de alunos.

---

## Mapa de Alunos — CodAluno ↔ Nome

| # | CodAluno | Nome                                    |
|---|----------|-----------------------------------------|
| 1  | 9034470  | AGATHA SEIBEL SOUZA                     |
| 2  | 9034462  | ANA CLARA PIRES LOPES                   |
| 3  | 9034476  | ANA JULIA FONTANA BROL                  |
| 4  | 9034472  | ANDERSON NUNES MARQUEZ                  |
| 5  | 9034474  | ANTONELLA SOPHIA MATA VASQUEZ           |
| 6  | 666859   | ARTHUR HAACKE                           |
| 7  | 9034459  | BIANCA PEREIRA GOMES                    |
| 8  | 9034457  | EDSON MACIEL FALCÃO                     |
| 9  | 9034456  | GABRIEL ANTUNES CARDOSO                 |
| 10 | 9034460  | GABRIELLA JAIANY DE OLIVEIRA ALBRECH    |
| 11 | 9034461  | GRAZIELY SIQUEIRA RODRIGUES             |
| 12 | 9034464  | GUSTAVO CORREIA FERREIRA                |
| 13 | 9034467  | IGOR RAVANELI                           |
| 14 | 620312   | ISABELLA TROJAN ELIAS                   |
| 15 | 9034468  | JOÃO LUCAS CADENA                       |
| 16 | 9034463  | JOÃO VITOR GODOY VIEIRA                 |
| 17 | 9034471  | JULIA GABRIELA GLOVACKI RODRIGUES       |
| 18 | 9034480  | JULLYA EDUARDA ALBANI DA SILVA          |
| 19 | 9034539  | KALIEL PAGNONCELI                       |
| 20 | 9033459  | LIVIA HOFMANN DE MELLO COSTA            |
| 21 | 9034466  | LUCAS DE JESUS MIRANDA                  |
| 22 | 9034519  | LUDMYLA DUARTE PORFIRIO SILVA           |
| 23 | 9034477  | MARIANYELI ALEXANDRA ESPINOZA BALZA     |
| 24 | 9034481  | PEDRO RICARDO DALMAGRO GHIGGI           |
| 25 | 9034469  | PEDRO SILVA MATHIASS FEDERIGHI          |
| 26 | 9034525  | RAUL CEZAR SOUZA BOFF                   |
| 27 | 9034531  | SAMUEL PRESTES DE OLIVEIRA              |
| 28 | 9034473  | STHEFANY MARTINS DE JESUS               |
| 29 | 619688   | VALENTINA FAGUNDES CALDART              |
| 30 | 9034458  | VITÓRIA HENNIH BESSA                    |

---

## Notas de comportamento

- **504 seletivo:** `InstrutorDisciplina.asp` sem params e `InstrutorCalendario.asp` dão 504 às vezes; `InstrutorChamada.asp` é o mais estável
- **Sessão ASP:** cookieless não funciona; cookie deve ter o separador `;` (não `:`)
- **Faltas no chamada = total acumulado**, não do dia específico. Qualquer data passada retorna o acumulado correto
- **Nomes não estão no `InstrutorChamada.asp`** — disponíveis apenas no `RelChamada.asp`
- **DisCod sequencial:** 17525 a 17533 = UC01 a UC09 desta turma (202600029)
