import * as React from 'react'
import type {
  ColumnFiltersState,
  Table as TanStackTable,
} from '@tanstack/react-table'
import cx from 'classnames'
import { Input } from '../Input'
import './tableMeta'

export interface TableFilterRowProps<TData> {
  table: TanStackTable<TData>
  columnFilters: ColumnFiltersState
  onColumnFiltersChange: (next: ColumnFiltersState) => void
  filterDebounceMs: number
}

function useDebouncedFilterCommit(
  ms: number,
  commit: (filters: ColumnFiltersState) => void,
) {
  const ref = React.useRef<number | undefined>(undefined)
  const pendingRef = React.useRef<ColumnFiltersState | null>(null)

  return React.useCallback(
    (next: ColumnFiltersState) => {
      pendingRef.current = next
      window.clearTimeout(ref.current)
      ref.current = window.setTimeout(() => {
        if (pendingRef.current) {
          commit(pendingRef.current)
          pendingRef.current = null
        }
      }, ms)
    },
    [commit, ms],
  )
}

export function TableFilterRow<TData>({
  table,
  columnFilters,
  onColumnFiltersChange,
  filterDebounceMs,
}: TableFilterRowProps<TData>) {
  const headerGroup = table.getHeaderGroups()[0]
  if (!headerGroup) {
    return null
  }

  const commitFilters = React.useCallback(
    (next: ColumnFiltersState) => {
      onColumnFiltersChange(next)
    },
    [onColumnFiltersChange],
  )

  const debouncedCommit = useDebouncedFilterCommit(
    filterDebounceMs,
    commitFilters,
  )

  const [textDrafts, setTextDrafts] = React.useState<Record<string, string>>(
    () => {
      const next: Record<string, string> = {}
      for (const col of table.getAllLeafColumns()) {
        if (col.columnDef.meta?.filterVariant === 'text') {
          const v = columnFilters.find(f => f.id === col.id)?.value
          next[col.id] = v == null ? '' : String(v)
        }
      }
      return next
    },
  )

  const columnFiltersKey = JSON.stringify(columnFilters)

  React.useEffect(() => {
    const next: Record<string, string> = {}
    for (const col of table.getAllLeafColumns()) {
      if (col.columnDef.meta?.filterVariant === 'text') {
        const v = columnFilters.find(f => f.id === col.id)?.value
        next[col.id] = v == null ? '' : String(v)
      }
    }
    setTextDrafts(next)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync when serialized filters change (stable identity)
  }, [columnFiltersKey, table])

  const setFilterValue = React.useCallback(
    (columnId: string, value: unknown) => {
      const rest = columnFilters.filter(f => f.id !== columnId)
      const next =
        value === '' || value === undefined
          ? rest
          : [...rest, { id: columnId, value }]
      commitFilters(next)
    },
    [columnFilters, commitFilters],
  )

  return (
    <tr
      className="memori-table__filter-row"
      aria-hidden
    >
      {headerGroup.headers.map(header => {
        const col = header.column
        const meta = col.columnDef.meta
        const variant = meta?.filterVariant

        if (header.isPlaceholder) {
          return (
            <th
              key={header.id}
              className="memori-table__filter-cell"
              style={{ width: header.getSize() }}
            />
          )
        }

        if (col.id === 'select' || col.id === 'actions') {
          return (
            <th
              key={header.id}
              className={cx(
                'memori-table__filter-cell',
                col.id === 'select' && 'memori-table__header-cell--select',
              )}
              style={{ width: header.getSize() }}
            />
          )
        }

        if (variant === 'select') {
          const options = meta?.filterOptions ?? []
          const raw = columnFilters.find(f => f.id === col.id)?.value
          const value = raw == null ? '' : String(raw)

          return (
            <th
              key={header.id}
              className="memori-table__filter-cell"
              style={{ width: header.getSize() }}
            >
              <select
                className="memori-table__filter-select"
                value={value}
                aria-label={`Filter ${col.id}`}
                onChange={e => {
                  const v = e.target.value
                  setFilterValue(col.id, v === '' ? undefined : v)
                }}
              >
                <option value="">All</option>
                {options.map(opt => (
                  <option
                    key={opt}
                    value={opt}
                  >
                    {opt}
                  </option>
                ))}
              </select>
            </th>
          )
        }

        if (variant === 'text') {
          const draft = textDrafts[col.id] ?? ''

          return (
            <th
              key={header.id}
              className="memori-table__filter-cell"
              style={{ width: header.getSize() }}
            >
              <Input
                size="sm"
                className="memori-table__filter-input"
                value={draft}
                aria-label={`Filter ${col.id}`}
                onChange={e => {
                  const v = e.target.value
                  setTextDrafts(prev => ({ ...prev, [col.id]: v }))
                  const rest = columnFilters.filter(f => f.id !== col.id)
                  const next =
                    v === '' ? rest : [...rest, { id: col.id, value: v }]
                  debouncedCommit(next)
                }}
              />
            </th>
          )
        }

        return (
          <th
            key={header.id}
            className="memori-table__filter-cell"
            style={{ width: header.getSize() }}
          />
        )
      })}
    </tr>
  )
}
