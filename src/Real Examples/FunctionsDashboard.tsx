import React from 'react'
import { Bolt, Pencil, Plus, Sparkles, Webhook } from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { Tabs } from '../components/Tabs'
import { Badge } from '../components/Badge'
import { Table } from '../components/Table'
import type { ColumnDef } from '@tanstack/react-table'
import styles from './realExamples.module.css'

type IntentRow = {
  id: string
  nome: string
  utterances: number
  webhook: string
}

const INTENTS: IntentRow[] = [
  {
    id: '1',
    nome: 'ordina_prodotto',
    utterances: 12,
    webhook: 'https://api.example.com/order',
  },
  {
    id: '2',
    nome: 'supporto_ticket',
    utterances: 8,
    webhook: 'https://api.example.com/ticket',
  },
]

const intentColumns: ColumnDef<IntentRow>[] = [
  {
    accessorKey: 'nome',
    header: 'Nome',
    minSize: 160,
  },
  {
    accessorKey: 'utterances',
    header: 'Utterances',
    size: 110,
  },
  {
    accessorKey: 'webhook',
    header: 'Webhook',
    minSize: 200,
    cell: ({ row }) => (
      <span className={styles.tableCellText}>{row.original.webhook}</span>
    ),
  },
]

const MACRO_FUNCTIONS = [
  {
    id: 'calendar',
    title: 'Calendario',
    description: 'Prenota appuntamenti e controlla disponibilità.',
  },
  {
    id: 'crm',
    title: 'CRM',
    description: 'Cerca e aggiorna contatti nel CRM collegato.',
  },
  {
    id: 'email',
    title: 'Email',
    description: 'Invia email di follow-up con template predefiniti.',
  },
]

/**
 * Funzioni aggiuntive: AIsuru macros, avanzate e intents.
 */
export function FunctionsDashboard() {
  return (
    <div className={styles.page}>
      <Section
        title="Funzioni"
        description="Abilita macro AIsuru, funzioni avanzate e intent dinamici."
        icon={
          <Bolt
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <Tabs.Root
        defaultValue="aisuru"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni funzioni"
          className={styles.tabsList}
        >
          <Tabs.Tab value="aisuru">
            <span className={styles.cellWithIcon}>
              Funzioni AIsuru
              <Sparkles
                size={14}
                aria-hidden
              />
            </span>
          </Tabs.Tab>
          <Tabs.Tab value="advanced">Funzioni avanzate</Tabs.Tab>
          <Tabs.Tab value="intents">
            Intent dinamici{' '}
            <Badge
              className={styles.tabCount}
              count={INTENTS.length}
            />
          </Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="aisuru"
          className={styles.tabPanel}
        >
          <div className={styles.cardGrid}>
            {MACRO_FUNCTIONS.map(fn => (
              <Card
                key={fn.id}
                variant="outlined"
                title={fn.title}
                description={fn.description}
                hoverable
              >
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                >
                  Configura
                </Button>
              </Card>
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          value="advanced"
          className={styles.tabPanel}
        >
          <div className={styles.toolbarRow}>
            <Button
              type="button"
              variant="primary"
              size="md"
              icon={
                <Plus
                  size={18}
                  aria-hidden
                />
              }
            >
              Nuova funzione
            </Button>
          </div>
          <Card
            variant="outlined"
            title={
              <span className={styles.cellWithIcon}>
                <Webhook
                  size={16}
                  aria-hidden
                />
                get_weather
              </span>
            }
            description="Webhook HTTP per meteo in tempo reale."
          >
            <TextMuted>POST https://api.example.com/weather</TextMuted>
          </Card>
        </Tabs.Panel>

        <Tabs.Panel
          value="intents"
          className={styles.tabPanel}
        >
          <Table<IntentRow>
            data={INTENTS}
            columns={intentColumns}
            rowActionsVariant="inline"
            rowActions={[
              {
                id: 'edit',
                label: 'Modifica',
                icon: (
                  <Pencil
                    size={16}
                    aria-hidden
                  />
                ),
                onClick: () => {
                  /* demo */
                },
              },
            ]}
            tableId="real-example-functions-intents"
          />
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}

function TextMuted({ children }: { children: React.ReactNode }) {
  return <p className={styles.tabPlaceholder}>{children}</p>
}
