import React, { useId } from 'react'
import cx from 'classnames'
import './styles.css'

/* ----------------------------------------------------------------------------
 * Root
 * -------------------------------------------------------------------------- */

export interface NavListProps {
  /** `NavList.Group` elements. */
  children?: React.ReactNode

  /** Additional CSS class name for the root element. */
  className?: string

  /** Inline styles for the root element. */
  style?: React.CSSProperties
}

const NavListRoot = React.forwardRef<HTMLDivElement, NavListProps>(
  ({ children, className, style }, ref) => (
    <div
      ref={ref}
      className={cx('memori-nav-list', className)}
      style={style}
    >
      {children}
    </div>
  ),
)

NavListRoot.displayName = 'NavList'

/* ----------------------------------------------------------------------------
 * Group
 * -------------------------------------------------------------------------- */

export interface NavListGroupProps {
  /** Small heading above the items. Omit for an unlabeled group. */
  label?: React.ReactNode

  /** `NavList.Item` elements. */
  children?: React.ReactNode

  /** Additional CSS class name for the group. */
  className?: string
}

export function NavListGroup({
  label,
  children,
  className,
}: NavListGroupProps) {
  const labelId = useId()
  return (
    <div
      className={cx('memori-nav-list__group', className)}
      role={label != null ? 'group' : undefined}
      aria-labelledby={label != null ? labelId : undefined}
    >
      {label != null && (
        <p
          id={labelId}
          className="memori-nav-list__group-label"
        >
          {label}
        </p>
      )}
      <ul className="memori-nav-list__items">{children}</ul>
    </div>
  )
}

NavListGroup.displayName = 'NavList.Group'

/* ----------------------------------------------------------------------------
 * Item
 * -------------------------------------------------------------------------- */

export interface NavListItemProps {
  /** Item text. */
  children: React.ReactNode

  /** Link target. Renders `<a>`; without it the item is a `<button>`. */
  href?: string

  /** Passed to the `<a>` when `href` is set (e.g. `_blank` for external links). */
  target?: React.HTMLAttributeAnchorTarget

  /** Passed to the `<a>` when `href` is set (e.g. `noopener noreferrer`). */
  rel?: string

  /** Click handler (client-side routing or local selection). */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void

  /** Leading icon or avatar. Decorative. */
  icon?: React.ReactNode

  /** Trailing content: count, badge, shortcut. */
  trailing?: React.ReactNode

  /**
   * Current page / selected item. Sets `aria-current` (`page` for links,
   * `true` for buttons).
   */
  active?: boolean

  /** Disables the item (buttons only). */
  disabled?: boolean

  /** Additional CSS class name for the link/button. */
  className?: string

  /**
   * Native tooltip. Useful when the text is visually hidden (collapsed
   * sidebar); the text itself stays the accessible name.
   */
  title?: string
}

export function NavListItem({
  children,
  href,
  target,
  rel,
  onClick,
  icon,
  trailing,
  active = false,
  disabled = false,
  className,
  title,
}: NavListItemProps) {
  const itemClass = cx(
    'memori-nav-list__item',
    active && 'memori-nav-list__item--active',
    className,
  )
  const content = (
    <>
      {icon != null && (
        <span
          className="memori-nav-list__icon"
          aria-hidden
        >
          {icon}
        </span>
      )}
      <span className="memori-nav-list__text">{children}</span>
      {trailing != null && (
        <span className="memori-nav-list__trailing">{trailing}</span>
      )}
    </>
  )

  return (
    <li>
      {href != null ? (
        <a
          href={href}
          target={target}
          rel={rel}
          className={itemClass}
          title={title}
          aria-current={active ? 'page' : undefined}
          onClick={onClick}
        >
          {content}
        </a>
      ) : (
        <button
          type="button"
          className={itemClass}
          title={title}
          aria-current={active ? 'true' : undefined}
          disabled={disabled}
          onClick={onClick}
        >
          {content}
        </button>
      )}
    </li>
  )
}

NavListItem.displayName = 'NavList.Item'

/**
 * Vertical list of navigation or selection items, optionally grouped under
 * small headings. Used for app sidebars and in-page section menus.
 */
export const NavList = Object.assign(NavListRoot, {
  Group: NavListGroup,
  Item: NavListItem,
})

export default NavList
