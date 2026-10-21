import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { Avatar } from '../Avatar'
import { Breadcrumbs } from './Breadcrumbs'

const meta = {
  title: 'Azioni e navigazione/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'I miei agenti', href: '#agents' },
      { label: 'Supporto Clienti', href: '#agent' },
      { label: 'Conoscenza' },
      { label: 'Contenuti' },
    ],
  },
  argTypes: {
    items: { control: 'object' },
    separator: { control: false },
    ariaLabel: { control: 'text' },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Path from the root to the current page. Items with `href` render links, items with only `onClick` render link-styled buttons, items with neither are plain text. The last item is the current page.',
      },
    },
  },
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIconsAndRouting: Story = {
  args: {
    items: [
      { label: 'I miei agenti', onClick: fn() },
      {
        label: 'Supporto Clienti',
        onClick: fn(),
        icon: (
          <Avatar
            initials="SC"
            size={20}
            shape="square"
          />
        ),
      },
      { label: 'Impostazioni' },
    ],
  },
}

export const CustomSeparator: Story = {
  args: { separator: '/' },
}
