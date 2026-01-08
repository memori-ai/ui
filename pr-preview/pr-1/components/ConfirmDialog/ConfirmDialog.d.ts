import { default as React } from '../../../node_modules/react';
export interface ConfirmDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    loading?: boolean;
}
declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
export default ConfirmDialog;
