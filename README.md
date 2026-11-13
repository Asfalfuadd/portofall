# Asfal Fuad — Portfolio Website

Personal portfolio website built with **Next.js 15**, **Tailwind CSS**, and **shadcn/ui**. Clean, performant, and fully responsive.

## Live Demo
[portofall.vercel.app](https://portofall.vercel.app) *(deploy ke Vercel setelah push)*

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

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) / npm / yarn

### Install & Run

```bash
# clone
git clone https://github.com/Asfalfuadd/portofall.git
cd portofall

# install dependencies
pnpm install    # atau: npm install / yarn install

# development server
pnpm dev        # http://localhost:3000

# production build
pnpm build
pnpm start
```

### Customize Content

Semua konten ada di **`src/lib/data.ts`**:

```ts
export const personalInfo = {
  name: "Asfal Fuad",
  title: "Web Developer",
  tagline: "Building clean, performant web experiences.",
  bio: "...",
  avatar: "/avatar.jpg",      // ganti foto di public/avatar.jpg
  resumeUrl: "#",             // link CV/Resume
};
```

- **Avatar**: ganti file `public/avatar.jpg` (recommended 400x400, JPG/PNG)
- **Projects**: edit array `projects` — title, description, image, tech, link demo & GitHub
- **Socials**: edit array `socials` — platform, url, label
- **Skills**: edit `skillCategories` — title, icon (Lucide), items

### Add Project Images

Taruh gambar di `public/projects/` lalu referensikan di `data.ts`:
```ts
image: "/projects/project-1.png",
```

## Deploy to Vercel

1. Push ke GitHub (sudah dilakukan)
2. Import project di [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Next.js** (auto-detect)
4. Build command: `pnpm build` (atau `npm run build`)
5. Output directory: `.next` (default)
6. Deploy — selesai, dapat URL `*.vercel.app`

Environment variables: **tidak perlu** (project ini static, tanpa API key).

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server (localhost:3000) |
| `pnpm build` | Production build |
| `pnpm start` | Run production server |
| `pnpm lint` | ESLint check |

## License

MIT — gunakan bebas untuk portfolio sendiri. Credit ke [shadcn/ui](https://ui.shadcn.com) & [Tailwind CSS](https://tailwindcss.com) untuk component & styling system.