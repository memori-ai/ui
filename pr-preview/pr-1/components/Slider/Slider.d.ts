import { default as React } from '../../../node_modules/react';
export interface Props {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    label?: string | React.ReactNode;
    onChange?: (value: number) => void;
    disabled?: boolean;
}
declare const CustomSlider: ({ min, max, step, defaultValue, label, onChange, disabled, }: Props) => import("react/jsx-runtime").JSX.Element;
export default CustomSlider;
