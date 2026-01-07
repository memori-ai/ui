import React, { forwardRef } from 'react'
import { Select } from '@base-ui/react'
import { ChevronDown, Check } from 'lucide-react'
import styles from './styles.module.css'

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
        className={`${styles.root} ${className || ''}`}
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
          {label && <label className={styles.label}>{label}</label>}
          <Select.Trigger
            ref={ref}
            className={`${styles.trigger} ${error ? styles.error : ''}`}
          >
            <Select.Value
              className={styles.value}
              data-placeholder={placeholder}
            />
            <Select.Icon className={styles.icon}>
              <ChevronDown size={16} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Positioner sideOffset={8}>
              <Select.Popup className={styles.popup}>
                {options.map(option => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={styles.item}
                  >
                    <Select.ItemText>{option.label}</Select.ItemText>
                    <Select.ItemIndicator>
                      <Check className={styles.checkIcon} />
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
