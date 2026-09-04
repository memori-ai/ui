import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import React, { useState } from 'react'

import { FixedSurface } from '../../../.storybook/decorators'
import { Button } from '../Button'
import { Drawer } from './Drawer'

const meta = {
  title: 'Overlay/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Side panel with portal. Pass `container` to clip inside a widget surface (see InFixedSurface).',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controlled open state',
    },
    anchor: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Edge the drawer emerges from',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Width (left/right) or height (top/bottom)',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading state in the drawer body',
    },
    closable: {
      control: 'boolean',
      description: 'Whether the drawer can be closed via the close control',
    },
    title: { control: 'text' },
    description: { control: 'text' },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Theme stamped on the portal popup',
    },
    onOpenChange: { table: { disable: true } },
    onClose: { table: { disable: true } },
    container: { table: { disable: true } },
    children: { control: false },
    footer: { control: false },
  },
  args: {
    title: 'Drawer title',
    description: 'Optional subtitle',
    anchor: 'right',
    size: 'md',
    closable: true,
    loading: false,
    onOpenChange: fn(),
    onClose: fn(),
    children: <p>Drawer body content.</p>,
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

function DrawerPlayground(args: React.ComponentProps<typeof Drawer>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setOpen(true)}
      >
        Open drawer
      </Button>
      <Drawer
        {...args}
        open={open}
        onOpenChange={(next, detail) => {
          args.onOpenChange?.(next, detail)
          setOpen(next)
        }}
      />
    </>
  )
}

/** Happy path + controls. */
export const Default: Story = {
  render: args => <DrawerPlayground {...args} />,
}

/** Size matrix (no one-story-per-value). */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {(['sm', 'md', 'lg'] as const).map(size => (
        <DrawerPlayground
          key={size}
          title={`Size ${size}`}
          size={size}
          anchor="right"
        >
          <p>Size {size}</p>
        </DrawerPlayground>
      ))}
    </div>
  ),
}

/** Loading, not closable, long content, anchors. */
export const States: Story = {
  render: () => {
    const [openRight, setOpenRight] = useState(false)
    const [openLeft, setOpenLeft] = useState(false)
    const [openTop, setOpenTop] = useState(false)
    const [openBottom, setOpenBottom] = useState(false)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <DrawerPlayground
            title="Loading"
            loading
          >
            <p>Spinner in body</p>
          </DrawerPlayground>
          <DrawerPlayground
            title="Not closable"
            closable={false}
          >
            <p>Close control hidden</p>
          </DrawerPlayground>
          <DrawerPlayground title="Long content">
            {Array.from({ length: 40 }, (_, i) => (
              <p key={i}>Row {i + 1}</p>
            ))}
          </DrawerPlayground>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button onClick={() => setOpenLeft(true)}>Left</Button>
          <Button onClick={() => setOpenRight(true)}>Right</Button>
          <Button onClick={() => setOpenTop(true)}>Top</Button>
          <Button onClick={() => setOpenBottom(true)}>Bottom</Button>
        </div>
        <Drawer
          open={openLeft}
          onOpenChange={setOpenLeft}
          anchor="left"
          title="Left Drawer"
        >
          Left content
        </Drawer>
        <Drawer
          open={openRight}
          onOpenChange={setOpenRight}
          anchor="right"
          title="Right Drawer"
        >
          Right content
        </Drawer>
        <Drawer
          open={openTop}
          onOpenChange={setOpenTop}
          anchor="top"
          title="Top Drawer"
        >
          Top content
        </Drawer>
        <Drawer
          open={openBottom}
          onOpenChange={setOpenBottom}
          anchor="bottom"
          title="Bottom Drawer"
        >
          Bottom content
        </Drawer>
      </div>
    )
  },
}

export const Playground: Story = {
  render: args => <DrawerPlayground {...args} />,
  args: {
    footer: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Submit</Button>
      </>
    ),
  },
}

/**
 * Production-like clip surface — reproduces widget portal positioning bugs.
 */
export const InFixedSurface: Story = {
  parameters: { layout: 'fullscreen' },
  render: args => {
    const [open, setOpen] = useState(true)
    return (
      <FixedSurface>
        {surface => (
          <>
            <Button onClick={() => setOpen(true)}>Open in surface</Button>
            <Drawer
              {...args}
              open={open}
              onOpenChange={setOpen}
              container={surface}
              title="Clipped drawer"
            >
              <p>
                Portal target is the fixed-height surface, not document.body.
              </p>
            </Drawer>
          </>
        )}
      </FixedSurface>
    )
  },
}

export const OpenInteraction: Story = {
  render: args => <DrawerPlayground {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    await userEvent.click(canvas.getByRole('button', { name: /open drawer/i }))
    await expect(await body.findByRole('dialog')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
  },
}
