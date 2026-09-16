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

export const overlayEn = {
  closeModal: 'Close modal',
  closeDrawer: 'Close drawer',
  closePopover: 'Close popover',
} as const

export const overlayIt = {
  closeModal: 'Chiudi finestra',
  closeDrawer: 'Chiudi pannello',
  closePopover: 'Chiudi popover',
} as const

export const overlayEs = {
  closeModal: 'Cerrar modal',
  closeDrawer: 'Cerrar panel',
  closePopover: 'Cerrar popover',
} as const

export const overlayFr = {
  closeModal: 'Fermer la fenêtre',
  closeDrawer: 'Fermer le panneau',
  closePopover: 'Fermer le popover',
} as const

export const overlayDe = {
  closeModal: 'Dialog schließen',
  closeDrawer: 'Schublade schließen',
  closePopover: 'Popover schließen',
} as const

export const MEMORI_OVERLAY_LOCALES = {
  en: overlayEn,
  it: overlayIt,
  es: overlayEs,
  fr: overlayFr,
  de: overlayDe,
} as const

export type MemoriExpandableTranslations = typeof expandableEn
export type MemoriAlertTranslations = typeof alertEn
export type MemoriOverlayTranslations = typeof overlayEn
