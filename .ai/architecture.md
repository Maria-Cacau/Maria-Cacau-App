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

## Fonte única de verdade
- **Versão, ano e empresa** → `pyproject.toml` (`[project]` e `[tool.maria-cacau]`)
- **Metadados do app** (nome exibido, copyright, ícones) → `maria_cacau/__init__.py` (lê do pyproject.toml)
- **Textos de UI** → `maria_cacau/assets/strings.py`
- **Erros** → `maria_cacau/core/errors.py`
- **Paths de assets** → `asset()` em `maria_cacau/__init__.py`
