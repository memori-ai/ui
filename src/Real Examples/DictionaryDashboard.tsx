import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { BookOpen, Pencil, Plus, RefreshCw, Trash2 } from 'lucide-react'
import { Button } from '../components/Button'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { Drawer } from '../components/Drawer'
import { FieldGroup } from '../components/Field'
import { Input } from '../components/Input'
import { Tag } from '../components/Tag'
import { Textarea } from '../components/Textarea'
import { useNotify } from './shared/useNotify'
import { Section } from '../components/Section'
import { Table } from '../components/Table'
import { Tabs } from '../components/Tabs'
import { Badge } from '../components/Badge'
import '../components/Input/styles.css'
import styles from './realExamples.module.css'

export type CustomWordRow = {
  id: string
  parola: string
  definizione: string
}

export type UndefinedWordRow = {
  id: string
  parola: string
  /** Contents where the word appears */
  compareIn: string[]
}

const CUSTOM_WORDS: CustomWordRow[] = [
  {
    id: '1',
    parola: 'AIsuru',
    definizione: 'Piattaforma Memori per agenti conversazionali.',
  },
  {
    id: '2',
    parola: 'Memori',
    definizione: 'Agente digitale con memoria strutturata.',
  },
  {
    id: '3',
    parola: 'twin',
    definizione: 'Sinonimo di agente / Memori nel contesto prodotto.',
  },
]

const UNDEFINED_WORDS: UndefinedWordRow[] = [
  {
    id: 'u1',
    parola: 'blendshape',
    compareIn: [
      'What are the different blendshapes or morph targets available?',
    ],
  },
  {
    id: 'u2',
    parola: 'morph',
    compareIn: [
      'What are the different blendshapes or morph targets available?',
      'Come funziona il morph dell’avatar?',
    ],
  },
  { id: 'u3', parola: 'webhook', compareIn: ['Come configuro il webhook?'] },
  { id: 'u4', parola: 'JSONL', compareIn: ['Esporta in JSONL'] },
]

/**
 * Dizionario: parole personalizzate e parole indefinite.
 */
export function DictionaryDashboard() {
  const notify = useNotify()
  const [words, setWords] = useState(CUSTOM_WORDS)
  const [undefinedWords, setUndefinedWords] = useState(UNDEFINED_WORDS)
  const [editing, setEditing] = useState<
    CustomWordRow | { define: UndefinedWordRow } | 'new' | null
  >(null)
  const [draft, setDraft] = useState({ parola: '', definizione: '' })
  const [deleting, setDeleting] = useState<CustomWordRow[] | null>(null)
  const [tab, setTab] = useState('custom')

  const openEditor = (
    target: CustomWordRow | { define: UndefinedWordRow } | 'new',
  ) => {
    setEditing(target)
    if (target === 'new') setDraft({ parola: '', definizione: '' })
    else if ('define' in target)
      setDraft({ parola: target.define.parola, definizione: '' })
    else setDraft({ parola: target.parola, definizione: target.definizione })
  }

  const saveWord = () => {
    if (editing && editing !== 'new' && !('define' in editing)) {
      setWords(prev =>
        prev.map(w => (w.id === editing.id ? { ...w, ...draft } : w)),
      )
    } else {
      setWords(prev => [...prev, { id: String(Date.now()), ...draft }])
      if (editing && editing !== 'new' && 'define' in editing) {
        setUndefinedWords(prev => prev.filter(u => u.id !== editing.define.id))
      }
    }
    setEditing(null)
    notify('Operazione andata a buon fine')
  }

  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  })

  const customColumns = useMemo<ColumnDef<CustomWordRow>[]>(
    () => [
      {
        accessorKey: 'parola',
        header: 'Parola',
        minSize: 140,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>{row.original.parola}</span>
        ),
      },
      {
        accessorKey: 'definizione',
        header: 'Definizione',
        minSize: 240,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>
            {row.original.definizione}
          </span>
        ),
      },
    ],
    [],
  )

  const undefinedColumns = useMemo<ColumnDef<UndefinedWordRow>[]>(
    () => [
      {
        accessorKey: 'parola',
        header: 'Parola',
        minSize: 200,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>{row.original.parola}</span>
        ),
      },
      {
        id: 'compareIn',
        header: 'Compare in',
        minSize: 320,
        enableSorting: false,
        cell: ({ row }) => (
          <div className={styles.pillGroup}>
            {row.original.compareIn.map(c => (
              <Tag
                key={c}
                size="sm"
              >
                {c}
              </Tag>
            ))}
          </div>
        ),
      },
    ],
    [],
  )

  const filteredCustom = useMemo(() => {
    if (!search.trim()) return words
    const q = search.toLowerCase()
    return words.filter(
      r =>
        r.parola.toLowerCase().includes(q) ||
        r.definizione.toLowerCase().includes(q),
    )
  }, [search, words])

  const filteredUndefined = useMemo(() => {
    if (!search.trim()) return undefinedWords
    const q = search.toLowerCase()
    return undefinedWords.filter(r => r.parola.toLowerCase().includes(q))
  }, [search, undefinedWords])

  const customPage = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filteredCustom.slice(start, start + pagination.pageSize)
  }, [filteredCustom, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Dizionario"
        description="Migliora le capacità di comprensione di Layout Storybook: definisci parole personalizzate e risolvi i termini non riconosciuti nei contenuti."
        icon={
          <BookOpen
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
          onClick={() => openEditor('new')}
        >
          Nuova parola
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
          onClick={() => notify('Dizionario aggiornato', 'info')}
        >
          Aggiorna
        </Button>
      </div>

      <Tabs.Root
        value={tab}
        onValueChange={v => setTab(String(v))}
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni dizionario"
          className={styles.tabsList}
        >
          <Tabs.Tab value="custom">
            Parole personalizzate{' '}
            <Badge
              className={styles.tabCount}
              count={words.length}
            />
          </Tabs.Tab>
          <Tabs.Tab value="undefined">
            Parole indefinite{' '}
            <Badge
              className={styles.tabCount}
              count={undefinedWords.length}
            />
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="custom"
          className={styles.tabPanel}
        >
          <Table<CustomWordRow>
            data={customPage}
            columns={customColumns}
            enablePagination
            manualPagination
            rowCount={filteredCustom.length}
            pagination={pagination}
            onPaginationChange={setPagination}
            search={search}
            onSearchChange={setSearch}
            globalFilterPlaceholder="Cerca parola o definizione"
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
                id: 'edit',
                label: 'Modifica',
                icon: (
                  <Pencil
                    size={16}
                    aria-hidden
                  />
                ),
                onClick: row => openEditor(row.original),
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
            tableId="real-example-dictionary-custom"
          />
        </Tabs.Panel>

        <Tabs.Panel
          value="undefined"
          className={styles.tabPanel}
        >
          <Table<UndefinedWordRow>
            data={filteredUndefined}
            columns={undefinedColumns}
            search={search}
            onSearchChange={setSearch}
            globalFilterPlaceholder="Cerca parola indefinita"
            rowActionsVariant="inline"
            rowActions={[
              {
                id: 'define',
                label: 'Definisci',
                icon: (
                  <Plus
                    size={16}
                    aria-hidden
                  />
                ),
                onClick: row => openEditor({ define: row.original }),
              },
            ]}
            tableId="real-example-dictionary-undefined"
          />
        </Tabs.Panel>
      </Tabs.Root>

      <Drawer
        open={editing !== null}
        onOpenChange={o => !o && setEditing(null)}
        anchor="right"
        size="md"
        title={
          editing && editing !== 'new' && !('define' in editing)
            ? `Modifica "${editing.parola}"`
            : 'Nuova parola'
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
              disabled={!draft.parola.trim() || !draft.definizione.trim()}
              onClick={saveWord}
            >
              Salva
            </Button>
          </div>
        }
      >
        <div className={styles.formStack}>
          <FieldGroup
            label="Parola"
            required
          >
            <Input
              fullWidth
              value={draft.parola}
              onChange={e => setDraft({ ...draft, parola: e.target.value })}
            />
          </FieldGroup>
          <FieldGroup
            label="Definizione"
            required
            helperText="Spiega la parola con termini che l'Agente conosce già: verrà usata per comprendere meglio le domande."
          >
            <Textarea
              rows={4}
              value={draft.definizione}
              onChange={e =>
                setDraft({ ...draft, definizione: e.target.value })
              }
            />
          </FieldGroup>
        </div>
      </Drawer>
      <ConfirmDialog
        isOpen={!!deleting}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          const ids = new Set(deleting?.map(d => d.id))
          setWords(prev => prev.filter(w => !ids.has(w.id)))
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
