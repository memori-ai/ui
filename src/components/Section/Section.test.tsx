import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Section } from './Section'

describe('Section', () => {
  it('renders title correctly', () => {
    render(<Section title="Settings" />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Settings' }),
    ).toBeInTheDocument()
  })

  it('renders description when provided, does not render when omitted', () => {
    const { rerender } = render(
      <Section
        title="Page"
        description="About this page"
      />,
    )
    expect(screen.getByText('About this page')).toBeInTheDocument()

    rerender(<Section title="Page" />)
    expect(screen.queryByText('About this page')).not.toBeInTheDocument()
  })

  it('renders icon wrapper when provided, does not render when omitted', () => {
    const { rerender, container } = render(
      <Section
        title="Page"
        icon={<span data-testid="icon-slot">icon</span>}
      />,
    )
    expect(container.querySelector('.memori-section__icon')).toBeInTheDocument()
    expect(screen.getByTestId('icon-slot')).toBeInTheDocument()

    rerender(<Section title="Page" />)
    expect(
      container.querySelector('.memori-section__icon'),
    ).not.toBeInTheDocument()
  })

  it('renders actions slot when provided, does not render when omitted', () => {
    const { rerender, container } = render(
      <Section
        title="Page"
        actions={<button type="button">Save</button>}
      />,
    )
    expect(
      container.querySelector('.memori-section__actions'),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()

    rerender(<Section title="Page" />)
    expect(
      container.querySelector('.memori-section__actions'),
    ).not.toBeInTheDocument()
  })

  it('renders breadcrumb slot when provided, does not render when omitted', () => {
    const { rerender, container } = render(
      <Section
        title="Page"
        breadcrumb={<nav aria-label="Breadcrumb">Home / Page</nav>}
      />,
    )
    expect(
      container.querySelector('.memori-section__breadcrumb'),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Breadcrumb')).toBeInTheDocument()

    rerender(<Section title="Page" />)
    expect(
      container.querySelector('.memori-section__breadcrumb'),
    ).not.toBeInTheDocument()
  })

  it('applies additional className to root element', () => {
    render(
      <Section
        title="T"
        className="my-section"
      />,
    )
    const root = screen.getByTestId('section')
    expect(root).toHaveClass('my-section')
    expect(root).toHaveClass('memori-section')
  })

  it('root element is a header tag', () => {
    render(<Section title="T" />)
    expect(screen.getByTestId('section').tagName).toBe('HEADER')
  })

  it('data-testid="section" is present on root', () => {
    render(<Section title="T" />)
    expect(screen.getByTestId('section')).toBeInTheDocument()
  })
})
