import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from './locales/en/translation.json'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: enTranslation,
      },
    },
    interpolation: {
      // React already escapes values — no need for i18next to do it again
      escapeValue: false,
    },
  })

export default i18n

