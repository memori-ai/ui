import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Result from './Result'

describe('Result', () => {
  it('renders Result unchanged', () => {
    const { container } = render(<Result title="Done" />)
    expect(container).toMatchSnapshot()
  })

  it('renders Result with description and extra unchanged', () => {
    const { container } = render(
      <Result
        status="success"
        title="Done"
        description="Everything went fine"
        extra={<button type="button">Continue</button>}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders the title as an h2', () => {
    render(<Result title="Page not found" />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Page not found' }),
    ).toBeInTheDocument()
  })

  it('defaults to info status', () => {
    const { container } = render(<Result title="Info" />)
    expect(container.firstChild).toHaveClass('memori-result--status-info')
  })

  it.each([
    ['success', 'lucide-circle-check'],
    ['error', 'lucide-circle-x'],
    ['warning', 'lucide-triangle-alert'],
    ['info', 'lucide-info'],
    ['404', 'lucide-search-x'],
    ['403', 'lucide-shield-x'],
    ['500', 'lucide-server-crash'],
  ] as const)('renders the default icon for status %s', (status, iconClass) => {
    const { container } = render(
      <Result
        status={status}
        title="Title"
      />,
    )
    expect(container.firstChild).toHaveClass(`memori-result--status-${status}`)
    expect(container.querySelector(`svg.${iconClass}`)).toBeInTheDocument()
  })

  it('replaces the default icon with the icon override', () => {
    const { container } = render(
      <Result
        status="success"
        title="Title"
        icon={<span data-testid="custom-icon" />}
      />,
    )
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })

  it('hides the icon from assistive tech', () => {
    const { container } = render(<Result title="Title" />)
    expect(container.querySelector('.memori-result__icon')).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })

  it('renders description and extra only when provided', () => {
    const { container, rerender } = render(<Result title="Title" />)
    expect(
      container.querySelector('.memori-result__description'),
    ).not.toBeInTheDocument()
    expect(
      container.querySelector('.memori-result__extra'),
    ).not.toBeInTheDocument()

    rerender(
      <Result
        title="Title"
        description="Some details"
        extra={<button type="button">Retry</button>}
      />,
    )
    expect(screen.getByText('Some details')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument()
  })

  it('forwards ref, className and style', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Result
        ref={ref}
        title="Title"
        className="lorem-ipsum"
        style={{ maxWidth: 400 }}
      />,
    )
    expect(ref.current).toHaveClass('memori-result', 'lorem-ipsum')
    expect(ref.current?.style.maxWidth).toBe('400px')
  })
})
