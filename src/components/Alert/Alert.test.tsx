import React from 'react'
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import Alert from './Alert'

beforeEach(() => {
  // Mock setTimeout/clearTimeout
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('Alert Component', () => {
  it('renders Alert unchanged', () => {
    const { container } = render(
      <Alert
        open={false}
        onClose={vi.fn()}
        title="Test Alert"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders Alert open unchanged', () => {
    const { container } = render(
      <Alert
        open={true}
        onClose={vi.fn()}
        title="Test Alert"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn()
    const { container } = render(
      <Alert
        open={true}
        closable={true}
        onClose={onClose}
        title="Test Alert"
      />,
    )

    const closeButton = container.querySelector(
      '[aria-label="close"]',
    ) as HTMLElement
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalled()
  })

  it('auto-dismisses after duration', () => {
    const onClose = vi.fn()
    render(
      <Alert
        open={true}
        onClose={onClose}
        title="Test Alert"
        duration={3000}
      />,
    )

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(onClose).toHaveBeenCalled()
  })

  it('renders with custom width', () => {
    const { container } = render(
      <Alert
        open={true}
        onClose={vi.fn()}
        title="Test Alert"
        width="500px"
      />,
    )

    const style = window.getComputedStyle(container.firstChild as Element)
    expect(style.getPropertyValue('--memori-alert-width')).toBe('500px')
  })

  it('renders with action button', () => {
    const actionClick = vi.fn()
    render(
      <Alert
        open={true}
        onClose={vi.fn()}
        title="Test Alert"
        action={<button onClick={actionClick}>Action</button>}
      />,
    )

    const actionButton = screen.getByText('Action')
    fireEvent.click(actionButton)
    expect(actionClick).toHaveBeenCalled()
  })

  it('cleans up timer on unmount', () => {
    const onClose = vi.fn()
    const { unmount } = render(
      <Alert
        open={true}
        onClose={onClose}
        title="Test Alert"
        duration={3000}
      />,
    )

    unmount()
    act(() => {
      setTimeout(() => {
        expect(onClose).not.toHaveBeenCalled()
      }, 3000)
    })
  })
})
