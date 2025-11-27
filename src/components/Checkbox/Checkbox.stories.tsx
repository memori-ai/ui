import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Check me',
  },
}

export const Checked: Story = {
  args: {
    label: 'Uncheck me',
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Do not check me',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Do not uncheck me',
    checked: true,
    disabled: true,
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate',
    checked: true,
    indeterminate: true,
  },
}

export const DisabledIndeterminate: Story = {
  args: {
    label: 'Indeterminate',
    checked: false,
    indeterminate: true,
    disabled: true,
  },
}
