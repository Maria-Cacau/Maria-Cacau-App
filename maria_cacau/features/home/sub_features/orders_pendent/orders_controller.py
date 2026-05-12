"""Área de entregas pendentes: controller da view."""

from maria_cacau.features.home.sub_features.orders_pendent.orders_view import OrdersView

class OrdersController(): 
    def __init__(self) -> None:
        self.view = OrdersView()
        self._setupActions()

    def _setupActions(self) -> None:
        self.view.generate_report.connect(self.handle_generate_report)
        self.view.copy_report.connect(self.handle_copy_report)
        self.view.download_report.connect(self.handle_download_report)
        self.view.copy_graph.connect(self.handle_copy_graph)
        self.view.download_graph.connect(self.handle_download_graph)
    
    ## Ações de Botões
    def handle_generate_report(self) -> None:
        # Lógica para gerar o relatório de entregas pendentes
        pass
    
    def handle_copy_report(self) -> None:
        # Lógica para copiar o relatório para a área de transferência
        pass

    def handle_download_report(self) -> None:
        # Lógica para baixar o relatório como um arquivo
        pass

    def handle_copy_graph(self) -> None:
        # Lógica para copiar o gráfico para a área de transferência
        pass

    def handle_download_graph(self) -> None:
        # Lógica para baixar o gráfico como um arquivo
        pass