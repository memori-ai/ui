import { describe, expect, it } from 'vitest'
import {
  getDetailedPaginationPadding,
  getPaginationWindowItems,
  PAGINATION_DETAILED_SLOT_COUNT,
  PAGINATION_LEADING_BLOCK_SIZE,
} from './paginationWindow'

describe('getPaginationWindowItems', () => {
  it('returns empty for totalPages < 1', () => {
    expect(getPaginationWindowItems(1, 0)).toEqual([])
  })

  it('returns [1] for a single page', () => {
    expect(getPaginationWindowItems(1, 1)).toEqual([1])
  })

  it('shows all pages when total is small', () => {
    expect(getPaginationWindowItems(3, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it('leading block: pages 1–4 then ellipsis then last when enough pages', () => {
    expect(getPaginationWindowItems(1, 10)).toEqual([1, 2, 3, 4, 5, '...', 10])
    expect(getPaginationWindowItems(4, 10)).toEqual([1, 2, 3, 4, 5, '...', 10])
  })

  it('page 5 uses windowed anchors so following pages are visible', () => {
    expect(getPaginationWindowItems(5, 10)).toEqual([
      1,
      '...',
      4,
      5,
      6,
      '...',
      10,
    ])
  })

  it('leading block: shows every page when only one page sits between 5 and last', () => {
    expect(getPaginationWindowItems(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it('trailing block: last three pages show the last five page numbers', () => {
    expect(getPaginationWindowItems(8, 10)).toEqual([1, '...', 6, 7, 8, 9, 10])
    expect(getPaginationWindowItems(10, 10)).toEqual([1, '...', 6, 7, 8, 9, 10])
  })

  it('trailing transition: page N-4 uses anchors so neighbours around the last block are visible', () => {
    expect(getPaginationWindowItems(6, 10)).toEqual([
      1,
      '...',
      5,
      6,
      7,
      '...',
      10,
    ])
  })

  it('shows a single skipped page as a number, not ellipsis', () => {
    expect(getPaginationWindowItems(2, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it('disables leading block when opted out', () => {
    expect(
      getPaginationWindowItems(1, 10, { enableLeadingBlock: false }),
    ).toEqual([1, 2, '...', 10])
  })

  it('disables trailing block when opted out', () => {
    expect(
      getPaginationWindowItems(10, 10, { enableTrailingBlock: false }),
    ).toEqual([1, '...', 9, 10])
  })

  it('leading block size constant is 5', () => {
    expect(PAGINATION_LEADING_BLOCK_SIZE).toBe(5)
  })
})

describe('getDetailedPaginationPadding', () => {
  it('pads to target slot count', () => {
    const items = getPaginationWindowItems(2, 5)
    expect(items.length).toBeLessThan(PAGINATION_DETAILED_SLOT_COUNT)
    const { before, after } = getDetailedPaginationPadding(items.length)
    expect(before + after + items.length).toBe(PAGINATION_DETAILED_SLOT_COUNT)
  })

  it('does not pad when at or over target', () => {
    const { before, after } = getDetailedPaginationPadding(10, 7)
    expect(before).toBe(0)
    expect(after).toBe(0)
  })
})
