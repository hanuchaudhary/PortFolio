import React from "react";

interface buttonProps {
  children: React.ReactNode;
}

export function Button({ children }: buttonProps) {
  return (
    <button className="bg-blue-500 rounded-full px-4 py-2 text-white">
      {children}
    </button>
  );
}
