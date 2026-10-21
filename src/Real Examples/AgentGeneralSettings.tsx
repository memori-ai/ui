import React, { useState } from 'react'
import { Copy, KeyRound } from 'lucide-react'
import { InfoHint } from '../components/InfoHint'
import { Divider } from '../components/Divider'
import { Button } from '../components/Button'
import { Collapsible } from '../components/Collapsible'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { FieldGroup } from '../components/Field'
import { Input } from '../components/Input'
import { Radio, RadioGroup } from '../components/Radio'
import { SelectBox } from '../components/SelectBox'
import { Slider } from '../components/Slider'
import { Switch } from '../components/Switch'
import { Tag } from '../components/Tag'
import { Textarea } from '../components/Textarea'
import { Tooltip } from '../components/Tooltip'
import '../components/Input/styles.css'
import { Callout } from '../components/Callout'
import styles from './realExamples.module.css'

const DESCRIPTION_MAX = 200

const languageOptions = [
  { value: 'it', label: 'Italiano' },
  { value: 'en', label: 'English' },
]

const voiceOptions = [
  { value: 'male', label: 'Maschile' },
  { value: 'female', label: 'Femminile' },
]

const CONFIDENCE_LEVELS = [
  'Molto bassa',
  'Bassa',
  'Normale',
  'Alta',
  'Molto alta',
] as const

type Privacy = 'PUBLIC' | 'PRIVATE' | 'SECRET'

type AgentGeneralSettingsProps = {
  /** Jump to another settings section (e.g. "IA" from the description hint) */
  onNavigate?: (section: string) => void
}

/**
 * “Generali” agent settings (GeneralSettingsContent): name, public description,
 * visibility + password, language, voice, categories, NSFW, contextual
 * responses and advanced dialog options.
 */
export function AgentGeneralSettings({
  onNavigate,
}: AgentGeneralSettingsProps) {
  const [name, setName] = useState('Layout Storybook')
  const [description, setDescription] = useState('Agente di test per storybook')
  const [privacy, setPrivacy] = useState<Privacy>('PRIVATE')
  const [needsLogin, setNeedsLogin] = useState(false)
  const [password, setPassword] = useState('')
  const [categories, setCategories] = useState(['Demo', 'Supporto'])
  const [categoryDraft, setCategoryDraft] = useState('')
  const [nsfw, setNsfw] = useState(false)
  const [nsfwConfirmOpen, setNsfwConfirmOpen] = useState(false)
  const [needsPosition, setNeedsPosition] = useState(false)
  const [needsDateTime, setNeedsDateTime] = useState(true)
  const [askFeedback, setAskFeedback] = useState(true)
  const [disableAICollection, setDisableAICollection] = useState(false)
  const [suggestOnIdle, setSuggestOnIdle] = useState(true)
  const [allowWrongReport, setAllowWrongReport] = useState(false)
  const [confidence, setConfidence] = useState(2)

  const charsLeft = DESCRIPTION_MAX - description.length

  const addCategory = () => {
    const value = categoryDraft.trim()
    if (value && !categories.includes(value)) {
      setCategories([...categories, value])
    }
    setCategoryDraft('')
  }

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Generali</h2>
      <p className={styles.subtitle}>
        Gestisci le impostazioni generali e i parametri di interazione del tuo
        Agente
      </p>
      <Divider className={styles.divider} />

      <div className={styles.formStack}>
        <FieldGroup
          label="Nome"
          required
          helperText='I seguenti caratteri non sono ammessi: / # ? & | : \ "'
        >
          <Input
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Il nome dell'Agente"
          />
        </FieldGroup>

        <FieldGroup
          label={
            <>
              Descrizione pubblica{' '}
              <span className={styles.optionalLabel}>(facoltativo)</span>
            </>
          }
          helperText={
            <>
              Appare nella homepage, nelle schede degli Agenti e nella pagina
              dell&apos;Agente. Per definire come deve comportarsi
              l&apos;Agente, usa{' '}
              <Button
                type="button"
                variant="link"
                size="sm"
                className={styles.inlineLink}
                onClick={() => onNavigate?.('ai')}
              >
                Istruzioni
              </Button>{' '}
              nella sezione IA.
            </>
          }
        >
          <Textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Es. Una guida virtuale che aiuta i visitatori a scoprire i nostri prodotti e servizi."
            rows={3}
            error={charsLeft < 0}
            aria-label="Descrizione pubblica"
          />
        </FieldGroup>
        <div
          className={
            charsLeft < 0 ? styles.textareaFooterError : styles.textareaFooter
          }
        >
          {charsLeft < 0
            ? `${-charsLeft} caratteri oltre il limite`
            : `${charsLeft} caratteri rimanenti`}
        </div>

        <FieldGroup
          label="Visibilità"
          required
          helperText="Puoi modificare la visibilità del tuo Agente in qualsiasi momento."
        >
          <RadioGroup
            value={privacy}
            onValueChange={v => setPrivacy(v as Privacy)}
            orientation="horizontal"
            aria-label="Visibilità"
          >
            <Radio
              value="PUBLIC"
              label="Pubblico"
            />
            <Radio
              value="PRIVATE"
              label="Privato"
            />
            <Radio
              value="SECRET"
              label="Segreto"
            />
          </RadioGroup>
        </FieldGroup>

        {privacy === 'SECRET' ? (
          <Callout
            severity="warning"
            title="Token di recupero"
          >
            Con un Agente segreto, è necessario memorizzare i token di recupero.
            Questi sono codici numerici, generati automaticamente, che
            permettono di recuperare i contenuti se dimentichi la password.
          </Callout>
        ) : null}

        {privacy !== 'PUBLIC' ? (
          <FieldGroup
            label="Password"
            helperText={
              privacy === 'SECRET'
                ? "L'Agente utilizza la cifratura forte: non siamo in possesso della tua password."
                : 'Condividi la password con chi vuoi far accedere all’Agente.'
            }
          >
            <div className={styles.inputWithActions}>
              <Input
                type="password"
                fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                aria-label="Password"
              />
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
              >
                {password ? 'Salva password' : 'Cambia password'}
              </Button>
            </div>
          </FieldGroup>
        ) : null}

        <div>
          <Switch
            checked={needsLogin}
            onCheckedChange={setNeedsLogin}
            label="Accessibile solo ad utenti autenticati"
          />
          <p className={styles.fieldHint}>
            Quando impostato, l&apos;Agente risponderà solo agli utenti
            autenticati
          </p>
        </div>

        <div className={styles.twoColumns}>
          <FieldGroup
            label="Lingua"
            required
            helperText="La lingua è definita alla creazione e non può essere modificata."
          >
            <SelectBox
              options={languageOptions}
              defaultValue="it"
              disabled
            />
          </FieldGroup>

          <FieldGroup label="Tipologia di voce">
            <SelectBox
              options={voiceOptions}
              defaultValue="female"
            />
          </FieldGroup>
        </div>

        <FieldGroup
          label="Categorie"
          helperText="Le categorie aiutano gli utenti a trovare il tuo Agente in homepage."
        >
          <div className={styles.inputWithActions}>
            <Input
              fullWidth
              value={categoryDraft}
              onChange={e => setCategoryDraft(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  addCategory()
                }
              }}
              placeholder="Digita per aggiungere una categoria"
              aria-label="Nuova categoria"
            />
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={addCategory}
            >
              Aggiungi
            </Button>
          </div>
        </FieldGroup>
        {categories.length > 0 ? (
          <div className={styles.pillGroup}>
            {categories.map(c => (
              <Tag
                key={c}
                closable
                closeLabel={`Rimuovi ${c}`}
                onClose={() => setCategories(categories.filter(x => x !== c))}
              >
                {c}
              </Tag>
            ))}
          </div>
        ) : null}

        <div>
          <Switch
            checked={nsfw}
            disabled={nsfw}
            onCheckedChange={checked => {
              if (checked) setNsfwConfirmOpen(true)
            }}
            label="Contiene contenuti per adulti"
          />
          <p className={styles.fieldHint}>
            Una volta attivato l&apos;NSFW, non può essere rimosso. Se è stato
            attivato per errore contattaci.
          </p>
        </div>

        <Divider className={styles.divider} />

        <section>
          <h2 className={styles.sectionTitle}>Risposte Contestuali</h2>
          <div className={styles.switchList}>
            <div>
              <Switch
                checked={needsPosition}
                onCheckedChange={setNeedsPosition}
                label="Posizione"
              />
              <p className={styles.fieldHint}>
                Quando la posizione è obbligatoria, una stessa domanda può avere
                risposte differenti in base a dove si trova l&apos;utente. Es:
                &quot;Dove posso mangiare vicino a me?&quot;
              </p>
            </div>
            <div>
              <Switch
                checked={needsDateTime}
                onCheckedChange={setNeedsDateTime}
                label="Data e ora"
              />
              <p className={styles.fieldHint}>
                Quando la data è obbligatoria, una stessa domanda può avere
                risposte differenti in base al giorno e l&apos;ora correnti. Es:
                &quot;Quando arriva il prossimo autobus?&quot;
              </p>
            </div>
          </div>
        </section>

        <Collapsible summary="Impostazioni avanzate">
          <div className={styles.switchList}>
            <div>
              <Switch
                checked={askFeedback}
                onCheckedChange={setAskFeedback}
                label="Chiedi feedback sulle risposte dai contenuti"
              />
              <p className={styles.fieldHint}>
                Al termine delle risposte basate sui contenuti verrà aggiunto un
                feedback (es. &quot;Questa risposta ti è stata utile?&quot;).
              </p>
            </div>
            <div>
              <Switch
                checked={disableAICollection}
                onCheckedChange={setDisableAICollection}
                label="Disabilita raccolta contenuti AI"
              />
              <p className={styles.fieldHint}>
                Evita di accumulare{' '}
                <Tooltip content="Qui trovi tutte le domande degli utenti a cui ha risposto l'IA generativa.">
                  <span className={styles.dottedTerm}>bozze</span>
                </Tooltip>{' '}
                e{' '}
                <Tooltip content="Domande a cui l'Agente non è riuscito a rispondere o ha risposto in modo inadeguato.">
                  <span className={styles.dottedTerm}>
                    domande senza risposta
                  </span>
                </Tooltip>
                .
              </p>
            </div>
            <div>
              <Switch
                checked={suggestOnIdle}
                onCheckedChange={setSuggestOnIdle}
                label="Suggerisci domande se l'utente resta inattivo"
              />
              <p className={styles.fieldHint}>
                Se l&apos;utente non interagisce per un po&apos;, l&apos;Agente
                propone domande suggerite tratte dai contenuti.
              </p>
            </div>
            <div>
              <Switch
                checked={allowWrongReport}
                onCheckedChange={setAllowWrongReport}
                label="Permetti all'utente di segnalare una risposta errata all'Agente (solo contenuti)"
              />
              <p className={styles.fieldHint}>
                Permetti agli utenti di segnalare quando una risposta non
                corrisponde alla richiesta (es. &quot;non è quello che ho
                chiesto&quot;).
              </p>
            </div>

            <FieldGroup
              label={
                <span className={styles.headerWithHint}>
                  Soglia di confidenza
                  <InfoHint
                    content="Con una soglia più bassa l'Agente risponde più spesso, anche quando non è del tutto sicuro; con una più alta risponde solo quando è molto sicuro."
                    ariaLabel="Informazioni sulla soglia di confidenza"
                  />
                </span>
              }
            >
              <Slider
                min={0}
                max={4}
                step={1}
                value={confidence}
                onChange={setConfidence}
                ariaLabel="Soglia di confidenza"
              />
              <div className={styles.sliderLabels}>
                {CONFIDENCE_LEVELS.map((l, i) => (
                  <span
                    key={l}
                    className={
                      i === confidence ? styles.sliderLabelActive : undefined
                    }
                  >
                    {l}
                  </span>
                ))}
              </div>
            </FieldGroup>
            {confidence !== 2 ? (
              <Callout severity="warning">
                Alterare la soglia di confidenza può influenzare
                significativamente la qualità delle risposte. Modificare solo se
                si sa cosa si sta facendo.
              </Callout>
            ) : null}

            <fieldset className={styles.fieldset}>
              <legend className={styles.sectionTitle}>
                Badge: Integrazione con DCM
              </legend>
              <div className={styles.formStack}>
                <FieldGroup label="Utente DCM">
                  <Input fullWidth />
                </FieldGroup>
                <FieldGroup label="Secret">
                  <div className={styles.inputWithActions}>
                    <Input
                      type="password"
                      fullWidth
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      shape="circle"
                      aria-label="Copia secret"
                      icon={
                        <Copy
                          size={16}
                          aria-hidden
                        />
                      }
                    />
                  </div>
                </FieldGroup>
                <FieldGroup
                  label="App Context"
                  helperText="Se si vuole abilitare l'integrazione con DCM, è necessario compilare tutti i campi"
                >
                  <Input fullWidth />
                </FieldGroup>
              </div>
            </fieldset>
          </div>
        </Collapsible>
      </div>

      <ConfirmDialog
        isOpen={nsfwConfirmOpen}
        onClose={() => setNsfwConfirmOpen(false)}
        onConfirm={() => {
          setNsfw(true)
          setNsfwConfirmOpen(false)
        }}
        title="Attivare NSFW?"
        message="Vuoi attivare il flag NSFW per questo Agente? Una volta attivato, non potrà essere disattivato."
        confirmText="D'accordo"
        cancelText="Annulla"
      />
    </div>
  )
}
