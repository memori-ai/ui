import React from 'react'
import { Input as BaseInput } from '@base-ui/react/input'
import type { InputProps as BaseInputProps } from '@base-ui/react/input'
import cx from 'classnames'
import styles from './styles.module.css'

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
        ? styles['input--error']
        : variant === 'disabled'
          ? styles['input--disabled']
          : styles['input--default']

    const sizeClass =
      size === 'sm'
        ? styles['input--sm']
        : size === 'lg'
          ? styles['input--lg']
          : styles['input--md']

    const fullWidthClass = fullWidth ? styles['input--full-width'] : undefined
    const disabledClass = isDisabled ? styles['input--disabled'] : undefined

    return (
      <BaseInput
        ref={ref}
        disabled={isDisabled}
        className={cx(
          styles.input,
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
