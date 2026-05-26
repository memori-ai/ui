import { Popover as BasePopover } from '@base-ui/react/popover'
import cx from 'classnames'
import React, { forwardRef, useCallback, useMemo, useState } from 'react'

import {
  useMemoriTheme,
  usePortalContainer,
} from '../../theme/MemoriUIProvider'
import type { Theme } from '../../theme/useTheme'
import './styles.css'

type Side = 'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start'
type Align = 'start' | 'center' | 'end'

export type PopoverPlacement =
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

type PopoverRootChangeHandler = NonNullable<
  React.ComponentProps<typeof BasePopover.Root>['onOpenChange']
>

export interface PopoverProps extends Omit<
  React.ComponentProps<typeof BasePopover.Root>,
  'children'
> {
  /**
   * Trigger content.
   */
  children: React.ReactNode
  /**
   * Main popover body.
   */
  content?: React.ReactNode
  /**
   * Optional heading.
   */
  title?: React.ReactNode
  /**
   * Optional supporting text.
   */
  description?: React.ReactNode
  /**
   * Preferred placement.
   * @default 'bottom-start'
   */
  placement?: PopoverPlacement
  /**
   * Gap between trigger and popup.
   */
  sideOffset?: number
  /**
   * Cross-axis offset.
   */
  alignOffset?: number
  /**
   * Show arrow.
   * @default true
   */
  arrow?: boolean
  /**
   * Show close button in the header.
   * @default true
   */
  closable?: boolean
  /**
   * Label for the close button.
   * @default 'Close popover'
   */
  closeLabel?: string
  /**
   * Disable trigger interactions.
   * @default false
   */
  disabled?: boolean
  /**
   * Controlled open state.
   */
  open?: boolean
  /**
   * Initial open state.
   */
  defaultOpen?: boolean
  /**
   * Called when open state changes.
   */
  onOpenChange?: PopoverRootChangeHandler
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
  className?: string
  style?: React.CSSProperties
  contentClassName?: string
  contentStyle?: React.CSSProperties
  slotProps?: {
    root?: React.HTMLAttributes<HTMLSpanElement>
    trigger?: Omit<React.ComponentProps<typeof BasePopover.Trigger>, 'children'>
    portal?: React.ComponentProps<typeof BasePopover.Portal>
    positioner?: React.ComponentProps<typeof BasePopover.Positioner>
    popup?: React.ComponentProps<typeof BasePopover.Popup>
    title?: React.ComponentProps<typeof BasePopover.Title>
    description?: React.ComponentProps<typeof BasePopover.Description>
    close?: React.ComponentProps<typeof BasePopover.Close>
    arrow?: React.ComponentProps<typeof BasePopover.Arrow>
  }
}

function parsePlacement(placement: PopoverPlacement): {
  side: Side
  align: Align
} {
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

  return { side: 'bottom', align: 'start' }
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

export const Popover = forwardRef<HTMLButtonElement, PopoverProps>(
  function Popover(props, ref) {
    const {
      children,
      content,
      title,
      description,
      placement = 'bottom-start',
      sideOffset = 8,
      alignOffset = 0,
      arrow = true,
      closable = true,
      closeLabel = 'Close popover',
      disabled = false,
      open,
      defaultOpen,
      onOpenChange,
      className,
      style,
      contentClassName,
      contentStyle,
      container,
      theme,
      slotProps,
      ...rootProps
    } = props

    const { side, align } = useMemo(
      () => parsePlacement(placement),
      [placement],
    )

    const portalContainer = usePortalContainer(container)
    const resolvedTheme = useMemoriTheme(theme)

    const {
      className: triggerSlotClassName,
      style: triggerSlotStyle,
      ...triggerRest
    } = slotProps?.trigger ?? {}
    const {
      className: positionerSlotClassName,
      style: positionerSlotStyle,
      ...positionerRest
    } = slotProps?.positioner ?? {}
    const {
      className: popupSlotClassName,
      style: popupSlotStyle,
      ...popupRest
    } = slotProps?.popup ?? {}
    const {
      className: titleSlotClassName,
      style: titleSlotStyle,
      ...titleRest
    } = slotProps?.title ?? {}
    const {
      className: descriptionSlotClassName,
      style: descriptionSlotStyle,
      ...descriptionRest
    } = slotProps?.description ?? {}
    const {
      className: closeSlotClassName,
      style: closeSlotStyle,
      ...closeRest
    } = slotProps?.close ?? {}
    const {
      className: arrowSlotClassName,
      style: arrowSlotStyle,
      ...arrowRest
    } = slotProps?.arrow ?? {}
    const [uncontrolledOpen, setUncontrolledOpen] = useState(
      defaultOpen ?? false,
    )
    const isControlled = open !== undefined
    const isOpen = isControlled ? open : uncontrolledOpen
    const handleOpenChange = useCallback<PopoverRootChangeHandler>(
      (...args) => {
        const [nextOpen] = args

        if (!isControlled) {
          setUncontrolledOpen(nextOpen)
        }

        onOpenChange?.(...args)
      },
      [isControlled, onOpenChange],
    )

    return (
      <span
        {...slotProps?.root}
        className={cx('memori-popover', className, slotProps?.root?.className)}
        style={mergeStyle(style, slotProps?.root?.style)}
      >
        <BasePopover.Root
          defaultOpen={defaultOpen}
          onOpenChange={handleOpenChange}
          open={open}
          {...rootProps}
        >
          <BasePopover.Trigger
            {...triggerRest}
            className={cx(
              'memori-popover__trigger',
              isOpen && 'memori-popover__trigger--active',
              triggerSlotClassName,
            )}
            disabled={disabled}
            ref={ref}
            style={triggerSlotStyle}
          >
            {children}
          </BasePopover.Trigger>
          <BasePopover.Portal
            container={portalContainer ?? undefined}
            {...slotProps?.portal}
          >
            <BasePopover.Positioner
              {...positionerRest}
              align={positionerRest.align ?? align}
              alignOffset={positionerRest.alignOffset ?? alignOffset}
              className={cx(
                'memori-popover__positioner',
                positionerSlotClassName,
              )}
              collisionPadding={positionerRest.collisionPadding ?? 8}
              side={positionerRest.side ?? side}
              sideOffset={positionerRest.sideOffset ?? sideOffset}
              data-theme={resolvedTheme}
              style={positionerSlotStyle}
            >
              <BasePopover.Popup
                data-theme={resolvedTheme}
                {...popupRest}
                className={cx(
                  'memori-popover__popup',
                  contentClassName,
                  popupSlotClassName,
                )}
                style={mergeStyle(contentStyle, popupSlotStyle)}
              >
                {arrow ? (
                  <BasePopover.Arrow
                    {...arrowRest}
                    className={cx('memori-popover__arrow', arrowSlotClassName)}
                    style={arrowSlotStyle}
                  />
                ) : null}
                {(title || closable) && (
                  <div className="memori-popover__header">
                    {title ? (
                      <BasePopover.Title
                        {...titleRest}
                        className={cx(
                          'memori-popover__title',
                          titleSlotClassName,
                        )}
                        style={titleSlotStyle}
                      >
                        {title}
                      </BasePopover.Title>
                    ) : (
                      <span />
                    )}
                    {closable ? (
                      <BasePopover.Close
                        {...closeRest}
                        aria-label={closeRest['aria-label'] ?? closeLabel}
                        className={cx(
                          'memori-popover__close',
                          closeSlotClassName,
                        )}
                        style={closeSlotStyle}
                      >
                        <span
                          aria-hidden
                          className="memori-popover__close-glyph"
                        >
                          ×
                        </span>
                      </BasePopover.Close>
                    ) : null}
                  </div>
                )}
                {description ? (
                  <BasePopover.Description
                    {...descriptionRest}
                    className={cx(
                      'memori-popover__description',
                      descriptionSlotClassName,
                    )}
                    style={descriptionSlotStyle}
                  >
                    {description}
                  </BasePopover.Description>
                ) : null}
                {content ? (
                  <div className="memori-popover__content">{content}</div>
                ) : null}
              </BasePopover.Popup>
            </BasePopover.Positioner>
          </BasePopover.Portal>
        </BasePopover.Root>
      </span>
    )
  },
)

Popover.displayName = 'Popover'

export default Popover
