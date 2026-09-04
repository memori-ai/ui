import React from 'react'
import { Dialog } from '@base-ui/react/dialog'
import type { DialogRootProps } from '@base-ui/react/dialog'
import type { InteractionType } from '@base-ui/utils/useEnhancedClickHandler'
import cx from 'classnames'
import Spin from '../Spin/Spin'
import { X as Close } from 'lucide-react'
import { useStableId } from '../../hooks/useStableId'
import {
  useMemoriTheme,
  usePortalContainer,
} from '../../theme/MemoriUIProvider'
import type { Theme } from '../../theme/useTheme'
import './styles.css'

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
   * Callback fired when the modal is closed (convenience prop, matches Drawer).
   */
  onClose?: () => void

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
   * Stacking variant for overlays above Drawer / default Modal.
   * - `default`: z-index 1500
   * - `stacked` / `nested`: z-index 1600 (e.g. confirm over a drawer)
   * @default 'default'
   */
  stacking?: 'default' | 'stacked' | 'nested'

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

  /**
   * Container element used as the portal root. Defaults to the nearest
   * `PortalContainerProvider` value, then to `document.body`.
   */
  container?: HTMLElement | null

  /**
   * Theme stamped on the portal popup (as `data-theme`) so design tokens
   * resolve correctly regardless of where the portal mounts. Falls back to
   * the nearest `ThemeProvider` / `MemoriUIProvider` value.
   */
  theme?: Theme
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open = false,
      onOpenChange,
      onClose,
      title,
      description,
      children,
      footer,
      loading = false,
      closable = true,
      closeOnOverlayClick = true,
      closeOnEsc = true,
      size = 'md',
      stacking = 'default',
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
      container,
      theme,
      ...restProps
    },
    ref,
  ) => {
    const popupId = useStableId('memori-modal')
    const titleId = useStableId('memori-modal-title')
    const descriptionId = useStableId('memori-modal-description')
    const portalContainer = usePortalContainer(container)
    const resolvedTheme = useMemoriTheme(theme)

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
        if (!newOpen) onClose?.()
      },
      [onOpenChange, onClose, closeOnEsc],
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
        '--memori-modal-width-md':
          typeof widthMd === 'number' ? `${widthMd}px` : widthMd,
      }),
      ...(widthLg && {
        '--memori-modal-width-lg':
          typeof widthLg === 'number' ? `${widthLg}px` : widthLg,
      }),
      ...contentStyle,
    }

    // Build className for popup with size variant
    const sizeClass =
      size === 'sm'
        ? 'memori-modal__popup--sm'
        : size === 'md'
          ? 'memori-modal__popup--md'
          : size === 'lg'
            ? 'memori-modal__popup--lg'
            : size === 'xl'
              ? 'memori-modal__popup--xl'
              : size === 'full'
                ? 'memori-modal__popup--full'
                : undefined

    const popupClassName = cx(
      'memori-modal__popup',
      sizeClass,
      contentClassName,
    )
    const isStacked = stacking === 'stacked' || stacking === 'nested'
    const stackingClass = isStacked ? 'memori-modal--stacked' : undefined
    const hasTitle = title != null
    const hasDescription = description != null
    const effectiveAriaLabelledBy =
      ariaLabelledBy ?? (hasTitle ? titleId : undefined)
    const effectiveAriaDescribedBy =
      ariaDescribedBy ?? (hasDescription ? descriptionId : undefined)

    return (
      <Dialog.Root
        open={open}
        onOpenChange={handleOpenChange}
        onOpenChangeComplete={handleOpenChangeComplete}
        modal={modal}
        disablePointerDismissal={shouldDisablePointerDismissal}
        {...restProps}
      >
        <Dialog.Portal container={portalContainer ?? undefined}>
          {animated && (
            <Dialog.Backdrop
              className={cx(
                'memori-modal__backdrop',
                stackingClass,
                backdropClassName,
              )}
              data-theme={resolvedTheme}
            />
          )}
          <Dialog.Viewport
            data-theme={resolvedTheme}
            className={cx(
              'memori-modal__viewport',
              stackingClass,
              centered && 'memori-modal__viewport--centered',
              className,
            )}
          >
            <Dialog.Popup
              ref={ref}
              initialFocus={initialFocus}
              finalFocus={finalFocus}
              className={popupClassName}
              style={popupStyle}
              id={popupId}
              data-testid={dataTestId}
              data-theme={resolvedTheme}
              aria-label={hasTitle ? undefined : ariaLabel}
              aria-labelledby={effectiveAriaLabelledBy}
              aria-describedby={effectiveAriaDescribedBy}
              {...(widthMd && { 'data-width-md': '' })}
              {...(widthLg && { 'data-width-lg': '' })}
            >
              {closable &&
                (closeButton ? (
                  <div className="memori-modal__close">{closeButton}</div>
                ) : (
                  <Dialog.Close
                    className="memori-modal__close"
                    aria-label="Close modal"
                  >
                    {closeIcon || <Close />}
                  </Dialog.Close>
                ))}
              <Spin spinning={loading}>
                {title && (
                  <Dialog.Title
                    id={titleId}
                    className={cx('memori-modal__title', titleClassName)}
                  >
                    {title}
                  </Dialog.Title>
                )}
                {description && (
                  <Dialog.Description
                    id={descriptionId}
                    className={cx(
                      'memori-modal__description',
                      descriptionClassName,
                    )}
                  >
                    {description}
                  </Dialog.Description>
                )}
                <div
                  className="memori-modal__content"
                  tabIndex={0}
                >
                  {children}
                </div>
                {footer && (
                  <div className={cx('memori-modal__footer', footerClassName)}>
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
