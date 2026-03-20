import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type ColumnDef,
  type ColumnSizingState,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
} from '@tanstack/react-table'
import cx from 'classnames'
import { Checkbox } from '../Checkbox'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import { TablePagination } from './TablePagination'
import { TableToolbar } from './TableToolbar'
import './styles.css'

export interface TableProps<TData> {
  /**
   * Row data. Should be stable or memoized references when used with React state upstream.
   */
  data: TData[]
  /**
   * Column definitions (TanStack Table `ColumnDef`).
   */
  columns: ColumnDef<TData, unknown>[]
  /**
   * Optional class on the outer wrapper.
   */
  className?: string
  /**
   * When `true`, shows a leading checkbox column and tracks `rowSelection` in TanStack Table.
   */
  enableRowSelection?: boolean
  /**
   * Stable row id for selection keys. Defaults to `String(row.id)` when present, otherwise the row index.
   */
  getRowId?: (originalRow: TData, index: number) => string
  /**
   * When `true`, paginates rows client-side and shows `TablePagination` controls.
   */
  enablePagination?: boolean
  /**
   * Initial / default rows per page when `enablePagination` is `true`.
   * If not present in `pageSizeOptions`, the first option is used.
   * @default 10
   */
  initialPageSize?: number
  /**
   * Page size choices shown in the pagination SelectBox.
   * @default [10, 25, 50, 100]
   */
  pageSizeOptions?: number[]
  /**
   * Optional content rendered in the selection toolbar when at least one row is selected (e.g. batch actions).
   */
  toolbar?: React.ReactNode
  /**
   * Max height of the table scroll area (header + body). When set, the body scrolls vertically and the header stays sticky.
   * Pass `false` to let the table grow with content (page scrolls instead).
   * Omit to use the default (desktop: min(70vh, 32rem); narrow viewports use a shorter cap in CSS).
   */
  maxBodyHeight?: React.CSSProperties['maxHeight'] | false
}

export function Table<TData>({
  data,
  columns,
  className,
  enableRowSelection = false,
  getRowId: getRowIdProp,
  enablePagination = false,
  initialPageSize = 10,
  pageSizeOptions = [10, 25, 50, 100],
  toolbar,
  maxBodyHeight,
}: TableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnSizing, setColumnSizing] = React.useState<ColumnSizingState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})

  const [pagination, setPagination] = React.useState<PaginationState>(() => ({
    pageIndex: 0,
    pageSize: pageSizeOptions.includes(initialPageSize)
      ? initialPageSize
      : (pageSizeOptions[0] ?? 10),
  }))

  const getRowId = React.useCallback(
    (row: TData, index: number) => {
      if (getRowIdProp) {
        return getRowIdProp(row, index)
      }
      const r = row as Record<string, unknown>
      if (r.id !== undefined && r.id !== null) {
        return String(r.id)
      }
      return String(index)
    },
    [getRowIdProp],
  )

  const tableColumns = React.useMemo((): ColumnDef<TData, unknown>[] => {
    if (!enableRowSelection) {
      return columns
    }

    const selectColumn: ColumnDef<TData, unknown> = {
      id: 'select',
      size: 44,
      minSize: 44,
      maxSize: 52,
      enableSorting: false,
      enableResizing: false,
      header: ({ table }) => (
        <Checkbox
          checked={
            enablePagination
              ? table.getIsAllPageRowsSelected()
              : table.getIsAllRowsSelected()
          }
          indeterminate={
            enablePagination
              ? table.getIsSomePageRowsSelected()
              : table.getIsSomeRowsSelected()
          }
          onChange={checked => {
            if (enablePagination) {
              table.toggleAllPageRowsSelected(!!checked)
            } else {
              table.toggleAllRowsSelected(!!checked)
            }
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={checked => row.toggleSelected(!!checked)}
          aria-label="Select row"
        />
      ),
    }

    return [selectColumn, ...columns]
  }, [columns, enablePagination, enableRowSelection])

  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...(enablePagination
      ? { getPaginationRowModel: getPaginationRowModel() }
      : {}),
    state: {
      sorting,
      columnSizing,
      ...(enableRowSelection ? { rowSelection } : {}),
      ...(enablePagination ? { pagination } : {}),
    },
    onSortingChange: setSorting,
    onColumnSizingChange: setColumnSizing,
    ...(enableRowSelection ? { onRowSelectionChange: setRowSelection } : {}),
    ...(enablePagination ? { onPaginationChange: setPagination } : {}),
    columnResizeMode: 'onChange',
    enableColumnResizing: true,
    enableRowSelection,
    getRowId,
    defaultColumn: {
      minSize: 60,
      size: 150,
      maxSize: 800,
    },
  })

  const wrapperStyle =
    maxBodyHeight === false
      ? ({ '--memori-table-body-max-height': 'none' } as React.CSSProperties)
      : maxBodyHeight != null
        ? ({
            '--memori-table-body-max-height': String(maxBodyHeight),
          } as React.CSSProperties)
        : undefined

  return (
    <div
      className={cx('memori-table-wrapper', className)}
      style={wrapperStyle}
    >
      <div className="memori-table-scroll">
        <table
          className="memori-table"
          style={{
            width: '100%',
            minWidth: table.getTotalSize(),
          }}
        >
          <colgroup>
            {table.getVisibleLeafColumns().map(column => (
              <col
                key={column.id}
                style={{ width: column.getSize() }}
              />
            ))}
          </colgroup>
          <TableHeader table={table} />
          <TableBody
            table={table}
            selectionEnabled={enableRowSelection}
          />
        </table>
      </div>
      {(enableRowSelection && toolbar !== undefined) || enablePagination ? (
        <div className="memori-table-footer">
          {enableRowSelection && toolbar !== undefined && (
            <TableToolbar table={table}>{toolbar}</TableToolbar>
          )}
          {enablePagination && (
            <TablePagination
              table={table}
              pageSizeOptions={pageSizeOptions}
            />
          )}
        </div>
      ) : null}
    </div>
  )
}
