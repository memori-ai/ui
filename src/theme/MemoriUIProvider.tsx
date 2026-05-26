import { createContext, useContext, type ReactNode } from 'react'
import type { Theme } from './useTheme'

/* -----------------------------------------------------------------------------
 * Portal container context
 *
 * Lets consumers configure where portal-based components (Drawer, Modal,
 * Popover, Tooltip, Dropdown, Alert) mount their popups. Useful for scoping
 * the library inside a specific DOM subtree (e.g. an embedded widget) so
 * CSS variables, themes, fonts and styles inherit through the cascade.
 *
 * `undefined` (no provider) means components fall back to the Base UI default
 * (typically `document.body`). `null` is treated as an explicit "use the
 * default" — useful while a `ref.current` is still being attached.
 * -------------------------------------------------------------------------- */

const PortalContainerContext = createContext<HTMLElement | null | undefined>(
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

/**
 * Resolve the portal container for a portaled component.
 *
 * - If the component received an explicit `container` prop (including `null`),
 *   that value wins.
 * - Otherwise, the nearest {@link PortalContainerProvider} value is returned.
 * - When no provider is mounted and no prop is passed, the result is
 *   `undefined`, signalling the Base UI default (document.body).
 */
export function usePortalContainer(
  override?: HTMLElement | null,
): HTMLElement | null | undefined {
  const ctx = useContext(PortalContainerContext)
  return override !== undefined ? override : ctx
}

/* -----------------------------------------------------------------------------
 * Theme context
 *
 * Distinct from the DOM-mutating `useTheme()` hook. This context only carries
 * the theme value down the React tree so portaled popups can stamp
 * `data-theme="…"` on themselves — making sure tokens resolve regardless of
 * where the portal node lives in the DOM.
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
 *
 * The ergonomic one-stop shop for library consumers: configure `container`
 * and `theme` in a single wrapper around your app (or the embedded widget).
 * -------------------------------------------------------------------------- */

export interface MemoriUIProviderProps {
  /**
   * Theme used by portaled components when stamping `data-theme` on their
   * popup root. Lets tokens like `--memori-bg` resolve correctly even when
   * the portal mounts outside the provider's subtree.
   */
  theme?: Theme
  /**
   * Container element used as the portal root for descendant portaled
   * components. Pass `null` while waiting for a ref to attach.
   */
  container?: HTMLElement | null
  children: ReactNode
}

export function MemoriUIProvider({
  theme,
  container,
  children,
}: MemoriUIProviderProps) {
  return (
    <MemoriThemeContext.Provider value={theme}>
      <PortalContainerContext.Provider value={container ?? null}>
        {children}
      </PortalContainerContext.Provider>
    </MemoriThemeContext.Provider>
  )
}
