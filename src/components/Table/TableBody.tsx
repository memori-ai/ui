import * as React from 'react'
import type { Table as TanStackTable } from '@tanstack/react-table'
import { TableRow } from './TableRow'

export interface TableBodyProps<TData> {
  table: TanStackTable<TData>
  selectionEnabled?: boolean
  isLoading?: boolean
  emptyState?: React.ReactNode
  skeletonRowCount?: number
}

export function TableBody<TData>({
  table,
  selectionEnabled = false,
  isLoading = false,
  emptyState,
  skeletonRowCount = 10,
}: TableBodyProps<TData>) {
  const rows = table.getRowModel().rows
  const visibleColumns = table.getVisibleLeafColumns()
  const colCount = visibleColumns.length

  if (isLoading) {
    const n = Math.max(1, skeletonRowCount)
    return (
      <tbody className="memori-table__body memori-table__body--loading">
        {Array.from({ length: n }).map((_, i) => (
          <tr
            key={`sk-${i}`}
            className="memori-table__row memori-table__row--skeleton"
          >
            {visibleColumns.map(col => (
              <td
                key={col.id}
                className="memori-table__cell memori-table__cell--skeleton"
                style={{ width: col.getSize() }}
              >
                <span className="memori-table__skeleton-bar" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }

  if (rows.length === 0) {
    return (
      <tbody className="memori-table__body">
        <tr className="memori-table__row memori-table__row--empty">
          <td
            className="memori-table__cell memori-table__cell--empty"
            colSpan={colCount}
          >
            <div className="memori-table__empty">
              {emptyState ?? 'No results found.'}
            </div>
          </td>
        </tr>
      </tbody>
    )
  }

  return (
    <tbody className="memori-table__body">
      {rows.map(row => (
        <TableRow
          key={row.id}
          row={row}
          selectionEnabled={selectionEnabled}
        />
      ))}
    </tbody>
  )
}
