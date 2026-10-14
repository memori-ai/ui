import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { Rocket } from 'lucide-react'
import { Result } from './Result'
import { Button } from '../Button'

const meta = {
  title: 'Feedback/Result',
  component: Result,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info', '404', '403', '500'],
      description: 'Outcome the screen communicates; drives icon and color',
      table: { defaultValue: { summary: 'info' } },
    },
    title: {
      control: 'text',
      description: 'Main message, rendered as an h2',
    },
    description: {
      control: 'text',
      description: 'Secondary copy below the title',
    },
    icon: {
      control: false,
      description: 'Overrides the default status icon',
    },
    extra: {
      control: false,
      description: 'Actions slot rendered below the description',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name',
    },
  },
  args: {
    status: 'info',
    title: 'Your export is being prepared',
    description: 'We will email you a download link as soon as it is ready.',
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Full outcome/status screen (success, error, 404, 403, 500…). Not a page header: page chrome stays in Section. All copy is provided by the caller.',
      },
    },
  },
} satisfies Meta<typeof Result>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithActions: Story = {
  args: {
    status: 'success',
    title: 'Agent published',
    description: 'Your agent is now live and reachable via its public link.',
    extra: (
      <>
        <Button onClick={fn()}>Open agent</Button>
        <Button
          variant="outline"
          onClick={fn()}
        >
          Back to dashboard
        </Button>
      </>
    ),
  },
}

export const CustomIcon: Story = {
  args: {
    title: 'Ready for launch',
    icon: (
      <Rocket
        size={64}
        strokeWidth={1.5}
      />
    ),
  },
}

const statuses = [
  { status: 'success', title: 'Payment received' },
  { status: 'error', title: 'Submission failed' },
  { status: 'warning', title: 'Quota almost reached' },
  { status: 'info', title: 'Maintenance scheduled' },
  { status: '404', title: 'Page not found' },
  { status: '403', title: 'Access denied' },
  { status: '500', title: 'Something went wrong' },
] as const

export const AllVariants: Story = {
  render: args => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 'var(--memori-spacing-lg)',
      }}
    >
      {statuses.map(({ status, title }) => (
        <Result
          {...args}
          key={status}
          status={status}
          title={title}
          description={`status="${status}"`}
        />
      ))}
    </div>
  ),
}
