import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MessagesSquare } from 'lucide-react'
import { StatCard } from './StatCard'

const meta = {
  title: 'Contenuto/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  args: {
    label: 'Messaggi',
    value: '12.4k',
    delta: '+8% vs periodo prec.',
    trend: 'up',
  },
  argTypes: {
    trend: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
      table: { defaultValue: { summary: 'neutral' } },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'plain'],
      table: { defaultValue: { summary: 'outlined' } },
    },
    label: { control: 'text' },
    value: { control: 'text' },
    delta: { control: 'text' },
    icon: { control: false },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'One key figure with label and optional comparison. `trend` colors the delta and adds an arrow; keep the direction in the text too. Use `StatCard.Grid` for a responsive row.',
      },
    },
  },
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div style={{ maxWidth: 260 }}>
      <StatCard {...args} />
    </div>
  ),
}

export const Grid: Story = {
  render: () => (
    <StatCard.Grid>
      <StatCard
        label="Messaggi"
        value="12.4k"
        delta="+8% vs periodo prec."
        trend="up"
        icon={<MessagesSquare size={14} />}
      />
      <StatCard
        label="Sessioni"
        value="862"
        delta="+3% vs periodo prec."
        trend="up"
      />
      <StatCard
        label="Token GenAI"
        value="41k"
        delta="−4% vs periodo prec."
        trend="down"
      />
      <StatCard
        label="Utenti unici"
        value="318"
        delta="Invariato"
      />
    </StatCard.Grid>
  ),
}

export const Plain: Story = {
  args: {
    variant: 'plain',
    delta: undefined,
    label: 'Token totali',
    value: '312',
  },
}
