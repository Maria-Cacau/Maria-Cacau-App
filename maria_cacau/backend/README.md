# Backend

Módulo Flask in-process que serve como camada de serviços entre as features da aplicação e a fonte de dados (Google Sheets).

---

## Como funciona

A aplicação não acessa o backend via HTTP real — usa um `test_client()` do Flask rodando no mesmo processo. A camada de rede (`LocalClient`) monta um `HTTPRequest` e o `BackendServer` o executa internamente, devolvendo um `HTTPResponse`.

```
Feature (use_case)
    │  HTTPRequest via LocalClient
    ▼
BackendServer          ← Flask test_client() in-process
    │
    ├── features/auth/     ← gerencia credenciais no DataSource
    ├── features/sheet/    ← gerencia planilha ativa no DataSource
    └── features/orders/   ← lê e processa pedidos
            │
            ▼
    GoogleSheetsDataSource ← acessa a planilha via gspread
```

**Isolamento:** o backend não importa nada de `maria_cacau.*`. Features da aplicação conhecem só `HTTPRequest`/`HTTPResponse`.

---

## Rotas disponíveis

### Auth — `/auth`

| Método | Path | Descrição |
|---|---|---|
| `POST` | `/auth` | Autentica o DataSource com `credentials` (dict) + `sheet_id` |
| `DELETE` | `/auth` | Limpa credenciais da memória (mantém `sheet_id`) |

Body do `POST`:
```json
{ "credentials": { ... }, "sheet_id": "..." }
```

---

### Sheet — `/sheet`

| Método | Path | Descrição |
|---|---|---|
| `PUT` | `/sheet/<sheet_id>` | Seleciona a planilha ativa (mantém credenciais) |
| `DELETE` | `/sheet` | Limpa a planilha ativa (mantém credenciais) |

---

### Orders — `/orders`

| Método | Path | Descrição |
|---|---|---|
| `GET` | `/orders/deliveries` | Contagem de entregas por tipo para uma data (`?date=DD/MM/AAAA`) |
| `GET` | `/orders/payments-pendent` | Pedidos com pagamento pendente para uma data (`?date=DD/MM/AAAA`) |
| `GET` | `/orders` | Lista de pedidos de um período (`?start=DD/MM/AAAA&end=DD/MM/AAAA`) |

> Rotas de `/orders` exigem autenticação prévia via `POST /auth`. Retornam `503` se o DataSource não estiver pronto.

---

## Erros

Todos os erros seguem o mesmo contrato JSON:

```json
{
  "code": "DS10",
  "user_message": "Planilha não encontrada.",
  "dev_message": "Spreadsheet not found."
}
```

Erros do DataSource (`DS01`–`DS18`) são traduzidos automaticamente para o HTTP status correspondente. Erros inesperados retornam `500`.
