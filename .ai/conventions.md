# Convenções

> Convenções específicas deste repositório (como o código é escrito aqui). Para convenções de
> arquitetura do projeto (signals, contratos de camada, DTOs, ErrorModel, strings de UI), ver
> `../Maria-Cacau-Study/style-guide/architecture/clean-architecture/conventions.md`.

## Imports
Absoluto **entre pacotes**; relativo (`.`/`..`) **dentro do mesmo pacote**. O projeto é instalado
com `pip install -e .`, então `maria_cacau` é sempre resolvível — mas isso não significa usar
absoluto pra tudo. Regra completa e exemplos em
`../Maria-Cacau-Study/style-guide/code/conventions.md`.

```python
# correto — cruza pra outro pacote (feature → design_system)
from maria_cacau.design_system.components import DSButton
from maria_cacau.core.error import ErrorModel

# correto — módulos irmãos, mesmo pacote (core/network/_client.py)
from ._request import HTTPRequest

# evitar
from ..design_system.components import DSButton    # relativo cruzando pra outro pacote
from maria_cacau.core.network._request import HTTPRequest  # absoluto dentro do mesmo pacote
import sys; sys.path.insert(...)                    # gambiarra
```

## Metadados do app
Nunca hardcodar versão, nome do app ou copyright em scripts — ler de `maria_cacau`:

```python
# package.sh
APP_NAME=$(python -c "import maria_cacau; print(maria_cacau.__app_name__)")
VERSION=$(python -c "import maria_cacau; print(maria_cacau.__version__)")
```

## Dependências
- Dependências de runtime → `[project] dependencies` no `pyproject.toml`
- Dependências de build (Nuitka) → `[project.optional-dependencies] build`
- Dependências de dev (pytest, etc.) → `[project.optional-dependencies] dev`
- `requirements.txt` não existe — foi substituído pelo `pyproject.toml`

## Layouts
Usar **layouts Qt** (`QHBoxLayout`, `QVBoxLayout`), nunca `setGeometry` ou posicionamento absoluto.

## Nomenclatura de arquivos
- Snake case: `sheet_normalizer.py`, `use_case.py`
- Features migradas para Clean Arch (`domain/data/presentation`) usam nomes fixos por camada:
  `view.py`, `viewmodel.py`, `controller.py` dentro de `presentation/`; `models.py`, `use_case.py`,
  `signals.py`, `events.py` dentro de `domain/`. Ver estrutura completa em
  `../Maria-Cacau-Study/style-guide/architecture/clean-architecture/overview.md`.

## Nomenclatura Python
- Classes: PascalCase (`DeliveryController`, `GoogleSheetsDataSource`)
- Métodos e funções: snake_case (`set_text`, `get_dates`, `on_ativar`)
- Constantes de módulo: UPPER_SNAKE_CASE (`_SHEET_ID`, `_SCOPES`)

## Registrar uma feature no menu "Funcionalidades"
Feature nova não se auto-registra: entra no `MenuHandler` (`maria_cacau/app/handler.py`), que
instancia o controller e cria um `QAction` a partir de `view.menu_title`.

```python
# maria_cacau/app/handler.py

class MenuHandler:
    def __init__(self) -> None:
        self._cpf = CpfValidationController()

    def _create_features_menu(self, menubar: QMenuBar) -> None:
        menu = QMenu(strings.MNU_FUNCIONALIDADES, menubar)
        menubar.addAction(menu.menuAction())

        act = QAction(self._cpf.view.menu_title, menu)
        act.setMenuRole(QAction.MenuRole.NoRole)   # impede o macOS de mover o item pro menu do app
        act.triggered.connect(self._cpf.view.show)
        menu.addAction(act)
```

A view expõe o rótulo como propriedade (`menu_title`) — o `MenuHandler` não hardcoda o texto.
Referência de janela de feature: `features/cpf_validation/presentation/view.py`, um `QDialog`.
