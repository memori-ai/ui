import { Button } from './Button.tsx';
export type Message = {
    name: string;
    message: string;
};
declare const printMessage: (message?: Message) => void;
export { Button, printMessage };
