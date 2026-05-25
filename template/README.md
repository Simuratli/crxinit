# crxinit – Chrome Extension Boilerplate

A modern, professional boilerplate for building Chrome Extensions with React, Vite, and TypeScript.

---

## Features

- ⚡️ Built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/)
- 🧩 Popup UI (React)
- 📝 Content Script (src/contentScript.ts)
- 🛠️ Background Service Worker (src/background.ts)
- 🎨 SCSS support for styling
- 🦺 ESLint & Prettier integration
- 🧪 Ready for testing and CI/CD

---

## Getting Started

1. **Install dependencies**
  ```bash
  npm install
  ```

2. **Develop locally**
  ```bash
  npm run dev
  ```
  This runs Vite in watch mode. Use [Extension Reloader](https://chrome.google.com/webstore/detail/extension-reloader) or reload your extension manually in Chrome.

3. **Build for production**
  ```bash
  npm run build
  ```
  The output will be in the `dist/` folder, ready to load as an unpacked extension.

4. **Load in Chrome**
  - Go to `chrome://extensions/`
  - Enable "Developer mode"
  - Click "Load unpacked" and select the `dist/` folder

---

## Project Structure

```
src/
  App.tsx            # Popup UI (React)
  background.ts      # Background service worker
  contentScript.ts   # Content script
  scss/              # SCSS styles
public/
  assets/            # Extension icons
```

---

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build extension for production

---

## Customization

- Update extension name, description, and icons in `src/manifest.ts`
- Add your own React components in `src/components/`
- Extend content/background scripts as needed

---

## License

MIT
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
