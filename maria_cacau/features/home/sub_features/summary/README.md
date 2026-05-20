# Summary

Exibe o resumo de produtos por período: contagem de itens vendidos (texto + gráfico de barras ou pizza) para um intervalo de datas selecionado pelo usuário.

## Arquitetura

```mermaid
flowchart TD
    V[SummaryView] -->|generate_report signal| C[SummaryController]
    C -->|on_generate| VM[SummaryViewModel]
    VM -->|background thread| UC[SummaryUseCase]
    UC -->|get_by_period| R[SummaryRepository]
    R -->|OrdersSummaryAPI| B[Backend]
    B -->|HTTPResponse| R
    R -->|"list[OrderDetail]"| UC
    UC -->|ProductsSummary| VM
    VM -->|signals.report_generated| C
    C -->|update_data| V
```

## Responsabilidade das classes

| Classe | Camada | Responsabilidade |
|---|---|---|
| `SummaryView` | presentation | Renderiza UI, expõe signals de domínio, gerencia estado dos botões e do gráfico |
| `SummaryController` | presentation | Conecta signals da view ao ViewModel e respostas do domínio à view |
| `SummaryViewModel` | presentation | Executa UseCase em background thread, monta `ProductsViewData`, emite via signals |
| `SummaryUseCase` | domain | Agrega `list[OrderDetail]` em `ProductsSummary` por dia e global |
| `SummaryRepository` | data | Chama a API, captura erros HTTP e converte para `ErrorModel` via `ErrorMapper` |
| `OrdersSummaryAPI` | data | Define path e parâmetros do endpoint `GET /orders` |
| `OrdersSummaryMapper` | data | Converte `HTTPResponse → list[OrderDetail]` |
| `ErrorMapper` | data | Converte `HTTPResponseError → ErrorModel` lendo o JSON do backend |

## Fluxo principal

```mermaid
sequenceDiagram
    participant V as SummaryView
    participant C as SummaryController
    participant VM as SummaryViewModel
    participant UC as SummaryUseCase
    participant R as SummaryRepository
    participant B as Backend

    V->>C: generate_report (signal)
    C->>V: prepare_to_fetch() — desabilita botão
    C->>VM: on_generate(start, end)

    VM->>UC: get_summary(start, end) [background thread]
    UC->>R: get_by_period(start, end)
    R->>B: GET /orders?start=...&end=...
    B-->>R: JSON orders
    R-->>UC: list[OrderDetail]
    UC-->>VM: ProductsSummary
    VM->>VM: _build_view_data() → ProductsViewData
    VM->>C: signals.report_generated (signal)
    C->>V: update_data(ProductsViewData) — habilita botões
```

## Fluxo de erro

```mermaid
sequenceDiagram
    participant R as SummaryRepository
    participant VM as SummaryViewModel
    participant C as SummaryController
    participant V as SummaryView

    R->>R: HTTPResponseError capturado
    R->>R: ErrorMapper.from_response() → ErrorModel
    R-->>VM: raise ErrorModel
    VM->>C: signals.error (signal)
    C->>V: popup.show(error.to_popup())
```
