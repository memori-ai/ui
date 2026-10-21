import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  BarChart3,
  BookA,
  FileText,
  MessagesSquare,
  Settings,
  UsersRound,
} from 'lucide-react'
import { NavList } from './NavList'

const meta = {
  title: 'Azioni e navigazione/NavList',
  component: NavList,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Vertical navigation or selection list with optional group headings. `NavList.Item` renders a link with `href` (`aria-current="page"` when active) or a button otherwise (`aria-current="true"`). Wrap items in `NavList.Group`.',
      },
    },
  },
} satisfies Meta<typeof NavList>

export default meta
type Story = StoryObj<typeof meta>

const SECTIONS = [
  {
    group: 'Conoscenza',
    id: 'contents',
    label: 'Contenuti',
    icon: <FileText size={18} />,
  },
  {
    group: 'Conoscenza',
    id: 'dictionary',
    label: 'Dizionario',
    icon: <BookA size={18} />,
  },
  {
    group: 'Conoscenza',
    id: 'experts',
    label: 'Esperti',
    icon: <UsersRound size={18} />,
  },
  {
    group: 'Pubblico',
    id: 'conversations',
    label: 'Conversazioni',
    icon: <MessagesSquare size={18} />,
    trailing: 12,
  },
  {
    group: 'Pubblico',
    id: 'statistics',
    label: 'Statistiche',
    icon: <BarChart3 size={18} />,
  },
  {
    group: 'Configurazione',
    id: 'settings',
    label: 'Impostazioni',
    icon: <Settings size={18} />,
  },
]

function Sidebar() {
  const [active, setActive] = useState('contents')
  const groups = [...new Set(SECTIONS.map(s => s.group))]
  return (
    <div style={{ width: 240 }}>
      <NavList>
        {groups.map(g => (
          <NavList.Group
            key={g}
            label={g}
          >
            {SECTIONS.filter(s => s.group === g).map(s => (
              <NavList.Item
                key={s.id}
                href={`#${s.id}`}
                icon={s.icon}
                trailing={s.trailing}
                active={active === s.id}
                onClick={e => {
                  e.preventDefault()
                  setActive(s.id)
                }}
              >
                {s.label}
              </NavList.Item>
            ))}
          </NavList.Group>
        ))}
      </NavList>
    </div>
  )
}

export const Default: Story = { render: () => <Sidebar /> }

export const SelectionList: Story = {
  render: function Render() {
    const [picked, setPicked] = useState('a')
    return (
      <div style={{ width: 240 }}>
        <NavList>
          <NavList.Group>
            {['a', 'b', 'c'].map(id => (
              <NavList.Item
                key={id}
                active={picked === id}
                onClick={() => setPicked(id)}
              >
                Agente {id.toUpperCase()}
              </NavList.Item>
            ))}
            <NavList.Item disabled>Agente bloccato</NavList.Item>
          </NavList.Group>
        </NavList>
      </div>
    )
  },
}
