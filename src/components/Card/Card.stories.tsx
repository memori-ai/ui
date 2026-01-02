import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'
import Button from '../Button'

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card title',
    loading: false,
  },
}

export const WithTitleAndDescription: Story = {
  args: {
    title: 'Card title',
    description: 'Card description',
    loading: false,
  },
}

export const Loading: Story = {
  args: {
    title: 'Card title',
    description: 'Card description',
    loading: true,
  },
}

export const WithCover: Story = {
  args: {
    title: 'Card title',
    description: 'Card description',
    cover: (
      <img
        src="https://picsum.photos/200/300"
        alt="cover"
      />
    ),
    loading: false,
  },
}

export const WithChildren: Story = {
  args: {
    title: 'Card title',
    description: 'Card description',
    children: (
      <div>
        <p>Some text</p>
        <Button variant="primary">Show more</Button>
      </div>
    ),
    loading: false,
  },
}

export const Hoverable: Story = {
  args: {
    title: 'Card title',
    description: 'Card description',
    loading: false,
    hoverable: true,
  },
}
