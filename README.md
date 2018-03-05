# fr.openfisca.org

## [FR] Introduction

[OpenFisca](http://openfisca.org/fr) est un logiciel libre de micro-simulation.  
Ceci est le code source du [site web](http://fr.openfisca.org) de la communauté traitant du modèle socio-fiscal français.

## [EN] Introduction

[OpenFisca](http://openfisca.org/en) is a versatile microsimulation free software.  
This is the source code of the [web site](http://fr.openfisca.org) for the community working on the french tax and benefit system.

## Install

```sh
yarn init (creates package.json)
yarn add next
yarn add react
yarn add react-dom
Create pages/index.js
add script "dev": "next" in the package.json
yarn install
yarn run dev
```

## Test

## Integration tests

This code uses [Watai](https://github.com/MattiSG/Watai/wiki) framework for integration tests.

### Install integration tests environment

#### Selenium
Watai needs a Selenium standalone server and describes installation instructions in its [documentation](https://github.com/MattiSG/Watai/wiki/Installing#selenium-server).

To test your installation, run: 

```sh
sudo selenium
```

Or, without administrator's rights: 

```sh
java -jar $SELENIUM
```  

where `$SELENIUM` contains a path to Selenium standalone server jar file (e.g. `/usr/local/lib/node_modules/selenium-server/lib/runner/selenium-server-standalone-3.4.0.jar`).

Then, end it with Ctrl-C.


#### Chromedriver
To run the tests in development mode, you will need to install `chromedriver` as `tests/integration/config.js` is pre-configured to use Chrome browser:

```sh
sudo npm install —global chromedriver
```
This will add a chromedriver to your global environment (e.g., `/usr/local/lib/node_modules/chromedriver`).

#### Link Chromedriver & Selenium

Add chromedriver reference to selenium server by creating a symbolic link to the driver in selenium directory:

```sh
cd `dirname $SELENIUM`
sudo ln -s /usr/local/lib/node_modules/chromedriver/lib/chromedriver/chromedriver chromedriver

```

### Run tests

1. Run the web site in developement mode:

```sh
npm run dev
```

2. In a new terminal, run the selenium server:
```sh
java -jar $SELENIUM 
```

3. In an other terminal, run the integration tests (this step opens a new Chrome window):
```sh
npm run test
```
