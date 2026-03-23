import * as React from 'react'
import type { ColumnFiltersState } from '@tanstack/react-table'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import { SlidersHorizontal } from 'lucide-react'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { Button } from '../Button'
import type { DateRangeValue, FilterDef } from './tableTypes'
import {
  cloneColumnFilters,
  draftHasInvalidDateRange,
  getFilterValue,
  isDateRangeInvalid,
  removeFilterById,
  upsertFilter,
  countCommittedFilters,
} from './tableFilterState'

export interface TableFilterPopoverProps {
  filterDefs: FilterDef[]
  /** Current committed filters (ColumnFiltersState shape: { id, value }[]) */
  value: ColumnFiltersState
  onChange: (next: ColumnFiltersState) => void
}

export function TableFilterPopover({
  filterDefs,
  value,
  onChange,
}: TableFilterPopoverProps) {
  const { t } = useTranslation()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [open, setOpen] = React.useState(false)
  const [draft, setDraft] = React.useState<ColumnFiltersState>(() =>
    cloneColumnFilters(value),
  )

  const handleOutside = React.useCallback(() => {
    if (open) {
      setOpen(false)
    }
  }, [open])

  useOutsideClick(containerRef, handleOutside, open)

  const activeCount = countCommittedFilters(filterDefs, value)
  const applyDisabled = draftHasInvalidDateRange(filterDefs, draft)

  const handleOpenClick = () => {
    if (open) {
      setOpen(false)
      return
    }
    setDraft(cloneColumnFilters(value))
    setOpen(true)
  }

  const handleClearDraft = () => {
    setDraft([])
  }

  const handleApply = () => {
    if (applyDisabled) {
      return
    }
    onChange(draft)
    setOpen(false)
  }

  return (
    <div
      ref={containerRef}
      className="memori-table__filter-popover-root"
    >
      <Button
        type="button"
        variant="toolbar"
        active={open}
        aria-expanded={open}
        icon={
          <SlidersHorizontal
            size={16}
            aria-hidden
          />
        }
        onClick={handleOpenClick}
      >
        {t('table.filtersButton')}
        {activeCount > 0 ? (
          <span className="memori-table__filter-badge">{activeCount}</span>
        ) : null}
      </Button>
      {open ? (
        <div
          className="memori-table__filter-popover"
          role="dialog"
          aria-label={t('table.filtersDialogAria')}
        >
          <div className="memori-table__filter-popover-body">
            {filterDefs.map(def => (
              <FilterSection
                key={def.id}
                def={def}
                draft={draft}
                setDraft={setDraft}
              />
            ))}
          </div>
          <div className="memori-table__filter-popover-footer">
            <Button
              variant="link"
              className="memori-table__filter-clear-all"
              onClick={handleClearDraft}
            >
              {t('table.clearAll')}
            </Button>
            <Button
              type="button"
              variant="primary"
              size="sm"
              disabled={applyDisabled}
              onClick={handleApply}
            >
              {t('table.apply')}
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function FilterSection({
  def,
  draft,
  setDraft,
}: {
  def: FilterDef
  draft: ColumnFiltersState
  setDraft: React.Dispatch<React.SetStateAction<ColumnFiltersState>>
}) {
  if (def.variant === 'select' || def.variant === 'multi-select') {
    return (
      <div className="memori-table__filter-section">
        <div className="memori-table__filter-section-label">{def.label}</div>
        <div className="memori-table__filter-options">
          {def.options.map(opt => (
            <OptionPill
              key={opt.value}
              def={def}
              opt={opt}
              draft={draft}
              setDraft={setDraft}
            />
          ))}
        </div>
      </div>
    )
  }

  if (def.variant === 'date-range') {
    return (
      <DateRangeSection
        def={def}
        draft={draft}
        setDraft={setDraft}
      />
    )
  }

  if (def.variant === 'boolean') {
    return (
      <BooleanSection
        def={def}
        draft={draft}
        setDraft={setDraft}
      />
    )
  }

  return null
}

function OptionPill({
  def,
  opt,
  draft,
  setDraft,
}: {
  def: Extract<FilterDef, { variant: 'select' | 'multi-select' }>
  opt: { label: string; value: string }
  draft: ColumnFiltersState
  setDraft: React.Dispatch<React.SetStateAction<ColumnFiltersState>>
}) {
  const raw = getFilterValue(draft, def.id)
  const selected =
    def.variant === 'select'
      ? raw === opt.value
      : Array.isArray(raw) && raw.includes(opt.value)

  const toggle = () => {
    setDraft(prev => {
      if (def.variant === 'select') {
        const current = getFilterValue(prev, def.id) as string | undefined
        if (current === opt.value) {
          return removeFilterById(prev, def.id)
        }
        return upsertFilter(prev, def.id, opt.value)
      }
      const current =
        (getFilterValue(prev, def.id) as string[] | undefined) ?? []
      if (current.includes(opt.value)) {
        const next = current.filter(v => v !== opt.value)
        return upsertFilter(prev, def.id, next)
      }
      return upsertFilter(prev, def.id, [...current, opt.value])
    })
  }

  return (
    <Button
      variant="outline"
      size="xs"
      className="memori-table__filter-option"
      active={selected}
      onClick={toggle}
    >
      {opt.label}
    </Button>
  )
}

function DateRangeSection({
  def,
  draft,
  setDraft,
}: {
  def: Extract<FilterDef, { variant: 'date-range' }>
  draft: ColumnFiltersState
  setDraft: React.Dispatch<React.SetStateAction<ColumnFiltersState>>
}) {
  const { t } = useTranslation()
  const raw = getFilterValue(draft, def.id) as DateRangeValue | undefined
  const from = raw?.from ?? ''
  const to = raw?.to ?? ''
  const invalid = isDateRangeInvalid(from, to)

  const patch = (next: DateRangeValue) => {
    setDraft(prev => {
      if (!next.from?.trim() && !next.to?.trim()) {
        return removeFilterById(prev, def.id)
      }
      return upsertFilter(prev, def.id, next)
    })
  }

  return (
    <div className="memori-table__filter-section">
      <div className="memori-table__filter-section-label">{def.label}</div>
      <div className="memori-table__filter-date-range">
        <label className="memori-table__filter-date-field">
          <span className="memori-table__filter-date-field-label">
            {t('table.dateFrom')}
          </span>
          <input
            type="date"
            className="memori-table__filter-date-input"
            value={from}
            onChange={e =>
              patch({
                from: e.target.value,
                to: raw?.to,
              })
            }
          />
        </label>
        <label className="memori-table__filter-date-field">
          <span className="memori-table__filter-date-field-label">
            {t('table.dateTo')}
          </span>
          <input
            type="date"
            className="memori-table__filter-date-input"
            value={to}
            onChange={e =>
              patch({
                from: raw?.from,
                to: e.target.value,
              })
            }
          />
        </label>
      </div>
      {invalid ? (
        <p
          className="memori-table__filter-date-error"
          role="alert"
        >
          {t('table.dateRangeInvalid')}
        </p>
      ) : null}
    </div>
  )
}

function BooleanSection({
  def,
  draft,
  setDraft,
}: {
  def: Extract<FilterDef, { variant: 'boolean' }>
  draft: ColumnFiltersState
  setDraft: React.Dispatch<React.SetStateAction<ColumnFiltersState>>
}) {
  const on = getFilterValue(draft, def.id) === true

  const toggle = () => {
    setDraft(prev => {
      if (on) {
        return removeFilterById(prev, def.id)
      }
      return upsertFilter(prev, def.id, true)
    })
  }

  return (
    <div className="memori-table__filter-section">
      <div className="memori-table__filter-section-label">{def.label}</div>
      <div className="memori-table__filter-boolean">
        <span className="memori-table__filter-boolean-label">
          {on ? def.booleanLabels.on : def.booleanLabels.off}
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          className={cx(
            'memori-table__filter-toggle',
            on && 'memori-table__filter-toggle--on',
          )}
          onClick={toggle}
        />
      </div>
    </div>
  )
}
