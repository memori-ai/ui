import React from 'react'
import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SelectBox } from './SelectBox'

it('uses the overlay placeholder when none is passed', () => {
  render(<SelectBox options={[{ value: 'a', label: 'A' }]} />)
  expect(screen.getByText('Select an option')).toBeInTheDocument()
})
