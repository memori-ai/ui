import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ColumnDef } from '@tanstack/react-table'
import { Button } from '../Button'
import { Table, type TableProps } from './Table'

type Person = {
  id: string
  name: string
  email: string
  role: string
}

const largeDataset: Person[] = Array.from({ length: 500 }, (_, i) => ({
  id: String(i + 1),
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 2 === 0 ? 'Engineer' : 'Researcher',
}))

const sampleData: Person[] = [
  {
    id: '1',
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    role: 'Engineer',
  },
  {
    id: '2',
    name: 'Alan Turing',
    email: 'alan@example.com',
    role: 'Researcher',
  },
  {
    id: '3',
    name: 'Grace Hopper',
    email: 'grace@example.com',
    role: 'Engineer',
  },
  {
    id: '4',
    name: 'Edsger Dijkstra',
    email: 'edsger@example.com',
    role: 'Researcher',
  },
]

const columns: ColumnDef<Person>[] = [
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
  },
  {
    accessorKey: 'id',
    header: 'ID',
    enableSorting: false,
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
    columns,
  },
}

export const SelectionAndPagination: Story = {
  name: 'Selection and pagination',
  render: () => (
    <Table<Person>
      data={largeDataset}
      columns={columns}
      enableRowSelection
      enablePagination
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

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
}
