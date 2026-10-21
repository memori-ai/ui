import React from 'react'
import { Settings2 } from 'lucide-react'
import { Button } from '../../components/Button'
import { FieldGroup } from '../../components/Field'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Switch } from '../../components/Switch'
import { Tabs } from '../../components/Tabs'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

/**
 * Admin → Setup (tenant config for non-superAdmin).
 */
export function AdminSetupDashboard() {
  return (
    <div className={styles.page}>
      <Section
        title="Admin · Setup"
        description="Configura branding, capability e limiti del tuo tenant."
        icon={
          <Settings2
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <Tabs.Root
        defaultValue="general"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni setup tenant"
          className={styles.tabsList}
        >
          <Tabs.Tab value="general">Generale</Tabs.Tab>
          <Tabs.Tab value="features">Funzionalità</Tabs.Tab>
          <Tabs.Tab value="limits">Limiti</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="general"
          className={styles.tabPanel}
        >
          <div className={styles.formStack}>
            <FieldGroup
              label="Nome tenant"
              required
            >
              <Input
                fullWidth
                defaultValue="partner.example"
              />
            </FieldGroup>
            <FieldGroup label="Descrizione">
              <Input
                fullWidth
                defaultValue="White-label partner demo"
              />
            </FieldGroup>
            <Button
              type="button"
              variant="primary"
              size="md"
            >
              Salva
            </Button>
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          value="features"
          className={styles.tabPanel}
        >
          <div className={styles.formStack}>
            <Switch
              defaultChecked
              label="Abilita SCORM"
            />
            <Switch
              defaultChecked
              label="Abilita Virtual Spaces"
            />
            <Switch label="Abilita Badges" />
            <Button
              type="button"
              variant="primary"
              size="md"
            >
              Salva funzionalità
            </Button>
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          value="limits"
          className={styles.tabPanel}
        >
          <div className={styles.formStack}>
            <FieldGroup label="Max agenti">
              <Input
                fullWidth
                type="number"
                defaultValue="50"
              />
            </FieldGroup>
            <FieldGroup label="Max SCORM">
              <Input
                fullWidth
                type="number"
                defaultValue="5"
              />
            </FieldGroup>
            <Button
              type="button"
              variant="primary"
              size="md"
            >
              Salva limiti
            </Button>
          </div>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
