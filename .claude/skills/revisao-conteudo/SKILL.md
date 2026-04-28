# Skill: Revisão de Conteúdo — Técnico em IA

Use esta skill ao revisar qualquer arquivo do repositório antes de commitar ou ao auditar qualidade de conteúdo gerado.

---

## Checklist por tipo de arquivo

### Agentes (`.agent.md` / `.md` em `.claude/agents/`)

- [ ] `description` no frontmatter é precisa e reflete o comportamento atual?
- [ ] `tools` listados são necessários e suficientes?
- [ ] Referências a outros agentes (`@nome`) existem e estão corretas?
- [ ] Referências a arquivos (`contexto-*.md`, `plano-aula.md`) existem?
- [ ] Fluxo de etapas é sequencial e sem loops infinitos?
- [ ] Nenhuma instrução contradiz outro agente do pipeline?

### Contextos (`contextos/*.md`)

- [ ] Seção "Estado Geral" com tabela T1/T2/T3 existe?
- [ ] HA Planejado + Dado fazem sentido matemático?
- [ ] Lista de "Consolidado" nunca regride (itens não removidos sem motivo)?
- [ ] "Próximos tópicos" está atualizado?

### Slides (`slides.md`)

- [ ] Frontmatter YAML válido (primeiras linhas entre `---`)?
- [ ] Layouts usados existem no tema (`cover`, `default`, `two-cols`, etc.)?
- [ ] Nenhum em-dash (`—`) em texto visível?
- [ ] Termos em inglês explicados na primeira ocorrência?
- [ ] Conteúdo dentro dos limites de densidade por layout?
- [ ] Gabaritos dentro de `<AdminOnly>` (nunca em `<v-click>` puro)?
- [ ] Comentários `<!-- objetivo: ... -->` nos slides de teoria?
- [ ] Ordem pedagógica T→E→D→TC respeitada?

### Scripts (`scripts/*.mjs`)

- [ ] Shebang `#!/usr/bin/env node` presente?
- [ ] Sem dependências externas não instaladas?
- [ ] Regex robusto (testa edge cases como "20 (ajustado)")?
- [ ] Exit code correto (0 = ok, 1 = erro)?

---

## Avaliação de impacto de mudanças

| Tipo de arquivo | Impacto | Verificação principal |
|---|---|---|
| Agente | Alto — afeta geração de todas as aulas futuras | Compatibilidade com agentes que invocam este |
| Contexto disciplinar | Alto — memória viva da disciplina | Consolidado não regrediu, HA consistente |
| Slides de uma aula | Médio — afeta aula específica | Densidade, estrutura, em-dashes |
| Script de automação | Médio — ferramentas de operação | Regex robusto, exit codes |
| Tema (`slidev-theme-neural/`) | Crítico — afeta TODAS as aulas | Testar com >= 2 aulas |
| Skill ou CLAUDE.md | Alto — afeta comportamento base dos agentes | Consistência com regras existentes |

---

## Regras de veredito

- **Erro bloqueante**: conteúdo incorreto (Consolidado regredido, instrução contraditória, gabarito exposto)
- **Aviso**: estilo, formatação, em-dash, diff grande — commit permitido mas deve considerar resolver
- **Info**: observação positiva ou neutra

Nunca bloqueie por estilo. Focar em impacto de propagação e corretude semântica.
