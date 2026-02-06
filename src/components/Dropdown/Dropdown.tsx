import React, { forwardRef } from 'react'
import { Menu } from '@base-ui/react/menu'
import type { MenuRootProps } from '@base-ui/react/menu'
import cx from 'classnames'
import { ChevronDown } from 'lucide-react'
import { Button } from '../Button/Button'
import type { ButtonProps } from '../Button/Button'
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

/** Button-related props: when set, the trigger renders as your Button component (single button in DOM). */
type DropdownTriggerButtonProps = Pick<
  ButtonProps,
  'variant' | 'size' | 'fullWidth' | 'shape' | 'shadow' | 'danger' | 'active'
>

export interface DropdownTriggerProps
  extends
    Omit<
      React.ComponentPropsWithoutRef<typeof Menu.Trigger>,
      'className' | 'style' | 'render'
    >,
    DropdownTriggerButtonProps {
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
   * Custom element for the trigger. Use this to render your own component (e.g. Button)
   * as the trigger so there is a single button in the DOM. Receives trigger props and
   * state (e.g. open). Prefer using variant/size etc. for the built-in Button.
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
      variant,
      size,
      fullWidth,
      shape,
      shadow,
      danger,
      active,
      ...rest
    },
    ref,
  ) => {
    const hasButtonProps =
      variant != null ||
      size != null ||
      fullWidth != null ||
      shape != null ||
      shadow != null ||
      danger != null ||
      active != null

    const triggerClassName = cx('memori-dropdown__trigger', className)
    const chevron = showChevron ? (
      <span
        className="memori-dropdown__trigger-icon"
        aria-hidden
      >
        <ChevronDown size={16} />
      </span>
    ) : null

    type TriggerRenderProps = React.HTMLAttributes<HTMLButtonElement> & {
      className?: string
    }
    type TriggerRenderState = { open: boolean }

    const effectiveRender = (() => {
      if (renderProp) return renderProp
      if (hasButtonProps) {
        return (props: TriggerRenderProps, state: TriggerRenderState) => (
          <Button
            {...props}
            ref={ref as React.Ref<HTMLButtonElement>}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            shape={shape}
            shadow={shadow}
            danger={danger}
            active={active ?? state.open}
            className={cx(triggerClassName, props.className)}
            aria-expanded={state.open}
          >
            {children}
            {chevron}
          </Button>
        )
      }
      return undefined
    })()

    if (effectiveRender) {
      return (
        <Menu.Trigger
          ref={ref}
          disabled={disabled}
          render={
            effectiveRender as React.ComponentPropsWithoutRef<
              typeof Menu.Trigger
            >['render']
          }
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
   * Icon to show on the left side of the item.
   */
  icon?: React.ReactNode

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
}

const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  (
    {
      children,
      icon,
      disabled = false,
      closeOnClick = true,
      label,
      className,
      style,
      onClick,
      ...rest
    },
    ref,
  ) => {
    return (
      <Menu.Item
        ref={ref}
        disabled={disabled}
        closeOnClick={closeOnClick}
        label={label}
        className={cx(
          'memori-dropdown__item',
          icon ? 'memori-dropdown__item--with-icon' : undefined,
          className,
        )}
        style={style}
        onClick={onClick}
        role="menuitem"
        {...rest}
      >
        {icon && (
          <span
            className="memori-dropdown__item-icon"
            aria-hidden
          >
            {icon}
          </span>
        )}
        {children}
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
