/** Shared UI i18n bundles merged alongside `table.*` into host i18next instances. */

export const expandableEn = {
  expand: 'Expand',
  collapse: 'Show less',
} as const

export const expandableIt = {
  expand: 'Espandi',
  collapse: 'Mostra meno',
} as const

export const expandableEs = {
  expand: 'Expandir',
  collapse: 'Mostrar menos',
} as const

export const expandableFr = {
  expand: 'Développer',
  collapse: 'Afficher moins',
} as const

export const expandableDe = {
  expand: 'Erweitern',
  collapse: 'Weniger anzeigen',
} as const

export const MEMORI_EXPANDABLE_LOCALES = {
  en: expandableEn,
  it: expandableIt,
  es: expandableEs,
  fr: expandableFr,
  de: expandableDe,
} as const

export const alertEn = {
  close: 'Close alert',
} as const

export const alertIt = {
  close: 'Chiudi avviso',
} as const

export const alertEs = {
  close: 'Cerrar alerta',
} as const

export const alertFr = {
  close: "Fermer l'alerte",
} as const

export const alertDe = {
  close: 'Hinweis schließen',
} as const

export const MEMORI_ALERT_LOCALES = {
  en: alertEn,
  it: alertIt,
  es: alertEs,
  fr: alertFr,
  de: alertDe,
} as const

export type MemoriExpandableTranslations = typeof expandableEn
export type MemoriAlertTranslations = typeof alertEn
