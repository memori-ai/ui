import React, { useState } from 'react'
import { FileSpreadsheet, FileText, Import } from 'lucide-react'
import { Button } from '../components/Button'
import { DocumentCard } from '../components/DocumentCard'
import { FileDropzone } from '../components/FileDropzone'
import { Section } from '../components/Section'
import { Tabs } from '../components/Tabs'
import { useNotify } from './shared/useNotify'
import styles from './realExamples.module.css'

/**
 * Import / Export: documenti, CSV, JSONL.
 */
export function ImportExportDashboard() {
  const notify = useNotify()
  const [docs, setDocs] = useState<string[]>([])
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
          <FileDropzone
            accept=".pdf,.docx,.txt"
            multiple
            description="PDF, DOCX o TXT"
            onFilesSelected={files => {
              setDocs(prev => [...files.map(f => f.name), ...prev])
              notify(
                files.length === 1
                  ? `${files[0]!.name} caricato`
                  : `${files.length} documenti caricati`,
              )
            }}
          />
          <div className={styles.cardGrid}>
            {docs.map(name => (
              <DocumentCard
                key={name}
                title={name}
                badge={name.split('.').pop()?.toUpperCase()}
                meta="In elaborazione"
              />
            ))}
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
          <FileDropzone
            accept=".csv"
            icon={<FileSpreadsheet size={28} />}
            title="Trascina qui il CSV oppure sfoglia"
            description="Colonne richieste: Domanda / Risposta"
            onFilesSelected={files => notify(`${files[0]!.name} importato`)}
          />
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
