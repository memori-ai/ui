import { FC } from '../../../node_modules/react';
export interface Props extends React.HTMLAttributes<HTMLInputElement> {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Checkbox: FC<Props>;
export default Checkbox;
