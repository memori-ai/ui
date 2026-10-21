import React, { useMemo, useState } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { BarChart3, Download, Users } from 'lucide-react'
import { Button } from '../components/Button'
import { Empty } from '../components/Empty'
import { FieldGroup } from '../components/Field'
import { Input } from '../components/Input'
import { Section } from '../components/Section'
import { SelectBox } from '../components/SelectBox'
import { StatCard } from '../components/StatCard'
import { Table } from '../components/Table'
import { Tabs } from '../components/Tabs'
import '../components/Input/styles.css'
import {
  BarList,
  ChartLegend,
  ChartTable,
  TimeChart,
  type ChartDatum,
  type ChartSeries,
} from './statistics/charts'
import {
  addDays,
  agentDays,
  agentModelBreakdown,
  agentUsers,
  daysBetween,
  downloadCsv,
  formatCompact,
  formatDayLong,
  formatDayShort,
  formatImpact,
  formatInt,
  startOfDay,
  type AgentDay,
  type AgentUserUsage,
  type ImpactMetric,
} from './statistics/statsData'
import { useNotify } from './shared/useNotify'
import styles from './realExamples.module.css'
import s from './statistics/statistics.module.css'

const periodOptions = [
  { value: '30', label: 'Ultimi 30 giorni' },
  { value: '60', label: 'Ultimi 60 giorni' },
  { value: '90', label: 'Ultimi 90 giorni' },
  { value: 'custom', label: 'Personalizzato' },
]

const TOKEN_SERIES: ChartSeries[] = [
  { key: 'input', label: 'Token input', slot: 1 },
  { key: 'output', label: 'Token output', slot: 2 },
]

const VISIT_SERIES: ChartSeries[] = [
  { key: 'sessions', label: 'Sessioni', slot: 1 },
  { key: 'recurring', label: 'Utenti ricorrenti', slot: 2 },
]

const IMPACT_LABEL: Record<ImpactMetric, string> = {
  energy: 'Energia',
  co2: 'CO₂',
  water: 'Acqua',
}

const toISO = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

const fromISO = (v: string) => {
  const [y, m, d] = v.split('-').map(Number)
  return y && m && d ? new Date(y, m - 1, d) : null
}

function sum<T>(rows: T[], pick: (r: T) => number) {
  return rows.reduce((a, r) => a + pick(r), 0)
}

function toDatum(d: AgentDay, values: Record<string, number>): ChartDatum {
  return {
    label: formatDayShort(d.date),
    title: formatDayLong(d.date),
    values,
  }
}

/* ------------------------------------------------------------------ */
/* Consumo agente                                                       */
/* ------------------------------------------------------------------ */

function AgentConsumption({ days }: { days: AgentDay[] }) {
  const [metric, setMetric] = useState<ImpactMetric>('energy')

  const conversations = sum(days, d => d.conversations)
  const replies = sum(days, d => d.aiReplies)
  const input = sum(days, d => d.inputTokens)
  const output = sum(days, d => d.outputTokens)
  const total = input + output

  if (!conversations) {
    return (
      <Empty
        icon={
          <BarChart3
            size={32}
            aria-hidden
          />
        }
        description="Nessuna conversazione con risposte IA nel periodo selezionato. Prova ad allargare il periodo."
      />
    )
  }

  const peak = days.reduce((a, d) =>
    d.inputTokens + d.outputTokens > a.inputTokens + a.outputTokens ? d : a,
  )
  const models = agentModelBreakdown(days)
  const modelTotal = sum(models, m => m.inputTokens + m.outputTokens)
  const top = models[0]!

  const tokenData = days.map(d =>
    toDatum(d, { input: d.inputTokens, output: d.outputTokens }),
  )
  const impactSeries: ChartSeries[] = [
    { key: metric, label: IMPACT_LABEL[metric], slot: 1 },
  ]
  const impactData = days.map(d => toDatum(d, { [metric]: d[metric] }))
  const impactTotal = sum(days, d => d[metric])
  const formatMetric = (v: number) => formatImpact(v, metric)

  return (
    <>
      <StatCard.Grid className={s.kpis}>
        <StatCard
          label="Sessioni con IA"
          value={formatInt(conversations)}
          delta={`${formatInt(conversations / days.length)} al giorno in media`}
        />
        <StatCard
          label="Risposte IA"
          value={formatInt(replies)}
          delta={`${(replies / conversations).toLocaleString('it-IT', { maximumFractionDigits: 1 })} per sessione`}
        />
        <StatCard
          label="Token totali"
          value={formatCompact(total)}
          delta={`${formatInt(total / replies)} per risposta in media`}
        />
        <StatCard
          label="Modello più usato"
          value={<span className={s.textValue}>{top.model}</span>}
          delta={`${top.provider} · ${Math.round(((top.inputTokens + top.outputTokens) / modelTotal) * 100)}% dei token`}
        />
      </StatCard.Grid>

      <section
        className={s.panel}
        aria-labelledby="stats-tokens"
      >
        <div className={s.panelHead}>
          <div>
            <h2
              id="stats-tokens"
              className={s.panelTitle}
            >
              Token al giorno
            </h2>
            <p className={s.panelDescription}>
              Picco {formatDayLong(peak.date)} con{' '}
              {formatCompact(peak.inputTokens + peak.outputTokens)} token. Input
              e output stanno in rapporto{' '}
              {(input / output).toLocaleString('it-IT', {
                maximumFractionDigits: 1,
              })}
              ×.
            </p>
          </div>
          <ChartLegend
            series={TOKEN_SERIES}
            shape="rect"
          />
        </div>
        <TimeChart
          kind="columns"
          data={tokenData}
          series={TOKEN_SERIES}
          format={formatInt}
          formatTick={formatCompact}
          label="Token al giorno, input e output"
        />
        <ChartTable
          data={tokenData}
          series={TOKEN_SERIES}
          format={formatInt}
        />
      </section>

      <div className={s.panelGrid}>
        <section
          className={s.panel}
          aria-labelledby="stats-models"
        >
          <div className={s.panelHead}>
            <div>
              <h2
                id="stats-models"
                className={s.panelTitle}
              >
                Token per modello
              </h2>
              <p className={s.panelDescription}>
                Provider e modelli chiamati dall’agente nel periodo.
              </p>
            </div>
            <ChartLegend
              series={TOKEN_SERIES}
              shape="rect"
            />
          </div>
          <BarList
            label="Token per modello"
            series={TOKEN_SERIES}
            format={formatCompact}
            items={models.map(m => ({
              id: `${m.provider}-${m.model}`,
              label: m.model,
              sublabel: m.provider,
              values: { input: m.inputTokens, output: m.outputTokens },
            }))}
          />
        </section>

        <section
          className={s.panel}
          aria-labelledby="stats-impact"
        >
          <div className={s.panelHead}>
            <div>
              <h2
                id="stats-impact"
                className={s.panelTitle}
              >
                Impatto ambientale
              </h2>
              <p className={s.panelDescription}>
                {formatImpact(impactTotal, metric)} in totale,{' '}
                {formatImpact(impactTotal / conversations, metric)} per
                sessione.
              </p>
            </div>
            <Tabs.Root
              value={metric}
              onValueChange={v => setMetric(v as ImpactMetric)}
              className={s.subTabs}
            >
              <Tabs.List aria-label="Metrica di impatto">
                <Tabs.Tab value="energy">Energia</Tabs.Tab>
                <Tabs.Tab value="co2">CO₂</Tabs.Tab>
                <Tabs.Tab value="water">Acqua</Tabs.Tab>
                <Tabs.Indicator />
              </Tabs.List>
            </Tabs.Root>
          </div>
          <TimeChart
            kind="columns"
            data={impactData}
            series={impactSeries}
            format={formatMetric}
            label={`${IMPACT_LABEL[metric]} consumata al giorno`}
            height={180}
          />
          <p className={s.footnote}>
            Stime fornite dal provider in base ai token consumati.
          </p>
        </section>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Utilizzi utenti                                                      */
/* ------------------------------------------------------------------ */

function UsersConsumption({
  users,
  rangeLabel,
}: {
  users: AgentUserUsage[]
  rangeLabel: string
}) {
  const notify = useNotify()
  const multiTenant = new Set(users.map(u => u.tenantName)).size > 1

  const columns = useMemo<ColumnDef<AgentUserUsage>[]>(
    () => [
      {
        accessorKey: 'userName',
        header: 'Utente',
        minSize: 220,
        cell: ({ row }) => (
          <span className={s.cellStack}>
            <span className={styles.tableCellText}>
              {row.original.userName}
            </span>
            <span className={s.cellSub}>{row.original.email}</span>
          </span>
        ),
      },
      ...(multiTenant
        ? [
            {
              accessorKey: 'tenantName',
              header: 'Tenant',
              size: 150,
            } satisfies ColumnDef<AgentUserUsage>,
          ]
        : []),
      {
        accessorKey: 'validChats',
        header: () => <span className={s.num}>Chat valide</span>,
        size: 120,
        cell: ({ getValue }) => (
          <span className={s.num}>{formatInt(getValue<number>())}</span>
        ),
      },
      {
        accessorKey: 'aiMessages',
        header: () => <span className={s.num}>Risposte IA</span>,
        size: 120,
        cell: ({ getValue }) => (
          <span className={s.num}>{formatInt(getValue<number>())}</span>
        ),
      },
      {
        accessorKey: 'totalMessages',
        header: () => <span className={s.num}>Messaggi</span>,
        size: 120,
        cell: ({ getValue }) => (
          <span className={s.num}>{formatInt(getValue<number>())}</span>
        ),
      },
    ],
    [multiTenant],
  )

  const exportCsv = () => {
    downloadCsv(`consumi-utenti-${rangeLabel}.csv`, [
      [
        'userName',
        'email',
        'tenantName',
        'validChats',
        'aiMessages',
        'totalMessages',
      ],
      ...users.map(u => [
        u.userName,
        u.email,
        u.tenantName,
        u.validChats,
        u.aiMessages,
        u.totalMessages,
      ]),
    ])
    notify('CSV dei consumi per utente scaricato')
  }

  return (
    <>
      <p className={s.footnote}>
        Solo utenti registrati: le sessioni anonime sono conteggiate in Consumo
        agente.
      </p>
      <Table<AgentUserUsage>
        data={users}
        columns={columns}
        getRowId={u => u.userID}
        enablePagination
        initialPageSize={25}
        pageSizeOptions={[25, 50, 100]}
        paginationVariant="simplified"
        globalFilterPlaceholder="Cerca utente o email"
        controlsAfterFilters={
          <Button
            type="button"
            variant="outline"
            icon={
              <Download
                size={16}
                aria-hidden
              />
            }
            onClick={exportCsv}
            disabled={!users.length}
          >
            Esporta CSV
          </Button>
        }
        emptyState={
          <Empty
            icon={
              <Users
                size={32}
                aria-hidden
              />
            }
            description="Nessun utente registrato ha usato l’agente nel periodo selezionato."
          />
        }
      />
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Andamento visite                                                     */
/* ------------------------------------------------------------------ */

function Visits({ days }: { days: AgentDay[] }) {
  const sessions = sum(days, d => d.sessions)
  const recurring = sum(days, d => d.recurringUsers)
  const data = days.map(d =>
    toDatum(d, { sessions: d.sessions, recurring: d.recurringUsers }),
  )
  const busiest = days.reduce((a, d) => (d.sessions > a.sessions ? d : a))

  return (
    <>
      <StatCard.Grid className={s.kpis}>
        <StatCard
          label="Sessioni"
          value={formatInt(sessions)}
          delta={`${formatInt(sessions / days.length)} al giorno in media`}
        />
        <StatCard
          label="Utenti ricorrenti"
          value={formatInt(recurring)}
          delta={`${Math.round((recurring / Math.max(1, sessions)) * 100)}% delle sessioni`}
        />
        <StatCard
          label="Giorno più visitato"
          value={
            <span className={s.textValue}>{formatDayLong(busiest.date)}</span>
          }
          delta={`${formatInt(busiest.sessions)} sessioni`}
        />
      </StatCard.Grid>

      <section
        className={s.panel}
        aria-labelledby="stats-visits"
      >
        <div className={s.panelHead}>
          <div>
            <h2
              id="stats-visits"
              className={s.panelTitle}
            >
              Visite al giorno
            </h2>
            <p className={s.panelDescription}>
              Una sessione è un visitatore (indirizzo IP) che apre l’agente in
              quel giorno; è ricorrente se lo apre più volte.
            </p>
          </div>
          <ChartLegend
            series={VISIT_SERIES}
            shape="line"
          />
        </div>
        <TimeChart
          kind="lines"
          data={data}
          series={VISIT_SERIES}
          format={formatInt}
          label="Sessioni e utenti ricorrenti al giorno"
        />
        <ChartTable
          data={data}
          series={VISIT_SERIES}
          format={formatInt}
        />
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

/**
 * Agent “Statistiche”: consumption from chat-log LLM usage, per-user usage
 * and visits, over one shared period.
 */
export function StatisticsDashboard() {
  const today = useMemo(() => startOfDay(new Date()), [])
  const [period, setPeriod] = useState<string | null>('30')
  const [customFrom, setCustomFrom] = useState(toISO(addDays(today, -13)))
  const [customTo, setCustomTo] = useState(toISO(today))

  const [from, to] = useMemo(() => {
    if (period === 'custom') {
      const f = fromISO(customFrom) ?? addDays(today, -13)
      const t = fromISO(customTo) ?? today
      return f <= t ? [f, t] : [t, f]
    }
    return [addDays(today, -(Number(period ?? 30) - 1)), today]
  }, [period, customFrom, customTo, today])

  const days = useMemo(() => agentDays(from, to), [from, to])
  const users = useMemo(() => agentUsers(days), [days])
  const rangeText = `${from.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' })} – ${to.toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: 'numeric' })}`

  return (
    <div className={styles.page}>
      <Section
        title="Statistiche"
        description="Consumi, utilizzo per utente e visite dell’agente nel periodo selezionato."
        icon={
          <BarChart3
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <div className={s.root}>
        <div className={s.filters}>
          <SelectBox
            className={s.periodSelect}
            label="Periodo"
            options={periodOptions}
            value={period}
            onChange={setPeriod}
          />
          {period === 'custom' ? (
            <>
              <FieldGroup label="Dal">
                <Input
                  className={s.dateInput}
                  type="date"
                  value={customFrom}
                  max={customTo}
                  onValueChange={setCustomFrom}
                />
              </FieldGroup>
              <FieldGroup label="Al">
                <Input
                  className={s.dateInput}
                  type="date"
                  value={customTo}
                  min={customFrom}
                  max={toISO(today)}
                  onValueChange={setCustomTo}
                />
              </FieldGroup>
            </>
          ) : null}
          <p className={s.rangeNote}>
            {rangeText} · {daysBetween(from, to)} giorni
          </p>
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
            <Tabs.Tab value="users">Utilizzi utenti</Tabs.Tab>
            <Tabs.Tab value="visits">Andamento visite</Tabs.Tab>
            <Tabs.Indicator />
          </Tabs.List>

          <Tabs.Panel
            value="agent"
            className={s.root}
          >
            <AgentConsumption days={days} />
          </Tabs.Panel>
          <Tabs.Panel
            value="users"
            className={styles.tabPanel}
          >
            <UsersConsumption
              users={users}
              rangeLabel={`${toISO(from)}_${toISO(to)}`}
            />
          </Tabs.Panel>
          <Tabs.Panel
            value="visits"
            className={s.root}
          >
            <Visits days={days} />
          </Tabs.Panel>
        </Tabs.Root>
      </div>
    </div>
  )
}
