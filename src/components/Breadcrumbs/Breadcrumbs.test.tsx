import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Breadcrumbs from './Breadcrumbs'

const items = [
  { label: 'Home', href: '/' },
  { label: 'Agent', onClick: vi.fn() },
  { label: 'Group' },
  { label: 'Contents' },
]

describe('Breadcrumbs', () => {
  it('renders Breadcrumbs unchanged', () => {
    const { container } = render(<Breadcrumbs items={items} />)
    expect(container).toMatchSnapshot()
  })

  it('is a named navigation landmark with an ordered list', () => {
    render(
      <Breadcrumbs
        items={items}
        ariaLabel="Percorso"
      />,
    )
    const nav = screen.getByRole('navigation', { name: 'Percorso' })
    expect(nav.querySelector('ol')).not.toBeNull()
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
  })

  it('marks only the last item as current page', () => {
    render(<Breadcrumbs items={items} />)
    const current = screen.getByText('Contents')
    expect(current).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('renders href as link, onClick as button and plain steps as text', () => {
    const onClick = vi.fn()
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Agent', onClick },
          { label: 'Group' },
          { label: 'Now' },
        ]}
      />,
    )
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/',
    )
    fireEvent.click(screen.getByRole('button', { name: 'Agent' }))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(screen.getByText('Group').tagName).toBe('SPAN')
  })

  it('hides separators from assistive tech', () => {
    const { container } = render(<Breadcrumbs items={items} />)
    const seps = container.querySelectorAll('.memori-breadcrumbs__separator')
    expect(seps).toHaveLength(3)
    seps.forEach(s => expect(s).toHaveAttribute('aria-hidden'))
  })
})
