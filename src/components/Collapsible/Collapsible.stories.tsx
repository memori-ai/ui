import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Collapsible } from './Collapsible'

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the collapsible is open by default (uncontrolled)',
    },
    open: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the collapsible is open (controlled)',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the collapsible is disabled',
    },
    keepMounted: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to keep the panel mounted when closed',
    },
    summary: {
      control: {
        type: 'text',
      },
      description: 'The content that appears in the trigger button',
    },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'A collapsible component that allows users to expand and collapse content. Built on @base-ui/react with full accessibility support (WCAG 2.1 AA+).',
      },
    },
  },
} satisfies Meta<typeof Collapsible>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    summary: 'Click to expand',
    children: (
      <p>This is the collapsible content. It can contain any React elements.</p>
    ),
  },
}

export const DefaultOpen: Story = {
  args: {
    summary: 'Click to collapse',
    defaultOpen: true,
    children: <p>This collapsible is open by default.</p>,
  },
}

export const WithComplexContent: Story = {
  args: {
    summary: 'Show more details',
    children: (
      <>
        <p>This collapsible contains multiple elements:</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <p>And more content after the list.</p>
        <figure>
          <img
            src="https://www.aisuru.com/images/aisuru/og-image.png"
            alt="Placeholder"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <figcaption>Placeholder image</figcaption>
        </figure>
      </>
    ),
  },
}

export const Controlled: Story = {
  render: args => {
    const [open, setOpen] = React.useState(false)

    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          style={{ marginBottom: '1rem' }}
        >
          Toggle from outside: {open ? 'Close' : 'Open'}
        </button>
        <Collapsible
          {...args}
          open={open}
          onOpenChange={setOpen}
          summary="Controlled collapsible"
        >
          <p>This collapsible is controlled by an external button.</p>
          <p>Current state: {open ? 'Open' : 'Closed'}</p>
        </Collapsible>
      </div>
    )
  },
  args: {
    summary: 'Controlled collapsible',
    children: <p>This collapsible is controlled externally.</p>,
  },
}

export const Disabled: Story = {
  args: {
    summary: 'Disabled collapsible',
    disabled: true,
    children: <p>This collapsible is disabled and cannot be toggled.</p>,
  },
}

export const KeepMounted: Story = {
  args: {
    summary: 'Keep mounted (content stays in DOM)',
    keepMounted: true,
    children: (
      <p>
        This collapsible keeps its content in the DOM even when closed. Check
        the DOM inspector to verify.
      </p>
    ),
  },
}

export const WithCustomStyling: Story = {
  args: {
    summary: 'Custom styled collapsible',
    className: 'custom-collapsible',
    triggerClassName: 'custom-trigger',
    panelClassName: 'custom-panel',
    style: {
      border: '1px solid var(--memori-neutral)',
      borderRadius: 'var(--memori-radius-box)',
      padding: 'var(--memori-spacing-sm)',
    },
    children: (
      <div>
        <p>This collapsible has custom styling applied.</p>
        <p>You can customize the root, trigger, and panel separately.</p>
      </div>
    ),
  },
}

export const MultipleCollapsibles: Story = {
  args: {
    summary: 'Multiple collapsibles example',
    children: <p>See the full story for multiple collapsibles.</p>,
  },
  render: () => (
    <div>
      <Collapsible summary="First collapsible">
        <p>Content for the first collapsible.</p>
      </Collapsible>
      <Collapsible summary="Second collapsible">
        <p>Content for the second collapsible.</p>
      </Collapsible>
      <Collapsible
        summary="Third collapsible"
        defaultOpen
      >
        <p>Content for the third collapsible (open by default).</p>
      </Collapsible>
    </div>
  ),
}

export const WithReactNodeSummary: Story = {
  args: {
    summary: (
      <span>
        <strong>Bold summary</strong> with <em>italic text</em>
      </span>
    ),
    children: (
      <p>
        The summary can be any React node, not just plain text. This allows for
        rich formatting and custom components.
      </p>
    ),
  },
}

export const AccessibilityExample: Story = {
  args: {
    summary: 'Accessible collapsible',
    'aria-label': 'Expand to see accessibility information',
    children: (
      <div>
        <h3>Accessibility Features</h3>
        <ul>
          <li>Proper ARIA attributes (aria-expanded, aria-controls)</li>
          <li>Keyboard navigation support (Enter, Space)</li>
          <li>Focus management with focus-visible</li>
          <li>Screen reader announcements</li>
          <li>WCAG 2.1 AA+ compliant</li>
        </ul>
      </div>
    ),
  },
}
