# Arquitetura

## Estrutura de pastas

```
Maria-Cacau-Contagem/
├── .ai/                          # instruções para IAs
├── scripts/
│   ├── build.sh                  # setup do ambiente (macOS)
│   ├── build.bat                 # setup do ambiente (Windows)
│   ├── package.sh                # gera .app (macOS)
│   └── package.bat               # gera .exe (Windows)
├── maria_cacau/                  # pacote principal
│   ├── __init__.py               # metadados centralizados (versão, copyright, ícones) + helper `asset()`
│   ├── __main__.py               # entry point
│   ├── core/
│   │   ├── network/
│   │   │   ├── api.py                    # class API (ABC) — interface pública de alto nível
│   │   │   ├── _method.py                # HTTPMethod (StrEnum)
│   │   │   ├── _request.py               # HTTPRequest (dataclass) — DTO de parâmetros
│   │   │   ├── _response.py              # HTTPResponse (dataclass) — DTO de resposta
│   │   │   ├── _errors.py                # NetworkError, HTTPRequestError, HTTPResponseError
│   │   │   ├── _client.py                # HTTPClientContract (Protocol) + LocalClient
│   │   │   ├── _config.py                # configure() / override() / clear_override() — singleton do client ativo
│   │   │   ├── _observability.py         # NetworkEvent enum + track() — loga path, method, status, duration_s de toda request
│   │   │   └── __init__.py               # exports públicos: API, HTTPMethod, HTTPResponse, LocalClient, erros, config
│   │   ├── storage/
│   │   │   ├── handler.py                # ABC StorageHandler[T] — contrato único de persistência
│   │   │   ├── security.py               # SecurityStorage — arquivo protegido em ~/.mariacacau/
│   │   │   └── cache.py                  # CacheStorage — JSON em ~/.mariacacau/
│   │   ├── bus.py                        # _EventBus (QObject) singleton `bus` — todos os signals globais do app
│   │   ├── services.py                   # Services enum — identifica os serviços disponíveis (DELIVERY, PAYMENTS, SUMMARY)
│   │   ├── session.py                    # AppSession singleton — estado pós-inicialização (credentials, sheet_id, sheet_name)
│   │   ├── observability.py              # AppEvent enum + singleton `observability` → logs.log
│   │   └── error/
│   │       ├── errors.py                 # AppError + constantes A001–E001, C001–C005
│   │       ├── models.py                 # ErrorModel — duck typing (code/user_message/dev_message) → to_popup() → DSDialogModel
│   │       └── __init__.py               # exports: AppError, constantes, ErrorModel
│   ├── design_system/
│   │   ├── handlers/
│   │   │   └── loading_handler.py  # DSLoadingHandler — mixin que adiciona spinner animado a qualquer QObject
│   │   └── components/             # todos os componentes DS exportados flat pelo __init__.py
│   │       ├── alerts/             # DSDialog + DSDialogIcon + DSDialogModel
│   │       ├── buttons/            # DSButton(QPushButton, DSLoadingHandler) + DSButtonState
│   │       ├── chart/              # DSChart(QWidget) + DSChartType(Enum: BAR/PIE)
│   │       ├── combo_box/          # DSComboBox
│   │       ├── containers/         # DSGroupBox (borda marrom, Arial 12)
│   │       ├── inputs/             # DSTextInput + DSDateInput
│   │       ├── label/              # DSLabel (Arial, alinhamento esquerdo)
│   │       └── text_view/          # DSTextView + copy_to_clipboard()
│   ├── assets/
│   │   ├── strings.py            # textos de UI centralizados
│   │   └── images/               # ícones e imagens
│   └── features/
│       ├── __init__.py                    # re-exports públicos: AuthController, AppInitUseCase, HomeController, SheetsController, StatusBarController
│       ├── auth/                          # ✅ migrada — data/ + domain/ + presentation/ — menu "Segurança"
│       ├── sheets/                        # ✅ migrada — data/ + domain/ + presentation/view/ — menu "Arquivo"
│       ├── status_bar/                    # ✅ feature própria — domain/state.py + presentation/controller.py + view.py
│       └── home/
│           ├── home_view.py      # janela principal + orquestração (refatoração home/main pendente)
│           └── sub_features/
│               ├── cpf_validation/        # ✅ migrada — domain/ + presentation/
│               ├── nota_fiscal/           # ✅ migrada — placeholder "Em breve" (futuro: API Tiny/OList)
│               ├── shipping_rate/         # ✅ migrada — placeholder "Em breve" (futuro: API Melhor Envio)
│               ├── summary/               # ✅ migrada — data/ + domain/ + presentation/
│               └── delivery/              # ✅ migrada — data/ + domain/ + presentation/
├── pyproject.toml                # fonte única de verdade para deps e metadados
└── ...
```

## Princípio de Isolamento

O projeto é dividido em três mundos que não se conhecem entre si:

```
┌─────────────────────────────┐
│  Aplicação (features/, UI)  │  Não sabe que existe backend/ nem datasource/
└────────────┬────────────────┘
             │ LocalClient (HTTPRequest/HTTPResponse)
┌────────────▼────────────────┐
│  Backend (backend/)         │  Não sabe que existe a aplicação nem o datasource diretamente
└────────────┬────────────────┘
             │ DataSourceProtocol
┌────────────▼────────────────┐
│  DataSource (data_source/)  │  Não sabe que existe o backend nem a aplicação
└─────────────────────────────┘
```

**Aplicação:** conhece apenas o contrato HTTP (`HTTPRequest`, `HTTPResponse`). Não importa nada de `backend/`. Não sabe se o backend é local, remoto ou um mock.

**Backend:** expõe rotas HTTP via Flask `test_client()`. Não importa nada de `features/`. Recebe requests, processa, devolve JSON. A única exceção é `core/storage` — usado pela infra de `data_source/_helper.py` para persistência de credenciais, sem regra de negócio.

**DataSource:** acessa o Google Sheets. Não conhece Flask, não conhece nenhuma feature, não conhece `http_status`. Levanta `DataSourceError` com campos agnósticos de transporte (`code`, `user_message`, `dev_message`).

**Visão de futuro:** hoje os três mundos vivem no mesmo repositório por conveniência. Quando o sistema migrar para Railway, o backend vira um serviço FastAPI independente e o `LocalClient` é trocado por um `HTTPClient` real — sem mudar nenhuma feature. Cada mundo pode ter seu próprio repositório e ciclo de deploy.

---

## Padrão de arquitetura de feature

**Feature-first + Clean Arch + MVC**: cada funcionalidade vive numa pasta isolada com três camadas bem definidas. O **domínio é o centro** — tanto `data/` quanto `presentation/` importam de `domain/`, nunca uma da outra.

```
feature/
├── domain/         # centro — models, contratos, comunicação entre camadas
├── data/           # acesso a dados — olha para domain/, nunca para presentation/
└── presentation/   # UI — olha para domain/, nunca para data/
```

Features ainda não migradas usam a estrutura flat legada (`view.py`, `viewmodel.py`, etc. na raiz da pasta).

Cada feature migrada deve ter um `README.md` na raiz da sua pasta documentando: o que a feature faz, diagrama de arquitetura (Mermaid flowchart), tabela de responsabilidade das classes, e diagramas de sequência do fluxo principal e do fluxo de erro. Ver `delivery/README.md` como template.

### Domain

É o único lugar de onde qualquer outra camada pode importar. Contém:

**`models.py`** — todos os dataclasses da feature, sem exceção. Isso inclui modelos que só a camada de apresentação usa (ex: `DeliveryViewData`). A regra é: se é um contrato de dados entre camadas, vive em `domain/`, não na camada que o consome. Criar um model dentro de `presentation/` quebraria a dependência unidirecional.

```python
@dataclass
class DeliveryModel:              # produzido pelo UseCase, consumido pelo ViewModel
    deliveries: DeliveriesSummary
    pendent_orders: list[PendentOrder]

@dataclass
class DeliveryViewData:           # produzido pelo ViewModel, consumido pela View
    report: str                   # mesmo sendo só de UI, vive em domain/
    chart_data: dict
```

**`use_case.py`** — orquestra a operação. Decide quando e como combinar dados, mas não sabe nada de UI nem de HTTP. Recebe o repository como dependência. Quando precisa de chamadas paralelas, usa `ThreadPoolExecutor`.

```python
class DeliveryUseCase:
    def get_orders(self, date: str) -> DeliveryModel:
        with ThreadPoolExecutor(max_workers=2) as executor:
            future_d = executor.submit(self.repository.get_deliveries, date)
            future_p = executor.submit(self.repository.get_pendent_payments, date)
        return DeliveryModel(deliveries=future_d.result(), pendent_orders=future_p.result())
```

**`signals.py`** — mecanismo de comunicação entre threads. O ViewModel roda em background thread; o Controller vive na main thread do Qt. `pyqtSignal` garante que o resultado cruza threads com segurança. Fica em `domain/` porque é o canal da feature inteira — não exclusivo da UI.

**`events.py`** — enum de eventos de observabilidade. Valores string para o log. Um valor por ação relevante do usuário ou resultado de consulta.

### Data

Responsável exclusivamente por buscar dados e converter para os tipos do domínio. Não conhece widgets, signals nem ViewModel.

**`apis.py`** — uma classe por endpoint, herdando de `API`. Define apenas o `path` e parâmetros. Usa builder pattern para configurar a request antes de chamar `.call()`. Não trata erros.

```python
class DeliveriesAPI(API):
    @property
    def path(self) -> str: return "/orders/deliveries"

    def for_date(self, date: str) -> "DeliveriesAPI":
        self.parameters.params = {"date": date}
        return self
```

**`mapper.py`** — funções puras via `@staticmethod` que convertem `HTTPResponse → domain model`. Uma classe mapper por endpoint. Mais `ErrorMapper`, que converte `HTTPResponseError → ErrorModel` lendo o JSON do backend.

```python
class ErrorMapper:
    @staticmethod
    def from_response(e: HTTPResponseError) -> ErrorModel:
        # lê code/user_message/dev_message do JSON da resposta do backend
        ...

class DeliveriesMapper:
    @staticmethod
    def from_response(response: HTTPResponse) -> DeliveriesSummary:
        ...
```

**`repository.py`** — orquestra API + Mapper. Emite `bus.request_started` antes da chamada e `bus.request_finished` no `finally`. Captura `HTTPResponseError`, delega para `ErrorMapper`, e relança como `ErrorModel` (que é um `Exception`). Retorna domain models diretamente. Sem cache — cada chamada vai ao backend.

```python
class OrdersRepository:
    def get_deliveries(self, date: str) -> DeliveriesSummary:
        bus.request_started.emit(Services.DELIVERY)
        try:
            response = DeliveriesAPI().for_date(date).call()
        except HTTPResponseError as e:
            raise ErrorMapper.from_response(e)
        finally:
            bus.request_finished.emit(Services.DELIVERY)
        return DeliveriesMapper.from_response(response)
```

### Presentation

Responsável por UI, estado visual e orquestração Qt. Não conhece APIs, mappers ou o backend diretamente.

**`view.py`** — só UI. Expõe `pyqtSignal` com nome de domínio (não com nome de widget). Não chama nada diretamente — emite signals que o controller vai conectar. Métodos públicos definem a interface que o controller usa:

- `get_date() -> str` — lê o valor do date picker
- `update_data(data: DeliveryViewData)` — atualiza a view com dados novos e re-habilita botões
- `prepare_to_fetch()` — desabilita o botão principal durante a consulta

Gerenciar estado dos botões é responsabilidade da view (`_update_buttons_state`). A view não sabe quando é certo ou errado habilitar — o controller/viewmodel decide e chama os métodos públicos.

Toda view deve expor uma `@property view_title -> str` com o título da feature. Essa property é usada internamente pela view (ex: `self.group_box(self.view_title)`) e pode ser consumida por qualquer outro componente que precise do título — evita hardcode espalhado.

```python
@property
def view_title(self) -> str:
    return "Nome da Feature"
```

**`viewmodel.py`** — executa o UseCase em background thread (`ThreadPoolExecutor`) para não travar a UI. Constrói o `DeliveryViewData` a partir do `DeliveryModel` (é a única classe que conhece como montar o report e o `chart_data`). Emite resultado ou erro via signals do domínio.

```python
def _fetch(self, date: str):
    try:
        result = self.use_case.get_orders(date)
        signals.report_generated.emit(self._build_view_data(result, date))
    except ErrorModel as e:
        signals.error.emit(e)
    except Exception as e:
        signals.error.emit(unexpected_error(e))
```

**`controller.py`** — cola tudo. Instancia View e ViewModel. Conecta signals da view às ações do ViewModel. Conecta signals do domínio às respostas que atualizam a view. Não tem lógica de negócio — só orquestra e loga via observabilidade.

### Fluxo de erro

O erro nasce no backend e chega ao usuário como popup, passando por camadas sem que nenhuma delas conheça detalhes da camada acima:

```
Backend levanta DataSourceError
    → Flask errorhandler traduz para BackendError (adiciona http_status)
    → Retorna JSON: { code, user_message, dev_message, http_status }
    → LocalClient recebe status != 2xx → levanta HTTPResponseError

Repository captura HTTPResponseError
    → ErrorMapper.from_response() lê o JSON
    → Relança como ErrorModel (code, user_message, dev_message)

ViewModel._fetch() captura ErrorModel
    → signals.error.emit(error)

Controller.handle_error() recebe o signal
    → view.popup.show(error.to_popup())
```

Para erros inesperados (bugs, exceções não mapeadas), `ViewModel._fetch()` captura `Exception` genérica e chama `unexpected_error(e)`, que gera um `ErrorModel` padrão — o fluxo continua igual a partir daí.

## Camada de network (`core/network/`)

Módulo de transporte HTTP/local desacoplado. Cuida **só do transporte** — semântica de negócio fica no consumer.

**Arquivos com `_` prefixado** são internos. O consumer importa apenas do `__init__.py`:
```python
from maria_cacau.core.network import API, HTTPMethod, configure, LocalClient
```

**Setup no `__main__.py`** (uma vez):
```python
from maria_cacau.core.network import configure, LocalClient
configure(LocalClient(backend=BackendServer()))
```

**Criar um endpoint** — herdar de `API`, implementar `path`, ajustar `self.parameters` se necessário:
```python
class GetPedidosPendentesAPI(API):
    @property
    def path(self) -> str:
        return "/pedidos/pendentes"

class CriarPedidoAPI(API):
    def __init__(self, dados: dict):
        super().__init__()
        self.parameters.method = HTTPMethod.POST
        self.parameters.body = dados

    @property
    def path(self) -> str:
        return "/pedidos"
```

**Dois cenários suportados:**

| Cenário | Como configurar |
|---|---|
| Backend local (agora) | `configure(LocalClient(backend=BackendServer()))` |
| API HTTP real (futuro) | `configure(HTTPClient(base_url="https://..."))` — `HTTPClient` ainda não implementado |

**Override para testes:**
```python
override(HTTPClient(base_url="http://localhost:8080"))
# ... testes
clear_override()
```

## Camada de storage

| Classe | Backend | Uso |
|---|---|---|
| `StorageHandler[T]` | — | ABC com `save / retrieve / delete / clean_all` |
| `SecurityStorage` | Arquivo `~/.mariacacau/<key>.credential` (chmod 600) | Credenciais da Service Account |
| `CacheStorage` | JSON em `~/.mariacacau/` | Planilhas salvas (`sheets.json`) |

`features/auth` usa `SecurityStorage` com chave `"google-credentials"` para persistir o JSON da Service Account.
`features/sheets` usa `CacheStorage` para persistir a lista de planilhas conectadas (`[{nome, sheet_id}]`).

> **Motivação da mudança**: o Windows Credential Manager tem limite de ~1280 chars (UTF-16LE). O JSON de Service Account do Google tem ~2400–2800 chars, estourando esse limite com erro 1783. A solução é arquivo protegido por permissões do filesystem, cross-platform e sem limite de tamanho.

## Threading

O padrão adotado em todas as features migradas é `ThreadPoolExecutor(max_workers=1)` no `ViewModel`. Operações com I/O (chamadas ao backend) rodam em background; o resultado volta para a main thread via `pyqtSignal`. Operações de cache local (leitura de JSON) são síncronas — sem thread.

### EventBus (`core/bus.py`)

Todos os signals globais do app vivem no singleton `bus`. Viewmodels emitem; controllers e a status bar subscrevem. Errors de feature (ex: `AuthSignals.error`, `SheetsSignals.error`) continuam locais — são específicos de cada feature e não precisam de visibilidade global.

| Grupo | Signals |
|---|---|
| App | `app_init_finished` |
| Auth | `credentials_configured`, `credentials_cleared` |
| Sheets | `cache_cleared`, `sheet_connected(obj)`, `sheet_selected(obj)`, `sheet_renamed(obj)` |
| Requests | `request_started(Services)`, `request_finished(Services)` | O evento `CACHE_CLEAR` é logado na observabilidade. Cache hits também geram log via `FeatureEvents.CACHE_HIT` de cada feature.

## Status bar (`features/status_bar/`)

Feature própria com controller + view + domain. Barra fixa na base da janela, reativa a signals do `bus`.

### Estados (`StatusBarState`)

| Estado | Cor | Condição |
|---|---|---|
| `NO_CREDENTIALS` | Amarelo `#A07800` | Credenciais não configuradas |
| `NO_SHEET` | Amarelo `#A07800` | Credenciais OK, nenhuma planilha selecionada |
| `CONNECTED` | Verde `#388e3c` | Credenciais + planilha conectada |
| `BUSY` | Laranja `#C27D18` | Pelo menos uma requisição em andamento |

### Fluxo de signals

`StatusBarController` subscreve os seguintes signals do `bus`:

| Signal | Efeito na barra |
|---|---|
| `app_init_finished` | Lê `session` e define estado inicial |
| `credentials_configured` | → `NO_SHEET` |
| `credentials_cleared` | → `NO_CREDENTIALS`, reseta contador de busy |
| `sheet_connected` / `sheet_selected` | → `CONNECTED` com nome e id da planilha |
| `request_started(Services)` | Incrementa `_busy_count`; se chegar a 1 → `BUSY` |
| `request_finished(Services)` | Decrementa `_busy_count`; se chegar a 0 → restaura estado base |

O `_busy_count` suporta múltiplas requisições simultâneas: a cor laranja persiste enquanto qualquer req estiver em andamento.

### Quem emite os signals de request

`request_started` / `request_finished` são emitidos nos **repositories**, antes e depois da chamada HTTP (em `finally` para garantir decremento mesmo em erro). Cache hits não emitem — a barra só muda de cor para chamadas reais à rede.

## Observabilidade (`observability`)

Módulo `maria_cacau/core/observability.py` — singleton `observability` com enum `AppEvent`.

| Evento | Extra kwargs | Quando |
|---|---|---|
| `APP_START` | — | App inicializado |
| `APP_CLOSE` | — | Janela fechada (`closeEvent`) |
| `QUERY_ENTREGAS` | `date=`, `duration_s=` | Consulta de entregas com sucesso |
| `QUERY_PRODUTOS` | `start=`, `end=`, `duration_s=` | Consulta de produtos com sucesso |
| `CERT_SET` | — | Certificado configurado com sucesso |
| `CERT_CLEAR` | — | Certificado removido |
| `SHEET_ADD` | `name=`, `sheet_id=` | Planilha conectada e salva |
| `SHEET_SELECT` | `name=`, `sheet_id=` | Planilha existente selecionada |
| `BTN_COPY` | `feature=` | Botão Copiar clicado (entregas ou produtos) |
| `PREWARM_DONE` | `duration_s=` | Pré-aquecimento OAuth + TLS concluído |
| `CACHE_CLEAR` | — | Cache em memória limpo pelo usuário (Arquivo → Limpar cache) |
| `ERROR` | `msg=`, `where=` (opcional), `duration_s=` (opcional) | Qualquer exceção capturada |

Saída: `~/.mariacacau/logs.log` (append-only, formato `YYYY-MM-DD HH:MM:SS  LEVEL  mensagem`).

Para adicionar um novo evento: acrescentar valor ao `AppEvent` e chamar `observability.log(AppEvent.NOVO, ...)`.

## Gráficos (`DSChart`)

Componente `design_system/components/chart/` — widget reutilizável baseado em `matplotlib` + `seaborn`, embutido diretamente nas views via Qt.

| Símbolo | Descrição |
|---|---|
| `DSChartType` | Enum `BAR` / `PIE` — tipo de visualização |
| `DSChart` | `QWidget` com `FigureCanvasQTAgg` dentro de `QScrollArea` |
| `update_data(data, title)` | Alimenta o gráfico com dados novos e re-renderiza |
| `clear()` | Limpa a figura e renderiza estado vazio — chamado em `prepare_to_fetch()` |
| `set_type(DSChartType)` | Troca o tipo sem precisar repassar os dados |
| `copy_to_clipboard()` | Exporta o gráfico como PNG para a área de transferência (150 dpi) |
| `save_to_file()` | Salva como PNG ou SVG via diálogo de arquivo |

**Scroll horizontal**: para gráficos de barras com muitos itens, o canvas é redimensionado via `canvas.resize(n * 22px, viewport_h)` — se o canvas ultrapassar o viewport, a barra de scroll cinza aparece automaticamente.

**Paleta**: barras usam `YlOrBr` invertido (marrom escuro nas maiores quantidades); pizza usa `Set2`. Labels de pizza com >10 fatias são movidos para legenda lateral.

**Uso nas views**:
- `summary/presentation/view.py`: `DSChart(DSChartType.BAR)` com `DSComboBox` para alternar para pizza
- `delivery/presentation/view.py`: `DSChart(DSChartType.PIE)` fixo (modalidades de entrega)

## Assets (`asset()`)
Qualquer path de asset deve ser resolvido via `asset('images/foo.png')` de `maria_cacau/__init__.py`.
Internamente usa `Path(__file__).parent / 'assets' / relative_path`, garantindo resolução correta tanto em dev quanto no `.exe` compilado pelo Nuitka.

## Módulo Backend (`maria_cacau/backend/`)

Backend local in-process baseado em Flask `test_client()`. Serve como camada de serviços entre as features da UI e o Google Sheets. Em desenvolvimento na branch `feat/backend`.

**Fluxo:** `Feature → LocalClient → BackendServer → Route → Service → Repository → DataSource`

### Organização interna

```
backend/
├── _server.py              # BackendServer — Flask app + blueprint + errorhandler + execute()
├── data_source/            # GoogleSheetsDataSource, protocol, enums de colunas, erros DS01–DS18
├── errors/                 # BackendError (contrato HTTP) + translate() (DataSourceError → BackendError)
├── utils/                  # Utilitários compartilhados (ex: normalize_decimal)
└── features/
    └── orders/             # Domínio de pedidos — blueprint pai com before_request
        ├── shared/         # models.py (dataclasses) + mapper.py (OrderMapper)
        ├── schemas/        # shared.schema.json — tipos JSON Schema compartilhados
        └── subfeatures/
            ├── deliveries/ # GET /orders/deliveries
            ├── payments/   # GET /orders/payments-pendent
            └── summary/    # GET /orders (service pendente)
```

Cada subfeature tem `repository.py`, `service.py`, `route.py` e `response/` (schema + example).
Rotas de infra (`auth`, `source`, `status`) serão registradas diretamente no `_server.py` — fora do blueprint pai de `orders/`, não herdam o `check_connection`.

### Padrões do backend

| Padrão | Descrição |
|---|---|
| **Repository por subfeature** | Cada repo faz cast numérico apenas das colunas do seu domínio |
| **OrderMapper** | `shared/mapper.py` converte `Series → Order` — reutilizado por qualquer subfeature |
| **Blueprint pai em `orders/`** | `orders/__init__.py` cria o pai com `before_request`; sub-blueprints herdam automaticamente |
| **`response/` por subfeature** | `schema.json` + `example.json` junto ao código da feature |
| **Slots como constante** | `PAYMENT_SLOTS = 6` e `PRODUCT_SLOTS = 7` em `sheet_mapper.py` — fonte única de verdade |
| **normalize_decimal** | `utils/numbers.py` — converte formato BR → EN para cast numérico |
| **Contrato de erros** | `DataSourceError` carrega `code/user_message/dev_message`; `backend/errors/` adiciona `http_status` via tabela de tradução; `@app.errorhandler` no servidor captura tudo |

> Documentação detalhada: `pocs/backend/ongoing-study.md`

---

## Fonte única de verdade
- **Versão, ano e empresa** → `pyproject.toml` (`[project]` e `[tool.maria-cacau]`)
- **Metadados do app** (nome exibido, copyright, ícones) → `maria_cacau/__init__.py` (lê do pyproject.toml)
- **Textos de UI** → `maria_cacau/assets/strings.py`
- **Erros** → `maria_cacau/core/error/` (`errors.py` = AppError e constantes; `models.py` = ErrorModel)
- **Paths de assets** → `asset()` em `maria_cacau/__init__.py`
