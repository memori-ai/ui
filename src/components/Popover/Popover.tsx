import { Popover as BasePopover } from '@base-ui/react/popover'
import cx from 'classnames'
import React, { forwardRef, useMemo } from 'react'

import styles from './styles.module.css'

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
      slotProps,
      ...rootProps
    } = props

    const { side, align } = useMemo(
      () => parsePlacement(placement),
      [placement],
    )

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

    return (
      <span
        {...slotProps?.root}
        className={cx(styles.root, className, slotProps?.root?.className)}
        style={mergeStyle(style, slotProps?.root?.style)}
      >
        <BasePopover.Root
          defaultOpen={defaultOpen}
          onOpenChange={onOpenChange}
          open={open}
          {...rootProps}
        >
          <BasePopover.Trigger
            {...triggerRest}
            className={cx(styles.trigger, triggerSlotClassName)}
            disabled={disabled}
            ref={ref}
            style={triggerSlotStyle}
          >
            {children}
          </BasePopover.Trigger>
          <BasePopover.Portal {...slotProps?.portal}>
            <BasePopover.Positioner
              {...positionerRest}
              align={positionerRest.align ?? align}
              alignOffset={positionerRest.alignOffset ?? alignOffset}
              className={cx(styles.positioner, positionerSlotClassName)}
              collisionPadding={positionerRest.collisionPadding ?? 8}
              side={positionerRest.side ?? side}
              sideOffset={positionerRest.sideOffset ?? sideOffset}
              style={positionerSlotStyle}
            >
              <BasePopover.Popup
                {...popupRest}
                className={cx(
                  styles.popup,
                  contentClassName,
                  popupSlotClassName,
                )}
                style={mergeStyle(contentStyle, popupSlotStyle)}
              >
                {arrow ? (
                  <BasePopover.Arrow
                    {...arrowRest}
                    className={cx(styles.arrow, arrowSlotClassName)}
                    style={arrowSlotStyle}
                  />
                ) : null}
                {(title || closable) && (
                  <div className={styles.header}>
                    {title ? (
                      <BasePopover.Title
                        {...titleRest}
                        className={cx(styles.title, titleSlotClassName)}
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
                        className={cx(styles.close, closeSlotClassName)}
                        style={closeSlotStyle}
                      >
                        <span
                          aria-hidden
                          className={styles.closeGlyph}
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
                    className={cx(styles.description, descriptionSlotClassName)}
                    style={descriptionSlotStyle}
                  >
                    {description}
                  </BasePopover.Description>
                ) : null}
                {content ? (
                  <div className={styles.content}>{content}</div>
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
