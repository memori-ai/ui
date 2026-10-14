import React, { forwardRef } from 'react'
import cx from 'classnames'
import Spin from '../Spin'
import './styles.css'

/* ----------------------------------------------------------------------------
 * List
 * -------------------------------------------------------------------------- */

export interface ListProps extends Omit<
  React.HTMLAttributes<HTMLUListElement>,
  'children'
> {
  /**
   * If `true`, renders `loadingSlot` instead of the items.
   * @default false
   */
  loading?: boolean

  /**
   * Content shown while `loading`. Defaults to the library `Spin`.
   */
  loadingSlot?: React.ReactNode

  /**
   * Content shown when there are no items and the list is not loading.
   * No default text: pass a translated string or an empty-state component.
   */
  empty?: React.ReactNode

  /**
   * If `true`, draws an outer border around the list.
   * @default false
   */
  bordered?: boolean

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties

  /**
   * List items, usually `List.Item`.
   */
  children?: React.ReactNode
}

const ListRoot = forwardRef<HTMLUListElement, ListProps>(
  (
    {
      loading = false,
      loadingSlot,
      empty,
      bordered = false,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const hasItems = React.Children.toArray(children).length > 0
    const isEmpty = !loading && !hasItems

    let content: React.ReactNode = children
    if (loading) {
      content = (
        <li className="memori-list__state memori-list__state--loading">
          {loadingSlot ?? (
            <Spin
              spinning
              className="memori-list__spin"
            />
          )}
        </li>
      )
    } else if (isEmpty) {
      content =
        empty != null ? (
          <li className="memori-list__state memori-list__state--empty">
            {empty}
          </li>
        ) : null
    }

    return (
      <ul
        ref={ref}
        role="list"
        aria-busy={loading || undefined}
        className={cx(
          'memori-list',
          bordered && 'memori-list--bordered',
          loading && 'memori-list--loading',
          isEmpty && 'memori-list--empty',
          className,
        )}
        style={style}
        {...props}
      >
        {content}
      </ul>
    )
  },
)

ListRoot.displayName = 'List'

/* ----------------------------------------------------------------------------
 * List Item
 * -------------------------------------------------------------------------- */

export interface ListItemProps extends Omit<
  React.LiHTMLAttributes<HTMLLIElement>,
  'prefix' | 'children'
> {
  /**
   * Leading slot (icon, avatar, checkbox).
   */
  prefix?: React.ReactNode

  /**
   * Trailing non-interactive slot (meta, timestamp, badge).
   */
  suffix?: React.ReactNode

  /**
   * Trailing interactive slot (buttons, dropdown). Rendered after `suffix`.
   */
  actions?: React.ReactNode

  /**
   * Main content of the item.
   */
  children?: React.ReactNode

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ prefix, suffix, actions, children, className, style, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cx('memori-list__item', className)}
        style={style}
        {...props}
      >
        {prefix != null && (
          <div className="memori-list__item-prefix">{prefix}</div>
        )}
        <div className="memori-list__item-content">{children}</div>
        {suffix != null && (
          <div className="memori-list__item-suffix">{suffix}</div>
        )}
        {actions != null && (
          <div className="memori-list__item-actions">{actions}</div>
        )}
      </li>
    )
  },
)

ListItem.displayName = 'List.Item'

/* ----------------------------------------------------------------------------
 * Compound component export
 * -------------------------------------------------------------------------- */

export const List = Object.assign(ListRoot, {
  Item: ListItem,
})

export { ListItem }

export default List
