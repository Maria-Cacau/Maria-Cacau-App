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
│   │   │   ├── security.py               # SecurityStorage — keychain via keyring
│   │   │   └── cache.py                  # CacheStorage — JSON em ~/.mariacacau/
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
│               ├── nota_fiscal/
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
| `SecurityStorage` | keyring (keychain do SO) | Credenciais da Service Account |
| `CacheStorage` | JSON em `~/.mariacacau/` | Planilhas salvas (`sheets.json`) |

`service.py` define as chaves (`_KEYRING_SERVICE`, `_KEYRING_KEY`) mas delega as operações ao `SecurityStorage`.
`home_view.py` usa `CacheStorage` para persistir e ler a lista de planilhas conectadas.

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

## Fonte única de verdade
- **Versão, ano e empresa** → `pyproject.toml` (`[project]` e `[tool.maria-cacau]`)
- **Metadados do app** (nome exibido, copyright, ícones) → `maria_cacau/__init__.py` (lê do pyproject.toml)
- **Textos de UI** → `maria_cacau/assets/strings.py`
- **Erros** → `maria_cacau/core/errors.py`
