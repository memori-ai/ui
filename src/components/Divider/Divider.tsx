import React from 'react'
import cx from 'classnames'
import './styles.css'

export interface DividerProps {
  /**
   * Direction of the line. Vertical dividers sit inline between items
   * (e.g. inside a flex row) and stretch to the row height.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'

  /**
   * Content centered between two lines. Only rendered when horizontal.
   */
  label?: React.ReactNode

  /** Additional CSS class name for the root element. */
  className?: string

  /** Inline styles for the root element. */
  style?: React.CSSProperties
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', label, className, style }, ref) => {
    const hasLabel = orientation === 'horizontal' && label != null

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        aria-label={
          hasLabel && (typeof label === 'string' || typeof label === 'number')
            ? String(label)
            : undefined
        }
        className={cx(
          'memori-divider',
          `memori-divider--${orientation}`,
          hasLabel && 'memori-divider--with-label',
          className,
        )}
        style={style}
      >
        {hasLabel && <span className="memori-divider__label">{label}</span>}
      </div>
    )
  },
)

Divider.displayName = 'Divider'

export default Divider
