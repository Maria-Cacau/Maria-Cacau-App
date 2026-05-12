"""Mostra todos os dados da aba Produtos e verifica validações restantes."""

import json
from pathlib import Path

import gspread
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build

_BASE_DIR  = Path.home() / '.mariacacau'
_CRED_FILE = _BASE_DIR / 'google-credentials.credential'
_SHEETS_CFG = _BASE_DIR / 'sheets.json'
_SCOPES    = ['https://www.googleapis.com/auth/spreadsheets.readonly']

def _auth():
    raw = _CRED_FILE.read_text(encoding='utf-8')
    creds = Credentials.from_service_account_info(json.loads(raw), scopes=_SCOPES)
    return build('sheets', 'v4', credentials=creds), gspread.authorize(creds)

def _sheet_id():
    cfg = json.loads(_SHEETS_CFG.read_text(encoding='utf-8'))
    return cfg[0]['sheet_id'] if isinstance(cfg, list) else cfg['sheet_id']

def col_letter(n):
    result = ''
    while n:
        n, r = divmod(n - 1, 26)
        result = chr(65 + r) + result
    return result

def main():
    service, client = _auth()
    sid = _sheet_id()

    # ── 1. Todos os dados da aba Produtos ─────────────────────────────────────
    print('Lendo aba Produtos completa...')
    ws = client.open_by_key(sid).worksheet('Produtos')
    all_vals = ws.get_all_values()
    header = all_vals[0] if all_vals else []
    data   = all_vals[1:] if len(all_vals) > 1 else []

    print(f'\nColunas da aba Produtos ({len(header)}): {header}')
    print(f'Linhas com dados: {len(data)}\n')

    n_cols = len(header)
    for ci in range(n_cols):
        col_h = header[ci]
        values = [r[ci] for r in data if ci < len(r) and r[ci].strip()]
        if values:
            from collections import Counter
            top = [v for v, _ in Counter(values).most_common(6)]
            print(f'  [{ci+1}] {col_h!r}  ({len(values)} linhas)')
            for v in top:
                print(f'        "{v}"')
        else:
            print(f'  [{ci+1}] {col_h!r}  (vazia)')

    # ── 2. Validações em outras colunas do Cadastro ───────────────────────────
    print('\n\n' + '='*80)
    print('VALIDAÇÕES — demais colunas do Cadastro (linhas 2-10)')
    print('='*80)

    # Pega headers do Cadastro
    hdr = service.spreadsheets().values().get(
        spreadsheetId=sid, range="'Cadastro'!A1:FP1"
    ).execute().get('values', [[]])[0]
    col_name = {i+1: h for i, h in enumerate(hdr)}

    # Colunas restantes para validar: Prod2-7, SEXO, PARENTESCO, EVENTO, MODALIDADE, FORMA PGTO 2-6
    check_cols = [5, 7, 20, 24, 28, 32, 36, 40, 51, 55, 59, 63, 67, 71, 78, 91]
    ranges = [f"'Cadastro'!{col_letter(c)}2:{col_letter(c)}10" for c in check_cols]

    res = service.spreadsheets().get(
        spreadsheetId=sid,
        ranges=ranges,
        fields='sheets(data(rowData(values(dataValidation))))',
        includeGridData=True,
    ).execute()

    for col_idx, sheet_data in zip(check_cols, res.get('sheets', [])):
        name = col_name.get(col_idx, '?')
        rows = sheet_data.get('data', [{}])[0].get('rowData', [])
        seen = set()
        for row in rows:
            for cell in row.get('values', []):
                dv = cell.get('dataValidation', {})
                if dv:
                    cond = dv.get('condition', {})
                    ct = cond.get('type', '')
                    cv = [v.get('userEnteredValue', '') for v in cond.get('values', [])]
                    seen.add(f"{ct}: {', '.join(cv)}")
        if seen:
            print(f'\n[{col_idx:>3}] {name!r}')
            for s in seen:
                print(f'  → {s}')

    # ── 3. Fórmulas nas demais colunas calculadas ─────────────────────────────
    print('\n\n' + '='*80)
    print('FÓRMULAS — demais colunas de valor calculado (Valor2-7, TOTAL, etc.)')
    print('='*80)

    calc_cols = [22, 26, 30, 34, 38, 42, 44, 47, 48, 74, 77]
    ranges_f = [f"'Cadastro'!{col_letter(c)}2:{col_letter(c)}2" for c in calc_cols]

    res2 = service.spreadsheets().get(
        spreadsheetId=sid,
        ranges=ranges_f,
        fields='sheets(data(rowData(values(userEnteredValue))))',
        includeGridData=True,
    ).execute()

    for col_idx, sheet_data in zip(calc_cols, res2.get('sheets', [])):
        name = col_name.get(col_idx, '?')
        rows = sheet_data.get('data', [{}])[0].get('rowData', [])
        for row in rows:
            for cell in row.get('values', []):
                uev = cell.get('userEnteredValue', {})
                fv = uev.get('formulaValue', '')
                if fv:
                    print(f'  [{col_idx:>3}] {name!r} → {fv}')

if __name__ == '__main__':
    main()
