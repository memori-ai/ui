import type { i18n as I18nInstance } from 'i18next'
import {
  MEMORI_TABLE_LOCALES,
  type MemoriSupportedLocale,
} from './tableLocales'

export interface AddMemoriTableToI18nOptions {
  /**
   * i18next namespace to merge `table` under.
   * @default 'translation' (keys: `table.searchPlaceholder`, …)
   */
  namespace?: string
}

/**
 * Merges Memori UI `table.*` strings into an existing i18next instance for every shipped locale.
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
    instance.addResourceBundle(lng, namespace, { table }, true, true)
  }
}
