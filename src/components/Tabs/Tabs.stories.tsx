import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  AppWindow,
  ArrowDownCircle,
  CalendarDays,
  Clapperboard,
  FileText,
  LayoutGrid,
  Music2,
  Settings,
  UserRound,
} from 'lucide-react'
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
          'Built on `@base-ui/react/tabs`. Set **`variant`** on `Tabs.Root`: `segmented` (muted track + sliding white pill) or `underline` (baseline rule + thick marker). WAI-ARIA tabs (WCAG 2.1 AA+), roving focus, arrow keys. Controlled API: `value` / `onValueChange`. `Tabs.List` defaults `activateOnFocus` to `true`. `prefers-reduced-motion` disables non-essential animation.',
      },
    },
  },
} satisfies Meta<typeof Tabs.Root>

export default meta

type Story = StoryObj<typeof meta>

export const Underline: Story = {
  render: () => (
    <div
      style={{
        maxWidth: 'var(--memori-modal-size-md)',
        padding: 'var(--memori-spacing-md)',
        borderRadius: 'var(--memori-radius-box)',
        backgroundColor: 'var(--memori-secondary-background)',
        boxShadow: 'var(--memori-shadow-sm)',
      }}
    >
      <Tabs.Root
        variant="underline"
        defaultValue="assignee"
      >
        <Tabs.List aria-label="Project views">
          <Tabs.Tab value="status">
            <span className="memori-tabs__tab-inner">
              <ArrowDownCircle
                aria-hidden="true"
                size={18}
                strokeWidth={2}
              />
              <span>By Status</span>
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="assignee">
            <span className="memori-tabs__tab-inner">
              <UserRound
                aria-hidden="true"
                size={18}
                strokeWidth={2}
              />
              <span>By Assignee</span>
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="projects">
            <span className="memori-tabs__tab-inner">
              <LayoutGrid
                aria-hidden="true"
                size={18}
                strokeWidth={2}
              />
              <span>All projects</span>
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="calendar">
            <span className="memori-tabs__tab-inner">
              <CalendarDays
                aria-hidden="true"
                size={18}
                strokeWidth={2}
              />
              <span>Calendar</span>
            </span>
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Panel
          value="status"
          keepMounted
        >
          <p>Filter by status.</p>
        </Tabs.Panel>
        <Tabs.Panel
          value="assignee"
          keepMounted
        >
          <p>Filter by assignee.</p>
        </Tabs.Panel>
        <Tabs.Panel
          value="projects"
          keepMounted
        >
          <p>All projects.</p>
        </Tabs.Panel>
        <Tabs.Panel
          value="calendar"
          keepMounted
        >
          <p>Calendar view.</p>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  ),
}

export const Segmented: Story = {
  render: () => (
    <Tabs.Root defaultValue="music">
      <Tabs.List aria-label="Media type">
        <Tabs.Tab value="music">
          <span className="memori-tabs__tab-inner">
            <Music2
              aria-hidden="true"
              size={18}
              strokeWidth={2}
            />
            <span>Music</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="movies">
          <span className="memori-tabs__tab-inner">
            <Clapperboard
              aria-hidden="true"
              size={18}
              strokeWidth={2}
            />
            <span>Movies</span>
          </span>
        </Tabs.Tab>
        <Tabs.Tab value="app">
          <span className="memori-tabs__tab-inner">
            <AppWindow
              aria-hidden="true"
              size={18}
              strokeWidth={2}
            />
            <span>App</span>
          </span>
        </Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel
        value="music"
        keepMounted
      >
        <p>Music library and playlists.</p>
      </Tabs.Panel>
      <Tabs.Panel
        value="movies"
        keepMounted
      >
        <p>Films and series.</p>
      </Tabs.Panel>
      <Tabs.Panel
        value="app"
        keepMounted
      >
        <p>Application settings and data.</p>
      </Tabs.Panel>
    </Tabs.Root>
  ),
}

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
