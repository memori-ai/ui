import * as React from 'react'
import type { ColumnFiltersState } from '@tanstack/react-table'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import { SlidersHorizontal } from 'lucide-react'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { Button } from '../Button'
import type { DateRangeValue, FilterDef } from '../Table/tableTypes'
import {
  cloneColumnFilters,
  draftHasInvalidDateRange,
  getFilterValue,
  isDateRangeInvalid,
  removeFilterById,
  upsertFilter,
  countCommittedFilters,
} from './filterBarState'

export interface FilterBarPopoverProps {
  filterDefs: FilterDef[]
  /** Current committed filters (ColumnFiltersState shape: { id, value }[]) */
  value: ColumnFiltersState
  onChange: (next: ColumnFiltersState) => void
  /** BEM prefix for every class, e.g. `memori-filter-bar__` → `memori-filter-bar__popover` */
  classPrefix?: string
}

type SectionProps<TDef extends FilterDef = FilterDef> = {
  def: TDef
  draft: ColumnFiltersState
  setDraft: React.Dispatch<React.SetStateAction<ColumnFiltersState>>
  c: (el: string) => string
}

export function FilterBarPopover({
  filterDefs,
  value,
  onChange,
  classPrefix = 'memori-filter-bar__',
}: FilterBarPopoverProps) {
  const { t } = useTranslation()
  const c = (el: string) => `${classPrefix}${el}`
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
      className={c('popover-root')}
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
          <span className={c('badge')}>{activeCount}</span>
        ) : null}
      </Button>
      {open ? (
        <div
          className={c('popover')}
          role="dialog"
          aria-label={t('table.filtersDialogAria')}
        >
          <div className={c('popover-body')}>
            {filterDefs.map(def => (
              <FilterSection
                key={def.id}
                def={def}
                draft={draft}
                setDraft={setDraft}
                c={c}
              />
            ))}
          </div>
          <div className={c('popover-footer')}>
            <Button
              variant="link"
              className={c('clear-all')}
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

function FilterSection({ def, draft, setDraft, c }: SectionProps) {
  if (def.variant === 'select' || def.variant === 'multi-select') {
    return (
      <div className={c('section')}>
        <div className={c('section-label')}>{def.label}</div>
        <div className={c('options')}>
          {def.options.map(opt => (
            <OptionPill
              key={opt.value}
              def={def}
              opt={opt}
              draft={draft}
              setDraft={setDraft}
              c={c}
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
        c={c}
      />
    )
  }

  if (def.variant === 'boolean') {
    return (
      <BooleanSection
        def={def}
        draft={draft}
        setDraft={setDraft}
        c={c}
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
  c,
}: SectionProps<Extract<FilterDef, { variant: 'select' | 'multi-select' }>> & {
  opt: { label: string; value: string }
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
      className={c('option')}
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
  c,
}: SectionProps<Extract<FilterDef, { variant: 'date-range' }>>) {
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
    <div className={c('section')}>
      <div className={c('section-label')}>{def.label}</div>
      <div className={c('date-range')}>
        <label className={c('date-field')}>
          <span className={c('date-field-label')}>{t('table.dateFrom')}</span>
          <input
            type="date"
            className={c('date-input')}
            value={from}
            onChange={e =>
              patch({
                from: e.target.value,
                to: raw?.to,
              })
            }
          />
        </label>
        <label className={c('date-field')}>
          <span className={c('date-field-label')}>{t('table.dateTo')}</span>
          <input
            type="date"
            className={c('date-input')}
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
          className={c('date-error')}
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
  c,
}: SectionProps<Extract<FilterDef, { variant: 'boolean' }>>) {
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
    <div className={c('section')}>
      <div className={c('section-label')}>{def.label}</div>
      <div className={c('boolean')}>
        <span className={c('boolean-label')}>
          {on ? def.booleanLabels.on : def.booleanLabels.off}
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          className={cx(c('toggle'), on && c('toggle--on'))}
          onClick={toggle}
        />
      </div>
    </div>
  )
}
