# Convenções

## Imports
Usar **imports absolutos** a partir do pacote. O projeto é instalado com `pip install -e .`, então `maria_cacau` é sempre resolvível.

```python
# correto
from maria_cacau.design_system.aux_widgets import AuxWidgets
from maria_cacau.core import errors
from maria_cacau.assets import strings

# evitar
from ..design_system.aux_widgets import AuxWidgets  # relativo
import sys; sys.path.insert(...)                     # gambiarra
```

## Textos e erros
- Nunca colocar strings de UI hardcoded nas views — usar `strings.py`
- Nunca construir mensagens de erro inline — usar `errors.py`

```python
# correto
self.setTxt(strings.TXT_SEM_PLANILHA)
self.popUp.show_PopUp(errors.A001)

# evitar
self.setTxt("Nenhuma planilha foi selecionada.")
self.popUp.show_PopUp(["Erro", "Título", "Detalhe"])
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
- Snake case: `aux_widgets.py`, `home_view.py`
- Views sufixadas com `_view`: `cpf_validation_view.py`
- Futuras view models sufixadas com `_view_model`: `cpf_validation_view_model.py`
