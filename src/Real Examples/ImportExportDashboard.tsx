import React from 'react'
import {
  CloudUpload,
  FileSpreadsheet,
  FileText,
  Import,
  Upload,
} from 'lucide-react'
import { Button } from '../components/Button'
import { DocumentCard } from '../components/DocumentCard'
import { Section } from '../components/Section'
import { Tabs } from '../components/Tabs'
import styles from './realExamples.module.css'

/**
 * Import / Export: documenti, CSV, JSONL.
 */
export function ImportExportDashboard() {
  return (
    <div className={styles.page}>
      <Section
        title="Import / Export"
        description="Importa documenti e CSV, oppure esporta i contenuti dell’agente."
        icon={
          <Import
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <Tabs.Root
        defaultValue="import-doc"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni import export"
          className={styles.tabsList}
        >
          <Tabs.Tab value="import-doc">
            <span className={styles.cellWithIcon}>
              <FileText
                size={16}
                aria-hidden
              />
              Importa documenti
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="import-csv">
            <span className={styles.cellWithIcon}>
              <FileSpreadsheet
                size={16}
                aria-hidden
              />
              Importa CSV
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="export-csv">Esporta CSV</Tabs.Tab>
          <Tabs.Tab value="export-jsonl">Esporta JSONL</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="import-doc"
          className={styles.tabPanel}
        >
          <div className={styles.docDropZone}>
            <Upload
              size={32}
              aria-hidden
            />
            <p className={styles.subtitle}>
              Trascina qui PDF, DOCX o TXT, oppure seleziona i file.
            </p>
            <Button
              type="button"
              variant="primary"
              size="md"
              icon={
                <CloudUpload
                  size={18}
                  aria-hidden
                />
              }
            >
              Carica documenti
            </Button>
          </div>
          <div className={styles.cardGrid}>
            <DocumentCard
              title="Manuale_prodotto.pdf"
              badge="PDF"
              meta="2.4 MB"
            />
            <DocumentCard
              title="FAQ_supporto.docx"
              badge="DOCX"
              meta="840 KB"
            />
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          value="import-csv"
          className={styles.tabPanel}
        >
          <div className={styles.docDropZone}>
            <FileSpreadsheet
              size={32}
              aria-hidden
            />
            <p className={styles.subtitle}>
              Carica un CSV con colonne Domanda / Risposta.
            </p>
            <Button
              type="button"
              variant="primary"
              size="md"
            >
              Seleziona CSV
            </Button>
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          value="export-csv"
          className={styles.tabPanel}
        >
          <p className={styles.tabPlaceholder}>
            Esporta contenuti, dizionario o funzioni in CSV (demo).
          </p>
          <Button
            type="button"
            variant="primary"
            size="md"
          >
            Scarica CSV
          </Button>
        </Tabs.Panel>

        <Tabs.Panel
          value="export-jsonl"
          className={styles.tabPanel}
        >
          <p className={styles.tabPlaceholder}>
            Esporta in JSONL per backup o migrazione (demo).
          </p>
          <Button
            type="button"
            variant="primary"
            size="md"
          >
            Scarica JSONL
          </Button>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
