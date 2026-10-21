import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Pencil, Plus, Trash2, UserPlus } from 'lucide-react'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Table } from '../../components/Table'
import { Tag } from '../../components/Tag'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

type AdminUserRow = {
  id: string
  userName: string
  email: string
  role: string
  tenant: string
  active: boolean
}

const USERS: AdminUserRow[] = [
  {
    id: '1',
    userName: 'demo.user',
    email: 'demo@memori.ai',
    role: 'user',
    tenant: 'aisuru.com',
    active: true,
  },
  {
    id: '2',
    userName: 'tenant.admin',
    email: 'admin@partner.example',
    role: 'admin',
    tenant: 'partner.example',
    active: true,
  },
  {
    id: '3',
    userName: 'suspended',
    email: 'old@example.com',
    role: 'user',
    tenant: 'aisuru.com',
    active: false,
  },
]

/**
 * Admin → Users table.
 */
export function AdminUsersDashboard() {
  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const columns = useMemo<ColumnDef<AdminUserRow>[]>(
    () => [
      {
        accessorKey: 'userName',
        header: 'Username',
        minSize: 140,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        minSize: 180,
      },
      {
        accessorKey: 'role',
        header: 'Ruolo',
        size: 100,
        cell: ({ getValue }) => <Tag>{String(getValue())}</Tag>,
      },
      {
        accessorKey: 'tenant',
        header: 'Tenant',
        minSize: 140,
      },
      {
        id: 'active',
        header: 'Stato',
        size: 110,
        cell: ({ row }) =>
          row.original.active ? (
            <Tag color="success">Attivo</Tag>
          ) : (
            <Tag color="error">Sospeso</Tag>
          ),
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    if (!search.trim()) return USERS
    const q = search.toLowerCase()
    return USERS.filter(
      r =>
        r.userName.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.tenant.toLowerCase().includes(q),
    )
  }, [search])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Admin · Utenti"
        description="Crea, modifica e sospendi utenti della piattaforma."
        icon={
          <UserPlus
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
          Nuovo utente
        </Button>
      </div>

      <Table<AdminUserRow>
        data={pageRows}
        columns={columns}
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca username, email o tenant"
        paginationVariant="simplified"
        pageSizeOptions={[10, 25, 50]}
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
          {
            id: 'delete',
            label: 'Elimina',
            variant: 'danger',
            icon: (
              <Trash2
                size={16}
                aria-hidden
              />
            ),
            onClick: () => {
              /* demo */
            },
          },
        ]}
        tableId="real-example-admin-users"
      />
    </div>
  )
}
