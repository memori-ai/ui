import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Boxes, Pencil, Plus, RefreshCw, Trash2 } from 'lucide-react'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Table } from '../../components/Table'
import { Tag } from '../../components/Tag'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

type ModelRow = {
  id: string
  nome: string
  provider: string
  owner: string
  shared: boolean
}

const MODELS: ModelRow[] = [
  {
    id: '1',
    nome: 'Memori-OpenAI-Q&A',
    provider: 'OpenAI',
    owner: 'demo.user',
    shared: true,
  },
  {
    id: '2',
    nome: 'Claude Support',
    provider: 'Anthropic',
    owner: 'demo.user',
    shared: false,
  },
  {
    id: '3',
    nome: 'Tenant Default',
    provider: 'Azure',
    owner: 'tenant-admin',
    shared: true,
  },
]

/**
 * Models: completion configs table.
 */
export function ModelsDashboard() {
  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const columns = useMemo<ColumnDef<ModelRow>[]>(
    () => [
      {
        accessorKey: 'nome',
        header: 'Nome',
        minSize: 180,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>{row.original.nome}</span>
        ),
      },
      {
        accessorKey: 'provider',
        header: 'Provider',
        size: 120,
      },
      {
        accessorKey: 'owner',
        header: 'Owner',
        minSize: 140,
      },
      {
        id: 'shared',
        header: 'Condiviso',
        size: 110,
        cell: ({ row }) =>
          row.original.shared ? (
            <Tag color="success">Sì</Tag>
          ) : (
            <Tag color="default">No</Tag>
          ),
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    if (!search.trim()) return MODELS
    const q = search.toLowerCase()
    return MODELS.filter(
      r =>
        r.nome.toLowerCase().includes(q) ||
        r.provider.toLowerCase().includes(q) ||
        r.owner.toLowerCase().includes(q),
    )
  }, [search])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Modelli"
        description="Configura i modelli di completion disponibili per gli agenti."
        icon={
          <Boxes
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
          Nuovo modello
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

      <Table<ModelRow>
        data={pageRows}
        columns={columns}
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca modello o provider"
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
        tableId="real-example-models"
      />
    </div>
  )
}
