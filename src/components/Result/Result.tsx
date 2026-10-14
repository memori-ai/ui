import React from 'react'
import cx from 'classnames'
import {
  CircleCheck,
  CircleX,
  Info,
  SearchX,
  ServerCrash,
  ShieldX,
  TriangleAlert,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import './styles.css'

export type ResultStatus =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | '404'
  | '403'
  | '500'

export interface ResultProps {
  /**
   * Outcome the screen communicates. Drives the default icon and its color.
   * @default 'info'
   */
  status?: ResultStatus

  /**
   * Main message, rendered as an `<h2>`.
   */
  title: React.ReactNode

  /**
   * Secondary copy rendered below the title.
   */
  description?: React.ReactNode

  /**
   * Overrides the default status icon.
   */
  icon?: React.ReactNode

  /**
   * Actions slot (buttons, links) rendered below the description.
   */
  extra?: React.ReactNode

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties
}

const STATUS_ICONS: Record<ResultStatus, LucideIcon> = {
  success: CircleCheck,
  error: CircleX,
  warning: TriangleAlert,
  info: Info,
  '404': SearchX,
  '403': ShieldX,
  '500': ServerCrash,
}

export const Result = React.forwardRef<HTMLDivElement, ResultProps>(
  (
    { status = 'info', title, description, icon, extra, className, style },
    ref,
  ) => {
    const DefaultIcon = STATUS_ICONS[status]

    return (
      <div
        ref={ref}
        className={cx(
          'memori-result',
          `memori-result--status-${status}`,
          className,
        )}
        style={style}
      >
        <div
          className="memori-result__icon"
          aria-hidden="true"
        >
          {icon ?? (
            <DefaultIcon
              className="memori-result__icon-svg"
              size={64}
              strokeWidth={1.5}
            />
          )}
        </div>
        <h2 className="memori-result__title">{title}</h2>
        {description != null && (
          <div className="memori-result__description">{description}</div>
        )}
        {extra != null && <div className="memori-result__extra">{extra}</div>}
      </div>
    )
  },
)

Result.displayName = 'Result'

export default Result
