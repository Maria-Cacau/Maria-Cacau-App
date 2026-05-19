# Contexto de Sessão — Maria Cacau

> Leia este arquivo primeiro. Ele é o ponto de entrada para qualquer sessão.
> Para detalhes de um tópico específico, os links na seção "Onde ler mais" indicam o arquivo certo.

---

## O que é o projeto

App desktop PyQt6 + Python para a loja Maria Cacau. Lê dados de uma planilha Google Sheets e exibe resumos operacionais (entregas do dia, produtos por período, validação de CPF, etc.). O objetivo final é substituir o acesso direto à planilha por um backend FastAPI no Railway — mas por ora o backend roda in-process.

---

## O que estamos fazendo agora

**Refinamentos pós-refatoração.** Toda a infraestrutura e as features estão migradas. O foco agora é finalizar os detalhes que ficaram pendentes: conectar a status bar via bus, usar as variáveis de `core/session` para validar requests, aumentar a cobertura de observabilidade e ajustar o tamanho mínimo dos dialogs.

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
| `sheets` | `features/sheets/` | ✅ Migrada | `data/` + `domain/` + `presentation/view/` — usa `PUT /sheet`; menu "Arquivo" é um `QMenu` |

---

## Próximas sessões

3. **Aumentar observabilidade** — cobertura de log com lacunas (ex: parâmetros no cache hit, duração de requests)
4. **Popup de dialog com dimensão mínima aumentada** — `SheetCreateView` e outros dialogs abrem pequenos demais

---

## Histórico — fases concluídas

| Fase | O que foi feito |
|---|---|
| Migração das features | Todas as 7 features migradas para Clean Arch MVC (domain/data/presentation) |
| Backend completo | 5 rotas implementadas; `DataSource` isolado com `DataSourceProtocol` |
| Refatoração home/main | `GuiMain` decomposta em `MainWindow` + `MenuHandler` (`app/`) e `HomeController/HomeView` (`features/home/source/`) |
| Infraestrutura de sessão | `AppCoordinator`, `AppInitUseCase`, `AppSession` (`core/session`), `_EventBus` (`core/bus`) |
| Cache em memória | `OrdersRepository` e `SummaryRepository` com cache por params; limpeza via `bus.cache_cleared` → menu "Arquivo → Limpar cache" |

---

## Decisões e padrões estabelecidos

| Decisão | Detalhe |
|---|---|
| Sub-views em pasta | Quando feature tem 2+ views → `presentation/view/` com um arquivo por view |
| `update_name` separado de `connect` | Renomear planilha existente = só cache; nenhuma chamada ao backend |
| "Limpar cache" no menu Arquivo | Limpa o cache em memória dos repositories via `bus.cache_cleared` |
| `RemoveSheetAPI` (DELETE /sheet) | Criado, não conectado; mantido por hora para uso futuro |
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
