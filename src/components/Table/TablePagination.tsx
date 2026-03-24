import * as React from 'react'
import type { Table as TanStackTable } from '@tanstack/react-table'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'
import { Button } from '../Button'
import { SelectBox } from '../SelectBox'
import type { TablePaginationVariant } from './tableTypes'
import {
  getDetailedPaginationPadding,
  getPaginationWindowItems,
  PAGINATION_DETAILED_SLOT_COUNT,
} from './paginationWindow'
import { usePaginationLeadingBlockEnabled } from './usePaginationLeadingBlock'

export interface TablePaginationProps<TData> {
  table: TanStackTable<TData>
  pageSizeOptions?: number[]
  manualPagination?: boolean
  /** Total rows on the server when using manual pagination */
  rowCount?: number
  /**
   * `simplified` — range + first/prev/page badge/next/last + page size (default).
   * `detailed` — total count on the left, windowed page buttons in the center, page size on the right.
   */
  variant?: TablePaginationVariant
  /**
   * When `variant` is `detailed`, optional noun for the total line, e.g. "Reminders" → "Total Reminders: 78".
   */
  paginationTotalLabel?: string
}

export function TablePagination<TData>({
  table,
  pageSizeOptions = [10, 25, 50, 100],
  manualPagination = false,
  rowCount: rowCountProp,
  variant = 'simplified',
  paginationTotalLabel,
}: TablePaginationProps<TData>) {
  const { t } = useTranslation()
  const { pageIndex, pageSize } = table.getState().pagination
  const totalRows =
    manualPagination && rowCountProp !== undefined
      ? rowCountProp
      : table.getCoreRowModel().rows.length

  const start = totalRows === 0 ? 0 : pageIndex * pageSize + 1
  const end = Math.min((pageIndex + 1) * pageSize, totalRows)

  const numberFormat = React.useMemo(() => new Intl.NumberFormat(undefined), [])

  const sizeSelectOptions = React.useMemo(
    () =>
      pageSizeOptions.map(n => ({
        value: String(n),
        label: String(n),
      })),
    [pageSizeOptions],
  )

  const displayPageCount = table.getPageCount()
  const current1Based = displayPageCount === 0 ? 0 : pageIndex + 1

  const leadingBlockOk = usePaginationLeadingBlockEnabled()

  const detailedWindowItems = React.useMemo(
    () =>
      getPaginationWindowItems(current1Based, Math.max(0, displayPageCount), {
        enableLeadingBlock: leadingBlockOk,
        enableTrailingBlock: leadingBlockOk,
      }),
    [current1Based, displayPageCount, leadingBlockOk],
  )

  const detailedPadding = React.useMemo(
    () => getDetailedPaginationPadding(detailedWindowItems.length),
    [detailedWindowItems.length],
  )

  const totalLine =
    paginationTotalLabel != null && paginationTotalLabel !== ''
      ? t('table.paginationTotalWithLabel', {
          label: paginationTotalLabel,
          total: numberFormat.format(totalRows),
        })
      : t('table.paginationTotalOnly', {
          total: numberFormat.format(totalRows),
        })

  const pageSizeSelect = (
    <div className="memori-table-pagination__page-size">
      <SelectBox
        className="memori-table-pagination__select"
        label={
          variant === 'detailed'
            ? t('table.showPerPage')
            : t('table.rowsPerPage')
        }
        name="tablePageSize"
        options={sizeSelectOptions}
        value={String(pageSize)}
        onChange={val => {
          if (val !== null) {
            table.setPageSize(Number(val))
          }
        }}
      />
    </div>
  )

  if (variant === 'detailed') {
    return (
      <div
        className={cx(
          'memori-table-pagination',
          'memori-table-pagination--detailed',
        )}
        role="navigation"
        aria-label={t('table.paginationNavAria')}
      >
        <span className="memori-table-pagination__total">{totalLine}</span>
        <div className="memori-table-pagination__nav memori-table-pagination__nav--pages">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            ariaLabel={t('table.paginationPrev')}
            icon={
              <ChevronLeft
                size={18}
                aria-hidden
              />
            }
          />
          <div
            className="memori-table-pagination__page-window"
            style={
              {
                '--memori-table-pagination-slots':
                  PAGINATION_DETAILED_SLOT_COUNT,
              } as React.CSSProperties
            }
          >
            {Array.from({ length: detailedPadding.before }, (_, i) => (
              <span
                key={`pad-l-${i}`}
                className="memori-table-pagination__slot-spacer"
                aria-hidden
              />
            ))}
            {detailedWindowItems.map((item, index) =>
              item === '...' ? (
                <span
                  key={`ellipsis-${index}`}
                  className="memori-table-pagination__ellipsis"
                  aria-hidden
                >
                  ...
                </span>
              ) : (
                <Button
                  key={`page-${item}-${index}`}
                  type="button"
                  variant={item === current1Based ? 'soft' : 'outline'}
                  size="sm"
                  className="memori-table-pagination__page-num"
                  aria-label={t('table.paginationPage', { page: item })}
                  aria-current={item === current1Based ? 'page' : undefined}
                  onClick={() => table.setPageIndex(item - 1)}
                >
                  {numberFormat.format(item)}
                </Button>
              ),
            )}
            {Array.from({ length: detailedPadding.after }, (_, i) => (
              <span
                key={`pad-r-${i}`}
                className="memori-table-pagination__slot-spacer"
                aria-hidden
              />
            ))}
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            ariaLabel={t('table.paginationNext')}
            icon={
              <ChevronRight
                size={18}
                aria-hidden
              />
            }
          />
        </div>
        {pageSizeSelect}
      </div>
    )
  }

  return (
    <div
      className="memori-table-pagination"
      role="navigation"
      aria-label={t('table.paginationNavAria')}
    >
      <span className="memori-table-pagination__range">
        {t('table.paginationRange', {
          start: numberFormat.format(start),
          end: numberFormat.format(end),
          total: numberFormat.format(totalRows),
        })}
      </span>
      <div className="memori-table-pagination__main">
        <div className="memori-table-pagination__nav">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.setPageIndex(0)}
            ariaLabel={t('table.paginationFirst')}
            icon={
              <ChevronsLeft
                size={18}
                aria-hidden
              />
            }
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            ariaLabel={t('table.paginationPrev')}
            icon={
              <ChevronLeft
                size={18}
                aria-hidden
              />
            }
          />
          <span className="memori-table-pagination__page-badge">
            {numberFormat.format(displayPageCount === 0 ? 0 : pageIndex + 1)} /{' '}
            {numberFormat.format(displayPageCount)}
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            ariaLabel={t('table.paginationNext')}
            icon={
              <ChevronRight
                size={18}
                aria-hidden
              />
            }
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={!table.getCanNextPage()}
            onClick={() =>
              table.setPageIndex(Math.max(0, table.getPageCount() - 1))
            }
            ariaLabel={t('table.paginationLast')}
            icon={
              <ChevronsRight
                size={18}
                aria-hidden
              />
            }
          />
        </div>
        {pageSizeSelect}
      </div>
    </div>
  )
}
