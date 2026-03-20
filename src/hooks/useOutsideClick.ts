import * as React from 'react'

/**
 * Invokes `onOutside` when a pointer event occurs outside `ref.current`.
 */
export function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  onOutside: () => void,
  enabled = true,
): void {
  const onOutsideRef = React.useRef(onOutside)
  onOutsideRef.current = onOutside

  React.useEffect(() => {
    if (!enabled) {
      return
    }
    function handle(e: MouseEvent | TouchEvent) {
      const el = ref.current
      const target = e.target as Node | null
      if (!el || !target || el.contains(target)) {
        return
      }
      onOutsideRef.current()
    }
    document.addEventListener('mousedown', handle)
    document.addEventListener('touchstart', handle)
    return () => {
      document.removeEventListener('mousedown', handle)
      document.removeEventListener('touchstart', handle)
    }
  }, [enabled, ref])
}
