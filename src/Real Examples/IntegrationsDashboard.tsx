import React, { useState } from 'react'
import { AppWindow, Globe, Info, MessageSquare } from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { Switch } from '../components/Switch'
import { Tabs } from '../components/Tabs'
import { Text } from '../components/Typography'
import styles from './realExamples.module.css'

/**
 * Integrazioni / Share: landing experience, canali e SCORM.
 */
export function IntegrationsDashboard() {
  const [scormEnabled, setScormEnabled] = useState(false)

  return (
    <div className={styles.page}>
      <Section
        title="Integrazioni"
        description="Pubblica l’agente sul web, sui canali e come pacchetto SCORM."
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
        defaultValue="landing"
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
          <Tabs.Tab value="channels">
            <span className={styles.cellWithIcon}>
              <MessageSquare
                size={16}
                aria-hidden
              />
              Canali
              <span className={styles.tabLabel}>Nuovo</span>
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="scorm">SCORM</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="landing"
          className={styles.tabPanel}
        >
          <div className={styles.cardGrid}>
            <Card
              variant="outlined"
              title="Widget full page"
              description="Incorpora l’agente a pagina intera sul tuo dominio."
              hoverable
            >
              <Button
                type="button"
                variant="primary"
                size="sm"
              >
                Configura
              </Button>
            </Card>
            <Card
              variant="outlined"
              title="Widget embed"
              description="Snippet JavaScript per siti e landing page."
              hoverable
            >
              <Button
                type="button"
                variant="outline"
                size="sm"
              >
                Copia codice
              </Button>
            </Card>
            <Card
              variant="outlined"
              title="Link pubblico"
              description="https://aisuru.com/demo/Layout-Storybook"
              hoverable
            >
              <Button
                type="button"
                variant="outline"
                size="sm"
              >
                Apri
              </Button>
            </Card>
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          value="channels"
          className={styles.tabPanel}
        >
          <p className={styles.tabPlaceholder}>
            Configura WhatsApp, Telegram e altri canali (demo). Solo il
            proprietario dell’agente può gestire i canali.
          </p>
        </Tabs.Panel>

        <Tabs.Panel
          value="scorm"
          className={styles.tabPanel}
        >
          <Card
            variant="outlined"
            title={
              <span className={styles.cellWithIcon}>
                <Info
                  size={16}
                  aria-hidden
                />
                Pacchetto SCORM
              </span>
            }
            description="Esporta l’agente come corso SCORM 1.2 per LMS."
          >
            <div className={styles.formStack}>
              <div className={styles.toolbarRow}>
                <Switch
                  checked={scormEnabled}
                  onCheckedChange={setScormEnabled}
                  label="Abilita SCORM"
                />
                <Text
                  size="sm"
                  color="muted"
                >
                  {scormEnabled ? 'Attivo' : 'Disattivo'}
                </Text>
              </div>
              <Text
                size="sm"
                color="muted"
              >
                Slot utilizzati: 1/5
              </Text>
              <Button
                type="button"
                variant="primary"
                size="md"
                disabled={!scormEnabled}
              >
                Scarica SCORM
              </Button>
            </div>
          </Card>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
