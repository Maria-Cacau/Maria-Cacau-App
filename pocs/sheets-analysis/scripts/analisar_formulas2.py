"""Busca fórmulas em linhas de dados reais e validação nas colunas de produto."""

import json
from pathlib import Path

from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build

_BASE_DIR  = Path.home() / '.mariacacau'
_CRED_FILE = _BASE_DIR / 'google-credentials.credential'
_SHEETS_CFG = _BASE_DIR / 'sheets.json'
_SCOPES    = ['https://www.googleapis.com/auth/spreadsheets.readonly']

def _auth():
    raw = _CRED_FILE.read_text(encoding='utf-8')
    creds = Credentials.from_service_account_info(json.loads(raw), scopes=_SCOPES)
    return build('sheets', 'v4', credentials=creds)

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
    service = _auth()
    sid = _sheet_id()

    # Headers
    hdr = service.spreadsheets().values().get(
        spreadsheetId=sid, range="'Cadastro'!A1:FP1"
    ).execute().get('values', [[]])[0]
    col_name = {i+1: h for i, h in enumerate(hdr)}

    # ── 1. Fórmulas em linhas de dados reais (rows 2-4) ───────────────────────
    # Verifica colunas calculadas: Valor1-7(18,22,26,30,34,38,42), Valor Outro(44),
    # TOTAL(47), Confere(48), falta pagar(74), D+1(77), DESPACHADO(75)
    calc_cols = [18, 22, 26, 30, 34, 38, 42, 44, 47, 48, 74, 75, 77, 3]
    ranges_calc = [f"'Cadastro'!{col_letter(c)}2:{col_letter(c)}4" for c in calc_cols]

    res = service.spreadsheets().get(
        spreadsheetId=sid,
        ranges=ranges_calc,
        fields='sheets(data(rowData(values(userEnteredValue,dataValidation,effectiveValue))))',
        includeGridData=True,
    ).execute()

    print('=' * 80)
    print('FÓRMULAS NAS LINHAS DE DADOS (rows 2-4)')
    print('=' * 80)
    for col_idx, sheet_data in zip(calc_cols, res.get('sheets', [])):
        name = col_name.get(col_idx, '?')
        rows = sheet_data.get('data', [{}])[0].get('rowData', [])
        formulas = []
        validations = []
        for row in rows:
            for cell in row.get('values', []):
                uev = cell.get('userEnteredValue', {})
                fv = uev.get('formulaValue', '')
                if fv:
                    formulas.append(fv)
                dv = cell.get('dataValidation', {})
                if dv:
                    cond = dv.get('condition', {})
                    ct = cond.get('type', '')
                    cv = [v.get('userEnteredValue', '') for v in cond.get('values', [])]
                    validations.append(f"{ct}: {', '.join(cv)}")
        if formulas or validations:
            print(f'\n[{col_idx:>3}] {name!r}')
            if formulas:
                print(f'  Fórmulas: {formulas}')
            if validations:
                print(f'  Validação: {list(set(validations))}')

    # ── 2. Validação nas colunas de produto (Prod1-7) ─────────────────────────
    prod_cols = [16, 20, 24, 28, 32, 36, 40]
    ranges_prod = [f"'Cadastro'!{col_letter(c)}2:{col_letter(c)}10" for c in prod_cols]

    res2 = service.spreadsheets().get(
        spreadsheetId=sid,
        ranges=ranges_prod,
        fields='sheets(data(rowData(values(userEnteredValue,dataValidation))))',
        includeGridData=True,
    ).execute()

    print('\n\n' + '=' * 80)
    print('VALIDAÇÃO NAS COLUNAS DE PRODUTO (Prod1-7, rows 2-10)')
    print('=' * 80)
    for col_idx, sheet_data in zip(prod_cols, res2.get('sheets', [])):
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
        print(f'\n[{col_idx:>3}] {name!r}')
        if seen:
            for s in seen:
                print(f'  Validação: {s}')
        else:
            print(f'  (sem data validation)')

    # ── 3. Modalidade e outros enums com validação ────────────────────────────
    enum_cols = [2, 5, 7, 51, 55, 78, 91]  # COMO CONHECEU, PARENTESCO, SEXO, Forma Pgto, Modalidade, Evento
    ranges_enum = [f"'Cadastro'!{col_letter(c)}2:{col_letter(c)}5" for c in enum_cols]

    res3 = service.spreadsheets().get(
        spreadsheetId=sid,
        ranges=ranges_enum,
        fields='sheets(data(rowData(values(dataValidation))))',
        includeGridData=True,
    ).execute()

    print('\n\n' + '=' * 80)
    print('VALIDAÇÃO NAS COLUNAS DE ENUM (COMO CONHECEU, PARENTESCO, SEXO, FORMA PGTO, MODALIDADE, EVENTO)')
    print('=' * 80)
    for col_idx, sheet_data in zip(enum_cols, res3.get('sheets', [])):
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
        print(f'\n[{col_idx:>3}] {name!r}')
        if seen:
            for s in seen:
                print(f'  Validação: {s}')
        else:
            print(f'  (sem data validation nas linhas 2-5)')

if __name__ == '__main__':
    main()
