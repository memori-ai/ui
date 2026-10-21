import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { RadioGroup } from './RadioGroup'
import { Radio } from './Radio'
import { Field } from '../Field'

const meta = {
  title: 'Form/Radio',
  component: RadioGroup,
  subcomponents: { Radio },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The selected value (controlled)',
    },
    defaultValue: {
      control: 'text',
      description: 'The initially selected value (uncontrolled)',
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction of the radios',
      table: { defaultValue: { summary: 'vertical' } },
    },
    disabled: {
      control: 'boolean',
      description: 'If true, every radio in the group is disabled',
    },
    name: {
      control: 'text',
      description: 'The name of the hidden input',
    },
    onValueChange: {
      description: 'Callback fired when the selected radio changes',
    },
  },
  args: {
    'aria-label': 'Plan',
    defaultValue: 'free',
    onValueChange: fn(),
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'A single-choice group built with @base-ui RadioGroup and Radio. Arrow keys move the selection; the group is a single tab stop.',
      },
    },
  },
  render: args => (
    <RadioGroup {...args}>
      <Radio
        value="free"
        label="Free"
      />
      <Radio
        value="pro"
        label="Pro"
      />
      <Radio
        value="enterprise"
        label="Enterprise"
      />
    </RadioGroup>
  ),
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <RadioGroup
        {...args}
        orientation="vertical"
      >
        <Radio
          value="free"
          label="Vertical — Free"
        />
        <Radio
          value="pro"
          label="Vertical — Pro"
        />
      </RadioGroup>
      <RadioGroup
        {...args}
        orientation="horizontal"
      >
        <Radio
          value="free"
          label="Horizontal — Free"
        />
        <Radio
          value="pro"
          label="Horizontal — Pro"
        />
      </RadioGroup>
    </div>
  ),
}

export const States: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <RadioGroup {...args}>
        <Radio
          value="free"
          label="Selected"
        />
        <Radio
          value="pro"
          label="Unselected"
        />
        <Radio
          value="enterprise"
          label="Single radio disabled"
          disabled
        />
      </RadioGroup>
      <RadioGroup
        {...args}
        disabled
      >
        <Radio
          value="free"
          label="Group disabled (selected)"
        />
        <Radio
          value="pro"
          label="Group disabled"
        />
      </RadioGroup>
    </div>
  ),
}

export const Controlled: Story = {
  render: args => {
    const [value, setValue] = useState('pro')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <RadioGroup
          {...args}
          value={value}
          onValueChange={setValue}
        >
          <Radio
            value="free"
            label="Free"
          />
          <Radio
            value="pro"
            label="Pro"
          />
        </RadioGroup>
        <span>
          Selected: <strong>{value}</strong>
        </span>
      </div>
    )
  },
}

/**
 * Inside `Field.Root`, `Field.Label` names the group.
 */
export const InField: Story = {
  args: {
    'aria-label': undefined,
  },
  render: args => (
    <Field.Root>
      <Field.Label>Plan</Field.Label>
      <RadioGroup {...args}>
        <Radio
          value="free"
          label="Free"
        />
        <Radio
          value="pro"
          label="Pro"
        />
      </RadioGroup>
    </Field.Root>
  ),
}

export const Cards: Story = {
  render: args => (
    <RadioGroup
      {...args}
      aria-label="Chi può chattare"
      defaultValue="public"
      orientation="horizontal"
    >
      <Radio
        variant="card"
        value="public"
        label="Pubblico"
        description="Chiunque trovi il bot può scrivergli."
      />
      <Radio
        variant="card"
        value="password"
        label="Richiedi una password"
        description="Il bot chiede una password prima di rispondere."
      />
      <Radio
        variant="card"
        value="whitelist"
        label="Lista consentiti"
        description="Solo gli utenti in elenco possono scrivere."
        disabled
      />
    </RadioGroup>
  ),
}
