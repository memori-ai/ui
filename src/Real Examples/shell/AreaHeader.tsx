import React from 'react'
import cx from 'classnames'
import {
  Check,
  ChevronsUpDown,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '../../components/Button'
import { Dropdown } from '../../components/Dropdown'
import { useNotify } from '../shared/useNotify'
import { AgentAvatar } from './AppSidebar'
import {
  ADMIN_NAV,
  AGENT_NAV,
  type NavGroup,
  type SectionId,
  type ShellAgent,
} from './navigation'
import s from './layouts.module.css'

/** Horizontal section links, groups separated by a hairline. Scrolls on overflow. */
function SectionLinks({
  groups,
  active,
  label,
  onNavigate,
}: {
  groups: NavGroup[]
  active: SectionId
  label: string
  onNavigate: (id: SectionId) => void
}) {
  return (
    <nav
      className={s.sectionNav}
      aria-label={label}
    >
      <ul className={s.sectionNavList}>
        {groups.map((group, gi) => (
          <React.Fragment key={group.label ?? gi}>
            {gi > 0 ? (
              <li
                className={s.sectionNavDivider}
                role="presentation"
              />
            ) : null}
            {group.items.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cx(
                    s.sectionNavLink,
                    item.id === active && s.sectionNavLinkActive,
                  )}
                  aria-current={item.id === active ? 'page' : undefined}
                  title={group.label}
                  onClick={e => {
                    e.preventDefault()
                    onNavigate(item.id)
                  }}
                >
                  <span
                    className={s.sectionNavIcon}
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}

type AreaHeaderProps = {
  area: 'agent' | 'admin'
  active: SectionId
  agent: ShellAgent
  agents: ShellAgent[]
  onNavigate: (id: SectionId, agent?: ShellAgent) => void
  /** Agent area: whether the docked test panel is open. */
  testOpen?: boolean
  onToggleTest?: () => void
}

/**
 * Example 3 — identity + sections of the current area, pinned above the page.
 * Agent: switcher, public page, and the “Prova” toggle that docks the chat
 * beside the page (non-modal, so the user can edit and re-test in place).
 */
export function AreaHeader({
  area,
  active,
  agent,
  agents,
  onNavigate,
  testOpen,
  onToggleTest,
}: AreaHeaderProps) {
  const notify = useNotify()

  if (area === 'admin') {
    return (
      <div className={s.areaHeader}>
        <div className={s.areaIdentity}>
          <span
            className={s.areaIcon}
            aria-hidden
          >
            <ShieldCheck size={20} />
          </span>
          <span className={s.areaName}>Amministrazione</span>
        </div>
        <SectionLinks
          groups={ADMIN_NAV}
          active={active}
          label="Sezioni amministrazione"
          onNavigate={onNavigate}
        />
      </div>
    )
  }

  return (
    <div className={s.areaHeader}>
      <div className={s.areaIdentity}>
        <Dropdown>
          <Dropdown.Trigger
            className={s.areaSwitcher}
            showChevron={false}
            aria-label={`Agente corrente: ${agent.name}. Cambia agente`}
          >
            <AgentAvatar
              agent={agent}
              size="md"
            />
            <span className={s.areaName}>{agent.name}</span>
            <ChevronsUpDown
              size={16}
              aria-hidden
              className={s.areaChevron}
            />
          </Dropdown.Trigger>
          <Dropdown.Menu>
            {agents.map(a => (
              <Dropdown.Item
                key={a.id}
                onClick={() => onNavigate(active, a)}
              >
                <AgentAvatar agent={a} />
                <span className={s.menuGrow}>{a.name}</span>
                {a.id === agent.id ? (
                  <Check
                    size={16}
                    aria-label="Selezionato"
                  />
                ) : null}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <div className={s.areaActions}>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className={s.hideOnPhone}
            icon={
              <ExternalLink
                size={16}
                aria-hidden
              />
            }
            onClick={() =>
              notify(`Apertura pagina pubblica di ${agent.name}`, 'info')
            }
          >
            Pagina pubblica
          </Button>
          <Button
            type="button"
            variant={testOpen ? 'soft' : 'primary'}
            size="sm"
            aria-pressed={testOpen}
            aria-controls="agent-test-panel"
            icon={
              <MessageCircle
                size={16}
                aria-hidden
              />
            }
            onClick={onToggleTest}
          >
            {testOpen ? (
              'Chiudi prova'
            ) : (
              <>
                Prova<span className={s.hideOnPhone}>&nbsp;l’agente</span>
              </>
            )}
          </Button>
        </div>
      </div>
      <SectionLinks
        groups={AGENT_NAV}
        active={active}
        label={`Sezioni di ${agent.name}`}
        onNavigate={onNavigate}
      />
    </div>
  )
}
