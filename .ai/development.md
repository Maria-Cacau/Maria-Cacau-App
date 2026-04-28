# Desenvolvimento

## Setup inicial
```bash
./scripts/build.sh
```
Detecta macOS ou Windows e:
1. Instala `direnv` (macOS via Homebrew)
2. Cria o venv (`venv/`)
3. Instala o pacote e dependências via `pip install -e .`
4. Libera o direnv com `direnv allow`

Após o setup, abrir um novo terminal na pasta já ativa o venv automaticamente.

## Rodar o app
```bash
python -m maria_cacau
```

## Instalar dependências de build
```bash
pip install -e ".[build]"
```

## Gerar executável
```bash
./scripts/package.sh
```
- macOS → `dist/MC - Análise.app`
- Windows → `dist/MC - Análise.exe`

## Adicionar dependência
1. Adicionar em `pyproject.toml` no grupo correto
2. Rodar `pip install -e .` (ou `pip install -e ".[build]"` para deps de build)

## Atualizar versão
Editar apenas `pyproject.toml`:
```toml
[project]
version = "6.0.0"
```
O `__init__.py`, o executável gerado e os metadados do pacote leem daqui automaticamente.

## Assets
Imagens ficam em `maria_cacau/assets/images/`. Caminhos são relativos à raiz do projeto (de onde `python -m maria_cacau` é executado).

## Google Sheets — primeira execução
Na primeira vez, o app precisa do `.json` da Service Account para autenticar.
O caminho está hardcoded em `maria_cacau/core/sheets/manager.py` (`_JSON_PATH`).
Após a primeira autenticação, as credenciais são salvas no keychain do SO via `keyring` e o arquivo `.json` não é mais necessário.

> **Pendente:** criar UI de configuração para informar o caminho do `.json` sem precisar editar o código.
