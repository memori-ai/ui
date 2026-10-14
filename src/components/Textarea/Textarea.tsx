import * as React from 'react'
import { Field as BaseField } from '@base-ui/react/field'
import type { FieldControlProps } from '@base-ui/react/field'
import cx from 'classnames'
import './styles.css'

export interface TextareaAutosizeOptions {
  /** Minimum visible rows. */
  minRows?: number
  /** Maximum visible rows; beyond this the textarea scrolls. */
  maxRows?: number
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Grow the height with the content. Pass an object to bound it in rows.
   * @default false
   */
  autosize?: boolean | TextareaAutosizeOptions
  /**
   * Invalid state: error border/background and `aria-invalid`.
   * Inside `Field.Root invalid` the same style applies automatically.
   */
  error?: boolean
  /**
   * Additional CSS class name
   */
  className?: string
}

const toPx = (value: string) => Number.parseFloat(value) || 0

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      autosize = false,
      error = false,
      className,
      disabled,
      rows,
      onChange,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref,
  ) => {
    const innerRef = React.useRef<HTMLTextAreaElement | null>(null)
    const setRefs = React.useCallback(
      (node: HTMLTextAreaElement | null) => {
        innerRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref)
          (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current =
            node
      },
      [ref],
    )

    const isAutosize = autosize !== false
    const minRows = typeof autosize === 'object' ? autosize.minRows : undefined
    const maxRows = typeof autosize === 'object' ? autosize.maxRows : undefined

    const resize = React.useCallback(() => {
      const el = innerRef.current
      if (!el || !isAutosize) return

      const style = window.getComputedStyle(el)
      const lineHeight =
        toPx(style.lineHeight) || toPx(style.fontSize) * 1.5 || 0
      const padding = toPx(style.paddingTop) + toPx(style.paddingBottom)
      const border = toPx(style.borderTopWidth) + toPx(style.borderBottomWidth)
      const rowsToPx = (count: number) => count * lineHeight + padding + border

      el.style.height = 'auto'
      const contentHeight = el.scrollHeight + border
      const min = minRows != null ? rowsToPx(minRows) : 0
      const max = maxRows != null ? rowsToPx(maxRows) : Infinity

      el.style.height = `${Math.min(Math.max(contentHeight, min), max)}px`
      el.style.overflowY = contentHeight > max ? 'auto' : 'hidden'
    }, [isAutosize, minRows, maxRows])

    React.useLayoutEffect(() => {
      resize()
    }, [resize, props.value])

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(event)
      resize()
    }

    const isInvalid = error || ariaInvalid === true || ariaInvalid === 'true'

    const controlProps = {
      ...props,
      rows: rows ?? minRows,
      disabled,
      onChange: handleChange,
      'aria-invalid': isInvalid || undefined,
      className: cx(
        'memori-textarea',
        isInvalid && 'memori-textarea--error',
        disabled && 'memori-textarea--disabled',
        isAutosize && 'memori-textarea--autosize',
        className,
      ),
    } as unknown as FieldControlProps

    return (
      <BaseField.Control
        ref={setRefs as unknown as React.Ref<HTMLInputElement>}
        render={<textarea />}
        {...controlProps}
      />
    )
  },
)

Textarea.displayName = 'Textarea'

export default Textarea
