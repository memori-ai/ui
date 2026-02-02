import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['elevated', 'outlined'],
      description: 'Visual style of the card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding of the card',
    },
    style: { control: 'object' },
    className: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>Card Title</h3>
        <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
          This is a basic card component acting as a container for content.
        </p>
      </div>
    ),
    variant: 'elevated',
    padding: 'md',
    style: { width: 300 },
  },
}

export const Outlined: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
  },
}

export const Interactive: Story = {
  args: {
    ...Default.args,
    onClick: () => alert('Card clicked!'),
    hoverable: true,
    style: { width: 300 },
  },
  render: args => (
    <Card {...args}>
      <h3 style={{ margin: '0 0 8px 0' }}>Interactive Card</h3>
      <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
        Click me to trigger an action. I have hover states and focus rings.
      </p>
    </Card>
  ),
}

export const WithImage: Story = {
  render: args => (
    <Card
      {...args}
      padding="none"
      style={{ width: 300, overflow: 'hidden' }}
    >
      <div
        style={{
          height: 140,
          backgroundColor: 'var(--color-secondary-200)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-secondary-700)',
        }}
      >
        Image / Cover
      </div>
      <div style={{ padding: 'var(--spacing-md)' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Card with Image</h3>
        <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
          Example with no padding on the card itself, but custom padding in
          content.
        </p>
      </div>
    </Card>
  ),
}
