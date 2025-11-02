import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, onClick, active }) => {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`h-[32px] px-4 rounded-full text-sm font-medium border transition-colors whitespace-nowrap shadow-sm ${
        active
          ? "bg-gray-900 text-white border-gray-900"
          : "bg-white text-gray-800 border-gray-300 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
