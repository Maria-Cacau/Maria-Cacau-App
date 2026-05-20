# Contexto de Sessão — Maria Cacau

> Leia este arquivo primeiro. Ele é o ponto de entrada para qualquer sessão.
> Para detalhes de um tópico específico, os links na seção "Onde ler mais" indicam o arquivo certo.

---

## O que é o projeto

App desktop PyQt6 + Python para a loja Maria Cacau. Lê dados de uma planilha Google Sheets e exibe resumos operacionais (entregas do dia, produtos por período, validação de CPF, etc.). O objetivo final é substituir o acesso direto à planilha por um backend FastAPI no Railway — mas por ora o backend roda in-process.

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
| `delivery` | `home/sub_features/delivery/` | ✅ | `data/` + `domain/` + `presentation/` — usa backend |
| `summary` | `home/sub_features/summary/` | ✅ | `data/` + `domain/` + `presentation/` — usa backend (`GET /orders`) |
| `cpf_validation` | `features/cpf_validation/` | ✅ | Só `domain/` + `presentation/` — validação local; abre via menu Funcionalidades |
| `funcionalidades` | `features/funcionalidades/` | ✅ | Só `presentation/` — `QMenu` que agrega ferramentas auxiliares |
| `auth` | `features/auth/` | ✅ | `data/` + `domain/` + `presentation/` — usa `/auth`; menu "Segurança" é um `QMenu` |
| `sheets` | `features/sheets/` | ✅ | `data/` + `domain/` + `presentation/view/` — usa `PUT /sheet`; menu "Arquivo" é um `QMenu` |

---

## Próximas sessões

> Nenhuma fase pendente. Fase 4 (refinamentos adicionais do DS) ficará para a v6.0.

---

## Histórico — fases concluídas

| Fase | O que foi feito |
|---|---|
| Migração das features | Todas as 7 features migradas para Clean Arch MVC (domain/data/presentation) |
| Backend completo | 5 rotas implementadas; `DataSource` isolado com `DataSourceProtocol` |
| Refatoração home/main | `GuiMain` decomposta em `MainWindow` + `MenuHandler` (`app/`) e `HomeController/HomeView` (`features/home/source/`) |
| Infraestrutura de sessão | `AppCoordinator`, `AppInitUseCase`, `AppSession` (`core/session`), `_EventBus` (`core/bus`) |
| Cache em memória | `OrdersRepository` e `SummaryRepository` com cache por params; limpeza via `bus.cache_cleared` → menu "Arquivo → Limpar cache" |
| Refinamentos pós-refatoração | Status bar via bus, `core/session` em requests, dialogs com `DIALOG_MIN_WIDTH = 500`, remoção de planilha (DELETE /sheet) com sub-menu + confirmação + atualização de session/status bar |
| Report + Design System | Cache removido dos repositories; tela limpa ao gerar novo relatório (`clear_content()`); `DSButton` com `DSButtonState` (DEFAULT/DISABLED/LOADING) + `DSLoadingHandler` mixin em `design_system/components/` e `design_system/handlers/`; `bts()` e `aux_frames.py` removidos |
| Redesign + Fase 2 | Removidas features `nota_fiscal` e `shipping_rate`; `delivery` e `summary` lado a lado na home; `cpf_validation` migrada para `features/` como feature independente e virou `QDialog`; criado menu "Funcionalidades" (`features/funcionalidades/`) com sub-item "Validador de CPF" que abre o dialog via `show()` |
| Fase 3 — Design System | `AuxWidgets`, `gui_popup.py` e `core/charts.py` removidos; Design System expandido com 7 novos componentes em pastas próprias (`alerts/`, `chart/`, `combo_box/`, `containers/`, `inputs/`, `label/`, `text_view/`); views e controllers migrados para consumir somente componentes DS; `features/funcionalidades/` removida — `MenuHandler` cria o menu inline e instancia `CpfValidationController` diretamente; `menu_title` exposto como property em `CpfValidationView` |
| Observabilidade — Network layer | `AppEvent` limpo (só `APP_START`/`APP_CLOSE`); `log()` aceita qualquer `Enum`; novo `core/network/_observability.py` com `NetworkEvent` próprio e função `track()` — loga automaticamente `path`, `method`, `status` e `duration_s` de toda request via `LocalClient` |

---

## Decisões e padrões estabelecidos

| Decisão | Detalhe |
|---|---|
| Sem cache nos repositories | Cache removido de `OrdersRepository` e `SummaryRepository` — cada clique sempre vai ao backend; funcionários não precisam saber de cache |
| `clear_content()` nas views | Método próprio que reseta texto padrão + limpa gráfico + desabilita botões de ação; `prepare_to_fetch()` o chama |
| `DSButton` como base do DS | `DSButton(QPushButton, DSLoadingHandler)` com `update_state(DSButtonState)` — largura fixada no `__init__` para não encolher durante o loading |
| `DSLoadingHandler` em `handlers/` | Mixin genérico de spinner; qualquer outro componente futuro herda sem depender de `components/buttons/` |
|---|---|
| Sub-views em pasta | Quando feature tem 2+ views → `presentation/view/` com um arquivo por view |
| `update_name` separado de `connect` | Renomear planilha existente = só cache; nenhuma chamada ao backend |
| "Limpar cache" no menu Arquivo | Limpa o cache em memória dos repositories via `bus.cache_cleared` |
| `RemoveSheetAPI` (DELETE /sheet) | Conectado via `SheetsRepository.remove` — só chama o backend se for a planilha ativa |
| `pre_login` em `AuthRepository` | Encapsula o reenvio de credenciais ao backend; `AppInitUseCase` usa este método em vez de chamar `ConnectAuthAPI` diretamente |
| `NoCachedCredentialsError` | Erro de domínio em `auth/domain/errors.py`; `pre_login` lança se não houver credenciais no cache |
| `DIALOG_MIN_WIDTH = 500` | Constante em `design_system/constants.py`; `GuiPopup` usa `QSpacerItem` (macOS ignora `setMinimumWidth` em `QMessageBox`) |
| Sub-menu por planilha | `QMenu` por item em vez de `QAction`; check mark via `menuAction().setCheckable(True)`; "Selecionar" oculto quando já ativa |
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
