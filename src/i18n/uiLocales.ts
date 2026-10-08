/** Shared UI i18n bundles merged alongside `table.*` into host i18next instances. */

export const expandableEn = {
  expand: 'Expand',
  collapse: 'Collapse',
} as const

export const expandableIt = {
  expand: 'Espandi',
  collapse: 'Riduci',
} as const

export const expandableEs = {
  expand: 'Expandir',
  collapse: 'Contraer',
} as const

export const expandableFr = {
  expand: 'Développer',
  collapse: 'Réduire',
} as const

export const expandableDe = {
  expand: 'Expandieren',
  collapse: 'Einklappen',
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
  confirm: 'Confirm',
  cancel: 'Cancel',
  selectPlaceholder: 'Select an option',
} as const

export const overlayIt = {
  closeModal: 'Chiudi finestra',
  closeDrawer: 'Chiudi pannello',
  closePopover: 'Chiudi popover',
  confirm: 'Conferma',
  cancel: 'Annulla',
  selectPlaceholder: "Seleziona un'opzione",
} as const

export const overlayEs = {
  closeModal: 'Cerrar modal',
  closeDrawer: 'Cerrar panel',
  closePopover: 'Cerrar popover',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  selectPlaceholder: 'Selecciona una opción',
} as const

export const overlayFr = {
  closeModal: 'Fermer la fenêtre',
  closeDrawer: 'Fermer le panneau',
  closePopover: 'Fermer le popover',
  confirm: 'Confirmer',
  cancel: 'Annuler',
  selectPlaceholder: 'Sélectionner une option',
} as const

export const overlayDe = {
  closeModal: 'Dialog schließen',
  closeDrawer: 'Schublade schließen',
  closePopover: 'Popover schließen',
  confirm: 'Bestätigen',
  cancel: 'Abbrechen',
  selectPlaceholder: 'Option auswählen',
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
