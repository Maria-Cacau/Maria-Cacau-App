# Shipping Rate

Funcionalidade de consulta de frete. Atualmente exibe um placeholder "Em breve" — a implementação anterior foi descontinuada antes de ser concluída.

## Status

**Em breve.** A implementação futura consumirá a API do **Melhor Envio**, que exige além do CEP de origem e destino, informações sobre as dimensões da caixa (altura, largura, comprimento) e peso. Isso representa um fluxo mais complexo do que uma simples consulta por CEP.

## Arquitetura atual

Apenas `presentation/` — sem `domain/` ou `data/`, pois não há lógica nem chamada de rede.

```
shipping_rate/
├── controller.py   → ShippingRateController
└── view.py         → ShippingRateView
```

## Arquitetura futura (Melhor Envio)

Quando implementada, a feature precisará das três camadas:

```
shipping_rate/
├── domain/         → models, use_case, signals, events
├── data/           → apis, mapper, repository  ← consumo da API Melhor Envio
└── presentation/   → controller, view, viewmodel
```

O fluxo seguirá o mesmo padrão da feature `delivery` — ver [delivery/README.md](../delivery/README.md) como referência.
