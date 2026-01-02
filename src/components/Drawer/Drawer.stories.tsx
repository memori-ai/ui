import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Drawer, { type Props } from './Drawer'
import Button from '../Button'

import I18nWrapper from '../../i18n/I18nWrapper'

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
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
    placement: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
    animated: {
      control: {
        type: 'boolean',
      },
    },
    closable: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  render: (args: Props) => {
    const [isOpen, setIsOpen] = React.useState(!!args.open || false)

    return (
      <I18nWrapper>
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
        <Drawer
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          {content}
        </Drawer>
      </I18nWrapper>
    )
  },
} satisfies Meta<typeof Drawer>

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
    <h3>Suspendisse a sodales nulla, sed semper nisi.</h3>
    <p>Proin tincidunt enim in felis aliquet, a ultricies purus bibendum.</p>
  </>
)

// Create a proper footer object for the Drawer component
const simpleFooterObject = {
  onSubmit: () => console.log('Submit clicked'),
  loading: false,
}

// Basic examples
export const Default: Story = {
  args: {
    open: false,
  },
}

export const Open: Story = {
  args: {
    open: true,
  },
}

export const Loading: Story = {
  args: {
    open: true,
    title: 'Drawer Title',
    description: 'Drawer Description',
    loading: true,
  },
}

export const WithSimpleFooter: Story = {
  args: {
    open: true,
    title: 'Drawer Title',
    description: 'Drawer Description',
    footer: {
      onSubmit: () => console.log('Submit'),
      loading: false,
    },
  },
}

export const PlacementLeft: Story = {
  args: {
    open: true,
    placement: 'left',
    title: 'Left Drawer',
  },
}

export const CustomWidth: Story = {
  args: {
    open: true,
    title: 'Custom Width Drawer',
    width: '50%',
  },
}

export const NonAnimated: Story = {
  args: {
    open: true,
    title: 'Non-Animated Drawer',
    animated: false,
  },
}

export const NonClosable: Story = {
  args: {
    open: true,
    title: 'Non-Closable Drawer',
    closable: false,
  },
}

export const WithDataDetection: Story = {
  args: {
    open: true,
    title: 'Data Change Detection',
    description: 'This drawer demonstrates the data change detection feature',
  },
  render: (args: Props) => {
    const [isOpen, setIsOpen] = React.useState(!!args.open || false)
    // Use static data for the story - don't try to update it which might cause issues
    const staticData = { id: 1, name: 'John Doe' }

    return (
      <I18nWrapper>
        <Button onClick={() => setIsOpen(true)}>Open Data Drawer</Button>
        <Drawer
          {...args}
          open={isOpen}
          data={staticData}
          onClose={() => setIsOpen(false)}
        >
          <p>This drawer has data associated with it.</p>
          <p>
            When you close it, the component will check for unsaved changes.
          </p>
          <p>(For this demo, no actual changes are tracked)</p>
        </Drawer>
      </I18nWrapper>
    )
  },
}

// Improved ConfirmationDialog template with better state management
export const WithConfirmationDialog: Story = {
  args: {
    open: true,
    title: 'Unsaved Changes Demo',
    description:
      'This drawer shows the confirmation dialog when closing with unsaved changes',
  },
  render: (args: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(!!args.open || true)
    const [data, setData] = useState({ id: 1, name: 'John Doe' })

    return (
      <I18nWrapper>
        <Button onClick={() => setIsOpen(true)}>
          Open Confirmation Dialog
        </Button>
        <Drawer
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          data={data}
          title="Confirmation Example"
          confirmDialogTitle="Confirmation Example"
          confirmDialogMessage="Are you sure you want to close this drawer?"
          footer={{
            onSubmit: () => {
              console.log('Submitted with data:', data)
              setIsOpen(false)
            },
          }}
        >
          <h3>Sample Form Content</h3>
          <p>Current data: {JSON.stringify(data)}</p>
          <Button onClick={() => setData({ id: 1, name: 'Jane Smith' })}>
            Modify Data
          </Button>
        </Drawer>
      </I18nWrapper>
    )
  },
}

// Fixed Template with lots of content and proper footer
export const WithLongContent: Story = {
  args: {
    open: true,
    title: 'Long Content Drawer',
    description: 'This drawer has a lot of content',
    footer: simpleFooterObject, // Use the properly structured footer object
  },
  render: (args: Props) => {
    const [isOpen, setIsOpen] = React.useState(!!args.open || false)

    return (
      <I18nWrapper>
        <Button onClick={() => setIsOpen(true)}>
          Open Long Content Drawer
        </Button>
        <Drawer
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          {content}
          {content}
          {content}
          {content}
        </Drawer>
      </I18nWrapper>
    )
  },
}
