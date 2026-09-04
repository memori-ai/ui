# Storybook conventions — `@memori.ai/ui`

Source of truth for new/migrated stories. Full audit/plan: workspace `storybook-plan.md`.

## Format

- CSF3 + TypeScript: `satisfies Meta<typeof Component>` + `StoryObj<typeof meta>`
- No `Template.bind({})`
- File next to the component: `ComponentName.stories.tsx`

## Title taxonomy

| Prefix                  | Components                                                              |
| ----------------------- | ----------------------------------------------------------------------- |
| `Azioni e navigazione/` | Button, Tabs, Dropdown, Expandable, Collapsible                         |
| `Overlay/`              | Modal, Drawer, Popover, Tooltip, ConfirmDialog                          |
| `Form/`                 | Form, Field, Input, Checkbox, SelectBox, Combobox, Autocomplete, Slider |
| `Feedback/`             | Alert, Spin                                                             |
| `Contenuto/`            | Card, Section, Table                                                    |
| `Infrastruttura/`       | Tokens, providers, portal demos                                         |
| `Esempi/`               | Showcase / product compositions (prefer `tags` without autodocs)        |

## Minimum stories per component

| Story                          | When                                                                 |
| ------------------------------ | -------------------------------------------------------------------- |
| `Default`                      | Always                                                               |
| `AllVariants`                  | Enum `variant` / `size` / `placement`                                |
| `States`                       | disabled / loading / error / empty                                   |
| `Playground`                   | Rich controls (may equal Default)                                    |
| `Composition`                  | Compound only                                                        |
| `InFixedSurface`               | Overlay/portal — use `FixedSurface` from `.storybook/decorators.tsx` |
| `OpenInteraction` (or similar) | `play` when overlay/menu/form keyboard contract matters              |

## Preview vs story

**Preview provides:** CSS, `MemoriI18nProvider`, `MemoriUIProvider`, theme sync (`data-theme`), locale toolbar, brand toolbar (`--memori-primary-color` / `--memori-secondary-color`), a11y `test: 'error'`.

**Story provides:** controlled open state, fixtures, `container` for `InFixedSurface`, targeted `play`.

**Play + portals:** query `within(canvasElement.ownerDocument.body)` — portals leave the story root (and `aria-hidden` it). Prefer `toBeInTheDocument()` over `toBeVisible()` while Base UI `data-starting-style` animations run. Close with Escape after assert so axe does not scan open focus guards.

## argTypes

- Union props → `select` with full `options` matching the TypeScript type
- Descriptions from JSDoc; defaults via `args` or `table.defaultValue`
- Callbacks: `fn()` from `storybook/test`; hide noisy controls

## Reference

Copy the Drawer story pattern (`Overlay/Drawer`) for other overlays.
