import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { DashboardShell } from './DashboardShell'

const meta = {
  title: 'Real Examples/Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'App',
  render: () => <DashboardShell />,
}
