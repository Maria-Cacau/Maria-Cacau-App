# Overview — Arquitetura do Projeto

> Decisões e padrões definidos para o projeto Maria Cacau (PyQt6 + Python).
> Data: Mai/2026

---

## Arquitetura Geral

Baseada em Clean Architecture + MVC com signals como delegates.

```
View → Controller → UseCase → Repository → Data
```

### Responsabilidades

| Camada | Responsabilidade |
|---|---|
| View | Cria widgets, emite signals de domínio, zero lógica |
| Controller | Conecta signals, orquestra fluxo, chama UseCases |
| UseCase | Regras de negócio, filtros, transformações |
| Repository | Acesso a dados (Sheets, banco, API) sem regra de negócio |

### Regra de ouro

O Controller é **mandatório** — sem ele, o View vira um God Object (problema atual do `GuiMain`).

---

## Signals como Delegates

A View nunca expõe widgets internos. Expõe signals com nome de domínio:

```python
# Errado
view.button.clicked.connect(...)

# Correto
view.cadastro_solicitado.connect(...)
view.formulario_limpo.connect(...)
```

Comunicação entre sub-features passa pelo Controller pai como mediador.

---

## Estrutura de Pastas por Feature

```
features/
└── home/
    ├── home_controller.py
    ├── home_view.py
    └── sub_features/
        └── orders_pendent/
            ├── orders_pendent_controller.py
            └── orders_pendent_view.py
```

O `__init__.py` de cada feature exporta apenas o Controller — o View é detalhe interno.

---

## Contratos de Camada

### ABC — para base com comportamento compartilhado

```python
from abc import ABC, abstractmethod

class BaseView(QWidget, ABC):
    @abstractmethod
    def setup_ui(self) -> None: ...
```

Usado quando a classe base tem implementação real que as subclasses herdam.

### Protocol — para contratos puros entre camadas

```python
from typing import Protocol

class CadastroRepository(Protocol):
    def get_dates(self) -> dict: ...
    def get_data(self, col: str, date: str) -> list: ...
```

Usado quando só há contrato, sem implementação. A classe que implementa não precisa saber que o Protocol existe.

Os dois podem coexistir — cada um no lugar certo.

---

## DTOs entre Camadas

`@dataclass` para dados que atravessam camadas — equivalente a `struct` no Swift:

```python
from dataclasses import dataclass

@dataclass
class NovoPedido:
    numero: int
    cliente: str
    total: float

    @classmethod
    def from_entity(cls, entity: PedidoEntity) -> "NovoPedido":
        return cls(
            numero=int(entity.numero),
            cliente=entity.cliente,
            total=float(entity.valor_total),
        )
```

- `@classmethod` com `from_` = construtor alternativo (equivalente ao `init` secundário do Swift)
- `@dataclass(frozen=True)` = imutável (equivalente ao `let`)
- Métodos utilitários simples são permitidos; lógica de negócio não

---

## Modularização Python

| Conceito | Python |
|---|---|
| Namespace | módulo (arquivo `.py`) |
| API pública | o que está exportado no `__init__.py` |
| Funções utilitárias | funções soltas no módulo, não classes com `@staticmethod` |
| Interface | `Protocol` ou `ABC` |
| DTO | `@dataclass` |

---

## Design System

### Fase 1 — Interno ao repo (atual)

```
maria_cacau/
└── design_system/
    ├── components/
    │   ├── button.py
    │   ├── label.py
    │   ├── input.py
    │   └── popup.py
    ├── tokens/
    │   ├── colors.py
    │   ├── typography.py
    │   └── spacing.py
    └── theme.py
```

**Regra:** `design_system/` nunca importa de `features/`, `core/`, ou `assets/`. É uma folha pura — só PyQt6 e tokens internos.

### Fase 2 — Repo separado (após estabilizar)

```
maria-cacau-ds/
├── pyproject.toml
└── mc_ds/
    ├── components/
    ├── tokens/
    └── theme.py
```

Instalação local durante dev: `pip install -e ../maria-cacau-ds`

### Tokens (sem tema por enquanto)

Tema só entra quando houver um segundo tema (dark/light). Por ora, componentes referenciam tokens diretamente:

```python
# tokens/colors.py
PRIMARY = "#8B4513"
ERROR   = "#CC0000"

# tokens/typography.py
FONT_FAMILY  = "Arial"
FONT_SIZE_MD = 12
```

### Enums para estilos de componentes

```python
from enum import Enum

class LabelStyle(Enum):
    TITLE   = "title"
    BODY    = "body"
    CAPTION = "caption"

    @property
    def font(self) -> QFont:
        match self:
            case LabelStyle.TITLE:   return QFont(tokens.FONT_FAMILY, 16)
            case LabelStyle.BODY:    return QFont(tokens.FONT_FAMILY, 12)
            case LabelStyle.CAPTION: return QFont(tokens.FONT_FAMILY, 10)
```

### Protocol Actionable no DS

```python
from typing import Protocol
from collections.abc import Callable

class Actionable(Protocol):
    def set_action(self, callback: Callable[[], None]) -> None: ...
```

Componentes do DS implementam `set_action` — o Controller não precisa saber qual signal está por baixo.

---

## Referências

- `pocs/architecture/pre-study.md` — estudo comparativo com iOS/Swift (conversa com GPT)
- `maria_cacau/design_system/` — implementação atual do DS (a reorganizar)
- `maria_cacau/features/home/home_view.py` — exemplo do problema atual (God Object)
