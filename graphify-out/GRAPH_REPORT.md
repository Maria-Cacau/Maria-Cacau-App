# Graph Report - Maria-Cacau-Contagem  (2026-05-18)

## Corpus Check
- 94 files · ~604,194 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 643 nodes · 1347 edges · 22 communities detected
- Extraction: 55% EXTRACTED · 45% INFERRED · 0% AMBIGUOUS · INFERRED: 604 edges (avg confidence: 0.62)
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
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]

## God Nodes (most connected - your core abstractions)
1. `SecurityStorage` - 36 edges
2. `GuiPopup` - 34 edges
3. `AppEvent` - 33 edges
4. `AuxWidgets` - 31 edges
5. `GuiMain` - 31 edges
6. `ChartWidget` - 26 edges
7. `HTTPResponse` - 25 edges
8. `GuiProdutos` - 25 edges
9. `OrdersView` - 24 edges
10. `GuiStatusBar` - 21 edges

## Surprising Connections (you probably didn't know these)
- `AuxWidgets` --uses--> `Área de consulta de frete: interface gráfica e lógica de consulta.`  [INFERRED]
  maria_cacau/design_system/aux_widgets.py → features/home/sub_features/freight_query/freight_query_view.py
- `AuxWidgets` --uses--> `Área de Nota Fiscal — em desenvolvimento.`  [INFERRED]
  maria_cacau/design_system/aux_widgets.py → features/home/sub_features/nota_fiscal/nota_fiscal_view.py
- `Entry point da aplicação. Execute com: python -m maria_cacau` --uses--> `GuiMain`  [INFERRED]
  __main__.py → maria_cacau/features/home/home_view.py
- `AppEvent` --uses--> `Janela principal da aplicação e orquestração das sub-features.`  [INFERRED]
  maria_cacau/core/observability.py → features/home/home_view.py
- `AppEvent` --uses--> `Área de validação de CPF: interface gráfica e lógica de verificação.`  [INFERRED]
  maria_cacau/core/observability.py → features/home/sub_features/cpf_validation/cpf_validation_view.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (51): GoogleSheetsDataSource, Implementação de DataSourceProtocol para Google Sheets via gspread., PaymentCols, ProductCols, Mapeamento de colunas e tabs da planílha., Colunas fixas da aba Cadastro, agrupadas por domínio., Colunas dos slots de produto (1–7). Usar com .slot(n)., Colunas das parcelas de pagamento (1–6). Usar com .slot(n). (+43 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (19): ChartType, ChartWidget, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov, _short_label(), AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., AuxWidgets (+11 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (31): AppError, certificado_limpo(), certificado_ok(), planilha_conectada(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso., Confirmação de credenciais removidas com sucesso. (+23 more)

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (28): _Observability, Observabilidade centralizada do app., Enum, main(), main(), main(), main(), OrdersController (+20 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (43): BackendServer, Exception, API, call(), entity(), Comunicação alto nivel para chamadas de api, O tipo precisa aceitar **kwargs (dataclass ou similar)., O tipo precisa aceitar **kwargs (dataclass ou similar). (+35 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (35): DataSourceProtocol, Retorna pedidos da data informada (DD/MM/YYYY)., Contrato agnóstico de fonte de dados para pedidos., Retorna True se credentials e sheet estão configurados em memória., DeliveriesSummary, DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesRepository (+27 more)

### Community 6 - "Community 6"
Cohesion: 0.07
Nodes (29): AppEvent, GoogleSheetsService, Autenticação e acesso ao Google Sheets., Define qual planilha vai ser lida pelo ID ou URL do Google Sheets., Define qual planilha vai ser lida pelo ID ou URL do Google Sheets., Retorna as linhas brutas da planilha (lista de listas de strings)., Retorna as linhas brutas da planilha (lista de listas de strings)., Lê todas as linhas da aba Cadastro usando dois passes para economizar API. (+21 more)

### Community 7 - "Community 7"
Cohesion: 0.09
Nodes (22): AuxWidgets, GuiValiCpf, _is_valid_cpf(), Área de validação de CPF: interface gráfica e lógica de verificação., GuiConsFrete, Área de consulta de frete: interface gráfica e lógica de consulta., _BackgroundWidget, _DialogConectarPlanilha (+14 more)

### Community 8 - "Community 8"
Cohesion: 0.26
Nodes (22): _customer(), _customization(), _delivery(), _financial(), OrderMapper, _payments(), _products(), Mapeamento de uma linha do DataFrame para o model Order. (+14 more)

### Community 9 - "Community 9"
Cohesion: 0.13
Nodes (10): CadastroAnalyseHandler, Orquestra a autenticação e o acesso às abas da planilha., Autentica e aponta para a planilha. Não lê dados ainda., Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê entregas de uma data específica direto da planilha (sem cache global)., Lê entregas de uma data específica direto da planilha (sem cache global)., Descarta os dados em memória, forçando nova leitura na próxima consulta. (+2 more)

### Community 10 - "Community 10"
Cohesion: 0.15
Nodes (12): Retorna pedidos no intervalo de datas informado (DD/MM/YYYY)., OrdersRepository, Repositório de pedidos — busca por período para o OrdersService., Retorna todos os pedidos de um período como DataFrame., Acessa o data source e entrega um DataFrame para o OrdersService., Rota de pedidos — GET /orders., OrdersMapper, OrdersService (+4 more)

### Community 11 - "Community 11"
Cohesion: 0.18
Nodes (5): ABC, Backend de cache em arquivo JSON no diretório do usuário., Contrato base para todos os backends de armazenamento., StorageHandler, Backend de armazenamento seguro via arquivo protegido no diretório do usuário.

### Community 12 - "Community 12"
Cohesion: 0.29
Nodes (4): _date_field(), DateRangePicker, POC — date picker moderno com QDateEdit + QSS., QWidget

### Community 13 - "Community 13"
Cohesion: 0.43
Nodes (3): handle_data_source_error(), BackendError, translate()

### Community 14 - "Community 14"
Cohesion: 0.4
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

### Community 15 - "Community 15"
Cohesion: 0.5
Nodes (3): asset(), Metadados centralizados do pacote maria-cacau., Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

### Community 34 - "Community 34"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 35 - "Community 35"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (1): Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): r"""Decodifica o body para um objeto.

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

## Knowledge Gaps
- **64 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib.`, `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`, `Observabilidade centralizada do app.` (+59 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 19`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 34`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `r"""Decodifica o body para um objeto.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AppEvent` connect `Community 6` to `Community 2`, `Community 3`, `Community 7`?**
  _High betweenness centrality (0.196) - this node is a cross-community bridge._
- **Why does `DataSourceProtocol` connect `Community 5` to `Community 2`, `Community 10`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Why does `GuiPopup` connect `Community 2` to `Community 9`, `Community 3`, `Community 1`, `Community 7`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **Are the 29 inferred relationships involving `SecurityStorage` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`SecurityStorage` has 29 INFERRED edges - model-reasoned connections that need verification._
- **Are the 29 inferred relationships involving `GuiPopup` (e.g. with `CadastroAnalyseHandler` and `Processa os dados da aba Cadastro da planilha Google Sheets.`) actually correct?**
  _`GuiPopup` has 29 INFERRED edges - model-reasoned connections that need verification._
- **Are the 31 inferred relationships involving `AppEvent` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`AppEvent` has 31 INFERRED edges - model-reasoned connections that need verification._
- **Are the 19 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 19 INFERRED edges - model-reasoned connections that need verification._