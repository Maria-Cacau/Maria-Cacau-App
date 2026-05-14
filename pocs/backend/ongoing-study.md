# Ongoing Study — Módulo Backend

> Documento de continuidade. Qualquer sessão futura começa aqui.
> Objetivo: criar o módulo `backend/` — backend local (in-process) que serve como camada de serviços entre as features e a fonte de dados (hoje: Google Sheets).

---

## Contexto

O projeto está passando por uma refatoração arquitetural (branch `feat/backend`).
A camada de `network` já foi criada (`core/network/`) — ver `pocs/modules/Network_Python_Design.md`.

O problema que motivou o backend: as features conhecem `SheetColumns`, `pandas.DataFrame`, e fazem análise de dados elas mesmas. Isso deveria ser responsabilidade de um serviço. O backend resolve isso.

**Posição no projeto:** `maria_cacau/backend/` — módulo completamente isolado. Não importa nada de outras pastas dentro de `maria_cacau/`. A única exceção é `core/storage`, usado pelo `data_source/_helper.py` (infraestrutura pura, sem regra de negócio).

**Fluxo:** `features/ → LocalClient → BackendServer → Route → Service → Repository → DataSource`

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
| Definir arquitetura e decisões | Concluído |
| Definir contratos JSON (responses + schemas) | Concluído |
| Criar `models/order.py` | Concluído |
| Criar `repositories/_columns.py` | Concluído |
| Definir endpoints e responsabilidades | Concluído |
| Definir design do `GoogleSheetsDataSource` | Concluído |
| Implementar `data_source/` | Pendente |
| Criar `repositories/sheets_repository.py` | Pendente |
| Criar `services/payments_service.py` | Pendente |
| Criar `services/deliveries_service.py` | Pendente |
| Criar `routes/orders.py` | Pendente |
| Criar `routes/auth.py` | Pendente |
| Criar `routes/source.py` | Pendente |
| Criar `routes/status.py` | Pendente |
| Criar `_server.py` | Pendente |
| Criar contrato de erros | Pendente |
| Migrar `orders_pendent` para usar o backend | Pendente |

---

## Arquitetura — Camadas

```
Feature (use_case)
    │
    │  API call via LocalClient
    ▼
┌──────────┐
│  Route   │  Só HTTP: parseia params, valida conexão, chama service + mapper, devolve response
└────┬─────┘
     │
     ▼
┌─────────────────┐
│ Service + Mapper │  Regra de negócio → monta Order objects → Mapper serializa
└────────┬─────────┘
         │
         ▼
┌────────────┐
│ Repository │  Converte list[dict] → DataFrame. Único lugar que conhece Col/ProductCol/PaymentCol
└─────┬──────┘
      │
      ▼
┌────────────────────────┐
│ GoogleSheetsDataSource │  Acessa a planilha. Faz dois passes. Retorna list[dict]
└────────────────────────┘
```

**Regras de cada camada:**
- **Route:** zero lógica. Valida conexão via `before_request`, chama service, chama mapper, devolve `jsonify`.
- **Service:** recebe DataFrame, aplica regras de negócio, monta `Order` objects.
- **Mapper:** transforma `list[Order]` em dict JSON-ready (`dataclasses.asdict`). Fica no mesmo arquivo do service.
- **Repository:** recebe `list[dict]` do data source, converte para `DataFrame`. Único lugar que conhece as colunas.
- **DataSource:** acessa a planilha com otimização de dois passes. Retorna `list[dict]` neutro.

---

## Estrutura de Arquivos

```
maria_cacau/backend/
├── __init__.py                 # exporta só BackendServer
├── _server.py                  # BackendServer — Flask app + blueprints + execute()
├── data_source/
│   ├── __init__.py             # exporta data_source: Final
│   ├── _google_sheets.py       # GoogleSheetsDataSource — só lógica, sem try/except
│   ├── _error_handlers.py      # _SheetsGuard (context managers + validações) + decorators
│   ├── _utils.py               # funções puras: normalize_date, to_dicts, to_ranges, date_range
│   └── _helper.py              # ponte com core/storage (única dependência externa)
├── models/
│   ├── __init__.py             # exporta todos os dataclasses
│   └── order.py                # Address, Event, Customer, Receiver, Customization,
│                               # ProductItem, PaymentItem, Financial, Delivery, Order
├── routes/
│   ├── __init__.py
│   ├── status.py               # GET /status
│   ├── auth.py                 # POST /auth, DELETE /auth
│   ├── source.py               # POST /source, GET /source, PUT /source/{id}, DELETE /source/{id}
│   └── orders.py               # GET /orders, GET /orders/deliveries, GET /orders/payments-pendent
├── services/
│   ├── __init__.py
│   ├── payments_service.py     # PaymentsService + PaymentsMapper
│   └── deliveries_service.py   # DeliveriesService + DeliveriesMapper
├── repositories/
│   ├── __init__.py
│   ├── _columns.py             # Col, ProductCol, PaymentCol — enums de colunas
│   └── sheets_repository.py    # SheetsRepository — list[dict] → DataFrame
└── schemas/
    ├── shared.schema.json
    ├── order.schema.json
    ├── deliveries.schema.json
    └── payments-pendent.schema.json
```

---

## Rotas Definidas

| Método | Path | Responsabilidade |
|---|---|---|
| `GET` | `/status` | Estado geral — autenticado + planilha configurada |
| `POST` | `/auth` | Carrega credenciais do arquivo JSON |
| `DELETE` | `/auth` | Remove as credenciais salvas |
| `POST` | `/source` | Registra uma nova planilha |
| `GET` | `/source` | Lista todas as planilhas conectadas |
| `PUT` | `/source/{sheet_id}` | Seleciona a planilha ativa |
| `DELETE` | `/source/{sheet_id}` | Remove uma planilha da lista |
| `GET` | `/orders/payments-pendent` | Pedidos com pagamento pendente por data |
| `GET` | `/orders/deliveries` | Contagem de entregas por data |
| `GET` | `/orders` | Pedidos por período (range de datas) |

---

## Validação de Conexão (before_request)

Antes de qualquer rota de dados, o Blueprint valida se o data source está pronto:

```python
@orders_bp.before_request
def check_connection():
    if not data_source.is_ready():
        return jsonify({"code": "SHEET_NOT_CONNECTED", ...}), 503
```

Registrado uma vez por Blueprint — todas as rotas ganham a validação automaticamente.

---

## GoogleSheetsDataSource

Vive em `data_source/_google_sheets.py`. Singleton exposto como `data_source: Final` no `__init__.py` do pacote.

**Responsabilidades:**
- Gerenciar estado da conexão (`_client`, `_creds`, `_sheet_id`)
- Restaurar sessão salva ao inicializar (`connect()`)
- Otimizar acesso à API com dois passes (lê coluna DATA → batch_get só nas linhas certas)
- Retornar `list[dict]` neutro para o repository

**Métodos públicos:**

| Método | Descrição |
|---|---|
| `is_ready() -> bool` | client autenticado + sheet configurado |
| `wait_ready(timeout)` | bloqueia até o prewarm terminar |
| `connect()` | restaura sessão + dispara prewarm em background |
| `set_credentials(path)` | carrega JSON, salva localmente, autentica |
| `set_sheet(sheet_id)` | registra planilha, salva localmente |
| `fetch_orders_by_date(date)` | retorna `list[dict]` para uma data |
| `fetch_orders_by_period(start, end)` | retorna `list[dict]` para um range |

**Fluxo de inicialização:**
```
BackendServer.__init__
  → data_source.connect()
      → _restore_session()   lê credenciais + sheet_id do disco
      → se ok: thread _do_prewarm()  refresh token + pré-aquece TLS
```

**Dois passes (otimização de API):**
1. Lê só a coluna DATA (leve)
2. Identifica linhas que batem com as datas pedidas
3. Faz `batch_get` só nessas linhas

---

## SheetsRepository

Vive em `repositories/sheets_repository.py`. Recebe `list[dict]` do data source e entrega `DataFrame` para os services.

**Métodos:**

| Método | Descrição |
|---|---|
| `get_cadastro_by_date(date) -> DataFrame` | usado por payments-pendent e deliveries |
| `get_cadastro_by_period(start, end) -> DataFrame` | usado por orders |

---

## Padrão Mapper

Cada service tem uma classe Mapper no mesmo arquivo:

```python
class PaymentsMapper:
    @staticmethod
    def to_response(orders: list[Order]) -> dict:
        return {"total": len(orders), "orders": [dataclasses.asdict(o) for o in orders]}

class PaymentsService:
    def get_pendent(self, date: str) -> list[Order]: ...
```

---

## Como o Roteamento Funciona

Flask com `test_client()` — in-process, sem servidor HTTP real:

```python
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

---

## Contrato de Erros

```json
{
  "code": "SHEET_NOT_CONNECTED",
  "user_message": "Planilha não configurada.",
  "dev_message": "GoogleSheetsDataSource.is_ready() returned False"
}
```

- Erros do backend → `HTTPResponse` com status 4xx/5xx
- Erros da feature → tratados no `use_case` da feature

---

## Decisões Arquiteturais

- **Isolamento total:** backend não importa nada de `maria_cacau.*` exceto `core/storage`
- **`core/storage` como exceção:** é infraestrutura pura, pode virar pacote separado no futuro sem quebrar nada
- **DataSource, não Service:** renomeado de `GoogleSheetsService` para `GoogleSheetsDataSource` — "service" conflita com a camada de services do backend
- **`connect()` chamado pelo `BackendServer`:** o data source não se auto-conecta. Quando virar SQL deployado, o `connect()` sai do `BackendServer` e vai para o startup do servidor
- **Retorno `list[dict]`:** o data source retorna formato neutro — funciona para Sheets, SQL ou qualquer fonte futura
- **Cache na feature:** o backend é stateless. Cache fica no `use_case` da feature
- **Tratamento de erros em `_error_handlers.py`:** `GoogleSheetsDataSource` não tem `try/except`. Todo mapeamento de exceção fica em `_SheetsGuard` (context managers) e nos decorators `handle_api` / `handle_sheet_setup`. Único caso com `try/except` explícito no DataSource: `_do_prewarm()`, porque a thread background precisa guardar o erro na instância para relançar em `wait_ready()`
- **Híbrido decorator + context manager:** decorator para métodos com tipo de erro dominante único; context manager dentro de `set_credentials` onde três operações distintas (leitura de arquivo, I/O local, autenticação Google) levantam erros de categorias diferentes

---

## Decisões do Lado da Feature

- **Cache:** fica no `use_case` da feature. O backend é stateless.
- **Repository da feature:** 1 classe, 2 métodos (`get_deliveries`, `get_payments_pendent`).
- **Use case:** orquestra os dois repositórios e monta o model para o viewmodel.

---

## Próximos Passos (ordem sugerida)

1. Implementar `data_source/_helper.py` + `data_source/_google_sheets.py`
2. Criar `repositories/sheets_repository.py`
3. Criar `services/deliveries_service.py` + `DeliveriesMapper`
4. Criar `services/payments_service.py` + `PaymentsMapper`
5. Criar `routes/orders.py` — Blueprint com os três endpoints de orders
6. Criar `routes/status.py`, `routes/auth.py`, `routes/source.py`
7. Criar `_server.py` — Flask app + blueprints + `BackendServer`
8. Criar `__init__.py` — exporta só `BackendServer`
9. Criar contrato de erros
10. Migrar `orders_pendent` — limpar `use_case`, reescrever `repository`

---

## Referências

- `pocs/backend/routes-design.md` — comparação Flask vs funções diretas
- `pocs/modules/Network_Python_Design.md` — design do módulo network
- `pocs/architecture/overview.md` — arquitetura geral do projeto
- `maria_cacau/backend/models/order.py` — dataclasses do domínio
- `maria_cacau/backend/repositories/_columns.py` — mapeamento de colunas
- `maria_cacau/backend/schemas/` — JSON Schema dos contratos
- `maria_cacau/backend/responses/` — exemplos de response
- `maria_cacau/features/home/sub_features/orders_pendent/` — primeira feature a migrar
