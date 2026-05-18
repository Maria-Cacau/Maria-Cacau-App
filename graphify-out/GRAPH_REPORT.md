# Graph Report - Maria-Cacau-Contagem  (2026-05-18)

## Corpus Check
- 100 files · ~606,399 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 711 nodes · 1480 edges · 47 communities detected
- Extraction: 53% EXTRACTED · 47% INFERRED · 0% AMBIGUOUS · INFERRED: 698 edges (avg confidence: 0.6)
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
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
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
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]

## God Nodes (most connected - your core abstractions)
1. `SecurityStorage` - 36 edges
2. `AppEvent` - 34 edges
3. `GuiPopup` - 34 edges
4. `AuxWidgets` - 34 edges
5. `ChartWidget` - 28 edges
6. `GuiMain` - 28 edges
7. `HTTPResponse` - 26 edges
8. `GuiProdutos` - 26 edges
9. `GuiStatusBar` - 22 edges
10. `DeliveryView` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Processa os dados da aba Cadastro da planilha Google Sheets.` --uses--> `GuiPopup`  [INFERRED]
  core/sheets/handlers/cadastro.py → maria_cacau/design_system/gui_popup.py
- `AuxWidgets` --uses--> `Área de consulta de frete: interface gráfica e lógica de consulta.`  [INFERRED]
  maria_cacau/design_system/aux_widgets.py → features/home/sub_features/freight_query/freight_query_view.py
- `AuxWidgets` --uses--> `Área de Nota Fiscal — em desenvolvimento.`  [INFERRED]
  maria_cacau/design_system/aux_widgets.py → features/home/sub_features/nota_fiscal/nota_fiscal_view.py
- `Entry point da aplicação. Execute com: python -m maria_cacau` --uses--> `BackendServer`  [INFERRED]
  __main__.py → maria_cacau/backend/_server.py
- `AppEvent` --uses--> `Janela principal da aplicação e orquestração das sub-features.`  [INFERRED]
  maria_cacau/core/observability.py → features/home/home_view.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.04
Nodes (40): AuxWidgets, GuiValiCpf, _is_valid_cpf(), Área de validação de CPF: interface gráfica e lógica de verificação., Autentica com o JSON bruto da service account e guarda o client em memória., Define a planilha ativa e dispara prewarm em background., main(), main() (+32 more)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (51): GoogleSheetsDataSource, Implementação de DataSourceProtocol para Google Sheets via gspread., PaymentCols, ProductCols, Mapeamento de colunas e tabs da planílha., Colunas fixas da aba Cadastro, agrupadas por domínio., Colunas dos slots de produto (1–7). Usar com .slot(n)., Colunas das parcelas de pagamento (1–6). Usar com .slot(n). (+43 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (49): BackendServer, handle_data_source_error(), handle_unexpected_error(), BackendError, generic_mapper(), translate(), Exception, API (+41 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (27): ChartType, ChartWidget, Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib., Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov, _short_label(), AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., AuxWidgets (+19 more)

### Community 4 - "Community 4"
Cohesion: 0.1
Nodes (34): API, DeliveriesAPI, PaymentsPendentAPI, Definição dos endpoints do backend consumidos pela feature Delivery., DeliveriesMapper, ErrorMapper, from_response(), PaymentsMapper (+26 more)

### Community 5 - "Community 5"
Cohesion: 0.07
Nodes (30): AppEvent, GoogleSheetsService, Autenticação e acesso ao Google Sheets., Retorna True se uma planilha foi vinculada., Define qual planilha vai ser lida pelo ID ou URL do Google Sheets., Define qual planilha vai ser lida pelo ID ou URL do Google Sheets., Retorna as linhas brutas da planilha (lista de listas de strings)., Retorna as linhas brutas da planilha (lista de listas de strings). (+22 more)

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (18): FeatureEvents, Eventos relacionados às entregas pendentes., DeliveryModel, DeliveryViewData, DeliverySignals, Sinais compartilhados dentro do módulo, DeliveryUseCase, Caso de uso: busca e consolida entregas e pagamentos pendentes para uma data. (+10 more)

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (21): _date_field(), DateRangePicker, POC — date picker moderno com QDateEdit + QSS., AppError, certificado_limpo(), certificado_ok(), http_error(), planilha_conectada() (+13 more)

### Community 8 - "Community 8"
Cohesion: 0.09
Nodes (18): DataSourceProtocol, Retorna pedidos da data informada (DD/MM/YYYY)., Retorna pedidos no intervalo de datas informado (DD/MM/YYYY)., Contrato agnóstico de fonte de dados para pedidos., Retorna True se credentials e sheet estão configurados em memória., Protocol, OrdersRepository, Repositório de pedidos — busca por período para o OrdersService. (+10 more)

### Community 9 - "Community 9"
Cohesion: 0.27
Nodes (24): _customer(), _customization(), _delivery(), _financial(), OrderMapper, _payments(), _products(), Mapeamento de uma linha do DataFrame para o model Order. (+16 more)

### Community 10 - "Community 10"
Cohesion: 0.12
Nodes (12): CadastroAnalyseHandler, _normalize_headers(), Processa os dados da aba Cadastro da planilha Google Sheets., Orquestra a autenticação e o acesso às abas da planilha., Autentica e aponta para a planilha. Não lê dados ainda., Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê entregas de uma data específica direto da planilha (sem cache global). (+4 more)

### Community 11 - "Community 11"
Cohesion: 0.15
Nodes (14): _cast_numeric(), PaymentsRepository, Repositório de pagamentos — busca e prepara dados da planilha para o PaymentsSer, Acessa o data source e entrega um DataFrame tipado para o PaymentsService., Retorna todos os pedidos de uma data com colunas numéricas convertidas para floa, _to_dataframe(), get_payments_pendent(), Rota de pagamentos — GET /orders/payments-pendent. (+6 more)

### Community 12 - "Community 12"
Cohesion: 0.15
Nodes (10): _Observability, Observabilidade centralizada do app., PopupIcon, PopupModel, Janela de popup para exibição de erros e informações ao usuário., Enum, Lógica de negócio para obter as deliveries e pagamentos pendentes., Colunas usadas da planilha (+2 more)

### Community 13 - "Community 13"
Cohesion: 0.18
Nodes (5): ABC, Backend de cache em arquivo JSON no diretório do usuário., Contrato base para todos os backends de armazenamento., StorageHandler, Backend de armazenamento seguro via arquivo protegido no diretório do usuário.

### Community 14 - "Community 14"
Cohesion: 0.4
Nodes (3): normalize_decimal(), Utilitários de formatação numérica., Converte número no formato brasileiro para o formato inglês.      Remove o separ

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

### Community 33 - "Community 33"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 34 - "Community 34"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (1): Estrutura de uma mensagem de erro/info para exibição no PopUp.

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (1): Confirmação de certificado configurado com sucesso.

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (1): Confirmação de credenciais removidas com sucesso.

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (1): Confirmação de planilha selecionada com sucesso.

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (1): Confirmação de leitura bem-sucedida da planilha.

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (1): Sinais compartilhadaos dentro do módulo

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Área de entregas pendentes: controller da view.

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): Models utilizados no módulo

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Eventos relacionados às entregas pendentes.

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): Regra de negócios das entregas

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): Conexão com serviço da planilha/base de dados

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): Normaliza uma data para DD/MM/YYYY aceitando os formatos DD/MM/YY e DD/MM/YYYY.

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (1): Converte linhas da planilha em lista de dicts usando o cabeçalho como chaves (lo

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (1): Agrupa números de linha consecutivos em ranges A1 notation e divide em batches d

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (1): Retorna o conjunto de todas as datas (DD/MM/YYYY) entre start e end, inclusive.

### Community 54 - "Community 54"
Cohesion: 1.0
Nodes (1): Acessa o data source e entrega um DataFrame tipado para o PaymentsService.

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (1): Retorna todos os pedidos de uma data com colunas numéricas convertidas para floa

### Community 56 - "Community 56"
Cohesion: 1.0
Nodes (1): Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.

### Community 57 - "Community 57"
Cohesion: 1.0
Nodes (1): Faz cast numérico de uma coluna se ela existir no DataFrame.

### Community 58 - "Community 58"
Cohesion: 1.0
Nodes (1): Retorna todos os pedidos de um período como DataFrame.

### Community 59 - "Community 59"
Cohesion: 1.0
Nodes (1): Códigos de erro da aplicação com estrutura AppError.

### Community 60 - "Community 60"
Cohesion: 1.0
Nodes (1): Estrutura de uma mensagem de erro/info para exibição no PopUp.

### Community 61 - "Community 61"
Cohesion: 1.0
Nodes (1): Confirmação de certificado configurado com sucesso.

### Community 62 - "Community 62"
Cohesion: 1.0
Nodes (1): Confirmação de credenciais removidas com sucesso.

### Community 63 - "Community 63"
Cohesion: 1.0
Nodes (1): Confirmação de planilha selecionada com sucesso.

### Community 64 - "Community 64"
Cohesion: 1.0
Nodes (1): Confirmação de leitura bem-sucedida da planilha.

### Community 65 - "Community 65"
Cohesion: 1.0
Nodes (1): Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov

### Community 66 - "Community 66"
Cohesion: 1.0
Nodes (1): r"""Decodifica o body para um objeto.

### Community 67 - "Community 67"
Cohesion: 1.0
Nodes (1): r"""Indica se a resposta foi bem sucedida (status code 2xx).

## Knowledge Gaps
- **86 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado.`, `Widget de gráfico reutilizável (barras ou pizza) usando seaborn + matplotlib.`, `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`, `Observabilidade centralizada do app.` (+81 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 18`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 33`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 34`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `Estrutura de uma mensagem de erro/info para exibição no PopUp.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `Confirmação de certificado configurado com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `Confirmação de credenciais removidas com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `Confirmação de planilha selecionada com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `Confirmação de leitura bem-sucedida da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `Sinais compartilhadaos dentro do módulo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `Área de entregas pendentes: controller da view.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `Models utilizados no módulo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Eventos relacionados às entregas pendentes.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `Regra de negócios das entregas`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `Conexão com serviço da planilha/base de dados`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Normaliza uma data para DD/MM/YYYY aceitando os formatos DD/MM/YY e DD/MM/YYYY.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `Converte linhas da planilha em lista de dicts usando o cabeçalho como chaves (lo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `Agrupa números de linha consecutivos em ranges A1 notation e divide em batches d`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `Retorna o conjunto de todas as datas (DD/MM/YYYY) entre start e end, inclusive.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (1 nodes): `Acessa o data source e entrega um DataFrame tipado para o PaymentsService.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (1 nodes): `Retorna todos os pedidos de uma data com colunas numéricas convertidas para floa`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 57`** (1 nodes): `Faz cast numérico de uma coluna se ela existir no DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 58`** (1 nodes): `Retorna todos os pedidos de um período como DataFrame.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 59`** (1 nodes): `Códigos de erro da aplicação com estrutura AppError.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 60`** (1 nodes): `Estrutura de uma mensagem de erro/info para exibição no PopUp.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 61`** (1 nodes): `Confirmação de certificado configurado com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 62`** (1 nodes): `Confirmação de credenciais removidas com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 63`** (1 nodes): `Confirmação de planilha selecionada com sucesso.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 64`** (1 nodes): `Confirmação de leitura bem-sucedida da planilha.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 65`** (1 nodes): `Retorna (w, h) para o canvas.         h = altura do viewport (sem desperdício/ov`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (1 nodes): `r"""Decodifica o body para um objeto.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (1 nodes): `r"""Indica se a resposta foi bem sucedida (status code 2xx).`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AppEvent` connect `Community 5` to `Community 0`, `Community 12`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Why does `GuiMain` connect `Community 0` to `Community 3`, `Community 5`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `GuiPopup` connect `Community 3` to `Community 0`, `Community 10`, `Community 12`, `Community 6`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Are the 29 inferred relationships involving `SecurityStorage` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`SecurityStorage` has 29 INFERRED edges - model-reasoned connections that need verification._
- **Are the 32 inferred relationships involving `AppEvent` (e.g. with `GoogleSheetsService` and `Autenticação e acesso ao Google Sheets.`) actually correct?**
  _`AppEvent` has 32 INFERRED edges - model-reasoned connections that need verification._
- **Are the 29 inferred relationships involving `GuiPopup` (e.g. with `DeliveryView` and `Área de entregas pendentes: resumo diário com inadimplências.`) actually correct?**
  _`GuiPopup` has 29 INFERRED edges - model-reasoned connections that need verification._
- **Are the 22 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 22 INFERRED edges - model-reasoned connections that need verification._