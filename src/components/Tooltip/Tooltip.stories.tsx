import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Tooltip from './Tooltip'
import { Button } from '../Button'
import './styles.css'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      description: "If true, the tooltip is disabled and won't show",
    },
    visible: {
      control: {
        type: 'boolean',
      },
      description: 'If true, the tooltip is visible (controlled)',
    },
    align: {
      control: {
        type: 'select',
      },
      options: [
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
        'left',
        'right',
      ],
      description: 'Tooltip placement relative to the trigger',
    },
    showArrow: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to show an arrow pointing to the trigger',
    },
    delayDuration: {
      control: {
        type: 'number',
      },
      description: 'Delay in milliseconds before showing the tooltip',
    },
    offset: {
      control: {
        type: 'number',
      },
      description: 'Offset distance from the trigger in pixels',
    },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'A tooltip component that displays informative text when users hover over, focus on, or tap an element. Built on @base-ui/react with full accessibility support (WCAG 2.1 AA+).',
      },
    },
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10rem',
        paddingBottom: '10rem',
        minHeight: '400px',
      }}
    >
      <Tooltip {...args} />
    </div>
  ),
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'Here is some tooltip content',
    children: <Button>Hover me</Button>,
  },
}

export const WithJSXContent: Story = {
  args: {
    content: (
      <p>
        Here we have some JSX, useful for{' '}
        <a
          href="https://memori.ai"
          rel="noopener noreferrer"
          target="_blank"
        >
          links
        </a>
        , for example.
      </p>
    ),
    children: <span>Hover me</span>,
  },
}

export const Disabled: Story = {
  args: {
    content: 'Here is some tooltip content but I am disabled',
    children: <span>Hover me</span>,
    disabled: true,
  },
}

export const VisibleControlled: Story = {
  args: {
    content:
      'Here is some tooltip content displayed by default as I am controlled',
    children: <span>Hover me</span>,
    visible: true,
  },
}

export const AlignTop: Story = {
  args: {
    content: 'Tooltip on top',
    children: <span>Hover me</span>,
    align: 'top',
    visible: true,
  },
}

export const AlignTopLeft: Story = {
  args: {
    content: 'Tooltip on top left',
    children: <span>Hover me</span>,
    align: 'topLeft',
    visible: true,
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '10rem',
        paddingBottom: '10rem',
        minHeight: '400px',
      }}
    >
      <Tooltip {...args} />
    </div>
  ),
}

export const AlignTopRight: Story = {
  args: {
    content: 'Tooltip on top right',
    children: <Button>Hover me</Button>,
    align: 'topRight',
    visible: true,
  },
}

export const AlignBottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    children: <Button>Hover me</Button>,
    align: 'bottom',
    visible: true,
  },
}

export const AlignBottomLeft: Story = {
  args: {
    content: 'Tooltip on bottom left',
    children: <Button>Hover me</Button>,
    align: 'bottomLeft',
    visible: true,
  },
}

export const AlignBottomRight: Story = {
  args: {
    content: 'Tooltip on bottom right',
    children: <Button>Hover me</Button>,
    align: 'bottomRight',
    visible: true,
  },
}

export const AlignLeft: Story = {
  args: {
    content: 'Tooltip on left',
    children: <Button>Hover me</Button>,
    align: 'left',
    visible: true,
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '10rem',
        paddingBottom: '10rem',
        minHeight: '400px',
      }}
    >
      <Tooltip {...args} />
    </div>
  ),
}

export const AlignRight: Story = {
  args: {
    content: 'Tooltip on right',
    children: <Button>Hover me</Button>,
    align: 'right',
    visible: true,
  },
}

export const WithoutArrow: Story = {
  args: {
    content: 'Tooltip without arrow',
    children: <Button>Hover me</Button>,
    showArrow: false,
    visible: true,
  },
}

export const WithDelay: Story = {
  args: {
    content: 'This tooltip has a 500ms delay before showing',
    children: <Button>Hover me (wait 500ms)</Button>,
    delayDuration: 500,
  },
}

export const WithButtonTrigger: Story = {
  args: {
    content: 'This tooltip is attached to a button',
    children: <Button>Button with tooltip</Button>,
    visible: true,
  },
}

export const ControlledExample: Story = {
  args: {
    content: 'This tooltip is controlled by an external button',
    children: <Button>Hover or use button to toggle</Button>,
  },
  render: args => {
    const [visible, setVisible] = React.useState(false)

    return (
      <div>
        <Button
          onClick={() => setVisible(!visible)}
          style={{ marginBottom: '1rem' }}
        >
          Toggle tooltip: {visible ? 'Hide' : 'Show'}
        </Button>
        <Tooltip
          {...args}
          visible={visible}
          onVisibleChange={setVisible}
        />
      </div>
    )
  },
}

export const LongContent: Story = {
  args: {
    content:
      'This is a longer tooltip content that demonstrates how the tooltip handles multiple lines of text. It should wrap properly and remain readable.',
    children: <Button>Hover for long content</Button>,
    visible: true,
  },
}
