"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-10 h-10 rounded-full opacity-0"
      />
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 bg-primary/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-primary/20"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all duration-300 text-amber-400" />
      ) : (
        <Moon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all duration-300 text-indigo-700" />
      )}
    </Button>
  );
}
