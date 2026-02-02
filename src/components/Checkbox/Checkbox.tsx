import * as React from 'react'
import { Checkbox as BaseCheckbox } from '@base-ui/react'
import cx from 'classnames'
import { Check, Minus } from 'lucide-react'
import './styles.css'

export interface CheckboxProps {
  /**
   * If `true`, the checkbox is checked.
   */
  checked?: boolean

  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked?: boolean

  /**
   * If `true`, the checkbox appears in an indeterminate state.
   * This does not set the native input element to indeterminate due to
   * inconsistent behavior across browsers. However, it does set a
   * `data-indeterminate` attribute on the input.
   */
  indeterminate?: boolean

  /**
   * If `true`, the checkbox is disabled.
   */
  disabled?: boolean

  /**
   * If `true`, the checkbox is required.
   */
  required?: boolean

  /**
   * The name attribute of the input element.
   */
  name?: string

  /**
   * The value attribute of the input element.
   */
  value?: string

  /**
   * The label content for the checkbox.
   */
  label?: React.ReactNode

  /**
   * Callback fired when the state is changed.
   * @param checked The new checked state.
   * @param event The event source of the callback.
   */
  onChange?: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties

  /**
   * The id of the input element.
   */
  id?: string

  /**
   * Defines a string value that labels the checkbox.
   */
  'aria-label'?: string

  /**
   * Identifies the element (or elements) that describes the checkbox.
   */
  'aria-describedby'?: string

  /**
   * Identifies the element (or elements) that labels the checkbox.
   */
  'aria-labelledby'?: string
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked,
      indeterminate = false,
      disabled = false,
      required = false,
      name,
      value,
      label,
      onChange,
      className,
      style,
      id,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-labelledby': ariaLabelledby,
    },
    ref,
  ) => {
    const handleChange = (newChecked: boolean) => {
      // Create a synthetic event for compatibility
      const syntheticEvent = {
        target: { checked: newChecked },
        currentTarget: { checked: newChecked },
      } as React.ChangeEvent<HTMLInputElement>

      onChange?.(newChecked, syntheticEvent)
    }

    // Determine the checked state
    const isChecked = indeterminate ? false : checked

    return (
      <BaseCheckbox.Root
        checked={isChecked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        onCheckedChange={handleChange}
        className={cx(
          'memori-checkbox',
          disabled && 'memori-checkbox--disabled',
          className,
        )}
        style={style}
        id={id}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabelledby}
        ref={ref}
      >
        <span
          className={cx(
            'memori-checkbox__indicator',
            checked && !indeterminate && 'memori-checkbox__indicator--checked',
            indeterminate && 'memori-checkbox__indicator--indeterminate',
          )}
        >
          <BaseCheckbox.Indicator className="memori-checkbox__icon-wrapper">
            {indeterminate ? (
              <Minus
                className="memori-checkbox__icon"
                size={14}
                strokeWidth={3}
              />
            ) : (
              <Check
                className="memori-checkbox__icon"
                size={14}
                strokeWidth={3}
              />
            )}
          </BaseCheckbox.Indicator>
        </span>

        {label && <span className="memori-checkbox__label">{label}</span>}
      </BaseCheckbox.Root>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
