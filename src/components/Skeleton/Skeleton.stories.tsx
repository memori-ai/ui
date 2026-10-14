import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'rect', 'circle'],
      description: 'Shape of the placeholder',
      table: { defaultValue: { summary: 'text' } },
    },
    width: {
      control: 'text',
      description: 'Width (numbers are pixels)',
    },
    height: {
      control: 'text',
      description: 'Height, per line for text (numbers are pixels)',
    },
    lines: {
      control: { type: 'number', min: 1 },
      description: 'Number of lines for the text variant',
      table: { defaultValue: { summary: '1' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name',
    },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Decorative loading placeholder (`aria-hidden`). Shimmers when motion is allowed, pulses opacity under `prefers-reduced-motion: reduce`. Announce loading on the container (e.g. `aria-busy`).',
      },
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Single text line.
 */
export const Default: Story = {}

/**
 * Text, rect and circle.
 */
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--memori-spacing-lg)',
        maxWidth: '24rem',
      }}
    >
      <Skeleton
        variant="text"
        lines={3}
      />
      <Skeleton
        variant="rect"
        height={120}
      />
      <Skeleton
        variant="circle"
        width={48}
      />
    </div>
  ),
}

/**
 * Multi-line paragraph placeholder.
 */
export const Paragraph: Story = {
  args: {
    variant: 'text',
    lines: 4,
    width: 320,
  },
}

/**
 * Composed card-like placeholder.
 */
export const Composition: Story = {
  render: () => (
    <div
      aria-busy="true"
      style={{
        display: 'flex',
        gap: 'var(--memori-spacing-md)',
        alignItems: 'center',
        maxWidth: '24rem',
      }}
    >
      <Skeleton variant="circle" />
      <div style={{ flex: 1 }}>
        <Skeleton
          lines={2}
          height={12}
        />
      </div>
    </div>
  ),
}
