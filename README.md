# Portfolio (Next.js)

A Next.js (App Router) portfolio for Gian Ezekiel S. Gersaniba. Each page
section lives in its own folder under `components/`, and route files in
`app/` just import and render the matching section.

## Structure

```
components/
  Hero/
    Hero.js          homepage hero (name, role, dot-texture bg, CTAs)
  Nav/
    Nav.js
  Footer/
    Footer.js
  About/
    About.js
  Projects/
    Projects.js       list wrapper, takes an optional `limit` prop
    ProjectCard.js     sub-component used by Projects.js
  Contact/
    Contact.js
app/
  layout.js            loads Nav + Footer + global CSS
  page.js               home: <Hero /> + <Projects limit={2} />
  projects/page.js      renders <Projects />
  about/page.js         renders <About />
  contact/page.js       renders <Contact />
  globals.css           design tokens + dot-texture utility class
lib/
  projects.js           edit this array to add/remove/update projects
```

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Customize

- Edit the content directly inside each `components/<Section>/<Section>.js`
  file — that's the single source of truth for that section's copy.
- Edit `lib/projects.js` for your real projects.
- Colors/fonts are CSS variables at the top of `app/globals.css`.
- Add a `resume.pdf` file to `public/` so the Resume button in the hero
  works (it currently links to `/resume.pdf`).
- Update the GitHub/LinkedIn/email links in `Hero.js` and `Contact.js`.

## Deploy (free)

Static export is already configured (`next.config.mjs`):

```bash
npm run build
```

Output goes to `out/`. Deploy that folder to Vercel, Netlify, GitHub Pages,
or Cloudflare Pages.

## Next steps

- Wire up a real contact form
- Add project detail pages (`app/projects/[slug]/page.js`)
- Add a favicon and OG image in `public/`
