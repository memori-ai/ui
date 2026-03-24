import * as React from 'react'

const QUERY = '(min-width: 640px)'

/**
 * Whether the viewport is wide enough to show the full leading block (pages 1–5 + … + last).
 * Below this breakpoint, pagination falls back to the shorter windowed pattern.
 */
export function usePaginationLeadingBlockEnabled(): boolean {
  return React.useSyncExternalStore(
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
