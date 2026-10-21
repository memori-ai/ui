import React, { useMemo, useState } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import {
  Check,
  GitMerge,
  MessageSquareText,
  Pencil,
  Plus,
  RefreshCw,
  Trash2,
} from 'lucide-react'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { ConfirmDialog } from '../../components/ConfirmDialog'
import { Drawer } from '../../components/Drawer'
import { Progress } from '../../components/Progress'
import { SelectBox } from '../../components/SelectBox'
import { Table } from '../../components/Table'
import { Tag } from '../../components/Tag'
import { Textarea } from '../../components/Textarea'
import { Callout } from '../../components/Callout'
import { useNotify } from '../shared/useNotify'
import { ContentEditDrawer } from './ContentEditDrawer'
import styles from '../realExamples.module.css'

const pills = (values: string[]) =>
  values.length === 0 ? (
    <span className={styles.tableMutedCell}>—</span>
  ) : (
    <div className={styles.pillGroup}>
      {values.map(v => (
        <Tag
          key={v}
          size="sm"
        >
          {v}
        </Tag>
      ))}
    </div>
  )

const deleteIcon = (
  <Trash2
    size={16}
    aria-hidden
  />
)
const editIcon = (
  <Pencil
    size={16}
    aria-hidden
  />
)

/* ------------------------------------------------------------------ */
/* Domande senza risposta                                              */
/* ------------------------------------------------------------------ */

type Candidate = { text: string; kind: 'D' | 'A' | 'R'; confidence: number }
type Unanswered = {
  id: string
  question: string
  occurrences: number
  lastAsked: string
  context: string[]
  receiver?: string
  candidates: Candidate[]
}

const UNANSWERED: Unanswered[] = [
  {
    id: 'u1',
    question: 'Avete il parcheggio per disabili?',
    occurrences: 7,
    lastAsked: '20/10/26, 18:02',
    context: ['ROUTE: CONTATTI'],
    candidates: [
      { text: 'Dove posso parcheggiare?', kind: 'D', confidence: 62 },
      { text: 'Accessibilità della sede', kind: 'A', confidence: 48 },
    ],
  },
  {
    id: 'u2',
    question: 'quanto costa la spedizione in Svizzera',
    occurrences: 3,
    lastAsked: '19/10/26, 11:40',
    context: [],
    receiver: 'Cliente',
    candidates: [
      { text: 'Costi di spedizione Italia', kind: 'D', confidence: 71 },
    ],
  },
  {
    id: 'u3',
    question: 'posso pagare con satispay?',
    occurrences: 1,
    lastAsked: '18/10/26, 09:12',
    context: [],
    candidates: [],
  },
]

export function UnansweredQuestionsTab() {
  const notify = useNotify()
  const [rows, setRows] = useState(UNANSWERED)
  const [search, setSearch] = useState('')
  const [mode, setMode] = useState('keywords')
  const [creating, setCreating] = useState<Unanswered | null>(null)
  const [deleting, setDeleting] = useState<Unanswered[] | null>(null)

  const filtered = rows.filter(r =>
    r.question.toLowerCase().includes(search.toLowerCase()),
  )

  const columns = useMemo<ColumnDef<Unanswered>[]>(
    () => [
      {
        accessorKey: 'question',
        header: 'Domanda senza risposta',
        minSize: 200,
      },
      { accessorKey: 'occurrences', header: 'Occorrenze', size: 110 },
      {
        accessorKey: 'lastAsked',
        header: "Posta l'ultima volta il",
        size: 170,
      },
      {
        id: 'context',
        header: 'Contesto in cui è stata posta',
        cell: ({ row }) => pills(row.original.context),
      },
      {
        accessorKey: 'receiver',
        header: 'Assegnato a',
        cell: ({ getValue }) =>
          (getValue() as string) ?? (
            <span className={styles.tableMutedCell}>Pubblico</span>
          ),
      },
      {
        id: 'candidates',
        header: 'Domande/contenuti simili e confidenza',
        minSize: 260,
        enableSorting: false,
        cell: ({ row }) =>
          row.original.candidates.length === 0 ? (
            <span className={styles.tableMutedCell}>—</span>
          ) : (
            <ul className={styles.candidateList}>
              {row.original.candidates.map(c => (
                <li key={c.text}>
                  <Tag size="sm">{c.kind}</Tag>
                  <span className={styles.tableCellText}>{c.text}</span>
                  <span className={styles.progressCell}>
                    <Progress
                      value={c.confidence}
                      size="sm"
                      showValue
                    />
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    shape="circle"
                    aria-label="Aggiungi come variante a questa domanda"
                    title="Aggiungi come variante a questa domanda"
                    icon={
                      <GitMerge
                        size={14}
                        aria-hidden
                      />
                    }
                    onClick={() => {
                      setRows(prev =>
                        prev.filter(r => r.id !== row.original.id),
                      )
                      notify('Variante aggiunta')
                    }}
                  />
                </li>
              ))}
            </ul>
          ),
      },
    ],
    [notify],
  )

  return (
    <>
      <Table<Unanswered>
        data={filtered}
        columns={columns}
        enableRowSelection
        enablePagination
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder={
          mode === 'keywords'
            ? 'Ricerca per parole chiave'
            : 'Ricerca in linguaggio naturale'
        }
        controlsAfterFilters={
          <div className={styles.toolbarRow}>
            <div className={styles.conversationsSelect}>
              <SelectBox
                options={[
                  { value: 'keywords', label: 'Parole chiave' },
                  { value: 'nlp', label: 'Linguaggio naturale' },
                ]}
                value={mode}
                onChange={v => setMode(v ?? 'keywords')}
              />
            </div>
            <Button
              type="button"
              variant="outline"
              size="md"
              icon={
                <RefreshCw
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => notify('Contenuti aggiornati', 'info')}
            >
              Aggiorna i contenuti
            </Button>
          </div>
        }
        rowActionsVariant="menu"
        rowActions={[
          {
            id: 'new',
            label: 'Usa come nuova domanda',
            icon: (
              <Plus
                size={16}
                aria-hidden
              />
            ),
            onClick: row => setCreating(row.original),
          },
          {
            id: 'chats',
            label: 'Cerca nelle conversazioni',
            icon: (
              <MessageSquareText
                size={16}
                aria-hidden
              />
            ),
            onClick: () => notify('Apertura conversazioni correlate', 'info'),
          },
          {
            id: 'delete',
            label: 'Elimina',
            variant: 'danger',
            icon: deleteIcon,
            onClick: row => setDeleting([row.original]),
          },
        ]}
        bulkActions={[
          {
            label: 'Elimina',
            variant: 'danger',
            icon: deleteIcon,
            onClick: sel => setDeleting(sel.map(r => r.original)),
          },
        ]}
        tableId="real-example-unanswered"
      />
      {creating ? (
        <ContentEditDrawer
          open
          title="Aggiungi un nuovo contenuto"
          initial={{ question: creating.question }}
          onClose={() => setCreating(null)}
          onSave={() => {
            setRows(prev => prev.filter(r => r.id !== creating.id))
            setCreating(null)
            notify('Contenuto creato')
          }}
        />
      ) : null}
      <ConfirmDialog
        isOpen={!!deleting}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          const ids = new Set(deleting?.map(d => d.id))
          setRows(prev => prev.filter(r => !ids.has(r.id)))
          setDeleting(null)
          notify('Elemento/i eliminato/i con successo')
        }}
        title={
          deleting && deleting.length > 1
            ? 'Eliminazione domande selezionate'
            : 'Eliminazione domanda senza risposta'
        }
        message={
          deleting && deleting.length > 1
            ? `Confermi di voler eliminare le ${deleting.length} domande selezionate?`
            : 'Confermi di voler eliminare questa domanda senza risposta?'
        }
        confirmText="Conferma"
        cancelText="Annulla"
      />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Generate da AI (drafts)                                             */
/* ------------------------------------------------------------------ */

type Draft = {
  id: string
  question: string
  answer: string
  contextVarsToMatch: string[]
  receiver?: string
  date: string
}

const DRAFTS: Draft[] = [
  {
    id: 'd1',
    question: 'Quali sono gli orari di apertura nel weekend?',
    answer: 'Il sabato siamo aperti dalle 9 alle 13, la domenica siamo chiusi.',
    contextVarsToMatch: [],
    date: '20/10/26, 17:12',
  },
  {
    id: 'd2',
    question: 'Fate consegne a domicilio a Monza?',
    answer: 'Sì, consegniamo in tutta la provincia di Monza e Brianza.',
    contextVarsToMatch: ['ROUTE: SPEDIZIONI'],
    date: '19/10/26, 10:05',
  },
  {
    id: 'd3',
    question: 'Come posso cambiare la password?',
    answer: 'Vai su Account › Sicurezza e premi "Cambia password".',
    contextVarsToMatch: [],
    receiver: 'Cliente',
    date: '18/10/26, 08:44',
  },
]

export function DraftsTab() {
  const notify = useNotify()
  const [rows, setRows] = useState(DRAFTS)
  const [search, setSearch] = useState('')
  const [editing, setEditing] = useState<Draft | null>(null)
  const [deleting, setDeleting] = useState<Draft[] | 'all' | null>(null)

  const columns = useMemo<ColumnDef<Draft>[]>(
    () => [
      { accessorKey: 'question', header: 'Domanda/Titolo', minSize: 200 },
      { accessorKey: 'answer', header: 'Risposta', minSize: 220 },
      {
        id: 'toMatch',
        header: 'Argomenti necessari',
        cell: ({ row }) => pills(row.original.contextVarsToMatch),
      },
      {
        accessorKey: 'receiver',
        header: 'Assegnato a',
        cell: ({ getValue }) =>
          (getValue() as string) ?? (
            <span className={styles.tableMutedCell}>Pubblico</span>
          ),
      },
      { accessorKey: 'date', header: 'Data', size: 150 },
    ],
    [],
  )

  const filtered = rows.filter(r =>
    `${r.question} ${r.answer}`.toLowerCase().includes(search.toLowerCase()),
  )
  const remove = (ids: string[]) =>
    setRows(prev => prev.filter(r => !ids.includes(r.id)))

  return (
    <>
      <Card
        variant="outlined"
        padding="md"
      >
        <div className={styles.quotaRow}>
          <div>
            <p className={styles.uploadLabel}>Risposte generate da IA</p>
            <p className={styles.fieldHint}>
              Hai a disposizione ancora 1.240 di 2.000 messaggi generati da IA
              per questo mese
            </p>
          </div>
          <div className={styles.quotaBar}>
            <Progress
              value={38}
              showValue
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
          >
            Upgrade
          </Button>
        </div>
      </Card>
      <Table<Draft>
        data={filtered}
        columns={columns}
        enableRowSelection
        enablePagination
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca tra le risposte generate"
        controlsAfterFilters={
          <Button
            type="button"
            variant="outline"
            danger
            size="md"
            disabled={rows.length === 0}
            icon={deleteIcon}
            onClick={() => setDeleting('all')}
          >
            Elimina tutti
          </Button>
        }
        rowActionsVariant="menu"
        rowActions={[
          {
            id: 'confirm',
            label: 'Conferma come contenuto',
            icon: (
              <Check
                size={16}
                aria-hidden
              />
            ),
            onClick: row => {
              remove([row.original.id])
              notify('Contenuto confermato')
            },
          },
          {
            id: 'variant',
            label: 'Aggiungi come variante',
            icon: (
              <GitMerge
                size={16}
                aria-hidden
              />
            ),
            onClick: () =>
              notify('Seleziona la domanda di destinazione', 'info'),
          },
          {
            id: 'edit',
            label: 'Modifica',
            icon: editIcon,
            onClick: row => setEditing(row.original),
          },
          {
            id: 'chats',
            label: 'Cerca nelle conversazioni',
            icon: (
              <MessageSquareText
                size={16}
                aria-hidden
              />
            ),
            onClick: () => notify('Apertura conversazioni correlate', 'info'),
          },
          {
            id: 'delete',
            label: 'Elimina',
            variant: 'danger',
            icon: deleteIcon,
            onClick: row => setDeleting([row.original]),
          },
        ]}
        bulkActions={[
          {
            label: 'Elimina',
            variant: 'danger',
            icon: deleteIcon,
            onClick: sel => setDeleting(sel.map(r => r.original)),
          },
        ]}
        tableId="real-example-drafts"
      />
      {editing ? (
        <ContentEditDrawer
          open
          title="Modifica del contenuto"
          initial={{
            question: editing.question,
            answer: editing.answer,
            contextVarsToMatch: editing.contextVarsToMatch,
          }}
          onClose={() => setEditing(null)}
          onSave={() => {
            remove([editing.id])
            setEditing(null)
            notify('Contenuto confermato')
          }}
        />
      ) : null}
      <ConfirmDialog
        isOpen={deleting !== null}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          remove(
            deleting === 'all'
              ? rows.map(r => r.id)
              : (deleting ?? []).map(d => d.id),
          )
          setDeleting(null)
          notify('Elemento/i eliminato/i con successo')
        }}
        title={
          deleting === 'all'
            ? 'Elimina tutte le domande'
            : 'Eliminazione domanda'
        }
        message={
          deleting === 'all'
            ? `Sei sicuro di voler eliminare tutte le ${rows.length} domande?`
            : 'Confermi di voler eliminare la domanda?'
        }
        confirmText="Conferma"
        cancelText="Annulla"
      />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Messaggio di benvenuto                                              */
/* ------------------------------------------------------------------ */

const DEFAULT_WELCOME =
  'Ciao, sono {{name}}! Posso rispondere alle tue domande su prodotti, ordini e assistenza. Come posso aiutarti?'

export function WelcomeMessageTab() {
  const notify = useNotify()
  const [value, setValue] = useState(DEFAULT_WELCOME)
  return (
    <Card
      variant="outlined"
      padding="lg"
    >
      <div className={styles.formStack}>
        <p className={styles.fieldHint}>
          Il messaggio di benvenuto è il modo in cui il tuo Agente si presenterà
          agli utenti che lo interrogheranno. Un messaggio chiaro aiuta
          l&apos;utente a capire cosa può chiedere.
        </p>
        <Textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          rows={5}
          aria-label="Messaggio di benvenuto"
        />
        <div className={styles.toolbarRow}>
          <Button
            type="button"
            variant="primary"
            onClick={() => notify('Operazione andata a buon fine')}
          >
            Salva
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => setValue(DEFAULT_WELCOME)}
          >
            Reset
          </Button>
        </div>
      </div>
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/* Risposte predefinite                                                */
/* ------------------------------------------------------------------ */

type DefaultAnswer = {
  id: string
  kind: 'Domanda' | 'Articolo' | 'Storia'
  answer: string
  contextVarsToMatch: string[]
  location?: string
  date?: string
}

const DEFAULT_ANSWERS: DefaultAnswer[] = [
  {
    id: 'da1',
    kind: 'Domanda',
    answer:
      'Per i resi consulta la pagina dedicata o scrivi a resi@example.com.',
    contextVarsToMatch: ['ROUTE: RESI'],
  },
  {
    id: 'da2',
    kind: 'Domanda',
    answer: 'Il negozio di Milano è aperto dalle 10 alle 19.',
    contextVarsToMatch: [],
    location: 'Milano',
  },
  {
    id: 'da3',
    kind: 'Articolo',
    answer: 'Durante le festività gli orari possono variare.',
    contextVarsToMatch: [],
    date: '24/12 – 06/01',
  },
]

export function DefaultAnswersTab() {
  const notify = useNotify()
  const [rows, setRows] = useState(DEFAULT_ANSWERS)
  const [editing, setEditing] = useState<DefaultAnswer | 'new' | null>(null)
  const [deleting, setDeleting] = useState<DefaultAnswer[] | null>(null)

  const columns = useMemo<ColumnDef<DefaultAnswer>[]>(
    () => [
      {
        accessorKey: 'kind',
        header: 'Tipo',
        size: 110,
        cell: ({ getValue }) => <Tag size="sm">{getValue() as string}</Tag>,
      },
      { accessorKey: 'answer', header: 'Risposta', minSize: 260 },
      {
        id: 'toMatch',
        header: 'Argomenti necessari',
        cell: ({ row }) => pills(row.original.contextVarsToMatch),
      },
      {
        accessorKey: 'location',
        header: 'Luogo',
        cell: ({ getValue }) =>
          (getValue() as string) ?? (
            <span className={styles.tableMutedCell}>—</span>
          ),
      },
      {
        accessorKey: 'date',
        header: 'Data',
        cell: ({ getValue }) =>
          (getValue() as string) ?? (
            <span className={styles.tableMutedCell}>—</span>
          ),
      },
    ],
    [],
  )

  return (
    <>
      <Table<DefaultAnswer>
        data={rows}
        columns={columns}
        enableRowSelection
        enablePagination
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
            onClick={() => setEditing('new')}
          >
            Nuova risposta predefinita
          </Button>
        }
        rowActionsVariant="inline"
        rowActions={[
          {
            id: 'edit',
            label: 'Modifica',
            icon: editIcon,
            onClick: row => setEditing(row.original),
          },
          {
            id: 'delete',
            label: 'Elimina',
            variant: 'danger',
            icon: deleteIcon,
            onClick: row => setDeleting([row.original]),
          },
        ]}
        bulkActions={[
          {
            label: 'Elimina',
            variant: 'danger',
            icon: deleteIcon,
            onClick: sel => setDeleting(sel.map(r => r.original)),
          },
        ]}
        tableId="real-example-default-answers"
      />
      {editing ? (
        <ContentEditDrawer
          open
          variant="defaultAnswer"
          title={
            editing === 'new'
              ? 'Nuova risposta predefinita'
              : 'Modifica risposta predefinita'
          }
          initial={
            editing === 'new'
              ? undefined
              : {
                  answer: editing.answer,
                  contextVarsToMatch: editing.contextVarsToMatch,
                }
          }
          onClose={() => setEditing(null)}
          onSave={() => {
            setEditing(null)
            notify('Operazione andata a buon fine')
          }}
        />
      ) : null}
      <ConfirmDialog
        isOpen={!!deleting}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          const ids = new Set(deleting?.map(d => d.id))
          setRows(prev => prev.filter(r => !ids.has(r.id)))
          setDeleting(null)
          notify('Elemento/i eliminato/i con successo')
        }}
        title="Elimina risposta predefinita"
        message={
          deleting && deleting.length > 1
            ? `Confermi di voler eliminare le ${deleting.length} risposte predefinite?`
            : 'Confermi di voler eliminare la risposta predefinita?'
        }
        confirmText="Conferma"
        cancelText="Annulla"
      />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Risposte dagli esperti (Board of Experts only)                      */
/* ------------------------------------------------------------------ */

type ExpertReference = {
  id: string
  question: string
  expert: string
  occurrences: number
  createdAt: string
}

const EXPERT_REFS: ExpertReference[] = [
  {
    id: 'e1',
    question: 'Quali vini abbinare al pesce?',
    expert: 'Sommelier',
    occurrences: 14,
    createdAt: '10/10/26, 12:00',
  },
  {
    id: 'e2',
    question: 'Ricetta del risotto alla milanese',
    expert: 'Chef Vegano',
    occurrences: 5,
    createdAt: '02/10/26, 09:30',
  },
]

export function ExpertReferencesTab() {
  const notify = useNotify()
  const [rows, setRows] = useState(EXPERT_REFS)
  const [editing, setEditing] = useState<ExpertReference | 'new' | null>(null)
  const columns = useMemo<ColumnDef<ExpertReference>[]>(
    () => [
      { accessorKey: 'question', header: 'Domanda/Titolo', minSize: 220 },
      {
        accessorKey: 'expert',
        header: 'Esperto',
        cell: ({ getValue }) => (
          <Tag color="primary">{getValue() as string}</Tag>
        ),
      },
      { accessorKey: 'occurrences', header: 'Occorrenze', size: 110 },
      { accessorKey: 'createdAt', header: 'Creato il', size: 150 },
    ],
    [],
  )
  return (
    <>
      <Table<ExpertReference>
        data={rows}
        columns={columns}
        enableRowSelection
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
            onClick={() => setEditing('new')}
          >
            Nuova risposta dagli esperti
          </Button>
        }
        rowActionsVariant="inline"
        rowActions={[
          {
            id: 'edit',
            label: 'Modifica',
            icon: editIcon,
            onClick: row => setEditing(row.original),
          },
          {
            id: 'delete',
            label: 'Elimina',
            variant: 'danger',
            icon: deleteIcon,
            onClick: row => {
              setRows(prev => prev.filter(r => r.id !== row.original.id))
              notify('Elemento/i eliminato/i con successo')
            },
          },
        ]}
        tableId="real-example-expert-references"
      />
      <Drawer
        open={editing !== null}
        onOpenChange={o => !o && setEditing(null)}
        anchor="right"
        size="md"
        title={
          editing === 'new'
            ? 'Nuova risposta dagli esperti'
            : 'Modifica risposta dagli esperti'
        }
        footer={
          <div className={styles.drawerFooter}>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setEditing(null)}
            >
              Annulla
            </Button>
            <Button
              type="button"
              variant="primary"
              onClick={() => {
                setEditing(null)
                notify('Operazione andata a buon fine')
              }}
            >
              Salva
            </Button>
          </div>
        }
      >
        <div className={styles.formStack}>
          <Callout severity="info">
            Quando un utente pone questa domanda, il Gruppo la inoltrerà
            all&apos;esperto selezionato.
          </Callout>
          <Textarea
            rows={3}
            aria-label="Domanda"
            placeholder="Domanda"
            defaultValue={editing && editing !== 'new' ? editing.question : ''}
          />
          <SelectBox
            label="Esperto"
            options={[
              { value: 'Sommelier', label: 'Sommelier' },
              { value: 'Chef Vegano', label: 'Chef Vegano' },
            ]}
            defaultValue={editing && editing !== 'new' ? editing.expert : null}
          />
        </div>
      </Drawer>
    </>
  )
}
