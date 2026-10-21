import React, { useState } from 'react'
import cx from 'classnames'
import {
  Bell,
  Bot,
  Box,
  Eye,
  Puzzle,
  Save,
  Settings,
  Wrench,
} from 'lucide-react'
import { Button } from '../components/Button'
import { NavList } from '../components/NavList'
import { Section } from '../components/Section'
import { AgentAISettings } from './AgentAISettings'
import { AgentGeneralSettings } from './AgentGeneralSettings'
import {
  AgentAppearanceSettings,
  AgentExtensionsSettings,
  AgentManageSettings,
  AgentNotificationsSettings,
  AgentTenantConnectorsSettings,
} from './AgentSettingsSections'
import { useNotify } from './shared/useNotify'
import styles from './realExamples.module.css'

export type SettingsSectionId =
  | 'general'
  | 'ai'
  | 'appearance'
  | 'preset'
  | 'tenantConnectors'
  | 'notifications'
  | 'manage'

/**
 * SETTINGS = agent "Impostazioni" page (autosave + all sections);
 * EDIT = drawer opened from the agent card; CREATE = new agent drawer.
 */
export type AgentSettingsMode = 'SETTINGS' | 'EDIT' | 'CREATE'

type NavEntry = {
  id: SettingsSectionId
  label: string
  icon: React.ReactNode
  modes: AgentSettingsMode[]
}

const NAV: NavEntry[] = [
  {
    id: 'general',
    label: 'Generali',
    icon: <Settings size={16} />,
    modes: ['SETTINGS', 'EDIT', 'CREATE'],
  },
  {
    id: 'ai',
    label: 'IA',
    icon: <Bot size={16} />,
    modes: ['SETTINGS', 'EDIT', 'CREATE'],
  },
  {
    id: 'appearance',
    label: 'Aspetto',
    icon: <Eye size={16} />,
    modes: ['SETTINGS', 'EDIT', 'CREATE'],
  },
  {
    id: 'preset',
    label: 'Estensioni',
    icon: <Puzzle size={16} />,
    modes: ['SETTINGS', 'EDIT', 'CREATE'],
  },
  {
    id: 'tenantConnectors',
    label: 'Estensioni Memori',
    icon: <Box size={16} />,
    modes: ['SETTINGS', 'EDIT', 'CREATE'],
  },
  {
    id: 'notifications',
    label: 'Notifiche',
    icon: <Bell size={16} />,
    modes: ['SETTINGS', 'EDIT'],
  },
  {
    id: 'manage',
    label: 'Gestisci',
    icon: <Wrench size={16} />,
    modes: ['SETTINGS', 'EDIT'],
  },
]

type AgentSettingsPanelProps = {
  mode: AgentSettingsMode
  initialSection?: SettingsSectionId
  onOpenIntegrations?: () => void
}

/**
 * EditMemoriPanel content: section menu + active section.
 */
export function AgentSettingsPanel({
  mode,
  initialSection = 'general',
  onOpenIntegrations,
}: AgentSettingsPanelProps) {
  const [active, setActive] = useState<SettingsSectionId>(initialSection)
  const entries = NAV.filter(n => n.modes.includes(mode))

  const renderSection = () => {
    switch (active) {
      case 'general':
        return (
          <AgentGeneralSettings
            onNavigate={id => setActive(id as SettingsSectionId)}
          />
        )
      case 'ai':
        return <AgentAISettings />
      case 'appearance':
        return (
          <AgentAppearanceSettings onOpenIntegrations={onOpenIntegrations} />
        )
      case 'preset':
        return <AgentExtensionsSettings />
      case 'tenantConnectors':
        return <AgentTenantConnectorsSettings />
      case 'notifications':
        return <AgentNotificationsSettings />
      case 'manage':
        return <AgentManageSettings />
      default:
        return null
    }
  }

  return (
    <div className={styles.settingsLayout}>
      <nav
        className={styles.settingsNav}
        aria-label="Sezioni impostazioni"
      >
        <NavList>
          <NavList.Group>
            {entries.map(entry => (
              <NavList.Item
                key={entry.id}
                icon={entry.icon}
                active={active === entry.id}
                onClick={() => setActive(entry.id)}
              >
                {entry.label}
              </NavList.Item>
            ))}
          </NavList.Group>
        </NavList>
      </nav>
      <div className={cx(styles.settingsContent, styles.settingsEmbed)}>
        {renderSection()}
      </div>
    </div>
  )
}

/**
 * Agent “Impostazioni” page: autosave badge, manual save and all sections.
 */
export function SettingsDashboard() {
  const notify = useNotify()

  return (
    <div className={styles.page}>
      <Section
        title="Impostazioni"
        description="Gestisci le impostazioni generali, l’IA, l’aspetto e le notifiche del tuo Agente."
        icon={
          <Settings
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        actions={
          <div className={styles.autosaveBar}>
            <span className={styles.autosaveBadge}>
              <Save
                size={14}
                aria-hidden
              />
              Salvataggio automatico attivo
            </span>
            <Button
              type="button"
              variant="primary"
              size="sm"
              icon={
                <Save
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => notify('Il tuo Agente è stato aggiornato!')}
            >
              Salva
            </Button>
          </div>
        }
        className={styles.contentSection}
      />
      <AgentSettingsPanel mode="SETTINGS" />
    </div>
  )
}
