"""Leitura e filtragem da planilha Excel para uso nas features."""

#    Nessa classe é feita APENAS criação das planilha já com as filtragens necessessárias
# que serão usadas, mas não pe feita nenhuma anáise. Além disso é feito os tratamento de
# erros, sendo cada erro identificado com um código.

from pandas import read_excel
from pandas.core.frame import DataFrame

from maria_cacau.core import errors
from maria_cacau.design_system.gui_popup import GuiPopup


class Analise:
    def __init__(self) -> None:
        super(Analise, self).__init__()

        self.arq:DataFrame = None                                                                       # Atributo: Guarda a tabela com todas as colunas que VÃO SER USADAS apenas.
        self.arqUsados:dict = {}                                                                        # Atributo: Guarda os Dataframes que já foram filtrados usados!

        self.dtsPed:dict = {}                                                                           # Atributo: Guarda as datas e a quantidade de pedidos

        self.colsFiltro:dict = {                                                                        # Atributo: Guarda as colunas que vão ser usadas no geral
            "Sage":['PEDIDO','Modal','Destinatário','CPF','EMAIL','CEP','Rua','Compl.','Bairro','Cidade-UF','$FRETE','TOTAL','TEL','Evento'],
            "Envio":['PEDIDO','Modal','NOME COMPRADOR','TEL','EMAIL','CEP','Rua','Compl.','Bairro','Cidade-UF','CPF','Evento'],
            "Pula Modal":['MOTOBOY', 'GUARITA', 'FEIRA', 'FABRICA', 'ENTREGA'],
            "Entrega":['PEDIDO','Destinatário','Modal','TEL','Quanto\nfalta\npagar?','DATA ENTREGA'],
            "Produtos":['PEDIDO','DATA ENTREGA','Modal','TEL','Q1','Prod1','Q2','Prod2','Q3','Prod3','Q4','Prod4','Q5','Prod5','Q6','Prod6','Q7','Prod7','Outro\nEspec.'],
            "Belga":['Prod1','Prod2','Prod3','Prod4','Prod5','Prod6','Prod7','Outro\nEspec.','Modal','Evento'],
            "gSage":['Destinatário','CPF','EMAIL','CEP','Rua','Compl.','Bairro','Cidade-UF','$FRETE','TOTAL','Belga','PEDIDO','Modal','TEL'],
            "gLbl":["NOME", "CPF", "EMAIL", "CEP", "RUA", "COMPL", "BAIRRO", "CIDADE", "FRETE", "TOTAL", "BELGA?", "PEDIDO", "ENTREGA","TEL"]
        }
        self.allColsFiltro:list = list(set(self.colsFiltro["Sage"] + self.colsFiltro["Envio"] + self.colsFiltro["Entrega"] + self.colsFiltro["Produtos"]))

        self.popUp:GuiPopup = GuiPopup()                                                               # Atributo: Cria os popUp

    ## Método especial: Pega as colunas já filtradas
    def get_col(self, k_:str) -> list: return self.colsFiltro[k_]

    ## Método especial: Pega as datas
    def get_dates(self) -> dict: return self.dtsPed

    ## Método especial: Faz a leitura do arquivo
    def load_file(self, local_:str) -> bool:
        if (local_ == ""): return False
        if ((local_[-5:] != ".xlsx")):
            self.popUp.show_popup(errors.A001)
            return False

        try:
            arq = read_excel(local_)                                                                    # Faz a leitura do arquivo
            self.arq = arq[arq[arq.columns[0]].isnull() == False][self.allColsFiltro]                  # Tira as linhas em branco (no meio e no final)
        except:
            self.popUp.show_popup(errors.A002)
            return False

        try:
            qDts = self.arq["DATA ENTREGA"].value_counts()                                              # Pega a quantidade de datas que tem
            dts = qDts.index.tolist()
            self.dtsPed = {str(dts[x])[:10]:int(qDts[x]) for x in range(len(dts))}
        except:
            self.popUp.show_popup(errors.A003)
            return False

        qLinhas = len(self.arq.index)
        if (qLinhas == 0):
            self.popUp.show_popup(errors.A004)
            return False

        self.popUp.show_popup(errors.planilha_ok(qLinhas), "I")

        del arq, dts, qDts, qLinhas
        return True

    ## Método especial: Devolve a planilha filtrada
    def get_data(self, l_:list, d_:str) -> DataFrame:
        if (d_ in self.arqUsados.keys()): return self.arqUsados[d_][l_]                                # Memoization
        self.arqUsados[d_] = self.arq.loc[(self.arq['DATA ENTREGA'] == f"{d_} 00:00:00")].reset_index().drop(columns=['index'])
        return self.arqUsados[d_][l_]

    ## Método especial: Devolve a planilha filtrada com exceções a mais
    def get_dados(self, l_:list, d_:str) -> DataFrame:
        arq = self.get_data(l_, d_)
        return arq.loc[(arq['Modal'] != 'MOTOBOY') & (arq['Evento'] != 'Amostras')].reset_index().drop(columns=['index','Evento'])
