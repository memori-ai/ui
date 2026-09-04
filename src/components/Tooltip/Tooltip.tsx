import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'
import cx from 'classnames'
import React, { forwardRef, useMemo } from 'react'

import {
  useMemoriTheme,
  usePortalContainer,
} from '../../theme/MemoriUIProvider'
import type { Theme } from '../../theme/useTheme'
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
   * @default 'right'
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
   * @default 600
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
  return { side: 'right', align: 'center' }
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

export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
  function Tooltip(props, ref) {
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
      enterDelay,
      leaveDelay,
      sideOffset = 8,
      disableHoverablePopup = false,
      arrow = true,
      container,
      theme,
      collisionBoundary,
      collisionPadding,
      className,
      style,
      slotProps,
    } = props

    const label = title ?? content

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
          : undefined

    const {
      className: triggerSlotClassName,
      style: triggerSlotStyle,
      ...triggerRest
    } = slotProps?.trigger ?? {}

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
          ref={ref}
          style={rootStyle}
        >
          {children}
        </span>
      )
    }

    return (
      <span
        {...slotProps?.root}
        className={rootClassName}
        style={rootStyle}
      >
        <BaseTooltip.Root
          defaultOpen={defaultOpen}
          disabled={disabled}
          disableHoverablePopup={disableHoverablePopup}
          onOpenChange={onOpenChange}
          {...(open !== undefined ? { open } : {})}
        >
          <BaseTooltip.Trigger
            {...triggerRest}
            ref={ref}
            className={cx('memori-tooltip__trigger', triggerSlotClassName)}
            closeDelay={leaveDelay}
            delay={enterDelay}
            render={<span />}
            style={triggerSlotStyle}
          >
            {children}
          </BaseTooltip.Trigger>
          <BaseTooltip.Portal
            container={portalContainer ?? undefined}
            {...slotProps?.portal}
          >
            <BaseTooltip.Positioner
              {...positionerRest}
              align={align}
              className={cx(
                'memori-tooltip__positioner',
                positionerSlotClassName,
              )}
              collisionBoundary={
                collisionBoundary ?? positionerCollisionBoundary
              }
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
  },
)

Tooltip.displayName = 'Tooltip'

export default Tooltip
