import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell } from 'lucide-react'
import { Badge } from './Badge'
import type { BadgeStatus } from './Badge'

const statuses: BadgeStatus[] = [
  'default',
  'success',
  'warning',
  'error',
  'info',
  'processing',
]

const Anchor = () => (
  <span
    style={{
      display: 'inline-flex',
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--memori-radius-md)',
      background: 'var(--memori-secondary-background)',
      border: '1px solid var(--memori-border-color)',
    }}
  >
    <Bell
      size={20}
      aria-hidden="true"
    />
  </span>
)

const meta = {
  title: 'Feedback/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'Number shown in the badge',
    },
    max: {
      control: 'number',
      description: 'Maximum count shown before `{max}+`',
      table: { defaultValue: { summary: '99' } },
    },
    dot: {
      control: 'boolean',
      description: 'Renders a dot instead of the count',
    },
    showZero: {
      control: 'boolean',
      description: 'Shows a count of 0',
    },
    status: {
      control: 'select',
      options: [undefined, ...statuses],
      description: 'Standalone status dot',
    },
    text: {
      control: 'text',
      description: 'Text next to the status dot',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the indicator',
    },
    children: { control: false },
    className: { control: 'text' },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Small count or dot anchored to the top-right of its children, or a standalone status dot with optional text.',
      },
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    count: 5,
    'aria-label': '5 notifications',
    children: <Anchor />,
  },
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <Badge
        count={5}
        aria-label="5 notifications"
      >
        <Anchor />
      </Badge>
      <Badge
        count={120}
        aria-label="120 notifications"
      >
        <Anchor />
      </Badge>
      <Badge
        count={12}
        max={9}
        aria-label="12 notifications"
      >
        <Anchor />
      </Badge>
      <Badge
        dot
        aria-label="New notifications"
      >
        <Anchor />
      </Badge>
      <Badge count={0}>
        <Anchor />
      </Badge>
      <Badge
        count={0}
        showZero
        aria-label="No notifications"
      >
        <Anchor />
      </Badge>
      <Badge count={7} />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {statuses.map(status => (
        <Badge
          key={status}
          status={status}
          text={status}
        />
      ))}
    </div>
  ),
}
