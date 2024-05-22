import React from "react";

export type chipTypes = {
  children?: string;
  className?: string;
};

export const Chip = ({ children, className }: chipTypes) => {
  return <div className={className}>{children}</div>;
};
