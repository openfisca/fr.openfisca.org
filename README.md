# fr.openfisca.org

## [FR] Introduction

[OpenFisca](http://openfisca.org/fr) est un logiciel libre de micro-simulation.
Ceci est le code source du [site web](http://fr.openfisca.org) de la communauté traitant du modèle socio-fiscal français.

## [EN] Introduction

[OpenFisca](http://openfisca.org/en) is a versatile microsimulation free software.
This is the source code of the [web site](http://fr.openfisca.org) for the community working on the french tax and benefit system.

## Install

> This project uses [Node.js](https://nodejs.org), [Next.js](https://github.com/zeit/next.js) and [React](https://reactjs.org).

To install this project's dependencies, go to its directory and run:
```sh
npm install
```

## Run

* To run the website locally in a development mode, call:
```sh
npm run dev
# Expected result example:
# DONE  Compiled successfully in 2285ms                                 10:22:29 PM
# > Ready on http://localhost:3000
```

* To run the website in a production mode, build it then start it with:
```sh
npm run build
# Expected result example:
# > next build

npm start
# Expected result example:
# > next start
# > Ready on http://localhost:3000
```

> Learn more about the server's production configuration for `fr.openfisca.org` on the [openfisca-ops repository](https://www.github.com/openfisca/openfisca-ops).

:tada: In your browser, the website is available at this address: `http://localhost:3000`


## Integration tests

This code uses [Watai](https://github.com/MattiSG/Watai/wiki) framework for integration testing.

### Install integration tests environment

To run the tests with Watai, we need the Java JRE and a Selenium standalone server.

#### Install Java JRE

Check if a Java Runtime Environment (JRE) is already installed on your environment with:
```
java -version
# Expected answer example: java version "1.8.0_40"
```

If you get an error, download Java last `JRE` version on the [Oracle website](http://www.oracle.com/technetwork/java/javase/downloads/jre9-downloads-3848532.html).

#### Install Selenium

Download the standalone Selenium server on the [official website](https://www.seleniumhq.org/download/).

Your download result is a Java `.jar` file (e.g., `selenium-server-standalone-3.4.0.jar`)

Move this file to the desired directory.
In this example, we will save it to: `/opt/local/lib/selenium`

And register the jar full path in `$SELENIUM` environment variable:
```sh
export SELENIUM=/opt/local/lib/selenium/selenium-server-standalone-3.4.0.jar
```

To test your installation, run:
```sh
java -jar $SELENIUM
# Expected answer example:
# 15:26:11.981 INFO - Selenium build info: version: '3.4.0', revision: 'unknown'
# 15:26:11.982 INFO - Launching a standalone Selenium Server
# (...)
# 15:26:12.323 INFO - Selenium Server is up and running
```

Then, end it with Ctrl-C.


#### Select testing browser

To run the integration tests locally, you need a testing browser.
Default configuration in this project uses Chrome browser.

If you have Chrome, install `chromedriver` as follows:

```sh
sudo npm install --global chromedriver
```
This will add a chromedriver to your global environment.
Its installation directory (e.g., `/usr/local/lib/node_modules/chromedriver`) will be used in the next step.

If you don't have Chrome, update the browser name in `tests/integration/config.js`. E.g., for `firefox`:

```
    browser: 'firefox',
```
And this doesn't need further driver installation.

#### Link Chromedriver & Selenium

Go in the Selenium directory and add a (symbolic) link to the chrome driver:

```sh
cd `dirname $SELENIUM`
sudo ln -s /usr/local/lib/node_modules/chromedriver/lib/chromedriver/chromedriver chromedriver
```

### Run tests

Every step is runned in a new terminal window.

1. Terminal window #1: in `fr.openfisca.org` directory, run the web site in developement mode
```sh
npm run dev
# Expected answer example:
# DONE  Compiled successfully in 2276ms                                3:25:21 PM
# > Ready on http://localhost:3000
```

2. Terminal window #2: run the selenium server
```sh
java -jar $SELENIUM
# Expected answer example:
# 15:26:11.981 INFO - Selenium build info: version: '3.4.0', revision: 'unknown'
# 15:26:11.982 INFO - Launching a standalone Selenium Server
# (...)
# 15:26:12.323 INFO - Selenium Server is up and running
```

3. Terminal window #3: in `fr.openfisca.org` directory, run the integration tests (this step opens Chrome browser)
```sh
npm run test:integration
# Expected answer example:
# (...)
# ⨁  fr.openfisca.org
# ✔  L'en-tête doit présenter ce que fait OpenFisca.
# ✔  La page d'accueil doit indiquer les informations de documentation.
```

## Tracking

fr.openfisca.org uses [Matomo](https://matomo.org/) (formerly Piwik) to track visits. The tracking is configured in `piwik.config.json`. Change the information there if you are running a seperate Piwik or Matomo instance.

