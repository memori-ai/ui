import { FC, JSX, default as React } from '../../../node_modules/react';
export interface Props {
    title?: string | React.ReactNode;
    open?: boolean;
    data?: any;
    onClose?: () => void;
    width?: number | string;
    children?: React.ReactNode;
    footer?: {
        leftAction?: React.ReactNode;
        leftActionClassName?: string;
        onSubmit?: () => void;
        loading?: boolean;
    };
    extra?: React.ReactNode;
    className?: string;
    placement?: 'left' | 'right';
    description?: string | JSX.Element | React.ReactNode;
    loading?: boolean;
    animated?: boolean;
    closable?: boolean;
    widthMd?: string;
    widthLg?: string;
    confirmDialogTitle?: string;
    confirmDialogMessage?: string;
    showBackdrop?: boolean;
    preventBackdropClose?: boolean;
    enterDuration?: string;
    leaveDuration?: string;
}
declare const Drawer: FC<Props>;
export default Drawer;
