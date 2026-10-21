import React from 'react'
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import CopyField from './CopyField'

describe('CopyField', () => {
  const writeText = vi.fn().mockResolvedValue(undefined)

  beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
  })

  afterEach(() => {
    writeText.mockClear()
  })

  it('renders CopyField unchanged', () => {
    const { container } = render(<CopyField value="abc-123" />)
    expect(container).toMatchSnapshot()
  })

  it('shows the value read-only', () => {
    render(<CopyField value="abc-123" />)
    const input = screen.getByDisplayValue('abc-123')
    expect(input).toHaveAttribute('readonly')
  })

  it('copies the value, confirms and calls onCopy', async () => {
    const onCopy = vi.fn()
    render(
      <CopyField
        value="abc-123"
        onCopy={onCopy}
      />,
    )
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Copy' }))
    })
    expect(writeText).toHaveBeenCalledWith('abc-123')
    expect(onCopy).toHaveBeenCalledWith('abc-123')
    expect(screen.getByRole('status')).toHaveTextContent('Copied')
  })

  it('names the input with ariaLabel', () => {
    render(
      <CopyField
        value="x"
        ariaLabel="Memori ID"
      />,
    )
    expect(screen.getByRole('textbox', { name: 'Memori ID' })).toHaveValue('x')
  })

  it('masks secrets and toggles visibility', () => {
    render(
      <CopyField
        value="sk_live"
        secret
      />,
    )
    const input = screen.getByDisplayValue('sk_live')
    expect(input).toHaveAttribute('type', 'password')
    fireEvent.click(screen.getByRole('button', { name: 'Show' }))
    expect(input).toHaveAttribute('type', 'text')
    expect(screen.getByRole('button', { name: 'Hide' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('renders visible copy text when showCopyText', () => {
    render(
      <CopyField
        value="x"
        showCopyText
        copyLabel="Copia"
      />,
    )
    expect(screen.getByRole('button', { name: 'Copia' })).toHaveTextContent(
      'Copia',
    )
  })
})
