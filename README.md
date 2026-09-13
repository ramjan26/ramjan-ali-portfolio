# Ramjan Ali Portfolio — Deployment Build

Production-focused pass preserving the existing visual identity, project-card design, content, and interactions.

## What changed
- Deferred all Lottie JSON and the Lottie runtime until the artwork is needed.
- Removed the Motion and GSAP runtime from the project.
- Replaced Motion-based reveal/project animations with lightweight CSS + IntersectionObserver behavior.
- Reduced scroll/cursor React re-renders by updating the DOM directly in requestAnimationFrame.
- Delayed Lenis initialization until idle time.
- Added pre-paint theme initialization to reduce dark-mode repainting.
- Fixed the header signature to use the same tight bracket/name treatment as the loader.
- Removed the long horizontal divider above Selected Work while preserving card dividers.
- Kept responsive behavior and reduced-motion support.

## Run locally

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to your deployed origin before deployment if you add absolute canonical/OG URLs in metadata or sitemap.

## Notes
The project was syntax-reviewed. A full install/build was attempted in the build environment but dependency installation timed out, so Lighthouse scores cannot be claimed here. Verify `npm run build` on the deployment machine before publishing.
