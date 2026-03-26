import * as React from 'react'
import { flexRender, type Cell } from '@tanstack/react-table'
import cx from 'classnames'
import './tableMeta'

const BADGE_VARIANT_CLASS: Record<string, string> = {
  primary: 'memori-table__badge--primary',
  secondary: 'memori-table__badge--secondary',
  accent: 'memori-table__badge--accent',
  neutral: 'memori-table__badge--neutral',
  blue: 'memori-table__badge--info',
  teal: 'memori-table__badge--secondary',
  info: 'memori-table__badge--info',
  success: 'memori-table__badge--success',
  warning: 'memori-table__badge--warning',
  danger: 'memori-table__badge--danger',
  error: 'memori-table__badge--danger',
}

function badgeVariantClass(token: string | undefined): string {
  if (!token) {
    return 'memori-table__badge--neutral'
  }
  return BADGE_VARIANT_CLASS[token] ?? 'memori-table__badge--neutral'
}

export interface TableCellProps<TData> {
  cell: Cell<TData, unknown>
}

export function TableCell<TData>({ cell }: TableCellProps<TData>) {
  const pinned = cell.column.getIsPinned()
  const pinStyle: React.CSSProperties = {}
  const pinnedZBase = cell.column.id === 'actions' ? 2 : 1
  if (pinned === 'left') {
    pinStyle.position = 'sticky'
    pinStyle.left = cell.column.getStart('left')
    pinStyle.zIndex = pinnedZBase
  } else if (pinned === 'right') {
    pinStyle.position = 'sticky'
    pinStyle.right = cell.column.getAfter('right')
    // Actions column uses a row-level CSS variable so hovered rows stack above scrolling cell content.
    pinStyle.zIndex =
      cell.column.id === 'actions'
        ? ('var(--memori-table-row-actions-z, 2)' as React.CSSProperties['zIndex'])
        : pinnedZBase
  }

  const meta = cell.column.columnDef.meta
  const raw = cell.getValue()
  const badgeKey = raw !== null && raw !== undefined ? String(raw) : ''
  const badgeToken = meta?.badgeColorMap?.[badgeKey]
  const variantClass = badgeVariantClass(badgeToken)

  const inner = flexRender(cell.column.columnDef.cell, cell.getContext())

  const content = meta?.badge ? (
    <span
      className={cx('memori-table__badge', variantClass)}
      data-value={badgeKey}
    >
      {inner}
    </span>
  ) : (
    inner
  )

  return (
    <td
      className={cx(
        'memori-table__cell',
        cell.column.id === 'select' && 'memori-table__cell--select',
        cell.column.id === 'actions' && 'memori-table__cell--actions',
        pinned === 'left' && 'memori-table__cell--pinned-left',
        pinned === 'right' && 'memori-table__cell--pinned-right',
      )}
      style={{
        width: cell.column.getSize(),
        ...pinStyle,
      }}
    >
      {content}
    </td>
  )
}
