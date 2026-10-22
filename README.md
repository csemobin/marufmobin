# Maruf Mobin — Portfolio

A production-ready **Next.js** portfolio for a Flutter / mobile developer. Content lives in typed data files; routes, SEO, sitemap, and project pages read from that content.

**Live:** [https://marufmobin.vercel.app](https://marufmobin.vercel.app)

---

## Features

- Home hero, featured apps, experience, GitHub contributions, cover letter & CV, contact
- Dedicated routes: `/`, `/work`, `/work/[slug]`, `/about`, `/contact`
- SEO: metadata, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`, JSON-LD
- Cover letter & curriculum vitae with client-side PDF download
- Mobile bottom nav + desktop floating nav
- Content-first architecture — swap identity without rewriting layout code

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

---

## Make it yours (reuse)

This repo is designed so another person can turn it into **their** portfolio by editing content and assets — not by rebuilding pages.

| Document | Purpose |
| --- | --- |
| [`docs/CUSTOMIZATION.md`](docs/CUSTOMIZATION.md) | Full checklist of what to change |
| [`PROMPT.md`](PROMPT.md) | Paste into Cursor / ChatGPT to convert the site quickly |

**Minimal path**

1. Update `src/content/site.ts` — name, URL, email, socials, SEO.
2. Update `src/content/profile.ts` — bio, skills, experience.
3. Update `src/content/projects.ts` and `src/content/featured-projects.ts` — your apps.
4. Update `src/content/cover-letter.ts` — letter + CV.
5. Replace images in `src/images/` and `public/`.
6. Set accent color in `src/app/globals.css` if needed.
7. Deploy (Vercel recommended) and set Search Console.

---

## Project structure

```text
src/
  app/              Routes, metadata, robots, sitemap
  content/          All copy and site data (edit here first)
  features/         Screen sections (home, work, contact, …)
  components/       Shared layout and UI
  images/           Portrait, app art, logos
  lib/              Shared helpers
public/             favicon, apple-icon, og.jpg
docs/               Reuse / customization guide
PROMPT.md           AI conversion prompt
```

**Boundaries**

- Routes choose views + metadata; they do not own long-form copy.
- Features own one screen or section.
- Content files export data only — no UI imports.
- Prefer Server Components; add `"use client"` only for interactivity.

---

## Content map

| File | Controls |
| --- | --- |
| `src/content/site.ts` | Name, role, URL, email, phone, socials, SEO keywords |
| `src/content/profile.ts` | Hero, bio, skills, experience timeline |
| `src/content/projects.ts` | `/work` case studies (`featured` → home) |
| `src/content/featured-projects.ts` | Home featured stories + app grid |
| `src/content/cover-letter.ts` | Cover letter + CV + PDF filenames |
| `src/content/navigation.ts` | Primary nav labels / hashes |
| `src/content/types.ts` | Shared TypeScript shapes |

---

## Stack

- **Next.js** (App Router) · **React** · **TypeScript**
- **Tailwind CSS** v4
- **jspdf** (cover letter / CV download)
- Deployable on **Vercel** (or any Node host)

---

## Contact form

Validation runs on the server. Email delivery is not wired by default. To send messages, replace the success path in `src/features/contact/actions.ts` with your provider (Resend, SendGrid, etc.).

---

## License & credit

Built as a personal portfolio for **Maruf Mobin**. If you reuse this template, replace all personal content, images, and store links with your own. Keep attribution in your README if you fork publicly — appreciated, not required.

---

## Author

**Maruf Mobin** — Flutter Developer · Mobile Application Developer  
Portfolio: [marufmobin.vercel.app](https://marufmobin.vercel.app) · GitHub: [MarufMobin](https://github.com/MarufMobin)
