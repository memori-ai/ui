import React from 'react'
import cx from 'classnames'
import { ChevronDown } from 'lucide-react'
import './styles.css'

export interface DetailsProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  summary: React.ReactNode
}

export const Details = React.forwardRef<HTMLDetailsElement, DetailsProps>(
  ({ className, summary, children, ...props }, ref) => {
    return (
      <details
        ref={ref}
        className={cx('memori-details', className)}
        {...props}
      >
        <summary>
          {summary}
          <ChevronDown className="memori-details__icon" />
        </summary>
        {children}
      </details>
    )
  },
)

Details.displayName = 'Details'
