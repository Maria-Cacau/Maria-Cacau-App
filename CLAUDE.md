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
1. Rodar `isort` no projeto todo (via `source .envrc && python3 -m isort`) -- SEMPRE
2. Atualizar os arquivos em `.ai/` que forem afetados pelas mudanças da sessão
3. Rodar `graphify update .` para manter o grafo atual -- SEMPRE
4. Entregar a descrição do PR em bloco ```md para copy/paste``` — comparar com `develop` (`main` se for a develop)
   Estilo: `## Overview` com 1–2 parágrafos focados na motivação/impacto (não técnico), depois `## Ajustes feitos` com bullets contextuais. Sem checklist, sem referências a arquivos nos bullets.```
5. Verificar se há perguntas pertinentes para atualizar no CBL.

Nunca trazer código de outras branches, nunca abrir PR automaticamente.

## Documentação de Estudo em Andamento

Quando o usuário pedir para atualizar a documentação e o contexto envolver um tema de estudo ou trabalho em andamento, atualizar o arquivo `self-study.md` da pasta correspondente (`pocs/<tema>/self-study.md`).

O `self-study.md` deve sempre deixar claro:
- Qual a intenção e objetivo do estudo
- O status atual de cada etapa (concluído / em andamento / pendente)
- As decisões já fechadas (para não reabrir sem motivo)
- Os próximos passos concretos para retomar na próxima sessão

Esse arquivo é o ponto de entrada para qualquer IA ou sessão futura continuar de onde parou, sem precisar reler tudo.

## Dados Sensíveis em Arquivos de Resultado

Arquivos JSON em `pocs/` ou `scripts/` podem conter dados reais da planilha (CPF, e-mail, telefone, cartão). Nunca commitar esses arquivos com dados reais.
Antes de qualquer commit com JSONs de resultado:
- Substituir CPFs por `"000.000.000-00"`
- Substituir e-mails por `"exemplo@email.com"`
- Substituir telefones por `"(00) 00000-0000"`
- Substituir números de cartão por `"0000 0000 0000 0000"`

Se os dados forem necessários localmente, adicionar o arquivo ao `.gitignore` em vez de sanitizar.

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
