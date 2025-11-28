import React from 'react'
import { expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import Drawer from './Drawer'
import Button from '../Button/Button'

const content = (
  <>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <h3>Suspendisse a sodales nulla, sed semper nisi.</h3>
    <p>Proin tincidunt enim in felis aliquet, a ultricies purus bibendum.</p>
    <ul>
      <li>Quisque in ultrices lectus.</li>
      <li>Quisque in ultrices lectus.</li>
      <li>Quisque in ultrices lectus.</li>
    </ul>
    <p>Nulla at urna diam.</p>
  </>
)

it('renders Drawer unchanged', () => {
  const { container } = render(
    <Drawer
      open={false}
      onClose={vi.fn()}
    >
      {content}
    </Drawer>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Drawer open unchanged', () => {
  const { container } = render(
    <Drawer
      open={true}
      onClose={vi.fn()}
    >
      {content}
    </Drawer>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Drawer with title unchanged', () => {
  const { container } = render(
    <Drawer
      open={true}
      onClose={vi.fn()}
      title="Lorem ipsum"
    >
      {content}
    </Drawer>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Drawer with description unchanged', () => {
  const { container } = render(
    <Drawer
      open={true}
      onClose={vi.fn()}
      description="Lorem ipsum dolor sit amet"
    >
      {content}
    </Drawer>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Drawer loading unchanged', () => {
  const { container } = render(
    <Drawer
      open={true}
      onClose={vi.fn()}
      loading
    >
      {content}
    </Drawer>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Drawer with footer unchanged', () => {
  const { container } = render(
    <Drawer
      open={true}
      onClose={vi.fn()}
      footer={{
        leftAction: <Button>Cancel</Button>,
        onSubmit: vi.fn(),
        loading: false,
      }}
    >
      {content}
    </Drawer>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Drawer non closable unchanged', () => {
  const { container } = render(
    <Drawer
      open={true}
      onClose={vi.fn()}
      closable={false}
    >
      {content}
    </Drawer>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Drawer side left unchanged', () => {
  const { container } = render(
    <Drawer
      open={true}
      onClose={vi.fn()}
      placement="left"
    >
      {content}
    </Drawer>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Drawer with custom widths unchanged', () => {
  const { container } = render(
    <Drawer
      open={true}
      onClose={vi.fn()}
      width="100%"
      widthMd="90%"
      widthLg="80%"
    >
      {content}
    </Drawer>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Drawer with footer unchanged', () => {
  const { container } = render(
    <Drawer
      open={true}
      onClose={vi.fn()}
      footer={{
        leftActionClassName: 'custom-left-action-class',
        leftAction: <Button>Cancel</Button>,
        onSubmit: vi.fn(),
        loading: false,
      }}
    >
      {content}
    </Drawer>,
  )
  expect(container).toMatchSnapshot()
})
