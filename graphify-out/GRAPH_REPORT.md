# Graph Report - Maria-Cacau-Contagem  (2026-04-29)

## Corpus Check
- 36 files · ~10,825 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 233 nodes · 477 edges · 9 communities detected
- Extraction: 57% EXTRACTED · 43% INFERRED · 0% AMBIGUOUS · INFERRED: 203 edges (avg confidence: 0.67)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `GuiMain` - 30 edges
2. `GuiPopup` - 24 edges
3. `AuxWidgets` - 24 edges
4. `GuiProdutos` - 20 edges
5. `GuiStatusBar` - 19 edges
6. `SecurityStorage` - 18 edges
7. `CadastroAnalyseHandler` - 15 edges
8. `GuiEntregas` - 15 edges
9. `_Worker` - 14 edges
10. `_BackgroundWidget` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Processa os dados da aba Cadastro da planilha Google Sheets.` --uses--> `GuiPopup`  [INFERRED]
  core/sheets/handlers/cadastro.py → design_system/gui_popup.py
- `AuxWidgets` --uses--> `Área de resumo de produtos: contagem de itens por período.`  [INFERRED]
  design_system/aux_widgets.py → features/home/sub_features/products_resume/products_resume_view.py
- `main()` --calls--> `GuiMain`  [INFERRED]
  __main__.py → features/home/home_view.py
- `Entry point da aplicação. Execute com: python -m maria_cacau` --uses--> `GuiMain`  [INFERRED]
  __main__.py → features/home/home_view.py
- `AppEvent` --uses--> `GuiMain`  [INFERRED]
  core/observability.py → features/home/home_view.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (16): ABC, GoogleSheetsService, Autenticação e acesso ao Google Sheets., Lê linhas da aba Cadastro para um conjunto específico de datas.          Mesmo m, Lê o .json da Service Account, autentica e salva em ~/.mariacacau/., Tenta autenticar usando credenciais salvas. Retorna False se não houver., Remove as credenciais salvas. Retorna False se não havia nada salvo., Define qual planilha vai ser lida pelo ID ou URL do Google Sheets. (+8 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (12): AuxWidgets, AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., AuxWidgets, Factory de widgets PyQt6 reutilizáveis em toda a interface., GuiConsFrete, Área de consulta de frete: interface gráfica e lógica de consulta., GuiDados (+4 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (12): planilha_conectada(), Confirmação de planilha selecionada com sucesso., GuiPopup, GuiMain, _load_sheets(), _save_sheet(), main(), Entry point da aplicação. Execute com: python -m maria_cacau (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (15): AppEvent, _Observability, Observabilidade centralizada do app., GuiValiCpf, _is_valid_cpf(), Área de validação de CPF: interface gráfica e lógica de verificação., Enum, _BackgroundWidget (+7 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (7): CadastroAnalyseHandler, _normalize_headers(), Processa os dados da aba Cadastro da planilha Google Sheets., Orquestra a autenticação e o acesso às abas da planilha., Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê entregas de uma data específica direto da planilha (sem cache global)., SheetsManager

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (2): GuiProdutos, Área de resumo de produtos: contagem de itens por período.

### Community 6 - "Community 6"
Cohesion: 0.24
Nodes (3): QStatusBar, GuiStatusBar, Barra de status da aplicação: planilha conectada, credenciais e estado de carreg

### Community 7 - "Community 7"
Cohesion: 0.19
Nodes (11): AppError, certificado_limpo(), certificado_ok(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso., Confirmação de credenciais removidas com sucesso., Confirmação de leitura bem-sucedida da planilha. (+3 more)

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (1): Metadados centralizados do pacote maria-cacau.

## Knowledge Gaps
- **11 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Observabilidade centralizada do app.`, `Códigos de erro da aplicação com estrutura AppError.`, `Estrutura de uma mensagem de erro/info para exibição no PopUp.`, `Confirmação de certificado configurado com sucesso.` (+6 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 5`** (14 nodes): `.fix_date()`, `products_resume_view.py`, `._show_produtos()`, `GuiProdutos`, `.add_to_dict()`, `.dict_to_str()`, `.format_num()`, `.get_date_range()`, `.merge_cols()`, `.resumo_dia()`, `.resumo_pedido()`, `.set_resumo()`, `.set_text()`, `Área de resumo de produtos: contagem de itens por período.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (2 nodes): `__init__.py`, `Metadados centralizados do pacote maria-cacau.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GuiMain` connect `Community 2` to `Community 0`, `Community 1`, `Community 3`, `Community 5`, `Community 6`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **Why does `GuiPopup` connect `Community 2` to `Community 1`, `Community 3`, `Community 4`, `Community 7`?**
  _High betweenness centrality (0.167) - this node is a cross-community bridge._
- **Why does `CacheStorage` connect `Community 0` to `Community 2`, `Community 3`?**
  _High betweenness centrality (0.147) - this node is a cross-community bridge._
- **Are the 11 inferred relationships involving `GuiMain` (e.g. with `Entry point da aplicação. Execute com: python -m maria_cacau` and `AppEvent`) actually correct?**
  _`GuiMain` has 11 INFERRED edges - model-reasoned connections that need verification._
- **Are the 19 inferred relationships involving `GuiPopup` (e.g. with `CadastroAnalyseHandler` and `Processa os dados da aba Cadastro da planilha Google Sheets.`) actually correct?**
  _`GuiPopup` has 19 INFERRED edges - model-reasoned connections that need verification._
- **Are the 12 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 12 INFERRED edges - model-reasoned connections that need verification._
- **Are the 7 inferred relationships involving `GuiProdutos` (e.g. with `_Worker` and `_DialogConectarPlanilha`) actually correct?**
  _`GuiProdutos` has 7 INFERRED edges - model-reasoned connections that need verification._