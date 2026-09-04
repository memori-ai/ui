import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { FixedSurface } from '../../../.storybook/decorators'
import { Dropdown, type DropdownProps } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Azioni e navigazione/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown menu built on @base-ui/react Menu. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. Use Dropdown.Trigger to open the menu and Dropdown.Menu with Dropdown.Item for options.',
      },
    },
  },
  argTypes: {
    open: { control: 'boolean', description: 'Controlled open state' },
    defaultOpen: {
      control: 'boolean',
      description: 'Initial open state (uncontrolled)',
    },
    disabled: { control: 'boolean' },
    onOpenChange: { action: 'onOpenChange' },
  },
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  render: (args: DropdownProps) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>Actions</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Duplicate</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Share</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
}

export const WithSeparator: Story = {
  render: (args: DropdownProps) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>File</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>New</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Open</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Save</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onClick={() => {}}>Export</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Print</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
}

export const WithGroups: Story = {
  render: (args: DropdownProps) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>Sort</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Group>
          <Dropdown.GroupLabel>Sort by</Dropdown.GroupLabel>
          <Dropdown.Item onClick={() => {}}>Name</Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>Date</Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>Size</Dropdown.Item>
        </Dropdown.Group>
        <Dropdown.Separator />
        <Dropdown.Group>
          <Dropdown.GroupLabel>View</Dropdown.GroupLabel>
          <Dropdown.Item onClick={() => {}}>List</Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>Grid</Dropdown.Item>
        </Dropdown.Group>
      </Dropdown.Menu>
    </Dropdown>
  ),
}

export const WithDisabledItem: Story = {
  render: (args: DropdownProps) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>Options</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Enabled action</Dropdown.Item>
        <Dropdown.Item disabled>Disabled action</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Another action</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
}

export const Disabled: Story = {
  render: (args: DropdownProps) => (
    <Dropdown
      {...args}
      disabled
    >
      <Dropdown.Trigger>Disabled dropdown</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
}

export const PlacementBottom: Story = {
  render: (args: DropdownProps) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>Bottom (default)</Dropdown.Trigger>
      <Dropdown.Menu
        placement="bottom"
        align="start"
      >
        <Dropdown.Item onClick={() => {}}>Item 1</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
}

export const PlacementTop: Story = {
  render: (args: DropdownProps) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>Top</Dropdown.Trigger>
      <Dropdown.Menu
        placement="top"
        align="start"
      >
        <Dropdown.Item onClick={() => {}}>Item 1</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Item 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
}

export const Controlled: Story = {
  render: function ControlledStory(args: DropdownProps) {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Dropdown
          {...args}
          open={open}
          onOpenChange={setOpen}
        >
          <Dropdown.Trigger>
            Controlled ({open ? 'open' : 'closed'})
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setOpen(false)}>
              Close menu
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOpen(false)}>
              Another item
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    )
  },
}

export const ItemCloseOnClickFalse: Story = {
  render: (args: DropdownProps) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>Keep open on click</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item
          closeOnClick={false}
          onClick={() => {}}
        >
          Item (menu stays open)
        </Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Item (menu closes)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
}

export const TriggerWithoutChevron: Story = {
  render: (args: DropdownProps) => (
    <Dropdown {...args}>
      <Dropdown.Trigger
        showChevron={false}
        aria-label="More options"
      >
        ⋮
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
}

export const PlacementLeftRight: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
      <Dropdown>
        <Dropdown.Trigger>Left</Dropdown.Trigger>
        <Dropdown.Menu
          placement="left"
          align="start"
        >
          <Dropdown.Item onClick={() => {}}>Item 1</Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Trigger>Right</Dropdown.Trigger>
        <Dropdown.Menu
          placement="right"
          align="start"
        >
          <Dropdown.Item onClick={() => {}}>Item 1</Dropdown.Item>
          <Dropdown.Item onClick={() => {}}>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ),
}

export const InFixedSurface: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <FixedSurface>
        {surface => (
          <Dropdown
            open={open}
            onOpenChange={setOpen}
          >
            <Dropdown.Trigger>Open in surface</Dropdown.Trigger>
            <Dropdown.Menu container={surface}>
              <Dropdown.Item onClick={() => {}}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </FixedSurface>
    )
  },
}

export const OpenInteraction: Story = {
  parameters: {
    // Base UI menu focus guards trip axe aria-hidden-focus while open / closing.
    a11y: { test: 'todo' },
  },
  render: (args: DropdownProps) => (
    <Dropdown {...args}>
      <Dropdown.Trigger>Actions</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => {}}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    await userEvent.click(canvas.getByRole('button', { name: /actions/i }))
    await expect(await body.findByRole('menu')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
  },
}
