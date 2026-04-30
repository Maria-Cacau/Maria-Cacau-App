## Strings de UI

Todas as strings de UI ficam em `maria_cacau/assets/strings.py`. Nunca hardcodar texto de interface nas views.
Ao adicionar qualquer string visível ao usuário (labels, botões, menus, diálogos), adicionar primeiro em `strings.py` e referenciar a constante na view.

## Finalizar demanda

Quando o usuário pedir "finalizar a demanda" (ou variações), executar sempre:
1. Atualizar os arquivos em `.ai/` que forem afetados pelas mudanças da sessão
2. Rodar `graphify update .` para manter o grafo atual
3. Entregar a descrição do PR em bloco ```md para copy/paste — comparar com `develop` (ou `main`)

Nunca trazer código de outras branches, nunca abrir PR automaticamente.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
