# React Browser History Simulator

A small interactive simulator demonstrating how browser navigation and history work using two stacks (back and forward). This app is built with React + TypeScript and uses Vite for bundling. It's intended as an educational tool and lightweight demo for learning how browser history can be implemented using stack data structures.

Key goals:

- Visualize navigation between pages with Back / Forward behavior.
- Inspect the internal stacks used to implement history.
- Offer an interactive address bar and page view for experimentation.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Run (dev)](#run-dev)
  - [Build / Preview](#build--preview)
- [Project structure](#project-structure)
- [Notes](#notes)
- [Contributing](#contributing)
- [License](#license)

## Demo

Run the app locally (see below) and open `http://localhost:5173` in your browser. The UI provides an address bar, navigation toolbar (Back, Forward, Visit), a page view, and a stacks inspector showing the current back/forward stacks.

Live demo (deployed to GitHub Pages):

[React Browser History Simulator](https://kmdebug.github.io/react-browser-history-simulator/ 'Live Demo')

(Note: the site will be live after you run `npm run deploy` or when your CI workflow publishes the `gh-pages` branch.)

## Features

- Interactive address bar to navigate to custom URLs.
- Back / Forward navigation implemented with two stacks.
- Visual inspector showing the contents of each stack.
- Minimal UI built with Tailwind CSS.

## Tech stack

- React 19 (functional components + hooks)
- TypeScript
- Vite (dev server + build)
- Tailwind CSS
- ESLint for linting

## Getting started

### Prerequisites

- Node.js 18+ recommended
- A package manager (pnpm, npm or yarn). The project uses standard npm scripts.

### Install

Open a terminal in the project root and run:

```bash
npm install
```

### Run (dev)

Start the dev server (Vite):

```bash
npm run dev
```

Open `http://localhost:5173`

### Build & Preview

To produce a production build and preview it locally:

```bash
npm run build
npm run preview
```

### Lint

Run ESLint across the project:

```bash
npm run lint
```

### Testing

This project uses Vitest for unit tests. Tests are organized per-feature. Each feature can provide its own test setup file at `__tests__/setup.ts` next to its tests (for example `src/features/navigation/__tests__/setup.ts`).

Run tests with:

```bash
npm run test
```

To run tests once (CI mode):

```bash
npm run test -- --run
```

#### Hints

- The Vitest configuration is in `vitest.config.ts` and uses a DOM-like environment. Per-feature `setup.ts` files are picked up manually by tests in those folders.
- If you add a global test setup file, add it to `vitest.config.ts` under `test.setupFiles`.

## Project structure

Feature-based (vertical slices) with a single navigation slice.

Important files and folders:

- `src/main.tsx` - App bootstrap and React entrypoint
- `src/app/App.tsx` - Top-level app layout
- `src/app/features/navigation` - Core feature: hooks, UI, and small utilities
  - `state/useBrowserHistory.ts` - Hook implementing the two-stack browser history logic
  - `ui/AddressBar.tsx` - Address bar component
  - `ui/BrowserHistorySimulator.tsx` - Main simulator UI
  - `ui/HistoryToolbar.tsx` - Back / Forward / Visit controls
  - `ui/PageView.tsx` - Simple page renderer
  - `ui/StacksInspector.tsx` - Visualizes back/forward stacks

Other repo files:

- `vite.config.ts` - Vite configuration
- `tsconfig*.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

## Notes

Overview:

This project demonstrates an implementation of browser-like history using two stacks:

- backStack: holds previously visited pages. Pushing a new page clears the forward stack.
- forwardStack: holds pages popped from backStack when navigating backward. Visiting a new page clears forwardStack.

Contract (what the hook provides):

- Inputs: a starting URL, and calls to visit(url), goBack(), goForward().
- Outputs: the current URL, boolean flags indicating whether back/forward are possible, and the two stacks for inspection.

Edge cases considered:

- Visiting the same URL twice — the stacks update predictably (depending on implementation choices).
- Attempting to go back when there is no history — operation is a no-op and guard flags prevent errors.
- Large navigation sequences — stacks grow linearly with visited pages.

This is intentionally small and educational; it doesn't attempt to replicate full browser semantics (history.replaceState, scroll/restoration, entries with state objects, etc.).

## Contributing

Contributions are welcome. If you'd like to contribute:

1. Fork the repository.
2. Create a branch for your feature/fix: `git checkout -b feat/name`
3. Install dependencies and run the dev server.
4. Add tests or documentation where appropriate.
5. Open a pull request describing your changes.

Please follow existing code style, TypeScript typing, and lint rules. Run `npm run lint` before opening a PR.

## License

This project is provided under the MIT License. See the `LICENSE` file for details.

Copyright © 2025, [Kaissar Mouelhi](https://www.kmdebug.dev/ 'Portfolio')
