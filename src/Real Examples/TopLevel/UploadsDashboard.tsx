import React, { useMemo, useState } from 'react'
import type { ColumnDef, PaginationState } from '@tanstack/react-table'
import { Download, FileUp, Plus, Trash2 } from 'lucide-react'
import { Button } from '../../components/Button'
import { DocumentCard } from '../../components/DocumentCard'
import { FileDropzone } from '../../components/FileDropzone'
import { Section } from '../../components/Section'
import { Table } from '../../components/Table'
import { Tabs } from '../../components/Tabs'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

type UploadRow = {
  id: string
  nome: string
  tipo: string
  size: string
  updatedAt: string
}

const UPLOADS: UploadRow[] = [
  {
    id: '1',
    nome: 'avatar-demo.png',
    tipo: 'image/png',
    size: '240 KB',
    updatedAt: '20/03/2026',
  },
  {
    id: '2',
    nome: 'brochure.pdf',
    tipo: 'application/pdf',
    size: '1.8 MB',
    updatedAt: '18/03/2026',
  },
  {
    id: '3',
    nome: 'intro.mp4',
    tipo: 'video/mp4',
    size: '12 MB',
    updatedAt: '10/03/2026',
  },
]

/**
 * Uploads: asset media del tenant.
 */
export function UploadsDashboard() {
  const [queued, setQueued] = useState<string[]>(['pending-upload.png'])
  const [tab, setTab] = useState('list')
  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const columns = useMemo<ColumnDef<UploadRow>[]>(
    () => [
      {
        accessorKey: 'nome',
        header: 'Nome',
        minSize: 180,
      },
      {
        accessorKey: 'tipo',
        header: 'Tipo',
        minSize: 140,
      },
      {
        accessorKey: 'size',
        header: 'Dimensione',
        size: 110,
      },
      {
        accessorKey: 'updatedAt',
        header: 'Aggiornato',
        size: 120,
      },
    ],
    [],
  )

  const filtered = useMemo(() => {
    if (!search.trim()) return UPLOADS
    const q = search.toLowerCase()
    return UPLOADS.filter(
      r => r.nome.toLowerCase().includes(q) || r.tipo.toLowerCase().includes(q),
    )
  }, [search])

  const pageRows = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    return filtered.slice(start, start + pagination.pageSize)
  }, [filtered, pagination.pageIndex, pagination.pageSize])

  return (
    <div className={styles.page}>
      <Section
        title="Uploads"
        description="Carica e gestisci asset media disponibili per gli agenti."
        icon={
          <FileUp
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <Tabs.Root
        value={tab}
        onValueChange={value => setTab(String(value))}
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni uploads"
          className={styles.tabsList}
        >
          <Tabs.Tab value="list">Elenco</Tabs.Tab>
          <Tabs.Tab value="upload">Carica</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="list"
          className={styles.tabPanel}
        >
          <div className={styles.toolbarRow}>
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={() => setTab('upload')}
              icon={
                <Plus
                  size={18}
                  aria-hidden
                />
              }
            >
              Nuovo upload
            </Button>
          </div>
          <Table<UploadRow>
            data={pageRows}
            columns={columns}
            enablePagination
            manualPagination
            rowCount={filtered.length}
            pagination={pagination}
            onPaginationChange={setPagination}
            search={search}
            onSearchChange={setSearch}
            globalFilterPlaceholder="Cerca file"
            paginationVariant="simplified"
            pageSizeOptions={[10, 25]}
            initialPageSize={10}
            rowActionsVariant="inline"
            rowActions={[
              {
                id: 'download',
                label: 'Scarica',
                icon: (
                  <Download
                    size={16}
                    aria-hidden
                  />
                ),
                onClick: () => {
                  /* demo */
                },
              },
              {
                id: 'delete',
                label: 'Elimina',
                variant: 'danger',
                icon: (
                  <Trash2
                    size={16}
                    aria-hidden
                  />
                ),
                onClick: () => {
                  /* demo */
                },
              },
            ]}
            tableId="real-example-uploads"
          />
        </Tabs.Panel>

        <Tabs.Panel
          value="upload"
          className={styles.tabPanel}
        >
          <FileDropzone
            multiple
            accept="image/*,video/*,.pdf,.docx,.txt"
            icon={<FileUp size={28} />}
            description="Immagini, video o documenti"
            onFilesSelected={files =>
              setQueued(prev => [...files.map(f => f.name), ...prev])
            }
          />
          <div className={styles.cardGrid}>
            {queued.map(name => (
              <DocumentCard
                key={name}
                title={name}
                badge={name.split('.').pop()?.toUpperCase()}
                meta="In coda"
              />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
