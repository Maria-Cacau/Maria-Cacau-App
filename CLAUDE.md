> Este repo é parte de um projeto maior. Contexto do projeto como um todo (outros repos, CBL) fica
> no `CLAUDE.md` da pasta que contém este repo — se estiver disponível localmente, ler primeiro.

## Padrões de projeto e demandas

Convenções de arquitetura/código que não são específicas deste repo, decisões de design system e o
status de qualquer demanda (incluindo o Design System / V6) não ficam mais aqui — ficam no repo
interno **`Maria-Cacau-Study`** (documentação viva do projeto). Se esse repo estiver disponível,
`demandas/README.md` na raiz dele é o ponto de entrada; decisões fechadas de arquitetura ficam em
`style-guide/`.

## Finalizar demanda

Quando o usuário pedir "finalizar a demanda" (ou variações), executar sempre:
1. Atualizar os arquivos em `.ai/` que forem afetados pelas mudanças da sessão (só o que é específico deste repo — setup, build, packaging; arquitetura/decisão de projeto vai em `Maria-Cacau-Study`)
2. Entregar a descrição do PR em bloco ```md para copy/paste``` — comparar com `develop` (`main` se for a develop)
   Estilo: `## Overview` com 1–2 parágrafos focados na motivação/impacto (não técnico), depois `## Ajustes feitos` com bullets contextuais. Sem checklist, sem referências a arquivos nos bullets.```
3. Verificar se há perguntas pertinentes para atualizar no CBL (`Maria-Cacau-Study/CBL.md`) — regra completa no `CLAUDE.md` da pasta que contém este repo.

`isort` e a atualização do grafo (`graphify update .`) não são mais manuais — o workflow
`code-standardize` roda os dois automaticamente a cada push na `develop` (ver
`Maria-Cacau-Study/demandas/ci-cd/`). Não rodar nenhum dos dois manualmente ao finalizar; o CI
resolve. Só rodar `isort` manual se o usuário pedir explicitamente antes disso.

Nunca trazer código de outras branches, nunca abrir PR automaticamente.

## Documentação de Estudo em Andamento

Quando o usuário pedir para atualizar a documentação e o contexto envolver um tema de estudo ou trabalho em andamento, atualizar o arquivo `self-study.md` da pasta correspondente (`pocs/<tema>/self-study.md`).

O `self-study.md` deve sempre deixar claro:
- Qual a intenção e objetivo do estudo
- O status atual de cada etapa (concluído / em andamento / pendente)
- As decisões já fechadas (para não reabrir sem motivo)
- Os próximos passos concretos para retomar na próxima sessão

Esse arquivo é o ponto de entrada para qualquer IA ou sessão futura continuar de onde parou, sem precisar reler tudo.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- Don't run `graphify update .` manually — o workflow `code-standardize` já roda isso automaticamente a cada push na `develop`. Só rodar manual se o usuário pedir explicitamente antes disso.
