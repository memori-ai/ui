import { FC, JSX, default as React } from '../../../node_modules/react';
export interface Props {
    children?: React.ReactNode;
    loading?: boolean;
    className?: string;
    title?: string;
    description?: string;
    cover?: JSX.Element | React.ReactNode | string;
    hoverable?: boolean;
    onClick?: () => void;
}
declare const Card: FC<Props>;
export default Card;
