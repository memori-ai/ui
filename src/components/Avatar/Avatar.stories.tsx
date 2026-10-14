import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bot } from 'lucide-react'
import { Avatar } from './Avatar'

const sampleSrc =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' fill='teal'/><circle cx='32' cy='26' r='12' fill='white'/><rect x='14' y='42' width='36' height='22' rx='11' fill='white'/></svg>"

const meta = {
  title: 'Contenuto/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text', description: 'Image URL' },
    alt: { control: 'text', description: 'Alternative text' },
    initials: {
      control: 'text',
      description: 'Fallback initials when the image is missing or fails',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 56],
      description: 'Preset size or pixel value',
      table: { defaultValue: { summary: 'md' } },
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Avatar shape',
      table: { defaultValue: { summary: 'circle' } },
    },
    icon: { control: false },
    className: { control: 'text' },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'User or entity picture built on @base-ui Avatar. Falls back to initials, then to an icon, while the image loads or when it fails.',
      },
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: sampleSrc,
    alt: 'Ada Lovelace',
    initials: 'AL',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {(['circle', 'square'] as const).map(shape => (
        <div
          key={shape}
          style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
        >
          {(['sm', 'md', 'lg', 56] as const).map(size => (
            <Avatar
              key={String(size)}
              size={size}
              shape={shape}
              initials="AL"
              alt="Ada Lovelace"
            />
          ))}
        </div>
      ))}
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Avatar
        src={sampleSrc}
        alt="Image"
      />
      <Avatar
        src="/missing-avatar.png"
        alt="Broken image falls back to initials"
        initials="BI"
      />
      <Avatar
        initials="MR"
        alt="Mario Rossi"
      />
      <Avatar alt="Default icon" />
      <Avatar
        icon={<Bot />}
        alt="Custom icon"
      />
    </div>
  ),
}
