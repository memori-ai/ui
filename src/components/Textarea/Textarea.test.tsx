import React from 'react'
import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Textarea from './Textarea'
import { FieldGroup } from '../Field'

it('renders Textarea unchanged', () => {
  const { container } = render(
    <Textarea
      aria-label="Bio"
      placeholder="Write..."
    />,
  )
  expect(container).toMatchSnapshot()
})

it('renders a native textarea with native attributes', () => {
  render(
    <Textarea
      aria-label="Bio"
      rows={5}
      maxLength={200}
      name="bio"
      className="custom"
    />,
  )
  const textarea = screen.getByRole('textbox', { name: 'Bio' })
  expect(textarea.tagName).toBe('TEXTAREA')
  expect(textarea).toHaveAttribute('rows', '5')
  expect(textarea).toHaveAttribute('maxlength', '200')
  expect(textarea).toHaveAttribute('name', 'bio')
  expect(textarea).toHaveClass('memori-textarea', 'custom')
})

it('forwards the ref to the textarea', () => {
  const ref = React.createRef<HTMLTextAreaElement>()
  render(
    <Textarea
      aria-label="Bio"
      ref={ref}
    />,
  )
  expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
})

it('marks the error state', () => {
  render(
    <Textarea
      aria-label="Bio"
      error
    />,
  )
  const textarea = screen.getByRole('textbox')
  expect(textarea).toHaveClass('memori-textarea--error')
  expect(textarea).toHaveAttribute('aria-invalid', 'true')
})

it('is disabled', () => {
  render(
    <Textarea
      aria-label="Bio"
      disabled
    />,
  )
  const textarea = screen.getByRole('textbox')
  expect(textarea).toBeDisabled()
  expect(textarea).toHaveClass('memori-textarea--disabled')
})

it('calls onChange and updates an uncontrolled value', () => {
  const onChange = vi.fn()
  render(
    <Textarea
      aria-label="Bio"
      onChange={onChange}
    />,
  )
  const textarea = screen.getByRole('textbox') as HTMLTextAreaElement
  fireEvent.change(textarea, { target: { value: 'Hello' } })
  expect(onChange).toHaveBeenCalledTimes(1)
  expect(textarea.value).toBe('Hello')
})

it('applies autosize sizing and uses minRows as default rows', () => {
  render(
    <Textarea
      aria-label="Bio"
      autosize={{ minRows: 2, maxRows: 4 }}
    />,
  )
  const textarea = screen.getByRole('textbox')
  expect(textarea).toHaveClass('memori-textarea--autosize')
  expect(textarea).toHaveAttribute('rows', '2')
  expect(textarea.style.height).toMatch(/px$/)
})

it('does not set an inline height without autosize', () => {
  render(<Textarea aria-label="Bio" />)
  expect(screen.getByRole('textbox').style.height).toBe('')
})

it('is labelled and invalid inside FieldGroup', () => {
  render(
    <FieldGroup
      label="Bio"
      error="Required"
      invalid
    >
      <Textarea />
    </FieldGroup>,
  )
  const textarea = screen.getByRole('textbox', { name: 'Bio' })
  expect(textarea).toHaveAttribute('data-invalid')
  expect(screen.getByText('Required')).toBeInTheDocument()
})
