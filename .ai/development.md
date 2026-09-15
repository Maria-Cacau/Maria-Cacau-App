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

### Credencial da Meta (envio de conversões)
A credencial da Meta vem **no mesmo `.json`** da Service Account, num bloco opcional do app, importado
pelo mesmo menu **Segurança → Configurar certificado**:

```json
{
  "type": "service_account",
  "...": "demais campos do Google",
  "maria_cacau": {
    "meta": { "access_token": "...", "dataset_id": "...", "test_event_code": "opcional" }
  }
}
```

O app tira o bloco antes de salvar a credencial do Google e grava o token no `SecurityStorage`
(`meta-access-token`) e o resto no `CacheStorage` (`~/.mariacacau/meta-settings.json`). Sem o bloco,
o import funciona como antes. Com `test_event_code`, todo envio vai para a área de teste da Meta e a
planilha grava `Teste` — **o arquivo distribuído para uso real não leva esse campo**. O arquivo tem o
token de produção e a chave do Google: nunca versionar.

Envio: menu **Funcionalidades → Enviar conversão para a Meta**.

### Escopo de leitura e escrita
O client do Sheets é criado em `backend/data_source/_google_sheets.py`, com escopo de leitura e
escrita desde 14/09/2026 (era só leitura antes disso):

```python
_SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

creds = Credentials.from_service_account_info(credentials, scopes=_SCOPES)
```

Dar permissão à Service Account no compartilhamento da planilha não basta sozinho: o escopo é
pedido na autenticação, e é ele que decide o que o client pode fazer — a permissão do
compartilhamento é a identidade, o escopo é o poder. Escrita disponível via `update_order`, com
allowlist de colunas (`WRITABLE_COLS`) — arquitetura completa em
`Maria-Cacau-Study/style-guide/backend/overview.md`, seção "Escrita — `update_order`".
