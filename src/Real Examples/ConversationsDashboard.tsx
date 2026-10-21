import React, { useEffect, useMemo, useState } from 'react'
import type {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
} from '@tanstack/react-table'
import {
  Bell,
  Download,
  ExternalLink,
  Image as ImageIcon,
  Link as LinkIcon,
  Menu,
  MessageCircle,
  Trash2,
} from 'lucide-react'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { Dropdown } from '../components/Dropdown'
import { Section } from '../components/Section'
import { Table, type DateRangeValue, type FilterDef } from '../components/Table'
import '../components/Input/styles.css'
import { ChatLogDrawer } from './conversations/ChatLogDrawer'
import { useNotify } from './shared/useNotify'
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
  /** Receiver role (invitation tag), empty for public chats */
  ruolo?: string
  /** ISO day used by the date-range filter */
  giorno: string
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
      giorno: '2026-03-23',
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
      giorno: '2026-03-22',
      ruolo: 'Atleta',
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
      giorno: '2026-03-20',
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
      giorno: '2026-03-19',
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
    ruolo: i % 6 === 0 ? 'Cliente' : undefined,
    giorno: `2026-03-${String(18 - (i % 10)).padStart(2, '0')}`,
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
      { value: '3', label: 'Almeno 3 messaggi' },
      { value: '5', label: 'Almeno 5 messaggi' },
      { value: '10', label: 'Almeno 10 messaggi' },
      { value: '15', label: 'Almeno 15 messaggi' },
      { value: '20', label: 'Almeno 20 messaggi' },
    ],
  },
  {
    id: 'giorno',
    label: 'Intervallo di date',
    variant: 'date-range',
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
  const notify = useNotify()
  const [rows, setRows] = useState(ALL_CONVERSATIONS)
  const [opened, setOpened] = useState<ConversationRow | null>(null)
  const [deleting, setDeleting] = useState<ConversationRow[] | null>(null)
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
        accessorKey: 'ruolo',
        header: 'Ruolo',
        size: 110,
        cell: ({ getValue }) =>
          (getValue() as string) ?? (
            <span className={styles.tableMutedCell}>—</span>
          ),
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
    let list = [...rows]
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
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
          list = list.filter(r => r.messaggi >= min)
        }
      }
      if (f.id === 'hasMedia' && f.value === true) {
        list = list.filter(r => r.hasMedia)
      }
      if (f.id === 'hasLink' && f.value === true) {
        list = list.filter(r => r.hasLink)
      }
      if (f.id === 'giorno' && f.value) {
        const { from, to } = f.value as DateRangeValue
        list = list.filter(
          r => (!from || r.giorno >= from) && (!to || r.giorno <= to),
        )
      }
    }
    return list
  }, [rows, search, columnFilters])

  const hasDateFilter = columnFilters.some(f => f.id === 'giorno' && f.value)

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
          <Dropdown>
            <Dropdown.Trigger
              showChevron={false}
              aria-label="Azioni"
            >
              <Menu
                size={18}
                aria-hidden
              />
            </Dropdown.Trigger>
            <Dropdown.Menu align="end">
              <Dropdown.Item
                icon={
                  <Download
                    size={16}
                    aria-hidden
                  />
                }
                disabled={!hasDateFilter}
                onClick={() => notify('Conversazioni scaricate con successo')}
              >
                <span className={styles.menuItemStack}>
                  Scarica conversazioni
                  {!hasDateFilter ? (
                    <span className={styles.menuItemHint}>
                      Filtra prima per data
                    </span>
                  ) : null}
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                icon={
                  <Bell
                    size={16}
                    aria-hidden
                  />
                }
                onClick={() =>
                  notify('Apertura Impostazioni › Notifiche', 'info')
                }
              >
                Notifiche
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
        enableRowSelection
        bulkActions={[
          {
            label: 'Elimina',
            variant: 'danger',
            icon: (
              <Trash2
                size={16}
                aria-hidden
              />
            ),
            onClick: sel => setDeleting(sel.map(r => r.original)),
          },
        ]}
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
            onClick: row => setOpened(row.original),
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
            onClick: row => setDeleting([row.original]),
          },
        ]}
        tableId="real-example-conversations"
      />
      <ChatLogDrawer
        conversation={opened}
        conversations={filtered}
        onNavigate={setOpened}
        onClose={() => setOpened(null)}
      />
      <ConfirmDialog
        isOpen={!!deleting}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          const ids = new Set(deleting?.map(d => d.id))
          setRows(prev => prev.filter(r => !ids.has(r.id)))
          setDeleting(null)
          notify('Elemento/i eliminato/i con successo')
        }}
        title="Elimina"
        message="Sicuro di voler eliminare gli elementi selezionati?"
        confirmText="Conferma"
        cancelText="Annulla"
      />
    </div>
  )
}
