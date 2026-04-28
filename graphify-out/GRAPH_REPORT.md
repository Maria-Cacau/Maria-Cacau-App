# Graph Report - Maria-Cacau-Contagem  (2026-04-28)

## Corpus Check
- 33 files · ~10,397 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 273 nodes · 481 edges · 37 communities detected
- Extraction: 55% EXTRACTED · 45% INFERRED · 0% AMBIGUOUS · INFERRED: 216 edges (avg confidence: 0.72)
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
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]

## God Nodes (most connected - your core abstractions)
1. `GuiMain` - 27 edges
2. `AuxWidgets` - 24 edges
3. `GuiDados` - 24 edges
4. `GuiPopup` - 22 edges
5. `GuiProdutos` - 22 edges
6. `GuiEntregas` - 18 edges
7. `CadastroAnalyseHandler` - 15 edges
8. `SecurityStorage` - 15 edges
9. `CacheStorage` - 12 edges
10. `AuxFrame` - 12 edges

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
Cohesion: 0.09
Nodes (13): AuxWidgets, GuiValiCpf, Área de validação de CPF: interface gráfica e lógica de verificação., AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., AuxWidgets, Factory de widgets PyQt6 reutilizáveis em toda a interface., GuiConsFrete (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (16): Leitura e filtragem da planilha Excel para uso nas features., Processa os dados da aba Cadastro da planilha Google Sheets., planilha_conectada(), Confirmação de leitura bem-sucedida da planilha., GuiPopup, _DialogConectarPlanilha, _extract_sheet_id(), GuiMain (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (25): App Background - Maria Cacau Watermark, Maria Cacau Logo Icon, Save/Clipboard Icon, Shipping Methods (SEDEX, PAC, JADLOG, MOTOBOY), Consulta Frete Panel (UI), Dados Panel - Order Details (UI), Entregas Panel (UI), Produtos Panel (UI) (+17 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (9): GoogleSheetsService, Autenticação e acesso ao Google Sheets., Lê o .json da Service Account, autentica e salva no keychain., Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou, Remove as credenciais do keychain. Retorna False se não havia nada salvo., Define qual planilha vai ser lida pelo ID ou URL do Google Sheets., Retorna as linhas brutas da planilha (lista de listas de strings)., Lê apenas as linhas das N datas mais recentes da aba Cadastro.          Faz dois (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (8): CadastroAnalyseHandler, _normalize_headers(), Processa os dados da aba Cadastro da planilha Google Sheets., Orquestra a autenticação e o acesso às abas da planilha., Autentica e aponta para a planilha. Não lê dados ainda., Lê e processa a aba Cadastro (chamado uma vez, no Ativar)., Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, SheetsManager

### Community 5 - "Community 5"
Cohesion: 0.13
Nodes (6): ABC, CacheStorage, Backend de cache em arquivo JSON no diretório do usuário., Contrato base para todos os backends de armazenamento., StorageHandler, Backend de armazenamento seguro via keychain do SO.

### Community 6 - "Community 6"
Cohesion: 0.21
Nodes (2): GuiProdutos, Área de resumo de produtos: contagem de itens por período.

### Community 7 - "Community 7"
Cohesion: 0.24
Nodes (1): GuiDados

### Community 8 - "Community 8"
Cohesion: 0.21
Nodes (2): GuiEntregas, Área de entregas pendentes: resumo diário com inadimplências.

### Community 9 - "Community 9"
Cohesion: 0.19
Nodes (11): AppError, certificado_limpo(), certificado_ok(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso., Confirmação de credenciais removidas com sucesso., Confirmação de leitura bem-sucedida da planilha. (+3 more)

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (1): Metadados centralizados do pacote maria-cacau.

### Community 11 - "Community 11"
Cohesion: 1.0
Nodes (2): App Screenshot - Spreadsheet Loaded State, App Screenshot Print - Ready State with Date Selector

### Community 12 - "Community 12"
Cohesion: 1.0
Nodes (2): App Screenshot - Spreadsheet Load Success Dialog, App Screenshot Print - Spreadsheet Load Success Dialog (Early UI)

### Community 28 - "Community 28"
Cohesion: 1.0
Nodes (1): Lê o .json da Service Account, autentica e salva no keychain.

### Community 29 - "Community 29"
Cohesion: 1.0
Nodes (1): Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou

### Community 30 - "Community 30"
Cohesion: 1.0
Nodes (1): Remove as credenciais do keychain. Retorna False se não havia nada salvo.

### Community 31 - "Community 31"
Cohesion: 1.0
Nodes (1): Define qual planilha vai ser lida pelo ID ou URL do Google Sheets.

### Community 32 - "Community 32"
Cohesion: 1.0
Nodes (1): Retorna as linhas brutas da planilha (lista de listas de strings).

### Community 33 - "Community 33"
Cohesion: 1.0
Nodes (1): Lê apenas as linhas das N datas mais recentes da aba Cadastro.          Faz dois

### Community 34 - "Community 34"
Cohesion: 1.0
Nodes (1): Lê o .json da Service Account, autentica e salva no keychain.

### Community 35 - "Community 35"
Cohesion: 1.0
Nodes (1): Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou

### Community 36 - "Community 36"
Cohesion: 1.0
Nodes (1): Remove as credenciais do keychain. Retorna False se não havia nada salvo.

### Community 37 - "Community 37"
Cohesion: 1.0
Nodes (1): Define qual planilha vai ser lida pelo ID ou URL do Google Sheets.

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (1): Retorna as linhas brutas da planilha (lista de listas de strings).

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (1): Confirmação de certificado configurado com sucesso.

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (1): Confirmação de credenciais removidas com sucesso.

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): Confirmação de leitura bem-sucedida da planilha.

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): Confirmação de certificado configurado com sucesso.

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (1): Confirmação de credenciais removidas com sucesso.

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): Confirmação de leitura bem-sucedida da planilha.

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Confirmação de leitura bem-sucedida da planilha.

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): Orquestra a autenticação e o acesso às abas da planilha.

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Autenticação e acesso ao Google Sheets.

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): Lê o .json da Service Account, autentica e salva no keychain.

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): Define qual planilha vai ser lida pelo ID ou URL do Google Sheets.

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (1): Retorna as linhas brutas da planilha (lista de listas de strings).

## Knowledge Gaps
- **49 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Códigos de erro da aplicação com estrutura AppError.`, `Estrutura de uma mensagem de erro/info para exibição no PopUp.`, `Confirmação de certificado configurado com sucesso.`, `Confirmação de credenciais removidas com sucesso.` (+44 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 6`** (17 nodes): `products_resume_view.py`, `GuiProdutos`, `.add_to_dict()`, `.dict_to_str()`, `.format_num()`, `.__init__()`, `.merge_cols()`, `.on_ativar()`, `.resumo_dia()`, `.resumo_pedido()`, `.set_dates()`, `.set_enabled()`, `.set_file()`, `.set_resumo()`, `.set_text()`, `.setup_ui()`, `Área de resumo de produtos: contagem de itens por período.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (16 nodes): `nota_fiscal_view.py`, `.get_col()`, `.get_dados()`, `.get_data()`, `.on_ok_dados()`, `.on_ok_entregas()`, `.on_ok_produtos()`, `GuiDados`, `.get_date()`, `.navigate()`, `.on_nav()`, `.on_tab_changed()`, `.set_belga()`, `.set_resumo()`, `.show_page()`, `.update_nav()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (14 nodes): `.fix_date()`, `.graph_view()`, `.on_copy()`, `orders_pendent_view.py`, `GuiEntregas`, `.get_date()`, `.__init__()`, `.on_ativar()`, `.set_dates()`, `.set_enabled()`, `.set_resumo()`, `.set_text()`, `.setup_ui()`, `Área de entregas pendentes: resumo diário com inadimplências.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `__init__.py`, `Metadados centralizados do pacote maria-cacau.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (2 nodes): `App Screenshot - Spreadsheet Loaded State`, `App Screenshot Print - Ready State with Date Selector`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (2 nodes): `App Screenshot - Spreadsheet Load Success Dialog`, `App Screenshot Print - Spreadsheet Load Success Dialog (Early UI)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (1 nodes): `Lê o .json da Service Account, autentica e salva no keychain.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (1 nodes): `Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (1 nodes): `Remove as credenciais do keychain. Retorna False se não havia nada salvo.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (1 nodes): `Define qual planilha vai ser lida pelo ID ou URL do Google Sheets.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (1 nodes): `Retorna as linhas brutas da planilha (lista de listas de strings).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 33`** (1 nodes): `Lê apenas as linhas das N datas mais recentes da aba Cadastro.          Faz dois`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 34`** (1 nodes): `Lê o .json da Service Account, autentica e salva no keychain.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (1 nodes): `Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (1 nodes): `Remove as credenciais do keychain. Retorna False se não havia nada salvo.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (1 nodes): `Define qual planilha vai ser lida pelo ID ou URL do Google Sheets.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `Retorna as linhas brutas da planilha (lista de listas de strings).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `Confirmação de certificado configurado com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `Confirmação de credenciais removidas com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `Confirmação de leitura bem-sucedida da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Confirmação de certificado configurado com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `Confirmação de credenciais removidas com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `Confirmação de leitura bem-sucedida da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Confirmação de leitura bem-sucedida da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `Orquestra a autenticação e o acesso às abas da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Autenticação e acesso ao Google Sheets.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `Lê o .json da Service Account, autentica e salva no keychain.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Define qual planilha vai ser lida pelo ID ou URL do Google Sheets.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `Retorna as linhas brutas da planilha (lista de listas de strings).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GuiMain` connect `Community 1` to `Community 0`, `Community 4`, `Community 5`, `Community 6`, `Community 7`, `Community 8`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **Why does `GuiPopup` connect `Community 1` to `Community 0`, `Community 9`, `Community 4`, `Community 8`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Why does `CacheStorage` connect `Community 5` to `Community 0`, `Community 1`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Are the 9 inferred relationships involving `GuiMain` (e.g. with `Entry point da aplicação. Execute com: python -m maria_cacau` and `CacheStorage`) actually correct?**
  _`GuiMain` has 9 INFERRED edges - model-reasoned connections that need verification._
- **Are the 12 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 12 INFERRED edges - model-reasoned connections that need verification._
- **Are the 7 inferred relationships involving `GuiDados` (e.g. with `_DialogConectarPlanilha` and `_BackgroundWidget`) actually correct?**
  _`GuiDados` has 7 INFERRED edges - model-reasoned connections that need verification._
- **Are the 17 inferred relationships involving `GuiPopup` (e.g. with `CadastroAnalyseHandler` and `Processa os dados da aba Cadastro da planilha Google Sheets.`) actually correct?**
  _`GuiPopup` has 17 INFERRED edges - model-reasoned connections that need verification._