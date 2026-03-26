import React, { useEffect, useMemo, useState } from 'react'
import type {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
} from '@tanstack/react-table'
import {
  ExternalLink,
  Image as ImageIcon,
  Link as LinkIcon,
  Menu,
  MessageCircle,
  Trash2,
} from 'lucide-react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Table, type FilterDef } from '../components/Table'
import '../components/Input/styles.css'
import styles from './realExamples.module.css'

export type ConversationRow = {
  id: string
  titolo: string
  mail: string
  dataInizio: string
  messaggi: number
  durata: string
  hasMedia: boolean
  hasLink: boolean
}

function buildConversations(): ConversationRow[] {
  const base: ConversationRow[] = [
    {
      id: '1',
      titolo: 'ciao, questo è un test',
      mail: 'andrea.patini@memori.ai',
      dataInizio: 'lunedì 23 marzo 2026 16:41',
      messaggi: 3,
      durata: 'meno di un minuto',
      hasMedia: false,
      hasLink: false,
    },
    {
      id: '2',
      titolo: 'abbiamo cucinato?',
      mail: 'andrea.patini@memori.ai',
      dataInizio: 'domenica 22 marzo 2026 10:15',
      messaggi: 5,
      durata: '2 min',
      hasMedia: true,
      hasLink: false,
    },
    {
      id: '3',
      titolo: 'ciao',
      mail: 'Anonimo',
      dataInizio: 'venerdì 20 marzo 2026 11:44',
      messaggi: 3,
      durata: 'meno di un minuto',
      hasMedia: true,
      hasLink: true,
    },
    {
      id: '4',
      titolo: 'test flusso notifiche',
      mail: 'team@memori.ai',
      dataInizio: 'giovedì 19 marzo 2026 09:00',
      messaggi: 7,
      durata: 'meno di un minuto',
      hasMedia: false,
      hasLink: true,
    },
  ]

  const rest: ConversationRow[] = Array.from({ length: 29 }, (_, i) => ({
    id: `c-${i + 5}`,
    titolo: `Conversazione di esempio ${i + 5}`,
    mail: i % 4 === 0 ? 'Anonimo' : `user${i}@example.com`,
    dataInizio: `mercoledì ${18 - (i % 10)} marzo 2026 ${9 + (i % 8)}:${String((i * 3) % 60).padStart(2, '0')}`,
    messaggi: 2 + (i % 12),
    durata: i % 3 === 0 ? '2 min' : 'meno di un minuto',
    hasMedia: i % 4 === 0,
    hasLink: i % 5 === 0,
  }))

  return [...base, ...rest]
}

const ALL_CONVERSATIONS = buildConversations()

const conversationFilterDefs: FilterDef[] = [
  {
    id: 'messaggiMin',
    label: 'Messaggi',
    variant: 'select',
    options: [
      { value: '2', label: 'Almeno 2 messaggi' },
      { value: '5', label: 'Almeno 5 messaggi' },
      { value: '10', label: 'Almeno 10 messaggi' },
    ],
  },
  {
    id: 'hasMedia',
    label: 'Media',
    variant: 'boolean',
    booleanLabels: { on: 'Solo con media', off: 'Tutti' },
  },
  {
    id: 'hasLink',
    label: 'Link',
    variant: 'boolean',
    booleanLabels: { on: 'Solo con link', off: 'Tutti' },
  },
]

/**
 * Elenco conversazioni: intestazione con titolo e filtri, tabella con azioni Apri ed Elimina.
 */
export function ConversationsDashboard() {
  const [search, setSearch] = useState('')
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  })

  useEffect(() => {
    setPagination(p => ({ ...p, pageIndex: 0 }))
  }, [search, columnFilters])

  const columns = useMemo<ColumnDef<ConversationRow>[]>(
    () => [
      {
        accessorKey: 'titolo',
        header: 'Titolo',
        minSize: 200,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>{row.original.titolo}</span>
        ),
      },
      {
        accessorKey: 'mail',
        header: 'Mail',
        minSize: 200,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>{row.original.mail}</span>
        ),
      },
      {
        accessorKey: 'dataInizio',
        header: 'Data inizio',
        minSize: 220,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>
            {row.original.dataInizio}
          </span>
        ),
      },
      {
        accessorKey: 'messaggi',
        header: 'Messaggi',
        size: 110,
      },
      {
        accessorKey: 'durata',
        header: 'Durata',
        size: 160,
      },
      {
        id: 'media',
        header: 'Media',
        size: 72,
        enableSorting: false,
        cell: ({ row }) =>
          row.original.hasMedia ? (
            <ImageIcon
              size={18}
              className={styles.cellIcon}
              aria-label="Contiene media"
            />
          ) : null,
      },
      {
        id: 'link',
        header: 'Link',
        size: 72,
        enableSorting: false,
        cell: ({ row }) =>
          row.original.hasLink ? (
            <LinkIcon
              size={18}
              className={styles.cellIcon}
              aria-label="Contiene link"
            />
          ) : null,
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    let rows = [...ALL_CONVERSATIONS]
    if (search.trim()) {
      const q = search.toLowerCase()
      rows = rows.filter(
        r =>
          r.titolo.toLowerCase().includes(q) ||
          r.mail.toLowerCase().includes(q) ||
          r.dataInizio.toLowerCase().includes(q),
      )
    }
    for (const f of columnFilters) {
      if (f.id === 'messaggiMin' && typeof f.value === 'string' && f.value) {
        const min = Number(f.value)
        if (!Number.isNaN(min)) {
          rows = rows.filter(r => r.messaggi >= min)
        }
      }
      if (f.id === 'hasMedia' && f.value === true) {
        rows = rows.filter(r => r.hasMedia)
      }
      if (f.id === 'hasLink' && f.value === true) {
        rows = rows.filter(r => r.hasLink)
      }
    }
    return rows
  }, [search, columnFilters])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Conversazioni"
        description="Visualizza e gestisci le conversazioni con l’Agente. Cerca per testo, data, utente, email o sessionID. Per le notifiche, usa le impostazioni."
        icon={
          <MessageCircle
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        actions={
          <Button
            type="button"
            variant="ghost"
            size="md"
            ariaLabel="Menu"
            icon={
              <Menu
                size={22}
                aria-hidden
              />
            }
          />
        }
        className={styles.conversationsSection}
      />

      <Table<ConversationRow>
        data={pageRows}
        columns={columns}
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca per conversazione, utente, email o sessionID"
        columnFilters={columnFilters}
        onColumnFiltersChange={setColumnFilters}
        filterDefs={conversationFilterDefs}
        paginationVariant="simplified"
        pageSizeOptions={[10, 25, 50]}
        initialPageSize={25}
        rowActionsVariant="inline"
        rowActions={[
          {
            id: 'open',
            label: 'Apri',
            icon: (
              <ExternalLink
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
        tableId="real-example-conversations"
      />
    </div>
  )
}
