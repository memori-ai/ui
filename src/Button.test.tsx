/// <reference lib="dom" />

import { test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Button } from './Button'

test('renders button', () => {
  render(<Button label="Click me" />)
  expect(screen.getByRole('button').textContent).toBe('Click me')
})
