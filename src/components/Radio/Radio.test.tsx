import React from 'react'
import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { RadioGroup } from './RadioGroup'
import { Radio } from './Radio'

const renderGroup = (props: React.ComponentProps<typeof RadioGroup> = {}) =>
  render(
    <RadioGroup
      aria-label="Plan"
      {...props}
    >
      <Radio
        value="free"
        label="Free"
      />
      <Radio
        value="pro"
        label="Pro"
      />
    </RadioGroup>,
  )

it('renders RadioGroup unchanged', () => {
  const { container } = renderGroup({ defaultValue: 'free' })
  expect(container).toMatchSnapshot()
})

it('exposes a named radiogroup with labelled radios', () => {
  renderGroup()
  expect(screen.getByRole('radiogroup', { name: 'Plan' })).toBeInTheDocument()
  expect(screen.getByRole('radio', { name: 'Free' })).toBeInTheDocument()
  expect(screen.getByRole('radio', { name: 'Pro' })).toBeInTheDocument()
})

it('marks the selected value as checked', () => {
  renderGroup({ value: 'pro' })
  expect(screen.getByRole('radio', { name: 'Pro' })).toHaveAttribute(
    'aria-checked',
    'true',
  )
  expect(screen.getByRole('radio', { name: 'Free' })).toHaveAttribute(
    'aria-checked',
    'false',
  )
})

it('defaults to vertical orientation', () => {
  renderGroup()
  const group = screen.getByRole('radiogroup')
  expect(group).toHaveClass('memori-radio-group--vertical')
  expect(group).toHaveAttribute('aria-orientation', 'vertical')
})

it('applies horizontal orientation', () => {
  renderGroup({ orientation: 'horizontal' })
  const group = screen.getByRole('radiogroup')
  expect(group).toHaveClass('memori-radio-group--horizontal')
  expect(group).toHaveAttribute('aria-orientation', 'horizontal')
})

it('calls onValueChange(value) when a radio is clicked', () => {
  const onValueChange = vi.fn()
  renderGroup({ defaultValue: 'free', onValueChange })
  fireEvent.click(screen.getByRole('radio', { name: 'Pro' }))
  expect(onValueChange).toHaveBeenCalledTimes(1)
  expect(onValueChange).toHaveBeenCalledWith('pro')
  expect(screen.getByRole('radio', { name: 'Pro' })).toHaveAttribute(
    'aria-checked',
    'true',
  )
})

it('selects a radio when its label is clicked', () => {
  const onValueChange = vi.fn()
  renderGroup({ onValueChange })
  fireEvent.click(screen.getByText('Free'))
  expect(onValueChange).toHaveBeenCalledWith('free')
})

it('disables every radio when the group is disabled', () => {
  const onValueChange = vi.fn()
  renderGroup({ disabled: true, onValueChange })
  const pro = screen.getByRole('radio', { name: 'Pro' })
  expect(pro).toHaveAttribute('data-disabled')
  fireEvent.click(pro)
  expect(onValueChange).not.toHaveBeenCalled()
})

it('disables a single radio', () => {
  const onValueChange = vi.fn()
  render(
    <RadioGroup
      aria-label="Plan"
      onValueChange={onValueChange}
    >
      <Radio
        value="free"
        label="Free"
      />
      <Radio
        value="pro"
        label="Pro"
        disabled
      />
    </RadioGroup>,
  )
  const pro = screen.getByRole('radio', { name: 'Pro' })
  expect(pro.parentElement).toHaveClass('memori-radio--disabled')
  fireEvent.click(pro)
  expect(onValueChange).not.toHaveBeenCalled()
})
