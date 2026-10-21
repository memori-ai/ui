import React, { createContext, useContext } from 'react'
import {
  BarChart3,
  BookA,
  Code2,
  Cpu,
  FileText,
  FolderUp,
  GraduationCap,
  Home,
  KeyRound,
  LayoutGrid,
  MessagesSquare,
  Plug,
  Receipt,
  Repeat,
  Server,
  Settings,
  SlidersHorizontal,
  Sparkles,
  UserRound,
  Users,
  UsersRound,
  Wrench,
} from 'lucide-react'

export type SectionId =
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
  | 'dictionary'
  | 'functions'
  | 'mcp'
  | 'import-export'
  | 'statistics'
  | 'settings'
  | 'developer'
  | 'admin-agents'
  | 'admin-users'
  | 'admin-setup'
  | 'admin-trusted-apps'
  | 'admin-consumptions'

/** Workspace = account-level pages; agent = pages scoped to one agent. */
export type Area = 'workspace' | 'agent' | 'admin'

export type NavItem = {
  id: SectionId
  label: string
  icon: React.ReactNode
}

export type NavGroup = {
  /** Omitted for the first, unlabeled group. */
  label?: string
  items: NavItem[]
}

const ICON = 18

export const WORKSPACE_NAV: NavGroup[] = [
  {
    items: [
      { id: 'home', label: 'I miei agenti', icon: <Home size={ICON} /> },
      {
        id: 'board-of-experts',
        label: 'Board of Experts',
        icon: <GraduationCap size={ICON} />,
      },
      {
        id: 'virtual-spaces',
        label: 'Spazi virtuali',
        icon: <LayoutGrid size={ICON} />,
      },
    ],
  },
  {
    label: 'Risorse',
    items: [
      { id: 'models', label: 'Modelli', icon: <Cpu size={ICON} /> },
      { id: 'uploads', label: 'Uploads', icon: <FolderUp size={ICON} /> },
    ],
  },
]

export const AGENT_NAV: NavGroup[] = [
  {
    label: 'Conoscenza',
    items: [
      { id: 'contents', label: 'Contenuti', icon: <FileText size={ICON} /> },
      { id: 'dictionary', label: 'Dizionario', icon: <BookA size={ICON} /> },
      { id: 'experts', label: 'Esperti', icon: <UsersRound size={ICON} /> },
    ],
  },
  {
    label: 'Pubblico',
    items: [
      {
        id: 'conversations',
        label: 'Conversazioni',
        icon: <MessagesSquare size={ICON} />,
      },
      { id: 'contacts', label: 'Contatti', icon: <UserRound size={ICON} /> },
      {
        id: 'statistics',
        label: 'Statistiche',
        icon: <BarChart3 size={ICON} />,
      },
    ],
  },
  {
    label: 'Strumenti',
    items: [
      { id: 'functions', label: 'Funzioni', icon: <Wrench size={ICON} /> },
      { id: 'mcp', label: 'MCP', icon: <Server size={ICON} /> },
      {
        id: 'integrations',
        label: 'Integrazioni',
        icon: <Plug size={ICON} />,
      },
    ],
  },
  {
    label: 'Configurazione',
    items: [
      {
        id: 'settings',
        label: 'Impostazioni',
        icon: <Settings size={ICON} />,
      },
      {
        id: 'import-export',
        label: 'Import / Export',
        icon: <Repeat size={ICON} />,
      },
      { id: 'developer', label: 'Developer', icon: <Code2 size={ICON} /> },
    ],
  },
]

export const ADMIN_NAV: NavGroup[] = [
  {
    label: 'Amministrazione',
    items: [
      { id: 'admin-agents', label: 'Agenti', icon: <Sparkles size={ICON} /> },
      { id: 'admin-users', label: 'Utenti', icon: <Users size={ICON} /> },
      {
        id: 'admin-setup',
        label: 'Setup',
        icon: <SlidersHorizontal size={ICON} />,
      },
      {
        id: 'admin-trusted-apps',
        label: 'Trusted apps',
        icon: <KeyRound size={ICON} />,
      },
      {
        id: 'admin-consumptions',
        label: 'Consumi',
        icon: <Receipt size={ICON} />,
      },
    ],
  },
]

/** Pages reached from the header (user menu, notifications) rather than the sidebar. */
const HEADER_PAGES: Partial<Record<SectionId, string>> = {
  account: 'Account',
  badges: 'Badge',
  feedback: 'Feedback',
  changelog: 'Novità',
  notifications: 'Notifiche',
}

const findItem = (groups: NavGroup[], id: SectionId) => {
  for (const group of groups) {
    const item = group.items.find(i => i.id === id)
    if (item) return { group, item }
  }
  return null
}

export function areaOf(id: SectionId): Area {
  if (findItem(AGENT_NAV, id)) return 'agent'
  if (findItem(ADMIN_NAV, id)) return 'admin'
  return 'workspace'
}

export function labelOf(id: SectionId): string {
  return (
    findItem([...WORKSPACE_NAV, ...AGENT_NAV, ...ADMIN_NAV], id)?.item.label ??
    HEADER_PAGES[id] ??
    id
  )
}

export function agentGroupOf(id: SectionId): string | undefined {
  return findItem(AGENT_NAV, id)?.group.label
}

/** Minimal agent shape the shell needs (subset of `Agent`). */
export type ShellAgent = {
  id: string
  name: string
  initials: string
  coverColor: string
}

type ShellNav = {
  navigate: (id: SectionId, agent?: ShellAgent) => void
}

export const ShellNavContext = createContext<ShellNav | null>(null)

/** Shell navigation; `null` when a dashboard is rendered outside the shell. */
export function useShellNav() {
  return useContext(ShellNavContext)
}
