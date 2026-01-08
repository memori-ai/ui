import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Tooltip from './Tooltip'
import './styles.css'

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        paddingTop: '10rem',
      }}
    >
      <Tooltip {...args} />
    </div>
  ),
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
  },
}

export const WithJSXContent: Story = {
  args: {
    content: (
      <p>
        Here we have some JSX, useful for{' '}
        <a
          href="https://memori.ai"
          rel="noopener noreferrer"
          target="_blank"
        >
          links
        </a>
        , for example.
      </p>
    ),
    children: <span>Hover me</span>,
  },
}

export const Disabled: Story = {
  args: {
    content: 'Here is some tooltip content but I am disabled',
    children: <span>Hover me</span>,
    disabled: true,
  },
}

export const VisibleControlled: Story = {
  args: {
    content:
      'Here is some tooltip content displayed by default as I am controlled',
    children: <span>Hover me</span>,
    visible: true,
  },
}

export const AlignLeft: Story = {
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'left',
    visible: true,
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '10rem',
      }}
    >
      <Tooltip {...args} />
    </div>
  ),
}

export const AlignRight: Story = {
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'right',
    visible: true,
  },
}

export const AlignTopLeft: Story = {
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'topLeft',
    visible: true,
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '10rem',
      }}
    >
      <Tooltip {...args} />
    </div>
  ),
}

export const AlignTopRight: Story = {
  args: {
    content: 'Here is some tooltip content',
    children: <span>Hover me</span>,
    align: 'topRight',
    visible: true,
  },
}
