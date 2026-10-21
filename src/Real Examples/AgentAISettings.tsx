import React, { useState } from 'react'
import { Image, Maximize2, Wrench } from 'lucide-react'
import { InfoHint } from '../components/InfoHint'
import { Divider } from '../components/Divider'
import { Button } from '../components/Button'
import { Collapsible } from '../components/Collapsible'
import { Combobox } from '../components/Combobox'
import type { ComboboxGroupOption } from '../components/Combobox'
import { FieldGroup } from '../components/Field'
import { Input } from '../components/Input'
import { Modal } from '../components/Modal'
import { Radio, RadioGroup } from '../components/Radio'
import { SelectBox } from '../components/SelectBox'
import { Slider } from '../components/Slider'
import { Switch } from '../components/Switch'
import { Textarea } from '../components/Textarea'
import { Callout } from '../components/Callout'
import '../components/Input/styles.css'
import styles from './realExamples.module.css'

const toolIcon = (
  <Wrench
    key="tools"
    size={14}
    strokeWidth={2}
    aria-hidden
  />
)
const visionIcon = (
  <Image
    key="vision"
    size={14}
    strokeWidth={2}
    aria-hidden
  />
)
const toolsAndVision = [toolIcon, visionIcon]

const modelOptions: ComboboxGroupOption[] = [
  {
    groupLabel: 'NVIDIA',
    options: [
      {
        value: 'llama-3.1-nemotron-70b',
        label: 'Llama 3.1 Nemotron 70B Instruct',
      },
      {
        value: 'llama-3.3-70b',
        label: 'Llama 3.3 70B Instruct',
      },
    ],
  },
  {
    groupLabel: 'OpenAI',
    options: [
      {
        value: 'gpt-5.2-chat',
        label: 'GPT 5.2 Chat',
        icons: toolsAndVision,
      },
      {
        value: 'chatgpt-4.1-eu',
        label: 'ChatGPT 4.1 EU',
        icons: toolsAndVision,
      },
      {
        value: 'chatgpt-4.1-mini',
        label: 'ChatGPT 4.1 mini',
        icons: toolsAndVision,
      },
      {
        value: 'gpt-4o',
        label: 'GPT-4o',
        icons: toolsAndVision,
      },
      {
        value: 'o3-mini',
        label: 'o3-mini',
        icons: [toolIcon],
      },
    ],
  },
  {
    groupLabel: 'Anthropic',
    options: [
      {
        value: 'claude-sonnet-4',
        label: 'Claude Sonnet 4',
        icons: toolsAndVision,
      },
      {
        value: 'claude-haiku-3.5',
        label: 'Claude 3.5 Haiku',
        icons: [toolIcon],
      },
    ],
  },
  {
    groupLabel: 'Google',
    options: [
      {
        value: 'gemini-2.5-pro',
        label: 'Gemini 2.5 Pro',
        icons: toolsAndVision,
      },
      {
        value: 'gemini-2.5-flash',
        label: 'Gemini 2.5 Flash',
        icons: toolsAndVision,
      },
    ],
  },
  {
    groupLabel: 'Mistral',
    options: [
      {
        value: 'mistral-large',
        label: 'Mistral Large',
        icons: [toolIcon],
      },
      {
        value: 'mistral-small',
        label: 'Mistral Small',
      },
    ],
  },
  {
    groupLabel: 'Azure',
    options: [
      {
        value: 'azure-gpt-4o',
        label: 'Azure GPT-4o',
        icons: toolsAndVision,
      },
      {
        value: 'memori-openai',
        label: 'Memori-OpenAI-Q&A',
        icons: toolsAndVision,
      },
    ],
  },
]

const secondaryModelOptions = [
  { value: 'default', label: 'Predefinito' },
  ...modelOptions.flatMap(g =>
    g.options.map(o => ({
      value: String(o.value),
      label: typeof o.label === 'string' ? o.label : String(o.value),
    })),
  ),
]

const INSTRUCTIONS_PLACEHOLDER =
  "Scrivi un prompt che guidi la IA a fornire risposte più pertinenti. Inserisci delle istruzioni come 'tu sei...' e descrivi il tuo progetto. Ad esempio: 'Tu sei Marty McFly, il protagonista di Ritorno al Futuro, rispondi come se fossi lui'. In base al tuo progetto puoi indicare anche URL o contatti."

const MAX_INSTRUCTIONS = 10000

type Mechanism = 'content-then-ai' | 'ai-only' | 'content-only'

/**
 * Recreation of the “IA” agent settings screen using library primitives.
 */
export function AgentAISettings() {
  const [mechanism, setMechanism] = useState<Mechanism>('content-then-ai')
  const [instructions, setInstructions] = useState('')
  const [model, setModel] = useState<string | null>('chatgpt-4.1-mini')
  const [expandedOpen, setExpandedOpen] = useState(false)
  const [deepThought, setDeepThought] = useState(false)
  const [dtInstructions, setDtInstructions] = useState('')
  const [maxTokens, setMaxTokens] = useState('')
  const [temperature, setTemperature] = useState(0.7)

  const selectedModelOption = modelOptions
    .flatMap(g => g.options)
    .find(o => o.value === model)
  const triggerEndIcons =
    selectedModelOption != null ? (
      <>
        {selectedModelOption.icon}
        {selectedModelOption.icons}
      </>
    ) : null

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>IA</h2>
      <p className={styles.subtitle}>
        Personalizza le capacità di intelligenza artificiale del tuo Agente,
        inclusa la generazione delle risposte, i prompt di conversazione e le
        funzionalità di Pensiero Profondo.
      </p>
      <Divider className={styles.divider} />

      <div className={styles.formStack}>
        <div>
          <h2 className={styles.sectionTitle}>Meccanismo di risposta</h2>
          <RadioGroup
            aria-label="Meccanismo di risposta"
            orientation="horizontal"
            value={mechanism}
            onValueChange={v => setMechanism(v as Mechanism)}
          >
            <Radio
              variant="card"
              value="content-then-ai"
              label="Contenuti prima, poi IA"
              description="NLP + GenAI · L'Agente risponde con i tuoi contenuti; se non trova corrispondenze, l'IA genera la risposta."
            />
            <Radio
              variant="card"
              value="ai-only"
              label="Solo IA"
              description="GenAI · L'IA legge i contenuti rilevanti e risponde sempre."
            />
            <Radio
              variant="card"
              value="content-only"
              label="Solo Contenuti"
              description="NLP · Nessuna risposta generata dall'IA."
            />
          </RadioGroup>
        </div>

        <Divider className={styles.divider} />

        <div>
          <h2 className={styles.sectionTitle}>Scegli Modello</h2>
          <p className={styles.fieldHint}>
            Scegli modello per domande e risposte
          </p>
          <Combobox
            options={modelOptions}
            value={model}
            onChange={setModel}
            placeholder="Seleziona un modello"
            searchPlaceholder="Cerca modello…"
            triggerEndIcons={triggerEndIcons}
          />
        </div>

        <div>
          <div className={styles.instructionsHeader}>
            <div className={styles.instructionsLabelRow}>
              Istruzioni
              <InfoHint
                content="Istruzioni di sistema inviate al modello insieme al contesto."
                ariaLabel="Informazioni sulle istruzioni"
              />
            </div>
            <Button
              variant="link"
              size="sm"
              icon={
                <Maximize2
                  size={16}
                  aria-hidden
                />
              }
              iconPosition="left"
              className={styles.expandButton}
              type="button"
              disabled={mechanism === 'content-only'}
              onClick={() => setExpandedOpen(true)}
            >
              Espandi
            </Button>
          </div>
          <Textarea
            aria-label="Istruzioni"
            placeholder={INSTRUCTIONS_PLACEHOLDER}
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
            rows={10}
            maxLength={MAX_INSTRUCTIONS}
            disabled={mechanism === 'content-only'}
          />
          <div className={styles.textareaFooter}>
            {instructions.length} / {MAX_INSTRUCTIONS}
          </div>
        </div>

        <Divider className={styles.divider} />

        <section>
          <h2 className={styles.sectionTitle}>Pensiero Profondo</h2>
          <Switch
            checked={deepThought}
            onCheckedChange={setDeepThought}
            label="Abilita Pensiero Profondo"
          />
          <p className={styles.fieldHint}>
            Quando è abilitato, questo Agente può usare il contesto della
            conversazione, ricordare le informazioni condivise dagli utenti e
            applicarle nelle interazioni successive.
          </p>
          {deepThought ? (
            <div className={styles.nestedBlock}>
              <FieldGroup
                label="Istruzioni Pensiero Profondo"
                helperText="Specifica quali informazioni l'IA dovrebbe salvare durante le conversazioni. Questo aiuta a migliorare la funzionalità Fatti Conosciuti."
              >
                <Textarea
                  value={dtInstructions}
                  onChange={e => setDtInstructions(e.target.value)}
                  placeholder="Specifica quali informazioni l'IA dovrebbe salvare"
                  rows={3}
                />
              </FieldGroup>
            </div>
          ) : null}
        </section>

        <Collapsible summary="Impostazioni avanzate">
          <div className={styles.formStack}>
            <Callout severity="warning">
              Modificare questi parametri può influire significativamente sulla
              qualità delle risposte fornite dall&apos;Agente.
            </Callout>
            <div className={styles.twoColumns}>
              <FieldGroup label="Scegli modello (import/export)">
                <SelectBox
                  options={secondaryModelOptions}
                  defaultValue="default"
                />
              </FieldGroup>
              <FieldGroup label="Scegli modello (Pensiero Profondo)">
                <SelectBox
                  options={secondaryModelOptions}
                  defaultValue="default"
                  disabled={!deepThought}
                />
              </FieldGroup>
            </div>
            <FieldGroup
              label="Numero massimo di token"
              helperText="Il numero massimo di token da generare, condivisi tra prompt e completion."
            >
              <Input
                type="number"
                min={1}
                value={maxTokens}
                onChange={e => setMaxTokens(e.target.value)}
                placeholder="Predefinito"
              />
            </FieldGroup>
            <FieldGroup
              label={`Temperatura: ${temperature.toFixed(1)}`}
              helperText="Controlla la casualità: valori bassi producono risposte più deterministiche e ripetitive."
            >
              <Slider
                min={0}
                max={2}
                step={0.1}
                value={temperature}
                onChange={setTemperature}
                ariaLabel="Temperatura"
              />
            </FieldGroup>
          </div>
        </Collapsible>
      </div>

      <Modal
        open={expandedOpen}
        onOpenChange={setExpandedOpen}
        title="Istruzioni"
        size="xl"
        footer={
          <Button
            type="button"
            variant="primary"
            onClick={() => setExpandedOpen(false)}
          >
            Chiudi
          </Button>
        }
      >
        <Textarea
          value={instructions}
          onChange={e => setInstructions(e.target.value)}
          placeholder={INSTRUCTIONS_PLACEHOLDER}
          rows={18}
          maxLength={MAX_INSTRUCTIONS}
          aria-label="Istruzioni"
        />
        <div className={styles.textareaFooter}>
          {instructions.length} / {MAX_INSTRUCTIONS}
        </div>
      </Modal>
    </div>
  )
}
