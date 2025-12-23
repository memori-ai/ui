import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputBase } from './InputBase'
import { fn } from 'storybook/test'

const meta = {
  title: 'UI/InputBase',
  component: InputBase,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['default', 'error', 'disabled'],
      description: 'Input variant style',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
      description: 'Input size',
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the input should take full width',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'Placeholder text',
    },
    value: {
      control: {
        type: 'text',
      },
      description: 'Input value (controlled)',
    },
    defaultValue: {
      control: {
        type: 'text',
      },
      description: 'Default value (uncontrolled)',
    },
    type: {
      control: {
        type: 'text',
      },
      description: 'Input type',
    },
    onValueChange: {
      description: 'Callback fired when the value changes',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  args: {
    onValueChange: fn(),
  },
} satisfies Meta<typeof InputBase>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Default input variant with standard styling.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    variant: 'default',
  },
}

/**
 * Error variant indicates validation errors.
 */
export const Error: Story = {
  args: {
    placeholder: 'This field has an error',
    variant: 'error',
    defaultValue: 'Invalid input',
  },
}

/**
 * Disabled input state.
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    variant: 'disabled',
    defaultValue: 'Cannot edit',
  },
}

/**
 * Small size input.
 */
export const Small: Story = {
  args: {
    placeholder: 'Small input',
    variant: 'default',
    size: 'sm',
  },
}

/**
 * Medium size input (default).
 */
export const Medium: Story = {
  args: {
    placeholder: 'Medium input',
    variant: 'default',
    size: 'md',
  },
}

/**
 * Large size input.
 */
export const Large: Story = {
  args: {
    placeholder: 'Large input',
    variant: 'default',
    size: 'lg',
  },
}

/**
 * Full width input.
 */
export const FullWidth: Story = {
  args: {
    placeholder: 'Full width input',
    variant: 'default',
    fullWidth: true,
  },
}

/**
 * Controlled input example.
 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('')
    return (
      <InputBase
        value={value}
        onValueChange={setValue}
        placeholder="Type something..."
      />
    )
  },
}

/**
 * Different input types.
 */
export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InputBase
        type="text"
        placeholder="Text input"
      />
      <InputBase
        type="email"
        placeholder="Email input"
      />
      <InputBase
        type="password"
        placeholder="Password input"
      />
      <InputBase
        type="number"
        placeholder="Number input"
      />
    </div>
  ),
}

/**
 * All variants displayed together for comparison.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InputBase
        placeholder="Default variant"
        variant="default"
      />
      <InputBase
        placeholder="Error variant"
        variant="error"
      />
      <InputBase
        placeholder="Disabled variant"
        variant="disabled"
      />
    </div>
  ),
}

/**
 * All sizes displayed together for comparison.
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <InputBase
        placeholder="Small input"
        size="sm"
      />
      <InputBase
        placeholder="Medium input"
        size="md"
      />
      <InputBase
        placeholder="Large input"
        size="lg"
      />
    </div>
  ),
}
