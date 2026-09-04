import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

/**
 * @deprecated Prefer `data-theme` on the surface root plus `MemoriUIProvider`
 * / `useMemoriTheme` for embedded widgets. This hook mutates
 * `document.documentElement` and `localStorage['theme']`, which is unsafe in
 * multi-widget or host-page embeds.
 *
 * Hook to manage theme switching between light and dark modes (app-shell only).
 *
 * @example
 * ```tsx
 * // Prefer for full-page apps only — do not use inside embeds:
 * const { theme, setTheme, toggleTheme } = useTheme()
 * ```
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme | null
      if (stored === 'light' || stored === 'dark') {
        return stored
      }
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement

    // Remove both theme attributes/classes
    root.removeAttribute('data-theme')
    root.classList.remove('dark')

    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark')
      root.classList.add('dark')
    } else {
      // Ensure light theme is explicitly set (remove any dark theme remnants)
      root.removeAttribute('data-theme')
      root.classList.remove('dark')
    }

    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return {
    theme,
    setTheme,
    toggleTheme,
  }
}
