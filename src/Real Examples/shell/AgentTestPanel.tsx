import React from 'react'
import { RotateCcw, X } from 'lucide-react'
import { Button } from '../../components/Button'
import { Tabs } from '../../components/Tabs'
import { Tooltip } from '../../components/Tooltip'
import { AgentAvatar } from './AppSidebar'
import {
  AgentChatComposer,
  AgentChatLog,
  useAgentChat,
  type AgentChatMode,
} from './agentChat'
import type { ShellAgent } from './navigation'
import s from './layouts.module.css'

const MODE_NOTE: Record<AgentChatMode, string> = {
  prova: 'Sessione isolata: rispondi come un utente finale.',
  istruiscimi: 'Le tue risposte diventano istruzioni per l’agente.',
}

/**
 * Prova / Istruiscimi docked to the right of the page. It is part of the layout,
 * not an overlay: the page stays usable, so “edit → re-test” is one glance.
 * The conversation survives section changes; it resets on mode or agent change.
 */
export function AgentTestPanel({
  agent,
  mode,
  onModeChange,
  onClose,
}: {
  agent: ShellAgent
  mode: AgentChatMode
  onModeChange: (mode: AgentChatMode) => void
  onClose: () => void
}) {
  const chat = useAgentChat(mode, agent.name)

  return (
    <aside
      id="agent-test-panel"
      className={s.testPanel}
      aria-label={`Prova ${agent.name}`}
    >
      <div className={s.testPanelHead}>
        <AgentAvatar agent={agent} />
        <span className={s.testPanelTitle}>{agent.name}</span>
        <Tooltip content="Ricomincia la conversazione">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            ariaLabel="Ricomincia la conversazione"
            icon={
              <RotateCcw
                size={16}
                aria-hidden
              />
            }
            onClick={chat.reset}
          />
        </Tooltip>
        <Tooltip content="Chiudi">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            ariaLabel="Chiudi la prova"
            icon={
              <X
                size={18}
                aria-hidden
              />
            }
            onClick={onClose}
          />
        </Tooltip>
      </div>

      <div className={s.testPanelMode}>
        <Tabs.Root
          value={mode}
          onValueChange={v => onModeChange(v as AgentChatMode)}
        >
          <Tabs.List aria-label="Modalità di prova">
            <Tabs.Tab value="prova">Prova</Tabs.Tab>
            <Tabs.Tab value="istruiscimi">Istruiscimi</Tabs.Tab>
            <Tabs.Indicator />
          </Tabs.List>
        </Tabs.Root>
        <p className={s.testPanelNote}>{MODE_NOTE[mode]}</p>
      </div>

      <AgentChatLog
        chat={chat}
        agentName={agent.name}
        className={s.testPanelLog}
      />

      <div className={s.testPanelFoot}>
        <AgentChatComposer
          chat={chat}
          showReset={false}
        />
      </div>
    </aside>
  )
}
