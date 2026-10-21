import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import InfoHint from './InfoHint'

describe('InfoHint', () => {
  it('renders InfoHint unchanged', () => {
    const { container } = render(<InfoHint content="Explains the field" />)
    expect(container).toMatchSnapshot()
  })

  it('is a focusable button with a default accessible name', () => {
    render(<InfoHint content="Hint" />)
    const btn = screen.getByRole('button', { name: 'More information' })
    expect(btn).toHaveAttribute('type', 'button')
    expect(btn).toHaveClass('memori-info-hint')
  })

  it('accepts a custom aria label and forwards ref', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(
      <InfoHint
        ref={ref}
        content="Hint"
        ariaLabel="Informazioni su Occorrenze"
      />,
    )
    expect(ref.current).toBe(
      screen.getByRole('button', { name: 'Informazioni su Occorrenze' }),
    )
  })
})
