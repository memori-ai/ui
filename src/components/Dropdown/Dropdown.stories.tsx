import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Dropdown from './Dropdown'
import Button from '../Button'

const meta = {
  title: 'UI/Dropdown',
  component: Dropdown,
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: false,
    trigger: <Button>Open</Button>,
  },
}

export const Open: Story = {
  args: {
    open: true,
    trigger: <Button>Open</Button>,
  },
}

export const WithClassName: Story = {
  args: {
    className: 'custom-dropdown',
    trigger: <Button>Open</Button>,
  },
}

export const WithPlacementBottomLeft: Story = {
  args: {
    placement: 'bottom-left',
    trigger: <Button>Open</Button>,
  },
}

export const WithPlacementBottomRight: Story = {
  args: {
    placement: 'bottom-right',
    trigger: <Button>Open</Button>,
  },
}

export const WithPlacementTopLeft: Story = {
  args: {
    placement: 'top-left',
    trigger: <Button>Open</Button>,
  },
}

export const WithPlacementTopRight: Story = {
  args: {
    placement: 'top-right',
    trigger: <Button>Open</Button>,
  },
}
