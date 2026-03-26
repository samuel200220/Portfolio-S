"use client";

import {Moon, Sun} from "lucide-react";
import {useEffect, useState} from "react";
import {useLocale} from "next-intl";

const labels: Record<string, {light: string; dark: string}> = {
  fr: {
    light: "Activer le mode clair",
    dark: "Activer le mode sombre",
  },
  en: {
    light: "Switch to light mode",
    dark: "Switch to dark mode",
  },
  ch: {
    light: "切换到浅色模式",
    dark: "切换到深色模式",
  },
};

export default function ThemeToggle() {
  const locale = useLocale();
  const copy = labels[locale] ?? labels.fr;
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const resolvedTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;

    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    setTheme(resolvedTheme);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? copy.light : copy.dark}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-600 transition-colors hover:text-slate-950 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-white"
    >
      {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
