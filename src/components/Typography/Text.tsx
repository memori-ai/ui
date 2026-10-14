import React from 'react'
import cx from 'classnames'
import type {
  TypographyColor,
  TypographySize,
  TypographyWeight,
} from './Heading'
import './styles.css'

export interface TextProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  'color'
> {
  /**
   * Element rendered in the DOM.
   * @default 'span'
   */
  as?: 'span' | 'p' | 'div' | 'strong' | 'small' | 'label'

  /**
   * Associates the text with a form control. Only meaningful with `as="label"`.
   */
  htmlFor?: string

  /**
   * Font size, mapped to the `--memori-text-size-*` scale.
   * @default 'sm'
   */
  size?: TypographySize

  /**
   * Font weight, mapped to the `--memori-text-weight-*` scale.
   * @default 'normal'
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

  /** Text content. */
  children?: React.ReactNode
}

/**
 * Body copy, captions and inline text. For in-content headings use `Heading`;
 * for the page title use `Section`.
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as = 'span',
      size = 'sm',
      weight = 'normal',
      color = 'default',
      ellipsis = false,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = as as React.ElementType

    return (
      <Component
        ref={ref}
        className={cx(
          'memori-text',
          `memori-text--size-${size}`,
          `memori-text--weight-${weight}`,
          color !== 'default' && `memori-text--color-${color}`,
          ellipsis && 'memori-text--ellipsis',
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

Text.displayName = 'Text'

export default Text
