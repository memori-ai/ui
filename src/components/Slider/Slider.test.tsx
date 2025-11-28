import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Slider from './Slider'

describe('Slider', () => {
  it('renders Slider unchanged', () => {
    const { container } = render(
      <Slider
        min={0}
        max={100}
        step={1}
        defaultValue={50}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders Slider with disabled prop unchanged', () => {
    const { container } = render(
      <Slider
        min={0}
        max={100}
        step={1}
        defaultValue={50}
        disabled
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders Slider with label prop unchanged', () => {
    const { container } = render(
      <Slider
        min={0}
        max={100}
        step={1}
        defaultValue={50}
        label="Test"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders Slider with different step unchanged', () => {
    const { container } = render(
      <Slider
        min={0}
        max={100}
        step={10}
        defaultValue={50}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
