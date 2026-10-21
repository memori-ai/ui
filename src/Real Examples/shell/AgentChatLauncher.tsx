import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { Minus, RotateCcw, X } from 'lucide-react'
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

/**
 * Example 4 — “Prova” as the end user meets it: a launcher bubble in the
 * corner that opens a floating, non-modal chat window. Minimising keeps the
 * conversation (the user can browse sections and come back); closing ends the
 * session. Escape minimises.
 */
export function AgentChatLauncher({ agent }: { agent: ShellAgent }) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<AgentChatMode>('prova')
  const chat = useAgentChat(mode, agent.name)
  const launcherRef = useRef<HTMLButtonElement>(null)
  const windowRef = useRef<HTMLElement>(null)
  const started = chat.lines.length > 1

  const returnFocus = useRef(false)

  useEffect(() => {
    if (open) windowRef.current?.querySelector('textarea')?.focus()
    else if (returnFocus.current) launcherRef.current?.focus()
    returnFocus.current = false
  }, [open])

  const minimise = () => {
    returnFocus.current = true
    setOpen(false)
  }

  return (
    <>
      <section
        ref={windowRef}
        id="agent-chat-window"
        role="dialog"
        aria-modal={false}
        className={cx(s.chatWindow, open && s.chatWindowOpen)}
        aria-label={`Prova ${agent.name}`}
        hidden={!open}
        onKeyDown={e => {
          if (e.key === 'Escape') minimise()
        }}
      >
        <div className={s.chatWindowHead}>
          <AgentAvatar agent={agent} />
          <div className={s.chatWindowTitle}>
            <span className={s.testPanelTitle}>{agent.name}</span>
            <span className={s.chatWindowSub}>
              {mode === 'prova'
                ? 'Anteprima come utente'
                : 'Modalità insegnante'}
            </span>
          </div>
          <Tooltip content="Ricomincia">
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
          <Tooltip content="Riduci (la conversazione resta)">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              ariaLabel="Riduci a icona"
              icon={
                <Minus
                  size={18}
                  aria-hidden
                />
              }
              onClick={minimise}
            />
          </Tooltip>
          <Tooltip content="Chiudi e termina la prova">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              ariaLabel="Chiudi e termina la prova"
              icon={
                <X
                  size={18}
                  aria-hidden
                />
              }
              onClick={() => {
                chat.reset()
                minimise()
              }}
            />
          </Tooltip>
        </div>

        <div className={s.testPanelMode}>
          <Tabs.Root
            value={mode}
            onValueChange={v => setMode(v as AgentChatMode)}
          >
            <Tabs.List aria-label="Modalità di prova">
              <Tabs.Tab value="prova">Prova</Tabs.Tab>
              <Tabs.Tab value="istruiscimi">Istruiscimi</Tabs.Tab>
              <Tabs.Indicator />
            </Tabs.List>
          </Tabs.Root>
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
      </section>

      {!open ? (
        <button
          ref={launcherRef}
          type="button"
          className={s.launcher}
          aria-controls="agent-chat-window"
          aria-expanded={false}
          onClick={() => setOpen(true)}
        >
          <AgentAvatar agent={agent} />
          <span>{started ? 'Riprendi la prova' : `Prova ${agent.name}`}</span>
          {started ? (
            <span
              className={s.launcherDot}
              aria-hidden
            />
          ) : null}
        </button>
      ) : null}
    </>
  )
}
