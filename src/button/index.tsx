import classNames from "classnames";
import React, { MouseEventHandler } from "react";

export type ButtonPropType = {
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

export const Button = ({
  leftIcon,
  rightIcon,
  className,
  label,
  disabled = false,
  variant = "primary",
  onClick,
  type,
  onFocus,
  onBlur,
  onkeyup,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
}: ButtonPropType) => {
  const buttonClasses = classNames(
    " py-[10px] px-5 flex items-center gap-2 rounded-lg font-Lato text-base font-medium ",
    {
      " bg-[#7700C7] text-white": variant === "primary",
    },
    {
      " bg-[#F4EDFF] text-[#7700C7]": variant === "secondary",
    },
    {
      "disabled:bg-[#CDCDCD] disabled:cursor-not-allowed text-white": disabled,
    },
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyUp={onkeyup}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <>
        {leftIcon && leftIcon}
        {label}
        {rightIcon && rightIcon}
      </>
    </button>
  );
};
