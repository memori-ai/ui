import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Callout } from './Callout'

const meta = {
  title: 'Feedback/Callout',
  component: Callout,
  tags: ['autodocs'],
  args: {
    severity: 'info',
    title: 'Novità: Canali di messaggistica',
    children:
      'Collega Telegram e WhatsApp ai tuoi Agenti dalla sezione Integrazioni.',
  },
  argTypes: {
    severity: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      table: { defaultValue: { summary: 'info' } },
    },
    title: { control: 'text' },
    children: { control: 'text' },
    action: { control: false },
    icon: { control: false },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Inline, persistent message in the page flow (notices, warnings, validation summaries). For transient notifications use `Alert` toasts.',
      },
    },
  },
} satisfies Meta<typeof Callout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <Callout
        severity="info"
        title="Info"
      >
        Le domande senza risposta sono disponibili con l&apos;IA generativa
        disattivata.
      </Callout>
      <Callout
        severity="success"
        title="Pubblicato"
      >
        L&apos;agente è online.
      </Callout>
      <Callout severity="warning">
        Non conosco la parola &quot;blendshape&quot;
      </Callout>
      <Callout
        severity="error"
        title="Connessione non riuscita"
      >
        Controlla l&apos;URL del server MCP e riprova.
      </Callout>
    </div>
  ),
}

export const WithAction: Story = {
  args: {
    severity: 'warning',
    title: undefined,
    children: 'Non conosco la parola "blendshape"',
    action: (
      <Button
        variant="outline"
        size="sm"
      >
        Insegnamela
      </Button>
    ),
  },
}
