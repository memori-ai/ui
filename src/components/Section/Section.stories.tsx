import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell } from 'lucide-react'
import { Section } from './Section'
import { Button } from '../Button'

const meta = {
  title: 'Components/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Notifications',
  },
} satisfies Meta<typeof Section>

export default meta

type Story = StoryObj<typeof Section>

const storyShell = (children: React.ReactNode) => (
  <div
    style={{
      width: 'min(100%, var(--memori-modal-size-md))',
      padding: 'var(--memori-spacing-md)',
      backgroundColor: 'var(--memori-secondary-background)',
      borderRadius: 'var(--memori-radius-box)',
      boxShadow: 'var(--memori-shadow-sm)',
    }}
  >
    {children}
  </div>
)

export const Default: Story = {
  render: () =>
    storyShell(
      <Section
        title="Notifications"
        description="Manage how and when we reach you."
        icon={
          <Bell
            aria-hidden="true"
            size={24}
            strokeWidth={2}
          />
        }
        actions={<Button variant="primary">Save changes</Button>}
      />,
    ),
}

export const NoDescription: Story = {
  render: () =>
    storyShell(
      <Section
        title="Notifications"
        icon={
          <Bell
            aria-hidden="true"
            size={24}
            strokeWidth={2}
          />
        }
        actions={<Button variant="primary">Save changes</Button>}
      />,
    ),
}

export const NoIcon: Story = {
  render: () =>
    storyShell(
      <Section
        title="Notifications"
        description="Manage how and when we reach you."
        actions={<Button variant="primary">Save changes</Button>}
      />,
    ),
}

export const WithBreadcrumb: Story = {
  render: () =>
    storyShell(
      <Section
        breadcrumb={
          <span
            style={{
              fontFamily: 'var(--memori-font-family)',
              fontSize: 'var(--memori-text-size-small)',
              color: 'var(--memori-neutral)',
            }}
          >
            <span style={{ color: 'var(--memori-primary)' }}>Settings</span>
            {' / '}
            Notifications
          </span>
        }
        title="Notifications"
        description="Manage how and when we reach you."
        icon={
          <Bell
            aria-hidden="true"
            size={24}
            strokeWidth={2}
          />
        }
        actions={<Button variant="primary">Save changes</Button>}
      />,
    ),
}

export const ActionsSlot: Story = {
  render: () =>
    storyShell(
      <Section
        title="Notifications"
        description="Manage how and when we reach you."
        icon={
          <Bell
            aria-hidden="true"
            size={24}
            strokeWidth={2}
          />
        }
        actions={
          <>
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save changes</Button>
          </>
        }
      />,
    ),
}

export const Minimal: Story = {
  render: () => storyShell(<Section title="Notifications" />),
}

export const DarkMode: Story = {
  render: () => (
    <div
      data-theme="dark"
      style={{
        width: 'min(100%, var(--memori-modal-size-md))',
        padding: 'var(--memori-spacing-md)',
        backgroundColor: 'var(--memori-secondary-background)',
        borderRadius: 'var(--memori-radius-box)',
        boxShadow: 'var(--memori-shadow-sm)',
      }}
    >
      <Section
        title="Notifications"
        description="Manage how and when we reach you."
        icon={
          <Bell
            aria-hidden="true"
            size={24}
            strokeWidth={2}
          />
        }
        actions={<Button variant="primary">Save changes</Button>}
      />
    </div>
  ),
}
