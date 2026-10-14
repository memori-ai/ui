import * as React from 'react'
import cx from 'classnames'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import './styles.css'

export type TagColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'

export interface TagProps {
  /**
   * Semantic color of the tag.
   * @default 'default'
   */
  color?: TagColor

  /**
   * Icon rendered before the content.
   */
  icon?: React.ReactNode

  /**
   * If `true`, renders a close button after the content.
   */
  closable?: boolean

  /**
   * Callback fired when the close button is clicked.
   * The tag does not hide itself: remove it from your data.
   */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void

  /**
   * Accessible label for the close button.
   * Defaults to the translated `table.removeFilter` string (“Remove {{label}}”).
   */
  closeLabel?: string

  /**
   * Tag size.
   * @default 'md'
   */
  size?: 'sm' | 'md'

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties

  /**
   * Tag content.
   */
  children?: React.ReactNode
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      color = 'default',
      icon,
      closable = false,
      onClose,
      closeLabel,
      size = 'md',
      className,
      style,
      children,
    },
    ref,
  ) => {
    const { t } = useTranslation()
    const textLabel =
      typeof children === 'string' || typeof children === 'number'
        ? String(children)
        : ''
    const resolvedCloseLabel =
      closeLabel ?? t('table.removeFilter', { label: textLabel }).trim()

    return (
      <span
        ref={ref}
        className={cx(
          'memori-tag',
          `memori-tag--${color}`,
          `memori-tag--${size}`,
          className,
        )}
        style={style}
      >
        {icon != null && (
          <span
            className="memori-tag__icon"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        {children != null && (
          <span className="memori-tag__content">{children}</span>
        )}
        {closable && (
          <button
            type="button"
            className="memori-tag__close"
            aria-label={resolvedCloseLabel}
            onClick={onClose}
          >
            <X
              className="memori-tag__close-icon"
              aria-hidden="true"
            />
          </button>
        )}
      </span>
    )
  },
)

Tag.displayName = 'Tag'

export default Tag
