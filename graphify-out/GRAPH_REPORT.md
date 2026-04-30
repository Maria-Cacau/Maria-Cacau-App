# Graph Report - Maria-Cacau-Contagem  (2026-04-30)

## Corpus Check
- 37 files · ~11,832 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 267 nodes · 562 edges · 11 communities detected
- Extraction: 56% EXTRACTED · 44% INFERRED · 0% AMBIGUOUS · INFERRED: 248 edges (avg confidence: 0.66)
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
1. `GuiMain` - 31 edges
2. `SecurityStorage` - 27 edges
3. `GuiPopup` - 24 edges
4. `AuxWidgets` - 24 edges
5. `GuiProdutos` - 23 edges
6. `AppEvent` - 21 edges
7. `GuiStatusBar` - 19 edges
8. `ChartWidget` - 18 edges
9. `GoogleSheetsService` - 17 edges
10. `GuiEntregas` - 17 edges

## Surprising Connections (you probably didn't know these)
- `Processa os dados da aba Cadastro da planilha Google Sheets.` --uses--> `GuiPopup`  [INFERRED]
  core/sheets/handlers/cadastro.py → design_system/gui_popup.py
- `AuxWidgets` --uses--> `Área de Nota Fiscal — em desenvolvimento.`  [INFERRED]
  design_system/aux_widgets.py → features/home/sub_features/nota_fiscal/nota_fiscal_view.py
- `main()` --calls--> `GuiMain`  [INFERRED]
  __main__.py → features/home/home_view.py
- `Entry point da aplicação. Execute com: python -m maria_cacau` --uses--> `GuiMain`  [INFERRED]
  __main__.py → features/home/home_view.py
- `GuiEntregas` --uses--> `ChartType`  [INFERRED]
  features/home/sub_features/orders_pendent/orders_pendent_view.py → core/charts.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (20): GoogleSheetsService, Autenticação e acesso ao Google Sheets., Define qual planilha vai ser lida pelo ID ou URL do Google Sheets., Retorna as linhas brutas da planilha (lista de listas de strings)., Lê todas as linhas da aba Cadastro usando dois passes para economizar API., Lê linhas da aba Cadastro para um conjunto específico de datas.          Mesmo m, Lê linhas da aba Cadastro para um conjunto específico de datas.          Mesmo m, Lê o .json da Service Account, autentica e salva em ~/.mariacacau/. (+12 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (7): AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., AuxWidgets, Factory de widgets PyQt6 reutilizáveis em toda a interface., GuiConsFrete, Área de consulta de frete: interface gráfica e lógica de consulta., QFrame

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (16): AuxWidgets, AppEvent, GuiValiCpf, _is_valid_cpf(), Área de validação de CPF: interface gráfica e lógica de verificação., _BackgroundWidget, _DialogConectarPlanilha, _extract_sheet_id() (+8 more)

### Community 3 - "Community 3"
Cohesion: 0.13
Nodes (10): ChartType, ChartWidget, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov, _short_label(), _Observability, Observabilidade centralizada do app., Enum (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (6): _load_sheets(), _save_sheet(), QStatusBar, Autentica e aponta para a planilha. Não lê dados ainda., GuiStatusBar, Barra de status da aplicação: planilha conectada, credenciais e estado de carreg

### Community 5 - "Community 5"
Cohesion: 0.19
Nodes (6): GuiPopup, GuiMain, main(), Entry point da aplicação. Execute com: python -m maria_cacau, QMainWindow, QMessageBox

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (8): CadastroAnalyseHandler, _normalize_headers(), Processa os dados da aba Cadastro da planilha Google Sheets., Orquestra a autenticação e o acesso às abas da planilha., Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê entregas de uma data específica direto da planilha (sem cache global)., Descarta os dados em memória, forçando nova leitura na próxima consulta., SheetsManager

### Community 7 - "Community 7"
Cohesion: 0.13
Nodes (6): ABC, CacheStorage, Backend de cache em arquivo JSON no diretório do usuário., Contrato base para todos os backends de armazenamento., StorageHandler, Backend de armazenamento seguro via arquivo protegido no diretório do usuário.

### Community 8 - "Community 8"
Cohesion: 0.17
Nodes (13): AppError, certificado_limpo(), certificado_ok(), planilha_conectada(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso., Confirmação de credenciais removidas com sucesso. (+5 more)

### Community 9 - "Community 9"
Cohesion: 0.29
Nodes (1): GuiProdutos

### Community 10 - "Community 10"
Cohesion: 0.5
Nodes (3): asset(), Metadados centralizados do pacote maria-cacau., Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.

## Knowledge Gaps
- **21 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib.`, `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`, `Observabilidade centralizada do app.` (+16 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 9`** (14 nodes): `.fix_date()`, `._show_produtos()`, `GuiProdutos`, `.add_to_dict()`, `.dict_to_str()`, `.format_num()`, `.get_date_range()`, `.merge_cols()`, `._on_chart_type_changed()`, `.resumo_dia()`, `.resumo_pedido()`, `.set_resumo()`, `.set_text()`, `.set_ready()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GuiPopup` connect `Community 5` to `Community 1`, `Community 2`, `Community 3`, `Community 4`, `Community 6`, `Community 8`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **Why does `GuiMain` connect `Community 5` to `Community 1`, `Community 2`, `Community 4`, `Community 7`, `Community 9`?**
  _High betweenness centrality (0.173) - this node is a cross-community bridge._
- **Why does `AppEvent` connect `Community 2` to `Community 0`, `Community 3`, `Community 5`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **Are the 11 inferred relationships involving `GuiMain` (e.g. with `Entry point da aplicação. Execute com: python -m maria_cacau` and `AppEvent`) actually correct?**
  _`GuiMain` has 11 INFERRED edges - model-reasoned connections that need verification._
- **Are the 20 inferred relationships involving `SecurityStorage` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`SecurityStorage` has 20 INFERRED edges - model-reasoned connections that need verification._
- **Are the 19 inferred relationships involving `GuiPopup` (e.g. with `CadastroAnalyseHandler` and `Processa os dados da aba Cadastro da planilha Google Sheets.`) actually correct?**
  _`GuiPopup` has 19 INFERRED edges - model-reasoned connections that need verification._
- **Are the 12 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 12 INFERRED edges - model-reasoned connections that need verification._