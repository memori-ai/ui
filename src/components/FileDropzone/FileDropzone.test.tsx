import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import FileDropzone from './FileDropzone'

const pdf = new File(['%PDF'], 'doc.pdf', { type: 'application/pdf' })
const png = new File(['png'], 'img.png', { type: 'image/png' })

describe('FileDropzone', () => {
  it('renders FileDropzone unchanged', () => {
    const { container } = render(
      <FileDropzone
        onFilesSelected={() => {}}
        description="PDF, max 20 MB"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('labels the native file input and links the description', () => {
    render(
      <FileDropzone
        onFilesSelected={() => {}}
        accept=".pdf"
        description="PDF only"
      />,
    )
    const input = screen.getByLabelText(/Drag files here or/)
    expect(input).toHaveAttribute('type', 'file')
    expect(input).toHaveAttribute('accept', '.pdf')
    expect(input).toHaveAccessibleDescription('PDF only')
  })

  it('emits picked files', () => {
    const onFiles = vi.fn()
    const { container } = render(<FileDropzone onFilesSelected={onFiles} />)
    const input = container.querySelector('input[type=file]')!
    fireEvent.change(input, { target: { files: [pdf] } })
    expect(onFiles).toHaveBeenCalledWith([pdf])
  })

  it('filters dropped files by accept and respects multiple', () => {
    const onFiles = vi.fn()
    const { container } = render(
      <FileDropzone
        onFilesSelected={onFiles}
        accept="image/*"
        multiple
      />,
    )
    const zone = container.firstChild as HTMLElement
    fireEvent.dragEnter(zone, { dataTransfer: { files: [] } })
    expect(zone).toHaveClass('memori-file-dropzone--dragging')
    fireEvent.drop(zone, { dataTransfer: { files: [pdf, png] } })
    expect(onFiles).toHaveBeenCalledWith([png])
    expect(zone).not.toHaveClass('memori-file-dropzone--dragging')
  })

  it('ignores drops when disabled', () => {
    const onFiles = vi.fn()
    const { container } = render(
      <FileDropzone
        onFilesSelected={onFiles}
        disabled
      />,
    )
    fireEvent.drop(container.firstChild as HTMLElement, {
      dataTransfer: { files: [pdf] },
    })
    expect(onFiles).not.toHaveBeenCalled()
  })

  it('button variant opens the picker', () => {
    render(
      <FileDropzone
        onFilesSelected={() => {}}
        variant="button"
        buttonLabel="Carica"
      />,
    )
    const input = document.querySelector('input[type=file]') as HTMLInputElement
    const click = vi.spyOn(input, 'click')
    fireEvent.click(screen.getByRole('button', { name: 'Carica' }))
    expect(click).toHaveBeenCalled()
  })
})
