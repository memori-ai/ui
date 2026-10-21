import React, { useEffect, useMemo, useState } from 'react'
import type {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
} from '@tanstack/react-table'
import {
  Copy,
  FileText,
  Link as LinkIcon,
  Pencil,
  Plus,
  Trash2,
  User,
} from 'lucide-react'
import { InfoHint } from '../components/InfoHint'
import { Button } from '../components/Button'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { Expandable } from '../components/Expandable'
import { Section } from '../components/Section'
import { Table, type FilterDef } from '../components/Table'
import { Tabs } from '../components/Tabs'
import { Tooltip } from '../components/Tooltip'
import '../components/Input/styles.css'
import { ContentEditDrawer } from './contents/ContentEditDrawer'
import {
  DefaultAnswersTab,
  DraftsTab,
  ExpertReferencesTab,
  UnansweredQuestionsTab,
  WelcomeMessageTab,
} from './contents/ContentTabs'
import { Callout } from '../components/Callout'
import { useNotify } from './shared/useNotify'
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
  luogo?: string
  data?: string
  assegnatoA?: string
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
      luogo: 'Milano',
      assegnatoA: 'Cliente',
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
export function ContentListDashboard({
  boardOfExperts = false,
  generativeAI = true,
}: {
  /** Shows "Risposte dagli esperti" (Board of Experts agents) */
  boardOfExperts?: boolean
  /** With GenAI on, unanswered questions are replaced by AI drafts */
  generativeAI?: boolean
}) {
  const notify = useNotify()
  const [rows, setRows] = useState(ALL_CONTENT_ROWS)
  const [editing, setEditing] = useState<ContentRow | 'new' | null>(null)
  const [deleting, setDeleting] = useState<ContentRow[] | 'filtered' | null>(
    null,
  )
  const [undefinedWord, setUndefinedWord] = useState(true)
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
        minSize: 180,
        cell: ({ row }) => (
          <Expandable
            rows={2}
            className={styles.contentCell}
            expandSymbol={() => 'Espandi'}
            collapseSymbol={() => 'Vedi meno'}
          >
            {row.original.domanda}
          </Expandable>
        ),
      },
      {
        accessorKey: 'occorrenze',
        header: () => (
          <span className={styles.headerWithHint}>
            Occorrenze
            <InfoHint
              content="Numero di volte che è stato chiesta questa domanda"
              ariaLabel="Informazioni su Occorrenze"
            />
          </span>
        ),
        size: 100,
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
        minSize: 170,
        cell: ({ row }) => (
          <Expandable
            rows={2}
            className={styles.contentCell}
            expandSymbol={() => 'Espandi'}
            collapseSymbol={() => 'Vedi meno'}
          >
            {row.original.risposta}
          </Expandable>
        ),
      },
      {
        id: 'argNecessari',
        header: 'Argomenti necessari',
        minSize: 150,
        accessorFn: row => row.argNecessari.join(' '),
        cell: ({ row }) => pillsCell(row.original.argNecessari),
      },
      {
        id: 'argImpostati',
        header: 'Argomenti impostati',
        minSize: 130,
        accessorFn: row => row.argImpostati.join(' '),
        cell: ({ row }) => pillsCell(row.original.argImpostati),
      },
      {
        accessorKey: 'tag',
        header: 'Tag',
        size: 120,
        cell: ({ getValue }) => {
          const t = getValue() as string
          return t ? (
            <span
              className={styles.clampCell}
              title={t}
            >
              {t}
            </span>
          ) : (
            <span className={styles.tableMutedCell}>—</span>
          )
        },
      },
      {
        id: 'proprieta',
        header: 'Proprietà',
        size: 80,
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
        accessorKey: 'luogo',
        header: 'Luogo',
        meta: { hiddenByDefault: true },
        cell: ({ getValue }) =>
          (getValue() as string) ?? (
            <span className={styles.tableMutedCell}>—</span>
          ),
      },
      {
        accessorKey: 'data',
        header: 'Data',
        meta: { hiddenByDefault: true },
        cell: ({ getValue }) =>
          (getValue() as string) ?? (
            <span className={styles.tableMutedCell}>—</span>
          ),
      },
      {
        accessorKey: 'assegnatoA',
        header: 'Assegnato a',
        meta: { hiddenByDefault: true },
        cell: ({ getValue }) =>
          (getValue() as string) ?? (
            <span className={styles.tableMutedCell}>Pubblico</span>
          ),
      },
      {
        accessorKey: 'creatoIl',
        header: 'Creato il',
        size: 170,
        minSize: 170,
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
    let list = [...rows]
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(r => {
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
        list = list.filter(r => r.hasLink)
      }
      if (f.id === 'hasTag' && f.value === true) {
        list = list.filter(r => Boolean(r.tag?.trim()))
      }
      if (
        f.id === 'occorrenze' &&
        typeof f.value === 'string' &&
        f.value &&
        f.value !== 'any'
      ) {
        if (f.value === 'none') {
          list = list.filter(r => r.occorrenze == null)
        } else if (f.value === 'some') {
          list = list.filter(r => r.occorrenze != null)
        }
      }
    }
    return list
  }, [rows, search, columnFilters])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Contenuti"
        description="Cerca, filtra e gestisci domande, risposte e metadati dell’agente."
        icon={
          <FileText
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
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
          <Tabs.Tab
            value="senza-risposta"
            disabled={generativeAI}
          >
            <Tooltip
              content="Le domande senza risposta sono disponibili quando l'opzione Generative AI è disabilitata"
              disabled={!generativeAI}
            >
              <span>Domande senza risposta</span>
            </Tooltip>
          </Tabs.Tab>
          <Tabs.Tab
            value="ai"
            disabled={!generativeAI}
          >
            <Tooltip
              content="La scheda Generate da AI è disponibile solo quando l'opzione Generative AI è abilitata"
              disabled={generativeAI}
            >
              <span>Generate da AI</span>
            </Tooltip>
          </Tabs.Tab>
          <Tabs.Tab value="benvenuto">Messaggio di benvenuto</Tabs.Tab>
          <Tabs.Tab value="predefinite">Risposte predefinite</Tabs.Tab>
          {boardOfExperts ? (
            <Tabs.Tab value="esperti">Risposte dagli esperti</Tabs.Tab>
          ) : null}
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="contenuti"
          className={styles.tabPanel}
        >
          {undefinedWord ? (
            <Callout
              severity="warning"
              action={
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setUndefinedWord(false)
                    notify('Apertura Dizionario › Definisci', 'info')
                  }}
                >
                  Insegnamela
                </Button>
              }
            >
              Non conosco la parola &quot;blendshape&quot;
            </Callout>
          ) : null}
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
              <div className={styles.toolbarRow}>
                {search.trim() || columnFilters.length > 0 ? (
                  <Button
                    type="button"
                    variant="outline"
                    danger
                    size="md"
                    icon={
                      <Trash2
                        size={16}
                        aria-hidden
                      />
                    }
                    onClick={() => setDeleting('filtered')}
                  >
                    Elimina tutti ({filtered.length})
                  </Button>
                ) : null}
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
                  onClick={() => setEditing('new')}
                >
                  Nuovo contenuto
                </Button>
              </div>
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
                onClick: row => setEditing(row.original),
              },
              {
                id: 'duplicate',
                label: 'Duplica',
                icon: (
                  <Copy
                    size={16}
                    aria-hidden
                  />
                ),
                onClick: row => {
                  setRows(prev => [
                    {
                      ...row.original,
                      id: `${row.original.id}-copy-${Date.now()}`,
                    },
                    ...prev,
                  ])
                  notify('Contenuto duplicato')
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
                onClick: row => setDeleting([row.original]),
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
                onClick: sel => setDeleting(sel.map(r => r.original)),
              },
            ]}
            tableId="real-example-content-list"
          />
        </Tabs.Panel>

        <Tabs.Panel
          value="senza-risposta"
          className={styles.tabPanel}
        >
          <UnansweredQuestionsTab />
        </Tabs.Panel>
        <Tabs.Panel
          value="ai"
          className={styles.tabPanel}
        >
          <DraftsTab />
        </Tabs.Panel>
        <Tabs.Panel
          value="benvenuto"
          className={styles.tabPanel}
        >
          <WelcomeMessageTab />
        </Tabs.Panel>
        <Tabs.Panel
          value="predefinite"
          className={styles.tabPanel}
        >
          <DefaultAnswersTab />
        </Tabs.Panel>
        {boardOfExperts ? (
          <Tabs.Panel
            value="esperti"
            className={styles.tabPanel}
          >
            <ExpertReferencesTab />
          </Tabs.Panel>
        ) : null}
      </Tabs.Root>

      {editing ? (
        <ContentEditDrawer
          open
          title={
            editing === 'new'
              ? 'Aggiungi un nuovo contenuto'
              : 'Modifica del contenuto'
          }
          initial={
            editing === 'new'
              ? undefined
              : {
                  question: editing.domanda,
                  answer: editing.risposta,
                  contextVarsToMatch: editing.argNecessari,
                  contextVarsToSet: editing.argImpostati,
                  tags: editing.tag ? [editing.tag] : [],
                }
          }
          onClose={() => setEditing(null)}
          onSave={draft => {
            if (editing === 'new') {
              setRows(prev => [
                {
                  id: `new-${Date.now()}`,
                  domanda: draft.question,
                  risposta: draft.answer,
                  occorrenze: null,
                  argNecessari: draft.contextVarsToMatch,
                  argImpostati: draft.contextVarsToSet,
                  tag: draft.tags[0] ?? '',
                  hasLink: false,
                  creatoIl: 'adesso',
                },
                ...prev,
              ])
            }
            setEditing(null)
            notify('Operazione andata a buon fine')
          }}
          onDelete={
            editing === 'new'
              ? undefined
              : () => {
                  setDeleting([editing])
                  setEditing(null)
                }
          }
        />
      ) : null}
      <ConfirmDialog
        isOpen={deleting !== null}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          const ids = new Set(
            (deleting === 'filtered' ? filtered : (deleting ?? [])).map(
              r => r.id,
            ),
          )
          setRows(prev => prev.filter(r => !ids.has(r.id)))
          setDeleting(null)
          notify('Elemento/i eliminato/i con successo')
        }}
        title="Eliminazione domanda"
        message={
          deleting === 'filtered'
            ? `Sei sicuro di voler eliminare tutti i ${filtered.length} risultati filtrati?`
            : deleting && deleting.length > 1
              ? `Confermi di voler eliminare le ${deleting.length} domande selezionate?`
              : 'Confermi di voler eliminare la domanda?'
        }
        confirmText="Conferma"
        cancelText="Annulla"
      />
    </div>
  )
}
