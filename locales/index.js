import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation from './en/translation';

const resources = {
  en: {
    translation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
