import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Bell, Check } from 'lucide-react'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Table } from '../../components/Table'
import { Tag } from '../../components/Tag'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

type NotificationRow = {
  id: string
  titolo: string
  tipo: string
  data: string
  letta: boolean
}

const ROWS: NotificationRow[] = [
  {
    id: '1',
    titolo: 'Nuova versione piattaforma',
    tipo: 'CHANGELOG',
    data: '20/03/2026 09:12',
    letta: false,
  },
  {
    id: '2',
    titolo: 'Invito accettato su Supporto Clienti',
    tipo: 'INVITE',
    data: '19/03/2026 16:40',
    letta: true,
  },
  {
    id: '3',
    titolo: 'Import documenti completato',
    tipo: 'PROCESS',
    data: '18/03/2026 11:05',
    letta: true,
  },
]

/**
 * Notifications (admin menu entry).
 */
export function NotificationsDashboard() {
  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  })

  const columns = useMemo<ColumnDef<NotificationRow>[]>(
    () => [
      {
        accessorKey: 'titolo',
        header: 'Titolo',
        minSize: 220,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>
            <strong>{row.original.titolo}</strong>
          </span>
        ),
      },
      {
        accessorKey: 'tipo',
        header: 'Tipo',
        size: 120,
        cell: ({ getValue }) => <Tag>{String(getValue())}</Tag>,
      },
      {
        accessorKey: 'data',
        header: 'Data',
        size: 160,
      },
      {
        id: 'letta',
        header: 'Stato',
        size: 110,
        cell: ({ row }) =>
          row.original.letta ? (
            <Tag color="default">Letta</Tag>
          ) : (
            <Tag color="info">Nuova</Tag>
          ),
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    if (!search.trim()) return ROWS
    const q = search.toLowerCase()
    return ROWS.filter(
      r =>
        r.titolo.toLowerCase().includes(q) || r.tipo.toLowerCase().includes(q),
    )
  }, [search])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Notifiche"
        description="Gestisci le notifiche di sistema e di processo."
        icon={
          <Bell
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        actions={
          <Button
            type="button"
            variant="outline"
            size="md"
            icon={
              <Check
                size={18}
                aria-hidden
              />
            }
          >
            Segna tutte come lette
          </Button>
        }
        className={styles.contentSection}
      />

      <Table<NotificationRow>
        data={pageRows}
        columns={columns}
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca notifica"
        paginationVariant="simplified"
        pageSizeOptions={[10, 25]}
        initialPageSize={25}
        tableId="real-example-notifications"
      />
    </div>
  )
}
