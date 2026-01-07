import * as React from 'react';
export interface CheckboxProps {
    /**
     * If `true`, the checkbox is checked.
     */
    checked?: boolean;
    /**
     * The default checked state. Use when the component is not controlled.
     */
    defaultChecked?: boolean;
    /**
     * If `true`, the checkbox appears in an indeterminate state.
     * This does not set the native input element to indeterminate due to
     * inconsistent behavior across browsers. However, it does set a
     * `data-indeterminate` attribute on the input.
     */
    indeterminate?: boolean;
    /**
     * If `true`, the checkbox is disabled.
     */
    disabled?: boolean;
    /**
     * If `true`, the checkbox is required.
     */
    required?: boolean;
    /**
     * The name attribute of the input element.
     */
    name?: string;
    /**
     * The value attribute of the input element.
     */
    value?: string;
    /**
     * The label content for the checkbox.
     */
    label?: React.ReactNode;
    /**
     * Callback fired when the state is changed.
     * @param checked The new checked state.
     * @param event The event source of the callback.
     */
    onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Additional CSS class name for the root element.
     */
    className?: string;
    /**
     * Inline styles for the root element.
     */
    style?: React.CSSProperties;
    /**
     * The id of the input element.
     */
    id?: string;
    /**
     * Defines a string value that labels the checkbox.
     */
    'aria-label'?: string;
    /**
     * Identifies the element (or elements) that describes the checkbox.
     */
    'aria-describedby'?: string;
    /**
     * Identifies the element (or elements) that labels the checkbox.
     */
    'aria-labelledby'?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
export default Checkbox;
