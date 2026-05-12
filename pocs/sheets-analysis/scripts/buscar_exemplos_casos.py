"""Busca exemplos reais da planilha para os casos de uso do design.

Casos buscados:
  1. Pedido com 1 produto
  2. Pedido com 7 produtos
  3. Pedido com campo "Outro" preenchido
  4. Pedido com 2 parcelas de pagamento
  5. Pedido com 3+ parcelas
  6. Modalidade RETIRADA / GUARITA / FABRICA (sem endereço)
  7. Pedido com desconto > 0
  8. Destinatário diferente do comprador
  9. Pedido com obs fábrica preenchida
 10. Pedido com controle interno preenchido (CDH, Negociação)
"""

import json
from pathlib import Path

import gspread
from google.oauth2.service_account import Credentials

_BASE_DIR  = Path.home() / '.mariacacau'
_CRED_FILE = _BASE_DIR / 'google-credentials.credential'
_SHEETS_CFG = _BASE_DIR / 'sheets.json'
_SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

def _auth():
    raw = _CRED_FILE.read_text(encoding='utf-8')
    creds = Credentials.from_service_account_info(json.loads(raw), scopes=_SCOPES)
    return gspread.authorize(creds)

def _sheet_id():
    cfg = json.loads(_SHEETS_CFG.read_text(encoding='utf-8'))
    return cfg[0]['sheet_id'] if isinstance(cfg, list) else cfg['sheet_id']

# Mapeamento de colunas (1-based → nome legível)
# Com base na análise anterior
COL = {
    'pedido':       0,   # A
    'como_conheceu': 1,  # B
    'nome_comprador': 3, # D
    'parentesco':   4,   # E
    'nome_presenteado': 5, # F
    'sexo':         6,   # G
    'nome_etiqueta': 7,  # H
    'tema_etiqueta': 8,  # I
    'nome_caixa':   9,   # J
    'arte_caixa':   10,  # K
    'data_evento':  11,  # L
    'q1': 14, 'prod1': 15, 'unit1': 16, 'valor1': 17,
    'q2': 18, 'prod2': 19, 'unit2': 20, 'valor2': 21,
    'q3': 22, 'prod3': 23, 'unit3': 24, 'valor3': 25,
    'q4': 26, 'prod4': 27, 'unit4': 28, 'valor4': 29,
    'q5': 30, 'prod5': 31, 'unit5': 32, 'valor5': 33,
    'q6': 34, 'prod6': 35, 'unit6': 36, 'valor6': 37,
    'q7': 38, 'prod7': 39, 'unit7': 40, 'valor7': 41,
    'outro_espec':  42,  # AQ
    'valor_outro':  43,  # AR
    'desconto':     44,  # AS
    'frete':        45,  # AT
    'total':        46,  # AU
    'data_pgto1':   48, 'valor_pgto1': 49, 'forma_pgto1': 50, 'pagou1': 51,
    'data_pgto2':   52, 'valor_pgto2': 53, 'forma_pgto2': 54, 'pagou2': 55,
    'data_pgto3':   56, 'valor_pgto3': 57, 'forma_pgto3': 58, 'pagou3': 59,
    'falta_pagar':  73,  # BV
    'data_entrega': 75, # BX
    'modalidade':   77, # BZ
    'destinatario': 78, # CA
    'rua':          79, # CB
    'complemento':  80, # CC
    'bairro':       81, # CD
    'cidade':       82, # CE
    'cep':          83, # CF
    'tel':          84, # CG
    'cpf':          85, # CH
    'email':        86, # CI
    'obs_fabrica':  87, # CJ
    'info_motoboy': 88, # CK
    'evento':       90, # CM
    'cdh':          91, # CN
    'negociacao':   92, # CO
}

def get(row, key):
    idx = COL[key]
    return row[idx].strip() if idx < len(row) else ''

def n_produtos(row):
    count = 0
    for k in ['prod1','prod2','prod3','prod4','prod5','prod6','prod7']:
        v = get(row, k)
        if v and v != '-':
            count += 1
    return count

def n_parcelas(row):
    count = 0
    for k in ['forma_pgto1','forma_pgto2','forma_pgto3']:
        v = get(row, k)
        if v and v != '-':
            count += 1
    return count

def fmt_row(row, label):
    prods = []
    for i, (qk, pk, uk) in enumerate([
        ('q1','prod1','unit1'), ('q2','prod2','unit2'), ('q3','prod3','unit3'),
        ('q4','prod4','unit4'), ('q5','prod5','unit5'), ('q6','prod6','unit6'),
        ('q7','prod7','unit7'),
    ], 1):
        q = get(row, qk); p = get(row, pk); u = get(row, uk)
        if p and p != '-':
            prods.append(f"  Prod{i}: {q}x {p} @ R${u}")

    outro = get(row, 'outro_espec')
    if outro and outro != '-':
        prods.append(f"  Outro: {outro}")

    parcelas = []
    for i, (dk, vk, fk, pk) in enumerate([
        ('data_pgto1','valor_pgto1','forma_pgto1','pagou1'),
        ('data_pgto2','valor_pgto2','forma_pgto2','pagou2'),
        ('data_pgto3','valor_pgto3','forma_pgto3','pagou3'),
    ], 1):
        f = get(row, fk)
        if f and f != '-':
            confirmado = '✓' if get(row, pk) == '1' else '✗'
            parcelas.append(f"  Parcela {i}: {f} | {get(row, vk)} | {get(row, dk)} {confirmado}")

    lines = [
        f"\n{'='*70}",
        f"CASO: {label}",
        f"{'='*70}",
        f"Pedido:          #{get(row, 'pedido')}",
        f"Comprador:       {get(row, 'nome_comprador')} ({get(row, 'parentesco')})",
        f"Presenteado:     {get(row, 'nome_presenteado')} — {get(row, 'sexo')}",
        f"Evento:          {get(row, 'evento')} em {get(row, 'data_evento')}",
        f"Como conheceu:   {get(row, 'como_conheceu')}",
        f"Etiqueta:        {get(row, 'nome_etiqueta')} / tema: {get(row, 'tema_etiqueta')}",
        f"Caixa:           {get(row, 'nome_caixa')} / arte: {get(row, 'arte_caixa')}",
        f"--- Produtos ({n_produtos(row)}) ---",
    ] + prods + [
        f"Outro espec:     {get(row, 'outro_espec')}",
        f"Desconto:        R${get(row, 'desconto')}",
        f"Frete:           R${get(row, 'frete')}",
        f"TOTAL:           {get(row, 'total')}",
        f"Falta pagar:     {get(row, 'falta_pagar')}",
        f"--- Pagamento ({n_parcelas(row)} parcela(s)) ---",
    ] + parcelas + [
        f"--- Entrega ---",
        f"Data entrega:    {get(row, 'data_entrega')}",
        f"Modalidade:      {get(row, 'modalidade')}",
        f"Destinatário:    {get(row, 'destinatario')}",
        f"Tel dest.:       {get(row, 'tel')}",
        f"CPF dest.:       {get(row, 'cpf')}",
        f"Email dest.:     {get(row, 'email')}",
        f"CEP:             {get(row, 'cep')}",
        f"Rua:             {get(row, 'rua')}",
        f"Complemento:     {get(row, 'complemento')}",
        f"Bairro:          {get(row, 'bairro')}",
        f"Cidade:          {get(row, 'cidade')}",
        f"Obs fábrica:     {get(row, 'obs_fabrica')}",
        f"Info motoboy:    {get(row, 'info_motoboy')}",
        f"--- Controle Interno ---",
        f"CDH:             {get(row, 'cdh')}",
        f"Negociação:      {get(row, 'negociacao')}",
    ]
    return '\n'.join(lines)

def main():
    client = _auth()
    sid = _sheet_id()
    ws = client.open_by_key(sid).worksheet('Cadastro')

    print("Lendo planilha completa...")
    all_rows = ws.get_all_values()
    data = [r for r in all_rows[1:] if r and r[0].strip()]
    print(f"Total de pedidos: {len(data)}")

    # Busca nos últimos 500 pedidos para ter exemplos recentes
    sample = data[-500:]

    results = {}

    for row in sample:
        np = n_produtos(row)
        npar = n_parcelas(row)
        modal = get(row, 'modalidade').upper()
        desc = get(row, 'desconto')
        outro = get(row, 'outro_espec')
        obs_fab = get(row, 'obs_fabrica')
        negoc = get(row, 'negociacao')
        dest = get(row, 'destinatario')
        comp = get(row, 'nome_comprador')
        cdh = get(row, 'cdh')

        try:
            desc_val = float(desc.replace(',', '.').replace('R$', '').strip()) if desc else 0
        except:
            desc_val = 0

        # 1 produto
        if 'caso_1prod' not in results and np == 1:
            results['caso_1prod'] = (row, 'Pedido mínimo — 1 produto')

        # 7 produtos
        if 'caso_7prod' not in results and np == 7:
            results['caso_7prod'] = (row, 'Pedido máximo — 7 produtos')

        # 7 produtos + outro
        if 'caso_7prod_outro' not in results and np >= 5 and outro and outro != '-':
            results['caso_7prod_outro'] = (row, 'Pedido com muitos produtos + campo Outro preenchido')

        # 2 parcelas
        if 'caso_2parcelas' not in results and npar == 2:
            results['caso_2parcelas'] = (row, '2 parcelas de pagamento')

        # 3+ parcelas
        if 'caso_3parcelas' not in results and npar >= 3:
            results['caso_3parcelas'] = (row, '3 parcelas de pagamento')

        # Retirada (sem endereço)
        if 'caso_retirada' not in results and modal in ('RETIRADA', 'GUARITA', 'FEIRA', 'FABRICA'):
            results['caso_retirada'] = (row, f'Modalidade {modal} — sem endereço de entrega')

        # Com desconto
        if 'caso_desconto' not in results and desc_val > 5:
            results['caso_desconto'] = (row, f'Pedido com desconto (R${desc})')

        # Destinatário diferente do comprador
        if 'caso_dest_diferente' not in results and dest and comp and dest.strip().split()[0].upper() != comp.strip().split()[0].upper():
            results['caso_dest_diferente'] = (row, 'Destinatário diferente do comprador')

        # Obs fábrica
        if 'caso_obs_fabrica' not in results and obs_fab and len(obs_fab) > 10:
            results['caso_obs_fabrica'] = (row, 'Com observação para a fábrica')

        # Controle interno preenchido
        if 'caso_controle_interno' not in results and negoc and negoc != '-' and cdh:
            results['caso_controle_interno'] = (row, 'Controle interno preenchido (CDH + Negociação)')

        if len(results) >= 10:
            break

    # Print
    for key, (row, label) in results.items():
        print(fmt_row(row, label))

    # Salva JSON limpo
    output = {}
    for key, (row, label) in results.items():
        output[key] = {
            'label': label,
            'pedido': get(row, 'pedido'),
            'comprador': get(row, 'nome_comprador'),
            'parentesco': get(row, 'parentesco'),
            'tel': get(row, 'tel'),
            'cpf': get(row, 'cpf'),
            'email': get(row, 'email'),
            'presenteado': get(row, 'nome_presenteado'),
            'sexo': get(row, 'sexo'),
            'evento': get(row, 'evento'),
            'data_evento': get(row, 'data_evento'),
            'como_conheceu': get(row, 'como_conheceu'),
            'nome_etiqueta': get(row, 'nome_etiqueta'),
            'tema_etiqueta': get(row, 'tema_etiqueta'),
            'nome_caixa': get(row, 'nome_caixa'),
            'arte_caixa': get(row, 'arte_caixa'),
            'produtos': [
                {'q': get(row, f'q{i}'), 'prod': get(row, f'prod{i}'), 'unit': get(row, f'unit{i}'), 'valor': get(row, f'valor{i}')}
                for i in range(1, 8) if get(row, f'prod{i}') and get(row, f'prod{i}') != '-'
            ],
            'outro_espec': get(row, 'outro_espec'),
            'desconto': get(row, 'desconto'),
            'frete': get(row, 'frete'),
            'total': get(row, 'total'),
            'falta_pagar': get(row, 'falta_pagar'),
            'parcelas': [
                {'forma': get(row, f'forma_pgto{i}'), 'valor': get(row, f'valor_pgto{i}'), 'data': get(row, f'data_pgto{i}'), 'pago': get(row, f'pagou{i}')}
                for i in range(1, 4) if get(row, f'forma_pgto{i}') and get(row, f'forma_pgto{i}') != '-'
            ],
            'data_entrega': get(row, 'data_entrega'),
            'modalidade': get(row, 'modalidade'),
            'destinatario': get(row, 'destinatario'),
            'cep': get(row, 'cep'),
            'rua': get(row, 'rua'),
            'numero': '',
            'complemento': get(row, 'complemento'),
            'bairro': get(row, 'bairro'),
            'cidade': get(row, 'cidade'),
            'obs_fabrica': get(row, 'obs_fabrica'),
            'info_motoboy': get(row, 'info_motoboy'),
            'cdh': get(row, 'cdh'),
            'negociacao': get(row, 'negociacao'),
        }

    out_path = Path('pocs/sheets-analysis/results/exemplos_casos_uso.json')
    out_path.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'\n\nJSON salvo → {out_path}')
    print(f'Casos encontrados: {list(output.keys())}')

if __name__ == '__main__':
    main()
