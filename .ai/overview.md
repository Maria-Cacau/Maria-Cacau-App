# Maria Cacau - Contagem

## O que é
**MC Consultas** — app desktop para gestão de pedidos e entregas da Maria Cacau. Conecta diretamente à planilha Google Sheets e gera resumos para:
- **Produtos**: contagem de itens por período
- **Entregas**: resumo diário com inadimplências
- **Nota Fiscal (Dados)**: dados para emissão SAGE e Melhor Envio

Planilhas são gerenciadas pelo menu **Arquivo**: conectar por URL/ID, salvar localmente em `~/.mariacacau/sheets.json`, e selecionar entre as salvas.

## Tech Stack
| Camada | Tecnologia |
|---|---|
| Linguagem | Python 3.13 |
| Interface | PyQt6 |
| Dados | pandas |
| Gráficos | matplotlib + seaborn |
| Planilha Google | gspread + google-auth |
| Credenciais | keyring (keychain do SO) |
| Build/Empacotamento | Nuitka |
| Ambiente | direnv + venv |

## Como rodar
```bash
./scripts/build.sh        # setup inicial (uma vez)
python -m maria_cacau     # roda o app
```

## Como gerar executável
```bash
./scripts/package.sh      # gera .app (macOS) ou .exe (Windows)
```
