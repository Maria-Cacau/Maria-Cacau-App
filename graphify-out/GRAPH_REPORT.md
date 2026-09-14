# Graph Report - Maria-Cacau-App  (2026-09-14)

## Corpus Check
- 213 files · ~24,787 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 7, .icns 1, .ico 1)

## Summary
- 2292 nodes · 3916 edges · 215 communities (133 shown, 48 thin omitted)
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 374 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ddb15f5c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Maria-Cacau-Contagem/maria_cacau/backend/data_source/errors/_errors.py
- Maria-Cacau-Contagem/maria_cacau/features/cpf_validation/presentation/controller.py
- .get_by_date
- AuthController
- Maria-Cacau-Contagem/maria_cacau/core/network/api.py
- SheetsRepository
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/data/repository.py
- .log
- DSButton
- Maria-Cacau-Contagem/maria_cacau/backend/features/orders/shared/models.py
- DataSourceProtocol
- QLabel
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
- validation.py
- SummaryController
- Renomeia a coluna que segue prod3 para prod4, independente do header atual.
- Busca pedidos por datas usando dois passes para minimizar chamadas à API.
- Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.
- Faz cast numérico de uma coluna se ela existir no DataFrame.
- Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.
- Faz cast numérico de uma coluna se ela existir no DataFrame.
- SheetsViewModel
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
- auth/domain/signals.py
- maria_cacau/backend/features/auth/route.py
- properties
- maria_cacau/backend/features/orders/subfeatures/deliveries/service.py
- HTTPResponse
- ErrorModel
- properties
- maria_cacau/backend/data_source/__init__.py
- deliveries/response/schema.json
- _utils.py
- DSLoadingHandler
- properties
- AppCoordinator
- DSChart
- AuthRepository
- maria_cacau/features/home/sub_features/delivery/data/repository.py
- SheetsRepository
- call
- SummaryView
- GoogleSheetsDataSource
- DataSourceProtocol
- utils/__init__.py
- Maria-Cacau-Contagem/maria_cacau/backend/data_source/sheet_mapper.py
- DSGroupBox
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/presentation/controller.py
- API
- user_data
- DSDialog
- StatusBarController
- DSDialog
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/domain/models.py
- properties
- $defs
- maria_cacau/backend/_server.py
- SummaryView
- _SheetsViewModel
- Maria-Cacau-Contagem/maria_cacau/backend/data_source/_normalizer.py
- SheetCreateView
- strings.py
- properties
- payments/response/schema.json
- HomeController
- StorageHandler
- conversion/service.py
- maria_cacau/features/home/sub_features/summary/data/repository.py
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
- properties
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
- AuthUseCase
- DSDateInput
- Backend
- maria_cacau/design_system/components/__init__.py
- CacheStorage
- DeliveryViewModel
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/presentation/controller.py
- SheetsController
- _SheetsViewModel
- properties
- to_datetime
- properties
- properties
- CPF Validation
- Delivery
- Summary
- DSTextView
- Maria Cacau — App
- deliveries/response/example.json
- DSTextView
- shared/mapper.py
- Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/presentation/view.py
- payments/response/example.json
- DeliveryView
- Maria-Cacau-Contagem/maria_cacau/backend/features/auth/route.py
- HomeFeaturesModel
- CustomData
- maria-cacau
- Mapeamento de uma linha do DataFrame para o model Order.
- Service e Mapper de resumo de pedidos por período.
- sheets/presentation/controller.py
- Meta
- DSButton
- maria_cacau/features/auth/presentation/viewmodel.py
- AuthController
- StatusBarController
- Receiver
- UserData
- .initialize
- SheetModel
- Maria-Cacau-Contagem/maria_cacau/backend/features/sheet/route.py
- AuthView
- CredentialsFormatError
- item/example.json
- address
- SummaryViewModel
- financial
- products
- maria_cacau/features/home/sub_features/summary/domain/signals.py
- .get_by_period
- customer
- delivery
- receiver
- event.schema.json
- maria_cacau/core/storage/__init__.py
- customization
- item/schema.json
- list/example.json
- meta
- ct
- event_id
- fn
- st
- zp
- ErrorMessages
- .is_success
- .json

## God Nodes (most connected - your core abstractions)
1. `SheetModel` - 29 edges
2. `DataSourceError` - 28 edges
3. `ErrorModel` - 25 edges
4. `HTTPResponse` - 23 edges
5. `SheetsController` - 23 edges
6. `API` - 21 edges
7. `_SheetsViewModel` - 20 edges
8. `DSChart` - 20 edges
9. `DataSourceError` - 20 edges
10. `SecurityStorage` - 19 edges

## Surprising Connections (you probably didn't know these)
- `main()` --calls--> `AppCoordinator`  [INFERRED]
  maria_cacau/__main__.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/app/coordinator.py
- `from_response()` --calls--> `DeliveryCount`  [INFERRED]
  /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/data/mapper.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/domain/models.py
- `from_response()` --calls--> `PendentOrder`  [INFERRED]
  /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/data/mapper.py → /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/domain/models.py
- `AppCoordinator` --uses--> `MainWindow`  [INFERRED]
  maria_cacau/app/coordinator.py → maria_cacau/app/window.py
- `GoogleSheetsDataSource` --uses--> `SheetNormalizer`  [INFERRED]
  maria_cacau/backend/data_source/_google_sheets.py → maria_cacau/backend/data_source/_normalizer.py

## Import Cycles
- 3-file cycle: `/Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/__init__.py -> /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/_google_sheets.py -> /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/_viewmodel.py -> /Users/kings/Documents/GitHub/Maria-Cacau-Contagem/maria_cacau/backend/data_source/__init__.py`
- 3-file cycle: `maria_cacau/backend/data_source/__init__.py -> maria_cacau/backend/data_source/_google_sheets.py -> maria_cacau/backend/data_source/_viewmodel.py -> maria_cacau/backend/data_source/__init__.py`

## Communities (215 total, 48 thin omitted)

### Community 0 - "Maria-Cacau-Contagem/maria_cacau/backend/data_source/errors/_errors.py"
Cohesion: 0.10
Nodes (19): ApiQuotaExceededError, ApiUnexpectedResponseError, CredentialsFileCorruptedError, CredentialsFileNotFoundError, CredentialsFormatError, CredentialsSaveError, DataSourceError, DataSourceNotReadyError (+11 more)

### Community 1 - "Maria-Cacau-Contagem/maria_cacau/features/cpf_validation/presentation/controller.py"
Cohesion: 0.17
Nodes (6): CpfValidationResult, Models utilizados no módulo, CpfValidationUseCase, _is_valid_cpf(), Valida um CPF pela regra dos dois dígitos verificadores (algoritmo da Receita Fe, CpfValidationViewModel

### Community 2 - ".get_by_date"
Cohesion: 0.14
Nodes (10): Retorna pedidos da data informada (DD/MM/YYYY)., Retorna todos os pedidos de uma data como DataFrame bruto., get_deliveries(), Rota de entregas — GET /orders/deliveries., to_response(), get_payments_pendent(), Rota de pagamentos — GET /orders/payments-pendent., Retorna pedidos com amount_pendent > 0 para a data informada. (+2 more)

### Community 3 - "AuthController"
Cohesion: 0.19
Nodes (4): AuthController, AuthView, AuthViewModel, QMenu

### Community 4 - "Maria-Cacau-Contagem/maria_cacau/core/network/api.py"
Cohesion: 0.14
Nodes (9): API, entity(), Comunicação alto nivel para chamadas de api, HTTPMethod, HTTP métodos disponíveis para uso, HTTPRequest, Dados e parâmetros de uma request, HTTPResponse (+1 more)

### Community 5 - "SheetsRepository"
Cohesion: 0.21
Nodes (6): RemoveSheetAPI, SelectSheetAPI, _extract_sheet_id(), Retorna o sheet_id da última planilha salva em cache, sem HTTP., SheetsRepository, SheetModel

### Community 6 - "Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/data/repository.py"
Cohesion: 0.17
Nodes (5): OrdersSummaryAPI, path(), Endpoints do backend consumidos pela feature Auth., Repository da feature Auth: gerencia storage seguro e chamadas ao backend., SummaryRepository

### Community 7 - ".log"
Cohesion: 0.16
Nodes (3): DeliveryController, Recebe o resultado do ViewModel, atualiza a view e loga a duração da consulta., SummaryController

### Community 8 - "DSButton"
Cohesion: 0.13
Nodes (7): DSButton, DSLoadingHandler, DSLoadingHandler, Deve ser chamado no __init__ do componente, após o super().__init__()., Implementar no componente: o que fazer com cada frame do spinner., Mixin que adiciona comportamento de loading animado a qualquer componente QObjec, QPushButton

### Community 9 - "Maria-Cacau-Contagem/maria_cacau/backend/features/orders/shared/models.py"
Cohesion: 0.17
Nodes (10): Address, Customer, Customization, Delivery, Event, Financial, Order, PaymentItem (+2 more)

### Community 10 - "DataSourceProtocol"
Cohesion: 0.14
Nodes (8): DataSourceProtocol, Autentica com o dict da service account e guarda o client em memória., Remove a planilha ativa da memória. Mantém as credenciais., Define a planilha ativa e dispara prewarm em background., Retorna pedidos no intervalo de datas informado (DD/MM/YYYY)., Contrato agnóstico de fonte de dados para pedidos., Retorna True se credentials e sheet estão configurados em memória., Protocol

### Community 13 - "Enum"
Cohesion: 0.20
Nodes (7): DSDialogIcon, DSDialogModel, DSButtonState, Services, FeatureEvents, Eventos de observabilidade da feature CPF Validation., Enum

### Community 15 - "DSChart"
Cohesion: 0.21
Nodes (4): DSChartType, DSChart, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., _short_label()

### Community 16 - "maria_cacau/backend/data_source/errors/_errors.py"
Cohesion: 0.17
Nodes (14): ApiQuotaExceededError, ApiUnexpectedResponseError, DataSourceError, DataSourceNotReadyError, NetworkTimeoutError, NetworkUnavailableError, PrewarmFailedError, Exception (+6 more)

### Community 17 - "Maria-Cacau-Contagem/maria_cacau/core/error/errors.py"
Cohesion: 0.06
Nodes (33): handle_backend_error(), handle_data_source_error(), handle_unexpected_error(), DeliveriesSummary, DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesRepository, Repositório de entregas — busca e prepara dados da planilha para o DeliveriesSer (+25 more)

### Community 20 - "Maria-Cacau-Contagem/maria_cacau/backend/utils/numbers.py"
Cohesion: 0.50
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

### Community 32 - "validation.py"
Cohesion: 0.17
Nodes (19): ConversionError, MetaAuthError, MetaNotConfiguredError, MetaRejectedError, MetaUnavailableError, NoContactError, NoPaymentDateError, OrderIgnoredError (+11 more)

### Community 41 - "SummaryController"
Cohesion: 0.15
Nodes (7): FeatureEvents, Enum, Eventos relacionados ao resumo de produtos por período., ProductsViewData, Controller da feature Summary: conecta signals da view ao ViewModel e trata…, SummaryController, View da feature Summary: resumo de produtos por período.

### Community 65 - ".__init__"
Cohesion: 0.12
Nodes (6): CredentialsFileNotFoundError, CredentialsSaveError, InvalidDateFormatError, SheetFieldNotWritableError, SheetIdInvalidError, _SheetsGuard

### Community 66 - "maria_cacau/features/cpf_validation/presentation/controller.py"
Cohesion: 0.08
Nodes (19): FeatureEvents, Enum, Eventos de observabilidade da feature CPF Validation., CpfValidationResult, Models utilizados no módulo, CpfValidationSignals, QObject, Canal de comunicação entre o ViewModel e o Controller. (+11 more)

### Community 67 - "auth/domain/signals.py"
Cohesion: 0.50
Nodes (3): AuthSignals, QObject, Canal de comunicação entre o ViewModel (background thread) e o Controller (main…

### Community 68 - "maria_cacau/backend/features/auth/route.py"
Cohesion: 0.09
Nodes (13): connect(), disconnect(), delete, Rotas de autenticação, AuthService, Service de autenticação — gerencia o estado de conexão do DataSource., delete, put (+5 more)

### Community 69 - "properties"
Cohesion: 0.09
Nodes (24): $ref, description, type, Delivery, Event, description, properties, required (+16 more)

### Community 70 - "maria_cacau/backend/features/orders/subfeatures/deliveries/service.py"
Cohesion: 0.05
Nodes (37): put_conversion(), put, Rota de conversão — PUT /orders/<pedido>/conversion., DeliveriesSummary, DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesRepository, DataFrame (+29 more)

### Community 71 - "HTTPResponse"
Cohesion: 0.09
Nodes (32): Comunicação alto nivel para chamadas de api, HTTPClientContract, LocalClient, Protocol, Realiza as request de fato, Contrato que qualquer client precisa cumprir., Roteia requests para o backend local (in-process). Nenhuma rede envolvida —…, clear_override() (+24 more)

### Community 72 - "ErrorModel"
Cohesion: 0.13
Nodes (19): AppError, certificado_limpo(), certificado_ok(), http_error(), planilha_conectada(), planilha_ok(), Exception, Códigos de erro da aplicação com estrutura AppError. (+11 more)

### Community 73 - "properties"
Cohesion: 0.09
Nodes (22): $ref, $ref, $ref, $ref, $ref, properties, description, type (+14 more)

### Community 74 - "maria_cacau/backend/data_source/__init__.py"
Cohesion: 0.14
Nodes (15): Normaliza headers inconsistentes da planilha para os valores canônicos dos…, Renomeia a coluna que segue prod3 para prod4, independente do header atual.…, Traduz headers reais da planilha para os nomes canônicos definidos nos enums.…, SheetNormalizer, PaymentCols, ProductCols, StrEnum, Mapeamento de colunas e tabs da planílha. (+7 more)

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

### Community 79 - "AppCoordinator"
Cohesion: 0.11
Nodes (12): AppCoordinator, BackendServer, configure(), Configura o client ativo., AppEvent, _Observability, Enum, Observabilidade centralizada do app. (+4 more)

### Community 80 - "DSChart"
Cohesion: 0.21
Nodes (6): DSChartType, Enum, DSChart, QWidget, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., _short_label()

### Community 81 - "AuthRepository"
Cohesion: 0.12
Nodes (11): ConnectAuthAPI, DisconnectAuthAPI, Endpoints do backend consumidos pela feature Auth., AuthRepository, Repository da feature Auth: gerencia storage seguro e chamadas ao backend., Lê o JSON do caminho, envia ao backend e persiste apenas se der sucesso., Reenvia credenciais ao backend com o sheet_id atual., Lê credenciais do storage sem fazer chamada HTTP. (+3 more)

### Community 82 - "maria_cacau/features/home/sub_features/delivery/data/repository.py"
Cohesion: 0.05
Nodes (35): Enum, Services, DeliveriesAPI, PaymentsPendentAPI, Definição dos endpoints do backend consumidos pela feature Delivery., DeliveriesMapper, ErrorMapper, PaymentsMapper (+27 more)

### Community 83 - "SheetsRepository"
Cohesion: 0.22
Nodes (4): SelectSheetAPI, _extract_sheet_id(), Retorna o sheet_id da última planilha salva em cache, sem HTTP., SheetsRepository

### Community 84 - "call"
Cohesion: 0.23
Nodes (7): ConnectAuthAPI, DisconnectAuthAPI, AuthRepository, Lê o JSON do caminho, envia ao backend e persiste apenas se der sucesso., Reenvia credenciais ao backend com o sheet_id atual., Remove credenciais do storage e desautentica o backend., call()

### Community 87 - "DataSourceProtocol"
Cohesion: 0.09
Nodes (12): DataSourceProtocol, Protocol, Autentica com o dict da service account e guarda o client em memória., Remove o client autenticado da memória. Mantém o sheet_id., Remove a planilha ativa da memória. Mantém as credenciais., Define a planilha ativa e dispara prewarm em background., Retorna pedidos da data informada (DD/MM/YYYY)., Retorna pedidos no intervalo de datas informado (DD/MM/YYYY). (+4 more)

### Community 88 - "utils/__init__.py"
Cohesion: 0.20
Nodes (15): build_user_data(), _hash(), Hash e montagem do `user_data` da Meta CAPI. A normalização de CEP, cidade/UF e…, Monta o bloco `user_data` com hash, a partir do dict devolvido pelo data…, normalize_zip(), Utilitários de endereço brasileiro: CEP e o par cidade/UF., Separa `"Rio de Janeiro - RJ"` em `("riodejaneiro", "rj")`. Usar a cidade crua…, Fallback de UF por faixa de CEP, para quando a cidade não tem UF extraível. (+7 more)

### Community 89 - "Maria-Cacau-Contagem/maria_cacau/backend/data_source/sheet_mapper.py"
Cohesion: 0.15
Nodes (10): PaymentCols, ProductCols, Mapeamento de colunas e tabs da planílha., Colunas fixas da aba Cadastro, agrupadas por domínio., Colunas dos slots de produto (1–7). Usar com .slot(n)., Colunas das parcelas de pagamento (1–6). Usar com .slot(n)., SheetCols, SheetTabs (+2 more)

### Community 91 - "Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/summary/presentation/controller.py"
Cohesion: 0.22
Nodes (4): SummarySignals, Controller da feature CPF Validation: conecta signals da view ao ViewModel e tra, _products_lines(), ViewModel da feature CPF Validation: executa o UseCase e emite resultado via sig

### Community 92 - "API"
Cohesion: 0.16
Nodes (9): EntityT, API, ABC, O tipo precisa aceitar **kwargs (dataclass ou similar)., HTTPMethod, StrEnum, HTTP métodos disponíveis para uso, Definição do endpoint do backend consumido pela feature Summary. (+1 more)

### Community 93 - "user_data"
Cohesion: 0.11
Nodes (17): action_source, custom_data, currency, value, event_id, event_name, event_time, $schema (+9 more)

### Community 94 - "DSDialog"
Cohesion: 0.22
Nodes (7): DSDialog, DSDialogIcon, DSDialogModel, Enum, asset(), Metadados centralizados do pacote maria-cacau., Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.

### Community 95 - "StatusBarController"
Cohesion: 0.15
Nodes (4): Enum, StatusBarState, StatusBarController, StatusBarView

### Community 97 - "Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/domain/models.py"
Cohesion: 0.22
Nodes (6): DeliveriesSummary, DeliveryCount, DeliveryModel, PendentOrder, DeliveryUseCase, Busca deliveries e payments em paralelo e retorna o modelo consolidado.

### Community 98 - "properties"
Cohesion: 0.11
Nodes (18): description, type, type, properties, type, amount_pendent, discount, pay_on_pickup (+10 more)

### Community 99 - "$defs"
Cohesion: 0.12
Nodes (15): description, required, type, $defs, Address, Financial, Order, description (+7 more)

### Community 100 - "maria_cacau/backend/_server.py"
Cohesion: 0.28
Nodes (10): errorhandler, BackendError, Exception, generic_mapper(), Exception, translate(), handle_backend_error(), handle_data_source_error() (+2 more)

### Community 102 - "_SheetsViewModel"
Cohesion: 0.15
Nodes (14): Client, SheetColumnNotFoundError, SheetWriteError, UnexpectedSheetStructureError, handle_api(), Encapsula o acesso à planilha: schema cacheado, prewarm, fetch e escrita., Localiza a linha do pedido pela chave, lendo só a coluna PEDIDO., Busca as linhas informadas, em batches de até 100 ranges, e normaliza o… (+6 more)

### Community 103 - "Maria-Cacau-Contagem/maria_cacau/backend/data_source/_normalizer.py"
Cohesion: 0.21
Nodes (9): _fix_prod4(), normalize(), Normaliza headers inconsistentes da planilha para os valores canônicos dos enums, Traduz headers reais da planilha para os nomes canônicos definidos nos enums., _rename_at(), _rename_keys(), SheetNormalizer, fetch() (+1 more)

### Community 105 - "strings.py"
Cohesion: 0.28
Nodes (5): MenuHandler, QMenu, MainWindow, QMenuBar, QRect

### Community 106 - "properties"
Cohesion: 0.13
Nodes (15): type, description, properties, required, type, Customer, description, type (+7 more)

### Community 107 - "payments/response/schema.json"
Cohesion: 0.14
Nodes (13): description, $ref, items, type, properties, orders, total, required (+5 more)

### Community 108 - "HomeController"
Cohesion: 0.28
Nodes (4): HomeController, HomeFeaturesModel, HomeView, QWidget

### Community 109 - "StorageHandler"
Cohesion: 0.21
Nodes (6): Backend de cache em arquivo JSON no diretório do usuário., Backend de armazenamento seguro via arquivo protegido no diretório do usuário., ABC, T, Contrato base para todos os backends de armazenamento., StorageHandler

### Community 110 - "conversion/service.py"
Cohesion: 0.26
Nodes (8): OrderNotFoundError, StrEnum, Vocabulário aceito na coluna `Meta Status`. A lista suspensa da planilha só…, SheetStatus, ConversionRepository, Repositório de conversão — único lugar que conhece SheetCols no contexto de…, ConversionService, Envio de um pedido para a Meta: revalida, envia e grava o resultado na planilha.

### Community 111 - "maria_cacau/features/home/sub_features/summary/data/repository.py"
Cohesion: 0.23
Nodes (9): OrdersSummaryAPI, ErrorMapper, OrdersSummaryMapper, Mappers de HTTPResponse para domain models e de HTTPResponseError para…, Repository da feature Summary: chama a API e converte erros HTTP em ErrorModel., SummaryRepository, OrderDetail, ProductCount (+1 more)

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
Cohesion: 0.29
Nodes (5): PaymentsMapper, PaymentsService, Service e Mapper de pagamentos pendentes., Serializa o resultado do PaymentsService para dict JSON-ready., Filtra pedidos com pagamento pendente e monta os objetos de domínio.

### Community 117 - "connect"
Cohesion: 0.20
Nodes (3): connect(), CpfValidationController, CpfValidationView

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

### Community 123 - "properties"
Cohesion: 0.15
Nodes (13): const, description, $ref, const, description, type, properties, action_source (+5 more)

### Community 124 - "FileStorage"
Cohesion: 0.31
Nodes (3): FileStorage, Path, Backend puro: só conhece o arquivo, sem lógica de decisão — quem escolhe usar…

### Community 126 - "SecurityStorage"
Cohesion: 0.29
Nodes (6): Decide o destino de `data`. `preferred` é a vontade do chamador; o tamanho pode…, resolve(), StorageLocation, `location` é preferência do chamador, não garantia — o resolver pode rebaixá-la., Keychain → pasta. Sem keychain disponível, só a pasta., SecurityStorage

### Community 128 - "Maria-Cacau-Contagem/maria_cacau/core/network/_config.py"
Cohesion: 0.20
Nodes (9): clear_override(), configure(), get_client(), override(), Configurações globais para uso do módulo, Configura o client ativo., Substitui o client — útil para testes ou WireMock., Remove o override. Volta ao client padrão. (+1 more)

### Community 129 - "DeliveryView"
Cohesion: 0.19
Nodes (4): DSGroupBox, DeliveryView, QGroupBox, QWidget

### Community 130 - "CacheStorage"
Cohesion: 0.31
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

### Community 137 - "AuthUseCase"
Cohesion: 0.22
Nodes (4): AuthUseCase, Regra de negócios: validação matemática de CPF., Lê o arquivo JSON, salva em storage seguro e autentica o backend., Remove credenciais do storage e desautentica o backend.

### Community 138 - "DSDateInput"
Cohesion: 0.22
Nodes (4): DSDateInput, DSTextInput, QDateEdit, QLineEdit

### Community 139 - "Backend"
Cohesion: 0.25
Nodes (7): Auth — `/auth`, Backend, Como funciona, Erros, Orders — `/orders`, Rotas disponíveis, Sheet — `/sheet`

### Community 140 - "maria_cacau/design_system/components/__init__.py"
Cohesion: 0.27
Nodes (4): DSDateInput, DSTextInput, DSLabel, QDate

### Community 141 - "CacheStorage"
Cohesion: 0.24
Nodes (3): Lê credenciais do storage sem fazer chamada HTTP., CacheStorage, Backend de cache em arquivo JSON no diretório do usuário.

### Community 142 - "DeliveryViewModel"
Cohesion: 0.43
Nodes (3): DeliveryViewData, DeliveryViewModel, Roda o UseCase, monta o ViewData e emite sucesso ou erro — sempre via signal par

### Community 143 - "Maria-Cacau-Contagem/maria_cacau/features/home/sub_features/delivery/presentation/controller.py"
Cohesion: 0.28
Nodes (4): CpfValidationSignals, DeliverySignals, Canal de comunicação entre o ViewModel e o Controller., QObject

### Community 145 - "_SheetsViewModel"
Cohesion: 0.40
Nodes (3): Encapsula o acesso à planilha: schema cacheado, prewarm e fetch., Carrega cabeçalho e índice da coluna DATA na primeira chamada; no-op nas seguint, _SheetsViewModel

### Community 146 - "properties"
Cohesion: 0.15
Nodes (13): description, $ref, description, $ref, description, $ref, description, $ref (+5 more)

### Community 147 - "to_datetime"
Cohesion: 0.47
Nodes (5): DateFormat, datetime, Enum, str, to_datetime()

### Community 148 - "properties"
Cohesion: 0.15
Nodes (13): minimum, type, type, PaymentItem, minimum, type, description, properties (+5 more)

### Community 149 - "properties"
Cohesion: 0.17
Nodes (12): type, type, description, properties, type, Customization, type, type (+4 more)

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

### Community 157 - "shared/mapper.py"
Cohesion: 0.06
Nodes (49): before_request, Customer, Customization, Delivery, Financial, OrdersRepository, DataFrame, Acessa o data source e entrega um DataFrame tipado para o OrdersService. Único… (+41 more)

### Community 159 - "payments/response/example.json"
Cohesion: 0.50
Nodes (3): orders, $schema, total

### Community 161 - "Maria-Cacau-Contagem/maria_cacau/backend/features/auth/route.py"
Cohesion: 0.20
Nodes (4): Rotas de autenticação, AuthService, Service de autenticação — gerencia o estado de conexão do DataSource., Remove o client autenticado da memória. Mantém o sheet_id.

### Community 166 - "CustomData"
Cohesion: 0.20
Nodes (10): const, properties, required, type, CustomData, currency, value, description (+2 more)

### Community 178 - "sheets/presentation/controller.py"
Cohesion: 0.18
Nodes (7): _EventBus, QObject, AppSession, FeatureEvents, Enum, QObject, SheetsSignals

### Community 179 - "Meta"
Cohesion: 0.20
Nodes (10): Meta, description, properties, type, sent_at, status, description, type (+2 more)

### Community 180 - "DSButton"
Cohesion: 0.40
Nodes (3): DSButton, DSButtonState, Enum

### Community 181 - "maria_cacau/features/auth/presentation/viewmodel.py"
Cohesion: 0.22
Nodes (4): AuthUseCase, Lê o arquivo JSON, salva em storage seguro e autentica o backend., Remove credenciais do storage e desautentica o backend., ViewModel da feature Auth: executa o UseCase em background e emite resultados…

### Community 182 - "AuthController"
Cohesion: 0.14
Nodes (6): FeatureEvents, Enum, Eventos observáveis da feature Auth., AuthController, Controller da feature Auth: conecta signals da view ao ViewModel e atualiza…, AuthViewModel

### Community 183 - "StatusBarController"
Cohesion: 0.09
Nodes (6): MainWindow, StatusBarState, StatusBarController, StatusBarView, QMainWindow, QStatusBar

### Community 184 - "Receiver"
Cohesion: 0.20
Nodes (10): Receiver, $ref, description, type, event, gender, description, properties (+2 more)

### Community 185 - "UserData"
Cohesion: 0.22
Nodes (9): $defs, Sha256, UserData, pattern, type, additionalProperties, description, minProperties (+1 more)

### Community 188 - "Maria-Cacau-Contagem/maria_cacau/backend/features/sheet/route.py"
Cohesion: 0.28
Nodes (4): remove_sheet(), select_sheet(), Service de planilha — gerencia a planilha ativa no DataSource., SheetService

### Community 189 - "AuthView"
Cohesion: 0.38
Nodes (3): AuthView, QMenu, View da feature Auth: menu Segurança com ações de certificado.

### Community 190 - "CredentialsFormatError"
Cohesion: 0.25
Nodes (3): CredentialsFileCorruptedError, CredentialsFormatError, InvalidCredentialsError

### Community 191 - "item/example.json"
Cohesion: 0.25
Nodes (7): number, products, products_note, $schema, source, status, tiny_code

### Community 192 - "address"
Cohesion: 0.25
Nodes (8): city, complement, neighborhood, number, state, street, zip, address

### Community 194 - "financial"
Cohesion: 0.25
Nodes (8): financial, amount_pendent, discount, pay_on_pickup, payments, shipping, subtotal, total

### Community 195 - "products"
Cohesion: 0.25
Nodes (8): $ref, items, type, items, minItems, type, payments, products

### Community 196 - "maria_cacau/features/home/sub_features/summary/domain/signals.py"
Cohesion: 0.50
Nodes (3): QObject, Canal de comunicação entre o ViewModel (background thread) e o Controller (main…, SummarySignals

### Community 197 - ".get_by_period"
Cohesion: 0.32
Nodes (6): _cast_numeric(), OrdersSummaryRepository, Repositório de pedidos por período — busca e prepara dados da planilha para o Or, Acessa o data source e entrega um DataFrame tipado para o OrdersService.      Ún, Retorna todos os pedidos de um período com colunas numéricas convertidas para fl, _to_dataframe()

### Community 198 - "customer"
Cohesion: 0.33
Nodes (6): customer, cpf, email, name, phone, relationship

### Community 199 - "delivery"
Cohesion: 0.33
Nodes (6): delivery, date, factory_notes, motoboy_info, receiver_name, type

### Community 200 - "receiver"
Cohesion: 0.33
Nodes (6): date, type, receiver, event, gender, name

### Community 201 - "event.schema.json"
Cohesion: 0.33
Nodes (5): description, required, $schema, title, type

### Community 202 - "maria_cacau/core/storage/__init__.py"
Cohesion: 0.40
Nodes (4): Superfície pública do storage. `FileStorage` e `KeychainStorage` são backends…, StrEnum, Chaves de storage lidas por mais de um consumidor — o front grava e o backend…, StorageKey

### Community 203 - "customization"
Cohesion: 0.40
Nodes (5): customization, box_art, box_name, label_name, label_theme

### Community 204 - "item/schema.json"
Cohesion: 0.40
Nodes (4): description, $ref, $schema, title

### Community 205 - "list/example.json"
Cohesion: 0.50
Nodes (3): orders, $schema, total

### Community 206 - "meta"
Cohesion: 0.67
Nodes (3): meta, sent_at, status

### Community 207 - "ct"
Cohesion: 0.67
Nodes (3): description, $ref, ct

### Community 208 - "event_id"
Cohesion: 0.67
Nodes (3): description, type, event_id

### Community 209 - "fn"
Cohesion: 0.67
Nodes (3): description, $ref, fn

### Community 210 - "st"
Cohesion: 0.67
Nodes (3): st, description, $ref

### Community 211 - "zp"
Cohesion: 0.67
Nodes (3): zp, description, $ref

## Knowledge Gaps
- **290 isolated node(s):** `$schema`, `number`, `status`, `source`, `tiny_code` (+285 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 839 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **48 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `HTTPResponse` connect `HTTPResponse` to `maria_cacau/backend/_server.py`, `AppCoordinator`, `maria_cacau/features/home/sub_features/summary/data/repository.py`, `maria_cacau/features/home/sub_features/delivery/data/repository.py`, `.is_success`, `.json`, `API`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `ErrorModel` connect `ErrorModel` to `maria_cacau/features/home/sub_features/summary/presentation/viewmodel.py`, `SummaryController`, `maria_cacau/features/home/sub_features/summary/data/repository.py`, `SheetsController`, `AuthRepository`, `maria_cacau/features/home/sub_features/delivery/data/repository.py`, `sheets/presentation/controller.py`, `AuthController`, `DSDialog`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `DSDialog` connect `DSDialog` to `DeliveryView`, `Enum`, `AuthController`, `SummaryView`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `SheetModel` (e.g. with `SheetsRepository` and `SheetsUseCase`) actually correct?**
  _`SheetModel` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `HTTPResponse` (e.g. with `API` and `HTTPClientContract`) actually correct?**
  _`HTTPResponse` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `number`, `status` to the rest of the system?**
  _290 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Maria-Cacau-Contagem/maria_cacau/backend/data_source/errors/_errors.py` be split into smaller, more focused modules?**
  _Cohesion score 0.10099573257467995 - nodes in this community are weakly interconnected._