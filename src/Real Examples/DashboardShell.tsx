import React, { useState } from 'react'
import cx from 'classnames'
import { ItalianTableChrome } from './italianChrome'
import styles from './realExamples.module.css'

import { HomeDashboard } from './TopLevel/HomeDashboard'
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
import { FollowersDashboard } from './FollowersDashboard'
import { DictionaryDashboard } from './DictionaryDashboard'
import { FunctionsDashboard } from './FunctionsDashboard'
import { McpDashboard } from './McpDashboard'
import { ImportExportDashboard } from './ImportExportDashboard'
import { StatisticsDashboard } from './StatisticsDashboard'
import { SettingsDashboard } from './SettingsDashboard'
import { AgentGeneralSettings } from './AgentGeneralSettings'
import { AgentAISettings } from './AgentAISettings'
import { DeveloperDashboard } from './DeveloperDashboard'

import { AdminAgentsDashboard } from './Admin/AdminAgentsDashboard'
import { AdminUsersDashboard } from './Admin/AdminUsersDashboard'
import { AdminTenantsDashboard } from './Admin/AdminTenantsDashboard'
import { AdminSetupDashboard } from './Admin/AdminSetupDashboard'
import { TrustedApplicationsDashboard } from './Admin/TrustedApplicationsDashboard'
import { AdminConsumptionsDashboard } from './Admin/AdminConsumptionsDashboard'

type SectionId =
  | 'home'
  | 'board-of-experts'
  | 'virtual-spaces'
  | 'account'
  | 'badges'
  | 'models'
  | 'uploads'
  | 'feedback'
  | 'changelog'
  | 'notifications'
  | 'contents'
  | 'conversations'
  | 'experts'
  | 'integrations'
  | 'contacts'
  | 'followers'
  | 'dictionary'
  | 'functions'
  | 'mcp'
  | 'import-export'
  | 'statistics'
  | 'settings'
  | 'settings-generali'
  | 'settings-ia'
  | 'developer'
  | 'admin-agents'
  | 'admin-users'
  | 'admin-tenants'
  | 'admin-setup'
  | 'admin-trusted-apps'
  | 'admin-consumptions'

type NavItem = { id: SectionId; label: string }
type NavGroup = { label: string; items: NavItem[] }

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Top-level',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'board-of-experts', label: 'Board of Experts' },
      { id: 'virtual-spaces', label: 'Spazi virtuali' },
      { id: 'account', label: 'Account' },
      { id: 'badges', label: 'Badge' },
      { id: 'models', label: 'Modelli' },
      { id: 'uploads', label: 'Uploads' },
      { id: 'feedback', label: 'Feedback' },
      { id: 'changelog', label: 'Changelog' },
      { id: 'notifications', label: 'Notifiche' },
    ],
  },
  {
    label: 'Agente',
    items: [
      { id: 'contents', label: 'Contenuti' },
      { id: 'conversations', label: 'Conversazioni' },
      { id: 'experts', label: 'Esperti' },
      { id: 'integrations', label: 'Integrazioni' },
      { id: 'contacts', label: 'Contatti' },
      { id: 'followers', label: 'Followers' },
      { id: 'dictionary', label: 'Dizionario' },
      { id: 'functions', label: 'Funzioni' },
      { id: 'mcp', label: 'MCP' },
      { id: 'import-export', label: 'Import / Export' },
      { id: 'statistics', label: 'Statistiche' },
      { id: 'settings', label: 'Impostazioni' },
      { id: 'settings-generali', label: 'Impostazioni · Generali' },
      { id: 'settings-ia', label: 'Impostazioni · IA' },
      { id: 'developer', label: 'Developer' },
    ],
  },
  {
    label: 'Admin',
    items: [
      { id: 'admin-agents', label: 'Agenti' },
      { id: 'admin-users', label: 'Utenti' },
      { id: 'admin-tenants', label: 'Tenant' },
      { id: 'admin-setup', label: 'Setup' },
      { id: 'admin-trusted-apps', label: 'Trusted apps' },
      { id: 'admin-consumptions', label: 'Consumi' },
    ],
  },
]

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
    case 'followers':
      return <FollowersDashboard />
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
    case 'settings-generali':
      return <AgentGeneralSettings />
    case 'settings-ia':
      return <AgentAISettings />
    case 'developer':
      return <DeveloperDashboard />
    case 'admin-agents':
      return <AdminAgentsDashboard />
    case 'admin-users':
      return <AdminUsersDashboard />
    case 'admin-tenants':
      return <AdminTenantsDashboard />
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

/**
 * Single Real Examples shell: side navigation across all product dashboards.
 */
export function DashboardShell() {
  const [active, setActive] = useState<SectionId>('home')

  return (
    <ItalianTableChrome>
      <div className={styles.dashboardShell}>
        <aside
          className={styles.dashboardSideNav}
          aria-label="Sezioni Real Examples"
        >
          {NAV_GROUPS.map(group => (
            <div
              key={group.label}
              className={styles.dashboardNavGroup}
            >
              <p className={styles.dashboardNavGroupLabel}>{group.label}</p>
              <ul className={styles.dashboardNavList}>
                {group.items.map(item => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={cx(
                        styles.dashboardNavItem,
                        active === item.id && styles.dashboardNavItemActive,
                      )}
                      aria-current={active === item.id ? 'page' : undefined}
                      onClick={() => setActive(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
        <main className={styles.dashboardMain}>{renderSection(active)}</main>
      </div>
    </ItalianTableChrome>
  )
}
