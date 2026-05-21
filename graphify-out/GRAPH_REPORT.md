# Graph Report - Maria-Cacau-App  (2026-05-21)

## Corpus Check
- 174 files · ~18,918 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 848 nodes · 1383 edges · 31 communities detected
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
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]

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
- `FeatureEvents` --uses--> `SheetsController`  [INFERRED]
  /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/cpf_validation/domain/events.py → features/sheets/presentation/controller.py
- `SheetModel` --uses--> `SheetsController`  [INFERRED]
  /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/sheets/domain/models.py → features/sheets/presentation/controller.py
- `HTTPResponse` --uses--> `HTTPClientContract`  [INFERRED]
  /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/core/network/_response.py → core/network/_client.py
- `HTTPResponse` --uses--> `LocalClient`  [INFERRED]
  /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/core/network/_response.py → core/network/_client.py
- `HTTPResponse` --uses--> `Realiza as request de fato`  [INFERRED]
  /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/core/network/_response.py → core/network/_client.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.03
Nodes (57): GoogleSheetsDataSource, Implementação de DataSourceProtocol para Google Sheets via gspread., _fix_prod4(), normalize(), Normaliza headers inconsistentes da planilha para os valores canônicos dos enums, Traduz headers reais da planilha para os nomes canônicos definidos nos enums., _rename_at(), _rename_keys() (+49 more)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (40): _EventBus, DeliveriesMapper, ErrorMapper, from_response(), OrdersSummaryMapper, PaymentsMapper, Mappers de HTTPResponse para domain models e de HTTPResponseError para ErrorMode, SummaryRepository (+32 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (26): API, ConnectAuthAPI, DeliveriesAPI, DisconnectAuthAPI, OrdersSummaryAPI, path(), PaymentsPendentAPI, Endpoints do backend consumidos pela feature Auth. (+18 more)

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (35): ABC, API, entity(), Comunicação alto nivel para chamadas de api, HTTPClientContract, LocalClient, Realiza as request de fato, Contrato que qualquer client precisa cumprir. (+27 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (14): DSDialog, DSDialogIcon, DSDialogModel, DSComboBox, asset(), Metadados centralizados do pacote maria-cacau., Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado., DeliveryController (+6 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (10): MenuHandler, connect(), SheetsUseCase, Erro genérico para exceções não tratadas., unexpected_error(), SheetsController, AuthView, SheetsViewModel (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (14): DSButton, DSGroupBox, DSLoadingHandler, DSLoadingHandler, Deve ser chamado no __init__ do componente, após o super().__init__()., Implementar no componente: o que fazer com cada frame do spinner., Mixin que adiciona comportamento de loading animado a qualquer componente QObjec, DSDateInput (+6 more)

### Community 7 - "Community 7"
Cohesion: 0.07
Nodes (34): Retorna pedidos no intervalo de datas informado (DD/MM/YYYY)., _customer(), _customization(), _delivery(), _financial(), OrderMapper, _payments(), _products() (+26 more)

### Community 8 - "Community 8"
Cohesion: 0.07
Nodes (13): CpfValidationResult, Models utilizados no módulo, CpfValidationUseCase, _is_valid_cpf(), Valida um CPF pela regra dos dois dígitos verificadores (algoritmo da Receita Fe, DSTextInput, CpfValidationController, CpfValidationView (+5 more)

### Community 9 - "Community 9"
Cohesion: 0.07
Nodes (26): DeliveriesSummary, DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesRepository, Repositório de entregas — busca e prepara dados da planilha para o DeliveriesSer, Acessa o data source e entrega um DataFrame para o DeliveriesService.      Não f, DeliveriesMapper, DeliveriesService (+18 more)

### Community 10 - "Community 10"
Cohesion: 0.07
Nodes (15): Rotas de autenticação, AuthService, Service de autenticação — gerencia o estado de conexão do DataSource., DataSourceProtocol, Autentica com o dict da service account e guarda o client em memória., Remove o client autenticado da memória. Mantém o sheet_id., Remove a planilha ativa da memória. Mantém as credenciais., Define a planilha ativa e dispara prewarm em background. (+7 more)

### Community 11 - "Community 11"
Cohesion: 0.08
Nodes (21): Retorna pedidos da data informada (DD/MM/YYYY)., Retorna todos os pedidos de uma data como DataFrame bruto., get_deliveries(), Rota de entregas — GET /orders/deliveries., to_response(), _cast_numeric(), PaymentsRepository, Repositório de pagamentos — busca e prepara dados da planilha para o PaymentsSer (+13 more)

### Community 12 - "Community 12"
Cohesion: 0.1
Nodes (6): StatusBarState, DSLabel, StatusBarController, StatusBarView, QLabel, QStatusBar

### Community 13 - "Community 13"
Cohesion: 0.1
Nodes (9): AppCoordinator, MainWindow, main(), Entry point da aplicação. Execute com: python -m maria_cacau, QMainWindow, QWidget, HomeController, HomeFeaturesModel (+1 more)

### Community 14 - "Community 14"
Cohesion: 0.13
Nodes (11): DSButtonState, AppEvent, _Observability, Observabilidade centralizada do app., Services, FeatureEvents, Eventos de observabilidade da feature CPF Validation., Enum (+3 more)

### Community 15 - "Community 15"
Cohesion: 0.13
Nodes (5): AuthUseCase, Lê o arquivo JSON, salva em storage seguro e autentica o backend., Remove credenciais do storage e desautentica o backend., AuthController, AuthViewModel

### Community 16 - "Community 16"
Cohesion: 0.21
Nodes (4): DSChartType, DSChart, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., _short_label()

### Community 17 - "Community 17"
Cohesion: 0.24
Nodes (7): BackendServer, handle_backend_error(), handle_data_source_error(), handle_unexpected_error(), BackendError, generic_mapper(), translate()

### Community 18 - "Community 18"
Cohesion: 0.31
Nodes (2): Backend de armazenamento seguro via arquivo protegido no diretório do usuário., SecurityStorage

### Community 19 - "Community 19"
Cohesion: 0.4
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

### Community 20 - "Community 20"
Cohesion: 0.5
Nodes (1): AppSession

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (1): O tipo precisa aceitar **kwargs (dataclass ou similar).

### Community 31 - "Community 31"
Cohesion: 1.0
Nodes (1): Lê o JSON do backend; cai em http_error genérico se o corpo não for JSON válido.

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): Renomeia a coluna que segue prod3 para prod4, independente do header atual.

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Busca pedidos por datas usando dois passes para minimizar chamadas à API.

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Monta um Order completo a partir de uma linha do DataFrame.

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

## Knowledge Gaps
- **113 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Entry point da aplicação. Execute com: python -m maria_cacau`, `Observabilidade centralizada do app.`, `Erros mapeados usados no módulo` (+108 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 18`** (9 nodes): `Backend de armazenamento seguro via arquivo protegido no diretório do usuário.`, `SecurityStorage`, `.clean_all()`, `.delete()`, `.__init__()`, `._path()`, `.retrieve()`, `.save()`, `security.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (4 nodes): `AppSession`, `.__init__()`, `__init__.py`, `session.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `O tipo precisa aceitar **kwargs (dataclass ou similar).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (1 nodes): `Lê o JSON do backend; cai em http_error genérico se o corpo não for JSON válido.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `Renomeia a coluna que segue prod3 para prod4, independente do header atual.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Busca pedidos por datas usando dois passes para minimizar chamadas à API.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Monta um Order completo a partir de uma linha do DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SheetsController` connect `Community 5` to `Community 1`, `Community 2`, `Community 4`, `Community 8`, `Community 10`, `Community 14`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Why does `connect()` connect `Community 5` to `Community 4`, `Community 6`, `Community 8`, `Community 10`, `Community 12`, `Community 13`, `Community 15`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Why does `call()` connect `Community 2` to `Community 17`, `Community 3`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `SheetsController` (e.g. with `FeatureEvents` and `SheetModel`) actually correct?**
  _`SheetsController` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 18 inferred relationships involving `connect()` (e.g. with `.__init__()` and `._create_features_menu()`) actually correct?**
  _`connect()` has 18 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `DSChart` (e.g. with `._setup_components()` and `._setup_components()`) actually correct?**
  _`DSChart` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Entry point da aplicação. Execute com: python -m maria_cacau` to the rest of the system?**
  _113 weakly-connected nodes found - possible documentation gaps or missing edges._