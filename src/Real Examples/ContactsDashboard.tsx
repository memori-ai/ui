import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import {
  Mail,
  MessageCircle,
  Pencil,
  Plus,
  RefreshCw,
  Send,
  Trash2,
  Users,
} from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { Drawer } from '../components/Drawer'
import { FieldGroup } from '../components/Field'
import { Input } from '../components/Input'
import { Modal } from '../components/Modal'
import { Section } from '../components/Section'
import { SelectBox } from '../components/SelectBox'
import { Table } from '../components/Table'
import { Tag } from '../components/Tag'
import { Textarea } from '../components/Textarea'
import '../components/Input/styles.css'
import { Callout } from '../components/Callout'
import { useNotify } from './shared/useNotify'
import styles from './realExamples.module.css'

type Invitation = {
  id: string
  email: string
  text: string
  state: 'ACCEPTED' | 'PENDING'
}

export type ContactRow = {
  id: string
  nome: string
  tag: string
  pin: string
  isGiver: boolean
  info?: string
  invitations: Invitation[]
}

const ALL_CONTACTS: ContactRow[] = [
  {
    id: '1',
    nome: 'Proprietario',
    tag: '👤',
    pin: '000000',
    isGiver: true,
    invitations: [
      {
        id: 'i1',
        email: 'co-autore@example.com',
        text: 'Gestiamo insieme questo Agente',
        state: 'ACCEPTED',
      },
    ],
  },
  {
    id: '2',
    nome: 'Cliente',
    tag: 'CLIENTE',
    pin: '482913',
    isGiver: false,
    info: 'Clienti registrati sul portale',
    invitations: [
      {
        id: 'i2',
        email: 'mario.rossi@example.com',
        text: '',
        state: 'PENDING',
      },
    ],
  },
  {
    id: '3',
    nome: 'Atleta',
    tag: 'ATLETA',
    pin: '193847',
    isGiver: false,
    invitations: [],
  },
  {
    id: '4',
    nome: 'Partner',
    tag: 'PARTNER',
    pin: '771204',
    isGiver: false,
    invitations: [
      { id: 'i3', email: 'a@partner.it', text: '', state: 'ACCEPTED' },
      { id: 'i4', email: 'b@partner.it', text: '', state: 'PENDING' },
    ],
  },
]

const AGENT_PRIVACY: 'PUBLIC' | 'PRIVATE' | 'SECRET' = 'PRIVATE'

function InvitesDrawer({
  contact,
  onClose,
  onChange,
}: {
  contact: ContactRow | null
  onClose: () => void
  onChange: (invitations: Invitation[]) => void
}) {
  const notify = useNotify()
  const [form, setForm] = useState<Invitation | 'new' | null>(null)
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState<Invitation | null>(null)
  const invitations = contact?.invitations ?? []

  const startForm = (inv: Invitation | 'new') => {
    setForm(inv)
    setEmail(inv === 'new' ? '' : inv.email)
    setText(inv === 'new' ? '' : inv.text)
  }

  return (
    <Drawer
      open={!!contact}
      onOpenChange={o => !o && onClose()}
      anchor="right"
      size="md"
      title={contact ? `Inviti per ${contact.nome} (${contact.tag})` : ''}
    >
      <div className={styles.formStack}>
        <div className={styles.instructionsHeader}>
          <h3 className={styles.sectionTitle}>Gestisci inviti</h3>
          {!form ? (
            <Button
              type="button"
              variant="primary"
              size="sm"
              icon={
                <Plus
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => startForm('new')}
            >
              Aggiungi
            </Button>
          ) : null}
        </div>

        {form ? (
          <Card
            variant="outlined"
            title={form === 'new' ? 'Nuovo invito' : 'Modifica invito'}
          >
            <div className={styles.formStack}>
              <FieldGroup
                label="Email"
                required
              >
                <Input
                  fullWidth
                  type="email"
                  value={email}
                  disabled={form !== 'new'}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="nome@esempio.com"
                />
              </FieldGroup>
              <FieldGroup label="Messaggio">
                <Textarea
                  rows={3}
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="Messaggio dell'invito"
                />
              </FieldGroup>
              {contact?.isGiver ? (
                <Callout severity="info">
                  Attenzione: l&apos;Agente non può essere modificato da più
                  utenti contemporaneamente. Assicurati di coordinarti con gli
                  altri autori.
                </Callout>
              ) : null}
              {AGENT_PRIVACY === ('SECRET' as string) ? (
                <Callout severity="warning">
                  Questo Agente è segreto, quindi sarà necessario inviare la
                  password separatamente.
                </Callout>
              ) : null}
              <div className={styles.drawerFooter}>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setForm(null)}
                >
                  Annulla
                </Button>
                <Button
                  type="button"
                  variant="primary"
                  disabled={!/^\S+@\S+\.\S+$/.test(email)}
                  icon={
                    <Send
                      size={16}
                      aria-hidden
                    />
                  }
                  onClick={() => {
                    if (form === 'new') {
                      onChange([
                        ...invitations,
                        {
                          id: String(Date.now()),
                          email,
                          text,
                          state: 'PENDING',
                        },
                      ])
                      notify('Invito inviato!')
                    } else {
                      onChange(
                        invitations.map(i =>
                          i.id === form.id ? { ...i, text } : i,
                        ),
                      )
                      notify('Invito aggiornato!')
                    }
                    setForm(null)
                  }}
                >
                  {form === 'new' ? 'Invia' : 'Aggiorna'}
                </Button>
              </div>
            </div>
          </Card>
        ) : null}

        {invitations.length === 0 ? (
          <p className={styles.tabPlaceholder}>Nessun invito trovato</p>
        ) : (
          <ul className={styles.plainList}>
            {invitations.map(inv => (
              <li
                key={inv.id}
                className={styles.plainListItem}
              >
                <span className={styles.extensionText}>
                  <span>{inv.email}</span>
                  {inv.text ? (
                    <span className={styles.fieldHint}>{inv.text}</span>
                  ) : null}
                </span>
                <Tag color={inv.state === 'ACCEPTED' ? 'success' : 'warning'}>
                  {inv.state === 'ACCEPTED' ? 'Accettato' : 'In attesa'}
                </Tag>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  shape="circle"
                  aria-label={`Modifica invito per ${inv.email}`}
                  icon={
                    <Pencil
                      size={16}
                      aria-hidden
                    />
                  }
                  onClick={() => startForm(inv)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  shape="circle"
                  aria-label={`Elimina invito per ${inv.email}`}
                  icon={
                    <Trash2
                      size={16}
                      aria-hidden
                    />
                  }
                  onClick={() => setDeleting(inv)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <ConfirmDialog
        isOpen={!!deleting}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          onChange(invitations.filter(i => i.id !== deleting?.id))
          setDeleting(null)
          notify('Invito eliminato!')
        }}
        title="Elimina invito"
        message="Confermi di voler eliminare l'invito?"
        confirmText="Elimina"
        cancelText="Annulla"
      />
    </Drawer>
  )
}

/**
 * Contatti: ruoli (receiver tags) e autore, con inviti, modifica e prova.
 */
export function ContactsDashboard() {
  const notify = useNotify()
  const [search, setSearch] = useState('')
  const [rows, setRows] = useState(ALL_CONTACTS)
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  })
  const [editing, setEditing] = useState<ContactRow | 'new' | null>(null)
  const [draft, setDraft] = useState({ nome: '', tag: '', pin: '', info: '' })
  const [invitesFor, setInvitesFor] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<ContactRow | null>(null)
  const [updateInvitesFor, setUpdateInvitesFor] = useState<ContactRow | null>(
    null,
  )

  const openEditor = (row: ContactRow | 'new') => {
    setEditing(row)
    setDraft(
      row === 'new'
        ? {
            nome: '',
            tag: '',
            pin: String(Math.floor(Math.random() * 1e6)).padStart(6, '0'),
            info: '',
          }
        : { nome: row.nome, tag: row.tag, pin: row.pin, info: row.info ?? '' },
    )
  }

  const save = () => {
    if (editing === 'new') {
      setRows(prev => [
        ...prev,
        {
          id: String(Date.now()),
          ...draft,
          isGiver: false,
          invitations: [],
        },
      ])
    } else if (editing) {
      setRows(prev =>
        prev.map(r => (r.id === editing.id ? { ...r, ...draft } : r)),
      )
      if (editing.invitations.length > 0 && draft.tag !== editing.tag) {
        setUpdateInvitesFor(editing)
      }
    }
    setEditing(null)
    notify('La modifica del contatto è avvenuta con successo')
  }

  const columns = useMemo<ColumnDef<ContactRow>[]>(
    () => [
      { accessorKey: 'nome', header: 'Nome', minSize: 180 },
      {
        accessorKey: 'tag',
        header: 'Tag',
        cell: ({ getValue }) => (
          <span className={styles.monoCell}>{getValue() as string}</span>
        ),
      },
      {
        id: 'autore',
        header: 'Autore',
        size: 100,
        cell: ({ row }) =>
          row.original.isGiver ? <Tag color="primary">Autore</Tag> : null,
      },
      {
        id: 'inviti',
        header: 'Inviti',
        size: 100,
        cell: ({ row }) => {
          const pending = row.original.invitations.filter(
            i => i.state === 'PENDING',
          ).length
          return (
            <span className={styles.cellWithIcon}>
              {row.original.invitations.length}
              {pending > 0 ? (
                <Tag
                  size="sm"
                  color="warning"
                >
                  {pending} in attesa
                </Tag>
              ) : null}
            </span>
          )
        },
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return q
      ? rows.filter(
          r =>
            r.nome.toLowerCase().includes(q) || r.tag.toLowerCase().includes(q),
        )
      : rows
  }, [rows, search])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  const giver = rows.find(r => r.isGiver)
  const invitesContact = rows.find(r => r.id === invitesFor) ?? null

  return (
    <div className={styles.page}>
      <Section
        title="Contatti"
        description="Gestisci i ruoli che possono interagire con il tuo Agente, i loro inviti e gli autori."
        icon={
          <Users
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <Table<ContactRow>
        data={pageRows}
        columns={columns}
        enablePagination
        manualPagination
        rowCount={filtered.length}
        pagination={pagination}
        onPaginationChange={setPagination}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca per nome o tag"
        paginationVariant="simplified"
        pageSizeOptions={[10, 25, 50]}
        initialPageSize={25}
        controlsAfterFilters={
          <div className={styles.toolbarRow}>
            <Button
              type="button"
              variant="ghost"
              size="md"
              aria-label="Aggiorna"
              title="Aggiorna"
              icon={
                <RefreshCw
                  size={18}
                  aria-hidden
                />
              }
              onClick={() => notify('Contatti aggiornati', 'info')}
            />
            <Button
              type="button"
              variant="outline"
              size="md"
              icon={
                <Mail
                  size={18}
                  aria-hidden
                />
              }
              onClick={() => giver && setInvitesFor(giver.id)}
            >
              Invita autore
            </Button>
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
              Nuovo ruolo
            </Button>
          </div>
        }
        rowActionsVariant="inline"
        rowActions={[
          {
            id: 'try',
            label: 'Prova',
            icon: (
              <MessageCircle
                size={16}
                aria-hidden
              />
            ),
            hidden: row => row.original.isGiver,
            onClick: row =>
              notify(`Apertura chat come "${row.original.nome}"`, 'info'),
          },
          {
            id: 'invite',
            label: 'Invita',
            icon: (
              <Mail
                size={16}
                aria-hidden
              />
            ),
            onClick: row => setInvitesFor(row.original.id),
          },
          {
            id: 'edit',
            label: 'Modifica',
            icon: (
              <Pencil
                size={16}
                aria-hidden
              />
            ),
            hidden: row => row.original.isGiver,
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
            hidden: row => row.original.isGiver,
            onClick: row => setDeleting(row.original),
          },
        ]}
        tableId="real-example-contacts"
      />

      <Drawer
        open={editing !== null}
        onOpenChange={o => !o && setEditing(null)}
        anchor="right"
        size="md"
        title={
          editing === 'new' || !editing
            ? 'Nuovo ruolo'
            : `Modifica del contatto '${editing.nome}'`
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
              disabled={!draft.nome.trim() || !draft.tag.trim() || !draft.pin}
              onClick={save}
            >
              Salva
            </Button>
          </div>
        }
      >
        <div className={styles.formStack}>
          <FieldGroup
            label="Nome"
            required
            error="Il campo Nome è obbligatorio"
            invalid={!draft.nome.trim()}
          >
            <Input
              fullWidth
              value={draft.nome}
              onChange={e => setDraft({ ...draft, nome: e.target.value })}
            />
          </FieldGroup>
          <FieldGroup label="Tipo contatto">
            <SelectBox
              options={[
                { value: 'receiver', label: 'Destinatario' },
                { value: 'giver', label: 'Autore' },
              ]}
              defaultValue="receiver"
              disabled
            />
          </FieldGroup>
          <FieldGroup label="Informazioni">
            <Textarea
              rows={3}
              value={draft.info}
              onChange={e => setDraft({ ...draft, info: e.target.value })}
            />
          </FieldGroup>
          <div className={styles.twoColumns}>
            <FieldGroup
              label="Tag"
              required
              error="Il campo Tag è obbligatorio"
              invalid={!draft.tag.trim()}
            >
              <Input
                fullWidth
                value={draft.tag}
                onChange={e => setDraft({ ...draft, tag: e.target.value })}
              />
            </FieldGroup>
            <FieldGroup
              label="Pin"
              required
            >
              <Input
                fullWidth
                inputMode="numeric"
                value={draft.pin}
                onChange={e => setDraft({ ...draft, pin: e.target.value })}
              />
            </FieldGroup>
          </div>
        </div>
      </Drawer>

      <InvitesDrawer
        contact={invitesContact}
        onClose={() => setInvitesFor(null)}
        onChange={invitations =>
          setRows(prev =>
            prev.map(r => (r.id === invitesFor ? { ...r, invitations } : r)),
          )
        }
      />

      <ConfirmDialog
        isOpen={!!deleting}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          setRows(prev => prev.filter(r => r.id !== deleting?.id))
          setDeleting(null)
          notify('Operazione andata a buon fine')
        }}
        title="Elimina"
        message={`Vuoi eliminare il contatto '${deleting?.nome ?? ''}'? Attenzione: verranno cancellati anche tutti i contenuti associati.`}
        confirmText="Conferma"
        cancelText="Annulla"
      />

      <Modal
        open={!!updateInvitesFor}
        onOpenChange={o => !o && setUpdateInvitesFor(null)}
        title="Attenzione"
        size="sm"
        footer={
          <>
            <Button
              type="button"
              variant="outline"
              danger
              onClick={() => {
                setRows(prev =>
                  prev.map(r =>
                    r.id === updateInvitesFor?.id
                      ? { ...r, invitations: [] }
                      : r,
                  ),
                )
                setUpdateInvitesFor(null)
              }}
            >
              Elimina
            </Button>
            <Button
              type="button"
              variant="primary"
              onClick={() => setUpdateInvitesFor(null)}
            >
              Aggiorna
            </Button>
          </>
        }
      >
        Ci sono {updateInvitesFor?.invitations.length} inviti per questo ruolo.
        Vuoi aggiornarli o cancellarli?
      </Modal>
    </div>
  )
}
