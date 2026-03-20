declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends unknown, TValue> {
    filterVariant?: 'select' | 'text'
    filterOptions?: string[]
    badge?: boolean
    badgeColorMap?: Record<string, string>
    disableHiding?: boolean
    hiddenByDefault?: boolean
  }
}

export {}
