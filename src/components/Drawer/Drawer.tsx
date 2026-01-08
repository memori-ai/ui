import * as React from 'react'
import { Dialog, type DialogRootChangeEventDetails } from '@base-ui/react'
import cx from 'classnames'
import { X, Loader2 } from 'lucide-react'
import './styles.css'

export interface DrawerProps {
  /**
   * If `true`, the drawer is open.
   */
  open?: boolean

  /**
   * Callback fired when the component requests to be closed.
   * The `open` parameter represents the new open state (which will be `false` when closing).
   */
  onOpenChange?: (open: boolean, event?: DialogRootChangeEventDetails) => void

  /**
   * Callback fired when the drawer is closed (convenience prop for `onOpenChange(false)`).
   */
  onClose?: (event?: DialogRootChangeEventDetails) => void

  /**
   * Side from which the drawer will appear.
   * @default 'right'
   */
  anchor?: 'left' | 'right' | 'top' | 'bottom'

  /**
   * The contents of the drawer.
   */
  children?: React.ReactNode

  /**
   * The title of the drawer.
   */
  title?: React.ReactNode

  /**
   * The description/subtitle of the drawer (displayed below the title).
   */
  description?: React.ReactNode

  /**
   * The footer of the drawer (usually buttons).
   */
  footer?: React.ReactNode

  /**
   * If `true`, shows a loading state in the drawer.
   */
  loading?: boolean

  /**
   * Additional CSS class name for the drawer element.
   */
  className?: string

  /**
   * Inline styles for the drawer element.
   */
  style?: React.CSSProperties

  /**
   * Whether to show the close button in the header.
   * @default true
   */
  showCloseButton?: boolean

  /**
   * Whether the drawer can be closed (shows/hides close button).
   * Alias for `showCloseButton` for consistency with other UI libraries.
   * @default true
   */
  closable?: boolean
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open,
      onOpenChange,
      onClose,
      anchor = 'right',
      children,
      title,
      description,
      footer,
      loading,
      className,
      style,
      showCloseButton = true,
      closable = true,
      ...rest
    },
    ref,
  ) => {
    const handleOpenChange = (
      newOpen: boolean,
      event?: DialogRootChangeEventDetails,
    ) => {
      onOpenChange?.(newOpen, event)
      if (!newOpen) {
        onClose?.(event)
      }
    }

    // closable takes precedence over showCloseButton for consistency
    const shouldShowCloseButton =
      closable !== undefined ? closable : showCloseButton

    return (
      <Dialog.Root
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="memori-drawer__backdrop" />
          <Dialog.Popup
            ref={ref}
            className={cx(
              'memori-drawer',
              `memori-drawer--${anchor}`,
              className,
            )}
            style={style}
            {...rest}
          >
            {(title || description || shouldShowCloseButton) && (
              <div className="memori-drawer__header">
                <div>
                  {title && <div className="memori-drawer__title">{title}</div>}
                  {description && (
                    <div className="memori-drawer__description">
                      {description}
                    </div>
                  )}
                </div>
                {shouldShowCloseButton && (
                  <Dialog.Close
                    className="memori-drawer__close"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </Dialog.Close>
                )}
              </div>
            )}

            <div className="memori-drawer__body">
              {loading ? (
                <div className="memori-drawer__loading">
                  <Loader2
                    className="memori-drawer__spinner"
                    aria-label="Loading"
                  />
                </div>
              ) : (
                children
              )}
            </div>

            {footer && <div className="memori-drawer__footer">{footer}</div>}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    )
  },
)

Drawer.displayName = 'Drawer'

export default Drawer
