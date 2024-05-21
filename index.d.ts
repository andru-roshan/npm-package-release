import { JSX, MouseEventHandler } from "react";

export type ButtonPropType = {
  className?: string;
  label?: string;
  variant?: "primary" | "secondary" | any;
  type?: "button" | "submit" | "reset";
  disabled?: boolean | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  leftIcon?: JSX.Element | string;
  rightIcon?: JSX.Element | string;
};

declare const Button: ({
  label,
  className,
  variant,
  onClick,
  leftIcon,
  rightIcon,
  disabled,
  onFocus,
  onBlur,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => React.JSX.Element;
