import * as React from 'react'
import type {
  ColumnFiltersState,
  Table as TanStackTable,
} from '@tanstack/react-table'
import { Columns3, Search } from 'lucide-react'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { Dropdown } from '../Dropdown'
import { Input } from '../Input'
import type { FilterDef } from './tableTypes'
import { TableFilterPopover } from './TableFilterPopover'
import './tableMeta'

export interface TableControlsProps<TData> {
  table: TanStackTable<TData>
  showSearch: boolean
  search: string
  onSearchInputChange: (value: string) => void
  globalFilterPlaceholder?: string
  showColumnsMenu: boolean
  filterDefs?: FilterDef[]
  columnFilters: ColumnFiltersState
  onColumnFiltersChange: (next: ColumnFiltersState) => void
}

export function TableControls<TData>({
  table,
  showSearch,
  search,
  onSearchInputChange,
  globalFilterPlaceholder,
  showColumnsMenu,
  filterDefs,
  columnFilters,
  onColumnFiltersChange,
}: TableControlsProps<TData>) {
  const { t } = useTranslation()
  const searchPlaceholder =
    globalFilterPlaceholder ?? t('table.searchPlaceholder')
  const hideableColumns = table
    .getAllLeafColumns()
    .filter(
      c =>
        c.getCanHide() &&
        !c.columnDef.meta?.disableHiding &&
        c.id !== 'select' &&
        c.id !== 'actions',
    )

  return (
    <div className="memori-table-controls">
      {showSearch ? (
        <div className="memori-table-controls__search-wrap">
          <Search
            className="memori-table-controls__search-icon"
            size={18}
            strokeWidth={2}
            aria-hidden
          />
          <Input
            type="search"
            className="memori-table-controls__search memori-table-controls__search-input"
            placeholder={searchPlaceholder}
            value={search}
            onChange={e => onSearchInputChange(e.target.value)}
            aria-label={searchPlaceholder}
          />
        </div>
      ) : null}
      {filterDefs && filterDefs.length > 0 ? (
        <TableFilterPopover
          filterDefs={filterDefs}
          value={columnFilters}
          onChange={onColumnFiltersChange}
        />
      ) : null}
      {showColumnsMenu && hideableColumns.length > 0 ? (
        <Dropdown>
          <Dropdown.Trigger
            showChevron={false}
            render={(props, state) => (
              <Button
                {...props}
                type="button"
                variant="toolbar"
                active={state.open}
                className={cx(
                  'memori-table-controls__columns-trigger',
                  props.className,
                )}
              >
                <Columns3
                  size={16}
                  aria-hidden
                />
                {t('table.columns')}
              </Button>
            )}
          />
          <Dropdown.Menu align="end">
            <div
              className="memori-table-controls__columns-panel"
              role="group"
              aria-label={t('table.columnVisibilityAria')}
            >
              {hideableColumns.map(column => {
                const label =
                  typeof column.columnDef.header === 'string'
                    ? column.columnDef.header
                    : column.id
                return (
                  <label
                    key={column.id}
                    className={cx(
                      'memori-table-controls__column-item',
                      !column.getCanHide() &&
                        'memori-table-controls__column-item--locked',
                    )}
                  >
                    <Checkbox
                      checked={column.getIsVisible()}
                      disabled={!column.getCanHide()}
                      onChange={checked => column.toggleVisibility(!!checked)}
                      aria-label={t('table.showColumn', { label })}
                    />
                    <span className="memori-table-controls__column-label">
                      {label}
                    </span>
                  </label>
                )
              })}
            </div>
          </Dropdown.Menu>
        </Dropdown>
      ) : null}
    </div>
  )
}
