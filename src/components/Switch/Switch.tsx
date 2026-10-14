import * as React from 'react'
import { Switch as BaseSwitch } from '@base-ui/react/switch'
import cx from 'classnames'
import { useStableId } from '../../hooks/useStableId'
import './styles.css'

export interface SwitchProps {
  /**
   * If `true`, the switch is on. Use with `onCheckedChange` (controlled).
   */
  checked?: boolean

  /**
   * The initial on state. Use when the component is not controlled.
   */
  defaultChecked?: boolean

  /**
   * Callback fired when the switch is toggled.
   * @param checked The new state.
   */
  onCheckedChange?: (checked: boolean) => void

  /**
   * Visible label rendered next to the switch. Clicking it toggles the switch.
   */
  label?: React.ReactNode

  /**
   * If `true`, the switch is disabled.
   */
  disabled?: boolean

  /**
   * Switch size.
   * @default 'md'
   */
  size?: 'sm' | 'md'

  /**
   * The name of the hidden input, for native form submission.
   */
  name?: string

  /**
   * The id of the hidden input (target for an external `<label htmlFor>`).
   */
  id?: string

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties

  /**
   * Accessible name, required when there is no visible `label`.
   */
  'aria-label'?: string

  /**
   * Identifies the element (or elements) that describes the switch.
   */
  'aria-describedby'?: string

  /**
   * Identifies the element (or elements) that labels the switch.
   */
  'aria-labelledby'?: string
}

export const Switch = React.forwardRef<HTMLSpanElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked,
      onCheckedChange,
      label,
      disabled = false,
      size = 'md',
      name,
      id,
      className,
      style,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-labelledby': ariaLabelledby,
    },
    ref,
  ) => {
    const labelId = useStableId('memori-switch-label')
    const fallbackInputId = useStableId('memori-switch')
    const inputId = id ?? fallbackInputId
    const hasLabel = label != null && label !== false
    const labelledBy = ariaLabelledby ?? (hasLabel ? labelId : undefined)

    return (
      <span
        className={cx(
          'memori-switch',
          `memori-switch--${size}`,
          disabled && 'memori-switch--disabled',
          className,
        )}
        style={style}
      >
        <BaseSwitch.Root
          ref={ref}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={newChecked => onCheckedChange?.(newChecked)}
          disabled={disabled}
          name={name}
          id={hasLabel ? inputId : id}
          className="memori-switch__control"
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
          {...(labelledBy != null && { 'aria-labelledby': labelledBy })}
        >
          <BaseSwitch.Thumb className="memori-switch__thumb" />
        </BaseSwitch.Root>

        {hasLabel && (
          <label
            id={labelId}
            htmlFor={inputId}
            className="memori-switch__label"
          >
            {label}
          </label>
        )}
      </span>
    )
  },
)

Switch.displayName = 'Switch'

export default Switch
