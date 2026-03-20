import type { ReactNode } from 'react'
import type { Row } from '@tanstack/react-table'

export type BulkAction<TData> = {
  label: string
  icon?: ReactNode
  variant?: 'default' | 'danger'
  onClick: (rows: Row<TData>[]) => void
}

export type RowAction<TData> = {
  label: string
  icon?: ReactNode
  variant?: 'default' | 'danger'
  onClick: (row: Row<TData>) => void
}
