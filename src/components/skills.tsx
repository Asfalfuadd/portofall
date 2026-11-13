import { skillCategories } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with daily.
          </p>
        </div>

        <div className="space-y-10">
          {skillCategories.map((cat, catIndex) => (
            <div key={cat.title}>
              <div className="mb-4 flex items-center gap-2">
                <cat.icon className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  {cat.title}
                </h3>
                <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, skillIndex) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-sm px-3 py-1.5 hover:bg-accent hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Separator className="mt-24" />
      </div>
    </section>
  );
}