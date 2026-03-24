import type { ReactNode } from 'react'
import type { Row } from '@tanstack/react-table'

export type BulkAction<TData> = {
  label: string
  icon?: ReactNode
  variant?: 'default' | 'danger'
  onClick: (rows: Row<TData>[]) => void
}

export type RowAction<TData> = {
  /** Stable key; defaults to `label` when omitted */
  id?: string
  label: string
  icon?: ReactNode
  variant?: 'default' | 'danger'
  onClick: (row: Row<TData>) => void
}

/** Row actions: overflow menu (⋯) or icon buttons in the cell */
export type RowActionsVariant = 'menu' | 'inline'

/** Footer pagination layout */
export type TablePaginationVariant = 'simplified' | 'detailed'

export type FilterVariant = 'select' | 'multi-select' | 'date-range' | 'boolean'

export interface FilterOption {
  label: string
  value: string
}

/** Stored in column filter state for `variant: 'date-range'` filters */
export interface DateRangeValue {
  from?: string
  to?: string
}

type FilterDefBase = {
  /** Must match the column's `accessorKey` or `id` */
  id: string
  /** Display label shown in the popover and on active chips */
  label: string
}

export type FilterDef =
  | (FilterDefBase & {
      variant: 'select' | 'multi-select'
      options: FilterOption[]
    })
  | (FilterDefBase & { variant: 'date-range' })
  | (FilterDefBase & {
      variant: 'boolean'
      booleanLabels: { on: string; off: string }
    })
