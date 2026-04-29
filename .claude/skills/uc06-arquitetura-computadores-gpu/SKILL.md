---
name: uc06-arquitetura-computadores-gpu
description: Diretrizes pedagógicas, consolidado (A03), próximos tópicos e indicadores de UC06 — Arquitetura de Computadores e GPU.
---
---
name: uc06-arquitetura-computadores-gpu
---
# Skill: UC06 — Arquitetura de Computadores e GPU

**Código:** UC06 | **Carga Total:** 33h (40 HA) | **Peso no dia:** Médio (2 HA/bloco)

Contexto vivo em: `.github/agents/contextos/contexto-arquitetura-computadores-gpu.md`

---

## Diretrizes metodológicas

- **GPU em todo bloco:** cada aula deve ter ao menos 1 slide ou atividade sobre a importância da GPU para IA
- **Aulas demonstrativas práticas:** nunca 100% expositivo — toda aula tem atividade prática ou demonstrativa
- **Simulação em software:** priorize CPU-Z, VMware, GPUSim ou equivalentes gratuitos
- **Benchmarks reais:** use FLOPS, comparativos visuais (diagrama CPU vs GPU), configurações de servidores ML
- **Referência cruzada com Python:** ao explicar GPU, mostrar `torch.cuda.is_available()` e `device = torch.device('cuda')`
- **Não repetir A03:** CPU vs GPU (paralelismo), RAM, HD vs SSD, periféricos já foram cobertos

---

## Conteúdo já consolidado

- A03: CPU vs GPU (paralelismo vs IA), RAM, HD vs SSD, periféricos, comparativo de componentes

---

## Indicadores Curriculares — T1

| Ind. | Descrição |
|---|---|
| 1 | Reconhece modelos aplicados em arquitetura de computadores e GPU |
| 2 | Reconhece e aplica conceitos de Pipeline para GPU |

**HA no T1 restantes:** ~10 | **Próximos tópicos:** arquitetura CPU (ALU, CU, ciclo fetch-decode-execute), arquitetura GPU (CUDA cores, VRAM, tensor cores), pipeline GPU com PyTorch/TensorFlow

---

## Conexões com outras UCs

| Conceito | UC | Observação |
|---|---|---|
| GPU para treino de modelos | UC04 | Já mencionado brevemente — aprofundar aqui |
| CUDA e Python | UC05 | `torch.cuda`, `device` — mostrar código real |
| Hardware vs SO | UC01 | Extensão do modelo E-P-S já visto |
| Redes de computadores (T2) | UC07 | Datacenter na nuvem → GPU remota |
