# Portfolio

A Next.js portfolio template with a short path from content to page. Edit the files in `src/content`. The routes, lists, project pages, and sitemap read from there.

## Start

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Local development |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

## Make it yours

1. Set your name, URL, email, and social links in `src/content/site.ts`.
2. Write the introduction, bio, skills, and experience in `src/content/profile.ts`.
3. Replace the sample projects in `src/content/projects.ts`. One object is one project.
4. Change the palette in `src/app/globals.css` if you want different colors.

A project with `featured: true` appears on the home page. Every project appears on `/work` and at `/work/[slug]`. The slug is the URL. Slugs must be unique.

The contact form validates on the server and does not send email yet. When you are ready to deliver messages, replace the success return in `src/features/contact/actions.ts` with your email provider.

## How the code is arranged

```text
src/
  app/            Routes. Pages compose a view and export metadata.
  content/        Words, projects, and site settings. Start here.
  features/       One folder per screen: home, work, about, contact.
  components/     Shared layout and small UI pieces.
  lib/            Lookups and helpers used by more than one feature.
```

Follow these boundaries:

- A route file chooses the view and the metadata. It does not own copy or markup for a whole screen.
- A feature owns one screen. If a piece is used by a second feature, move it to `components` or `lib`.
- Content files export data only. They do not import UI.
- Server Components are the default. Add `"use client"` only when a component needs state or a browser event, as the mobile navigation and contact form do.
- Expected form errors are returned as data. Unexpected render errors are handled by `app/(site)/error.tsx`.
- Unknown project slugs call `notFound()`.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS, and ESLint. Cache Components are enabled in `next.config.ts`, which is the current `create-next-app` default. Project pages are prerendered from `generateStaticParams`.
