"""Lógica de negócio para obter as deliveries e pagamentos pendentes."""
from dataclasses import dataclass

from pandas.core.series import Series

from maria_cacau.core import errors
from maria_cacau.core.sheets.sheet_columns import SheetColumns as SColumns, SheetData as SData
from .repository import OrdersRepository
from .models import DeliveryModel, OrdersModel


class OrdersUseCase():
    def __init__(self) -> None:
        self.cache: dict = {}
        self.repository = OrdersRepository()

    def get_orders(self, date_: str) -> OrdersModel:
        if date_ in self.cache:
            return self.cache[date_]

        try:
            data = self.repository.get_orders_data(date_)

            delivery = self.get_deliveries_count(data)
            report = f'Para o dia {self.fix_date(date_)} temos: {delivery.deliveries_sum} pedido(s)\n{delivery.deliveries}\n\n'

            pendent_payments = self.get_pendet_payments(data)
            report += pendent_payments

            self.cache[date_] = report
            return OrdersModel(report=report, chartData=delivery.deliveries_count)

        except Exception:
            self.popup.show_popup(errors.E001)
    
    def get_deliveries_count(self, data: Series) -> DeliveryModel:
        try:
            deliveries_count: Series = data[SColumns.DELIVERY_TYPE.value].value_counts()
            delivery_type: list = deliveries_count.index.tolist()

            deliveries = {}
            for x in range(len(deliveries_count)):
                deliveries[delivery_type[x]] = deliveries_count.iloc[x]
            
            return DeliveryModel(deliveries=deliveries, deliveries_count=deliveries_count)

        except Exception:
            self.popup.show_popup(errors.E001)
    
    def get_pendet_payments(self, data: Series) -> str:
        payments: Series = data[SColumns.PAYMENT_PENDENT.value]

        pendent = ''
        for x in range(len(payments)):
            not_fabric = data[SColumns.DELIVERY_TYPE.value][x] != SData.DELIVERY_FABRIC.value
            value_pendent = payments[x]

            if value_pendent < 0 and not_fabric:
                pendent += '\n{} -> {} | {} | {} | $: {}\n'.format(
                    data[SColumns.ORDER.value][x], 
                    data[SColumns.RECIPIENT.value][x],
                    data[SColumns.DELIVERY_TYPE.value][x], 
                    data[SColumns.PHONE.value][x], 
                    value_pendent)
        
        if pendent == '':
            return 'Sem nenhuma pendência!'
        return f'Falta(m) pagar:\n{pendent}'
        
