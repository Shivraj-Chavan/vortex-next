"use client";

import { useEffect } from "react";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (!theme && prefersDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem("theme");
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    
    
    const handleThemeChange = (e: CustomEvent) => {
      if (e.detail === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    window.addEventListener("themechange" as any, handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themechange" as any, handleThemeChange);
    };
  }, []);

  return <>{children}</>;
}