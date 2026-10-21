import React from 'react'
import cx from 'classnames'
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronsUpDown,
  ExternalLink,
  Globe,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react'
import { Avatar } from '../../components/Avatar'
import { Dropdown } from '../../components/Dropdown'
import { NavList } from '../../components/NavList'
import {
  ADMIN_NAV,
  AGENT_NAV,
  WORKSPACE_NAV,
  areaOf,
  type NavGroup,
  type SectionId,
  type ShellAgent,
} from './navigation'
import styles from '../realExamples.module.css'

const ICON = 18
const EXT_ICON = 12

const GLOBAL_LINKS = [
  {
    href: 'https://docs.aisuru.com/',
    label: 'Documentazione',
    icon: <BookOpen size={ICON} />,
  },
  {
    href: 'https://www.aisuru.com',
    label: 'Sito web',
    icon: <Globe size={ICON} />,
  },
] as const

type AppSidebarProps = {
  active: SectionId
  agent: ShellAgent
  agents: ShellAgent[]
  open: boolean
  onNavigate: (id: SectionId, agent?: ShellAgent) => void
  className?: string
  /** Desktop: icons only. Labels stay as accessible names + tooltips. */
  collapsed?: boolean
  /** Shows the collapse toggle when provided. */
  onToggleCollapsed?: () => void
}

export function AgentAvatar({
  agent,
  size = 'sm',
}: {
  agent: ShellAgent
  size?: 'sm' | 'md'
}) {
  return (
    <Avatar
      initials={agent.initials}
      size={size}
      shape="square"
      className={styles.appAgentAvatar}
      style={{ background: agent.coverColor }}
    />
  )
}

function NavGroups({
  groups,
  active,
  onNavigate,
  collapsed,
}: {
  groups: NavGroup[]
  active: SectionId
  onNavigate: (id: SectionId) => void
  collapsed?: boolean
}) {
  return (
    <NavList>
      {groups.map((group, i) => (
        <NavList.Group
          key={group.label ?? i}
          label={group.label}
        >
          {group.items.map(item => (
            <NavList.Item
              key={item.id}
              href={`#${item.id}`}
              icon={item.icon}
              active={active === item.id}
              title={collapsed ? item.label : undefined}
              onClick={e => {
                e.preventDefault()
                onNavigate(item.id)
              }}
            >
              {item.label}
            </NavList.Item>
          ))}
        </NavList.Group>
      ))}
    </NavList>
  )
}

/** Desktop-only toggle between full and icons-only sidebar. */
function CollapseToggle({
  collapsed,
  onToggle,
}: {
  collapsed: boolean
  onToggle: () => void
}) {
  const label = collapsed ? 'Espandi menu' : 'Comprimi menu'
  return (
    <NavList className={styles.appSidebarCollapse}>
      <NavList.Group>
        <NavList.Item
          icon={
            collapsed ? (
              <PanelLeftOpen size={ICON} />
            ) : (
              <PanelLeftClose size={ICON} />
            )
          }
          title={collapsed ? label : undefined}
          onClick={onToggle}
        >
          {label}
        </NavList.Item>
      </NavList.Group>
    </NavList>
  )
}

/** Sticky bottom chrome: optional admin nav, global docs + website, collapse. */
function SidebarFooter({
  showAdmin,
  active,
  onNavigate,
  collapsed,
  toggle,
}: {
  showAdmin: boolean
  active: SectionId
  onNavigate: (id: SectionId) => void
  collapsed: boolean
  toggle: React.ReactNode
}) {
  return (
    <div className={styles.appSidebarFooter}>
      {showAdmin ? (
        <NavGroups
          groups={ADMIN_NAV}
          active={active}
          onNavigate={onNavigate}
          collapsed={collapsed}
        />
      ) : null}
      <NavList>
        <NavList.Group>
          {GLOBAL_LINKS.map(link => (
            <NavList.Item
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              icon={link.icon}
              title={collapsed ? link.label : undefined}
              trailing={
                <ExternalLink
                  size={EXT_ICON}
                  aria-hidden
                />
              }
            >
              {link.label}
            </NavList.Item>
          ))}
        </NavList.Group>
      </NavList>
      {toggle}
    </div>
  )
}

/**
 * Context-aware sidebar. Workspace pages show account navigation plus quick
 * access to recent agents, with admin + global docs/website in the footer.
 * Inside an agent it swaps to that agent's sections (no global links).
 * On desktop it can collapse to icons; the choice is remembered.
 */
export function AppSidebar({
  active,
  agent,
  agents,
  open,
  onNavigate,
  className,
  collapsed = false,
  onToggleCollapsed,
}: AppSidebarProps) {
  const inAgent = areaOf(active) === 'agent'
  const toggle = onToggleCollapsed ? (
    <CollapseToggle
      collapsed={collapsed}
      onToggle={onToggleCollapsed}
    />
  ) : null

  return (
    <nav
      id="app-sidebar"
      className={cx(
        styles.appSidebar,
        open && styles.appSidebarOpen,
        collapsed && styles.appSidebarCollapsed,
        className,
      )}
      aria-label={
        inAgent ? `Sezioni di ${agent.name}` : 'Navigazione principale'
      }
    >
      {inAgent ? (
        <>
          <a
            href="#home"
            className={styles.appBackLink}
            title={collapsed ? 'Tutti gli agenti' : undefined}
            onClick={e => {
              e.preventDefault()
              onNavigate('home')
            }}
          >
            <ArrowLeft
              size={16}
              aria-hidden
            />
            <span className={styles.appBackLinkText}>Tutti gli agenti</span>
          </a>

          <Dropdown>
            <Dropdown.Trigger
              className={styles.appAgentSwitcher}
              showChevron={false}
              aria-label={`Agente corrente: ${agent.name}. Cambia agente`}
            >
              <AgentAvatar
                agent={agent}
                size="md"
              />
              <span className={styles.appAgentSwitcherText}>
                <span className={styles.appAgentSwitcherHint}>Agente</span>
                <span className={styles.appAgentSwitcherName}>
                  {agent.name}
                </span>
              </span>
              <ChevronsUpDown
                size={16}
                aria-hidden
                className={styles.appAgentSwitcherChevron}
              />
            </Dropdown.Trigger>
            <Dropdown.Menu className={styles.appAgentMenu}>
              {agents.map(a => (
                <Dropdown.Item
                  key={a.id}
                  onClick={() => onNavigate(active, a)}
                >
                  <AgentAvatar agent={a} />
                  <span className={styles.appAgentMenuName}>{a.name}</span>
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

          <NavGroups
            groups={AGENT_NAV}
            active={active}
            onNavigate={onNavigate}
            collapsed={collapsed}
          />

          {toggle ? (
            <div className={styles.appSidebarFooter}>{toggle}</div>
          ) : null}
        </>
      ) : (
        <>
          <NavGroups
            groups={WORKSPACE_NAV}
            active={active}
            onNavigate={onNavigate}
            collapsed={collapsed}
          />

          <NavList>
            <NavList.Group label="Agenti recenti">
              {agents.slice(0, 3).map(a => (
                <NavList.Item
                  key={a.id}
                  href={`#agent-${a.id}`}
                  icon={<AgentAvatar agent={a} />}
                  title={collapsed ? a.name : undefined}
                  onClick={e => {
                    e.preventDefault()
                    onNavigate('contents', a)
                  }}
                >
                  {a.name}
                </NavList.Item>
              ))}
            </NavList.Group>
          </NavList>

          <SidebarFooter
            showAdmin
            active={active}
            onNavigate={onNavigate}
            collapsed={collapsed}
            toggle={toggle}
          />
        </>
      )}
    </nav>
  )
}
