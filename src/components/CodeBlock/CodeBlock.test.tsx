import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import CodeBlock from './CodeBlock'

describe('CodeBlock', () => {
  it('renders CodeBlock unchanged', () => {
    const { container } = render(
      <CodeBlock
        code="const a = 1"
        language="ts"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders code verbatim inside pre > code', () => {
    const { container } = render(<CodeBlock code={'a\n  b'} />)
    expect(container.querySelector('pre code')?.textContent).toBe('a\n  b')
  })

  it('copies the code', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
    const onCopy = vi.fn()
    render(
      <CodeBlock
        code="npm i"
        onCopy={onCopy}
      />,
    )
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Copy' }))
    })
    expect(writeText).toHaveBeenCalledWith('npm i')
    expect(onCopy).toHaveBeenCalledWith('npm i')
    expect(screen.getByRole('button', { name: 'Copied' })).toBeInTheDocument()
  })

  it('omits the header when not copyable and no language', () => {
    const { container } = render(
      <CodeBlock
        code="x"
        copyable={false}
      />,
    )
    expect(container.querySelector('.memori-code-block__header')).toBeNull()
  })

  it('applies wrap and maxHeight', () => {
    const { container } = render(
      <CodeBlock
        code="x"
        wrap
        maxHeight={120}
      />,
    )
    expect(container.firstChild).toHaveClass('memori-code-block--wrap')
    expect(container.querySelector('pre')).toHaveStyle({ maxHeight: '120px' })
  })
})
