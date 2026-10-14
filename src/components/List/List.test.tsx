import React from 'react'
import { expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import List from './List'

it('renders List unchanged', () => {
  const { container } = render(
    <List>
      <List.Item>One</List.Item>
      <List.Item>Two</List.Item>
    </List>,
  )
  expect(container).toMatchSnapshot()
})

it('renders List.Item with slots unchanged', () => {
  const { container } = render(
    <List bordered>
      <List.Item
        prefix={<span>P</span>}
        suffix={<span>S</span>}
        actions={<button type="button">Act</button>}
      >
        Content
      </List.Item>
    </List>,
  )
  expect(container).toMatchSnapshot()
})

it('renders a ul with role list and li items', () => {
  render(
    <List>
      <List.Item>One</List.Item>
      <List.Item>Two</List.Item>
    </List>,
  )
  const list = screen.getByRole('list')
  expect(list.tagName).toBe('UL')
  const items = screen.getAllByRole('listitem')
  expect(items).toHaveLength(2)
  expect(items[0]?.tagName).toBe('LI')
})

it('renders prefix, suffix and actions slots in order', () => {
  render(
    <List>
      <List.Item
        prefix="pre"
        suffix="suf"
        actions="act"
      >
        main
      </List.Item>
    </List>,
  )
  const item = screen.getByRole('listitem')
  expect(item.textContent).toBe('premainsufact')
  expect(item.querySelector('.memori-list__item-prefix')).toHaveTextContent(
    'pre',
  )
  expect(item.querySelector('.memori-list__item-suffix')).toHaveTextContent(
    'suf',
  )
  expect(item.querySelector('.memori-list__item-actions')).toHaveTextContent(
    'act',
  )
})

it('omits slot wrappers that are not provided', () => {
  render(
    <List>
      <List.Item>main</List.Item>
    </List>,
  )
  const item = screen.getByRole('listitem')
  expect(item.querySelector('.memori-list__item-prefix')).toBeNull()
  expect(item.querySelector('.memori-list__item-suffix')).toBeNull()
  expect(item.querySelector('.memori-list__item-actions')).toBeNull()
})

it('renders empty when there are no valid children', () => {
  render(
    <List empty="Nothing here">
      {null}
      {false}
    </List>,
  )
  expect(screen.getByText('Nothing here')).toBeInTheDocument()
  expect(screen.getByRole('list')).toHaveClass('memori-list--empty')
})

it('renders nothing inside when empty and no empty slot', () => {
  render(<List />)
  expect(screen.getByRole('list')).toBeEmptyDOMElement()
})

it('does not render empty when there are items', () => {
  render(
    <List empty="Nothing here">
      <List.Item>One</List.Item>
    </List>,
  )
  expect(screen.queryByText('Nothing here')).toBeNull()
})

it('renders the default Spin while loading and hides items and empty', () => {
  render(
    <List
      loading
      empty="Nothing here"
    >
      <List.Item>One</List.Item>
    </List>,
  )
  const list = screen.getByRole('list')
  expect(list).toHaveAttribute('aria-busy', 'true')
  expect(list.querySelector('.memori-spin')).not.toBeNull()
  expect(screen.queryByText('One')).toBeNull()
  expect(screen.queryByText('Nothing here')).toBeNull()
})

it('renders a custom loadingSlot', () => {
  render(
    <List
      loading
      loadingSlot={<span>Custom loader</span>}
    />,
  )
  expect(screen.getByText('Custom loader')).toBeInTheDocument()
  expect(screen.getByRole('list').querySelector('.memori-spin')).toBeNull()
})

it('applies bordered modifier', () => {
  render(<List bordered />)
  expect(screen.getByRole('list')).toHaveClass('memori-list--bordered')
})

it('forwards refs, className, style and HTML attributes', () => {
  const listRef = React.createRef<HTMLUListElement>()
  const itemRef = React.createRef<HTMLLIElement>()
  render(
    <List
      ref={listRef}
      className="custom-list"
      style={{ maxWidth: '10px' }}
      aria-label="Files"
    >
      <List.Item
        ref={itemRef}
        className="custom-item"
      >
        One
      </List.Item>
    </List>,
  )
  const list = screen.getByRole('list', { name: 'Files' })
  expect(listRef.current).toBe(list)
  expect(list).toHaveClass('custom-list')
  expect(list.style.maxWidth).toBe('10px')
  expect(itemRef.current).toBe(screen.getByRole('listitem'))
  expect(itemRef.current).toHaveClass('custom-item')
})

it('calls actions handlers on click', () => {
  const onClick = vi.fn()
  render(
    <List>
      <List.Item
        actions={
          <button
            type="button"
            onClick={onClick}
          >
            Delete
          </button>
        }
      >
        One
      </List.Item>
    </List>,
  )
  fireEvent.click(screen.getByRole('button', { name: 'Delete' }))
  expect(onClick).toHaveBeenCalledTimes(1)
})
