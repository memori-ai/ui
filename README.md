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

## Peer dependencies

The package expects compatible versions of these libraries in your app (they are not bundled inside `@memori.ai/ui`):

| Package         | Notes                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------- |
| `react`         | ^18.2.0                                                                                           |
| `react-dom`     | ^18.2.0                                                                                           |
| `i18next`       | Required for translated components (Table, Expandable, …)                                         |
| `react-i18next` | Use [`MemoriI18nProvider`](#internationalization-i18n) or `I18nextProvider` with merged resources |

TypeScript types for React are optional peers.

## Internationalization (i18n)

Components such as **Table** and **Expandable** use [`useTranslation()`](https://react.i18next.com/) from **react-i18next**. They read strings from the **i18n instance** in React context (`t('table.searchPlaceholder')`, etc.).

**Peer dependencies:** `i18next` and `react-i18next`.

### Option A — Quick start (bundled instance)

Use the preconfigured instance and provider exported from the package:

```tsx
import { MemoriI18nProvider } from '@memori.ai/ui'

function Root() {
  return (
    <MemoriI18nProvider>
      <App />
    </MemoriI18nProvider>
  )
}
```

The default provider uses the bundled **`memoriI18n`** instance (all `table.*` locales: `en`, `it`, `es`, `fr`, `de`, with `fallbackLng: 'en'`). Pass **`i18n={…}`** when you use your own instance after `addMemoriTableToI18n`.

### Option B — Existing i18next setup

Merge Memori UI strings into your initialized instance (after `i18n.init()`):

```ts
import i18n from './your-i18n'
import { addMemoriTableToI18n } from '@memori.ai/ui'

addMemoriTableToI18n(i18n)
```

Optionally pass `{ namespace: 'translation' }` (default) if you use a custom namespace. Then wrap your app with `<I18nextProvider i18n={i18n}>` from `react-i18next` as usual, or use `<MemoriI18nProvider i18n={i18n}>`.

### Option C — Manual bundles

Import locale objects and attach them yourself:

- `tableEn`, `tableIt`, `tableEs`, `tableFr`, `tableDe`, or the combined `MEMORI_TABLE_LOCALES`

Types: `MemoriTableTranslations`, `MemoriSupportedLocale`.

Column titles, filter labels, and row/bulk action labels still come from **your** column definitions and data, not from these bundles.

**Storybook** in this repo uses `MemoriI18nProvider` so previews match a real integration.

## Components (public API)

All exports are from `@memori.ai/ui`. Types are exported where listed—use your IDE or `dist` `.d.ts` for the full shape (many props extend [Base UI](https://base-ui.com/) primitives).

| Export                                                   | Description                                                     | Main props / types                                                                                                                                                                                                                            |
| -------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Alert**                                                | Single toast UI (usually driven by the manager, not used alone) | Renders one toast; prefer `useAlertManager().add(...)`                                                                                                                                                                                        |
| **AlertProvider**                                        | Toast/alerts context                                            | `children`, `defaultDuration?`, `limit?` — see `AlertProviderProps`                                                                                                                                                                           |
| **AlertViewport**                                        | Renders the alert stack                                         | `placement?`, `className?`, `style?` — see `AlertViewportProps`                                                                                                                                                                               |
| **useAlertManager**                                      | Hook: `add`, `close`, `toasts`                                  | Must be used under `AlertProvider`                                                                                                                                                                                                            |
| **createAlertOptions**                                   | Maps `AddAlertOptions` → toast payload                          | Used with `alertManager.add(createAlertOptions({ ... }))`                                                                                                                                                                                     |
| **Button**                                               | Button                                                          | `variant`, `size`, `loading`, `icon`, `iconPosition`, `shape`, `fullWidth`, `shadow`, `active`, `danger`, `ariaLabel`, `type`, … — `ButtonProps`                                                                                              |
| **Autocomplete**                                         | Searchable text field + suggestions                             | `options`, `value` / `defaultValue`, `onChange`, `placeholder`, `mode`, `label`, `disabled`, `loading`, `filter`, … — `AutocompleteProps`                                                                                                     |
| **Combobox**                                             | Select with search                                              | `options`, `value` / `defaultValue`, `onChange`, `placeholder`, `searchPlaceholder`, `label`, `disabled`, … — `ComboboxProps`                                                                                                                 |
| **Collapsible**                                          | Expandable section                                              | `summary`, `children`, `open` / `defaultOpen`, `onOpenChange`, `disabled`, `className`, … — `CollapsibleProps`                                                                                                                                |
| **Card**                                                 | Card container                                                  | `title`, `description`, `cover`, `variant`, `padding`, `component`, `loading`, `hoverable`, `focusable`, … — `CardProps`                                                                                                                      |
| **Checkbox**                                             | Checkbox                                                        | `checked`, `defaultChecked`, `indeterminate`, `label`, `onChange`, `disabled`, `name`, `value`, … — `CheckboxProps`                                                                                                                           |
| **ConfirmDialog**                                        | Confirm/cancel modal                                            | `isOpen`, `onClose`, `onConfirm`, `title`, `message`, `confirmText?`, `cancelText?`, `loading?`                                                                                                                                               |
| **Expandable**                                           | Truncated text with expand                                      | `children`, `rows`, `mode`, `defaultExpanded`, `expandSymbol`, `collapseSymbol`, `lineHeightMultiplier`, `className`, … (see `Expandable.tsx`)                                                                                                |
| **Dropdown**                                             | Menu (compound)                                                 | **Dropdown**: `open`, `defaultOpen`, `onOpenChange`, `disabled`, … — **Dropdown.Trigger**: `showChevron`, `render`, … — **Dropdown.Menu** / **Item** / **Separator** / **Group** — see `Dropdown*Props` in source                             |
| **Drawer**                                               | Slide-over panel                                                | `open`, `onOpenChange`, `onClose`, `anchor`, `size`, `title`, `description`, `footer`, `loading`, `closable`, … — `DrawerProps`                                                                                                               |
| **Input**                                                | Text input                                                      | `variant`, `size`, `fullWidth`, `placeholder`, `value`, `onValueChange`, `disabled`, `type`, … — `InputProps`                                                                                                                                 |
| **Field**                                                | Compound field primitives                                       | `Field.Root`, `Label`, `Description`, `Error`, `Control`, `Item`, `Validity` (Base UI field API)                                                                                                                                              |
| **FieldGroup**                                           | Label + helper + error + control                                | `label`, `helperText`, `error`, `required`, `invalid`, `children`, … — `FieldGroupProps`                                                                                                                                                      |
| **Form**                                                 | Form root with validation helpers                               | `errors`, `onFormSubmit`, `validationMode`, `onSubmit`, `children`, … — `FormProps`                                                                                                                                                           |
| **Modal**                                                | Dialog                                                          | `open`, `onOpenChange`, `onClose`, `title`, `description`, `children`, `footer`, `loading`, `closable`, `size`, `width` / `widthMd` / `widthLg`, `closeOnOverlayClick`, `closeOnEsc`, `modal`, `initialFocus`, `finalFocus`, … — `ModalProps` |
| **SelectBox**                                            | Native-style select                                             | `options`, `value`, `onChange`, `placeholder`, `label`, `disabled`, `error`, `name`, … — `SelectBoxProps`                                                                                                                                     |
| **Slider**                                               | Range input                                                     | `min`, `max`, `step`, `value`, `defaultValue`, `label`, `onChange`, `disabled`, … — `SliderProps`                                                                                                                                             |
| **Spin**                                                 | Loading spinner / overlay                                       | `spinning`, `primary`, `children`, `className`, `spinnerClassName`, … — `SpinProps`                                                                                                                                                           |
| **Table**                                                | Data table ([TanStack Table](https://tanstack.com/table))       | Full list: [Table](#table). Exported types: `ColumnDef`, `ColumnFiltersState`, `BulkAction`, `RowAction`, `RowActionsVariant`, `TablePaginationVariant`, `FilterDef`, `FilterOption`, `FilterVariant`, `DateRangeValue`, pagination helpers   |
| **Tooltip**                                              | Tooltip (CSS-positioned)                                        | `content`, `children`, `align`, `disabled`, `visible`, `className` — default export `Props`                                                                                                                                                   |
| **useTheme**                                             | Light/dark theme                                                | Returns `{ theme, setTheme, toggleTheme }` — type `Theme`                                                                                                                                                                                     |
| **memoriI18n**                                           | Preconfigured i18next instance                                  | All `table.*` locales; use with `MemoriI18nProvider` or `addMemoriTableToI18n`                                                                                                                                                                |
| **MemoriI18nProvider**                                   | React provider for `useTranslation`                             | `children`, `i18n?` (defaults to `memoriI18n`) — `MemoriI18nProviderProps`                                                                                                                                                                    |
| **addMemoriTableToI18n**                                 | Merge `table` strings into an existing i18n                     | `(instance, options?)` — `AddMemoriTableToI18nOptions`                                                                                                                                                                                        |
| **tableEn** / **tableIt** / … / **MEMORI_TABLE_LOCALES** | Raw locale objects                                              | For custom resource wiring; types `MemoriTableTranslations`, `MemoriSupportedLocale`                                                                                                                                                          |

### Table

Props are typed as **`TableProps<TData>`**. The **Table** is built on [@tanstack/react-table](https://tanstack.com/table). Column definitions use `ColumnDef<TData>`; optional `meta` fields (badges, `hiddenByDefault`, filter config, etc.) are documented in the component source and Storybook stories.

| Prop                      | Type                                            | Default             | Description                                                                                                                         |
| ------------------------- | ----------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **`data`**                | `TData[]`                                       | —                   | **Required.** Row data.                                                                                                             |
| **`columns`**             | `ColumnDef<TData, unknown>[]`                   | —                   | **Required.** Column definitions (headers, cells, sorting, `meta`, …).                                                              |
| `className`               | `string`                                        | —                   | Extra class on the table wrapper.                                                                                                   |
| `enableRowSelection`      | `boolean`                                       | `false`             | Shows a selection column and checkboxes.                                                                                            |
| `enableColumnResizing`    | `boolean`                                       | `false`             | Enables drag-to-resize columns.                                                                                                     |
| `getRowId`                | `(originalRow: TData, index: number) => string` | —                   | Stable row id for selection and keys; recommended when rows lack a natural id.                                                      |
| `enablePagination`        | `boolean`                                       | `false`             | Shows footer pagination (client-side unless `manualPagination` is used).                                                            |
| `initialPageSize`         | `number`                                        | `10`                | Page size when using internal pagination state (must match an entry in `pageSizeOptions` when possible).                            |
| `pageSizeOptions`         | `number[]`                                      | `[10, 25, 50, 100]` | Options in the page-size control.                                                                                                   |
| `toolbar`                 | `ReactNode`                                     | —                   | Custom nodes rendered in the toolbar row (e.g. actions next to search).                                                             |
| `maxBodyHeight`           | `CSSProperties['maxHeight'] \| false`           | —                   | Scrollable body: set a max height, or `false` for no cap.                                                                           |
| `isLoading`               | `boolean`                                       | `false`             | Shows a loading overlay over the body.                                                                                              |
| `emptyState`              | `ReactNode`                                     | —                   | Replaces the body when there are zero rows (and not loading).                                                                       |
| `bulkActions`             | `BulkAction<TData>[]`                           | —                   | Toolbar bulk actions when rows are selected (`label`, optional `icon` / `variant`, `onClick(rows)`).                                |
| `rowActions`              | `RowAction<TData>[]`                            | —                   | Per-row actions (`label`, optional `id` / `icon` / `variant`, `onClick(row)`).                                                      |
| `rowActionsVariant`       | `'menu' \| 'inline'`                            | `'menu'`            | `menu` — overflow ⋯ menu; `inline` — icon buttons in the cell.                                                                      |
| `globalFilterPlaceholder` | `string`                                        | —                   | Placeholder for the toolbar search field (library default comes from i18n).                                                         |
| `tableId`                 | `string`                                        | —                   | If set, column visibility is persisted under `localStorage` (`memori-table:columnVisibility:<id>`).                                 |
| `search`                  | `string`                                        | —                   | Controlled global search value (toolbar).                                                                                           |
| `onSearchChange`          | `(value: string) => void`                       | —                   | Called when the search field changes (debounced by `searchDebounceMs`).                                                             |
| `searchDebounceMs`        | `number`                                        | `300`               | Debounce delay for `onSearchChange`.                                                                                                |
| `columnFilters`           | `ColumnFiltersState`                            | —                   | Controlled TanStack column filter state.                                                                                            |
| `onColumnFiltersChange`   | `(filters: ColumnFiltersState) => void`         | —                   | Updates column filters (header filters and/or toolbar chips when `filterDefs` is set).                                              |
| `filterDefs`              | `FilterDef[]`                                   | —                   | Declarative toolbar filters (`select`, `multi-select`, `date-range`, `boolean`); ids must match column `accessorKey` / `id`.        |
| `manualPagination`        | `boolean`                                       | `false`             | **Server pagination:** set `true` when `data` is only the current page; supply **`rowCount`** (total rows on the server).           |
| `rowCount`                | `number`                                        | —                   | Total row count when `manualPagination` is `true`.                                                                                  |
| `pagination`              | `PaginationState`                               | —                   | Controlled pagination `{ pageIndex, pageSize }`. Use with **`onPaginationChange`**.                                                 |
| `onPaginationChange`      | `(updater: Updater<PaginationState>) => void`   | —                   | TanStack-style updater for pagination. If **`pagination` / `onPaginationChange` are omitted**, pagination state is kept internally. |
| `paginationVariant`       | `'simplified' \| 'detailed'`                    | `'simplified'`      | Footer layout: compact range + badge, or dashboard-style (total + page buttons + page size).                                        |
| `paginationTotalLabel`    | `string`                                        | —                   | With `paginationVariant="detailed"`, optional noun for the total line (e.g. `"Users"` → “Total Users: 42”).                         |

**Also exported:** `getDetailedPaginationPadding`, `getPaginationWindowItems`, `PAGINATION_DETAILED_SLOT_COUNT`, `PAGINATION_LEADING_BLOCK_SIZE`, and related pagination helper types from the package entry point.

## Theming & Customization

This library uses a **dynamic OKLCH color system**. The entire color palette (shades 100-900) is automatically generated from base primary and secondary colors using CSS Relative Color Syntax.

### Design Tokens

The library exposes CSS variables for shadows, interactive states, and focus. Use these tokens in your app or when extending components.

#### Shadows

| Token                     | Use case                             |
| ------------------------- | ------------------------------------ |
| `--memori-shadow-xs`      | Subtle depth for small elements      |
| `--memori-shadow-sm`      | Default for buttons, cards           |
| `--memori-shadow-md`      | Hover states                         |
| `--memori-shadow-lg`      | Modals, dropdowns                    |
| `--memori-shadow-xl`      | Hero cards, major sections           |
| `--memori-shadow-2xl`     | Maximum elevation                    |
| `--memori-shadow-primary` | Brand-colored shadow for CTA buttons |

Shadows are overridden in dark theme for better contrast.

#### Interactive state tokens

Primary interactive states are derived from your brand color and can be overridden:

- `--memori-primary-hover` – hover background/border
- `--memori-primary-active` – pressed/active state
- `--memori-primary-disabled` – disabled state
- `--memori-focus-ring` – focus outline (box-shadow)
- `--memori-focus-ring-offset` – gap between element and ring

#### Overriding brand colors

Set `--memori-primary-color` (and optionally `--memori-secondary-color`) in your app. Interactive states and `--memori-shadow-primary` are computed from these.

```css
:root {
  /* Override Primary (purple default) */
  --memori-primary-color: oklch(0.55 0.22 290);

  /* Override Secondary (cyan default) */
  --memori-secondary-color: oklch(0.7 0.15 200);
}
```

**Note:** The legacy token `--memori-depth` has been removed. Use the shadow scale (`--memori-shadow-xs` through `--memori-shadow-2xl`) instead.

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
