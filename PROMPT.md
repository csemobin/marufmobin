# AI conversion prompt

Copy everything below the line into Cursor, ChatGPT, or another coding agent when someone wants to turn this portfolio into **their** site.

---

You are converting this Next.js portfolio into a new personal site for me.

## My identity (fill these in)

- Full name:
- Professional title / role (e.g. Flutter Developer):
- Short SEO title (name — role):
- One-paragraph site description (for meta + SEO):
- Public site URL (after deploy, e.g. https://username.vercel.app):
- Email:
- Phone (optional):
- Location:
- Availability line (e.g. Available for freelance):
- GitHub username:
- Social links (GitHub, LinkedIn, others):
- Copyright year:

## My content (fill or attach)

- Hero headline + short lede
- Bio paragraphs (2–3)
- Skills list
- Experience jobs (company, place, role, period, bullet points, optional link)
- Projects (for each: title, slug, year, role, tags, summary, problem, approach, outcome, store/demo links, featured yes/no)
- Cover letter paragraphs + greeting/closing
- CV sections if different from cover letter (summary, education, courses, tools, spoken languages)
- Accent color hex (optional; default is #A476FF)

## Assets I will provide / replace

- Portrait photo → `src/images/marufmobin.jpg` (rename if needed and update import)
- Featured app screenshots → `src/images/`
- App logos → `src/images/logos/`
- Favicon + apple icon + OG image → `public/`

## Rules for you (the AI)

1. Change **content and assets only** unless a layout change is required for my projects count/keys.
2. Edit these files first:
   - `src/content/site.ts`
   - `src/content/profile.ts`
   - `src/content/projects.ts`
   - `src/content/featured-projects.ts`
   - `src/content/cover-letter.ts`
   - `src/content/navigation.ts` (labels only if needed)
3. Update image imports in `src/features/home/featured-projects.tsx` and `src/features/home/home-view.tsx` to match my filenames/keys.
4. Keep TypeScript valid: unique project slugs; featured story/app `key`s must match image maps.
5. Remove every leftover reference to the previous owner (name, email, phone, socials, store URLs, GitHub user).
6. Do **not** invent fake projects or store links. If I did not provide a link, leave `links: []`.
7. Keep structure: `app` / `content` / `features` / `components` / `lib`.
8. After edits, run or reason through: no broken imports, `npm run typecheck` should pass.
9. Summarize what you changed in a short checklist at the end.

## Optional extras (only if I ask)

- Wire contact email delivery in `src/features/contact/actions.ts`
- Change theme tokens in `src/app/globals.css`
- Add/remove nav sections
- Custom domain notes for Vercel

Start by reading `docs/CUSTOMIZATION.md`, then apply my filled identity and content above.
