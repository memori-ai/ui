import React, { forwardRef } from 'react'
import { Menu } from '@base-ui/react/menu'
import type { MenuRootProps } from '@base-ui/react/menu'
import cx from 'classnames'
import { ChevronDown } from 'lucide-react'
import './styles.css'

/* ----------------------------------------------------------------------------
 * Dropdown Root
 * -------------------------------------------------------------------------- */

export interface DropdownProps extends Omit<
  MenuRootProps,
  'className' | 'style'
> {
  /**
   * Whether the dropdown is open (controlled).
   */
  open?: boolean

  /**
   * Whether the dropdown is initially open (uncontrolled).
   * @default false
   */
  defaultOpen?: boolean

  /**
   * Callback fired when the open state changes.
   * @param open - The new open state
   */
  onOpenChange?: (open: boolean) => void

  /**
   * If true, the dropdown trigger and menu are disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Additional CSS class name for the root wrapper.
   */
  className?: string

  /**
   * Inline styles for the root.
   */
  style?: React.CSSProperties

  /**
   * Content: DropdownTrigger and DropdownMenu.
   */
  children?: React.ReactNode
}

const DropdownRoot = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      open,
      defaultOpen = false,
      onOpenChange,
      disabled = false,
      className,
      style,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cx('memori-dropdown', className)}
        style={style}
      >
        <Menu.Root
          open={open}
          defaultOpen={defaultOpen}
          onOpenChange={onOpenChange}
          disabled={disabled}
          {...rest}
        >
          {children}
        </Menu.Root>
      </div>
    )
  },
)

DropdownRoot.displayName = 'Dropdown'

/* ----------------------------------------------------------------------------
 * Dropdown Trigger
 * -------------------------------------------------------------------------- */

export interface DropdownTriggerProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Menu.Trigger>,
  'className' | 'style' | 'render'
> {
  /**
   * Content of the trigger (e.g. button text or icon).
   */
  children?: React.ReactNode

  /**
   * Whether to show the chevron icon.
   * @default true
   */
  showChevron?: boolean

  /**
   * Additional CSS class name for the trigger button.
   */
  className?: string

  /**
   * Inline styles for the trigger button.
   */
  style?: React.CSSProperties

  /**
   * Custom element for the trigger. Receives trigger props and state (e.g. open).
   * Use this to render your own component (e.g. Button) as the trigger so there
   * is a single button in the DOM.
   */
  render?: React.ComponentPropsWithoutRef<typeof Menu.Trigger>['render']
}

const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  (
    {
      children,
      showChevron = true,
      className,
      style,
      disabled,
      'aria-label': ariaLabel,
      render: renderProp,
      ...rest
    },
    ref,
  ) => {
    const triggerClassName = cx('memori-dropdown__trigger', className)
    const chevron = showChevron ? (
      <span
        className="memori-dropdown__trigger-icon"
        aria-hidden
      >
        <ChevronDown size={16} />
      </span>
    ) : null

    if (renderProp) {
      return (
        <Menu.Trigger
          ref={ref}
          disabled={disabled}
          render={renderProp}
          aria-label={ariaLabel}
          {...rest}
        />
      )
    }

    return (
      <Menu.Trigger
        ref={ref}
        disabled={disabled}
        className={triggerClassName}
        style={style}
        aria-label={ariaLabel}
        {...rest}
      >
        {children}
        {chevron}
      </Menu.Trigger>
    )
  },
)

DropdownTrigger.displayName = 'DropdownTrigger'

/* ----------------------------------------------------------------------------
 * Dropdown Menu (Portal + Positioner + Popup)
 * -------------------------------------------------------------------------- */

export interface DropdownMenuProps {
  /**
   * Menu content (DropdownItem, DropdownSeparator, etc.).
   */
  children?: React.ReactNode

  /**
   * Offset in pixels between trigger and popup.
   * @default 8
   */
  sideOffset?: number

  /**
   * Preferred placement: which side of the trigger.
   * @default 'bottom'
   */
  placement?: 'top' | 'bottom' | 'left' | 'right'

  /**
   * Alignment relative to the trigger.
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end'

  /**
   * Container element for the portal. Defaults to document.body.
   */
  container?: HTMLElement | null

  /**
   * Additional CSS class name for the popup.
   */
  className?: string

  /**
   * Inline styles for the popup.
   */
  style?: React.CSSProperties
}

function DropdownMenu({
  children,
  sideOffset = 8,
  placement = 'bottom',
  align = 'start',
  container,
  className,
  style,
}: DropdownMenuProps) {
  return (
    <Menu.Portal container={container ?? document.body}>
      <Menu.Positioner
        sideOffset={sideOffset}
        side={placement}
        align={align}
        className="memori-dropdown__positioner"
      >
        <Menu.Popup
          className={cx('memori-dropdown__popup', className)}
          style={style}
          role="menu"
        >
          {children}
        </Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  )
}

DropdownMenu.displayName = 'DropdownMenu'

/* ----------------------------------------------------------------------------
 * Dropdown Item
 * -------------------------------------------------------------------------- */

export interface DropdownItemProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Menu.Item>,
  'className' | 'style'
> {
  /**
   * Content of the item.
   */
  children?: React.ReactNode

  /**
   * If true, the item is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * If true, the menu closes when this item is clicked.
   * @default true
   */
  closeOnClick?: boolean

  /**
   * Overrides the accessible name for type-ahead.
   */
  label?: string

  /**
   * Additional CSS class name.
   */
  className?: string

  /**
   * Inline styles.
   */
  style?: React.CSSProperties

  /**
   * Optional icon shown to the left of the item label.
   */
  icon?: React.ReactNode
}

const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  (
    {
      children,
      disabled = false,
      closeOnClick = true,
      label,
      className,
      style,
      onClick,
      icon,
      ...rest
    },
    ref,
  ) => {
    const content =
      icon != null ? (
        <>
          <span
            className="memori-dropdown__item-icon"
            aria-hidden
          >
            {icon}
          </span>
          {children}
        </>
      ) : (
        children
      )

    return (
      <Menu.Item
        ref={ref}
        disabled={disabled}
        closeOnClick={closeOnClick}
        label={label}
        className={cx('memori-dropdown__item', className)}
        style={style}
        onClick={onClick}
        role="menuitem"
        {...rest}
      >
        {content}
      </Menu.Item>
    )
  },
)

DropdownItem.displayName = 'DropdownItem'

/* ----------------------------------------------------------------------------
 * Dropdown Separator
 * -------------------------------------------------------------------------- */

export interface DropdownSeparatorProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Menu.Separator>,
  'className' | 'style'
> {
  className?: string
  style?: React.CSSProperties
}

const DropdownSeparator = forwardRef<HTMLDivElement, DropdownSeparatorProps>(
  ({ className, style, ...rest }, ref) => (
    <Menu.Separator
      ref={ref}
      className={cx('memori-dropdown__separator', className)}
      style={style}
      role="separator"
      {...rest}
    />
  ),
)

DropdownSeparator.displayName = 'DropdownSeparator'

/* ----------------------------------------------------------------------------
 * Dropdown Group & GroupLabel (optional, for grouped items)
 * -------------------------------------------------------------------------- */

export interface DropdownGroupProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Menu.Group>,
  'className' | 'style'
> {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const DropdownGroup = forwardRef<HTMLDivElement, DropdownGroupProps>(
  ({ children, className, style, ...rest }, ref) => (
    <Menu.Group
      ref={ref}
      className={cx('memori-dropdown__group', className)}
      style={style}
      role="group"
      {...rest}
    >
      {children}
    </Menu.Group>
  ),
)

DropdownGroup.displayName = 'DropdownGroup'

export interface DropdownGroupLabelProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Menu.GroupLabel>,
  'className' | 'style'
> {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const DropdownGroupLabel = forwardRef<HTMLDivElement, DropdownGroupLabelProps>(
  ({ children, className, style, ...rest }, ref) => (
    <Menu.GroupLabel
      ref={ref}
      className={cx('memori-dropdown__group-label', className)}
      style={style}
      {...rest}
    >
      {children}
    </Menu.GroupLabel>
  ),
)

DropdownGroupLabel.displayName = 'DropdownGroupLabel'

/* ----------------------------------------------------------------------------
 * Compound component export
 * -------------------------------------------------------------------------- */

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  Item: DropdownItem,
  Separator: DropdownSeparator,
  Group: DropdownGroup,
  GroupLabel: DropdownGroupLabel,
})

export default Dropdown
