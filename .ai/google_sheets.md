# Integração Google Sheets

## Objetivo
Leitura direta da planilha compartilhada no Google Drive — sem exportar Excel.

## Autenticação
Usa **Service Account** — conta de serviço criada no Google Cloud (projeto "Projeto Contagem").
- O `.json` da service account **não vai no repositório** (está no `.gitignore`)
- Na primeira execução o app lê o `.json` no caminho hardcoded em `sheets_manager.py`
- O conteúdo é salvo criptografado no keychain do SO via `keyring`
- Nas próximas execuções o app lê direto do keychain, sem precisar do arquivo

## Credenciais no keychain
```python
# serviço e chave usados no keyring
service = "maria-cacau"
key     = "google-credentials"
```

## Planilha
- **ID:** `1T9i35d8EvEwb_Byq_UwHw_qnoHnvRoAYvnds7h6RbJw`
- **Aba:** `Cadastro` (≈ 15.846 linhas, 110 colunas)
- Conexão confirmada e funcionando

## Arquitetura em três camadas

| Classe | Arquivo | Responsabilidade |
|---|---|---|
| `GoogleSheetsService` | `core/google_sheets_service.py` | Autenticação + leitura bruta (`get_raw_data`) |
| `CadastroAnalyseHandler` | `core/cadastro_analyse_handler.py` | Processa a aba Cadastro (filtragem, datas, colunas) |
| `SheetsManager` | `core/sheets_manager.py` | Orquestra os dois acima; singleton `manager` usado pela UI |

## Convenções de colunas
Todos os headers da planilha são normalizados para **lowercase** via `_normalize_headers`.
- Primeira coluna (sem header) → `pedido`
- `Prod4` tem header `'-'` na planilha → usa `'-'` no `colsFiltro["produtos"]` e `colsFiltro["belga"]`
- `glbl` (labels de UI) ficam em **UPPERCASE** — são strings de display, não nomes de coluna

## Fluxo ao clicar "Ler planilha"
1. `manager.connect()` → autentica (keychain ou arquivo) → lê aba `Cadastro` → cria `CadastroAnalyseHandler`
2. `manager.cadastro.get_recent_dates(20)` → retorna as 20 datas mais recentes
3. UI é ativada com essas 20 datas

## Status
- [x] Google Cloud project criado ("Projeto Contagem")
- [x] Sheets API habilitada
- [x] Service Account criada
- [x] Credenciais `.json` baixadas
- [x] Planilha compartilhada com a service account
- [x] Conexão confirmada (`Cadastro`, 15.846 linhas)
- [x] Integração com UI (`home_view.py` usa `manager`)
- [ ] UI de configuração (tela para informar o `.json` na primeira vez — por ora hardcoded em `sheets_manager.py`)
