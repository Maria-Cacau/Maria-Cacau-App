"""Área de entregas pendentes: controller da view."""

import time

from maria_cacau.core.error import ErrorModel
from maria_cacau.core.observability import observability

from ..domain.events import FeatureEvents as ObsEv
from ..domain.models import OrdersViewData
from ..domain.signals import signals
from .view import OrdersView
from .viewmodel import OrdersViewModel


class OrdersController():
    def __init__(self) -> None:
        self.view = OrdersView()
        self.viewmodel = OrdersViewModel()

        self._setupActions()

    def _setupActions(self) -> None:
        self.view.generate_report.connect(self.on_generate_report)
        self.view.copy_report.connect(self.on_copy_report)
        self.view.copy_graph.connect(self.on_copy_graph)
        self.view.download_graph.connect(self.on_download_graph)

        signals.report_generated.connect(self.handle_report_generated)
        signals.error.connect(self.handle_error)


    ## Ações de Botões
    def on_generate_report(self) -> None:
        self.last_date_selected = self.view.get_date()
        self.viewmodel.on_generate(self.last_date_selected)
        self.view.prepare_to_fetch()

        self._start = time.time()
        observability.log(ObsEv.GENERATE_REPORT_ACTION)

    def on_copy_report(self) -> None:
        observability.log(ObsEv.COPY_REPORT_ACTION)

    def on_copy_graph(self) -> None:
        observability.log(ObsEv.COPY_GRAPH_ACTION)

    def on_download_graph(self) -> None:
        observability.log(ObsEv.DOWNLOAD_GRAPH_ACTION)


    ## Respostas
    def handle_error(self, error: ErrorModel) -> None:
        self.view.popup.show(error.to_popup())

    def handle_report_generated(self, data: OrdersViewData) -> None:
        self.view.update_data(data)

        duration_s = round(time.time() - self._start, 1)
        observability.log(ObsEv.QUERY, date=self.last_date_selected, duration_s=duration_s)

        self._start = None
