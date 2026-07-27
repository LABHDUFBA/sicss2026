# Antropologia Digital, RAG e Agentes na Pesquisa

Deck (24 slides, ~20–30 min) sobre a trajetória da pesquisa social digital no LABHD-UFBA até o paradigma dos agentes — agência, epistemologia e *human-in-the-loop*. HTML + reveal.js, 100% offline, layout LABHD-UFBA (reaproveitado do deck Social-RAG). Conteúdo e dados reais extraídos dos decks do Leo em `fontes/` (Letramento em IA · SICSS 2025).

## Como apresentar
Abra `index.html` em qualquer navegador. Não precisa de internet nem servidor.

- `→` / `Espaço` — próximo · `←` — anterior
- `F` — tela cheia · `Esc` — visão geral · `S` — modo apresentador
- `B` — escurece a tela

## Como exportar para PDF
1. No Chrome: `index.html?print-pdf`
2. `Cmd+P` → **Salvar como PDF** → Layout **Paisagem** → Margens **Nenhuma** → marcar **Gráficos de plano de fundo**.

## Estrutura
```
index.html        18 slides
theme.css         tema visual (azul institucional UFBA + neutros)
assets/logos/     logos LABHD / L4BHD / PECS
vendor/           reveal.js 5.1 (local, sem CDN)
```

## Roteiro
**Bloco 1 — Trajetória LABHD/UFBA**
1. Capa
2. 2012 — Atlas.ti / CAQDAS (marco zero)
3. 2014–2018 — A digitação da vida social (traços digitais · datificação · Chartier)
4. ~2018 — Virada computacional (R, código aberto)
5. ~2023 — LLMs como infraestrutura
6. 2024–25 — De LLMs a agentes (mini-timeline)

**Bloco 2 — IA generativa, LLMs e RAG**
- Divisor 01
7. O que é IA — diagrama concêntrico IA ⊃ ML ⊃ DL ⊃ LLMs
8. O que é IA generativa
9. O que são LLMs (tokenização → embeddings)
10. O que é RAG (três etapas)
11. As ferramentas do LABHD (NER · Topic Modelling · Knowledge Graph · RAG)

**Bloco 3 — Agentes na pesquisa**
- Divisor 02
12. O que são agentes (módulos Controle · Percepção · Ação — arXiv 2503.05659)
13. A pesquisa do LABHD em escala (Telegram · 30 TB · 3 fases 2021–2027)
14. Agência distribuída

**Bloco 4 — Considerações epistemológicas**
- Divisor 03
15. Por que o humano importa — CSS crítica (3 frentes)
16. Human in · on · out of the loop (HRW, *Losing Humanity*, 2012)
17. Implicações epistemológicas
18. É possível matematizar o sentido?
19. Velhos/Novos desafios (teóricos · metodológicos · financeiros · epistemológicos)
20. Síntese — reconfiguração, não automação
21. Encerramento

## Fontes
PDFs do Leo em `fontes/` (exportados do Canva). Charts originais (knowledge graph, embeddings, sankey, dados coletados) estão lá — podem ser recortados e inseridos como `.figure` se quiser substituir os diagramas em CSS.
