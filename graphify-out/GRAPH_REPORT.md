# Graph Report - Maria-Cacau-Contagem  (2026-05-18)

## Corpus Check
- 110 files · ~607,983 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 751 nodes · 1559 edges · 47 communities detected
- Extraction: 54% EXTRACTED · 46% INFERRED · 0% AMBIGUOUS · INFERRED: 713 edges (avg confidence: 0.61)
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
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
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

## God Nodes (most connected - your core abstractions)
1. `GuiPopup` - 37 edges
2. `AuxWidgets` - 37 edges
3. `SecurityStorage` - 36 edges
4. `AppEvent` - 33 edges
5. `ChartWidget` - 31 edges
6. `HTTPResponse` - 26 edges
7. `GuiProdutos` - 26 edges
8. `GuiMain` - 25 edges
9. `GuiStatusBar` - 22 edges
10. `DeliveryView` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Processa os dados da aba Cadastro da planilha Google Sheets.` --uses--> `GuiPopup`  [INFERRED]
  core/sheets/handlers/cadastro.py → maria_cacau/design_system/gui_popup.py
- `Frame composto reutilizável com label, entrada de texto e botão de cópia.` --uses--> `AuxWidgets`  [INFERRED]
  design_system/aux_frames.py → maria_cacau/design_system/aux_widgets.py
- `AuxWidgets` --uses--> `Área de validação de CPF: interface gráfica e lógica de verificação.`  [INFERRED]
  maria_cacau/design_system/aux_widgets.py → features/home/sub_features/cpf_validation/cpf_validation_view.py
- `Entry point da aplicação. Execute com: python -m maria_cacau` --uses--> `GuiMain`  [INFERRED]
  __main__.py → maria_cacau/features/home/home_view.py
- `AppEvent` --uses--> `Janela principal da aplicação e orquestração das sub-features.`  [INFERRED]
  maria_cacau/core/observability.py → features/home/home_view.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (50): GoogleSheetsDataSource, Implementação de DataSourceProtocol para Google Sheets via gspread., PaymentCols, ProductCols, Mapeamento de colunas e tabs da planílha., Colunas fixas da aba Cadastro, agrupadas por domínio., Colunas dos slots de produto (1–7). Usar com .slot(n)., Colunas das parcelas de pagamento (1–6). Usar com .slot(n). (+42 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (33): ChartType, ChartWidget, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov, _short_label(), AuxWidgets, Factory de widgets PyQt6 reutilizáveis em toda a interface., GuiPopup (+25 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (25): Autentica com o JSON bruto da service account e guarda o client em memória., Define a planilha ativa e dispara prewarm em background., _BackgroundWidget, _DialogConectarPlanilha, _extract_sheet_id(), GuiMain, _load_sheets(), Janela principal da aplicação e orquestração das sub-features. (+17 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (46): BackendServer, main(), Entry point da aplicação. Execute com: python -m maria_cacau, API, call(), entity(), Comunicação alto nivel para chamadas de api, O tipo precisa aceitar **kwargs (dataclass ou similar). (+38 more)

### Community 4 - "Community 4"
Cohesion: 0.05
Nodes (36): ABC, AppEvent, Área de validação de CPF: interface gráfica e lógica de verificação., GoogleSheetsService, Autenticação e acesso ao Google Sheets., Retorna True se uma planilha foi vinculada., Define qual planilha vai ser lida pelo ID ou URL do Google Sheets., Define qual planilha vai ser lida pelo ID ou URL do Google Sheets. (+28 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (28): PopupIcon, Janela de popup para exibição de erros e informações ao usuário., FeatureEvents, Eventos relacionados às entregas pendentes., CpfValidationResult, DeliveryModel, Models utilizados no módulo, CpfValidationSignals (+20 more)

### Community 6 - "Community 6"
Cohesion: 0.05
Nodes (14): AuxWidgets, AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., _date_field(), DateRangePicker, POC — date picker moderno com QDateEdit + QSS., NotaFiscalController, NotaFiscalView (+6 more)

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (30): API, DeliveriesAPI, PaymentsPendentAPI, Definição dos endpoints do backend consumidos pela feature Delivery., DeliveriesMapper, ErrorMapper, from_response(), PaymentsMapper (+22 more)

### Community 8 - "Community 8"
Cohesion: 0.1
Nodes (24): handle_data_source_error(), handle_unexpected_error(), PopupModel, AppError, certificado_limpo(), certificado_ok(), http_error(), planilha_conectada() (+16 more)

### Community 9 - "Community 9"
Cohesion: 0.27
Nodes (24): _customer(), _customization(), _delivery(), _financial(), OrderMapper, _payments(), _products(), Mapeamento de uma linha do DataFrame para o model Order. (+16 more)

### Community 10 - "Community 10"
Cohesion: 0.11
Nodes (18): Retorna pedidos da data informada (DD/MM/YYYY)., Retorna todos os pedidos de uma data como DataFrame bruto., get_deliveries(), to_response(), _cast_numeric(), PaymentsRepository, Repositório de pagamentos — busca e prepara dados da planilha para o PaymentsSer, Acessa o data source e entrega um DataFrame tipado para o PaymentsService. (+10 more)

### Community 11 - "Community 11"
Cohesion: 0.1
Nodes (17): DataSourceProtocol, Retorna pedidos no intervalo de datas informado (DD/MM/YYYY)., Contrato agnóstico de fonte de dados para pedidos., Retorna True se credentials e sheet estão configurados em memória., Protocol, OrdersRepository, Repositório de pedidos — busca por período para o OrdersService., Acessa o data source e entrega um DataFrame para o OrdersService. (+9 more)

### Community 12 - "Community 12"
Cohesion: 0.1
Nodes (8): _Observability, Observabilidade centralizada do app., main(), main(), main(), main(), DeliveryController, Recebe o resultado do ViewModel, atualiza a view e loga a duração da consulta.

### Community 13 - "Community 13"
Cohesion: 0.12
Nodes (12): CadastroAnalyseHandler, _normalize_headers(), Processa os dados da aba Cadastro da planilha Google Sheets., Orquestra a autenticação e o acesso às abas da planilha., Autentica e aponta para a planilha. Não lê dados ainda., Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê entregas de uma data específica direto da planilha (sem cache global). (+4 more)

### Community 14 - "Community 14"
Cohesion: 0.4
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

### Community 31 - "Community 31"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 32 - "Community 32"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 37 - "Community 37"
Cohesion: 1.0
Nodes (1): Estrutura de uma mensagem de erro/info para exibição no PopUp.

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (1): Confirmação de certificado configurado com sucesso.

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (1): Confirmação de credenciais removidas com sucesso.

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (1): Confirmação de planilha selecionada com sucesso.

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): Confirmação de leitura bem-sucedida da planilha.

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): Sinais compartilhadaos dentro do módulo

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (1): Área de entregas pendentes: controller da view.

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): Models utilizados no módulo

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Eventos relacionados às entregas pendentes.

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): Regra de negócios das entregas

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Conexão com serviço da planilha/base de dados

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): Normaliza uma data para DD/MM/YYYY aceitando os formatos DD/MM/YY e DD/MM/YYYY.

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): Converte linhas da planilha em lista de dicts usando o cabeçalho como chaves (lo

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): Agrupa números de linha consecutivos em ranges A1 notation e divide em batches d

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (1): Retorna o conjunto de todas as datas (DD/MM/YYYY) entre start e end, inclusive.

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (1): Acessa o data source e entrega um DataFrame tipado para o PaymentsService.

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (1): Retorna todos os pedidos de uma data com colunas numéricas convertidas para floa

### Community 54 - "Community 54"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 56 - "Community 56"
Cohesion: 1.0
Nodes (1): Retorna todos os pedidos de um período como DataFrame.

### Community 57 - "Community 57"
Cohesion: 1.0
Nodes (1): Códigos de erro da aplicação com estrutura AppError.

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
Nodes (1): Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov

### Community 64 - "Community 64"
Cohesion: 1.0
Nodes (1): r"""Decodifica o body para um objeto.

### Community 65 - "Community 65"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

## Knowledge Gaps
- **85 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib.`, `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`, `Observabilidade centralizada do app.` (+80 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 18`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (1 nodes): `Estrutura de uma mensagem de erro/info para exibição no PopUp.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `Confirmação de certificado configurado com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `Confirmação de credenciais removidas com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `Confirmação de planilha selecionada com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `Confirmação de leitura bem-sucedida da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Sinais compartilhadaos dentro do módulo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `Área de entregas pendentes: controller da view.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `Models utilizados no módulo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Eventos relacionados às entregas pendentes.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `Regra de negócios das entregas`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Conexão com serviço da planilha/base de dados`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `Normaliza uma data para DD/MM/YYYY aceitando os formatos DD/MM/YY e DD/MM/YYYY.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `Converte linhas da planilha em lista de dicts usando o cabeçalho como chaves (lo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Agrupa números de linha consecutivos em ranges A1 notation e divide em batches d`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `Retorna o conjunto de todas as datas (DD/MM/YYYY) entre start e end, inclusive.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `Acessa o data source e entrega um DataFrame tipado para o PaymentsService.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `Retorna todos os pedidos de uma data com colunas numéricas convertidas para floa`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `Retorna todos os pedidos de um período como DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 57`** (1 nodes): `Códigos de erro da aplicação com estrutura AppError.`
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
- **Thin community `Community 63`** (1 nodes): `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 64`** (1 nodes): `r"""Decodifica o body para um objeto.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 65`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AppEvent` connect `Community 4` to `Community 2`, `Community 12`, `Community 5`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **Why does `GuiMain` connect `Community 2` to `Community 1`, `Community 3`, `Community 4`, `Community 12`, `Community 13`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Why does `GuiPopup` connect `Community 1` to `Community 2`, `Community 4`, `Community 5`, `Community 12`, `Community 13`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Are the 32 inferred relationships involving `GuiPopup` (e.g. with `DeliveryView` and `Área de entregas pendentes: resumo diário com inadimplências.`) actually correct?**
  _`GuiPopup` has 32 INFERRED edges - model-reasoned connections that need verification._
- **Are the 25 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 25 INFERRED edges - model-reasoned connections that need verification._
- **Are the 29 inferred relationships involving `SecurityStorage` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`SecurityStorage` has 29 INFERRED edges - model-reasoned connections that need verification._
- **Are the 31 inferred relationships involving `AppEvent` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`AppEvent` has 31 INFERRED edges - model-reasoned connections that need verification._