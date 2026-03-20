import React, { forwardRef, useId, useMemo } from 'react'
import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete'
import type {
  AutocompleteRootChangeEventDetails,
  AutocompleteRootHighlightEventDetails,
} from '@base-ui/react/autocomplete'
import { ChevronDown } from 'lucide-react'
import cx from 'classnames'
import styles from './styles.module.css'

/* ----------------------------------------------------------------------------
 * Types
 * -------------------------------------------------------------------------- */

export interface AutocompleteOption {
  value: string
  label: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
  icons?: React.ReactNode[]
}

export interface AutocompleteGroupOption {
  groupLabel: string
  options: AutocompleteOption[]
}

function isGroupedOptions(
  options: AutocompleteOption[] | AutocompleteGroupOption[],
): options is AutocompleteGroupOption[] {
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
  options: AutocompleteOption[] | AutocompleteGroupOption[],
):
  | AutocompleteOption[]
  | Array<{ value: string; items: AutocompleteOption[] }> {
  if (isGroupedOptions(options)) {
    return options.map(g => ({ value: g.groupLabel, items: g.options }))
  }
  return options
}

function getOptionLabel(opt: AutocompleteOption): string {
  return typeof opt.label === 'string' ? opt.label : String(opt.value)
}

export interface AutocompleteProps {
  /** Flat list or grouped list of options */
  options: AutocompleteOption[] | AutocompleteGroupOption[]
  /** Input value (controlled) */
  value?: string
  /** Default input value (uncontrolled) */
  defaultValue?: string
  /** Called when the input value changes */
  onChange?: (
    value: string,
    eventDetails: AutocompleteRootChangeEventDetails,
  ) => void
  /** Placeholder for the text input */
  placeholder?: string
  /** Disable the control */
  disabled?: boolean
  /** Mark as required */
  required?: boolean
  /** Read-only input */
  readOnly?: boolean
  /** Accessible label (native label element) */
  label?: string
  /** Form name */
  name?: string
  /** Root id (input id defaults to this with `-input` suffix when set) */
  id?: string
  /** Ref to the &lt;input&gt; element */
  inputRef?: React.Ref<HTMLInputElement>
  /** Filtering / inline completion mode (maps to Base UI `mode`) */
  mode?: 'list' | 'both' | 'inline' | 'none'
  /** Highlight first match while typing */
  autoHighlight?: boolean | 'always'
  /** Show clear button when there is text */
  clearable?: boolean
  /** Show loading status region (announced to screen readers) */
  loading?: boolean
  /** Text shown in the status region while `loading` */
  loadingText?: string
  /** Message when there are no matching options */
  emptyText?: string
  /** Controlled popup open state */
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (
    open: boolean,
    eventDetails: AutocompleteRootChangeEventDetails,
  ) => void
  onOpenChangeComplete?: (open: boolean) => void
  /** Max items to show */
  limit?: number
  /** Modal popup (locks scroll) */
  modal?: boolean
  openOnInputClick?: boolean
  highlightItemOnHover?: boolean
  keepHighlight?: boolean
  submitOnItemClick?: boolean
  onItemHighlighted?: (
    highlightedValue: AutocompleteOption | undefined,
    eventDetails: AutocompleteRootHighlightEventDetails,
  ) => void
  /** External filter (Base UI `filter` prop) */
  filter?:
    | null
    | ((
        itemValue: AutocompleteOption,
        query: string,
        itemToString?: (itemValue: AutocompleteOption) => string,
      ) => boolean)
  /** Controlled filtered items */
  filteredItems?:
    | readonly AutocompleteOption[]
    | readonly { value: string; items: readonly AutocompleteOption[] }[]
  /** Root wrapper className */
  className?: string
  /** Root wrapper style */
  style?: React.CSSProperties
  /** Extra className for the text input */
  inputClassName?: string
}

/* ----------------------------------------------------------------------------
 * Component
 * -------------------------------------------------------------------------- */

export const Autocomplete = forwardRef<HTMLDivElement, AutocompleteProps>(
  (
    {
      options,
      value,
      defaultValue,
      onChange,
      placeholder = 'Type to search…',
      disabled = false,
      required = false,
      readOnly = false,
      label,
      name,
      id: idProp,
      inputRef,
      mode = 'list',
      autoHighlight = true,
      clearable = false,
      loading = false,
      loadingText = 'Loading…',
      emptyText = 'No results',
      open,
      defaultOpen,
      onOpenChange,
      onOpenChangeComplete,
      limit,
      modal,
      openOnInputClick,
      highlightItemOnHover,
      keepHighlight,
      submitOnItemClick,
      onItemHighlighted,
      filter,
      filteredItems,
      className,
      style,
      inputClassName,
    },
    ref,
  ) => {
    const reactId = useId()
    const rootId = idProp ?? reactId
    const inputId = idProp != null ? `${idProp}-input` : `${reactId}-input`

    const normalizedItems = useMemo(() => normalizeItems(options), [options])
    const grouped = isGroupedOptions(options)

    const itemToStringLabel = (item: AutocompleteOption) => getOptionLabel(item)
    const itemToStringValue = (item: AutocompleteOption) => String(item.value)

    const rootShared = {
      id: rootId,
      value,
      defaultValue,
      onValueChange: (
        next: string,
        details: AutocompleteRootChangeEventDetails,
      ) => {
        onChange?.(next, details)
      },
      mode,
      disabled,
      required,
      readOnly,
      name,
      inputRef,
      itemToStringLabel,
      itemToStringValue,
      autoHighlight,
      open,
      defaultOpen,
      onOpenChange,
      onOpenChangeComplete,
      limit,
      modal,
      openOnInputClick,
      highlightItemOnHover,
      keepHighlight,
      submitOnItemClick,
      onItemHighlighted,
      filter: filter ?? undefined,
    }

    const autocompleteTree = (
      <>
        {label != null && label !== '' && (
          <label
            className={styles.label}
            htmlFor={inputId}
            id={`${rootId}-label`}
          >
            {label}
          </label>
        )}
        <div className={styles.inputRow}>
          <BaseAutocomplete.Input
            id={inputId}
            className={cx(styles.input, inputClassName)}
            placeholder={placeholder}
            aria-labelledby={
              label != null && label !== '' ? `${rootId}-label` : undefined
            }
          />
          {clearable && (
            <BaseAutocomplete.Clear
              type="button"
              className={styles.clear}
              aria-label="Clear"
            />
          )}
          <span
            className={styles.inputChevron}
            aria-hidden
          >
            <ChevronDown size={16} />
          </span>
        </div>
        <BaseAutocomplete.Portal className={styles.portal}>
          <BaseAutocomplete.Positioner
            className={styles.positioner}
            sideOffset={8}
            side="bottom"
            align="start"
          >
            <BaseAutocomplete.Popup className={styles.popup}>
              {loading && (
                <BaseAutocomplete.Status className={styles.status}>
                  {loadingText}
                </BaseAutocomplete.Status>
              )}
              <BaseAutocomplete.Empty className={styles.empty}>
                {emptyText}
              </BaseAutocomplete.Empty>
              <BaseAutocomplete.List className={styles.list}>
                {isGroupedOptions(options)
                  ? options.map(group => (
                      <BaseAutocomplete.Group
                        key={group.groupLabel}
                        items={group.options}
                        className={styles.group}
                      >
                        <BaseAutocomplete.GroupLabel
                          className={styles.groupLabel}
                        >
                          {group.groupLabel}
                        </BaseAutocomplete.GroupLabel>
                        <BaseAutocomplete.Collection>
                          {(item: AutocompleteOption, index: number) => (
                            <BaseAutocomplete.Item
                              key={item.value}
                              value={item}
                              disabled={item.disabled}
                              index={index}
                              className={styles.item}
                            >
                              <span className={styles.itemText}>
                                {item.label}
                              </span>
                              {(item.icon != null ||
                                (item.icons != null &&
                                  item.icons.length > 0)) && (
                                <span
                                  className={styles.itemIcons}
                                  aria-hidden
                                >
                                  {item.icon}
                                  {item.icons}
                                </span>
                              )}
                            </BaseAutocomplete.Item>
                          )}
                        </BaseAutocomplete.Collection>
                      </BaseAutocomplete.Group>
                    ))
                  : (item: AutocompleteOption, index: number) => (
                      <BaseAutocomplete.Item
                        key={item.value}
                        value={item}
                        disabled={item.disabled}
                        index={index}
                        className={styles.item}
                      >
                        <span className={styles.itemText}>{item.label}</span>
                        {(item.icon != null ||
                          (item.icons != null && item.icons.length > 0)) && (
                          <span
                            className={styles.itemIcons}
                            aria-hidden
                          >
                            {item.icon}
                            {item.icons}
                          </span>
                        )}
                      </BaseAutocomplete.Item>
                    )}
              </BaseAutocomplete.List>
            </BaseAutocomplete.Popup>
          </BaseAutocomplete.Positioner>
        </BaseAutocomplete.Portal>
      </>
    )

    return (
      <div
        ref={ref}
        className={cx(styles.root, className)}
        style={style}
      >
        {grouped ? (
          <BaseAutocomplete.Root
            {...rootShared}
            items={
              normalizedItems as readonly {
                value: string
                items: readonly AutocompleteOption[]
              }[]
            }
            filteredItems={
              filteredItems as
                | readonly {
                    value: string
                    items: readonly AutocompleteOption[]
                  }[]
                | undefined
            }
          >
            {autocompleteTree}
          </BaseAutocomplete.Root>
        ) : (
          <BaseAutocomplete.Root
            {...rootShared}
            items={normalizedItems as readonly AutocompleteOption[]}
            filteredItems={
              filteredItems as readonly AutocompleteOption[] | undefined
            }
          >
            {autocompleteTree}
          </BaseAutocomplete.Root>
        )}
      </div>
    )
  },
)

Autocomplete.displayName = 'Autocomplete'
