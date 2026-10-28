import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'
import cx from 'classnames'
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo,
  type ReactElement,
  type Ref,
} from 'react'

import {
  useMemoriTheme,
  usePortalContainer,
} from '../../theme/MemoriUIProvider'
import type { Theme } from '../../theme/useTheme'
import { usePressTooltip } from './usePressTooltip'
import { useTouchTooltip, type TooltipTouchBehavior } from './useTouchTooltip'
import './styles.css'

/** Matches Base UI / Floating UI anchor positioning. */
type Side = 'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start'
type Align = 'start' | 'center' | 'end'

export type TooltipPlacement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end'

/** @deprecated Prefer `placement` with `top-start` / `top-end` / etc. */
export type TooltipLegacyAlign =
  | 'left'
  | 'right'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'

type TooltipRootChangeHandler = NonNullable<
  React.ComponentProps<typeof BaseTooltip.Root>['onOpenChange']
>

export interface TooltipProps {
  /**
   * Tooltip body (MUI / Ant Design `title`, Chakra `label`).
   */
  title?: React.ReactNode
  /**
   * @deprecated Use `title`.
   */
  content?: React.ReactNode
  children: React.ReactNode
  /**
   * Preferred placement (Floating UI `side` + `align`).
   * @default 'top'
   */
  placement?: TooltipPlacement | TooltipLegacyAlign
  /**
   * @deprecated Use `placement` instead.
   */
  align?: TooltipLegacyAlign
  /**
   * Disables the tooltip.
   */
  disabled?: boolean
  /**
   * Controlled open state.
   */
  open?: boolean
  /**
   * @deprecated Use `open`.
   */
  visible?: boolean
  /**
   * Initial open state when uncontrolled.
   */
  defaultOpen?: boolean
  /**
   * Called when the open state changes.
   */
  onOpenChange?: TooltipRootChangeHandler
  /**
   * Delay before showing (ms). MUI: `enterDelay`.
   * Matches `--memori-motion-delay-short` (0.4s).
   * @default 400
   */
  enterDelay?: number
  /**
   * Delay before hiding (ms). MUI: `leaveDelay`.
   * @default 0
   */
  leaveDelay?: number
  /**
   * Gap between anchor and tooltip (maps to `sideOffset`).
   */
  sideOffset?: number
  /**
   * When true, moving pointer onto the tooltip keeps it open (MUI `disableInteractive` inverted).
   * @default false
   */
  disableHoverablePopup?: boolean
  /**
   * Show the arrow element.
   * @default true
   */
  arrow?: boolean
  /**
   * Container element used as the portal root. Defaults to the nearest
   * `PortalContainerProvider` value, then to `document.body`.
   */
  container?: HTMLElement | null
  /**
   * Theme stamped on the portal popup (as `data-theme`) so design tokens
   * resolve correctly regardless of where the portal mounts. Falls back to
   * the nearest `ThemeProvider` / `MemoriUIProvider` value.
   */
  theme?: Theme
  /**
   * Collision boundary for Floating UI positioning (maps to Positioner).
   * Prefer this over `slotProps.positioner.collisionBoundary`.
   */
  collisionBoundary?: React.ComponentProps<
    typeof BaseTooltip.Positioner
  >['collisionBoundary']
  /**
   * Collision padding for Floating UI positioning (maps to Positioner).
   * @default 8
   */
  collisionPadding?: React.ComponentProps<
    typeof BaseTooltip.Positioner
  >['collisionPadding']
  /**
   * Click/tap toggles the tooltip, mouse included. Desktop hover still works.
   * Overrides `touchBehavior`.
   * @deprecated Use `touchBehavior`, which leaves mouse clicks alone and
   * does not stop the click from reaching the child.
   */
  openOnPress?: boolean
  /**
   * How a touch press opens the tooltip; mouse and keyboard are unaffected.
   * `auto` opens on tap only when the trigger is disabled or has no
   * interactive element, `tap` opens after every tap, `longPress` opens on
   * press and hold, `none` never opens on touch.
   * @default 'auto'
   */
  touchBehavior?: TooltipTouchBehavior
  className?: string
  style?: React.CSSProperties
  slotProps?: {
    root?: React.HTMLAttributes<HTMLSpanElement>
    trigger?: Omit<
      React.ComponentProps<typeof BaseTooltip.Trigger>,
      'children' | 'delay' | 'closeDelay'
    >
    portal?: React.ComponentProps<typeof BaseTooltip.Portal>
    positioner?: React.ComponentProps<typeof BaseTooltip.Positioner>
    popup?: React.ComponentProps<typeof BaseTooltip.Popup>
    arrow?: React.ComponentProps<typeof BaseTooltip.Arrow>
  }
}

function legacyAlignToSideAlign(align: TooltipLegacyAlign): {
  side: Side
  align: Align
} {
  switch (align) {
    case 'left':
      return { side: 'left', align: 'center' }
    case 'right':
      return { side: 'right', align: 'center' }
    case 'topLeft':
      return { side: 'top', align: 'end' }
    case 'topRight':
      return { side: 'top', align: 'start' }
    case 'bottomLeft':
      return { side: 'bottom', align: 'end' }
    case 'bottomRight':
      return { side: 'bottom', align: 'start' }
    default:
      return { side: 'right', align: 'center' }
  }
}

function isLegacyAlign(value: string): value is TooltipLegacyAlign {
  return (
    value === 'left' ||
    value === 'right' ||
    value === 'topLeft' ||
    value === 'topRight' ||
    value === 'bottomLeft' ||
    value === 'bottomRight'
  )
}

function parsePlacement(placement: TooltipPlacement | TooltipLegacyAlign): {
  side: Side
  align: Align
} {
  if (isLegacyAlign(placement)) {
    return legacyAlignToSideAlign(placement)
  }

  const segments = placement.split('-')

  if (segments.length === 1) {
    return { side: segments[0] as Side, align: 'center' }
  }

  const [first, second] = segments

  if (
    segments.length === 2 &&
    second &&
    (second === 'start' || second === 'end' || second === 'center')
  ) {
    return { side: first as Side, align: second as Align }
  }

  return { side: first as Side, align: 'center' }
}

function resolveSideAlign(
  placement: TooltipPlacement | TooltipLegacyAlign | undefined,
  align: TooltipLegacyAlign | undefined,
): { side: Side; align: Align } {
  if (placement) {
    return parsePlacement(placement)
  }
  if (align) {
    return legacyAlignToSideAlign(align)
  }
  return { side: 'top', align: 'center' }
}

function mergeStyle(
  a?: React.CSSProperties,
  b?: React.CSSProperties,
): React.CSSProperties | undefined {
  if (!a && !b) {
    return undefined
  }
  return { ...a, ...b }
}

function assignRef<T>(ref: Ref<T> | undefined, value: T) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref && typeof ref === 'object') {
    ;(ref as React.MutableRefObject<T>).current = value
  }
}

function wireOpenOnPressChild(
  children: React.ReactNode,
  press: ReturnType<typeof usePressTooltip>,
): React.ReactNode {
  const element: ReactElement = isValidElement(children) ? (
    children
  ) : (
    <span>{children}</span>
  )

  const elementProps = element.props as {
    ref?: Ref<HTMLElement>
    onClick?: (event: React.MouseEvent) => void
    onPointerDown?: (event: React.PointerEvent) => void
  }
  // React 19: ref is a prop. React 18: ref lives on the element object.
  const elementRef =
    elementProps.ref ??
    (element as ReactElement & { ref?: Ref<HTMLElement> }).ref

  return cloneElement(element, {
    ...press.pressTriggerProps,
    ref: (node: HTMLElement | null) => {
      press.anchorRef(node)
      assignRef(elementRef, node)
    },
    onPointerDown: (event: React.PointerEvent) => {
      press.pressTriggerProps.onPointerDown(event)
      elementProps.onPointerDown?.(event)
    },
    onClick: (event: React.MouseEvent) => {
      press.pressTriggerProps.onClick(event)
      elementProps.onClick?.(event)
    },
  } as React.HTMLAttributes<HTMLElement> & { ref: Ref<HTMLElement> })
}

type PressController = ReturnType<typeof usePressTooltip>

type Handler = (event: never) => void

/** Runs `extra` handlers after any same-named ones already in `props`. */
function chainHandlers<P extends object>(
  props: P,
  extra: Record<string, Handler>,
): P {
  const merged = { ...props } as Record<string, unknown>
  for (const [name, handler] of Object.entries(extra)) {
    const own = merged[name] as Handler | undefined
    merged[name] = own
      ? (event: never) => {
          own(event)
          handler(event)
        }
      : handler
  }
  return merged as P
}

function TooltipView({
  props,
  forwardedRef,
  press,
}: {
  props: TooltipProps
  forwardedRef: Ref<HTMLSpanElement>
  press: PressController | null
}) {
  const {
    title,
    content,
    children,
    placement,
    align: alignProp,
    disabled = false,
    open: openProp,
    visible,
    defaultOpen,
    onOpenChange,
    enterDelay = 400,
    leaveDelay = 0,
    sideOffset = 8,
    disableHoverablePopup = false,
    arrow = true,
    container,
    theme,
    collisionBoundary,
    collisionPadding,
    touchBehavior = 'auto',
    className,
    style,
    slotProps,
  } = props

  const label = title ?? content
  const touch = useTouchTooltip(press ? 'none' : touchBehavior, defaultOpen)
  const portalContainer = usePortalContainer(container)
  const resolvedTheme = useMemoriTheme(theme)

  const { side, align } = useMemo(
    () => resolveSideAlign(placement, alignProp),
    [placement, alignProp],
  )

  const open =
    openProp !== undefined
      ? openProp
      : visible !== undefined
        ? visible
        : press
          ? press.open
          : touch.open

  const handleOpenChange: TooltipRootChangeHandler = (next, eventDetails) => {
    if (openProp === undefined && visible === undefined) {
      if (press) {
        press.setOpen(next)
      } else {
        // A touch press is opened and closed by the touch handlers; Base UI
        // would close it on the same pointerdown.
        if (
          !next &&
          eventDetails.reason === 'trigger-press' &&
          touch.isTouchPress()
        ) {
          return
        }
        touch.setOpen(next)
      }
    }
    onOpenChange?.(next, eventDetails)
  }

  const {
    className: triggerSlotClassName,
    style: triggerSlotStyle,
    ...triggerSlotRest
  } = slotProps?.trigger ?? {}
  const triggerRest = press
    ? triggerSlotRest
    : chainHandlers(triggerSlotRest, touch.triggerProps)

  const {
    className: positionerSlotClassName,
    style: positionerSlotStyle,
    collisionBoundary: positionerCollisionBoundary,
    collisionPadding: positionerCollisionPadding,
    ...positionerRest
  } = slotProps?.positioner ?? {}

  const {
    className: popupSlotClassName,
    style: popupSlotStyle,
    ...popupRest
  } = slotProps?.popup ?? {}

  const {
    className: arrowSlotClassName,
    style: arrowSlotStyle,
    ...arrowRest
  } = slotProps?.arrow ?? {}

  const rootClassName = cx(
    'memori-tooltip',
    className,
    slotProps?.root?.className,
  )
  const rootStyle = mergeStyle(style, slotProps?.root?.style)

  if (label == null || label === false) {
    return (
      <span
        {...slotProps?.root}
        className={rootClassName}
        ref={forwardedRef}
        style={rootStyle}
      >
        {children}
      </span>
    )
  }

  const triggerChild = press ? wireOpenOnPressChild(children, press) : children

  return (
    <span
      {...slotProps?.root}
      className={rootClassName}
      style={rootStyle}
    >
      <BaseTooltip.Root
        disabled={disabled}
        disableHoverablePopup={disableHoverablePopup}
        onOpenChange={handleOpenChange}
        {...(open !== undefined ? { open } : {})}
      >
        <BaseTooltip.Trigger
          {...triggerRest}
          ref={forwardedRef}
          className={cx('memori-tooltip__trigger', triggerSlotClassName)}
          closeDelay={leaveDelay}
          delay={enterDelay}
          render={<span />}
          style={triggerSlotStyle}
        >
          {triggerChild}
        </BaseTooltip.Trigger>
        <BaseTooltip.Portal
          container={portalContainer ?? undefined}
          {...slotProps?.portal}
        >
          <BaseTooltip.Positioner
            {...positionerRest}
            {...(press
              ? {
                  anchor: positionerRest.anchor ?? press.positionerProps.anchor,
                  positionMethod:
                    positionerRest.positionMethod ??
                    press.positionerProps.positionMethod,
                }
              : {})}
            align={align}
            className={cx(
              'memori-tooltip__positioner',
              positionerSlotClassName,
            )}
            collisionBoundary={collisionBoundary ?? positionerCollisionBoundary}
            collisionPadding={
              collisionPadding ?? positionerCollisionPadding ?? 8
            }
            data-theme={resolvedTheme}
            side={side}
            sideOffset={positionerRest.sideOffset ?? sideOffset}
            style={positionerSlotStyle}
          >
            <BaseTooltip.Popup
              data-theme={resolvedTheme}
              {...popupRest}
              className={cx('memori-tooltip__popup', popupSlotClassName)}
              style={popupSlotStyle}
            >
              {arrow ? (
                <BaseTooltip.Arrow
                  {...arrowRest}
                  className={cx('memori-tooltip__arrow', arrowSlotClassName)}
                  style={arrowSlotStyle}
                />
              ) : null}
              <span className="memori-tooltip__surface">{label}</span>
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </span>
  )
}

function TooltipWithOpenOnPress({
  props,
  forwardedRef,
}: {
  props: TooltipProps
  forwardedRef: Ref<HTMLSpanElement>
}) {
  const press = usePressTooltip(Boolean(props.defaultOpen))
  return (
    <TooltipView
      forwardedRef={forwardedRef}
      press={press}
      props={props}
    />
  )
}

export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
  function Tooltip(props, ref) {
    if (props.openOnPress) {
      return (
        <TooltipWithOpenOnPress
          forwardedRef={ref}
          props={props}
        />
      )
    }

    return (
      <TooltipView
        forwardedRef={ref}
        press={null}
        props={props}
      />
    )
  },
)

Tooltip.displayName = 'Tooltip'

export default Tooltip
