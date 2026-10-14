import React from 'react'
import cx from 'classnames'
import './styles.css'

export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type TypographyWeight = 'normal' | 'medium' | 'semibold' | 'bold'
export type TypographyColor = 'default' | 'muted' | 'danger'

export interface HeadingProps extends Omit<
  React.HTMLAttributes<HTMLHeadingElement>,
  'color'
> {
  /**
   * Heading level rendered in the DOM. Pick it for document outline, not for looks
   * (use `size` for that).
   * @default 'h2'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  /**
   * Font size, mapped to the `--memori-text-size-*` scale.
   * @default 'lg'
   */
  size?: TypographySize

  /**
   * Font weight, mapped to the `--memori-text-weight-*` scale.
   * @default 'semibold'
   */
  weight?: TypographyWeight

  /**
   * Semantic text color. `muted` matches secondary copy (Section description).
   * @default 'default'
   */
  color?: TypographyColor

  /**
   * If `true`, the text is clamped to a single line with a trailing ellipsis.
   * @default false
   */
  ellipsis?: boolean

  /** Additional CSS class name for the root element. */
  className?: string

  /** Inline styles for the root element. */
  style?: React.CSSProperties

  /** Heading content. */
  children?: React.ReactNode
}

/**
 * In-content heading (card titles, sub-sections, panels).
 *
 * Not the page/module title: dashboard pages get their title from `Section`
 * (which renders the `h1`). Use `Heading` below it, typically as `h2`/`h3`.
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as: Component = 'h2',
      size = 'lg',
      weight = 'semibold',
      color = 'default',
      ellipsis = false,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cx(
          'memori-heading',
          `memori-heading--size-${size}`,
          `memori-heading--weight-${weight}`,
          color !== 'default' && `memori-heading--color-${color}`,
          ellipsis && 'memori-heading--ellipsis',
          className,
        )}
        style={style}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

Heading.displayName = 'Heading'

export default Heading
