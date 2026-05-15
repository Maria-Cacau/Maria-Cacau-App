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
| Implementar `data_source/` | Concluído |
| Criar `shared/models.py` (dataclasses do domínio) | Concluído |
| Criar `shared/mapper.py` (`OrderMapper`) | Concluído |
| Criar `subfeatures/deliveries/` (repo + service + route) | Concluído |
| Criar `subfeatures/payments/` (repo + service) | Concluído (service pendente de testes reais) |
| Criar `subfeatures/payments/route.py` | Concluído (stub) |
| Criar `subfeatures/summary/` (repo + service + route) | Pendente |
| Criar `routes/auth.py` | Pendente |
| Criar `routes/source.py` | Pendente |
| Criar `routes/status.py` | Pendente |
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
│  Route   │  Só HTTP: parseia params, valida conexão via before_request, chama service + mapper, devolve jsonify
└────┬─────┘
     │
     ▼
┌─────────────────┐
│ Service + Mapper │  Regra de negócio → filtra/agrupa DataFrame → monta objetos de domínio → Mapper serializa
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
- **Service:** recebe DataFrame, aplica regras de negócio, monta objetos de domínio via `OrderMapper`.
- **Mapper:** transforma resultado do service em dict JSON-ready (`dataclasses.asdict`). Fica no mesmo arquivo do service.
- **Repository:** recebe `list[dict]` do data source, converte para `DataFrame` com cast numérico das colunas do seu domínio.
- **DataSource:** acessa a planilha com otimização de dois passes. Retorna `list[dict]` neutro.

---

## Estrutura de Arquivos

```
maria_cacau/backend/
├── __init__.py
├── _server.py                      # BackendServer — Flask app + blueprints + execute()
├── data_source/
│   ├── __init__.py                 # exporta data_source, DataSourceProtocol, SheetCols, ProductCols, PaymentCols, SheetTabs, PAYMENT_SLOTS, PRODUCT_SLOTS
│   ├── _google_sheets.py           # GoogleSheetsDataSource — stateless, sem acesso a disco
│   ├── _viewmodel.py               # _SheetsViewModel — schema cacheado, prewarm, fetch com dois passes
│   ├── _protocol.py                # DataSourceProtocol — contrato agnóstico de fonte de dados
│   ├── _utils.py                   # funções puras: normalize_date, to_dicts, to_ranges, date_range
│   ├── _helper.py                  # ponte com core/storage — usado pelas routes (auth/source), não pelo DataSource
│   ├── sheet_mapper.py             # SheetCols, ProductCols, PaymentCols, SheetTabs, PAYMENT_SLOTS, PRODUCT_SLOTS
│   └── errors/
│       ├── _errors.py              # exceções tipadas (DataSourceError como base)
│       └── _handler.py             # _SheetsGuard (context managers + validações) + decorators handle_api
├── utils/
│   ├── __init__.py
│   └── numbers.py                  # normalize_decimal — converte número BR → EN (ex: "1.234,56" → "1234.56")
├── features/
│   ├── __init__.py                 # re-exporta todos os blueprints (ponto de entrada do _server.py)
│   └── orders/
│       ├── __init__.py             # re-exporta blueprints de subfeatures
│       ├── schemas/
│       │   └── shared.schema.json  # tipos compartilhados do domínio (Address, Customer, Financial, etc.)
│       ├── shared/
│       │   ├── __init__.py
│       │   ├── models.py           # dataclasses: Order, Customer, Receiver, Delivery, Financial, etc.
│       │   └── mapper.py           # OrderMapper.to_model(row) — converte Series → Order
│       └── subfeatures/
│           ├── __init__.py         # re-exporta blueprints de cada subfeature
│           ├── deliveries/
│           │   ├── __init__.py
│           │   ├── models.py       # DeliveryTypeCount, DeliveriesSummary
│           │   ├── repository.py   # DeliveriesRepository — fetch por data, sem cast numérico
│           │   ├── service.py      # DeliveriesService + DeliveriesMapper
│           │   ├── route.py        # deliveries_bp — GET /orders/deliveries
│           │   └── response/
│           │       ├── schema.json
│           │       └── example.json
│           ├── payments/
│           │   ├── __init__.py
│           │   ├── repository.py   # PaymentsRepository — cast numérico de financeiro + produtos + parcelas
│           │   ├── service.py      # PaymentsService + PaymentsMapper
│           │   ├── route.py        # payments_bp — GET /orders/payments-pendent
│           │   └── response/
│           │       ├── schema.json
│           │       └── example.json
│           └── summary/
│               ├── __init__.py
│               ├── repository.py   # OrdersRepository — fetch por período (pendente)
│               ├── service.py      # OrdersService + OrdersMapper (pendente)
│               ├── route.py        # orders_bp — GET /orders (pendente)
│               └── response/
│                   ├── schema.json
│                   └── example.json
```

---

## Rotas Definidas

| Método | Path | Blueprint | Status |
|---|---|---|---|
| `GET` | `/status` | — | Pendente |
| `POST` | `/auth` | — | Pendente |
| `DELETE` | `/auth` | — | Pendente |
| `POST` | `/source` | — | Pendente |
| `GET` | `/source` | — | Pendente |
| `PUT` | `/source/{sheet_id}` | — | Pendente |
| `DELETE` | `/source/{sheet_id}` | — | Pendente |
| `GET` | `/orders/payments-pendent` | `payments_bp` | Implementado |
| `GET` | `/orders/deliveries` | `deliveries_bp` | Implementado |
| `GET` | `/orders` | `orders_bp` | Pendente |

---

## Padrões Estabelecidos

### Blueprint re-export chain

Cada nível de `__init__.py` re-exporta os blueprints do nível abaixo. O `_server.py` só conhece `features`:

```python
# _server.py
from .features import deliveries_bp, payments_bp, orders_bp
```

Ao adicionar uma nova subfeature, basta registrá-la em `subfeatures/__init__.py` — o restante da cadeia propaga automaticamente.

### Repository por subfeature

Cada subfeature tem seu próprio repository. O repository é o único lugar que:
- Chama o data source
- Converte `list[dict]` → `DataFrame`
- Faz cast numérico das colunas **do seu domínio**

`PaymentsRepository` converte financeiro, produtos e parcelas. `DeliveriesRepository` retorna o DataFrame bruto (sem cast, pois não precisa de números).

### OrderMapper

`shared/mapper.py` centraliza a conversão de uma linha do DataFrame em um `Order` completo. Evita duplicação entre subfeatures que precisam do model completo:

```python
# Em qualquer service de orders:
return [OrderMapper.to_model(row) for _, row in df.iterrows()]
```

### Slots de produto e pagamento

Constantes `PAYMENT_SLOTS = 6` e `PRODUCT_SLOTS = 7` em `sheet_mapper.py`, exportadas pelo `data_source/__init__.py`. Qualquer `range` que itere slots usa essas constantes — fonte única de verdade.

### normalize_decimal

`utils/numbers.py` centraliza a conversão de formato numérico BR → EN. Usada nos repositories para cast de colunas monetárias:

```python
df[col].astype(str).apply(normalize_decimal)  # "1.234,56" → "1234.56"
```

### Estrutura de contratos por subfeature

Cada subfeature tem uma pasta `response/` com:
- `schema.json` — contrato JSON Schema da response
- `example.json` — exemplo de payload real

Tipos compartilhados (Address, Customer, etc.) ficam em `orders/schemas/shared.schema.json`.

---

## GoogleSheetsDataSource

Vive em `data_source/_google_sheets.py`. Singleton exposto como `data_source: Final` no `__init__.py` do pacote.

**Métodos públicos (DataSourceProtocol):**

| Método | Descrição |
|---|---|
| `is_ready() -> bool` | True quando `_vm` está instanciado (credenciais + sheet setados) |
| `set_credentials(raw_json)` | Autentica com JSON bruto da service account; cria `_vm` se sheet já setado |
| `set_sheet(sheet_id)` | Guarda sheet em memória e dispara prewarm; cria `_vm` se client já setado |
| `fetch_orders_by_date(date)` | Delega para `_vm.fetch({date})` |
| `fetch_orders_by_period(start, end)` | Delega para `_vm.fetch(date_range)` |

---

## Decisões Arquiteturais

- **Isolamento total:** backend não importa nada de `maria_cacau.*` exceto `core/storage`
- **Feature-based, não layer-based:** organização por domínio (`features/orders/subfeatures/`) em vez de por responsabilidade técnica (`services/`, `repositories/`). Cada feature tem tudo que precisa dentro da sua pasta
- **`subfeatures/` dentro de `orders/`:** `deliveries`, `payments` e `summary` são projeções do mesmo domínio de pedidos — agrupados sob `orders/` com nível `subfeatures/` para deixar `orders/` livre para `shared/`, `schemas/` e futuros `create/`, `update/`
- **`shared/` em vez de `models/`:** nome comunica que os arquivos são compartilhados entre subfeatures. `models.py` + `mapper.py` em vez de `order.py` + `order_mapper.py` — contexto vem da pasta pai
- **Repository por subfeature, não compartilhado:** cada subfeature tem seu repository com o cast específico do seu domínio. Evita um repository-deus que conhece todos os campos
- **`OrderMapper` compartilhado:** a conversão `Series → Order` é genérica e reutilizada por qualquer subfeature que precise do model completo
- **`__init__.py` chain para blueprints:** `subfeatures/__init__` → `orders/__init__` → `features/__init__`. `_server.py` só importa de `features`
- **Backend stateless:** `GoogleSheetsDataSource` não lê nem escreve disco. Persistência é responsabilidade das routes `auth` e `source`
- **`set_credentials(raw_json)`:** recebe o JSON bruto, não o path do arquivo
- **Roteamento Flask (Abordagem A):** `test_client()` in-process — ver `pocs/backend/routes-design.md`
- **Retorno `list[dict]`:** data source retorna formato neutro — agnóstico de fonte de dados
- **Tratamento de erros em `errors/`:** DataSource sem `try/except`. Mapeamento em `_SheetsGuard` + decorator `handle_api`

---

## Próximos Passos (ordem sugerida)

1. Implementar `subfeatures/summary/service.py` — resumo de pedidos por período
2. Criar `routes/auth.py` — `POST /auth` + `DELETE /auth`
3. Criar `routes/source.py` — CRUD de planilhas
4. Criar `routes/status.py` — `GET /status`
5. Registrar rotas de infra (`auth`, `source`, `status`) no `_server.py`
6. Definir contrato de erros JSON (mapeamento `DataSourceError` → HTTP status)
7. Migrar `orders_pendent` — limpar `use_case`, reescrever `repository`

---

## Referências

- `pocs/backend/routes-design.md` — comparação Flask vs funções diretas (decisão: Flask)
- `pocs/backend/poc-studies.md` — rascunho das classes (algumas decisões foram revisadas)
- `pocs/modules/Network_Python_Design.md` — design do módulo network
- `maria_cacau/backend/features/orders/shared/models.py` — dataclasses do domínio
- `maria_cacau/backend/features/orders/shared/mapper.py` — OrderMapper
- `maria_cacau/backend/data_source/sheet_mapper.py` — mapeamento de colunas/tabs + slots
- `maria_cacau/backend/features/orders/schemas/shared.schema.json` — JSON Schema compartilhado
- `maria_cacau/features/home/sub_features/orders_pendent/` — primeira feature a migrar
