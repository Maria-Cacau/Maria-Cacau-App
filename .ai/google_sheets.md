# Integração Google Sheets

## Objetivo
Leitura direta da planilha compartilhada no Google Drive — sem exportar Excel.

## Autenticação
Usa **Service Account** — conta de serviço criada no Google Cloud (projeto "Projeto Contagem").
- O `.json` da service account **não vai no repositório** (está no `.gitignore`)
- Configurado pela UI: **Segurança → Configurar certificado**
- O conteúdo é salvo no keychain do SO via `keyring`; nas próximas execuções o app autentica sozinho

```python
# serviço e chave usados no keyring
service = "maria-cacau"
key     = "google-credentials"
```

## Planilhas salvas
Lista persistida em `~/.mariacacau/sheets.json` (formato: `[{"nome": "...", "sheet_id": "..."}]`).
Carregada ao iniciar o app e exibida em **Arquivo → Planilhas conectadas**.
Ao conectar uma planilha existente, o app oferece renomear antes de sobrescrever.

## Arquitetura em três camadas

| Classe | Arquivo | Responsabilidade |
|---|---|---|
| `GoogleSheetsService` | `core/sheets/service.py` | Autenticação + leitura bruta |
| `CadastroAnalyseHandler` | `core/sheets/handlers/cadastro.py` | Processa a aba Cadastro (filtragem, datas, colunas) |
| `SheetsManager` | `core/sheets/manager.py` | Orquestra os dois; singleton `manager` usado pela UI |

## Fluxo de conexão (branch atual)

1. **Arquivo → Conectar nova planilha** → popup pede link e nome
2. `manager.connect(sheet_id)` → autentica (keychain) + aponta para a planilha. **Não lê dados.**
3. Planilha salva em `~/.mariacacau/sheets.json`
4. Menu "Planilhas conectadas" atualizado com checkmark na ativa

## Fluxo de leitura (lazy — ao clicar "Ativar" no painel)

1. `manager.load_cadastro()` → chama `service.get_cadastro_filtered(n_dates=20)`
2. `get_cadastro_filtered` faz dois passes na API:
   - Pass 1: lê só a coluna `DATA` → identifica as 20 datas mais recentes
   - Pass 2: `batch_get` das linhas dessas datas (≈ 1% das linhas totais)
3. `CadastroAnalyseHandler(raw_rows)` processa e disponibiliza os dados
4. Datas populadas nos combo boxes dos painéis

## Mapeamento de colunas (planilha real → código)

| Header na planilha | Após `_normalize_headers` | Usado como |
|---|---|---|
| `PEDIDO` | `pedido` | índice principal |
| `DATA` | `data` | data de entrega |
| `Modalidade` | `modalidade` | modal de entrega |
| `Destinatário` | `destinatário` | nome do destinatário |
| `Cidade` | `cidade` | cidade (sem UF) |
| `Outro\n  Espec.` | `outro\nespec.` | produto livre |
| `Quanto\n  falta\n  pagar?` | `quanto\nfalta\npagar?` | valor pendente |

Colunas duplicadas na planilha são resolvidas por `df.loc[:, ~df.columns.duplicated()]` (mantém primeira ocorrência).

## Convenção de datas
Formato no Sheets: `DD/MM/YY` ou `DD/MM/YYYY`.
Ordenação usa `datetime.strptime` (não sort lexicográfico) para garantir ordem cronológica correta.

## Status
- [x] Google Cloud project criado ("Projeto Contagem")
- [x] Sheets API habilitada
- [x] Service Account criada
- [x] UI de configuração de certificado (Segurança → Configurar/Limpar certificado)
- [x] Planilha real mapeada e funcionando (`1sWiWmckq0lAkV2zD_jofPx56WgE7sroSgqO7fAnPUnc`)
- [x] Conexão lazy (connect ≠ load_cadastro)
- [x] Leitura filtrada por data (2 passes, ~1% das linhas)
- [x] Persistência de planilhas em `~/.mariacacau/sheets.json`
