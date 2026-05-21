# Graph Report - Maria-Cacau-App  (2026-05-21)

## Corpus Check
- 174 files · ~18,968 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 848 nodes · 1393 edges · 28 communities detected
- Extraction: 76% EXTRACTED · 24% INFERRED · 0% AMBIGUOUS · INFERRED: 332 edges (avg confidence: 0.79)
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
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]

## God Nodes (most connected - your core abstractions)
1. `DataSourceError` - 20 edges
2. `SheetsController` - 19 edges
3. `connect()` - 19 edges
4. `DSChart` - 15 edges
5. `call()` - 14 edges
6. `SummaryView` - 14 edges
7. `from_response()` - 13 edges
8. `DeliveryView` - 13 edges
9. `StatusBarController` - 12 edges
10. `unexpected_error()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `SheetsController` --uses--> `FeatureEvents`  [INFERRED]
  features/sheets/presentation/controller.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/cpf_validation/domain/events.py
- `SheetsController` --uses--> `SheetModel`  [INFERRED]
  features/sheets/presentation/controller.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/sheets/domain/models.py
- `HTTPClientContract` --uses--> `HTTPResponse`  [INFERRED]
  core/network/_client.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/core/network/_response.py
- `LocalClient` --uses--> `HTTPResponse`  [INFERRED]
  core/network/_client.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/core/network/_response.py
- `Realiza as request de fato` --uses--> `HTTPResponse`  [INFERRED]
  core/network/_client.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/core/network/_response.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.03
Nodes (58): GoogleSheetsDataSource, Implementação de DataSourceProtocol para Google Sheets via gspread., _fix_prod4(), normalize(), Normaliza headers inconsistentes da planilha para os valores canônicos dos enums, Traduz headers reais da planilha para os nomes canônicos definidos nos enums., _rename_at(), _rename_keys() (+50 more)

### Community 1 - "Community 1"
Cohesion: 0.03
Nodes (58): Retorna pedidos da data informada (DD/MM/YYYY)., Retorna pedidos no intervalo de datas informado (DD/MM/YYYY)., Retorna todos os pedidos de uma data como DataFrame bruto., get_deliveries(), Rota de entregas — GET /orders/deliveries., to_response(), DeliveryViewData, _cast_numeric() (+50 more)

### Community 2 - "Community 2"
Cohesion: 0.04
Nodes (41): _EventBus, DeliveriesMapper, ErrorMapper, from_response(), OrdersSummaryMapper, PaymentsMapper, Mappers de HTTPResponse para domain models e de HTTPResponseError para ErrorMode, SummaryRepository (+33 more)

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (26): API, ConnectAuthAPI, DeliveriesAPI, DisconnectAuthAPI, OrdersSummaryAPI, path(), PaymentsPendentAPI, Endpoints do backend consumidos pela feature Auth. (+18 more)

### Community 4 - "Community 4"
Cohesion: 0.05
Nodes (16): DSDialog, DSDialogIcon, DSDialogModel, DSComboBox, asset(), Metadados centralizados do pacote maria-cacau., Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado., AuthController (+8 more)

### Community 5 - "Community 5"
Cohesion: 0.05
Nodes (36): ABC, API, entity(), Comunicação alto nivel para chamadas de api, HTTPClientContract, LocalClient, Realiza as request de fato, Contrato que qualquer client precisa cumprir. (+28 more)

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (10): MenuHandler, connect(), SheetsUseCase, Erro genérico para exceções não tratadas., unexpected_error(), SheetsController, AuthView, SheetsViewModel (+2 more)

### Community 7 - "Community 7"
Cohesion: 0.06
Nodes (14): CpfValidationResult, Models utilizados no módulo, CpfValidationUseCase, _is_valid_cpf(), Valida um CPF pela regra dos dois dígitos verificadores (algoritmo da Receita Fe, DSDateInput, DSTextInput, CpfValidationController (+6 more)

### Community 8 - "Community 8"
Cohesion: 0.09
Nodes (14): DSButtonState, DSChartType, DSChart, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., _short_label(), AppEvent, _Observability, Observabilidade centralizada do app. (+6 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (12): DSButton, DSGroupBox, DSLoadingHandler, DSLoadingHandler, Deve ser chamado no __init__ do componente, após o super().__init__()., Implementar no componente: o que fazer com cada frame do spinner., Mixin que adiciona comportamento de loading animado a qualquer componente QObjec, DeliveryView (+4 more)

### Community 10 - "Community 10"
Cohesion: 0.07
Nodes (26): DeliveriesSummary, DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesRepository, Repositório de entregas — busca e prepara dados da planilha para o DeliveriesSer, Acessa o data source e entrega um DataFrame para o DeliveriesService.      Não f, DeliveriesMapper, DeliveriesService (+18 more)

### Community 11 - "Community 11"
Cohesion: 0.07
Nodes (14): Rotas de autenticação, AuthService, Service de autenticação — gerencia o estado de conexão do DataSource., DataSourceProtocol, Autentica com o dict da service account e guarda o client em memória., Remove o client autenticado da memória. Mantém o sheet_id., Remove a planilha ativa da memória. Mantém as credenciais., Define a planilha ativa e dispara prewarm em background. (+6 more)

### Community 12 - "Community 12"
Cohesion: 0.1
Nodes (6): StatusBarState, DSLabel, StatusBarController, StatusBarView, QLabel, QStatusBar

### Community 13 - "Community 13"
Cohesion: 0.1
Nodes (9): AppCoordinator, MainWindow, main(), Entry point da aplicação. Execute com: python -m maria_cacau, QMainWindow, QWidget, HomeController, HomeFeaturesModel (+1 more)

### Community 14 - "Community 14"
Cohesion: 0.24
Nodes (7): BackendServer, handle_backend_error(), handle_data_source_error(), handle_unexpected_error(), BackendError, generic_mapper(), translate()

### Community 15 - "Community 15"
Cohesion: 0.31
Nodes (2): Backend de armazenamento seguro via arquivo protegido no diretório do usuário., SecurityStorage

### Community 16 - "Community 16"
Cohesion: 0.4
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

### Community 17 - "Community 17"
Cohesion: 0.5
Nodes (1): AppSession

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (1): O tipo precisa aceitar **kwargs (dataclass ou similar).

### Community 28 - "Community 28"
Cohesion: 1.0
Nodes (1): Lê o JSON do backend; cai em http_error genérico se o corpo não for JSON válido.

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (1): Renomeia a coluna que segue prod3 para prod4, independente do header atual.

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (1): Busca pedidos por datas usando dois passes para minimizar chamadas à API.

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): Monta um Order completo a partir de uma linha do DataFrame.

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

## Knowledge Gaps
- **113 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Entry point da aplicação. Execute com: python -m maria_cacau`, `Observabilidade centralizada do app.`, `Erros mapeados usados no módulo` (+108 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 15`** (9 nodes): `Backend de armazenamento seguro via arquivo protegido no diretório do usuário.`, `SecurityStorage`, `.clean_all()`, `.delete()`, `.__init__()`, `._path()`, `.retrieve()`, `.save()`, `security.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (4 nodes): `AppSession`, `.__init__()`, `__init__.py`, `session.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (1 nodes): `O tipo precisa aceitar **kwargs (dataclass ou similar).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (1 nodes): `Lê o JSON do backend; cai em http_error genérico se o corpo não for JSON válido.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `Renomeia a coluna que segue prod3 para prod4, independente do header atual.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `Busca pedidos por datas usando dois passes para minimizar chamadas à API.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Monta um Order completo a partir de uma linha do DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SheetsController` connect `Community 6` to `Community 3`, `Community 4`, `Community 7`, `Community 8`, `Community 11`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `connect()` connect `Community 6` to `Community 4`, `Community 7`, `Community 9`, `Community 11`, `Community 12`, `Community 13`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **Why does `call()` connect `Community 3` to `Community 5`, `Community 14`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `SheetsController` (e.g. with `FeatureEvents` and `SheetModel`) actually correct?**
  _`SheetsController` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 18 inferred relationships involving `connect()` (e.g. with `.__init__()` and `._create_features_menu()`) actually correct?**
  _`connect()` has 18 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `DSChart` (e.g. with `._setup_components()` and `._setup_components()`) actually correct?**
  _`DSChart` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Entry point da aplicação. Execute com: python -m maria_cacau` to the rest of the system?**
  _113 weakly-connected nodes found - possible documentation gaps or missing edges._