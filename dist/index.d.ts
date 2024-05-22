import React, { MouseEventHandler } from 'react';

type ButtonPropType = {
    className?: string;
    label?: string;
    variant?: "primary" | "secondary" | any;
    type?: "button" | "submit" | "reset";
    disabled?: boolean | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    leftIcon?: JSX.Element | string;
    rightIcon?: JSX.Element | string;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyDown?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onkeyup?: () => void;
};
declare const Button: ({ leftIcon, rightIcon, className, label, disabled, variant, onClick, type, onFocus, onBlur, onkeyup, onKeyDown, onMouseEnter, onMouseLeave, }: ButtonPropType) => React.JSX.Element;

export { Button, type ButtonPropType };
