import { default as React } from '../../../node_modules/react';
export interface Props {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
}
declare const ConfirmDialog: React.FC<Props>;
export default ConfirmDialog;
