import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Button from '../Button'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import { truncateMessage, MAX_MSG_CHARS, MAX_MSG_WORDS } from './helpers'
import { Tooltip } from '../Tooltip'

import './styles.css'

export interface Props {
  rows?: number
  className?: string
  innerClassName?: string
  btnClassName?: string
  lineHeightMultiplier?: number
  defaultExpanded?: boolean
  expandSymbol?: (lang: string) => React.ReactNode
  collapseSymbol?: (lang: string) => React.ReactNode
  children: React.ReactNode
  mode?: 'rows' | 'characters'
}

const Expandable = ({
  rows,
  className,
  innerClassName,
  btnClassName,
  lineHeightMultiplier = 1.2,
  defaultExpanded = false,
  expandSymbol,
  collapseSymbol,
  children,
  mode = 'rows',
}: Props) => {
  const { i18n, t } = useTranslation()
  const lang = i18n.language
  const [expanded, setExpanded] = useState(defaultExpanded)
  const [needsExpanding, setNeedsExpanding] = useState(false)
  const [rowHeight, setRowHeight] = useState(16)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      if (mode === 'rows') {
        let height = ref.current.getBoundingClientRect().height
        let computedStyle = getComputedStyle(ref.current)
        let elLineHeight = computedStyle.lineHeight
        let lineHeight =
          elLineHeight === 'normal' || !elLineHeight?.length
            ? lineHeightMultiplier * parseInt(computedStyle.fontSize, 10)
            : parseInt(elLineHeight, 10)

        setRowHeight(lineHeight)
        if (height && rows && height > rows * lineHeight) {
          setNeedsExpanding(true)
        }
      } else if (mode === 'characters') {
        // Get text content length
        const textContent = ref.current.textContent || ''

        if (
          textContent.length > MAX_MSG_CHARS ||
          textContent.split(' ').length > MAX_MSG_WORDS
        ) {
          setNeedsExpanding(true)
        }
      }
    }
  }, [rows, mode, ref.current])

  const renderContent = () => {
    if (mode === 'characters' && !expanded && needsExpanding) {
      const content = ref.current?.textContent || ''
      let truncatedContent = truncateMessage(content)

      return truncatedContent
    }

    return children
  }

  const renderToggle = (isExpanded: boolean) => {
    const customSymbol = isExpanded
      ? collapseSymbol?.(lang)
      : expandSymbol?.(lang)
    const label =
      customSymbol ??
      (isExpanded
        ? t('expandable.collapse', { defaultValue: 'Collapse' })
        : t('expandable.expand', { defaultValue: 'Expand' }))

    const button = (
      <Button
        variant="ghost"
        size="xs"
        className={cx('memori-expandable__button', btnClassName)}
        icon={
          customSymbol == null ? (
            <ChevronDown
              className={cx('memori-expandable__chevron', {
                'memori-expandable__chevron--up': isExpanded,
              })}
              aria-hidden
            />
          ) : undefined
        }
        iconPosition="right"
        aria-expanded={isExpanded}
        onClick={() => setExpanded(!isExpanded)}
      >
        {label}
      </Button>
    )

    if (isExpanded) return button

    return (
      <Tooltip content={t('expandable.expand', { defaultValue: 'Expand' })}>
        {button}
      </Tooltip>
    )
  }

  return (
    <div
      className={cx(
        'memori-expandable',
        needsExpanding &&
          (expanded
            ? 'memori-expandable--expanded'
            : 'memori-expandable--collapsed'),
        className,
      )}
    >
      <div
        ref={ref}
        className={cx('memori-expandable__inner', innerClassName)}
        style={{
          maxHeight:
            expanded || !needsExpanding || mode === 'characters'
              ? '9999px'
              : `${rowHeight * (rows || 1)}px`,
        }}
      >
        {renderContent()}
      </div>
      {needsExpanding && renderToggle(expanded)}
    </div>
  )
}

export default Expandable
