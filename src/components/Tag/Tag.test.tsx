import React from 'react'
import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Star } from 'lucide-react'
import Tag from './Tag'
import { MemoriI18nProvider } from '../../i18n/MemoriI18nProvider'

it('renders Tag unchanged', () => {
  const { container } = render(<Tag>Label</Tag>)
  expect(container).toMatchSnapshot()
})

it('renders Tag closable with icon unchanged', () => {
  const { container } = render(
    <Tag
      color="success"
      icon={<Star />}
      closable
      closeLabel="Remove label"
    >
      Label
    </Tag>,
  )
  expect(container).toMatchSnapshot()
})

it('applies color and size classes', () => {
  const { container } = render(
    <Tag
      color="error"
      size="sm"
    >
      Label
    </Tag>,
  )
  const root = container.firstChild as HTMLElement
  expect(root).toHaveClass('memori-tag', 'memori-tag--error', 'memori-tag--sm')
})

it('defaults to default color and md size', () => {
  const { container } = render(<Tag>Label</Tag>)
  const root = container.firstChild as HTMLElement
  expect(root).toHaveClass('memori-tag--default', 'memori-tag--md')
})

it('forwards className and style to the root', () => {
  const { container } = render(
    <Tag
      className="custom"
      style={{ marginTop: 4 }}
    >
      Label
    </Tag>,
  )
  const root = container.firstChild as HTMLElement
  expect(root).toHaveClass('custom')
  expect(root).toHaveStyle({ marginTop: '4px' })
})

it('forwards ref to the root span', () => {
  const ref = React.createRef<HTMLSpanElement>()
  render(<Tag ref={ref}>Label</Tag>)
  expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  expect(ref.current).toHaveClass('memori-tag')
})

it('renders the icon hidden from assistive tech', () => {
  const { container } = render(
    <Tag icon={<Star data-testid="icon" />}>Label</Tag>,
  )
  expect(screen.getByTestId('icon')).toBeInTheDocument()
  expect(container.querySelector('.memori-tag__icon')).toHaveAttribute(
    'aria-hidden',
    'true',
  )
})

it('does not render a close button unless closable', () => {
  render(<Tag>Label</Tag>)
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
})

it('calls onClose when the close button is clicked', () => {
  const onClose = vi.fn()
  render(
    <Tag
      closable
      closeLabel="Remove label"
      onClose={onClose}
    >
      Label
    </Tag>,
  )
  const button = screen.getByRole('button', { name: 'Remove label' })
  expect(button).toHaveAttribute('type', 'button')
  fireEvent.click(button)
  expect(onClose).toHaveBeenCalledTimes(1)
})

it('uses the translated remove label when closeLabel is omitted', () => {
  render(
    <MemoriI18nProvider>
      <Tag closable>React</Tag>
    </MemoriI18nProvider>,
  )
  expect(
    screen.getByRole('button', { name: 'Remove React' }),
  ).toBeInTheDocument()
})

it('falls back to the bare translated verb for non-text children', () => {
  render(
    <MemoriI18nProvider>
      <Tag closable>
        <strong>React</strong>
      </Tag>
    </MemoriI18nProvider>,
  )
  expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument()
})
