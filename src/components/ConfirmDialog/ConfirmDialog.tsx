import React from 'react'
import { Modal } from '../Modal/Modal'
import Button from '../Button'
import type { Theme } from '../../theme/useTheme'

export interface ConfirmDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: React.ReactNode
  confirmText?: string
  cancelText?: string
  loading?: boolean
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

const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  loading = false,
  container,
  theme,
}: ConfirmDialogProps) => {
  const handleOpenChange = (open: boolean) => {
    if (!open) onClose()
  }

  const footer = (
    <>
      <Button
        variant="outline"
        onClick={onClose}
        disabled={loading}
      >
        {cancelText}
      </Button>
      <Button
        variant="primary"
        onClick={onConfirm}
        loading={loading}
      >
        {confirmText}
      </Button>
    </>
  )

  return (
    <Modal
      open={isOpen}
      onOpenChange={handleOpenChange}
      title={title}
      size="sm"
      footer={footer}
      closable={!loading}
      closeOnEsc={!loading}
      closeOnOverlayClick={!loading}
      container={container}
      theme={theme}
    >
      <div>{message}</div>
    </Modal>
  )
}

export default ConfirmDialog
