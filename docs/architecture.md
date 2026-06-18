# Architecture

Material Web Tools Template is a Vite app built with native web components, TypeScript, SCSS, and a small Material-styled startup page.

## Goals

- Keep the starter understandable for small tools.
- Provide one generic example feature that can be renamed.
- Keep Material Web setup centralized.
- Keep GitHub Pages deployment working with a repository base path.

## Runtime boot path

1. `src/main.ts` imports `src/app/main.ts`.
2. `src/app/main.ts` initializes services and state, then mounts `<material-tools-app>`.
3. `src/app/App.ts` imports `src/core/material/MaterialElements.ts`, which registers the Material elements used by the app.
4. `src/app/App.ts` renders the startup page and mounts `ExampleFeature`.
5. `ExampleFeature` reads a tiny domain use case, shows text, and increments a click count when the button is pressed.

## Source layout

```text
src/app
```

The composition root. Put startup code, service wiring, and the top-level app shell here.

```text
src/core
```

Reusable code that is not owned by one feature:

- `events/` for event and observable helpers.
- `material/` for centralized Material Web custom-element registration.
- `state/` for model/state helpers.
- `typings/` for Vite and raw asset declarations.
- `webcomponents/` for the base native custom-element helper and optional loader.

```text
src/features/example-feature
```

The only starter feature. It is intentionally small and generic:

- `domain/` contains the example message type and use case.
- `presentation/` contains the web component, HTML template, and SCSS.

Rename `example-feature` when you start a real project. Add a `data/` folder only when the feature needs API access, local storage, DTOs, or mappers.

## Styling rule

Application styles should be SCSS. Component SCSS is imported with `?raw` and injected into the component shadow root by `WebComponent`.

## Adding a small tool

1. Rename `src/features/example-feature` to match your tool.
2. Rename `ExampleFeature` and its HTML/SCSS files.
3. Replace the example domain use case with your first real action.
4. Register any new Material elements in `src/core/material/MaterialElements.ts`.
5. Add `.gitkeep` files only for intentionally empty directories that document future architecture.
