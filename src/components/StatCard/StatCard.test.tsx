import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import StatCard from './StatCard'

describe('StatCard', () => {
  it('renders StatCard unchanged', () => {
    const { container } = render(
      <StatCard
        label="Messages"
        value="12.4k"
        delta="+8%"
        trend="up"
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('pairs label and value in a description list', () => {
    render(
      <StatCard
        label="Sessions"
        value="862"
      />,
    )
    expect(screen.getByText('Sessions').tagName).toBe('DT')
    expect(screen.getByText('862').tagName).toBe('DD')
  })

  it('applies trend and variant classes', () => {
    const { container } = render(
      <StatCard
        label="Tokens"
        value="41k"
        delta="-4%"
        trend="down"
        variant="plain"
      />,
    )
    expect(container.firstChild).toHaveClass('memori-stat-card--plain')
    expect(screen.getByText('-4%')).toHaveClass('memori-stat-card__delta--down')
  })

  it('lays cards out in a grid with a custom min width', () => {
    const { container } = render(
      <StatCard.Grid minItemWidth="10rem">
        <StatCard
          label="A"
          value="1"
        />
      </StatCard.Grid>,
    )
    expect(container.firstChild).toHaveClass('memori-stat-card-grid')
    expect(
      (container.firstChild as HTMLElement).style.getPropertyValue(
        '--memori-stat-card-min',
      ),
    ).toBe('10rem')
  })
})
