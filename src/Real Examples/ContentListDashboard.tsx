import React, { useEffect, useMemo, useState } from 'react'
import type {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
} from '@tanstack/react-table'
import {
  Info,
  Link as LinkIcon,
  Pencil,
  Plus,
  Trash2,
  User,
} from 'lucide-react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Table, type FilterDef } from '../components/Table'
import { Tabs } from '../components/Tabs'
import '../components/Input/styles.css'
import styles from './realExamples.module.css'

export type ContentRow = {
  id: string
  domanda: string
  occorrenze: number | null
  risposta: string
  argNecessari: string[]
  argImpostati: string[]
  tag: string
  hasLink: boolean
  creatoIl: string
  showExpandDomanda?: boolean
  showExpandRisposta?: boolean
}

function buildContentDataset(): ContentRow[] {
  const samples: ContentRow[] = [
    {
      id: '1',
      domanda: 'mi dai li link?',
      occorrenze: null,
      risposta: '—',
      argNecessari: [],
      argImpostati: [],
      tag: '',
      hasLink: false,
      creatoIl: '25/11/24, 15:25',
    },
    {
      id: '2',
      domanda:
        'ok aggiorna processo 66e348f85824e61304f0fd41 con la nuova tabella',
      occorrenze: 1,
      risposta:
        'Mi dispiace, sembra che ci sia ancora un problema tecnico con l’aggiornamento del processo.',
      argNecessari: [
        'ROUTE: BB2795BE-8C3D-4F1A-9E2B-1A2B3C4D5E6F',
        'PATHNAME: /IT/MEMORIA/PROCESSI',
      ],
      argImpostati: [],
      tag: '',
      hasLink: true,
      creatoIl: '25/11/24, 15:12',
      showExpandRisposta: true,
    },
    {
      id: '3',
      domanda:
        'What are the different blendshapes or morph targets available in this workflow?',
      occorrenze: 12,
      risposta:
        'Ecco un riepilogo delle diverse blendshape e dei morph target disponibili in questo workflow.',
      argNecessari: [],
      argImpostati: [],
      tag: '#IMPORT_20241024145844_SchemaBlendshape',
      hasLink: false,
      creatoIl: '24/10/24, 14:59',
      showExpandRisposta: true,
    },
    {
      id: '4',
      domanda: "bello l'esperimento ma non ci siamo",
      occorrenze: 3,
      risposta: 'come posso migliorare',
      argNecessari: [],
      argImpostati: ['NONCISIAMO'],
      tag: '',
      hasLink: true,
      creatoIl: '31/12/22, 15:51',
    },
  ]

  const filler: ContentRow[] = Array.from({ length: 547 }, (_, i) => ({
    id: `gen-${i}`,
    domanda: `Domanda di esempio ${i + 5} — contenuto generato per la paginazione`,
    occorrenze: (i % 7) + 1,
    risposta: `Risposta sintetica numero ${i + 5}.`,
    argNecessari: i % 11 === 0 ? [`ROUTE: GEN-${i}`] : [],
    argImpostati: i % 13 === 0 ? [`TAG_${i % 100}`] : [],
    tag: i % 17 === 0 ? `#TAG_${i}` : '',
    hasLink: i % 5 === 0,
    creatoIl: `${String((i % 28) + 1).padStart(2, '0')}/12/24, ${10 + (i % 8)}:${String((i * 2) % 60).padStart(2, '0')}`,
  }))

  return [...samples, ...filler]
}

const ALL_CONTENT_ROWS = buildContentDataset()

const contentFilterDefs: FilterDef[] = [
  {
    id: 'hasLink',
    label: 'Link',
    variant: 'boolean',
    booleanLabels: { on: 'Solo con link', off: 'Tutti' },
  },
  {
    id: 'hasTag',
    label: 'Tag',
    variant: 'boolean',
    booleanLabels: { on: 'Con tag', off: 'Tutti' },
  },
  {
    id: 'occorrenze',
    label: 'Occorrenze',
    variant: 'select',
    options: [
      { value: 'any', label: 'Qualsiasi' },
      { value: 'none', label: 'Senza occorrenze' },
      { value: 'some', label: 'Con occorrenze' },
    ],
  },
]

function pillsCell(values: string[]) {
  if (values.length === 0) {
    return <span className={styles.tableMutedCell}>—</span>
  }
  return (
    <div className={styles.pillGroup}>
      {values.map(v => (
        <span
          key={v}
          className="memori-table__badge memori-table__badge--neutral"
        >
          {v}
        </span>
      ))}
    </div>
  )
}

/**
 * Lista contenuti: tab di navigazione, barra ricerca e azioni, tabella con selezione e paginazione dettagliata.
 */
export function ContentListDashboard() {
  const [search, setSearch] = useState('')
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  useEffect(() => {
    setPagination(p => ({ ...p, pageIndex: 0 }))
  }, [search, columnFilters])

  const columns = useMemo<ColumnDef<ContentRow>[]>(
    () => [
      {
        accessorKey: 'domanda',
        header: 'Domanda / Titolo',
        minSize: 200,
        cell: ({ row }) => (
          <div className={styles.contentCell}>
            <span className={styles.contentCellText}>
              {row.original.domanda}
            </span>
            {row.original.showExpandDomanda ? (
              <Button
                type="button"
                variant="link"
                size="sm"
                className={styles.expandLink}
              >
                Espandi
              </Button>
            ) : null}
          </div>
        ),
      },
      {
        accessorKey: 'occorrenze',
        header: () => (
          <span className={styles.headerWithHint}>
            Occorrenze
            <button
              type="button"
              className={styles.headerInfoIcon}
              aria-label="Informazioni su Occorrenze"
            >
              <Info
                size={14}
                aria-hidden
              />
            </button>
          </span>
        ),
        size: 110,
        cell: ({ getValue }) => {
          const v = getValue() as number | null
          return v != null ? (
            String(v)
          ) : (
            <span className={styles.tableMutedCell}>—</span>
          )
        },
      },
      {
        accessorKey: 'risposta',
        header: 'Risposta',
        minSize: 180,
        cell: ({ row }) => (
          <div className={styles.contentCell}>
            <span className={styles.contentCellText}>
              {row.original.risposta}
            </span>
            {row.original.showExpandRisposta ? (
              <Button
                type="button"
                variant="link"
                size="sm"
                className={styles.expandLink}
              >
                Espandi
              </Button>
            ) : null}
          </div>
        ),
      },
      {
        id: 'argNecessari',
        header: 'Argomenti necessari',
        minSize: 160,
        accessorFn: row => row.argNecessari.join(' '),
        cell: ({ row }) => pillsCell(row.original.argNecessari),
      },
      {
        id: 'argImpostati',
        header: 'Argomenti impostati',
        minSize: 140,
        accessorFn: row => row.argImpostati.join(' '),
        cell: ({ row }) => pillsCell(row.original.argImpostati),
      },
      {
        accessorKey: 'tag',
        header: 'Tag',
        size: 140,
        cell: ({ getValue }) => {
          const t = getValue() as string
          return t ? (
            <span className={styles.tableCellText}>{t}</span>
          ) : (
            <span className={styles.tableMutedCell}>—</span>
          )
        },
      },
      {
        id: 'proprieta',
        header: 'Proprietà',
        size: 88,
        enableSorting: false,
        cell: ({ row }) =>
          row.original.hasLink ? (
            <LinkIcon
              size={18}
              className={styles.cellIcon}
              aria-label="Contiene link"
            />
          ) : (
            <span className={styles.tableMutedCell}>—</span>
          ),
      },
      {
        accessorKey: 'creatoIl',
        header: 'Creato il',
        size: 160,
        cell: ({ row }) => (
          <span className={styles.cellWithIcon}>
            <User
              size={14}
              aria-hidden
            />
            {row.original.creatoIl}
          </span>
        ),
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    let rows = [...ALL_CONTENT_ROWS]
    if (search.trim()) {
      const q = search.toLowerCase()
      rows = rows.filter(r => {
        const args = [...r.argNecessari, ...r.argImpostati]
          .join(' ')
          .toLowerCase()
        return (
          r.domanda.toLowerCase().includes(q) ||
          r.risposta.toLowerCase().includes(q) ||
          (r.tag && r.tag.toLowerCase().includes(q)) ||
          r.creatoIl.toLowerCase().includes(q) ||
          args.includes(q)
        )
      })
    }
    for (const f of columnFilters) {
      if (f.id === 'hasLink' && f.value === true) {
        rows = rows.filter(r => r.hasLink)
      }
      if (f.id === 'hasTag' && f.value === true) {
        rows = rows.filter(r => Boolean(r.tag?.trim()))
      }
      if (
        f.id === 'occorrenze' &&
        typeof f.value === 'string' &&
        f.value &&
        f.value !== 'any'
      ) {
        if (f.value === 'none') {
          rows = rows.filter(r => r.occorrenze == null)
        } else if (f.value === 'some') {
          rows = rows.filter(r => r.occorrenze != null)
        }
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
        title="Contenuti"
        description="Cerca, filtra e gestisci domande, risposte e metadati dell’agente."
        className={styles.contentSection}
      />
      <Tabs.Root
        defaultValue="contenuti"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni contenuti"
          className={styles.tabsList}
        >
          <Tabs.Tab value="contenuti">Contenuti</Tabs.Tab>
          <Tabs.Tab value="senza-risposta">Domande senza risposta</Tabs.Tab>
          <Tabs.Tab value="ai">Generati da AI</Tabs.Tab>
          <Tabs.Tab value="benvenuto">Messaggio di benvenuto</Tabs.Tab>
          <Tabs.Tab value="predefinite">Risposte predefinite</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="contenuti"
          className={styles.tabPanel}
        >
          <Table<ContentRow>
            data={pageRows}
            columns={columns}
            enableRowSelection
            enablePagination
            manualPagination
            rowCount={filtered.length}
            pagination={pagination}
            onPaginationChange={setPagination}
            controlsAfterFilters={
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
                Nuovo contenuto
              </Button>
            }
            search={search}
            onSearchChange={setSearch}
            globalFilterPlaceholder="Cerca tra le domande (parole chiave)"
            columnFilters={columnFilters}
            onColumnFiltersChange={setColumnFilters}
            filterDefs={contentFilterDefs}
            paginationVariant="detailed"
            pageSizeOptions={[10, 25, 50, 100]}
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
            tableId="real-example-content-list"
          />
        </Tabs.Panel>

        {(['senza-risposta', 'ai', 'benvenuto', 'predefinite'] as const).map(
          id => (
            <Tabs.Panel
              key={id}
              value={id}
              className={styles.tabPanel}
            >
              <p className={styles.tabPlaceholder}>
                Questa scheda è solo dimostrativa. Torna a Contenuti per vedere
                l’esempio completo con tabella e paginazione.
              </p>
            </Tabs.Panel>
          ),
        )}
      </Tabs.Root>
    </div>
  )
}
