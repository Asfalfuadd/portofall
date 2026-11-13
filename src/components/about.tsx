import { personalInfo } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Coffee, Rocket, Heart } from "lucide-react";

export function About() {
  const highlights = [
    { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable code" },
    { icon: Rocket, label: "Performance", desc: "Optimizing for speed & UX" },
    { icon: Coffee, label: "Coffee Driven", desc: "Fueled by good coffee" },
    { icon: Heart, label: "Open Source", desc: "Contributing to community" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate web developer crafting digital experiences that matter.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[300px_1fr] md:items-start">
          {/* Avatar */}
          <div className="relative mx-auto md:mx-0">
            <div className="aspect-square w-64 overflow-hidden rounded-2xl bg-muted border border-border">
              <div className="flex h-full items-center justify-center text-6xl">
                <img
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name}'s avatar`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bio and Highlights */}
          <div className="space-y-8">
            <div className="prose prose-muted dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {personalInfo.bio}
              </p>
              <p className="mt-4 text-muted-foreground">
                When I&apos;m not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of coffee.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <Card key={item.label} className="group hover:border-primary/30 hover:bg-accent transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.label}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Separator className="mt-24" />
      </div>
    </section>
  );
}