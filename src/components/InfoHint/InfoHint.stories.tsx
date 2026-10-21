import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from 'storybook/test'
import { InfoHint } from './InfoHint'

const meta = {
  title: 'Overlay/InfoHint',
  component: InfoHint,
  tags: ['autodocs'],
  args: {
    content: 'Numero di volte che è stata posta questa domanda',
    ariaLabel: 'Informazioni su Occorrenze',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      table: { defaultValue: { summary: 'top' } },
    },
    size: { control: 'number' },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Small focusable "i" next to a label or column header. Explains it in a tooltip on hover or focus. Give it a specific `ariaLabel`.',
      },
    },
  },
} satisfies Meta<typeof InfoHint>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      Occorrenze
      <InfoHint {...args} />
    </span>
  ),
}

export const OpenOnFocus: Story = {
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.tab()
    await expect(
      canvas.getByRole('button', { name: 'Informazioni su Occorrenze' }),
    ).toHaveFocus()
    await userEvent.keyboard('{Escape}')
  },
}
