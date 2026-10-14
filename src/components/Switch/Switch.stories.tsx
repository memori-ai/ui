import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Switch } from './Switch'
import { Field } from '../Field'

const meta = {
  title: 'Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Visible label rendered next to the switch',
    },
    checked: {
      control: 'boolean',
      description: 'If true, the switch is on (controlled)',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The initial on state (uncontrolled)',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the switch is disabled',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Switch size',
      table: { defaultValue: { summary: 'md' } },
    },
    name: {
      control: 'text',
      description: 'The name of the hidden input',
    },
    onCheckedChange: {
      description: 'Callback fired when the switch is toggled',
    },
  },
  args: {
    onCheckedChange: fn(),
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'An accessible on/off toggle built with @base-ui Switch. Use for settings that apply immediately; use Checkbox for choices submitted with a form.',
      },
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
}

export const AllVariants: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Switch
        {...args}
        size="sm"
        label="Small"
      />
      <Switch
        {...args}
        size="md"
        label="Medium"
      />
    </div>
  ),
}

export const States: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Switch
        {...args}
        label="Off"
      />
      <Switch
        {...args}
        label="On"
        defaultChecked
      />
      <Switch
        {...args}
        label="Disabled off"
        disabled
      />
      <Switch
        {...args}
        label="Disabled on"
        defaultChecked
        disabled
      />
    </div>
  ),
}

/**
 * Without a visible label an `aria-label` is required.
 */
export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Dark mode',
  },
}

export const Controlled: Story = {
  render: args => {
    const [checked, setChecked] = useState(false)
    return (
      <Switch
        {...args}
        label={checked ? 'On' : 'Off'}
        checked={checked}
        onCheckedChange={setChecked}
      />
    )
  },
}

/**
 * Inside `Field.Root`, `Field.Label` and `Field.Description` are wired to the switch automatically.
 */
export const InField: Story = {
  render: args => (
    <Field.Root>
      <Field.Label>Auto-save</Field.Label>
      <Switch {...args} />
      <Field.Description>Changes are saved as you type.</Field.Description>
    </Field.Root>
  ),
}
