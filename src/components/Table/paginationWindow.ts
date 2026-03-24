/**
 * Windowed pagination items for detailed table footers.
 *
 * - **Leading block (wide layout):** pages **1–4** show `1 2 3 4 5 … N`; page **5** uses windowed
 *   so page **6** can appear.
 * - **Trailing block:** for **`current >= N - 3`**, show `1 … N-4 N-3 N-2 N-1 N`; page **`N - 4`**
 *   uses the anchor layout so **`N - 5`** (or **`N - 4`**) neighbours stay visible.
 * - Otherwise: first/last anchors + current ± 1, with ellipsis when 2+ pages are skipped.
 */
export type PaginationWindowItem = number | '...'

const DETAILED_SLOT_COUNT = 7

/** Pages in the leading / trailing fixed blocks (1…5 and N-4…N). */
export const PAGINATION_LEADING_BLOCK_SIZE = 5

function rangeInclusive(from: number, to: number): number[] {
  return Array.from({ length: to - from + 1 }, (_, i) => from + i)
}

export type GetPaginationWindowItemsOptions = {
  /**
   * When `true` (default), on pages **1–4** with more than five total pages, prefer
   * `1 2 3 4 5 … N` on wide viewports.
   */
  enableLeadingBlock?: boolean
  /**
   * When `true` (default), for `current >= N - 3`, prefer
   * `1 … N-4 N-3 N-2 N-1 N`. Page `N - 4` uses the anchor layout instead (mirror of page 5).
   * Defaults to `enableLeadingBlock` when omitted.
   */
  enableTrailingBlock?: boolean
}

/**
 * Leading strip: `1…5,…,N` when a gap of 2+ pages exists after page 5; else consecutive numbers.
 */
function getLeadingWindowItems(totalPages: number): PaginationWindowItem[] {
  const n = totalPages
  const k = PAGINATION_LEADING_BLOCK_SIZE
  const blockEnd = k
  const tailCount = n - blockEnd
  if (tailCount <= 0) {
    return rangeInclusive(1, n)
  }
  if (tailCount === 1) {
    return rangeInclusive(1, n)
  }
  const skippedBetweenEndAndLast = n - blockEnd - 1
  if (skippedBetweenEndAndLast === 1) {
    return rangeInclusive(1, n)
  }
  return [...rangeInclusive(1, blockEnd), '...', n]
}

/**
 * Trailing strip: `1,…,N-4…N` when a gap of 2+ pages exists before the last block; else consecutive.
 */
function getTrailingWindowItems(totalPages: number): PaginationWindowItem[] {
  const n = totalPages
  const k = PAGINATION_LEADING_BLOCK_SIZE
  const first = n - k + 1
  const headBeforeBlock = first - 1

  if (headBeforeBlock <= 0) {
    return rangeInclusive(1, n)
  }
  if (headBeforeBlock === 1) {
    return rangeInclusive(1, n)
  }
  const skippedBetweenOneAndBlock = first - 2
  if (skippedBetweenOneAndBlock === 1) {
    return rangeInclusive(1, n)
  }
  if (skippedBetweenOneAndBlock >= 2) {
    return [1, '...', ...rangeInclusive(first, n)]
  }
  return rangeInclusive(1, n)
}

function buildAnchorItems(
  currentPage: number,
  totalPages: number,
): PaginationWindowItem[] {
  const c = Math.min(Math.max(1, currentPage), totalPages)
  const anchorSet = new Set([1, totalPages, c - 1, c, c + 1])
  const sorted = [...anchorSet]
    .filter(p => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b)

  const out: PaginationWindowItem[] = []
  for (let i = 0; i < sorted.length; i++) {
    const cur = sorted[i]!
    if (i > 0) {
      const prev = sorted[i - 1]!
      const gap = cur - prev - 1
      if (gap === 1) {
        out.push(prev + 1)
      } else if (gap >= 2) {
        out.push('...')
      }
    }
    out.push(cur)
  }
  return out
}

/**
 * Computes visible page tokens (numbers and ellipsis) for detailed pagination.
 *
 * @param currentPage — 1-based current page
 * @param totalPages — total page count (0 means empty result)
 */
export function getPaginationWindowItems(
  currentPage: number,
  totalPages: number,
  options: GetPaginationWindowItemsOptions = {},
): PaginationWindowItem[] {
  const enableLeadingBlock = options.enableLeadingBlock ?? true
  const enableTrailingBlock = options.enableTrailingBlock ?? enableLeadingBlock

  if (totalPages < 1) {
    return []
  }
  if (totalPages === 1) {
    return [1]
  }

  const c = Math.min(Math.max(1, currentPage), totalPages)
  const k = PAGINATION_LEADING_BLOCK_SIZE
  const n = totalPages

  if (enableLeadingBlock && n > k && c < k) {
    return getLeadingWindowItems(n)
  }

  /** Full trailing strip for `current >= N - 3`; page `N - 4` uses anchors (see `buildAnchorItems`). */
  if (enableTrailingBlock && n > k && c >= n - 3) {
    return getTrailingWindowItems(n)
  }

  return buildAnchorItems(c, n)
}

/** Target number of slots in the detailed page row (numbers + ellipsis); used for layout padding. */
export const PAGINATION_DETAILED_SLOT_COUNT = DETAILED_SLOT_COUNT

/**
 * How many invisible spacer slots to add before / after the items so the row
 * keeps a stable width (see {@link PAGINATION_DETAILED_SLOT_COUNT}).
 */
export function getDetailedPaginationPadding(
  itemCount: number,
  targetSlots: number = DETAILED_SLOT_COUNT,
): { before: number; after: number } {
  if (itemCount >= targetSlots) {
    return { before: 0, after: 0 }
  }
  const deficit = targetSlots - itemCount
  const before = Math.floor(deficit / 2)
  return { before, after: deficit - before }
}
