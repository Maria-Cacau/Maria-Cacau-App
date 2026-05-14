"""Análise completa da planilha: todas as abas, headers, fórmulas e validações.

Uso:
    python scripts/analisar_planilha_completa.py
"""

import json
from collections import Counter
from pathlib import Path

import gspread
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build
from gspread.utils import rowcol_to_a1

# ── Config ────────────────────────────────────────────────────────────────────

_BASE_DIR   = Path.home() / '.mariacacau'
_CRED_FILE  = _BASE_DIR / 'google-credentials.credential'
_SHEETS_CFG = _BASE_DIR / 'sheets.json'
_SCOPES     = [
    'https://www.googleapis.com/auth/spreadsheets.readonly',
    'https://www.googleapis.com/auth/drive.readonly',
]

# ── Auth ──────────────────────────────────────────────────────────────────────

def _load_creds() -> Credentials:
    raw = _CRED_FILE.read_text(encoding='utf-8')
    return Credentials.from_service_account_info(json.loads(raw), scopes=_SCOPES)

def _sheet_id() -> str:
    cfg = json.loads(_SHEETS_CFG.read_text(encoding='utf-8'))
    if isinstance(cfg, list):
        return cfg[0]['sheet_id']
    return cfg['sheet_id']

# ── Helpers ───────────────────────────────────────────────────────────────────

def _infer_type(samples: list[str]) -> str:
    non_empty = [s for s in samples if s.strip()]
    if not non_empty:
        return 'vazia'
    date_hits = sum(1 for v in non_empty if len(v) >= 8 and '/' in v and v[:2].isdigit())
    if date_hits / len(non_empty) > 0.7:
        return 'data'
    num_hits = 0
    for v in non_empty:
        clean = v.replace('R$', '').replace(',', '.').replace(' ', '').strip()
        try:
            float(clean)
            num_hits += 1
        except ValueError:
            pass
    if num_hits / len(non_empty) > 0.7:
        return 'numérico'
    unique = set(v.strip().upper() for v in non_empty)
    if 1 < len(unique) <= 12:
        return f'enum ({len(unique)} opções)'
    return 'texto'

def _fill_rate(values: list[str], total: int) -> str:
    filled = sum(1 for v in values if v.strip())
    pct = filled / total * 100 if total else 0
    return f'{pct:.0f}%'

def _top_values(samples: list[str], n: int = 4) -> list[str]:
    non_empty = [v.strip() for v in samples if v.strip()]
    return [v for v, _ in Counter(non_empty).most_common(n)]

# ── Análise por aba ───────────────────────────────────────────────────────────

def analyze_sheet(ws: gspread.Worksheet, n_sample: int = 100) -> dict:
    print(f'  Lendo valores de "{ws.title}"...')
    all_values = ws.get_all_values()
    if not all_values:
        return {'title': ws.title, 'rows': 0, 'cols': 0, 'columns': []}

    header = all_values[0]
    data_rows = all_values[1:]
    n_cols = len(header)
    n_rows = len(data_rows)

    sample = data_rows[-n_sample:] if len(data_rows) > n_sample else data_rows

    # Garante mesmo tamanho
    padded = [(r + [''] * max(0, n_cols - len(r)))[:n_cols] for r in sample]
    col_data = [[row[i] for row in padded] for i in range(n_cols)]

    columns = []
    for i, h in enumerate(header):
        vals = col_data[i]
        columns.append({
            'idx': i + 1,
            'header': h,
            'tipo': _infer_type(vals),
            'fill': _fill_rate(vals, len(padded)),
            'top_values': _top_values(vals),
        })

    return {
        'title': ws.title,
        'rows': n_rows,
        'cols': n_cols,
        'columns': columns,
    }

# ── Fórmulas e validações via Sheets API v4 ───────────────────────────────────

def get_formulas_and_validations(service, spreadsheet_id: str, sheet_title: str, col_indices: list[int]) -> dict:
    """Busca fórmulas e data validations de colunas específicas (índices 1-based)."""
    # Converte índices de coluna em ranges A1 notation
    ranges = []
    for col in col_indices:
        col_letter = rowcol_to_a1(1, col)[:-1]  # ex: A, B, AK
        ranges.append(f"'{sheet_title}'!{col_letter}:{col_letter}")

    result = service.spreadsheets().get(
        spreadsheetId=spreadsheet_id,
        ranges=ranges,
        fields='sheets(data(rowData(values(formattedValue,formula,dataValidation,userEnteredValue))))',
        includeGridData=True,
    ).execute()

    output = {}
    for i, (col_idx, sheet_data) in enumerate(zip(col_indices, result.get('sheets', []))):
        formulas   = []
        validations = set()
        for row_data in sheet_data.get('data', [{}])[0].get('rowData', []):
            for cell in row_data.get('values', []):
                f = cell.get('formula') or cell.get('userEnteredValue', {}).get('formulaValue', '')
                if f:
                    formulas.append(f)
                dv = cell.get('dataValidation', {})
                if dv:
                    cond = dv.get('condition', {})
                    ctype = cond.get('type', '')
                    cvals = [v.get('userEnteredValue', '') for v in cond.get('values', [])]
                    validations.add(f"{ctype}: {', '.join(cvals)}")
        output[col_idx] = {
            'formulas_sample': list(set(formulas[:10])),
            'validations': list(validations),
        }
    return output

# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    print('Autenticando...')
    creds = _load_creds()
    client = gspread.authorize(creds)
    service = build('sheets', 'v4', credentials=creds)

    sid = _sheet_id()
    print(f'Sheet ID: {sid}\n')

    spreadsheet = client.open_by_key(sid)
    worksheets = spreadsheet.worksheets()
    print(f'Abas encontradas ({len(worksheets)}):')
    for ws in worksheets:
        print(f'  - "{ws.title}" (gid={ws.id})')
    print()

    all_analysis = {}

    for ws in worksheets:
        print(f'Analisando aba: "{ws.title}"')
        analysis = analyze_sheet(ws, n_sample=100)
        all_analysis[ws.title] = analysis

        non_empty = [c for c in analysis['columns'] if c['fill'] != '0%']
        empty_cols = [c for c in analysis['columns'] if c['fill'] == '0%']

        print(f'  Linhas: {analysis["rows"]} | Colunas: {analysis["cols"]} | Com dados: {len(non_empty)} | Vazias: {len(empty_cols)}')
        print()

    # ── Fórmulas das colunas de produto e colunas-chave do Cadastro ──────────
    print('Buscando fórmulas e validações nas colunas-chave do Cadastro...')

    # Colunas que mais interessam: produtos (16,20,24,28,32,36,40), total(47),
    # fórmulas financeiras (18,22,26,30,34,38,42,44,48,74), bool (3,75,77)
    key_cols_cadastro = [3, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 47, 48, 74, 75, 77]

    try:
        formulas = get_formulas_and_validations(service, sid, 'Cadastro', key_cols_cadastro)
        all_analysis['_formulas_cadastro'] = formulas
        print('  Fórmulas e validações obtidas.')
    except Exception as e:
        print(f'  Erro ao buscar fórmulas: {e}')

    # ── Exporta JSON ──────────────────────────────────────────────────────────
    out = Path('scripts/planilha_completa_analysis.json')
    out.write_text(json.dumps(all_analysis, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'\nJSON exportado → {out}')

    # ── Print por aba ─────────────────────────────────────────────────────────
    SEP = '=' * 90

    for title, data in all_analysis.items():
        if title.startswith('_'):
            continue

        print(f'\n{SEP}')
        print(f'ABA: "{title}"  |  {data["rows"]} linhas  |  {data["cols"]} colunas')
        print(SEP)

        non_empty = [c for c in data['columns'] if c['fill'] != '0%']
        empty_cols = [c for c in data['columns'] if c['fill'] == '0%']

        if non_empty:
            print(f'\nColunas com dados ({len(non_empty)}):')
            for c in non_empty:
                top = ', '.join(f'"{v}"' for v in c['top_values'])
                print(f"  [{c['idx']:>3}] {c['header']!r:<40} tipo={c['tipo']:<22} fill={c['fill']:<5} top={top}")

        if empty_cols:
            headers_list = [c['header'] for c in empty_cols if c['header']]
            blank_count  = sum(1 for c in empty_cols if not c['header'])
            if headers_list:
                print(f'\nColunas vazias com header ({len(headers_list)}): {headers_list}')
            if blank_count:
                print(f'Colunas sem header (buffer): {blank_count}')

    # ── Print fórmulas ────────────────────────────────────────────────────────
    if '_formulas_cadastro' in all_analysis:
        print(f'\n{SEP}')
        print('FÓRMULAS E VALIDAÇÕES — Colunas-chave do Cadastro')
        print(SEP)

        cadastro_cols = all_analysis.get('Cadastro', {}).get('columns', [])
        col_name = {c['idx']: c['header'] for c in cadastro_cols}

        for col_idx, info in sorted(all_analysis['_formulas_cadastro'].items(), key=lambda x: int(x[0])):
            name = col_name.get(int(col_idx), '?')
            print(f'\n  [{col_idx:>3}] {name!r}')
            if info['formulas_sample']:
                print(f'        Fórmulas: {info["formulas_sample"]}')
            if info['validations']:
                print(f'        Validação: {info["validations"]}')
            if not info['formulas_sample'] and not info['validations']:
                print(f'        (sem fórmulas ou validações detectadas)')


if __name__ == '__main__':
    main()
