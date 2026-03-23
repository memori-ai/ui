import * as React from 'react'
import { flexRender, type Table as TanStackTable } from '@tanstack/react-table'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'

export interface TableHeaderProps<TData> {
  table: TanStackTable<TData>
  /** Optional second row (e.g. column filters), as `<tr>` children */
  filterRow?: React.ReactNode
  /** Full-width row below filters, above the table body (e.g. bulk / selection toolbar) */
  selectionToolbar?: React.ReactNode
}

export function TableHeader<TData>({
  table,
  filterRow,
  selectionToolbar,
}: TableHeaderProps<TData>) {
  const { t } = useTranslation()
  return (
    <thead className="memori-table__head">
      {table.getHeaderGroups().map(headerGroup => (
        <tr
          key={headerGroup.id}
          className="memori-table__header-row"
        >
          {headerGroup.headers.map(header => {
            const canSort = header.column.getCanSort()
            const canResize = header.column.getCanResize()
            const sortDir = header.column.getIsSorted()
            const pinned = header.column.getIsPinned()
            const ariaSort = canSort
              ? sortDir === 'asc'
                ? 'ascending'
                : sortDir === 'desc'
                  ? 'descending'
                  : 'none'
              : undefined

            const headerLabel =
              typeof header.column.columnDef.header === 'string'
                ? header.column.columnDef.header
                : header.column.id

            const pinStyle: React.CSSProperties = {}
            if (pinned === 'left') {
              pinStyle.position = 'sticky'
              pinStyle.left = header.column.getStart('left')
              pinStyle.zIndex = 3
            } else if (pinned === 'right') {
              pinStyle.position = 'sticky'
              pinStyle.right = header.column.getAfter('right')
              pinStyle.zIndex = 3
            }

            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                className={cx(
                  'memori-table__header-cell',
                  header.column.id === 'select' &&
                    'memori-table__header-cell--select',
                  pinned === 'left' && 'memori-table__header-cell--pinned-left',
                  pinned === 'right' &&
                    'memori-table__header-cell--pinned-right',
                  canSort && 'memori-table__header-cell--sortable',
                  canResize &&
                    !canSort &&
                    'memori-table__header-cell--resizable',
                  sortDir === 'asc' && 'memori-table__header-cell--sorted-asc',
                  sortDir === 'desc' &&
                    'memori-table__header-cell--sorted-desc',
                  sortDir && 'memori-table__header-cell--sorted',
                )}
                style={{
                  width: header.getSize(),
                  ...pinStyle,
                }}
                scope="col"
                aria-sort={ariaSort}
              >
                {header.isPlaceholder ? null : (
                  <div className="memori-table__header-inner">
                    <div className="memori-table__header-main">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </div>
                    {canSort && (
                      <button
                        type="button"
                        className={cx(
                          'memori-table__sort-button',
                          sortDir === 'asc' && 'memori-table__sort-button--asc',
                          sortDir === 'desc' &&
                            'memori-table__sort-button--desc',
                          !sortDir && 'memori-table__sort-button--inactive',
                        )}
                        onClick={header.column.getToggleSortingHandler()}
                        aria-label={t('table.sortBy', { label: headerLabel })}
                      >
                        {sortDir === 'asc' ? (
                          <ArrowUp
                            className="memori-table__sort-icon"
                            size={14}
                            strokeWidth={2.5}
                            aria-hidden
                          />
                        ) : sortDir === 'desc' ? (
                          <ArrowDown
                            className="memori-table__sort-icon"
                            size={14}
                            strokeWidth={2.5}
                            aria-hidden
                          />
                        ) : (
                          <ArrowUpDown
                            className="memori-table__sort-icon memori-table__sort-icon--bidirectional"
                            size={14}
                            strokeWidth={2.5}
                            aria-hidden
                          />
                        )}
                      </button>
                    )}
                    {canResize && (
                      <div
                        role="separator"
                        aria-orientation="vertical"
                        aria-label={t('table.resizeColumn', {
                          label: headerLabel,
                        })}
                        className={cx(
                          'memori-table__resize-handle',
                          header.column.getIsResizing() &&
                            'memori-table__resize-handle--active',
                        )}
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                      />
                    )}
                  </div>
                )}
              </th>
            )
          })}
        </tr>
      ))}
      {filterRow}
      {selectionToolbar ? (
        <tr className="memori-table__toolbar-row">
          <th
            className="memori-table__toolbar-cell"
            colSpan={table.getVisibleLeafColumns().length}
            scope="row"
          >
            {selectionToolbar}
          </th>
        </tr>
      ) : null}
    </thead>
  )
}
