import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AgentGeneralSettings } from './AgentGeneralSettings'
import { AgentAISettings } from './AgentAISettings'

const meta = {
  title: 'Real Examples/Agent settings',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Screens composed from Memori UI primitives to mirror real product layouts (forms, selects, tooltips).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

/**
 * General settings: name, description, visibility, language — Italian copy as in the reference.
 */
export const Generali: Story = {
  name: 'Generali',
  render: () => <AgentGeneralSettings />,
}

/**
 * AI settings: response mechanism (radios), model select, instructions with character count.
 */
export const IA: Story = {
  name: 'IA',
  render: () => <AgentAISettings />,
}
