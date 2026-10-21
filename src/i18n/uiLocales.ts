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

export const commonEn = {
  copy: 'Copy',
  copied: 'Copied',
  show: 'Show',
  hide: 'Hide',
  breadcrumb: 'Breadcrumb',
  moreInfo: 'More information',
  dropzoneTitle: 'Drag files here or',
  dropzoneBrowse: 'browse',
  removeFile: 'Remove file',
} as const

export const commonIt = {
  copy: 'Copia',
  copied: 'Copiato',
  show: 'Mostra',
  hide: 'Nascondi',
  breadcrumb: 'Percorso',
  moreInfo: 'Maggiori informazioni',
  dropzoneTitle: 'Trascina qui i file oppure',
  dropzoneBrowse: 'sfoglia',
  removeFile: 'Rimuovi file',
} as const

export const commonEs = {
  copy: 'Copiar',
  copied: 'Copiado',
  show: 'Mostrar',
  hide: 'Ocultar',
  breadcrumb: 'Ruta de navegación',
  moreInfo: 'Más información',
  dropzoneTitle: 'Arrastra los archivos aquí o',
  dropzoneBrowse: 'explora',
  removeFile: 'Eliminar archivo',
} as const

export const commonFr = {
  copy: 'Copier',
  copied: 'Copié',
  show: 'Afficher',
  hide: 'Masquer',
  breadcrumb: "Fil d'Ariane",
  moreInfo: "Plus d'informations",
  dropzoneTitle: 'Glissez les fichiers ici ou',
  dropzoneBrowse: 'parcourez',
  removeFile: 'Supprimer le fichier',
} as const

export const commonDe = {
  copy: 'Kopieren',
  copied: 'Kopiert',
  show: 'Anzeigen',
  hide: 'Ausblenden',
  breadcrumb: 'Brotkrumen',
  moreInfo: 'Weitere Informationen',
  dropzoneTitle: 'Dateien hierher ziehen oder',
  dropzoneBrowse: 'durchsuchen',
  removeFile: 'Datei entfernen',
} as const

export const MEMORI_COMMON_LOCALES = {
  en: commonEn,
  it: commonIt,
  es: commonEs,
  fr: commonFr,
  de: commonDe,
} as const

export type MemoriExpandableTranslations = typeof expandableEn
export type MemoriAlertTranslations = typeof alertEn
export type MemoriOverlayTranslations = typeof overlayEn
export type MemoriCommonTranslations = typeof commonEn
