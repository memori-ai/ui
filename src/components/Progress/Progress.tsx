import React from 'react'
import { Progress as BaseProgress } from '@base-ui/react/progress'
import cx from 'classnames'
import './styles.css'

export interface ProgressProps {
  /**
   * Completion percentage. Clamped to 0–100.
   */
  value: number

  /**
   * Visual shape of the indicator.
   * @default 'line'
   */
  variant?: 'line' | 'circle'

  /**
   * Semantic color of the indicator.
   * @default 'default'
   */
  status?: 'default' | 'success' | 'error'

  /**
   * If `true`, renders the rounded percentage ("NN%").
   * @default false
   */
  showValue?: boolean

  /**
   * Size of the indicator. A number (px diameter) is only honored by
   * `variant="circle"`; `line` falls back to `md`.
   * @default 'md'
   */
  size?: 'sm' | 'md' | number

  /**
   * Accessible name of the progress bar.
   */
  'aria-label'?: string

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties
}

const CIRCLE_VIEWBOX = 100
const CIRCLE_STROKE = 8
const CIRCLE_RADIUS = (CIRCLE_VIEWBOX - CIRCLE_STROKE) / 2
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS

const clamp = (value: number) =>
  Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0

const getValueText = (_formatted: string | null, value: number | null) =>
  `${Math.round(value ?? 0)}%`

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      variant = 'line',
      status = 'default',
      showValue = false,
      size = 'md',
      'aria-label': ariaLabel,
      className,
      style,
    },
    ref,
  ) => {
    const clamped = clamp(value)
    const valueText = `${Math.round(clamped)}%`
    const sizeToken = typeof size === 'number' ? undefined : size

    if (variant === 'circle') {
      const circleStyle: React.CSSProperties | undefined =
        typeof size === 'number'
          ? {
              width: size,
              height: size,
              fontSize: Math.max(10, Math.round(size * 0.22)),
              ...style,
            }
          : style

      return (
        <div
          ref={ref}
          role="progressbar"
          aria-label={ariaLabel}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={clamped}
          aria-valuetext={valueText}
          className={cx(
            'memori-progress',
            'memori-progress--circle',
            sizeToken && `memori-progress--${sizeToken}`,
            `memori-progress--${status}`,
            className,
          )}
          style={circleStyle}
        >
          <svg
            className="memori-progress__svg"
            viewBox={`0 0 ${CIRCLE_VIEWBOX} ${CIRCLE_VIEWBOX}`}
            aria-hidden="true"
            focusable="false"
          >
            <circle
              className="memori-progress__circle-track"
              cx={CIRCLE_VIEWBOX / 2}
              cy={CIRCLE_VIEWBOX / 2}
              r={CIRCLE_RADIUS}
              strokeWidth={CIRCLE_STROKE}
              fill="none"
            />
            <circle
              className="memori-progress__circle-indicator"
              cx={CIRCLE_VIEWBOX / 2}
              cy={CIRCLE_VIEWBOX / 2}
              r={CIRCLE_RADIUS}
              strokeWidth={CIRCLE_STROKE}
              fill="none"
              strokeDasharray={CIRCLE_CIRCUMFERENCE}
              strokeDashoffset={CIRCLE_CIRCUMFERENCE * (1 - clamped / 100)}
            />
          </svg>
          {showValue && (
            <span className="memori-progress__value">{valueText}</span>
          )}
        </div>
      )
    }

    return (
      <BaseProgress.Root
        ref={ref}
        value={clamped}
        min={0}
        max={100}
        getAriaValueText={getValueText}
        aria-label={ariaLabel}
        className={cx(
          'memori-progress',
          'memori-progress--line',
          `memori-progress--${sizeToken ?? 'md'}`,
          `memori-progress--${status}`,
          className,
        )}
        style={style}
      >
        <BaseProgress.Track className="memori-progress__track">
          <BaseProgress.Indicator className="memori-progress__indicator" />
        </BaseProgress.Track>
        {showValue && (
          <span className="memori-progress__value">{valueText}</span>
        )}
      </BaseProgress.Root>
    )
  },
)

Progress.displayName = 'Progress'

export default Progress
