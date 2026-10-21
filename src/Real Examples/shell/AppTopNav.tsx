import React from 'react'
import cx from 'classnames'
import { Check, ChevronDown, ChevronsUpDown, ExternalLink } from 'lucide-react'
import { Button } from '../../components/Button'
import { Dropdown } from '../../components/Dropdown'
import { useNotify } from '../shared/useNotify'
import { AgentAvatar } from './AppSidebar'
import {
  ADMIN_NAV,
  AGENT_NAV,
  WORKSPACE_NAV,
  areaOf,
  type NavGroup,
  type NavItem,
  type SectionId,
  type ShellAgent,
} from './navigation'
import s from './layouts.module.css'

/** A dropdown whose trigger reads as a nav item and lights up when one of its pages is open. */
function MenuGroup({
  label,
  items,
  active,
  onNavigate,
  className,
  showCurrent,
}: {
  label: string
  items: NavItem[]
  active: SectionId
  onNavigate: (id: SectionId) => void
  className?: string
  /** Append the open page to the trigger (“Pubblico · Statistiche”). */
  showCurrent?: boolean
}) {
  const current = items.find(i => i.id === active)
  return (
    <Dropdown>
      <Dropdown.Trigger
        className={cx(s.topLink, current && s.topLinkActive, className)}
        showChevron={false}
      >
        {label}
        {showCurrent && current ? (
          <span className={s.topLinkCurrent}>· {current.label}</span>
        ) : null}
        <ChevronDown
          size={14}
          aria-hidden
        />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        {items.map(item => (
          <Dropdown.Item
            key={item.id}
            onClick={() => onNavigate(item.id)}
          >
            <span
              className={s.menuIcon}
              aria-hidden
            >
              {item.icon}
            </span>
            <span className={s.menuGrow}>{item.label}</span>
            {item.id === active ? (
              <Check
                size={16}
                aria-label="Pagina corrente"
              />
            ) : null}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

/**
 * Example 4 — primary navigation in the header (desktop): the three workspace
 * destinations as links, the rest in menus. Phones keep the drawer.
 */
export function TopNavLinks({
  active,
  onNavigate,
}: {
  active: SectionId
  onNavigate: (id: SectionId) => void
}) {
  const [main, resources] = WORKSPACE_NAV as [NavGroup, NavGroup]
  const inAgent = areaOf(active) === 'agent'
  return (
    <nav
      className={s.topNav}
      aria-label="Navigazione principale"
    >
      {main.items.map(item => {
        const current = item.id === active || (item.id === 'home' && inAgent)
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cx(s.topLink, current && s.topLinkActive)}
            aria-current={current ? 'page' : undefined}
            onClick={e => {
              e.preventDefault()
              onNavigate(item.id)
            }}
          >
            {item.label}
          </a>
        )
      })}
      <MenuGroup
        label={resources.label ?? 'Risorse'}
        items={resources.items}
        active={active}
        onNavigate={onNavigate}
      />
      <MenuGroup
        label="Admin"
        items={ADMIN_NAV.flatMap(g => g.items)}
        active={active}
        onNavigate={onNavigate}
      />
    </nav>
  )
}

/**
 * Example 4 — agent bar under the header: switcher, one menu per group
 * (Conoscenza, Pubblico, …) and the current page named on the right of the
 * active group, so position is readable without breadcrumbs.
 */
export function AgentSubnav({
  active,
  agent,
  agents,
  onNavigate,
}: {
  active: SectionId
  agent: ShellAgent
  agents: ShellAgent[]
  onNavigate: (id: SectionId, agent?: ShellAgent) => void
}) {
  const notify = useNotify()
  return (
    <div className={s.subnav}>
      <Dropdown>
        <Dropdown.Trigger
          className={s.subnavSwitcher}
          showChevron={false}
          aria-label={`Agente corrente: ${agent.name}. Cambia agente`}
        >
          <AgentAvatar agent={agent} />
          <span className={s.subnavAgentName}>{agent.name}</span>
          <ChevronsUpDown
            size={14}
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

      <span
        className={s.subnavDivider}
        aria-hidden
      />

      <nav
        className={s.subnavGroups}
        aria-label={`Sezioni di ${agent.name}`}
      >
        {AGENT_NAV.map(group => (
          <MenuGroup
            key={group.label}
            label={group.label ?? ''}
            items={group.items}
            active={active}
            onNavigate={onNavigate}
            className={s.subnavGroup}
            showCurrent
          />
        ))}
      </nav>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        className={cx(s.subnavEnd, s.hideOnPhone)}
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
    </div>
  )
}
