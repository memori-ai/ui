import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './Stack'

const boxStyle: React.CSSProperties = {
  padding: 'var(--memori-spacing-sm) var(--memori-spacing-md)',
  borderRadius: 'var(--memori-radius-xs)',
  background: 'var(--memori-secondary-subtle)',
  color: 'var(--memori-text-color)',
  fontFamily: 'var(--memori-font-family)',
  fontSize: 'var(--memori-text-size-sm)',
}

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={boxStyle}>{children}</div>
)

const items = (
  <>
    <Box>One</Box>
    <Box>Two</Box>
    <Box>Three</Box>
  </>
)

const meta = {
  title: 'Contenuto/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
      description: 'Main axis of the stack',
      table: { defaultValue: { summary: 'column' } },
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Space between children (spacing tokens)',
      table: { defaultValue: { summary: 'md' } },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Cross-axis alignment (align-items)',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around'],
      description: 'Main-axis distribution (justify-content)',
    },
    wrap: {
      control: 'boolean',
      description: 'If true, children wrap onto multiple lines',
    },
    as: {
      control: 'text',
      description: 'Element rendered as the root node',
      table: { defaultValue: { summary: 'div' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name',
    },
  },
  args: {
    children: items,
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Flex layout primitive. Spacing comes from `--memori-spacing-*` tokens via `gap`; alignment and distribution are named, not raw CSS values.',
      },
    },
  },
} satisfies Meta<typeof Stack>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Vertical stack with the default `md` gap.
 */
export const Default: Story = {}

/**
 * Horizontal stack.
 */
export const Row: Story = {
  args: {
    direction: 'row',
  },
}

/**
 * Every gap token, in a row.
 */
export const AllVariants: Story = {
  render: () => (
    <Stack gap="lg">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(gap => (
        <Stack
          key={gap}
          direction="row"
          gap={gap}
          align="center"
        >
          <code style={{ minWidth: '3rem' }}>{gap}</code>
          {items}
        </Stack>
      ))}
    </Stack>
  ),
}

/**
 * `justify` values on a row.
 */
export const Justify: Story = {
  render: () => (
    <Stack gap="lg">
      {(['start', 'center', 'end', 'between', 'around'] as const).map(
        justify => (
          <Stack
            key={justify}
            direction="row"
            justify={justify}
            gap="sm"
          >
            {items}
          </Stack>
        ),
      )}
    </Stack>
  ),
}

/**
 * Wrapping row in a narrow container.
 */
export const Wrap: Story = {
  render: () => (
    <div style={{ maxWidth: '14rem' }}>
      <Stack
        direction="row"
        gap="sm"
        wrap
      >
        {items}
        {items}
      </Stack>
    </div>
  ),
}

/**
 * Rendered as a semantic element via `as`.
 */
export const AsElement: Story = {
  render: () => (
    <Stack
      as="ul"
      gap="xs"
      style={{ margin: 0, padding: 0, listStyle: 'none' }}
    >
      <li>
        <Box>One</Box>
      </li>
      <li>
        <Box>Two</Box>
      </li>
    </Stack>
  ),
}
