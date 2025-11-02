import React from "react";
import { ButtonProps } from "@/interfaces";

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  const base = "px-4 py-2 rounded-full text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-red-500 text-white hover:bg-red-600"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200";
  return (
    <button className={`${base} ${styles}`} onClick={onClick}>
      {label}
    </button>
  );
};
