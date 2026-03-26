import React from 'react'
import cx from 'classnames'
import './Section.css'

export interface SectionProps {
  /** Page/module title. Required. */
  title: string

  /** Short description rendered below the title. Optional. */
  description?: string

  /** Icon rendered to the left of the title block. Accepts any React node. Optional. */
  icon?: React.ReactNode

  /** Right-side slot. Accepts any React node (button, button group, etc.). Optional. */
  actions?: React.ReactNode

  /** Breadcrumb slot rendered above the title. Optional — for nested pages. */
  breadcrumb?: React.ReactNode

  /** Additional className for the root element. */
  className?: string
}

export const Section: React.FC<SectionProps> = ({
  title,
  description,
  icon,
  actions,
  breadcrumb,
  className,
}) => {
  return (
    <header
      className={cx('memori-section', 'memori-view-enter-up', className)}
      data-testid="section"
    >
      {breadcrumb != null && (
        <div className="memori-section__breadcrumb">{breadcrumb}</div>
      )}
      <div className="memori-section__body">
        {icon != null && (
          <div
            className="memori-section__icon"
            aria-hidden="true"
          >
            {icon}
          </div>
        )}
        <div className="memori-section__content">
          <h1 className="memori-section__title">{title}</h1>
          {description != null && (
            <p className="memori-section__description">{description}</p>
          )}
        </div>
        {actions != null && (
          <div className="memori-section__actions">{actions}</div>
        )}
      </div>
    </header>
  )
}

Section.displayName = 'Section'

export default Section
