import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading, Text } from '.'

describe('Heading', () => {
  it('renders Heading unchanged', () => {
    const { container } = render(<Heading>Title</Heading>)
    expect(container).toMatchSnapshot()
  })

  it('renders h2 with lg / semibold by default', () => {
    render(<Heading>Title</Heading>)
    const heading = screen.getByRole('heading', { level: 2, name: 'Title' })
    expect(heading).toHaveClass(
      'memori-heading',
      'memori-heading--size-lg',
      'memori-heading--weight-semibold',
    )
  })

  it('renders the requested level via `as`', () => {
    render(<Heading as="h4">Sub</Heading>)
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument()
  })

  it('applies size, weight, color and ellipsis', () => {
    render(
      <Heading
        size="2xl"
        weight="bold"
        color="muted"
        ellipsis
      >
        Title
      </Heading>,
    )
    expect(screen.getByRole('heading')).toHaveClass(
      'memori-heading--size-2xl',
      'memori-heading--weight-bold',
      'memori-heading--color-muted',
      'memori-heading--ellipsis',
    )
  })

  it('forwards ref, className, style and HTML attributes', () => {
    const ref = React.createRef<HTMLHeadingElement>()
    render(
      <Heading
        ref={ref}
        id="h"
        title="tip"
        className="custom"
        style={{ marginTop: 4 }}
      >
        Title
      </Heading>,
    )
    const heading = screen.getByRole('heading')
    expect(ref.current).toBe(heading)
    expect(heading).toHaveAttribute('id', 'h')
    expect(heading).toHaveAttribute('title', 'tip')
    expect(heading).toHaveClass('custom')
    expect(heading).toHaveStyle({ marginTop: '4px' })
  })
})

describe('Text', () => {
  it('renders Text unchanged', () => {
    const { container } = render(<Text>Body</Text>)
    expect(container).toMatchSnapshot()
  })

  it('renders a span with sm / normal by default', () => {
    render(<Text>Body</Text>)
    const text = screen.getByText('Body')
    expect(text.tagName).toBe('SPAN')
    expect(text).toHaveClass(
      'memori-text',
      'memori-text--size-sm',
      'memori-text--weight-normal',
    )
    expect(text.className).not.toMatch(/--color-/)
  })

  it.each(['p', 'div', 'strong', 'small', 'label'] as const)(
    'renders as %s',
    tag => {
      render(<Text as={tag}>Body</Text>)
      expect(screen.getByText('Body').tagName).toBe(tag.toUpperCase())
    },
  )

  it('applies danger color and ellipsis', () => {
    render(
      <Text
        color="danger"
        ellipsis
      >
        Error
      </Text>,
    )
    expect(screen.getByText('Error')).toHaveClass(
      'memori-text--color-danger',
      'memori-text--ellipsis',
    )
  })

  it('associates a label with its control', () => {
    render(
      <>
        <Text
          as="label"
          htmlFor="name"
        >
          Name
        </Text>
        <input id="name" />
      </>,
    )
    expect(screen.getByLabelText('Name')).toHaveAttribute('id', 'name')
  })

  it('forwards ref and HTML attributes', () => {
    const ref = React.createRef<HTMLElement>()
    render(
      <Text
        ref={ref}
        as="p"
        title="tip"
      >
        Body
      </Text>,
    )
    expect(ref.current).toBe(screen.getByText('Body'))
    expect(ref.current).toHaveAttribute('title', 'tip')
  })
})
