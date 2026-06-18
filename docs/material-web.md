# Material Web

Material usage is centralized so template features can use Material elements without scattering registration imports.

## Import boundary

Register Material elements in `src/core/material/MaterialElements.ts`. Feature components should use Material tags such as `md-filled-button` and `md-icon`, but should not import `@material/web` directly.

## Current GitHub Pages setup

`vite.config.js` externalizes `@material/web/*` imports and `index.html` resolves them with an import map. This keeps the startup page deployable on GitHub Pages in environments where installing the Material package is restricted.

For production projects that can install all npm packages, add `@material/web`, remove the Rollup external rule, and let Vite bundle the Material modules from npm.

## Styling

Prefer Material attributes, slots, and documented CSS custom properties. Do not override internal Material structure, padding, shape, ripple, focus, disabled behavior, or animation from application SCSS.

## Current elements

- `md-filled-button`
- `md-outlined-button`
- `md-icon`
- `md-outlined-icon-button`
- `md-outlined-text-field`
