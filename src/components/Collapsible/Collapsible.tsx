import React from 'react'
import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible'
import type { CollapsibleRootProps } from '@base-ui/react/collapsible'
import cx from 'classnames'
import { ChevronDown } from 'lucide-react'
import './styles.css'

export interface CollapsibleProps extends Omit<
  CollapsibleRootProps,
  'className' | 'style'
> {
  /**
   * The content that appears in the trigger button
   */
  summary: React.ReactNode

  /**
   * The collapsible content
   */
  children?: React.ReactNode

  /**
   * Whether the collapsible is open by default (uncontrolled)
   * @default false
   */
  defaultOpen?: boolean

  /**
   * Whether the collapsible is open (controlled)
   */
  open?: boolean

  /**
   * Callback fired when the open state changes
   * @param open - The new open state
   */
  onOpenChange?: (open: boolean) => void

  /**
   * If `true`, the collapsible is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * Additional CSS class name for the root element
   */
  className?: string

  /**
   * Additional CSS class name for the trigger button
   */
  triggerClassName?: string

  /**
   * Additional CSS class name for the panel content
   */
  panelClassName?: string

  /**
   * Inline styles for the root element
   */
  style?: React.CSSProperties

  /**
   * Inline styles for the trigger button
   */
  triggerStyle?: React.CSSProperties

  /**
   * Inline styles for the panel content
   */
  panelStyle?: React.CSSProperties

  /**
   * Whether to keep the panel mounted when closed
   * @default false
   */
  keepMounted?: boolean

  /**
   * Unique identifier for the collapsible
   */
  id?: string

  /**
   * ARIA label for the trigger button
   */
  'aria-label'?: string

  /**
   * ID of the element that labels the trigger button
   */
  'aria-labelledby'?: string
}

export const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  (
    {
      summary,
      children,
      defaultOpen = false,
      open,
      onOpenChange,
      disabled = false,
      className,
      triggerClassName,
      panelClassName,
      style,
      triggerStyle,
      panelStyle,
      keepMounted = false,
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...props
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
    const isControlled = open !== undefined
    const isOpen = isControlled ? open : internalOpen

    const handleOpenChange = React.useCallback(
      (newOpen: boolean) => {
        if (!isControlled) {
          setInternalOpen(newOpen)
        }
        onOpenChange?.(newOpen)
      },
      [isControlled, onOpenChange],
    )

    // Generate unique IDs for accessibility
    const collapsibleId = React.useId()
    const triggerId = id || `collapsible-trigger-${collapsibleId}`
    const panelId = `collapsible-panel-${collapsibleId}`

    return (
      <BaseCollapsible.Root
        ref={ref}
        defaultOpen={defaultOpen}
        open={isControlled ? open : undefined}
        onOpenChange={handleOpenChange}
        disabled={disabled}
        className={cx('memori-collapsible', className)}
        style={style}
        id={id}
        {...props}
      >
        <BaseCollapsible.Trigger
          id={triggerId}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={cx('memori-collapsible__trigger', triggerClassName)}
          style={triggerStyle}
        >
          <span className="memori-collapsible__summary">{summary}</span>
          <ChevronDown
            className={cx('memori-collapsible__icon', {
              'memori-collapsible__icon--open': isOpen,
            })}
            aria-hidden="true"
          />
        </BaseCollapsible.Trigger>
        <BaseCollapsible.Panel
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          keepMounted={keepMounted}
          className={cx('memori-collapsible__panel', panelClassName)}
          style={panelStyle}
        >
          {children}
        </BaseCollapsible.Panel>
      </BaseCollapsible.Root>
    )
  },
)

Collapsible.displayName = 'Collapsible'

export default Collapsible
