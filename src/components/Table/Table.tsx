import * as React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnSizingState,
  type ColumnPinningState,
  type VisibilityState,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  type Updater,
} from '@tanstack/react-table'
import cx from 'classnames'
import { MoreHorizontal } from 'lucide-react'
import { Checkbox } from '../Checkbox'
import { Dropdown } from '../Dropdown'
import { TableBody } from './TableBody'
import { TableControls } from './TableControls'
import { TableFilterChips } from './TableFilterChips'
import { TableFilterRow } from './TableFilterRow'
import { TableHeader } from './TableHeader'
import { TablePagination } from './TablePagination'
import { TableToolbar } from './TableToolbar'
import type { BulkAction, FilterDef, RowAction } from './tableTypes'
import './tableMeta'
import './styles.css'

function applyUpdater<T>(updater: Updater<T>, prev: T): T {
  return typeof updater === 'function'
    ? (updater as (old: T) => T)(prev)
    : updater
}

function buildDefaultColumnVisibility<TData>(
  cols: ColumnDef<TData, unknown>[],
): VisibilityState {
  const vis: VisibilityState = {}
  for (const col of cols) {
    const id = col.id ?? (col as { accessorKey?: string }).accessorKey
    if (typeof id === 'string' && col.meta?.hiddenByDefault) {
      vis[id] = false
    }
  }
  return vis
}

function loadColumnVisibility(
  tableId: string | undefined,
  defaults: VisibilityState,
): VisibilityState {
  if (!tableId || typeof localStorage === 'undefined') {
    return defaults
  }
  try {
    const raw = localStorage.getItem(`memori-table:columnVisibility:${tableId}`)
    if (!raw) {
      return defaults
    }
    const parsed = JSON.parse(raw) as Record<string, boolean>
    if (typeof parsed !== 'object' || parsed === null) {
      return defaults
    }
    return { ...defaults, ...parsed }
  } catch {
    return defaults
  }
}

export interface TableProps<TData> {
  data: TData[]
  columns: ColumnDef<TData, unknown>[]
  className?: string
  enableRowSelection?: boolean
  enableColumnResizing?: boolean
  getRowId?: (originalRow: TData, index: number) => string
  enablePagination?: boolean
  initialPageSize?: number
  pageSizeOptions?: number[]
  toolbar?: React.ReactNode
  maxBodyHeight?: React.CSSProperties['maxHeight'] | false

  isLoading?: boolean
  emptyState?: React.ReactNode
  bulkActions?: BulkAction<TData>[]
  rowActions?: RowAction<TData>[]
  globalFilterPlaceholder?: string
  /** Storage key for column visibility persistence */
  tableId?: string

  search?: string
  onSearchChange?: (value: string) => void
  searchDebounceMs?: number

  columnFilters?: ColumnFiltersState
  onColumnFiltersChange?: (filters: ColumnFiltersState) => void

  filterDefs?: FilterDef[]

  manualPagination?: boolean
  rowCount?: number
  pagination?: PaginationState
  onPaginationChange?: (updater: Updater<PaginationState>) => void
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
  enableColumnResizing = false,
  maxBodyHeight,
  isLoading = false,
  emptyState,
  bulkActions,
  rowActions,
  globalFilterPlaceholder,
  tableId,
  search: searchProp,
  onSearchChange,
  searchDebounceMs = 300,
  columnFilters: columnFiltersProp,
  onColumnFiltersChange: onColumnFiltersChangeProp,
  filterDefs,
  manualPagination: manualPaginationProp,
  rowCount: rowCountProp,
  pagination: paginationProp,
  onPaginationChange: onPaginationChangeProp,
}: TableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnSizing, setColumnSizing] = React.useState<ColumnSizingState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})

  const [internalPagination, setInternalPagination] =
    React.useState<PaginationState>(() => ({
      pageIndex: 0,
      pageSize: pageSizeOptions.includes(initialPageSize)
        ? initialPageSize
        : (pageSizeOptions[0] ?? 10),
    }))

  const pagination =
    paginationProp !== undefined && onPaginationChangeProp !== undefined
      ? paginationProp
      : internalPagination

  const setPaginationState = React.useCallback(
    (updater: Updater<PaginationState>) => {
      if (
        paginationProp !== undefined &&
        onPaginationChangeProp !== undefined
      ) {
        onPaginationChangeProp(updater)
      } else {
        setInternalPagination(prev => applyUpdater(updater, prev))
      }
    },
    [onPaginationChangeProp, paginationProp],
  )

  const manualPagination = manualPaginationProp ?? false

  const [internalColumnFilters, setInternalColumnFilters] =
    React.useState<ColumnFiltersState>([])
  const columnFilters =
    columnFiltersProp !== undefined ? columnFiltersProp : internalColumnFilters

  const setColumnFiltersState = React.useCallback(
    (next: ColumnFiltersState) => {
      if (onColumnFiltersChangeProp) {
        onColumnFiltersChangeProp(next)
      } else {
        setInternalColumnFilters(next)
      }
    },
    [onColumnFiltersChangeProp],
  )

  const resetPagination = React.useCallback(() => {
    if (!enablePagination) {
      return
    }
    setPaginationState(prev => ({ ...prev, pageIndex: 0 }))
  }, [enablePagination, setPaginationState])

  const handleColumnFiltersCommit = React.useCallback(
    (next: ColumnFiltersState) => {
      resetPagination()
      setColumnFiltersState(next)
    },
    [resetPagination, setColumnFiltersState],
  )

  const onColumnFiltersChangeTanStack = React.useCallback(
    (updater: Updater<ColumnFiltersState>) => {
      const next = applyUpdater(updater, columnFilters)
      resetPagination()
      setColumnFiltersState(next)
    },
    [columnFilters, resetPagination, setColumnFiltersState],
  )

  const hasFilterableColumns = React.useMemo(
    () =>
      columns.some(
        c =>
          c.meta?.filterVariant === 'select' ||
          c.meta?.filterVariant === 'text',
      ),
    [columns],
  )

  const manualFiltering = !!(
    onSearchChange ||
    onColumnFiltersChangeProp ||
    searchProp !== undefined ||
    columnFiltersProp !== undefined ||
    hasFilterableColumns
  )

  const defaultVisibility = React.useMemo(
    () => buildDefaultColumnVisibility(columns),
    [columns],
  )

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>(() =>
      loadColumnVisibility(tableId, defaultVisibility),
    )

  React.useEffect(() => {
    setColumnVisibility((prev: VisibilityState) => ({
      ...buildDefaultColumnVisibility(columns),
      ...prev,
    }))
  }, [columns])

  React.useEffect(() => {
    if (!tableId || typeof localStorage === 'undefined') {
      return
    }
    try {
      localStorage.setItem(
        `memori-table:columnVisibility:${tableId}`,
        JSON.stringify(columnVisibility),
      )
    } catch {
      /* ignore quota / private mode */
    }
  }, [tableId, columnVisibility])

  const showBulkBar = (bulkActions?.length ?? 0) > 0
  const showSelectColumn = enableRowSelection || showBulkBar
  const showRowActionsColumn = (rowActions?.length ?? 0) > 0
  const selectionEnabled = showSelectColumn

  const [searchDraft, setSearchDraft] = React.useState(searchProp ?? '')
  React.useEffect(() => {
    if (searchProp !== undefined) {
      setSearchDraft(searchProp)
    }
  }, [searchProp])

  const searchDebounceRef = React.useRef<number | undefined>(undefined)
  const handleSearchInput = React.useCallback(
    (value: string) => {
      setSearchDraft(value)
      if (!onSearchChange) {
        return
      }
      window.clearTimeout(searchDebounceRef.current)
      searchDebounceRef.current = window.setTimeout(() => {
        resetPagination()
        onSearchChange(value)
      }, searchDebounceMs)
    },
    [onSearchChange, resetPagination, searchDebounceMs],
  )

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

  const rowActionsRef = React.useRef(rowActions)
  rowActionsRef.current = rowActions

  const tableColumns = React.useMemo((): ColumnDef<TData, unknown>[] => {
    const mapped = columns.map(col => ({
      ...col,
      enableHiding:
        col.meta?.disableHiding === true ? false : (col.enableHiding ?? true),
    }))

    const withSelect = !showSelectColumn
      ? mapped
      : (() => {
          const selectColumn: ColumnDef<TData, unknown> = {
            id: 'select',
            size: 44,
            minSize: 44,
            maxSize: 52,
            enableSorting: false,
            enableResizing: false,
            enableHiding: false,
            meta: { disableHiding: true },
            header: ({ table: t }) => (
              <Checkbox
                checked={
                  enablePagination
                    ? t.getIsAllPageRowsSelected()
                    : t.getIsAllRowsSelected()
                }
                indeterminate={
                  enablePagination
                    ? t.getIsSomePageRowsSelected()
                    : t.getIsSomeRowsSelected()
                }
                onChange={checked => {
                  if (enablePagination) {
                    t.toggleAllPageRowsSelected(!!checked)
                  } else {
                    t.toggleAllRowsSelected(!!checked)
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
          return [selectColumn, ...mapped]
        })()

    if (!showRowActionsColumn) {
      return withSelect
    }

    const actionsColumn: ColumnDef<TData, unknown> = {
      id: 'actions',
      size: 48,
      minSize: 48,
      maxSize: 56,
      enableSorting: false,
      enableResizing: false,
      enableHiding: false,
      meta: { disableHiding: true },
      header: () => <span className="memori-table__actions-header" />,
      cell: ({ row }) => {
        const actions = rowActionsRef.current
        if (!actions?.length) {
          return null
        }
        return (
          <Dropdown>
            <Dropdown.Trigger
              showChevron={false}
              className="memori-table__row-actions-trigger"
              aria-label="Row actions"
            >
              <MoreHorizontal
                size={18}
                aria-hidden
              />
            </Dropdown.Trigger>
            <Dropdown.Menu align="end">
              {actions.map(action => (
                <Dropdown.Item
                  key={action.label}
                  icon={action.icon}
                  className={
                    action.variant === 'danger'
                      ? 'memori-table__row-action-item--danger'
                      : undefined
                  }
                  onClick={() => action.onClick(row)}
                >
                  {action.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )
      },
    }

    return [...withSelect, actionsColumn]
  }, [columns, enablePagination, showSelectColumn, showRowActionsColumn])

  const initialColumnPinning = React.useMemo(
    () => ({
      left: showSelectColumn ? ['select'] : [],
      right: showRowActionsColumn ? ['actions'] : [],
    }),
    [showRowActionsColumn, showSelectColumn],
  )

  const [columnPinning, setColumnPinning] =
    React.useState<ColumnPinningState>(initialColumnPinning)
  React.useEffect(() => {
    setColumnPinning(initialColumnPinning)
  }, [initialColumnPinning])

  const onColumnPinningChange = React.useCallback(
    (updater: Updater<ColumnPinningState>) => {
      setColumnPinning(prev => applyUpdater(updater, prev))
    },
    [],
  )

  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...(enablePagination && !manualPagination
      ? { getPaginationRowModel: getPaginationRowModel() }
      : {}),
    manualPagination,
    ...(rowCountProp !== undefined ? { rowCount: rowCountProp } : {}),
    manualFiltering,
    enableColumnPinning: showSelectColumn || showRowActionsColumn,
    state: {
      sorting,
      columnSizing,
      columnFilters,
      columnVisibility,
      columnPinning,
      ...(selectionEnabled ? { rowSelection } : {}),
      ...(enablePagination ? { pagination } : {}),
    },
    onSortingChange: setSorting,
    onColumnSizingChange: setColumnSizing,
    onColumnFiltersChange: onColumnFiltersChangeTanStack,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnPinningChange,
    ...(selectionEnabled ? { onRowSelectionChange: setRowSelection } : {}),
    ...(enablePagination ? { onPaginationChange: setPaginationState } : {}),
    columnResizeMode: 'onChange',
    enableColumnResizing: enableColumnResizing,
    enableRowSelection: selectionEnabled,
    getRowId,
    defaultColumn: {
      minSize: 60,
      size: 150,
      maxSize: 800,
    },
  })

  const showSearchChrome = !!onSearchChange
  const showColumnsMenu = table
    .getAllLeafColumns()
    .some(
      c =>
        c.getCanHide() &&
        !c.columnDef.meta?.disableHiding &&
        c.id !== 'select' &&
        c.id !== 'actions',
    )
  const showFilterControls = (filterDefs?.length ?? 0) > 0
  const showTopBar = showSearchChrome || showColumnsMenu || showFilterControls

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
      {showTopBar ? (
        <TableControls
          table={table}
          showSearch={showSearchChrome}
          search={searchDraft}
          onSearchInputChange={handleSearchInput}
          globalFilterPlaceholder={globalFilterPlaceholder}
          showColumnsMenu={showColumnsMenu}
          filterDefs={filterDefs}
          columnFilters={columnFilters}
          onColumnFiltersChange={handleColumnFiltersCommit}
        />
      ) : null}
      {filterDefs && filterDefs.length > 0 ? (
        <TableFilterChips
          filterDefs={filterDefs}
          value={columnFilters}
          onChange={handleColumnFiltersCommit}
        />
      ) : null}
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
          <TableHeader
            table={table}
            filterRow={
              hasFilterableColumns ? (
                <TableFilterRow
                  table={table}
                  columnFilters={columnFilters}
                  onColumnFiltersChange={handleColumnFiltersCommit}
                  filterDebounceMs={searchDebounceMs}
                />
              ) : null
            }
          />
          <TableBody
            table={table}
            selectionEnabled={selectionEnabled}
            isLoading={isLoading}
            emptyState={emptyState}
            skeletonRowCount={Math.min(10, pagination.pageSize)}
          />
        </table>
      </div>
      {(enablePagination ||
        showBulkBar ||
        (enableRowSelection && toolbar !== undefined && !showBulkBar)) && (
        <div className="memori-table-footer">
          {(showBulkBar ||
            (enableRowSelection && toolbar !== undefined && !showBulkBar)) && (
            <TableToolbar
              table={table}
              bulkActions={bulkActions}
              legacyToolbar={
                enableRowSelection && toolbar !== undefined && !showBulkBar
                  ? toolbar
                  : undefined
              }
            />
          )}
          {enablePagination && (
            <TablePagination
              table={table}
              pageSizeOptions={pageSizeOptions}
              manualPagination={manualPagination}
              rowCount={rowCountProp}
            />
          )}
        </div>
      )}
    </div>
  )
}
