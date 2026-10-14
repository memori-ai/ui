import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Progress from './Progress'

describe('Progress', () => {
  it('renders Progress unchanged', () => {
    const { container } = render(
      <Progress
        value={42}
        aria-label="Upload"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders Progress circle unchanged', () => {
    const { container } = render(
      <Progress
        value={42}
        variant="circle"
        showValue
        aria-label="Upload"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it.each(['line', 'circle'] as const)(
    'exposes progressbar semantics (%s)',
    variant => {
      render(
        <Progress
          value={42}
          variant={variant}
          aria-label="Upload"
        />,
      )
      const bar = screen.getByRole('progressbar', { name: 'Upload' })
      expect(bar).toHaveAttribute('aria-valuenow', '42')
      expect(bar).toHaveAttribute('aria-valuemin', '0')
      expect(bar).toHaveAttribute('aria-valuemax', '100')
      expect(bar).toHaveAttribute('aria-valuetext', '42%')
    },
  )

  it.each(['line', 'circle'] as const)('clamps value (%s)', variant => {
    const { rerender } = render(
      <Progress
        value={150}
        variant={variant}
        showValue
      />,
    )
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '100',
    )
    expect(screen.getByText('100%')).toBeInTheDocument()

    rerender(
      <Progress
        value={-20}
        variant={variant}
        showValue
      />,
    )
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '0',
    )
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('shows the rounded value only when showValue is set', () => {
    const { rerender } = render(<Progress value={33.6} />)
    expect(screen.queryByText('34%')).not.toBeInTheDocument()

    rerender(
      <Progress
        value={33.6}
        showValue
      />,
    )
    expect(screen.getByText('34%')).toBeInTheDocument()
  })

  it('sets the line indicator width from value', () => {
    const { container } = render(<Progress value={60} />)
    const indicator = container.querySelector(
      '.memori-progress__indicator',
    ) as HTMLElement
    expect(indicator.style.width).toBe('60%')
  })

  it('sets the circle dash offset from value', () => {
    const { container } = render(
      <Progress
        value={50}
        variant="circle"
      />,
    )
    const indicator = container.querySelector(
      '.memori-progress__circle-indicator',
    ) as SVGCircleElement
    const dasharray = Number(indicator.getAttribute('stroke-dasharray'))
    const dashoffset = Number(indicator.getAttribute('stroke-dashoffset'))
    expect(dashoffset).toBeCloseTo(dasharray / 2)
  })

  it.each(['default', 'success', 'error'] as const)(
    'applies status modifier %s',
    status => {
      render(
        <Progress
          value={10}
          status={status}
        />,
      )
      expect(screen.getByRole('progressbar')).toHaveClass(
        `memori-progress--${status}`,
      )
    },
  )

  it('applies size modifiers', () => {
    const { rerender } = render(
      <Progress
        value={10}
        size="sm"
      />,
    )
    expect(screen.getByRole('progressbar')).toHaveClass('memori-progress--sm')

    rerender(
      <Progress
        value={10}
        size={64}
      />,
    )
    expect(screen.getByRole('progressbar')).toHaveClass('memori-progress--md')
  })

  it('applies numeric size to the circle as px', () => {
    render(
      <Progress
        value={10}
        variant="circle"
        size={120}
        style={{ margin: 4 }}
      />,
    )
    const bar = screen.getByRole('progressbar')
    expect(bar.style.width).toBe('120px')
    expect(bar.style.height).toBe('120px')
    expect(bar.style.margin).toBe('4px')
    expect(bar).not.toHaveClass('memori-progress--md')
  })

  it('forwards ref and className', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Progress
        ref={ref}
        value={10}
        className="lorem-ipsum"
      />,
    )
    expect(ref.current).toBe(screen.getByRole('progressbar'))
    expect(ref.current).toHaveClass('lorem-ipsum')
  })
})
