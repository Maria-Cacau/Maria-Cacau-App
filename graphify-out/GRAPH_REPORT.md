# Graph Report - Maria-Cacau-App  (2026-09-15)

## Corpus Check
- 231 files · ~27,552 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 7, .icns 1, .ico 1)

## Summary
- 2414 nodes · 4187 edges · 208 communities (136 shown, 37 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 391 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1360d073`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Maria-Cacau-Contagem/maria_cacau/backend/data_source/errors/_errors.py
- Maria-Cacau-Contagem/maria_cacau/features/cpf_validation/presentation/controller.py
- to_response
- AuthController
- Maria-Cacau-Contagem/maria_cacau/core/network/api.py
- SheetsRepository
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/data/repository.py
- .log
- DSButton
- Maria-Cacau-Contagem/maria_cacau/backend/features/orders/shared/models.py
- DataSourceProtocol
- StatusBarController
- ConversionOrderModel
- Enum
- SheetCreateView
- DSChart
- .get_by_period
- Maria-Cacau-Contagem/maria_cacau/core/error/errors.py
- SecurityStorage
- AppSession
- Maria-Cacau-Contagem/maria_cacau/backend/utils/numbers.py
- r"""Indica se a resposta foi bem sucedida (status code 2xx).
- O tipo precisa aceitar **kwargs (dataclass ou similar).
- Lê o JSON do backend; cai em http_error genérico se o corpo não for JSON válido.
- shared/mapper.py
- SummaryController
- Renomeia a coluna que segue prod3 para prod4, independente do header atual.
- Busca pedidos por datas usando dois passes para minimizar chamadas à API.
- Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.
- Faz cast numérico de uma coluna se ela existir no DataFrame.
- Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.
- Faz cast numérico de uma coluna se ela existir no DataFrame.
- SheetModel
- Converte uma linha do DataFrame (vinda do SheetsRepository) em um Order.
- Monta um Order completo a partir de uma linha do DataFrame.
- Normaliza uma data para DD/MM/YYYY aceitando os formatos DD/MM/YY e DD/MM/YYYY.
- Converte linhas da planilha em lista de dicts usando o cabeçalho como chaves (lo
- Agrupa números de linha consecutivos em ranges A1 notation e divide em batches d
- Retorna o conjunto de todas as datas (DD/MM/YYYY) entre start e end, inclusive.
- Serializa o resultado do OrdersService para dict JSON-ready.
- Busca e monta os pedidos de um período.
- Retorna todos os pedidos do período informado.
- maria_cacau/backend/data_source/errors/_errors.py
- maria_cacau/features/cpf_validation/presentation/controller.py
- maria_cacau/features/auth/presentation/controller.py
- maria_cacau/backend/features/auth/route.py
- MetaConversionController
- maria_cacau/backend/features/orders/subfeatures/deliveries/service.py
- HTTPResponse
- maria_cacau/core/error/errors.py
- maria_cacau/features/home/sub_features/delivery/data/repository.py
- maria_cacau/backend/data_source/__init__.py
- deliveries/response/schema.json
- _utils.py
- DSButton
- conversion/service.py
- AppCoordinator
- DSChart
- AuthRepository
- properties
- conversion/errors.py
- call
- SummaryView
- GoogleSheetsDataSource
- DataSourceProtocol
- properties
- Maria-Cacau-Contagem/maria_cacau/backend/data_source/sheet_mapper.py
- DeliveryView
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/presentation/controller.py
- properties
- utils/__init__.py
- maria_cacau/design_system/components/__init__.py
- StatusBarController
- DSDialog
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/domain/models.py
- orders/service.py
- orders/route.py
- user_data
- SummaryView
- _SheetsViewModel
- Maria-Cacau-Contagem/maria_cacau/backend/data_source/_normalizer.py
- properties
- $defs
- SheetsController
- payments/response/schema.json
- API
- StorageHandler
- properties
- unexpected_error
- Maria-Cacau-Contagem/maria_cacau/core/network/_errors.py
- API
- list/schema.json
- _security.py
- Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/payments/service.py
- connect
- from_response
- unexpected_error
- payload.py
- KeychainStorage
- ProductItem
- sheets/presentation/controller.py
- FileStorage
- StorageIndex
- SecurityStorage
- properties
- Maria-Cacau-Contagem/maria_cacau/core/network/_config.py
- DeliveryView
- CacheStorage
- properties
- Maria-Cacau-Contagem/maria_cacau/core/network/_observability.py
- GoogleSheetsDataSource
- Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/payments/repository.py
- storage/handler.py
- .get_by_date
- AuthUseCase
- properties
- Backend
- DSDateInput
- CacheStorage
- ErrorModel
- maria_cacau/backend/_server.py
- maria_cacau/core/observability.py
- _SheetsViewModel
- Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/deliveries/service.py
- to_datetime
- maria_cacau/core/network/__init__.py
- MetaConversionView
- CPF Validation
- Delivery
- Summary
- DSTextView
- Maria Cacau — App
- deliveries/response/example.json
- DSTextView
- BackendError
- properties
- payments/response/example.json
- AuthViewModel
- maria_cacau/backend/features/sheet/route.py
- HomeFeaturesModel
- DSLoadingHandler
- maria-cacau
- Mapeamento de uma linha do DataFrame para o model Order.
- Service e Mapper de resumo de pedidos por período.
- CustomData
- Meta
- Receiver
- AuthController
- BackendError
- UserData
- ConnectAuthAPI
- item/example.json
- address
- financial
- products
- maria_cacau/features/auth/data/repository.py
- AuthView
- customer
- delivery
- receiver
- event.schema.json
- maria_cacau/core/storage/__init__.py
- Maria-Cacau-Contagem/maria_cacau/design_system/components/chart/chart_widget.py
- customization
- item/schema.json
- list/example.json
- DSGroupBox
- meta
- ct
- event_id
- fn
- st
- zp

## God Nodes (most connected - your core abstractions)
1. `ErrorModel` - 30 edges
2. `SheetModel` - 29 edges
3. `DataSourceError` - 28 edges
4. `_SheetsViewModel` - 27 edges
5. `HTTPResponse` - 27 edges
6. `API` - 26 edges
7. `MetaConversionView` - 25 edges
8. `SheetsController` - 23 edges
9. `unexpected_error()` - 20 edges
10. `DSChart` - 20 edges

## Surprising Connections (you probably didn't know these)
- `main()` --calls--> `AppCoordinator`  [INFERRED]
  maria_cacau/__main__.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/app/coordinator.py
- `from_response()` --calls--> `DeliveryCount`  [INFERRED]
  /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/data/mapper.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/domain/models.py
- `from_response()` --calls--> `PendentOrder`  [INFERRED]
  /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/data/mapper.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/domain/models.py
- `AppCoordinator` --uses--> `MainWindow`  [INFERRED]
  maria_cacau/app/coordinator.py → maria_cacau/app/window.py
- `AppCoordinator` --uses--> `BackendServer`  [INFERRED]
  maria_cacau/app/coordinator.py → maria_cacau/backend/_server.py

## Import Cycles
- 3-file cycle: `/Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/__init__.py -> /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/_google_sheets.py -> /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/_viewmodel.py -> /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/__init__.py`
- 3-file cycle: `maria_cacau/backend/data_source/__init__.py -> maria_cacau/backend/data_source/_google_sheets.py -> maria_cacau/backend/data_source/_viewmodel.py -> maria_cacau/backend/data_source/__init__.py`

## Communities (208 total, 37 thin omitted)

### Community 0 - "Maria-Cacau-Contagem/maria_cacau/backend/data_source/errors/_errors.py"
Cohesion: 0.10
Nodes (19): ApiQuotaExceededError, ApiUnexpectedResponseError, CredentialsFileCorruptedError, CredentialsFileNotFoundError, CredentialsFormatError, CredentialsSaveError, DataSourceError, DataSourceNotReadyError (+11 more)

### Community 1 - "Maria-Cacau-Contagem/maria_cacau/features/cpf_validation/presentation/controller.py"
Cohesion: 0.17
Nodes (6): CpfValidationResult, Models utilizados no módulo, CpfValidationUseCase, _is_valid_cpf(), Valida um CPF pela regra dos dois dígitos verificadores (algoritmo da Receita Fe, CpfValidationViewModel

### Community 2 - "to_response"
Cohesion: 0.29
Nodes (5): get_deliveries(), Rota de entregas — GET /orders/deliveries., to_response(), get_orders(), Rota de pedidos — GET /orders.

### Community 3 - "AuthController"
Cohesion: 0.09
Nodes (9): BackendServer, AuthController, Controller da feature CPF Validation: conecta signals da view ao ViewModel e tra, AuthView, View da feature CPF Validation: dialog para validação de CPF., view_title(), AuthViewModel, ViewModel da feature CPF Validation: executa o UseCase e emite resultado via sig (+1 more)

### Community 4 - "Maria-Cacau-Contagem/maria_cacau/core/network/api.py"
Cohesion: 0.15
Nodes (8): API, entity(), Comunicação alto nivel para chamadas de api, HTTP métodos disponíveis para uso, HTTPRequest, Dados e parâmetros de uma request, HTTPResponse, r"""Decodifica o body para um objeto.

### Community 5 - "SheetsRepository"
Cohesion: 0.21
Nodes (6): RemoveSheetAPI, SelectSheetAPI, _extract_sheet_id(), Retorna o sheet_id da última planilha salva em cache, sem HTTP., SheetsRepository, SheetModel

### Community 6 - "Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/data/repository.py"
Cohesion: 0.17
Nodes (5): OrdersSummaryAPI, path(), Endpoints do backend consumidos pela feature Auth., Repository da feature Auth: gerencia storage seguro e chamadas ao backend., SummaryRepository

### Community 7 - ".log"
Cohesion: 0.14
Nodes (4): DeliveryController, Inicia a consulta: trava a view, dispara o ViewModel e registra o timestamp para, Recebe o resultado do ViewModel, atualiza a view e loga a duração da consulta., SummaryController

### Community 8 - "DSButton"
Cohesion: 0.13
Nodes (7): DSButton, DSLoadingHandler, DSLoadingHandler, Deve ser chamado no __init__ do componente, após o super().__init__()., Implementar no componente: o que fazer com cada frame do spinner., Mixin que adiciona comportamento de loading animado a qualquer componente QObjec, QPushButton

### Community 9 - "Maria-Cacau-Contagem/maria_cacau/backend/features/orders/shared/models.py"
Cohesion: 0.17
Nodes (10): Address, Customer, Customization, Delivery, Event, Financial, Order, PaymentItem (+2 more)

### Community 10 - "DataSourceProtocol"
Cohesion: 0.07
Nodes (15): Rotas de autenticação, AuthService, Service de autenticação — gerencia o estado de conexão do DataSource., DataSourceProtocol, Autentica com o dict da service account e guarda o client em memória., Remove o client autenticado da memória. Mantém o sheet_id., Remove a planilha ativa da memória. Mantém as credenciais., Define a planilha ativa e dispara prewarm em background. (+7 more)

### Community 11 - "StatusBarController"
Cohesion: 0.07
Nodes (9): AppCoordinator, MainWindow, StatusBarState, DSLabel, StatusBarController, StatusBarView, QLabel, QMainWindow (+1 more)

### Community 12 - "ConversionOrderModel"
Cohesion: 0.10
Nodes (15): date, ConversionAPI, OrderAPI, Definição dos endpoints do backend consumidos pela feature Meta Conversion., OrderMapper, Mapper de HTTPResponse para o domain model da feature., MetaConversionRepository, Repository da feature Meta Conversion: chama as APIs e converte erros HTTP em… (+7 more)

### Community 13 - "Enum"
Cohesion: 0.28
Nodes (5): DSButtonState, Services, FeatureEvents, Eventos de observabilidade da feature CPF Validation., Enum

### Community 16 - ".get_by_period"
Cohesion: 0.24
Nodes (7): Retorna pedidos no intervalo de datas informado (DD/MM/YYYY)., _cast_numeric(), OrdersSummaryRepository, Repositório de pedidos por período — busca e prepara dados da planilha para o Or, Acessa o data source e entrega um DataFrame tipado para o OrdersService.      Ún, Retorna todos os pedidos de um período com colunas numéricas convertidas para fl, _to_dataframe()

### Community 17 - "Maria-Cacau-Contagem/maria_cacau/core/error/errors.py"
Cohesion: 0.17
Nodes (12): AppError, certificado_limpo(), certificado_ok(), planilha_conectada(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso., Confirmação de credenciais removidas com sucesso. (+4 more)

### Community 20 - "Maria-Cacau-Contagem/maria_cacau/backend/utils/numbers.py"
Cohesion: 0.50
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

### Community 32 - "shared/mapper.py"
Cohesion: 0.05
Nodes (46): Customer, Customization, Delivery, Financial, OrderMapper, Order, Mapeamento de uma linha do DataFrame para o model Order., Converte uma linha de pedido (vinda do repository da feature) em um Order. (+38 more)

### Community 41 - "SummaryController"
Cohesion: 0.07
Nodes (27): OrdersSummaryAPI, Definição do endpoint do backend consumido pela feature Summary., OrdersSummaryMapper, Mappers de HTTPResponse para domain models., Repository da feature Summary: chama a API e converte erros HTTP em ErrorModel., SummaryRepository, FeatureEvents, Enum (+19 more)

### Community 55 - "SheetModel"
Cohesion: 0.19
Nodes (5): _extract_sheet_id(), Retorna o sheet_id da última planilha salva em cache, sem HTTP., SheetsRepository, SheetModel, SheetsUseCase

### Community 65 - "maria_cacau/backend/data_source/errors/_errors.py"
Cohesion: 0.08
Nodes (25): ApiQuotaExceededError, ApiUnexpectedResponseError, CredentialsFileCorruptedError, CredentialsFileNotFoundError, CredentialsFormatError, CredentialsSaveError, DataSourceError, DataSourceNotReadyError (+17 more)

### Community 66 - "maria_cacau/features/cpf_validation/presentation/controller.py"
Cohesion: 0.05
Nodes (25): FeatureEvents, Enum, Eventos de observabilidade da feature CPF Validation., CpfValidationResult, Models utilizados no módulo, CpfValidationSignals, QObject, Canal de comunicação entre o ViewModel e o Controller. (+17 more)

### Community 67 - "maria_cacau/features/auth/presentation/controller.py"
Cohesion: 0.21
Nodes (8): FeatureEvents, Enum, Eventos observáveis da feature Auth., AuthSignals, QObject, Canal de comunicação entre o ViewModel (background thread) e o Controller (main…, Controller da feature Auth: conecta signals da view ao ViewModel e atualiza…, ViewModel da feature Auth: executa o UseCase em background e emite resultados…

### Community 68 - "maria_cacau/backend/features/auth/route.py"
Cohesion: 0.15
Nodes (7): connect(), disconnect(), delete, Rotas de autenticação, AuthService, Service de autenticação — gerencia o estado de conexão do DataSource., post

### Community 69 - "MetaConversionController"
Cohesion: 0.11
Nodes (10): FeatureEvents, Enum, Eventos de observabilidade da feature Meta Conversion., MetaConversionSignals, QObject, Canal de comunicação entre o ViewModel (background thread) e o Controller (main…, MetaConversionController, Controller da feature Meta Conversion: conecta signals da view ao ViewModel e… (+2 more)

### Community 70 - "maria_cacau/backend/features/orders/subfeatures/deliveries/service.py"
Cohesion: 0.12
Nodes (18): DeliveriesSummary, DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesRepository, DataFrame, Repositório de entregas — busca e prepara dados da planilha para o…, Retorna todos os pedidos de uma data como DataFrame bruto., Acessa o data source e entrega um DataFrame para o DeliveriesService. Não faz… (+10 more)

### Community 71 - "HTTPResponse"
Cohesion: 0.14
Nodes (15): HTTPClientContract, LocalClient, Protocol, Realiza as request de fato, Contrato que qualquer client precisa cumprir., Roteia requests para o backend local (in-process). Nenhuma rede envolvida —…, NetworkEvent, Enum (+7 more)

### Community 72 - "maria_cacau/core/error/errors.py"
Cohesion: 0.22
Nodes (13): AppError, certificado_limpo(), certificado_ok(), http_error(), planilha_conectada(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso. (+5 more)

### Community 73 - "maria_cacau/features/home/sub_features/delivery/data/repository.py"
Cohesion: 0.05
Nodes (34): Enum, Services, DeliveriesAPI, PaymentsPendentAPI, Definição dos endpoints do backend consumidos pela feature Delivery., DeliveriesMapper, PaymentsMapper, DeliveriesSummary (+26 more)

### Community 74 - "maria_cacau/backend/data_source/__init__.py"
Cohesion: 0.16
Nodes (14): Normaliza headers inconsistentes da planilha para os valores canônicos dos…, PaymentCols, ProductCols, StrEnum, Mapeamento de colunas e tabs da planílha., Colunas dos slots de produto (1–7). Usar com .slot(n)., Colunas das parcelas de pagamento (1–6). Usar com .slot(n)., SheetTabs (+6 more)

### Community 75 - "deliveries/response/schema.json"
Cohesion: 0.08
Nodes (23): minimum, type, items, type, properties, required, type, properties (+15 more)

### Community 76 - "_utils.py"
Cohesion: 0.11
Nodes (20): SheetFieldNotWritableError, _is_valid_date(), _SheetsGuard, date_range(), DateFormat, normalize_date(), normalize_header(), normalize_order_number() (+12 more)

### Community 77 - "DSButton"
Cohesion: 0.32
Nodes (4): DSButton, DSButtonState, Enum, View da feature Delivery: resumo diário de entregas e pagamentos pendentes.

### Community 78 - "conversion/service.py"
Cohesion: 0.16
Nodes (16): Colunas fixas da aba Cadastro, agrupadas por domínio., SheetCols, ConversionEvent, Enum, Eventos de observabilidade do envio de conversão., StrEnum, Vocabulário aceito na coluna `Meta Status`. A lista suspensa da planilha só…, SheetStatus (+8 more)

### Community 79 - "AppCoordinator"
Cohesion: 0.27
Nodes (4): AppCoordinator, main(), Entry point da aplicação. Execute com: python -m maria_cacau, QApplication

### Community 80 - "DSChart"
Cohesion: 0.21
Nodes (6): DSChartType, Enum, DSChart, QWidget, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., _short_label()

### Community 81 - "AuthRepository"
Cohesion: 0.17
Nodes (6): AuthRepository, Reenvia credenciais ao backend com o sheet_id atual., Lê credenciais do storage sem fazer chamada HTTP., Remove credenciais do storage e desautentica o backend., AppInitUseCase, Caso de uso: gerencia credenciais da service account.

### Community 82 - "properties"
Cohesion: 0.09
Nodes (24): $ref, description, type, Delivery, Event, description, properties, required (+16 more)

### Community 83 - "conversion/errors.py"
Cohesion: 0.20
Nodes (15): ConversionError, MetaAuthError, MetaNotConfiguredError, MetaRejectedError, MetaUnavailableError, NoContactError, NoPaymentDateError, OrderIgnoredError (+7 more)

### Community 84 - "call"
Cohesion: 0.14
Nodes (9): ConnectAuthAPI, DisconnectAuthAPI, AuthRepository, Lê o JSON do caminho, envia ao backend e persiste apenas se der sucesso., Reenvia credenciais ao backend com o sheet_id atual., Lê credenciais do storage sem fazer chamada HTTP., Remove credenciais do storage e desautentica o backend., AppInitUseCase (+1 more)

### Community 85 - "SummaryView"
Cohesion: 0.21
Nodes (3): DSComboBox, SummaryView, QComboBox

### Community 86 - "GoogleSheetsDataSource"
Cohesion: 0.14
Nodes (5): GoogleSheetsDataSource, Implementação de DataSourceProtocol para Google Sheets via gspread., Renomeia a coluna que segue prod3 para prod4, independente do header atual.…, Traduz headers reais da planilha para os nomes canônicos definidos nos enums.…, SheetNormalizer

### Community 87 - "DataSourceProtocol"
Cohesion: 0.09
Nodes (12): DataSourceProtocol, Protocol, Autentica com o dict da service account e guarda o client em memória., Remove o client autenticado da memória. Mantém o sheet_id., Remove a planilha ativa da memória. Mantém as credenciais., Define a planilha ativa e dispara prewarm em background., Retorna pedidos da data informada (DD/MM/YYYY)., Retorna pedidos no intervalo de datas informado (DD/MM/YYYY). (+4 more)

### Community 88 - "properties"
Cohesion: 0.09
Nodes (22): $ref, $ref, $ref, $ref, $ref, properties, description, type (+14 more)

### Community 89 - "Maria-Cacau-Contagem/maria_cacau/backend/data_source/sheet_mapper.py"
Cohesion: 0.14
Nodes (11): PaymentCols, ProductCols, Mapeamento de colunas e tabs da planílha., Colunas fixas da aba Cadastro, agrupadas por domínio., Colunas dos slots de produto (1–7). Usar com .slot(n)., Colunas das parcelas de pagamento (1–6). Usar com .slot(n)., SheetCols, SheetTabs (+3 more)

### Community 91 - "Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/presentation/controller.py"
Cohesion: 0.17
Nodes (7): CpfValidationSignals, DeliverySignals, Canal de comunicação entre o ViewModel e o Controller., SummarySignals, _products_lines(), SummaryViewModel, QObject

### Community 92 - "properties"
Cohesion: 0.10
Nodes (21): properties, type, type, type, type, type, type, city (+13 more)

### Community 93 - "utils/__init__.py"
Cohesion: 0.20
Nodes (15): build_user_data(), _hash(), Hash e montagem do `user_data` da Meta CAPI. A normalização de CEP, cidade/UF e…, Monta o bloco `user_data` com hash, a partir do dict devolvido pelo data…, normalize_zip(), Utilitários de endereço brasileiro: CEP e o par cidade/UF., Separa `"Rio de Janeiro - RJ"` em `("riodejaneiro", "rj")`. Usar a cidade crua…, UF pela faixa do CEP. Preferível à UF digitada na cidade, que tem erros de… (+7 more)

### Community 94 - "maria_cacau/design_system/components/__init__.py"
Cohesion: 0.25
Nodes (7): DSDialog, DSDialogIcon, DSDialogModel, Enum, asset(), Metadados centralizados do pacote maria-cacau., Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.

### Community 95 - "StatusBarController"
Cohesion: 0.07
Nodes (13): MenuHandler, QMenu, MainWindow, HomeController, HomeFeaturesModel, HomeView, QWidget, Enum (+5 more)

### Community 96 - "DSDialog"
Cohesion: 0.20
Nodes (4): DSDialog, DSDialogIcon, DSDialogModel, QMessageBox

### Community 97 - "Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/domain/models.py"
Cohesion: 0.14
Nodes (9): DeliveriesSummary, DeliveryCount, DeliveryModel, DeliveryViewData, PendentOrder, DeliveryUseCase, Busca deliveries e payments em paralelo e retorna o modelo consolidado., DeliveryViewModel (+1 more)

### Community 98 - "orders/service.py"
Cohesion: 0.16
Nodes (11): OrdersRepository, DataFrame, Repositório de pedidos — busca e prepara dados da planilha para o OrdersService., Acessa o data source e entrega um DataFrame tipado para o OrdersService. Único…, Retorna todos os pedidos de um período com colunas numéricas convertidas para…, Retorna o pedido numa DataFrame de uma linha, ou vazia se não existir., Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor., Faz cast numérico de uma coluna se ela existir no DataFrame. (+3 more)

### Community 99 - "orders/route.py"
Cohesion: 0.15
Nodes (12): check_connection(), get_order(), get_orders(), before_request, get, Rotas de pedidos — GET /orders e GET /orders/<pedido>, e registro das…, OrdersMapper, Order (+4 more)

### Community 100 - "user_data"
Cohesion: 0.11
Nodes (17): action_source, custom_data, currency, value, event_id, event_name, event_time, $schema (+9 more)

### Community 102 - "_SheetsViewModel"
Cohesion: 0.13
Nodes (13): Client, SheetColumnNotFoundError, handle_api(), Busca exata pelo número do pedido. Com a linha já conhecida, lê só ela e…, Encapsula o acesso à planilha: fetch e escrita, com schema, aba e linhas de…, Atualiza os campos informados, num único `batch_update`. O cabeçalho e a linha…, Localiza a linha do pedido pela chave, lendo só a coluna PEDIDO., Busca as linhas informadas, em batches de até 100 ranges, e normaliza o… (+5 more)

### Community 103 - "Maria-Cacau-Contagem/maria_cacau/backend/data_source/_normalizer.py"
Cohesion: 0.21
Nodes (9): _fix_prod4(), normalize(), Normaliza headers inconsistentes da planilha para os valores canônicos dos enums, Traduz headers reais da planilha para os nomes canônicos definidos nos enums., _rename_at(), _rename_keys(), SheetNormalizer, fetch() (+1 more)

### Community 104 - "properties"
Cohesion: 0.11
Nodes (18): description, type, type, properties, type, amount_pendent, discount, pay_on_pickup (+10 more)

### Community 105 - "$defs"
Cohesion: 0.12
Nodes (15): description, required, type, $defs, Address, Financial, Order, description (+7 more)

### Community 107 - "payments/response/schema.json"
Cohesion: 0.14
Nodes (13): description, $ref, items, type, properties, orders, total, required (+5 more)

### Community 108 - "API"
Cohesion: 0.13
Nodes (12): EntityT, API, ABC, O tipo precisa aceitar **kwargs (dataclass ou similar)., HTTPMethod, StrEnum, HTTP métodos disponíveis para uso, Dados e parâmetros de uma request (+4 more)

### Community 109 - "StorageHandler"
Cohesion: 0.21
Nodes (6): Backend de cache em arquivo JSON no diretório do usuário., Backend de armazenamento seguro via arquivo protegido no diretório do usuário., ABC, T, Contrato base para todos os backends de armazenamento., StorageHandler

### Community 110 - "properties"
Cohesion: 0.13
Nodes (15): type, description, properties, required, type, Customer, description, type (+7 more)

### Community 111 - "unexpected_error"
Cohesion: 0.20
Nodes (4): Exception, Erro genérico para exceções não tratadas., unexpected_error(), SheetsViewModel

### Community 112 - "Maria-Cacau-Contagem/maria_cacau/core/network/_errors.py"
Cohesion: 0.22
Nodes (9): HTTPRequestError, HTTPResponseError, NetworkError, NetworkNotConfiguredError, Erros mapeados usados no módulo, r"""Erro base da camada de network., configure() não foi chamado antes de usar a lib., Erro antes de receber resposta (conectividade, timeout, URL inválida). (+1 more)

### Community 113 - "API"
Cohesion: 0.31
Nodes (4): API, DeliveriesAPI, PaymentsPendentAPI, OrdersRepository

### Community 114 - "list/schema.json"
Cohesion: 0.14
Nodes (13): description, $ref, items, type, properties, orders, total, required (+5 more)

### Community 115 - "_security.py"
Cohesion: 0.24
Nodes (7): Enum, Eventos observáveis do `SecurityStorage`. O log nunca pode conter o valor do…, StorageEvent, Índice de chave → destino do `SecurityStorage`. É dica, não verdade: se sumir…, Enum, Destino possível de um segredo no `SecurityStorage`, e a regra pura que escolhe…, `SecurityStorage`: fachada que decide entre Keychain e arquivo, e mantém o…

### Community 116 - "Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/payments/service.py"
Cohesion: 0.18
Nodes (8): get_payments_pendent(), Rota de pagamentos — GET /orders/payments-pendent., PaymentsMapper, PaymentsService, Service e Mapper de pagamentos pendentes., Serializa o resultado do PaymentsService para dict JSON-ready., Filtra pedidos com pagamento pendente e monta os objetos de domínio., Retorna pedidos com amount_pendent > 0 para a data informada.

### Community 117 - "connect"
Cohesion: 0.15
Nodes (4): connect(), DSTextInput, CpfValidationController, CpfValidationView

### Community 118 - "from_response"
Cohesion: 0.13
Nodes (15): DeliveriesMapper, ErrorMapper, from_response(), OrdersSummaryMapper, PaymentsMapper, Mappers de HTTPResponse para domain models e de HTTPResponseError para ErrorMode, NoCachedCredentialsError, DaySummary (+7 more)

### Community 119 - "unexpected_error"
Cohesion: 0.12
Nodes (4): SheetsUseCase, Erro genérico para exceções não tratadas., unexpected_error(), SheetsViewModel

### Community 120 - "payload.py"
Cohesion: 0.22
Nodes (11): build_event(), event_id_from_order_number(), event_time_from_payment_date(), datetime, Monta o evento `Purchase` a partir do dict do pedido devolvido pelo data source., `26512,1` → `26512-1`. Só troca o separador — truncar o decimal destruiria a…, `min(23:59:59 do dia do 1º pagamento, agora)`, em `America/Sao_Paulo`. A `Data…, Monta o evento `Purchase` completo, pronto para a Graph API. (+3 more)

### Community 121 - "KeychainStorage"
Cohesion: 0.18
Nodes (5): KeychainStorage, Backend de armazenamento seguro via cofre do sistema operacional (Keychain /…, Backend puro: só conhece o keyring. Não decide destino, não sabe de arquivo., No-op: o `keyring` não tem uma operação de "apagar tudo" — só apaga chave por…, _set_platform_backend()

### Community 122 - "ProductItem"
Cohesion: 0.14
Nodes (14): ProductItem, type, description, minimum, type, description, properties, required (+6 more)

### Community 123 - "sheets/presentation/controller.py"
Cohesion: 0.18
Nodes (7): _EventBus, QObject, AppSession, FeatureEvents, Enum, QObject, SheetsSignals

### Community 124 - "FileStorage"
Cohesion: 0.31
Nodes (3): FileStorage, Path, Backend puro: só conhece o arquivo, sem lógica de decisão — quem escolhe usar…

### Community 126 - "SecurityStorage"
Cohesion: 0.29
Nodes (6): Decide o destino de `data`. `preferred` é a vontade do chamador; o tamanho pode…, resolve(), StorageLocation, `location` é preferência do chamador, não garantia — o resolver pode rebaixá-la., Keychain → pasta. Sem keychain disponível, só a pasta., SecurityStorage

### Community 127 - "properties"
Cohesion: 0.15
Nodes (13): const, description, $ref, const, description, type, properties, action_source (+5 more)

### Community 128 - "Maria-Cacau-Contagem/maria_cacau/core/network/_config.py"
Cohesion: 0.20
Nodes (9): clear_override(), configure(), get_client(), override(), Configurações globais para uso do módulo, Configura o client ativo., Substitui o client — útil para testes ou WireMock., Remove o override. Volta ao client padrão. (+1 more)

### Community 129 - "DeliveryView"
Cohesion: 0.15
Nodes (6): DSGroupBox, DSDateInput, DeliveryView, QDateEdit, QGroupBox, QWidget

### Community 130 - "CacheStorage"
Cohesion: 0.31
Nodes (3): Any, CacheStorage, Path

### Community 131 - "properties"
Cohesion: 0.15
Nodes (13): description, $ref, description, $ref, description, $ref, description, $ref (+5 more)

### Community 132 - "Maria-Cacau-Contagem/maria_cacau/core/network/_observability.py"
Cohesion: 0.22
Nodes (6): AppEvent, _Observability, Observabilidade centralizada do app., NetworkEvent, Observabilidade da camada de network., track()

### Community 134 - "Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/payments/repository.py"
Cohesion: 0.28
Nodes (6): _cast_numeric(), PaymentsRepository, Repositório de pagamentos — busca e prepara dados da planilha para o PaymentsSer, Acessa o data source e entrega um DataFrame tipado para o PaymentsService., Retorna todos os pedidos de uma data com colunas numéricas convertidas para floa, _to_dataframe()

### Community 135 - "storage/handler.py"
Cohesion: 0.29
Nodes (3): ABC, Contrato base para todos os backends de armazenamento., StorageHandler

### Community 136 - ".get_by_date"
Cohesion: 0.17
Nodes (7): Retorna pedidos da data informada (DD/MM/YYYY)., DeliveriesRepository, Repositório de entregas — busca e prepara dados da planilha para o DeliveriesSer, Retorna todos os pedidos de uma data como DataFrame bruto., Acessa o data source e entrega um DataFrame para o DeliveriesService.      Não f, ErrorModel, Exception

### Community 137 - "AuthUseCase"
Cohesion: 0.25
Nodes (4): AuthUseCase, Regra de negócios: validação matemática de CPF., Lê o arquivo JSON, salva em storage seguro e autentica o backend., Remove credenciais do storage e desautentica o backend.

### Community 138 - "properties"
Cohesion: 0.15
Nodes (13): minimum, type, type, PaymentItem, minimum, type, description, properties (+5 more)

### Community 139 - "Backend"
Cohesion: 0.25
Nodes (7): Auth — `/auth`, Backend, Como funciona, Erros, Orders — `/orders`, Rotas disponíveis, Sheet — `/sheet`

### Community 140 - "DSDateInput"
Cohesion: 0.39
Nodes (3): DSDateInput, DSTextInput, QDate

### Community 142 - "ErrorModel"
Cohesion: 0.19
Nodes (4): ErrorModel, Exception, ErrorMapper, Conversão do corpo de erro do backend em ErrorModel, comum a toda feature que…

### Community 143 - "maria_cacau/backend/_server.py"
Cohesion: 0.21
Nodes (11): after_request, errorhandler, BackendEvent, handle_backend_error(), handle_data_source_error(), handle_unexpected_error(), log_usage(), before_request (+3 more)

### Community 144 - "maria_cacau/core/observability.py"
Cohesion: 0.23
Nodes (7): BackendServer, configure(), Configura o client ativo., AppEvent, _Observability, Enum, Observabilidade centralizada do app.

### Community 145 - "_SheetsViewModel"
Cohesion: 0.40
Nodes (3): Encapsula o acesso à planilha: schema cacheado, prewarm e fetch., Carrega cabeçalho e índice da coluna DATA na primeira chamada; no-op nas seguint, _SheetsViewModel

### Community 146 - "Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/deliveries/service.py"
Cohesion: 0.20
Nodes (9): DeliveriesSummary, DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesMapper, DeliveriesService, Service e Mapper de entregas — agrupa pedidos do dia por tipo de entrega., Serializa DeliveriesSummary para dict JSON-ready., Aplica regra de negócio sobre os pedidos do dia e retorna o resumo de entregas. (+1 more)

### Community 147 - "to_datetime"
Cohesion: 0.32
Nodes (6): Retorna todos os pedidos do período informado., DateFormat, datetime, Enum, str, to_datetime()

### Community 148 - "maria_cacau/core/network/__init__.py"
Cohesion: 0.13
Nodes (20): Comunicação alto nivel para chamadas de api, clear_override(), get_client(), override(), Configurações globais para uso do módulo, Substitui o client — útil para testes ou WireMock., Remove o override. Volta ao client padrão., Retorna o client ativo (override se existir, padrão caso contrário). (+12 more)

### Community 149 - "MetaConversionView"
Cohesion: 0.16
Nodes (3): DSLabel, MetaConversionView, QDialog

### Community 150 - "CPF Validation"
Cohesion: 0.33
Nodes (5): Arquitetura, CPF Validation, Fluxo principal, Observabilidade, Responsabilidade das classes

### Community 151 - "Delivery"
Cohesion: 0.33
Nodes (5): Arquitetura, Delivery, Fluxo de erro, Fluxo principal, Responsabilidade das classes

### Community 152 - "Summary"
Cohesion: 0.33
Nodes (5): Arquitetura, Fluxo de erro, Fluxo principal, Responsabilidade das classes, Summary

### Community 154 - "Maria Cacau — App"
Cohesion: 0.33
Nodes (5): Autor, Como rodar, Gerar executável, Maria Cacau — App, Plataforma e Requisitos

### Community 155 - "deliveries/response/example.json"
Cohesion: 0.40
Nodes (4): deliveries, $schema, total, unique

### Community 157 - "BackendError"
Cohesion: 0.29
Nodes (7): handle_backend_error(), handle_data_source_error(), handle_unexpected_error(), BackendError, generic_mapper(), translate(), str

### Community 158 - "properties"
Cohesion: 0.17
Nodes (12): type, type, description, properties, type, Customization, type, type (+4 more)

### Community 159 - "payments/response/example.json"
Cohesion: 0.50
Nodes (3): orders, $schema, total

### Community 160 - "AuthViewModel"
Cohesion: 0.20
Nodes (4): AuthUseCase, Lê o arquivo JSON, salva em storage seguro e autentica o backend., Remove credenciais do storage e desautentica o backend., AuthViewModel

### Community 161 - "maria_cacau/backend/features/sheet/route.py"
Cohesion: 0.20
Nodes (6): delete, put, remove_sheet(), select_sheet(), Service de planilha — gerencia a planilha ativa no DataSource., SheetService

### Community 166 - "DSLoadingHandler"
Cohesion: 0.22
Nodes (4): DSLoadingHandler, Deve ser chamado no __init__ do componente, após o super().__init__()., Implementar no componente: o que fazer com cada frame do spinner., Mixin que adiciona comportamento de loading animado a qualquer componente…

### Community 178 - "CustomData"
Cohesion: 0.20
Nodes (10): const, properties, required, type, CustomData, currency, value, description (+2 more)

### Community 179 - "Meta"
Cohesion: 0.20
Nodes (10): Meta, description, properties, type, sent_at, status, description, type (+2 more)

### Community 180 - "Receiver"
Cohesion: 0.20
Nodes (10): Receiver, $ref, description, type, event, gender, description, properties (+2 more)

### Community 182 - "BackendError"
Cohesion: 0.42
Nodes (5): BackendError, Exception, generic_mapper(), Exception, translate()

### Community 183 - "UserData"
Cohesion: 0.22
Nodes (9): $defs, Sha256, UserData, pattern, type, additionalProperties, description, minProperties (+1 more)

### Community 184 - "ConnectAuthAPI"
Cohesion: 0.25
Nodes (3): ConnectAuthAPI, Lê o JSON do caminho, envia ao backend e persiste apenas se der sucesso., Valida antes de qualquer gravação — bloco inválido não salva nada, nem pela…

### Community 185 - "item/example.json"
Cohesion: 0.25
Nodes (7): number, products, products_note, $schema, source, status, tiny_code

### Community 186 - "address"
Cohesion: 0.25
Nodes (8): city, complement, neighborhood, number, state, street, zip, address

### Community 187 - "financial"
Cohesion: 0.25
Nodes (8): financial, amount_pendent, discount, pay_on_pickup, payments, shipping, subtotal, total

### Community 188 - "products"
Cohesion: 0.25
Nodes (8): $ref, items, type, items, minItems, type, payments, products

### Community 189 - "maria_cacau/features/auth/data/repository.py"
Cohesion: 0.48
Nodes (3): Repository da feature Auth: gerencia storage seguro e chamadas ao backend., InvalidMetaCredentialsError, NoCachedCredentialsError

### Community 190 - "AuthView"
Cohesion: 0.38
Nodes (3): AuthView, QMenu, View da feature Auth: menu Segurança com ações de certificado.

### Community 191 - "customer"
Cohesion: 0.33
Nodes (6): customer, cpf, email, name, phone, relationship

### Community 192 - "delivery"
Cohesion: 0.33
Nodes (6): delivery, date, factory_notes, motoboy_info, receiver_name, type

### Community 193 - "receiver"
Cohesion: 0.33
Nodes (6): date, type, receiver, event, gender, name

### Community 194 - "event.schema.json"
Cohesion: 0.33
Nodes (5): description, required, $schema, title, type

### Community 195 - "maria_cacau/core/storage/__init__.py"
Cohesion: 0.40
Nodes (4): Superfície pública do storage. `FileStorage` e `KeychainStorage` são backends…, StrEnum, Chaves de storage lidas por mais de um consumidor — o front grava e o backend…, StorageKey

### Community 197 - "customization"
Cohesion: 0.40
Nodes (5): customization, box_art, box_name, label_name, label_theme

### Community 198 - "item/schema.json"
Cohesion: 0.40
Nodes (4): description, $ref, $schema, title

### Community 199 - "list/example.json"
Cohesion: 0.50
Nodes (3): orders, $schema, total

### Community 201 - "meta"
Cohesion: 0.67
Nodes (3): meta, sent_at, status

### Community 202 - "ct"
Cohesion: 0.67
Nodes (3): description, $ref, ct

### Community 203 - "event_id"
Cohesion: 0.67
Nodes (3): description, type, event_id

### Community 204 - "fn"
Cohesion: 0.67
Nodes (3): description, $ref, fn

### Community 205 - "st"
Cohesion: 0.67
Nodes (3): st, description, $ref

### Community 206 - "zp"
Cohesion: 0.67
Nodes (3): zp, description, $ref

## Knowledge Gaps
- **290 isolated node(s):** `$schema`, `number`, `status`, `source`, `tiny_code` (+285 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 873 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **37 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HTTPResponse` connect `HTTPResponse` to `maria_cacau/features/home/sub_features/delivery/data/repository.py`, `SummaryController`, `API`, `ConversionOrderModel`, `maria_cacau/backend/_server.py`, `maria_cacau/core/network/__init__.py`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `call()` connect `call` to `Maria-Cacau-Contagem/maria_cacau/core/network/_config.py`, `AuthController`, `Maria-Cacau-Contagem/maria_cacau/core/network/api.py`, `SheetsRepository`, `Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/data/repository.py`, `Maria-Cacau-Contagem/maria_cacau/core/network/_errors.py`, `API`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Why does `DSButton` connect `DSButton` to `maria_cacau/features/cpf_validation/presentation/controller.py`, `DSLoadingHandler`, `DSButton`, `SummaryController`, `ConversionOrderModel`, `MetaConversionView`, `DeliveryView`, `DSTextView`, `maria_cacau/design_system/components/__init__.py`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `SheetModel` (e.g. with `SheetsRepository` and `SheetsUseCase`) actually correct?**
  _`SheetModel` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `_SheetsViewModel` (e.g. with `OrderNotFoundError` and `SheetColumnNotFoundError`) actually correct?**
  _`_SheetsViewModel` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `HTTPResponse` (e.g. with `API` and `HTTPClientContract`) actually correct?**
  _`HTTPResponse` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `number`, `status` to the rest of the system?**
  _290 weakly-connected nodes found - possible documentation gaps or missing edges._