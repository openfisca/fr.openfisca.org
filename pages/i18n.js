import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

import indexFR from '../static/language/fr/index.json';
import indexEN from '../static/language/en/index.json';

// the translations
const resources = {
  en: {
    translation: indexEN
  },
  fr: {
    translation: indexFR
  }
};

const switchLanguage = () => {
  return (i18n.language == 'fr') ? 'en' : 'fr'
}

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export {i18n, switchLanguage}
