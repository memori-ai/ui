import { useCallback } from 'react'
import {
  createAlertOptions,
  useAlertManager,
  type AlertSeverity,
} from '../../components/Alert'

/** Toast shortcut for demo feedback ("Copiato!", "Salvato", …). */
export function useNotify() {
  const manager = useAlertManager()
  return useCallback(
    (title: string, severity: AlertSeverity = 'success') => {
      manager.add(createAlertOptions({ title, severity, duration: 3000 }))
    },
    [manager],
  )
}

/** Copy to clipboard (best effort) and confirm with a toast. */
export function useCopy() {
  const notify = useNotify()
  return useCallback(
    (text: string) => {
      void navigator.clipboard?.writeText(text).catch(() => undefined)
      notify('Copiato!')
    },
    [notify],
  )
}
