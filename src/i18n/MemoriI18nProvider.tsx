import React from 'react'
import { I18nextProvider } from 'react-i18next'
import type { i18n as I18nInstance } from 'i18next'
import { memoriI18n } from './i18n'

export interface MemoriI18nProviderProps {
  children: React.ReactNode
  /**
   * i18next instance. Defaults to `memoriI18n` (all `table.*` locales bundled).
   * Pass your own instance if you merged strings with `addMemoriTableToI18n`.
   */
  i18n?: I18nInstance
}

/**
 * Provides i18next context for Memori UI components that call `useTranslation()`
 * (Table, Expandable, …).
 */
export function MemoriI18nProvider({
  children,
  i18n = memoriI18n,
}: MemoriI18nProviderProps) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
