# Contexto de Sessão — Maria Cacau

> Leia este arquivo primeiro. Ele é o ponto de entrada para qualquer sessão.
> Para detalhes de um tópico específico, os links na seção "Onde ler mais" indicam o arquivo certo.

---

## O que é o projeto

App desktop PyQt6 + Python para a loja Maria Cacau. Lê dados de uma planilha Google Sheets e exibe resumos operacionais (entregas do dia, produtos por período, validação de CPF, etc.). O objetivo final é substituir o acesso direto à planilha por um backend FastAPI no Railway — mas por ora o backend roda in-process.

---

## O que estamos fazendo agora

**Refatoração arquitetural em andamento.** Cada feature que existia num arquivo flat (`gui_xxx.py` com tudo junto) está sendo migrada para a nova estrutura em camadas. A feature `delivery` foi a primeira — use seu `README.md` como template.

A migração acontece **por funcionalidade**, uma de cada vez.

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

**Features vs Sub-features:**
- Features independentes do fluxo de `home/` vivem em `features/<nome>/` (ex: `features/auth/`)
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
| `sheets` | — | ⏳ Pendente | Cadastro e seleção de planilhas — vai usar rotas `/sheet`; menu "Arquivo" é um `QMenu` |

---

## Ordem de prioridade definida

1. ~~**`nota_fiscal` + `freight_query` (CEP)**~~ ✅ Concluído
2. ~~**`summary`**~~ ✅ Concluído
3. ~~**`auth`**~~ ✅ Concluído — `features/auth/`; menu "Segurança" como `QMenu`
4. **`sheets`** — cadastro e seleção de planilhas; usa `PUT /sheet/<id>` e `DELETE /sheet`; mesma estrutura de `auth` (feature independente em `features/sheets/`)

---

## O que a próxima sessão vai fazer: feature `sheets`

A feature `sheets` segue exatamente o mesmo padrão que `auth`. Pontos já decididos:

- **Localização:** `features/sheets/` (feature independente, não sub-feature)
- **View:** `QMenu` com título "Arquivo" — submenu "Planilhas conectadas" + action "Conectar nova planilha" + separador + "Limpar cache" (TODO futuro)
- **Backend calls:** `PUT /sheet/<sheet_id>` (selecionar) e `DELETE /sheet` (remover)
- **Storage:** `CacheStorage` — persiste lista de planilhas `[{nome, sheet_id}]` em `~/.mariacacau/`
- **Regra de negócio:** ao conectar nova planilha, verifica se já tem credenciais em `SecurityStorage`; se tiver → chama backend; se não tiver → só salva em cache
- **Diálogos:** todos no controller (mesmo padrão decidido em `auth`)
- **`home_view.py` depois:** remove todo o código de planilhas (`_DialogConectarPlanilha`, `_extract_sheet_id`, `_auto_connect`, `on_conectar_planilha`, `_add_planilha_menu`, `_update_planilha_check`, `_on_selecionar_planilha`, `_resolve_nome`, `on_limpar_cache`, `_load_sheets`, `_save_sheet`); instancia `SheetsController()` e adiciona `self.sheetsFeature.view` ao menubar
- **Bridge em `__main__.py`:** remover o bloco `TODO: REMOVER` por completo após sheets migrar

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
