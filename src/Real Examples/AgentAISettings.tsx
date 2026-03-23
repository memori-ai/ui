import React, { useId, useState } from 'react'
import { Boxes, Info, Layers, Maximize2, Sparkles } from 'lucide-react'
import { Button } from '../components/Button'
import { Combobox } from '../components/Combobox'
import type { ComboboxOption } from '../components/Combobox'
import { Tooltip } from '../components/Tooltip'
import '../components/Input/styles.css'
import styles from './realExamples.module.css'

const modelOptions: ComboboxOption[] = [
  {
    value: 'memori-openai',
    label: 'Memori-OpenAI-Q&A',
    icons: [
      <Sparkles
        key="sparkles"
        size={14}
        strokeWidth={2}
        aria-hidden
      />,
      <Boxes
        key="boxes"
        size={14}
        strokeWidth={2}
        aria-hidden
      />,
    ],
  },
  {
    value: 'other',
    label: 'Altro modello',
    icon: (
      <Layers
        size={14}
        strokeWidth={2}
        aria-hidden
      />
    ),
  },
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
  const [model, setModel] = useState<string | null>('memori-openai')
  const groupName = useId()

  const selectedModelOption = modelOptions.find(o => o.value === model)
  const triggerEndIcons =
    selectedModelOption != null ? (
      <>
        {selectedModelOption.icon}
        {selectedModelOption.icons}
      </>
    ) : null

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>IA</h1>
      <p className={styles.subtitle}>
        Personalizza le capacità di intelligenza artificiale del tuo Agente,
        inclusa la generazione delle risposte, i prompt di conversazione e le
        funzionalità di Pensiero Profondo.
      </p>
      <hr className={styles.divider} />

      <div className={styles.formStack}>
        <div>
          <h2 className={styles.sectionTitle}>Meccanismo di risposta</h2>
          <div
            className={styles.radioRow}
            role="radiogroup"
            aria-label="Meccanismo di risposta"
          >
            <label className={styles.radioOption}>
              <input
                type="radio"
                className={styles.radioInput}
                name={groupName}
                checked={mechanism === 'content-then-ai'}
                onChange={() => setMechanism('content-then-ai')}
                aria-label="Contenuti prima, poi IA, NLP e GenAI"
              />
              <span className={styles.radioBody}>
                <span className={styles.radioLabelRow}>
                  Contenuti prima, poi IA
                  <Tooltip
                    content="Combina recupero contenuti (NLP) e generazione (GenAI)."
                    align="topRight"
                  >
                    <span
                      className={styles.infoTrigger}
                      tabIndex={0}
                      aria-label="Informazioni"
                    >
                      <Info
                        size={16}
                        strokeWidth={2}
                      />
                    </span>
                  </Tooltip>
                </span>
                <span className={styles.radioSub}>( NLP + GenAI )</span>
              </span>
            </label>

            <label className={styles.radioOption}>
              <input
                type="radio"
                className={styles.radioInput}
                name={groupName}
                checked={mechanism === 'ai-only'}
                onChange={() => setMechanism('ai-only')}
                aria-label="Solo IA, GenAI"
              />
              <span className={styles.radioBody}>
                <span className={styles.radioLabelRow}>
                  Solo IA
                  <Tooltip
                    content="Solo generazione GenAI, senza priorità ai contenuti indicizzati."
                    align="topRight"
                  >
                    <span
                      className={styles.infoTrigger}
                      tabIndex={0}
                      aria-label="Informazioni"
                    >
                      <Info
                        size={16}
                        strokeWidth={2}
                      />
                    </span>
                  </Tooltip>
                </span>
                <span className={styles.radioSub}>( GenAI )</span>
              </span>
            </label>

            <label className={styles.radioOption}>
              <input
                type="radio"
                className={styles.radioInput}
                name={groupName}
                checked={mechanism === 'content-only'}
                onChange={() => setMechanism('content-only')}
                aria-label="Solo Contenuti, NLP"
              />
              <span className={styles.radioBody}>
                <span className={styles.radioLabelRow}>
                  Solo Contenuti
                  <Tooltip
                    content="Solo NLP sui contenuti, senza generazione libera."
                    align="topRight"
                  >
                    <span
                      className={styles.infoTrigger}
                      tabIndex={0}
                      aria-label="Informazioni"
                    >
                      <Info
                        size={16}
                        strokeWidth={2}
                      />
                    </span>
                  </Tooltip>
                </span>
                <span className={styles.radioSub}>( NLP )</span>
              </span>
            </label>
          </div>
        </div>

        <hr className={styles.divider} />

        <div>
          <h2 className={styles.sectionTitle}>Scegli Modello</h2>
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
              <Tooltip
                content="Istruzioni di sistema inviate al modello insieme al contesto."
                align="topRight"
              >
                <span
                  className={styles.infoTrigger}
                  tabIndex={0}
                  aria-label="Informazioni sulle istruzioni"
                >
                  <Info
                    size={16}
                    strokeWidth={2}
                  />
                </span>
              </Tooltip>
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
            >
              Espandi
            </Button>
          </div>
          <textarea
            className={`memori-input memori-input--default memori-input--md memori-input--full-width ${styles.textarea}`}
            placeholder={INSTRUCTIONS_PLACEHOLDER}
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
            rows={10}
            maxLength={MAX_INSTRUCTIONS}
          />
          <div className={styles.textareaFooter}>
            {instructions.length} / {MAX_INSTRUCTIONS}
          </div>
        </div>
      </div>
    </div>
  )
}
