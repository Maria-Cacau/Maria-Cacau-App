# Arquitetura

## Estrutura de pastas

```
Maria-Cacau-Contagem/
├── .ai/                          # instruções para IAs
├── scripts/
│   ├── build.sh                  # setup do ambiente
│   └── package.sh                # gera executável
├── maria_cacau/                  # pacote principal
│   ├── __init__.py               # metadados centralizados (versão, copyright, ícones)
│   ├── __main__.py               # entry point
│   ├── core/
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
│               ├── cpf_validation/
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

## Status bar (`GuiStatusBar`)
Barra fixa na base da janela com três estados de cor:

| Cor | Condição |
|---|---|
| Amarelo | Credenciais não configuradas **ou** nenhuma planilha selecionada |
| Verde | Credenciais OK + planilha conectada (estado padrão) |
| Laranja | Consulta em andamento |

Reverte automaticamente para verde 3s após o sucesso.

Durante o estado laranja, um `QTimer` de 1s atualiza o texto com o tempo decorrido na frente da mensagem (ex: `3s  Realizando consulta...`).

## Observabilidade (`observability`)

Módulo `maria_cacau/core/observability.py` — singleton `observability` com enum `AppEvent`.

| Evento | Extra kwargs | Quando |
|---|---|---|
| `APP_START` | — | App inicializado |
| `APP_CLOSE` | — | Janela fechada (`closeEvent`) |
| `QUERY_ENTREGAS` | `date=`, `duration_s=` | Consulta de entregas com sucesso |
| `QUERY_PRODUTOS` | `start=`, `end=`, `duration_s=` | Consulta de produtos com sucesso |
| `CERT_SET` | — | Certificado configurado com sucesso |
| `SHEET_ADD` | `name=`, `sheet_id=` | Planilha conectada e salva |
| `BTN_COPY` | `feature=` | Botão Copiar clicado (entregas ou produtos) |
| `ERROR` | `msg=`, `where=` (opcional), `duration_s=` (opcional) | Qualquer exceção capturada |

Saída: `~/.mariacacau/logs.log` (append-only, formato `YYYY-MM-DD HH:MM:SS  LEVEL  mensagem`).

Para adicionar um novo evento: acrescentar valor ao `AppEvent` e chamar `observability.log(AppEvent.NOVO, ...)`.

## Fonte única de verdade
- **Versão, ano e empresa** → `pyproject.toml` (`[project]` e `[tool.maria-cacau]`)
- **Metadados do app** (nome exibido, copyright, ícones) → `maria_cacau/__init__.py` (lê do pyproject.toml)
- **Textos de UI** → `maria_cacau/assets/strings.py`
- **Erros** → `maria_cacau/core/errors.py`
