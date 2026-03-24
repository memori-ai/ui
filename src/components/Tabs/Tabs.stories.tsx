import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FileText, LayoutGrid, Settings } from 'lucide-react'
import { Tabs } from './Tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs.Root,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Tabbed interface built on `@base-ui/react/tabs`. Follows the WAI-ARIA tabs pattern (WCAG 2.1 AA+): `tablist`, `tab`, and `tabpanel` roles, roving focus, and arrow-key navigation. Controlled state uses `value` and `onValueChange` (same idea as MUI `value` / `onChange`). `Tabs.List` defaults `activateOnFocus` to `true` so arrow keys move selection; set `activateOnFocus={false}` to match Base UI’s default (activate with Enter/Space only). Motion uses design tokens; tab hover/active uses subtle scale feedback and visible panels fade/slide in, while `prefers-reduced-motion` disables decorative animation.',
      },
    },
  },
} satisfies Meta<typeof Tabs.Root>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue="account">
      <Tabs.List aria-label="Account settings">
        <Tabs.Tab value="account">Account</Tabs.Tab>
        <Tabs.Tab value="password">Password</Tabs.Tab>
        <Tabs.Tab value="notifications">Notifications</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel
        value="account"
        keepMounted
      >
        <p>Manage your account details and email preferences.</p>
      </Tabs.Panel>
      <Tabs.Panel
        value="password"
        keepMounted
      >
        <p>Change your password and security options.</p>
      </Tabs.Panel>
      <Tabs.Panel
        value="notifications"
        keepMounted
      >
        <p>Choose how you receive updates.</p>
      </Tabs.Panel>
    </Tabs.Root>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs.Root
      defaultValue="general"
      orientation="vertical"
    >
      <Tabs.List aria-label="Settings sections">
        <Tabs.Tab value="general">General</Tabs.Tab>
        <Tabs.Tab value="privacy">Privacy</Tabs.Tab>
        <Tabs.Tab value="billing">Billing</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel
        value="general"
        keepMounted
      >
        <p>General application settings.</p>
      </Tabs.Panel>
      <Tabs.Panel
        value="privacy"
        keepMounted
      >
        <p>Privacy and data controls.</p>
      </Tabs.Panel>
      <Tabs.Panel
        value="billing"
        keepMounted
      >
        <p>Billing history and payment methods.</p>
      </Tabs.Panel>
    </Tabs.Root>
  ),
}

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs.Root defaultValue="one">
      <Tabs.List aria-label="Example with disabled tab">
        <Tabs.Tab value="one">Enabled</Tabs.Tab>
        <Tabs.Tab
          value="two"
          disabled
        >
          Disabled
        </Tabs.Tab>
        <Tabs.Tab value="three">Also enabled</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel
        value="one"
        keepMounted
      >
        <p>First panel.</p>
      </Tabs.Panel>
      <Tabs.Panel
        value="two"
        keepMounted
      >
        <p>Second panel (not reachable when middle tab is disabled).</p>
      </Tabs.Panel>
      <Tabs.Panel
        value="three"
        keepMounted
      >
        <p>Third panel.</p>
      </Tabs.Panel>
    </Tabs.Root>
  ),
}

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = React.useState<string | number>('alpha')
    return (
      <div>
        <Tabs.Root
          value={value}
          onValueChange={setValue}
        >
          <Tabs.List aria-label="Controlled tabs">
            <Tabs.Tab value="alpha">Alpha</Tabs.Tab>
            <Tabs.Tab value="beta">Beta</Tabs.Tab>
            <Tabs.Indicator />
          </Tabs.List>
          <Tabs.Panel
            value="alpha"
            keepMounted
          >
            <p>Alpha content. Current value: {String(value)}</p>
          </Tabs.Panel>
          <Tabs.Panel
            value="beta"
            keepMounted
          >
            <p>Beta content.</p>
          </Tabs.Panel>
        </Tabs.Root>
      </div>
    )
  },
}

export const WithIcons: Story = {
  render: () => (
    <Tabs.Root defaultValue="overview">
      <Tabs.List aria-label="Project areas">
        <Tabs.Tab value="overview">
          <span className="memori-tabs__tab-inner">
            <LayoutGrid
              aria-hidden="true"
              size={16}
              strokeWidth={2}
            />
            <span>Overview</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="documents">
          <span className="memori-tabs__tab-inner">
            <FileText
              aria-hidden="true"
              size={16}
              strokeWidth={2}
            />
            <span>Documents</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="settings">
          <span className="memori-tabs__tab-inner">
            <Settings
              aria-hidden="true"
              size={16}
              strokeWidth={2}
            />
            <span>Settings</span>
          </span>
        </Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel
        value="overview"
        keepMounted
      >
        <p>Project overview.</p>
      </Tabs.Panel>
      <Tabs.Panel
        value="documents"
        keepMounted
      >
        <p>Documents list.</p>
      </Tabs.Panel>
      <Tabs.Panel
        value="settings"
        keepMounted
      >
        <p>Settings for this project.</p>
      </Tabs.Panel>
    </Tabs.Root>
  ),
}

export const LongLabels: Story = {
  render: () => (
    <div style={{ maxWidth: 'calc(10 * var(--memori-spacing-md))' }}>
      <Tabs.Root defaultValue="short">
        <Tabs.List aria-label="Tabs with long labels">
          <Tabs.Tab value="short">Short</Tabs.Tab>
          <Tabs.Tab
            value="long"
            title="Very long label that should truncate in narrow layouts"
          >
            <span className="memori-tabs__tab-label">
              Very long label that should truncate in narrow layouts
            </span>
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel
          value="short"
          keepMounted
        >
          <p>Narrow container tests truncation on the tab list.</p>
        </Tabs.Panel>
        <Tabs.Panel
          value="long"
          keepMounted
        >
          <p>Long label tab panel.</p>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  ),
}
