import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Divider from './Divider'

describe('Divider', () => {
  it('renders Divider unchanged', () => {
    const { container } = render(<Divider />)
    expect(container).toMatchSnapshot()
  })

  it('renders Divider with label unchanged', () => {
    const { container } = render(<Divider label="or" />)
    expect(container).toMatchSnapshot()
  })

  it('is a horizontal separator by default', () => {
    render(<Divider />)
    const separator = screen.getByRole('separator')
    expect(separator).toHaveAttribute('aria-orientation', 'horizontal')
    expect(separator).toHaveClass('memori-divider--horizontal')
  })

  it('renders vertical orientation', () => {
    render(<Divider orientation="vertical" />)
    const separator = screen.getByRole('separator')
    expect(separator).toHaveAttribute('aria-orientation', 'vertical')
    expect(separator).toHaveClass('memori-divider--vertical')
  })

  it('renders the label when horizontal and names the separator', () => {
    render(<Divider label="or" />)
    const separator = screen.getByRole('separator', { name: 'or' })
    expect(separator).toHaveClass('memori-divider--with-label')
    expect(screen.getByText('or')).toHaveClass('memori-divider__label')
  })

  it('ignores the label when vertical', () => {
    render(
      <Divider
        orientation="vertical"
        label="or"
      />,
    )
    expect(screen.queryByText('or')).not.toBeInTheDocument()
    expect(screen.getByRole('separator')).not.toHaveClass(
      'memori-divider--with-label',
    )
  })

  it('forwards ref, className and style', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Divider
        ref={ref}
        className="custom"
        style={{ marginTop: 2 }}
      />,
    )
    const separator = screen.getByRole('separator')
    expect(ref.current).toBe(separator)
    expect(separator).toHaveClass('custom')
    expect(separator).toHaveStyle({ marginTop: '2px' })
  })
})
