import React, { useMemo, useState } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import {
  AppWindow,
  Code,
  Copy,
  ExternalLink,
  Globe,
  LayoutGrid,
  Link as LinkIcon,
  MessageSquare,
  Pencil,
  Trash2,
  UserRound,
} from 'lucide-react'
import { InfoHint } from '../components/InfoHint'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Checkbox } from '../components/Checkbox'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { Progress } from '../components/Progress'
import { Section } from '../components/Section'
import { Switch } from '../components/Switch'
import { Table } from '../components/Table'
import { Tabs } from '../components/Tabs'
import { Tag } from '../components/Tag'
import { Tooltip } from '../components/Tooltip'
import { ScormDownloadModal } from './AgentSettingsSections'
import { ChannelsPanel } from './integrations/ChannelsPanel'
import {
  EmbedDrawer,
  LayoutDrawer,
  type LayoutIntegration,
} from './integrations/LayoutDrawers'
import { Callout } from '../components/Callout'
import { useCopy, useNotify } from './shared/useNotify'
import styles from './realExamples.module.css'

const AGENT = {
  name: 'Layout Storybook',
  owner: 'demo',
  privacy: 'PRIVATE' as 'PUBLIC' | 'PRIVATE' | 'SECRET',
  nsfw: false,
  isOwner: true,
}
const PRIVATE_URL =
  'https://www.aisuru.com/it/private/9f2c1a7e/4b1d8e33-7d5a-4f0c-9a61-2f4f6a1b9c0d'
const PUBLIC_URL = 'https://www.aisuru.com/it/demo/Layout%20Storybook'
const TENANT_SCORM = { enabled: true, limit: 5, used: 2 }

const INITIAL_LAYOUTS: LayoutIntegration[] = [
  {
    id: 'l1',
    name: 'Sito istituzionale',
    layout: 'WEBSITE_ASSISTANT',
    isDefault: false,
    createdAt: '12/03/26, 10:24',
    updatedAt: '02/10/26, 16:02',
  },
  {
    id: 'l2',
    name: 'Pagina pubblica',
    layout: 'FULLPAGE',
    isDefault: true,
    createdAt: '05/01/26, 09:10',
    updatedAt: '20/10/26, 11:45',
  },
  {
    id: 'l3',
    name: 'Totem reception',
    layout: 'TOTEM',
    isDefault: false,
    createdAt: '18/06/26, 14:30',
    updatedAt: '18/06/26, 14:30',
  },
]

function UrlRow({ url }: { url: string }) {
  const copy = useCopy()
  return (
    <p className={styles.urlRow}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.urlLink}
      >
        {url}
      </a>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        shape="circle"
        aria-label="Copia"
        title="Copia"
        icon={
          <Copy
            size={16}
            aria-hidden
          />
        }
        onClick={() => copy(url)}
      />
    </p>
  )
}

function LandingExperienceTab() {
  const notify = useNotify()
  const copy = useCopy()
  const [exposed, setExposed] = useState(true)
  const [mobile, setMobile] = useState(false)
  const [layouts, setLayouts] = useState(INITIAL_LAYOUTS)
  const [editing, setEditing] = useState<{
    integration: LayoutIntegration | null
    avatar?: boolean
  } | null>(null)
  const [embedding, setEmbedding] = useState<LayoutIntegration | null>(null)
  const [deleting, setDeleting] = useState<LayoutIntegration | null>(null)

  const columns = useMemo<ColumnDef<LayoutIntegration>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Nome',
        minSize: 160,
        cell: ({ row }) => (
          <span className={styles.cellWithIcon}>
            {row.original.name}
            {row.original.isNew ? (
              <Tag
                size="sm"
                color="success"
              >
                Nuovo
              </Tag>
            ) : null}
          </span>
        ),
      },
      {
        accessorKey: 'layout',
        header: 'Layout',
        cell: ({ getValue }) => <Tag size="sm">{getValue() as string}</Tag>,
      },
      {
        accessorKey: 'isDefault',
        enableSorting: false,
        header: () => (
          <span className={styles.headerWithHint}>
            Default
            <InfoHint
              content="Impostando un layout di default, questo verrà usato nella sua pagina pubblica"
              ariaLabel="Informazioni su Default"
            />
          </span>
        ),
        size: 90,
        cell: ({ row }) => (
          <Checkbox
            checked={row.original.isDefault}
            label={
              <span className={styles.visuallyHidden}>
                Usa {row.original.name} come default
              </span>
            }
            onChange={checked =>
              setLayouts(prev =>
                prev.map(l => ({
                  ...l,
                  isDefault: l.id === row.original.id ? checked : false,
                })),
              )
            }
          />
        ),
      },
      {
        id: 'url',
        header: 'URL',
        size: 70,
        enableSorting: false,
        cell: ({ row }) => (
          <a
            href={exposed ? `${PUBLIC_URL}/${row.original.id}` : PRIVATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label={`Apri ${row.original.name}`}
            title="Apri"
          >
            <LinkIcon
              size={16}
              aria-hidden
            />
          </a>
        ),
      },
      { accessorKey: 'createdAt', header: 'Data di aggiunta', size: 150 },
      { accessorKey: 'updatedAt', header: 'Ultima modifica', size: 150 },
      {
        id: 'embed',
        header: 'Embed',
        size: 80,
        enableSorting: false,
        cell: ({ row }) => (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            shape="circle"
            aria-label={`Codice embed di ${row.original.name}`}
            title="Embed"
            icon={
              <Code
                size={16}
                aria-hidden
              />
            }
            onClick={() => setEmbedding(row.original)}
          />
        ),
      },
      {
        id: 'avatar',
        header: 'Avatar 3D',
        size: 150,
        enableSorting: false,
        cell: ({ row }) => (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              setEditing({ integration: row.original, avatar: true })
            }
          >
            Modifica avatar
          </Button>
        ),
      },
    ],
    [exposed],
  )

  return (
    <div className={styles.formStackWide}>
      <p className={styles.sectionIntro}>
        In questa sezione puoi decidere se mostrare &quot;
        {AGENT.name.toUpperCase()}&quot; in homepage, personalizzare il suo
        layout e ottenere il codice per inserirlo nel tuo sito.
      </p>

      <Card
        variant="outlined"
        title="Indirizzo web"
        description="Il tuo Agente può essere raggiunto a questi indirizzi:"
      >
        <div className={styles.formStack}>
          <UrlRow url={PRIVATE_URL} />
          {AGENT.privacy === 'SECRET' ? (
            <p className={styles.fieldHint}>
              Ricorda di dare la password a chi vuoi condividerlo
            </p>
          ) : null}
          {AGENT.privacy === 'PRIVATE' ? (
            <p className={styles.urlRow}>
              <span className={styles.fieldHint}>
                Ricorda di dare la password a chi vuoi condividerlo:
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                icon={
                  <Copy
                    size={16}
                    aria-hidden
                  />
                }
                onClick={() => copy('xK29-pLm8')}
              >
                Copia password
              </Button>
            </p>
          ) : null}

          {AGENT.privacy !== 'SECRET' ? (
            <div>
              <Switch
                checked={exposed}
                disabled={AGENT.nsfw}
                onCheckedChange={v => {
                  setExposed(v)
                  notify('Operazione andata a buon fine')
                }}
                label={`Mostra in homepage: ${exposed ? 'Visibile' : 'Non visibile'}`}
              />
              <p className={styles.fieldHint}>
                Se abilitato, sarà visualizzabile nell&apos;elenco in homepage e
                raggiungibile da tutti gli utenti.
              </p>
              {AGENT.nsfw ? (
                <p className={styles.textError}>
                  Non è possibile mostrare in homepage un Agente con contenuti
                  per adulti
                </p>
              ) : null}
              {exposed ? <UrlRow url={PUBLIC_URL} /> : null}
            </div>
          ) : null}

          <div>
            <Switch
              checked={mobile}
              onCheckedChange={setMobile}
              label={`Mostra in app: ${mobile ? 'Visibile' : 'Non visibile'}`}
            />
            <p className={styles.fieldHint}>
              Se abilitato, sarà visualizzabile nelle liste nell&apos;app
              mobile.
            </p>
          </div>
        </div>
      </Card>

      <h2 className={styles.sectionHeading}>Layout personalizzati</h2>
      <Table<LayoutIntegration>
        data={layouts}
        columns={columns}
        controlsAfterFilters={
          <div className={styles.toolbarRow}>
            <Button
              type="button"
              variant="outline"
              size="md"
              icon={
                <LayoutGrid
                  size={18}
                  aria-hidden
                />
              }
              onClick={() => setEditing({ integration: null })}
            >
              Aggiungi layout
            </Button>
            <Button
              type="button"
              variant="outline"
              size="md"
              icon={
                <UserRound
                  size={18}
                  aria-hidden
                />
              }
              onClick={() => setEditing({ integration: null, avatar: true })}
            >
              Aggiungi avatar
            </Button>
          </div>
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
            onClick: row => setEditing({ integration: row.original }),
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
            onClick: row => setDeleting(row.original),
          },
        ]}
        tableId="real-example-integrations-layouts"
      />

      {editing ? (
        <LayoutDrawer
          open
          integration={editing.integration}
          openAvatar={editing.avatar}
          privacy={AGENT.privacy}
          onClose={() => setEditing(null)}
          onSave={saved => {
            setLayouts(prev =>
              prev.some(l => l.id === saved.id)
                ? prev.map(l => (l.id === saved.id ? saved : l))
                : [...prev, saved],
            )
            notify(
              editing.integration
                ? 'Integrazione aggiornata correttamente'
                : 'Integrazione creata correttamente',
            )
            setEditing(null)
          }}
        />
      ) : null}
      <EmbedDrawer
        key={embedding?.id}
        integration={embedding}
        onClose={() => setEmbedding(null)}
      />
      <ConfirmDialog
        isOpen={!!deleting}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          setLayouts(prev => prev.filter(l => l.id !== deleting?.id))
          setDeleting(null)
          notify('Integrazione cancellata con successo')
        }}
        title="Cancellazione integrazione"
        message="Confermi di voler cancellare questa integrazione?"
        confirmText="Conferma"
        cancelText="Annulla"
      />
    </div>
  )
}

function ScormTab() {
  const notify = useNotify()
  const [enabled, setEnabled] = useState(false)
  const [used, setUsed] = useState(TENANT_SCORM.used)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [downloadOpen, setDownloadOpen] = useState(false)
  const limitReached = used >= TENANT_SCORM.limit && !enabled

  return (
    <div className={styles.formStackWide}>
      <Callout
        severity="info"
        title="Cos'è SCORM?"
      >
        SCORM (Sharable Content Object Reference Model) è uno standard
        internazionale che permette di impacchettare contenuti interattivi e
        distribuirli all&apos;interno di qualsiasi LMS (Learning Management
        System).
        <ul className={styles.inlineLinks}>
          <li>
            <a
              href="https://scorm.com/scorm-explained/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCORM spiegato <ExternalLink size={12} />
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Sharable_Content_Object_Reference_Model"
              target="_blank"
              rel="noopener noreferrer"
            >
              Riferimento SCORM (Wikipedia) <ExternalLink size={12} />
            </a>
          </li>
        </ul>
      </Callout>

      <Card
        variant="outlined"
        padding="lg"
      >
        <div className={styles.scormCard}>
          <div className={styles.formStack}>
            <span className={styles.uploadLabel}>
              Abilita SCORM per questo Agente
            </span>
            <Tooltip
              content="Hai raggiunto il limite di Agenti SCORM per il tuo piano."
              disabled={!limitReached}
            >
              <span>
                <Switch
                  checked={enabled}
                  disabled={enabled || limitReached}
                  onCheckedChange={v => v && setConfirmOpen(true)}
                  label={
                    <Tag color={enabled ? 'success' : 'default'}>
                      {enabled ? 'ATTIVO' : 'DISATTIVO'}
                    </Tag>
                  }
                />
              </span>
            </Tooltip>
            <p className={styles.fieldHint}>
              {enabled
                ? 'SCORM è attivo per questo Agente.'
                : "Attiva SCORM per abilitare l'esportazione di questo Agente."}
            </p>
          </div>

          <div className={styles.scormUsage}>
            <Progress
              variant="circle"
              value={(used / TENANT_SCORM.limit) * 100}
              size={88}
            />
            <span className={styles.uploadLabel}>
              Slot utilizzati: {used}/{TENANT_SCORM.limit}
            </span>
          </div>

          <div className={styles.formStack}>
            <span className={styles.fieldHint}>Versione: SCORM 1.2</span>
            <Button
              type="button"
              variant="primary"
              disabled={!enabled}
              onClick={() => setDownloadOpen(true)}
            >
              SCARICA PACCHETTO SCORM
            </Button>
            <span className={styles.fieldHint}>
              Hai usato {used} di {TENANT_SCORM.limit} Agenti SCORM disponibili
              nel tuo piano.
            </span>
          </div>
        </div>
      </Card>

      <ConfirmDialog
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => {
          setEnabled(true)
          setUsed(u => u + 1)
          setConfirmOpen(false)
          notify('SCORM abilitato con successo.')
        }}
        title="Abilitare SCORM?"
        message="Questa azione è permanente per questo Agente. Vuoi continuare?"
        confirmText="D'accordo"
        cancelText="Annulla"
      />
      <ScormDownloadModal
        open={downloadOpen}
        onOpenChange={setDownloadOpen}
        defaultCourseName={AGENT.name}
      />
    </div>
  )
}

/**
 * Integrazioni (share): landing experience (URLs, homepage/app visibility,
 * custom layouts with embed + 3D avatar), messaging channels and SCORM.
 */
export function IntegrationsDashboard() {
  const [tab, setTab] = useState('landing')

  return (
    <div className={styles.page}>
      <Section
        title="Integrazioni"
        description="Pubblica l’agente sul web, sui canali di messaggistica e come pacchetto SCORM."
        icon={
          <AppWindow
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <Tabs.Root
        value={tab}
        onValueChange={v => setTab(String(v))}
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni integrazioni"
          className={styles.tabsList}
        >
          <Tabs.Tab value="landing">
            <span className={styles.cellWithIcon}>
              <Globe
                size={16}
                aria-hidden
              />
              Landing experience
            </span>
          </Tabs.Tab>
          <Tabs.Tab
            value="channels"
            disabled={!AGENT.isOwner}
          >
            <Tooltip
              content="Solo il proprietario di questo agente può connettere i canali."
              disabled={AGENT.isOwner}
            >
              <span className={styles.cellWithIcon}>
                <MessageSquare
                  size={16}
                  aria-hidden
                />
                Canali
                <span className={styles.tabLabel}>Nuovo</span>
              </span>
            </Tooltip>
          </Tabs.Tab>
          <Tabs.Tab
            value="scorm"
            disabled={!TENANT_SCORM.enabled}
          >
            <span className={styles.cellWithIcon}>
              <Globe
                size={16}
                aria-hidden
              />
              SCORM
            </span>
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="landing"
          className={styles.tabPanel}
        >
          <LandingExperienceTab />
        </Tabs.Panel>
        <Tabs.Panel
          value="channels"
          className={styles.tabPanel}
        >
          <ChannelsPanel />
        </Tabs.Panel>
        <Tabs.Panel
          value="scorm"
          className={styles.tabPanel}
        >
          <ScormTab />
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
