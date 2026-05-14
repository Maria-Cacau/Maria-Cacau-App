# Graph Report - Maria-Cacau-Contagem  (2026-05-13)

## Corpus Check
- 59 files · ~596,687 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 394 nodes · 848 edges · 12 communities detected
- Extraction: 55% EXTRACTED · 45% INFERRED · 0% AMBIGUOUS · INFERRED: 380 edges (avg confidence: 0.64)
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
- [[_COMMUNITY_Community 14|Community 14]]

## God Nodes (most connected - your core abstractions)
1. `GuiPopup` - 31 edges
2. `GuiMain` - 31 edges
3. `AuxWidgets` - 29 edges
4. `SecurityStorage` - 27 edges
5. `ChartWidget` - 24 edges
6. `GuiProdutos` - 24 edges
7. `OrdersView` - 23 edges
8. `AppEvent` - 22 edges
9. `HTTPResponse` - 20 edges
10. `GuiStatusBar` - 20 edges

## Surprising Connections (you probably didn't know these)
- `Processa os dados da aba Cadastro da planilha Google Sheets.` --uses--> `GuiPopup`  [INFERRED]
  core/sheets/handlers/cadastro.py → maria_cacau/design_system/gui_popup.py
- `AuxWidgets` --uses--> `Área de consulta de frete: interface gráfica e lógica de consulta.`  [INFERRED]
  maria_cacau/design_system/aux_widgets.py → features/home/sub_features/freight_query/freight_query_view.py
- `AuxWidgets` --uses--> `Área de Nota Fiscal — em desenvolvimento.`  [INFERRED]
  maria_cacau/design_system/aux_widgets.py → features/home/sub_features/nota_fiscal/nota_fiscal_view.py
- `Entry point da aplicação. Execute com: python -m maria_cacau` --uses--> `GuiMain`  [INFERRED]
  __main__.py → maria_cacau/features/home/home_view.py
- `AppEvent` --uses--> `Autenticação e acesso ao Google Sheets.`  [INFERRED]
  maria_cacau/core/observability.py → core/sheets/service.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (24): AppError, certificado_limpo(), certificado_ok(), planilha_conectada(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso., Confirmação de credenciais removidas com sucesso. (+16 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (26): ABC, GoogleSheetsService, Autenticação e acesso ao Google Sheets., Define qual planilha vai ser lida pelo ID ou URL do Google Sheets., Retorna as linhas brutas da planilha (lista de listas de strings)., Lê todas as linhas da aba Cadastro usando dois passes para economizar API., Lê linhas da aba Cadastro para um conjunto específico de datas.          Mesmo m, Lê linhas da aba Cadastro para um conjunto específico de datas.          Mesmo m (+18 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (38): Exception, API, call(), entity(), Comunicação alto nivel para chamadas de api, O tipo precisa aceitar **kwargs (dataclass ou similar)., HTTPClientContract, LocalClient (+30 more)

### Community 3 - "Community 3"
Cohesion: 0.09
Nodes (20): Enum, Área de entregas pendentes: controller da view., FeatureEvents, Eventos relacionados às entregas pendentes., DeliveryModel, OrdersModel, Models utilizados no módulo, OrdersRepository (+12 more)

### Community 4 - "Community 4"
Cohesion: 0.1
Nodes (11): ChartType, ChartWidget, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov, _short_label(), Área de entregas pendentes: resumo diário com inadimplências., Área de entregas pendentes: resumo diário com inadimplências., r'''Retorna a data selecionada no formato DD/MM/YY (+3 more)

### Community 5 - "Community 5"
Cohesion: 0.1
Nodes (6): AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., AuxWidgets, Factory de widgets PyQt6 reutilizáveis em toda a interface., GuiEntregas, QFrame

### Community 6 - "Community 6"
Cohesion: 0.12
Nodes (17): AuxWidgets, AppEvent, GuiValiCpf, _is_valid_cpf(), Área de validação de CPF: interface gráfica e lógica de verificação., GuiConsFrete, Área de consulta de frete: interface gráfica e lógica de consulta., _BackgroundWidget (+9 more)

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (7): _Observability, Observabilidade centralizada do app., main(), main(), main(), main(), OrdersController

### Community 8 - "Community 8"
Cohesion: 0.14
Nodes (9): CadastroAnalyseHandler, _normalize_headers(), Processa os dados da aba Cadastro da planilha Google Sheets., Orquestra a autenticação e o acesso às abas da planilha., Autentica e aponta para a planilha. Não lê dados ainda., Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê entregas de uma data específica direto da planilha (sem cache global)., Descarta os dados em memória, forçando nova leitura na próxima consulta. (+1 more)

### Community 9 - "Community 9"
Cohesion: 0.29
Nodes (4): _date_field(), DateRangePicker, POC — date picker moderno com QDateEdit + QSS., QWidget

### Community 10 - "Community 10"
Cohesion: 0.5
Nodes (3): asset(), Metadados centralizados do pacote maria-cacau., Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.

### Community 14 - "Community 14"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

## Knowledge Gaps
- **29 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib.`, `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`, `Observabilidade centralizada do app.` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 14`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AppEvent` connect `Community 6` to `Community 0`, `Community 1`, `Community 3`, `Community 7`?**
  _High betweenness centrality (0.194) - this node is a cross-community bridge._
- **Why does `GuiPopup` connect `Community 0` to `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 8`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **Why does `GuiMain` connect `Community 0` to `Community 1`, `Community 4`, `Community 6`, `Community 7`, `Community 8`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Are the 26 inferred relationships involving `GuiPopup` (e.g. with `CadastroAnalyseHandler` and `Processa os dados da aba Cadastro da planilha Google Sheets.`) actually correct?**
  _`GuiPopup` has 26 INFERRED edges - model-reasoned connections that need verification._
- **Are the 11 inferred relationships involving `GuiMain` (e.g. with `Entry point da aplicação. Execute com: python -m maria_cacau` and `AppEvent`) actually correct?**
  _`GuiMain` has 11 INFERRED edges - model-reasoned connections that need verification._
- **Are the 17 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 17 INFERRED edges - model-reasoned connections that need verification._
- **Are the 20 inferred relationships involving `SecurityStorage` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`SecurityStorage` has 20 INFERRED edges - model-reasoned connections that need verification._