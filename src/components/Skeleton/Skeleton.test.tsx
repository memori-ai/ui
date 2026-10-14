import React from 'react'
import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Skeleton from './Skeleton'

const root = (container: HTMLElement) =>
  container.firstElementChild as HTMLElement

it('renders Skeleton unchanged', () => {
  const { container } = render(<Skeleton />)
  expect(container).toMatchSnapshot()
})

it('renders Skeleton rect unchanged', () => {
  const { container } = render(<Skeleton variant="rect" />)
  expect(container).toMatchSnapshot()
})

it('renders Skeleton circle unchanged', () => {
  const { container } = render(<Skeleton variant="circle" />)
  expect(container).toMatchSnapshot()
})

it('is aria-hidden', () => {
  const { container } = render(<Skeleton />)
  expect(root(container)).toHaveAttribute('aria-hidden', 'true')
})

it('defaults to a single text line', () => {
  const { container } = render(<Skeleton />)
  const el = root(container)
  expect(el).toHaveClass('memori-skeleton', 'memori-skeleton--text')
  expect(el.querySelectorAll('.memori-skeleton__line')).toHaveLength(1)
  expect(el.querySelector('.memori-skeleton__line--last')).toBeNull()
})

it('renders the requested number of lines with a shorter last line', () => {
  const { container } = render(<Skeleton lines={3} />)
  const lines = root(container).querySelectorAll('.memori-skeleton__line')
  expect(lines).toHaveLength(3)
  expect(lines[2]).toHaveClass('memori-skeleton__line--last')
  expect(lines[0]).not.toHaveClass('memori-skeleton__line--last')
})

it('clamps lines to at least 1', () => {
  const { container } = render(<Skeleton lines={0} />)
  expect(
    root(container).querySelectorAll('.memori-skeleton__line'),
  ).toHaveLength(1)
})

it('applies width to the text root and height to each line', () => {
  const { container } = render(
    <Skeleton
      lines={2}
      width={200}
      height="0.75rem"
    />,
  )
  const el = root(container)
  expect(el.style.width).toBe('200px')
  el.querySelectorAll<HTMLElement>('.memori-skeleton__line').forEach(line => {
    expect(line.style.height).toBe('0.75rem')
  })
})

it('applies width and height to rect', () => {
  const { container } = render(
    <Skeleton
      variant="rect"
      width="50%"
      height={80}
    />,
  )
  const el = root(container)
  expect(el).toHaveClass('memori-skeleton--rect', 'memori-skeleton__shape')
  expect(el.style.width).toBe('50%')
  expect(el.style.height).toBe('80px')
})

it('keeps circle square when only one dimension is set', () => {
  const { container } = render(
    <Skeleton
      variant="circle"
      width={32}
    />,
  )
  const el = root(container)
  expect(el).toHaveClass('memori-skeleton--circle')
  expect(el.style.width).toBe('32px')
  expect(el.style.height).toBe('32px')
})

it('forwards ref, className and style', () => {
  const ref = React.createRef<HTMLSpanElement>()
  const { container } = render(
    <Skeleton
      ref={ref}
      className="custom"
      style={{ marginTop: '4px' }}
    />,
  )
  const el = root(container)
  expect(ref.current).toBe(el)
  expect(el).toHaveClass('custom')
  expect(el.style.marginTop).toBe('4px')
})
