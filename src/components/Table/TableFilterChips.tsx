import * as React from 'react'
import type { ColumnFiltersState } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import type { DateRangeValue, FilterDef } from './tableTypes'
import {
  getFilterValue,
  removeFilterById,
  upsertFilter,
} from './tableFilterState'

export interface TableFilterChipsProps {
  filterDefs: FilterDef[]
  value: ColumnFiltersState
  onChange: (next: ColumnFiltersState) => void
}

type ChipModel = {
  key: string
  text: string
  onRemove: () => ColumnFiltersState
}

function buildChips(
  filterDefs: FilterDef[],
  value: ColumnFiltersState,
  dateEmpty: string,
): ChipModel[] {
  const chips: ChipModel[] = []
  for (const def of filterDefs) {
    const raw = getFilterValue(value, def.id)
    if (def.variant === 'select' && typeof raw === 'string' && raw) {
      const opt = def.options.find(o => o.value === raw)
      chips.push({
        key: `${def.id}:${raw}`,
        text: `${def.label}: ${opt?.label ?? raw}`,
        onRemove: () => removeFilterById(value, def.id),
      })
    } else if (def.variant === 'multi-select' && Array.isArray(raw)) {
      for (const v of raw) {
        const sv = String(v)
        const opt = def.options.find(o => o.value === sv)
        chips.push({
          key: `${def.id}:${sv}`,
          text: `${def.label}: ${opt?.label ?? sv}`,
          onRemove: () => {
            const nextVals = raw.filter(x => String(x) !== sv)
            return upsertFilter(value, def.id, nextVals)
          },
        })
      }
    } else if (def.variant === 'date-range') {
      const dr = raw as DateRangeValue | undefined
      if (dr?.from?.trim() || dr?.to?.trim()) {
        const from = dr?.from?.trim() || dateEmpty
        const to = dr?.to?.trim() || dateEmpty
        chips.push({
          key: `${def.id}:range`,
          text: `${def.label}: ${from} – ${to}`,
          onRemove: () => removeFilterById(value, def.id),
        })
      }
    } else if (def.variant === 'boolean' && raw === true) {
      chips.push({
        key: `${def.id}:bool`,
        text: `${def.label}: ${def.booleanLabels.on}`,
        onRemove: () => removeFilterById(value, def.id),
      })
    }
  }
  return chips
}

export function TableFilterChips({
  filterDefs,
  value,
  onChange,
}: TableFilterChipsProps) {
  const { t } = useTranslation()
  const chips = React.useMemo(
    () => buildChips(filterDefs, value, t('table.dateChipEmpty')),
    [filterDefs, value, t],
  )

  if (chips.length === 0) {
    return null
  }

  return (
    <div className="memori-table__filter-chips-row">
      <span className="memori-table__filter-chips-muted">
        {t('table.filterChipsActive')}
      </span>
      <div
        className="memori-table__filter-chips-list"
        role="list"
      >
        {chips.map(chip => (
          <span
            key={chip.key}
            className="memori-table__filter-chip"
            role="listitem"
          >
            <span className="memori-table__filter-chip-text">{chip.text}</span>
            <button
              type="button"
              className="memori-table__filter-chip-remove"
              aria-label={t('table.removeFilter', { label: chip.text })}
              onClick={() => onChange(chip.onRemove())}
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <button
        type="button"
        className="memori-table__filter-chips-clear-all"
        onClick={() => onChange([])}
      >
        {t('table.filterChipsClearAll')}
      </button>
    </div>
  )
}
