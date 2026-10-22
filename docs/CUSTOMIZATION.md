# Customization guide — reuse this portfolio

This document tells **anyone** who forks or receives this codebase what to change so the site becomes **their** portfolio. Follow it in order. Prefer editing `src/content/*` before touching UI.

Related files:

- [`README.md`](../README.md) — overview and scripts  
- [`PROMPT.md`](../PROMPT.md) — paste into an AI agent for a fast conversion  

---

## 1. What you need before starting

| Item | Required | Notes |
| --- | --- | --- |
| Full name + professional title | Yes | Used in hero, SEO, footer, CV |
| Public URL | Yes | e.g. `https://you.vercel.app` — set in `site.url` |
| Email | Yes | Contact + CV + footer |
| Phone | Optional | Shown on CV / cover header |
| Location | Yes | About / CV |
| Social profile URLs | Yes | At least GitHub; LinkedIn recommended |
| Portrait photo | Yes | Clear headshot or professional photo |
| Project write-ups | Yes | Real apps only — no placeholders |
| Store or demo links | Optional | App Store / Play / live URL |
| App screenshots + logos | Yes for home grid | Match keys in featured content |
| Favicon + OG image | Recommended | `public/favicon.jpg`, `apple-icon.jpg`, `og.jpg` (~1200×630 for OG) |
| Cover letter + CV text | Optional | If you keep the Cover & CV section |
| Accent color | Optional | Default purple `#A476FF` |

---

## 2. Must change (identity)

### `src/content/site.ts`

Update every field that mentions the previous owner:

- `seoKeywords`, `name`, `role`, `title`, `description`
- `url` ← your deployed domain  
- `email`, `phone`, `github`, `location`, `availability`, `copyrightYear`
- `signature` (name, role, skills)
- `socials` array (labels + hrefs)

### `src/content/profile.ts`

- Hero `eyebrow`, `headline`, `lede`, `intro`, `bio`
- `services`, `skills`
- Entire `experience` list (company, place, role, period, points, optional link)

### `src/content/cover-letter.ts`

- `applicant` (name, role, contact, portfolio)
- Cover letter greeting, paragraphs, closing, sign-off, `fileName`
- CV: summary, projects, languages, frameworks, tools, education, courses, experience, spoken languages, `fileName`

### `src/content/navigation.ts`

- Only if you rename sections (e.g. “Cover & CV” → “Resume”)

---

## 3. Must change (work / projects)

### `src/content/projects.ts`

One object = one `/work/[slug]` page.

| Field | Purpose |
| --- | --- |
| `slug` | URL segment — unique, kebab-case |
| `title`, `summary`, `year`, `role`, `tags` | List + detail header |
| `featured` | `true` can be used for highlighting; home grid uses `featured-projects.ts` |
| `problem`, `approach`, `outcome` | Case study body |
| `links` | App Store / Play / demo |

Remove all previous projects. Do not leave sample or demo apps.

### `src/content/featured-projects.ts`

Home section data:

- `featuredStories` — large story cards (usually 2) with `key`, `title`, `body`, `imageFirst`, `links`
- `featuredApps` — logo grid with `key`, `title`, `body`, `links`

**`key` values must match** the image maps in `src/features/home/featured-projects.tsx`.

---

## 4. Must change (images & branding)

| Path | Replace with |
| --- | --- |
| `src/images/marufmobin.jpg` | Your portrait (or rename + update import in `home-view.tsx`) |
| `src/images/*.png` | Your featured screenshots |
| `src/images/logos/*.png` | Your app logos |
| `public/favicon.jpg` | Your favicon |
| `public/apple-icon.jpg` | Apple touch icon |
| `public/og.jpg` | Social share image |

Then update imports in:

- `src/features/home/home-view.tsx` (portrait)
- `src/features/home/featured-projects.tsx` (`storyImages` + `appLogos` maps)

Delete unused image files so nothing from the previous owner remains.

### Theme (optional)

`src/app/globals.css` — CSS variables:

- `--accent` (and hardcoded `#A476FF` in some feature components if you want a full rebrand)
- `--background`, `--foreground`, `--muted`, `--line`

---

## 5. Should change (SEO & deploy)

1. Confirm `site.url` matches production (no old domain).
2. Deploy to Vercel (or your host).
3. Open `/robots.txt` and `/sitemap.xml` — every URL should use **your** domain.
4. Add the property in **Google Search Console** and submit the sitemap.
5. If an old host still exists, 301-redirect it to the new domain.
6. Spot-check page titles and Open Graph previews for `/`, `/work`, `/about`, `/contact`.

Page metadata lives in:

- `src/app/layout.tsx` (defaults)
- `src/app/(site)/page.tsx`, `about/page.tsx`, `work/page.tsx`, `contact/page.tsx`
- `src/app/(site)/work/[slug]/page.tsx` (per project)

JSON-LD uses `site` + `socials` from content — update content first.

---

## 6. Optional changes

| Task | Where |
| --- | --- |
| Wire contact email sending | `src/features/contact/actions.ts` |
| Hide Cover & CV section | Remove from `src/app/(site)/layout.tsx` + nav entry |
| Hide GitHub chart section | Remove from layout / home as needed |
| Nav labels / order | `src/content/navigation.ts` + icons in `primary-nav.tsx` |
| Package name | `package.json` → `"name"` |

---

## 7. Do not change (unless you know why)

- `src/lib/projects.ts` slug validation logic  
- `src/lib/url.ts` (reads `site.url`)  
- Core layout shells (`nav-shell`, `site-nav`, hash scroll) unless redesigning UX  
- Next.js App Router conventions under `src/app/`  

Keeping these stable is what makes the template reusable.

---

## 8. Checklist before you publish

- [ ] No previous owner name, email, phone, or social URLs left in `src/content/`
- [ ] No previous store / demo links
- [ ] Portrait and app images are yours
- [ ] `site.url` = live URL
- [ ] `npm run typecheck` and `npm run build` succeed
- [ ] `/sitemap.xml` lists your domain and real project slugs
- [ ] Contact form tested (validation); email provider wired if you need inbox delivery
- [ ] README author section updated if you publish the fork

---

## 9. Suggested workflow with AI

1. Fill the blanks in [`PROMPT.md`](../PROMPT.md).
2. Paste the prompt + your answers into Cursor.
3. Ask the agent to follow this file and report a change checklist.
4. Review the diff, run `npm run build`, then deploy.

---

## 10. Architecture reminder (why reuse is easy)

```text
Content (who you are)  →  Features (how it looks)  →  App routes (URLs + SEO)
```

Swap **content + images** first. Touch **features** only when your project keys, image maps, or section set differ. That is the intended reuse path.
