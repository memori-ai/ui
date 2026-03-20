import * as React from 'react'
import type { Table as TanStackTable } from '@tanstack/react-table'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../Button'
import { SelectBox } from '../SelectBox'

export interface TablePaginationProps<TData> {
  table: TanStackTable<TData>
  /**
   * Page size choices for the SelectBox (values are coerced to numbers).
   * @default [10, 25, 50, 100]
   */
  pageSizeOptions?: number[]
}

export function TablePagination<TData>({
  table,
  pageSizeOptions = [10, 25, 50, 100],
}: TablePaginationProps<TData>) {
  const { pageIndex, pageSize } = table.getState().pagination
  const pageCount = table.getPageCount()
  const totalRows = table.getCoreRowModel().rows.length
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

  return (
    <div
      className="memori-table-pagination"
      role="navigation"
      aria-label="Table pagination"
    >
      <span className="memori-table-pagination__range">
        {numberFormat.format(start)}–{numberFormat.format(end)} of{' '}
        {numberFormat.format(totalRows)}
      </span>
      <div className="memori-table-pagination__main">
        <div className="memori-table-pagination__nav">
          <Button
            type="button"
            variant="outline"
            size="sm"
            shape="circle"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            ariaLabel="Previous page"
            icon={
              <ChevronLeft
                size={18}
                aria-hidden
              />
            }
          />
          <span className="memori-table-pagination__page-badge">
            {numberFormat.format(pageCount === 0 ? 0 : pageIndex + 1)} /{' '}
            {numberFormat.format(pageCount)}
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            shape="circle"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            ariaLabel="Next page"
            icon={
              <ChevronRight
                size={18}
                aria-hidden
              />
            }
          />
        </div>
        <div className="memori-table-pagination__page-size">
          <SelectBox
            className="memori-table-pagination__select"
            label="Rows per page"
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
      </div>
    </div>
  )
}
