import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

import indexFR from '../public/locales/fr/index.json';
import indexEN from '../public/locales/en/index.json';
import communityFR from '../public/locales/fr/community.json';
import communityEN from '../public/locales/en/community.json';
import contributeFR from '../public/locales/fr/contribute.json';
import contributeEN from '../public/locales/en/contribute.json';
import cookiesFR from '../public/locales/fr/cookies.json';
import cookiesEN from '../public/locales/en/cookies.json';
import legalFR from '../public/locales/fr/legal.json';
import legalEN from '../public/locales/en/legal.json';
import resourcesFR from '../public/locales/fr/resources.json';
import resourcesEN from '../public/locales/en/resources.json';
import statusFR from '../public/locales/fr/status.json';
import statusEN from '../public/locales/en/status.json';
import showcaseFR from '../public/locales/fr/showcase/index.json';
import showcaseEN from '../public/locales/en/showcase/index.json';
import fastocheFR from '../public/locales/fr/showcase/fastoche.json';
import fastocheEN from '../public/locales/en/showcase/fastoche.json';
import leximpactFR from '../public/locales/fr/showcase/lexImpact.json';
import leximpactEN from '../public/locales/en/showcase/lexImpact.json';
import taxippFR from '../public/locales/fr/showcase/taxIpp.json';
import taxippEN from '../public/locales/en/showcase/taxIpp.json';
import ratesrebatesFR from '../public/locales/fr/showcase/ratesRebates.json';
import ratesrebatesEN from '../public/locales/en/showcase/ratesRebates.json';
import mesaidesFR from '../public/locales/fr/showcase/mesAides.json';
import mesaidesEN from '../public/locales/en/showcase/mesAides.json';
import componentsFR from '../public/locales/fr/components.json';
import componentsEN from '../public/locales/en/components.json';

// the translations
const resources = {
  en: {
    index: indexEN,
    community: communityEN,
    contribute: contributeEN,
    cookies: cookiesEN,
    legal: legalEN,
    resources: resourcesEN,
    status: statusEN,
    showcase: showcaseEN,
    fastoche: fastocheEN,
    leximpact: leximpactEN,
    taxipp: taxippEN,
    ratesrebates: ratesrebatesEN,
    mesaides: mesaidesEN,
    components: componentsEN    
  },

  fr: {
    index: indexFR,
    community: communityFR,
    contribute: contributeFR,
    cookies: cookiesFR,
    legal: legalFR,
    resources: resourcesFR,
    status: statusFR,
    showcase: showcaseFR,
    fastoche: fastocheFR,
    leximpact: leximpactFR,
    taxipp: taxippFR,
    ratesrebates: ratesrebatesFR,
    mesaides: mesaidesFR,
    components: componentsFR,
  }
};

const switchLanguage = () => {
  return (i18n.language == 'fr') ? 'en' : 'fr'
}

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    ns: ["index", "community", "contribute", "cookies", "legal", "resources", "status", "showcase", "fastoche", "leximpact", "mesaides", "ratesrebates", "taxipp"],
    defaultNS: "index",
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    resources,
    debug: true,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: true, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export {i18n, switchLanguage, changeLanguage}
