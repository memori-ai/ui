import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Copy, Pencil, Plus, ShieldCheck, Trash2 } from 'lucide-react'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Table } from '../../components/Table'
import { Tag } from '../../components/Tag'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

type TrustedAppRow = {
  id: string
  name: string
  clientId: string
  status: 'active' | 'revoked'
}

const APPS: TrustedAppRow[] = [
  {
    id: '1',
    name: 'Partner Portal',
    clientId: 'app_9f3a…c21',
    status: 'active',
  },
  {
    id: '2',
    name: 'Mobile SDK',
    clientId: 'app_12bc…88e',
    status: 'active',
  },
  {
    id: '3',
    name: 'Legacy Integrator',
    clientId: 'app_00aa…11f',
    status: 'revoked',
  },
]

/**
 * Admin → Trusted applications.
 */
export function TrustedApplicationsDashboard() {
  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const columns = useMemo<ColumnDef<TrustedAppRow>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Applicazione',
        minSize: 180,
      },
      {
        accessorKey: 'clientId',
        header: 'Client ID',
        minSize: 160,
        cell: ({ row }) => (
          <span className={styles.monoCell}>
            <code>{row.original.clientId}</code>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              ariaLabel={`Copia client ID di ${row.original.name}`}
              icon={
                <Copy
                  size={14}
                  aria-hidden
                />
              }
            />
          </span>
        ),
      },
      {
        id: 'status',
        header: 'Stato',
        size: 120,
        cell: ({ row }) =>
          row.original.status === 'active' ? (
            <Tag color="success">Attiva</Tag>
          ) : (
            <Tag color="error">Revocata</Tag>
          ),
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    if (!search.trim()) return APPS
    const q = search.toLowerCase()
    return APPS.filter(
      r =>
        r.name.toLowerCase().includes(q) ||
        r.clientId.toLowerCase().includes(q),
    )
  }, [search])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Admin · Trusted applications"
        description="Gestisci applicazioni OAuth / client fidati."
        icon={
          <ShieldCheck
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
          Nuova applicazione
        </Button>
      </div>

      <Table<TrustedAppRow>
        data={pageRows}
        columns={columns}
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca applicazione"
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
          {
            id: 'delete',
            label: 'Revoca',
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
        tableId="real-example-trusted-apps"
      />
    </div>
  )
}
