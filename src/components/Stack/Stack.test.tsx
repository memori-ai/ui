import React from 'react'
import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Stack from './Stack'

it('renders Stack unchanged', () => {
  const { container } = render(
    <Stack>
      <span>One</span>
      <span>Two</span>
    </Stack>,
  )
  expect(container).toMatchSnapshot()
})

it('defaults to a column with md gap on a div', () => {
  render(<Stack data-testid="stack" />)
  const el = screen.getByTestId('stack')
  expect(el.tagName).toBe('DIV')
  expect(el).toHaveClass(
    'memori-stack',
    'memori-stack--column',
    'memori-stack--gap-md',
  )
  expect(el).not.toHaveClass('memori-stack--wrap')
})

it('applies direction, gap, align, justify and wrap modifiers', () => {
  render(
    <Stack
      data-testid="stack"
      direction="row"
      gap="xl"
      align="baseline"
      justify="between"
      wrap
    />,
  )
  expect(screen.getByTestId('stack')).toHaveClass(
    'memori-stack--row',
    'memori-stack--gap-xl',
    'memori-stack--align-baseline',
    'memori-stack--justify-between',
    'memori-stack--wrap',
  )
})

it('supports gap none', () => {
  render(
    <Stack
      data-testid="stack"
      gap="none"
    />,
  )
  expect(screen.getByTestId('stack')).toHaveClass('memori-stack--gap-none')
})

it('does not set gap as inline style', () => {
  render(
    <Stack
      data-testid="stack"
      gap="lg"
    />,
  )
  expect(screen.getByTestId('stack').style.gap).toBe('')
})

it('renders the element passed via as', () => {
  render(
    <Stack
      as="ul"
      data-testid="stack"
    >
      <li>Item</li>
    </Stack>,
  )
  expect(screen.getByTestId('stack').tagName).toBe('UL')
})

it('forwards ref, className, style and HTML attributes', () => {
  const ref = React.createRef<HTMLElement>()
  render(
    <Stack
      ref={ref}
      className="custom"
      style={{ maxWidth: '10px' }}
      aria-label="Toolbar"
      data-testid="stack"
    />,
  )
  const el = screen.getByTestId('stack')
  expect(ref.current).toBe(el)
  expect(el).toHaveClass('custom')
  expect(el.style.maxWidth).toBe('10px')
  expect(el).toHaveAttribute('aria-label', 'Toolbar')
})
