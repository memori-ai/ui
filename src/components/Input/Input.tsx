import React from 'react'
import { Input as BaseInput } from '@base-ui/react/input'
import type { InputProps as BaseInputProps } from '@base-ui/react/input'
import cx from 'classnames'
import './styles.css'

export interface InputProps extends Omit<BaseInputProps, 'className' | 'size'> {
  /**
   * Input variant
   * @default 'default'
   */
  variant?: 'default' | 'error' | 'disabled'
  /**
   * Input size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether the input should take full width
   */
  fullWidth?: boolean
  /**
   * Additional CSS class name
   */
  className?: string
  /**
   * Placeholder text
   */
  placeholder?: string
  /**
   * Input value
   */
  value?: string
  /**
   * Default value for uncontrolled input
   */
  defaultValue?: string
  /**
   * Callback fired when the value changes
   */
  onValueChange?: (value: string) => void
  /**
   * Whether the input is disabled
   */
  disabled?: boolean
  /**
   * Input type
   * @default 'text'
   */
  type?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'md',
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || variant === 'disabled'

    const variantClass =
      variant === 'error'
        ? 'memori-input--error'
        : variant === 'disabled'
          ? 'memori-input--disabled'
          : 'memori-input--default'

    const sizeClass =
      size === 'sm'
        ? 'memori-input--sm'
        : size === 'lg'
          ? 'memori-input--lg'
          : 'memori-input--md'

    const fullWidthClass = fullWidth ? 'memori-input--full-width' : undefined
    const disabledClass = isDisabled ? 'memori-input--disabled' : undefined

    return (
      <BaseInput
        ref={ref}
        disabled={isDisabled}
        className={cx(
          'memori-input',
          variantClass,
          sizeClass,
          fullWidthClass,
          disabledClass,
          className,
        )}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'

export default Input
