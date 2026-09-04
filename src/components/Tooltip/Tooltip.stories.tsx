import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { HelpCircle } from 'lucide-react'

import { FixedSurface } from '../../../.storybook/decorators'
import { Tooltip } from './Tooltip'

const demoPadding = {
  paddingTop: 'calc(var(--memori-spacing-5xl) * 2)',
} as const

const meta = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
      ],
    },
    disabled: { control: 'boolean' },
    arrow: { control: 'boolean' },
    open: { control: 'boolean' },
    visible: { control: 'boolean' },
    enterDelay: { control: { type: 'number', min: 0, step: 50 } },
    leaveDelay: { control: { type: 'number', min: 0, step: 50 } },
    sideOffset: { control: { type: 'number', min: 0, step: 1 } },
    disableHoverablePopup: { control: 'boolean' },
    onOpenChange: { action: 'openChange' },
  },
  parameters: {
    controls: { expanded: true },
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        ...demoPadding,
      }}
    >
      <Tooltip
        {...args}
        onOpenChange={fn()}
      />
    </div>
  ),
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Here is some tooltip content',
    children: <span>Hover or focus me</span>,
  },
}

export const WithIconTrigger: Story = {
  args: {
    title: 'Saved to your library',
    children: (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--memori-spacing-xs)',
        }}
      >
        <HelpCircle
          aria-hidden
          size={18}
          strokeWidth={2}
        />
        Label
      </span>
    ),
  },
}

export const WithJSXContent: Story = {
  args: {
    title: (
      <span>
        JSX content with a{' '}
        <a
          href="https://memori.ai"
          rel="noopener noreferrer"
          target="_blank"
        >
          link
        </a>
        .
      </span>
    ),
    children: <span>Hover me</span>,
  },
}

export const Disabled: Story = {
  args: {
    title: 'Tooltip is disabled',
    children: <span>Hover me</span>,
    disabled: true,
  },
}

export const OpenControlled: Story = {
  args: {
    title: 'Opened via the `open` prop (try toggling in Controls)',
    children: <span>Anchor</span>,
    open: true,
  },
}

export const VisibleLegacy: Story = {
  name: 'Visible (legacy prop)',
  args: {
    title: 'Uses deprecated `visible` → maps to `open`',
    children: <span>Anchor</span>,
    visible: true,
  },
}

export const AlignLeft: Story = {
  args: {
    title: 'Placement left',
    children: <span>Hover me</span>,
    placement: 'left',
    open: true,
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        ...demoPadding,
      }}
    >
      <Tooltip
        {...args}
        onOpenChange={fn()}
      />
    </div>
  ),
}

export const AlignRight: Story = {
  args: {
    title: 'Placement right (default)',
    children: <span>Hover me</span>,
    placement: 'right',
    open: true,
  },
}

export const AlignTopStart: Story = {
  args: {
    title: 'top-start',
    children: <span>Hover me</span>,
    placement: 'top-start',
    open: true,
  },
  render: args => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        ...demoPadding,
      }}
    >
      <Tooltip
        {...args}
        onOpenChange={fn()}
      />
    </div>
  ),
}

export const AlignTopEnd: Story = {
  args: {
    title: 'top-end',
    children: <span>Hover me</span>,
    placement: 'top-end',
    open: true,
  },
}

export const WithoutArrow: Story = {
  args: {
    title: 'Arrow hidden',
    children: <span>Hover me</span>,
    arrow: false,
    open: true,
  },
}

export const CustomDelays: Story = {
  args: {
    title: 'enterDelay 200ms · leaveDelay 150ms',
    children: <span>Hover me</span>,
    enterDelay: 200,
    leaveDelay: 150,
  },
}

export const InFixedSurface: Story = {
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Clipped tooltip — check wrap and collision inside the surface',
    children: <span tabIndex={0}>Focus or hover me</span>,
    enterDelay: 0,
    leaveDelay: 0,
  },
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <FixedSurface>
        {surface => (
          <Tooltip
            open={open}
            onOpenChange={setOpen}
            container={surface}
            title="Clipped tooltip — check wrap and collision inside the surface"
            enterDelay={0}
            leaveDelay={0}
          >
            <span tabIndex={0}>Focus or hover me</span>
          </Tooltip>
        )}
      </FixedSurface>
    )
  },
}

export const OpenInteraction: Story = {
  args: {
    title: 'Interactive tooltip',
    children: <span tabIndex={0}>Focus me</span>,
    enterDelay: 0,
    leaveDelay: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.ownerDocument.body)
    const trigger = canvas.getByText('Focus me')
    trigger.focus()
    await userEvent.hover(trigger)
    await expect(
      await body.findByText('Interactive tooltip'),
    ).toBeInTheDocument()
  },
}
