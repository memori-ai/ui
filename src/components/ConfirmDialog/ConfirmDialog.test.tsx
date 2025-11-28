import React from 'react'
import { expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ConfirmDialog from './ConfirmDialog'

it('renders ConfirmDialog unchanged', () => {
  const { container } = render(
    <ConfirmDialog
      isOpen={false}
      onClose={vi.fn()}
      onConfirm={vi.fn()}
      title="Test Title"
      message="Test Message"
      confirmText="Confirm"
      cancelText="Cancel"
    />,
  )
  expect(container).toMatchSnapshot()
})

it('renders ConfirmDialog open unchanged', () => {
  const { container } = render(
    <ConfirmDialog
      isOpen={true}
      onClose={vi.fn()}
      onConfirm={vi.fn()}
      title="Test Title"
      message="Test Message"
      confirmText="Confirm"
      cancelText="Cancel"
    />,
  )
  expect(container).toMatchSnapshot()
})

it('renders ConfirmDialog with custom title unchanged', () => {
  const { container } = render(
    <ConfirmDialog
      isOpen={true}
      onClose={vi.fn()}
      onConfirm={vi.fn()}
      title="Custom Title"
      message="Test Message"
      confirmText="Confirm"
      cancelText="Cancel"
    />,
  )
  expect(container).toMatchSnapshot()
})

it('renders ConfirmDialog with custom message unchanged', () => {
  const { container } = render(
    <ConfirmDialog
      isOpen={true}
      onClose={vi.fn()}
      onConfirm={vi.fn()}
      title="Test Title"
      message="Custom confirmation message for testing purposes"
      confirmText="Confirm"
      cancelText="Cancel"
    />,
  )
  expect(container).toMatchSnapshot()
})

it('renders ConfirmDialog with custom button text unchanged', () => {
  const { container } = render(
    <ConfirmDialog
      isOpen={true}
      onClose={vi.fn()}
      onConfirm={vi.fn()}
      title="Test Title"
      message="Test Message"
      confirmText="Yes, proceed"
      cancelText="No, go back"
    />,
  )
  expect(container).toMatchSnapshot()
})

it('calls onClose when cancel button is clicked', () => {
  const onCloseMock = vi.fn()
  render(
    <ConfirmDialog
      isOpen={true}
      onClose={onCloseMock}
      onConfirm={vi.fn()}
      title="Test Title"
      message="Test Message"
      confirmText="Confirm"
      cancelText="Cancel"
    />,
  )

  // Get all Cancel buttons and click the last one (most recently rendered)
  const cancelButtons = screen.getAllByText('Cancel')
  const lastCancelButton = cancelButtons[cancelButtons.length - 1]
  if (lastCancelButton) {
    fireEvent.click(lastCancelButton)
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  } else {
    throw new Error('Cancel button not found')
  }
})

it('calls onConfirm when confirm button is clicked', () => {
  const onConfirmMock = vi.fn()
  render(
    <ConfirmDialog
      isOpen={true}
      onClose={vi.fn()}
      onConfirm={onConfirmMock}
      title="Test Title"
      message="Test Message"
      confirmText="Confirm"
      cancelText="Cancel"
    />,
  )

  // Get all Confirm buttons and click the last one (most recently rendered)
  const confirmButtons = screen.getAllByText('Confirm')
  const lastConfirmButton = confirmButtons[confirmButtons.length - 1]
  if (lastConfirmButton) {
    fireEvent.click(lastConfirmButton)
    expect(onConfirmMock).toHaveBeenCalledTimes(1)
  } else {
    throw new Error('Confirm button not found')
  }
})
