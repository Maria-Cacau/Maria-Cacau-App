from maria_cacau import __app_name__, __version__, __year__, __company__

APP_TITLE = __app_name__

_ver_short = '.'.join(__version__.split('.')[:2])   # '5.0.0' → '5.0'

# ── Botões ────────────────────────────────────────────────────────────────────

BTN_LER_PLANILHA = "Ler planilha"
BTN_ATIVAR       = "Ativar"
BTN_ATUALIZAR    = "Atualizar"
BTN_OK           = "OK"
BTN_COPIAR       = "Copiar"
BTN_VERIFICAR    = "Verificar"
BTN_DOWNLOAD     = "Download"
BTN_SALVAR       = "Salvar"

# ── Estados das áreas de texto ────────────────────────────────────────────────

TXT_SEM_PLANILHA         = "Nenhuma planilha foi selecionada."
TXT_ATIVAR_INSTRUCAO     = 'Pressiona "ativar" para desbloquear essa área.'
TXT_OK_INSTRUCAO_ENTREGAS = 'Selecione uma data e pressione "OK" para gerar o resumo.'
TXT_OK_INSTRUCAO_PRODUTOS = 'Selecione o intervalo de datas e pressione "OK" para gerar o resumo dos produtos.'

# ── Menus ─────────────────────────────────────────────────────────────────────

MNU_ARQUIVO      = "Arquivo"
MNU_SEGURANCA    = "Segurança"
MNU_AJUDA        = "Ajuda"

ACT_CONECTAR_PLANILHA     = "Conectar nova planilha"
ACT_PLANILHAS_CONECTADAS  = "Planilhas conectadas"
ACT_CONFIGURAR_CERT       = "Configurar certificado"
ACT_LIMPAR_CERT           = "Limpar certificado"
ACT_DOCUMENTACAO          = "Documentação"
ACT_LIMPAR_CACHE          = "Limpar cache"
URL_DOCUMENTACAO          = "https://github.com/Gui25Reis/Maria-Cacau-Contagem/wiki"

# ── Diálogos ──────────────────────────────────────────────────────────────────

DLG_CERT_TITULO        = "Selecione o certificado"
DLG_CERT_FILTRO        = "JSON (*.json)"
DLG_LIMPAR_CERT_TITULO = "Limpar certificado"
DLG_LIMPAR_CERT_MSG    = "Tem certeza que deseja remover o certificado salvo?"

DLG_PLANILHA_EXISTENTE_TITULO  = "Planilha já cadastrada"
DLG_PLANILHA_EXISTENTE_MSG     = 'Esta planilha já está salva com o nome "{nome}". Deseja renomear?'
DLG_RENOMEAR_TITULO            = "Renomear planilha"
DLG_RENOMEAR_MSG               = "Novo nome:"

DLG_CONECTAR_TITULO            = "Conectar com planilha"
DLG_CONECTAR_LBL_LINK          = "Link da planilha:"
DLG_CONECTAR_LBL_NOME          = "Nome:"
DLG_CONECTAR_PLACEHOLDER_LINK  = "https://docs.google.com/spreadsheets/d/..."
DLG_CONECTAR_PLACEHOLDER_NOME  = "Ex: Maria Cacau"

# ── Labels ────────────────────────────────────────────────────────────────────

LBL_CPF_INSTRUCAO  = "INSIRA O CPF NO CAMPO ACIMA"
LBL_EM_BREVE       = "Em breve..."
LBL_PERIODO       = "Período:"

# ── Status bar ────────────────────────────────────────────────────────────────

SB_SEM_CREDENCIAIS = "Credenciais não configuradas"
SB_SEM_PLANILHA    = "Credenciais: configuradas     Nenhuma planilha selecionada"
SB_PLANILHA        = "Credenciais: configuradas     Planilha selecionada: {nome} — {id}"
SB_CARREGANDO      = "Realizando consulta..."
SB_SUCESSO         = "Consulta realizada"
SB_COPYRIGHT       = f"v{_ver_short}  ·  © {__year__} {__company__}"
