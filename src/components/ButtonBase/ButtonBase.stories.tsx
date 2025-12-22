import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonBase } from './ButtonBase'
import { fn } from 'storybook/test'

const meta = {
  title: 'UI/ButtonBase',
  component: ButtonBase,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'outline'],
      description: 'Button variant style',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button should take full width',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is disabled',
    },
    children: {
      control: {
        type: 'text',
      },
      description: 'Button content',
    },
    onClick: {
      description: 'Click handler',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonBase>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Primary variant is the default button style with solid background.
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

/**
 * Secondary variant uses the secondary color palette.
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

/**
 * Outline variant has a transparent background with a border.
 */
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
}

/**
 * Small size button.
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
}

/**
 * Medium size button (default).
 */
export const Medium: Story = {
  args: {
    children: 'Medium Button',
    variant: 'primary',
    size: 'md',
  },
}

/**
 * Large size button.
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
}

/**
 * Full width button that spans the entire container.
 */
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    fullWidth: true,
  },
}

/**
 * Disabled button state.
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
}

/**
 * Disabled outline button.
 */
export const DisabledOutline: Story = {
  args: {
    children: 'Disabled Outline',
    variant: 'outline',
    disabled: true,
  },
}

/**
 * All variants displayed together for comparison.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <ButtonBase variant="primary">Primary</ButtonBase>
      <ButtonBase variant="secondary">Secondary</ButtonBase>
      <ButtonBase variant="outline">Outline</ButtonBase>
    </div>
  ),
}

/**
 * All sizes displayed together for comparison.
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <ButtonBase variant="primary" size="sm">
        Small
      </ButtonBase>
      <ButtonBase variant="primary" size="md">
        Medium
      </ButtonBase>
      <ButtonBase variant="primary" size="lg">
        Large
      </ButtonBase>
    </div>
  ),
}
