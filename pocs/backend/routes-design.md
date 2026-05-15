# Routes Design — Abordagens Comparadas

> Registro das abordagens analisadas para o roteamento do backend local.
> Decisão final: **Abordagem A** (Flask com `test_client()`).
> A Abordagem B foi considerada mas descartada — ver seção de decisão abaixo.

---

## Abordagem A — Flask com `test_client()` ✅ Escolhida

Usa o Flask real, mas sem `app.run()`. O roteamento é feito pelo próprio Flask via `test_client()`, que processa requests in-process (sem rede).

### Route file

```python
# core/backend/routes/orders.py
from flask import Blueprint, request, jsonify
from ..services.orders_service import OrdersService

orders_bp = Blueprint("orders", __name__, url_prefix="/orders")
_service = OrdersService()


@orders_bp.get("/deliveries")
def get_deliveries():
    date = request.args.get("date")
    data = _service.get_deliveries(date)
    return jsonify(data), 200


@orders_bp.get("/payments-pendent")
def get_payments_pendent():
    date = request.args.get("date")
    data = _service.get_payments_pendent(date)
    return jsonify(data), 200
```

### Server

```python
# core/backend/_server.py
from flask import Flask
from .routes.orders import orders_bp
from ..network._request import HTTPRequest
from ..network._response import HTTPResponse

_app = Flask(__name__)
_app.register_blueprint(orders_bp)
_client = _app.test_client()


class BackendServer:
    def execute(self, request: HTTPRequest) -> HTTPResponse:
        response = _client.open(
            request.path,
            method=request.method,
            query_string=request.params,
            json=request.body,
        )
        return HTTPResponse(
            status_code=response.status_code,
            headers=dict(response.headers),
            body=response.data,
        )
```

### O que entra com Flask

| Item | Origem |
|---|---|
| `Blueprint` | Flask — agrupa rotas por domínio |
| `request.args` | Flask — proxy thread-local do contexto de request |
| `jsonify()` | Flask — serializa dict para `application/json` |
| `test_client()` | Flask — processa requests sem servidor HTTP |
| Contexto de aplicação | Flask — gerenciado internamente pelo `test_client()` |

### O que sai com Flask

Dependência do Flask no projeto. Camada de conversão obrigatória: `flask.Response` → seu `HTTPResponse`. O `BackendServer` precisa do `test_client()` como intermediário — você não chama as funções de rota diretamente.

---

## Abordagem B — Funções diretas + `match/case` (considerada, não escolhida)

Sem dependência externa. As funções de rota recebem params explicitamente e retornam `HTTPResponse` diretamente. O `BackendServer` roteia com `match/case`.

### Route file

```python
# core/backend/routes/orders.py
import json
from ..services.orders_service import OrdersService
from ..network._response import HTTPResponse

_service = OrdersService()


def get_deliveries(date: str) -> HTTPResponse:
    data = _service.get_deliveries(date)
    return HTTPResponse(200, {}, json.dumps(data).encode())


def get_payments_pendent(date: str) -> HTTPResponse:
    data = _service.get_payments_pendent(date)
    return HTTPResponse(200, {}, json.dumps(data).encode())
```

### Server

```python
# core/backend/_server.py
from ..network._request import HTTPRequest
from ..network._response import HTTPResponse
from .routes import orders


class BackendServer:
    def execute(self, request: HTTPRequest) -> HTTPResponse:
        match (request.method, request.path):
            case ("GET", "/orders/deliveries"):
                return orders.get_deliveries(request.params.get("date"))
            case ("GET", "/orders/payments-pendent"):
                return orders.get_payments_pendent(request.params.get("date"))
            case _:
                return HTTPResponse(404, {}, b'{"error": "not_found"}')
```

### Vantagens

- Zero dependência — Python puro
- Funções de rota são funções normais, testáveis diretamente
- `match/case` já é o router — sem Registry, sem decorator, sem contexto
- `HTTPRequest`/`HTTPResponse` fluem sem conversão

---

## Sobre `execute()` vs `handle()`

O `LocalClient` atual chama `backend.execute()` — por isso `BackendServer` implementa `execute()`.

O design doc (`Network_Python_Design.md`) propõe `handle()` para o backend, diferenciando semanticamente "client executa" de "server trata". Se no futuro quisermos usar `handle()` (ex: ao migrar para Flask real), o caminho sem quebrar nada é um adapter:

```python
# Adapter — implementa o contrato do LocalClient, delega para handle()
class BackendAdapter:
    def __init__(self, server: BackendServer):
        self._server = server

    def execute(self, request: HTTPRequest) -> HTTPResponse:
        return self._server.handle(request)
```

```python
# _main__.py — sem alterar LocalClient nem BackendServer
configure(LocalClient(backend=BackendAdapter(BackendServer())))
```

Na migração para servidor real: remove o `BackendAdapter` e troca por `HTTPClient`. Nenhuma outra camada muda.

**Por ora:** `BackendServer` implementa `execute()` diretamente. O adapter entra só se `handle()` virar necessidade real.
