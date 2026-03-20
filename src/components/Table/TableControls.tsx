import * as React from 'react'
import type { Table as TanStackTable } from '@tanstack/react-table'
import { Columns3 } from 'lucide-react'
import cx from 'classnames'
import { Checkbox } from '../Checkbox'
import { Dropdown } from '../Dropdown'
import { Input } from '../Input'
import './tableMeta'

export interface TableControlsProps<TData> {
  table: TanStackTable<TData>
  showSearch: boolean
  search: string
  onSearchInputChange: (value: string) => void
  globalFilterPlaceholder?: string
  showColumnsMenu: boolean
}

export function TableControls<TData>({
  table,
  showSearch,
  search,
  onSearchInputChange,
  globalFilterPlaceholder = 'Search…',
  showColumnsMenu,
}: TableControlsProps<TData>) {
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
        <Input
          type="search"
          className="memori-table-controls__search"
          placeholder={globalFilterPlaceholder}
          value={search}
          onChange={e => onSearchInputChange(e.target.value)}
          aria-label={globalFilterPlaceholder}
        />
      ) : null}
      {showColumnsMenu && hideableColumns.length > 0 ? (
        <Dropdown>
          <Dropdown.Trigger
            showChevron={false}
            className="memori-table-controls__columns-trigger"
          >
            <Columns3
              size={16}
              aria-hidden
            />
            Columns
          </Dropdown.Trigger>
          <Dropdown.Menu align="end">
            <div
              className="memori-table-controls__columns-panel"
              role="group"
              aria-label="Column visibility"
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
                      aria-label={`Show ${label}`}
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
