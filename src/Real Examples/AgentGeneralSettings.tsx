import React from 'react'
import { FieldGroup } from '../components/Field'
import { Input } from '../components/Input'
import { SelectBox } from '../components/SelectBox'
import '../components/Input/styles.css'
import styles from './realExamples.module.css'

const visibilityOptions = [
  { value: 'public', label: 'Pubblico' },
  { value: 'private', label: 'Privato' },
  { value: 'link', label: 'Solo con link' },
]

const languageOptions = [{ value: 'it', label: 'Italiano' }]

/**
 * Recreation of the “Generali” agent settings screen using library primitives.
 */
export function AgentGeneralSettings() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Generali</h1>
      <p className={styles.subtitle}>
        Gestisci le impostazioni generali e i parametri di interazione del tuo
        Agente
      </p>
      <hr className={styles.divider} />

      <div className={styles.formStack}>
        <FieldGroup
          label="Nome"
          required
        >
          <Input
            fullWidth
            defaultValue="Layout Storybook"
          />
        </FieldGroup>

        <FieldGroup label="Descrizione">
          <textarea
            className={`memori-input memori-input--default memori-input--md memori-input--full-width ${styles.textarea}`}
            defaultValue="Agente di test per storybook"
            rows={4}
          />
        </FieldGroup>

        <FieldGroup
          label="Visibilità"
          required
          helperText="Puoi modificare la visibilità del tuo Agente in qualsiasi momento."
        >
          <SelectBox
            options={visibilityOptions}
            defaultValue="public"
          />
        </FieldGroup>

        <FieldGroup
          label="Lingua"
          required
          helperText="Configurazione per la creazione di un Memori aziendale in lingua italiana."
        >
          <SelectBox
            options={languageOptions}
            defaultValue="it"
            disabled
          />
        </FieldGroup>
      </div>
    </div>
  )
}
