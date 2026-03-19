import React, { forwardRef, useId, useMemo } from 'react'
import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { ChevronDown, Search } from 'lucide-react'
import cx from 'classnames'
import './styles.css'

/* ----------------------------------------------------------------------------
 * Types
 * -------------------------------------------------------------------------- */

export interface ComboboxOption {
  value: string
  label: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
  icons?: React.ReactNode[]
}

export interface ComboboxGroupOption {
  groupLabel: string
  options: ComboboxOption[]
}

function isGroupedOptions(
  options: ComboboxOption[] | ComboboxGroupOption[],
): options is ComboboxGroupOption[] {
  const first = options[0]
  return (
    options.length > 0 &&
    first != null &&
    'groupLabel' in first &&
    'options' in first
  )
}

/** Normalize to Base UI items: flat Option[] or Group[] */
function normalizeItems(
  options: ComboboxOption[] | ComboboxGroupOption[],
): ComboboxOption[] | Array<{ value: string; items: ComboboxOption[] }> {
  if (isGroupedOptions(options)) {
    return options.map(g => ({ value: g.groupLabel, items: g.options }))
  }
  return options
}

/** Flatten options for single list (no groups) */
function flattenOptions(
  options: ComboboxOption[] | ComboboxGroupOption[],
): ComboboxOption[] {
  if (isGroupedOptions(options)) {
    return options.flatMap(g => g.options)
  }
  return options
}

function getOptionLabel(opt: ComboboxOption): string {
  return typeof opt.label === 'string' ? opt.label : String(opt.value)
}

export interface ComboboxProps {
  /** Selected value (option.value). Controlled. */
  value?: string | null
  /** Default selected value. Uncontrolled. */
  defaultValue?: string | null
  /** Called when selection changes */
  onChange?: (value: string | null) => void
  /** Flat list or grouped list of options */
  options: ComboboxOption[] | ComboboxGroupOption[]
  /** Placeholder when no value selected (trigger) */
  placeholder?: string
  /** Placeholder for the search input inside the popup */
  searchPlaceholder?: string
  /** Disable the combobox */
  disabled?: boolean
  /** Mark as required */
  required?: boolean
  /** Accessible label (uses Combobox.Label) */
  label?: string
  /** Form name for the hidden input */
  name?: string
  /** Optional icons rendered before the chevron on the trigger (e.g. Wrench) */
  triggerEndIcons?: React.ReactNode
  /** Root wrapper className */
  className?: string
  /** Root wrapper style */
  style?: React.CSSProperties
}

/* ----------------------------------------------------------------------------
 * Component
 * -------------------------------------------------------------------------- */

export const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      options,
      placeholder = 'Select an option',
      searchPlaceholder = 'Search…',
      disabled = false,
      required = false,
      label,
      name,
      triggerEndIcons,
      className,
      style,
    },
    ref,
  ) => {
    const normalizedItems = useMemo(() => normalizeItems(options), [options])
    const flatOptions = useMemo(() => flattenOptions(options), [options])

    const itemToStringLabel = (item: ComboboxOption) => getOptionLabel(item)
    const itemToStringValue = (item: ComboboxOption) => String(item.value)
    const isItemEqualToValue = (a: ComboboxOption, b: ComboboxOption | null) =>
      b != null && a.value === b.value

    const selectedOption =
      value != null ? (flatOptions.find(o => o.value === value) ?? null) : null
    const defaultOption =
      defaultValue != null
        ? (flatOptions.find(o => o.value === defaultValue) ?? null)
        : null
    const triggerId = useId()

    return (
      <div
        ref={ref}
        className={cx('memori-combobox', className)}
        style={style}
      >
        <BaseCombobox.Root<ComboboxOption>
          value={selectedOption ?? undefined}
          defaultValue={defaultOption ?? undefined}
          onValueChange={(val, _details) => {
            const v = val as ComboboxOption | null
            onChange?.(v != null ? v.value : null)
          }}
          items={normalizedItems}
          disabled={disabled}
          required={required}
          name={name}
          itemToStringLabel={itemToStringLabel}
          itemToStringValue={itemToStringValue}
          isItemEqualToValue={isItemEqualToValue}
          autoHighlight={true}
        >
          {label != null && label !== '' && (
            <label
              className="memori-combobox__label"
              htmlFor={triggerId}
              id={`${triggerId}-label`}
            >
              {label}
            </label>
          )}
          <BaseCombobox.Trigger
            id={triggerId}
            className="memori-combobox__trigger"
            aria-label={label != null && label !== '' ? undefined : label}
            aria-labelledby={
              label != null && label !== '' ? `${triggerId}-label` : undefined
            }
          >
            <BaseCombobox.Value data-placeholder={placeholder}>
              {selectedValue => {
                if (selectedValue == null)
                  return (
                    <span
                      className="memori-combobox__value"
                      data-placeholder={placeholder}
                    />
                  )
                const opt = flatOptions.find(
                  o => o.value === (selectedValue as ComboboxOption).value,
                )
                const display = opt
                  ? opt.label
                  : String((selectedValue as ComboboxOption).value)
                return <span className="memori-combobox__value">{display}</span>
              }}
            </BaseCombobox.Value>
            {triggerEndIcons != null && (
              <span
                className="memori-combobox__trigger-icons"
                aria-hidden
              >
                {triggerEndIcons}
              </span>
            )}
            <span
              className="memori-combobox__trigger-icon"
              aria-hidden
            >
              <ChevronDown size={16} />
            </span>
          </BaseCombobox.Trigger>
          <BaseCombobox.Portal className="memori-combobox__portal">
            <BaseCombobox.Positioner
              className="memori-combobox__positioner"
              sideOffset={8}
              side="bottom"
              align="start"
            >
              <BaseCombobox.Popup className="memori-combobox__popup">
                <div className="memori-combobox__search-wrap">
                  <BaseCombobox.Input
                    className="memori-combobox__search"
                    placeholder={searchPlaceholder}
                    aria-label={searchPlaceholder}
                  />
                  <span
                    className="memori-combobox__search-icon"
                    aria-hidden
                  >
                    <Search size={16} />
                  </span>
                </div>
                <BaseCombobox.List className="memori-combobox__list">
                  {isGroupedOptions(options)
                    ? options.map(group => (
                        <BaseCombobox.Group
                          key={group.groupLabel}
                          items={group.options}
                          className="memori-combobox__group"
                        >
                          <BaseCombobox.GroupLabel className="memori-combobox__group-label">
                            {group.groupLabel}
                          </BaseCombobox.GroupLabel>
                          <BaseCombobox.Collection>
                            {(item: ComboboxOption, index: number) => (
                              <BaseCombobox.Item
                                key={item.value}
                                value={item}
                                disabled={item.disabled}
                                index={index}
                                className="memori-combobox__item"
                              >
                                <span className="memori-combobox__item-text">
                                  {item.label}
                                </span>
                                {(item.icon != null ||
                                  (item.icons != null &&
                                    item.icons.length > 0)) && (
                                  <span
                                    className="memori-combobox__item-icons"
                                    aria-hidden
                                  >
                                    {item.icon}
                                    {item.icons}
                                  </span>
                                )}
                              </BaseCombobox.Item>
                            )}
                          </BaseCombobox.Collection>
                        </BaseCombobox.Group>
                      ))
                    : (item: ComboboxOption, index: number) => (
                        <BaseCombobox.Item
                          key={item.value}
                          value={item}
                          disabled={item.disabled}
                          index={index}
                          className="memori-combobox__item"
                        >
                          <span className="memori-combobox__item-text">
                            {item.label}
                          </span>
                          {(item.icon != null ||
                            (item.icons != null && item.icons.length > 0)) && (
                            <span
                              className="memori-combobox__item-icons"
                              aria-hidden
                            >
                              {item.icon}
                              {item.icons}
                            </span>
                          )}
                        </BaseCombobox.Item>
                      )}
                </BaseCombobox.List>
              </BaseCombobox.Popup>
            </BaseCombobox.Positioner>
          </BaseCombobox.Portal>
        </BaseCombobox.Root>
      </div>
    )
  },
)

Combobox.displayName = 'Combobox'
