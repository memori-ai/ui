import * as React from 'react'
import type { Table as TanStackTable } from '@tanstack/react-table'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Button } from '../Button'
import { Input } from '../Input'
import { SelectBox } from '../SelectBox'

export interface TablePaginationProps<TData> {
  table: TanStackTable<TData>
  pageSizeOptions?: number[]
  manualPagination?: boolean
  /** Total rows on the server when using manual pagination */
  rowCount?: number
}

export function TablePagination<TData>({
  table,
  pageSizeOptions = [10, 25, 50, 100],
  manualPagination = false,
  rowCount: rowCountProp,
}: TablePaginationProps<TData>) {
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

  const jumpFieldId = React.useId()

  const [jumpValue, setJumpValue] = React.useState(() => String(pageIndex + 1))
  React.useEffect(() => {
    setJumpValue(String(pageIndex + 1))
  }, [pageIndex])

  const applyJump = React.useCallback(() => {
    const n = Number.parseInt(jumpValue, 10)
    const max = table.getPageCount()
    if (Number.isNaN(n) || max === 0) {
      return
    }
    const clamped = Math.min(Math.max(1, n), max)
    table.setPageIndex(clamped - 1)
    setJumpValue(String(clamped))
  }, [jumpValue, table])

  const displayPageCount = table.getPageCount()

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
            onClick={() => table.setPageIndex(0)}
            ariaLabel="First page"
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
            {numberFormat.format(displayPageCount === 0 ? 0 : pageIndex + 1)} /{' '}
            {numberFormat.format(displayPageCount)}
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
          <Button
            type="button"
            variant="outline"
            size="sm"
            shape="circle"
            disabled={!table.getCanNextPage()}
            onClick={() =>
              table.setPageIndex(Math.max(0, table.getPageCount() - 1))
            }
            ariaLabel="Last page"
            icon={
              <ChevronsRight
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
