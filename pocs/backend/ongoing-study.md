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

## Status

| Etapa | Status |
|---|---|
| Definir arquitetura e decisões | Concluído |
| Definir contratos JSON (responses + schemas) | Concluído |
| Criar `models/order.py` | Concluído |
| Definir endpoints e responsabilidades | Concluído |
| Implementar `data_source/` | Concluído |
| Criar `repositories/sheets_repository.py` | Pendente |
| Criar `services/payments_service.py` + `PaymentsMapper` | Pendente |
| Criar `services/deliveries_service.py` + `DeliveriesMapper` | Pendente |
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
│ Repository │  Converte list[dict] → DataFrame. Único lugar que conhece SheetCols/ProductCols/PaymentCols
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
├── __init__.py                     # exporta só BackendServer
├── _server.py                      # BackendServer — Flask app + blueprints + execute()
├── data_source/
│   ├── __init__.py                 # exporta data_source, DataSourceProtocol, SheetCols, ProductCols, PaymentCols, SheetTabs
│   ├── _google_sheets.py           # GoogleSheetsDataSource — stateless, sem acesso a disco
│   ├── _viewmodel.py               # _SheetsViewModel — schema cacheado, prewarm, fetch com dois passes
│   ├── _protocol.py                # DataSourceProtocol — contrato agnóstico de fonte de dados
│   ├── _utils.py                   # funções puras: normalize_date, to_dicts, to_ranges, date_range
│   ├── _helper.py                  # ponte com core/storage — usado pelas routes (auth/source), não pelo DataSource
│   ├── sheet_mapper.py             # SheetCols, ProductCols, PaymentCols, SheetTabs — enums de colunas/tabs
│   └── errors/
│       ├── _errors.py              # exceções tipadas (DataSourceError como base)
│       └── _handler.py             # _SheetsGuard (context managers + validações) + decorators handle_api
├── models/
│   ├── __init__.py
│   └── order.py                    # Address, Event, Customer, Receiver, Customization,
│                                   # ProductItem, PaymentItem, Financial, Delivery, Order
├── routes/
│   ├── __init__.py
│   ├── status.py                   # GET /status
│   ├── auth.py                     # POST /auth, DELETE /auth
│   ├── source.py                   # POST /source, GET /source, PUT /source/{id}, DELETE /source/{id}
│   └── orders.py                   # GET /orders, GET /orders/deliveries, GET /orders/payments-pendent
├── services/
│   ├── __init__.py
│   ├── payments_service.py         # PaymentsService + PaymentsMapper
│   └── deliveries_service.py       # DeliveriesService + DeliveriesMapper
├── repositories/
│   ├── __init__.py
│   └── sheets_repository.py        # SheetsRepository — list[dict] → DataFrame
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
| `POST` | `/auth` | Recebe JSON bruto das credenciais, autentica o DataSource |
| `DELETE` | `/auth` | Limpa credenciais salvas no disco |
| `POST` | `/source` | Registra nova planilha (nome + sheet_id) |
| `GET` | `/source` | Lista todas as planilhas salvas |
| `PUT` | `/source/{sheet_id}` | Seleciona a planilha ativa no DataSource |
| `DELETE` | `/source/{sheet_id}` | Remove planilha da lista salva |
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
- Receber credenciais e autenticar com Google (em memória, sem tocar disco)
- Guardar o `sheet_id` ativo em memória
- Disparar prewarm em background quando ambos estiverem prontos
- Delegar acesso à planilha para `_SheetsViewModel`

**Métodos públicos (DataSourceProtocol):**

| Método | Descrição |
|---|---|
| `is_ready() -> bool` | True quando `_vm` está instanciado (credenciais + sheet setados) |
| `set_credentials(raw_json)` | Autentica com JSON bruto da service account; cria `_vm` se sheet já setado |
| `set_sheet(sheet_id)` | Guarda sheet em memória e dispara prewarm; cria `_vm` se client já setado |
| `fetch_orders_by_date(date)` | Delega para `_vm.fetch({date})` |
| `fetch_orders_by_period(start, end)` | Delega para `_vm.fetch(date_range)` |

**Fluxo de inicialização (responsabilidade do cliente/feature):**
```
App inicia
  → feature lê credenciais do disco (_helper.read_credentials)
  → POST /auth  → set_credentials(raw_json) → _client em memória
  → feature lê sheet_id do disco (_helper.read_sheets)
  → PUT /source/{id} → set_sheet(id) → _vm criado + prewarm em background
  → GET /status → is_ready() == True
```

**_SheetsViewModel (interno):**
- Criado por `_setup_vm()` quando ambos `_client` e `_sheet_id` estão disponíveis
- Cacheia `_header` e `_data_col` na primeira chamada; no-op nas seguintes
- `prewarm()` abre a planilha em background e já popula o cache de schema
- `fetch(dates)` faz os dois passes: lê coluna DATA → batch_get nas linhas alvo

**Dois passes (otimização de API):**
1. Usa schema cacheado para localizar índice da coluna DATA
2. Lê só a coluna DATA (leve) e identifica linhas das datas pedidas
3. `batch_get` apenas nessas linhas, em lotes de até 100 ranges

---

## SheetsRepository

Vive em `repositories/sheets_repository.py`. Recebe `list[dict]` do data source e entrega `DataFrame` para os services.

**Métodos:**

| Método | Descrição |
|---|---|
| `get_cadastro_by_date(date) -> DataFrame` | usado por payments-pendent e deliveries |
| `get_cadastro_by_period(start, end) -> DataFrame` | usado por orders |

Único lugar que importa `SheetCols`, `ProductCols`, `PaymentCols`.

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

Flask com `test_client()` — in-process, sem servidor HTTP real (Abordagem A):

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
- **Backend stateless:** `GoogleSheetsDataSource` não lê nem escreve disco. Persistência é responsabilidade do cliente (feature/route)
- **`_helper.py` nas routes:** leitura/escrita de credenciais e planilhas no disco acontece nas routes `auth` e `source`, não no DataSource
- **`set_credentials(raw_json)`:** recebe o JSON bruto, não o path do arquivo. Quem lê o arquivo é a feature antes de chamar `POST /auth`
- **`_SheetsViewModel` separado:** mantém `GoogleSheetsDataSource` limpo com só o contrato público; toda lógica de acesso à planilha fica na viewmodel
- **Schema cacheado na viewmodel:** `_header` e `_data_col` são lidos uma vez e reutilizados. Invalidados quando `set_sheet` é chamado com nova planilha
- **Prewarm via `set_sheet`:** disparado em background quando ambos client e sheet_id estão prontos; aproveita para popular o cache de schema
- **Roteamento Flask (Abordagem A):** `test_client()` in-process. Abordagem B (match/case) foi considerada e descartada — ver `pocs/backend/routes-design.md`
- **Retorno `list[dict]`:** data source retorna formato neutro — funciona para Sheets, SQL ou qualquer fonte futura
- **Tratamento de erros em `errors/`:** DataSource não tem `try/except`. Mapeamento fica em `_SheetsGuard` (context managers) e decorator `handle_api`. `_prewarm` é a única exceção — silencia erros pois é otimização

---

## Próximos Passos (ordem sugerida)

1. Implementar `repositories/sheets_repository.py` — converte `list[dict]` em `DataFrame`, importa colunas do `data_source`
2. Criar `services/deliveries_service.py` + `DeliveriesMapper`
3. Criar `services/payments_service.py` + `PaymentsMapper`
4. Criar `routes/orders.py` — Blueprint com `before_request` + três endpoints
5. Criar `routes/auth.py` — `POST /auth` lê arquivo + chama `set_credentials`; `DELETE /auth` limpa disco
6. Criar `routes/source.py` — CRUD de planilhas usando `_helper` + `set_sheet`
7. Criar `routes/status.py` — retorna `is_ready()` + info de conexão
8. Criar `_server.py` — Flask app + blueprints + `BackendServer`
9. Definir contrato de erros JSON (mapeamento DataSourceError → HTTP status)
10. Migrar `orders_pendent` — limpar `use_case`, reescrever `repository`

---

## Referências

- `pocs/backend/routes-design.md` — comparação Flask vs funções diretas (decisão: Flask)
- `pocs/backend/poc-studies.md` — rascunho das classes (algumas decisões foram revisadas)
- `pocs/modules/Network_Python_Design.md` — design do módulo network
- `pocs/architecture/overview.md` — arquitetura geral do projeto
- `maria_cacau/backend/models/order.py` — dataclasses do domínio
- `maria_cacau/backend/data_source/sheet_mapper.py` — mapeamento de colunas/tabs
- `maria_cacau/backend/schemas/` — JSON Schema dos contratos
- `maria_cacau/backend/responses/` — exemplos de response
- `maria_cacau/features/home/sub_features/orders_pendent/` — primeira feature a migrar
