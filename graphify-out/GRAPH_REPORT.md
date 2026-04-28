# Graph Report - Maria-Cacau-Contagem  (2026-04-28)

## Corpus Check
- 29 files · ~9,129 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 204 nodes · 356 edges · 17 communities detected
- Extraction: 55% EXTRACTED · 45% INFERRED · 0% AMBIGUOUS · INFERRED: 159 edges (avg confidence: 0.74)
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
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]

## God Nodes (most connected - your core abstractions)
1. `AuxWidgets` - 24 edges
2. `GuiDados` - 23 edges
3. `GuiProdutos` - 21 edges
4. `GuiPopup` - 19 edges
5. `GuiMain` - 18 edges
6. `GuiEntregas` - 17 edges
7. `AuxFrame` - 12 edges
8. `CadastroAnalyseHandler` - 11 edges
9. `_BackgroundWidget` - 11 edges
10. `GoogleSheetsService` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Python Desktop Application` --conceptually_related_to--> `Save/Clipboard Icon`  [INFERRED]
  README.md → maria_cacau/assets/images/salvar-icon.png
- `Maria Cacau Company` --conceptually_related_to--> `App Background - Maria Cacau Watermark`  [INFERRED]
  README.md → maria_cacau/assets/images/background.png
- `Maria Cacau Company` --conceptually_related_to--> `Maria Cacau Logo Icon`  [INFERRED]
  README.md → maria_cacau/assets/images/logo-icone.png
- `Maria Cacau Company` --conceptually_related_to--> `Maria Cacau Official Logo`  [INFERRED]
  README.md → arquivos/imagens/logo-oficial.png
- `Maria Cacau Company` --conceptually_related_to--> `GitHub Repository Cover Image`  [INFERRED]
  README.md → arquivos/imagens/Git-Capa.png

## Hyperedges (group relationships)
- **Main Application UI Panels** — concept_ui_panel_produtos, concept_ui_panel_entregas, concept_ui_panel_dados, concept_ui_validacao_cpf, concept_ui_consulta_frete [INFERRED 0.95]
- **Core Application Features** — readme_products_summary, readme_deliveries_summary, readme_invoice_data, readme_spreadsheet_database [EXTRACTED 1.00]
- **Maria Cacau Brand Assets** — asset_logo_icone, asset_background, img_logo_oficial, img_git_capa [INFERRED 0.90]
- **UI Demo Screenshots** — img_tela_01, img_tela_02, img_tela_03, img_tela_04, doc_tela_principal, print_capturar, print_capturar2, print_capturar3, print_capturar4 [INFERRED 0.90]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (20): Leitura e filtragem da planilha Excel para uso nas features., Processa os dados da aba Cadastro da planilha Google Sheets., AppError, certificado_limpo(), certificado_ok(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de leitura bem-sucedida da planilha. (+12 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (9): AuxWidgets, AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., AuxWidgets, Factory de widgets PyQt6 reutilizáveis em toda a interface., GuiConsFrete, Área de consulta de frete: interface gráfica e lógica de consulta., Área de dados para emissão de Nota SAGE e Melhor Envio. (+1 more)

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (2): CadastroAnalyseHandler, GuiDados

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (25): App Background - Maria Cacau Watermark, Maria Cacau Logo Icon, Save/Clipboard Icon, Shipping Methods (SEDEX, PAC, JADLOG, MOTOBOY), Consulta Frete Panel (UI), Dados Panel - Order Details (UI), Entregas Panel (UI), Produtos Panel (UI) (+17 more)

### Community 4 - "Community 4"
Cohesion: 0.13
Nodes (8): Orquestra a autenticação e o acesso às abas da planilha., SheetsManager, GoogleSheetsService, Autenticação e acesso ao Google Sheets., Lê o .json da Service Account, autentica e salva no keychain., Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou, Define qual planilha vai ser lida pelo ID ou URL do Google Sheets., Retorna as linhas brutas da planilha (lista de listas de strings).

### Community 5 - "Community 5"
Cohesion: 0.18
Nodes (2): GuiProdutos, Área de resumo de produtos: contagem de itens por período.

### Community 6 - "Community 6"
Cohesion: 0.16
Nodes (9): GuiValiCpf, Área de validação de CPF: interface gráfica e lógica de verificação., _BackgroundWidget, GuiMain, Janela principal da aplicação e orquestração das sub-features., main(), Entry point da aplicação. Execute com: python -m maria_cacau, QMainWindow (+1 more)

### Community 7 - "Community 7"
Cohesion: 1.0
Nodes (1): Metadados centralizados do pacote maria-cacau.

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (2): App Screenshot - Spreadsheet Load Success Dialog, App Screenshot Print - Spreadsheet Load Success Dialog (Early UI)

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (2): App Screenshot - Spreadsheet Loaded State, App Screenshot Print - Ready State with Date Selector

### Community 24 - "Community 24"
Cohesion: 1.0
Nodes (1): Confirmação de leitura bem-sucedida da planilha.

### Community 25 - "Community 25"
Cohesion: 1.0
Nodes (1): Orquestra a autenticação e o acesso às abas da planilha.

### Community 26 - "Community 26"
Cohesion: 1.0
Nodes (1): Autenticação e acesso ao Google Sheets.

### Community 27 - "Community 27"
Cohesion: 1.0
Nodes (1): Lê o .json da Service Account, autentica e salva no keychain.

### Community 28 - "Community 28"
Cohesion: 1.0
Nodes (1): Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou

### Community 29 - "Community 29"
Cohesion: 1.0
Nodes (1): Define qual planilha vai ser lida pelo ID ou URL do Google Sheets.

### Community 30 - "Community 30"
Cohesion: 1.0
Nodes (1): Retorna as linhas brutas da planilha (lista de listas de strings).

## Knowledge Gaps
- **35 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Códigos de erro da aplicação com estrutura AppError.`, `Estrutura de uma mensagem de erro/info para exibição no PopUp.`, `Confirmação de certificado configurado com sucesso.`, `Confirmação de credenciais removidas com sucesso.` (+30 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 2`** (25 nodes): `.group_box()`, `CadastroAnalyseHandler`, `.get_col()`, `.get_dados()`, `.get_data()`, `.get_dates()`, `.get_recent_dates()`, `.on_ler_planilha()`, `.on_ok_dados()`, `.on_ok_entregas()`, `.on_ok_produtos()`, `GuiDados`, `.get_date()`, `.__init__()`, `.navigate()`, `.on_ativar()`, `.on_nav()`, `.on_tab_changed()`, `.set_belga()`, `.set_enabled()`, `.set_resumo()`, `.set_trad()`, `.show_page()`, `.update_nav()`, `.set_cols()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 5`** (19 nodes): `.fix_date()`, `products_resume_view.py`, `.set_dates()`, `.set_dates()`, `GuiProdutos`, `.add_to_dict()`, `.dict_to_str()`, `.format_num()`, `.__init__()`, `.merge_cols()`, `.on_ativar()`, `.resumo_dia()`, `.resumo_pedido()`, `.set_dates()`, `.set_enabled()`, `.set_file()`, `.set_resumo()`, `.set_text()`, `Área de resumo de produtos: contagem de itens por período.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (2 nodes): `__init__.py`, `Metadados centralizados do pacote maria-cacau.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (2 nodes): `App Screenshot - Spreadsheet Load Success Dialog`, `App Screenshot Print - Spreadsheet Load Success Dialog (Early UI)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (2 nodes): `App Screenshot - Spreadsheet Loaded State`, `App Screenshot Print - Ready State with Date Selector`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `Confirmação de leitura bem-sucedida da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (1 nodes): `Orquestra a autenticação e o acesso às abas da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (1 nodes): `Autenticação e acesso ao Google Sheets.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (1 nodes): `Lê o .json da Service Account, autentica e salva no keychain.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (1 nodes): `Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (1 nodes): `Define qual planilha vai ser lida pelo ID ou URL do Google Sheets.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (1 nodes): `Retorna as linhas brutas da planilha (lista de listas de strings).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GuiPopup` connect `Community 0` to `Community 2`, `Community 6`?**
  _High betweenness centrality (0.132) - this node is a cross-community bridge._
- **Why does `GuiMain` connect `Community 6` to `Community 0`, `Community 1`, `Community 2`, `Community 5`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Why does `AuxWidgets` connect `Community 1` to `Community 0`, `Community 2`, `Community 5`, `Community 6`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Are the 12 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 12 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `GuiDados` (e.g. with `_BackgroundWidget` and `GuiMain`) actually correct?**
  _`GuiDados` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `GuiProdutos` (e.g. with `_BackgroundWidget` and `GuiMain`) actually correct?**
  _`GuiProdutos` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 14 inferred relationships involving `GuiPopup` (e.g. with `CadastroAnalyseHandler` and `Processa os dados da aba Cadastro da planilha Google Sheets.`) actually correct?**
  _`GuiPopup` has 14 INFERRED edges - model-reasoned connections that need verification._