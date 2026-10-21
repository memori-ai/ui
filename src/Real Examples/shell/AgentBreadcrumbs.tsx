import React from 'react'
import { ExternalLink } from 'lucide-react'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { Button } from '../../components/Button'
import { Tabs } from '../../components/Tabs'
import { useNotify } from '../shared/useNotify'
import {
  agentGroupOf,
  labelOf,
  type SectionId,
  type ShellAgent,
} from './navigation'
import { AgentAvatar } from './AppSidebar'
import type { AgentChatMode } from './agentChat'
import styles from '../realExamples.module.css'

type AgentBreadcrumbsProps = {
  active: SectionId
  agent: ShellAgent
  onNavigate: (id: SectionId) => void
  /** Open test panel mode, `null` when closed. */
  testMode: AgentChatMode | null
  onTestModeChange: (mode: AgentChatMode) => void
}

/**
 * “I miei agenti › {agente} › {gruppo} › {sezione}”: shown above every agent
 * page so the user always sees which agent, and which part of it, they edit.
 * Prova / Istruiscimi open the chat docked beside the page (non-modal), and
 * switch its mode while it is open.
 */
export function AgentBreadcrumbs({
  active,
  agent,
  onNavigate,
  testMode,
  onTestModeChange,
}: AgentBreadcrumbsProps) {
  const notify = useNotify()
  const group = agentGroupOf(active)
  const go = (id: SectionId) => (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    onNavigate(id)
  }

  return (
    <div className={styles.appCrumbBar}>
      <Breadcrumbs
        className={styles.appCrumbs}
        items={[
          { label: 'I miei agenti', href: '#home', onClick: go('home') },
          {
            label: agent.name,
            href: '#contents',
            onClick: go('contents'),
            icon: <AgentAvatar agent={agent} />,
          },
          ...(group ? [{ label: group }] : []),
          { label: labelOf(active) },
        ]}
      />
      <div className={styles.appCrumbActions}>
        <Tabs.Root
          value={testMode ?? ''}
          onValueChange={value => {
            if (value === 'prova' || value === 'istruiscimi') {
              onTestModeChange(value)
            }
          }}
          variant="segmented"
          className={styles.appAgentModeTabs}
        >
          <Tabs.List
            aria-label="Prova l’agente"
            aria-controls="agent-test-panel"
          >
            <Tabs.Tab value="prova">Prova</Tabs.Tab>
            <Tabs.Tab value="istruiscimi">Istruiscimi</Tabs.Tab>
          </Tabs.List>
        </Tabs.Root>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          icon={
            <ExternalLink
              size={16}
              aria-hidden
            />
          }
          className={styles.appCrumbAction}
          onClick={() =>
            notify(`Apertura pagina pubblica di ${agent.name}`, 'info')
          }
        >
          Pagina pubblica
        </Button>
      </div>
    </div>
  )
}
