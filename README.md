# Satwik Dubey · Portfolio

My personal site, designed as a retro "personal OS". The home screen is a CRT monitor, every section is a window, and the nav is a taskbar at the bottom.

Live: https://satwikdubey.vercel.app

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Edit the content

All the text, links and projects live in **`src/data.ts`**. You don't need to touch the components to update the site.

- Anything written as `[ ... ]` shows up in amber as a spot still to fill in (college, city, internships).
- To add a project, add an entry to `projects` and put its screenshot in `public/projects/`.

## Stack

React 19 · TypeScript · Vite. Styling is plain CSS in `src/styles.css`. The dithered sky is drawn on a canvas (`src/components/Dither.tsx`).

## Build and deploy

```bash
npm run build     # outputs to dist/
npm run preview   # serves the build locally
```

Vercel picks this up as a Vite project with no extra settings.
