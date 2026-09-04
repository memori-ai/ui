import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import ConfirmDialog, {
  type ConfirmDialogProps as Props,
} from './ConfirmDialog'
import Button from '../Button'
import { FixedSurface } from '../../../.storybook/decorators'

const meta = {
  title: 'Overlay/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    message: {
      control: {
        type: 'text',
      },
    },
    confirmText: {
      control: {
        type: 'text',
      },
    },
    cancelText: {
      control: {
        type: 'text',
      },
    },
    loading: {
      control: 'boolean',
      description: 'Disables actions and shows loading on confirm',
    },
    container: { table: { disable: true } },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof ConfirmDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  },
}

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  },
}

export const WithCustomTitle: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to proceed with this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  },
}

export const WithCustomMessage: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Confirm Action',
    message:
      'This action cannot be undone. All associated data will be permanently deleted from the system.',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  },
}

export const WithCustomButtonText: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message:
      'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Yes, Delete',
    cancelText: 'No, Keep It',
  },
}

const DeleteTemplate = (args: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isDeleted, setIsDeleted] = React.useState(false)

  const handleConfirm = () => {
    setIsDeleted(true)
    setIsOpen(false)
    console.log('Item deleted!')
  }

  return (
    <>
      {isDeleted ? (
        <div
          style={{
            padding: '12px',
            background: '#f8d7da',
            color: '#721c24',
            borderRadius: '4px',
            marginBottom: '20px',
          }}
        >
          Item has been deleted successfully!
        </div>
      ) : (
        <Button onClick={() => setIsOpen(true)}>Delete Item</Button>
      )}

      <ConfirmDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
      />
    </>
  )
}

export const DeleteConfirmation: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message:
      'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Delete',
    cancelText: 'Cancel',
  },
  render: args => <DeleteTemplate {...args} />,
}

const SaveTemplate = (args: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [navigatedAway, setNavigatedAway] = React.useState(false)

  const handleTryNavigate = () => {
    setIsOpen(true)
  }

  const handleConfirm = () => {
    setNavigatedAway(true)
    setIsOpen(false)
    console.log('Navigated without saving!')
  }

  return (
    <>
      {navigatedAway ? (
        <div
          style={{
            padding: '12px',
            background: '#d4edda',
            color: '#155724',
            borderRadius: '4px',
            marginBottom: '20px',
          }}
        >
          Navigated away without saving changes.
        </div>
      ) : (
        <div>
          <div
            style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '20px',
            }}
          >
            <h3>Unsaved Form</h3>
            <p>This is a form with unsaved changes.</p>
            <input
              type="text"
              placeholder="Your name"
              style={{ padding: '8px', marginBottom: '10px', width: '100%' }}
            />
            <textarea
              placeholder="Your message"
              style={{ padding: '8px', width: '100%', height: '100px' }}
            />
          </div>
          <Button onClick={handleTryNavigate}>Navigate Away</Button>
        </div>
      )}

      <ConfirmDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
      />
    </>
  )
}

export const UnsavedChanges: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Unsaved Changes',
    message:
      'You have unsaved changes. Are you sure you want to leave without saving?',
    confirmText: 'Leave',
    cancelText: 'Stay',
  },
  render: args => <SaveTemplate {...args} />,
}

export const Loading: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Deleting…',
    message: 'Please wait while the item is removed.',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    loading: true,
  },
}

export const InFixedSurface: Story = {
  parameters: { layout: 'fullscreen' },
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Clipped confirm',
    message: 'Dialog portal targets the fixed surface.',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  },
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true)
    return (
      <FixedSurface>
        {surface => (
          <>
            <Button onClick={() => setIsOpen(true)}>Open confirm</Button>
            <ConfirmDialog
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onConfirm={() => setIsOpen(false)}
              container={surface}
              title="Clipped confirm"
              message="Dialog portal targets the fixed surface."
              confirmText="Confirm"
              cancelText="Cancel"
            />
          </>
        )}
      </FixedSurface>
    )
  },
}

export const OpenInteraction: Story = {
  render: args => <DeleteTemplate {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item?',
    confirmText: 'Delete',
    cancelText: 'Cancel',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    await userEvent.click(canvas.getByRole('button', { name: /delete item/i }))
    await expect(await body.findByRole('dialog')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
  },
}
