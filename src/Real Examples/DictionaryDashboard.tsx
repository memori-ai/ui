import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { BookOpen, Pencil, Plus, RefreshCw, Trash2 } from 'lucide-react'
import { Button } from '../components/Button'
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
  { id: 'u1', parola: 'blendshape' },
  { id: 'u2', parola: 'morph' },
  { id: 'u3', parola: 'webhook' },
  { id: 'u4', parola: 'JSONL' },
]

/**
 * Dizionario: parole personalizzate e parole indefinite.
 */
export function DictionaryDashboard() {
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
    ],
    [],
  )

  const filteredCustom = useMemo(() => {
    if (!search.trim()) return CUSTOM_WORDS
    const q = search.toLowerCase()
    return CUSTOM_WORDS.filter(
      r =>
        r.parola.toLowerCase().includes(q) ||
        r.definizione.toLowerCase().includes(q),
    )
  }, [search])

  const filteredUndefined = useMemo(() => {
    if (!search.trim()) return UNDEFINED_WORDS
    const q = search.toLowerCase()
    return UNDEFINED_WORDS.filter(r => r.parola.toLowerCase().includes(q))
  }, [search])

  const customPage = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filteredCustom.slice(start, start + pagination.pageSize)
  }, [filteredCustom, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Dizionario"
        description="Definisci parole personalizzate e risolvi termini non riconosciuti nei contenuti."
        icon={
          <BookOpen
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <p className={styles.sectionIntro}>
        Gestisci il vocabolario dell’agente Layout Storybook.
      </p>

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
        >
          Aggiorna
        </Button>
      </div>

      <Tabs.Root
        defaultValue="custom"
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
              count={CUSTOM_WORDS.length}
            />
          </Tabs.Tab>
          <Tabs.Tab value="undefined">
            Parole indefinite{' '}
            <Badge
              className={styles.tabCount}
              count={UNDEFINED_WORDS.length}
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
                onClick: () => {
                  /* demo */
                },
              },
            ]}
            tableId="real-example-dictionary-undefined"
          />
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
