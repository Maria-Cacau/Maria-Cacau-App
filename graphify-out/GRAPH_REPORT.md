# Graph Report - Maria-Cacau-Contagem  (2026-05-19)

## Corpus Check
- 166 files · ~609,587 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 967 nodes · 2002 edges · 70 communities detected
- Extraction: 54% EXTRACTED · 46% INFERRED · 0% AMBIGUOUS · INFERRED: 922 edges (avg confidence: 0.61)
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
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 83|Community 83]]
- [[_COMMUNITY_Community 84|Community 84]]
- [[_COMMUNITY_Community 85|Community 85]]
- [[_COMMUNITY_Community 86|Community 86]]
- [[_COMMUNITY_Community 87|Community 87]]
- [[_COMMUNITY_Community 88|Community 88]]
- [[_COMMUNITY_Community 89|Community 89]]
- [[_COMMUNITY_Community 90|Community 90]]

## God Nodes (most connected - your core abstractions)
1. `SecurityStorage` - 44 edges
2. `AuxWidgets` - 38 edges
3. `GuiPopup` - 35 edges
4. `ChartWidget` - 32 edges
5. `AppEvent` - 29 edges
6. `HTTPResponse` - 26 edges
7. `DeliveryView` - 23 edges
8. `SheetsController` - 21 edges
9. `DataSourceError` - 21 edges
10. `connect()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `AuxWidgets` --uses--> `Área de validação de CPF: interface gráfica e lógica de verificação.`  [INFERRED]
  maria_cacau/design_system/aux_widgets.py → features/home/sub_features/cpf_validation/cpf_validation_view.py
- `Entry point da aplicação. Execute com: python -m maria_cacau` --uses--> `BackendServer`  [INFERRED]
  __main__.py → maria_cacau/backend/_server.py
- `AppEvent` --uses--> `Autenticação e acesso ao Google Sheets.`  [INFERRED]
  maria_cacau/core/observability.py → core/sheets/service.py
- `AppEvent` --uses--> `Tenta autenticar usando credenciais salvas. Retorna False se não houver.`  [INFERRED]
  maria_cacau/core/observability.py → core/sheets/service.py
- `AppEvent` --uses--> `Área de validação de CPF: interface gráfica e lógica de verificação.`  [INFERRED]
  maria_cacau/core/observability.py → features/home/sub_features/cpf_validation/cpf_validation_view.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (47): connect(), AuxWidgets, ChartType, ChartWidget, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov, _short_label(), AuxFrame (+39 more)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (60): GoogleSheetsDataSource, Implementação de DataSourceProtocol para Google Sheets via gspread., Implementação de DataSourceProtocol para Google Sheets via gspread., _fix_prod4(), normalize(), Normaliza headers inconsistentes da planilha para os valores canônicos dos enums, Renomeia a coluna que segue prod3 para prod4, independente do header atual., Traduz headers reais da planilha para os nomes canônicos definidos nos enums. (+52 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (20): Retorna pedidos da data informada (DD/MM/YYYY)., DeliveryModel, DeliveryUseCase, Busca deliveries e payments em paralelo e retorna o modelo consolidado., main(), main(), main(), main() (+12 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (27): _EventBus, AppSession, CpfValidationResult, DaySummary, ProductCount, ProductsSummary, ProductsViewData, Models utilizados no módulo (+19 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (43): AppCoordinator, BackendServer, main(), Entry point da aplicação. Execute com: python -m maria_cacau, entity(), Comunicação alto nivel para chamadas de api, O tipo precisa aceitar **kwargs (dataclass ou similar)., O tipo precisa aceitar **kwargs (dataclass ou similar). (+35 more)

### Community 5 - "Community 5"
Cohesion: 0.08
Nodes (26): API, ConnectAuthAPI, DisconnectAuthAPI, path(), Definição dos endpoints do backend consumidos pela feature Delivery., RemoveSheetAPI, SelectSheetAPI, AuthRepository (+18 more)

### Community 6 - "Community 6"
Cohesion: 0.05
Nodes (42): ABC, AppEvent, _Observability, Observabilidade centralizada do app., Área de validação de CPF: interface gráfica e lógica de verificação., Janela principal da aplicação e orquestração das sub-features., # TODO: MIGRAR, # TODO: MIGRAR (+34 more)

### Community 7 - "Community 7"
Cohesion: 0.06
Nodes (7): SheetsUseCase, SheetsController, SheetsViewModel, QDialog, QMenu, SheetCreateView, SheetsMenuView

### Community 8 - "Community 8"
Cohesion: 0.12
Nodes (27): Services, DeliveriesAPI, OrdersSummaryAPI, PaymentsPendentAPI, DeliveriesMapper, ErrorMapper, from_response(), OrdersSummaryMapper (+19 more)

### Community 9 - "Community 9"
Cohesion: 0.08
Nodes (29): DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesRepository, Repositório de entregas — busca e prepara dados da planilha para o DeliveriesSer, Retorna todos os pedidos de uma data como DataFrame bruto., Acessa o data source e entrega um DataFrame para o DeliveriesService.      Não f, get_deliveries(), Rota de entregas — GET /orders/deliveries. (+21 more)

### Community 10 - "Community 10"
Cohesion: 0.1
Nodes (25): handle_backend_error(), handle_data_source_error(), handle_unexpected_error(), AppError, certificado_limpo(), certificado_ok(), http_error(), planilha_conectada() (+17 more)

### Community 11 - "Community 11"
Cohesion: 0.09
Nodes (7): MenuHandler, MainWindow, CpfValidationController, QMainWindow, HomeController, HomeFeaturesModel, HomeView

### Community 12 - "Community 12"
Cohesion: 0.27
Nodes (24): _customer(), _customization(), _delivery(), _financial(), OrderMapper, _payments(), _products(), Mapeamento de uma linha do DataFrame para o model Order. (+16 more)

### Community 13 - "Community 13"
Cohesion: 0.14
Nodes (4): StatusBarState, StatusBarController, StatusBarView, QStatusBar

### Community 14 - "Community 14"
Cohesion: 0.09
Nodes (12): Rotas de autenticação, AuthService, Service de autenticação — gerencia o estado de conexão do DataSource., DataSourceProtocol, Autentica com o JSON bruto da service account e guarda o client em memória., Define a planilha ativa e dispara prewarm em background., Retorna pedidos no intervalo de datas informado (DD/MM/YYYY)., Retorna pedidos no intervalo de datas informado (DD/MM/YYYY). (+4 more)

### Community 15 - "Community 15"
Cohesion: 0.12
Nodes (7): AuthUseCase, Lê o arquivo JSON, salva em storage seguro e autentica o backend., Remove credenciais do storage e desautentica o backend., AuthController, Tenta autenticar no startup usando credenciais salvas em storage., AuthView, AuthViewModel

### Community 16 - "Community 16"
Cohesion: 0.15
Nodes (14): _cast_numeric(), OrdersSummaryRepository, Repositório de pedidos — busca por período para o OrdersService., Retorna todos os pedidos de um período como DataFrame., Retorna todos os pedidos de um período com colunas numéricas convertidas para fl, _to_dataframe(), get_orders(), Rota de pedidos — GET /orders. (+6 more)

### Community 17 - "Community 17"
Cohesion: 0.4
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

### Community 36 - "Community 36"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 37 - "Community 37"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): Barra de status da aplicação: planilha conectada, credenciais e estado de carreg

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Lê o arquivo JSON, salva em storage seguro e autentica o backend.

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): Autentica usando credenciais já salvas. Retorna False se não houver.

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Remove credenciais do storage e desautentica o backend.

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): Colunas usadas da planilha

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): Orquestra a autenticação e o acesso às abas da planilha.

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): Autentica e aponta para a planilha. Não lê dados ainda.

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (1): Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (1): Lê entregas de uma data específica direto da planilha (sem cache global).

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (1): Descarta os dados em memória, forçando nova leitura na próxima consulta.

### Community 54 - "Community 54"
Cohesion: 1.0
Nodes (1): Serializa o resultado do OrdersService para dict JSON-ready.

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (1): Aplica regra de negócio sobre os pedidos de um período e retorna o resumo.

### Community 56 - "Community 56"
Cohesion: 1.0
Nodes (1): Acessa o data source e entrega um DataFrame para o OrdersService.

### Community 57 - "Community 57"
Cohesion: 1.0
Nodes (1): Acessa o data source e entrega um DataFrame para o OrdersService.

### Community 58 - "Community 58"
Cohesion: 1.0
Nodes (1): Estrutura de uma mensagem de erro/info para exibição no PopUp.

### Community 59 - "Community 59"
Cohesion: 1.0
Nodes (1): Confirmação de certificado configurado com sucesso.

### Community 60 - "Community 60"
Cohesion: 1.0
Nodes (1): Confirmação de credenciais removidas com sucesso.

### Community 61 - "Community 61"
Cohesion: 1.0
Nodes (1): Confirmação de planilha selecionada com sucesso.

### Community 62 - "Community 62"
Cohesion: 1.0
Nodes (1): Confirmação de leitura bem-sucedida da planilha.

### Community 63 - "Community 63"
Cohesion: 1.0
Nodes (1): Lógica de negócio para obter as deliveries e pagamentos pendentes.

### Community 64 - "Community 64"
Cohesion: 1.0
Nodes (1): Sinais compartilhadaos dentro do módulo

### Community 65 - "Community 65"
Cohesion: 1.0
Nodes (1): Área de entregas pendentes: controller da view.

### Community 66 - "Community 66"
Cohesion: 1.0
Nodes (1): Models utilizados no módulo

### Community 67 - "Community 67"
Cohesion: 1.0
Nodes (1): Eventos relacionados às entregas pendentes.

### Community 68 - "Community 68"
Cohesion: 1.0
Nodes (1): Regra de negócios das entregas

### Community 69 - "Community 69"
Cohesion: 1.0
Nodes (1): Conexão com serviço da planilha/base de dados

### Community 70 - "Community 70"
Cohesion: 1.0
Nodes (1): Normaliza uma data para DD/MM/YYYY aceitando os formatos DD/MM/YY e DD/MM/YYYY.

### Community 71 - "Community 71"
Cohesion: 1.0
Nodes (1): Converte linhas da planilha em lista de dicts usando o cabeçalho como chaves (lo

### Community 72 - "Community 72"
Cohesion: 1.0
Nodes (1): Agrupa números de linha consecutivos em ranges A1 notation e divide em batches d

### Community 73 - "Community 73"
Cohesion: 1.0
Nodes (1): Retorna o conjunto de todas as datas (DD/MM/YYYY) entre start e end, inclusive.

### Community 74 - "Community 74"
Cohesion: 1.0
Nodes (1): Acessa o data source e entrega um DataFrame tipado para o PaymentsService.

### Community 75 - "Community 75"
Cohesion: 1.0
Nodes (1): Retorna todos os pedidos de uma data com colunas numéricas convertidas para floa

### Community 76 - "Community 76"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 77 - "Community 77"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 78 - "Community 78"
Cohesion: 1.0
Nodes (1): Códigos de erro da aplicação com estrutura AppError.

### Community 79 - "Community 79"
Cohesion: 1.0
Nodes (1): Estrutura de uma mensagem de erro/info para exibição no PopUp.

### Community 80 - "Community 80"
Cohesion: 1.0
Nodes (1): Confirmação de certificado configurado com sucesso.

### Community 81 - "Community 81"
Cohesion: 1.0
Nodes (1): Confirmação de credenciais removidas com sucesso.

### Community 82 - "Community 82"
Cohesion: 1.0
Nodes (1): Confirmação de planilha selecionada com sucesso.

### Community 83 - "Community 83"
Cohesion: 1.0
Nodes (1): Confirmação de leitura bem-sucedida da planilha.

### Community 84 - "Community 84"
Cohesion: 1.0
Nodes (1): Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov

### Community 85 - "Community 85"
Cohesion: 1.0
Nodes (1): Autentica e aponta para a planilha. Não lê dados ainda.

### Community 86 - "Community 86"
Cohesion: 1.0
Nodes (1): Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati

### Community 87 - "Community 87"
Cohesion: 1.0
Nodes (1): Lê entregas de uma data específica direto da planilha (sem cache global).

### Community 88 - "Community 88"
Cohesion: 1.0
Nodes (1): Descarta os dados em memória, forçando nova leitura na próxima consulta.

### Community 89 - "Community 89"
Cohesion: 1.0
Nodes (1): r"""Decodifica o body para um objeto.

### Community 90 - "Community 90"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

## Knowledge Gaps
- **106 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib.`, `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`, `Observabilidade centralizada do app.` (+101 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 18`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `Barra de status da aplicação: planilha conectada, credenciais e estado de carreg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Lê o arquivo JSON, salva em storage seguro e autentica o backend.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `Autentica usando credenciais já salvas. Retorna False se não houver.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Remove credenciais do storage e desautentica o backend.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `Colunas usadas da planilha`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `Orquestra a autenticação e o acesso às abas da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Autentica e aponta para a planilha. Não lê dados ainda.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `Lê entregas de uma data específica direto da planilha (sem cache global).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `Descarta os dados em memória, forçando nova leitura na próxima consulta.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (1 nodes): `Serializa o resultado do OrdersService para dict JSON-ready.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (1 nodes): `Aplica regra de negócio sobre os pedidos de um período e retorna o resumo.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `Acessa o data source e entrega um DataFrame para o OrdersService.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 57`** (1 nodes): `Acessa o data source e entrega um DataFrame para o OrdersService.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 58`** (1 nodes): `Estrutura de uma mensagem de erro/info para exibição no PopUp.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 59`** (1 nodes): `Confirmação de certificado configurado com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 60`** (1 nodes): `Confirmação de credenciais removidas com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 61`** (1 nodes): `Confirmação de planilha selecionada com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 62`** (1 nodes): `Confirmação de leitura bem-sucedida da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 63`** (1 nodes): `Lógica de negócio para obter as deliveries e pagamentos pendentes.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 64`** (1 nodes): `Sinais compartilhadaos dentro do módulo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 65`** (1 nodes): `Área de entregas pendentes: controller da view.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (1 nodes): `Models utilizados no módulo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (1 nodes): `Eventos relacionados às entregas pendentes.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 68`** (1 nodes): `Regra de negócios das entregas`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 69`** (1 nodes): `Conexão com serviço da planilha/base de dados`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 70`** (1 nodes): `Normaliza uma data para DD/MM/YYYY aceitando os formatos DD/MM/YY e DD/MM/YYYY.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 71`** (1 nodes): `Converte linhas da planilha em lista de dicts usando o cabeçalho como chaves (lo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (1 nodes): `Agrupa números de linha consecutivos em ranges A1 notation e divide em batches d`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 73`** (1 nodes): `Retorna o conjunto de todas as datas (DD/MM/YYYY) entre start e end, inclusive.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (1 nodes): `Acessa o data source e entrega um DataFrame tipado para o PaymentsService.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (1 nodes): `Retorna todos os pedidos de uma data com colunas numéricas convertidas para floa`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 76`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 77`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 78`** (1 nodes): `Códigos de erro da aplicação com estrutura AppError.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 79`** (1 nodes): `Estrutura de uma mensagem de erro/info para exibição no PopUp.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (1 nodes): `Confirmação de certificado configurado com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 81`** (1 nodes): `Confirmação de credenciais removidas com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 82`** (1 nodes): `Confirmação de planilha selecionada com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 83`** (1 nodes): `Confirmação de leitura bem-sucedida da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 84`** (1 nodes): `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 85`** (1 nodes): `Autentica e aponta para a planilha. Não lê dados ainda.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 86`** (1 nodes): `Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 87`** (1 nodes): `Lê entregas de uma data específica direto da planilha (sem cache global).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 88`** (1 nodes): `Descarta os dados em memória, forçando nova leitura na próxima consulta.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 89`** (1 nodes): `r"""Decodifica o body para um objeto.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 90`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `FeatureEvents` connect `Community 8` to `Community 2`, `Community 3`, `Community 7`, `Community 11`, `Community 15`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Why does `GuiPopup` connect `Community 0` to `Community 2`, `Community 3`, `Community 6`, `Community 7`, `Community 8`, `Community 15`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Why does `SheetsController` connect `Community 7` to `Community 0`, `Community 2`, `Community 5`, `Community 8`, `Community 11`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Are the 37 inferred relationships involving `SecurityStorage` (e.g. with `StorageHandler` and `AuthRepository`) actually correct?**
  _`SecurityStorage` has 37 INFERRED edges - model-reasoned connections that need verification._
- **Are the 26 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 26 INFERRED edges - model-reasoned connections that need verification._
- **Are the 29 inferred relationships involving `GuiPopup` (e.g. with `DeliveryView` and `Área de entregas pendentes: resumo diário com inadimplências.`) actually correct?**
  _`GuiPopup` has 29 INFERRED edges - model-reasoned connections that need verification._
- **Are the 20 inferred relationships involving `ChartWidget` (e.g. with `DeliveryView` and `Área de entregas pendentes: resumo diário com inadimplências.`) actually correct?**
  _`ChartWidget` has 20 INFERRED edges - model-reasoned connections that need verification._