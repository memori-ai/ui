import React from 'react'
import { User } from 'lucide-react'
import { FieldGroup } from '../../components/Field'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { SelectBox } from '../../components/SelectBox'
import { Tabs } from '../../components/Tabs'
import { Button } from '../../components/Button'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

const localeOptions = [
  { value: 'it', label: 'Italiano' },
  { value: 'en', label: 'English' },
]

/**
 * Account: profilo, preferenze e avatar.
 */
export function AccountDashboard() {
  return (
    <div className={styles.page}>
      <Section
        title="Account"
        description="Gestisci profilo, preferenze di sistema e avatar."
        icon={
          <User
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <Tabs.Root
        defaultValue="account"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni account"
          className={styles.tabsList}
        >
          <Tabs.Tab value="account">Profilo</Tabs.Tab>
          <Tabs.Tab value="preferences">Preferenze</Tabs.Tab>
          <Tabs.Tab value="avatar">Avatar</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="account"
          className={styles.tabPanel}
        >
          <div className={styles.formStack}>
            <FieldGroup
              label="Username"
              required
            >
              <Input
                fullWidth
                defaultValue="demo.user"
              />
            </FieldGroup>
            <FieldGroup
              label="Email"
              required
            >
              <Input
                fullWidth
                type="email"
                defaultValue="demo@memori.ai"
              />
            </FieldGroup>
            <FieldGroup label="Nome visualizzato">
              <Input
                fullWidth
                defaultValue="Demo User"
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
          value="preferences"
          className={styles.tabPanel}
        >
          <div className={styles.formStack}>
            <FieldGroup
              label="Lingua interfaccia"
              helperText="Lingua della console, non dell’agente."
            >
              <SelectBox
                options={localeOptions}
                defaultValue="it"
              />
            </FieldGroup>
            <Button
              type="button"
              variant="primary"
              size="md"
            >
              Salva preferenze
            </Button>
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          value="avatar"
          className={styles.tabPanel}
        >
          <div className={styles.toolbarRow}>
            <span
              className={styles.avatarCell}
              style={{ width: '4rem', height: '4rem', fontSize: '1.25rem' }}
              aria-hidden
            >
              DU
            </span>
            <Button
              type="button"
              variant="outline"
              size="md"
            >
              Carica immagine
            </Button>
          </div>
          <p className={styles.tabPlaceholder}>
            Formati supportati: JPG, PNG. Dimensione massima 2 MB (demo).
          </p>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
