import React from 'react'
import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'

it('renders prefix and suffix inside the field', () => {
  render(
    <Input
      aria-label="Search"
      prefix={<span data-testid="prefix">icon</span>}
      suffix={<button type="button">Show</button>}
    />,
  )

  const input = screen.getByRole('textbox', { name: 'Search' })
  expect(input).toHaveClass('memori-input--has-prefix')
  expect(input).toHaveClass('memori-input--has-suffix')
  expect(input.parentElement).toHaveClass('memori-input-field')
  expect(screen.getByTestId('prefix')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Show' })).toBeInTheDocument()
})

it('keeps a plain input when there is no addon', () => {
  render(
    <Input
      type="password"
      aria-label="Password"
    />,
  )

  const input = screen.getByLabelText('Password')
  expect(input).toHaveAttribute('type', 'password')
  expect(input.parentElement).not.toHaveClass('memori-input-field')
})
