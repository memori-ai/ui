import React, { useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { memoriI18n } from '../i18n/i18n'
import { ContentListDashboard } from './ContentListDashboard'
import { ConversationsDashboard } from './ConversationsDashboard'

function ItalianTableChrome({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    void memoriI18n.changeLanguage('it')
    return () => {
      void memoriI18n.changeLanguage('en')
    }
  }, [])
  return children
}

const meta = {
  title: 'Real Examples/Dashboards',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Schermate composte con Section, Tabs, Input, Table e paginazione — dati mock e testi in italiano come nei riferimenti.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ItalianTableChrome>
        <Story />
      </ItalianTableChrome>
    ),
  ],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

/**
 * Tab “Contenuti”, ricerca, filtri, tabella con colonne domanda/risposta/tag e paginazione dettagliata.
 */
export const Contenuti: Story = {
  name: 'Lista contenuti',
  render: () => <ContentListDashboard />,
}

/**
 * Intestazione Conversazioni, filtri e tabella con ordinamento e azioni Apri / Elimina.
 */
export const Conversazioni: Story = {
  name: 'Conversazioni',
  render: () => <ConversationsDashboard />,
}
