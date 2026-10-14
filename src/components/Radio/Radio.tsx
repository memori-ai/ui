import * as React from 'react'
import { Radio as BaseRadio } from '@base-ui/react/radio'
import cx from 'classnames'
import { useStableId } from '../../hooks/useStableId'
import './styles.css'

export interface RadioProps {
  /**
   * The value submitted and reported by `RadioGroup` when this radio is selected.
   */
  value: string

  /**
   * Visible label rendered next to the radio. Clicking it selects the radio.
   */
  label?: React.ReactNode

  /**
   * If `true`, this radio is disabled.
   */
  disabled?: boolean

  /**
   * Additional CSS class name for the root element.
   */
  className?: string
}

export const Radio = React.forwardRef<HTMLSpanElement, RadioProps>(
  ({ value, label, disabled = false, className }, ref) => {
    const labelId = useStableId('memori-radio-label')
    const inputId = useStableId('memori-radio')
    const hasLabel = label != null && label !== false

    return (
      <span
        className={cx(
          'memori-radio',
          disabled && 'memori-radio--disabled',
          className,
        )}
      >
        <BaseRadio.Root
          ref={ref}
          value={value}
          disabled={disabled}
          className="memori-radio__control"
          {...(hasLabel && { id: inputId, 'aria-labelledby': labelId })}
        >
          <BaseRadio.Indicator className="memori-radio__indicator" />
        </BaseRadio.Root>

        {hasLabel && (
          <label
            id={labelId}
            htmlFor={inputId}
            className="memori-radio__label"
          >
            {label}
          </label>
        )}
      </span>
    )
  },
)

Radio.displayName = 'Radio'

export default Radio
