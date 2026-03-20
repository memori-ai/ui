import * as React from 'react'
import { flexRender, type Cell } from '@tanstack/react-table'
import cx from 'classnames'

export interface TableCellProps<TData> {
  cell: Cell<TData, unknown>
}

export function TableCell<TData>({ cell }: TableCellProps<TData>) {
  return (
    <td
      className={cx(
        'memori-table__cell',
        cell.column.id === 'select' && 'memori-table__cell--select',
      )}
      style={{ width: cell.column.getSize() }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}
