import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import './loading.css'
import './icons.stories.css'

interface Props {
  iconName: string
}

interface IconProps {
  className?: string
  title?: string
}

// Import all icons at module level
const iconContext = (require as any).context('./', false, /\.tsx$/)
const iconModules: { [key: string]: React.ComponentType<any> } = {}

iconContext.keys().forEach((key: string) => {
  const iconName = key.replace('./', '').replace('.tsx', '')
  if (!iconName.includes('stories')) {
    iconModules[iconName] = iconContext(key).default
  }
})

const IconShowcaseItem = ({ iconName, ...iconProps }: Props & IconProps) => {
  const Icon = iconModules[iconName]
  if (!Icon) return null
  return (
    <Icon
      {...iconProps}
      className="showcase-icon"
    />
  )
}

const IconsShowcase = (iconProps: IconProps) => {
  const iconNames = Object.keys(iconModules)
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridGap: '2rem',
      }}
    >
      <h1>Icons</h1>
      <h2>Internal svg icons</h2>
      {iconNames.map(iconName => (
        <div
          key={iconName}
          style={{
            textAlign: 'center',
          }}
        >
          <IconShowcaseItem
            iconName={iconName}
            {...iconProps}
          />
          <p>{iconName}</p>
        </div>
      ))}
      <h2>External icons</h2>
      <p>
        We use{' '}
        <a
          href="https://lucide.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucide
        </a>{' '}
        for additional icons.
      </p>
      <p>
        Refer to{' '}
        <a
          href="https://lucide.dev/guide/packages/lucide-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucide React
        </a>{' '}
        guide for more information on how to use them.
      </p>
    </div>
  )
}

const meta = {
  title: 'Definitions/Icons',
  component: IconsShowcase,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
  render: args => <IconsShowcase {...args} />,
} satisfies Meta<typeof IconsShowcase>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'showcase-icon',
    title: 'Icon',
  },
}
