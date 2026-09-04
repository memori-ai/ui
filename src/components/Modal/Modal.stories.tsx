import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import Modal, { type ModalProps } from './Modal'
import Button from '../Button'
import { FixedSurface } from '../../../.storybook/decorators'

const meta = {
  title: 'Overlay/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
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
    loading: {
      control: {
        type: 'boolean',
      },
    },
    closable: {
      control: {
        type: 'boolean',
      },
    },
    closeOnOverlayClick: {
      control: {
        type: 'boolean',
      },
    },
    closeOnEsc: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    centered: {
      control: {
        type: 'boolean',
      },
    },
    animated: {
      control: {
        type: 'boolean',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = React.useState(!!args.open || false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          {...args}
          open={isOpen}
          onOpenChange={open => {
            setIsOpen(open)
            args.onOpenChange?.(open)
          }}
        />
      </>
    )
  },
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

const content = (
  <>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <h3>Suspendisse a sodales nulla, sed semper nisi.</h3>
    <p>Proin tincidunt enim in felis aliquet, a ultricies purus bibendum.</p>
    <ul>
      <li>Quisque in ultrices lectus.</li>
      <li>Quisque in ultrices lectus.</li>
      <li>Quisque in ultrices lectus.</li>
    </ul>
    <p>Nulla at urna diam.</p>
  </>
)

const footer = (
  <>
    <Button variant="primary">OK</Button>
    <Button>Cancel</Button>
  </>
)

const footerNonClosableModal = <Button variant="primary">OK</Button>

export const Default: Story = {
  args: {
    open: false,
    closable: true,
    onOpenChange: () => {},
  },
}

export const Open: Story = {
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    'aria-label': 'Modal',
  },
}

export const WithTitle: Story = {
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
  },
}

export const WithTitleAndDescription: Story = {
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
  },
}

export const Loading: Story = {
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    loading: true,
  },
}

export const WithFooter: Story = {
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer,
  },
}

export const NonClosable: Story = {
  args: {
    open: true,
    closable: false,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer: footerNonClosableModal,
  },
}

export const WithALotOfContent: Story = {
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer,
  },
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = React.useState(!!args.open || false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          {...args}
          open={isOpen}
          onOpenChange={open => {
            setIsOpen(open)
            args.onOpenChange?.(open)
          }}
        >
          {content}
          {content}
          {content}
          {content}
          {content}
        </Modal>
      </>
    )
  },
}

export const SizeVariants: Story = {
  render: () => {
    const [openSize, setOpenSize] = React.useState<
      'sm' | 'md' | 'lg' | 'xl' | 'full' | null
    >(null)

    return (
      <>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button onClick={() => setOpenSize('sm')}>Small</Button>
          <Button onClick={() => setOpenSize('md')}>Medium</Button>
          <Button onClick={() => setOpenSize('lg')}>Large</Button>
          <Button onClick={() => setOpenSize('xl')}>Extra Large</Button>
          <Button onClick={() => setOpenSize('full')}>Full Width</Button>
        </div>
        {openSize && (
          <Modal
            open={true}
            onOpenChange={() => setOpenSize(null)}
            title={`${openSize.toUpperCase()} Modal`}
            size={openSize}
          >
            <p>This is a {openSize} sized modal.</p>
          </Modal>
        )}
      </>
    )
  },
}

export const CustomWidths: Story = {
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Custom Width Modal',
    width: '90%',
    widthMd: '600px',
    widthLg: '800px',
  },
}

export const LifecycleCallbacks: Story = {
  args: {
    open: true,
    closable: true,
    onOpenChange: () => {},
    title: 'Lifecycle Callbacks',
    onAfterOpen: () => {
      console.log('Modal opened!')
    },
    onAfterClose: () => {
      console.log('Modal closed!')
    },
  },
}

/** Portal clipped to a fixed-height surface (widget embed). */
export const InFixedSurface: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => {
    const [open, setOpen] = React.useState(true)
    return (
      <FixedSurface>
        {surface => (
          <>
            <Button onClick={() => setOpen(true)}>Open in surface</Button>
            <Modal
              open={open}
              onOpenChange={setOpen}
              container={surface}
              title="Clipped modal"
              size="sm"
            >
              <p>Portal mounts inside the fixed surface, not document.body.</p>
            </Modal>
          </>
        )}
      </FixedSurface>
    )
  },
}

export const OpenInteraction: Story = {
  args: {
    open: false,
    closable: true,
    title: 'Interactive modal',
    children: <p>Opened via play function.</p>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    await userEvent.click(canvas.getByRole('button', { name: /open modal/i }))
    await expect(await body.findByRole('dialog')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
  },
}
