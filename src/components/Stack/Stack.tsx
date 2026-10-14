import React from 'react'
import cx from 'classnames'
import './styles.css'

export type StackDirection = 'row' | 'column'
export type StackGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around'

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Main axis of the stack.
   * @default 'column'
   */
  direction?: StackDirection

  /**
   * Space between children, mapped to `--memori-spacing-*` tokens.
   * @default 'md'
   */
  gap?: StackGap

  /**
   * Cross-axis alignment of children (`align-items`).
   */
  align?: StackAlign

  /**
   * Main-axis distribution of children (`justify-content`).
   */
  justify?: StackJustify

  /**
   * If `true`, children wrap onto multiple lines.
   * @default false
   */
  wrap?: boolean

  /**
   * Element rendered as the root node.
   * @default 'div'
   */
  as?: React.ElementType

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties

  /**
   * Stack content.
   */
  children?: React.ReactNode
}

export const Stack = React.forwardRef<HTMLElement, StackProps>(
  (
    {
      direction = 'column',
      gap = 'md',
      align,
      justify,
      wrap = false,
      as: Component = 'div',
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
          'memori-stack',
          `memori-stack--${direction}`,
          `memori-stack--gap-${gap}`,
          align && `memori-stack--align-${align}`,
          justify && `memori-stack--justify-${justify}`,
          wrap && 'memori-stack--wrap',
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

Stack.displayName = 'Stack'

export default Stack
