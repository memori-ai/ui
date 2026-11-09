import {
  useCallback,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type RefCallback,
} from 'react'

/**
 * Low-level click-to-toggle wiring for Base UI tooltips.
 *
 * Prefer {@link Tooltip}'s `openOnPress` prop for the common case:
 * `<Tooltip openOnPress content="…"><button>Info</button></Tooltip>`.
 *
 * Use this hook only when you need custom control (extra handlers, shared
 * state, non-standard anchors). Hover opens through Base UI with the trigger
 * attached synchronously (`flushSync`). A controlled `open` flip from a
 * nested button click does not — `stopPropagation` also blocks
 * `referencePress` dismiss, so Floating UI can mount the positioner with no
 * reference and stick at viewport 0,0. This hook supplies an explicit anchor.
 *
 * @example
 * ```tsx
 * // Preferred:
 * <Tooltip openOnPress content="Details"><button type="button">Info</button></Tooltip>
 *
 * // Advanced (manual wiring):
 * const press = usePressTooltip()
 * <Tooltip {...press.tooltipProps} slotProps={{ positioner: press.positionerProps }}>
 *   <button ref={press.anchorRef} type="button" {...press.pressTriggerProps}>Info</button>
 * </Tooltip>
 * ```
 */
export function usePressTooltip(defaultOpen = false) {
  const [open, setOpen] = useState(defaultOpen)
  const anchorRef = useRef<HTMLElement | null>(null)

  const pointerDownRef = useRef(false)

  const toggleOpen = useCallback((e: MouseEvent | PointerEvent) => {
    e.stopPropagation()
    setOpen(prev => !prev)
  }, [])

  const setAnchorRef = useCallback<RefCallback<HTMLElement>>(node => {
    anchorRef.current = node
  }, [])

  const pressTriggerProps = {
    onPointerDown: (e: PointerEvent) => {
      // A click focuses the trigger before `click`. That focus would open the
      // tooltip, and this click would then toggle it straight back shut.
      pointerDownRef.current = true
      e.stopPropagation()
    },
    onPointerUp: () => {
      pointerDownRef.current = false
    },
    onPointerCancel: () => {
      pointerDownRef.current = false
    },
    onClick: toggleOpen,
  } as const

  const positionerProps = {
    anchor: anchorRef,
    positionMethod: 'fixed' as const,
  }

  const tooltipProps = {
    open,
    onOpenChange: setOpen,
  } as const

  return {
    open,
    setOpen,
    anchorRef: setAnchorRef,
    pressTriggerProps,
    positionerProps,
    tooltipProps,
    /** True between pointerdown and pointerup on the press trigger. */
    isPointerDown: () => pointerDownRef.current,
  }
}
