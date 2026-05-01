"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/* ============================================
   THEME CONTEXT
   Manages dark/light mode state with localStorage
   persistence and system preference detection.
   Default theme is dark.
   ============================================ */

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage first, then default to dark
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
    }
    // Default is already "dark" so no else needed
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Apply theme class to html element
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // During SSR / before hydration, render children with no context
  // The dark class is applied via useEffect after mount
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return safe defaults during SSR or before mount
    return { theme: "dark" as Theme, toggleTheme: () => {} };
  }
  return context;
}
