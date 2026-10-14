import React from 'react'
import cx from 'classnames'
import { Inbox } from 'lucide-react'
import './styles.css'

export interface EmptyProps {
  /**
   * Illustration above the description. Decorative (`aria-hidden`).
   * Defaults to a neutral `Inbox` icon; pass `null` to render no icon.
   */
  icon?: React.ReactNode

  /**
   * Message explaining the empty state. No default text: pass the translated
   * string. When omitted, the paragraph is not rendered.
   */
  description?: React.ReactNode

  /** Actions rendered below the description (e.g. a "Create" button). */
  extra?: React.ReactNode

  /** Additional CSS class name for the root element. */
  className?: string

  /** Inline styles for the root element. */
  style?: React.CSSProperties
}

export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ icon, description, extra, className, style }, ref) => {
    const displayIcon = icon === undefined ? <Inbox /> : icon

    return (
      <div
        ref={ref}
        className={cx('memori-empty', className)}
        style={style}
      >
        {displayIcon != null && (
          <div
            className="memori-empty__icon"
            aria-hidden="true"
          >
            {displayIcon}
          </div>
        )}
        {description != null && (
          <p className="memori-empty__description">{description}</p>
        )}
        {extra != null && <div className="memori-empty__extra">{extra}</div>}
      </div>
    )
  },
)

Empty.displayName = 'Empty'

export default Empty
