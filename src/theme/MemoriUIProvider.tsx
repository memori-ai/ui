import {
  createContext,
  useContext,
  useEffect,
  type CSSProperties,
  type ReactNode,
} from 'react'
import type { Theme } from './useTheme'

/* -----------------------------------------------------------------------------
 * Portal container context
 *
 * Two targets:
 * - `container` (escape): Tooltip, Dropdown, Popover, Alert, Select menus —
 *   mount outside clip/`contain` so Floating UI can escape.
 * - `clipContainer`: Drawer / Modal — stay clipped to the embed surface.
 *
 * `undefined` (no provider) → Base UI default (typically `document.body`).
 * `null` → explicit "still attaching ref; use default for now".
 * -------------------------------------------------------------------------- */

const PortalContainerContext = createContext<HTMLElement | null | undefined>(
  undefined,
)

const ClipContainerContext = createContext<HTMLElement | null | undefined>(
  undefined,
)

export interface PortalContainerProviderProps {
  /**
   * DOM element used as the portal root for descendant portaled components.
   * Pass an element captured via a callback ref / `useState` setter so it is
   * non-null on the first render that matters.
   */
  container: HTMLElement | null
  children: ReactNode
}

export function PortalContainerProvider({
  container,
  children,
}: PortalContainerProviderProps) {
  return (
    <PortalContainerContext.Provider value={container}>
      {children}
    </PortalContainerContext.Provider>
  )
}

export type PortalContainerKind = 'escape' | 'clip'

/**
 * Resolve the portal container for a portaled component.
 *
 * - Explicit `container` prop (including `null`) always wins.
 * - `kind: 'clip'` (Drawer/Modal): `clipContainer` → `container` → undefined
 * - `kind: 'escape'` (default): `container` → undefined
 */
export function usePortalContainer(
  override?: HTMLElement | null,
  kind: PortalContainerKind = 'escape',
): HTMLElement | null | undefined {
  const escapeContainer = useContext(PortalContainerContext)
  const clipContainer = useContext(ClipContainerContext)

  if (override !== undefined) {
    return override
  }

  if (kind === 'clip') {
    // Prefer a real clip element; while null/unset, fall back to escape container.
    return clipContainer || escapeContainer
  }

  return escapeContainer
}

/* -----------------------------------------------------------------------------
 * Theme context
 * -------------------------------------------------------------------------- */

const MemoriThemeContext = createContext<Theme | undefined>(undefined)

export interface ThemeProviderProps {
  /**
   * Theme broadcast to descendant portaled components. When set, popups
   * stamp `data-theme={theme}` on their root so design tokens resolve even
   * when the portal mounts outside the provider's subtree.
   */
  theme?: Theme
  children: ReactNode
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return (
    <MemoriThemeContext.Provider value={theme}>
      {children}
    </MemoriThemeContext.Provider>
  )
}

/**
 * Read the theme broadcast by the nearest {@link ThemeProvider} or
 * {@link MemoriUIProvider}. Components pass their own `theme` prop as the
 * override so user-set values always win over the context value.
 */
export function useMemoriTheme(override?: Theme): Theme | undefined {
  const ctx = useContext(MemoriThemeContext)
  return override !== undefined ? override : ctx
}

/* -----------------------------------------------------------------------------
 * Combined provider
 * -------------------------------------------------------------------------- */

export interface MemoriUIProviderProps {
  /**
   * Theme used by portaled components when stamping `data-theme` on their
   * popup root. Lets tokens like `--memori-bg` resolve correctly even when
   * the portal mounts outside the provider's subtree.
   */
  theme?: Theme
  /**
   * Escape portal root (Tooltip, Dropdown, Popover, Alert, select menus).
   * Pass `null` while waiting for a ref to attach.
   */
  container?: HTMLElement | null
  /**
   * Clip portal root for Drawer / Modal (e.g. `.memori-widget__surface`).
   * When omitted, Drawer/Modal fall back to `container`.
   */
  clipContainer?: HTMLElement | null
  /**
   * Offset added to the overlay z-index scale (1100…1700).
   * Applied as `--memori-z-index-base` on the portal target elements.
   * @default 0
   */
  zIndexBase?: number
  children: ReactNode
}

function applyZIndexBase(
  el: HTMLElement | null | undefined,
  zIndexBase: number | undefined,
): (() => void) | undefined {
  if (!el || zIndexBase === undefined) return undefined
  const prev = el.style.getPropertyValue('--memori-z-index-base')
  el.style.setProperty('--memori-z-index-base', String(zIndexBase))
  return () => {
    if (prev) {
      el.style.setProperty('--memori-z-index-base', prev)
    } else {
      el.style.removeProperty('--memori-z-index-base')
    }
  }
}

export function MemoriUIProvider({
  theme,
  container,
  clipContainer,
  zIndexBase = 0,
  children,
}: MemoriUIProviderProps) {
  useEffect(() => {
    const cleanups = [
      applyZIndexBase(container, zIndexBase),
      applyZIndexBase(clipContainer, zIndexBase),
    ].filter(Boolean) as Array<() => void>
    return () => {
      for (const cleanup of cleanups) cleanup()
    }
  }, [container, clipContainer, zIndexBase])

  const style =
    zIndexBase !== 0
      ? ({
          ['--memori-z-index-base' as string]: String(zIndexBase),
        } as CSSProperties)
      : undefined

  return (
    <MemoriThemeContext.Provider value={theme}>
      <PortalContainerContext.Provider value={container ?? null}>
        <ClipContainerContext.Provider value={clipContainer ?? null}>
          {style ? (
            <div
              className="memori-ui-provider"
              style={style}
              data-memori-ui-provider=""
            >
              {children}
            </div>
          ) : (
            children
          )}
        </ClipContainerContext.Provider>
      </PortalContainerContext.Provider>
    </MemoriThemeContext.Provider>
  )
}
