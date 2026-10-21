import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Network, Pencil, Plus } from 'lucide-react'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Table } from '../../components/Table'
import { Tag } from '../../components/Tag'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

type TenantRow = {
  id: string
  name: string
  type: string
  agents: number
  paying: boolean
}

const TENANTS: TenantRow[] = [
  {
    id: '1',
    name: 'aisuru.com',
    type: 'Owned',
    agents: 128,
    paying: true,
  },
  {
    id: '2',
    name: 'partner.example',
    type: 'WhiteLabel',
    agents: 42,
    paying: true,
  },
  {
    id: '3',
    name: 'trial.local',
    type: 'Trial',
    agents: 3,
    paying: false,
  },
]

/**
 * Admin → Tenants (superAdmin).
 */
export function AdminTenantsDashboard() {
  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const columns = useMemo<ColumnDef<TenantRow>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Tenant',
        minSize: 180,
      },
      {
        accessorKey: 'type',
        header: 'Tipo',
        size: 120,
        cell: ({ getValue }) => <Tag>{String(getValue())}</Tag>,
      },
      {
        accessorKey: 'agents',
        header: 'Agenti',
        size: 100,
      },
      {
        id: 'paying',
        header: 'Billing',
        size: 120,
        cell: ({ row }) =>
          row.original.paying ? (
            <Tag color="success">Paying</Tag>
          ) : (
            <Tag color="warning">Trial</Tag>
          ),
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    if (!search.trim()) return TENANTS
    const q = search.toLowerCase()
    return TENANTS.filter(
      r => r.name.toLowerCase().includes(q) || r.type.toLowerCase().includes(q),
    )
  }, [search])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Admin · Tenant"
        description="Elenco tenant e stato billing (super admin)."
        icon={
          <Network
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <div className={styles.toolbarRow}>
        <Button
          type="button"
          variant="primary"
          size="md"
          icon={
            <Plus
              size={18}
              aria-hidden
            />
          }
        >
          Nuovo tenant
        </Button>
      </div>

      <Table<TenantRow>
        data={pageRows}
        columns={columns}
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca tenant"
        paginationVariant="simplified"
        pageSizeOptions={[10, 25]}
        initialPageSize={10}
        rowActionsVariant="inline"
        rowActions={[
          {
            id: 'edit',
            label: 'Modifica',
            icon: (
              <Pencil
                size={16}
                aria-hidden
              />
            ),
            onClick: () => {
              /* demo */
            },
          },
        ]}
        tableId="real-example-admin-tenants"
      />
    </div>
  )
}
