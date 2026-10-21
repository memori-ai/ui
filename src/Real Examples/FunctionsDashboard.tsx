import React, { useMemo, useState } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import {
  BookOpen,
  Bolt,
  Braces,
  FileUp,
  Globe,
  Info,
  Mail,
  Pencil,
  Play,
  Plus,
  Search,
  Sparkles,
  Trash2,
  X,
} from 'lucide-react'
import { Button } from '../components/Button'
import { CodeBlock } from '../components/CodeBlock'
import { Card } from '../components/Card'
import { Checkbox } from '../components/Checkbox'
import { Collapsible } from '../components/Collapsible'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { Drawer } from '../components/Drawer'
import { FileDropzone } from '../components/FileDropzone'
import { Expandable } from '../components/Expandable'
import { FieldGroup } from '../components/Field'
import { Input } from '../components/Input'
import { Section } from '../components/Section'
import { SelectBox } from '../components/SelectBox'
import { Switch } from '../components/Switch'
import { Table } from '../components/Table'
import { Tabs } from '../components/Tabs'
import { Tag } from '../components/Tag'
import { Textarea } from '../components/Textarea'
import { Tooltip } from '../components/Tooltip'
import '../components/Input/styles.css'
import { Callout } from '../components/Callout'
import { useNotify } from './shared/useNotify'
import styles from './realExamples.module.css'

/* ------------------------------------------------------------------ */
/* Funzioni AIsuru                                                     */
/* ------------------------------------------------------------------ */

type MacroFunction = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  params?: { id: string; label: string; secret?: boolean }[]
  inheritable?: boolean
}

const MACRO_FUNCTIONS: MacroFunction[] = [
  {
    id: 'context',
    title: 'Variabili di contesto',
    description:
      'Le variabili di contesto sono già attive in tutti gli Agenti e funzionano come appunti digitali. Questa opzione permette di attivare o disattivare il loro utilizzo da parte dell’IA.',
    icon: <Braces size={20} />,
  },
  {
    id: 'crawling',
    title: 'Navigazione web avanzata',
    description:
      'Dota il tuo Agente della capacità di navigare specifiche pagine web ed esplorare e analizzare le pagine fornite nelle istruzioni.',
    icon: <Globe size={20} />,
  },
  {
    id: 'wikipedia',
    title: 'Wikipedia',
    description:
      'Potenzia il tuo Agente con l’accesso diretto a Wikipedia, consultando in tempo reale la più grande enciclopedia online.',
    icon: <BookOpen size={20} />,
  },
  {
    id: 'smtp',
    title: 'Invio Email',
    description:
      'L’Agente può inviare email esclusivamente al tuo indirizzo, permettendoti di ricevere comunicazioni automatiche.',
    icon: <Mail size={20} />,
    inheritable: true,
    params: [
      { id: 'sender', label: 'Email del mittente' },
      { id: 'name', label: 'Nome del mittente' },
      { id: 'server', label: 'Server SMTP' },
      { id: 'port', label: 'Porta' },
      { id: 'user', label: 'Nome utente' },
      { id: 'password', label: 'Password', secret: true },
    ],
  },
  {
    id: 'artifacts',
    title: 'Artifacts',
    description:
      'Gli Artifacts permettono al tuo Agente di creare contenuti interattivi e multimediali durante la conversazione.',
    icon: <Sparkles size={20} />,
  },
  {
    id: 'perplexity',
    title: 'Ricerca Perplexity',
    description:
      'Perplexity Search è un motore di ricerca che utilizza l’IA per fornire risultati più precisi e pertinenti.',
    icon: <Search size={20} />,
    inheritable: true,
    params: [{ id: 'apiKey', label: 'API Key', secret: true }],
  },
]

function AisuruFunctionsTab() {
  const notify = useNotify()
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    context: true,
    artifacts: true,
  })
  const [open, setOpen] = useState<string | null>(null)
  const [inherit, setInherit] = useState<Record<string, boolean>>({
    perplexity: true,
  })
  const [disabling, setDisabling] = useState<MacroFunction | null>(null)
  const [fileName, setFileName] = useState('')

  return (
    <div className={styles.formStackWide}>
      <p className={styles.sectionIntro}>
        Configura le funzioni AIsuru del tuo Agente. Queste funzioni sono
        utilizzate per migliorare le capacità del tuo Agente.
      </p>
      <Callout
        severity="warning"
        title="Ricordati di aggiornare le istruzioni del tuo Agente"
      >
        Se abiliti o disabiliti le funzioni ricorda di aggiornare le istruzioni
        nella sezione IA, così l&apos;Agente saprà quando usarle.
      </Callout>
      {enabled.artifacts ? (
        <Callout severity="info">
          Attenzione: gli Artifacts non funzionano sul layout WEBSITE_ASSISTANT
        </Callout>
      ) : null}

      <div className={styles.cardGrid}>
        {MACRO_FUNCTIONS.map(fn => {
          const isOn = !!enabled[fn.id]
          const needsConfig = !!fn.params && !inherit[fn.id]
          return (
            <Card
              key={fn.id}
              variant="outlined"
              padding="md"
              className={isOn ? styles.macroCardOn : undefined}
            >
              <div className={styles.formStack}>
                <div className={styles.extensionRow}>
                  <span
                    className={styles.extensionIcon}
                    aria-hidden
                  >
                    {fn.icon}
                  </span>
                  <span className={styles.extensionText}>
                    <span className={styles.extensionTitle}>
                      {fn.title}
                      {fn.inheritable && inherit[fn.id] ? (
                        <Tag
                          size="sm"
                          color="info"
                        >
                          Ereditato dal tenant
                        </Tag>
                      ) : null}
                    </span>
                  </span>
                  <Tooltip
                    content="La funzione deve essere configurata per essere attivata"
                    disabled={!needsConfig || isOn}
                  >
                    <span>
                      <Switch
                        checked={isOn}
                        disabled={needsConfig && !isOn}
                        onCheckedChange={v => {
                          if (!v && fn.params) setDisabling(fn)
                          else {
                            setEnabled(prev => ({ ...prev, [fn.id]: v }))
                            notify('Il tuo Agente è stato aggiornato!')
                          }
                        }}
                        label={
                          <span className={styles.visuallyHidden}>
                            {fn.title}
                          </span>
                        }
                      />
                    </span>
                  </Tooltip>
                </div>
                <Expandable
                  rows={3}
                  className={styles.fieldHint}
                  expandSymbol={() => 'Vedi tutto'}
                  collapseSymbol={() => 'Vedi meno'}
                >
                  {fn.description}
                </Expandable>
                {fn.params ? (
                  <Button
                    type="button"
                    variant="link"
                    size="sm"
                    className={styles.inlineLink}
                    onClick={() => setOpen(open === fn.id ? null : fn.id)}
                  >
                    {open === fn.id ? 'Chiudi' : 'Modifica parametri'}
                  </Button>
                ) : null}
                {open === fn.id && fn.params ? (
                  <div className={styles.formStack}>
                    {fn.inheritable ? (
                      <Checkbox
                        checked={!!inherit[fn.id]}
                        onChange={v =>
                          setInherit(prev => ({ ...prev, [fn.id]: v }))
                        }
                        label="Eredita dal tenant"
                      />
                    ) : null}
                    {!inherit[fn.id]
                      ? fn.params.map(p => (
                          <FieldGroup
                            key={p.id}
                            label={p.label}
                            required
                          >
                            <Input
                              fullWidth
                              type={p.secret ? 'password' : 'text'}
                            />
                          </FieldGroup>
                        ))
                      : null}
                    <Button
                      type="button"
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        setEnabled(prev => ({ ...prev, [fn.id]: true }))
                        setOpen(null)
                        notify('Il tuo Agente è stato aggiornato!')
                      }}
                    >
                      Salva
                    </Button>
                  </div>
                ) : null}
              </div>
            </Card>
          )
        })}
      </div>

      <div className={styles.twoColumns}>
        <Card
          variant="outlined"
          title="Crea Funzione da file"
          description="Carica un documento e descrivi come l'Agente deve usarlo: verrà generata una funzione avanzata."
        >
          <div className={styles.formStack}>
            <FileDropzone
              variant="button"
              icon={
                <FileUp
                  size={16}
                  aria-hidden
                />
              }
              buttonLabel="Carica il file"
              description={
                fileName
                  ? `File caricato pronto: ${fileName}`
                  : 'Carica prima il file, poi inserisci la descrizione.'
              }
              onFilesSelected={files => setFileName(files[0]!.name)}
            />
            <Textarea
              rows={3}
              disabled={!fileName}
              placeholder="Inserisci una descrizione che indica al tuo agente come utilizzare il file"
              aria-label="Descrizione funzione"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={!fileName}
              onClick={() =>
                notify('File caricato e funzione creata con successo')
              }
            >
              Genera funzione
            </Button>
          </div>
        </Card>
        <Card
          variant="outlined"
          title="Converti OpenAPI in funzioni"
          description="Carica una specifica OpenAPI (.json) per creare automaticamente le funzioni avanzate."
        >
          <div className={styles.formStack}>
            <FieldGroup
              label="URL base del webhook"
              helperText="Inserisci l'URL base per la tua API (es. https://api.example.com)"
            >
              <Input
                fullWidth
                type="url"
              />
            </FieldGroup>
            <Button
              type="button"
              variant="outline"
              size="sm"
              icon={
                <FileUp
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => notify('OpenAPI convertita con successo')}
            >
              Carica file OpenAPI
            </Button>
          </div>
        </Card>
      </div>

      <ConfirmDialog
        isOpen={!!disabling}
        onClose={() => setDisabling(null)}
        onConfirm={() => {
          if (disabling)
            setEnabled(prev => ({ ...prev, [disabling.id]: false }))
          setDisabling(null)
        }}
        title="Disabilita funzione"
        message="Sei sicuro di voler disabilitare questa funzione? Tutti i parametri configurati verranno rimossi."
        confirmText="Conferma"
        cancelText="Annulla"
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Funzioni avanzate                                                   */
/* ------------------------------------------------------------------ */

type FunctionParam = {
  name: string
  description: string
  type: string
  values?: string
  required: boolean
}

type AdvancedFunction = {
  id: string
  name: string
  description: string
  webhook: string
  method: string
  internal?: boolean
  params: FunctionParam[]
}

const ADVANCED: AdvancedFunction[] = [
  {
    id: 'f1',
    name: 'get_weather',
    description:
      'Restituisce il meteo attuale per una città. Usala quando l’utente chiede che tempo fa.',
    webhook: 'https://api.example.com/weather',
    method: 'GET',
    params: [
      {
        name: 'city',
        description: 'Nome della città',
        type: 'string',
        required: true,
      },
    ],
  },
  {
    id: 'f2',
    name: 'create_ticket',
    description: 'Apre un ticket di assistenza nel sistema di help desk.',
    webhook: 'https://api.example.com/tickets',
    method: 'POST',
    params: [
      {
        name: 'subject',
        description: 'Oggetto',
        type: 'string',
        required: true,
      },
      {
        name: 'priority',
        description: 'Priorità',
        type: 'string',
        values: 'low, medium, high',
        required: false,
      },
    ],
  },
  {
    id: 'f3',
    name: 'fetch_url',
    description: 'Funzione interna per la navigazione web.',
    webhook: 'internal://fetch',
    method: 'POST',
    internal: true,
    params: [],
  },
]

function FunctionDrawer({
  fn,
  onClose,
  onSave,
}: {
  fn: AdvancedFunction | 'new'
  onClose: () => void
  onSave: (fn: AdvancedFunction) => void
}) {
  const initial: AdvancedFunction =
    fn === 'new'
      ? {
          id: String(Date.now()),
          name: '',
          description: '',
          webhook: '',
          method: 'POST',
          params: [],
        }
      : fn
  const [draft, setDraft] = useState(initial)
  const [headers, setHeaders] = useState<{ k: string; v: string }[]>([])
  const [extHeaders, setExtHeaders] = useState(true)
  const [param, setParam] = useState<FunctionParam | null>(null)
  const [response, setResponse] = useState('')

  return (
    <Drawer
      open
      onOpenChange={o => !o && onClose()}
      anchor="right"
      width="min(56rem, 96vw)"
      title={fn === 'new' ? 'Nuova funzione' : `Modifica funzione "${fn.name}"`}
      footer={
        <div className={styles.drawerFooter}>
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
          >
            Annulla
          </Button>
          <Button
            type="button"
            variant="primary"
            disabled={!/^[a-zA-Z0-9_-]+$/.test(draft.name) || !draft.webhook}
            onClick={() => onSave(draft)}
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
          helperText="Solo lettere, numeri, _ e -"
        >
          <Input
            fullWidth
            value={draft.name}
            onChange={e => setDraft({ ...draft, name: e.target.value })}
          />
        </FieldGroup>
        <FieldGroup
          label="Descrizione"
          required
          helperText="La descrizione è fornita all'IA generativa per aiutarla a comprendere lo scopo della funzione e quando invocarla."
        >
          <Textarea
            rows={3}
            value={draft.description}
            onChange={e => setDraft({ ...draft, description: e.target.value })}
          />
        </FieldGroup>
        <div className={styles.twoColumns}>
          <FieldGroup
            label="Webhook"
            required
            helperText="URL HTTP del webhook da chiamare quando la funzione viene invocata."
          >
            <Input
              fullWidth
              type="url"
              value={draft.webhook}
              onChange={e => setDraft({ ...draft, webhook: e.target.value })}
            />
          </FieldGroup>
          <FieldGroup label="Metodo HTTP">
            <SelectBox
              options={['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map(m => ({
                value: m,
                label: m,
              }))}
              value={draft.method}
              onChange={v => setDraft({ ...draft, method: v ?? 'POST' })}
            />
          </FieldGroup>
        </div>

        <FieldGroup label="Header HTTP">
          <div className={styles.formStack}>
            {headers.map((h, i) => (
              <div
                key={i}
                className={styles.inputWithActions}
              >
                <Input
                  placeholder="Nome"
                  value={h.k}
                  onChange={e =>
                    setHeaders(
                      headers.map((x, j) =>
                        j === i ? { ...x, k: e.target.value } : x,
                      ),
                    )
                  }
                />
                <Input
                  placeholder="Valore"
                  value={h.v}
                  onChange={e =>
                    setHeaders(
                      headers.map((x, j) =>
                        j === i ? { ...x, v: e.target.value } : x,
                      ),
                    )
                  }
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  shape="circle"
                  aria-label="Elimina header"
                  icon={
                    <X
                      size={16}
                      aria-hidden
                    />
                  }
                  onClick={() => setHeaders(headers.filter((_, j) => j !== i))}
                />
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              icon={
                <Plus
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => setHeaders([...headers, { k: '', v: '' }])}
            >
              Aggiungi
            </Button>
          </div>
        </FieldGroup>

        <Collapsible summary="Template e opzioni avanzate">
          <div className={styles.formStack}>
            <FieldGroup
              label="Template query string"
              helperText="Può contenere segnaposto ${param} per i parametri della funzione."
            >
              <Input
                fullWidth
                placeholder="city=${city}"
              />
            </FieldGroup>
            <FieldGroup label="Template body HTTP">
              <Textarea
                rows={4}
                className={styles.codeTextarea}
                placeholder='{ "subject": "${subject}" }'
              />
            </FieldGroup>
            <FieldGroup label="Content-Type body HTTP">
              <Input
                fullWidth
                defaultValue="application/json"
              />
            </FieldGroup>
            <div>
              <Checkbox
                checked={extHeaders}
                onChange={setExtHeaders}
                label="Invia header di estensione"
              />
              <p className={styles.fieldHint}>
                Le intestazioni di estensione consentono al webhook di ricevere
                SESSION-ID, lingua e variabili di contesto.
              </p>
            </div>
          </div>
        </Collapsible>

        <div className={styles.instructionsHeader}>
          <h3 className={styles.sectionTitle}>Parametri</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            icon={
              <Plus
                size={16}
                aria-hidden
              />
            }
            onClick={() =>
              setParam({
                name: '',
                description: '',
                type: 'string',
                required: false,
              })
            }
          >
            Nuovo parametro
          </Button>
        </div>
        {draft.params.length === 0 ? (
          <p className={styles.fieldHint}>Nessun dato disponibile</p>
        ) : (
          <ul className={styles.plainList}>
            {draft.params.map(p => (
              <li
                key={p.name}
                className={styles.plainListItem}
              >
                <span className={styles.extensionText}>
                  <span className={styles.monoCell}>
                    {p.name}
                    {p.required ? <Tag size="sm">Obbligatorio</Tag> : null}
                  </span>
                  <span className={styles.fieldHint}>
                    {p.type}
                    {p.values ? ` · ${p.values}` : ''} — {p.description}
                  </span>
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  shape="circle"
                  aria-label={`Modifica parametro ${p.name}`}
                  icon={
                    <Pencil
                      size={16}
                      aria-hidden
                    />
                  }
                  onClick={() => setParam(p)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  shape="circle"
                  aria-label={`Elimina parametro ${p.name}`}
                  icon={
                    <Trash2
                      size={16}
                      aria-hidden
                    />
                  }
                  onClick={() =>
                    setDraft({
                      ...draft,
                      params: draft.params.filter(x => x.name !== p.name),
                    })
                  }
                />
              </li>
            ))}
          </ul>
        )}

        {param ? (
          <Card
            variant="outlined"
            title={
              param.name
                ? `Modifica parametro "${param.name}"`
                : 'Nuovo parametro'
            }
          >
            <div className={styles.formStack}>
              <div className={styles.twoColumns}>
                <FieldGroup
                  label="Nome"
                  required
                >
                  <Input
                    fullWidth
                    value={param.name}
                    onChange={e => setParam({ ...param, name: e.target.value })}
                  />
                </FieldGroup>
                <FieldGroup label="Tipo">
                  <SelectBox
                    options={['string', 'number', 'integer', 'boolean'].map(
                      t => ({
                        value: t,
                        label: t,
                      }),
                    )}
                    value={param.type}
                    onChange={v => setParam({ ...param, type: v ?? 'string' })}
                  />
                </FieldGroup>
              </div>
              <FieldGroup label="Descrizione">
                <Input
                  fullWidth
                  value={param.description}
                  onChange={e =>
                    setParam({ ...param, description: e.target.value })
                  }
                />
              </FieldGroup>
              <FieldGroup
                label="Valori possibili"
                helperText="Separati da virgola"
              >
                <Input
                  fullWidth
                  value={param.values ?? ''}
                  onChange={e => setParam({ ...param, values: e.target.value })}
                />
              </FieldGroup>
              <Checkbox
                checked={param.required}
                onChange={v => setParam({ ...param, required: v })}
                label="Obbligatorio"
              />
              <div className={styles.toolbarRow}>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setParam(null)}
                >
                  Annulla
                </Button>
                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  disabled={!param.name.trim()}
                  onClick={() => {
                    setDraft({
                      ...draft,
                      params: [
                        ...draft.params.filter(x => x.name !== param.name),
                        param,
                      ],
                    })
                    setParam(null)
                  }}
                >
                  Salva parametro
                </Button>
              </div>
            </div>
          </Card>
        ) : null}

        <Collapsible summary="Test funzione">
          <div className={styles.formStack}>
            {draft.params.map(p => (
              <FieldGroup
                key={p.name}
                label={p.name}
                required={p.required}
              >
                <Input fullWidth />
              </FieldGroup>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              icon={
                <Play
                  size={16}
                  aria-hidden
                />
              }
              onClick={() =>
                setResponse('{\n  "status": 200,\n  "data": { "ok": true }\n}')
              }
            >
              Esegui
            </Button>
            {response ? (
              <FieldGroup label="Risposta">
                <CodeBlock
                  language="JSON"
                  code={response}
                />
              </FieldGroup>
            ) : null}
          </div>
        </Collapsible>
      </div>
    </Drawer>
  )
}

function AdvancedFunctionsTab() {
  const notify = useNotify()
  const [rows, setRows] = useState(ADVANCED)
  const [search, setSearch] = useState('')
  const [editing, setEditing] = useState<AdvancedFunction | 'new' | null>(null)
  const [deleting, setDeleting] = useState<AdvancedFunction[] | null>(null)

  const columns = useMemo<ColumnDef<AdvancedFunction>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nome',
        minSize: 170,
        cell: ({ row }) => (
          <span className={styles.monoCell}>
            {row.original.name}
            {row.original.internal ? (
              <Tooltip content="Funzione interna, abilitata da una funzione aggiuntiva sul Agente">
                <Info
                  size={14}
                  aria-label="Funzione interna"
                />
              </Tooltip>
            ) : null}
          </span>
        ),
      },
      {
        accessorKey: 'description',
        header: 'Descrizione',
        minSize: 260,
        cell: ({ getValue }) => (
          <Expandable
            rows={2}
            expandSymbol={() => 'Mostra di più'}
            collapseSymbol={() => 'Mostra di meno'}
          >
            {getValue() as string}
          </Expandable>
        ),
      },
      {
        accessorKey: 'webhook',
        header: 'Webhook',
        minSize: 220,
        cell: ({ row }) => (
          <span className={styles.tableCellText}>
            <Tag size="sm">{row.original.method}</Tag> {row.original.webhook}
          </span>
        ),
      },
    ],
    [],
  )

  return (
    <>
      <p className={styles.sectionIntro}>
        Le funzioni avanzate permettono all&apos;Agente di eseguire azioni
        specifiche chiamando webhook esterni durante la conversazione.
      </p>
      <Table<AdvancedFunction>
        data={rows.filter(r =>
          `${r.name} ${r.description}`
            .toLowerCase()
            .includes(search.toLowerCase()),
        )}
        columns={columns}
        search={search}
        onSearchChange={setSearch}
        globalFilterPlaceholder="Cerca"
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
            Nuova funzione
          </Button>
        }
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
            hidden: row => !!row.original.internal,
            onClick: row => setEditing(row.original),
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
            hidden: row => !!row.original.internal,
            onClick: row => setDeleting([row.original]),
          },
        ]}
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
        tableId="real-example-functions-advanced"
      />
      {editing ? (
        <FunctionDrawer
          fn={editing}
          onClose={() => setEditing(null)}
          onSave={fn => {
            setRows(prev =>
              prev.some(r => r.id === fn.id)
                ? prev.map(r => (r.id === fn.id ? fn : r))
                : [...prev, fn],
            )
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
        title={
          deleting && deleting.length > 1
            ? 'Elimina funzioni selezionate'
            : 'Elimina funzione'
        }
        message={
          deleting && deleting.length > 1
            ? `Confermi di voler eliminare le ${deleting.length} funzioni selezionate?`
            : `Confermi di voler eliminare la funzione "${deleting?.[0]?.name ?? ''}"?`
        }
        confirmText="Conferma"
        cancelText="Annulla"
      />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Intenti dinamici (intents + slots)                                  */
/* ------------------------------------------------------------------ */

type IntentRow = {
  id: string
  name: string
  utterances: string[]
  timeout: boolean
  webhook: string
  validity: number
}

type SlotRow = {
  id: string
  name: string
  values: string[]
  webhook: string
  validity: number
}

const INTENTS: IntentRow[] = [
  {
    id: '1',
    name: 'ordina_prodotto',
    utterances: ['vorrei ordinare {prodotto}', 'compra {prodotto}'],
    timeout: false,
    webhook: 'https://api.example.com/order',
    validity: 0,
  },
  {
    id: '2',
    name: 'promemoria_inattivo',
    utterances: ['sei ancora lì?'],
    timeout: true,
    webhook: 'https://api.example.com/idle',
    validity: 30,
  },
]

const SLOTS: SlotRow[] = [
  {
    id: 's1',
    name: 'prodotto',
    values: ['scarpe', 'maglia', 'zaino'],
    webhook: '',
    validity: 60,
  },
]

function ListInput({
  label,
  values,
  onChange,
  addLabel,
}: {
  label: string
  values: string[]
  onChange: (v: string[]) => void
  addLabel: string
}) {
  const [draft, setDraft] = useState('')
  return (
    <FieldGroup label={label}>
      <div className={styles.formStack}>
        <div className={styles.pillGroup}>
          {values.map(v => (
            <Tag
              key={v}
              closable
              closeLabel={`Elimina ${v}`}
              onClose={() => onChange(values.filter(x => x !== v))}
            >
              {v}
            </Tag>
          ))}
        </div>
        <div className={styles.inputWithActions}>
          <Input
            fullWidth
            value={draft}
            onChange={e => setDraft(e.target.value)}
          />
          <Button
            type="button"
            variant="outline"
            size="md"
            disabled={!draft.trim()}
            onClick={() => {
              onChange([...values, draft.trim()])
              setDraft('')
            }}
          >
            {addLabel}
          </Button>
        </div>
      </div>
    </FieldGroup>
  )
}

function IntentsTab() {
  const notify = useNotify()
  const [intents, setIntents] = useState(INTENTS)
  const [slots, setSlots] = useState(SLOTS)
  const [editingIntent, setEditingIntent] = useState<IntentRow | null>(null)
  const [editingSlot, setEditingSlot] = useState<SlotRow | null>(null)

  const intentColumns = useMemo<ColumnDef<IntentRow>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nome',
        cell: ({ getValue }) => (
          <span className={styles.monoCell}>{getValue() as string}</span>
        ),
      },
      {
        id: 'utterances',
        header: 'Invocazioni',
        minSize: 220,
        cell: ({ row }) => (
          <div className={styles.pillGroup}>
            {row.original.utterances.map(u => (
              <Tag
                key={u}
                size="sm"
              >
                {u}
              </Tag>
            ))}
          </div>
        ),
      },
      {
        accessorKey: 'timeout',
        header: 'Chiama quando inattivo',
        cell: ({ getValue }) => ((getValue() as boolean) ? 'Sì' : 'No'),
      },
      { accessorKey: 'webhook', header: 'Webhook', minSize: 200 },
      { accessorKey: 'validity', header: 'Validità (minuti)', size: 140 },
    ],
    [],
  )

  const slotColumns = useMemo<ColumnDef<SlotRow>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nome',
        cell: ({ getValue }) => (
          <span className={styles.monoCell}>{getValue() as string}</span>
        ),
      },
      {
        id: 'values',
        header: 'Valori slot',
        cell: ({ row }) => (
          <div className={styles.pillGroup}>
            {row.original.values.map(v => (
              <Tag
                key={v}
                size="sm"
              >
                {v}
              </Tag>
            ))}
          </div>
        ),
      },
      {
        accessorKey: 'webhook',
        header: 'Webhook',
        cell: ({ getValue }) =>
          (getValue() as string) || (
            <span className={styles.tableMutedCell}>—</span>
          ),
      },
      { accessorKey: 'validity', header: 'Validità (minuti)', size: 140 },
    ],
    [],
  )

  const newIntent = (): IntentRow => ({
    id: String(Date.now()),
    name: '',
    utterances: [],
    timeout: false,
    webhook: '',
    validity: 0,
  })
  const newSlot = (): SlotRow => ({
    id: String(Date.now()),
    name: '',
    values: [],
    webhook: '',
    validity: 0,
  })
  const pencil = (
    <Pencil
      size={16}
      aria-hidden
    />
  )
  const trash = (
    <Trash2
      size={16}
      aria-hidden
    />
  )

  return (
    <Tabs.Root
      defaultValue="intents"
      variant="segmented"
    >
      <Tabs.List
        aria-label="Intenti dinamici"
        className={styles.tabsList}
      >
        <Tabs.Tab value="intents">Intenti</Tabs.Tab>
        <Tabs.Tab value="slots">Slot</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel
        value="intents"
        className={styles.tabPanel}
      >
        <p className={styles.sectionIntro}>
          Gli intenti dinamici permettono all&apos;Agente di eseguire webhook
          quando l&apos;utente pronuncia una delle invocazioni previste.
        </p>
        <Table<IntentRow>
          data={intents}
          columns={intentColumns}
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
              onClick={() => setEditingIntent(newIntent())}
            >
              Nuovo intento
            </Button>
          }
          rowActionsVariant="inline"
          rowActions={[
            {
              id: 'edit',
              label: 'Modifica',
              icon: pencil,
              onClick: row => setEditingIntent(row.original),
            },
            {
              id: 'delete',
              label: 'Elimina',
              variant: 'danger',
              icon: trash,
              onClick: row =>
                setIntents(prev => prev.filter(r => r.id !== row.original.id)),
            },
          ]}
          bulkActions={[
            {
              label: 'Elimina',
              variant: 'danger',
              icon: trash,
              onClick: sel => {
                const ids = new Set(sel.map(r => r.original.id))
                setIntents(prev => prev.filter(r => !ids.has(r.id)))
              },
            },
          ]}
          tableId="real-example-functions-intents"
        />
      </Tabs.Panel>
      <Tabs.Panel
        value="slots"
        className={styles.tabPanel}
      >
        <p className={styles.sectionIntro}>
          Gli slot sono variabili che possono essere estratte dalle frasi degli
          utenti quando invocano un intento.
        </p>
        <Table<SlotRow>
          data={slots}
          columns={slotColumns}
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
              onClick={() => setEditingSlot(newSlot())}
            >
              Nuovo slot
            </Button>
          }
          rowActionsVariant="inline"
          rowActions={[
            {
              id: 'edit',
              label: 'Modifica',
              icon: pencil,
              onClick: row => setEditingSlot(row.original),
            },
            {
              id: 'delete',
              label: 'Elimina',
              variant: 'danger',
              icon: trash,
              onClick: row =>
                setSlots(prev => prev.filter(r => r.id !== row.original.id)),
            },
          ]}
          tableId="real-example-functions-slots"
        />
      </Tabs.Panel>

      <Drawer
        open={!!editingIntent}
        onOpenChange={o => !o && setEditingIntent(null)}
        anchor="right"
        size="md"
        title={
          editingIntent?.name
            ? `Modifica intento "${editingIntent.name}"`
            : 'Nuovo intento'
        }
        footer={
          <div className={styles.drawerFooter}>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setEditingIntent(null)}
            >
              Annulla
            </Button>
            <Button
              type="button"
              variant="primary"
              disabled={!editingIntent?.name.trim()}
              onClick={() => {
                if (editingIntent)
                  setIntents(prev =>
                    prev.some(r => r.id === editingIntent.id)
                      ? prev.map(r =>
                          r.id === editingIntent.id ? editingIntent : r,
                        )
                      : [...prev, editingIntent],
                  )
                setEditingIntent(null)
                notify('Operazione andata a buon fine')
              }}
            >
              Salva
            </Button>
          </div>
        }
      >
        {editingIntent ? (
          <div className={styles.formStack}>
            <FieldGroup
              label="Nome"
              required
            >
              <Input
                fullWidth
                value={editingIntent.name}
                onChange={e =>
                  setEditingIntent({ ...editingIntent, name: e.target.value })
                }
              />
            </FieldGroup>
            <ListInput
              label="Invocazioni"
              values={editingIntent.utterances}
              onChange={v =>
                setEditingIntent({ ...editingIntent, utterances: v })
              }
              addLabel="Aggiungi invocazione"
            />
            <FieldGroup
              label="Webhook"
              required
            >
              <Input
                fullWidth
                type="url"
                value={editingIntent.webhook}
                onChange={e =>
                  setEditingIntent({
                    ...editingIntent,
                    webhook: e.target.value,
                  })
                }
              />
            </FieldGroup>
            <div>
              <Checkbox
                checked={editingIntent.timeout}
                onChange={v =>
                  setEditingIntent({ ...editingIntent, timeout: v })
                }
                label="Chiama quando inattivo"
              />
              <p className={styles.fieldHint}>
                Se selezionato, questo intento verrà chiamato quando
                l&apos;utente è inattivo.
              </p>
            </div>
            <FieldGroup
              label="Validità (minuti)"
              helperText="Tempo di memorizzazione nella cache della risposta all'intento, espresso in minuti."
            >
              <Input
                type="number"
                min={0}
                value={String(editingIntent.validity)}
                onChange={e =>
                  setEditingIntent({
                    ...editingIntent,
                    validity: Number(e.target.value),
                  })
                }
              />
            </FieldGroup>
          </div>
        ) : null}
      </Drawer>

      <Drawer
        open={!!editingSlot}
        onOpenChange={o => !o && setEditingSlot(null)}
        anchor="right"
        size="md"
        title={
          editingSlot?.name
            ? `Modifica slot "${editingSlot.name}"`
            : 'Nuovo slot'
        }
        footer={
          <div className={styles.drawerFooter}>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setEditingSlot(null)}
            >
              Annulla
            </Button>
            <Button
              type="button"
              variant="primary"
              disabled={!editingSlot?.name.trim()}
              onClick={() => {
                if (editingSlot)
                  setSlots(prev =>
                    prev.some(r => r.id === editingSlot.id)
                      ? prev.map(r =>
                          r.id === editingSlot.id ? editingSlot : r,
                        )
                      : [...prev, editingSlot],
                  )
                setEditingSlot(null)
                notify('Operazione andata a buon fine')
              }}
            >
              Salva
            </Button>
          </div>
        }
      >
        {editingSlot ? (
          <div className={styles.formStack}>
            <FieldGroup
              label="Nome"
              required
            >
              <Input
                fullWidth
                value={editingSlot.name}
                onChange={e =>
                  setEditingSlot({ ...editingSlot, name: e.target.value })
                }
              />
            </FieldGroup>
            <ListInput
              label="Valori fissi"
              values={editingSlot.values}
              onChange={v => setEditingSlot({ ...editingSlot, values: v })}
              addLabel="Aggiungi valore"
            />
            <FieldGroup
              label="Webhook"
              helperText="In alternativa ai valori fissi, i valori possono essere restituiti da un webhook."
            >
              <Input
                fullWidth
                type="url"
                value={editingSlot.webhook}
                onChange={e =>
                  setEditingSlot({ ...editingSlot, webhook: e.target.value })
                }
              />
            </FieldGroup>
            <FieldGroup label="Validità (minuti)">
              <Input
                type="number"
                min={0}
                value={String(editingSlot.validity)}
                onChange={e =>
                  setEditingSlot({
                    ...editingSlot,
                    validity: Number(e.target.value),
                  })
                }
              />
            </FieldGroup>
          </div>
        ) : null}
      </Drawer>
    </Tabs.Root>
  )
}

/**
 * Funzioni: AIsuru macro functions, advanced (webhook) functions and
 * dynamic intents / slots.
 */
export function FunctionsDashboard() {
  return (
    <div className={styles.page}>
      <Section
        title="Funzioni"
        description="Abilita le funzioni AIsuru, crea funzioni avanzate e intenti dinamici."
        icon={
          <Bolt
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <Tabs.Root
        defaultValue="aisuru"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni funzioni"
          className={styles.tabsList}
        >
          <Tabs.Tab value="aisuru">
            <span className={styles.cellWithIcon}>
              <Sparkles
                size={14}
                aria-hidden
              />
              Funzioni AIsuru
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="advanced">Funzioni avanzate</Tabs.Tab>
          <Tabs.Tab value="intents">Intenti dinamici</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="aisuru"
          className={styles.tabPanel}
        >
          <AisuruFunctionsTab />
        </Tabs.Panel>
        <Tabs.Panel
          value="advanced"
          className={styles.tabPanel}
        >
          <AdvancedFunctionsTab />
        </Tabs.Panel>
        <Tabs.Panel
          value="intents"
          className={styles.tabPanel}
        >
          <IntentsTab />
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
