import React, { forwardRef } from 'react'
import { Select } from '@base-ui/react'
import { ChevronDown, Check } from 'lucide-react'
import cx from 'classnames'
import {
  useMemoriTheme,
  usePortalContainer,
} from '../../theme/MemoriUIProvider'
import type { Theme } from '../../theme/useTheme'
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
  /**
   * Container element used as the portal root. Defaults to the nearest
   * `PortalContainerProvider` value, then to `document.body`.
   */
  container?: HTMLElement | null
  /**
   * Theme stamped on the portal popup (as `data-theme`) so design tokens
   * resolve correctly regardless of where the portal mounts. Falls back to
   * the nearest `ThemeProvider` / `MemoriUIProvider` value.
   */
  theme?: Theme
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
      container,
      theme,
      className,
      style,
    },
    ref,
  ) => {
    const selectedOption = options.find(option => option.value === value)
    const portalContainer = usePortalContainer(container)
    const resolvedTheme = useMemoriTheme(theme)
    const selectedLabelText =
      typeof selectedOption?.label === 'string'
        ? selectedOption.label
        : undefined
    const accessibleName =
      label ??
      selectedLabelText ??
      (value != null ? String(value) : undefined) ??
      placeholder

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
            aria-label={accessibleName}
          >
            <Select.Value
              className="memori-select__value"
              data-placeholder={placeholder}
            >
              {displayValue ?? selectedOption?.label}
            </Select.Value>
            <Select.Icon className="memori-select__icon">
              <ChevronDown size={16} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal
            className="memori-select__portal"
            container={portalContainer ?? undefined}
          >
            <Select.Positioner
              className="memori-select__positioner"
              sideOffset={8}
              side="bottom"
              align="start"
              data-theme={resolvedTheme}
            >
              <Select.Popup
                className="memori-select__popup"
                data-theme={resolvedTheme}
              >
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
