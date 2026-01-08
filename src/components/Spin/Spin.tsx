import type { FC, JSX } from 'react'
import React from 'react'
import cx from 'classnames'
import { Loader2 as Loading } from 'lucide-react'

import './styles.css'

export interface Props {
  spinning?: boolean
  className?: string
  primary?: boolean
  children?: JSX.Element | React.ReactNode
}

const Spin = ({
  spinning = false,
  primary = false,
  className,
  children,
}: Props) => (
  <div
    className={cx('memori-spin', className, {
      'memori-spin--spinning': spinning,
      'memori-spin--primary': primary,
    })}
  >
    {children}
  </div>
)

export default Spin
