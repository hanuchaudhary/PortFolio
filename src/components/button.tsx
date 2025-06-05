import { cn } from "@/lib/utils";
import React from "react";

interface buttonProps {
  children: React.ReactNode;
  boxShadow: string;
  borderColor: string;
  backgroundColor: string;
  color: string;
  href?: string;
}

export function Button({
  children,
  backgroundColor,
  borderColor,
  boxShadow,
  href,
  color,
}: buttonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        boxShadow,
        borderColor,
        backgroundColor,
        color,
        
      }}
      className={cn(
        "border-t border border-r transition-colors cursor-pointer rounded-full px-8 py-3 md:text-sm text-xs font-farro",
        `hover:bg-[${backgroundColor}]/90`
      )}
    >
      {children}
    </a>
  );
}
