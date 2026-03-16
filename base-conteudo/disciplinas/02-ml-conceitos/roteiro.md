# Roteiro — Disciplina 2: Fundamentos de Machine Learning

**Carga horária estimada**: 2h  
**Slide correspondente**: `aula-02/slides.md` *(a criar)*  
**Objetivos**: ver [objetivos.md](objetivos.md)

---

## Abertura (10 min)

- Revisão rápida da aula anterior: "O que é IA?"
- Pergunta provocativa: "Como você ensinaria um computador a reconhecer gatos?"
- Slide `brainstorm` para colher respostas

## Bloco 1 — O que é Machine Learning? (25 min)

### Conceito
- ML é um subconjunto da IA
- Em vez de programar regras explícitas, o computador **aprende** a partir de exemplos
- Analogia: criança aprendendo a reconhecer animais por fotos

### Diferença: Programação Tradicional vs ML
```
Tradicional:  Dados + Regras  → Respostas
ML:           Dados + Respostas → Regras (modelo)
```

### Tipos de Aprendizado
- **Supervisionado**: dados com rótulos — ex: classificar e-mails spam/não-spam
- **Não supervisionado**: dados sem rótulos — ex: agrupar clientes por comportamento
- **Por reforço**: aprendizado por tentativa e erro — ex: robô aprendendo a andar

## Bloco 2 — Pipeline de ML (30 min)

### As 5 etapas

1. **Coleta de dados** — de onde vêm os dados?
2. **Pré-processamento** — limpeza, normalização, tratamento de ausentes
3. **Escolha do modelo** — qual algoritmo usar?
4. **Treinamento** — o modelo ajusta seus parâmetros nos dados de treino
5. **Avaliação** — o modelo generaliza para dados novos?

### Divisão treino / teste
- Regra geral: 80% treino, 20% teste
- Por que não treinar em tudo? Overfitting!

## Bloco 3 — Métricas de Avaliação (20 min)

### Classificação
- **Acurácia**: % acertos sobre total
- **Precision**: dos que o modelo disse "positivo", quantos eram?
- **Recall**: dos que eram positivos, quantos o modelo achou?
- **F1-Score**: média harmônica de precision e recall

### Quando usar qual?
- Diagnóstico médico: recall alto é crítico
- Spam: precision alta é mais importante

## Encerramento (10 min)

- Recapitulação:
  1. ML aprende a partir de dados, não de regras escritas à mão
  2. Pipeline: dados → pré-processamento → modelo → avaliação
  3. A escolha da métrica depende do problema
- Próxima aula: Python para Dados
- Tarefa: identificar um problema real que poderia ser resolvido com ML supervisionado

---

## Referências e Recursos

- [Google ML Crash Course](https://developers.google.com/machine-learning/crash-course)
- [Kaggle — Learn ML](https://www.kaggle.com/learn)
- Livro: "Mãos à Obra: Aprendizado de Máquina com Scikit-Learn e TensorFlow" — Aurélien Géron
