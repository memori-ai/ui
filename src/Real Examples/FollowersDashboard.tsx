import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Download, Mail, Search, Tags, UserRound, Users } from 'lucide-react'
import { Button } from '../components/Button'
import { Progress } from '../components/Progress'
import { Section } from '../components/Section'
import { Table } from '../components/Table'
import { Tabs } from '../components/Tabs'
import { Input } from '../components/Input'
import '../components/Input/styles.css'
import styles from './realExamples.module.css'

export type FollowerRow = {
  id: string
  userName: string
  email: string
}

export type TopicRow = {
  id: string
  nome: string
  peso: number
}

const FOLLOWERS: FollowerRow[] = [
  { id: '1', userName: 'andrea.patini', email: 'andrea.patini@memori.ai' },
  { id: '2', userName: 'demo.user', email: 'demo@example.com' },
  { id: '3', userName: 'team', email: 'team@memori.ai' },
  { id: '4', userName: 'anonimo', email: '—' },
]

const TOPICS: TopicRow[] = [
  { id: 't1', nome: 'Prodotti', peso: 0.82 },
  { id: 't2', nome: 'Supporto', peso: 0.64 },
  { id: 't3', nome: 'Prezzi', peso: 0.41 },
]

/**
 * Followers / Deep Thought: utenti, topic e analisi.
 */
export function FollowersDashboard() {
  const [search, setSearch] = useState('')
  const [querySearch, setQuerySearch] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  })

  const followerColumns = useMemo<ColumnDef<FollowerRow>[]>(
    () => [
      {
        accessorKey: 'userName',
        header: 'Username',
        minSize: 140,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        minSize: 200,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>{row.original.email}</span>
        ),
      },
    ],
    [],
  )

  const topicColumns = useMemo<ColumnDef<TopicRow>[]>(
    () => [
      {
        accessorKey: 'nome',
        header: 'Nome',
        minSize: 180,
      },
      {
        accessorKey: 'peso',
        header: 'Peso',
        minSize: 180,
        cell: ({ row }) => (
          <div className={styles.progressCell}>
            <Progress
              value={row.original.peso * 100}
              aria-label={`Peso ${Math.round(row.original.peso * 100)}%`}
            />
          </div>
        ),
      },
    ],
    [],
  )

  const filteredFollowers = useMemo(() => {
    if (!search.trim()) return FOLLOWERS
    const q = search.toLowerCase()
    return FOLLOWERS.filter(
      r =>
        r.userName.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q),
    )
  }, [search])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filteredFollowers.slice(start, start + pagination.pageSize)
  }, [filteredFollowers, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Followers"
        description="Analizza utenti, topic e query con Deep Thought."
        icon={
          <UserRound
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <Tabs.Root
        defaultValue="users"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni followers"
          className={styles.tabsList}
        >
          <Tabs.Tab value="users">Utenti</Tabs.Tab>
          <Tabs.Tab value="topics">Topic</Tabs.Tab>
          <Tabs.Tab value="analysis">Analisi</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="users"
          className={styles.tabPanel}
        >
          <div className={styles.toolbarRow}>
            <Button
              type="button"
              variant="primary"
              size="md"
              icon={
                <Mail
                  size={18}
                  aria-hidden
                />
              }
            >
              Invia email
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="md"
              icon={
                <Download
                  size={18}
                  aria-hidden
                />
              }
            >
              Esporta
            </Button>
          </div>
          <Table<FollowerRow>
            data={pageRows}
            columns={followerColumns}
            enableRowSelection
            enablePagination
            manualPagination
            rowCount={filteredFollowers.length}
            pagination={pagination}
            onPaginationChange={setPagination}
            search={search}
            onSearchChange={setSearch}
            globalFilterPlaceholder="Cerca utente o email"
            paginationVariant="simplified"
            pageSizeOptions={[10, 25, 50]}
            initialPageSize={25}
            rowActionsVariant="inline"
            rowActions={[
              {
                id: 'topics',
                label: 'Mostra topic',
                icon: (
                  <Tags
                    size={16}
                    aria-hidden
                  />
                ),
                onClick: () => {
                  /* demo */
                },
              },
            ]}
            tableId="real-example-followers-users"
          />
        </Tabs.Panel>

        <Tabs.Panel
          value="topics"
          className={styles.tabPanel}
        >
          <Table<TopicRow>
            data={TOPICS}
            columns={topicColumns}
            enableRowSelection
            rowActionsVariant="inline"
            rowActions={[
              {
                id: 'users',
                label: 'Mostra utenti',
                icon: (
                  <Users
                    size={16}
                    aria-hidden
                  />
                ),
                onClick: () => {
                  /* demo */
                },
              },
              {
                id: 'export',
                label: 'Esporta',
                icon: (
                  <Download
                    size={16}
                    aria-hidden
                  />
                ),
                onClick: () => {
                  /* demo */
                },
              },
            ]}
            tableId="real-example-followers-topics"
          />
        </Tabs.Panel>

        <Tabs.Panel
          value="analysis"
          className={styles.tabPanel}
        >
          <form
            className={styles.toolbarRow}
            onSubmit={e => {
              e.preventDefault()
            }}
          >
            <Input
              fullWidth
              value={querySearch}
              onChange={e => setQuerySearch(e.target.value)}
              placeholder="Cerca tra le conversazioni dei follower…"
              aria-label="Query analisi"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={
                <Search
                  size={18}
                  aria-hidden
                />
              }
            >
              Analizza
            </Button>
          </form>
          <p className={styles.tabPlaceholder}>
            Nessuna analisi in corso. Avvia una ricerca per vedere i risultati
            (demo).
          </p>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
