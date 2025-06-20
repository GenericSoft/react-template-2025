# Modern React Template 2025

A modern, feature-rich React template built with the latest technologies for scalable web applications.

## 🚀 Tech Stack

- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **[React 18](https://react.dev/)** - A JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types
- **[React Router v7](https://reactrouter.com/)** - Client-side routing
- **[TanStack Query](https://tanstack.com/query)** - Powerful asynchronous state management
- **[Axios](https://axios-http.com/)** - Promise based HTTP client
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Bear necessities for state management
- **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)** - Code quality and formatting

## 🔧 Required Extensions

For the best development experience, please install the following VS Code extensions:

- **ESLint** ([dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)) - Real-time linting
- **Prettier** ([esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) - Code formatting

Note: While ESLint will still work through the command line (`npm run lint`) and during builds without the extension, the VS Code extension provides:

- Real-time error and warning highlighting
- Quick-fix suggestions
- Auto-fix on save (when configured)
- Better developer experience

### VS Code Settings

Add these settings to your VS Code `settings.json` for the best experience:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

These settings will:

- Auto-fix ESLint issues on save
- Format your code with Prettier on save
- Set Prettier as the default formatter

## 📁 Folder Structure

### Absolute Imports

This template is configured with absolute imports using the `@` alias that points to the `src` directory.
This means you can import files using `@/components/Example` instead of relative paths like `../../components/Example`.

```
src/
|-- api/              # API configurations and services
|   |-- axios.ts      # Axios instance and interceptors
|   |-- todos.ts      # Todo-related API calls
|-- assets/            # Static assets
|   |-- react.svg
|-- components/        # Reusable UI components
|   |-- example/
|   |   |-- example.tsx
|-- hooks/            # Custom React hooks
|   |-- useCopyToClipboard.ts
|-- layouts/          # Layout components
|   |-- MainLayout.tsx
|-- pages/            # Route pages
|   |-- error/
|   |-- home/
|       |-- Home.css
|       |-- Home.tsx
|-- queries/          # TanStack Query configurations
|   |-- queries.ts
|-- router/           # React Router setup
|   |-- router.tsx
|-- stores/           # Zustand store definitions
|   |-- appStore.ts
|-- types/            # TypeScript type definitions
|   |-- todo.ts
|-- utils/            # Utility functions
|   |-- constants.ts
|-- App.css
|-- App.tsx
|-- index.css
|-- main.tsx
|-- vite-env.d.ts
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/
eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/
eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
