# Deployment checklist

1. Extract this folder so `package.json` is at the project root.
2. Run `npm install`.
3. Run `npm run build`.
4. Run `npm start` and smoke-test the portfolio.
5. Check desktop/mobile widths, light/dark theme, navigation, projects, external links, and contact links.
6. Run Lighthouse on the production build in Incognito.
7. Configure the live site URL in your hosting environment before final metadata/canonical setup.

Recommended Vercel flow: import the repository, keep the default Next.js build settings, and add any required environment variables before deploying.
