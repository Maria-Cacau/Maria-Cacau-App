from enum import Enum


class FeatureEvents(Enum):
    SHEET_CONNECTED = "Planilha conectada"
    SHEET_SELECTED  = "Planilha selecionada"
    SHEET_ERROR     = "Erro ao conectar planilha"
