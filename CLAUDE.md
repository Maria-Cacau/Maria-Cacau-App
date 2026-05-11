## CBL — Curiosity-Based Log

O arquivo `.ai/benchmark/CBL.md` deve ser populado com as perguntas do usuário e resumo das respostas ao longo das sessões. Porém apenas as perguntas de descoberta, estudos e afins. Se for instruções num geral não precisa ser documentado.
O usuário pede isso para que documente no Notion dele em cima da metodologia CBL.
Quando for popular, caso queira, mande as perguntas que vc pretende colocar la pra ele, assim ele aprova certinho.
- Registrar todas as perguntas do usuário, sem filtro de tema
- Formato: `**P: pergunta**` seguido de parágrafo com resumo da resposta
- Agrupar por sessão com cabeçalho de data (`## Sessão — Mês/Ano`)
- Popular ao longo da sessão ou ao finalizar a demanda

## Strings de UI

Todas as strings de UI ficam em `maria_cacau/assets/strings.py`. Nunca hardcodar texto de interface nas views.
Ao adicionar qualquer string visível ao usuário (labels, botões, menus, diálogos), adicionar primeiro em `strings.py` e referenciar a constante na view.

## Finalizar demanda

Quando o usuário pedir "finalizar a demanda" (ou variações), executar sempre:
1. Atualizar os arquivos em `.ai/` que forem afetados pelas mudanças da sessão
2. Rodar `graphify update .` para manter o grafo atual
3. Entregar a descrição do PR em bloco ```md para copy/paste — comparar com `develop` (ou `main`)```

Nunca trazer código de outras branches, nunca abrir PR automaticamente.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
