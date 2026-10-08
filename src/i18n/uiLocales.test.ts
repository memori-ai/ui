import { createInstance } from 'i18next'
import { expect, it } from 'vitest'
import { addMemoriTableToI18n } from './addMemoriTableToI18n'
import { memoriI18n } from './i18n'

it('ships confirm, cancel, and select placeholder on the overlay bundle', () => {
  expect(memoriI18n.getResource('en', 'translation', 'overlay')).toMatchObject({
    confirm: 'Confirm',
    cancel: 'Cancel',
    selectPlaceholder: 'Select an option',
  })
  expect(memoriI18n.getResource('it', 'translation', 'overlay')).toMatchObject({
    confirm: 'Conferma',
    cancel: 'Annulla',
    selectPlaceholder: "Seleziona un'opzione",
  })
  expect(memoriI18n.getResource('es', 'translation', 'overlay')).toMatchObject({
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    selectPlaceholder: 'Selecciona una opción',
  })
  expect(memoriI18n.getResource('fr', 'translation', 'overlay')).toMatchObject({
    confirm: 'Confirmer',
    cancel: 'Annuler',
    selectPlaceholder: 'Sélectionner une option',
  })
  expect(memoriI18n.getResource('de', 'translation', 'overlay')).toMatchObject({
    confirm: 'Bestätigen',
    cancel: 'Abbrechen',
    selectPlaceholder: 'Option auswählen',
  })
})

it('merges the new overlay strings into a host i18next instance', async () => {
  const host = createInstance()
  await host.init({
    lng: 'en',
    fallbackLng: 'en',
    resources: { en: { translation: {} }, it: { translation: {} } },
  })
  addMemoriTableToI18n(host)
  expect(host.t('overlay.confirm')).toBe('Confirm')
  expect(host.t('overlay.cancel')).toBe('Cancel')
  expect(host.t('overlay.selectPlaceholder', { lng: 'it' })).toBe(
    "Seleziona un'opzione",
  )
})
