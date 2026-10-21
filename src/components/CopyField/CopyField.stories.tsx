import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { FieldGroup } from '../Field'
import { CopyField } from './CopyField'

const meta = {
  title: 'Form/CopyField',
  component: CopyField,
  tags: ['autodocs'],
  args: {
    value: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    onCopy: fn(),
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: { defaultValue: { summary: 'md' } },
    },
    secret: { control: 'boolean' },
    showCopyText: { control: 'boolean' },
    disabled: { control: 'boolean' },
    copyLabel: { control: 'text' },
    copiedLabel: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Read-only value with a copy button (IDs, tokens, webhook URLs). `secret` masks the value with a show/hide toggle; copy always copies the real value.',
      },
    },
  },
} satisfies Meta<typeof CopyField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div style={{ maxWidth: 480 }}>
      <FieldGroup label="Memori ID">
        <CopyField {...args} />
      </FieldGroup>
    </div>
  ),
}

export const Secret: Story = {
  args: { value: 'sk_live_demo_0123456789abcdef', secret: true },
  render: Default.render,
}

export const WithText: Story = {
  args: { showCopyText: true },
  render: Default.render,
}

export const AllSizes: Story = {
  render: args => (
    <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
      <CopyField
        {...args}
        size="sm"
        ariaLabel="Memori ID (sm)"
      />
      <CopyField
        {...args}
        size="md"
        ariaLabel="Memori ID (md)"
      />
      <CopyField
        {...args}
        size="lg"
        ariaLabel="Memori ID (lg)"
      />
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
}
