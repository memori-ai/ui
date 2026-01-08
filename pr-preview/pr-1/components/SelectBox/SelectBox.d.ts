import { default as React } from '../../../node_modules/react';
export interface SelectBoxOption {
    value: string;
    label: React.ReactNode;
    disabled?: boolean;
}
export interface SelectBoxProps {
    options: SelectBoxOption[];
    value?: string | null;
    defaultValue?: string | null;
    onChange?: (value: string | null) => void;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    name?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare const SelectBox: React.ForwardRefExoticComponent<SelectBoxProps & React.RefAttributes<HTMLButtonElement>>;
