import { default as React } from '../../../node_modules/react';
import { DialogRootProps } from '@base-ui/react/dialog';
import { InteractionType } from '@base-ui/utils/useEnhancedClickHandler';
export interface ModalProps extends Omit<DialogRootProps, 'className' | 'style'> {
    /**
     * Whether the modal is open
     * @default false
     */
    open?: boolean;
    /**
     * Callback fired when the modal requests to close
     * @param open - The new open state
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Modal title displayed at the top
     */
    title?: React.ReactNode;
    /**
     * Modal description/subtitle displayed below the title
     */
    description?: React.ReactNode;
    /**
     * Main content of the modal
     */
    children?: React.ReactNode;
    /**
     * Footer content (typically action buttons)
     */
    footer?: React.ReactNode;
    /**
     * Shows a loading spinner and disables interaction
     * @default false
     */
    loading?: boolean;
    /**
     * Whether to show the close button
     * @default true
     */
    closable?: boolean;
    /**
     * Whether clicking the backdrop should close the modal
     * @default true
     */
    closeOnOverlayClick?: boolean;
    /**
     * Whether pressing Escape should close the modal
     * @default true
     */
    closeOnEsc?: boolean;
    /**
     * Modal size variant
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /**
     * Custom width (overrides size)
     * Applied on mobile and up
     */
    width?: string | number;
    /**
     * Custom width for medium screens and up (≥768px)
     */
    widthMd?: string | number;
    /**
     * Custom width for large screens and up (≥1024px)
     */
    widthLg?: string | number;
    /**
     * Whether the modal is centered vertically and horizontally
     * @default true
     */
    centered?: boolean;
    /**
     * Determines if the dialog enters a modal state when open
     * - `true`: user interaction is limited to just the dialog
     * - `false`: user interaction with the rest of the document is allowed
     * - `'trap-focus'`: focus is trapped but scroll and pointer interactions remain enabled
     * @default true
     */
    modal?: boolean | 'trap-focus';
    /**
     * Determines whether the dialog should close on outside clicks
     * Alias for `!closeOnOverlayClick`
     * @default false
     */
    disablePointerDismissal?: boolean;
    /**
     * Element to focus when the dialog opens
     * - `false`: Do not move focus
     * - `true`: Move focus based on default behavior
     * - `RefObject`: Move focus to the ref element
     * - `function`: Called with interaction type, return element to focus
     */
    initialFocus?: boolean | React.RefObject<HTMLElement | null> | ((openType: InteractionType) => boolean | HTMLElement | null | void);
    /**
     * Element to focus when the dialog closes
     * - `false`: Do not move focus
     * - `true`: Move focus based on default behavior (trigger or previously focused element)
     * - `RefObject`: Move focus to the ref element
     * - `function`: Called with interaction type, return element to focus
     */
    finalFocus?: boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void);
    /**
     * Callback fired after the modal has opened (after animations)
     */
    onAfterOpen?: () => void;
    /**
     * Callback fired after the modal has closed (after animations)
     */
    onAfterClose?: () => void;
    /**
     * Additional CSS class name for the root container
     */
    className?: string;
    /**
     * Additional CSS class name for the backdrop
     */
    backdropClassName?: string;
    /**
     * Additional CSS class name for the popup/content container
     */
    contentClassName?: string;
    /**
     * Additional CSS class name for the title
     */
    titleClassName?: string;
    /**
     * Additional CSS class name for the description
     */
    descriptionClassName?: string;
    /**
     * Additional CSS class name for the footer
     */
    footerClassName?: string;
    /**
     * Inline styles for the root container
     */
    style?: React.CSSProperties;
    /**
     * Inline styles for the popup/content container
     */
    contentStyle?: React.CSSProperties;
    /**
     * Unique identifier for the modal
     */
    id?: string;
    /**
     * Test ID for testing frameworks
     */
    'data-testid'?: string;
    /**
     * ARIA label for the modal (if title is not provided)
     */
    'aria-label'?: string;
    /**
     * ID of the element that labels the modal
     * Automatically set by DialogTitle, but can be overridden
     */
    'aria-labelledby'?: string;
    /**
     * ID of the element that describes the modal
     * Automatically set by DialogDescription, but can be overridden
     */
    'aria-describedby'?: string;
    /**
     * Whether the modal should be animated
     * @default true
     */
    animated?: boolean;
    /**
     * Custom close button component
     * If provided, replaces the default close button
     */
    closeButton?: React.ReactNode;
    /**
     * Custom close icon
     * If provided, replaces the default X icon
     */
    closeIcon?: React.ReactNode;
}
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
export default Modal;
