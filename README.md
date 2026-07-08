# Mahendra Portfolio

Interactive responsive portfolio website built with React, Vite, and plain CSS.

## Edit Your Details

Most content is in `src/App.jsx`:

- `profile`: name, role, email, links, resume URL
- `skills`: your skill list
- `projects`: portfolio project cards
- `timeline`: education or experience history
- `testimonials`: optional quotes

The main styles are in `src/styles.css`. The hero image is stored at
`src/assets/portfolio-hero.png`.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal.

Do not open `index.html` directly in the browser. React/Vite needs the local
development server. Use one of these URLs after running the command above:

- `http://localhost:5173/`
- `http://127.0.0.1:5173/`

If PowerShell blocks `npm`, run the same commands with `npm.cmd`:

```bash
npm.cmd install
npm.cmd run dev
```

## Build For Hosting

```bash
npm run build
```

This creates a `dist` folder that can be deployed.

To test the production build locally:

```bash
npm run preview
```

## Free Hosting Suggestions

Recommended: **Vercel**. It is very easy for React/Vite projects:

1. Push this project to GitHub.
2. Go to <https://vercel.com>.
3. Import your GitHub repository.
4. Keep the defaults: build command `npm run build`, output directory `dist`.
5. Deploy.

Other good free options:

- **Netlify**: simple drag-and-drop deploy for the `dist` folder.
- **GitHub Pages**: free and reliable, but needs a little extra Vite base-path setup for project pages.
- **Cloudflare Pages**: fast global hosting with a generous free plan.
