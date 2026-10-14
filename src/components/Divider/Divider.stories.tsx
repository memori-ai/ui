import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta = {
  title: 'Contenuto/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of the line',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    label: {
      control: 'text',
      description: 'Content centered between two lines (horizontal only)',
    },
    className: { control: 'text' },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Thin separator between content blocks. Horizontal by default, optionally with a centered label; vertical for inline groups.',
      },
    },
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div>
      <p style={{ margin: 0 }}>Above</p>
      <Divider {...args} />
      <p style={{ margin: 0 }}>Below</p>
    </div>
  ),
}

export const WithLabel: Story = {
  args: { label: 'or' },
  render: Default.render,
}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: args => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>Edit</span>
      <Divider {...args} />
      <span>Duplicate</span>
      <Divider {...args} />
      <span>Delete</span>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Divider />
      <Divider label="Section label" />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Left</span>
        <Divider orientation="vertical" />
        <span>Right</span>
      </div>
    </div>
  ),
}
