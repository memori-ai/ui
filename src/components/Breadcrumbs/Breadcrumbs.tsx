import React from 'react'
import cx from 'classnames'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import './styles.css'

export interface BreadcrumbItem {
  /** Visible text of the step. */
  label: React.ReactNode

  /** Link target. Rendered as `<a>`; omit for non-navigable steps. */
  href?: string

  /**
   * Click handler (client-side routing). Without `href` the step renders as a
   * link-styled button.
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void

  /** Leading visual (icon, small avatar). Decorative. */
  icon?: React.ReactNode
}

export interface BreadcrumbsProps {
  /** Path from the root to the current page; the last item is the current page. */
  items: BreadcrumbItem[]

  /** Separator between steps. @default chevron */
  separator?: React.ReactNode

  /** Accessible name of the `<nav>` landmark. Defaults to `common.breadcrumb`. */
  ariaLabel?: string

  /** Additional CSS class name for the `<nav>`. */
  className?: string

  /** Inline styles for the `<nav>`. */
  style?: React.CSSProperties
}

/**
 * Shows where the current page sits in the hierarchy and links back to its
 * ancestors. The last item is marked `aria-current="page"`.
 */
export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, separator, ariaLabel, className, style }, ref) => {
    const { t } = useTranslation()
    const sep = separator ?? (
      <ChevronRight
        size={14}
        aria-hidden
      />
    )

    return (
      <nav
        ref={ref}
        aria-label={
          ariaLabel ?? t('common.breadcrumb', { defaultValue: 'Breadcrumb' })
        }
        className={cx('memori-breadcrumbs', className)}
        style={style}
      >
        <ol className="memori-breadcrumbs__list">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1
            const content = (
              <>
                {item.icon != null && (
                  <span
                    className="memori-breadcrumbs__icon"
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                )}
                {item.label}
              </>
            )

            let node: React.ReactNode
            if (isCurrent) {
              node = (
                <span
                  className="memori-breadcrumbs__current"
                  aria-current="page"
                >
                  {content}
                </span>
              )
            } else if (item.href != null) {
              node = (
                <a
                  href={item.href}
                  className="memori-breadcrumbs__link"
                  onClick={item.onClick}
                >
                  {content}
                </a>
              )
            } else if (item.onClick) {
              node = (
                <button
                  type="button"
                  className="memori-breadcrumbs__link"
                  onClick={item.onClick}
                >
                  {content}
                </button>
              )
            } else {
              node = <span className="memori-breadcrumbs__step">{content}</span>
            }

            return (
              <li
                key={index}
                className="memori-breadcrumbs__item"
              >
                {node}
                {!isCurrent && (
                  <span
                    className="memori-breadcrumbs__separator"
                    aria-hidden
                  >
                    {sep}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  },
)

Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs
