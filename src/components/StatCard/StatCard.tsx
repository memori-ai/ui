import React from 'react'
import cx from 'classnames'
import { TrendingDown, TrendingUp } from 'lucide-react'
import './styles.css'

export type StatCardTrend = 'up' | 'down' | 'neutral'

export interface StatCardProps {
  /** What is measured, e.g. "Messaggi". */
  label: React.ReactNode

  /** The figure, already formatted (e.g. "12.4k"). */
  value: React.ReactNode

  /** Comparison text, e.g. "+8% vs periodo prec.". */
  delta?: React.ReactNode

  /**
   * Direction of `delta`: colors it and adds an arrow. Pair with a `delta`
   * whose text says the direction too; color alone is not enough.
   * @default 'neutral'
   */
  trend?: StatCardTrend

  /** Leading icon next to the label. Decorative. */
  icon?: React.ReactNode

  /**
   * `outlined`: bordered surface. `plain`: no chrome, for use inside another
   * surface (drawer, card).
   * @default 'outlined'
   */
  variant?: 'outlined' | 'plain'

  /** Additional CSS class name for the root element. */
  className?: string

  /** Inline styles for the root element. */
  style?: React.CSSProperties
}

const StatCardRoot = React.forwardRef<HTMLDListElement, StatCardProps>(
  (
    {
      label,
      value,
      delta,
      trend = 'neutral',
      icon,
      variant = 'outlined',
      className,
      style,
    },
    ref,
  ) => (
    <dl
      ref={ref}
      className={cx(
        'memori-stat-card',
        `memori-stat-card--${variant}`,
        className,
      )}
      style={style}
    >
      <dt className="memori-stat-card__label">
        {icon != null && (
          <span
            className="memori-stat-card__icon"
            aria-hidden
          >
            {icon}
          </span>
        )}
        {label}
      </dt>
      <dd className="memori-stat-card__value">{value}</dd>
      {delta != null && (
        <dd
          className={cx(
            'memori-stat-card__delta',
            `memori-stat-card__delta--${trend}`,
          )}
        >
          {trend === 'up' && (
            <TrendingUp
              size={14}
              aria-hidden
            />
          )}
          {trend === 'down' && (
            <TrendingDown
              size={14}
              aria-hidden
            />
          )}
          {delta}
        </dd>
      )}
    </dl>
  ),
)

StatCardRoot.displayName = 'StatCard'

export interface StatCardGridProps {
  /** `StatCard` elements. */
  children?: React.ReactNode

  /** Minimum card width before wrapping (CSS length). @default '12rem' */
  minItemWidth?: string

  /** Additional CSS class name. */
  className?: string
}

export function StatCardGrid({
  children,
  minItemWidth = '12rem',
  className,
}: StatCardGridProps) {
  return (
    <div
      className={cx('memori-stat-card-grid', className)}
      style={{ '--memori-stat-card-min': minItemWidth } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

StatCardGrid.displayName = 'StatCard.Grid'

/**
 * A single key figure with its label and optional comparison. Use
 * `StatCard.Grid` to lay several out in a responsive row.
 */
export const StatCard = Object.assign(StatCardRoot, { Grid: StatCardGrid })

export default StatCard
