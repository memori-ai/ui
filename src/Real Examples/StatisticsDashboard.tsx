import React, { useState } from 'react'
import { Activity, BarChart3, Users } from 'lucide-react'
import { Card } from '../components/Card'
import { Empty } from '../components/Empty'
import { Section } from '../components/Section'
import { SelectBox } from '../components/SelectBox'
import { Tabs } from '../components/Tabs'
import styles from './realExamples.module.css'

const periodOptions = [
  { value: '30', label: '30 giorni' },
  { value: '60', label: '60 giorni' },
  { value: '90', label: '90 giorni' },
  { value: 'custom', label: 'Personalizzato' },
]

const CHART_HEIGHTS = [40, 65, 48, 80, 55, 90, 70, 45, 75, 60]

/**
 * Statistiche: periodo, consumo agente e utenti.
 */
export function StatisticsDashboard() {
  const [period, setPeriod] = useState<string | null>('30')

  return (
    <div className={styles.page}>
      <Section
        title="Statistiche"
        description="Monitora consumi, sessioni e attività degli utenti."
        icon={
          <BarChart3
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
        defaultValue="agent"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni statistiche"
          className={styles.tabsList}
        >
          <Tabs.Tab value="agent">Consumo agente</Tabs.Tab>
          <Tabs.Tab value="users">Consumo utenti</Tabs.Tab>
          <Tabs.Tab value="activity">Attività utenti</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="agent"
          className={styles.tabPanel}
        >
          <div className={styles.statsGrid}>
            <Card variant="outlined">
              <p className={styles.statCardValue}>12.4k</p>
              <p className={styles.statCardLabel}>Messaggi</p>
              <p className={styles.statCardDelta}>+8% vs periodo prec.</p>
            </Card>
            <Card variant="outlined">
              <p className={styles.statCardValue}>862</p>
              <p className={styles.statCardLabel}>Sessioni</p>
              <p className={styles.statCardDelta}>+3% vs periodo prec.</p>
            </Card>
            <Card variant="outlined">
              <p className={styles.statCardValue}>3.2k</p>
              <p className={styles.statCardLabel}>Token GenAI</p>
              <p
                className={`${styles.statCardDelta} ${styles.statCardDeltaNegative}`}
              >
                −5% vs periodo prec.
              </p>
            </Card>
            <Card variant="outlined">
              <p className={styles.statCardValue}>41</p>
              <p className={styles.statCardLabel}>Utenti unici</p>
              <p className={styles.statCardDelta}>+12% vs periodo prec.</p>
            </Card>
          </div>
          <div
            className={styles.chartPlaceholder}
            role="img"
            aria-label="Grafico consumo messaggi (demo)"
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
          value="users"
          className={styles.tabPanel}
        >
          <Empty
            icon={
              <Users
                size={32}
                aria-hidden
              />
            }
            description="Nessun dato di consumo: il consumo per utente nel periodo selezionato apparirà qui (demo)."
          />
        </Tabs.Panel>

        <Tabs.Panel
          value="activity"
          className={styles.tabPanel}
        >
          <Empty
            icon={
              <Activity
                size={32}
                aria-hidden
              />
            }
            description="Nessuna attività: gli eventi e i log degli utenti appariranno qui (demo)."
          />
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
