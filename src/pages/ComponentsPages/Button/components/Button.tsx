import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    className,
    ...props
  }) => {
    const baseStyles = "text-xs md:text-base rounded-md transition duration-200 px-4 md:px-6 py-2";
    
    const variantStyles = {
      primary: "bg-gray-900 hover:bg-gray-800 text-gray-50",
      secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
      outline: "text-gray-700 hover:bg-gray-100 border border-gray-300",
    };
  
    return (
      <button className={clsx(baseStyles, variantStyles[variant], className)} {...props} />
    );
};