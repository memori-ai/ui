import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import './Details.css'

const meta = {
  title: 'UI/Details',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<HTMLDetailsElement>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <details className="memori--details">
      <summary>Details</summary>
      <p>Details content</p>
    </details>
  ),
}

export const Open: Story = {
  render: () => (
    <details
      className="memori--details"
      open
    >
      <summary>Details</summary>
      <p>Details content</p>
    </details>
  ),
}

export const WithChildren: Story = {
  render: () => (
    <details className="memori--details">
      <summary>Details</summary>
      <p>Details content 1</p>
      <p>Details content 2</p>
    </details>
  ),
}

export const WithComplexHTMLContent: Story = {
  render: () => (
    <details className="memori--details">
      <summary>Details</summary>
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
    </details>
  ),
}
