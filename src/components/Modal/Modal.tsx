import React from 'react'
import { Dialog } from '@base-ui/react/dialog'
import type { DialogRootProps } from '@base-ui/react/dialog'
import type { InteractionType } from '@base-ui/utils/useEnhancedClickHandler'
import cx from 'classnames'
import Spin from '../Spin/Spin'
import { X as Close } from 'lucide-react'
import styles from './styles.module.css'

export interface ModalProps extends Omit<
  DialogRootProps,
  'className' | 'style'
> {
  /**
   * Whether the modal is open
   * @default false
   */
  open?: boolean

  /**
   * Callback fired when the modal requests to close
   * @param open - The new open state
   */
  onOpenChange?: (open: boolean) => void

  /**
   * Modal title displayed at the top
   */
  title?: React.ReactNode

  /**
   * Modal description/subtitle displayed below the title
   */
  description?: React.ReactNode

  /**
   * Main content of the modal
   */
  children?: React.ReactNode

  /**
   * Footer content (typically action buttons)
   */
  footer?: React.ReactNode

  /**
   * Shows a loading spinner and disables interaction
   * @default false
   */
  loading?: boolean

  /**
   * Whether to show the close button
   * @default true
   */
  closable?: boolean

  /**
   * Whether clicking the backdrop should close the modal
   * @default true
   */
  closeOnOverlayClick?: boolean

  /**
   * Whether pressing Escape should close the modal
   * @default true
   */
  closeOnEsc?: boolean

  /**
   * Modal size variant
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'

  /**
   * Custom width (overrides size)
   * Applied on mobile and up
   */
  width?: string | number

  /**
   * Custom width for medium screens and up (≥768px)
   */
  widthMd?: string | number

  /**
   * Custom width for large screens and up (≥1024px)
   */
  widthLg?: string | number

  /**
   * Whether the modal is centered vertically and horizontally
   * @default true
   */
  centered?: boolean

  /**
   * Determines if the dialog enters a modal state when open
   * - `true`: user interaction is limited to just the dialog
   * - `false`: user interaction with the rest of the document is allowed
   * - `'trap-focus'`: focus is trapped but scroll and pointer interactions remain enabled
   * @default true
   */
  modal?: boolean | 'trap-focus'

  /**
   * Determines whether the dialog should close on outside clicks
   * Alias for `!closeOnOverlayClick`
   * @default false
   */
  disablePointerDismissal?: boolean

  /**
   * Element to focus when the dialog opens
   * - `false`: Do not move focus
   * - `true`: Move focus based on default behavior
   * - `RefObject`: Move focus to the ref element
   * - `function`: Called with interaction type, return element to focus
   */
  initialFocus?:
    | boolean
    | React.RefObject<HTMLElement | null>
    | ((openType: InteractionType) => boolean | HTMLElement | null | void)

  /**
   * Element to focus when the dialog closes
   * - `false`: Do not move focus
   * - `true`: Move focus based on default behavior (trigger or previously focused element)
   * - `RefObject`: Move focus to the ref element
   * - `function`: Called with interaction type, return element to focus
   */
  finalFocus?:
    | boolean
    | React.RefObject<HTMLElement | null>
    | ((closeType: InteractionType) => boolean | HTMLElement | null | void)

  /**
   * Callback fired after the modal has opened (after animations)
   */
  onAfterOpen?: () => void

  /**
   * Callback fired after the modal has closed (after animations)
   */
  onAfterClose?: () => void

  /**
   * Additional CSS class name for the root container
   */
  className?: string

  /**
   * Additional CSS class name for the backdrop
   */
  backdropClassName?: string

  /**
   * Additional CSS class name for the popup/content container
   */
  contentClassName?: string

  /**
   * Additional CSS class name for the title
   */
  titleClassName?: string

  /**
   * Additional CSS class name for the description
   */
  descriptionClassName?: string

  /**
   * Additional CSS class name for the footer
   */
  footerClassName?: string

  /**
   * Inline styles for the root container
   */
  style?: React.CSSProperties

  /**
   * Inline styles for the popup/content container
   */
  contentStyle?: React.CSSProperties

  /**
   * Unique identifier for the modal
   */
  id?: string

  /**
   * Test ID for testing frameworks
   */
  'data-testid'?: string

  /**
   * ARIA label for the modal (if title is not provided)
   */
  'aria-label'?: string

  /**
   * ID of the element that labels the modal
   * Automatically set by DialogTitle, but can be overridden
   */
  'aria-labelledby'?: string

  /**
   * ID of the element that describes the modal
   * Automatically set by DialogDescription, but can be overridden
   */
  'aria-describedby'?: string

  /**
   * Whether the modal should be animated
   * @default true
   */
  animated?: boolean

  /**
   * Custom close button component
   * If provided, replaces the default close button
   */
  closeButton?: React.ReactNode

  /**
   * Custom close icon
   * If provided, replaces the default X icon
   */
  closeIcon?: React.ReactNode
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open = false,
      onOpenChange,
      title,
      description,
      children,
      footer,
      loading = false,
      closable = true,
      closeOnOverlayClick = true,
      closeOnEsc = true,
      size = 'md',
      width,
      widthMd,
      widthLg,
      centered = true,
      modal = true,
      disablePointerDismissal,
      initialFocus,
      finalFocus,
      onAfterOpen,
      onAfterClose,
      className,
      backdropClassName,
      contentClassName,
      titleClassName,
      descriptionClassName,
      footerClassName,
      style: _style,
      contentStyle,
      id: _id,
      'data-testid': dataTestId,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      animated = true,
      closeButton,
      closeIcon,
      ...restProps
    },
    ref,
  ) => {
    // Handle open change with escape key support
    const handleOpenChange = React.useCallback(
      (newOpen: boolean, eventDetails?: any) => {
        // If closeOnEsc is false and we're closing via escape, prevent it
        // Base UI uses REASONS.escapeKey as the reason
        if (
          !newOpen &&
          !closeOnEsc &&
          eventDetails?.reason &&
          (eventDetails.reason === 'escapeKey' ||
            String(eventDetails.reason).includes('escape'))
        ) {
          return
        }
        onOpenChange?.(newOpen)
      },
      [onOpenChange, closeOnEsc],
    )

    // Handle open change complete (after animations)
    const handleOpenChangeComplete = React.useCallback(
      (newOpen: boolean) => {
        if (newOpen) {
          onAfterOpen?.()
        } else {
          onAfterClose?.()
        }
      },
      [onAfterOpen, onAfterClose],
    )

    // Determine disablePointerDismissal
    const shouldDisablePointerDismissal =
      disablePointerDismissal !== undefined
        ? disablePointerDismissal
        : !closeOnOverlayClick

    // Build content style with custom widths
    // When custom widths are provided, set max-width directly to override size variants
    // Otherwise, size variants will apply via CSS classes
    const popupStyle: React.CSSProperties = {
      ...(width && {
        maxWidth: typeof width === 'number' ? `${width}px` : width,
      }),
      ...(widthMd && {
        '--modal-width-md':
          typeof widthMd === 'number' ? `${widthMd}px` : widthMd,
      }),
      ...(widthLg && {
        '--modal-width-lg':
          typeof widthLg === 'number' ? `${widthLg}px` : widthLg,
      }),
      ...contentStyle,
    }

    // Build className for popup with size variant
    const sizeClass =
      size === 'sm'
        ? styles['popup--sm']
        : size === 'md'
          ? styles['popup--md']
          : size === 'lg'
            ? styles['popup--lg']
            : size === 'xl'
              ? styles['popup--xl']
              : size === 'full'
                ? styles['popup--full']
                : undefined

    const popupClassName = cx(styles.popup, sizeClass, contentClassName)

    return (
      <Dialog.Root
        open={open}
        onOpenChange={handleOpenChange}
        onOpenChangeComplete={handleOpenChangeComplete}
        modal={modal}
        disablePointerDismissal={shouldDisablePointerDismissal}
        {...restProps}
      >
        <Dialog.Portal>
          {animated && (
            <Dialog.Backdrop
              className={cx(styles.backdrop, backdropClassName)}
            />
          )}
          <Dialog.Viewport
            className={cx(
              styles.viewport,
              centered && styles.centered,
              className,
            )}
          >
            <Dialog.Popup
              ref={ref}
              initialFocus={initialFocus}
              finalFocus={finalFocus}
              className={popupClassName}
              style={popupStyle}
              data-testid={dataTestId}
              aria-label={!title ? ariaLabel : undefined}
              aria-labelledby={title ? undefined : ariaLabelledBy}
              aria-describedby={description ? undefined : ariaDescribedBy}
              {...(widthMd && { 'data-width-md': '' })}
              {...(widthLg && { 'data-width-lg': '' })}
            >
              {closable &&
                (closeButton ? (
                  <div className={styles.closeButton}>{closeButton}</div>
                ) : (
                  <Dialog.Close
                    className={styles.closeButton}
                    aria-label="Close modal"
                  >
                    {closeIcon || <Close />}
                  </Dialog.Close>
                ))}
              <Spin spinning={loading}>
                {title && (
                  <Dialog.Title className={cx(styles.title, titleClassName)}>
                    {title}
                  </Dialog.Title>
                )}
                {description && (
                  <Dialog.Description
                    className={cx(styles.description, descriptionClassName)}
                  >
                    {description}
                  </Dialog.Description>
                )}
                <div className={styles.content}>{children}</div>
                {footer && (
                  <div className={cx(styles.footer, footerClassName)}>
                    {footer}
                  </div>
                )}
              </Spin>
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>
    )
  },
)

Modal.displayName = 'Modal'

export default Modal
