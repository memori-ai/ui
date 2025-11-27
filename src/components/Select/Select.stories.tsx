import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Select from './Select'

const meta = {
  title: 'UI/Select',
  component: Select,
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
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onChange: console.log,
    label: 'Select me',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ],
  },
}

export const Placeholder: Story = {
  args: {
    onChange: console.log,
    label: 'Select me',
    placeholder: 'Select me',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ],
  },
}

export const WithValue: Story = {
  args: {
    onChange: console.log,
    label: 'Select me',
    value: '2',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    onChange: console.log,
    label: `You can't select me`,
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ],
    value: 2,
    disabled: true,
  },
}
