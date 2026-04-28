import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { fn } from 'storybook/test'

import { Popover } from './Popover'

const canvasStyle = {
  minHeight: 'calc(var(--memori-spacing-5xl) * 3)',
  padding: 'var(--memori-spacing-lg)',
  display: 'flex',
  alignItems: 'flex-start',
} as const

const meta = {
  title: 'UI/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
    },
    sideOffset: { control: { type: 'number', min: 0, step: 1 } },
    alignOffset: { control: { type: 'number', min: -20, max: 20, step: 1 } },
    open: { control: 'boolean' },
    defaultOpen: { control: 'boolean' },
    disabled: { control: 'boolean' },
    arrow: { control: 'boolean' },
    closable: { control: 'boolean' },
    onOpenChange: { action: 'openChange' },
  },
  render: args => (
    <div style={canvasStyle}>
      <Popover
        {...args}
        onOpenChange={fn()}
      />
    </div>
  ),
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Open popover',
    title: 'Popover title',
    description: 'Short helper text for context.',
    content:
      'Use this area for quick actions, metadata, or supporting details tied to the trigger.',
    placement: 'bottom-start',
    arrow: true,
    closable: true,
  },
}

export const ControlledOpen: Story = {
  args: {
    children: 'Always open',
    title: 'Controlled',
    content: 'This popover is controlled through the `open` prop.',
    open: true,
  },
}

export const NoHeader: Story = {
  args: {
    children: 'Open compact popover',
    content: 'Popover content without title, description, or close button.',
    closable: false,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled trigger',
    title: 'Not available',
    content: 'This trigger is disabled and cannot open.',
    disabled: true,
  },
}

export const TopEndPlacement: Story = {
  args: {
    children: 'Top end',
    title: 'Positioning',
    content: 'Placement is mapped to Base UI side + align.',
    placement: 'top-end',
    open: true,
  },
}
