# MemoriAI UI

This is the UI library for Memori AI and [AIsuru](https://www.aisuru.com).

Used by AIsuru platform and [Client](https://github.com/memori-ai/memori-client) components.

See [Storybook](https://memori-ai.github.io/ui/) for a showcase of all components and their usage.

## Installation

```bash
bun add @memori.ai/ui
# npm install @memori.ai/ui
# or yarn or pnpm
```

## Usage

### 1. Import Styles (Required)

You **must** import the compiled CSS file in your application's entry point (e.g., `main.tsx` or `App.tsx`) to ensure components are styled correctly.

```tsx
import '@memori.ai/ui/styles.css'
```

### 2. Import Components

```tsx
import { Button } from '@memori.ai/ui'

function App() {
  return <Button variant="primary">Click me</Button>
}
```

## Theming & Customization

This library uses a **dynamic OKLCH color system**. The entire color palette (shades 100-900) is automatically generated from base primary and secondary colors using CSS Relative Color Syntax.

### Overriding Brand Colors

To customize the theme, simply set the following CSS variables in your application (e.g., in `:root` or a specific container). You do **not** need to define every shade; the library calculates them for you.

```css
:root {
  /* Override Primary Color (Purple default) */
  --memori-primary-rgb: oklch(0.55 0.22 290); /* or hex, rgb, etc. */

  /* Override Secondary Color (Cyan default) */
  --memori-secondary-rgb: oklch(0.7 0.15 200);
}
```

### Dark Mode

The library includes built-in dark mode support. All components automatically adapt when dark mode is enabled.

#### Using the Theme Hook

The easiest way to add theme switching is using the `useTheme` hook:

```tsx
import { useTheme } from '@memori.ai/ui'

function App() {
  const { theme, setTheme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  )
}
```

The hook automatically:

- Detects system preference on first load
- Persists theme choice in localStorage
- Applies the theme to the document root

#### Manual Theme Control

You can also control the theme manually by setting a `data-theme` attribute or `dark` class on the document root:

```tsx
// Set dark mode
document.documentElement.setAttribute('data-theme', 'dark')
// or
document.documentElement.classList.add('dark')

// Set light mode
document.documentElement.removeAttribute('data-theme')
document.documentElement.classList.remove('dark')
```

### Styling Architecture

- **Plain CSS**: We use standard CSS files, not CSS Modules or CSS-in-JS.
- **Namespace**: All CSS classes and variables are prefixed with `memori-` to avoid conflicts (e.g., `.memori-button`, `--memori-spacing-md`).
- **BEM Convention**: Classes follow the Block Element Modifier convention (e.g., `.memori-card__header--active`).
- **Theme**: Is defined inside the '/theme/variables.css' file.
- **Icons**: We use [Lucide React](https://lucide.dev) for all icons.

## Development

To install dependencies:

```bash
bun install
```

To run Storybook:

```bash
bun run storybook # or bun sb
```

To run tests (in watch mode):

```bash
bun run test
# this is not the same as `bun test`
# `bun test` runs the tests using Bun test runner and it's not compatible with our setup
```

Linting:

```bash
bun lint
```

Linting CSS:

```bash
bun lint:css
```

Formatting:

```bash
bun format
```

Formatting check:

```bash
bun format:check
```

Type checking:

```bash
bun typecheck
```

Building:

```bash
bun run build
```

Release:

```bash
bun run release
```

## Tech stack

- [Bun](https://bun.com)
- [React](https://react.dev)
- [@base-ui/react](https://github.com/base-ui/react)
- [Storybook](https://storybook.js.org)
- [Vite](https://vitejs.dev)
- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev)
- [React Testing Library](https://testing-library.com/react)
- [React I18next](https://react.i18next.com)
- [Lucide React](https://lucide.dev)
