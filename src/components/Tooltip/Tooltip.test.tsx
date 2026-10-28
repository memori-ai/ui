import React from 'react'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { it, expect, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import Button from '../Button/Button'
import Tooltip from './Tooltip'

const styles = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'styles.css'),
  'utf8',
)

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

it('lets a disabled control pass hover to the tooltip trigger', () => {
  // Prettier wraps long selectors, so match the rule text with whitespace collapsed.
  const css = styles.replace(/\s+/g, ' ')
  expect(css).toContain(
    ".memori-tooltip__trigger:has(:disabled, [aria-disabled='true'], .memori-button--disabled)",
  )
  expect(css).toContain('cursor: not-allowed')
  expect(css).toContain(
    ".memori-tooltip__trigger :is(:disabled, [aria-disabled='true'], .memori-button--disabled)",
  )
  expect(css).toContain('pointer-events: none')
  expect(css).toContain(
    ".memori-tooltip__trigger :is(button, input, select):is(:disabled, [aria-disabled='true'], .memori-button--disabled)",
  )
  expect(css).toContain('display: inline-flex')

  render(
    <Tooltip
      content="Save is unavailable"
      enterDelay={0}
    >
      <button
        type="button"
        disabled
      >
        Save
      </button>
    </Tooltip>,
  )

  const button = screen.getByRole('button', { name: 'Save' })
  expect(button).toBeDisabled()

  const trigger = button.parentElement
  expect(trigger).toHaveClass('memori-tooltip__trigger')
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

function touchTap(element: Element) {
  fireEvent.pointerDown(element, { pointerType: 'touch' })
  fireEvent.pointerUp(element, { pointerType: 'touch' })
  fireEvent.click(element)
}

function triggerOf(text: string) {
  const trigger = screen.getByText(text).closest('.memori-tooltip__trigger')
  if (!trigger) {
    throw new Error(`No tooltip trigger around "${text}"`)
  }
  return trigger
}

it('does not leave the tooltip open after a mouse click', () => {
  render(
    <Tooltip content="Edit this row">
      <button type="button">Edit</button>
    </Tooltip>,
  )

  const button = screen.getByRole('button', { name: 'Edit' })
  fireEvent.pointerDown(button, { pointerType: 'mouse' })
  fireEvent.click(button)
  expect(screen.queryByText('Edit this row')).not.toBeInTheDocument()
})

it('opens on a touch tap over a disabled control and closes on an outside tap', () => {
  render(
    <>
      <Tooltip content="Configure the provider first">
        <button
          type="button"
          disabled
        >
          Create MCP
        </button>
      </Tooltip>
      <p>Elsewhere</p>
    </>,
  )

  touchTap(triggerOf('Create MCP'))
  expect(screen.getByText('Configure the provider first')).toBeInTheDocument()

  fireEvent.pointerDown(screen.getByText('Elsewhere'), { pointerType: 'touch' })
  fireEvent.mouseDown(screen.getByText('Elsewhere'))
  fireEvent.click(screen.getByText('Elsewhere'))
  expect(
    screen.queryByText('Configure the provider first'),
  ).not.toBeInTheDocument()
})

it('opens on a touch tap over non-interactive content and toggles on a second tap', () => {
  render(
    <Tooltip content="Connected">
      <span>●</span>
    </Tooltip>,
  )

  touchTap(triggerOf('●'))
  expect(screen.getByText('Connected')).toBeInTheDocument()

  touchTap(triggerOf('●'))
  expect(screen.queryByText('Connected')).not.toBeInTheDocument()
})

it('runs the action and keeps the tooltip closed on a touch tap over an enabled control by default', () => {
  const onClick = vi.fn()
  render(
    <Tooltip content="Delete this row">
      <button
        type="button"
        onClick={onClick}
      >
        Delete
      </button>
    </Tooltip>,
  )

  touchTap(screen.getByRole('button', { name: 'Delete' }))
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(screen.queryByText('Delete this row')).not.toBeInTheDocument()
})

it('touchBehavior="tap" runs the action and then opens the tooltip', () => {
  const onClick = vi.fn()
  const onParentClick = vi.fn()
  render(
    <div onClick={onParentClick}>
      <Tooltip
        content="Delete this row"
        touchBehavior="tap"
      >
        <button
          type="button"
          onClick={onClick}
        >
          Delete
        </button>
      </Tooltip>
    </div>,
  )

  touchTap(screen.getByRole('button', { name: 'Delete' }))
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onParentClick).toHaveBeenCalledTimes(1)
  expect(screen.getByText('Delete this row')).toBeInTheDocument()
})

it('touchBehavior="longPress" opens on hold and not on a short tap', () => {
  vi.useFakeTimers()
  try {
    render(
      <Tooltip
        content="Delete this row"
        touchBehavior="longPress"
      >
        <button type="button">Delete</button>
      </Tooltip>,
    )
    const button = screen.getByRole('button', { name: 'Delete' })

    touchTap(button)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.queryByText('Delete this row')).not.toBeInTheDocument()

    fireEvent.pointerDown(button, { pointerType: 'touch' })
    act(() => {
      vi.advanceTimersByTime(600)
    })
    fireEvent.pointerUp(button, { pointerType: 'touch' })
    fireEvent.click(button)
    expect(screen.getByText('Delete this row')).toBeInTheDocument()
  } finally {
    vi.useRealTimers()
  }
})

it('touchBehavior="none" never opens on touch', () => {
  render(
    <Tooltip
      content="Configure the provider first"
      touchBehavior="none"
    >
      <button
        type="button"
        disabled
      >
        Create MCP
      </button>
    </Tooltip>,
  )

  touchTap(triggerOf('Create MCP'))
  expect(
    screen.queryByText('Configure the provider first'),
  ).not.toBeInTheDocument()
})

it('opens on keyboard focus over an aria-disabled control', () => {
  const onClick = vi.fn()
  render(
    <Tooltip content="Configure the provider first">
      <Button
        disabled
        focusableWhenDisabled
        onClick={onClick}
      >
        Create MCP
      </Button>
    </Tooltip>,
  )

  const button = screen.getByRole('button', { name: 'Create MCP' })
  expect(button).toHaveAttribute('aria-disabled', 'true')
  expect(button).not.toBeDisabled()

  fireEvent.keyDown(document.body, { key: 'Tab' })
  act(() => {
    button.focus()
  })
  expect(screen.getByText('Configure the provider first')).toBeInTheDocument()

  fireEvent.click(button)
  expect(onClick).not.toHaveBeenCalled()
})
