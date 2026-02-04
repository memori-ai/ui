import React, { forwardRef } from 'react'
import { Select } from '@base-ui/react'
import { ChevronDown, Check } from 'lucide-react'
import cx from 'classnames'
import './styles.css'

export interface SelectBoxOption {
  value: string
  label: React.ReactNode
  disabled?: boolean
}

export interface SelectBoxProps {
  options: SelectBoxOption[]
  value?: string | null
  defaultValue?: string | null
  onChange?: (value: string | null) => void
  placeholder?: string
  displayValue?: React.ReactNode
  label?: string
  disabled?: boolean
  required?: boolean
  error?: boolean
  name?: string
  className?: string
  style?: React.CSSProperties
}

export const SelectBox = forwardRef<HTMLButtonElement, SelectBoxProps>(
  (
    {
      options,
      value,
      defaultValue,
      onChange,
      placeholder = 'Select an option',
      displayValue,
      label,
      disabled,
      required,
      error,
      name,
      className,
      style,
    },
    ref,
  ) => {
    return (
      <div
        className={cx('memori-select', className)}
        style={style}
      >
        <Select.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={val => onChange?.(val)}
          disabled={disabled}
          required={required}
          name={name}
        >
          {label && <label className="memori-select__label">{label}</label>}
          <Select.Trigger
            ref={ref}
            className={cx(
              'memori-select__trigger',
              error && 'memori-select__trigger--error',
            )}
          >
            <Select.Value
              className="memori-select__value"
              data-placeholder={placeholder}
            >
              {displayValue}
            </Select.Value>
            <Select.Icon className="memori-select__icon">
              <ChevronDown size={16} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal className="memori-select__portal">
            <Select.Positioner
              className="memori-select__positioner"
              sideOffset={8}
              side="bottom"
              align="start"
            >
              <Select.Popup className="memori-select__popup">
                {options.map(option => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className="memori-select__item"
                  >
                    <Select.ItemText>{option.label}</Select.ItemText>
                    <Select.ItemIndicator>
                      <Check className="memori-select__check-icon" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>
      </div>
    )
  },
)

SelectBox.displayName = 'SelectBox'
