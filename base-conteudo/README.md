# Base de Conteúdo — Técnico em Inteligência Artificial (SENAC)

Este diretório é o **centro de planejamento do curso**. Não contém apresentações Slidev — apenas documentação de referência para organização do conteúdo, roteiros de aula e contexto para a IA.

## Estrutura

```
base-conteudo/
├── README.md           ← este arquivo
├── ementa.md           ← ementa completa do curso
├── ai-context.md       ← contexto e regras para geração de slides com IA
└── disciplinas/
    ├── 01-introducao-ia/
    │   ├── roteiro.md
    │   └── objetivos.md
    └── 02-ml-conceitos/
        ├── roteiro.md
        └── objetivos.md
```

## Como usar

- Antes de criar slides para uma nova aula, consulte o `roteiro.md` da disciplina correspondente
- Para pedir ao Copilot que gere slides, referencie `ai-context.md` e o roteiro relevante no prompt
- A ementa em `ementa.md` serve como visão macro para alinhar o conteúdo entre aulas

## Mapeamento Aulas → Disciplinas

| Pasta   | Disciplina                          | Arquivo de roteiro |
|---------|-------------------------------------|--------------------|
| aula-01 | Introdução à Inteligência Artificial | [disciplinas/01-introducao-ia/roteiro.md](disciplinas/01-introducao-ia/roteiro.md) |
| aula-02 | Fundamentos de Machine Learning      | [disciplinas/02-ml-conceitos/roteiro.md](disciplinas/02-ml-conceitos/roteiro.md) |
