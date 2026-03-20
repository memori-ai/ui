import type { FC, JSX } from 'react'
import React from 'react'
import cx from 'classnames'

import './styles.css'

export interface Props {
  content: string | JSX.Element | React.ReactNode
  className?: string
  align?:
    | 'left'
    | 'right'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
  disabled?: boolean
  children: React.ReactNode
  visible?: boolean
}

const Tooltip: FC<Props> = ({
  content,
  className,
  align = 'right',
  disabled = false,
  visible = false,
  children,
}) => (
  <div
    className={cx(
      'memori-tooltip',
      `memori-tooltip--align-${align}`,
      className,
      {
        'memori-tooltip--disabled': disabled,
        'memori-tooltip--visible': visible,
      },
    )}
  >
    <div className="memori-tooltip--content">
      <div className="memori-tooltip__surface">{content}</div>
    </div>
    <div className="memori-tooltip--trigger">{children}</div>
  </div>
)

export default Tooltip
