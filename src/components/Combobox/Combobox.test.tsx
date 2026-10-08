import React from 'react'
import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Combobox } from './Combobox'

it('uses the overlay placeholder when none is passed', () => {
  render(<Combobox options={[{ value: 'a', label: 'A' }]} />)
  expect(document.querySelector('[data-placeholder]')).toHaveAttribute(
    'data-placeholder',
    'Select an option',
  )
})
