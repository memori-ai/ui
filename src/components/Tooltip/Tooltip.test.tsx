import React from 'react'
import { it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Tooltip from './Tooltip'

it('renders Tooltip unchanged', () => {
  const { container } = render(
    <Tooltip content="Here is some tooltip content">Hover me</Tooltip>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Tooltip with jsx content unchanged', () => {
  const { container } = render(
    <Tooltip
      content={
        <p>
          Here we have some JSX, useful for
          <a
            href="https://memori.ai"
            rel="noopener noreferrer"
            target="_blank"
          >
            links
          </a>
          , for example.
        </p>
      }
    >
      Hover me
    </Tooltip>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Tooltip disabled unchanged', () => {
  const { container } = render(
    <Tooltip
      content="Here is some tooltip content but I am disabled"
      disabled
    >
      Hover me
    </Tooltip>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Tooltip visible unchanged', () => {
  const { container } = render(
    <Tooltip
      content="Here is some tooltip content by default as I am controlled"
      visible
    >
      Hover me
    </Tooltip>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Tooltip aligned left unchanged', () => {
  const { container } = render(
    <Tooltip
      content="Here is some tooltip content by default as I am controlled"
      visible
      align="left"
    >
      Hover me
    </Tooltip>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Tooltip aligned top left unchanged', () => {
  const { container } = render(
    <Tooltip
      content="Here is some tooltip content by default as I am controlled"
      visible
      align="topLeft"
    >
      Hover me
    </Tooltip>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Tooltip aligned right unchanged', () => {
  const { container } = render(
    <Tooltip
      content="Here is some tooltip content by default as I am controlled"
      visible
      align="right"
    >
      Hover me
    </Tooltip>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Tooltip aligned top right unchanged', () => {
  const { container } = render(
    <Tooltip
      content="Here is some tooltip content by default as I am controlled"
      visible
      align="topRight"
    >
      Hover me
    </Tooltip>,
  )
  expect(container).toMatchSnapshot()
})

it('defaults to top placement when open', () => {
  render(
    <Tooltip
      content="Default placement"
      open
    >
      Hover me
    </Tooltip>,
  )
  const positioner = document.querySelector('.memori-tooltip__positioner')
  expect(positioner).not.toBeNull()
  expect(positioner).toHaveAttribute('data-side', 'top')
})

it('respects an explicit placement', () => {
  render(
    <Tooltip
      content="Bottom placement"
      open
      placement="bottom"
    >
      Hover me
    </Tooltip>,
  )
  const positioner = document.querySelector('.memori-tooltip__positioner')
  expect(positioner).not.toBeNull()
  expect(positioner).toHaveAttribute('data-side', 'bottom')
})

it('openOnPress toggles the tooltip on click without manual hook wiring', () => {
  render(
    <Tooltip
      content="Tap or click to toggle"
      openOnPress
    >
      <button type="button">Press me</button>
    </Tooltip>,
  )

  expect(screen.queryByText('Tap or click to toggle')).not.toBeInTheDocument()

  fireEvent.click(screen.getByRole('button', { name: 'Press me' }))
  expect(screen.getByText('Tap or click to toggle')).toBeInTheDocument()

  fireEvent.click(screen.getByRole('button', { name: 'Press me' }))
  expect(screen.queryByText('Tap or click to toggle')).not.toBeInTheDocument()
})
