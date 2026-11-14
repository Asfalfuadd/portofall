import { Code2, Database, Globe, Wrench } from "lucide-react";

export const personalInfo = {
  name: "Asfal Fuad",
  title: "Web Developer",
  tagline: "Building clean, performant web experiences.",
  bio: "I'm a web developer passionate about building modern web applications. I focus on writing clean code and creating intuitive user interfaces that solve real problems.",
  avatar: "/avatar.jpg",
  resumeUrl: "#",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS",],
  },
  {
    title: "Backend",
    icon: Database,
    items: ["Node.js", "PostgreSQL", "Laravel",],
  },
  {
    title: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "Python", "PHP", "HTML", "CSS",],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "VS Code", "Figma",],
  },
];

export const projects = [
  {
    title: "Money Tracker App",
    description:
      "Full-stack app for tracking personal finances with budgeting features.",
    image: "/projects/project-1.png",
    tech: ["Laravel", "MySQL", "JavaScript", "CSS", "HTML"],
    demoUrl: "https://catwang.infinityfree.io/?i=1",
    githubUrl: "https://github.com/Asfalfuadd/catwang",
  },
  {
    title: "Techno24 Official Website",
    description:
      "Modern website for Techno24, showcasing their products and services.",
    image: "/projects/project-2.png",
    tech: ["PHP", "CSS", "JavaScript", "MySQL",],
    demoUrl: "https://techno24.infinityfreeapp.com/",
    githubUrl: "https://github.com/Asfalfuadd/official_techno24",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio site built with Next.js and Tailwind CSS.",
    image: "/projects/project-3.png",
    tech: ["Next.js", "Tailwind", "TypeScript", "React"],
    demoUrl: "https://asfall.vercel.app",
    githubUrl: "https://github.com/Asfalfuadd/portofall",
  },
];

export const socials = [
  { platform: "GitHub", url: "https://github.com/Asfalfuadd", label: "GitHub" },
  { platform: "Instagram", url: "https://www.instagram.com/asfaall__/", label: "Instagram" },
  { platform: "TikTok", url: "https://www.tiktok.com/@svall05", label: "TikTok" },
];
