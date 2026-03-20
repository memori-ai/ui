import * as React from 'react'
import type { Row } from '@tanstack/react-table'
import cx from 'classnames'
import { TableCell } from './TableCell'

export interface TableRowProps<TData> {
  row: Row<TData>
  className?: string
  style?: React.CSSProperties
  /**
   * When `true`, exposes `aria-selected` and selected row styling for selection mode.
   */
  selectionEnabled?: boolean
}

export function TableRow<TData>({
  row,
  className,
  style,
  selectionEnabled = false,
}: TableRowProps<TData>) {
  const selected = row.getIsSelected()

  return (
    <tr
      aria-selected={selectionEnabled ? selected : undefined}
      className={cx(
        'memori-table__row',
        selectionEnabled && selected && 'memori-table__row--selected',
        className,
      )}
      style={style}
    >
      {row.getVisibleCells().map(cell => (
        <TableCell
          key={cell.id}
          cell={cell}
        />
      ))}
    </tr>
  )
}
