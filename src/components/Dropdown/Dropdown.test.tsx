import React from 'react'
import { expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Dropdown from './Dropdown'
import Button from '../Button/Button'

it('renders Dropdown unchanged', () => {
  const { container } = render(
    <Dropdown trigger={<Button>Open</Button>}>
      <div>Content</div>
    </Dropdown>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Dropdown open unchanged', () => {
  const { container } = render(
    <Dropdown
      open={true}
      trigger={<Button>Open</Button>}
    >
      <div>Content</div>
    </Dropdown>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Dropdown with className unchanged', () => {
  const { container } = render(
    <Dropdown
      className="custom-dropdown"
      trigger={<Button>Open</Button>}
    >
      <div>Content</div>
    </Dropdown>,
  )
  const dropdown = container.querySelector('.memori-dropdown')
  expect(dropdown?.classList.contains('custom-dropdown')).toBe(true)
  expect(container).toMatchSnapshot()
})

it('renders Dropdown with placement bottom-left unchanged', () => {
  const { container } = render(
    <Dropdown
      placement="bottom-left"
      trigger={<Button>Open</Button>}
    >
      <div>Content</div>
    </Dropdown>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Dropdown with placement bottom-right unchanged', () => {
  const { container } = render(
    <Dropdown
      placement="bottom-right"
      trigger={<Button>Open</Button>}
    >
      <div>Content</div>
    </Dropdown>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Dropdown with placement top-left unchanged', () => {
  const { container } = render(
    <Dropdown
      placement="top-left"
      trigger={<Button>Open</Button>}
    >
      <div>Content</div>
    </Dropdown>,
  )
  expect(container).toMatchSnapshot()
})

it('renders Dropdown with placement top-right unchanged', () => {
  const { container } = render(
    <Dropdown
      placement="top-right"
      trigger={<Button>Open</Button>}
    >
      <div>Content</div>
    </Dropdown>,
  )
  expect(container).toMatchSnapshot()
})
