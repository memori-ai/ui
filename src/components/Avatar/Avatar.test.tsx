import React from 'react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { Bot } from 'lucide-react'
import Avatar from './Avatar'

let imageOutcome: 'load' | 'error' = 'load'
let imageSettled = false

class MockImage {
  onload: (() => void) | null = null
  onerror: (() => void) | null = null
  crossOrigin: string | null = null
  referrerPolicy = ''
  set src(_value: string) {
    setTimeout(() => {
      if (imageOutcome === 'load') this.onload?.()
      else this.onerror?.()
      imageSettled = true
    }, 0)
  }
}

beforeEach(() => {
  imageOutcome = 'load'
  imageSettled = false
  vi.stubGlobal('Image', MockImage)
})

afterEach(() => {
  vi.unstubAllGlobals()
})

it('renders Avatar unchanged', () => {
  const { container } = render(<Avatar />)
  expect(container).toMatchSnapshot()
})

it('renders Avatar with initials unchanged', () => {
  const { container } = render(
    <Avatar
      initials="AL"
      size="lg"
      shape="square"
    />,
  )
  expect(container).toMatchSnapshot()
})

it('renders the image once loaded', async () => {
  const { container } = render(
    <Avatar
      src="/ada.png"
      alt="Ada Lovelace"
      initials="AL"
    />,
  )
  await waitFor(() => expect(container.querySelector('img')).not.toBeNull())
  const img = screen.getByRole('img', { name: 'Ada Lovelace' })
  expect(img.tagName).toBe('IMG')
  expect(img).toHaveAttribute('src', '/ada.png')
  expect(screen.queryByText('AL')).not.toBeInTheDocument()
})

it('falls back to initials when the image fails', async () => {
  imageOutcome = 'error'
  const { container } = render(
    <Avatar
      src="/broken.png"
      alt="Ada Lovelace"
      initials="AL"
    />,
  )
  await waitFor(() => expect(imageSettled).toBe(true))
  expect(container.querySelector('img')).toBeNull()
  expect(screen.getByText('AL')).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Ada Lovelace' })).toHaveClass(
    'memori-avatar__fallback',
  )
})

it('falls back to the default User icon without initials', () => {
  const { container } = render(<Avatar />)
  const icon = container.querySelector('.memori-avatar__icon')
  expect(icon).toHaveAttribute('aria-hidden', 'true')
  expect(icon?.querySelector('svg')).toHaveClass('lucide-user')
})

it('renders a custom fallback icon', () => {
  const { container } = render(<Avatar icon={<Bot />} />)
  expect(container.querySelector('.memori-avatar__icon svg')).toHaveClass(
    'lucide-bot',
  )
})

it('prefers initials over icon', () => {
  const { container } = render(
    <Avatar
      initials="MR"
      icon={<Bot />}
    />,
  )
  expect(screen.getByText('MR')).toBeInTheDocument()
  expect(container.querySelector('.memori-avatar__icon')).toBeNull()
})

it('applies size and shape classes', () => {
  const { container } = render(<Avatar />)
  expect(container.firstChild).toHaveClass(
    'memori-avatar--md',
    'memori-avatar--circle',
  )
})

it('applies pixel size inline', () => {
  const { container } = render(<Avatar size={50} />)
  const root = container.firstChild as HTMLElement
  expect(root).toHaveStyle({ width: '50px', height: '50px', fontSize: '20px' })
  expect(root.className).not.toMatch(/memori-avatar--(sm|md|lg)/)
})

it('forwards className, style and ref to the root', () => {
  const ref = React.createRef<HTMLSpanElement>()
  const { container } = render(
    <Avatar
      ref={ref}
      className="custom"
      style={{ marginTop: 4 }}
    />,
  )
  const root = container.firstChild as HTMLElement
  expect(ref.current).toBe(root)
  expect(root).toHaveClass('memori-avatar', 'custom')
  expect(root).toHaveStyle({ marginTop: '4px' })
})
