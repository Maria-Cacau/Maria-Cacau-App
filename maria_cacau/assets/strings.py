from maria_cacau import __app_name__, __company__, __version__, __year__

APP_TITLE = __app_name__

_ver_short = __version__

# ── Botões ────────────────────────────────────────────────────────────────────

BTN_LER_PLANILHA = "Ler planilha"
BTN_ATIVAR       = "Ativar"
BTN_ATUALIZAR    = "Atualizar"
BTN_OK           = "OK"
BTN_COPIAR       = "Copiar"
BTN_VERIFICAR    = "Verificar"
BTN_DOWNLOAD     = "Download"
BTN_SALVAR       = "Salvar"
BTN_BUSCAR       = "Buscar"
BTN_FECHAR       = "Fechar"
BTN_ENVIAR_META  = "Enviar para a Meta"

CHART_TYPE_BAR = "Barras"
CHART_TYPE_PIE = "Pizza"

# ── Estados das áreas de texto ────────────────────────────────────────────────

TXT_SEM_PLANILHA         = "Nenhuma planilha foi selecionada."
TXT_ATIVAR_INSTRUCAO     = 'Pressiona "ativar" para desbloquear essa área.'
TXT_OK_INSTRUCAO_ENTREGAS = 'Selecione uma data e pressione "OK" para gerar o resumo.'
TXT_OK_INSTRUCAO_PRODUTOS = 'Selecione o intervalo de datas e pressione "OK" para gerar o resumo dos produtos.'

# ── Menus ─────────────────────────────────────────────────────────────────────

MNU_ARQUIVO           = "Arquivo"
MNU_FUNCIONALIDADES   = "Funcionalidades"
MNU_SEGURANCA         = "Segurança"
MNU_AJUDA             = "Ajuda"

ACT_VALIDAR_CPF           = "Validador de CPF"
ACT_META_CONVERSAO        = "Enviar conversão para a Meta"
ACT_CONECTAR_PLANILHA     = "Conectar nova planilha"
ACT_PLANILHAS_CONECTADAS  = "Planilhas conectadas"
ACT_SELECIONAR_PLANILHA   = "Selecionar"
ACT_REMOVER_PLANILHA      = "Remover planilha"
ACT_CONFIGURAR_CERT       = "Configurar certificado"
ACT_LIMPAR_CERT           = "Limpar certificado"
ACT_DOCUMENTACAO          = "Documentação"
URL_DOCUMENTACAO          = "https://github.com/Maria-Cacau/.github/wiki"
ACT_REPORTAR_PROBLEMA     = "Reportar problema"
URL_REPORTAR_PROBLEMA     = "https://github.com/Maria-Cacau/.github/wiki/troubleshooting"
ACT_LANÇAMENTO            = "Atualizações"
URL_LANÇAMENTO            = "https://github.com/Maria-Cacau/Maria-Cacau-App/releases"

# ── Diálogos ──────────────────────────────────────────────────────────────────

DLG_CERT_TITULO        = "Selecione o certificado"
DLG_CERT_FILTRO        = "JSON (*.json)"
DLG_LIMPAR_CERT_TITULO = "Limpar certificado"
DLG_LIMPAR_CERT_MSG    = "Tem certeza que deseja remover o certificado salvo?"

DLG_PLANILHA_EXISTENTE_TITULO  = "Planilha já cadastrada"
DLG_PLANILHA_EXISTENTE_MSG     = 'Esta planilha já está salva com o nome "{nome}". Deseja renomear?'
DLG_REMOVER_PLANILHA_TITULO    = "Remover planilha"
DLG_REMOVER_PLANILHA_MSG       = 'Deseja remover a planilha "{nome}"? Esta ação não pode ser desfeita.'
DLG_RENOMEAR_TITULO            = "Renomear planilha"
DLG_RENOMEAR_MSG               = "Novo nome:"

DLG_CPF_TITULO                 = "Validador de CPF"
DLG_CPF_LBL_CPF               = "CPF:"

DLG_META_TITULO                = "Enviar conversão para a Meta"
DLG_META_GRP_PEDIDO            = "Pedido"
DLG_META_GRP_SITUACAO          = "Situação"
DLG_META_LBL_NUMERO            = "Número:"
DLG_META_PLACEHOLDER           = "Ex: 26512"
DLG_META_ERRO_TITULO           = "Erro {code}"
DLG_META_CAMPO_PEDIDO          = "Pedido"
DLG_META_CAMPO_CLIENTE         = "Cliente"
DLG_META_CAMPO_TELEFONE        = "Telefone"
DLG_META_CAMPO_EMAIL           = "E-mail"
DLG_META_CAMPO_VALOR           = "Valor total"
DLG_META_CAMPO_PAGAMENTO       = "1º pagamento"
DLG_META_CAMPO_NOME            = "Nome e sobrenome"
DLG_META_CAMPO_CEP             = "CEP"
DLG_META_CAMPO_CIDADE          = "Cidade / UF"

DLG_CONECTAR_TITULO            = "Conectar com planilha"
DLG_CONECTAR_LBL_LINK          = "Link da planilha:"
DLG_CONECTAR_LBL_NOME          = "Nome:"
DLG_CONECTAR_PLACEHOLDER_LINK  = "https://docs.google.com/spreadsheets/d/..."
DLG_CONECTAR_PLACEHOLDER_NOME  = "Ex: Maria Cacau"

# ── Labels ────────────────────────────────────────────────────────────────────

LBL_CPF_INSTRUCAO  = "INSIRA O CPF NO CAMPO ACIMA"
LBL_EM_BREVE       = "Em breve..."
LBL_PERIODO       = "Período:"
LBL_NAO_INFORMADO = "não informado"

LBL_META_INSTRUCAO  = "Digite o número do pedido e clique em Buscar."
LBL_META_PRONTO     = "✓ Pronto para enviar"
LBL_META_FALTANDO_DADOS = "⚠\ufe0e Dentro do prazo, porém faltando dados"
LBL_META_FORA_PRAZO     = "⚠\ufe0e Fora do prazo da Meta — não é possível enviar o pedido"
LBL_META_JA_ENVIADO = "✓ Já enviado para a Meta em {data}"
LBL_META_STATUS     = "✗ Status na Meta: {status}"
LBL_META_ENVIADO    = "✓ Enviado para a Meta em {data}"

# ── Status bar ────────────────────────────────────────────────────────────────

SB_SEM_CREDENCIAIS = "Credenciais não configuradas"
SB_SEM_PLANILHA    = "Credenciais: configuradas     Nenhuma planilha selecionada"
SB_PLANILHA        = "Credenciais: configuradas     Planilha selecionada: {nome} — {id}"
SB_CARREGANDO      = "Realizando consulta..."
SB_SUCESSO         = "Consulta realizada"
SB_COPYRIGHT       = f"v{_ver_short}  ·  © {__year__} {__company__}"
