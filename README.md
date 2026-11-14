# Asfal Fuad — Portfolio Website

Personal portfolio website built with **Next.js 15**, **Tailwind CSS**, and **shadcn/ui**. Clean, performant, and fully responsive.

## Live Demo
[asfall.vercel.app](https://asfall.vercel.app)

## Tech Stack

| Category | Tools |
|----------|-------|
| **Framework** | Next.js 15 (App Router), React 18 |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI |
| **Language** | TypeScript |
| **Icons** | Lucide React |
| **Theming** | next-themes (dark/light mode) |
| **Lint/Format** | ESLint, Prettier |

## Features

- **Hero section** — nama, title, tagline, CTA ke project & contact
- **About** — bio singkat + foto profil
- **Skills** — 4 kategori: Frontend, Backend, Languages, Tools
- **Projects** — 3 project dengan gambar, tech stack, link demo & GitHub
- **Contact** — form kontak + link sosial media
- **Dark/Light mode** — persist di localStorage
- **Responsive** — mobile-first, breakpoints Tailwind default
- **Accessible** — semantic HTML, focus states, contrast OK

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page (komposisi section)
│   ├── layout.tsx        # Root layout, providers, fonts
│   └── globals.css       # Tailwind + custom styles
├── components/
│   ├── navbar.tsx        # Navigation + theme toggle
│   ├── hero.tsx
│   ├── about.tsx
│   ├── skills.tsx
│   ├── projects.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── ui/               # shadcn/ui components (button, card, badge, separator)
├── lib/
│   ├── data.ts           # Semua konten: info personal, skills, projects, socials
│   └── utils.ts          # cn() helper (clsx + tailwind-merge)
```

