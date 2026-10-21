import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import NavList from './NavList'

function Sample({ onClick = () => {} }: { onClick?: () => void }) {
  return (
    <NavList>
      <NavList.Group>
        <NavList.Item
          href="#home"
          active
        >
          Home
        </NavList.Item>
      </NavList.Group>
      <NavList.Group label="Settings">
        <NavList.Item
          onClick={onClick}
          trailing={3}
        >
          General
        </NavList.Item>
        <NavList.Item disabled>Locked</NavList.Item>
      </NavList.Group>
    </NavList>
  )
}

describe('NavList', () => {
  it('renders NavList unchanged', () => {
    const { container } = render(<Sample />)
    expect(container).toMatchSnapshot()
  })

  it('labels groups and lists items', () => {
    render(<Sample />)
    expect(screen.getByRole('group', { name: 'Settings' })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('marks active links with aria-current=page', () => {
    render(<Sample />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('renders buttons without href and calls onClick', () => {
    const onClick = vi.fn()
    render(<Sample onClick={onClick} />)
    fireEvent.click(screen.getByRole('button', { name: /General/ }))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('button', { name: 'Locked' })).toBeDisabled()
  })

  it('marks active buttons with aria-current=true', () => {
    render(
      <NavList>
        <NavList.Group>
          <NavList.Item active>Picked</NavList.Item>
        </NavList.Group>
      </NavList>,
    )
    expect(screen.getByRole('button', { name: 'Picked' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
