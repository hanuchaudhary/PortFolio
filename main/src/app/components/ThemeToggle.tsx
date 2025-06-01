"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function EnhancedThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className="relative z-40 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="h-6 w-6" />
        ) : (
          <Sun className="h-6 w-6" />
        )}
      </button>
    </>
  );
}
