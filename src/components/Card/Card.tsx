import type { FC, JSX } from 'react'
import React from 'react'
import cx from 'classnames'
import Spin from '../Spin/Spin'

import './Card.css'

export interface Props {
  children?: React.ReactNode
  loading?: boolean
  className?: string
  title?: string
  description?: string
  cover?: JSX.Element | React.ReactNode | string
  hoverable?: boolean
  onClick?: () => void
}

const Card: FC<Props> = ({
  loading = false,
  className,
  title,
  description,
  cover,
  hoverable = false,
  children,
  onClick,
}) => (
  <div
    onClick={onClick}
    onKeyDown={e => {
      if ((e.key === 'Enter' || e.key === 'Space') && onClick) {
        onClick()
      }
    }}
    role={onClick ? 'button' : undefined}
    tabIndex={onClick ? 0 : undefined}
    className={cx('memori-card', className, {
      'memori-card--loading': loading,
      'memori-card--with-cover': cover,
      'memori-card--hoverable': hoverable,
      'memori-card--pointer': !!onClick,
    })}
  >
    <Spin spinning={loading}>
      {cover && <div className="memori-card--cover">{cover}</div>}
      <div className="memori-card--content">
        {title && <h3 className="memori-card--title">{title}</h3>}
        {description && (
          <p className="memori-card--description">{description}</p>
        )}
        <div className="memori-card--children">{children}</div>
      </div>
    </Spin>
  </div>
)

export default Card
