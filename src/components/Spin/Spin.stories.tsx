import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Spin from './Spin'

const meta = {
  title: 'UI/Spin',
  component: Spin,
  tags: ['autodocs'],
  argTypes: {
    spinning: {
      control: {
        type: 'boolean',
      },
    },
    primary: {
      control: {
        type: 'boolean',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  render: args => (
    <Spin {...args}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h2>Suspendisse a sodales nulla, sed semper nisi.</h2>
      <p>Proin tincidunt enim in felis aliquet, a ultricies purus bibendum.</p>
      <ul>
        <li>Quisque in ultrices lectus.</li>
        <li>Quisque in ultrices lectus.</li>
        <li>Quisque in ultrices lectus.</li>
      </ul>
      <p>Nulla at urna diam.</p>
    </Spin>
  ),
} satisfies Meta<typeof Spin>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    spinning: false,
  },
}

export const Spinning: Story = {
  args: {
    spinning: true,
  },
}

export const Primary: Story = {
  args: {
    spinning: true,
    primary: true,
  },
}
