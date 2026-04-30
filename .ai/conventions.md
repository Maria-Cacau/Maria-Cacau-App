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
self.set_text(strings.TXT_SEM_PLANILHA)
self.popup.show_popup(errors.A001)

# evitar
self.set_text("Nenhuma planilha foi selecionada.")
self.popup.show_popup(["Erro", "Título", "Detalhe"])
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

## Nomenclatura Python
- Classes: PascalCase (`GuiMain`, `CadastroAnalyseHandler`)
- Métodos e funções: snake_case (`set_text`, `get_dates`, `on_ativar`)
- Constantes de módulo: UPPER_SNAKE_CASE (`_SHEET_ID`, `_SCOPES`)

## Colunas da planilha Google Sheets
Todos os headers são normalizados para **lowercase** via `_normalize_headers` em `CadastroAnalyseHandler`.
- Usar sempre lowercase ao referenciar colunas no código: `arq_['pedido']`, `arq_['modalidade']`, `arq_['$frete']`
- Coluna de data de entrega: `arq_['data']` (header na planilha: `DATA`)
- Coluna de modalidade: `arq_['modalidade']` (header: `Modalidade`)
- Coluna de cidade: `arq_['cidade']` (header: `Cidade`, sem UF)
- Exceção: `glbl` (labels de UI) ficam em UPPERCASE — são strings de display, não nomes de coluna
- A coluna `Prod4` tem header `'-'` na planilha → referenciar como `'-'` no código
- Colunas duplicadas são removidas automaticamente ao criar o DataFrame (mantém primeira ocorrência)
