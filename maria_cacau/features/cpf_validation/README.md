# CPF Validation

Valida matematicamente um CPF digitado pelo usuário (algoritmo dos dois dígitos verificadores da Receita Federal) e exibe feedback visual imediato com cor diferenciada para válido/inválido.

## Arquitetura

```mermaid
flowchart TD
    V[CpfValidationView] -->|validate_cpf signal| C[CpfValidationController]
    C -->|on_validate| VM[CpfValidationViewModel]
    VM -->|validate| UC[CpfValidationUseCase]
    UC -->|CpfValidationResult| VM
    VM -->|signals.result| C
    C -->|update_result| V
```

> Sem camada `data/` — a validação é local, sem chamada de rede ou backend.

## Responsabilidade das classes

| Classe | Camada | Responsabilidade |
|---|---|---|
| `CpfValidationView` | presentation | Renderiza UI, expõe signal `validate_cpf`, exibe resultado com cor |
| `CpfValidationController` | presentation | Conecta signal da view ao ViewModel, recebe resultado e atualiza a view, loga observabilidade |
| `CpfValidationViewModel` | presentation | Chama o UseCase e emite o resultado via signal |
| `CpfValidationUseCase` | domain | Encapsula o algoritmo de validação, retorna `CpfValidationResult` |
| `CpfValidationResult` | domain | Dataclass com `cpf: str` e `is_valid: bool` |
| `CpfValidationSignals` | domain | Canal de comunicação entre ViewModel e Controller via `pyqtSignal` |
| `FeatureEvents` | domain | Enum de eventos de observabilidade da feature |

## Fluxo principal

```mermaid
sequenceDiagram
    participant V as CpfValidationView
    participant C as CpfValidationController
    participant VM as CpfValidationViewModel
    participant UC as CpfValidationUseCase

    V->>C: validate_cpf (signal)
    C->>C: on_validate() — guarda log VALIDATE_ACTION
    C->>VM: on_validate(cpf)
    VM->>UC: validate(cpf)
    UC-->>VM: CpfValidationResult
    VM->>C: signals.result (signal)
    C->>C: handle_result() — loga RESULT (valid=)
    C->>V: update_result(result) — atualiza label com cor
```

## Observabilidade

| Evento | Quando |
|---|---|
| `FeatureEvents.VALIDATE_ACTION` | Botão "Verificar" clicado (ou Enter no campo) |
| `FeatureEvents.RESULT` | Resultado recebido — extra: `valid=True/False` |
