import React from 'react'
import cx from 'classnames'
import { Loader2 } from 'lucide-react'
import './styles.css'

export interface SpinProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the spinner is visible
   * @default false
   */
  spinning?: boolean

  /**
   * If `true`, uses the primary color for the spinner
   * @default false
   */
  primary?: boolean

  /**
   * The content to display behind the spinner overlay
   */
  children?: React.ReactNode

  /**
   * Additional CSS class name for the root element
   */
  className?: string

  /**
   * Additional CSS class name for the spinner overlay
   */
  spinnerClassName?: string

  /**
   * Inline styles for the root element
   */
  style?: React.CSSProperties

  /**
   * Inline styles for the spinner overlay
   */
  spinnerStyle?: React.CSSProperties

  /**
   * Size of the spinner icon
   * @default 'default'
   */
  size?: 'sm' | 'md' | 'lg' | 'default'

  /**
   * Custom spinner icon (replaces the default Loader2 icon)
   */
  indicator?: React.ReactNode

  /**
   * Tip text displayed below the spinner
   */
  tip?: React.ReactNode
}

export const Spin = React.forwardRef<HTMLDivElement, SpinProps>(
  (
    {
      spinning = false,
      primary = false,
      children,
      className,
      spinnerClassName,
      style,
      spinnerStyle,
      size = 'default',
      indicator,
      tip,
      ...props
    },
    ref,
  ) => {
    const spinnerIcon = indicator || (
      <Loader2
        className={cx('memori-spin__icon', {
          'memori-spin__icon--primary': primary,
          'memori-spin__icon--sm': size === 'sm',
          'memori-spin__icon--md': size === 'md',
          'memori-spin__icon--lg': size === 'lg',
        })}
        aria-hidden="true"
      />
    )

    return (
      <div
        ref={ref}
        className={cx(
          'memori-spin',
          {
            'memori-spin--spinning': spinning,
            'memori-spin--primary': primary,
          },
          className,
        )}
        style={style}
        {...props}
      >
        {children}
        {spinning && (
          <div
            className={cx('memori-spin__overlay', spinnerClassName)}
            style={spinnerStyle}
            role="status"
            aria-live="polite"
            aria-label="Loading"
          >
            <div className="memori-spin__container">
              {spinnerIcon}
              {tip && <div className="memori-spin__tip">{tip}</div>}
            </div>
          </div>
        )}
      </div>
    )
  },
)

Spin.displayName = 'Spin'

export default Spin
