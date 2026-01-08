import { default as React } from '../../../node_modules/react';
export interface DetailsProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
    summary: React.ReactNode;
}
export declare const Details: React.ForwardRefExoticComponent<DetailsProps & React.RefAttributes<HTMLDetailsElement>>;
