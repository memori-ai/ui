import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
} from 'react'

/**
 * How a touch press opens the tooltip. Mouse and keyboard are unaffected.
 *
 * - `auto`: a tap opens it only when the trigger has nothing to do on tap —
 *   a disabled control, or content with no interactive element.
 * - `tap`: every tap opens it, after the child's own click runs.
 * - `longPress`: press and hold opens it; a short tap only runs the action.
 * - `none`: touch never opens it.
 */
export type TooltipTouchBehavior = 'auto' | 'tap' | 'longPress' | 'none'

const LONG_PRESS_DELAY = 500
const LONG_PRESS_MOVE_TOLERANCE = 10

const DISABLED_SELECTOR =
  ':disabled, [aria-disabled="true"], .memori-button--disabled'

const INTERACTIVE_SELECTOR = [
  'a[href]',
  'button',
  'input',
  'select',
  'textarea',
  'summary',
  '[role="button"]',
  '[role="link"]',
  '[role="switch"]',
  '[role="checkbox"]',
  '[role="tab"]',
  '[role="menuitem"]',
  '[contenteditable="true"]',
].join(', ')

/** A tap has nothing to do on this trigger, so the tooltip is the answer. */
function isPassiveTrigger(trigger: HTMLElement) {
  if (trigger.querySelector(DISABLED_SELECTOR)) {
    return true
  }
  return !trigger.querySelector(INTERACTIVE_SELECTOR)
}

/**
 * Touch support for {@link Tooltip}. Base UI opens tooltips on hover and
 * keyboard focus only, so a finger never sees them. This hook opens the
 * tooltip from a touch press without stopping the click: the child's action
 * runs first, then the tooltip shows. Base UI's outside-press dismiss closes
 * it; scrolling closes it too.
 *
 * Handlers go on the trigger span, which also receives taps on a disabled
 * child (`pointer-events: none` in styles.css).
 */
export function useTouchTooltip(
  behavior: TooltipTouchBehavior,
  defaultOpen = false,
) {
  const [open, setOpen] = useState(defaultOpen)
  const pointerTypeRef = useRef<string>('')
  const startRef = useRef<{ x: number; y: number } | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => clearTimer, [clearTimer])

  useEffect(() => {
    // Hover-opened tooltips keep Base UI's own behavior on scroll.
    if (!open || pointerTypeRef.current !== 'touch') {
      return
    }
    const close = () => setOpen(false)
    window.addEventListener('scroll', close, { capture: true, passive: true })
    return () => {
      window.removeEventListener('scroll', close, { capture: true })
    }
  }, [open])

  const enabled = behavior !== 'none'

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    pointerTypeRef.current = event.pointerType
    clearTimer()
    if (!enabled || event.pointerType !== 'touch') {
      return
    }
    if (behavior === 'longPress') {
      startRef.current = { x: event.clientX, y: event.clientY }
      timerRef.current = setTimeout(() => {
        timerRef.current = null
        setOpen(true)
      }, LONG_PRESS_DELAY)
    }
  }

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const start = startRef.current
    if (timerRef.current === null || !start) {
      return
    }
    const dx = event.clientX - start.x
    const dy = event.clientY - start.y
    if (Math.hypot(dx, dy) > LONG_PRESS_MOVE_TOLERANCE) {
      clearTimer()
    }
  }

  const onPointerUp = () => {
    clearTimer()
    startRef.current = null
  }

  const onClick = (event: MouseEvent<HTMLElement>) => {
    // Safari's click is not always a PointerEvent, so read the type
    // captured at pointerdown.
    if (!enabled || pointerTypeRef.current !== 'touch') {
      return
    }
    if (behavior === 'longPress') {
      // The hold already opened it; the trailing click must not close it.
      return
    }
    if (behavior === 'auto' && !isPassiveTrigger(event.currentTarget)) {
      return
    }
    setOpen(prev => !prev)
  }

  const onContextMenu = (event: MouseEvent<HTMLElement>) => {
    // Android fires contextmenu on a long press; keep the system menu away
    // while the tooltip is what the hold asked for.
    if (behavior === 'longPress' && pointerTypeRef.current === 'touch') {
      event.preventDefault()
    }
  }

  /** True while the current press is a touch handled by this hook. */
  const isTouchPress = () => enabled && pointerTypeRef.current === 'touch'

  return {
    open,
    setOpen,
    isTouchPress,
    triggerProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
      onClick,
      onContextMenu,
    },
  }
}
