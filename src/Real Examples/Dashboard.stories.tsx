import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { DashboardShell } from './DashboardShell'

const meta = {
  title: 'Real Examples/Dashboard',
  parameters: {
    layout: 'fullscreen',
    // Demo composition; not held to component-level a11y gates.
    a11y: { test: 'off' },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'App',
  render: () => <DashboardShell />,
}

export const Example2: Story = {
  name: 'App - Example2',
  render: () => <DashboardShell chrome="gradient-sidebar" />,
}

/** Icon rail + area header with section links; “Prova” docks beside the page. */
export const Example3: Story = {
  name: 'App - Example3',
  render: () => (
    <DashboardShell
      chrome="gradient-header"
      layout="rail"
    />
  ),
}

/** Navigation in the header + agent subnav menus; “Prova” is a floating chat bubble. */
export const Example4: Story = {
  name: 'App - Example4',
  render: () => <DashboardShell layout="topnav" />,
}
