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
  variant?: 'primary' | 'secondary' | 'outline'
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
   * Additional CSS class name
   */
  className?: string
  /**
   * Button content
   */
  children?: React.ReactNode
}

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const variantClass =
      variant === 'primary'
        ? styles['button--primary']
        : variant === 'secondary'
          ? styles['button--secondary']
          : styles['button--outline']

    const sizeClass =
      size === 'sm'
        ? styles['button--sm']
        : size === 'lg'
          ? styles['button--lg']
          : styles['button--md']

    const fullWidthClass = fullWidth ? styles['button--full-width'] : undefined
    const disabledClass = disabled ? styles['button--disabled'] : undefined

    return (
      <BaseButton
        ref={ref}
        disabled={disabled}
        className={cx(
          styles.button,
          variantClass,
          sizeClass,
          fullWidthClass,
          disabledClass,
          className,
        )}
        {...props}
      >
        {children}
      </BaseButton>
    )
  },
)

ButtonBase.displayName = 'ButtonBase'

export default ButtonBase
