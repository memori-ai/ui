import React, { useEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { Check, Copy } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button'
import './styles.css'

export interface CodeBlockProps {
  /** Source shown verbatim and copied. */
  code: string

  /** Short label in the header, e.g. "tsx", "HTML", "cURL". */
  language?: React.ReactNode

  /**
   * Shows a copy button in the header.
   * @default true
   */
  copyable?: boolean

  /** Called after a successful copy (e.g. to show a toast). */
  onCopy?: (code: string) => void

  /** Copy button text. Defaults to `common.copy`. */
  copyLabel?: string

  /** Feedback after copying. Defaults to `common.copied`. */
  copiedLabel?: string

  /**
   * Wrap long lines instead of scrolling horizontally.
   * @default false
   */
  wrap?: boolean

  /** Max height before the code scrolls vertically (CSS length). */
  maxHeight?: string | number

  /** Additional CSS class name for the root element. */
  className?: string

  /** Inline styles for the root element. */
  style?: React.CSSProperties
}

const RESET_MS = 2000

/**
 * Monospace snippet (embed code, API calls, JSON responses) with an optional
 * language label and copy button.
 */
export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      code,
      language,
      copyable = true,
      onCopy,
      copyLabel,
      copiedLabel,
      wrap = false,
      maxHeight,
      className,
      style,
    },
    ref,
  ) => {
    const { t } = useTranslation()
    const [copied, setCopied] = useState(false)
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

    useEffect(() => () => clearTimeout(timer.current), [])

    const handleCopy = async () => {
      try {
        await navigator.clipboard?.writeText(code)
      } catch {
        return
      }
      setCopied(true)
      onCopy?.(code)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), RESET_MS)
    }

    const hasHeader = language != null || copyable

    return (
      <div
        ref={ref}
        className={cx(
          'memori-code-block',
          wrap && 'memori-code-block--wrap',
          className,
        )}
        style={style}
      >
        {hasHeader && (
          <div className="memori-code-block__header">
            <span className="memori-code-block__language">{language}</span>
            {copyable && (
              <Button
                type="button"
                variant="ghost"
                size="xs"
                icon={
                  copied ? (
                    <Check
                      size={14}
                      aria-hidden
                    />
                  ) : (
                    <Copy
                      size={14}
                      aria-hidden
                    />
                  )
                }
                onClick={() => void handleCopy()}
              >
                <span aria-live="polite">
                  {copied
                    ? (copiedLabel ??
                      t('common.copied', { defaultValue: 'Copied' }))
                    : (copyLabel ?? t('common.copy', { defaultValue: 'Copy' }))}
                </span>
              </Button>
            )}
          </div>
        )}
        <pre
          className="memori-code-block__pre"
          style={maxHeight != null ? { maxHeight } : undefined}
          tabIndex={0}
        >
          <code>{code}</code>
        </pre>
      </div>
    )
  },
)

CodeBlock.displayName = 'CodeBlock'

export default CodeBlock
