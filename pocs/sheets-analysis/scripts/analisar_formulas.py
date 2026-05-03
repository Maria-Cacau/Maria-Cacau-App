"""Busca fórmulas e data validations nas colunas-chave do Cadastro."""

import json
from pathlib import Path

from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build

_BASE_DIR   = Path.home() / '.mariacacau'
_CRED_FILE  = _BASE_DIR / 'google-credentials.credential'
_SHEETS_CFG = _BASE_DIR / 'sheets.json'
_SCOPES     = ['https://www.googleapis.com/auth/spreadsheets.readonly']

def _auth():
    raw = _CRED_FILE.read_text(encoding='utf-8')
    creds = Credentials.from_service_account_info(json.loads(raw), scopes=_SCOPES)
    return build('sheets', 'v4', credentials=creds), creds

def _sheet_id():
    cfg = json.loads(_SHEETS_CFG.read_text(encoding='utf-8'))
    return cfg[0]['sheet_id'] if isinstance(cfg, list) else cfg['sheet_id']

def main():
    service, _ = _auth()
    sid = _sheet_id()

    # Colunas de interesse: produtos, valores calculados, booleanos, validações
    # (índices 1-based → letras de coluna)
    def col_letter(n):
        """1→A, 2→B, 27→AA, etc."""
        result = ''
        while n:
            n, r = divmod(n - 1, 26)
            result = chr(65 + r) + result
        return result

    # Pega as colunas mais interessantes:
    # Prod1-7 (16,20,24,28,32,36,40), Valor1-7 (18,22,26,30,34,38,42),
    # TOTAL(47), Confere(48), Falta pagar(74), PLP/NF(3), DESPACHADO(75), D+1(77)
    key_cols = [3, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 47, 48, 74, 75, 77]

    ranges = [f"'Cadastro'!{col_letter(c)}1:{col_letter(c)}5" for c in key_cols]

    print('Buscando fórmulas (rows 1-5) para colunas-chave...\n')
    result = service.spreadsheets().get(
        spreadsheetId=sid,
        ranges=ranges,
        fields='sheets(data(rowData(values(userEnteredValue,dataValidation))))',
        includeGridData=True,
    ).execute()

    # Headers do Cadastro (row 1 = header)
    header_result = service.spreadsheets().values().get(
        spreadsheetId=sid,
        range="'Cadastro'!A1:FP1",
    ).execute()
    headers = header_result.get('values', [[]])[0]
    col_name = {i+1: h for i, h in enumerate(headers)}

    print('=' * 80)
    print('FÓRMULAS E VALIDAÇÕES — COLUNAS-CHAVE DO CADASTRO')
    print('=' * 80)

    for col_idx, sheet_data in zip(key_cols, result.get('sheets', [])):
        name = col_name.get(col_idx, '?')
        print(f'\n[{col_idx:>3}] {name!r}')

        rows = sheet_data.get('data', [{}])[0].get('rowData', [])
        formulas_seen = set()
        validations_seen = set()

        for row in rows:
            for cell in row.get('values', []):
                uev = cell.get('userEnteredValue', {})
                fv = uev.get('formulaValue', '')
                if fv:
                    formulas_seen.add(fv)

                dv = cell.get('dataValidation', {})
                if dv:
                    cond = dv.get('condition', {})
                    ctype = cond.get('type', '')
                    cvals = [v.get('userEnteredValue', '') for v in cond.get('values', [])]
                    validations_seen.add(f"{ctype}: {', '.join(cvals)}")

        if formulas_seen:
            print(f'  Fórmulas: {sorted(formulas_seen)}')
        if validations_seen:
            print(f'  Validação: {sorted(validations_seen)}')
        if not formulas_seen and not validations_seen:
            print(f'  (entrada direta — sem fórmula nem validação nas linhas 1-5)')

    # ── Busca validação nas linhas de dados (row 2 = primeiro pedido) ─────────
    print('\n\n' + '=' * 80)
    print('VALIDAÇÕES NAS LINHAS DE DADOS (row 2)')
    print('=' * 80)

    ranges_data = [f"'Cadastro'!{col_letter(c)}2:{col_letter(c)}2" for c in key_cols]
    result2 = service.spreadsheets().get(
        spreadsheetId=sid,
        ranges=ranges_data,
        fields='sheets(data(rowData(values(userEnteredValue,dataValidation))))',
        includeGridData=True,
    ).execute()

    for col_idx, sheet_data in zip(key_cols, result2.get('sheets', [])):
        name = col_name.get(col_idx, '?')
        rows = sheet_data.get('data', [{}])[0].get('rowData', [])
        for row in rows:
            for cell in row.get('values', []):
                dv = cell.get('dataValidation', {})
                if dv:
                    cond = dv.get('condition', {})
                    ctype = cond.get('type', '')
                    cvals = [v.get('userEnteredValue', '') for v in cond.get('values', [])]
                    print(f'  [{col_idx:>3}] {name!r} → {ctype}: {", ".join(cvals)}')

    # ── Também verifica a aba Produtos para confirmar a lista ─────────────────
    print('\n\n' + '=' * 80)
    print('ABA "Produtos" — primeiros e últimos itens da lista')
    print('=' * 80)
    prod_result = service.spreadsheets().values().get(
        spreadsheetId=sid,
        range="'Produtos'!A:A",
    ).execute()
    prod_values = [r[0] for r in prod_result.get('values', []) if r and r[0].strip()]
    print(f'Total de itens: {len(prod_values)}')
    print(f'Header: {prod_values[0]!r}')
    print(f'\nPrimeiros 10:')
    for p in prod_values[1:11]:
        print(f'  {p}')
    print(f'\nÚltimos 5:')
    for p in prod_values[-5:]:
        print(f'  {p}')

if __name__ == '__main__':
    main()
