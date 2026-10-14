import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { FileText, Trash2 } from 'lucide-react'
import { List } from './List'
import { Button } from '../Button'

const onDelete = fn()

const items = ['Report Q1.pdf', 'Report Q2.pdf', 'Report Q3.pdf'].map(name => (
  <List.Item
    key={name}
    prefix={
      <FileText
        size={18}
        aria-hidden="true"
      />
    }
    suffix="2 MB"
    actions={
      <Button
        variant="ghost"
        size="sm"
        icon={<Trash2 size={16} />}
        aria-label={`Delete ${name}`}
        onClick={onDelete}
      />
    }
  >
    {name}
  </List.Item>
))

const meta = {
  title: 'Contenuto/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'If true, renders `loadingSlot` instead of the items',
    },
    loadingSlot: {
      control: false,
      description: 'Content shown while loading (defaults to `Spin`)',
    },
    empty: {
      control: 'text',
      description: 'Content shown when there are no items',
    },
    bordered: {
      control: 'boolean',
      description: 'If true, draws an outer border around the list',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name',
    },
  },
  args: {
    children: items,
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Semantic list (`<ul role="list">`) with `List.Item` slots for prefix, suffix and actions. Loading and empty states are slots; pagination is up to the caller.',
      },
    },
  },
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Items with prefix, suffix and actions.
 */
export const Default: Story = {}

/**
 * Outer border and padded items.
 */
export const Bordered: Story = {
  args: {
    bordered: true,
  },
}

/**
 * Loading, custom loading slot and empty state.
 */
export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--memori-spacing-lg)' }}>
      <List
        bordered
        loading
      >
        {items}
      </List>
      <List
        bordered
        loading
        loadingSlot="Loading files…"
      />
      <List
        bordered
        empty="No files yet"
      />
    </div>
  ),
}

/**
 * `List` + `List.Item` composition with only content.
 */
export const Composition: Story = {
  args: {
    bordered: true,
    children: [
      <List.Item key="a">First</List.Item>,
      <List.Item key="b">Second</List.Item>,
      <List.Item key="c">Third</List.Item>,
    ],
  },
}
