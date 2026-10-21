import React, { useState } from 'react'
import {
  BarChart3,
  Box,
  CalendarClock,
  Database,
  Download,
  Globe,
  ImageIcon,
  Mail,
  Search,
  Sparkles,
  Trash2,
} from 'lucide-react'
import { Divider } from '../components/Divider'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Checkbox } from '../components/Checkbox'
import { FieldGroup } from '../components/Field'
import { FileDropzone } from '../components/FileDropzone'
import { Input } from '../components/Input'
import { Modal } from '../components/Modal'
import { Radio, RadioGroup } from '../components/Radio'
import { SelectBox } from '../components/SelectBox'
import { Switch } from '../components/Switch'
import { Tag } from '../components/Tag'
import { Textarea } from '../components/Textarea'
import '../components/Input/styles.css'
import { Callout } from '../components/Callout'
import { useNotify } from './shared/useNotify'
import styles from './realExamples.module.css'

function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{description}</p>
      <Divider className={styles.divider} />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Aspetto                                                             */
/* ------------------------------------------------------------------ */

type AgentAppearanceSettingsProps = {
  onOpenIntegrations?: () => void
}

/** “Aspetto”: cover, avatar and 3D avatar shortcut (AppearanceContent). */
export function AgentAppearanceSettings({
  onOpenIntegrations,
}: AgentAppearanceSettingsProps) {
  const notify = useNotify()
  const [hasCover, setHasCover] = useState(true)
  const [hasAvatar, setHasAvatar] = useState(false)

  return (
    <div className={styles.page}>
      <SectionHeader
        title="Aspetto"
        description="Gestisci l'aspetto del tuo Agente"
      />
      <div className={styles.formStack}>
        <section>
          <h2 className={styles.sectionTitle}>Copertina e avatar</h2>
          <p className={styles.fieldHint}>
            Carica un&apos;immagine di copertina e un avatar per il tuo Agente
          </p>
          <div className={styles.appearancePreview}>
            <div
              className={styles.appearanceCover}
              data-empty={!hasCover || undefined}
            >
              {!hasCover ? 'Nessuna copertina' : null}
            </div>
            <span
              className={styles.appearanceAvatar}
              data-empty={!hasAvatar || undefined}
            >
              {hasAvatar ? 'LS' : '?'}
            </span>
          </div>
          <div className={styles.twoColumns}>
            <div className={styles.uploadControl}>
              <span className={styles.uploadLabel}>Copertina</span>
              <div className={styles.toolbarRow}>
                <FileDropzone
                  variant="button"
                  accept="image/*"
                  buttonLabel="Carica"
                  onFilesSelected={() => {
                    setHasCover(true)
                    notify('Immagine caricata con successo')
                  }}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={!hasCover}
                  icon={
                    <Trash2
                      size={16}
                      aria-hidden
                    />
                  }
                  onClick={() => {
                    setHasCover(false)
                    notify('Immagine eliminata con successo')
                  }}
                >
                  Elimina
                </Button>
              </div>
            </div>
            <div className={styles.uploadControl}>
              <span className={styles.uploadLabel}>Avatar</span>
              <div className={styles.toolbarRow}>
                <FileDropzone
                  variant="button"
                  accept="image/*"
                  buttonLabel="Carica"
                  onFilesSelected={() => {
                    setHasAvatar(true)
                    notify('Immagine caricata con successo')
                  }}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={!hasAvatar}
                  icon={
                    <Trash2
                      size={16}
                      aria-hidden
                    />
                  }
                  onClick={() => {
                    setHasAvatar(false)
                    notify('Immagine eliminata con successo')
                  }}
                >
                  Elimina
                </Button>
              </div>
            </div>
          </div>
          <p className={styles.fieldHint}>
            Formati supportati: JPG, PNG, WEBP. Dimensione massima 5 MB.
          </p>
        </section>

        <Divider className={styles.divider} />

        <section>
          <h2 className={styles.sectionTitle}>Avatar 3D</h2>
          <Callout
            severity="info"
            action={
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={onOpenIntegrations}
              >
                Gestisci
              </Button>
            }
          >
            Per creare o modificare l&apos;avatar 3D, vai a Integrazioni e
            configura la pagina pubblica.
          </Callout>
        </section>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Estensioni                                                          */
/* ------------------------------------------------------------------ */

type Extension = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  unavailable?: boolean
}

const CORE_EXTENSIONS: Extension[] = [
  {
    id: 'fetchUrl',
    title: 'Navigazione Web',
    description:
      "Consenti all'Agente di navigare pagine web specifiche ed estrarre informazioni rilevanti.",
    icon: <Globe size={20} />,
  },
  {
    id: 'artifacts',
    title: 'Contenuti interattivi',
    description:
      'Permettono al tuo Agente di creare contenuti multimediali e interattivi durante la conversazione.',
    icon: <Sparkles size={20} />,
  },
  {
    id: 'dataAnalysis',
    title: 'Analisi dati',
    description:
      "Consenti all'Agente di analizzare dati e generare approfondimenti.",
    icon: <BarChart3 size={20} />,
  },
]

const OTHER_EXTENSIONS: Extension[] = [
  {
    id: 'perplexitySearch',
    title: 'Ricerca Perplexity',
    description:
      "La ricerca Perplexity utilizza l'IA per fornire risultati di ricerca accurati e pertinenti.",
    icon: <Search size={20} />,
  },
  {
    id: 'imageGenerator',
    title: 'Generatore di immagini',
    description: "Consenti all'Agente di generare immagini.",
    icon: <ImageIcon size={20} />,
  },
  {
    id: 'scheduler',
    title: 'Pianificatore',
    description:
      "Consenti all'Agente di pianificare ed eseguire attività ricorrenti in autonomia (es. report giornalieri, invii email programmati).",
    icon: <CalendarClock size={20} />,
    unavailable: true,
  },
  {
    id: 'persistence',
    title: 'Memoria persistente',
    description:
      "Consenti all'Agente di salvare ricordi, preferenze e dati strutturati in un database personale persistente tra le sessioni.",
    icon: <Database size={20} />,
  },
  {
    id: 'smtp',
    title: 'Invio Email',
    description: "Consenti all'Agente di inviare email automaticamente.",
    icon: <Mail size={20} />,
  },
]

function ExtensionRow({
  ext,
  enabled,
  onToggle,
  children,
}: {
  ext: Extension
  enabled: boolean
  onToggle: (v: boolean) => void
  children?: React.ReactNode
}) {
  return (
    <Card
      variant="outlined"
      padding="md"
      className={ext.unavailable ? styles.lockedCard : undefined}
    >
      <div className={styles.extensionRow}>
        <span
          className={styles.extensionIcon}
          aria-hidden
        >
          {ext.icon}
        </span>
        <div className={styles.extensionText}>
          <span className={styles.extensionTitle}>
            {ext.title}
            {ext.unavailable ? (
              <Tag size="sm">Non disponibile su questa istanza</Tag>
            ) : null}
          </span>
          <span className={styles.fieldHint}>{ext.description}</span>
        </div>
        <Switch
          checked={enabled}
          disabled={ext.unavailable}
          onCheckedChange={onToggle}
          label={<span className={styles.visuallyHidden}>{ext.title}</span>}
        />
      </div>
      {enabled && children ? (
        <div className={styles.extensionConfig}>{children}</div>
      ) : null}
    </Card>
  )
}

/** “Estensioni” (PresetContent): built-in tools with optional configuration. */
export function AgentExtensionsSettings() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    fetchUrl: true,
    artifacts: true,
    perplexitySearch: true,
  })
  const [perplexityMode, setPerplexityMode] = useState('inherit')
  const [smtpMode, setSmtpMode] = useState('inherit')

  const toggle = (id: string) => (v: boolean) =>
    setEnabled(prev => ({ ...prev, [id]: v }))

  const config: Record<string, React.ReactNode> = {
    perplexitySearch: (
      <div className={styles.formStack}>
        <FieldGroup label="Modalità Chiave API Perplexity">
          <RadioGroup
            value={perplexityMode}
            onValueChange={setPerplexityMode}
            orientation="horizontal"
          >
            <Radio
              value="inherit"
              label={
                <>
                  Eredita dal tenant <Tag color="success">Disponibile</Tag>
                </>
              }
            />
            <Radio
              value="custom"
              label="Chiave API personalizzata"
            />
          </RadioGroup>
        </FieldGroup>
        {perplexityMode === 'custom' ? (
          <FieldGroup
            label="API key"
            helperText="Clicca qui per ottenere la tua API key di Perplexity"
          >
            <Input
              type="password"
              fullWidth
              placeholder="Inserisci la tua API key di Perplexity"
            />
          </FieldGroup>
        ) : (
          <p className={styles.fieldHint}>
            Utilizzo chiave API del tenant: verrà utilizzata automaticamente.
          </p>
        )}
      </div>
    ),
    smtp: (
      <div className={styles.formStack}>
        <FieldGroup label="Modalità Configurazione SMTP">
          <RadioGroup
            value={smtpMode}
            onValueChange={setSmtpMode}
            orientation="horizontal"
          >
            <Radio
              value="inherit"
              label="Ereditato dal tenant"
            />
            <Radio
              value="custom"
              label="Configurazione SMTP personalizzata"
            />
          </RadioGroup>
        </FieldGroup>
        {smtpMode === 'custom' ? (
          <div className={styles.twoColumns}>
            <FieldGroup label="Server SMTP">
              <Input fullWidth />
            </FieldGroup>
            <FieldGroup label="Porta SMTP">
              <Input
                type="number"
                fullWidth
              />
            </FieldGroup>
            <FieldGroup label="Username SMTP">
              <Input fullWidth />
            </FieldGroup>
            <FieldGroup label="Password SMTP">
              <Input
                type="password"
                fullWidth
              />
            </FieldGroup>
            <FieldGroup label="Email Mittente">
              <Input
                type="email"
                fullWidth
              />
            </FieldGroup>
            <FieldGroup label="Nome Mittente">
              <Input fullWidth />
            </FieldGroup>
          </div>
        ) : null}
      </div>
    ),
  }

  return (
    <div className={styles.page}>
      <SectionHeader
        title="Estensioni"
        description="Scegli quali estensioni abilitare per questo Agente. Puoi modificare in seguito queste impostazioni nelle sezioni Funzioni e MCP"
      />
      <div className={styles.formStack}>
        <h2 className={styles.sectionTitle}>I più utilizzati:</h2>
        <div className={styles.entryList}>
          {CORE_EXTENSIONS.map(ext => (
            <ExtensionRow
              key={ext.id}
              ext={ext}
              enabled={!!enabled[ext.id]}
              onToggle={toggle(ext.id)}
            />
          ))}
        </div>
        <h2 className={styles.sectionTitle}>Altre estensioni</h2>
        <div className={styles.entryList}>
          {OTHER_EXTENSIONS.map(ext => (
            <ExtensionRow
              key={ext.id}
              ext={ext}
              enabled={!!enabled[ext.id]}
              onToggle={toggle(ext.id)}
            >
              {config[ext.id]}
            </ExtensionRow>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Estensioni aziendali (tenant MCP connectors)                        */
/* ------------------------------------------------------------------ */

const TENANT_CONNECTORS = [
  {
    id: 'sharepoint',
    name: 'SharePoint aziendale',
    description: 'Accesso in sola lettura ai documenti del portale intranet.',
  },
  {
    id: 'crm',
    name: 'CRM Clienti',
    description: 'Ricerca anagrafiche e storico ticket.',
  },
]

/** “Estensioni {tenant}” (TenantConnectorsContent). */
export function AgentTenantConnectorsSettings({
  tenantName = 'Memori',
}: {
  tenantName?: string
}) {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    sharepoint: true,
  })
  return (
    <div className={styles.page}>
      <SectionHeader
        title={`Estensioni ${tenantName}`}
        description="Abilita le estensioni aziendali già configurate dall'amministratore."
      />
      <div className={styles.entryList}>
        {TENANT_CONNECTORS.map(c => (
          <ExtensionRow
            key={c.id}
            ext={{
              id: c.id,
              title: c.name,
              description: c.description,
              icon: <Box size={20} />,
            }}
            enabled={!!enabled[c.id]}
            onToggle={v => setEnabled(prev => ({ ...prev, [c.id]: v }))}
          />
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Notifiche                                                           */
/* ------------------------------------------------------------------ */

/** “Notifiche” (NotificationsContent): chat notification preferences. */
export function AgentNotificationsSettings() {
  return (
    <div className={styles.page}>
      <SectionHeader
        title="Preferenze notifiche"
        description="Gestisci quanto frequentemente vuoi ricevere notifiche per questo Agente"
      />
      <div className={styles.formStack}>
        <FieldGroup
          label="Frequenza notifiche"
          required
        >
          <SelectBox
            options={[
              { value: 'NONE', label: 'Nessuna' },
              { value: 'HOURLY', label: 'Ogni ora' },
              { value: 'DAILY', label: 'Giornaliera' },
              { value: 'WEEKLY', label: 'Settimanale' },
            ]}
            defaultValue="DAILY"
          />
        </FieldGroup>
        <FieldGroup
          label="Numero minimo di messaggi"
          helperText="Vincolo sul numero minimo di messaggi nella conversazione prima di ricevere una notifica"
        >
          <SelectBox
            options={[
              { value: '0', label: 'Nessun vincolo' },
              { value: '2', label: '2' },
              { value: '3', label: '3' },
              { value: '5', label: '5' },
              { value: '10', label: '10' },
            ]}
            defaultValue="0"
          />
        </FieldGroup>
        <div>
          <Checkbox label="Applica a tutti gli Agenti" />
          <p className={styles.fieldHint}>
            Se selezionato, queste preferenze verranno usate per tutti i tuoi
            Agenti
          </p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Gestisci (export / transfer / delete)                               */
/* ------------------------------------------------------------------ */

type AgentManageSettingsProps = {
  agentName?: string
  scormEnabled?: boolean
}

/** “Gestisci” (Manage): export, transfer ownership, delete. */
export function AgentManageSettings({
  agentName = 'Layout Storybook',
  scormEnabled = true,
}: AgentManageSettingsProps) {
  const notify = useNotify()
  const [transferAck, setTransferAck] = useState(false)
  const [deleteAck, setDeleteAck] = useState(false)
  const [transferOpen, setTransferOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [scormOpen, setScormOpen] = useState(false)
  const [deleteName, setDeleteName] = useState('')
  const [transferUser, setTransferUser] = useState('')

  return (
    <div className={styles.page}>
      <SectionHeader
        title="Gestisci il tuo Agente"
        description="Decidi se trasferire o eliminare questo Agente"
      />
      <div className={styles.formStack}>
        <Card
          variant="outlined"
          title="Esporta questo Agente"
          description="Backup completo dell'Agente da reimportare in AIsuru."
        >
          <div className={styles.toolbarRow}>
            <Button
              type="button"
              variant="outline"
              size="sm"
              icon={
                <Download
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => notify('Esportazione avviata')}
            >
              ZIP (Agente)
            </Button>
            {scormEnabled ? (
              <Button
                type="button"
                variant="outline"
                size="sm"
                icon={
                  <Download
                    size={16}
                    aria-hidden
                  />
                }
                onClick={() => setScormOpen(true)}
              >
                SCORM
              </Button>
            ) : null}
          </div>
        </Card>

        <h2 className={styles.dangerTitle}>Zona pericolosa</h2>
        <p className={styles.fieldHint}>
          Queste azioni sono irreversibili. Leggi attentamente gli avvisi prima
          di procedere.
        </p>

        <Card
          variant="outlined"
          className={styles.dangerCard}
          title="Trasferisci la proprietà di questo Agente"
          description="ATTENZIONE: una volta trasferito, non sarà più accessibile da questo account"
        >
          <div className={styles.formStack}>
            <p className={styles.fieldHint}>
              Nel passaggio successivo dovrai confermare i dettagli del
              trasferimento.
            </p>
            <Checkbox
              checked={transferAck}
              onChange={setTransferAck}
              label="Confermo di aver capito che il trasferimento è permanente."
            />
            <Button
              type="button"
              variant="outline"
              danger
              size="sm"
              disabled={!transferAck}
              onClick={() => setTransferOpen(true)}
            >
              Trasferisci
            </Button>
          </div>
        </Card>

        <Card
          variant="outlined"
          className={styles.dangerCard}
          title="Elimina questo Agente"
          description="ATTENZIONE: una volta eliminato, non sarà più recuperabile"
        >
          <div className={styles.formStack}>
            <p className={styles.fieldHint}>
              Suggerimento: esporta l&apos;Agente prima di eliminarlo se
              potresti averne bisogno come backup. Nel passaggio successivo
              dovrai digitare il nome esatto dell&apos;Agente.
            </p>
            <Checkbox
              checked={deleteAck}
              onChange={setDeleteAck}
              label="Confermo di aver capito che l'eliminazione è permanente e non annullabile."
            />
            <Button
              type="button"
              variant="danger"
              size="sm"
              disabled={!deleteAck}
              icon={
                <Trash2
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => setDeleteOpen(true)}
            >
              Elimina
            </Button>
          </div>
        </Card>
      </div>

      <Modal
        open={transferOpen}
        onOpenChange={setTransferOpen}
        title="Trasferisci la proprietà di questo Agente"
        footer={
          <>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setTransferOpen(false)}
            >
              Annulla
            </Button>
            <Button
              type="button"
              variant="danger"
              disabled={!transferUser.trim()}
              onClick={() => {
                setTransferOpen(false)
                notify('Agente trasferito')
              }}
            >
              Trasferisci
            </Button>
          </>
        }
      >
        <FieldGroup
          label="Nuovo proprietario"
          helperText="Inserisci username o email dell'utente che riceverà l'Agente."
        >
          <Input
            fullWidth
            value={transferUser}
            onChange={e => setTransferUser(e.target.value)}
          />
        </FieldGroup>
      </Modal>

      <Modal
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title="Elimina questo Agente"
        footer={
          <>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setDeleteOpen(false)}
            >
              Annulla
            </Button>
            <Button
              type="button"
              variant="danger"
              disabled={deleteName !== agentName}
              onClick={() => {
                setDeleteOpen(false)
                notify('Agente eliminato')
              }}
            >
              Elimina
            </Button>
          </>
        }
      >
        <FieldGroup label={`Digita "${agentName}" per confermare`}>
          <Input
            fullWidth
            value={deleteName}
            onChange={e => setDeleteName(e.target.value)}
          />
        </FieldGroup>
      </Modal>

      <ScormDownloadModal
        open={scormOpen}
        onOpenChange={setScormOpen}
        defaultCourseName={agentName}
      />
    </div>
  )
}

/** “Esporta come SCORM” dialog, shared by Integrazioni and Gestisci. */
export function ScormDownloadModal({
  open,
  onOpenChange,
  defaultCourseName,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultCourseName: string
}) {
  const notify = useNotify()
  const [courseName, setCourseName] = useState(defaultCourseName)
  const [js, setJs] = useState('')
  const [error, setError] = useState('')

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Esporta come SCORM"
      description="Configura il pacchetto prima del download. Verrà generato un pacchetto SCORM 1.2."
      footer={
        <>
          <Button
            type="button"
            variant="ghost"
            onClick={() => onOpenChange(false)}
          >
            Annulla
          </Button>
          <Button
            type="button"
            variant="primary"
            icon={
              <Download
                size={16}
                aria-hidden
              />
            }
            onClick={() => {
              if (!courseName.trim()) {
                setError('Il nome corso è obbligatorio.')
                return
              }
              onOpenChange(false)
              notify('Pacchetto SCORM scaricato con successo.')
            }}
          >
            Scarica pacchetto SCORM
          </Button>
        </>
      }
    >
      <div className={styles.formStack}>
        <FieldGroup
          label="Nome corso"
          required
          error={error}
          invalid={!!error}
        >
          <Input
            fullWidth
            value={courseName}
            onChange={e => {
              setCourseName(e.target.value)
              setError('')
            }}
            placeholder="Inserisci il nome del corso"
          />
        </FieldGroup>
        <FieldGroup
          label="Javascript personalizzato (opzionale)"
          helperText="Usa questo campo per personalizzare l'aspetto o il comportamento del pacchetto nel tuo LMS. Il codice verrà iniettato nell'HTML del pacchetto."
        >
          <Textarea
            value={js}
            onChange={e => setJs(e.target.value)}
            rows={6}
            className={styles.codeTextarea}
            placeholder="// Javascript opzionale eseguito nel pacchetto SCORM"
            spellCheck={false}
          />
        </FieldGroup>
      </div>
    </Modal>
  )
}
