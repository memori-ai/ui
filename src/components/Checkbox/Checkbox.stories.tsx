import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Atomic/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label content for the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'If true, the checkbox is checked',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state (uncontrolled)',
    },
    indeterminate: {
      control: 'boolean',
      description: 'If true, the checkbox appears in an indeterminate state',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the checkbox is disabled',
    },
    required: {
      control: 'boolean',
      description: 'If true, the checkbox is required',
    },
    name: {
      control: 'text',
      description: 'The name attribute of the input element',
    },
    value: {
      control: 'text',
      description: 'The value attribute of the input element',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name',
    },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'A fully accessible checkbox component built with @base-ui. Supports checked, unchecked, indeterminate, and disabled states with smooth animations.',
      },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default checkbox with a label.
 * Click to toggle the checkbox state.
 */
export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    defaultChecked: false,
  },
}

/**
 * Checkbox in checked state.
 * Click to toggle the checkbox state.
 */
export const Checked: Story = {
  args: {
    label: 'I agree to the terms',
    defaultChecked: true,
  },
}

/**
 * Checkbox in unchecked state.
 * Click to toggle the checkbox state.
 */
export const Unchecked: Story = {
  args: {
    label: 'Subscribe to newsletter',
    defaultChecked: false,
  },
}

/**
 * Indeterminate state - useful for "select all" scenarios
 */
export const Indeterminate: Story = {
  args: {
    label: 'Select all items',
    indeterminate: true,
  },
}

/**
 * Disabled checkbox (unchecked)
 */
export const Disabled: Story = {
  args: {
    label: 'This option is disabled',
    disabled: true,
  },
}

/**
 * Disabled checkbox (checked)
 */
export const DisabledChecked: Story = {
  args: {
    label: 'This option is checked and disabled',
    checked: true,
    disabled: true,
  },
}

/**
 * Disabled checkbox (indeterminate)
 */
export const DisabledIndeterminate: Story = {
  args: {
    label: 'Partially selected (disabled)',
    indeterminate: true,
    disabled: true,
  },
}

/**
 * Checkbox without a label - requires aria-label for accessibility
 */
export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Accept terms',
  },
}

/**
 * Required checkbox for forms
 */
export const Required: Story = {
  args: {
    label: 'I agree to the terms and conditions *',
    required: true,
  },
}

/**
 * Checkbox with custom className
 */
export const CustomClassName: Story = {
  args: {
    label: 'Custom styled checkbox',
    className: 'my-custom-class',
  },
}

/**
 * Interactive controlled checkbox example
 */
export const ControlledCheckbox: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox
          label="Controlled checkbox"
          checked={checked}
          onChange={newChecked => setChecked(newChecked)}
        />
        <div style={{ fontSize: '14px', color: '#595959' }}>
          Current state: <strong>{checked ? 'Checked' : 'Unchecked'}</strong>
        </div>
        <button
          onClick={() => setChecked(!checked)}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid #d9d9d9',
            background: '#fff',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Toggle Checkbox
        </button>
      </div>
    )
  },
}

/**
 * Multiple checkboxes in a group
 */
export const CheckboxGroup: Story = {
  render: () => {
    const [selections, setSelections] = useState({
      option1: false,
      option2: true,
      option3: false,
    })

    const handleChange =
      (key: keyof typeof selections) => (checked: boolean) => {
        setSelections(prev => ({ ...prev, [key]: checked }))
      }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>
          Select your preferences
        </h3>
        <Checkbox
          label="Email notifications"
          checked={selections.option1}
          onChange={handleChange('option1')}
        />
        <Checkbox
          label="SMS notifications"
          checked={selections.option2}
          onChange={handleChange('option2')}
        />
        <Checkbox
          label="Push notifications"
          checked={selections.option3}
          onChange={handleChange('option3')}
        />
      </div>
    )
  },
}

/**
 * Select all with indeterminate state
 */
export const SelectAllPattern: Story = {
  render: () => {
    const [items, setItems] = useState({
      item1: false,
      item2: false,
      item3: false,
    })

    const allChecked = Object.values(items).every(Boolean)
    const someChecked = Object.values(items).some(Boolean) && !allChecked

    const handleSelectAll = (checked: boolean) => {
      setItems({
        item1: checked,
        item2: checked,
        item3: checked,
      })
    }

    const handleItemChange =
      (key: keyof typeof items) => (checked: boolean) => {
        setItems(prev => ({ ...prev, [key]: checked }))
      }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Checkbox
          label="Select all"
          checked={allChecked}
          indeterminate={someChecked}
          onChange={handleSelectAll}
        />
        <div
          style={{
            marginLeft: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <Checkbox
            label="Item 1"
            checked={items.item1}
            onChange={handleItemChange('item1')}
          />
          <Checkbox
            label="Item 2"
            checked={items.item2}
            onChange={handleItemChange('item2')}
          />
          <Checkbox
            label="Item 3"
            checked={items.item3}
            onChange={handleItemChange('item3')}
          />
        </div>
      </div>
    )
  },
}
