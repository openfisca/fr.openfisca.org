# fr.openfisca.org

## [FR] Introduction

[OpenFisca](http://openfisca.org/fr) est un logiciel libre de micro-simulation.  
Ceci est le code source du [site web](http://fr.openfisca.org) de la communauté traitant du modèle socio-fiscal français.

## [EN] Introduction

[OpenFisca](http://openfisca.org/en) is a versatile microsimulation free software.  
This is the source code of the [web site](http://fr.openfisca.org) for the community working on the french tax and benefit system.

## Install

```sh
yarn install
```

## Run locally

```sh
yarn run build
yarn run dev
```

## Run on a server

```sh
yarn run build
yarn run start
```

Learn more about the server's production configuration for `fr.openfisca.org` on the [openfisca-ops repository](https://www.github.com/openfisca/openfisca-ops).

## Tracking

fr.openfisca.org uses [Matomo](https://matomo.org/) (formerly Piwik) to track visits. The tracking is configured in `piwik.config.json`. Change the information there if you are running a seperate Piwik or Matomo instance.
