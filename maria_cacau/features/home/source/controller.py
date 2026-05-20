from ..sub_features import *
from .models import HomeFeaturesModel
from .view import HomeView


class HomeController:
    def __init__(self) -> None:
        self._summary    = SummaryController()
        self._deliveries = DeliveryController()

        self.view = HomeView()
        self.setup_view()

    def setup_view(self) -> None:
        features = HomeFeaturesModel(
            summary    = self._summary.view.root,
            deliveries = self._deliveries.view.root,
        )

        self.view.setup_layout(features)
