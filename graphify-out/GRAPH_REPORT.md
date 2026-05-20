# Graph Report - Maria-Cacau-Contagem  (2026-05-20)

## Corpus Check
- 179 files · ~609,200 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 866 nodes · 1763 edges · 24 communities detected
- Extraction: 62% EXTRACTED · 38% INFERRED · 0% AMBIGUOUS · INFERRED: 675 edges (avg confidence: 0.65)
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
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]

## God Nodes (most connected - your core abstractions)
1. `HTTPResponse` - 25 edges
2. `SheetsController` - 20 edges
3. `DataSourceError` - 20 edges
4. `connect()` - 20 edges
5. `Repository da feature Auth: gerencia storage seguro e chamadas ao backend.` - 18 edges
6. `DeliveryView` - 18 edges
7. `SummaryView` - 17 edges
8. `DSChart` - 16 edges
9. `Controller da feature CPF Validation: conecta signals da view ao ViewModel e tra` - 16 edges
10. `DeliveriesSummary` - 16 edges

## Surprising Connections (you probably didn't know these)
- `AppEvent` --uses--> `AppCoordinator`  [INFERRED]
  maria_cacau/core/observability.py → maria_cacau/app/coordinator.py
- `HTTPResponseError` --calls--> `call()`  [INFERRED]
  maria_cacau/core/network/_errors.py → maria_cacau/core/network/api.py
- `Erros mapeados usados no módulo` --uses--> `HTTPResponse`  [INFERRED]
  maria_cacau/core/network/_errors.py → maria_cacau/core/network/_response.py
- `r"""Erro base da camada de network.` --uses--> `HTTPResponse`  [INFERRED]
  maria_cacau/core/network/_errors.py → maria_cacau/core/network/_response.py
- `configure() não foi chamado antes de usar a lib.` --uses--> `HTTPResponse`  [INFERRED]
  maria_cacau/core/network/_errors.py → maria_cacau/core/network/_response.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (58): GoogleSheetsDataSource, Implementação de DataSourceProtocol para Google Sheets via gspread., _fix_prod4(), normalize(), Normaliza headers inconsistentes da planilha para os valores canônicos dos enums, Renomeia a coluna que segue prod3 para prod4, independente do header atual., Traduz headers reais da planilha para os nomes canônicos definidos nos enums., _rename_at() (+50 more)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (24): DSDialog, DSDialogIcon, DSDialogModel, DSComboBox, DSGroupBox, DeliveryViewData, DSDateInput, asset() (+16 more)

### Community 2 - "Community 2"
Cohesion: 0.04
Nodes (25): ABC, API, ConnectAuthAPI, DisconnectAuthAPI, RemoveSheetAPI, SelectSheetAPI, AuthRepository, _extract_sheet_id() (+17 more)

### Community 3 - "Community 3"
Cohesion: 0.07
Nodes (36): Services, DeliveriesAPI, OrdersSummaryAPI, path(), PaymentsPendentAPI, Endpoints do backend consumidos pela feature Auth., DeliveriesMapper, ErrorMapper (+28 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (13): AppCoordinator, MenuHandler, MainWindow, connect(), BackendServer, main(), Entry point da aplicação. Execute com: python -m maria_cacau, SheetsController (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (39): API, entity(), Comunicação alto nivel para chamadas de api, O tipo precisa aceitar **kwargs (dataclass ou similar)., HTTPClientContract, LocalClient, Realiza as request de fato, Contrato que qualquer client precisa cumprir. (+31 more)

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (30): Retorna pedidos da data informada (DD/MM/YYYY)., DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesRepository, Repositório de entregas — busca e prepara dados da planilha para o DeliveriesSer, Retorna todos os pedidos de uma data como DataFrame bruto., Acessa o data source e entrega um DataFrame para o DeliveriesService.      Não f, get_deliveries() (+22 more)

### Community 7 - "Community 7"
Cohesion: 0.05
Nodes (20): Rotas de autenticação, AuthService, Service de autenticação — gerencia o estado de conexão do DataSource., DataSourceProtocol, Autentica com o dict da service account e guarda o client em memória., Remove o client autenticado da memória. Mantém o sheet_id., Remove a planilha ativa da memória. Mantém as credenciais., Define a planilha ativa e dispara prewarm em background. (+12 more)

### Community 8 - "Community 8"
Cohesion: 0.09
Nodes (12): CpfValidationResult, Models utilizados no módulo, CpfValidationSignals, Canal de comunicação entre o ViewModel e o Controller., CpfValidationUseCase, _is_valid_cpf(), Valida um CPF pela regra dos dois dígitos verificadores (algoritmo da Receita Fe, DSTextInput (+4 more)

### Community 9 - "Community 9"
Cohesion: 0.08
Nodes (13): DSButton, DSButtonState, AppEvent, _Observability, Observabilidade centralizada do app., FeatureEvents, Eventos de observabilidade da feature CPF Validation., DSLoadingHandler (+5 more)

### Community 10 - "Community 10"
Cohesion: 0.07
Nodes (13): _EventBus, AppSession, AuthSignals, DeliverySignals, SheetsSignals, SummarySignals, AuthUseCase, Lê o arquivo JSON, salva em storage seguro e autentica o backend. (+5 more)

### Community 11 - "Community 11"
Cohesion: 0.11
Nodes (6): StatusBarState, DSLabel, StatusBarController, StatusBarView, QLabel, QStatusBar

### Community 12 - "Community 12"
Cohesion: 0.13
Nodes (19): AppError, certificado_limpo(), certificado_ok(), http_error(), planilha_conectada(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso. (+11 more)

### Community 13 - "Community 13"
Cohesion: 0.26
Nodes (22): _customer(), _customization(), _delivery(), _financial(), OrderMapper, _payments(), _products(), Mapeamento de uma linha do DataFrame para o model Order. (+14 more)

### Community 14 - "Community 14"
Cohesion: 0.12
Nodes (9): _date_field(), DateRangePicker, POC — date picker moderno com QDateEdit + QSS., QDateEdit, QPushButton, QWidget, HomeController, HomeFeaturesModel (+1 more)

### Community 15 - "Community 15"
Cohesion: 0.15
Nodes (14): _cast_numeric(), OrdersSummaryRepository, Repositório de pedidos por período — busca e prepara dados da planilha para o Or, Acessa o data source e entrega um DataFrame tipado para o OrdersService.      Ún, Retorna todos os pedidos de um período com colunas numéricas convertidas para fl, _to_dataframe(), get_orders(), Rota de pedidos — GET /orders. (+6 more)

### Community 16 - "Community 16"
Cohesion: 0.22
Nodes (4): DSChartType, DSChart, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., _short_label()

### Community 17 - "Community 17"
Cohesion: 0.27
Nodes (7): handle_backend_error(), handle_data_source_error(), handle_unexpected_error(), BackendError, generic_mapper(), translate(), Exception

### Community 18 - "Community 18"
Cohesion: 0.4
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

## Knowledge Gaps
- **49 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Entry point da aplicação. Execute com: python -m maria_cacau`, `Observabilidade centralizada do app.`, `HTTP métodos disponíveis para uso` (+44 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 19`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `FeatureEvents` connect `Community 9` to `Community 8`, `Community 1`, `Community 10`, `Community 4`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Why does `SheetsController` connect `Community 4` to `Community 1`, `Community 2`, `Community 7`, `Community 9`, `Community 10`, `Community 12`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Why does `connect()` connect `Community 4` to `Community 1`, `Community 7`, `Community 8`, `Community 9`, `Community 10`, `Community 11`, `Community 14`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Are the 23 inferred relationships involving `HTTPResponse` (e.g. with `NetworkError` and `NetworkNotConfiguredError`) actually correct?**
  _`HTTPResponse` has 23 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `SheetsController` (e.g. with `FeatureEvents` and `SheetModel`) actually correct?**
  _`SheetsController` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 19 inferred relationships involving `connect()` (e.g. with `.__init__()` and `._create_features_menu()`) actually correct?**
  _`connect()` has 19 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Entry point da aplicação. Execute com: python -m maria_cacau` to the rest of the system?**
  _49 weakly-connected nodes found - possible documentation gaps or missing edges._