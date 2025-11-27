import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'
import Eye from '../../icons/Eye'

import { fn } from 'storybook/test'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    htmlType: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
    primary: {
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      control: {
        type: 'boolean',
      },
    },
    ghost: {
      control: {
        type: 'boolean',
      },
    },
    padded: {
      control: {
        type: 'boolean',
      },
    },
    block: {
      control: {
        type: 'boolean',
      },
    },
    danger: {
      control: {
        type: 'boolean',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
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

export const Default: Story = {
  args: {
    children: 'Click me',
  },
}

export const Primary: Story = {
  args: {
    children: 'Click me',
    primary: true,
  },
}

export const Outlined: Story = {
  args: {
    children: 'Click me',
    outlined: true,
  },
}

export const Ghost: Story = {
  args: {
    children: 'Click me',
    ghost: true,
  },
}

export const PrimaryOutlined: Story = {
  args: {
    children: 'Click me',
    primary: true,
    outlined: true,
  },
}

export const Square: Story = {
  args: {
    children: 'Click me',
    shape: 'square',
  },
}

export const Padded: Story = {
  args: {
    children: 'Click me',
    padded: true,
  },
}

export const Block: Story = {
  args: {
    children: 'Click me',
    block: true,
  },
}

export const Circle: Story = {
  args: {
    children: 'Click me',
    shape: 'circle',
    icon: <Eye />,
    padded: false,
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Click me',
    icon: <Eye />,
  },
}

export const Danger: Story = {
  args: {
    children: 'Click me',
    danger: true,
  },
}

export const Loading: Story = {
  args: {
    children: 'Click me',
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Click me',
    disabled: true,
  },
}
