import * as React from 'react'
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group'
import cx from 'classnames'
import './styles.css'

export interface RadioGroupProps {
  /**
   * The value of the selected radio. Use with `onValueChange` (controlled).
   */
  value?: string

  /**
   * The initially selected value. Use when the component is not controlled.
   */
  defaultValue?: string

  /**
   * Callback fired when the selected radio changes.
   * @param value The value of the newly selected radio.
   */
  onValueChange?: (value: string) => void

  /**
   * Layout direction of the radios.
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal'

  /**
   * If `true`, every radio in the group is disabled.
   */
  disabled?: boolean

  /**
   * The name of the hidden input, for native form submission.
   */
  name?: string

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Accessible name of the group, required when there is no external label.
   */
  'aria-label'?: string

  /**
   * The `Radio` items.
   */
  children?: React.ReactNode
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      orientation = 'vertical',
      disabled = false,
      name,
      className,
      'aria-label': ariaLabel,
      children,
    },
    ref,
  ) => {
    return (
      <BaseRadioGroup
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onValueChange={newValue => onValueChange?.(newValue as string)}
        disabled={disabled}
        name={name}
        aria-label={ariaLabel}
        aria-orientation={orientation}
        className={cx(
          'memori-radio-group',
          `memori-radio-group--${orientation}`,
          disabled && 'memori-radio-group--disabled',
          className,
        )}
      >
        {children}
      </BaseRadioGroup>
    )
  },
)

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
