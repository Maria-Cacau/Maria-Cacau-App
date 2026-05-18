# Nota Fiscal

Funcionalidade de emissão de nota fiscal. Atualmente exibe um placeholder "Em breve" — a implementação anterior foi descontinuada e a nova ainda não foi iniciada.

## Status

**Em breve.** A forma como a nota fiscal era gerada anteriormente foi descontinuada. A implementação futura consumirá a API do **Tiny/OList** diretamente, o que representa uma mudança completa no fluxo.

## Arquitetura atual

Apenas `presentation/` — sem `domain/` ou `data/`, pois não há lógica nem chamada de rede.

```
nota_fiscal/
├── controller.py   → NotaFiscalController
└── view.py         → NotaFiscalView
```

## Arquitetura futura (Tiny/OList)

Quando implementada, a feature precisará das três camadas:

```
nota_fiscal/
├── domain/         → models, use_case, signals, events
├── data/           → apis, mapper, repository  ← consumo da API Tiny/OList
└── presentation/   → controller, view, viewmodel
```

O fluxo seguirá o mesmo padrão da feature `delivery` — ver [delivery/README.md](../delivery/README.md) como referência.
