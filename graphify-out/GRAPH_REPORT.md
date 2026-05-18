# Graph Report - Maria-Cacau-Contagem  (2026-05-18)

## Corpus Check
- 94 files · ~604,158 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 646 nodes · 1349 edges · 22 communities detected
- Extraction: 55% EXTRACTED · 45% INFERRED · 0% AMBIGUOUS · INFERRED: 602 edges (avg confidence: 0.62)
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
2. `AppEvent` - 34 edges
3. `GuiPopup` - 34 edges
4. `AuxWidgets` - 31 edges
5. `GuiMain` - 31 edges
6. `ChartWidget` - 26 edges
7. `GuiProdutos` - 26 edges
8. `HTTPResponse` - 25 edges
9. `OrdersView` - 25 edges
10. `GuiStatusBar` - 22 edges

## Surprising Connections (you probably didn't know these)
- `AppError` --uses--> `Janela de popup para exibição de erros e informações ao usuário.`  [INFERRED]
  maria_cacau/core/errors.py → design_system/gui_popup.py
- `Processa os dados da aba Cadastro da planilha Google Sheets.` --uses--> `GuiPopup`  [INFERRED]
  core/sheets/handlers/cadastro.py → maria_cacau/design_system/gui_popup.py
- `Entry point da aplicação. Execute com: python -m maria_cacau` --uses--> `GuiMain`  [INFERRED]
  __main__.py → maria_cacau/features/home/home_view.py
- `AppEvent` --uses--> `Janela principal da aplicação e orquestração das sub-features.`  [INFERRED]
  maria_cacau/core/observability.py → features/home/home_view.py
- `AppEvent` --uses--> `Área de validação de CPF: interface gráfica e lógica de verificação.`  [INFERRED]
  maria_cacau/core/observability.py → features/home/sub_features/cpf_validation/cpf_validation_view.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (38): AuxWidgets, planilha_conectada(), Confirmação de planilha selecionada com sucesso., GuiValiCpf, _is_valid_cpf(), Área de validação de CPF: interface gráfica e lógica de verificação., Autentica com o JSON bruto da service account e guarda o client em memória., Define a planilha ativa e dispara prewarm em background. (+30 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (20): ChartType, ChartWidget, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov, _short_label(), AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., AuxWidgets (+12 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (36): AppEvent, _Observability, Observabilidade centralizada do app., delete_credentials(), read_credentials(), read_sheets(), write_credentials(), write_sheets() (+28 more)

### Community 3 - "Community 3"
Cohesion: 0.07
Nodes (42): BackendServer, API, call(), entity(), Comunicação alto nivel para chamadas de api, O tipo precisa aceitar **kwargs (dataclass ou similar)., O tipo precisa aceitar **kwargs (dataclass ou similar)., HTTPClientContract (+34 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (26): PopupIcon, PopupModel, Janela de popup para exibição de erros e informações ao usuário., Enum, OrdersController, Área de entregas pendentes: controller da view., FeatureEvents, Eventos relacionados às entregas pendentes. (+18 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (29): GoogleSheetsDataSource, Implementação de DataSourceProtocol para Google Sheets via gspread., PaymentCols, ProductCols, Mapeamento de colunas e tabs da planílha., Colunas fixas da aba Cadastro, agrupadas por domínio., Colunas dos slots de produto (1–7). Usar com .slot(n)., Colunas das parcelas de pagamento (1–6). Usar com .slot(n). (+21 more)

### Community 6 - "Community 6"
Cohesion: 0.07
Nodes (26): handle_data_source_error(), ApiQuotaExceededError, ApiUnexpectedResponseError, BackendError, CredentialsFileCorruptedError, CredentialsFileNotFoundError, CredentialsFormatError, CredentialsSaveError (+18 more)

### Community 7 - "Community 7"
Cohesion: 0.08
Nodes (22): AppError, certificado_limpo(), certificado_ok(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso., Confirmação de credenciais removidas com sucesso., Confirmação de leitura bem-sucedida da planilha. (+14 more)

### Community 8 - "Community 8"
Cohesion: 0.09
Nodes (17): DataSourceProtocol, Retorna pedidos da data informada (DD/MM/YYYY)., Retorna pedidos no intervalo de datas informado (DD/MM/YYYY)., Contrato agnóstico de fonte de dados para pedidos., Retorna True se credentials e sheet estão configurados em memória., Protocol, OrdersRepository, Repositório de pedidos — busca por período para o OrdersService. (+9 more)

### Community 9 - "Community 9"
Cohesion: 0.26
Nodes (22): _customer(), _customization(), _delivery(), _financial(), OrderMapper, _payments(), _products(), Mapeamento de uma linha do DataFrame para o model Order. (+14 more)

### Community 10 - "Community 10"
Cohesion: 0.19
Nodes (16): DeliveriesSummary, DeliveryTypeCount, Models de domínio da feature de entregas., DeliveriesRepository, Repositório de entregas — busca e prepara dados da planilha para o DeliveriesSer, Retorna todos os pedidos de uma data como DataFrame bruto., Acessa o data source e entrega um DataFrame para o DeliveriesService.      Não f, get_deliveries() (+8 more)

### Community 11 - "Community 11"
Cohesion: 0.15
Nodes (14): _cast_numeric(), PaymentsRepository, Repositório de pagamentos — busca e prepara dados da planilha para o PaymentsSer, Acessa o data source e entrega um DataFrame tipado para o PaymentsService., Retorna todos os pedidos de uma data com colunas numéricas convertidas para floa, _to_dataframe(), get_payments_pendent(), Rota de pagamentos — GET /orders/payments-pendent. (+6 more)

### Community 12 - "Community 12"
Cohesion: 0.18
Nodes (5): ABC, Backend de cache em arquivo JSON no diretório do usuário., Contrato base para todos os backends de armazenamento., StorageHandler, Backend de armazenamento seguro via arquivo protegido no diretório do usuário.

### Community 13 - "Community 13"
Cohesion: 0.29
Nodes (4): _date_field(), DateRangePicker, POC — date picker moderno com QDateEdit + QSS., QWidget

### Community 14 - "Community 14"
Cohesion: 0.33
Nodes (3): asset(), Metadados centralizados do pacote maria-cacau., Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.

### Community 15 - "Community 15"
Cohesion: 0.4
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

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
- **65 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib.`, `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`, `Observabilidade centralizada do app.` (+60 more)
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

- **Why does `AppEvent` connect `Community 2` to `Community 0`, `Community 4`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **Why does `DataSourceProtocol` connect `Community 8` to `Community 0`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **Why does `GuiPopup` connect `Community 0` to `Community 1`, `Community 4`, `Community 14`, `Community 7`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Are the 29 inferred relationships involving `SecurityStorage` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`SecurityStorage` has 29 INFERRED edges - model-reasoned connections that need verification._
- **Are the 32 inferred relationships involving `AppEvent` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`AppEvent` has 32 INFERRED edges - model-reasoned connections that need verification._
- **Are the 29 inferred relationships involving `GuiPopup` (e.g. with `OrdersView` and `Área de entregas pendentes: resumo diário com inadimplências.`) actually correct?**
  _`GuiPopup` has 29 INFERRED edges - model-reasoned connections that need verification._
- **Are the 19 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 19 INFERRED edges - model-reasoned connections that need verification._