import * as React from 'react'
import type { Table as TanStackTable } from '@tanstack/react-table'
import { TableRow } from './TableRow'

export interface TableBodyProps<TData> {
  table: TanStackTable<TData>
  selectionEnabled?: boolean
}

export function TableBody<TData>({
  table,
  selectionEnabled = false,
}: TableBodyProps<TData>) {
  const rows = table.getRowModel().rows

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
