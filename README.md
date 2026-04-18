# Isa Portfolio

Personal portfolio site built with [Next.js](https://nextjs.org) (App Router), React, and Tailwind CSS. Content is localized (`en` / `es`) under `src/app/[lang]/`.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (or pnpm / yarn / bun)

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
| `npm run lint` | Run ESLint               |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Routes use a language prefix, for example `/en` and `/es`.

## Stack (high level)

- Next.js 16 · React 19 · TypeScript
- Tailwind CSS 4

## Deploy

A typical choice is [Vercel](https://vercel.com); see the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
