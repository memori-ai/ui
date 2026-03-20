import * as React from 'react'
import type { Table as TanStackTable } from '@tanstack/react-table'
import cx from 'classnames'

export interface TableToolbarProps<TData> {
  table: TanStackTable<TData>
  children?: React.ReactNode
  className?: string
}

export function TableToolbar<TData>({
  table,
  children,
  className,
}: TableToolbarProps<TData>) {
  const count = table.getSelectedRowModel().rows.length
  if (count === 0) {
    return null
  }

  return (
    <div
      className={cx('memori-table-toolbar', className)}
      role="toolbar"
      aria-label="Row selection"
    >
      <span className="memori-table-toolbar__count">{count} selected</span>
      {children}
    </div>
  )
}
