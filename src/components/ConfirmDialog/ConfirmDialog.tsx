import React from 'react'
import { Modal } from '../Modal/Modal'
import Button from '../Button'

export interface ConfirmDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: React.ReactNode
  confirmText?: string
  cancelText?: string
  loading?: boolean
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
}: ConfirmDialogProps) => {
  const handleOpenChange = (open: boolean) => {
    if (!open) onClose()
  }

  const footer = (
    <>
      <Button
        variant="secondary"
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
    >
      <div>{message}</div>
    </Modal>
  )
}

export default ConfirmDialog
