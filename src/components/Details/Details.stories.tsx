import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Details } from './Details'

const meta = {
  title: 'UI/Details',
  component: Details,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Details>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    summary: 'Details',
    children: <p>Details content</p>,
  },
}

export const Open: Story = {
  args: {
    summary: 'Details',
    children: <p>Details content</p>,
    open: true,
  },
}

export const WithChildren: Story = {
  args: {
    summary: 'Details',
    children: (
      <>
        <p>Details content 1</p>
        <p>Details content 2</p>
      </>
    ),
  },
}

export const WithComplexHTMLContent: Story = {
  args: {
    summary: 'Details',
    children: (
      <>
        <p>Details content</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <p>Details content</p>
        <figure>
          <img
            src="https://www.aisuru.com/images/aisuru/og-image.png"
            alt="Placeholder"
          />
          <figcaption>Placeholder image</figcaption>
        </figure>
      </>
    ),
  },
}
