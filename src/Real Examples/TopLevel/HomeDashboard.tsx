import React, { useMemo, useRef, useState } from 'react'
import { ArrowDown, Import, Plus, Search, Zap } from 'lucide-react'
import { Button } from '../../components/Button'
import { Drawer } from '../../components/Drawer'
import { FieldGroup } from '../../components/Field'
import { Input } from '../../components/Input'
import { Modal } from '../../components/Modal'
import { SelectBox } from '../../components/SelectBox'
import { Skeleton } from '../../components/Skeleton'
import { Tag } from '../../components/Tag'
import '../../components/Input/styles.css'
import { AgentSettingsPanel } from '../SettingsDashboard'
import { AgentCard, type Agent } from '../shared/AgentCard'
import { Callout } from '../../components/Callout'
import { useNotify } from '../shared/useNotify'
import { useShellNav } from '../shell/navigation'
import styles from '../realExamples.module.css'

const PAGE_SIZE = 6

const COVERS = [
  'linear-gradient(135deg, #7c5cff, #4fc3f7)',
  'linear-gradient(135deg, #ff8a65, #ffd54f)',
  'linear-gradient(135deg, #26a69a, #9ccc65)',
  'linear-gradient(135deg, #ec407a, #ab47bc)',
  'linear-gradient(135deg, #42a5f5, #26c6da)',
  'linear-gradient(135deg, #8d6e63, #ffb74d)',
]

const agent = (
  id: number,
  name: string,
  description: string,
  extra: Partial<Agent> = {},
): Agent => ({
  id: String(id),
  name,
  ownerUserName: 'demo',
  description,
  privacy: 'PUBLIC',
  exposed: true,
  categories: [],
  coverColor: COVERS[id % COVERS.length] ?? '#7c5cff',
  initials: name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase(),
  ...extra,
})

export const YOUR_AGENTS: Agent[] = [
  agent(1, 'Layout Storybook', 'Agente di test per storybook e layout UI.', {
    privacy: 'PRIVATE',
    categories: ['Demo', 'UI', 'Storybook'],
  }),
  agent(2, 'Supporto Clienti', 'FAQ, ticket e assistenza di primo livello.', {
    categories: ['Supporto', 'FAQ'],
  }),
  agent(
    3,
    'Onboarding HR',
    'Guida i nuovi assunti su policy e processi aziendali: ferie, permessi, benefit, sicurezza sul lavoro e strumenti interni. Risponde anche sulle procedure di rimborso spese e sulle convenzioni attive.',
    { privacy: 'SECRET', exposed: false, categories: ['HR'] },
  ),
  agent(4, 'Sales Copilot', 'Supporto commerciale su prodotti e listini.', {
    categories: ['Vendite', 'Prodotti', 'Listini', 'B2B'],
    blockedUntil: '01/11/2026',
  }),
  agent(5, 'Guida Museo', 'Visita guidata con avatar 3D e audio.', {
    categories: ['Cultura'],
    nsfw: false,
  }),
  agent(6, 'Assistente Legale', 'Prima consulenza su contratti standard.', {
    privacy: 'PRIVATE',
    exposed: false,
  }),
  agent(7, 'Quiz Storia', 'Allenamento per l’esame di storia moderna.', {
    categories: ['Scuola'],
  }),
  agent(8, 'Bot Interno IT', 'Reset password e richieste hardware.', {
    privacy: 'PRIVATE',
    exposed: false,
    categories: ['IT'],
  }),
]

const SHARED_AGENTS: Agent[] = [
  agent(11, 'Ricette della Nonna', 'Cucina tradizionale regione per regione.', {
    ownerUserName: 'mario.rossi',
    categories: ['Cucina'],
    invitation: {
      state: 'PENDING',
      type: 'GIVER',
      text: 'Ciao! Ti invito a gestire con me questo Agente.',
    },
  }),
  agent(12, 'Coach Running', 'Piani di allenamento personalizzati.', {
    ownerUserName: 'giulia.b',
    isReceiver: true,
    invitation: { state: 'ACCEPTED', type: 'RECEIVER', tag: 'Atleta' },
  }),
  agent(13, 'Help Desk Clinica', 'Prenotazioni e orari dei reparti.', {
    ownerUserName: 'clinica.sanmarco',
    privacy: 'PRIVATE',
    invitation: { state: 'ACCEPTED', type: 'GIVER' },
  }),
]

const COMMUNITY_AGENTS: Agent[] = [
  agent(21, 'Dante Alighieri', 'Parla con il Sommo Poeta della Commedia.', {
    ownerUserName: 'letteratura',
    categories: ['Cultura', 'Scuola'],
  }),
  agent(22, 'Marty McFly', 'Ritorno al futuro, risposte da protagonista.', {
    ownerUserName: 'cinema',
    categories: ['Cinema'],
  }),
  agent(23, 'Tutor Matematica', 'Esercizi guidati di algebra e geometria.', {
    ownerUserName: 'scuola.digitale',
    categories: ['Scuola'],
    requireLogin: true,
  }),
  agent(24, 'Sommelier', 'Abbinamenti cibo-vino e degustazioni.', {
    ownerUserName: 'enoteca',
    categories: ['Cucina'],
  }),
  agent(25, 'Guida Roma', 'Itinerari a piedi nel centro storico.', {
    ownerUserName: 'turismo',
    categories: ['Viaggi', 'Cultura'],
  }),
  agent(
    26,
    'Psicologo Junior',
    'Spazio di ascolto, non sostituisce un medico.',
    {
      ownerUserName: 'benessere',
      nsfw: false,
    },
  ),
  agent(27, 'Astro Bot', 'Curiosità sul sistema solare.', {
    ownerUserName: 'scienza',
    categories: ['Scienza'],
  }),
  agent(28, 'Chef Vegano', 'Ricette plant based veloci.', {
    ownerUserName: 'green',
    categories: ['Cucina'],
  }),
]

const ALL_CATEGORIES = Array.from(
  new Set(
    [...YOUR_AGENTS, ...SHARED_AGENTS, ...COMMUNITY_AGENTS].flatMap(
      a => a.categories,
    ),
  ),
).sort()

function matches(a: Agent, text: string, tags: string[]) {
  const q = text.trim().toLowerCase()
  const textOk =
    !q ||
    a.name.toLowerCase().includes(q) ||
    a.description.toLowerCase().includes(q)
  const tagsOk = tags.length === 0 || tags.some(t => a.categories.includes(t))
  return textOk && tagsOk
}

type HomeDashboardProps = {
  /** Demo toggles for states that depend on account limits / loading */
  canCreate?: boolean
  loading?: boolean
}

/**
 * Home (logged in): search + import ZIP + category filter, "Crea" tile,
 * your agents, shared with you (invitations), community; edit/create drawer.
 */
export function HomeDashboard({
  canCreate = true,
  loading = false,
}: HomeDashboardProps) {
  const notify = useNotify()
  const shellNav = useShellNav()
  const fileInput = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [yourCount, setYourCount] = useState(PAGE_SIZE)
  const [communityCount, setCommunityCount] = useState(PAGE_SIZE)
  const [shared, setShared] = useState(SHARED_AGENTS)
  const [drawer, setDrawer] = useState<
    { mode: 'EDIT'; agent: Agent } | { mode: 'CREATE' } | null
  >(null)
  const [importName, setImportName] = useState<string | null>(null)
  const [importFile, setImportFile] = useState('')
  const [showBanner, setShowBanner] = useState(true)

  const yours = useMemo(
    () => YOUR_AGENTS.filter(a => matches(a, search, tags)),
    [search, tags],
  )
  const sharedFiltered = useMemo(
    () => shared.filter(a => matches(a, search, tags)),
    [shared, search, tags],
  )
  const community = useMemo(
    () => COMMUNITY_AGENTS.filter(a => matches(a, search, tags)),
    [search, tags],
  )
  const pendingInvites = shared.filter(
    a => a.invitation?.state === 'PENDING',
  ).length

  const addTag = (tag: string | null) => {
    if (tag && !tags.includes(tag)) setTags([...tags, tag])
  }

  const cardHandlers = {
    onTagClick: (tag: string) => setTags([tag]),
    onEdit: (a: Agent) => setDrawer({ mode: 'EDIT', agent: a }),
    onManage: (a: Agent) =>
      shellNav
        ? shellNav.navigate('contents', a)
        : notify(`Apertura di ${a.name} › Contenuti`, 'info'),
    onOpen: (a: Agent) =>
      notify(`Apertura pagina pubblica di ${a.name}`, 'info'),
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.visuallyHidden}>I miei agenti</h1>
      {showBanner ? (
        <Callout
          severity="info"
          title="Novità: Canali di messaggistica"
          className={styles.homeBanner}
          action={
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowBanner(false)}
            >
              Chiudi
            </Button>
          }
        >
          Collega Telegram e WhatsApp ai tuoi Agenti dalla sezione Integrazioni.
        </Callout>
      ) : null}

      <div
        className={styles.homeFilters}
        role="search"
      >
        <div className={styles.searchField}>
          <span className={styles.searchIconWrap}>
            <Search aria-hidden />
          </span>
          <Input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Cerca tra gli Agenti"
            aria-label="Cerca tra gli Agenti"
          />
        </div>
        <div className={styles.conversationsSelect}>
          <SelectBox
            options={ALL_CATEGORIES.filter(c => !tags.includes(c)).map(c => ({
              value: c,
              label: c,
            }))}
            value={null}
            onChange={addTag}
            placeholder="Filtra una categoria"
            label="Categoria"
          />
        </div>
        <input
          ref={fileInput}
          type="file"
          accept=".zip"
          className={styles.visuallyHidden}
          tabIndex={-1}
          onChange={e => {
            const file = e.target.files?.[0]
            if (!file) return
            if (!file.name.endsWith('.zip')) {
              notify('Puoi caricare solo file ZIP', 'error')
              return
            }
            notify('Caricamento completato con successo')
            setImportFile(file.name)
            setImportName('')
            e.target.value = ''
          }}
        />
        <Button
          type="button"
          variant="outline"
          size="md"
          icon={
            <Import
              size={18}
              aria-hidden
            />
          }
          onClick={() => fileInput.current?.click()}
        >
          Importa
        </Button>
      </div>

      {tags.length > 0 ? (
        <div className={styles.chipRow}>
          {tags.map(t => (
            <Tag
              key={t}
              color="primary"
              closable
              closeLabel={`Rimuovi filtro ${t}`}
              onClose={() => setTags(tags.filter(x => x !== t))}
            >
              {t}
            </Tag>
          ))}
          <Button
            type="button"
            variant="link"
            size="sm"
            onClick={() => setTags([])}
          >
            Cancella filtri
          </Button>
        </div>
      ) : null}

      <div
        id="memori-list"
        aria-live="polite"
      >
        <div className={styles.agentGrid}>
          {canCreate ? (
            <button
              type="button"
              className={styles.createTile}
              onClick={() => setDrawer({ mode: 'CREATE' })}
            >
              <Plus
                size={32}
                aria-hidden
              />
              <span>CREA</span>
            </button>
          ) : (
            <div
              className={styles.createTile}
              aria-disabled="true"
            >
              <p className={styles.createTileReason}>
                Non hai abbastanza crediti per aggiungere un Agente. Richiesti:
                100.
              </p>
              <Plus
                size={32}
                aria-hidden
              />
              <span>CREA</span>
              <Button
                type="button"
                variant="primary"
                size="sm"
                icon={
                  <Zap
                    size={16}
                    aria-hidden
                  />
                }
              >
                Acquista crediti
              </Button>
            </div>
          )}
          {loading
            ? [0, 1, 2].map(i => (
                <Skeleton
                  key={i}
                  variant="rect"
                  height="16rem"
                />
              ))
            : yours.slice(0, yourCount).map(a => (
                <AgentCard
                  key={a.id}
                  agent={a}
                  variant="own"
                  {...cardHandlers}
                />
              ))}
        </div>
        {yourCount < yours.length ? (
          <div className={styles.loadMoreRow}>
            <Button
              type="button"
              variant="outline"
              icon={
                <ArrowDown
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => setYourCount(c => c + PAGE_SIZE)}
            >
              Espandi (altri {yours.length - yourCount})
            </Button>
          </div>
        ) : null}

        {sharedFiltered.length > 0 ? (
          <>
            <h2 className={styles.sectionHeading}>
              Condivisi con te
              {pendingInvites > 0 ? (
                <Tag
                  color="error"
                  size="sm"
                >
                  {pendingInvites} in attesa
                </Tag>
              ) : null}
            </h2>
            <div className={styles.agentGrid}>
              {sharedFiltered.map(a => (
                <AgentCard
                  key={a.id}
                  agent={a}
                  variant="shared"
                  {...cardHandlers}
                  onAcceptInvitation={acc => {
                    setShared(prev =>
                      prev.map(x =>
                        x.id === acc.id && x.invitation
                          ? {
                              ...x,
                              invitation: {
                                ...x.invitation,
                                state: 'ACCEPTED',
                              },
                            }
                          : x,
                      ),
                    )
                    notify('Invito accettato')
                  }}
                  onRejectInvitation={rej => {
                    setShared(prev => prev.filter(x => x.id !== rej.id))
                    notify('Invito rifiutato', 'info')
                  }}
                />
              ))}
            </div>
          </>
        ) : null}

        {community.length > 0 ? (
          <>
            <h2 className={styles.sectionHeading}>Dalla community</h2>
            <div className={styles.agentGrid}>
              {community.slice(0, communityCount).map(a => (
                <AgentCard
                  key={a.id}
                  agent={a}
                  variant="public"
                  {...cardHandlers}
                />
              ))}
            </div>
            {communityCount < community.length ? (
              <div className={styles.loadMoreRow}>
                <Button
                  type="button"
                  variant="outline"
                  icon={
                    <ArrowDown
                      size={16}
                      aria-hidden
                    />
                  }
                  onClick={() => setCommunityCount(c => c + PAGE_SIZE)}
                >
                  Espandi (altri {community.length - communityCount})
                </Button>
              </div>
            ) : null}
          </>
        ) : null}

        {yours.length + sharedFiltered.length + community.length === 0 ? (
          <p className={styles.tabPlaceholder}>
            Nessun Agente corrisponde alla ricerca.
          </p>
        ) : null}
      </div>

      <Modal
        open={importName !== null}
        onOpenChange={open => !open && setImportName(null)}
        title="Dai un nome al tuo Agente"
        description={importFile ? `File: ${importFile}` : undefined}
        size="sm"
        footer={
          <Button
            type="button"
            variant="primary"
            disabled={!importName?.trim()}
            onClick={() => {
              notify(`Importazione di "${importName}" avviata`, 'info')
              setImportName(null)
            }}
          >
            Importa
          </Button>
        }
      >
        <FieldGroup
          label="Nome dell'Agente"
          required
        >
          <Input
            fullWidth
            value={importName ?? ''}
            onChange={e => setImportName(e.target.value)}
            placeholder="Nome dell'Agente"
          />
        </FieldGroup>
      </Modal>

      <Drawer
        open={drawer !== null}
        onOpenChange={open => !open && setDrawer(null)}
        anchor="right"
        width="min(72rem, 96vw)"
        title={
          drawer?.mode === 'EDIT'
            ? `Modifica l'Agente · ${drawer.agent.name}`
            : 'Crea un nuovo Agente'
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
              onClick={() => {
                notify(
                  drawer?.mode === 'EDIT'
                    ? 'Il tuo Agente è stato aggiornato!'
                    : 'Agente creato!',
                )
                setDrawer(null)
              }}
            >
              {drawer?.mode === 'EDIT' ? 'Salva' : 'Crea'}
            </Button>
          </div>
        }
      >
        {drawer ? (
          <AgentSettingsPanel
            key={drawer.mode === 'EDIT' ? drawer.agent.id : 'create'}
            mode={drawer.mode}
          />
        ) : null}
      </Drawer>
    </div>
  )
}
