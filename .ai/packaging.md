# Gerar executável

Compilação do projeto em um binário standalone via [Nuitka](https://nuitka.net) — automatizada
pelo workflow `app-distribution`, que roda em [`Maria-Cacau-Actions`](https://github.com/Maria-Cacau/Maria-Cacau-Actions).
Não é mais necessário gerar o `.exe` localmente.

## Como funciona

1. O PR de release (workflow `pr-release`) bumpa a versão em `pyproject.toml` e é mergeado na `main`
2. O push na `main` com mudança em `pyproject.toml` dispara `app-distribution`
3. A action `build` roda o `scripts/build.bat` do próprio repo (grupo de extras `build`, que inclui
   `nuitka`) num runner Windows
4. A action `nuitka` lê os metadados do app direto do módulo (`__app_name__`, `__version__`,
   `__copyright__`, `__company__`, `__icon_win__`) e chama `python -m nuitka` com as flags de
   empacotamento
5. O `.exe` gerado é anexado como asset na release publicada automaticamente

## Rodar localmente (debug)

```bat
REM Windows — instala o grupo "build" (inclui nuitka) em vez do "dev" padrão
scripts\build.bat build
python -m nuitka ...  REM ver actions/nuitka/action.yml em Maria-Cacau-Actions pras flags exatas
```

Gerar o `.exe` só funciona numa máquina Windows.

## Saída

| Plataforma | Arquivo gerado |
|---|---|
| Windows | `dist/MC Consultas.exe` |

## Metadados do executável

Os metadados (nome, versão, copyright, empresa, ícone) são lidos automaticamente do `__init__.py`,
que por sua vez os lê do `pyproject.toml`. A versão é atualizada pelo workflow `pr-release`, não
manualmente.

## Dependência de build

O Nuitka está declarado como dependência opcional de build no `pyproject.toml`:

```toml
[project.optional-dependencies]
build = ["nuitka", "zstandard"]
```

Isso é convencional — ferramentas de empacotamento não devem entrar nas dependências normais do
projeto. `scripts/build.bat`/`build.sh` instalam esse grupo quando chamados com `build` como
argumento (`scripts\build.bat build`); sem argumento, instalam o grupo `dev` (padrão de
desenvolvimento local).

## Dependência carregada como dado

O Nuitka segue sozinho tudo que o app importa estaticamente. Arquivo de dados que não é `.py`, ou
módulo carregado de forma dinâmica, fica de fora do `.exe`: o build passa e o erro só aparece ao
abrir o executável, no Windows.

Caso atual: `zoneinfo`. O Windows não tem banco de fusos IANA, então o `zoneinfo` lê os arquivos do
pacote `tzdata`. Isso exige dois ajustes:

```toml
dependencies = [
    ...
    "tzdata; sys_platform == 'win32'"
]
```

```python
"--include-package-data=tzdata",
```

O primeiro fica neste repo. O segundo está no comando fixo da action `nuitka`, em
`Maria-Cacau-Actions`, desde a `2.1.0`. Sem ele, o `.exe` levanta `ZoneInfoNotFoundError` ao abrir.

O `keyring` segue a mesma lógica: descobre os backends por entry point, então o backend do Windows é
importado de forma estática em `core/storage/_keychain.py`:

```python
from keyring.backends.Windows import WinVaultKeyring
keyring.set_keyring(WinVaultKeyring())
```

Ao adicionar uma dependência que lê dados do próprio pacote ou descobre plugins dinamicamente,
conferir se ela precisa de flag de inclusão no Nuitka.
