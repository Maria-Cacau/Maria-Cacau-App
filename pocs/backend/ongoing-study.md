# Ongoing Study — Módulo Backend

> Documento de continuidade. Qualquer sessão futura começa aqui.
> Objetivo: criar o módulo `core/backend/` — backend local (in-process) que serve como camada de serviços entre as features e a fonte de dados (hoje: Google Sheets).

---

## Contexto

O projeto está passando por uma refatoração arquitetural (branch `feat/arch-MVC`).
A camada de `network` já foi criada (`core/network/`) — ver `pocs/modules/Network_Python_Design.md`.

O problema que motivou o backend: as features conhecem `SheetColumns`, `pandas.DataFrame`, e fazem análise de dados elas mesmas. Isso deveria ser responsabilidade de um serviço. O backend resolve isso.

---

## Objetivo do módulo

- Ser o "servidor local" da aplicação: recebe `HTTPRequest`, processa, devolve `HTTPResponse`
- Conectar com `LocalClient` do módulo `network`
- Isolar toda lógica de negócio e acesso à planilha das features
- Tornar a troca de fonte de dados (planilha → banco real) transparente para as features

---

## Status

| Etapa | Status |
|---|---|
| Definir arquitetura e decisões | Concluído — documentado neste arquivo |
| Criar `_server.py` | Pendente |
| Criar `routes/orders.py` | Pendente — escopo inicial: só orders |
| Criar `services/` (orders, payments, deliveries) | Pendente |
| Criar `repositories/sheets_repository.py` | Pendente |
| Criar contrato de erros | Pendente |
| Migrar `orders_pendent` para usar o backend | Pendente |
| Criar `routes/auth.py` e `routes/source.py` | Pendente — próxima fase |

---

## Arquitetura — Camadas

```
Feature (use_case)
    │
    │  API call via LocalClient
    ▼
┌──────────┐
│  Route   │  Só HTTP: parseia params, chama service, monta response
└────┬─────┘
     │
     ▼
┌──────────┐
│ Service  │  Regra de negócio (pandas, filtros, cálculos)
└────┬─────┘
     │
     ▼
┌────────────┐
│ Repository │  Acessa a fonte de dados (sheets). Conhece SheetColumns
└────────────┘
```

**Regras de cada camada:**
- **Route:** zero lógica de negócio. Só lê params da request e devolve response.
- **Service:** toda lógica que hoje está no `use_case` das features. Retorna `dict` (JSON-serializável) — nunca `DataFrame`.
- **Repository:** único lugar que conhece `SheetColumns` e `pandas`. Retorna `DataFrame` para o service.

---

## Estrutura de Arquivos

```
maria_cacau/core/backend/
├── __init__.py
├── _server.py            # BackendServer — Flask app + test_client + execute()
├── routes/
│   ├── __init__.py
│   ├── orders.py         # Blueprint: GET /orders/deliveries, GET /orders/payments-pendent
│   ├── auth.py           # Blueprint: POST /auth  (próxima fase)
│   └── source.py         # Blueprint: POST /source (próxima fase)
├── services/
│   ├── __init__.py
│   ├── orders_service.py
│   ├── payments_service.py
│   └── deliveries_service.py
└── repositories/
    ├── __init__.py
    └── sheets_repository.py
```

Sem `_router.py` — o Flask já é o router. O `_server.py` registra os Blueprints e expõe o `BackendServer`.

---

## Rotas Definidas

| Método | Path | Responsabilidade |
|---|---|---|
| GET | `/orders/deliveries` | Contagem de entregas por tipo em uma data |
| GET | `/orders/payments-pendent` | Lista de clientes com pagamento pendente |
| POST | `/auth` | Carrega credenciais da Service Account |
| POST | `/source` | Registra o ID/URL da planilha |

**Por que `/orders/deliveries` e não `/deliveries`?**
Ambos são sub-recursos do domínio de pedidos. Rotas aninhadas deixam isso explícito e agrupam o domínio.

**Por que `/source` e não `/setup`?**
`/source` é abstrato o suficiente para sobreviver quando a planilha virar um banco de dados. A ação é "configurar a fonte de dados", não "fazer setup".

---

## Contrato de Erros

O backend devolve erros estruturados no body da response:

```json
{
  "code": "SHEET_NOT_CONNECTED",
  "user_message": "Planilha não configurada.",
  "dev_message": "GoogleSheetsService.is_connected() returned False"
}
```

- `code`: identificador único do erro (snake_upper)
- `user_message`: texto pronto para mostrar ao usuário
- `dev_message`: contexto técnico para debug

**Responsabilidade dos erros:**
- Erros do backend (planilha, credenciais, dados) → vêm no `HTTPResponse` com status 4xx/5xx
- Erros da feature (validação local, estado da UI) → tratados no `use_case` da feature

O `repository` da feature lança exceção se `response.is_success` for `False`.
O `use_case` captura e decide o que fazer (ex: chamar popup).

---

## Decisões do Lado da Feature

### Cache

O cache **fica no `use_case` da feature**, não no backend.

**Motivo:** o backend é stateless por natureza. Se a feature pedir a mesma data duas vezes, o backend sempre faz uma "req limpa" — os dados podem ter sido atualizados entre as chamadas. O cache é uma otimização da aplicação, não do serviço.

### Repository da feature

Continua existindo, mas sem lógica de negócio:
- Recebe o `HTTPResponse` do backend
- Valida `is_success`
- Deserializa para o model da feature

### Use case da feature

Orquestra: chama o repository, combina os dados de deliveries e payments, monta o model para o viewmodel.

### Repository da feature — 1 classe, 2 métodos

```python
class OrdersRepository:
    def get_deliveries(self, date: str) -> DeliveriesModel: ...   # GET /orders/deliveries
    def get_payments_pendent(self, date: str) -> list[PaymentModel]: ...  # GET /orders/payments-pendent
```

Um único repositório para o domínio de orders — os dois endpoints vivem no mesmo domínio.

---

## Como o Roteamento Funciona

Flask com `test_client()` — in-process, sem servidor HTTP. As rotas são Blueprints normais do Flask. O `BackendServer` faz a conversão entre `HTTPRequest`/`HTTPResponse` e os tipos do Flask:

```python
# routes/orders.py — Blueprint Flask normal
@orders_bp.get("/deliveries")
def get_deliveries():
    date = request.args.get("date")
    data = _service.get_deliveries(date)
    return jsonify(data), 200

# _server.py — converte e despacha via test_client
class BackendServer:
    def execute(self, request: HTTPRequest) -> HTTPResponse:
        flask_response = _flask_client.open(
            request.path,
            method=request.method,
            query_string=request.params,
            json=request.body,
        )
        return HTTPResponse(
            status_code=flask_response.status_code,
            headers=dict(flask_response.headers),
            body=flask_response.data,
        )
```

Ver comparação completa (Flask vs funções diretas) em `routes-design.md`.

---

## Conexão com o módulo Network

O `BackendServer` implementa `execute()` — contrato atual do `LocalClient`.

**Decisão fechada:** `execute()` é o contrato. O `handle()` foi analisado como estudo comparativo — ver `routes-design.md` — mas não entra na implementação. O `BackendServer` implementa `execute()` diretamente.

Setup no `__main__.py`:
```python
from maria_cacau.core.network import configure, LocalClient
from maria_cacau.core.backend import BackendServer

configure(LocalClient(backend=BackendServer()))
```

---

## Próximos Passos (ordem sugerida)

Escopo atual: apenas endpoints de `orders_pendent` (deliveries + payments-pendent).

1. Criar `repositories/sheets_repository.py` — acesso à planilha, devolve `DataFrame`
2. Criar `services/deliveries_service.py` — lógica de contagem por tipo de entrega
3. Criar `services/payments_service.py` — lógica de pagamentos pendentes
4. Criar `routes/orders.py` — Blueprint com os dois endpoints
5. Criar `_server.py` — Flask app + blueprints + `BackendServer.execute()`
6. Criar `__init__.py` — exporta só `BackendServer`
7. Criar contrato de erros (`_errors.py`)
8. Atualizar `__main__.py` — `configure(LocalClient(backend=BackendServer()))`
9. Migrar `orders_pendent` — limpar `use_case`, reescrever `repository`

Próxima fase (depois de orders_pendent funcionar):
- `routes/auth.py` + `routes/source.py`

---

## Referências

- `pocs/backend/routes-design.md` — comparação Flask vs funções diretas + exemplo do adapter
- `pocs/modules/Network_Python_Design.md` — design completo do módulo network
- `pocs/architecture/overview.md` — arquitetura geral do projeto
- `maria_cacau/core/network/` — implementação atual do network
- `maria_cacau/features/home/sub_features/orders_pendent/` — primeira feature a ser migrada
- `maria_cacau/core/sheets/service.py` — fonte de dados atual (GoogleSheetsService)
