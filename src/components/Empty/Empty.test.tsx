import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Empty from './Empty'

describe('Empty', () => {
  it('renders Empty unchanged', () => {
    const { container } = render(<Empty />)
    expect(container).toMatchSnapshot()
  })

  it('renders Empty with description and extra unchanged', () => {
    const { container } = render(
      <Empty
        description="No data"
        extra={<button type="button">Create</button>}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders a decorative default icon and no text by default', () => {
    const { container } = render(<Empty />)
    const icon = container.querySelector('.memori-empty__icon')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon?.querySelector('svg')).toBeInTheDocument()
    expect(
      container.querySelector('.memori-empty__description'),
    ).not.toBeInTheDocument()
    expect(container.querySelector('.memori-empty')).toHaveTextContent('')
  })

  it('renders a custom icon, or none when icon is null', () => {
    const { container, rerender } = render(
      <Empty icon={<span data-testid="custom-icon" />} />,
    )
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()

    rerender(<Empty icon={null} />)
    expect(
      container.querySelector('.memori-empty__icon'),
    ).not.toBeInTheDocument()
  })

  it('renders description when provided', () => {
    render(<Empty description="No agents yet" />)
    expect(screen.getByText('No agents yet')).toHaveClass(
      'memori-empty__description',
    )
  })

  it('renders extra actions', () => {
    render(<Empty extra={<button type="button">Create</button>} />)
    expect(screen.getByRole('button', { name: 'Create' })).toBeInTheDocument()
  })

  it('forwards ref, className and style', () => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(
      <Empty
        ref={ref}
        className="custom"
        style={{ minHeight: 100 }}
      />,
    )
    const root = container.querySelector('.memori-empty')
    expect(ref.current).toBe(root)
    expect(root).toHaveClass('custom')
    expect(root).toHaveStyle({ minHeight: '100px' })
  })
})
