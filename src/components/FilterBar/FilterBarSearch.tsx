import * as React from 'react'
import { Search } from 'lucide-react'
import { Input } from '../Input'
// Single entry point for FilterBar CSS, loaded after Input so `__search-input` overrides win the cascade.
import './styles.css'

export interface FilterBarSearchProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
  /** BEM prefix for every class, e.g. `memori-filter-bar__` → `memori-filter-bar__search-wrap` */
  classPrefix?: string
}

export function FilterBarSearch({
  value,
  onChange,
  placeholder,
  classPrefix = 'memori-filter-bar__',
}: FilterBarSearchProps) {
  return (
    <div className={`${classPrefix}search-wrap`}>
      <Search
        className={`${classPrefix}search-icon`}
        size={18}
        strokeWidth={2}
        aria-hidden
      />
      <Input
        type="search"
        className={`${classPrefix}search ${classPrefix}search-input`}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label={placeholder}
      />
    </div>
  )
}
