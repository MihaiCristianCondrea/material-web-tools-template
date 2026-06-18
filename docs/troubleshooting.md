# Troubleshooting

## Blank page on GitHub Pages

Check that the repository name matches the base path in `vite.config.js`, `index.html`, and `public/manifest.webmanifest`.

## Material component is unknown

Add the component registration import to `src/core/material/MaterialElements.ts` and rebuild.

## SCSS import fails

Install dependencies with `npm install` or `npm ci`. Component styles should be imported as `./Component.scss?raw`.

## An empty future directory disappeared

Git does not track empty folders. Add a `.gitkeep` file to preserve architecture-only directories, but avoid adding placeholder feature trees that make the starter look product-specific.
