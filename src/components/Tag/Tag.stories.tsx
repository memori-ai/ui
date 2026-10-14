import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { CheckCircle, Star } from 'lucide-react'
import { Tag } from './Tag'
import type { TagColor } from './Tag'

const colors: TagColor[] = [
  'default',
  'primary',
  'success',
  'warning',
  'error',
  'info',
]

const meta = {
  title: 'Contenuto/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: colors,
      description: 'Semantic color of the tag',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Tag size',
      table: { defaultValue: { summary: 'md' } },
    },
    closable: {
      control: 'boolean',
      description: 'Renders a close button after the content',
    },
    closeLabel: {
      control: 'text',
      description: 'Accessible label for the close button',
    },
    children: {
      control: 'text',
      description: 'Tag content',
    },
    icon: { control: false },
    onClose: { control: false },
    className: { control: 'text' },
  },
  args: {
    onClose: fn(),
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Compact label for status, category or filter values. Semantic colors only; optional icon and close button.',
      },
    },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Tag',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {(['sm', 'md'] as const).map(size => (
        <div
          key={size}
          style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}
        >
          {colors.map(color => (
            <Tag
              key={color}
              color={color}
              size={size}
            >
              {color}
            </Tag>
          ))}
        </div>
      ))}
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Tag
        color="success"
        icon={<CheckCircle />}
      >
        Published
      </Tag>
      <Tag
        color="primary"
        icon={<Star />}
      >
        Featured
      </Tag>
    </div>
  ),
}

export const Closable: Story = {
  args: {
    children: 'Closable',
    color: 'info',
    closable: true,
  },
}

/**
 * The tag does not hide itself: the owner removes it from its data in `onClose`.
 */
export const RemovableList: Story = {
  render: () => {
    const [items, setItems] = useState(['React', 'TypeScript', 'CSS'])
    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {items.map(item => (
          <Tag
            key={item}
            color="primary"
            closable
            onClose={() => setItems(prev => prev.filter(i => i !== item))}
          >
            {item}
          </Tag>
        ))}
      </div>
    )
  },
}
