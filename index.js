import classNames from "classnames";

function Button({
  leftIcon,
  rightIcon,
  className,
  label,
  disabled = false,
  variant = "primary",
  onClick,
  type,
}) {
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
    >
      <>
        {leftIcon && leftIcon}
        {label}
        {rightIcon && rightIcon}
      </>
    </button>
  );
}

module.exports = Button;
