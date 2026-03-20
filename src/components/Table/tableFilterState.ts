import type { ColumnFiltersState } from '@tanstack/react-table'
import type { DateRangeValue, FilterDef } from './tableTypes'

export function getFilterValue(state: ColumnFiltersState, id: string): unknown {
  return state.find(f => f.id === id)?.value
}

export function cloneColumnFilters(
  filters: ColumnFiltersState,
): ColumnFiltersState {
  return filters.map(f => {
    const v = f.value
    if (Array.isArray(v)) {
      return { id: f.id, value: [...v] }
    }
    if (v && typeof v === 'object') {
      return { id: f.id, value: { ...(v as Record<string, unknown>) } }
    }
    return { id: f.id, value: v }
  })
}

export function upsertFilter(
  state: ColumnFiltersState,
  id: string,
  value: unknown,
): ColumnFiltersState {
  const without = state.filter(f => f.id !== id)
  if (
    value === undefined ||
    value === null ||
    value === '' ||
    (Array.isArray(value) && value.length === 0)
  ) {
    return without
  }
  return [...without, { id, value }]
}

export function removeFilterById(
  state: ColumnFiltersState,
  id: string,
): ColumnFiltersState {
  return state.filter(f => f.id !== id)
}

export function isDateRangeInvalid(from?: string, to?: string): boolean {
  const a = from?.trim()
  const b = to?.trim()
  if (!a || !b) {
    return false
  }
  const d1 = new Date(a)
  const d2 = new Date(b)
  if (Number.isNaN(d1.getTime()) || Number.isNaN(d2.getTime())) {
    return false
  }
  return d1 > d2
}

export function countCommittedFilters(
  filterDefs: FilterDef[],
  value: ColumnFiltersState,
): number {
  let n = 0
  for (const def of filterDefs) {
    const v = getFilterValue(value, def.id)
    if (def.variant === 'select' && typeof v === 'string' && v) {
      n += 1
    } else if (def.variant === 'multi-select' && Array.isArray(v)) {
      n += v.length
    } else if (def.variant === 'date-range') {
      const dr = v as DateRangeValue | undefined
      if (dr?.from?.trim() || dr?.to?.trim()) {
        n += 1
      }
    } else if (def.variant === 'boolean' && v === true) {
      n += 1
    }
  }
  return n
}

export function draftHasInvalidDateRange(
  filterDefs: FilterDef[],
  draft: ColumnFiltersState,
): boolean {
  for (const def of filterDefs) {
    if (def.variant !== 'date-range') {
      continue
    }
    const v = getFilterValue(draft, def.id) as DateRangeValue | undefined
    if (v && isDateRangeInvalid(v.from, v.to)) {
      return true
    }
  }
  return false
}
