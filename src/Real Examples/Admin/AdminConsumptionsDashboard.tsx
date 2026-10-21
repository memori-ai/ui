import React, { useState } from 'react'
import { Bot, Building2, Gauge } from 'lucide-react'
import { Card } from '../../components/Card'
import { Empty } from '../../components/Empty'
import { Section } from '../../components/Section'
import { SelectBox } from '../../components/SelectBox'
import { Tabs } from '../../components/Tabs'
import styles from '../realExamples.module.css'

const periodOptions = [
  { value: '30', label: '30 giorni' },
  { value: '60', label: '60 giorni' },
  { value: '90', label: '90 giorni' },
]

const CHART_HEIGHTS = [55, 40, 70, 85, 60, 95, 48, 72, 66, 80]

/**
 * Admin → Consumptions overview.
 */
export function AdminConsumptionsDashboard() {
  const [period, setPeriod] = useState<string | null>('30')

  return (
    <div className={styles.page}>
      <Section
        title="Admin · Consumi"
        description="Panoramica consumi messaggi, sessioni e GenAI a livello tenant."
        icon={
          <Gauge
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <div className={styles.toolbarRow}>
        <label className={styles.instructionsLabelRow}>
          Periodo
          <SelectBox
            options={periodOptions}
            value={period}
            onChange={setPeriod}
          />
        </label>
      </div>

      <Tabs.Root
        defaultValue="overview"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni consumi"
          className={styles.tabsList}
        >
          <Tabs.Tab value="overview">Panoramica</Tabs.Tab>
          <Tabs.Tab value="tenants">Per tenant</Tabs.Tab>
          <Tabs.Tab value="agents">Per agente</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="overview"
          className={styles.tabPanel}
        >
          <div className={styles.statsGrid}>
            <Card variant="outlined">
              <p className={styles.statCardValue}>184k</p>
              <p className={styles.statCardLabel}>Messaggi</p>
              <p className={styles.statCardDelta}>+6% vs periodo prec.</p>
            </Card>
            <Card variant="outlined">
              <p className={styles.statCardValue}>9.2k</p>
              <p className={styles.statCardLabel}>Sessioni</p>
              <p className={styles.statCardDelta}>+2% vs periodo prec.</p>
            </Card>
            <Card variant="outlined">
              <p className={styles.statCardValue}>41k</p>
              <p className={styles.statCardLabel}>Token GenAI</p>
              <p
                className={`${styles.statCardDelta} ${styles.statCardDeltaNegative}`}
              >
                −4% vs periodo prec.
              </p>
            </Card>
            <Card variant="outlined">
              <p className={styles.statCardValue}>312</p>
              <p className={styles.statCardLabel}>Agenti attivi</p>
              <p className={styles.statCardDelta}>+9% vs periodo prec.</p>
            </Card>
          </div>
          <div
            className={styles.chartPlaceholder}
            role="img"
            aria-label="Grafico consumi (demo)"
          >
            {CHART_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className={styles.chartBar}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          value="tenants"
          className={styles.tabPanel}
        >
          <Empty
            icon={
              <Building2
                size={32}
                aria-hidden
              />
            }
            description="Nessun dato: il breakdown dei consumi per tenant apparirà qui (demo)."
          />
        </Tabs.Panel>

        <Tabs.Panel
          value="agents"
          className={styles.tabPanel}
        >
          <Empty
            icon={
              <Bot
                size={32}
                aria-hidden
              />
            }
            description="Nessun dato: il breakdown dei consumi per agente apparirà qui (demo)."
          />
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
