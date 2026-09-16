# Paolo Garcia — Portfolio

Next.js 14 (App Router) + Tailwind CSS + Framer Motion. Liquid glass / bento grid design,
built from your resume content.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's already wired up from your resume

- `data/profile.ts` — name, contact, career objective, education, awards
- `data/projects.ts` — all 5 projects (EDTS, Pokémon Predictor, Digital Event Calendar,
  OLS, Administrative Loan Tracker) with their stack and highlights
- `data/skills.ts` — technical + soft skills

## Things to add before you deploy

1. **Your photo** → drop it in `public/images/profile/`
2. **Project screenshots** → one `cover.jpg` per folder in `public/images/projects/*/`
   (referenced in `data/projects.ts` but not currently used on the homepage — swap them
   in on `ProjectsGrid.tsx` / the project detail page once you have real screenshots)
3. **Resume PDF** → put the actual file at `public/resume/Paolo_Garcia_Resume.pdf`
   (the "Resume" button in the navbar already links here)
4. **Repo / live links** → fill in `repoUrl` / `liveUrl` per project in `data/projects.ts`
   if you want "View code" / "Live demo" buttons later
5. **GitHub / LinkedIn** → fill in `data/profile.ts` under `socials` if you want to add
   icons to the footer or contact page

## Deploy to Vercel (free)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new, import the repo
3. Framework preset auto-detects as Next.js — no config needed
4. Deploy. You'll get a free `yourproject.vercel.app` URL instantly, plus a
   custom domain option if you buy one later

## Notes on the design

- Palette, fonts (Space Grotesk / Public Sans), and the glass-surface effect all live in
  `app/globals.css` and `tailwind.config.ts` — change the `signal` / `signal2` colors there
  if you want a different accent.
- The bento layout is in `components/sections/ProjectsGrid.tsx` — adjust the `span` logic
  to change which cards are large/small.
