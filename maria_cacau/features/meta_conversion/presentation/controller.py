"""Controller da feature Meta Conversion: conecta signals da view ao ViewModel e trata respostas."""

from datetime import datetime

from maria_cacau.core.error import ErrorModel
from maria_cacau.core.observability import observability

from ..domain.events import FeatureEvents as ObsEv
from ..domain.models import ConversionOrderModel
from ..domain.signals import signals
from ..domain.use_case import can_retry
from .view import MetaConversionView
from .viewmodel import MetaConversionViewModel


class MetaConversionController:
    def __init__(self) -> None:
        self.view      = MetaConversionView()
        self.viewmodel = MetaConversionViewModel()
        self._number: str | None = None
        self._setup_actions()

    def _setup_actions(self) -> None:
        self.view.search_requested.connect(self.on_search)
        self.view.send_requested.connect(self.on_send)

        signals.order_loaded.connect(self.handle_order_loaded)
        signals.order_failed.connect(self.handle_order_failed)
        signals.sent.connect(self.handle_sent)
        signals.send_failed.connect(self.handle_send_failed)

    ## Ações

    def on_search(self) -> None:
        number = self.view.get_number().strip()
        if not number:
            return
        observability.log(ObsEv.SEARCH_ACTION)
        self.view.prepare_search()
        self.viewmodel.search(number)

    def on_send(self) -> None:
        if not self._number:
            return
        observability.log(ObsEv.SEND_ACTION)
        self.view.prepare_send()
        self.viewmodel.send(self._number)

    ## Respostas

    def handle_order_loaded(self, order: ConversionOrderModel) -> None:
        # O número devolvido pelo backend já vem completo (`26512` → `26512,0`) — é ele que vai no envio.
        self._number = order.number
        self.view.show_order(order)

    def handle_order_failed(self, error: ErrorModel) -> None:
        self._number = None
        self.view.show_placeholder()
        self._show_error(error)

    def handle_sent(self) -> None:
        self.view.show_sent(datetime.now().strftime("%d/%m/%Y"))
        observability.log(ObsEv.SENT, order=self._number)

    def handle_send_failed(self, error: ErrorModel) -> None:
        self.view.finish_send_error(can_retry(error))
        self._show_error(error)

    def _show_error(self, error: ErrorModel) -> None:
        observability.log(ObsEv.ERROR, code=error.code)
        self.view.popup.show(error.to_popup())
