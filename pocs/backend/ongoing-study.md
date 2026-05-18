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
| Criar `subfeatures/payments/` (repo + service) | Concluído |
| Criar `subfeatures/payments/route.py` | Concluído |
| Criar `subfeatures/summary/` (repo + service + route) | Pendente (service não implementado) |
| Definir contrato de erros (`backend/errors/`) | Concluído |
| Adicionar `generic_mapper` em `backend/errors/_mapper.py` | Concluído |
| Criar `routes/auth.py` | Pendente |
| Criar `routes/source.py` | Pendente |
| Migrar `delivery` — estrutura `data/`, `domain/`, `presentation/` | Concluído |
| Migrar `delivery` — implementar `domain/use_case.py` | Concluído |
| Migrar `delivery` — `DeliveryViewData` com `report` + `chart_data` (ViewModel constrói) | Concluído |
| Migrar `delivery` — tratamento de erro (ErrorMapper → Repository → ViewModel → Controller) | Concluído |
| Migrar `delivery` — habilitar botões após dados carregarem + travar botão durante fetch | Concluído |
| Migrar `delivery` — remover `view-old.py` | Concluído |
| Migrar `delivery` — botões funcionais (copiar relatório + copiar/salvar gráfico) | Concluído |
| Migrar `delivery` — renomear `orders_pendent` → `delivery` + classes `Orders*` → `Delivery*` | Concluído |
| Migrar `delivery` — `__init__` chain para export limpo (`sub_features → delivery → presentation`) | Concluído |
| Criar `core/error/` (`ErrorModel` + `errors.py`) | Concluído |
| Adicionar `unexpected_error` e `http_error` em `core/error/errors.py` | Concluído |
| Atualizar `home_view.py` para usar `DeliveryController` via `sub_features` | Concluído |
| Configurar `LocalClient(BackendServer())` no `__main__.py` | Concluído |
| Bridge temporária: restaurar credenciais do cache no startup (sem `routes/auth`) | Concluído |
| `threading.Lock` no `GoogleSheetsDataSource` (serializar acesso à planilha) | Concluído |
| Normalizar headers em `data_source/_utils.to_dicts` | Concluído |
| Corrigir divergências em `sheet_mapper.py` (AMOUNT_PENDENT, LABEL_THEME, BOX_ART, PaymentCols) | Concluído |
| Documentar divergências de headers em `pocs/sheets-analysis/column-mismatches.md` | Concluído |

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
│       ├── _errors.py              # DataSourceError + subclasses DS01–DS18 (code, user_message, dev_message)
│       └── _handler.py             # _SheetsGuard (context managers + validações) + decorators handle_api
├── errors/
│   ├── __init__.py                 # exporta BackendError + translate()
│   ├── _errors.py                  # BackendError — contrato HTTP (code, user_message, dev_message, http_status, to_dict())
│   └── _mapper.py                  # tabela {DataSourceError → http_status} + translate()
├── utils/
│   ├── __init__.py
│   └── numbers.py                  # normalize_decimal — converte número BR → EN (ex: "1.234,56" → "1234.56")
├── features/
│   ├── __init__.py                 # re-exporta orders_bp (ponto de entrada do _server.py)
│   └── orders/
│       ├── __init__.py             # blueprint pai orders_bp — before_request (check_connection) + register sub-blueprints
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
│               ├── repository.py   # OrdersRepository — fetch por período
│               ├── service.py      # OrdersService + OrdersMapper (service pendente)
│               ├── route.py        # summary_bp — GET /orders
│               └── response/
│                   ├── schema.json
│                   └── example.json
```

---

## Rotas Definidas

| Método | Path | Blueprint | Status | Descrição |
|---|---|---|---|---|
| `POST` | `/auth` | — | Pendente | Recebe JSON bruto das credenciais e autentica o DataSource |
| `DELETE` | `/auth` | — | Pendente | Limpa credenciais salvas no disco |
| `POST` | `/source` | — | Pendente | Registra nova planilha (nome + sheet_id) |
| `GET` | `/source` | — | Pendente | Lista todas as planilhas salvas |
| `PUT` | `/source/{sheet_id}` | — | Pendente | Seleciona a planilha ativa no DataSource |
| `DELETE` | `/source/{sheet_id}` | — | Pendente | Remove planilha da lista salva |
| `GET` | `/orders/payments-pendent` | `payments_bp` | Implementado | Pedidos com pagamento pendente (`amount_pendent > 0`) para uma data |
| `GET` | `/orders/deliveries` | `deliveries_bp` | Implementado | Contagem de pedidos agrupada por tipo de entrega para uma data |
| `GET` | `/orders` | `orders_bp` | Pendente | Resumo completo dos pedidos em um período (range de datas) |

---

## Padrões Estabelecidos

### Blueprint re-export chain com blueprint pai

`orders/__init__.py` cria um blueprint pai `orders_bp` que agrega os três sub-blueprints. O `_server.py` registra só o pai:

```python
# orders/__init__.py
orders_bp = Blueprint("orders", __name__)
orders_bp.register_blueprint(deliveries_bp)
orders_bp.register_blueprint(payments_bp)
orders_bp.register_blueprint(summary_bp)

@orders_bp.before_request
def check_connection():
    if not data_source.is_ready():
        raise DataSourceNotReadyError()
```

```python
# _server.py
from .features import orders_bp
_app.register_blueprint(orders_bp)
```

Ao adicionar uma nova subfeature de orders, basta registrá-la em `subfeatures/__init__.py` — ela herda automaticamente o `before_request` do pai. Rotas de infra (`auth`, `source`, `status`) serão registradas diretamente em `_server.py` e **não** herdam o `check_connection`.

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
- **`__init__.py` chain para blueprints:** `subfeatures/__init__` → `orders/__init__` (blueprint pai) → `features/__init__`. `_server.py` só importa de `features`
- **Blueprint pai para `orders/`:** `orders/__init__.py` cria `orders_bp` pai com `before_request`. Sub-blueprints herdam o check automaticamente. Rotas de infra entram direto no `_server.py` e não herdam o check.
- **Backend stateless:** `GoogleSheetsDataSource` não lê nem escreve disco. Persistência é responsabilidade das routes `auth` e `source`
- **`set_credentials(raw_json)`:** recebe o JSON bruto, não o path do arquivo
- **Roteamento Flask (Abordagem A):** `test_client()` in-process — ver `pocs/backend/routes-design.md`
- **Retorno `list[dict]`:** data source retorna formato neutro — agnóstico de fonte de dados
- **Contrato de erros em duas camadas:** `DataSourceError` carrega `code`, `user_message`, `dev_message` (agnóstico de transporte). `BackendError` em `backend/errors/` adiciona `http_status`. `_mapper.py` faz a tradução via tabela `{DataSourceError type → http_status}`. `@app.errorhandler(DataSourceError)` no `_server.py` captura tudo automaticamente.
- **Códigos de erro `DS01–DS18`:** prefixo `DS` para DataSource, numerados na ordem de declaração em `_errors.py`. Quando o MySQL substituir o Google Sheets, novos erros entram com prefixo diferente (ex: `MY01`).
- **`summary_bp` em vez de `orders_bp` no summary:** evita conflito de nome com o blueprint pai `orders_bp`. O path `/orders` não é afetado — o nome do blueprint é só identificador interno.

---

## Próximos Passos (ordem sugerida)

### Bloco 1 — Bridge temporária de autenticação (próximo)

1. No startup do `BackendServer`, ler credenciais e `sheet_id` salvos em `core/storage` via `_helper.py` e repassar ao `data_source` (`set_credentials` + `set_sheet`) — sem precisar das rotas `auth`/`source` ainda
2. Objetivo: validar a feature `orders_pendent` end-to-end com dados reais antes de implementar as rotas de infra

### Bloco 2 — Backend (após validação da bridge)

3. Implementar `subfeatures/summary/service.py` — resumo de pedidos por período
4. Criar `routes/auth.py` — `POST /auth` + `DELETE /auth`
5. Criar `routes/source.py` — CRUD de planilhas
6. Criar `routes/status.py` — `GET /status`
10. Registrar rotas de infra (`auth`, `source`, `status`) no `_server.py`

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
