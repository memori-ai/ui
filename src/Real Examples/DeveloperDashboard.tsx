import React from 'react'
import { Code2, Download, ExternalLink } from 'lucide-react'
import { Button } from '../components/Button'
import { CodeBlock } from '../components/CodeBlock'
import { CopyField } from '../components/CopyField'
import { FieldGroup } from '../components/Field'
import { Section } from '../components/Section'
import { Tabs } from '../components/Tabs'
import { useNotify } from './shared/useNotify'
import styles from './realExamples.module.css'

const SNIPPET = `import Memori from '@memori.ai/memori-react';
import '@memori.ai/memori-react/dist/styles.css';

<Memori
  memoriName="Layout Storybook"
  ownerUserName="demo"
  tenantID="aisuru.com"
  showShare
/>`

const WEB_COMPONENT = `<memori-client
  memoriName="Layout Storybook"
  ownerUserName="demo"
  tenantID="aisuru.com"
></memori-client>`

/**
 * Developer: accesso API, utility e snippet client.
 */
export function DeveloperDashboard() {
  const notify = useNotify()
  const copied = () => notify('Snippet copiato')

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
              <CopyField
                value="a1b2c3d4-e5f6-7890-abcd-ef1234567890"
                copyLabel="Copia Memori ID"
                onCopy={() => notify('Memori ID copiato')}
              />
            </FieldGroup>
            <FieldGroup
              label="Secret token"
              helperText="Non condividere questo token in repository pubblici."
            >
              <CopyField
                value="sk_live_demo_0123456789abcdef"
                secret
                copyLabel="Copia secret token"
                onCopy={() => notify('Secret token copiato')}
              />
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
          <div className={styles.formStack}>
            <section>
              <h2 className={styles.sectionTitle}>typeMessage</h2>
              <CodeBlock
                language="JavaScript"
                code="typeMessage('Ciao mondo!', true, false)"
                onCopy={copied}
              />
            </section>
            <section>
              <h2 className={styles.sectionTitle}>getMemoriState</h2>
              <CodeBlock
                language="JavaScript"
                code={`const state = getMemoriState();\nconsole.log(state.sessionID);`}
                onCopy={copied}
              />
            </section>
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          value="react"
          className={styles.tabPanel}
        >
          <CodeBlock
            language="React (tsx)"
            code={SNIPPET}
            onCopy={copied}
          />
        </Tabs.Panel>

        <Tabs.Panel
          value="webcomponent"
          className={styles.tabPanel}
        >
          <CodeBlock
            language="HTML"
            code={WEB_COMPONENT}
            onCopy={copied}
          />
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
