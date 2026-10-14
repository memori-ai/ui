import React from 'react'
import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Badge from './Badge'

it('renders Badge unchanged', () => {
  const { container } = render(
    <Badge count={5}>
      <span>Inbox</span>
    </Badge>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Badge status unchanged', () => {
  const { container } = render(
    <Badge
      status="success"
      text="Online"
    />,
  )
  expect(container).toMatchSnapshot()
})

it('renders the count', () => {
  const { container } = render(<Badge count={5} />)
  expect(container.querySelector('.memori-badge__count')).toHaveTextContent('5')
})

it('caps the count at max (default 99)', () => {
  const { container, rerender } = render(<Badge count={120} />)
  expect(container.querySelector('.memori-badge__count')).toHaveTextContent(
    '99+',
  )
  rerender(
    <Badge
      count={12}
      max={9}
    />,
  )
  expect(container.querySelector('.memori-badge__count')).toHaveTextContent(
    '9+',
  )
  rerender(<Badge count={99} />)
  expect(container.querySelector('.memori-badge__count')).toHaveTextContent(
    /^99$/,
  )
})

it('hides a zero count unless showZero is set', () => {
  const { container, rerender } = render(<Badge count={0} />)
  expect(container.querySelector('.memori-badge__count')).toBeNull()
  rerender(
    <Badge
      count={0}
      showZero
    />,
  )
  expect(container.querySelector('.memori-badge__count')).toHaveTextContent('0')
})

it('renders a dot instead of the count', () => {
  const { container } = render(
    <Badge
      dot
      count={5}
    />,
  )
  expect(container.querySelector('.memori-badge__dot')).toBeInTheDocument()
  expect(container.querySelector('.memori-badge__count')).toBeNull()
})

it('anchors the indicator on children', () => {
  const { container } = render(
    <Badge count={3}>
      <span>Inbox</span>
    </Badge>,
  )
  const root = container.firstChild as HTMLElement
  expect(root).toHaveClass('memori-badge--anchored')
  expect(screen.getByText('Inbox')).toBeInTheDocument()
})

it('renders standalone without children', () => {
  const { container } = render(<Badge count={3} />)
  expect(container.firstChild).toHaveClass('memori-badge--standalone')
})

it('renders status dot with text and status class', () => {
  const { container } = render(
    <Badge
      status="processing"
      text="Syncing"
    />,
  )
  expect(container.firstChild).toHaveClass(
    'memori-badge--status',
    'memori-badge--status-processing',
  )
  expect(screen.getByText('Syncing')).toBeInTheDocument()
  expect(container.querySelector('.memori-badge__status-dot')).toHaveAttribute(
    'aria-hidden',
    'true',
  )
})

it('exposes aria-label on the indicator', () => {
  render(
    <Badge
      dot
      aria-label="New messages"
    >
      <span>Inbox</span>
    </Badge>,
  )
  expect(screen.getByRole('img', { name: 'New messages' })).toHaveClass(
    'memori-badge__dot',
  )
})

it('forwards className, style and ref to the root', () => {
  const ref = React.createRef<HTMLSpanElement>()
  const { container } = render(
    <Badge
      ref={ref}
      count={1}
      className="custom"
      style={{ marginTop: 4 }}
    />,
  )
  const root = container.firstChild as HTMLElement
  expect(ref.current).toBe(root)
  expect(root).toHaveClass('memori-badge', 'custom')
  expect(root).toHaveStyle({ marginTop: '4px' })
})
