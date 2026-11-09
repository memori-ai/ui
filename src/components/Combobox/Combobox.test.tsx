import React from 'react'
import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Combobox } from './Combobox'

it('uses the overlay placeholder when none is passed', () => {
  const { container } = render(
    <Combobox options={[{ value: 'a', label: 'A' }]} />,
  )
  expect(container.querySelector('.memori-combobox__value')).toHaveAttribute(
    'data-placeholder',
    'Select an option',
  )
})
