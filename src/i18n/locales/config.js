import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './en/translationEN.json'
import translationBR from './br/translationBR.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translationEN: translationEN
      },
      br: {
        translationBR: translationBR
      }
    },
    lng: 'en'
  })

export default i18n
