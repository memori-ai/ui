import React from 'react'
import cx from 'classnames'
import './styles.css'

export interface DocumentCardProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'title'
> {
  /**
   * Document / file display name
   */
  title: React.ReactNode

  /**
   * Type badge (e.g. PDF, DOCX) shown bottom-right
   */
  badge: React.ReactNode

  /**
   * Optional secondary meta line (e.g. file size)
   */
  meta?: React.ReactNode | null

  /**
   * Optional leading icon in the header
   */
  icon?: React.ReactNode

  /**
   * Additional CSS class name
   */
  className?: string
}

export const DocumentCard = React.forwardRef<HTMLDivElement, DocumentCardProps>(
  ({ title, badge, meta, icon, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cx('memori-document-card', className)}
        {...rest}
      >
        <div className="memori-document-card__header">
          {icon != null && (
            <div
              className="memori-document-card__icon"
              aria-hidden
            >
              {icon}
            </div>
          )}
          <div className="memori-document-card__text">
            <div className="memori-document-card__title">{title}</div>
            {meta != null && meta !== '' && (
              <div className="memori-document-card__meta">{meta}</div>
            )}
          </div>
        </div>
        <span className="memori-document-card__badge">{badge}</span>
      </div>
    )
  },
)

DocumentCard.displayName = 'DocumentCard'

export default DocumentCard
