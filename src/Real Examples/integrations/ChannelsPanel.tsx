import React, { useState } from 'react'
import cx from 'classnames'
import { Copy, KeyRound, RefreshCw, Trash2, UserPlus } from 'lucide-react'
import { Divider } from '../../components/Divider'
import { Button } from '../../components/Button'
import { InfoHint } from '../../components/InfoHint'
import { Card } from '../../components/Card'
import { CopyField } from '../../components/CopyField'
import { Collapsible } from '../../components/Collapsible'
import { ConfirmDialog } from '../../components/ConfirmDialog'
import { FieldGroup } from '../../components/Field'
import { Input } from '../../components/Input'
import { Radio, RadioGroup } from '../../components/Radio'
import { Switch } from '../../components/Switch'
import { Tag, type TagColor } from '../../components/Tag'
import '../../components/Input/styles.css'
import { Callout } from '../../components/Callout'
import { useCopy, useNotify } from '../shared/useNotify'
import styles from '../realExamples.module.css'

type ChannelStatus = 'notConnected' | 'ok' | 'inactive' | 'error' | 'unknown'
type AccessMode = 'public' | 'password' | 'whitelist'

type ChannelParam = {
  id: string
  label: string
  sensitive?: boolean
  verifyToken?: boolean
  help?: string
}

type Channel = {
  type: string
  name: string
  glyph: string
  description: string
  status: ChannelStatus
  identity?: string
  params: ChannelParam[]
  instructions: string[]
}

const CHANNELS: Channel[] = [
  {
    type: 'telegram',
    name: 'Telegram',
    glyph: '✈️',
    description: 'Bot Telegram collegato all’agente',
    status: 'ok',
    identity: '@layout_storybook_bot',
    params: [
      {
        id: 'bot_token',
        label: 'Bot token',
        sensitive: true,
        help: 'Il token si ottiene creando un bot con @BotFather su Telegram',
      },
    ],
    instructions: [
      'Apri @BotFather su Telegram e invia /newbot.',
      'Scegli nome e username del bot.',
      'Copia il token che ti viene restituito e incollalo qui.',
    ],
  },
  {
    type: 'whatsapp',
    name: 'WhatsApp',
    glyph: '💬',
    description: 'WhatsApp Business Cloud API',
    status: 'notConnected',
    params: [
      { id: 'phone_number_id', label: 'Phone number ID' },
      { id: 'access_token', label: 'Access token', sensitive: true },
      { id: 'verify_token', label: 'Verify token', verifyToken: true },
    ],
    instructions: [
      'Crea un’app su Meta for Developers e aggiungi il prodotto WhatsApp.',
      'Copia Phone number ID e un token di accesso permanente.',
      'Configura il webhook con l’URL indicato e il Verify Token.',
    ],
  },
  {
    type: 'slack',
    name: 'Slack',
    glyph: '#️⃣',
    description: 'App Slack per il tuo workspace',
    status: 'inactive',
    identity: 'acme.slack.com',
    params: [
      { id: 'bot_token', label: 'Bot token', sensitive: true },
      { id: 'signing_secret', label: 'Signing secret', sensitive: true },
    ],
    instructions: [
      'Crea un’app Slack e abilita gli eventi.',
      'Installa l’app nel workspace e copia Bot token e Signing secret.',
    ],
  },
]

const STATUS: Record<ChannelStatus, { label: string; color: TagColor }> = {
  notConnected: { label: 'Non connesso', color: 'default' },
  ok: { label: 'Attivo', color: 'success' },
  inactive: { label: 'In pausa', color: 'warning' },
  error: { label: 'Errore', color: 'error' },
  unknown: { label: 'Non verificato', color: 'info' },
}

const ACCESS_LABEL: Record<AccessMode, string> = {
  public: 'Pubblico',
  password: 'Richiedi una password',
  whitelist: 'Lista consentiti',
}

const ACCESS_HELP: Record<AccessMode, string> = {
  public: 'Chiunque scriva al bot può avviare una conversazione.',
  password:
    'Il bot chiede una parola d’ordine prima di rispondere. Chi la conosce viene ricordato.',
  whitelist:
    'Solo gli utenti in lista possono parlare con l’agente, dopo aver inviato il loro codice personale.',
}

type WhitelistUser = { email: string; enrolled: boolean }

function AccessPanel({ agentPrivacy }: { agentPrivacy: string }) {
  const notify = useNotify()
  const copy = useCopy()
  const [mode, setMode] = useState<AccessMode>('public')
  const [source, setSource] = useState<'agent' | 'custom'>('agent')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [users, setUsers] = useState<WhitelistUser[]>([
    { email: 'mario.rossi@example.com', enrolled: true },
    { email: 'giulia.b@example.com', enrolled: false },
  ])
  const [code, setCode] = useState<string | null>(null)
  const [revokeOpen, setRevokeOpen] = useState(false)

  return (
    <section className={styles.formStack}>
      <h3 className={styles.sectionTitle}>Accesso</h3>
      <div>
        <p className={styles.channelsSubTitle}>
          Chi può parlare con l&apos;agente
        </p>
        <p className={styles.fieldHint}>
          Scegli chi può avviare una conversazione da questo canale. Chi non è
          autorizzato riceve una risposta del bot e non raggiunge l&apos;agente.
        </p>
      </div>
      <Callout severity="info">
        La visibilità dell&apos;agente è {agentPrivacy}.
      </Callout>
      {mode === 'public' && agentPrivacy !== 'Pubblico' ? (
        <Callout severity="warning">
          Questo canale resta raggiungibile da chiunque sul messaging, anche se
          l&apos;agente è privato sul web.
        </Callout>
      ) : null}
      <RadioGroup
        aria-label="Chi può avviare una conversazione"
        orientation="horizontal"
        value={mode}
        onValueChange={v => setMode(v as AccessMode)}
      >
        {(['public', 'password', 'whitelist'] as const).map(m => (
          <Radio
            key={m}
            variant="card"
            value={m}
            label={ACCESS_LABEL[m]}
            description={ACCESS_HELP[m]}
          />
        ))}
      </RadioGroup>

      {mode === 'password' ? (
        <div className={styles.formStack}>
          <FieldGroup label="Quale password deve chiedere il bot?">
            <RadioGroup
              value={source}
              onValueChange={v => setSource(v as 'agent' | 'custom')}
            >
              <Radio
                value="agent"
                label="Usa la password dell'agente"
              />
              <Radio
                value="custom"
                label="Usa una password diversa"
              />
            </RadioGroup>
          </FieldGroup>
          {source === 'agent' ? (
            <FieldGroup
              label="Password dell'agente"
              helperText="Il bot chiederà la stessa password usata per aprire questo agente."
            >
              <CopyField
                value="agent-secret"
                secret
                showCopyText
                onCopy={() => notify('Password copiata')}
              />
            </FieldGroup>
          ) : (
            <FieldGroup label="Password del canale">
              <Input
                fullWidth
                type="password"
                placeholder="Inserisci una parola d'ordine"
              />
            </FieldGroup>
          )}
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={() => notify('Password del canale salvata')}
          >
            Salva regole di accesso
          </Button>
        </div>
      ) : null}

      {mode === 'whitelist' ? (
        <div className={styles.formStack}>
          <FieldGroup
            label="Email utente"
            error={emailError}
            invalid={!!emailError}
          >
            <div className={styles.inputWithActions}>
              <Input
                fullWidth
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  setEmailError('')
                }}
                placeholder="nome@esempio.com"
              />
              <Button
                type="button"
                variant="outline"
                size="md"
                icon={
                  <UserPlus
                    size={16}
                    aria-hidden
                  />
                }
                onClick={() => {
                  if (!/^\S+@\S+\.\S+$/.test(email)) {
                    setEmailError('Inserisci un indirizzo email valido')
                    return
                  }
                  setUsers([...users, { email, enrolled: false }])
                  setEmail('')
                  setCode(Math.random().toString(36).slice(2, 8).toUpperCase())
                }}
              >
                Aggiungi utente
              </Button>
            </div>
          </FieldGroup>
          {users.length === 0 ? (
            <p className={styles.fieldHint}>Nessun utente nella lista</p>
          ) : (
            <ul className={styles.plainList}>
              {users.map(u => (
                <li
                  key={u.email}
                  className={styles.plainListItem}
                >
                  <span>{u.email}</span>
                  <Tag color={u.enrolled ? 'success' : 'default'}>
                    {u.enrolled ? 'Iscritto' : 'Codice non ancora usato'}
                  </Tag>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    shape="circle"
                    aria-label={`Rimuovi ${u.email}`}
                    icon={
                      <Trash2
                        size={16}
                        aria-hidden
                      />
                    }
                    onClick={() =>
                      setUsers(users.filter(x => x.email !== u.email))
                    }
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}

      {mode !== 'public' ? (
        <div className={styles.toolbarRow}>
          <span className={styles.fieldHint}>
            3 mittente/i riconosciuti su questo canale
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setRevokeOpen(true)}
          >
            Dimentica i mittenti riconosciuti
          </Button>
        </div>
      ) : null}

      <ConfirmDialog
        isOpen={code !== null}
        onClose={() => setCode(null)}
        onConfirm={() => {
          if (code) copy(code)
          setCode(null)
        }}
        title="Condividi questo codice una sola volta"
        message={
          <>
            Copia il codice e invialo all&apos;utente. Non lo rivedrai. Lo
            scriverà al bot per farsi riconoscere.
            <span className={styles.onceCode}>{code}</span>
          </>
        }
        confirmText="Copia codice"
        cancelText="L'ho copiato"
      />
      <ConfirmDialog
        isOpen={revokeOpen}
        onClose={() => setRevokeOpen(false)}
        onConfirm={() => {
          setRevokeOpen(false)
          notify('Dimenticati 3 mittente/i')
        }}
        title="Dimenticare i mittenti riconosciuti?"
        message="Al prossimo messaggio ognuno dovrà ripresentarsi con la password o il proprio codice."
        confirmText="Conferma"
        cancelText="Annulla"
      />
    </section>
  )
}

function ConfigPanel({ channel }: { channel: Channel }) {
  const notify = useNotify()
  const copy = useCopy()
  const connected = channel.status !== 'notConnected'
  const [active, setActive] = useState(channel.status !== 'inactive')
  const [values, setValues] = useState<Record<string, string>>({})
  const [replacing, setReplacing] = useState<Record<string, boolean>>({})
  const [removeOpen, setRemoveOpen] = useState(false)

  return (
    <Card
      variant="outlined"
      padding="lg"
    >
      <div className={styles.formStack}>
        <div className={styles.channelConfigHeader}>
          <span
            className={styles.channelLogo}
            aria-hidden
          >
            {channel.glyph}
          </span>
          <div className={styles.extensionText}>
            <span className={styles.extensionTitle}>
              {channel.name}
              <Tag color={STATUS[channel.status].color}>
                {STATUS[channel.status].label}
              </Tag>
            </span>
            {connected ? (
              <span className={styles.fieldHint}>
                Ultimo controllo: oggi, 10:42
              </span>
            ) : null}
          </div>
          {connected ? (
            <Switch
              checked={active}
              onCheckedChange={setActive}
              label="Attivo"
            />
          ) : null}
        </div>

        <Collapsible
          summary={`Come collegare ${channel.name}`}
          defaultOpen={!connected}
        >
          <ol className={styles.instructionsList}>
            {channel.instructions.map(i => (
              <li key={i}>{i}</li>
            ))}
          </ol>
        </Collapsible>

        <h3 className={styles.sectionTitle}>Connessione</h3>
        {channel.params.map(p => {
          const saved = connected && (p.sensitive || p.verifyToken)
          const editing = !saved || replacing[p.id]
          return (
            <FieldGroup
              key={p.id}
              label={
                <span className={styles.headerWithHint}>
                  {p.label}
                  {p.help ? (
                    <InfoHint
                      content={p.help}
                      ariaLabel={`Informazioni su ${p.label}`}
                    />
                  ) : null}
                </span>
              }
              helperText={
                p.verifyToken
                  ? 'Dopo averlo salvato qui, incollalo identico nella configurazione webhook su Meta for Developers'
                  : saved && !editing
                    ? 'Configurato — lascia vuoto per non modificare'
                    : undefined
              }
            >
              {editing ? (
                <div className={styles.inputWithActions}>
                  <Input
                    fullWidth
                    type={p.sensitive ? 'password' : 'text'}
                    value={values[p.id] ?? ''}
                    onChange={e =>
                      setValues({ ...values, [p.id]: e.target.value })
                    }
                  />
                  {p.verifyToken ? (
                    <>
                      <Button
                        type="button"
                        variant="outline"
                        size="md"
                        icon={
                          <KeyRound
                            size={16}
                            aria-hidden
                          />
                        }
                        title="Genera un Verify Token casuale e sicuro"
                        onClick={() =>
                          setValues({
                            ...values,
                            [p.id]: crypto.randomUUID().replace(/-/g, ''),
                          })
                        }
                      >
                        Genera
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="md"
                        shape="circle"
                        aria-label="Copia Verify Token"
                        disabled={!values[p.id]}
                        icon={
                          <Copy
                            size={16}
                            aria-hidden
                          />
                        }
                        onClick={() => copy(values[p.id] ?? '')}
                      />
                    </>
                  ) : null}
                  {saved ? (
                    <Button
                      type="button"
                      variant="ghost"
                      size="md"
                      onClick={() =>
                        setReplacing({ ...replacing, [p.id]: false })
                      }
                    >
                      Annulla
                    </Button>
                  ) : null}
                </div>
              ) : (
                <div className={styles.inputWithActions}>
                  <Input
                    fullWidth
                    readOnly
                    value="••••••••"
                    aria-label={p.label}
                  />
                  <Tag color="success">Salvato</Tag>
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={() => setReplacing({ ...replacing, [p.id]: true })}
                  >
                    Sostituisci
                  </Button>
                </div>
              )}
            </FieldGroup>
          )
        })}
        <div className={styles.toolbarRow}>
          <Button
            type="button"
            variant="primary"
            onClick={() =>
              notify(connected ? 'Modifiche salvate' : 'Canale connesso')
            }
          >
            {connected ? 'Salva modifiche' : 'Connetti canale'}
          </Button>
          {connected ? (
            <Button
              type="button"
              variant="outline"
              icon={
                <RefreshCw
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => notify('Bot raggiungibile')}
            >
              Verifica connessione
            </Button>
          ) : null}
        </div>

        {connected ? (
          <>
            <Divider className={styles.divider} />
            <AccessPanel agentPrivacy="Privato" />
            <Divider className={styles.divider} />
            <section className={styles.formStack}>
              <h3 className={styles.dangerTitle}>Rimuovi canale</h3>
              <p className={styles.fieldHint}>
                Scollega {channel.name} da questo agente. Il bot smetterà di
                rispondere finché non lo riconfiguri.
              </p>
              <Button
                type="button"
                variant="outline"
                danger
                size="sm"
                icon={
                  <Trash2
                    size={16}
                    aria-hidden
                  />
                }
                onClick={() => setRemoveOpen(true)}
              >
                Rimuovi {channel.name}…
              </Button>
            </section>
          </>
        ) : null}
      </div>
      <ConfirmDialog
        isOpen={removeOpen}
        onClose={() => setRemoveOpen(false)}
        onConfirm={() => {
          setRemoveOpen(false)
          notify('Canale rimosso')
        }}
        title="Rimuovere il canale?"
        message={`Rimuovere la configurazione di ${channel.name} da questo agente?`}
        confirmText="Rimuovi"
        cancelText="Annulla"
      />
    </Card>
  )
}

/**
 * Canali (ChannelsPage embedded): catalog list + config / access panel.
 */
export function ChannelsPanel() {
  const [selected, setSelected] = useState(CHANNELS[0]?.type ?? '')
  const channel = CHANNELS.find(c => c.type === selected)

  return (
    <div className={styles.formStackWide}>
      <div>
        <h2 className={styles.sectionHeading}>
          Canali <Tag size="sm">{CHANNELS.length}</Tag>
        </h2>
        <p className={styles.fieldHint}>
          Collega canali di messaggistica esterni al tuo agente: l&apos;agente
          risponderà da lì con le stesse istruzioni che usa in chat.
        </p>
      </div>
      <div className={styles.channelsLayout}>
        <div className={styles.entryList}>
          {CHANNELS.map(c => (
            <button
              key={c.type}
              type="button"
              aria-pressed={selected === c.type}
              className={cx(
                styles.channelCard,
                selected === c.type && styles.accessModeActive,
                c.status === 'inactive' && styles.lockedCard,
              )}
              onClick={() => setSelected(c.type)}
            >
              <span
                className={styles.channelLogo}
                aria-hidden
              >
                {c.glyph}
              </span>
              <span className={styles.extensionText}>
                <span className={styles.extensionTitle}>
                  {c.name}
                  <Tag
                    size="sm"
                    color={STATUS[c.status].color}
                  >
                    {STATUS[c.status].label}
                  </Tag>
                </span>
                <span className={styles.fieldHint}>{c.description}</span>
                {c.identity ? (
                  <span className={styles.monoCell}>{c.identity}</span>
                ) : null}
              </span>
            </button>
          ))}
          <p className={styles.fieldHint}>Altri canali arriveranno presto</p>
        </div>
        {channel ? (
          <ConfigPanel
            key={channel.type}
            channel={channel}
          />
        ) : (
          <p className={styles.tabPlaceholder}>
            Seleziona un canale da configurare
          </p>
        )}
      </div>
    </div>
  )
}
