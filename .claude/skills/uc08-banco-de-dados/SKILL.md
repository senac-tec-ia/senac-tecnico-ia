# Skill: UC08 — Desenvolvimento de Banco de Dados

**Código:** UC08 | **Carga Total:** 67h (80 HA) | **Peso no dia:** Pesado (3 HA/bloco, Bloco 1)

Contexto vivo em: `.github/agents/contextos/contexto-banco-de-dados.md`

---

## Diretrizes metodológicas

- **IA como motivo:** toda aula conecta com IA — "onde os dados de treino são guardados?", "como um modelo acessa histórico de predições?"
- **SQLite primeiro:** começa com SQLite (sem instalação, funciona no Colab) antes de qualquer SGBD cliente-servidor
- **Python + SQL desde o início:** mostrar `sqlite3` em Python logo nas primeiras aulas
- **MER com dados de IA:** modelagem sempre usa dados relevantes para ML (clientes, transações, imagens, sensores)
- **Progressão SQL complexo:** SELECT → WHERE → JOIN → subqueries → views → índices → otimização
- **Nomenclatura `snake_case`:** tabelas e campos em `snake_case` — consistente com UC01
- **Segurança de dados:** em toda discussão de permissões, conectar com LGPD (UC07)

---

## Indicadores Curriculares — T1

| Ind. | Descrição |
|---|---|
| 1 | Propõe alteração no acesso aos dados de acordo com relacionamentos físicos e estrutura |
| 2 | Seleciona o SGBD de acordo com as necessidades da aplicação |
| 3 | Cria a estrutura física de banco de dados de acordo com os requisitos e modelagem |

**HA no T1 restantes:** 20 (disciplina iniciada em A06)

---

## Sequência sugerida T1

1. Intro a BDs: o que são, tipos (relacional, NoSQL) — 2 HA
2. Modelo relacional: tabelas, campos, PK, FK — 2 HA
3. Modelagem DER simples — 3 HA
4. SGBDs: SQLite, PostgreSQL, MySQL — comparativo — 2 HA
5. SQL básico: `CREATE TABLE`, `INSERT INTO`, `SELECT` — 3 HA
6. SQL intermediário: `WHERE`, `ORDER BY`, `JOIN` — 3 HA
7. Python + BD: `sqlite3`, Pandas `read_sql()` — 3 HA
8. Mini-projeto: BD de resultados de modelo ML — 2 HA

---

## Conexões com outras UCs

| Conceito | UC | Observação |
|---|---|---|
| CSV e planilhas | UC01 | Alunos já conhecem CSV — ponte para tabelas SQL |
| Python `sqlite3` e Pandas | UC05 | Integração direta |
| Permissões e segurança | UC07 | LGPD e acesso controlado |
| Dados de treino de modelos | UC04 | BD armazena os dados que alimentam modelos |
| SQL keywords em inglês | UC02 | SELECT, FROM, WHERE, JOIN — vocabulário técnico |
