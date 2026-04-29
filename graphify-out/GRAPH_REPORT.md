# Graph Report - Maria-Cacau-Contagem  (2026-04-29)

## Corpus Check
- 36 files · ~11,349 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 255 nodes · 527 edges · 11 communities detected
- Extraction: 57% EXTRACTED · 43% INFERRED · 0% AMBIGUOUS · INFERRED: 227 edges (avg confidence: 0.68)
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
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]

## God Nodes (most connected - your core abstractions)
1. `GuiMain` - 32 edges
2. `SecurityStorage` - 26 edges
3. `GuiDados` - 25 edges
4. `GuiPopup` - 24 edges
5. `AuxWidgets` - 24 edges
6. `GuiProdutos` - 20 edges
7. `GuiStatusBar` - 19 edges
8. `CadastroAnalyseHandler` - 15 edges
9. `GuiEntregas` - 15 edges
10. `_Worker` - 14 edges

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
Cohesion: 0.08
Nodes (13): AuxWidgets, GuiValiCpf, Área de validação de CPF: interface gráfica e lógica de verificação., AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., AuxWidgets, Factory de widgets PyQt6 reutilizáveis em toda a interface., GuiConsFrete (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (19): GoogleSheetsService, Autenticação e acesso ao Google Sheets., Lê linhas da aba Cadastro para um conjunto específico de datas.          Mesmo m, Lê linhas da aba Cadastro para um conjunto específico de datas.          Mesmo m, Lê o .json da Service Account, autentica e salva em ~/.mariacacau/., Lê o .json da Service Account, autentica e salva no keychain., Tenta autenticar usando credenciais salvas. Retorna False se não houver., Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou (+11 more)

### Community 2 - "Community 2"
Cohesion: 0.14
Nodes (10): planilha_conectada(), Confirmação de planilha selecionada com sucesso., GuiPopup, GuiMain, _load_sheets(), _save_sheet(), main(), Entry point da aplicação. Execute com: python -m maria_cacau (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (11): AppEvent, _Observability, Observabilidade centralizada do app., Enum, _BackgroundWidget, _DialogConectarPlanilha, _extract_sheet_id(), Janela principal da aplicação e orquestração das sub-features. (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (2): GuiDados, QWidget

### Community 5 - "Community 5"
Cohesion: 0.13
Nodes (6): ABC, CacheStorage, Backend de cache em arquivo JSON no diretório do usuário., Contrato base para todos os backends de armazenamento., StorageHandler, Backend de armazenamento seguro via keychain do SO.

### Community 6 - "Community 6"
Cohesion: 0.13
Nodes (13): AppError, certificado_limpo(), certificado_ok(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso., Confirmação de credenciais removidas com sucesso., Confirmação de leitura bem-sucedida da planilha. (+5 more)

### Community 7 - "Community 7"
Cohesion: 0.19
Nodes (6): CadastroAnalyseHandler, Orquestra a autenticação e o acesso às abas da planilha., Autentica e aponta para a planilha. Não lê dados ainda., Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê entregas de uma data específica direto da planilha (sem cache global)., SheetsManager

### Community 8 - "Community 8"
Cohesion: 0.24
Nodes (3): QStatusBar, GuiStatusBar, Barra de status da aplicação: planilha conectada, credenciais e estado de carreg

### Community 9 - "Community 9"
Cohesion: 0.27
Nodes (2): GuiProdutos, Área de resumo de produtos: contagem de itens por período.

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (1): Metadados centralizados do pacote maria-cacau.

## Knowledge Gaps
- **19 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Observabilidade centralizada do app.`, `Códigos de erro da aplicação com estrutura AppError.`, `Estrutura de uma mensagem de erro/info para exibição no PopUp.`, `Confirmação de certificado configurado com sucesso.` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 4`** (20 nodes): `.combo_box()`, `._on_ativar_dados()`, `.on_ok_dados()`, `GuiDados`, `.create_frame()`, `.get_date()`, `.__init__()`, `.navigate()`, `.on_ativar()`, `.on_nav()`, `.on_tab_changed()`, `.set_belga()`, `.set_dates()`, `.set_enabled()`, `.set_resumo()`, `.set_trad()`, `.setup_ui()`, `.show_page()`, `.update_nav()`, `QWidget`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (14 nodes): `.fix_date()`, `products_resume_view.py`, `._show_produtos()`, `GuiProdutos`, `.add_to_dict()`, `.dict_to_str()`, `.format_num()`, `.get_date_range()`, `.merge_cols()`, `.resumo_dia()`, `.resumo_pedido()`, `.set_resumo()`, `.set_text()`, `Área de resumo de produtos: contagem de itens por período.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `__init__.py`, `Metadados centralizados do pacote maria-cacau.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GuiMain` connect `Community 2` to `Community 0`, `Community 3`, `Community 4`, `Community 5`, `Community 8`, `Community 9`?**
  _High betweenness centrality (0.198) - this node is a cross-community bridge._
- **Why does `CacheStorage` connect `Community 5` to `Community 2`, `Community 3`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **Why does `GuiPopup` connect `Community 2` to `Community 0`, `Community 3`, `Community 6`, `Community 7`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **Are the 11 inferred relationships involving `GuiMain` (e.g. with `Entry point da aplicação. Execute com: python -m maria_cacau` and `AppEvent`) actually correct?**
  _`GuiMain` has 11 INFERRED edges - model-reasoned connections that need verification._
- **Are the 19 inferred relationships involving `SecurityStorage` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`SecurityStorage` has 19 INFERRED edges - model-reasoned connections that need verification._
- **Are the 8 inferred relationships involving `GuiDados` (e.g. with `_Worker` and `_DialogConectarPlanilha`) actually correct?**
  _`GuiDados` has 8 INFERRED edges - model-reasoned connections that need verification._
- **Are the 19 inferred relationships involving `GuiPopup` (e.g. with `CadastroAnalyseHandler` and `Processa os dados da aba Cadastro da planilha Google Sheets.`) actually correct?**
  _`GuiPopup` has 19 INFERRED edges - model-reasoned connections that need verification._