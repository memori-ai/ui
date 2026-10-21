import React from 'react'
import { Settings } from 'lucide-react'
import { Section } from '../components/Section'
import { Tabs } from '../components/Tabs'
import { AgentGeneralSettings } from './AgentGeneralSettings'
import styles from './realExamples.module.css'

/**
 * Agent settings shell with tabs mirroring EditMemoriPanel sections.
 */
export function SettingsDashboard() {
  return (
    <div className={styles.page}>
      <Section
        title="Impostazioni"
        description="Gestisci le impostazioni generali, l’IA, l’aspetto e le notifiche del tuo Agente."
        icon={
          <Settings
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />
      <Tabs.Root
        defaultValue="generali"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni impostazioni"
          className={styles.tabsList}
        >
          <Tabs.Tab value="generali">Generali</Tabs.Tab>
          <Tabs.Tab value="ia">IA</Tabs.Tab>
          <Tabs.Tab value="aspetto">Aspetto</Tabs.Tab>
          <Tabs.Tab value="notifiche">Notifiche</Tabs.Tab>
          <Tabs.Tab value="gestione">Gestione</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="generali"
          className={styles.tabPanel}
        >
          <div className={styles.settingsEmbed}>
            <AgentGeneralSettings />
          </div>
        </Tabs.Panel>

        {(['ia', 'aspetto', 'notifiche', 'gestione'] as const).map(id => (
          <Tabs.Panel
            key={id}
            value={id}
            className={styles.tabPanel}
          >
            <p className={styles.tabPlaceholder}>
              Questa scheda è solo dimostrativa. Apri la story Generali o IA per
              vedere il form completo.
            </p>
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </div>
  )
}
