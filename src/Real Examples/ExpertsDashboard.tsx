import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Info, Pencil, Plus, Search, Trash2, UsersRound } from 'lucide-react'
import { NavList } from '../components/NavList'
import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { Drawer } from '../components/Drawer'
import { FieldGroup } from '../components/Field'
import { Input } from '../components/Input'
import { Section } from '../components/Section'
import { Switch } from '../components/Switch'
import { Table } from '../components/Table'
import { Textarea } from '../components/Textarea'
import { Tooltip } from '../components/Tooltip'
import '../components/Input/styles.css'
import { useNotify } from './shared/useNotify'
import styles from './realExamples.module.css'

const AVAILABLE_AGENTS = [
  'Supporto Clienti',
  'Sales Copilot',
  'Onboarding HR',
  'Assistente Legale',
  'Bot Interno IT',
]

export type ExpertRow = {
  id: string
  nome: string
  descrizione: string
  isDefault: boolean
  initials: string
}

const ALL_EXPERTS: ExpertRow[] = [
  {
    id: '1',
    nome: 'Esperto Vendite',
    descrizione:
      'Risponde a domande su prodotti, listini e processi commerciali.',
    isDefault: true,
    initials: 'EV',
  },
  {
    id: '2',
    nome: 'Esperto Tecnico',
    descrizione: 'Supporto su integrazione API, SDK e troubleshooting.',
    isDefault: false,
    initials: 'ET',
  },
  {
    id: '3',
    nome: 'Esperto HR',
    descrizione: 'Policy interne, onboarding e FAQ dipendenti.',
    isDefault: false,
    initials: 'EH',
  },
]

/**
 * Board of Experts: elenco esperti con default e azioni.
 */
export function ExpertsDashboard() {
  const notify = useNotify()
  const [search, setSearch] = useState('')
  const [rows, setRows] = useState(ALL_EXPERTS)
  const [editing, setEditing] = useState<ExpertRow | 'new' | null>(null)
  const [deleting, setDeleting] = useState<ExpertRow[] | null>(null)
  const [agentQuery, setAgentQuery] = useState('')
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)
  const [description, setDescription] = useState('')
  const [isDefault, setIsDefault] = useState(false)

  const openEditor = (row: ExpertRow | 'new') => {
    setEditing(row)
    setAgentQuery('')
    setSelectedAgent(row === 'new' ? null : row.nome)
    setDescription(row === 'new' ? '' : row.descrizione)
    setIsDefault(row === 'new' ? false : row.isDefault)
  }
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  })

  const columns = useMemo<ColumnDef<ExpertRow>[]>(
    () => [
      {
        id: 'avatar',
        header: 'Avatar',
        size: 72,
        enableSorting: false,
        cell: ({ row }) => (
          <span
            className={styles.avatarCell}
            aria-hidden
          >
            {row.original.initials}
          </span>
        ),
      },
      {
        accessorKey: 'nome',
        header: 'Nome',
        minSize: 160,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>{row.original.nome}</span>
        ),
      },
      {
        accessorKey: 'descrizione',
        header: 'Descrizione',
        minSize: 220,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>
            {row.original.descrizione}
          </span>
        ),
      },
      {
        id: 'default',
        header: 'Predefinito',
        size: 100,
        enableSorting: false,
        cell: ({ row }) => (
          <Checkbox
            checked={row.original.isDefault}
            aria-label={`Imposta ${row.original.nome} come predefinito`}
            onChange={checked => {
              if (!checked) return
              setRows(prev =>
                prev.map(r => ({
                  ...r,
                  isDefault: r.id === row.original.id,
                })),
              )
            }}
          />
        ),
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    if (!search.trim()) return rows
    const q = search.toLowerCase()
    return rows.filter(
      r =>
        r.nome.toLowerCase().includes(q) ||
        r.descrizione.toLowerCase().includes(q),
    )
  }, [rows, search])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Esperti"
        description="Configura il Board of Experts: aggiungi, modifica e scegli l’esperto predefinito."
        icon={
          <UsersRound
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
          Aggiungi esperto
        </Button>
      </div>

      <Table<ExpertRow>
        data={pageRows}
        columns={columns}
        enableRowSelection
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca esperto"
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
        tableId="real-example-experts"
      />

      <Drawer
        open={editing !== null}
        onOpenChange={o => !o && setEditing(null)}
        anchor="right"
        size="md"
        title={
          editing === 'new' || !editing
            ? 'Aggiungi esperto'
            : `Modifica esperto "${editing.nome}"`
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
              disabled={!selectedAgent || !description.trim()}
              onClick={() => {
                if (editing === 'new' && selectedAgent) {
                  setRows(prev => [
                    ...prev.map(r =>
                      isDefault ? { ...r, isDefault: false } : r,
                    ),
                    {
                      id: String(Date.now()),
                      nome: selectedAgent,
                      descrizione: description,
                      isDefault,
                      initials: selectedAgent.slice(0, 2).toUpperCase(),
                    },
                  ])
                  notify("L'esperto è stato collegato")
                } else if (editing && editing !== 'new') {
                  setRows(prev =>
                    prev.map(r =>
                      r.id === editing.id
                        ? { ...r, descrizione: description, isDefault }
                        : isDefault
                          ? { ...r, isDefault: false }
                          : r,
                    ),
                  )
                  notify("L'esperto è stato aggiornato")
                }
                setEditing(null)
              }}
            >
              Salva
            </Button>
          </div>
        }
      >
        <div className={styles.formStack}>
          {editing === 'new' ? (
            <FieldGroup
              label="Agente"
              required
            >
              <div className={styles.formStack}>
                <div className={styles.searchField}>
                  <span className={styles.searchIconWrap}>
                    <Search aria-hidden />
                  </span>
                  <Input
                    type="search"
                    value={agentQuery}
                    onChange={e => setAgentQuery(e.target.value)}
                    placeholder="Cerca agenti"
                    aria-label="Cerca agenti"
                  />
                </div>
                <NavList>
                  <NavList.Group>
                    {AVAILABLE_AGENTS.filter(a =>
                      a.toLowerCase().includes(agentQuery.toLowerCase()),
                    ).map(a => (
                      <NavList.Item
                        key={a}
                        active={selectedAgent === a}
                        onClick={() => setSelectedAgent(a)}
                      >
                        {a}
                      </NavList.Item>
                    ))}
                  </NavList.Group>
                </NavList>
              </div>
            </FieldGroup>
          ) : null}
          <FieldGroup
            label="Descrizione"
            required
            helperText="Descrivi le competenze di questo esperto perchè saranno utilizzate dal Gruppo per selezionare a chi rivolgere la domanda."
          >
            <Textarea
              rows={4}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </FieldGroup>
          <div>
            <Switch
              checked={isDefault}
              onCheckedChange={setIsDefault}
              label={
                <span className={styles.headerWithHint}>
                  Esperto di default
                  <Tooltip content="L'esperto di default è l'esperto che risponde quando non è chiaro a chi rivolgere la domanda.">
                    <Info
                      size={14}
                      aria-label="Informazioni"
                    />
                  </Tooltip>
                </span>
              }
            />
          </div>
        </div>
      </Drawer>

      <ConfirmDialog
        isOpen={!!deleting}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          const ids = new Set(deleting?.map(d => d.id))
          setRows(prev => prev.filter(r => !ids.has(r.id)))
          setDeleting(null)
          notify("L'esperto è stato rimosso")
        }}
        title={
          deleting && deleting.length > 1
            ? 'Rimozione esperti selezionati'
            : 'Rimuovi esperto'
        }
        message={
          deleting && deleting.length > 1
            ? `Confermi di voler eliminare i ${deleting.length} esperti selezionati?`
            : 'Confermi di voler rimuovere questo esperto?'
        }
        confirmText="Conferma"
        cancelText="Annulla"
      />
    </div>
  )
}
