import React from 'react'
import cx from 'classnames'
import './styles.css'

export type SkeletonVariant = 'text' | 'rect' | 'circle'

export interface SkeletonProps {
  /**
   * Shape of the placeholder.
   * @default 'text'
   */
  variant?: SkeletonVariant

  /**
   * Width of the placeholder. Numbers are pixels.
   * For `circle`, defaults to `height` when only that is set.
   */
  width?: number | string

  /**
   * Height of the placeholder (per line for `text`). Numbers are pixels.
   * For `circle`, defaults to `width` when only that is set.
   */
  height?: number | string

  /**
   * Number of lines for the `text` variant. The last line is shorter when > 1.
   * @default 1
   */
  lines?: number

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties
}

const toCssSize = (value: number | string | undefined) =>
  typeof value === 'number' ? `${value}px` : value

export const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ variant = 'text', width, height, lines = 1, className, style }, ref) => {
    const w = toCssSize(width)
    const h = toCssSize(height)

    if (variant === 'text') {
      const count = Math.max(1, Math.floor(lines))
      return (
        <span
          ref={ref}
          aria-hidden="true"
          className={cx('memori-skeleton', 'memori-skeleton--text', className)}
          style={{ width: w, ...style }}
        >
          {Array.from({ length: count }, (_, i) => (
            <span
              key={i}
              className={cx(
                'memori-skeleton__shape',
                'memori-skeleton__line',
                count > 1 && i === count - 1 && 'memori-skeleton__line--last',
              )}
              style={h != null ? { height: h } : undefined}
            />
          ))}
        </span>
      )
    }

    const shapeWidth = variant === 'circle' ? (w ?? h) : w
    const shapeHeight = variant === 'circle' ? (h ?? w) : h

    return (
      <span
        ref={ref}
        aria-hidden="true"
        className={cx(
          'memori-skeleton',
          'memori-skeleton__shape',
          `memori-skeleton--${variant}`,
          className,
        )}
        style={{ width: shapeWidth, height: shapeHeight, ...style }}
      />
    )
  },
)

Skeleton.displayName = 'Skeleton'

export default Skeleton
