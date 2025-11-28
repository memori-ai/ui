import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Modal, { type Props } from './Modal'
import Button from '../Button/Button'

const meta = {
  title: 'UI/Modal',
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
    open: {
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
  render: (args: Props) => {
    const [isOpen, setIsOpen] = React.useState(!!args.open || false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Click me</Button>
        <Modal
          {...args}
          open={isOpen}
          onClose={args.closable ? () => setIsOpen(false) : () => {}}
          footer={args.footer}
        >
          {content}
        </Modal>
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
    <Button primary>OK</Button>
    <Button>Cancel</Button>
  </>
)

const footerNonClosableModal = <Button primary>OK</Button>

export const Default: Story = {
  args: {
    open: false,
    closable: true,
    onClose: () => {},
  },
}

export const Open: Story = {
  args: {
    open: true,
    closable: true,
    onClose: () => {},
  },
}

export const WithTitle: Story = {
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
  },
}

export const WithTitleAndDescription: Story = {
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
  },
}

export const Loading: Story = {
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    loading: true,
  },
}

export const WithFooter: Story = {
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer,
  },
}

export const NonClosable: Story = {
  args: {
    open: true,
    closable: false,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer: footerNonClosableModal,
  },
}

export const WithALotOfContent: Story = {
  args: {
    open: true,
    closable: true,
    onClose: () => {},
    title: 'Modal Title',
    description: 'Modal Description',
    footer,
  },
  render: (args: Props) => {
    const [isOpen, setIsOpen] = React.useState(!!args.open || false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Click me</Button>
        <Modal
          {...args}
          open={isOpen}
          onClose={args.closable ? () => setIsOpen(false) : () => {}}
          footer={args.footer}
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
