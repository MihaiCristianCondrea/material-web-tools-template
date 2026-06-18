# Deployment

The template is ready for GitHub Pages as a project site named `material-web-tools-template`.

## Build settings

- `vite.config.js` uses `base: "/material-web-tools-template/"`.
- `public/manifest.webmanifest` uses the same start URL and scope.
- `index.html` references public assets under the same base path.

## Workflow

`.github/workflows/deploy.yml` builds with Node.js 22, uploads `dist`, and deploys with GitHub's official Pages actions.

## If you rename the repository

Update these paths together:

1. `vite.config.js` base path.
2. `public/manifest.webmanifest` `start_url` and `scope`.
3. Asset URLs in `index.html` metadata.
