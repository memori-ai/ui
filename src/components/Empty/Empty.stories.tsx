import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { SearchX } from 'lucide-react'
import { Empty } from './Empty'
import { Button } from '../Button'

const meta = {
  title: 'Feedback/Empty',
  component: Empty,
  tags: ['autodocs'],
  argTypes: {
    description: {
      control: 'text',
      description: 'Message explaining the empty state (no default text)',
    },
    icon: { control: false },
    extra: { control: false },
    className: { control: 'text' },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Placeholder for lists, grids and panels with no data. Visually aligned with the Table empty row. No built-in text: the product passes a translated `description`.',
      },
    },
  },
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    description: 'No agents yet',
  },
}

export const IconOnly: Story = {
  args: {},
}

export const WithExtra: Story = {
  args: {
    description: 'No agents yet',
    extra: (
      <Button
        size="sm"
        onClick={fn()}
      >
        Create agent
      </Button>
    ),
  },
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Empty description="No data" />
      <Empty
        icon={<SearchX />}
        description="No results match your filters"
        extra={
          <Button
            size="sm"
            variant="outline"
            onClick={fn()}
          >
            Clear filters
          </Button>
        }
      />
      <Empty
        icon={null}
        description="Nothing to show (no icon)"
      />
    </div>
  ),
}
