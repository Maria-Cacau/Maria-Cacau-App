# Graph Report - Maria-Cacau-App  (2026-09-14)

## Corpus Check
- 195 files · ~21,598 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 7, .icns 1, .ico 1)

## Summary
- 2034 nodes · 3524 edges · 197 communities (111 shown, 51 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 372 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `580b30e4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Maria-Cacau-Contagem/maria_cacau/backend/data_source/errors/_errors.py
- Maria-Cacau-Contagem/maria_cacau/features/cpf_validation/presentation/controller.py
- Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/deliveries/service.py
- AuthController
- Maria-Cacau-Contagem/maria_cacau/core/network/api.py
- SheetsRepository
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/data/repository.py
- .log
- DSButton
- Maria-Cacau-Contagem/maria_cacau/backend/features/orders/shared/models.py
- DataSourceProtocol
- StatusBarView
- AppCoordinator
- Enum
- SheetCreateView
- DSChart
- maria_cacau/backend/data_source/errors/_errors.py
- Maria-Cacau-Contagem/maria_cacau/core/error/errors.py
- SecurityStorage
- AppSession
- Maria-Cacau-Contagem/maria_cacau/backend/utils/numbers.py
- r"""Indica se a resposta foi bem sucedida (status code 2xx).
- O tipo precisa aceitar **kwargs (dataclass ou similar).
- Lê o JSON do backend; cai em http_error genérico se o corpo não for JSON válido.
- summary/service.py
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
- .__init__
- maria_cacau/features/cpf_validation/presentation/controller.py
- maria_cacau/features/auth/presentation/controller.py
- maria_cacau/backend/features/auth/route.py
- properties
- maria_cacau/backend/features/orders/subfeatures/deliveries/service.py
- HTTPResponse
- ErrorModel
- maria_cacau/features/home/sub_features/delivery/data/repository.py
- SheetCols
- deliveries/response/schema.json
- _utils.py
- DSLoadingHandler
- properties
- maria_cacau/backend/_server.py
- DSChart
- ConnectAuthAPI
- DeliveryController
- SheetsRepository
- call
- SummaryView
- GoogleSheetsDataSource
- DataSourceProtocol
- properties
- Maria-Cacau-Contagem/maria_cacau/backend/data_source/sheet_mapper.py
- DSGroupBox
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/domain/models.py
- API
- $defs
- maria_cacau/design_system/components/__init__.py
- StatusBarController
- DSDialog
- DeliveryUseCase
- OrderMapper
- properties
- properties
- SummaryView
- _SheetsViewModel
- Maria-Cacau-Contagem/maria_cacau/backend/data_source/_normalizer.py
- SheetCreateView
- properties
- properties
- payments/response/schema.json
- AuthRepository
- StorageHandler
- HTTPResponseError
- maria_cacau/features/home/sub_features/summary/data/repository.py
- Maria-Cacau-Contagem/maria_cacau/core/network/_errors.py
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/data/repository.py
- properties
- _security.py
- Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/payments/service.py
- CpfValidationView
- from_response
- SheetsUseCase
- Event
- KeychainStorage
- unexpected_error
- Receiver
- FileStorage
- StorageIndex
- SecurityStorage
- SheetsMenuView
- Maria-Cacau-Contagem/maria_cacau/core/network/_config.py
- DeliveryView
- CacheStorage
- DSComboBox
- Maria-Cacau-Contagem/maria_cacau/core/network/_observability.py
- GoogleSheetsDataSource
- Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/payments/repository.py
- storage/handler.py
- maria_cacau/features/home/sub_features/summary/presentation/viewmodel.py
- Maria-Cacau-Contagem/maria_cacau/features/auth/presentation/controller.py
- DSDateInput
- Backend
- DSDateInput
- CacheStorage
- DeliveryViewModel
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/presentation/controller.py
- SheetsController
- _SheetsViewModel
- DeliveriesService
- utils/__init__.py
- maria_cacau/core/network/__init__.py
- DSLabel
- CPF Validation
- Delivery
- Summary
- DSTextView
- Maria Cacau — App
- deliveries/response/example.json
- DSTextView
- .to_model
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/presentation/view.py
- payments/response/example.json
- _events.py
- maria_cacau/backend/features/orders/subfeatures/payments/service.py
- HomeFeaturesModel
- maria-cacau
- Mapeamento de uma linha do DataFrame para o model Order.
- Service e Mapper de resumo de pedidos por período.
- sheets/presentation/controller.py
- BackendError
- DSButton
- AuthViewModel
- AuthController
- StatusBarController
- PaymentsRepository
- API
- .initialize
- connect
- Maria-Cacau-Contagem/maria_cacau/features/status_bar/domain/state.py
- AuthView
- .json
- Maria-Cacau-Contagem/maria_cacau/features/auth/data/repository.py
- .get_by_date
- SummaryViewModel
- Maria-Cacau-Contagem/maria_cacau/design_system/components/chart/chart_widget.py
- ProductItem
- maria_cacau/features/home/sub_features/summary/domain/signals.py

## God Nodes (most connected - your core abstractions)
1. `SheetModel` - 29 edges
2. `DataSourceError` - 28 edges
3. `ErrorModel` - 25 edges
4. `OrderMapper` - 24 edges
5. `HTTPResponse` - 23 edges
6. `SheetsController` - 23 edges
7. `API` - 21 edges
8. `_SheetsViewModel` - 20 edges
9. `DSChart` - 20 edges
10. `DataSourceError` - 20 edges

## Surprising Connections (you probably didn't know these)
- `main()` --calls--> `AppCoordinator`  [INFERRED]
  maria_cacau/__main__.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/app/coordinator.py
- `from_response()` --calls--> `OrderDetail`  [INFERRED]
  /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/data/mapper.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/domain/models.py
- `from_response()` --calls--> `ProductCount`  [INFERRED]
  /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/data/mapper.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/domain/models.py
- `AppCoordinator` --uses--> `MainWindow`  [INFERRED]
  maria_cacau/app/coordinator.py → maria_cacau/app/window.py
- `SheetNormalizer` --uses--> `PaymentCols`  [INFERRED]
  maria_cacau/backend/data_source/_normalizer.py → maria_cacau/backend/data_source/sheet_mapper.py

## Import Cycles
- 3-file cycle: `/Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/__init__.py -> /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/_google_sheets.py -> /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/_viewmodel.py -> /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/__init__.py`
- 3-file cycle: `maria_cacau/backend/data_source/__init__.py -> maria_cacau/backend/data_source/_google_sheets.py -> maria_cacau/backend/data_source/_viewmodel.py -> maria_cacau/backend/data_source/__init__.py`

## Communities (197 total, 51 thin omitted)

### Community 0 - "Maria-Cacau-Contagem/maria_cacau/backend/data_source/errors/_errors.py"
Cohesion: 0.10
Nodes (19): ApiQuotaExceededError, ApiUnexpectedResponseError, CredentialsFileCorruptedError, CredentialsFileNotFoundError, CredentialsFormatError, CredentialsSaveError, DataSourceError, DataSourceNotReadyError (+11 more)

### Community 1 - "Maria-Cacau-Contagem/maria_cacau/features/cpf_validation/presentation/controller.py"
Cohesion: 0.16
Nodes (7): CpfValidationResult, Models utilizados no módulo, CpfValidationUseCase, _is_valid_cpf(), Valida um CPF pela regra dos dois dígitos verificadores (algoritmo da Receita Fe, CpfValidationViewModel, ViewModel da feature CPF Validation: executa o UseCase e emite resultado via sig

### Community 2 - "Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/deliveries/service.py"
Cohesion: 0.11
Nodes (14): DeliveriesRepository, Repositório de entregas — busca e prepara dados da planilha para o DeliveriesSer, Retorna todos os pedidos de uma data como DataFrame bruto., Acessa o data source e entrega um DataFrame para o DeliveriesService.      Não f, get_deliveries(), Rota de entregas — GET /orders/deliveries., DeliveriesMapper, Service e Mapper de entregas — agrupa pedidos do dia por tipo de entrega. (+6 more)

### Community 4 - "Maria-Cacau-Contagem/maria_cacau/core/network/api.py"
Cohesion: 0.21
Nodes (5): API, Comunicação alto nivel para chamadas de api, HTTP métodos disponíveis para uso, HTTPRequest, Dados e parâmetros de uma request

### Community 5 - "SheetsRepository"
Cohesion: 0.35
Nodes (4): _extract_sheet_id(), Retorna o sheet_id da última planilha salva em cache, sem HTTP., SheetsRepository, SheetModel

### Community 7 - ".log"
Cohesion: 0.15
Nodes (4): DeliveryController, Inicia a consulta: trava a view, dispara o ViewModel e registra o timestamp para, Recebe o resultado do ViewModel, atualiza a view e loga a duração da consulta., SummaryController

### Community 8 - "DSButton"
Cohesion: 0.13
Nodes (7): DSButton, DSLoadingHandler, DSLoadingHandler, Deve ser chamado no __init__ do componente, após o super().__init__()., Implementar no componente: o que fazer com cada frame do spinner., Mixin que adiciona comportamento de loading animado a qualquer componente QObjec, QPushButton

### Community 9 - "Maria-Cacau-Contagem/maria_cacau/backend/features/orders/shared/models.py"
Cohesion: 0.17
Nodes (10): Address, Customer, Customization, Delivery, Event, Financial, Order, PaymentItem (+2 more)

### Community 10 - "DataSourceProtocol"
Cohesion: 0.05
Nodes (23): Rotas de autenticação, AuthService, Service de autenticação — gerencia o estado de conexão do DataSource., DataSourceProtocol, Autentica com o dict da service account e guarda o client em memória., Remove o client autenticado da memória. Mantém o sheet_id., Remove a planilha ativa da memória. Mantém as credenciais., Define a planilha ativa e dispara prewarm em background. (+15 more)

### Community 11 - "StatusBarView"
Cohesion: 0.20
Nodes (4): DSLabel, StatusBarView, QLabel, QStatusBar

### Community 12 - "AppCoordinator"
Cohesion: 0.21
Nodes (3): AppCoordinator, MainWindow, QMainWindow

### Community 13 - "Enum"
Cohesion: 0.20
Nodes (7): DSDialogIcon, DSDialogModel, DSButtonState, Services, FeatureEvents, Eventos de observabilidade da feature CPF Validation., Enum

### Community 16 - "maria_cacau/backend/data_source/errors/_errors.py"
Cohesion: 0.16
Nodes (21): before_request, ApiQuotaExceededError, ApiUnexpectedResponseError, DataSourceError, DataSourceNotReadyError, InvalidCredentialsError, NetworkTimeoutError, NetworkUnavailableError (+13 more)

### Community 17 - "Maria-Cacau-Contagem/maria_cacau/core/error/errors.py"
Cohesion: 0.17
Nodes (12): AppError, certificado_limpo(), certificado_ok(), planilha_conectada(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso., Confirmação de credenciais removidas com sucesso. (+4 more)

### Community 20 - "Maria-Cacau-Contagem/maria_cacau/backend/utils/numbers.py"
Cohesion: 0.50
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

### Community 32 - "summary/service.py"
Cohesion: 0.14
Nodes (14): OrdersSummaryRepository, DataFrame, Acessa o data source e entrega um DataFrame tipado para o OrdersService. Único…, Retorna todos os pedidos de um período com colunas numéricas convertidas para…, Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor., Faz cast numérico de uma coluna se ela existir no DataFrame., get_orders(), get (+6 more)

### Community 41 - "SummaryController"
Cohesion: 0.16
Nodes (6): FeatureEvents, Enum, Eventos relacionados ao resumo de produtos por período., ProductsViewData, Controller da feature Summary: conecta signals da view ao ViewModel e trata…, SummaryController

### Community 55 - "SheetModel"
Cohesion: 0.14
Nodes (6): Exception, Erro genérico para exceções não tratadas., unexpected_error(), SheetModel, SheetsUseCase, SheetsViewModel

### Community 65 - ".__init__"
Cohesion: 0.07
Nodes (9): CredentialsFileCorruptedError, CredentialsFileNotFoundError, CredentialsFormatError, CredentialsSaveError, InvalidDateFormatError, Exception, SheetFieldNotWritableError, SheetIdInvalidError (+1 more)

### Community 66 - "maria_cacau/features/cpf_validation/presentation/controller.py"
Cohesion: 0.08
Nodes (19): FeatureEvents, Enum, Eventos de observabilidade da feature CPF Validation., CpfValidationResult, Models utilizados no módulo, CpfValidationSignals, QObject, Canal de comunicação entre o ViewModel e o Controller. (+11 more)

### Community 67 - "maria_cacau/features/auth/presentation/controller.py"
Cohesion: 0.21
Nodes (8): FeatureEvents, Enum, Eventos observáveis da feature Auth., AuthSignals, QObject, Canal de comunicação entre o ViewModel (background thread) e o Controller (main…, Controller da feature Auth: conecta signals da view ao ViewModel e atualiza…, ViewModel da feature Auth: executa o UseCase em background e emite resultados…

### Community 68 - "maria_cacau/backend/features/auth/route.py"
Cohesion: 0.09
Nodes (13): connect(), disconnect(), delete, Rotas de autenticação, AuthService, Service de autenticação — gerencia o estado de conexão do DataSource., delete, remove_sheet() (+5 more)

### Community 69 - "properties"
Cohesion: 0.06
Nodes (34): $ref, $ref, $ref, $ref, $ref, type, items, minItems (+26 more)

### Community 70 - "maria_cacau/backend/features/orders/subfeatures/deliveries/service.py"
Cohesion: 0.12
Nodes (18): DeliveriesSummary, DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesRepository, DataFrame, Repositório de entregas — busca e prepara dados da planilha para o…, Retorna todos os pedidos de uma data como DataFrame bruto., Acessa o data source e entrega um DataFrame para o DeliveriesService. Não faz… (+10 more)

### Community 71 - "HTTPResponse"
Cohesion: 0.12
Nodes (15): LocalClient, Realiza as request de fato, Roteia requests para o backend local (in-process). Nenhuma rede envolvida —…, ErrorMessages, StrEnum, Erros mapeados usados no módulo, NetworkEvent, Enum (+7 more)

### Community 72 - "ErrorModel"
Cohesion: 0.13
Nodes (16): AppError, certificado_limpo(), certificado_ok(), http_error(), planilha_conectada(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso. (+8 more)

### Community 73 - "maria_cacau/features/home/sub_features/delivery/data/repository.py"
Cohesion: 0.15
Nodes (14): Enum, Services, DeliveriesAPI, PaymentsPendentAPI, DeliveriesMapper, ErrorMapper, PaymentsMapper, DeliveriesSummary (+6 more)

### Community 74 - "SheetCols"
Cohesion: 0.18
Nodes (11): PaymentCols, ProductCols, StrEnum, Colunas fixas da aba Cadastro, agrupadas por domínio., Colunas dos slots de produto (1–7). Usar com .slot(n)., Colunas das parcelas de pagamento (1–6). Usar com .slot(n)., SheetCols, Repositório de pagamentos — busca e prepara dados da planilha para o… (+3 more)

### Community 75 - "deliveries/response/schema.json"
Cohesion: 0.08
Nodes (23): minimum, type, items, type, properties, required, type, properties (+15 more)

### Community 76 - "_utils.py"
Cohesion: 0.13
Nodes (17): InvalidDateRangeError, _is_valid_date(), date_range(), DateFormat, normalize_date(), normalize_order_number(), datetime, Enum (+9 more)

### Community 77 - "DSLoadingHandler"
Cohesion: 0.22
Nodes (4): DSLoadingHandler, Deve ser chamado no __init__ do componente, após o super().__init__()., Implementar no componente: o que fazer com cada frame do spinner., Mixin que adiciona comportamento de loading animado a qualquer componente…

### Community 78 - "properties"
Cohesion: 0.10
Nodes (21): properties, type, type, type, type, type, type, city (+13 more)

### Community 79 - "maria_cacau/backend/_server.py"
Cohesion: 0.10
Nodes (19): errorhandler, AppCoordinator, BackendError, Exception, generic_mapper(), Exception, translate(), BackendServer (+11 more)

### Community 80 - "DSChart"
Cohesion: 0.21
Nodes (6): DSChartType, Enum, DSChart, QWidget, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., _short_label()

### Community 81 - "ConnectAuthAPI"
Cohesion: 0.16
Nodes (6): ConnectAuthAPI, Repository da feature Auth: gerencia storage seguro e chamadas ao backend., Lê o JSON do caminho, envia ao backend e persiste apenas se der sucesso., Reenvia credenciais ao backend com o sheet_id atual., Lê credenciais do storage sem fazer chamada HTTP., NoCachedCredentialsError

### Community 82 - "DeliveryController"
Cohesion: 0.07
Nodes (22): FeatureEvents, Enum, Eventos relacionados às entregas pendentes., DeliveryModel, DeliveryViewData, Models utilizados no módulo, DeliverySignals, QObject (+14 more)

### Community 83 - "SheetsRepository"
Cohesion: 0.20
Nodes (5): RemoveSheetAPI, SelectSheetAPI, _extract_sheet_id(), Retorna o sheet_id da última planilha salva em cache, sem HTTP., SheetsRepository

### Community 84 - "call"
Cohesion: 0.20
Nodes (8): ConnectAuthAPI, DisconnectAuthAPI, AuthRepository, Lê o JSON do caminho, envia ao backend e persiste apenas se der sucesso., Reenvia credenciais ao backend com o sheet_id atual., Lê credenciais do storage sem fazer chamada HTTP., Remove credenciais do storage e desautentica o backend., call()

### Community 86 - "GoogleSheetsDataSource"
Cohesion: 0.13
Nodes (6): GoogleSheetsDataSource, Implementação de DataSourceProtocol para Google Sheets via gspread., Normaliza headers inconsistentes da planilha para os valores canônicos dos…, Renomeia a coluna que segue prod3 para prod4, independente do header atual.…, Traduz headers reais da planilha para os nomes canônicos definidos nos enums.…, SheetNormalizer

### Community 87 - "DataSourceProtocol"
Cohesion: 0.09
Nodes (12): DataSourceProtocol, Protocol, Autentica com o dict da service account e guarda o client em memória., Remove o client autenticado da memória. Mantém o sheet_id., Remove a planilha ativa da memória. Mantém as credenciais., Define a planilha ativa e dispara prewarm em background., Retorna pedidos da data informada (DD/MM/YYYY)., Retorna pedidos no intervalo de datas informado (DD/MM/YYYY). (+4 more)

### Community 88 - "properties"
Cohesion: 0.11
Nodes (18): description, type, type, properties, $ref, type, items, type (+10 more)

### Community 89 - "Maria-Cacau-Contagem/maria_cacau/backend/data_source/sheet_mapper.py"
Cohesion: 0.14
Nodes (11): PaymentCols, ProductCols, Mapeamento de colunas e tabs da planílha., Colunas fixas da aba Cadastro, agrupadas por domínio., Colunas dos slots de produto (1–7). Usar com .slot(n)., Colunas das parcelas de pagamento (1–6). Usar com .slot(n)., SheetCols, SheetTabs (+3 more)

### Community 91 - "Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/domain/models.py"
Cohesion: 0.20
Nodes (7): DaySummary, OrderDetail, ProductCount, ProductsSummary, ProductsViewData, SummarySignals, _products_lines()

### Community 92 - "API"
Cohesion: 0.16
Nodes (11): API, ABC, Comunicação alto nivel para chamadas de api, HTTPMethod, StrEnum, HTTP métodos disponíveis para uso, Dados e parâmetros de uma request, DisconnectAuthAPI (+3 more)

### Community 93 - "$defs"
Cohesion: 0.13
Nodes (14): description, required, type, $defs, Address, Financial, ProductItem, description (+6 more)

### Community 94 - "maria_cacau/design_system/components/__init__.py"
Cohesion: 0.25
Nodes (7): DSDialog, DSDialogIcon, DSDialogModel, Enum, asset(), Metadados centralizados do pacote maria-cacau., Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.

### Community 95 - "StatusBarController"
Cohesion: 0.07
Nodes (13): MenuHandler, QMenu, MainWindow, HomeController, HomeFeaturesModel, HomeView, QWidget, Enum (+5 more)

### Community 97 - "DeliveryUseCase"
Cohesion: 0.25
Nodes (4): DeliveryModel, DeliveryUseCase, Regra de negócios: validação matemática de CPF., Busca deliveries e payments em paralelo e retorna o modelo consolidado.

### Community 98 - "OrderMapper"
Cohesion: 0.31
Nodes (13): Delivery, OrderMapper, Mapeamento de uma linha do DataFrame para o model Order., Converte uma linha do DataFrame (vinda do SheetsRepository) em um Order., Address, Customer, Customization, Delivery (+5 more)

### Community 99 - "properties"
Cohesion: 0.14
Nodes (14): type, description, properties, required, type, Customer, type, type (+6 more)

### Community 100 - "properties"
Cohesion: 0.14
Nodes (14): type, description, minimum, type, properties, name, price, quantity (+6 more)

### Community 102 - "_SheetsViewModel"
Cohesion: 0.16
Nodes (12): Client, SheetColumnNotFoundError, handle_api(), Encapsula o acesso à planilha: schema cacheado, prewarm, fetch e escrita., Localiza a linha do pedido pela chave, lendo só a coluna PEDIDO., Busca as linhas informadas, em batches de até 100 ranges, e normaliza o…, Carrega cabeçalho e índices das colunas conhecidas na primeira chamada; no-op…, Busca pedidos por datas usando dois passes para minimizar chamadas à API. Passo… (+4 more)

### Community 103 - "Maria-Cacau-Contagem/maria_cacau/backend/data_source/_normalizer.py"
Cohesion: 0.21
Nodes (9): _fix_prod4(), normalize(), Normaliza headers inconsistentes da planilha para os valores canônicos dos enums, Traduz headers reais da planilha para os nomes canônicos definidos nos enums., _rename_at(), _rename_keys(), SheetNormalizer, fetch() (+1 more)

### Community 105 - "properties"
Cohesion: 0.15
Nodes (13): $ref, Delivery, description, properties, required, type, type, type (+5 more)

### Community 106 - "properties"
Cohesion: 0.15
Nodes (13): minimum, type, type, PaymentItem, minimum, type, description, properties (+5 more)

### Community 107 - "payments/response/schema.json"
Cohesion: 0.15
Nodes (12): $ref, items, type, properties, orders, total, required, $schema (+4 more)

### Community 108 - "AuthRepository"
Cohesion: 0.17
Nodes (5): AppSession, AuthRepository, Remove credenciais do storage e desautentica o backend., AppInitUseCase, Caso de uso: gerencia credenciais da service account.

### Community 109 - "StorageHandler"
Cohesion: 0.21
Nodes (6): Backend de cache em arquivo JSON no diretório do usuário., Backend de armazenamento seguro via arquivo protegido no diretório do usuário., ABC, T, Contrato base para todos os backends de armazenamento., StorageHandler

### Community 110 - "HTTPResponseError"
Cohesion: 0.14
Nodes (13): EntityT, O tipo precisa aceitar **kwargs (dataclass ou similar)., get_client(), Retorna o client ativo (override se existir, padrão caso contrário)., HTTPRequestError, HTTPResponseError, NetworkError, NetworkNotConfiguredError (+5 more)

### Community 111 - "maria_cacau/features/home/sub_features/summary/data/repository.py"
Cohesion: 0.23
Nodes (9): OrdersSummaryAPI, ErrorMapper, OrdersSummaryMapper, Mappers de HTTPResponse para domain models e de HTTPResponseError para…, Repository da feature Summary: chama a API e converte erros HTTP em ErrorModel., SummaryRepository, OrderDetail, ProductCount (+1 more)

### Community 112 - "Maria-Cacau-Contagem/maria_cacau/core/network/_errors.py"
Cohesion: 0.22
Nodes (9): HTTPRequestError, HTTPResponseError, NetworkError, NetworkNotConfiguredError, Erros mapeados usados no módulo, r"""Erro base da camada de network., configure() não foi chamado antes de usar a lib., Erro antes de receber resposta (conectividade, timeout, URL inválida). (+1 more)

### Community 113 - "Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/data/repository.py"
Cohesion: 0.22
Nodes (5): DeliveriesAPI, path(), PaymentsPendentAPI, Endpoints do backend consumidos pela feature Auth., OrdersRepository

### Community 114 - "properties"
Cohesion: 0.17
Nodes (12): type, type, description, properties, type, Customization, type, type (+4 more)

### Community 115 - "_security.py"
Cohesion: 0.29
Nodes (8): Índice de chave → destino do `SecurityStorage`. É dica, não verdade: se sumir…, Superfície pública do storage. `FileStorage` e `KeychainStorage` são backends…, Enum, Destino possível de um segredo no `SecurityStorage`, e a regra pura que escolhe…, Decide o destino de `data`. `preferred` é a vontade do chamador; o tamanho pode…, resolve(), StorageLocation, `SecurityStorage`: fachada que decide entre Keychain e arquivo, e mantém o…

### Community 116 - "Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/payments/service.py"
Cohesion: 0.22
Nodes (6): PaymentsMapper, PaymentsService, Service e Mapper de pagamentos pendentes., Serializa o resultado do PaymentsService para dict JSON-ready., Filtra pedidos com pagamento pendente e monta os objetos de domínio., Retorna pedidos com amount_pendent > 0 para a data informada.

### Community 118 - "from_response"
Cohesion: 0.18
Nodes (12): DeliveriesMapper, ErrorMapper, from_response(), OrdersSummaryMapper, PaymentsMapper, Mappers de HTTPResponse para domain models e de HTTPResponseError para ErrorMode, DeliveriesSummary, DeliveryCount (+4 more)

### Community 120 - "Event"
Cohesion: 0.18
Nodes (11): description, type, Event, description, properties, required, type, date (+3 more)

### Community 121 - "KeychainStorage"
Cohesion: 0.20
Nodes (5): KeychainStorage, Backend de armazenamento seguro via cofre do sistema operacional (Keychain /…, Backend puro: só conhece o keyring. Não decide destino, não sabe de arquivo., No-op: o `keyring` não tem uma operação de "apagar tudo" — só apaga chave por…, _set_platform_backend()

### Community 122 - "unexpected_error"
Cohesion: 0.36
Nodes (3): Erro genérico para exceções não tratadas., unexpected_error(), SheetsViewModel

### Community 123 - "Receiver"
Cohesion: 0.20
Nodes (10): Receiver, $ref, description, type, event, gender, description, properties (+2 more)

### Community 124 - "FileStorage"
Cohesion: 0.27
Nodes (3): FileStorage, Path, Backend puro: só conhece o arquivo, sem lógica de decisão — quem escolhe usar…

### Community 126 - "SecurityStorage"
Cohesion: 0.33
Nodes (3): `location` é preferência do chamador, não garantia — o resolver pode rebaixá-la., Keychain → pasta. Sem keychain disponível, só a pasta., SecurityStorage

### Community 128 - "Maria-Cacau-Contagem/maria_cacau/core/network/_config.py"
Cohesion: 0.20
Nodes (9): clear_override(), configure(), get_client(), override(), Configurações globais para uso do módulo, Configura o client ativo., Substitui o client — útil para testes ou WireMock., Remove o override. Volta ao client padrão. (+1 more)

### Community 129 - "DeliveryView"
Cohesion: 0.18
Nodes (4): DSGroupBox, DeliveryView, QGroupBox, QWidget

### Community 130 - "CacheStorage"
Cohesion: 0.36
Nodes (3): Any, CacheStorage, Path

### Community 131 - "DSComboBox"
Cohesion: 0.28
Nodes (3): DSComboBox, DSComboBox, QComboBox

### Community 132 - "Maria-Cacau-Contagem/maria_cacau/core/network/_observability.py"
Cohesion: 0.22
Nodes (6): AppEvent, _Observability, Observabilidade centralizada do app., NetworkEvent, Observabilidade da camada de network., track()

### Community 134 - "Maria-Cacau-Contagem/maria_cacau/backend/features/orders/subfeatures/payments/repository.py"
Cohesion: 0.28
Nodes (6): _cast_numeric(), PaymentsRepository, Repositório de pagamentos — busca e prepara dados da planilha para o PaymentsSer, Acessa o data source e entrega um DataFrame tipado para o PaymentsService., Retorna todos os pedidos de uma data com colunas numéricas convertidas para floa, _to_dataframe()

### Community 135 - "storage/handler.py"
Cohesion: 0.29
Nodes (3): ABC, Contrato base para todos os backends de armazenamento., StorageHandler

### Community 136 - "maria_cacau/features/home/sub_features/summary/presentation/viewmodel.py"
Cohesion: 0.25
Nodes (8): DaySummary, ProductsSummary, Caso de uso: agrega pedidos do período em resumo de produtos por dia e global., SummaryUseCase, _to_sorted_counts(), _products_lines(), ViewModel da feature Summary: executa o UseCase em background e emite…, SummaryViewModel

### Community 137 - "Maria-Cacau-Contagem/maria_cacau/features/auth/presentation/controller.py"
Cohesion: 0.18
Nodes (4): AuthUseCase, Lê o arquivo JSON, salva em storage seguro e autentica o backend., Remove credenciais do storage e desautentica o backend., Controller da feature CPF Validation: conecta signals da view ao ViewModel e tra

### Community 138 - "DSDateInput"
Cohesion: 0.22
Nodes (4): DSDateInput, DSTextInput, QDateEdit, QLineEdit

### Community 139 - "Backend"
Cohesion: 0.25
Nodes (7): Auth — `/auth`, Backend, Como funciona, Erros, Orders — `/orders`, Rotas disponíveis, Sheet — `/sheet`

### Community 140 - "DSDateInput"
Cohesion: 0.33
Nodes (3): DSDateInput, DSTextInput, QDate

### Community 142 - "DeliveryViewModel"
Cohesion: 0.43
Nodes (3): DeliveryViewData, DeliveryViewModel, Roda o UseCase, monta o ViewData e emite sucesso ou erro — sempre via signal par

### Community 143 - "Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/presentation/controller.py"
Cohesion: 0.28
Nodes (4): CpfValidationSignals, DeliverySignals, Canal de comunicação entre o ViewModel e o Controller., QObject

### Community 145 - "_SheetsViewModel"
Cohesion: 0.40
Nodes (3): Encapsula o acesso à planilha: schema cacheado, prewarm e fetch., Carrega cabeçalho e índice da coluna DATA na primeira chamada; no-op nas seguint, _SheetsViewModel

### Community 146 - "DeliveriesService"
Cohesion: 0.33
Nodes (4): DeliveriesService, Aplica regra de negócio sobre os pedidos do dia e retorna o resumo de entregas., ErrorModel, Exception

### Community 147 - "utils/__init__.py"
Cohesion: 0.33
Nodes (6): DateFormat, datetime, Enum, str, to_datetime(), Utilitários de formatação numérica.

### Community 148 - "maria_cacau/core/network/__init__.py"
Cohesion: 0.23
Nodes (10): HTTPClientContract, Protocol, Contrato que qualquer client precisa cumprir., clear_override(), configure(), override(), Configurações globais para uso do módulo, Configura o client ativo. (+2 more)

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

### Community 157 - ".to_model"
Cohesion: 0.17
Nodes (9): Customer, Customization, Financial, Monta um Order completo a partir de uma linha do DataFrame., Order, Retorna pedidos com amount_pendent > 0 para a data informada., Retorna todos os pedidos do período informado., PaymentItem (+1 more)

### Community 159 - "payments/response/example.json"
Cohesion: 0.50
Nodes (3): orders, $schema, total

### Community 160 - "_events.py"
Cohesion: 0.67
Nodes (3): Enum, Eventos observáveis do `SecurityStorage`. O log nunca pode conter o valor do…, StorageEvent

### Community 161 - "maria_cacau/backend/features/orders/subfeatures/payments/service.py"
Cohesion: 0.19
Nodes (8): get_payments_pendent(), get, Rota de pagamentos — GET /orders/payments-pendent., PaymentsMapper, PaymentsService, Service e Mapper de pagamentos pendentes., Serializa o resultado do PaymentsService para dict JSON-ready., Filtra pedidos com pagamento pendente e monta os objetos de domínio.

### Community 178 - "sheets/presentation/controller.py"
Cohesion: 0.23
Nodes (6): _EventBus, QObject, FeatureEvents, Enum, QObject, SheetsSignals

### Community 179 - "BackendError"
Cohesion: 0.29
Nodes (7): handle_backend_error(), handle_data_source_error(), handle_unexpected_error(), BackendError, generic_mapper(), translate(), str

### Community 180 - "DSButton"
Cohesion: 0.32
Nodes (4): DSButton, DSButtonState, Enum, View da feature Summary: resumo de produtos por período.

### Community 181 - "AuthViewModel"
Cohesion: 0.20
Nodes (4): AuthUseCase, Lê o arquivo JSON, salva em storage seguro e autentica o backend., Remove credenciais do storage e desautentica o backend., AuthViewModel

### Community 184 - "PaymentsRepository"
Cohesion: 0.33
Nodes (6): PaymentsRepository, DataFrame, Acessa o data source e entrega um DataFrame tipado para o PaymentsService.…, Retorna todos os pedidos de uma data com colunas numéricas convertidas para…, Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor., Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 185 - "API"
Cohesion: 0.32
Nodes (3): API, RemoveSheetAPI, SelectSheetAPI

### Community 187 - "connect"
Cohesion: 0.33
Nodes (3): connect(), AuthView, QMenu

### Community 189 - "AuthView"
Cohesion: 0.38
Nodes (3): AuthView, QMenu, View da feature Auth: menu Segurança com ações de certificado.

### Community 190 - ".json"
Cohesion: 0.33
Nodes (4): BackendServer, entity(), HTTPResponse, r"""Decodifica o body para um objeto.

### Community 192 - ".get_by_date"
Cohesion: 0.40
Nodes (4): DeliveriesSummary, DeliveryTypeCount, Models de domínio da feature de entregas., Retorna contagem de pedidos agrupada por tipo de entrega para a data informada.

### Community 195 - "ProductItem"
Cohesion: 0.60
Nodes (3): Soma à lista os itens de "Outro Espec.", casando por nome sem diferenciar…, ProductItem, ProductItem

### Community 196 - "maria_cacau/features/home/sub_features/summary/domain/signals.py"
Cohesion: 0.50
Nodes (3): QObject, Canal de comunicação entre o ViewModel (background thread) e o Controller (main…, SummarySignals

## Knowledge Gaps
- **172 isolated node(s):** `$schema`, `description`, `type`, `required`, `type` (+167 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 691 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **51 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HTTPResponse` connect `HTTPResponse` to `maria_cacau/features/home/sub_features/delivery/data/repository.py`, `HTTPResponseError`, `maria_cacau/backend/_server.py`, `maria_cacau/features/home/sub_features/summary/data/repository.py`, `maria_cacau/core/network/__init__.py`, `API`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `DSDialog` connect `DSDialog` to `DeliveryView`, `Enum`, `AuthController`, `SummaryView`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `ErrorModel` connect `ErrorModel` to `maria_cacau/features/auth/presentation/controller.py`, `maria_cacau/features/home/sub_features/summary/presentation/viewmodel.py`, `maria_cacau/features/home/sub_features/delivery/data/repository.py`, `SummaryController`, `maria_cacau/features/home/sub_features/summary/data/repository.py`, `SheetsController`, `ConnectAuthAPI`, `DeliveryController`, `sheets/presentation/controller.py`, `AuthController`, `SheetModel`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `SheetModel` (e.g. with `SheetsRepository` and `SheetsUseCase`) actually correct?**
  _`SheetModel` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 10 inferred relationships involving `OrderMapper` (e.g. with `Address` and `Customer`) actually correct?**
  _`OrderMapper` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `description`, `type` to the rest of the system?**
  _172 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Maria-Cacau-Contagem/maria_cacau/backend/data_source/errors/_errors.py` be split into smaller, more focused modules?**
  _Cohesion score 0.10099573257467995 - nodes in this community are weakly interconnected._