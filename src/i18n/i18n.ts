import { createInstance, type i18n as I18nInstance } from 'i18next'

const resources = {
  en: {
    translation: [],
  },
  it: {
    translation: [],
  },
  es: {
    translation: [],
  },
  fr: {
    translation: [],
  },
  de: {
    translation: [],
  },
}

const i18n: I18nInstance = createInstance({
  resources,
  lng: 'en',
  fallbackLng: 'it',
  supportedLngs: ['en', 'it', 'fr', 'es', 'de'],
  nonExplicitSupportedLngs: true,
  interpolation: {
    escapeValue: false,
  },
})

i18n.init()

export default i18n
