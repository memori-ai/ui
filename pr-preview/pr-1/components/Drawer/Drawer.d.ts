import { DialogRootChangeEventDetails } from '@base-ui/react';
import * as React from 'react';
export interface DrawerProps {
    /**
     * If `true`, the drawer is open.
     */
    open?: boolean;
    /**
     * Callback fired when the component requests to be closed.
     * The `open` parameter represents the new open state (which will be `false` when closing).
     */
    onOpenChange?: (open: boolean, event?: DialogRootChangeEventDetails) => void;
    /**
     * Callback fired when the drawer is closed (convenience prop for `onOpenChange(false)`).
     */
    onClose?: (event?: DialogRootChangeEventDetails) => void;
    /**
     * Side from which the drawer will appear.
     * @default 'right'
     */
    anchor?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * The contents of the drawer.
     */
    children?: React.ReactNode;
    /**
     * The title of the drawer.
     */
    title?: React.ReactNode;
    /**
     * The description/subtitle of the drawer (displayed below the title).
     */
    description?: React.ReactNode;
    /**
     * The footer of the drawer (usually buttons).
     */
    footer?: React.ReactNode;
    /**
     * If `true`, shows a loading state in the drawer.
     */
    loading?: boolean;
    /**
     * Additional CSS class name for the drawer element.
     */
    className?: string;
    /**
     * Inline styles for the drawer element.
     */
    style?: React.CSSProperties;
    /**
     * Whether to show the close button in the header.
     * @default true
     */
    showCloseButton?: boolean;
    /**
     * Whether the drawer can be closed (shows/hides close button).
     * Alias for `showCloseButton` for consistency with other UI libraries.
     * @default true
     */
    closable?: boolean;
}
export declare const Drawer: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLDivElement>>;
export default Drawer;
