from maria_cacau.core.network.api import API


class DeliveriesAPI(API):
    @property
    def path(self) -> str:
        return "/orders/deliveries"

    def for_date(self, date: str) -> "DeliveriesAPI":
        self.parameters.params = {"date": date}
        return self


class PaymentsPendentAPI(API):
    @property
    def path(self) -> str:
        return "/orders/payments-pendent"

    def for_date(self, date: str) -> "PaymentsPendentAPI":
        self.parameters.params = {"date": date}
        return self
