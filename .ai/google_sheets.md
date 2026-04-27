# Integração Google Sheets

## Objetivo
Substituir o fluxo manual (exportar Excel → abrir no app) por leitura direta da planilha do Google Sheets.

## Autenticação
Usa **Service Account** — conta de serviço criada no Google Cloud (projeto "Projeto Contagem").
- O `.json` da service account **não vai no repositório** (está no `.gitignore`)
- Na primeira execução o usuário informa o caminho do `.json`
- O conteúdo é salvo criptografado no keychain do SO via `keyring`
- Nas próximas execuções o app lê direto do keychain, sem precisar do arquivo

## Credenciais no keychain
```python
# serviço e chave usados no keyring
service = "maria-cacau"
key     = "google-credentials"
```

## Classe principal
`maria_cacau/core/google_sheets_service.py` → `GoogleSheetsService`

| Método | Descrição |
|---|---|
| `load_credentials_from_file(path)` | Primeira vez: lê o .json e salva no keychain |
| `load_credentials_from_keychain()` | Demais vezes: autentica direto do keychain |
| `set_sheet(sheet_id)` | Define a planilha pelo ID ou URL |
| `get_data(worksheet_name)` | Retorna os dados como DataFrame |

## Permissões necessárias
A empresa precisa compartilhar a planilha com o e-mail da service account (formato `nome@projeto-id.iam.gserviceaccount.com`) com permissão de **Leitor**.

## Status
- [x] Google Cloud project criado ("Projeto Contagem")
- [x] Sheets API habilitada
- [x] Service Account criada
- [x] Credenciais `.json` baixadas
- [ ] Planilha compartilhada com a service account ← aguardando
- [ ] Integração com `analisePlan.py`
- [ ] UI de configuração (tela para informar o `.json` na primeira vez)
