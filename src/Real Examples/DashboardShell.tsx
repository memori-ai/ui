import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import cx from 'classnames'
import { AlertProvider, AlertViewport } from '../components/Alert'
import { ItalianTableChrome } from './italianChrome'
import styles from './realExamples.module.css'
import { AppHeader } from './shell/AppHeader'
import { AppSidebar } from './shell/AppSidebar'
import { AgentBreadcrumbs } from './shell/AgentBreadcrumbs'
import { AppRail } from './shell/AppRail'
import { AreaHeader } from './shell/AreaHeader'
import { AgentTestPanel } from './shell/AgentTestPanel'
import { AgentSubnav, TopNavLinks } from './shell/AppTopNav'
import { AgentChatLauncher } from './shell/AgentChatLauncher'
import type { AgentChatMode } from './shell/agentChat'
import layouts from './shell/layouts.module.css'

const COLLAPSE_KEY = 'aisuru-sidebar-collapsed'

function readCollapsed() {
  try {
    return localStorage.getItem(COLLAPSE_KEY) === '1'
  } catch {
    return false
  }
}
import {
  ShellNavContext,
  areaOf,
  labelOf,
  type SectionId,
  type ShellAgent,
} from './shell/navigation'

import { HomeDashboard, YOUR_AGENTS } from './TopLevel/HomeDashboard'
import { BoardOfExpertsDashboard } from './TopLevel/BoardOfExpertsDashboard'
import { VirtualSpacesDashboard } from './TopLevel/VirtualSpacesDashboard'
import { AccountDashboard } from './TopLevel/AccountDashboard'
import { BadgesDashboard } from './TopLevel/BadgesDashboard'
import { ModelsDashboard } from './TopLevel/ModelsDashboard'
import { UploadsDashboard } from './TopLevel/UploadsDashboard'
import { FeedbackDashboard } from './TopLevel/FeedbackDashboard'
import { ChangelogDashboard } from './TopLevel/ChangelogDashboard'
import { NotificationsDashboard } from './TopLevel/NotificationsDashboard'

import { ContentListDashboard } from './ContentListDashboard'
import { ConversationsDashboard } from './ConversationsDashboard'
import { ExpertsDashboard } from './ExpertsDashboard'
import { IntegrationsDashboard } from './IntegrationsDashboard'
import { ContactsDashboard } from './ContactsDashboard'
import { DictionaryDashboard } from './DictionaryDashboard'
import { FunctionsDashboard } from './FunctionsDashboard'
import { McpDashboard } from './McpDashboard'
import { ImportExportDashboard } from './ImportExportDashboard'
import { StatisticsDashboard } from './StatisticsDashboard'
import { SettingsDashboard } from './SettingsDashboard'
import { DeveloperDashboard } from './DeveloperDashboard'

import { AdminAgentsDashboard } from './Admin/AdminAgentsDashboard'
import { AdminUsersDashboard } from './Admin/AdminUsersDashboard'
import { AdminSetupDashboard } from './Admin/AdminSetupDashboard'
import { TrustedApplicationsDashboard } from './Admin/TrustedApplicationsDashboard'
import { AdminConsumptionsDashboard } from './Admin/AdminConsumptionsDashboard'

function renderSection(id: SectionId) {
  switch (id) {
    case 'home':
      return <HomeDashboard />
    case 'board-of-experts':
      return <BoardOfExpertsDashboard />
    case 'virtual-spaces':
      return <VirtualSpacesDashboard />
    case 'account':
      return <AccountDashboard />
    case 'badges':
      return <BadgesDashboard />
    case 'models':
      return <ModelsDashboard />
    case 'uploads':
      return <UploadsDashboard />
    case 'feedback':
      return <FeedbackDashboard />
    case 'changelog':
      return <ChangelogDashboard />
    case 'notifications':
      return <NotificationsDashboard />
    case 'contents':
      return <ContentListDashboard />
    case 'conversations':
      return <ConversationsDashboard />
    case 'experts':
      return <ExpertsDashboard />
    case 'integrations':
      return <IntegrationsDashboard />
    case 'contacts':
      return <ContactsDashboard />
    case 'dictionary':
      return <DictionaryDashboard />
    case 'functions':
      return <FunctionsDashboard />
    case 'mcp':
      return <McpDashboard />
    case 'import-export':
      return <ImportExportDashboard />
    case 'statistics':
      return <StatisticsDashboard />
    case 'settings':
      return <SettingsDashboard />
    case 'developer':
      return <DeveloperDashboard />
    case 'admin-agents':
      return <AdminAgentsDashboard />
    case 'admin-users':
      return <AdminUsersDashboard />
    case 'admin-setup':
      return <AdminSetupDashboard />
    case 'admin-trusted-apps':
      return <TrustedApplicationsDashboard />
    case 'admin-consumptions':
      return <AdminConsumptionsDashboard />
    default:
      return null
  }
}

const AGENTS: ShellAgent[] = YOUR_AGENTS

/**
 * Single Real Examples shell: global header, context-aware sidebar and, inside
 * an agent, breadcrumbs above the page.
 */
export type ShellChrome = 'default' | 'gradient-sidebar' | 'gradient-header'

/**
 * How navigation and “Prova” work:
 * - `sidebar`: context-aware sidebar + breadcrumbs, Prova in a modal drawer.
 * - `rail`: fixed icon rail, area header with section links, Prova docked
 *   beside the page.
 * - `topnav`: navigation in the header + agent subnav with group menus,
 *   Prova as a floating, non-modal chat bubble.
 * Phones always use the drawer sidebar.
 */
export type ShellLayout = 'sidebar' | 'rail' | 'topnav'

export function DashboardShell({
  chrome = 'default',
  layout = 'sidebar',
}: {
  /** Where to paint the Aisuru brand gradient (teal → violet). */
  chrome?: ShellChrome
  layout?: ShellLayout
} = {}) {
  const [active, setActive] = useState<SectionId>('home')
  const [agent, setAgent] = useState<ShellAgent>(AGENTS[0]!)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [testMode, setTestMode] = useState<AgentChatMode | null>(null)
  const [collapsed, setCollapsed] = useState(readCollapsed)
  const toggleCollapsed = useCallback(() => {
    setCollapsed(c => {
      try {
        localStorage.setItem(COLLAPSE_KEY, c ? '0' : '1')
      } catch {
        /* storage unavailable: keep it for this session only */
      }
      return !c
    })
  }, [])
  const mainRef = useRef<HTMLElement>(null)

  const navigate = useCallback((id: SectionId, next?: ShellAgent) => {
    if (next) setAgent(next)
    setActive(id)
    setSidebarOpen(false)
    mainRef.current?.scrollTo({ top: 0 })
  }, [])
  const nav = useMemo(() => ({ navigate }), [navigate])

  useEffect(() => {
    if (!sidebarOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [sidebarOpen])

  const area = areaOf(active)
  const inAgent = area === 'agent'
  const isSidebar = layout === 'sidebar'

  return (
    <ItalianTableChrome>
      <AlertProvider>
        <ShellNavContext.Provider value={nav}>
          <div
            className={cx(
              styles.appShell,
              chrome === 'gradient-sidebar' && styles.appShellGradientSidebar,
              chrome === 'gradient-header' && styles.appShellGradientHeader,
            )}
          >
            <AppHeader
              active={active}
              unreadNotifications={3}
              sidebarOpen={sidebarOpen}
              onToggleSidebar={() => setSidebarOpen(o => !o)}
              onNavigate={navigate}
              primaryNav={
                layout === 'topnav' ? (
                  <TopNavLinks
                    active={active}
                    onNavigate={navigate}
                  />
                ) : null
              }
            />
            {layout === 'topnav' && inAgent ? (
              <AgentSubnav
                active={active}
                agent={agent}
                agents={AGENTS}
                onNavigate={navigate}
              />
            ) : null}
            <div className={styles.appBody}>
              {layout === 'rail' ? (
                <AppRail
                  active={active}
                  agent={agent}
                  agents={AGENTS}
                  onNavigate={navigate}
                />
              ) : null}
              {/* Alternative layouts keep the drawer sidebar for phones only. */}
              <AppSidebar
                active={active}
                agent={agent}
                agents={AGENTS}
                open={sidebarOpen}
                onNavigate={navigate}
                className={isSidebar ? undefined : layouts.mobileOnly}
                collapsed={isSidebar && collapsed}
                onToggleCollapsed={isSidebar ? toggleCollapsed : undefined}
              />
              <div
                className={cx(
                  styles.appScrim,
                  sidebarOpen && styles.appScrimVisible,
                )}
                aria-hidden
                onClick={() => setSidebarOpen(false)}
              />
              <main
                ref={mainRef}
                className={cx(
                  styles.dashboardMain,
                  layout === 'topnav' && inAgent && layouts.mainWithLauncher,
                )}
                aria-label={
                  inAgent
                    ? `${agent.name} · ${labelOf(active)}`
                    : labelOf(active)
                }
              >
                {isSidebar && inAgent ? (
                  <AgentBreadcrumbs
                    active={active}
                    agent={agent}
                    onNavigate={navigate}
                    testMode={testMode}
                    onTestModeChange={setTestMode}
                  />
                ) : null}
                {layout === 'rail' && area !== 'workspace' ? (
                  <AreaHeader
                    area={area}
                    active={active}
                    agent={agent}
                    agents={AGENTS}
                    onNavigate={navigate}
                    testOpen={testMode != null}
                    onToggleTest={() => setTestMode(m => (m ? null : 'prova'))}
                  />
                ) : null}
                {/* key: remount the page when switching agent */}
                <React.Fragment key={inAgent ? agent.id : 'workspace'}>
                  {renderSection(active)}
                </React.Fragment>
              </main>
              {layout !== 'topnav' && inAgent && testMode ? (
                <AgentTestPanel
                  key={agent.id}
                  agent={agent}
                  mode={testMode}
                  onModeChange={setTestMode}
                  onClose={() => setTestMode(null)}
                />
              ) : null}
              {layout === 'topnav' && inAgent ? (
                <AgentChatLauncher
                  key={agent.id}
                  agent={agent}
                />
              ) : null}
            </div>
          </div>
        </ShellNavContext.Provider>
        <AlertViewport placement="top-end" />
      </AlertProvider>
    </ItalianTableChrome>
  )
}
