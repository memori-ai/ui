import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'
import { Text } from './Text'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const
const weights = ['normal', 'medium', 'semibold', 'bold'] as const
const colors = ['default', 'muted', 'danger'] as const

const meta = {
  title: 'Contenuto/Typography',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading level rendered in the DOM',
      table: { defaultValue: { summary: 'h2' } },
    },
    size: {
      control: 'select',
      options: sizes,
      description: 'Font size from the --memori-text-size-* scale',
      table: { defaultValue: { summary: 'lg' } },
    },
    weight: {
      control: 'select',
      options: weights,
      description: 'Font weight from the --memori-text-weight-* scale',
      table: { defaultValue: { summary: 'semibold' } },
    },
    color: {
      control: 'select',
      options: colors,
      description: 'Semantic text color',
      table: { defaultValue: { summary: 'default' } },
    },
    ellipsis: {
      control: 'boolean',
      description: 'Clamp to a single line with ellipsis',
    },
    children: { control: 'text' },
    className: { control: 'text' },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          '`Heading` and `Text` cover in-content typography. The page/module title is `Section`, not `Heading`.',
      },
    },
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Agent settings',
  },
}

export const TextDefault: Story = {
  render: () => <Text>Body copy rendered as an inline span.</Text>,
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        {sizes.map(size => (
          <Heading
            key={size}
            as="h3"
            size={size}
          >
            Heading {size}
          </Heading>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {weights.map(weight => (
          <Text
            key={weight}
            size="md"
            weight={weight}
          >
            Text weight {weight}
          </Text>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {colors.map(color => (
          <Text
            key={color}
            color={color}
          >
            Text color {color}
          </Text>
        ))}
      </div>
    </div>
  ),
}

export const Ellipsis: Story = {
  render: () => (
    <div style={{ width: '220px' }}>
      <Heading
        as="h3"
        ellipsis
        title="A very long heading that does not fit in the available width"
      >
        A very long heading that does not fit in the available width
      </Heading>
      <Text
        as="p"
        ellipsis
        color="muted"
      >
        A long paragraph clamped to one line with a trailing ellipsis.
      </Text>
    </div>
  ),
}

export const UnderSection: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Heading as="h2">Billing</Heading>
      <Text
        as="p"
        color="muted"
      >
        Use Heading inside content, below the page Section.
      </Text>
      <Text
        as="p"
        color="danger"
      >
        Your payment method has expired.
      </Text>
    </div>
  ),
}
