import { FC, JSX, default as React } from '../../../node_modules/react';
export interface Props {
    spinning?: boolean;
    className?: string;
    primary?: boolean;
    children?: JSX.Element | React.ReactNode;
}
declare const Spin: FC<Props>;
export default Spin;
