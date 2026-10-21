import React, { useMemo, useState } from 'react'
import cx from 'classnames'
import {
  Building2,
  ExternalLink,
  Info,
  LayoutDashboard,
  Pencil,
  Plug,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Trash2,
} from 'lucide-react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Collapsible } from '../components/Collapsible'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { Drawer } from '../components/Drawer'
import { Expandable } from '../components/Expandable'
import { FieldGroup } from '../components/Field'
import { Input } from '../components/Input'
import { Section } from '../components/Section'
import { SelectBox } from '../components/SelectBox'
import { Tag } from '../components/Tag'
import { Textarea } from '../components/Textarea'
import { Tooltip } from '../components/Tooltip'
import '../components/Input/styles.css'
import { Callout } from '../components/Callout'
import { useNotify } from './shared/useNotify'
import styles from './realExamples.module.css'

type Category = 'productivity' | 'data' | 'devops'

type McpSchema = {
  id: string
  name: string
  description: string
  category: Category
  aisuruOriginal?: boolean
  patentPending?: boolean
  params: { id: string; label: string; example?: string; secret?: boolean }[]
}

type ConnectedMcp = {
  id: string
  schemaId: string
  name: string
  description: string
  connected: boolean
  hasUpdate?: boolean
  dashboardUrl?: string
}

const CATEGORY_LABEL: Record<Category, string> = {
  productivity: 'Produttività',
  data: 'Dati',
  devops: 'DevOps',
}

const SCHEMAS: McpSchema[] = [
  {
    id: 'notion',
    name: 'Notion',
    description: 'Cerca pagine e database Notion collegati all’agente.',
    category: 'productivity',
    params: [{ id: 'token', label: 'Integration token', secret: true }],
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Invia messaggi e leggi canali Slack autorizzati.',
    category: 'productivity',
    params: [{ id: 'botToken', label: 'Bot token', secret: true }],
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    description: 'Esegui query in sola lettura sul database aziendale.',
    category: 'data',
    params: [
      {
        id: 'dsn',
        label: 'Connection string',
        example: 'postgres://user:pass@host:5432/db',
        secret: true,
      },
    ],
  },
  {
    id: 'memori-kb',
    name: 'Memori Knowledge Graph',
    description:
      'Grafo della conoscenza costruito automaticamente dai contenuti.',
    category: 'data',
    aisuruOriginal: true,
    patentPending: true,
    params: [],
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Apri issue, PR e consulta repository collegati.',
    category: 'devops',
    params: [{ id: 'pat', label: 'Personal access token', secret: true }],
  },
  {
    id: 'jira',
    name: 'Jira',
    description: 'Crea e aggiorna ticket Jira dal dialogo.',
    category: 'devops',
    params: [
      { id: 'site', label: 'Site URL', example: 'https://acme.atlassian.net' },
      { id: 'token', label: 'API token', secret: true },
    ],
  },
]

const CONNECTED: ConnectedMcp[] = [
  {
    id: 'c1',
    schemaId: 'notion',
    name: 'Notion – Wiki interna',
    description: 'Wiki di prodotto e procedure.',
    connected: true,
    hasUpdate: true,
    dashboardUrl: 'https://mcp.example.com/notion',
  },
  {
    id: 'c2',
    schemaId: 'github',
    name: 'GitHub – memori-ui',
    description: 'Repository della libreria UI.',
    connected: false,
  },
]

const CORPORATE = [
  {
    id: 'sp',
    name: 'SharePoint aziendale',
    description: 'Documenti del portale intranet.',
    connected: true,
  },
  {
    id: 'erp',
    name: 'ERP ordini',
    description: '',
    connected: false,
  },
]

type DrawerState =
  | { mode: 'create'; schema?: McpSchema }
  | { mode: 'edit'; mcp: ConnectedMcp }
  | null

/**
 * MCP: connected servers, corporate MCPs, catalog with search / category,
 * custom MCP creation and details drawer.
 */
export function McpDashboard() {
  const notify = useNotify()
  const [connected, setConnected] = useState(CONNECTED)
  const [corporate, setCorporate] = useState(CORPORATE)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string | null>(null)
  const [drawer, setDrawer] = useState<DrawerState>(null)
  const [info, setInfo] = useState<ConnectedMcp | null>(null)
  const [deleting, setDeleting] = useState<ConnectedMcp | null>(null)
  const [enablingCorporate, setEnablingCorporate] = useState<string | null>(
    null,
  )
  const [url, setUrl] = useState('')
  const [customJson, setCustomJson] = useState('')
  const [refreshing, setRefreshing] = useState(false)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return SCHEMAS.filter(
      s =>
        (!category || s.category === category) &&
        (!q ||
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)),
    )
  }, [search, category])

  const urlInvalid = url.length > 0 && !/\/(mcp|sse)$/.test(url)
  const jsonInvalid = (() => {
    if (!customJson.trim()) return ''
    try {
      const v = JSON.parse(customJson)
      return typeof v === 'object' && v && !Array.isArray(v)
        ? ''
        : 'I parametri personalizzati devono essere un oggetto JSON'
    } catch {
      return 'I parametri personalizzati devono essere in JSON valido'
    }
  })()

  const drawerSchema =
    drawer?.mode === 'create'
      ? drawer.schema
      : drawer?.mode === 'edit'
        ? SCHEMAS.find(s => s.id === drawer.mcp.schemaId)
        : undefined

  return (
    <div className={styles.page}>
      <Section
        title="MCP"
        description="Collega server Model Context Protocol per dare nuovi strumenti al tuo Agente."
        icon={
          <Plug
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <div className={styles.formStackWide}>
        <Callout
          severity="warning"
          title="Ricorda di aggiornare il prompt"
        >
          Dopo aver connesso un MCP, assicurati di aggiornare le istruzioni del
          tuo Agente per spiegare quando usarlo.
        </Callout>

        <section>
          <div className={styles.instructionsHeader}>
            <h2 className={styles.sectionHeading}>MCP Connessi</h2>
            <Tooltip content="Aggiorna tutti gli MCP connessi e sincronizza le funzioni con l'ultima configurazione.">
              <span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  loading={refreshing}
                  icon={
                    <RefreshCw
                      size={16}
                      aria-hidden
                    />
                  }
                  onClick={() => {
                    if (!connected.some(c => c.hasUpdate)) {
                      notify('Tutti gli MCP sono già aggiornati.', 'info')
                      return
                    }
                    setRefreshing(true)
                    window.setTimeout(() => {
                      setConnected(prev =>
                        prev.map(c => ({ ...c, hasUpdate: false })),
                      )
                      setRefreshing(false)
                      notify(
                        `Tutti i ${connected.length} MCP aggiornati con successo`,
                      )
                    }, 800)
                  }}
                >
                  {refreshing
                    ? `Aggiornamento 1/${connected.length}…`
                    : 'Aggiorna tutti gli MCP'}
                </Button>
              </span>
            </Tooltip>
          </div>
          <div className={styles.cardGrid}>
            {connected.map(mcp => (
              <Card
                key={mcp.id}
                variant="outlined"
                padding="md"
              >
                <div className={styles.formStack}>
                  <div className={styles.extensionRow}>
                    <span
                      className={styles.extensionIcon}
                      aria-hidden
                    >
                      <Plug size={20} />
                    </span>
                    <span className={styles.extensionText}>
                      <span className={styles.extensionTitle}>{mcp.name}</span>
                      <Tooltip
                        content={
                          mcp.connected
                            ? 'Connesso — questo MCP è attivo e pronto all’uso'
                            : 'Disconnesso — questo MCP non è attualmente disponibile'
                        }
                      >
                        <Badge
                          status={mcp.connected ? 'success' : 'default'}
                          text={mcp.connected ? 'Connesso' : 'Disconnesso'}
                        />
                      </Tooltip>
                    </span>
                  </div>
                  <p className={styles.fieldHint}>{mcp.description}</p>
                  <div className={styles.toolbarRow}>
                    {mcp.dashboardUrl ? (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        icon={
                          <LayoutDashboard
                            size={16}
                            aria-hidden
                          />
                        }
                      >
                        Dashboard
                      </Button>
                    ) : null}
                    {mcp.hasUpdate ? (
                      <Tooltip content="Esiste una nuova versione di questo MCP. Clicca per aggiornare.">
                        <Button
                          type="button"
                          variant="soft"
                          size="sm"
                          shape="circle"
                          aria-label="Aggiorna MCP"
                          icon={
                            <RefreshCw
                              size={16}
                              aria-hidden
                            />
                          }
                          onClick={() => {
                            setConnected(prev =>
                              prev.map(c =>
                                c.id === mcp.id
                                  ? { ...c, hasUpdate: false }
                                  : c,
                              ),
                            )
                            notify('MCP aggiornato con successo')
                          }}
                        />
                      </Tooltip>
                    ) : null}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      shape="circle"
                      aria-label="Mostra dettagli MCP"
                      title="Mostra dettagli MCP"
                      icon={
                        <Info
                          size={16}
                          aria-hidden
                        />
                      }
                      onClick={() => setInfo(mcp)}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      shape="circle"
                      aria-label="Modifica"
                      title="Modifica"
                      icon={
                        <Pencil
                          size={16}
                          aria-hidden
                        />
                      }
                      onClick={() => {
                        setUrl('https://mcp.example.com/mcp')
                        setCustomJson('')
                        setDrawer({ mode: 'edit', mcp })
                      }}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      shape="circle"
                      aria-label="Elimina"
                      title="Elimina"
                      icon={
                        <Trash2
                          size={16}
                          aria-hidden
                        />
                      }
                      onClick={() => setDeleting(mcp)}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className={styles.sectionHeading}>
            <Building2
              size={18}
              aria-hidden
            />
            MCP Aziendali
          </h2>
          <p className={styles.fieldHint}>
            Preconfigurati dalla tua organizzazione. Clicca per abilitarli su
            questo agente.
          </p>
          <div className={cx(styles.cardGrid, styles.sectionSpacer)}>
            {corporate.map(c => (
              <Card
                key={c.id}
                variant="outlined"
                padding="md"
              >
                <div className={styles.formStack}>
                  <span className={styles.extensionTitle}>
                    {c.name}
                    <Tag
                      size="sm"
                      color="info"
                    >
                      Aziendale
                    </Tag>
                    {!c.connected ? (
                      <Tag
                        size="sm"
                        color="warning"
                      >
                        Disconnesso
                      </Tag>
                    ) : null}
                  </span>
                  <p className={styles.fieldHint}>
                    {c.description ||
                      "MCP aziendale configurato dall'amministratore."}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={!c.connected}
                    onClick={() => setEnablingCorporate(c.id)}
                  >
                    Abilita
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className={styles.instructionsHeader}>
            <div>
              <h2 className={styles.sectionHeading}>MCP Disponibili</h2>
              <p className={styles.fieldHint}>
                Connetti nuove integrazioni al tuo agente.
              </p>
            </div>
            <a
              className={styles.urlLink}
              href="https://docs.aisuru.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentazione catalogo <ExternalLink size={12} />
            </a>
          </div>
          <div className={styles.homeFilters}>
            <div className={styles.searchField}>
              <span className={styles.searchIconWrap}>
                <Search aria-hidden />
              </span>
              <Input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Cerca un'integrazione..."
                aria-label="Cerca un'integrazione"
              />
            </div>
            <div className={styles.conversationsSelect}>
              <SelectBox
                options={[
                  { value: '', label: 'Tutte le categorie' },
                  ...Object.entries(CATEGORY_LABEL).map(([value, label]) => ({
                    value,
                    label,
                  })),
                ]}
                value={category ?? ''}
                onChange={v => setCategory(v || null)}
                placeholder="Filtra per categoria"
              />
            </div>
          </div>
          <div className={styles.cardGrid}>
            <button
              type="button"
              className={styles.createTile}
              onClick={() => {
                setUrl('')
                setCustomJson('')
                setDrawer({ mode: 'create' })
              }}
            >
              <Plus
                size={28}
                aria-hidden
              />
              <span>Aggiungi MCP Personalizzato</span>
              <span className={styles.createTileReason}>
                Crea un server MCP personalizzato con la tua configurazione e
                parametri.
              </span>
            </button>
            {filtered.map(schema => (
              <Card
                key={schema.id}
                variant="outlined"
                padding="md"
              >
                <div className={styles.formStack}>
                  <span className={styles.extensionTitle}>
                    {schema.name}
                    {schema.aisuruOriginal ? (
                      <Tooltip content="Originale AIsuru">
                        <ShieldCheck
                          size={16}
                          aria-label="Originale AIsuru"
                        />
                      </Tooltip>
                    ) : null}
                  </span>
                  <span className={styles.pillGroup}>
                    <Tag size="sm">{CATEGORY_LABEL[schema.category]}</Tag>
                    {schema.patentPending ? (
                      <Tag
                        size="sm"
                        color="warning"
                      >
                        🛡️ BREVETTO IN ATTESA
                      </Tag>
                    ) : null}
                  </span>
                  <Expandable
                    rows={2}
                    className={styles.fieldHint}
                    expandSymbol={() => 'Mostra di più'}
                    collapseSymbol={() => 'Mostra di meno'}
                  >
                    {schema.description}
                  </Expandable>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setUrl('')
                      setCustomJson('')
                      setDrawer({ mode: 'create', schema })
                    }}
                  >
                    Connetti
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          {filtered.length === 0 ? (
            <Callout title="Nessuna integrazione trovata">
              Prova a cambiare i filtri o la ricerca.
            </Callout>
          ) : null}
        </section>
      </div>

      <Drawer
        open={drawer !== null}
        onOpenChange={o => !o && setDrawer(null)}
        anchor="right"
        width="min(48rem, 96vw)"
        title={
          drawer?.mode === 'edit'
            ? 'Aggiorna MCP'
            : drawerSchema
              ? `Configura ${drawerSchema.name}`
              : 'Crea Nuovo MCP'
        }
        footer={
          <div className={styles.drawerFooter}>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setDrawer(null)}
            >
              Annulla
            </Button>
            <Button
              type="button"
              variant="primary"
              disabled={
                (!drawerSchema && (!url || urlInvalid)) || !!jsonInvalid
              }
              onClick={() => {
                if (drawer?.mode === 'create') {
                  setConnected(prev => [
                    ...prev,
                    {
                      id: String(Date.now()),
                      schemaId: drawerSchema?.id ?? 'custom',
                      name: drawerSchema?.name ?? 'MCP personalizzato',
                      description: drawerSchema?.description ?? '',
                      connected: true,
                    },
                  ])
                }
                notify(
                  drawer?.mode === 'edit'
                    ? 'MCP aggiornato con successo'
                    : 'MCP creato con successo',
                )
                setDrawer(null)
              }}
            >
              {drawer?.mode === 'edit' ? 'Aggiorna MCP' : 'Crea MCP'}
            </Button>
          </div>
        }
      >
        <div className={styles.formStack}>
          {!drawerSchema ? (
            <FieldGroup label="Tipo MCP">
              <SelectBox
                options={[
                  { value: 'http', label: 'Streamable HTTP' },
                  { value: 'sse', label: 'SSE' },
                ]}
                defaultValue="http"
                placeholder="Seleziona tipo MCP"
              />
            </FieldGroup>
          ) : null}
          <FieldGroup
            label="Nome"
            required
          >
            <Input
              fullWidth
              defaultValue={
                drawer?.mode === 'edit' ? drawer.mcp.name : drawerSchema?.name
              }
              placeholder="Inserisci un nome per il tuo MCP"
            />
          </FieldGroup>
          <FieldGroup label="Descrizione">
            <Textarea
              rows={2}
              placeholder="Descrivi per cosa verrà utilizzato questo MCP"
            />
          </FieldGroup>
          <FieldGroup label="Prompt">
            <Textarea
              rows={3}
              placeholder="Inserisci il prompt per il MCP"
            />
          </FieldGroup>
          {!drawerSchema ? (
            <>
              <FieldGroup
                label="URL"
                required
                helperText="L'URL del server MCP deve terminare con /mcp o /sse per essere valido"
                error="L'URL deve finire con /mcp o /sse"
                invalid={urlInvalid}
              >
                <Input
                  fullWidth
                  type="url"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="https://your-mcp-server.com"
                />
              </FieldGroup>
              <FieldGroup label="Token di autenticazione">
                <Input
                  fullWidth
                  type="password"
                  placeholder="Inserisci il token di autenticazione per il MCP"
                />
              </FieldGroup>
            </>
          ) : (
            drawerSchema.params.map(p => (
              <FieldGroup
                key={p.id}
                label={p.label}
                required
                helperText={p.example ? `Esempio: ${p.example}` : undefined}
              >
                <Input
                  fullWidth
                  type={p.secret ? 'password' : 'text'}
                  placeholder={`Inserisci ${p.label}`}
                />
              </FieldGroup>
            ))
          )}
          <Collapsible summary="Configurazione personalizzata MCP (opzionale)">
            <FieldGroup
              label="Parametri personalizzati"
              helperText="Puoi aggiungere parametri personalizzati in formato JSON. Questi verranno inviati al server MCP."
              error={jsonInvalid}
              invalid={!!jsonInvalid}
            >
              <Textarea
                rows={5}
                className={styles.codeTextarea}
                value={customJson}
                onChange={e => setCustomJson(e.target.value)}
                placeholder='{ "region": "eu" }'
                spellCheck={false}
              />
            </FieldGroup>
          </Collapsible>
        </div>
      </Drawer>

      <Drawer
        open={!!info}
        onOpenChange={o => !o && setInfo(null)}
        anchor="right"
        size="md"
        title="Dettagli MCP"
        description={info?.name}
      >
        {info ? (
          <dl className={styles.detailList}>
            <dt>Stato</dt>
            <dd>{info.connected ? 'Connesso' : 'Disconnesso'}</dd>
            <dt>Schema</dt>
            <dd>{info.schemaId}</dd>
            <dt>Funzioni</dt>
            <dd>search_pages, get_page, list_databases</dd>
            <dt>Versione</dt>
            <dd>{info.hasUpdate ? '1.2.0 (disponibile 1.3.0)' : '1.3.0'}</dd>
          </dl>
        ) : null}
      </Drawer>

      <ConfirmDialog
        isOpen={!!deleting}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          setConnected(prev => prev.filter(c => c.id !== deleting?.id))
          setDeleting(null)
          notify('Elemento eliminato')
        }}
        title="Elimina"
        message={`Sei sicuro di voler eliminare "${deleting?.name ?? ''}"?`}
        confirmText="Elimina"
        cancelText="Annulla"
      />
      <ConfirmDialog
        isOpen={!!enablingCorporate}
        onClose={() => setEnablingCorporate(null)}
        onConfirm={() => {
          const c = corporate.find(x => x.id === enablingCorporate)
          if (c) {
            setConnected(prev => [
              ...prev,
              {
                id: `corp-${c.id}`,
                schemaId: 'corporate',
                name: c.name,
                description: c.description,
                connected: true,
              },
            ])
            setCorporate(prev => prev.filter(x => x.id !== c.id))
          }
          setEnablingCorporate(null)
          notify('MCP aziendale abilitato con successo')
        }}
        title={`Abilitare ${corporate.find(c => c.id === enablingCorporate)?.name ?? ''}?`}
        message="Questo MCP usa la configurazione salvata dalla tua organizzazione. Non dovrai inserire credenziali."
        confirmText="Abilita"
        cancelText="Annulla"
      />
    </div>
  )
}
