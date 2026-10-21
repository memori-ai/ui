import React from 'react'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import DocumentCard from './DocumentCard'

it('renders title and badge', () => {
  render(
    <DocumentCard
      title="My Document"
      badge="PDF"
    />,
  )
  expect(screen.getByText('My Document')).toBeInTheDocument()
  expect(screen.getByText('PDF')).toBeInTheDocument()
})

it('applies document card classes', () => {
  const { container } = render(
    <DocumentCard
      title="Report"
      badge="DOCX"
      meta="1.2 MB"
      icon={<span data-testid="icon">i</span>}
    />,
  )
  expect(container.querySelector('.memori-document-card')).toBeInTheDocument()
  expect(
    container.querySelector('.memori-document-card__title'),
  ).toHaveTextContent('Report')
  expect(
    container.querySelector('.memori-document-card__badge'),
  ).toHaveTextContent('DOCX')
  expect(
    container.querySelector('.memori-document-card__meta'),
  ).toHaveTextContent('1.2 MB')
  expect(screen.getByTestId('icon')).toBeInTheDocument()
})

it('renders DocumentCard snapshot', () => {
  const { container } = render(
    <DocumentCard
      title="Spreadsheet"
      badge="XLSX"
      meta="256 KB"
    />,
  )
  expect(container).toMatchSnapshot()
})
