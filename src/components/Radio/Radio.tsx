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
   * Secondary text under the label. Linked to the radio via `aria-describedby`.
   */
  description?: React.ReactNode

  /**
   * `card` renders the option as a bordered, fully clickable tile: use it for
   * a few mutually exclusive choices that each need a short explanation.
   * @default 'default'
   */
  variant?: 'default' | 'card'

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
  (
    {
      value,
      label,
      description,
      variant = 'default',
      disabled = false,
      className,
    },
    ref,
  ) => {
    const labelId = useStableId('memori-radio-label')
    const descriptionId = useStableId('memori-radio-description')
    const inputId = useStableId('memori-radio')
    const hasLabel = label != null && label !== false
    const hasDescription = description != null && description !== false

    return (
      <span
        className={cx(
          'memori-radio',
          variant === 'card' && 'memori-radio--card',
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
          {...(hasDescription && { 'aria-describedby': descriptionId })}
        >
          <BaseRadio.Indicator className="memori-radio__indicator" />
        </BaseRadio.Root>

        {(hasLabel || hasDescription) && (
          <span className="memori-radio__text">
            {hasLabel && (
              <label
                id={labelId}
                htmlFor={inputId}
                className="memori-radio__label"
              >
                {label}
              </label>
            )}
            {hasDescription && (
              <span
                id={descriptionId}
                className="memori-radio__description"
              >
                {description}
              </span>
            )}
          </span>
        )}
      </span>
    )
  },
)

Radio.displayName = 'Radio'

export default Radio
