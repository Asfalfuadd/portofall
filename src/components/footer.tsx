import { personalInfo } from "@/lib/data";
import { ArrowUp, Code2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t py-10 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code2 className="h-4 w-4 text-primary" />
            <span>Built with Next.js & Tailwind CSS</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by {personalInfo.name}</span>
          </div>

          <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform duration-200">
            <a href="#home" aria-label="Back to top">
              <ArrowUp className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}