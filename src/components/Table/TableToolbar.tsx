import * as React from 'react'
import type { Row, Table as TanStackTable } from '@tanstack/react-table'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button'
import type { BulkAction } from './tableTypes'

export interface TableToolbarProps<TData> {
  table: TanStackTable<TData>
  className?: string
  bulkActions?: BulkAction<TData>[]
  /** Legacy slot when `bulkActions` is not used */
  legacyToolbar?: React.ReactNode
}

export function TableToolbar<TData>({
  table,
  className,
  bulkActions,
  legacyToolbar,
}: TableToolbarProps<TData>) {
  const { t } = useTranslation()
  const count = table.getSelectedRowModel().rows.length
  const hasBulk = (bulkActions?.length ?? 0) > 0

  if (count === 0) {
    return null
  }

  const rows = table.getSelectedRowModel().rows as Row<TData>[]

  if (hasBulk) {
    return (
      <div
        className={cx(
          'memori-table-toolbar',
          'memori-table-toolbar--bulk',
          className,
        )}
        role="toolbar"
        aria-label={t('table.bulkActionsAria')}
      >
        <span className="memori-table-toolbar__count">
          {t('table.selectionCount', { count })}
        </span>
        <div className="memori-table-toolbar__actions">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => table.resetRowSelection()}
          >
            {t('table.clearSelection')}
          </Button>
          {bulkActions!.map(action => (
            <Button
              key={action.label}
              type="button"
              variant={action.variant === 'danger' ? 'danger' : 'outline'}
              size="sm"
              icon={action.icon}
              onClick={() => action.onClick(rows)}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  if (legacyToolbar !== undefined) {
    return (
      <div
        className={cx('memori-table-toolbar', className)}
        role="toolbar"
        aria-label={t('table.rowSelectionAria')}
      >
        <span className="memori-table-toolbar__count">
          {t('table.selectedCount', { count })}
        </span>
        {legacyToolbar}
      </div>
    )
  }

  return null
}
