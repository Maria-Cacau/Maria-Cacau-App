# Desenvolvimento

## Setup inicial

**macOS / Git Bash:**
```bash
./scripts/build.sh
```
Detecta macOS ou Windows e:
1. Instala `direnv` (macOS via Homebrew)
2. Cria o venv (`venv/`)
3. Instala o pacote e dependências via `pip install -e .`
4. Libera o direnv com `direnv allow`

Após o setup, abrir um novo terminal na pasta já ativa o venv automaticamente.

**Windows (CMD / PowerShell):**
```bat
scripts\build.bat
```
Faz o mesmo sem direnv — o VS Code detecta o venv automaticamente.

## Rodar o app
```bash
python -m maria_cacau
```

## Instalar dependências de build
```bash
scripts/build.sh build   # ou scripts\build.bat build no Windows
```

## Gerar executável
Automatizado via CI (workflow `app-distribution`) — ver [`packaging.md`](./packaging.md). Não é
mais gerado localmente.

## Adicionar dependência
1. Adicionar em `pyproject.toml` no grupo correto
2. Rodar `pip install -e .` (ou `pip install -e ".[build]"` para deps de build)

## Atualizar versão
Feito automaticamente pelo workflow `pr-release` ao escolher o tipo de bump (`major`/`minor`/`patch`)
— não editar `pyproject.toml` manualmente pra isso.

## Assets
Imagens ficam em `maria_cacau/assets/images/`. Caminhos são relativos à raiz do projeto (de onde `python -m maria_cacau` é executado).

## Google Sheets — configuração inicial
Na primeira vez, o app precisa do `.json` da Service Account para autenticar.

1. Menu **Segurança → Configurar certificado** → selecionar o `.json` da Service Account
2. Menu **Arquivo → Conectar nova planilha** → colar o link ou ID da planilha

As credenciais são salvas via `SecurityStorage`: no cofre do sistema (Keychain no macOS, Credential
Manager no Windows) quando o dado cabe, ou em arquivo protegido por permissões em `~/.mariacacau/`
quando não cabe ou o cofre está indisponível na máquina — o `google-credentials` (JSON da service
account) sempre cai em arquivo, por ser grande demais para o cofre. Nas próximas execuções, o app
autentica automaticamente e as planilhas já conectadas aparecem em **Arquivo → Planilhas
conectadas**.

Lista de planilhas salvas: `~/.mariacacau/sheets.json`

### Escopo é somente leitura
O client do Sheets é criado com escopo de leitura, em `backend/data_source/_google_sheets.py`:

```python
_SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

creds = Credentials.from_service_account_info(credentials, scopes=_SCOPES)
```

Dar permissão de escrita para a Service Account na planilha **não basta**: o escopo é pedido na
autenticação, então o client nasce somente leitura de qualquer jeito. Toda feature que precise
gravar na planilha esbarra nisso antes de qualquer outra coisa — o escopo teria que virar
`https://www.googleapis.com/auth/spreadsheets`.
