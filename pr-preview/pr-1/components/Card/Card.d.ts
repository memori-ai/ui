import { default as React } from '../../../node_modules/react';
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * The content of the card
     */
    children?: React.ReactNode;
    /**
     * Additional CSS class name
     */
    className?: string;
    /**
     * Inline styles
     */
    style?: React.CSSProperties;
    /**
     * Visual variant of the card
     * @default 'elevated'
     */
    variant?: 'elevated' | 'outlined';
    /**
     * Controls the padding inside the card body
     * @default 'md'
     */
    padding?: 'none' | 'sm' | 'md' | 'lg';
    /**
     * Polymorphic component prop: allows rendering the card as a different HTML element
     * @default 'div'
     */
    component?: React.ElementType;
    /**
     * If true, the card will be focusable and react to keyboard events (adds tabIndex=0)
     * automatically if onClick is provided.
     */
    focusable?: boolean;
    /**
     * Card title
     */
    title?: React.ReactNode;
    /**
     * Card description
     */
    description?: React.ReactNode;
    /**
     * Card cover image (rendered at the top, full width)
     */
    cover?: React.ReactNode;
    /**
     * Whether to show a loading spinner
     */
    loading?: boolean;
    /**
     * Use hover styles (lift effect)
     */
    hoverable?: boolean;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export default Card;
