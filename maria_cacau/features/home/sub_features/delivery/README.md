# Delivery

Exibe o resumo de entregas do dia selecionado: total por modalidade (gráfico de pizza) e lista de pedidos com pagamento pendente.

## Arquitetura

```mermaid
flowchart TD
    V[DeliveryView] -->|generate_report signal| C[DeliveryController]
    C -->|on_generate| VM[DeliveryViewModel]
    VM -->|background thread| UC[DeliveryUseCase]
    UC -->|parallel| R[OrdersRepository]
    R -->|DeliveriesAPI| B[Backend]
    R -->|PaymentsPendentAPI| B
    B -->|HTTPResponse| R
    R -->|"DeliveriesSummary + list[PendentOrder]"| UC
    UC -->|DeliveryModel| VM
    VM -->|signals.report_generated| C
    C -->|update_data| V
```

## Responsabilidade das classes

| Classe | Camada | Responsabilidade |
|---|---|---|
| `DeliveryView` | presentation | Renderiza UI, expõe signals de domínio, gerencia estado dos botões |
| `DeliveryController` | presentation | Conecta signals da view ao ViewModel e respostas do domínio à view |
| `DeliveryViewModel` | presentation | Executa UseCase em background thread, monta `DeliveryViewData`, emite via signals |
| `DeliveryUseCase` | domain | Orquestra chamadas paralelas ao repository, monta `DeliveryModel` |
| `OrdersRepository` | data | Chama as APIs, captura erros HTTP e converte para `ErrorModel` via `ErrorMapper` |
| `DeliveriesAPI` | data | Define path e parâmetros do endpoint `GET /orders/deliveries` |
| `PaymentsPendentAPI` | data | Define path e parâmetros do endpoint `GET /orders/payments-pendent` |
| `DeliveriesMapper` | data | Converte `HTTPResponse → DeliveriesSummary` |
| `PaymentsMapper` | data | Converte `HTTPResponse → list[PendentOrder]` |
| `ErrorMapper` | data | Converte `HTTPResponseError → ErrorModel` lendo o JSON do backend |

## Fluxo principal

```mermaid
sequenceDiagram
    participant V as DeliveryView
    participant C as DeliveryController
    participant VM as DeliveryViewModel
    participant UC as DeliveryUseCase
    participant R as OrdersRepository
    participant B as Backend

    V->>C: generate_report (signal)
    C->>V: prepare_to_fetch() — desabilita botão
    C->>VM: on_generate(date)

    VM->>UC: get_orders(date) [background thread]

    par deliveries
        UC->>R: get_deliveries(date)
        R->>B: GET /orders/deliveries?date=...
        B-->>R: JSON deliveries
        R-->>UC: DeliveriesSummary
    and payments
        UC->>R: get_pendent_payments(date)
        R->>B: GET /orders/payments-pendent?date=...
        B-->>R: JSON orders
        R-->>UC: list[PendentOrder]
    end

    UC-->>VM: DeliveryModel
    VM->>VM: _build_view_data() → DeliveryViewData
    VM->>C: signals.report_generated (signal)
    C->>V: update_data(DeliveryViewData) — habilita botões
```

## Fluxo de erro

```mermaid
sequenceDiagram
    participant R as OrdersRepository
    participant VM as DeliveryViewModel
    participant C as DeliveryController
    participant V as DeliveryView

    R->>R: HTTPResponseError capturado
    R->>R: ErrorMapper.from_response() → ErrorModel
    R-->>VM: raise ErrorModel
    VM->>C: signals.error (signal)
    C->>V: popup.show(error.to_popup())
```
