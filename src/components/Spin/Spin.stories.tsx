import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Spin } from './Spin'
import { Button } from '../Button'

const meta = {
  title: 'Components/Spin',
  component: Spin,
  tags: ['autodocs'],
  argTypes: {
    spinning: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the spinner is visible',
    },
    primary: {
      control: {
        type: 'boolean',
      },
      description: 'If true, uses the primary color for the spinner',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'default'],
      description: 'Size of the spinner icon',
    },
    tip: {
      control: {
        type: 'text',
      },
      description: 'Tip text displayed below the spinner',
    },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'A loading spinner component that displays an overlay with a spinning icon. Built with full accessibility support (WCAG 2.1 AA+).',
      },
    },
  },
  render: args => (
    <div style={{ minHeight: '200px', padding: '1rem' }}>
      <Spin {...args}>
        <div
          style={{
            padding: '2rem',
            border: '1px solid var(--memori-tertiary-background)',
            borderRadius: 'var(--memori-radius-box)',
          }}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h2>Suspendisse a sodales nulla, sed semper nisi.</h2>
          <p>
            Proin tincidunt enim in felis aliquet, a ultricies purus bibendum.
          </p>
          <ul>
            <li>Quisque in ultrices lectus.</li>
            <li>Quisque in ultrices lectus.</li>
            <li>Quisque in ultrices lectus.</li>
          </ul>
          <p>Nulla at urna diam.</p>
        </div>
      </Spin>
    </div>
  ),
} satisfies Meta<typeof Spin>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    spinning: false,
  },
}

export const Spinning: Story = {
  args: {
    spinning: true,
  },
}

export const Primary: Story = {
  args: {
    spinning: true,
    primary: true,
  },
}

export const WithTip: Story = {
  args: {
    spinning: true,
    tip: 'Loading content...',
  },
}

export const Small: Story = {
  args: {
    spinning: true,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    spinning: true,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    spinning: true,
    size: 'lg',
  },
}

export const WithButton: Story = {
  args: {
    spinning: true,
    primary: true,
  },
  render: args => (
    <Spin {...args}>
      <Button>Click me</Button>
    </Spin>
  ),
}

export const WithCustomIndicator: Story = {
  args: {
    spinning: true,
    indicator: (
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '4px solid var(--memori-primary)',
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: 'memori-spin-rotate 1s linear infinite',
        }}
        aria-hidden="true"
      />
    ),
  },
}

export const Controlled: Story = {
  render: () => {
    const [spinning, setSpinning] = React.useState(false)

    return (
      <div>
        <Button
          onClick={() => setSpinning(!spinning)}
          style={{ marginBottom: '1rem' }}
        >
          {spinning ? 'Stop' : 'Start'} Loading
        </Button>
        <Spin
          spinning={spinning}
          tip="Processing..."
        >
          <div
            style={{
              padding: '2rem',
              border: '1px solid var(--memori-tertiary-background)',
              borderRadius: 'var(--memori-radius-box)',
            }}
          >
            <p>This content is being loaded.</p>
            <p>Current state: {spinning ? 'Loading' : 'Ready'}</p>
          </div>
        </Spin>
      </div>
    )
  },
}

export const MinimalContent: Story = {
  args: {
    spinning: true,
    primary: true,
  },
  render: args => (
    <Spin {...args}>
      <div style={{ padding: '1rem' }}>
        <p>Minimal content example</p>
      </div>
    </Spin>
  ),
}
