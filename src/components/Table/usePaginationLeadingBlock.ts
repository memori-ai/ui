// Use the shim instead of React.useSyncExternalStore so the hook works under
// React 17 (where the API is unavailable). The shim re-exports the native hook
// on React 18+.
import { useSyncExternalStore } from 'use-sync-external-store/shim'

const QUERY = '(min-width: 640px)'

/**
 * Whether the viewport is wide enough to show the full leading block (pages 1–5 + … + last).
 * Below this breakpoint, pagination falls back to the shorter windowed pattern.
 */
export function usePaginationLeadingBlockEnabled(): boolean {
  return useSyncExternalStore(
    onStoreChange => {
      if (typeof window === 'undefined') {
        return () => {}
      }
      const mq = window.matchMedia(QUERY)
      const run = () => onStoreChange()
      mq.addEventListener('change', run)
      return () => mq.removeEventListener('change', run)
    },
    () =>
      typeof window !== 'undefined' ? window.matchMedia(QUERY).matches : true,
    () => true,
  )
}
