import { createInstance, type i18n as I18nInstance } from 'i18next'
import {
  MEMORI_TABLE_LOCALES,
  type MemoriSupportedLocale,
} from './tableLocales'

const resources = Object.fromEntries(
  (Object.keys(MEMORI_TABLE_LOCALES) as MemoriSupportedLocale[]).map(lng => [
    lng,
    { translation: { table: MEMORI_TABLE_LOCALES[lng] } },
  ]),
)

/**
 * Preconfigured i18next instance with Memori UI `table.*` strings for all shipped locales.
 * Use with [`MemoriI18nProvider`](./MemoriI18nProvider.tsx) or merge into your own instance via `addMemoriTableToI18n`.
 */
export const memoriI18n: I18nInstance = createInstance({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'it', 'fr', 'es', 'de'],
  nonExplicitSupportedLngs: true,
  interpolation: {
    escapeValue: false,
  },
})

memoriI18n.init()
