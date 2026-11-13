import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-3xl text-center">
        {/* Terminal-like intro */}
        <div className="mb-8 flex items-center justify-center gap-2 text-sm text-muted-foreground font-mono animate-fade-in">
          <span className="text-primary">$</span>
          <span>whoami</span>
        </div>

        <div className="mb-4 animate-slide-up delay-100">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Hi, I&apos;m
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {personalInfo.name}
          </h1>
        </div>

        <div className="mb-2 animate-slide-up delay-200">
          <p className="text-xl text-muted-foreground sm:text-2xl font-medium">
            {personalInfo.title}
          </p>
        </div>

        <div className="mb-8 animate-slide-up delay-300">
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center animate-slide-up delay-400">
          <Button asChild size="lg" className="gap-2">
            <a href="#projects">
              <ArrowDown className="h-4 w-4" />
              View Projects
            </a>
          </Button>
          <Button variant="outline" asChild size="lg" className="gap-2">
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>

        {/* Social links */}
        <div className="mt-12 flex items-center justify-center gap-6 animate-fade-in delay-500">
          <a
            href="https://github.com/Asfalfuadd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a
            href="https://www.instagram.com/asfaall__/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Instagram"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a
            href="https://www.tiktok.com/@svall05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="TikTok"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.545 12.267v6.444l5.283-3.958c.866-.648 1.147-1.911.5-2.907a3.553 3.553 0 0 0-4.667-1.33 3.086 3.086 0 0 0-.36 1.558c-.066 2.278 2.16 3.335 2.892 2.005a.615.615 0 0 0 .68-.786c-.671-1.21-1.495-2.49-1.438-2.925.032-.238.39-.424.68-.424h1.813V7.773c0-1.605-1.182-2.951-2.715-2.973v-.78c1.66-.078 3.011.968 3.572 2.445.534 1.405.44 3.042-.346 3.82-.57.562-1.328.618-2.025.209a7.162 7.162 0 0 1-5.572-1.943c-.96-.94-1.266-2.24-.76-3.44.531-1.255 1.863-2.063 3.047-1.908 1.084.14 1.99 1.18 2.162 2.26.155.981-.68 1.87-1.61 2.228-.608.24-1.115.635-1.115 1.141v1.37c0 .735.773 1.23 1.337 1.04.48-.16 1.14-.27 1.72-.27.366 0 .728.04 1.05.112a.832.832 0 0 1 .538 1.218c-.598.88-1.643 1.385-2.625 1.304-.888-.075-1.62-.612-1.62-1.393v-1.37c0-.708.362-1.067.862-1.067.163 0 .32.015.47.045a.413.413 0 0 1 .33.526c-.232.527-.72.723-1.12.723-.333 0-.663-.055-.964-.162a2.709 2.709 0 0 1-.452-.822v-1.3c0-.666.807-1.048 1.258-1.048.246 0 .486.033.71.093a.773.773 0 0 1 .72 1.076v4.867l-4.849 3.555c-.866.648-1.148 1.91-.5 2.907a3.436 3.436 0 0 0 4.667 1.33c1.263 0 2.36-.648 2.925-1.665.093-1.68-.742-3.098-2.005-2.892a.614.614 0 0 0-.78-.68c-1.208.671-2.488 1.494-2.925 1.437-.238-.032-.424-.39-.424-.68V17.5c0-1.605 1.182-2.951 2.715-2.973v-.78c-1.66.078-3.01.968-3.572 2.444-.534 1.405-.44 3.042.346 3.82.57.562 1.328.618 2.025.209a7.12 7.12 0 0 0 1.382-4.037c0-.933-.72-1.774-1.566-1.911a7.072 7.072 0 0 0-2.583 1.862c-.503.498-.973 1.08-1.29 1.72-.297.59-.33 1.29-.105 1.937.19.55.66.9 1.19.9.415 0 .812-.346.812-.812v-1.37"/></svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
      </div>
    </section>
  );
}