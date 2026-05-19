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
- **Backend** não importa nada de `features/` — única exceção: `core/storage` (credenciais)
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
- `viewmodel.py` usa `ThreadPoolExecutor` só se houver I/O (chamada de rede); validação local é síncrona
- `controller.py` cola tudo: conecta signals da view ao viewmodel e signals do domínio de volta à view
- `events.py` define `FeatureEvents(Enum)` — os valores de log ficam aqui, não no `AppEvent` global

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

O backend está completo. Próximo passo: migrar a feature `home_view` (auth) na camada de aplicação.

> Detalhes em `pocs/backend/ongoing-study.md`.

---

## Status das features

| Feature | Status | Observação |
|---|---|---|
| `delivery` | ✅ Migrada | Tem `data/` + `domain/` + `presentation/` — usa backend |
| `cpf_validation` | ✅ Migrada | Só `domain/` + `presentation/` — validação local, sem backend |
| `nota_fiscal` | ✅ Migrada | Só `presentation/` — placeholder "Em breve"; futuro: API Tiny/OList |
| `shipping_rate` (frete) | ✅ Migrada | Só `presentation/` — placeholder "Em breve"; futuro: API Melhor Envio |
| `summary` | ✅ Migrada | Resumo de produtos por período — usa backend (`GET /orders`) |
| `home_view` (auth) | ⏳ Pendente | Credenciais e cadastro de planilhas — vai usar rotas `/auth` e `/source` |

---

## Ordem de prioridade definida

1. ~~**`nota_fiscal` + `freight_query` (CEP)`**~~ ✅ Concluído — migradas para `nota_fiscal/` e `shipping_rate/`
2. ~~**`summary`**~~ ✅ Concluído — migrada para `summary/`; usa backend (`GET /orders`)
3. **Auth feature** — credenciais + cadastro de planilhas; vai exigir implementar as rotas `/auth` e `/source` no backend

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
