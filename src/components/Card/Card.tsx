import React from 'react'
import cx from 'classnames'
import Spin from '../Spin/Spin'
import styles from './styles.module.css'

export interface CardProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'title'
> {
  /**
   * The content of the card
   */
  children?: React.ReactNode

  /**
   * Additional CSS class name
   */
  className?: string

  /**
   * Inline styles
   */
  style?: React.CSSProperties

  /**
   * Visual variant of the card
   * @default 'elevated'
   */
  variant?: 'elevated' | 'outlined'

  /**
   * Controls the padding inside the card body
   * @default 'md'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg'

  /**
   * Polymorphic component prop: allows rendering the card as a different HTML element
   * @default 'div'
   */
  component?: React.ElementType

  /**
   * If true, the card will be focusable and react to keyboard events (adds tabIndex=0)
   * automatically if onClick is provided.
   */
  focusable?: boolean

  /**
   * Card title
   */
  title?: React.ReactNode

  /**
   * Card description
   */
  description?: React.ReactNode

  /**
   * Card cover image (rendered at the top, full width)
   */
  cover?: React.ReactNode

  /**
   * Whether to show a loading spinner
   */
  loading?: boolean

  /**
   * Use hover styles (lift effect)
   */
  hoverable?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      style,
      variant = 'elevated',
      padding = 'md',
      component: Component = 'div',
      focusable,
      onClick,
      title,
      description,
      cover,
      loading = false,
      hoverable = false,
      ...rest
    },
    ref,
  ) => {
    // Determine if the card should be interactive/focusable
    const isInteractive = !!onClick || focusable === true || hoverable === true
    const tabIndex = isInteractive || focusable ? 0 : undefined

    const rootClassName = cx(
      styles.card,
      styles[variant],
      isInteractive && styles.interactive,
      className,
    )

    const bodyClassName = cx(styles.body, styles[`padding-${padding}`])

    return (
      <Component
        ref={ref}
        className={rootClassName}
        style={style}
        tabIndex={tabIndex}
        onClick={onClick}
        {...rest}
      >
        {cover && <div className={styles.cover}>{cover}</div>}

        <div className={bodyClassName}>
          <Spin spinning={loading}>
            {(title || description) && (
              <div className={styles.header}>
                {title && <div className={styles.title}>{title}</div>}
                {description && (
                  <div className={styles.description}>{description}</div>
                )}
              </div>
            )}
            {children}
          </Spin>
        </div>
      </Component>
    )
  },
)

Card.displayName = 'Card'

export default Card
