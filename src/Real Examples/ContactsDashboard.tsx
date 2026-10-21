import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import {
  Check,
  Mail,
  Pencil,
  Plus,
  RefreshCw,
  Trash2,
  Users,
} from 'lucide-react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Table } from '../components/Table'
import { Badge } from '../components/Badge'
import '../components/Input/styles.css'
import styles from './realExamples.module.css'

export type ContactRow = {
  id: string
  nome: string
  tag: string
  isGiver: boolean
  inviti: number
}

const ALL_CONTACTS: ContactRow[] = [
  {
    id: '1',
    nome: 'Proprietario',
    tag: 'GIVER',
    isGiver: true,
    inviti: 2,
  },
  {
    id: '2',
    nome: 'Cliente demo',
    tag: 'CLIENT',
    isGiver: false,
    inviti: 1,
  },
  {
    id: '3',
    nome: 'Supporto',
    tag: 'SUPPORT',
    isGiver: false,
    inviti: 0,
  },
  {
    id: '4',
    nome: 'Partner',
    tag: 'PARTNER',
    isGiver: false,
    inviti: 3,
  },
]

/**
 * Contatti: toolbar e tabella profili / inviti.
 */
export function ContactsDashboard() {
  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  })

  const columns = useMemo<ColumnDef<ContactRow>[]>(
    () => [
      {
        accessorKey: 'nome',
        header: 'Nome profilo',
        minSize: 180,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>
            <strong>{row.original.nome}</strong>{' '}
            {row.original.inviti > 0 ? (
              <Badge
                className={styles.tabCount}
                count={row.original.inviti}
                aria-label={`${row.original.inviti} inviti`}
              />
            ) : null}
          </span>
        ),
      },
      {
        accessorKey: 'tag',
        header: 'Tag',
        size: 120,
        cell: ({ getValue }) => (
          <span className={styles.tableCellText}>{String(getValue())}</span>
        ),
      },
      {
        id: 'giver',
        header: 'Autore',
        size: 88,
        enableSorting: false,
        cell: ({ row }) =>
          row.original.isGiver ? (
            <Check
              size={18}
              className={styles.cellIcon}
              aria-label="Autore"
            />
          ) : (
            <span className={styles.tableMutedCell}>—</span>
          ),
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    if (!search.trim()) return ALL_CONTACTS
    const q = search.toLowerCase()
    return ALL_CONTACTS.filter(
      r => r.nome.toLowerCase().includes(q) || r.tag.toLowerCase().includes(q),
    )
  }, [search])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Contatti"
        description="Gestisci profili, tag e inviti per il tuo Agente."
        icon={
          <Users
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
          variant="outline"
          size="md"
          icon={
            <Mail
              size={18}
              aria-hidden
            />
          }
        >
          Invita Autore
        </Button>
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
          Nuovo contatto
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="md"
          icon={
            <RefreshCw
              size={18}
              aria-hidden
            />
          }
        >
          Aggiorna
        </Button>
      </div>

      <Table<ContactRow>
        data={pageRows}
        columns={columns}
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca profilo o tag"
        paginationVariant="simplified"
        pageSizeOptions={[10, 25, 50]}
        initialPageSize={25}
        rowActionsVariant="inline"
        rowActions={[
          {
            id: 'invite',
            label: 'Invita',
            icon: (
              <Mail
                size={16}
                aria-hidden
              />
            ),
            onClick: () => {
              /* demo */
            },
          },
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
        tableId="real-example-contacts"
      />
    </div>
  )
}
