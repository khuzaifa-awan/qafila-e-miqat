import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button className={className} {...props}>{children}</button>
);
