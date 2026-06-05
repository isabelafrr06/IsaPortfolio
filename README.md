# Isabela Rodríguez Rocha — Portfolio

Personal portfolio site for **Isabela Rodríguez Rocha**, a Computing graduate from the University of Costa Rica. Built with Next.js App Router, React 19, TypeScript, and Tailwind CSS 4.

## Features

- **Bilingual (en / es)** — all content lives in JSON dictionaries under `src/app/[lang]/dictionaries/`. The middleware auto-redirects `/` to the visitor's preferred language based on `Accept-Language`.
- **Contact form** — powered by [Formspree](https://formspree.io), with client-side validation.
- **Sections** — Hero, About, Experience, Featured Projects, Skills, Contact, Footer.
- **Single-page layout** — all sections on one scrollable page per locale (`/en`, `/es`).

## Project structure

```
src/
├── app/
│   └── [lang]/
│       ├── dictionaries/
│       │   ├── en.json       # English content
│       │   └── es.json       # Spanish content
│       ├── dictionaries.ts   # Locale loader (server-only)
│       ├── layout.tsx        # Root layout with metadata
│       └── page.tsx          # Composes all sections
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ExperienceSection.tsx
│   ├── SkillsSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
└── proxy.ts                  # Locale redirect (Next.js 16 proxy convention)
```

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/en` or `/es` automatically.

## Scripts

| Command          | Description           |
| ---------------- | --------------------- |
| `npm run dev`    | Start dev server      |
| `npm run build`  | Production build      |
| `npm run start`  | Run production server |
| `npm run lint`   | Run ESLint            |

## Stack

- **Next.js 16** · App Router · Server Components
- **React 19** · TypeScript
- **Tailwind CSS 4**
- **Formspree** — contact form backend

## Deploy

Deployed on [Vercel](https://vercel.com). No extra configuration needed — Next.js is detected automatically. Set the `NEXT_PUBLIC_FORMSPREE_FORM_ID` environment variable in the Vercel dashboard to wire up the contact form.
