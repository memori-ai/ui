import React from 'react'
import { Button as BaseButton } from '@base-ui/react/button'
import type { ButtonProps as BaseButtonProps } from '@base-ui/react/button'
import cx from 'classnames'
import styles from './styles.module.css'

export interface ButtonProps extends Omit<BaseButtonProps, 'className'> {
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  /**
   * Button size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean
  /**
   * Shows a loading spinner and disables the button
   */
  loading?: boolean
  /**
   * Icon to display in the button
   */
  icon?: React.ReactNode
  /**
   * Position of the icon relative to the button text
   * @default 'left'
   */
  iconPosition?: 'left' | 'right'
  /**
   * Button shape
   * @default 'default'
   */
  shape?: 'default' | 'round' | 'circle'
  /**
   * Whether the button is in an active/pressed state (for toggle buttons)
   */
  active?: boolean
  /**
   * Indicates a destructive/dangerous action (alias for variant="danger")
   */
  danger?: boolean
  /**
   * Additional CSS class name
   */
  className?: string
  /**
   * Button content
   */
  children?: React.ReactNode

  /**
   * Button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset'

  /**
   * Button aria-label
   */
  ariaLabel?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      icon,
      iconPosition = 'left',
      shape = 'default',
      active = false,
      danger = false,
      className,
      children,
      disabled,
      type = 'button',
      ariaLabel,
      ...props
    },
    ref,
  ) => {
    // Determine the effective variant (danger prop overrides variant)
    const effectiveVariant = danger ? 'danger' : variant

    const variantClass = {
      primary: styles['button--primary'],
      secondary: styles['button--secondary'],
      outline: styles['button--outline'],
      ghost: styles['button--ghost'],
      danger: styles['button--danger'],
    }[effectiveVariant]

    const sizeClass = {
      sm: styles['button--sm'],
      md: styles['button--md'],
      lg: styles['button--lg'],
    }[size]

    const shapeClass = {
      default: undefined,
      round: styles['button--round'],
      circle: styles['button--circle'],
    }[shape]

    const isDisabled = disabled || loading

    // Determine the icon to show (loading spinner takes precedence)
    const displayIcon = loading ? (
      <span
        className={styles['button__spinner']}
        aria-hidden="true"
      />
    ) : icon ? (
      <span className={styles['button__icon']}>{icon}</span>
    ) : null

    // Determine if we have content (children)
    const hasChildren = React.Children.count(children) > 0

    return (
      <BaseButton
        ref={ref}
        disabled={isDisabled}
        focusableWhenDisabled={loading}
        className={cx(
          styles.button,
          variantClass,
          sizeClass,
          shapeClass,
          fullWidth && styles['button--full-width'],
          isDisabled && styles['button--disabled'],
          loading && styles['button--loading'],
          active && styles['button--active'],
          !hasChildren && displayIcon && styles['button--icon-only'],
          className,
        )}
        type={type}
        aria-label={ariaLabel}
        {...props}
      >
        {displayIcon && iconPosition === 'left' && displayIcon}
        {hasChildren && (
          <span className={styles['button__content']}>{children}</span>
        )}
        {displayIcon && iconPosition === 'right' && displayIcon}
      </BaseButton>
    )
  },
)

Button.displayName = 'Button'

export default Button
