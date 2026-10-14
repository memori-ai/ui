import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Textarea } from './Textarea'
import { FieldGroup } from '../Field'

const meta = {
  title: 'Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    autosize: {
      control: 'object',
      description:
        'Grow with the content. `true` or `{ minRows, maxRows }` to bound it',
    },
    error: {
      control: 'boolean',
      description: 'Invalid state (same style as Input error)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    rows: {
      control: 'number',
      description: 'Visible rows (native attribute)',
    },
    onChange: {
      description: 'Native change handler',
    },
  },
  args: {
    onChange: fn(),
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Multi-line text input with the same chrome as Input. Accepts every native `<textarea>` attribute; optional `autosize`. Works inside `Field` / `FieldGroup`.',
      },
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Write a description...',
    rows: 4,
  },
}

export const States: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Textarea
        {...args}
        placeholder="Default"
        rows={3}
      />
      <Textarea
        {...args}
        placeholder="Error"
        defaultValue="Invalid content"
        rows={3}
        error
      />
      <Textarea
        {...args}
        placeholder="Disabled"
        defaultValue="Cannot edit"
        rows={3}
        disabled
      />
    </div>
  ),
}

/**
 * Grows with the content between 2 and 6 rows, then scrolls.
 */
export const Autosize: Story = {
  args: {
    placeholder: 'Type several lines...',
    autosize: { minRows: 2, maxRows: 6 },
  },
}

export const InField: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <FieldGroup
        label="Bio"
        helperText="A few words about you."
      >
        <Textarea
          {...args}
          rows={3}
        />
      </FieldGroup>
      <FieldGroup
        label="Bio"
        error="This field is required."
        invalid
      >
        <Textarea
          {...args}
          rows={3}
        />
      </FieldGroup>
    </div>
  ),
}
