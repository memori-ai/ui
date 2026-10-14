import * as React from 'react'
import type { ColumnFiltersState } from '@tanstack/react-table'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import type { FilterDef } from '../Table/tableTypes'
import { FilterBarChips } from './FilterBarChips'
import { FilterBarPopover } from './FilterBarPopover'
import { FilterBarSearch } from './FilterBarSearch'

export interface FilterBarProps {
  /**
   * Search text. The search field renders when `search` or `onSearchChange` is set.
   */
  search?: string

  /**
   * Called on every keystroke (no debounce: debounce in the caller if needed).
   */
  onSearchChange?: (value: string) => void

  /**
   * Search placeholder and accessible label. Defaults to the `table.searchPlaceholder` translation.
   */
  searchPlaceholder?: string

  /**
   * Filter definitions (same shape as `Table` `filterDefs`). The filter popover and the
   * active-filter chips render only when this is non-empty.
   */
  filters?: FilterDef[]

  /**
   * Committed filter values (`{ id, value }[]`). Uncontrolled when omitted.
   */
  value?: ColumnFiltersState

  /**
   * Called when filters are applied from the popover or removed from the chips.
   */
  onValueChange?: (value: ColumnFiltersState) => void

  /**
   * Slot rendered after the filter button (toggles, view switches, actions).
   */
  extra?: React.ReactNode

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties
}

export const FilterBar = React.forwardRef<HTMLDivElement, FilterBarProps>(
  (
    {
      search,
      onSearchChange,
      searchPlaceholder,
      filters,
      value,
      onValueChange,
      extra,
      className,
      style,
    },
    ref,
  ) => {
    const { t } = useTranslation()

    const [searchDraft, setSearchDraft] = React.useState(search ?? '')
    React.useEffect(() => {
      if (search !== undefined) {
        setSearchDraft(search)
      }
    }, [search])

    const [innerValue, setInnerValue] = React.useState<ColumnFiltersState>([])
    const committed = value ?? innerValue

    const handleSearch = (next: string) => {
      setSearchDraft(next)
      onSearchChange?.(next)
    }

    const handleFilters = (next: ColumnFiltersState) => {
      if (value === undefined) {
        setInnerValue(next)
      }
      onValueChange?.(next)
    }

    const showSearch = search !== undefined || onSearchChange !== undefined
    const hasFilters = (filters?.length ?? 0) > 0
    const hasExtra = extra != null
    const placeholder = searchPlaceholder ?? t('table.searchPlaceholder')

    return (
      <div
        ref={ref}
        className={cx('memori-filter-bar', className)}
        style={style}
      >
        {showSearch || hasFilters || hasExtra ? (
          <div className="memori-filter-bar__controls">
            {showSearch ? (
              <FilterBarSearch
                value={searchDraft}
                onChange={handleSearch}
                placeholder={placeholder}
              />
            ) : null}
            {hasFilters ? (
              <FilterBarPopover
                filterDefs={filters!}
                value={committed}
                onChange={handleFilters}
              />
            ) : null}
            {hasExtra ? (
              <div className="memori-filter-bar__extra">{extra}</div>
            ) : null}
          </div>
        ) : null}
        {hasFilters ? (
          <FilterBarChips
            filterDefs={filters!}
            value={committed}
            onChange={handleFilters}
          />
        ) : null}
      </div>
    )
  },
)

FilterBar.displayName = 'FilterBar'

export default FilterBar
