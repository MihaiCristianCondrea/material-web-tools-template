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


## npm command guide

For developers coming from Gradle, the rough mental model is:

```text
package.json      ≈ build.gradle.kts
package-lock.json ≈ gradle.lockfile / resolved dependency graph
node_modules      ≈ Gradle cache
```

The analogy is not perfect, but it is close enough for day-to-day project work.

### Install dependencies

```bash
npm install
```

This reads `package.json`, downloads missing packages, updates `package-lock.json` when needed, and creates or updates `node_modules`. It is similar to syncing or building a Gradle project so dependencies are available locally.

### Clean install for CI

```bash
npm ci
```

This removes `node_modules` and installs exactly the dependency versions recorded in `package-lock.json`. It fails when `package.json` and `package-lock.json` disagree, which makes it the preferred command for GitHub Actions and other repeatable CI environments.

### Run the app locally

```bash
npm run dev
```

This starts the Vite development server.

### Build the project

```bash
npm run build
```

Use `npm run build`, not `npm build`. `build` is a package script defined in `package.json`, so it must be launched through `npm run`. This project's build script runs TypeScript first and then creates the Vite production bundle.

### Preview the production build

```bash
npm run preview
```

This serves the already-built production output locally so you can check what Vite generated.

### Audit dependencies

```bash
npm audit
```

This checks the installed dependency tree for known security advisories and prints details about vulnerable packages when any are found.

### Check outdated dependencies

```bash
npm outdated
```

This reports the currently installed version, the newest version allowed by your `package.json` range, and the latest published version. It is useful before deciding whether to update dependencies.

### Update dependencies within allowed ranges

```bash
npm update
```

This updates packages to newer versions allowed by the version ranges in `package.json`. For example, `^7.0.0` can update to `7.x.x`, but it will not jump to `8.0.0` because that is a new major version.

### Update one dependency

```bash
npm install vite@latest
```

This updates a specific package and records the result in `package.json` and `package-lock.json` as needed.

### Check and apply major-version updates

```bash
npx npm-check-updates
npx npm-check-updates -u
npm install
```

`npm-check-updates` is a separate tool that can rewrite `package.json` ranges to newer major versions. After applying those changes, run `npm install` and verify with `npm run build`.

A typical dependency maintenance flow for this template is:

```bash
npm outdated
npm update
npm run build
```

For occasional major upgrades:

```bash
npx npm-check-updates -u
npm install
npm run build
```

Then commit the resulting `package.json` and `package-lock.json` changes.

## Architecture notes

- Keep runtime source in `src/`.
- Keep Material custom-element registration centralized in `src/core/material/MaterialElements.ts`.
- Use `.scss` for component styling; avoid new plain `.css` application styles.
- Use `?raw` when importing SCSS into a shadow-root component.
- Rename `src/features/example-feature` when you create your first real tool.

Read more in [`docs/architecture.md`](docs/architecture.md).
