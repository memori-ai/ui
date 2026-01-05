import { default as React } from '../../../node_modules/react';
import { ButtonProps as BaseButtonProps } from '@base-ui/react/button';
export interface ButtonProps extends Omit<BaseButtonProps, 'className'> {
    /**
     * Button variant
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    /**
     * Button size
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Whether the button should take full width
     */
    fullWidth?: boolean;
    /**
     * Shows a loading spinner and disables the button
     */
    loading?: boolean;
    /**
     * Icon to display in the button
     */
    icon?: React.ReactNode;
    /**
     * Position of the icon relative to the button text
     * @default 'left'
     */
    iconPosition?: 'left' | 'right';
    /**
     * Button shape
     * @default 'default'
     */
    shape?: 'default' | 'round' | 'circle';
    /**
     * Whether the button is in an active/pressed state (for toggle buttons)
     */
    active?: boolean;
    /**
     * Indicates a destructive/dangerous action (alias for variant="danger")
     */
    danger?: boolean;
    /**
     * Additional CSS class name
     */
    className?: string;
    /**
     * Button content
     */
    children?: React.ReactNode;
    /**
     * Button type
     * @default 'button'
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Button aria-label
     */
    ariaLabel?: string;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
