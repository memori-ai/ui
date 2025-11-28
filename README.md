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

Example usage for the Button component:

```tsx
import { Button } from '@memori.ai/ui'
```

```jsx
<Button>Click me</Button>
```

To see all components, visit our [Storybook](https://memori-ai.github.io/ui/).

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
- [React Aria](https://react-spectrum.adobe.com/react-aria/index.html)
- [Storybook](https://storybook.js.org)
- [Vite](https://vitejs.dev)
- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev)
- [React Testing Library](https://testing-library.com/react)
- [React I18next](https://react.i18next.com)
