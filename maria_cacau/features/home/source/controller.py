from ..sub_features import *
from .models import HomeFeaturesModel
from .view import HomeView

_IMAGE_PATH = "maria_cacau/assets/images/background.png"


class HomeController:
    def __init__(self) -> None:
        self._summary     = SummaryController()
        self._deliveries  = DeliveryController()
        self._cpf         = CpfValidationController()

        self.view = HomeView(_IMAGE_PATH)
        self.setup_view()

    def setup_view(self) -> None:
        features = HomeFeaturesModel(
            summary      = self._summary.view.root,
            deliveries   = self._deliveries.view.root,
            nota_fiscal  = NotaFiscalController().view.root,
            cpf          = self._cpf.view.root,
            shipping_rate= ShippingRateController().view.root,
        )

        self.view.setup_layout(features)
