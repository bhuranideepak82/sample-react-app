<!--
Guidance for AI coding agents working in this repository.
Keep this file short and focused on concrete, discoverable patterns.
-->
# Copilot instructions for sample-react-app (react-app)

- Purpose: Help AI agents make small, correct changes to the `react-app` Vite + React + TypeScript sample.

- Project layout (important files):
  - `react-app/package.json` : scripts available (`dev`, `build`, `preview`).
  - `react-app/vite.config.ts` : Vite uses `@vitejs/plugin-react` for HMR and JSX.
  - `react-app/tsconfig.json` : TypeScript is `strict` and `noEmit: true` (typechecking only).
  - `react-app/src/main.tsx` : app entry; mounts `App` into `#root`.
  - `react-app/src/App.tsx` : the main example component to follow for UI patterns.
  - `react-app/src/Message.tsx` : currently empty — add small components here.
  - `react-app/public/*` and `react-app/src/assets/*` : public static files (`/vite.svg`) vs bundled assets (`import reactLogo from './assets/react.svg'`).

- How to run (developer workflows):
  - Install dependencies at `react-app` folder, then run the dev server:

    npm install
    npm run dev

  - Build step intentionally runs type-checking then Vite build:

    npm run build

    Note: `build` runs `tsc` (no emit) to catch type errors, then `vite build`.

- Debugging & quick checks:
  - Use the Vite dev server (default port 5173) to test HMR against `src/App.tsx`.
  - For type issues, run `npx tsc --noEmit` in the `react-app` folder.

- Code & style conventions specific to this repo:
  - TypeScript is strict (`strict: true`). Prefer typed props and avoid `any`.
  - Components live in `src/` as single-file `.tsx` modules, default-exported (see `App.tsx`).
  - Static images referenced from `public/` should use absolute paths (e.g. `/vite.svg`).
  - Bundled images should be placed under `src/assets` and imported (see `react.svg`).

- Integration notes and gotchas:
  - `tsconfig.node.json` is used to type-check `vite.config.ts` via project references.
  - Because `tsconfig.json` sets `noEmit: true`, tests or tooling that expect JS output must run the bundler (`vite build`).
  - There is no test setup in this repo — avoid adding test scaffolding unless requested.

- Where to make changes:
  - UI: `src/` — add components and styles next to `App.tsx`.
  - Config: `vite.config.ts` and `tsconfig*.json` live in `react-app/` root.

- Example small change pattern (follow existing code):
  - Add a component in `src/Message.tsx` with typed props, import it in `App.tsx`, and test HMR via `npm run dev`.

- When uncertain, inspect these files first: `react-app/package.json`, `react-app/vite.config.ts`, `react-app/tsconfig.json`, `react-app/src/main.tsx`, `react-app/src/App.tsx`.

- Please ask if any part is unclear or you want this expanded with examples for tests, linting, or CI.
