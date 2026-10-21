import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Ban, Bot, Lock, Pencil, Trash2, Unlock } from 'lucide-react'
import { Section } from '../../components/Section'
import { Table } from '../../components/Table'
import { Tag } from '../../components/Tag'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

type AdminAgentRow = {
  id: string
  nome: string
  owner: string
  tenant: string
  blocked: boolean
  locked: boolean
  privacy: string
}

const AGENTS: AdminAgentRow[] = [
  {
    id: '1',
    nome: 'Layout Storybook',
    owner: 'demo.user',
    tenant: 'aisuru.com',
    blocked: false,
    locked: false,
    privacy: 'PUBLIC',
  },
  {
    id: '2',
    nome: 'Legacy Bot',
    owner: 'old.user',
    tenant: 'partner.example',
    blocked: true,
    locked: true,
    privacy: 'PRIVATE',
  },
  {
    id: '3',
    nome: 'Sales Copilot',
    owner: 'sales.ops',
    tenant: 'aisuru.com',
    blocked: false,
    locked: false,
    privacy: 'SECRET',
  },
]

/**
 * Admin → Agents table.
 */
export function AdminAgentsDashboard() {
  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const columns = useMemo<ColumnDef<AdminAgentRow>[]>(
    () => [
      {
        accessorKey: 'nome',
        header: 'Nome',
        minSize: 160,
      },
      {
        accessorKey: 'owner',
        header: 'Owner',
        minSize: 140,
      },
      {
        accessorKey: 'tenant',
        header: 'Tenant',
        minSize: 140,
      },
      {
        accessorKey: 'privacy',
        header: 'Privacy',
        size: 110,
        cell: ({ getValue }) => <Tag>{String(getValue())}</Tag>,
      },
      {
        id: 'blocked',
        header: 'Stato',
        size: 120,
        cell: ({ row }) =>
          row.original.blocked ? (
            <Tag color="error">Bloccato</Tag>
          ) : (
            <Tag color="success">Attivo</Tag>
          ),
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    if (!search.trim()) return AGENTS
    const q = search.toLowerCase()
    return AGENTS.filter(
      r =>
        r.nome.toLowerCase().includes(q) ||
        r.owner.toLowerCase().includes(q) ||
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
        title="Admin · Agenti"
        description="Cerca, blocca e gestisci tutti gli agenti del tenant."
        icon={
          <Bot
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <Table<AdminAgentRow>
        data={pageRows}
        columns={columns}
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca agente, owner o tenant"
        paginationVariant="simplified"
        pageSizeOptions={[10, 25, 50]}
        initialPageSize={10}
        rowActionsVariant="menu"
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
            id: 'block',
            label: 'Blocca',
            hidden: row => row.original.blocked,
            icon: (
              <Ban
                size={16}
                aria-hidden
              />
            ),
            onClick: () => {
              /* demo */
            },
          },
          {
            id: 'unblock',
            label: 'Sblocca',
            hidden: row => !row.original.blocked,
            icon: (
              <Ban
                size={16}
                aria-hidden
              />
            ),
            onClick: () => {
              /* demo */
            },
          },
          {
            id: 'lock',
            label: 'Lock',
            hidden: row => row.original.locked,
            icon: (
              <Lock
                size={16}
                aria-hidden
              />
            ),
            onClick: () => {
              /* demo */
            },
          },
          {
            id: 'unlock',
            label: 'Unlock',
            hidden: row => !row.original.locked,
            icon: (
              <Unlock
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
        tableId="real-example-admin-agents"
      />
    </div>
  )
}
