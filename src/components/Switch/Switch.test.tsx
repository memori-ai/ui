import React from 'react'
import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Switch from './Switch'
import { Field } from '../Field'

it('renders Switch unchanged', () => {
  const { container } = render(<Switch label="Notifications" />)
  expect(container).toMatchSnapshot()
})

it('uses the label as accessible name', () => {
  render(<Switch label="Notifications" />)
  expect(
    screen.getByRole('switch', { name: 'Notifications' }),
  ).toBeInTheDocument()
})

it('supports aria-label without a visible label', () => {
  render(<Switch aria-label="Dark mode" />)
  expect(screen.getByRole('switch', { name: 'Dark mode' })).toBeInTheDocument()
})

it('reflects checked state', () => {
  render(
    <Switch
      label="Notifications"
      checked
    />,
  )
  expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true')
})

it('applies size and disabled classes', () => {
  const { container } = render(
    <Switch
      label="Notifications"
      size="sm"
      disabled
    />,
  )
  const root = container.firstElementChild
  expect(root).toHaveClass('memori-switch--sm')
  expect(root).toHaveClass('memori-switch--disabled')
  expect(screen.getByRole('switch')).toHaveAttribute('data-disabled')
})

it('calls onCheckedChange(true) on click', () => {
  const onCheckedChange = vi.fn()
  render(
    <Switch
      label="Notifications"
      onCheckedChange={onCheckedChange}
    />,
  )
  fireEvent.click(screen.getByRole('switch'))
  expect(onCheckedChange).toHaveBeenCalledTimes(1)
  expect(onCheckedChange).toHaveBeenCalledWith(true)
  expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true')
})

it('toggles when the label is clicked', () => {
  const onCheckedChange = vi.fn()
  render(
    <Switch
      label="Notifications"
      onCheckedChange={onCheckedChange}
    />,
  )
  fireEvent.click(screen.getByText('Notifications'))
  expect(onCheckedChange).toHaveBeenCalledWith(true)
})

it('does not toggle when disabled', () => {
  const onCheckedChange = vi.fn()
  render(
    <Switch
      label="Notifications"
      disabled
      onCheckedChange={onCheckedChange}
    />,
  )
  fireEvent.click(screen.getByRole('switch'))
  expect(onCheckedChange).not.toHaveBeenCalled()
})

it('takes its name from Field.Label', () => {
  render(
    <Field.Root>
      <Field.Label>Auto-save</Field.Label>
      <Switch />
    </Field.Root>,
  )
  expect(screen.getByRole('switch', { name: 'Auto-save' })).toBeInTheDocument()
})
