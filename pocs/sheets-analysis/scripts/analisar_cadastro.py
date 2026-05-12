"""Análise da aba Cadastro da planilha Google Sheets.

Uso:
    python scripts/analisar_cadastro.py
"""

import json
from pathlib import Path
from collections import Counter

import gspread
from google.oauth2.service_account import Credentials

# ── Config ────────────────────────────────────────────────────────────────────

_BASE_DIR   = Path.home() / '.mariacacau'
_CRED_FILE  = _BASE_DIR / 'google-credentials.credential'
_SHEETS_CFG = _BASE_DIR / 'sheets.json'
_SCOPES     = ['https://www.googleapis.com/auth/spreadsheets.readonly']
_N_ROWS     = 50   # últimas N linhas com dados


# ── Auth ──────────────────────────────────────────────────────────────────────

def _auth() -> gspread.Client:
    raw = _CRED_FILE.read_text(encoding='utf-8')
    creds = Credentials.from_service_account_info(json.loads(raw), scopes=_SCOPES)
    return gspread.authorize(creds)


def _sheet_id() -> str:
    cfg = json.loads(_SHEETS_CFG.read_text(encoding='utf-8'))
    # suporta lista [{"sheet_id": "..."}] ou {"sheet_id": "..."}
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
        clean = v.replace('R$', '').replace(',', '.').strip()
        try:
            float(clean)
            num_hits += 1
        except ValueError:
            pass
    if num_hits / len(non_empty) > 0.7:
        return 'numérico'

    # Verifica se parece enum (poucos valores únicos)
    unique = set(v.strip().upper() for v in non_empty)
    if 1 < len(unique) <= 12:
        return f'enum ({len(unique)} opções)'

    return 'texto'


def _fill_rate(col_values: list[str]) -> str:
    total = len(col_values)
    filled = sum(1 for v in col_values if v.strip())
    pct = filled / total * 100 if total else 0
    return f'{pct:.0f}%'


def _top_values(samples: list[str], n: int = 5) -> list[str]:
    non_empty = [v.strip() for v in samples if v.strip()]
    return [v for v, _ in Counter(non_empty).most_common(n)]


# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    print('Autenticando...')
    client = _auth()
    sid = _sheet_id()
    print(f'Sheet ID: {sid}')

    ws = client.open_by_key(sid).worksheet('Cadastro')

    # Lê tudo de uma vez
    print('Lendo planilha completa...')
    all_values = ws.get_all_values()
    header = all_values[0]
    n_cols = len(header)
    print(f'Total de colunas no cabeçalho: {n_cols}')

    # Filtra por PEDIDO preenchido (col 0), igual ao CadastroAnalyseHandler
    data_rows = [r for r in all_values[1:] if r and r[0].strip()]
    total_data_rows = len(data_rows)
    print(f'Linhas com pedido preenchido: {total_data_rows}')

    last_rows = data_rows[-_N_ROWS:]

    print(f'Linhas carregadas para análise: {len(last_rows)}')
    print()

    # Normaliza headers (mesmo critério do código existente)
    import re
    def norm(h: str) -> str:
        return re.sub(r'\n\s+', '\n', h).lower()

    headers_norm = [norm(h) for h in header]

    # Garante que todas as linhas têm o mesmo tamanho do header
    padded = []
    for row in last_rows:
        if len(row) < n_cols:
            row = row + [''] * (n_cols - len(row))
        padded.append(row[:n_cols])

    # Transpõe: col_data[i] = lista de valores da coluna i
    col_data = [[row[i] for row in padded] for i in range(n_cols)]

    # ── Análise por coluna ────────────────────────────────────────────────────

    results = []
    for i, (raw_h, norm_h) in enumerate(zip(header, headers_norm)):
        values = col_data[i]
        tipo   = _infer_type(values)
        fill   = _fill_rate(values)
        top    = _top_values(values)
        results.append({
            'idx':       i + 1,
            'header_raw': raw_h,
            'header_norm': norm_h,
            'tipo':      tipo,
            'fill':      fill,
            'top_values': top,
        })

    # ── Print resumo ──────────────────────────────────────────────────────────

    print('=' * 80)
    print(f'ABA CADASTRO — análise das últimas {len(last_rows)} linhas com dados')
    print(f'Total histórico de linhas: ~{total_data_rows}  |  Colunas: {n_cols}')
    print('=' * 80)
    print()

    # Colunas não-vazias primeiro, depois vazias
    non_empty = [r for r in results if r['fill'] != '0%']
    empty_cols = [r for r in results if r['fill'] == '0%']

    print(f'--- COLUNAS COM DADOS ({len(non_empty)}) ---')
    print()
    for r in non_empty:
        top_str = ', '.join(f'"{v}"' for v in r['top_values'])
        print(f"[{r['idx']:>3}] {r['header_raw']!r:<35}  tipo={r['tipo']:<22}  fill={r['fill']:<5}  top={top_str}")

    print()
    print(f'--- COLUNAS VAZIAS NAS ÚLTIMAS {_N_ROWS} LINHAS ({len(empty_cols)}) ---')
    for r in empty_cols:
        print(f"[{r['idx']:>3}] {r['header_raw']!r}")

    # ── Exporta JSON para uso no .md ──────────────────────────────────────────

    out_path = Path('scripts/cadastro_analysis.json')
    out_path.write_text(json.dumps({
        'total_rows_historico': total_data_rows,
        'n_cols': n_cols,
        'n_amostras': len(last_rows),
        'colunas': results,
    }, ensure_ascii=False, indent=2), encoding='utf-8')
    print()
    print(f'JSON exportado → {out_path}')


if __name__ == '__main__':
    main()
