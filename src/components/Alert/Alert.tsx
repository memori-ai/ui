import * as React from 'react'
import { Toast } from '@base-ui/react/toast'
import cx from 'classnames'
import {
  X as CloseIcon,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
} from 'lucide-react'

import { useMemoriTheme } from '../../theme/MemoriUIProvider'
import type { Theme } from '../../theme/useTheme'
import { useTranslation } from 'react-i18next'
import './styles.css'

/**
 * Alert severity types for semantic meaning and styling
 */
export type AlertSeverity = 'success' | 'warning' | 'error' | 'info'

/**
 * Alert placement positions in the viewport
 */
export type AlertPlacement =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end'

/**
 * Custom data for alert toasts
 */
export interface AlertData {
  /** The severity level of the alert */
  severity?: AlertSeverity
  /** Custom icon to display (overrides default severity icon) */
  icon?: React.ReactNode
  /** Whether to show the default severity icon */
  showIcon?: boolean
  /** Whether the alert can be closed by the user */
  closable?: boolean
  /** Accessible label for the close button */
  closeLabel?: string
  /** Custom action element to display */
  action?: React.ReactNode
  /** Callback fired when the alert is closed */
  onClose?: () => void
}

/**
 * Toast object type with alert data
 */
export interface AlertToast {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  data?: AlertData
}

/**
 * Props for the AlertProvider component
 */
export interface AlertProviderProps {
  /** Children elements */
  children: React.ReactNode
  /** Default duration for alerts in milliseconds (0 for persistent) */
  defaultDuration?: number
  /** Maximum number of visible alerts */
  limit?: number
}

/**
 * Props for the AlertViewport component
 */
export interface AlertViewportProps {
  /** Placement position of the viewport */
  placement?: AlertPlacement
  /**
   * Theme stamped on the viewport (as `data-theme`) so design tokens resolve
   * for every nested alert. Falls back to the nearest `ThemeProvider` /
   * `MemoriUIProvider` value.
   */
  theme?: Theme
  /** Additional CSS class name */
  className?: string
  /** Additional inline styles */
  style?: React.CSSProperties
}

/**
 * Props for the internal Alert component
 */
interface AlertProps {
  /** The toast object from the manager */
  toast: AlertToast
  /** Additional CSS class name */
  className?: string
  /** Additional inline styles */
  style?: React.CSSProperties
}

/**
 * Get default icon based on severity
 */
const getDefaultIcon = (severity: AlertSeverity): React.ReactNode => {
  const iconProps = {
    size: 20,
    'aria-hidden': true as const,
  }

  switch (severity) {
    case 'success':
      return <CheckCircle {...iconProps} />
    case 'warning':
      return <AlertTriangle {...iconProps} />
    case 'error':
      return <XCircle {...iconProps} />
    case 'info':
    default:
      return <Info {...iconProps} />
  }
}

/**
 * Alert component - Individual toast notification
 *
 * Renders a single alert notification from the toast manager.
 */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, forwardedRef) {
    const { toast, className, style } = props
    const { t } = useTranslation()

    const data = toast.data ?? {}
    const severity = data.severity ?? 'info'
    const showIcon = data.showIcon ?? true
    const closable = data.closable ?? true
    const closeLabel =
      data.closeLabel ?? t('alert.close', { defaultValue: 'Close alert' })
    const displayIcon =
      data.icon ?? (showIcon ? getDefaultIcon(severity) : null)
    const action = data.action
    const onClose = data.onClose

    const toastManager = Toast.useToastManager()

    const handleClose = React.useCallback(() => {
      onClose?.()
      toastManager.close(toast.id)
    }, [onClose, toastManager, toast.id])

    return (
      <Toast.Root
        ref={forwardedRef}
        toast={toast as unknown as Toast.Root.ToastObject}
        className={cx('memori-alert', `memori-alert--${severity}`, className)}
        style={style}
      >
        <div className="memori-alert__container">
          {displayIcon && (
            <div
              className="memori-alert__icon"
              aria-hidden="true"
            >
              {displayIcon}
            </div>
          )}

          <div className="memori-alert__content">
            {toast.title && (
              <Toast.Title className="memori-alert__title">
                {toast.title}
              </Toast.Title>
            )}
            {toast.description && (
              <Toast.Description className="memori-alert__description">
                {toast.description}
              </Toast.Description>
            )}
          </div>

          <div className="memori-alert__actions">
            {action && <div className="memori-alert__action">{action}</div>}
            {closable && (
              <Toast.Close
                className="memori-alert__close"
                aria-label={closeLabel}
                onClick={handleClose}
              >
                <CloseIcon
                  size={16}
                  aria-hidden="true"
                />
              </Toast.Close>
            )}
          </div>
        </div>
      </Toast.Root>
    )
  },
)

/**
 * AlertViewport - Container where alerts are rendered
 *
 * This component renders all active alerts from the toast manager.
 * Place this component inside AlertProvider.
 *
 * @example
 * ```tsx
 * <AlertProvider>
 *   <App />
 *   <AlertViewport placement="top-end" />
 * </AlertProvider>
 * ```
 */
const AlertViewport = React.forwardRef<HTMLDivElement, AlertViewportProps>(
  function AlertViewport(props, forwardedRef) {
    const { placement = 'top-end', className, style, theme } = props
    const toastManager = Toast.useToastManager()
    const resolvedTheme = useMemoriTheme(theme)

    return (
      <Toast.Viewport
        ref={forwardedRef}
        className={cx(
          'memori-alert-viewport',
          `memori-alert-viewport--${placement}`,
          className,
        )}
        style={style}
        data-theme={resolvedTheme}
      >
        {toastManager.toasts.map((toast: AlertToast) => (
          <Alert
            key={toast.id}
            toast={toast}
          />
        ))}
      </Toast.Viewport>
    )
  },
)

/**
 * AlertProvider - Context provider for managing alerts
 *
 * Wrap your application with AlertProvider to enable alert notifications.
 * Use the useAlertManager hook to add/remove alerts programmatically.
 *
 * @example
 * ```tsx
 * <AlertProvider defaultDuration={5000}>
 *   <App />
 *   <AlertViewport placement="top-end" />
 * </AlertProvider>
 * ```
 */
const AlertProvider: React.FC<AlertProviderProps> = ({
  children,
  defaultDuration = 5000,
  limit = 5,
}) => {
  return (
    <Toast.Provider
      timeout={defaultDuration}
      limit={limit}
    >
      {children}
    </Toast.Provider>
  )
}

/**
 * Type-safe hook to access the alert/toast manager
 *
 * Must be used within an AlertProvider.
 *
 * @example
 * ```tsx
 * const alertManager = useAlertManager();
 *
 * // Add an alert
 * alertManager.add({
 *   title: 'Success!',
 *   description: 'Your changes have been saved.',
 *   data: {
 *     severity: 'success',
 *     closable: true,
 *   },
 * });
 *
 * // Close an alert by id
 * alertManager.close(alertId);
 *
 * // Get all active alerts
 * const alerts = alertManager.toasts;
 * ```
 */
const useAlertManager = () => Toast.useToastManager()

/**
 * Helper function to create alert options with proper typing
 */
export interface AddAlertOptions {
  /** The title of the alert */
  title?: React.ReactNode
  /** The description/message of the alert */
  description?: React.ReactNode
  /** Duration in milliseconds (overrides provider default) */
  duration?: number
  /** The severity level */
  severity?: AlertSeverity
  /** Custom icon */
  icon?: React.ReactNode
  /** Whether to show the default severity icon */
  showIcon?: boolean
  /** Whether the alert can be closed */
  closable?: boolean
  /** Accessible label for the close button */
  closeLabel?: string
  /** Custom action element */
  action?: React.ReactNode
  /** Callback when closed */
  onClose?: () => void
}

/**
 * Creates a toast options object from simplified alert options
 */
const createAlertOptions = (options: AddAlertOptions) => ({
  title: options.title,
  description: options.description,
  timeout: options.duration,
  data: {
    severity: options.severity,
    icon: options.icon,
    showIcon: options.showIcon,
    closable: options.closable,
    closeLabel: options.closeLabel,
    action: options.action,
    onClose: options.onClose,
  } satisfies AlertData,
})

/**
 * Compound component exports
 */
export {
  Alert,
  AlertProvider,
  AlertViewport,
  useAlertManager,
  getDefaultIcon,
  createAlertOptions,
}

export default Alert
