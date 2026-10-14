import React, { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ColumnFiltersState } from '@tanstack/react-table'
import { fn } from 'storybook/test'
import { LayoutGrid, Plus } from 'lucide-react'
import { Button } from '../Button'
import { Switch } from '../Switch'
import type { FilterDef } from '../Table/tableTypes'
import { FilterBar } from './FilterBar'

type Agent = {
  id: string
  name: string
  status: 'active' | 'archived'
  tags: string[]
  public: boolean
}

const agents: Agent[] = [
  { id: '1', name: 'Ada', status: 'active', tags: ['ai'], public: true },
  { id: '2', name: 'Turing', status: 'active', tags: ['docs'], public: false },
  {
    id: '3',
    name: 'Hopper',
    status: 'archived',
    tags: ['ai', 'docs'],
    public: true,
  },
  { id: '4', name: 'Dijkstra', status: 'active', tags: [], public: false },
]

const filterDefs: FilterDef[] = [
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
  { id: 'created', label: 'Created', variant: 'date-range' },
  {
    id: 'public',
    label: 'Public only',
    variant: 'boolean',
    booleanLabels: { on: 'Yes', off: 'No' },
  },
]

const meta = {
  title: 'Contenuto/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  argTypes: {
    search: {
      control: 'text',
      description:
        'Search text. The field renders when `search` or `onSearchChange` is set.',
    },
    searchPlaceholder: {
      control: 'text',
      description:
        'Placeholder and accessible label (default: `table.searchPlaceholder`).',
    },
    filters: {
      control: false,
      description: 'Filter definitions, same `FilterDef[]` as `Table`.',
    },
    value: {
      control: false,
      description:
        'Committed filters `{ id, value }[]`; uncontrolled if omitted.',
    },
    extra: { control: false },
    onSearchChange: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
  },
  args: {
    onSearchChange: fn(),
    onValueChange: fn(),
  },
  parameters: {
    docs: {
      description: {
        component:
          'Search + filter popover + active-filter chips for card lists. Same filter model (`FilterDef`, `ColumnFiltersState`) and chrome as the `Table` toolbar.',
      },
    },
  },
} satisfies Meta<typeof FilterBar>

export default meta
type Story = StoryObj<typeof meta>

const filterAgents = (search: string, value: ColumnFiltersState) =>
  agents.filter(agent => {
    if (!agent.name.toLowerCase().includes(search.trim().toLowerCase())) {
      return false
    }
    return value.every(({ id, value: v }) => {
      if (id === 'status') return agent.status === v
      if (id === 'tags')
        return (v as string[]).every(tag => agent.tags.includes(tag))
      if (id === 'public') return agent.public === v
      return true
    })
  })

const AgentList = ({ items }: { items: Agent[] }) => (
  <ul
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(10rem, 1fr))',
      gap: 'var(--memori-spacing-sm)',
      padding: 0,
      margin: 0,
      listStyle: 'none',
    }}
  >
    {items.map(agent => (
      <li
        key={agent.id}
        style={{
          padding: 'var(--memori-spacing-md)',
          border: 'var(--memori-border) solid var(--memori-border-color)',
          borderRadius: 'var(--memori-radius-surface)',
        }}
      >
        {agent.name}
      </li>
    ))}
  </ul>
)

/** Search only. */
export const Default: Story = {
  render: args => {
    const [search, setSearch] = useState('')
    return (
      <FilterBar
        {...args}
        search={search}
        onSearchChange={value => {
          setSearch(value)
          args.onSearchChange?.(value)
        }}
      />
    )
  },
}

/** Search + filter popover; applied filters appear as removable chips below. */
export const WithFilters: Story = {
  args: { searchPlaceholder: 'Search agents' },
  render: args => {
    const [search, setSearch] = useState('')
    const [value, setValue] = useState<ColumnFiltersState>([
      { id: 'status', value: 'active' },
    ])
    const items = useMemo(() => filterAgents(search, value), [search, value])
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--memori-spacing-md)',
        }}
      >
        <FilterBar
          {...args}
          search={search}
          onSearchChange={next => {
            setSearch(next)
            args.onSearchChange?.(next)
          }}
          filters={filterDefs}
          value={value}
          onValueChange={next => {
            setValue(next)
            args.onValueChange?.(next)
          }}
        />
        <AgentList items={items} />
      </div>
    )
  },
}

/** `extra` slot after the filter button: toggles, view switches, actions. */
export const WithExtra: Story = {
  render: args => {
    const [search, setSearch] = useState('')
    const [mineOnly, setMineOnly] = useState(false)
    return (
      <FilterBar
        {...args}
        search={search}
        onSearchChange={next => {
          setSearch(next)
          args.onSearchChange?.(next)
        }}
        filters={filterDefs}
        extra={
          <>
            <Switch
              label="Only mine"
              checked={mineOnly}
              onCheckedChange={setMineOnly}
            />
            <Button
              variant="toolbar"
              icon={
                <LayoutGrid
                  size={16}
                  aria-hidden
                />
              }
              aria-label="Grid view"
            />
            <Button
              variant="primary"
              icon={
                <Plus
                  size={16}
                  aria-hidden
                />
              }
            >
              New agent
            </Button>
          </>
        }
      />
    )
  },
}
