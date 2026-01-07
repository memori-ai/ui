import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Drawer } from './Drawer'
import Button from '../Button'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'If true, the drawer is open',
    },
    anchor: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Side from which the drawer will appear',
    },
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

const DrawerDemo = (args: React.ComponentProps<typeof Drawer>) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          backgroundColor: '#8246af',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        {...args}
        open={open}
        onOpenChange={newOpen => setOpen(newOpen)}
      />
    </>
  )
}

export const Basic: Story = {
  render: args => <DrawerDemo {...args} />,
  args: {
    title: 'Basic Drawer',
    children: (
      <div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    ),
  },
}

export const WithFooter: Story = {
  render: args => <DrawerDemo {...args} />,
  args: {
    title: 'Drawer with Footer',
    anchor: 'right',
    footer: (
      <>
        <Button style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Cancel
        </Button>
        <Button
          style={{
            padding: '8px 16px',
            cursor: 'pointer',
            backgroundColor: '#8246af',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Submit
        </Button>
      </>
    ),
    children: <p>This drawer has a footer action area.</p>,
  },
}

export const Anchors: Story = {
  render: () => {
    const [openRight, setOpenRight] = useState(false)
    const [openLeft, setOpenLeft] = useState(false)
    const [openTop, setOpenTop] = useState(false)
    const [openBottom, setOpenBottom] = useState(false)

    const btnStyle = {
      padding: '8px 16px',
      margin: '8px',
      cursor: 'pointer',
      borderRadius: '4px',
      border: '1px solid #ccc',
    }

    return (
      <div>
        <Button
          onClick={() => setOpenLeft(true)}
          style={btnStyle}
        >
          Left
        </Button>
        <Button
          onClick={() => setOpenRight(true)}
          style={btnStyle}
        >
          Right
        </Button>
        <Button
          onClick={() => setOpenTop(true)}
          style={btnStyle}
        >
          Top
        </Button>
        <Button
          onClick={() => setOpenBottom(true)}
          style={btnStyle}
        >
          Bottom
        </Button>

        <Drawer
          open={openLeft}
          onOpenChange={setOpenLeft}
          anchor="left"
          title="Left Drawer"
        >
          Left Content
        </Drawer>

        <Drawer
          open={openRight}
          onOpenChange={setOpenRight}
          anchor="right"
          title="Right Drawer"
        >
          Right Content
        </Drawer>

        <Drawer
          open={openTop}
          onOpenChange={setOpenTop}
          anchor="top"
          title="Top Drawer"
        >
          Top Content
        </Drawer>

        <Drawer
          open={openBottom}
          onOpenChange={setOpenBottom}
          anchor="bottom"
          title="Bottom Drawer"
        >
          Bottom Content
        </Drawer>
      </div>
    )
  },
}
