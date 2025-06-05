import { cn } from "@/lib/utils";
import React from "react";

interface buttonProps {
  children: React.ReactNode;
  boxShadow: string;
  borderColor: string;
  backgroundColor: string;
  color: string;
}

export function Button({
  children,
  backgroundColor,
  borderColor,
  boxShadow,
  color,
}: buttonProps) {
  return (
    <button
      style={{
        boxShadow,
        borderColor,
        backgroundColor,
        color,
        
      }}
      className={cn(
        "border-t border border-r transition-colors cursor-pointer rounded-full px-8 py-2 md:text-base text-sm font-farro",
        `hover:bg-[${backgroundColor}]/90`
      )}
    >
      {children}
    </button>
  );
}
