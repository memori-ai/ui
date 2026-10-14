import React from 'react'
import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import type { FilterDef } from '../Table/tableTypes'
import FilterBar from './FilterBar'

const filters: FilterDef[] = [
  {
    id: 'status',
    label: 'Status',
    variant: 'select',
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Archived', value: 'archived' },
    ],
  },
  {
    id: 'tags',
    label: 'Tags',
    variant: 'multi-select',
    options: [
      { label: 'AI', value: 'ai' },
      { label: 'Docs', value: 'docs' },
    ],
  },
]

it('renders FilterBar unchanged', () => {
  const { container } = render(
    <FilterBar
      search=""
      onSearchChange={vi.fn()}
      filters={filters}
    />,
  )
  expect(container).toMatchSnapshot()
})

it('renders FilterBar with active filters unchanged', () => {
  const { container } = render(
    <FilterBar
      filters={filters}
      value={[
        { id: 'status', value: 'active' },
        { id: 'tags', value: ['ai', 'docs'] },
      ]}
    />,
  )
  expect(container).toMatchSnapshot()
})

it('renders only the root when no control is configured', () => {
  const { container } = render(<FilterBar />)
  expect(container.firstChild).toHaveClass('memori-filter-bar')
  expect(container.firstChild).toBeEmptyDOMElement()
})

it('forwards ref, className and style to the root', () => {
  const ref = React.createRef<HTMLDivElement>()
  const { container } = render(
    <FilterBar
      ref={ref}
      className="lorem-ipsum"
      style={{ maxWidth: 480 }}
    />,
  )
  expect(ref.current).toBe(container.firstChild)
  expect(ref.current).toHaveClass('memori-filter-bar', 'lorem-ipsum')
  expect(ref.current).toHaveStyle({ maxWidth: '480px' })
})

it('uses searchPlaceholder as placeholder and accessible name', () => {
  render(
    <FilterBar
      search=""
      searchPlaceholder="Search agents"
    />,
  )
  const input = screen.getByRole('searchbox', { name: 'Search agents' })
  expect(input).toHaveAttribute('placeholder', 'Search agents')
})

it('falls back to the table.searchPlaceholder translation', () => {
  render(<FilterBar onSearchChange={vi.fn()} />)
  expect(
    screen.getByRole('searchbox', { name: 'table.searchPlaceholder' }),
  ).toBeInTheDocument()
})

it('calls onSearchChange while typing', () => {
  const onSearchChange = vi.fn()
  render(
    <FilterBar
      search=""
      onSearchChange={onSearchChange}
    />,
  )
  const input = screen.getByRole('searchbox')
  fireEvent.change(input, { target: { value: 'ada' } })
  expect(onSearchChange).toHaveBeenCalledWith('ada')
  expect(input).toHaveValue('ada')
})

it('hides the filter button when filters is empty', () => {
  render(<FilterBar filters={[]} />)
  expect(
    screen.queryByRole('button', { name: /table\.filtersButton/ }),
  ).not.toBeInTheDocument()
})

it('renders the extra slot', () => {
  render(<FilterBar extra={<button type="button">Grid view</button>} />)
  expect(screen.getByRole('button', { name: 'Grid view' })).toBeInTheDocument()
})

it('shows the active filter count on the filter button', () => {
  render(
    <FilterBar
      filters={filters}
      value={[{ id: 'tags', value: ['ai', 'docs'] }]}
    />,
  )
  expect(
    screen.getByRole('button', { name: /table\.filtersButton/ }),
  ).toHaveTextContent('2')
})

it('applies a filter from the popover and calls onValueChange', () => {
  const onValueChange = vi.fn()
  render(
    <FilterBar
      filters={filters}
      value={[]}
      onValueChange={onValueChange}
    />,
  )
  fireEvent.click(screen.getByRole('button', { name: /table\.filtersButton/ }))
  expect(screen.getByRole('dialog')).toBeInTheDocument()

  fireEvent.click(screen.getByRole('button', { name: 'Active' }))
  fireEvent.click(screen.getByRole('button', { name: 'table.apply' }))

  expect(onValueChange).toHaveBeenCalledWith([
    { id: 'status', value: 'active' },
  ])
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
})

it('removes a single chip and clears all chips', () => {
  const onValueChange = vi.fn()
  render(
    <FilterBar
      filters={filters}
      value={[
        { id: 'status', value: 'active' },
        { id: 'tags', value: ['ai', 'docs'] },
      ]}
      onValueChange={onValueChange}
    />,
  )
  expect(screen.getAllByRole('listitem')).toHaveLength(3)

  const statusChip = screen.getAllByRole('listitem')[0]!
  expect(statusChip).toHaveTextContent('Status: Active')
  fireEvent.click(statusChip.querySelector('button')!)
  expect(onValueChange).toHaveBeenLastCalledWith([
    { id: 'tags', value: ['ai', 'docs'] },
  ])

  fireEvent.click(
    screen.getByRole('button', { name: 'table.filterChipsClearAll' }),
  )
  expect(onValueChange).toHaveBeenLastCalledWith([])
})

it('keeps its own filter state when uncontrolled', () => {
  render(<FilterBar filters={filters} />)
  fireEvent.click(screen.getByRole('button', { name: /table\.filtersButton/ }))
  fireEvent.click(screen.getByRole('button', { name: 'AI' }))
  fireEvent.click(screen.getByRole('button', { name: 'table.apply' }))

  expect(screen.getByRole('listitem')).toHaveTextContent('Tags: AI')

  fireEvent.click(screen.getByRole('button', { name: 'table.removeFilter' }))
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
})
