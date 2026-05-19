# Contexto de Sessão — Maria Cacau

> Leia este arquivo primeiro. Ele é o ponto de entrada para qualquer sessão.
> Para detalhes de um tópico específico, os links na seção "Onde ler mais" indicam o arquivo certo.

---

## O que é o projeto

App desktop PyQt6 + Python para a loja Maria Cacau. Lê dados de uma planilha Google Sheets e exibe resumos operacionais (entregas do dia, produtos por período, validação de CPF, etc.). O objetivo final é substituir o acesso direto à planilha por um backend FastAPI no Railway — mas por ora o backend roda in-process.

---

## O que estamos fazendo agora

**Infraestrutura do app concluída.** `GuiMain` foi decomposta, a pasta `app/` centraliza a casca do app com `AppCoordinator`, `core/session` centraliza o estado global, `core/bus` disponibiliza o event bus e `AppInitUseCase` orquestra a inicialização com uma única chamada HTTP. Próximas etapas: status bar via eventos de sessão e limpeza de cache.

---

## Os três mundos (isolamento total)

```
┌──────────────────────────────┐
│  Aplicação (features/ + UI)  │  conhece só HTTPRequest/HTTPResponse
└─────────────┬────────────────┘
              │ LocalClient
┌─────────────▼────────────────┐
│  Backend (backend/)          │  Flask test_client() in-process
└─────────────┬────────────────┘
              │ DataSourceProtocol
┌─────────────▼────────────────┐
│  DataSource (data_source/)   │  Google Sheets via gspread
└──────────────────────────────┘
```

- **Aplicação** não importa nada de `backend/`
- **Backend** não importa nada de `features/`
- **DataSource** não conhece Flask, não conhece features

---

## Padrão de feature migrada

```
feature/
├── domain/          # models.py · use_case.py · signals.py · events.py
├── data/            # apis.py · mapper.py · repository.py  ← só se tiver chamada de rede
└── presentation/    # view.py · viewmodel.py · controller.py
```

**Regras rápidas:**
- `domain/` é o centro — as outras camadas importam daqui, nunca uma da outra
- `data/` só existe se a feature faz chamada ao backend; features locais não têm essa camada
- `view.py` expõe `pyqtSignal` com nome de domínio e uma `@property view_title -> str`
- `view.py` **não** abre dialogs nem faz decisões — só emite signals puros
- `controller.py` cola tudo: abre dialogs, conecta signals da view ao viewmodel e signals do domínio de volta à view
- `viewmodel.py` usa `ThreadPoolExecutor` só se houver I/O (chamada de rede); validação local é síncrona
- `events.py` define `FeatureEvents(Enum)` — os valores de log ficam aqui, não no `AppEvent` global
- Models de domínio têm sufixo `Model` (ex: `SheetModel`) para distinguir no uso

**Views com sub-views:**
- Quando uma feature tem mais de uma view (ex: menu + dialog), criar `presentation/view/` como pasta
- Cada view é um arquivo separado dentro de `view/`
- O controller instancia e gerencia as duas views
- Padrão interno de cada view: `_setup_ui() → _setup_components() + _setup_layout()`

**Features vs Sub-features:**
- Features independentes do fluxo de `home/` vivem em `features/<nome>/` (ex: `features/auth/`, `features/sheets/`)
- Sub-features da janela principal vivem em `features/home/sub_features/<nome>/`

> Detalhes completos em `.ai/architecture.md` — seção "Padrão de arquitetura de feature".

---

## Backend — rotas e status

| Método | Path | Status |
|---|---|---|
| `GET` | `/orders/deliveries` | ✅ Implementado |
| `GET` | `/orders/payments-pendent` | ✅ Implementado |
| `GET` | `/orders` | ✅ Implementado |
| `POST/DELETE` | `/auth` | ✅ Implementado |
| `PUT/DELETE` | `/sheet` | ✅ Implementado |

O backend está completo.

> Detalhes em `pocs/backend/ongoing-study.md`.

---

## Status das features

| Feature | Localização | Status | Observação |
|---|---|---|---|
| `delivery` | `home/sub_features/delivery/` | ✅ Migrada | `data/` + `domain/` + `presentation/` — usa backend |
| `cpf_validation` | `home/sub_features/cpf_validation/` | ✅ Migrada | Só `domain/` + `presentation/` — validação local |
| `nota_fiscal` | `home/sub_features/nota_fiscal/` | ✅ Migrada | Só `presentation/` — placeholder; futuro: API Tiny/OList |
| `shipping_rate` | `home/sub_features/shipping_rate/` | ✅ Migrada | Só `presentation/` — placeholder; futuro: API Melhor Envio |
| `summary` | `home/sub_features/summary/` | ✅ Migrada | `data/` + `domain/` + `presentation/` — usa backend (`GET /orders`) |
| `auth` | `features/auth/` | ✅ Migrada | `data/` + `domain/` + `presentation/` — usa `/auth`; menu "Segurança" é um `QMenu` |
| `sheets` | `features/sheets/` | ✅ Migrada | `data/` + `domain/` + `presentation/view/` — usa `PUT /sheet`; menu "Arquivo" é um `QMenu`; `core/sheets/` deletado |

---

## Ordem de prioridade — concluída

1. ~~**`nota_fiscal` + `freight_query` (CEP)**~~ ✅
2. ~~**`summary`**~~ ✅
3. ~~**`auth`**~~ ✅
4. ~~**`sheets`**~~ ✅ — `features/sheets/`; menu "Arquivo" como `QMenu`; `core/sheets/` removido

---

## Próximas sessões

### ~~1. Refatoração da home e MainWindow~~ ✅

`GuiMain` decomposta em:
- `features/main/window.py` → `MainWindow` (QMainWindow, menubar, status bar, central widget)
- `features/main/handler.py` → `MenuHandler` (instancia `AuthController` + `SheetsController`, monta os QMenus)
- `features/home/source/view.py` → `HomeView` (background + layout das sub-features)
- `features/home/source/controller.py` → `HomeController` (instancia as 5 sub-features, chama `setup_view`)
- `features/home/source/models.py` → `HomeFeaturesModel` (DTO com os `view.root` de cada sub-feature)

### 2. Criação das ações de pre-load do app

Orquestrar as chamadas de inicialização que hoje estão dispersas:
- `auth.auto_connect()` precisa completar antes de `sheets.auto_connect()` chamar o backend
- Definir ordem e dependências de inicialização de forma explícita

### 3. `core/session` — dados compartilhados do app

Centralizar estado global compartilhado entre features (ex: planilha ativa, status de autenticação).
Hoje esse estado fica implícito no backend (`data_source`). A ideia é ter um objeto de sessão acessível às features sem acoplar ao backend.

### 4. Feature: status bar

A barra de status existe (`features/home/sub_features/status_bar/`) mas ainda recebe dados diretamente de `home_view.py`. Após a separação home/main, ela precisa ser conectada via eventos/signals da sessão — não via chamadas diretas.

---

## Decisões e padrões estabelecidos nessa fase

| Decisão | Detalhe |
|---|---|
| Sub-views em pasta | Quando feature tem 2+ views → `presentation/view/` com um arquivo por view |
| `update_name` separado de `connect` | Renomear planilha existente = só cache; nenhuma chamada ao backend |
| "Limpar cache" no menu Arquivo | Refere-se ao cache **em memória** dos repositories/services — não à pasta `~/.mariacacau/` |
| `RemoveSheetAPI` (DELETE /sheet) | Criado, não conectado; será usado quando "Limpar cache" for implementado |
| Sufixo `Model` em domain models | Ex: `SheetModel` — facilita identificação no uso dentro do código |

---

## Onde ler mais

| Tópico | Arquivo |
|---|---|
| Arquitetura geral detalhada (padrões, camadas, exemplos de código) | `.ai/architecture.md` |
| Status e histórico do estudo arquitetural | `pocs/architecture/self-study.md` |
| Decisões de design e padrões Python estabelecidos | `pocs/architecture/overview.md` |
| Backend — decisões, estrutura, padrões, próximos passos | `pocs/backend/ongoing-study.md` |
| Template de README por feature | `features/home/sub_features/delivery/README.md` |
| Análise da planilha e design da feature Novo Pedido | `pocs/sheets-analysis/` |
