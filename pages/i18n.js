import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

import indexFR from '../public/locales/fr/index.json';
import indexEN from '../public/locales/en/index.json';
import communityFR from '../public/locales/fr/community.json';
import communityEN from '../public/locales/en/community.json';

// the translations
const resources = {
  en: {
    index: indexEN,
    community: communityEN
  },
  fr: {
    index: indexFR,
    community: communityFR
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
    ns: ["index", "community"],
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
