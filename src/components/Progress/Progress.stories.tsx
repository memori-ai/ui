import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Completion percentage, clamped to 0–100',
    },
    variant: {
      control: 'select',
      options: ['line', 'circle'],
      description: 'Visual shape of the indicator',
      table: { defaultValue: { summary: 'line' } },
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'error'],
      description: 'Semantic color of the indicator',
      table: { defaultValue: { summary: 'default' } },
    },
    showValue: {
      control: 'boolean',
      description: 'If true, renders the rounded percentage',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description:
        'Size of the indicator. A number (px) is honored only by the circle variant',
      table: { defaultValue: { summary: 'md' } },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible name of the progress bar',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name',
    },
  },
  args: {
    value: 42,
    'aria-label': 'Upload progress',
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Determinate progress indicator. The line variant is built on @base-ui Progress; the circle variant is an SVG ring. Both expose role="progressbar" with aria-valuenow/min/max.',
      },
    },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    showValue: true,
  },
}

export const Circle: Story = {
  args: {
    variant: 'circle',
    showValue: true,
    value: 68,
  },
}

export const AllVariants: Story = {
  render: args => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--memori-spacing-lg)',
        maxWidth: 420,
      }}
    >
      <Progress
        {...args}
        size="sm"
        showValue
      />
      <Progress
        {...args}
        size="md"
        showValue
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--memori-spacing-lg)',
        }}
      >
        <Progress
          {...args}
          variant="circle"
          size="sm"
          showValue
        />
        <Progress
          {...args}
          variant="circle"
          size="md"
          showValue
        />
        <Progress
          {...args}
          variant="circle"
          size={120}
          showValue
        />
      </div>
    </div>
  ),
}

export const States: Story = {
  render: args => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--memori-spacing-lg)',
        maxWidth: 420,
      }}
    >
      <Progress
        {...args}
        value={0}
        showValue
      />
      <Progress
        {...args}
        status="default"
        value={42}
        showValue
      />
      <Progress
        {...args}
        status="success"
        value={100}
        showValue
      />
      <Progress
        {...args}
        status="error"
        value={73}
        showValue
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--memori-spacing-lg)',
        }}
      >
        <Progress
          {...args}
          variant="circle"
          status="default"
          value={42}
          showValue
        />
        <Progress
          {...args}
          variant="circle"
          status="success"
          value={100}
          showValue
        />
        <Progress
          {...args}
          variant="circle"
          status="error"
          value={73}
          showValue
        />
      </div>
    </div>
  ),
}
