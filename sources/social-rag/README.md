# Social-RAG — Apresentação

Deck enxuto (19 slides) sobre o manuscrito *Social-RAG: A Retrieval-Augmented Generation Pipeline for Computational Social Science Research on Telegram*. HTML + reveal.js, 100% offline, layout LABHDUFBA.

## Como apresentar
Abra `index.html` em qualquer navegador (Chrome, Firefox, Edge, Safari). Não precisa de internet nem servidor.

- `→` / `Espaço` — próximo slide · `←` — anterior
- `F` — tela cheia · `Esc` — visão geral dos slides · `S` — modo apresentador (notas)
- `B` — escurece a tela

## Como exportar para PDF
1. Abra no Chrome: `index.html?print-pdf`
2. `Cmd+P` → Destino **Salvar como PDF** → Layout **Paisagem** → Margens **Nenhuma** → marque **Gráficos de plano de fundo**.

## Estrutura
```
index.html                 19 slides
theme.css                  tema visual (azul institucional UFBA + neutros)
assets/img/                figuras 1–4 do manuscrito (radares e heatmap)
assets/logos/              logos PECS e L4BHD
assets/logos_strip.png     faixa de logos do rodapé
vendor/                    reveal.js 5.1 (local, sem CDN)
```

## Roteiro
1. Capa
2. Autores (6 coautores)
3. Motivação — escala desafia a leitura exaustiva
4. O que é o Social-RAG
5. Divisor · RAG: definição
6. RAG em três etapas (indexação · recuperação · geração)
7. Divisor · Arquitetura Social-RAG
8. Pipeline modular em 5 etapas
9. **Pipeline completo end-to-end** (coleta → indexação → consulta+geração + Streamlit)
10. Corpus — vacinas (116.284) e Lei Rouanet (3.284)
11. Três escolhas de projeto (1 chunk=1 post · Adaptive-K · MMR)
12. Modelos comparados (A · B · C)
13. Divisor · Avaliação
14. Dois blocos de perguntas (hermenêutico · factual)
15. Resultados hermenêuticos (Figura 1)
16. Resultados factuais (Figura 2)
17. Heatmap consolidado (Figura 3)
18. Limitações e contribuições
19. Encerramento
