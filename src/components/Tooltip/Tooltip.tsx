import React from 'react'
import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'
import type { TooltipRootProps } from '@base-ui/react/tooltip'
import cx from 'classnames'
import './styles.css'

export interface TooltipProps {
  /**
   * The tooltip content
   */
  content: string | React.ReactNode

  /**
   * The element that triggers the tooltip
   */
  children: React.ReactNode

  /**
   * Tooltip placement relative to the trigger
   * @default 'right'
   */
  align?:
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'bottom'
    | 'bottomLeft'
    | 'bottomRight'
    | 'left'
    | 'right'

  /**
   * If `true`, the tooltip is disabled and won't show
   * @default false
   */
  disabled?: boolean

  /**
   * If `true`, the tooltip is visible (controlled)
   * @default false
   */
  visible?: boolean

  /**
   * Callback fired when the tooltip visibility changes
   * @param visible - The new visibility state
   */
  onVisibleChange?: (visible: boolean) => void

  /**
   * Delay in milliseconds before showing the tooltip
   * @default 0
   */
  delayDuration?: number

  /**
   * Delay in milliseconds before hiding the tooltip
   * @default 0
   */
  skipDelayDuration?: number

  /**
   * Additional CSS class name for the root element
   */
  className?: string

  /**
   * Additional CSS class name for the tooltip popup
   */
  popupClassName?: string

  /**
   * Additional CSS class name for the trigger element
   */
  triggerClassName?: string

  /**
   * Inline styles for the root element
   */
  style?: React.CSSProperties

  /**
   * Inline styles for the tooltip popup
   */
  popupStyle?: React.CSSProperties

  /**
   * Whether to show an arrow pointing to the trigger
   * @default true
   */
  showArrow?: boolean

  /**
   * Offset distance from the trigger in pixels
   * @default 8
   */
  offset?: number

  /**
   * Unique identifier for the tooltip
   */
  id?: string

  /**
   * ARIA label for the tooltip (if content is not descriptive)
   */
  'aria-label'?: string
}

// Map our align prop to Base UI's side and align props
const alignToSideAndAlign = (
  align: TooltipProps['align'],
): {
  side: 'top' | 'right' | 'bottom' | 'left'
  align: 'start' | 'center' | 'end'
} => {
  const mapping: Record<
    NonNullable<TooltipProps['align']>,
    {
      side: 'top' | 'right' | 'bottom' | 'left'
      align: 'start' | 'center' | 'end'
    }
  > = {
    top: { side: 'top', align: 'center' },
    topLeft: { side: 'top', align: 'start' },
    topRight: { side: 'top', align: 'end' },
    bottom: { side: 'bottom', align: 'center' },
    bottomLeft: { side: 'bottom', align: 'start' },
    bottomRight: { side: 'bottom', align: 'end' },
    left: { side: 'left', align: 'center' },
    right: { side: 'right', align: 'center' },
  }
  return mapping[align || 'right']
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  align = 'right',
  disabled = false,
  visible,
  onVisibleChange,
  delayDuration = 0,
  skipDelayDuration = 0,
  className,
  popupClassName,
  triggerClassName,
  style,
  popupStyle,
  showArrow = true,
  offset = 8,
  id,
  'aria-label': ariaLabel,
  ...props
}) => {
  if (disabled) {
    return <>{children}</>
  }

  const { side, align: alignValue } = alignToSideAndAlign(align)

  // Base UI Tooltip props
  const rootProps: {
    open?: boolean
    onOpenChange?: (open: boolean, eventDetails?: unknown) => void
    delayDuration?: number
  } = {}

  if (visible !== undefined) {
    rootProps.open = visible
    rootProps.onOpenChange = (newVisible: boolean) => {
      onVisibleChange?.(newVisible)
    }
  } else {
    rootProps.delayDuration = delayDuration
  }

  return (
    <BaseTooltip.Provider>
      <div
        className={cx('memori-tooltip', className)}
        style={style}
        id={id}
      >
        <BaseTooltip.Root {...rootProps}>
          <BaseTooltip.Trigger
            className={cx('memori-tooltip__trigger', triggerClassName)}
          >
            {children}
          </BaseTooltip.Trigger>
          <BaseTooltip.Portal>
            <BaseTooltip.Positioner
              side={side}
              align={alignValue}
              sideOffset={offset}
            >
              <BaseTooltip.Popup
                role="tooltip"
                aria-label={ariaLabel}
                className={cx(
                  'memori-tooltip__popup',
                  `memori-tooltip__popup--${align}`,
                  popupClassName,
                )}
                style={popupStyle}
              >
                <div className="memori-tooltip__content">{content}</div>
                {showArrow && (
                  <BaseTooltip.Arrow className="memori-tooltip__arrow" />
                )}
              </BaseTooltip.Popup>
            </BaseTooltip.Positioner>
          </BaseTooltip.Portal>
        </BaseTooltip.Root>
      </div>
    </BaseTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
