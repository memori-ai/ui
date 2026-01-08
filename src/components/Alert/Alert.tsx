import type { FC, JSX } from 'react'
import React from 'react'
import { Transition } from '@headlessui/react'
import cx from 'classnames'
import { X as Close } from 'lucide-react'
import Button from '../Button'
import { useTranslation } from 'react-i18next'

export type AlertType = 'success' | 'warning' | 'error' | 'info'

import './styles.css'

export interface Props {
  open?: boolean
  onClose: (value: boolean) => void
  className?: string
  title?: string | JSX.Element | React.ReactNode
  description?: string | JSX.Element | React.ReactNode
  children?: JSX.Element | React.ReactNode
  type?: AlertType
  icon?: JSX.Element | React.ReactNode
  closable?: boolean
  duration?: number | null
  action?: JSX.Element | React.ReactNode
  width?: string
}

const Alert: FC<Props> = ({
  open = false,
  onClose,
  className,
  title,
  description,
  children,
  type = 'info',
  icon,
  closable = true,
  duration = null,
  action,
  width = '400px',
}: Props) => {
  const { t } = useTranslation()

  // Auto-close functionality
  React.useEffect(() => {
    if (duration && open) {
      const timer = setTimeout(() => {
        onClose(false)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, open, onClose])

  const getTypeStyles = (type: AlertType) => {
    switch (type) {
      case 'success':
        return 'memori-alert--success'
      case 'warning':
        return 'memori-alert--warning'
      case 'error':
        return 'memori-alert--error'
      default:
        return 'memori-alert--info'
    }
  }

  return (
    <Transition
      show={open}
      as={React.Fragment}
      appear
    >
      <div
        className={cx('memori-alert', getTypeStyles(type), className)}
        style={{ '--memori-alert-width': width } as React.CSSProperties}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <div className="memori-alert__container">
            {icon && <div className="memori-alert__icon">{icon}</div>}

            <div className="memori-alert__content">
              {title && <div className="memori-alert__title">{title}</div>}
              {description && (
                <div className="memori-alert__description">{description}</div>
              )}
              {children}
            </div>

            <div className="memori-alert__actions">
              {action && <div className="memori-alert__action">{action}</div>}
              {closable && (
                <Button
                  title={t('close') || 'Close alert'}
                  variant="ghost"
                  shape="circle"
                  icon={<Close />}
                  aria-label={t('close') || 'Close alert'}
                  onClick={() => onClose(false)}
                  className="memori-alert__close"
                />
              )}
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  )
}

export default Alert
