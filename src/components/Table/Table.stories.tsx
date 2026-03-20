import type { Meta, StoryObj } from '@storybook/react-vite'
import type {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Button } from '../Button'
import { Table, type TableProps } from './Table'
import type { FilterDef } from './tableTypes'

type Person = {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

const largeDataset: Person[] = Array.from({ length: 500 }, (_, i) => ({
  id: String(i + 1),
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 2 === 0 ? 'Engineer' : 'Researcher',
  status: i % 3 === 0 ? 'inactive' : 'active',
}))

const sampleData: Person[] = [
  {
    id: '1',
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    role: 'Engineer',
    status: 'active',
  },
  {
    id: '2',
    name: 'Alan Turing',
    email: 'alan@example.com',
    role: 'Researcher',
    status: 'active',
  },
  {
    id: '3',
    name: 'Grace Hopper',
    email: 'grace@example.com',
    role: 'Engineer',
    status: 'inactive',
  },
  {
    id: '4',
    name: 'Edsger Dijkstra',
    email: 'edsger@example.com',
    role: 'Researcher',
    status: 'active',
  },
]

const baseColumns: ColumnDef<Person>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
    meta: {
      badge: true,
      badgeColorMap: { Engineer: 'blue', Researcher: 'teal' },
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    meta: {
      badge: true,
      badgeColorMap: { active: 'success', inactive: 'neutral' },
    },
  },
  {
    accessorKey: 'id',
    header: 'ID',
    enableSorting: false,
    meta: { hiddenByDefault: true, disableHiding: false },
  },
]

const meta: Meta<TableProps<Person>> = {
  title: 'Data display/Table',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  render: args => <Table<Person> {...args} />,
}

export default meta

type Story = StoryObj<typeof meta>

export const SortAndResize: Story = {
  name: 'Sort and column resize',
  args: {
    data: sampleData,
    columns: baseColumns,
  },
}

export const SelectionAndPagination: Story = {
  name: 'Selection and pagination',
  render: () => (
    <Table<Person>
      data={largeDataset}
      columns={baseColumns}
      enableRowSelection
      enablePagination
      enableColumnResizing={false}
      toolbar={
        <Button
          type="button"
          variant="outline"
          size="sm"
        >
          Delete selected
        </Button>
      }
    />
  ),
}

export const BulkActions: Story = {
  name: 'Bulk actions',
  render: () => (
    <Table<Person>
      data={sampleData}
      columns={baseColumns}
      enablePagination
      bulkActions={[
        {
          label: 'Remove',
          icon: <Trash2 size={16} />,
          variant: 'danger',
          onClick: rows => {
            // eslint-disable-next-line no-console
            console.log(
              'bulk',
              rows.map(r => r.original.id),
            )
          },
        },
      ]}
    />
  ),
}

export const RowActions: Story = {
  name: 'Row actions',
  render: () => (
    <Table<Person>
      data={sampleData}
      columns={baseColumns}
      rowActions={[
        {
          label: 'Edit',
          onClick: row => {
            // eslint-disable-next-line no-console
            console.log('edit', row.original.id)
          },
        },
        {
          label: 'Delete',
          variant: 'danger',
          onClick: row => {
            // eslint-disable-next-line no-console
            console.log('delete', row.original.id)
          },
        },
      ]}
    />
  ),
}

export const ServerFiltersAndSearch: Story = {
  name: 'Server search and column filters',
  render: function ServerFiltersStory() {
    const [search, setSearch] = useState('')
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    })

    const columns = useMemo<ColumnDef<Person>[]>(
      () => [
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'email', header: 'Email' },
        {
          accessorKey: 'role',
          header: 'Role',
          meta: {
            filterVariant: 'select',
            filterOptions: ['Engineer', 'Researcher'],
          },
        },
        {
          accessorKey: 'id',
          header: 'ID',
          meta: { filterVariant: 'text' },
        },
      ],
      [],
    )

    const filtered = useMemo(() => {
      let rows = [...largeDataset]
      if (search.trim()) {
        const q = search.toLowerCase()
        rows = rows.filter(
          r =>
            r.name.toLowerCase().includes(q) ||
            r.email.toLowerCase().includes(q),
        )
      }
      for (const f of columnFilters) {
        if (f.id === 'role' && f.value) {
          rows = rows.filter(r => r.role === f.value)
        }
        if (f.id === 'id' && f.value) {
          const s = String(f.value)
          rows = rows.filter(r => r.id.includes(s))
        }
      }
      return rows
    }, [search, columnFilters])

    const pageRows = useMemo(() => {
      const start = pagination.pageIndex * pagination.pageSize
      return filtered.slice(start, start + pagination.pageSize)
    }, [filtered, pagination])

    return (
      <Table<Person>
        data={pageRows}
        columns={columns}
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        columnFilters={columnFilters}
        onColumnFiltersChange={setColumnFilters}
        tableId="story-server-table"
      />
    )
  },
}

const toolbarFilterDefs: FilterDef[] = [
  {
    id: 'role',
    label: 'Role',
    variant: 'multi-select',
    options: [
      { label: 'Engineer', value: 'Engineer' },
      { label: 'Researcher', value: 'Researcher' },
    ],
  },
  {
    id: 'status',
    label: 'Status',
    variant: 'select',
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ],
  },
  {
    id: 'hiredBetween',
    label: 'Hired between',
    variant: 'date-range',
  },
  {
    id: 'verifiedOnly',
    label: 'Verification',
    variant: 'boolean',
    booleanLabels: { on: 'Verified only', off: 'All records' },
  },
]

/** Synthetic hire date for demo (id as YYYYMMDD-style ordering) */
function hireDateForRow(id: string): string {
  const n = Number.parseInt(id, 10)
  const year = 2020 + (n % 5)
  const month = String(((n * 7) % 12) + 1).padStart(2, '0')
  const day = String(((n * 13) % 28) + 1).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export const ToolbarFilters: Story = {
  name: 'Toolbar filters (popover & chips)',
  render: function ToolbarFiltersStory() {
    const [search, setSearch] = useState('')
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    })

    const columns = useMemo<ColumnDef<Person>[]>(
      () =>
        [
          { accessorKey: 'name', header: 'Name' },
          { accessorKey: 'email', header: 'Email' },
          {
            accessorKey: 'role',
            header: 'Role',
            meta: {
              badge: true,
              badgeColorMap: {
                Engineer: 'blue',
                Researcher: 'teal',
              } satisfies Record<string, string>,
            },
          },
          {
            accessorKey: 'status',
            header: 'Status',
            meta: {
              badge: true,
              badgeColorMap: {
                active: 'success',
                inactive: 'neutral',
              } satisfies Record<string, string>,
            },
          },
          { accessorKey: 'id', header: 'ID', enableSorting: false },
        ] as ColumnDef<Person>[],
      [],
    )

    const filtered = useMemo(() => {
      let rows = [...largeDataset]
      if (search.trim()) {
        const q = search.toLowerCase()
        rows = rows.filter(
          r =>
            r.name.toLowerCase().includes(q) ||
            r.email.toLowerCase().includes(q),
        )
      }
      for (const f of columnFilters) {
        if (f.id === 'role' && Array.isArray(f.value) && f.value.length > 0) {
          const set = new Set(f.value.map(String))
          rows = rows.filter(r => set.has(r.role))
        }
        if (f.id === 'status' && typeof f.value === 'string' && f.value) {
          rows = rows.filter(r => r.status === f.value)
        }
        if (f.id === 'hiredBetween' && f.value && typeof f.value === 'object') {
          const range = f.value as { from?: string; to?: string }
          const from = range.from?.trim()
          const to = range.to?.trim()
          rows = rows.filter(r => {
            const hired = hireDateForRow(r.id)
            if (from && hired < from) {
              return false
            }
            if (to && hired > to) {
              return false
            }
            return true
          })
        }
        if (f.id === 'verifiedOnly' && f.value === true) {
          rows = rows.filter(r => Number.parseInt(r.id, 10) % 5 === 0)
        }
      }
      return rows
    }, [search, columnFilters])

    const pageRows = useMemo(() => {
      const start = pagination.pageIndex * pagination.pageSize
      return filtered.slice(start, start + pagination.pageSize)
    }, [filtered, pagination])

    return (
      <Table<Person>
        data={pageRows}
        columns={columns}
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        columnFilters={columnFilters}
        onColumnFiltersChange={setColumnFilters}
        filterDefs={toolbarFilterDefs}
        tableId="story-toolbar-filters-table"
      />
    )
  },
}

export const LoadingAndEmpty: Story = {
  name: 'Loading and empty',
  render: function LoadingStory() {
    const [loading, setLoading] = useState(true)
    return (
      <div>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => setLoading(l => !l)}
          style={{ marginBottom: 16 }}
        >
          Toggle loading
        </Button>
        <Table<Person>
          data={loading ? [] : sampleData}
          columns={baseColumns}
          isLoading={loading}
          emptyState={<span>No people match your criteria.</span>}
        />
      </div>
    )
  },
}

export const Empty: Story = {
  args: {
    data: [],
    columns: baseColumns,
  },
}
