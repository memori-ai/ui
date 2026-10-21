import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Pencil, Plus, Trash2, UsersRound } from 'lucide-react'
import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { Section } from '../components/Section'
import { Table } from '../components/Table'
import '../components/Input/styles.css'
import styles from './realExamples.module.css'

export type ExpertRow = {
  id: string
  nome: string
  descrizione: string
  isDefault: boolean
  initials: string
}

const ALL_EXPERTS: ExpertRow[] = [
  {
    id: '1',
    nome: 'Esperto Vendite',
    descrizione:
      'Risponde a domande su prodotti, listini e processi commerciali.',
    isDefault: true,
    initials: 'EV',
  },
  {
    id: '2',
    nome: 'Esperto Tecnico',
    descrizione: 'Supporto su integrazione API, SDK e troubleshooting.',
    isDefault: false,
    initials: 'ET',
  },
  {
    id: '3',
    nome: 'Esperto HR',
    descrizione: 'Policy interne, onboarding e FAQ dipendenti.',
    isDefault: false,
    initials: 'EH',
  },
]

/**
 * Board of Experts: elenco esperti con default e azioni.
 */
export function ExpertsDashboard() {
  const [search, setSearch] = useState('')
  const [rows, setRows] = useState(ALL_EXPERTS)
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  })

  const columns = useMemo<ColumnDef<ExpertRow>[]>(
    () => [
      {
        id: 'avatar',
        header: 'Avatar',
        size: 72,
        enableSorting: false,
        cell: ({ row }) => (
          <span
            className={styles.avatarCell}
            aria-hidden
          >
            {row.original.initials}
          </span>
        ),
      },
      {
        accessorKey: 'nome',
        header: 'Nome',
        minSize: 160,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>{row.original.nome}</span>
        ),
      },
      {
        accessorKey: 'descrizione',
        header: 'Descrizione',
        minSize: 220,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>
            {row.original.descrizione}
          </span>
        ),
      },
      {
        id: 'default',
        header: 'Predefinito',
        size: 100,
        enableSorting: false,
        cell: ({ row }) => (
          <Checkbox
            checked={row.original.isDefault}
            aria-label={`Imposta ${row.original.nome} come predefinito`}
            onChange={checked => {
              if (!checked) return
              setRows(prev =>
                prev.map(r => ({
                  ...r,
                  isDefault: r.id === row.original.id,
                })),
              )
            }}
          />
        ),
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    if (!search.trim()) return rows
    const q = search.toLowerCase()
    return rows.filter(
      r =>
        r.nome.toLowerCase().includes(q) ||
        r.descrizione.toLowerCase().includes(q),
    )
  }, [rows, search])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Esperti"
        description="Configura il Board of Experts: aggiungi, modifica e scegli l’esperto predefinito."
        icon={
          <UsersRound
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
          Nuovo esperto
        </Button>
      </div>

      <Table<ExpertRow>
        data={pageRows}
        columns={columns}
        enableRowSelection
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca esperto"
        paginationVariant="simplified"
        pageSizeOptions={[10, 25, 50]}
        initialPageSize={25}
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
        bulkActions={[
          {
            label: 'Elimina',
            icon: (
              <Trash2
                size={16}
                aria-hidden
              />
            ),
            variant: 'danger',
            onClick: () => {
              /* demo */
            },
          },
        ]}
        tableId="real-example-experts"
      />
    </div>
  )
}
