import React, { useState } from 'react'
import { Code2, Copy, Download, ExternalLink, Eye, EyeOff } from 'lucide-react'
import { Button } from '../components/Button'
import { FieldGroup } from '../components/Field'
import { Input } from '../components/Input'
import { Section } from '../components/Section'
import { Tabs } from '../components/Tabs'
import '../components/Input/styles.css'
import styles from './realExamples.module.css'

const SNIPPET = `import Memori from '@memori.ai/memori-react';
import '@memori.ai/memori-react/dist/styles.css';

<Memori
  memoriName="Layout Storybook"
  ownerUserName="demo"
  tenantID="aisuru.com"
  showShare
/>`

/**
 * Developer: accesso API, utility e snippet client.
 */
export function DeveloperDashboard() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className={styles.page}>
      <Section
        title="Developer"
        description="Credenziali API, documentazione e snippet di integrazione."
        icon={
          <Code2
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <Tabs.Root
        defaultValue="api"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni developer"
          className={styles.tabsList}
        >
          <Tabs.Tab value="api">Accesso API</Tabs.Tab>
          <Tabs.Tab value="utility">Utility</Tabs.Tab>
          <Tabs.Tab value="react">React</Tabs.Tab>
          <Tabs.Tab value="webcomponent">WebComponent</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="api"
          className={styles.tabPanel}
        >
          <div className={styles.formStack}>
            <FieldGroup label="Memori ID">
              <div className={styles.inputWithActions}>
                <Input
                  fullWidth
                  readOnly
                  defaultValue="a1b2c3d4-e5f6-7890-abcd-ef1234567890"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  ariaLabel="Copia Memori ID"
                  icon={
                    <Copy
                      size={18}
                      aria-hidden
                    />
                  }
                />
              </div>
            </FieldGroup>
            <FieldGroup
              label="Secret token"
              helperText="Non condividere questo token in repository pubblici."
            >
              <div className={styles.inputWithActions}>
                <Input
                  fullWidth
                  readOnly
                  type={revealed ? 'text' : 'password'}
                  defaultValue="sk_live_demo_0123456789abcdef"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  ariaLabel={revealed ? 'Nascondi token' : 'Mostra token'}
                  onClick={() => setRevealed(v => !v)}
                  icon={
                    revealed ? (
                      <EyeOff
                        size={18}
                        aria-hidden
                      />
                    ) : (
                      <Eye
                        size={18}
                        aria-hidden
                      />
                    )
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  ariaLabel="Copia secret token"
                  icon={
                    <Copy
                      size={18}
                      aria-hidden
                    />
                  }
                />
              </div>
            </FieldGroup>
            <div className={styles.toolbarRow}>
              <Button
                type="button"
                variant="ghost"
                size="md"
                icon={
                  <ExternalLink
                    size={18}
                    aria-hidden
                  />
                }
              >
                Documentazione API
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="md"
                icon={
                  <Download
                    size={18}
                    aria-hidden
                  />
                }
              >
                Collection Postman
              </Button>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          value="utility"
          className={styles.tabPanel}
        >
          <h2 className={styles.sectionTitle}>typeMessage</h2>
          <pre className={styles.codeBlock}>
            {`typeMessage('Ciao mondo!', true, false)`}
          </pre>
          <h2 className={styles.sectionTitle}>getMemoriState</h2>
          <pre className={styles.codeBlock}>
            {`const state = getMemoriState();\nconsole.log(state.sessionID);`}
          </pre>
        </Tabs.Panel>

        <Tabs.Panel
          value="react"
          className={styles.tabPanel}
        >
          <pre className={styles.codeBlock}>{SNIPPET}</pre>
          <Button
            type="button"
            variant="primary"
            size="md"
            icon={
              <Copy
                size={18}
                aria-hidden
              />
            }
          >
            Copia snippet
          </Button>
        </Tabs.Panel>

        <Tabs.Panel
          value="webcomponent"
          className={styles.tabPanel}
        >
          <pre className={styles.codeBlock}>
            {`<memori-client
  memoriName="Layout Storybook"
  ownerUserName="demo"
  tenantID="aisuru.com"
></memori-client>`}
          </pre>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
