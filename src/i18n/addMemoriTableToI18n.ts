import type { i18n as I18nInstance } from 'i18next'
import {
  MEMORI_TABLE_LOCALES,
  type MemoriSupportedLocale,
} from './tableLocales'
import { MEMORI_ALERT_LOCALES, MEMORI_EXPANDABLE_LOCALES } from './uiLocales'

export interface AddMemoriTableToI18nOptions {
  /**
   * i18next namespace to merge UI strings under.
   * @default 'translation' (keys: `table.*`, `expandable.*`, `alert.*`)
   */
  namespace?: string
}

/**
 * Merges Memori UI `table.*`, `expandable.*`, and `alert.*` strings into an
 * existing i18next instance for every shipped locale.
 * Call after `i18n.init()` (or use `await` if your init is async).
 *
 * @example
 * ```ts
 * import i18n from 'i18next'
 * import { addMemoriTableToI18n } from '@memori.ai/ui'
 *
 * await i18n.init({ ... })
 * addMemoriTableToI18n(i18n)
 * ```
 */
export function addMemoriTableToI18n(
  instance: I18nInstance,
  options?: AddMemoriTableToI18nOptions,
): void {
  const namespace = options?.namespace ?? 'translation'
  for (const lng of Object.keys(
    MEMORI_TABLE_LOCALES,
  ) as MemoriSupportedLocale[]) {
    const table = MEMORI_TABLE_LOCALES[lng]
    const expandable = MEMORI_EXPANDABLE_LOCALES[lng]
    const alert = MEMORI_ALERT_LOCALES[lng]
    instance.addResourceBundle(
      lng,
      namespace,
      { table, expandable, alert },
      true,
      true,
    )
  }
}
