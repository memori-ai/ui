import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Alert from './Alert'
import Button from '../Button'

const meta = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'error', 'info'],
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    open: {
      control: {
        type: 'boolean',
      },
    },
    closable: {
      control: {
        type: 'boolean',
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  render: args => {
    const [isOpen, setIsOpen] = React.useState(!!args.open)
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Show Alert</Button>
        <Alert
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </>
    )
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: false,
    type: 'info',
    title: 'Information',
    description: 'This is an informative alert message.',
    onClose: () => {},
  },
}

export const Success: Story = {
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Success!',
    description: 'Operation completed successfully.',
  },
}

export const Warning: Story = {
  args: {
    open: true,
    onClose: () => {},
    type: 'warning',
    title: 'Warning',
    description: 'Please review this important warning message.',
  },
}

export const Error: Story = {
  args: {
    open: true,
    onClose: () => {},
    type: 'error',
    title: 'Error',
    description: 'An error occurred while processing your request.',
  },
}

export const WithAction: Story = {
  args: {
    open: true,
    onClose: () => {},
    type: 'info',
    title: 'Update Available',
    description: 'A new version is available.',
    action: <Button primary>Update Now</Button>,
  },
}

export const NonClosable: Story = {
  args: {
    open: true,
    onClose: () => {},
    type: 'warning',
    title: 'Important Notice',
    description: 'This message cannot be dismissed.',
    closable: false,
  },
}

export const CustomWidth: Story = {
  args: {
    open: true,
    onClose: () => {},
    type: 'info',
    title: 'Custom Width',
    description: 'This alert has a custom width.',
    width: '500px',
  },
}

export const WithoutDescription: Story = {
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Operation Successful',
  },
}

export const AutoDismiss: Story = {
  args: {
    open: true,
    onClose: () => {},
    type: 'success',
    title: 'Auto Dismiss',
    description: 'This alert will dismiss automatically after 3 seconds.',
    duration: 3000,
  },
}
