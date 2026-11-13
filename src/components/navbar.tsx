"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { navLinks, personalInfo } from "@/lib/data";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-tight transition-colors duration-300">
            <Code2 className="h-5 w-5 text-primary" />
            {personalInfo.name}
          </a>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-tight transition-colors duration-300">
          <Code2 className="h-5 w-5 text-primary" />
          {personalInfo.name}
        </a>

        {/* Desktop nav links */}
        <ul className="hidden gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Button variant="ghost" size="sm" asChild>
                <a href={link.href} className="transition-colors duration-200 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">
                  {link.label}
                </a>
              </Button>
            </li>
          ))}
        </ul>

        {/* Dark mode toggle + Mobile menu button */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="relative rounded-full transition-all duration-300 hover:scale-110 hover:bg-accent"
          >
            <span className="relative flex h-9 w-9 items-center justify-center">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 text-amber-500 dark:-rotate-90 dark:scale-0" />
              <Moon className="h-5 w-5 rotate-90 scale-0 transition-all duration-300 text-blue-400 dark:rotate-0 dark:scale-100" />
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t bg-background px-6 py-4 md:hidden animate-slide-down">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4 border-t">
            <Button variant="outline" className="w-full transition-colors duration-200 hover:bg-accent" onClick={toggleTheme}>
              {resolvedTheme === "dark" ? (
                <>
                  <Sun className="mr-2 h-4 w-4 text-amber-500" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-4 w-4 text-blue-400" />
                  Dark Mode
                </>
              )}
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
}