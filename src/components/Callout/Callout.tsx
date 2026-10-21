import React from 'react'
import cx from 'classnames'
import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-react'
import './styles.css'

export type CalloutSeverity = 'info' | 'success' | 'warning' | 'error'

export interface CalloutProps {
  /**
   * Tone of the message: sets color, default icon and ARIA role.
   * @default 'info'
   */
  severity?: CalloutSeverity

  /** Short bold heading. */
  title?: React.ReactNode

  /** Message body. */
  children?: React.ReactNode

  /** Action aligned to the end (e.g. a Button). */
  action?: React.ReactNode

  /**
   * Leading icon. Defaults to the severity icon; `null` hides it.
   */
  icon?: React.ReactNode | null

  /** Additional CSS class name for the root element. */
  className?: string

  /** Inline styles for the root element. */
  style?: React.CSSProperties
}

const ICONS = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
} as const

/**
 * Inline, persistent status message inside the page flow. Use `Alert` for
 * transient toasts.
 */
export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  (
    { severity = 'info', title, children, action, icon, className, style },
    ref,
  ) => {
    const Icon = ICONS[severity]
    const leading =
      icon === null
        ? null
        : (icon ?? (
            <Icon
              size={18}
              aria-hidden
            />
          ))

    return (
      <div
        ref={ref}
        role={severity === 'error' ? 'alert' : 'note'}
        className={cx(
          'memori-callout',
          `memori-callout--${severity}`,
          className,
        )}
        style={style}
      >
        {leading != null && (
          <span
            className="memori-callout__icon"
            aria-hidden
          >
            {leading}
          </span>
        )}
        <div className="memori-callout__body">
          {title != null && <p className="memori-callout__title">{title}</p>}
          {children != null && (
            <div className="memori-callout__text">{children}</div>
          )}
        </div>
        {action != null && (
          <div className="memori-callout__action">{action}</div>
        )}
      </div>
    )
  },
)

Callout.displayName = 'Callout'

export default Callout
