"""Eventos relacionados ao resumo de produtos por período."""

from enum import Enum


class FeatureEvents(Enum):
    GENERATE_REPORT_ACTION   = 'Generate report triggered'
    COPY_REPORT_ACTION       = 'Copy report triggered'
    COPY_GRAPH_ACTION        = 'Copy graph triggered'
    DOWNLOAD_GRAPH_ACTION    = 'Download graph triggered'
    CHANGE_CHART_TYPE_ACTION = 'Change chart type triggered'

    QUERY = 'QUERY  feature=products_resume'
