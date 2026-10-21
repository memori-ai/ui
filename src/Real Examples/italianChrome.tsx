import React, { useEffect } from 'react'
import { memoriI18n } from '../i18n/i18n'

/** Sets Storybook table / UI chrome language to Italian for the story lifetime. */
export function ItalianTableChrome({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    void memoriI18n.changeLanguage('it')
    return () => {
      void memoriI18n.changeLanguage('en')
    }
  }, [])
  return children
}
