import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { Check, Copy, Eye, EyeOff } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button'
import { Input } from '../Input'
import './styles.css'

export interface CopyFieldProps {
  /** Value shown (read-only) and copied. */
  value: string

  /**
   * Masks the value as a password with a show/hide toggle. Copy still copies
   * the real value.
   * @default false
   */
  secret?: boolean

  /**
   * Show the "Copy" text next to the icon. When `false` the button is
   * icon-only (named by `copyLabel`).
   * @default false
   */
  showCopyText?: boolean

  /** Accessible name / text of the copy button. Defaults to `common.copy`. */
  copyLabel?: string

  /** Feedback after copying. Defaults to `common.copied`. */
  copiedLabel?: string

  /** Called after a successful copy (e.g. to show a toast). */
  onCopy?: (value: string) => void

  /** Field size. @default 'md' */
  size?: 'sm' | 'md' | 'lg'

  /** Disables copy and reveal. */
  disabled?: boolean

  /** `id` of the input, for an external `<label htmlFor>`. */
  id?: string

  /**
   * Accessible name of the input when it has no visible label (e.g. outside a
   * `FieldGroup`).
   */
  ariaLabel?: string

  /** Additional CSS class name for the root element. */
  className?: string

  /** Inline styles for the root element. */
  style?: React.CSSProperties
}

const RESET_MS = 2000

/**
 * Read-only value with a copy button (IDs, tokens, URLs, secrets). Confirms the
 * copy inline and announces it to screen readers.
 */
export const CopyField = React.forwardRef<HTMLDivElement, CopyFieldProps>(
  (
    {
      value,
      secret = false,
      showCopyText = false,
      copyLabel,
      copiedLabel,
      onCopy,
      size = 'md',
      disabled = false,
      id,
      ariaLabel,
      className,
      style,
    },
    ref,
  ) => {
    const { t } = useTranslation()
    const [copied, setCopied] = useState(false)
    const [revealed, setRevealed] = useState(false)
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

    useEffect(() => () => clearTimeout(timer.current), [])

    const copyText = copyLabel ?? t('common.copy', { defaultValue: 'Copy' })
    const copiedText =
      copiedLabel ?? t('common.copied', { defaultValue: 'Copied' })

    const handleCopy = async () => {
      try {
        await navigator.clipboard?.writeText(value)
      } catch {
        return
      }
      setCopied(true)
      onCopy?.(value)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), RESET_MS)
    }

    const iconSize = size === 'sm' ? 14 : 16

    return (
      <div
        ref={ref}
        className={cx('memori-copy-field', className)}
        style={style}
      >
        <Input
          id={id}
          aria-label={ariaLabel}
          readOnly
          fullWidth
          size={size}
          disabled={disabled}
          type={secret && !revealed ? 'password' : 'text'}
          value={value}
          className="memori-copy-field__input"
        />
        {secret && (
          <Button
            type="button"
            variant="outline"
            size={size}
            disabled={disabled}
            ariaLabel={
              revealed
                ? t('common.hide', { defaultValue: 'Hide' })
                : t('common.show', { defaultValue: 'Show' })
            }
            aria-pressed={revealed}
            icon={
              revealed ? (
                <EyeOff
                  size={iconSize}
                  aria-hidden
                />
              ) : (
                <Eye
                  size={iconSize}
                  aria-hidden
                />
              )
            }
            onClick={() => setRevealed(r => !r)}
          />
        )}
        <Button
          type="button"
          variant="outline"
          size={size}
          disabled={disabled}
          ariaLabel={showCopyText ? undefined : copyText}
          className={cx(copied && 'memori-copy-field__button--copied')}
          icon={
            copied ? (
              <Check
                size={iconSize}
                aria-hidden
              />
            ) : (
              <Copy
                size={iconSize}
                aria-hidden
              />
            )
          }
          onClick={() => void handleCopy()}
        >
          {showCopyText ? (copied ? copiedText : copyText) : undefined}
        </Button>
        <span
          className="memori-copy-field__status"
          role="status"
          aria-live="polite"
        >
          {copied ? copiedText : ''}
        </span>
      </div>
    )
  },
)

CopyField.displayName = 'CopyField'

export default CopyField
