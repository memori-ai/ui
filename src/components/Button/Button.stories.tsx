import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { fn } from 'storybook/test'
import Download from '../../icons/Download'
import Send from '../../icons/Send'
import Delete from '../../icons/Delete'
import Plus from '../../icons/Plus'
import Close from '../../icons/Close'
import Setting from '../../icons/Setting'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Button variant style',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    shape: {
      control: {
        type: 'select',
      },
      options: ['default', 'round', 'circle'],
      description: 'Button shape',
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button should take full width',
    },
    loading: {
      control: {
        type: 'boolean',
      },
      description: 'Shows a loading spinner and disables the button',
    },
    active: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is in an active/pressed state',
    },
    danger: {
      control: {
        type: 'boolean',
      },
      description: 'Indicates a destructive/dangerous action',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is disabled',
    },
    iconPosition: {
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
      description: 'Position of the icon relative to the button text',
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
} satisfies Meta<typeof Button>

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
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
}

/**
 * All sizes displayed together for comparison.
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button
        variant="primary"
        size="sm"
      >
        Small
      </Button>
      <Button
        variant="primary"
        size="md"
      >
        Medium
      </Button>
      <Button
        variant="primary"
        size="lg"
      >
        Large
      </Button>
    </div>
  ),
}

/**
 * Ghost variant has a transparent background with no border.
 */
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}

/**
 * Danger variant for destructive actions.
 */
export const Danger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger',
  },
}

/**
 * Using the danger boolean prop (shorthand for variant="danger").
 */
export const DangerProp: Story = {
  args: {
    children: 'Delete Item',
    danger: true,
  },
}

/**
 * Loading state shows a spinner and disables the button.
 */
export const Loading: Story = {
  args: {
    children: 'Submitting...',
    loading: true,
  },
}

/**
 * Loading state with different variants.
 */
export const LoadingVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button
        variant="primary"
        loading
      >
        Primary
      </Button>
      <Button
        variant="secondary"
        loading
      >
        Secondary
      </Button>
      <Button
        variant="outline"
        loading
      >
        Outline
      </Button>
      <Button
        variant="ghost"
        loading
      >
        Ghost
      </Button>
      <Button
        variant="danger"
        loading
      >
        Danger
      </Button>
    </div>
  ),
}

/**
 * Button with icon on the left (default position).
 */
export const WithIconLeft: Story = {
  args: {
    children: 'Download',
    icon: <Download />,
  },
}

/**
 * Button with icon on the right.
 */
export const WithIconRight: Story = {
  args: {
    children: 'Send',
    icon: <Send />,
    iconPosition: 'right',
  },
}

/**
 * Icon-only button (no children).
 */
export const IconOnly: Story = {
  args: {
    icon: <Plus />,
    'aria-label': 'Add item',
  },
}

/**
 * Various icon buttons with different variants.
 */
export const IconButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button
        variant="primary"
        icon={<Plus />}
        aria-label="Add"
      />
      <Button
        variant="secondary"
        icon={<Setting />}
        aria-label="Settings"
      />
      <Button
        variant="outline"
        icon={<Download />}
        aria-label="Download"
      />
      <Button
        variant="ghost"
        icon={<Close />}
        aria-label="Close"
      />
      <Button
        variant="danger"
        icon={<Delete />}
        aria-label="Delete"
      />
    </div>
  ),
}

/**
 * Round shape button with pill-shaped border radius.
 */
export const RoundShape: Story = {
  args: {
    children: 'Round Button',
    shape: 'round',
  },
}

/**
 * Circle shape button (typically used with icons).
 */
export const CircleShape: Story = {
  args: {
    icon: <Plus />,
    shape: 'circle',
    'aria-label': 'Add item',
  },
}

/**
 * All shapes displayed together.
 */
export const AllShapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button shape="default">Default</Button>
      <Button shape="round">Round</Button>
      <Button
        shape="circle"
        icon={<Plus />}
        aria-label="Add"
      />
    </div>
  ),
}

/**
 * Circle shape in different sizes.
 */
export const CircleSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button
        shape="circle"
        size="sm"
        icon={<Plus />}
        aria-label="Add small"
      />
      <Button
        shape="circle"
        size="md"
        icon={<Plus />}
        aria-label="Add medium"
      />
      <Button
        shape="circle"
        size="lg"
        icon={<Plus />}
        aria-label="Add large"
      />
    </div>
  ),
}

/**
 * Active state for toggle buttons.
 */
export const Active: Story = {
  args: {
    children: 'Active Button',
    active: true,
  },
}

/**
 * Active state with different variants.
 */
export const ActiveVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button
        variant="primary"
        active
      >
        Primary Active
      </Button>
      <Button
        variant="secondary"
        active
      >
        Secondary Active
      </Button>
      <Button
        variant="outline"
        active
      >
        Outline Active
      </Button>
      <Button
        variant="ghost"
        active
      >
        Ghost Active
      </Button>
    </div>
  ),
}

/**
 * Disabled ghost button.
 */
export const DisabledGhost: Story = {
  args: {
    children: 'Disabled Ghost',
    variant: 'ghost',
    disabled: true,
  },
}

/**
 * Disabled danger button.
 */
export const DisabledDanger: Story = {
  args: {
    children: 'Disabled Danger',
    variant: 'danger',
    disabled: true,
  },
}

/**
 * All variants including new ones displayed together.
 */
export const AllVariantsComplete: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
}

/**
 * Comprehensive example showing all features.
 */
export const Showcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', color: '#595959' }}>Variants</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 8px 0', color: '#595959' }}>With Icons</h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button icon={<Download />}>Download</Button>
          <Button
            icon={<Send />}
            iconPosition="right"
          >
            Send
          </Button>
          <Button
            variant="danger"
            icon={<Delete />}
          >
            Delete
          </Button>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 8px 0', color: '#595959' }}>
          Loading States
        </h4>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button loading>Submitting</Button>
          <Button
            variant="outline"
            loading
          >
            Loading
          </Button>
          <Button
            variant="danger"
            loading
          >
            Deleting
          </Button>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 8px 0', color: '#595959' }}>Shapes</h4>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button shape="default">Default</Button>
          <Button shape="round">Round Shape</Button>
          <Button
            shape="circle"
            icon={<Plus />}
            aria-label="Add"
          />
          <Button
            shape="circle"
            variant="danger"
            icon={<Close />}
            aria-label="Close"
          />
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 8px 0', color: '#595959' }}>
          Icon-only Buttons
        </h4>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button
            size="sm"
            icon={<Setting />}
            aria-label="Settings"
          />
          <Button
            size="md"
            icon={<Setting />}
            aria-label="Settings"
          />
          <Button
            size="lg"
            icon={<Setting />}
            aria-label="Settings"
          />
        </div>
      </div>
    </div>
  ),
}
