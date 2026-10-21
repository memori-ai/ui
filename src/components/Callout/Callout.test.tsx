import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Callout from './Callout'

describe('Callout', () => {
  it('renders Callout unchanged', () => {
    const { container } = render(
      <Callout
        title="Heads up"
        action={<button type="button">Fix</button>}
      >
        Body
      </Callout>,
    )
    expect(container).toMatchSnapshot()
  })

  it('uses role note by default and alert for errors', () => {
    const { rerender } = render(<Callout>Info</Callout>)
    expect(screen.getByRole('note')).toHaveClass('memori-callout--info')
    rerender(<Callout severity="error">Boom</Callout>)
    expect(screen.getByRole('alert')).toHaveClass('memori-callout--error')
  })

  it('renders title, body and action', () => {
    render(
      <Callout
        severity="warning"
        title="Title"
        action={<button type="button">Act</button>}
      >
        Text
      </Callout>,
    )
    expect(screen.getByText('Title')).toHaveClass('memori-callout__title')
    expect(screen.getByText('Text')).toHaveClass('memori-callout__text')
    expect(screen.getByRole('button', { name: 'Act' })).toBeInTheDocument()
  })

  it('hides the icon with icon={null}', () => {
    const { container } = render(<Callout icon={null}>No icon</Callout>)
    expect(container.querySelector('.memori-callout__icon')).toBeNull()
  })

  it('forwards ref, className and style', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <Callout
        ref={ref}
        className="custom"
        style={{ marginTop: 2 }}
      >
        x
      </Callout>,
    )
    expect(ref.current).toHaveClass('memori-callout', 'custom')
    expect(ref.current).toHaveStyle({ marginTop: '2px' })
  })
})
