"""Eventos relacionados às entregas pendentes."""

from enum import Enum


class FeatureEvents(Enum):
    GENERATE_REPORT_ACTION = 'Generate report triggered'
    COPY_REPORT_ACTION = 'Copy report triggered'
    COPY_GRAPH_ACTION = 'Copy graph triggered'
    DOWNLOAD_GRAPH_ACTION = 'Download graph triggered'

    QUERY = 'QUERY  feature=entregas'
