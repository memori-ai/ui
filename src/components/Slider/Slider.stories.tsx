import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Slider from './Slider'

const meta = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: {
        type: 'number',
      },
    },
    max: {
      control: {
        type: 'number',
      },
    },
    step: {
      control: {
        type: 'number',
      },
    },
    defaultValue: {
      control: {
        type: 'number',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
  },
}

export const WithStep: Story = {
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 50,
  },
}

export const WithLabel: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    label: 'Test',
  },
}

export const Disabled: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 50,
    disabled: true,
  },
}
