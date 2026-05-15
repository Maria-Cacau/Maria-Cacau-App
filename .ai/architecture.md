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
│   │   ├── charts.py                     # ChartWidget (QWidget) + ChartType enum (BAR/PIE)
│   │   ├── network/
│   │   │   ├── api.py                    # class API (ABC) — interface pública de alto nível
│   │   │   ├── _method.py                # HTTPMethod (StrEnum)
│   │   │   ├── _request.py               # HTTPRequest (dataclass) — DTO de parâmetros
│   │   │   ├── _response.py              # HTTPResponse (dataclass) — DTO de resposta
│   │   │   ├── _errors.py                # NetworkError, HTTPRequestError, HTTPResponseError
│   │   │   ├── _client.py                # HTTPClientContract (Protocol) + LocalClient
│   │   │   ├── _config.py                # configure() / override() / clear_override() — singleton do client ativo
│   │   │   └── __init__.py               # exports públicos: API, HTTPMethod, HTTPResponse, LocalClient, erros, config
│   │   ├── sheets/
│   │   │   ├── service.py                # autenticação e leitura bruta do Google Sheets
│   │   │   ├── manager.py                # orquestra service + handler; singleton `manager`
│   │   │   └── handlers/
│   │   │       └── cadastro.py           # processa a aba Cadastro (filtragem, datas, colunas)
│   │   ├── storage/
│   │   │   ├── handler.py                # ABC StorageHandler[T] — contrato único de persistência
│   │   │   ├── security.py               # SecurityStorage — arquivo protegido em ~/.mariacacau/
│   │   │   └── cache.py                  # CacheStorage — JSON em ~/.mariacacau/
│   │   ├── observability.py              # AppEvent enum + singleton `observability` → logs.log
│   │   └── errors.py                     # códigos de erro com docstrings
│   ├── design_system/
│   │   ├── aux_widgets.py        # factory de widgets reutilizáveis
│   │   ├── aux_frames.py         # frame composto (label + input + botão)
│   │   └── gui_popup.py          # janela de popup (erro/info)
│   ├── assets/
│   │   ├── strings.py            # textos de UI centralizados
│   │   └── images/               # ícones e imagens
│   └── features/
│       └── home/
│           ├── home_view.py      # janela principal + orquestração
│           └── sub_features/
│               ├── cpf_validation/        # validação matemática de CPF com feedback visual
│               ├── nota_fiscal/           # placeholder "Em breve" (v5.0)
│               ├── products_resume/
│               ├── orders_pendent/
│               ├── freight_query/
│               └── status_bar/        # barra de status global (credenciais, planilha, loading)
├── pyproject.toml                # fonte única de verdade para deps e metadados
└── ...
```

## Padrão de arquitetura
**Feature-first**: cada funcionalidade vive numa pasta isolada com sua própria view.
Futuramente cada feature pode ter `view.py` + `view_model.py` (Clean Architecture).

## Camada de network (`core/network/`)

Módulo de transporte HTTP/local desacoplado. Cuida **só do transporte** — semântica de negócio fica no consumer.

**Arquivos com `_` prefixado** são internos. O consumer importa apenas do `__init__.py`:
```python
from maria_cacau.core.network import API, HTTPMethod, configure, LocalClient
```

**Setup no `__main__.py`** (uma vez):
```python
from maria_cacau.core.network import configure, LocalClient
configure(LocalClient(backend=Backend()))
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
| Backend local (agora) | `configure(LocalClient(backend=Backend()))` |
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

`service.py` define `_KEYRING_KEY = "google-credentials"` e usa `SecurityStorage()` para salvar/ler o JSON completo da Service Account em `~/.mariacacau/google-credentials.credential`.
`home_view.py` usa `CacheStorage` para persistir e ler a lista de planilhas conectadas.

> **Motivação da mudança**: o Windows Credential Manager tem limite de ~1280 chars (UTF-16LE). O JSON de Service Account do Google tem ~2400–2800 chars, estourando esse limite com erro 1783. A solução é arquivo protegido por permissões do filesystem, cross-platform e sem limite de tamanho.

## Threading
Consultas ao Google Sheets rodam em `QThread` via `_Worker` + `_run_async` em `home_view.py`.
O `gspread.Client` é um singleton não thread-safe — `_set_busy` bloqueia todos os botões OK enquanto uma consulta estiver em andamento, prevenindo requisições concorrentes.

### Prewarm OAuth
Ao ativar uma planilha, `service.prewarm_async()` dispara uma thread em background que:
1. Renova o token OAuth via `credentials.refresh(Request())`
2. Abre a planilha no gspread (aquece a conexão TLS)

Um `threading.Event` (`_auth_ready`) garante que a primeira consulta real aguarda o prewarm sem bloquear a UI. Reduz o tempo da primeira query de ~11s para ~5s.

### Cache
`SheetsManager` mantém `_cadastro: CadastroAnalyseHandler` em memória após o primeiro `load_cadastro()`.
O usuário pode limpar via **Arquivo → Limpar cache**, que chama `manager.clear_cache()` + reset das views.

## Status bar (`GuiStatusBar`)
Barra fixa na base da janela com três estados de cor:

| Cor | Condição |
|---|---|
| Amarelo | Credenciais não configuradas **ou** nenhuma planilha selecionada |
| Verde | Credenciais OK + planilha conectada (estado padrão) |
| Laranja | Consulta em andamento |

Reverte automaticamente para verde 3s após o sucesso.

Durante o estado laranja, um contador de 1s atualiza o texto com o tempo decorrido (ex: `3s  Realizando consulta...`). Implementado com `QTimer.singleShot` recursivo (mais compatível com Nuitka do que `QTimer` persistente).

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
| `CACHE_CLEAR` | — | Cache da planilha limpo pelo usuário |
| `ERROR` | `msg=`, `where=` (opcional), `duration_s=` (opcional) | Qualquer exceção capturada |

Saída: `~/.mariacacau/logs.log` (append-only, formato `YYYY-MM-DD HH:MM:SS  LEVEL  mensagem`).

Para adicionar um novo evento: acrescentar valor ao `AppEvent` e chamar `observability.log(AppEvent.NOVO, ...)`.

## Gráficos (`ChartWidget`)

Módulo `maria_cacau/core/charts.py` — widget reutilizável baseado em `matplotlib` + `seaborn`, embutido diretamente nas views via Qt.

| Símbolo | Descrição |
|---|---|
| `ChartType` | Enum `BAR` / `PIE` — tipo de visualização |
| `ChartWidget` | `QWidget` com `FigureCanvasQTAgg` dentro de `QScrollArea` |
| `update_data(data, title)` | Alimenta o gráfico com dados novos e re-renderiza |
| `set_type(ChartType)` | Troca o tipo sem precisar repassar os dados |
| `copy_to_clipboard()` | Exporta o gráfico como PNG para a área de transferência (150 dpi) |
| `save_to_file()` | Salva como PNG ou SVG via diálogo de arquivo |

**Scroll horizontal**: para gráficos de barras com muitos itens, o canvas é redimensionado via `canvas.resize(n * 22px, viewport_h)` — se o canvas ultrapassar o viewport, a barra de scroll cinza aparece automaticamente.

**Paleta**: barras usam `YlOrBr` invertido (marrom escuro nas maiores quantidades); pizza usa `Set2`. Labels de pizza com >10 fatias são movidos para legenda lateral.

**Uso nas views**:
- `products_resume_view.py`: `ChartWidget(ChartType.BAR)` com `QComboBox` para alternar para pizza
- `orders_pendent_view.py`: `ChartWidget(ChartType.PIE)` fixo (modalidades de entrega)

## Assets (`asset()`)
Qualquer path de asset deve ser resolvido via `asset('images/foo.png')` de `maria_cacau/__init__.py`.
Internamente usa `Path(__file__).parent / 'assets' / relative_path`, garantindo resolução correta tanto em dev quanto no `.exe` compilado pelo Nuitka.

## Módulo Backend (`maria_cacau/backend/`)

Backend local in-process baseado em Flask `test_client()`. Serve como camada de serviços entre as features da UI e o Google Sheets. Em desenvolvimento na branch `feat/backend`.

**Fluxo:** `Feature → LocalClient → BackendServer → Route → Service → Repository → DataSource`

### Organização interna

```
backend/
├── _server.py              # BackendServer — Flask app + blueprints + execute()
├── data_source/            # GoogleSheetsDataSource, protocol, enums de colunas, erros
├── utils/                  # Utilitários compartilhados (ex: normalize_decimal)
└── features/
    └── orders/             # Domínio de pedidos
        ├── shared/         # models.py (dataclasses) + mapper.py (OrderMapper)
        ├── schemas/        # shared.schema.json — tipos JSON Schema compartilhados
        └── subfeatures/
            ├── deliveries/ # GET /orders/deliveries
            ├── payments/   # GET /orders/payments-pendent
            └── summary/    # GET /orders (pendente)
```

Cada subfeature tem `repository.py`, `service.py`, `route.py` e `response/` (schema + example).
Rotas de infra (`auth`, `source`, `status`) entrarão em `features/auth/` e `features/sheets/` — fora de `orders/`.

### Padrões do backend

| Padrão | Descrição |
|---|---|
| **Repository por subfeature** | Cada repo faz cast numérico apenas das colunas do seu domínio |
| **OrderMapper** | `shared/mapper.py` converte `Series → Order` — reutilizado por qualquer subfeature |
| **Blueprint chain** | `subfeatures/__init__` → `orders/__init__` → `features/__init__`. `_server.py` importa só de `features` |
| **`response/` por subfeature** | `schema.json` + `example.json` junto ao código da feature |
| **Slots como constante** | `PAYMENT_SLOTS = 6` e `PRODUCT_SLOTS = 7` em `sheet_mapper.py` — fonte única de verdade |
| **normalize_decimal** | `utils/numbers.py` — converte formato BR → EN para cast numérico |

> Documentação detalhada: `pocs/backend/ongoing-study.md`

---

## Fonte única de verdade
- **Versão, ano e empresa** → `pyproject.toml` (`[project]` e `[tool.maria-cacau]`)
- **Metadados do app** (nome exibido, copyright, ícones) → `maria_cacau/__init__.py` (lê do pyproject.toml)
- **Textos de UI** → `maria_cacau/assets/strings.py`
- **Erros** → `maria_cacau/core/errors.py`
- **Paths de assets** → `asset()` em `maria_cacau/__init__.py`
