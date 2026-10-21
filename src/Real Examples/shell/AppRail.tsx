import React from 'react'
import cx from 'classnames'
import { BookOpen, ShieldCheck } from 'lucide-react'
import { Tooltip } from '../../components/Tooltip'
import { AgentAvatar } from './AppSidebar'
import {
  WORKSPACE_NAV,
  areaOf,
  type SectionId,
  type ShellAgent,
} from './navigation'
import s from './layouts.module.css'

type AppRailProps = {
  active: SectionId
  agent: ShellAgent
  agents: ShellAgent[]
  onNavigate: (id: SectionId, agent?: ShellAgent) => void
}

function RailLink({
  label,
  icon,
  current,
  href,
  onClick,
  external,
}: {
  label: string
  icon: React.ReactNode
  current?: boolean
  href: string
  onClick?: () => void
  external?: boolean
}) {
  return (
    <a
      href={href}
      className={cx(s.railItem, current && s.railItemActive)}
      aria-current={current ? 'page' : undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={
        onClick
          ? e => {
              e.preventDefault()
              onClick()
            }
          : undefined
      }
    >
      <span
        className={s.railIcon}
        aria-hidden
      >
        {icon}
      </span>
      <span className={s.railLabel}>{label}</span>
    </a>
  )
}

/**
 * Example 3 — slim, always-visible workspace rail (desktop). Agent and admin
 * sections move into the page's area header, so the rail never swaps content:
 * the user always knows where “home” is. Recent agents sit under a divider
 * for one-click switching. On phones the drawer sidebar takes over.
 */
export function AppRail({ active, agent, agents, onNavigate }: AppRailProps) {
  const area = areaOf(active)
  const items = WORKSPACE_NAV.flatMap(g => g.items)

  return (
    <nav
      className={s.rail}
      aria-label="Navigazione principale"
    >
      <ul className={s.railList}>
        {items.map(item => (
          <li key={item.id}>
            <RailLink
              href={`#${item.id}`}
              label={item.label}
              icon={item.icon}
              current={
                item.id === active || (item.id === 'home' && area === 'agent')
              }
              onClick={() => onNavigate(item.id)}
            />
          </li>
        ))}
      </ul>

      <div
        className={s.railDivider}
        role="presentation"
      />

      <ul
        className={s.railList}
        aria-label="Agenti recenti"
      >
        {agents.slice(0, 4).map(a => {
          const current = area === 'agent' && a.id === agent.id
          return (
            <li key={a.id}>
              <Tooltip content={a.name}>
                <a
                  href={`#agent-${a.id}`}
                  className={cx(s.railAgent, current && s.railAgentActive)}
                  aria-label={`Apri ${a.name}`}
                  aria-current={current ? 'true' : undefined}
                  onClick={e => {
                    e.preventDefault()
                    onNavigate(area === 'agent' ? active : 'contents', a)
                  }}
                >
                  <AgentAvatar
                    agent={a}
                    size="md"
                  />
                </a>
              </Tooltip>
            </li>
          )
        })}
      </ul>

      <ul className={cx(s.railList, s.railFooter)}>
        <li>
          <RailLink
            href="#admin-agents"
            label="Admin"
            icon={<ShieldCheck size={20} />}
            current={area === 'admin'}
            onClick={() => onNavigate('admin-agents')}
          />
        </li>
        <li>
          <RailLink
            href="https://docs.aisuru.com/"
            label="Docs"
            icon={<BookOpen size={20} />}
            external
          />
        </li>
      </ul>
    </nav>
  )
}
