import { default as React } from '../../../node_modules/react';
import { InputProps as BaseInputProps } from '@base-ui/react/input';
export interface InputProps extends Omit<BaseInputProps, 'className' | 'size'> {
    /**
     * Input variant
     * @default 'default'
     */
    variant?: 'default' | 'error' | 'disabled';
    /**
     * Input size
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Whether the input should take full width
     */
    fullWidth?: boolean;
    /**
     * Additional CSS class name
     */
    className?: string;
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Input value
     */
    value?: string;
    /**
     * Default value for uncontrolled input
     */
    defaultValue?: string;
    /**
     * Callback fired when the value changes
     */
    onValueChange?: (value: string) => void;
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
    /**
     * Input type
     * @default 'text'
     */
    type?: string;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
