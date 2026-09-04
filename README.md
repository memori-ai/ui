# MemoriAI UI

React component library for Memori AI and [AIsuru](https://www.aisuru.com), used by the AIsuru platform and [Memori Client](https://github.com/memori-ai/memori-client) components.

For live examples, prop details, interaction states, and accessibility checks, use [Storybook](https://memori-ai.github.io/ui/). This README is the short integration guide.

## Installation

```bash
bun add @memori.ai/ui
# npm install @memori.ai/ui
# yarn add @memori.ai/ui
# pnpm add @memori.ai/ui
```

## Quick Start

Import the compiled stylesheet once from your application root, then import components from the package entry point.

```tsx
import '@memori.ai/ui/styles.css'
import { Button, MemoriI18nProvider } from '@memori.ai/ui'

export function App() {
  return (
    <MemoriI18nProvider>
      <Button variant="primary">Click me</Button>
    </MemoriI18nProvider>
  )
}
```

## Before You Integrate

- **Styles are required:** import `@memori.ai/ui/styles.css` once, usually in `main.tsx`, `App.tsx`, or your framework root layout.
- **Font is not bundled:** the default token uses `'Lexend Deca Variable', 'Lexend Deca', sans-serif`. Load that font in the host app, or override `--memori-font-family`.
- **Modern CSS is required:** the theme uses `oklch()`, `color-mix()`, CSS cascade layers, and CSS custom properties. Target modern browsers such as Chrome/Edge 111+, Safari 16.4+, and Firefox 113+.
- **Cascade layers:** the library declares `@layer memori.theme, memori.components, memori.overrides`. Put host overrides in `@layer memori.overrides { … }` (same order) so they win over component styles without `!important`.
- **Next.js App Router:** components are client-side React components. Use them from your own `'use client'` files and import the CSS once from the root layout.
- **Theming is CSS-token based:** prefer overriding hook tokens such as `--memori-primary-color`, `--memori-secondary-color`, and `--memori-font-family` in the host app. For embeds, set `data-theme` on the widget root and pass `theme` to `MemoriUIProvider` — do **not** call `useTheme()` (it mutates `<html>` and `localStorage`).
- **Deep docs live in Storybook:** component-level behavior, visual variants, and accessibility examples should be documented in [Storybook](https://memori-ai.github.io/ui/), not expanded indefinitely in this README.

## Peer Dependencies

The host application must provide these compatible packages:

| Package            | Version        | Notes                                      |
| ------------------ | -------------- | ------------------------------------------ |
| `react`            | `^17 \|\| ^18` | Required peer dependency, React 17 and 18+ |
| `react-dom`        | `^17 \|\| ^18` | Required peer dependency, React 17 and 18+ |
| `i18next`          | `^25.5.0`      | Required for translated components         |
| `react-i18next`    | `^16.3.5`      | Required for translated components         |
| `typescript`       | `>=5.0`        | Optional peer for TypeScript consumers     |
| `@types/react`     | `^17 \|\| ^18` | Optional peer                              |
| `@types/react-dom` | `^17 \|\| ^18` | Optional peer                              |

Runtime dependencies such as `@base-ui/react`, `@tanstack/react-table`, `classnames`, `lucide-react`, and `use-sync-external-store` (used as a shim so internal hooks work on React 17) are installed with the package.

## Internationalization

Components such as `Table` and `Expandable` use `react-i18next`. The package exports a preconfigured provider for the built-in table locales: `en`, `it`, `es`, `fr`, and `de`.

```tsx
import { MemoriI18nProvider } from '@memori.ai/ui'

export function Root() {
  return (
    <MemoriI18nProvider>
      <App />
    </MemoriI18nProvider>
  )
}
```

If your app already owns an `i18next` instance, merge the Memori UI resources after `i18n.init()`:

```ts
import i18n from './your-i18n'
import { addMemoriTableToI18n } from '@memori.ai/ui'

addMemoriTableToI18n(i18n)
```

Then use your existing `I18nextProvider`, or pass the instance to `<MemoriI18nProvider i18n={i18n}>`. Column titles, filter labels, row actions, and bulk action labels still come from your app data.

For custom resource wiring, import `tableEn`, `tableIt`, `tableEs`, `tableFr`, `tableDe`, or `MEMORI_TABLE_LOCALES`.

## Theming

Memori UI uses a dynamic OKLCH color system. Set the main hook tokens in the host app; derived tokens such as hover, active, border, focus, and shadow states are computed from them.

```css
:root {
  --memori-primary-color: oklch(0.55 0.22 290);
  --memori-secondary-color: oklch(0.7 0.15 200);
  --memori-font-family: 'Lexend Deca Variable', 'Lexend Deca', sans-serif;
}
```

Dark mode is enabled with `data-theme="dark"` or a `dark` class on the document / surface root. No attribute means the default light theme. Prefer `MemoriUIProvider theme={…}` plus `data-theme` on the embed root.

```tsx
import { MemoriUIProvider, useMemoriTheme } from '@memori.ai/ui'

function EmbedShell({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <MemoriUIProvider theme={theme}>
      <div data-theme={theme}>{/* widget */}</div>
    </MemoriUIProvider>
  )
}
```

`useTheme()` is **deprecated for embeds**: it writes `data-theme` / `.dark` on `document.documentElement` and persists to `localStorage`. Use it only in full-page app shells, or prefer `data-theme` + context.
The most common integrator tokens are:

| Token family      | Examples                                                                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Brand             | `--memori-primary-color`, `--memori-secondary-color`, `--memori-primary-content`                                                         |
| Surface and text  | `--memori-main-background`, `--memori-secondary-background`, `--memori-inset-background`, `--memori-text-color`, `--memori-border-color` |
| Typography        | `--memori-font-family`, `--memori-text-size-base`, `--memori-text-weight-medium`, `--memori-text-line-normal`                            |
| Spacing           | `--memori-spacing-xs` through `--memori-spacing-5xl`                                                                                     |
| Radius and border | `--memori-radius-field`, `--memori-radius-selector`, `--memori-radius-box`, `--memori-border`                                            |
| Shadows           | `--memori-shadow-xs` through `--memori-shadow-2xl`, `--memori-shadow-primary`                                                            |
| Motion            | `--memori-motion-duration-fast`, `--memori-motion-duration-normal`, `--memori-motion-ease`                                               |
| Feedback          | `--memori-success`, `--memori-warning`, `--memori-error`, `--memori-info`                                                                |

The full token source is `src/theme/variables.css`, and visual examples are available in Storybook.

## Public API

All supported runtime exports come from `@memori.ai/ui`. For the full TypeScript shape, use your IDE, the generated `dist/index.d.ts`, and the component stories.

| Export                                                                        | Description                                                   | Main props / types                                                                                                                              |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `Alert`                                                                       | Single toast UI, usually driven by the manager                | Prefer `useAlertManager().add(...)`                                                                                                             |
| `AlertProvider`                                                               | Toast/alerts context                                          | `AlertProviderProps`                                                                                                                            |
| `AlertViewport`                                                               | Renders the alert stack                                       | `AlertViewportProps`                                                                                                                            |
| `useAlertManager`                                                             | Alert hook                                                    | `add`, `close`, `toasts`                                                                                                                        |
| `createAlertOptions`                                                          | Maps alert options to toast payloads                          | `AddAlertOptions`                                                                                                                               |
| `Button`                                                                      | Button                                                        | `ButtonProps`                                                                                                                                   |
| `Autocomplete`                                                                | Searchable text field with suggestions                        | `AutocompleteProps`, `AutocompleteOption`, `AutocompleteGroupOption`                                                                            |
| `Combobox`                                                                    | Select with search                                            | `ComboboxProps`                                                                                                                                 |
| `Card`                                                                        | Card container                                                | `CardProps`                                                                                                                                     |
| `Checkbox`                                                                    | Checkbox                                                      | `CheckboxProps`                                                                                                                                 |
| `Collapsible`                                                                 | Expandable section                                            | `CollapsibleProps`                                                                                                                              |
| `ConfirmDialog`                                                               | Confirm/cancel modal                                          | `isOpen`, `onClose`, `onConfirm`, `title`, `message`                                                                                            |
| `Drawer`                                                                      | Slide-over panel                                              | `DrawerProps`                                                                                                                                   |
| `Dropdown`                                                                    | Compound menu                                                 | `Dropdown.Trigger`, `Dropdown.Menu`, `Dropdown.Item`, `Dropdown.Separator`, `Dropdown.Group`                                                    |
| `Expandable`                                                                  | Truncated text with expand/collapse                           | See component stories and type declarations                                                                                                     |
| `Field`                                                                       | Compound field primitives                                     | `Field.Root`, `Label`, `Description`, `Error`, `Control`, `Item`, `Validity`                                                                    |
| `FieldGroup`                                                                  | Label, helper, error, and control wrapper                     | `FieldGroupProps`                                                                                                                               |
| `Form`                                                                        | Form root with validation helpers                             | `FormProps`, `FormValidationMode`                                                                                                               |
| `Input`                                                                       | Text input                                                    | `InputProps`                                                                                                                                    |
| `Modal`                                                                       | Dialog                                                        | `ModalProps`                                                                                                                                    |
| `Popover`                                                                     | Anchored floating content                                     | `PopoverProps`, `PopoverPlacement`                                                                                                              |
| `Section`                                                                     | Page/module header                                            | `SectionProps`                                                                                                                                  |
| `SelectBox`                                                                   | Native-style select                                           | `SelectBoxProps`                                                                                                                                |
| `Slider`                                                                      | Range input                                                   | `SliderProps`                                                                                                                                   |
| `Spin`                                                                        | Loading spinner / overlay                                     | `SpinProps`                                                                                                                                     |
| `Table`                                                                       | Data table built on TanStack Table                            | `TableProps`, `ColumnDef`, `ColumnFiltersState`, `BulkAction`, `RowAction`, `FilterDef`, pagination helpers                                     |
| `Tabs`                                                                        | Compound tabs primitive                                       | `Tabs.Root`, `Tabs.List`, `Tabs.Tab`, `Tabs.Panel`, `Tabs.Indicator`, `TabsVariant`                                                             |
| `Tooltip`                                                                     | Anchored tooltip built on Base UI                             | `TooltipProps`, `TooltipPlacement`, `TooltipLegacyAlign`; prefer `title`, `placement`, and `open` over legacy `content`, `align`, and `visible` |
| `useTheme`                                                                    | **Deprecated for embeds** — mutates `<html>` + `localStorage` | Prefer `data-theme` + `MemoriUIProvider` / `useMemoriTheme`                                                                                     |
| `memoriI18n`                                                                  | Preconfigured i18next instance                                | Built-in `table.*`, `expandable.*`, `alert.*` locales                                                                                           |
| `MemoriI18nProvider`                                                          | React provider for translated components                      | `MemoriI18nProviderProps`                                                                                                                       |
| `addMemoriTableToI18n`                                                        | Adds bundled UI strings to an existing i18n instance          | Merges `table.*`, `expandable.*`, `alert.*`; `AddMemoriTableToI18nOptions`                                                                      |
| `tableEn`, `tableIt`, `tableEs`, `tableFr`, `tableDe`, `MEMORI_TABLE_LOCALES` | Raw table locale resources                                    | `MemoriTableTranslations`, `MemoriSupportedLocale`                                                                                              |

## Table Integration Notes

`Table` is typed as `TableProps<TData>` and uses [TanStack Table](https://tanstack.com/table). Define columns with `ColumnDef<TData>`, pass stable row IDs with `getRowId` when possible, and use controlled state for server-driven search, filters, or pagination.

Server pagination uses `manualPagination`, `rowCount`, `pagination`, and `onPaginationChange`. Column visibility can be persisted by passing `tableId`; it stores preferences in `localStorage` under `memori-table:columnVisibility:<id>`.

Also exported: `getDetailedPaginationPadding`, `getPaginationWindowItems`, `PAGINATION_DETAILED_SLOT_COUNT`, `PAGINATION_LEADING_BLOCK_SIZE`, and related pagination helper types.

## Packaging

- ESM and CJS builds are published: `dist/memori-ai-ui.es.js` and `dist/memori-ai-ui.cjs.js`.
- Type declarations are published at `dist/index.d.ts`.
- CSS is emitted as a single file and exported as `@memori.ai/ui/styles.css`.
- CSS is marked as a side effect so bundlers keep the required stylesheet when imported.
- The package is published as public MIT-licensed npm package `@memori.ai/ui`.

## Development

```bash
bun install
bun run storybook # or bun sb
bun run test
bun run test:a11y
bun lint
bun lint:css
bun format:check
bun typecheck
bun run build
```

Use `bun run test` for the Vitest watch setup; this project is not configured for the Bun test runner. `bun run test:a11y` runs Storybook accessibility checks through Vitest and fails on WCAG/axe violations.

## Links

- [Storybook](https://memori-ai.github.io/ui/)
- [Memori Client](https://github.com/memori-ai/memori-client)
- [Changelog](./CHANGELOG.md)
- [Repository](https://github.com/memori-ai/ui.git)
- License: MIT
