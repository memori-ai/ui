import React, { useId, useRef, useState } from 'react'
import cx from 'classnames'
import { Upload } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button'
import './styles.css'

export interface FileDropzoneProps {
  /** Called with the picked or dropped files (already filtered by `accept`). */
  onFilesSelected: (files: File[]) => void

  /** Accepted types, as for `<input accept>` (e.g. ".pdf,.docx" or "image/*"). */
  accept?: string

  /** Allow more than one file. @default false */
  multiple?: boolean

  /**
   * `area`: dashed drop target (drag & drop + click).
   * `button`: compact button that opens the file picker.
   * @default 'area'
   */
  variant?: 'area' | 'button'

  /** Main text. Defaults to `common.dropzoneTitle` + `common.dropzoneBrowse`. */
  title?: React.ReactNode

  /** Secondary text: accepted formats, size limit… */
  description?: React.ReactNode

  /** Icon above the text (area) or in the button. @default Upload */
  icon?: React.ReactNode

  /** Button text (variant `button`). */
  buttonLabel?: React.ReactNode

  /** Disables picking and dropping. */
  disabled?: boolean

  /** `name` of the underlying file input. */
  name?: string

  /** Additional CSS class name for the root element. */
  className?: string

  /** Inline styles for the root element. */
  style?: React.CSSProperties
}

function matchesAccept(file: File, accept?: string) {
  if (!accept) return true
  const name = file.name.toLowerCase()
  const type = file.type.toLowerCase()
  return accept
    .split(',')
    .map(a => a.trim().toLowerCase())
    .filter(Boolean)
    .some(rule => {
      if (rule.startsWith('.')) return name.endsWith(rule)
      if (rule.endsWith('/*')) return type.startsWith(rule.slice(0, -1))
      return type === rule
    })
}

/**
 * File picker with drag & drop. Uses a real `<input type="file">`, so it works
 * with keyboard, screen readers and native forms.
 */
export const FileDropzone = React.forwardRef<HTMLDivElement, FileDropzoneProps>(
  (
    {
      onFilesSelected,
      accept,
      multiple = false,
      variant = 'area',
      title,
      description,
      icon,
      buttonLabel,
      disabled = false,
      name,
      className,
      style,
    },
    ref,
  ) => {
    const { t } = useTranslation()
    const inputRef = useRef<HTMLInputElement>(null)
    const inputId = useId()
    const descriptionId = useId()
    const [dragging, setDragging] = useState(false)

    const emit = (list: FileList | null) => {
      if (!list) return
      const files = Array.from(list).filter(f => matchesAccept(f, accept))
      const picked = multiple ? files : files.slice(0, 1)
      if (picked.length > 0) onFilesSelected(picked)
    }

    const input = (
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        name={name}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className="memori-file-dropzone__input"
        aria-describedby={description != null ? descriptionId : undefined}
        tabIndex={variant === 'button' ? -1 : undefined}
        aria-hidden={variant === 'button' ? true : undefined}
        onChange={e => {
          emit(e.target.files)
          e.target.value = ''
        }}
      />
    )

    if (variant === 'button') {
      return (
        <div
          ref={ref}
          className={cx(
            'memori-file-dropzone',
            'memori-file-dropzone--button',
            className,
          )}
          style={style}
        >
          {input}
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={disabled}
            icon={
              icon ?? (
                <Upload
                  size={16}
                  aria-hidden
                />
              )
            }
            onClick={() => inputRef.current?.click()}
          >
            {buttonLabel ??
              t('common.dropzoneBrowse', { defaultValue: 'browse' })}
          </Button>
          {description != null && (
            <span
              id={descriptionId}
              className="memori-file-dropzone__description"
            >
              {description}
            </span>
          )}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cx(
          'memori-file-dropzone',
          'memori-file-dropzone--area',
          dragging && 'memori-file-dropzone--dragging',
          disabled && 'memori-file-dropzone--disabled',
          className,
        )}
        style={style}
        onDragEnter={e => {
          if (disabled) return
          e.preventDefault()
          setDragging(true)
        }}
        onDragOver={e => {
          if (disabled) return
          e.preventDefault()
          e.dataTransfer.dropEffect = 'copy'
        }}
        onDragLeave={e => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setDragging(false)
          }
        }}
        onDrop={e => {
          if (disabled) return
          e.preventDefault()
          setDragging(false)
          emit(e.dataTransfer.files)
        }}
      >
        {input}
        <label
          htmlFor={inputId}
          className="memori-file-dropzone__label"
        >
          <span
            className="memori-file-dropzone__icon"
            aria-hidden
          >
            {icon ?? <Upload size={28} />}
          </span>
          <span className="memori-file-dropzone__title">
            {title ?? (
              <>
                {t('common.dropzoneTitle', {
                  defaultValue: 'Drag files here or',
                })}{' '}
                <span className="memori-file-dropzone__browse">
                  {t('common.dropzoneBrowse', { defaultValue: 'browse' })}
                </span>
              </>
            )}
          </span>
          {description != null && (
            <span
              id={descriptionId}
              className="memori-file-dropzone__description"
            >
              {description}
            </span>
          )}
        </label>
      </div>
    )
  },
)

FileDropzone.displayName = 'FileDropzone'

export default FileDropzone
