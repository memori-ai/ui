import * as React from 'react'
import cx from 'classnames'
import './styles.css'

export type BadgeStatus =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'processing'

export interface BadgeProps {
  /**
   * Number shown in the badge. `0` is hidden unless `showZero` is set.
   */
  count?: number

  /**
   * Maximum count shown; higher values render as `{max}+`.
   * @default 99
   */
  max?: number

  /**
   * If `true`, renders a small dot instead of the count.
   */
  dot?: boolean

  /**
   * If `true`, a `count` of `0` is shown.
   * @default false
   */
  showZero?: boolean

  /**
   * Standalone status indicator: a colored dot with optional `text`.
   * When set, `count` / `dot` / `children` are ignored.
   */
  status?: BadgeStatus

  /**
   * Text shown next to the status dot. Only used with `status`.
   */
  text?: React.ReactNode

  /**
   * Element the badge is anchored to (top-right corner).
   */
  children?: React.ReactNode

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties

  /**
   * Accessible label for the indicator (e.g. “3 unread messages”).
   * Required for meaning when using `dot` or `status` without `text`.
   */
  'aria-label'?: string
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      count,
      max = 99,
      dot = false,
      showZero = false,
      status,
      text,
      children,
      className,
      style,
      'aria-label': ariaLabel,
    },
    ref,
  ) => {
    const isDotOnly = dot || status != null
    const labelProps = ariaLabel
      ? { role: 'img', 'aria-label': ariaLabel }
      : { 'aria-hidden': isDotOnly || undefined }

    if (status) {
      return (
        <span
          ref={ref}
          className={cx(
            'memori-badge',
            'memori-badge--status',
            `memori-badge--status-${status}`,
            className,
          )}
          style={style}
        >
          <span
            className="memori-badge__status-dot"
            {...labelProps}
          />
          {text != null && (
            <span className="memori-badge__status-text">{text}</span>
          )}
        </span>
      )
    }

    const isZero = count === 0
    const hidden = isZero && !showZero
    const showDot = dot && !hidden
    const showCount = !dot && count !== undefined && !hidden
    const hasChildren = children != null

    return (
      <span
        ref={ref}
        className={cx(
          'memori-badge',
          hasChildren ? 'memori-badge--anchored' : 'memori-badge--standalone',
          className,
        )}
        style={style}
      >
        {children}
        {showDot && (
          <span
            className="memori-badge__dot"
            {...labelProps}
          />
        )}
        {showCount && (
          <span
            className="memori-badge__count"
            {...labelProps}
          >
            {count > max ? `${max}+` : count}
          </span>
        )}
      </span>
    )
  },
)

Badge.displayName = 'Badge'

export default Badge
