# Material Web Tools Template

A lightweight TypeScript, SCSS, and HTML template for building small Material Design web tools.

The repo is intentionally simple: native web components, Vite, Material component examples, SCSS component styles, and one rename-friendly example feature.

## What is included

- TypeScript application bootstrapping in `src/app`.
- Shared web-component, state, event, and Material registration utilities in `src/core`.
- One small `example-feature` module with a text block and button interaction.
- SVG favicon/app icon, web app manifest, and SEO metadata.
- GitHub Pages deployment workflow configured for the `material-web-tools-template` repository path.

## Project structure

```text
src/
├── app/                  # bootstrap, composition root, and app shell
├── core/                 # reusable events, state, Material, typings, web components
└── features/
    └── example-feature/  # rename this for your first real tool
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The Vite base path is `/material-web-tools-template/`, so the production build works when published as a GitHub Pages project site.

## Architecture notes

- Keep runtime source in `src/`.
- Keep Material custom-element registration centralized in `src/core/material/MaterialElements.ts`.
- Use `.scss` for component styling; avoid new plain `.css` application styles.
- Use `?raw` when importing SCSS into a shadow-root component.
- Rename `src/features/example-feature` when you create your first real tool.

Read more in [`docs/architecture.md`](docs/architecture.md).
