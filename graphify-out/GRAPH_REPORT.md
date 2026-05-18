# Graph Report - Maria-Cacau-Contagem  (2026-05-18)

## Corpus Check
- 96 files · ~604,222 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 657 nodes · 1349 edges · 29 communities detected
- Extraction: 56% EXTRACTED · 44% INFERRED · 0% AMBIGUOUS · INFERRED: 597 edges (avg confidence: 0.62)
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
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]

## God Nodes (most connected - your core abstractions)
1. `SecurityStorage` - 36 edges
2. `AppEvent` - 34 edges
3. `GuiPopup` - 33 edges
4. `AuxWidgets` - 31 edges
5. `GuiMain` - 31 edges
6. `ChartWidget` - 26 edges
7. `GuiProdutos` - 26 edges
8. `HTTPResponse` - 25 edges
9. `OrdersView` - 25 edges
10. `GuiStatusBar` - 22 edges

## Surprising Connections (you probably didn't know these)
- `Processa os dados da aba Cadastro da planilha Google Sheets.` --uses--> `GuiPopup`  [INFERRED]
  core/sheets/handlers/cadastro.py → maria_cacau/design_system/gui_popup.py
- `Entry point da aplicação. Execute com: python -m maria_cacau` --uses--> `GuiMain`  [INFERRED]
  __main__.py → maria_cacau/features/home/home_view.py
- `AppEvent` --uses--> `Janela principal da aplicação e orquestração das sub-features.`  [INFERRED]
  maria_cacau/core/observability.py → features/home/home_view.py
- `AppEvent` --uses--> `Área de validação de CPF: interface gráfica e lógica de verificação.`  [INFERRED]
  maria_cacau/core/observability.py → features/home/sub_features/cpf_validation/cpf_validation_view.py
- `AppEvent` --uses--> `Lê o .json da Service Account, autentica e salva em ~/.mariacacau/.`  [INFERRED]
  maria_cacau/core/observability.py → core/sheets/service.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (21): ChartType, ChartWidget, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov, _short_label(), AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., AuxWidgets (+13 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (29): AuxWidgets, GuiValiCpf, Autentica com o JSON bruto da service account e guarda o client em memória., Define a planilha ativa e dispara prewarm em background., GuiPopup, GuiConsFrete, _BackgroundWidget, _DialogConectarPlanilha (+21 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (43): BackendServer, API, call(), entity(), Comunicação alto nivel para chamadas de api, O tipo precisa aceitar **kwargs (dataclass ou similar)., O tipo precisa aceitar **kwargs (dataclass ou similar)., HTTPClientContract (+35 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (35): AppEvent, delete_credentials(), read_credentials(), read_sheets(), write_credentials(), write_sheets(), GoogleSheetsService, Autenticação e acesso ao Google Sheets. (+27 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (28): GoogleSheetsDataSource, Implementação de DataSourceProtocol para Google Sheets via gspread., PaymentCols, ProductCols, Mapeamento de colunas e tabs da planílha., Colunas fixas da aba Cadastro, agrupadas por domínio., Colunas dos slots de produto (1–7). Usar com .slot(n)., Colunas das parcelas de pagamento (1–6). Usar com .slot(n). (+20 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (26): handle_data_source_error(), ApiQuotaExceededError, ApiUnexpectedResponseError, BackendError, CredentialsFileCorruptedError, CredentialsFileNotFoundError, CredentialsFormatError, CredentialsSaveError (+18 more)

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (30): DeliveriesSummary, DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesRepository, Repositório de entregas — busca e prepara dados da planilha para o DeliveriesSer, Retorna todos os pedidos de uma data como DataFrame bruto., Acessa o data source e entrega um DataFrame para o DeliveriesService.      Não f, get_deliveries() (+22 more)

### Community 7 - "Community 7"
Cohesion: 0.09
Nodes (22): PopupIcon, Janela de popup para exibição de erros e informações ao usuário., Enum, Área de entregas pendentes: controller da view., FeatureEvents, Eventos relacionados às entregas pendentes., DeliveryModel, OrdersModel (+14 more)

### Community 8 - "Community 8"
Cohesion: 0.09
Nodes (18): DataSourceProtocol, Retorna pedidos da data informada (DD/MM/YYYY)., Retorna pedidos no intervalo de datas informado (DD/MM/YYYY)., Contrato agnóstico de fonte de dados para pedidos., Retorna True se credentials e sheet estão configurados em memória., Protocol, OrdersRepository, Repositório de pedidos — busca por período para o OrdersService. (+10 more)

### Community 9 - "Community 9"
Cohesion: 0.09
Nodes (9): _Observability, Observabilidade centralizada do app., _is_valid_cpf(), Área de validação de CPF: interface gráfica e lógica de verificação., main(), main(), main(), main() (+1 more)

### Community 10 - "Community 10"
Cohesion: 0.24
Nodes (22): _customer(), _customization(), _delivery(), _financial(), OrderMapper, _payments(), _products(), Mapeamento de uma linha do DataFrame para o model Order. (+14 more)

### Community 11 - "Community 11"
Cohesion: 0.12
Nodes (12): CadastroAnalyseHandler, _normalize_headers(), Processa os dados da aba Cadastro da planilha Google Sheets., Orquestra a autenticação e o acesso às abas da planilha., Autentica e aponta para a planilha. Não lê dados ainda., Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê entregas de uma data específica direto da planilha (sem cache global). (+4 more)

### Community 12 - "Community 12"
Cohesion: 0.13
Nodes (14): PopupModel, AppError, certificado_limpo(), certificado_ok(), planilha_conectada(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso. (+6 more)

### Community 13 - "Community 13"
Cohesion: 0.18
Nodes (5): ABC, Backend de cache em arquivo JSON no diretório do usuário., Contrato base para todos os backends de armazenamento., StorageHandler, Backend de armazenamento seguro via arquivo protegido no diretório do usuário.

### Community 14 - "Community 14"
Cohesion: 0.29
Nodes (4): _date_field(), DateRangePicker, POC — date picker moderno com QDateEdit + QSS., QWidget

### Community 15 - "Community 15"
Cohesion: 0.4
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

### Community 16 - "Community 16"
Cohesion: 0.5
Nodes (3): asset(), Metadados centralizados do pacote maria-cacau., Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.

### Community 20 - "Community 20"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

### Community 35 - "Community 35"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 36 - "Community 36"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): Códigos de erro da aplicação com estrutura AppError.

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): Estrutura de uma mensagem de erro/info para exibição no PopUp.

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (1): Confirmação de certificado configurado com sucesso.

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): Confirmação de credenciais removidas com sucesso.

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Confirmação de planilha selecionada com sucesso.

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): Confirmação de leitura bem-sucedida da planilha.

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): r"""Decodifica o body para um objeto.

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

## Knowledge Gaps
- **71 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib.`, `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`, `Observabilidade centralizada do app.` (+66 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 20`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `Códigos de erro da aplicação com estrutura AppError.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Estrutura de uma mensagem de erro/info para exibição no PopUp.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `Confirmação de certificado configurado com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `Confirmação de credenciais removidas com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Confirmação de planilha selecionada com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `Confirmação de leitura bem-sucedida da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `r"""Decodifica o body para um objeto.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AppEvent` connect `Community 3` to `Community 9`, `Community 1`, `Community 7`?**
  _High betweenness centrality (0.178) - this node is a cross-community bridge._
- **Why does `DataSourceProtocol` connect `Community 8` to `Community 1`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Why does `GuiPopup` connect `Community 1` to `Community 0`, `Community 11`, `Community 7`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **Are the 29 inferred relationships involving `SecurityStorage` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`SecurityStorage` has 29 INFERRED edges - model-reasoned connections that need verification._
- **Are the 32 inferred relationships involving `AppEvent` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`AppEvent` has 32 INFERRED edges - model-reasoned connections that need verification._
- **Are the 28 inferred relationships involving `GuiPopup` (e.g. with `OrdersView` and `Área de entregas pendentes: resumo diário com inadimplências.`) actually correct?**
  _`GuiPopup` has 28 INFERRED edges - model-reasoned connections that need verification._
- **Are the 19 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 19 INFERRED edges - model-reasoned connections that need verification._