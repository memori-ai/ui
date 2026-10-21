import React, { useState } from 'react'
import {
  Copy,
  Download,
  Maximize2,
  Plus,
  RotateCcw,
  Trash2,
  Upload,
} from 'lucide-react'
import { Button } from '../../components/Button'
import { CodeBlock } from '../../components/CodeBlock'
import { Card } from '../../components/Card'
import { Collapsible } from '../../components/Collapsible'
import { ConfirmDialog } from '../../components/ConfirmDialog'
import { Drawer } from '../../components/Drawer'
import { FieldGroup } from '../../components/Field'
import { Input } from '../../components/Input'
import { Radio, RadioGroup } from '../../components/Radio'
import { SelectBox } from '../../components/SelectBox'
import { Switch } from '../../components/Switch'
import { Textarea } from '../../components/Textarea'
import '../../components/Input/styles.css'
import { Callout } from '../../components/Callout'
import { useCopy, useNotify } from '../shared/useNotify'
import styles from '../realExamples.module.css'

export const LAYOUTS = [
  'FULLPAGE',
  'TOTEM',
  'CHAT',
  'WEBSITE_ASSISTANT',
  'ZOOMED_FULL_BODY',
  'HIDDEN_CHAT',
] as const
export type LayoutName = (typeof LAYOUTS)[number]

export type LayoutIntegration = {
  id: string
  name: string
  layout: LayoutName
  isDefault: boolean
  createdAt: string
  updatedAt: string
  isNew?: boolean
}

const PRIVATE_PASSWORD = 'xK29-pLm8'

function PreviewBox({ layout }: { layout: LayoutName }) {
  return (
    <div
      className={styles.layoutPreview}
      data-layout={layout}
      aria-label={`Anteprima layout ${layout}`}
      role="img"
    >
      <div className={styles.layoutPreviewAvatar} />
      <div className={styles.layoutPreviewChat}>
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

function SwitchRow({
  label,
  help,
  defaultChecked,
}: {
  label: string
  help?: string
  defaultChecked?: boolean
}) {
  return (
    <div>
      <Switch
        defaultChecked={defaultChecked}
        label={label}
      />
      {help ? <p className={styles.fieldHint}>{help}</p> : null}
    </div>
  )
}

function EmbedSnippet({ code, filename }: { code: string; filename: string }) {
  const notify = useNotify()
  return (
    <div className={styles.formStack}>
      <CodeBlock
        language="HTML"
        code={code}
        onCopy={() => notify('Copiato!')}
      />
      <div className={styles.toolbarRow}>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          icon={
            <Download
              size={16}
              aria-hidden
            />
          }
          onClick={() => notify(`${filename} scaricato`)}
        >
          Download
        </Button>
      </div>
    </div>
  )
}

const embedSnippet = (
  layout: string,
) => `<script src="https://cdn.jsdelivr.net/npm/@memori.ai/memori-webcomponent/dist/memori-webcomponent.js"></script>

<memori-client
  ownerUserName="demo"
  memoriName="Layout Storybook"
  tenantID="www.aisuru.com"
  layout="${layout}"
  uiLang="IT"
  spokenLang="IT"
  showShare="true"
  showSettings="true"
  enableAudio="true"
></memori-client>`

type PiiRule = {
  id: string
  label: string
  pattern: string
  it: string
  en: string
}

const DEFAULT_PII_RULES: PiiRule[] = [
  {
    id: 'email',
    label: 'Indirizzo email',
    pattern: '[\\w.+-]+@[\\w-]+\\.[\\w.]+',
    it: 'Non condividere indirizzi email.',
    en: 'Do not share email addresses.',
  },
  {
    id: 'cf',
    label: 'Codice fiscale',
    pattern: '[A-Z]{6}\\d{2}[A-Z]\\d{2}[A-Z]\\d{3}[A-Z]',
    it: 'Non condividere il codice fiscale.',
    en: 'Do not share tax codes.',
  },
]

function PiiSection() {
  const [enabled, setEnabled] = useState(false)
  const [rules, setRules] = useState<PiiRule[]>(DEFAULT_PII_RULES)
  const [resetOpen, setResetOpen] = useState(false)

  const update = (id: string, patch: Partial<PiiRule>) =>
    setRules(rules.map(r => (r.id === id ? { ...r, ...patch } : r)))

  const isValid = (pattern: string) => {
    try {
      new RegExp(pattern)
      return true
    } catch {
      return false
    }
  }

  return (
    <div className={styles.formStack}>
      <div>
        <Switch
          checked={enabled}
          onCheckedChange={setEnabled}
          label="Abilita rilevamento PII"
        />
        <p className={styles.fieldHint}>
          Blocca i messaggi che contengono dati personali o sensibili (email,
          codice fiscale, ecc.) prima dell&apos;invio.
        </p>
      </div>
      {enabled ? (
        <>
          <h4 className={styles.sectionTitle}>
            Messaggio di errore predefinito
          </h4>
          <div className={styles.twoColumns}>
            <FieldGroup label="Messaggio di errore (italiano)">
              <Input
                fullWidth
                defaultValue="Il messaggio contiene dati personali o sensibili."
              />
            </FieldGroup>
            <FieldGroup label="Messaggio di errore (inglese)">
              <Input
                fullWidth
                defaultValue="The message contains personal or sensitive data."
              />
            </FieldGroup>
          </div>
          <h4 className={styles.sectionTitle}>Regole di rilevamento</h4>
          {rules.length === 0 ? (
            <Callout title="Nessuna regola">
              Aggiungi regole per rilevare e bloccare contenuti sensibili. Ogni
              regola usa un pattern regex e mostra un messaggio dedicato.
            </Callout>
          ) : (
            rules.map(rule => (
              <Card
                key={rule.id}
                variant="outlined"
                padding="md"
              >
                <div className={styles.formStack}>
                  <div className={styles.twoColumns}>
                    <FieldGroup label="Etichetta">
                      <Input
                        fullWidth
                        value={rule.label}
                        placeholder="es. Indirizzo email"
                        onChange={e =>
                          update(rule.id, { label: e.target.value })
                        }
                      />
                    </FieldGroup>
                    <FieldGroup
                      label="Pattern regex"
                      helperText="Regex JavaScript"
                      error="Pattern regex non valido"
                      invalid={!isValid(rule.pattern)}
                    >
                      <Input
                        fullWidth
                        className={styles.monoCell}
                        value={rule.pattern}
                        onChange={e =>
                          update(rule.id, { pattern: e.target.value })
                        }
                      />
                    </FieldGroup>
                    <FieldGroup label="Messaggio in caso di corrispondenza (italiano)">
                      <Input
                        fullWidth
                        value={rule.it}
                        onChange={e => update(rule.id, { it: e.target.value })}
                      />
                    </FieldGroup>
                    <FieldGroup label="Messaggio in caso di corrispondenza (inglese)">
                      <Input
                        fullWidth
                        value={rule.en}
                        onChange={e => update(rule.id, { en: e.target.value })}
                      />
                    </FieldGroup>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    danger
                    icon={
                      <Trash2
                        size={16}
                        aria-hidden
                      />
                    }
                    onClick={() =>
                      setRules(rules.filter(r => r.id !== rule.id))
                    }
                  >
                    Elimina
                  </Button>
                </div>
              </Card>
            ))
          )}
          <div className={styles.toolbarRow}>
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
                setRules([
                  ...rules,
                  {
                    id: String(Date.now()),
                    label: 'Nuova regola',
                    pattern: '',
                    it: '',
                    en: '',
                  },
                ])
              }
            >
              {rules.length === 0
                ? 'Aggiungi la prima regola'
                : 'Aggiungi regola'}
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              icon={
                <RotateCcw
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => setResetOpen(true)}
            >
              Ripristina regole predefinite
            </Button>
          </div>
        </>
      ) : null}
      <ConfirmDialog
        isOpen={resetOpen}
        onClose={() => setResetOpen(false)}
        onConfirm={() => {
          setRules(DEFAULT_PII_RULES)
          setResetOpen(false)
        }}
        title="Ripristinare le regole PII?"
        message="Tutte le regole saranno sostituite con il set predefinito. Questa azione non può essere annullata."
        confirmText="Conferma"
        cancelText="Annulla"
      />
    </div>
  )
}

type LayoutDrawerProps = {
  integration: LayoutIntegration | null
  open: boolean
  privacy: 'PUBLIC' | 'PRIVATE' | 'SECRET'
  openAvatar?: boolean
  onClose: () => void
  onSave: (integration: LayoutIntegration) => void
}

/** “Gestione layout” (WebIntegrationPanel). */
export function LayoutDrawer({
  integration,
  open,
  privacy,
  openAvatar,
  onClose,
  onSave,
}: LayoutDrawerProps) {
  const copy = useCopy()
  const [name, setName] = useState(integration?.name ?? '')
  const [layout, setLayout] = useState<LayoutName>(
    integration?.layout ?? 'FULLPAGE',
  )
  const [theme, setTheme] = useState('light')
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <Drawer
      open={open}
      onOpenChange={o => !o && onClose()}
      anchor="right"
      width="min(76rem, 96vw)"
      title="Gestione layout"
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
            disabled={!name.trim()}
            onClick={() =>
              onSave({
                id: integration?.id ?? String(Date.now()),
                name,
                layout,
                isDefault: integration?.isDefault ?? false,
                createdAt: integration?.createdAt ?? 'oggi',
                updatedAt: 'oggi',
                isNew: !integration,
              })
            }
          >
            Salva
          </Button>
        </div>
      }
    >
      <div className={styles.layoutEditor}>
        <div className={styles.formStack}>
          <div>
            <h3 className={styles.sectionTitle}>Opzioni</h3>
            <p className={styles.fieldHint}>
              Lascia vuoti questi campi per la configurazione di default, o
              personalizza gli stili del tuo widget personale.
            </p>
          </div>
          <FieldGroup
            label="Nome"
            required
          >
            <Input
              fullWidth
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FieldGroup>
          <FieldGroup label="Layout">
            <SelectBox
              options={LAYOUTS.map(l => ({ value: l, label: l }))}
              value={layout}
              onChange={v => v && setLayout(v as LayoutName)}
            />
          </FieldGroup>

          {openAvatar || layout === 'TOTEM' || layout === 'ZOOMED_FULL_BODY' ? (
            <Card
              variant="outlined"
              title="Avatar 3D"
              description="Scegli un avatar Ready Player Me o carica un file .glb."
            >
              <div className={styles.toolbarRow}>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                >
                  Crea avatar
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  icon={
                    <Upload
                      size={16}
                      aria-hidden
                    />
                  }
                >
                  Carica .glb
                </Button>
              </div>
            </Card>
          ) : null}

          <FieldGroup
            label="Sfondo generale"
            helperText="Scegli un'immagine con dimensioni e risoluzione sufficienti per essere a tutto schermo."
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
              icon={
                <Upload
                  size={16}
                  aria-hidden
                />
              }
            >
              Carica un&apos;immagine
            </Button>
          </FieldGroup>
          <div className={styles.switchList}>
            <SwitchRow label="Sfondo sfocato" />
            <SwitchRow
              label="Abilita audio"
              defaultChecked
            />
            <SwitchRow label="Mostra il ragionamento" />
            <SwitchRow label="Mostra consumi per messaggio" />
            <SwitchRow
              label="Mostra indicatore per contenuti automaticamente generati da IA"
              defaultChecked
            />
            <SwitchRow label="Mostra il pulsante 'Perché questa risposta?'" />
            <SwitchRow label="Applica formattazione per formule matematiche" />
            <SwitchRow
              label="Mostra Condividi"
              defaultChecked
            />
            <SwitchRow
              label="Mostra Impostazioni"
              defaultChecked
            />
          </div>

          <h4 className={styles.sectionTitle}>
            Impostazioni caricamento documenti
          </h4>
          <SwitchRow label="Mostra pulsante per caricare documenti" />
          <FieldGroup
            label="Dimensione massima caratteri per documento"
            helperText="Numero massimo di caratteri che un singolo documento caricato può contenere."
          >
            <Input
              type="number"
              placeholder="100000"
            />
          </FieldGroup>

          <h4 className={styles.sectionTitle}>Area di testo</h4>
          <FieldGroup
            label="Numero massimo caratteri nella textarea"
            helperText="Se non ha un valore, viene applicato il limite predefinito di 100.000 caratteri."
          >
            <Input type="number" />
          </FieldGroup>

          <FieldGroup label="Tema">
            <RadioGroup
              value={theme}
              onValueChange={setTheme}
              orientation="horizontal"
            >
              <Radio
                value="light"
                label="Chiaro"
              />
              <Radio
                value="dark"
                label="Scuro"
              />
            </RadioGroup>
          </FieldGroup>
          <SwitchRow
            label="Attiva multilingue"
            help="Permetti di parlare con il tuo Agente in altre lingue traducendo in automatico i contenuti."
          />

          <h4 className={styles.sectionTitle}>Colori</h4>
          <div className={styles.colorRow}>
            {[
              ['Link', '#7c3aed'],
              ['Sfondo bottoni', '#7c3aed'],
              ['Testo bottoni', '#ffffff'],
            ].map(([label, value]) => (
              <label
                key={label}
                className={styles.colorField}
              >
                <input
                  type="color"
                  defaultValue={value}
                />
                {label}
              </label>
            ))}
          </div>

          <Collapsible summary="Codice di embed">
            <EmbedSnippet
              code={embedSnippet(layout)}
              filename="embed.html"
            />
          </Collapsible>

          <Collapsible summary="Impostazioni avanzate">
            <div className={styles.formStack}>
              <h4 className={styles.sectionTitle}>
                Impostazioni SEO (ottimizzazione per i motori di ricerca)
              </h4>
              <FieldGroup label="Titolo">
                <Input fullWidth />
              </FieldGroup>
              <FieldGroup label="Descrizione">
                <Textarea rows={2} />
              </FieldGroup>
              <FieldGroup label="URL canonico">
                <Input
                  fullWidth
                  type="url"
                />
              </FieldGroup>
              <SwitchRow label="Mostra immagine di profilo come anteprima" />

              <h4 className={styles.sectionTitle}>
                Parametri avanzati del widget
              </h4>
              <FieldGroup
                label="Contesto iniziale"
                helperText="Funziona solo nell'embed del widget. Elenco di coppie CHIAVE:VALORE separate da virgola."
              >
                <Input
                  fullWidth
                  placeholder="ROUTE:HOME, LANG:IT"
                />
              </FieldGroup>
              <FieldGroup
                label="Domanda iniziale"
                helperText="Funziona solo nell'embed del widget sulla tua applicazione o sito web"
              >
                <Input fullWidth />
              </FieldGroup>
              <FieldGroup label="Ruolo">
                <SelectBox
                  options={[
                    { value: 'none', label: 'Nessuno' },
                    { value: 'atleta', label: 'Atleta' },
                  ]}
                  placeholder="Scegli chi vuoi impersonare iniziando la conversazione"
                />
              </FieldGroup>
              <FieldGroup label="Lingua dell'Agente">
                <SelectBox
                  options={[
                    { value: 'IT', label: 'Italiano' },
                    { value: 'EN', label: 'English' },
                  ]}
                  placeholder="Seleziona lingua (opzionale)"
                />
              </FieldGroup>
              <FieldGroup
                label="Domini consentiti"
                helperText='Scrivi un dominio per riga. Lascia vuoto per consentire tutti i domini. Aggiungi "localhost" per consentire lo sviluppo locale.'
              >
                <Textarea
                  rows={3}
                  placeholder="www.example.com"
                />
              </FieldGroup>
              <SwitchRow
                label="Ignora attributi client"
                help="Se abilitato, gli attributi sul client (React o WebComponent) verranno ignorati e verranno utilizzati quelli configurati qui."
              />
              <h4 className={styles.sectionTitle}>Rilevamento PII</h4>
              <PiiSection />
            </div>
          </Collapsible>
        </div>

        <div className={styles.layoutPreviewColumn}>
          <div className={styles.instructionsHeader}>
            <h3 className={styles.sectionTitle}>Anteprima</h3>
            <Button
              type="button"
              variant="link"
              size="sm"
              icon={
                <Maximize2
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => setFullscreen(!fullscreen)}
            >
              {fullscreen ? 'Chiudi schermo intero' : 'Mostra a schermo intero'}
            </Button>
          </div>
          {privacy === 'PRIVATE' ? (
            <Callout
              severity="info"
              title="Il tuo Agente è privato"
              action={
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
                  onClick={() => copy(PRIVATE_PASSWORD)}
                >
                  Copia
                </Button>
              }
            >
              Questa è la tua password, la troverai anche in Impostazioni:{' '}
              <code>{PRIVATE_PASSWORD}</code>
            </Callout>
          ) : null}
          <PreviewBox layout={layout} />
        </div>
      </div>
    </Drawer>
  )
}

type EmbedDrawerProps = {
  integration: LayoutIntegration | null
  onClose: () => void
}

/** “Configura codice di incorporamento” (EmbedPanel). */
export function EmbedDrawer({ integration, onClose }: EmbedDrawerProps) {
  const [layout, setLayout] = useState<LayoutName>(
    integration?.layout ?? 'WEBSITE_ASSISTANT',
  )
  return (
    <Drawer
      open={!!integration}
      onOpenChange={o => !o && onClose()}
      anchor="right"
      width="min(72rem, 96vw)"
      title="Configura codice di incorporamento"
      description={integration?.name}
    >
      <div className={styles.layoutEditor}>
        <div className={styles.formStack}>
          <h3 className={styles.sectionTitle}>Opzioni</h3>
          <FieldGroup label="Layout">
            <SelectBox
              options={LAYOUTS.map(l => ({ value: l, label: l }))}
              value={layout}
              onChange={v => v && setLayout(v as LayoutName)}
            />
          </FieldGroup>
          {layout === 'WEBSITE_ASSISTANT' ? (
            <SwitchRow
              label="Nascondi avatar 3D"
              help="Il layout assistente web non mostrerà l'area dell'avatar 3D (solo intestazione, controlli e chat)"
            />
          ) : null}
          <SwitchRow label="Attiva multilingue" />
          <FieldGroup label="Contesto iniziale">
            <Input fullWidth />
          </FieldGroup>
          <FieldGroup label="Domanda iniziale">
            <Input fullWidth />
          </FieldGroup>
          <FieldGroup label="Ruolo">
            <SelectBox
              options={[{ value: 'none', label: 'Nessuno' }]}
              placeholder="Scegli chi vuoi impersonare iniziando la conversazione"
            />
          </FieldGroup>
          <FieldGroup label="Lingua dell'Agente">
            <SelectBox
              options={[
                { value: 'IT', label: 'Italiano' },
                { value: 'EN', label: 'English' },
              ]}
              defaultValue="IT"
            />
          </FieldGroup>
          <h4 className={styles.sectionTitle}>Bottoni toolbar</h4>
          <div className={styles.switchList}>
            <SwitchRow label="Mostra login" />
            <SwitchRow
              label="Mostra Condividi"
              defaultChecked
            />
            <SwitchRow
              label="Abilita audio"
              defaultChecked
            />
            <SwitchRow
              label="Mostra Impostazioni"
              defaultChecked
            />
          </div>
          <h4 className={styles.sectionTitle}>Azioni chat</h4>
          <div className={styles.switchList}>
            <SwitchRow label="Mostra cancella chat" />
            <SwitchRow label="Mostra solo ultimi messaggi" />
            <SwitchRow
              label="Mostra testo di caricamento"
              defaultChecked
            />
            <SwitchRow
              label="Mostra copia messaggio"
              defaultChecked
            />
            <SwitchRow label="Mostra testo traduzione originale" />
            <SwitchRow label="Applica formattazione per formule matematiche" />
            <SwitchRow label="Avvia automaticamente la chat (evita la schermata con pulsante INIZIAMO)" />
          </div>
          <h4 className={styles.sectionTitle}>
            Impostazioni caricamento documenti
          </h4>
          <SwitchRow label="Mostra pulsante per caricare documenti" />
          <FieldGroup
            label="Numero massimo caratteri nella textarea"
            helperText="Se non ha un valore, viene applicato il limite predefinito di 100.000 caratteri."
          >
            <Input type="number" />
          </FieldGroup>
        </div>
        <div className={styles.layoutPreviewColumn}>
          <h3 className={styles.sectionTitle}>Codice di embed</h3>
          <EmbedSnippet
            code={embedSnippet(layout)}
            filename="embed.html"
          />
          <Callout severity="info">
            Se vuoi che la pagina non faccia zoom quando si clicca su un input,
            aggiungi questo meta tag nel &lt;head&gt;:{' '}
            <code>
              &lt;meta name=&quot;viewport&quot;
              content=&quot;width=device-width, initial-scale=1,
              maximum-scale=1&quot;&gt;
            </code>
          </Callout>
          <h3 className={styles.sectionTitle}>Anteprima</h3>
          <PreviewBox layout={layout} />
        </div>
      </div>
    </Drawer>
  )
}
