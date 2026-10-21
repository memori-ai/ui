import React from 'react'
import cx from 'classnames'
import { Info } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Tooltip, type TooltipPlacement } from '../Tooltip'
import './styles.css'

export interface InfoHintProps {
  /** Explanation shown in the tooltip. */
  content: React.ReactNode

  /**
   * Accessible name of the trigger, e.g. "Informazioni su Occorrenze".
   * Defaults to `common.moreInfo`.
   */
  ariaLabel?: string

  /** Icon size in px. @default 14 */
  size?: number

  /** Tooltip placement. @default 'top' */
  placement?: TooltipPlacement

  /** Additional CSS class name for the trigger button. */
  className?: string
}

/**
 * Small "i" button next to a label or column header that explains it in a
 * tooltip. Keyboard focusable; the tooltip opens on hover and focus.
 */
export const InfoHint = React.forwardRef<HTMLButtonElement, InfoHintProps>(
  ({ content, ariaLabel, size = 14, placement = 'top', className }, ref) => {
    const { t } = useTranslation()

    return (
      <Tooltip
        title={content}
        placement={placement}
      >
        <button
          ref={ref}
          type="button"
          className={cx('memori-info-hint', className)}
          aria-label={
            ariaLabel ??
            t('common.moreInfo', { defaultValue: 'More information' })
          }
        >
          <Info
            size={size}
            aria-hidden
          />
        </button>
      </Tooltip>
    )
  },
)

InfoHint.displayName = 'InfoHint'

export default InfoHint
