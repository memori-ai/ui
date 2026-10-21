import React, { useMemo, useState } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import { ChevronLeft, ChevronRight, Download, Gauge } from 'lucide-react'
import { Button } from '../../components/Button'
import { Empty } from '../../components/Empty'
import { Progress } from '../../components/Progress'
import { Section } from '../../components/Section'
import { StatCard } from '../../components/StatCard'
import { Table } from '../../components/Table'
import { Tabs } from '../../components/Tabs'
import { Tag } from '../../components/Tag'
import {
  CHARS_PER_PAGE,
  TENANT_COUNTS,
  TENANT_LIMITS,
  downloadCsv,
  formatCompact,
  formatInt,
  formatMonth,
  tenantMonth,
  type TenantAgentRow,
  type TenantKeyRow,
} from '../statistics/statsData'
import { useNotify } from '../shared/useNotify'
import styles from '../realExamples.module.css'
import s from '../statistics/statistics.module.css'

const pages = (chars: number) => Math.round(chars / CHARS_PER_PAGE)

/** Primary figure with an optional muted second line. */
function NumCell({ value, sub }: { value: string; sub?: string | null }) {
  return (
    <>
      <span className={s.num}>{value}</span>
      {sub ? <span className={s.numSub}>{sub}</span> : null}
    </>
  )
}

type MeterProps = {
  label: string
  used: number
  /** 0 / undefined = unlimited. */
  max?: number
  unit?: string
}

function Meter({ label, used, max, unit }: MeterProps) {
  const pct = max ? (used / max) * 100 : 0
  const over = !!max && used > max
  return (
    <div className={s.meter}>
      <div className={s.meterHead}>
        <dt className={s.meterLabel}>{label}</dt>
        <dd className={s.meterValue}>
          {formatInt(used)}
          <span>
            {' '}
            / {max ? formatInt(max) : 'illimitato'}
            {unit ? ` ${unit}` : ''}
          </span>
        </dd>
      </div>
      {max ? (
        <>
          <Progress
            value={pct}
            size="sm"
            status={over ? 'error' : 'default'}
            aria-label={`${label}: ${Math.round(pct)}% del limite`}
          />
          <dd
            className={over ? s.meterNoteWarn : s.meterNote}
            style={{ margin: 0 }}
          >
            {over
              ? `Limite superato di ${formatInt(used - max)}`
              : `${Math.round(pct)}% · restano ${formatInt(max - used)}`}
          </dd>
        </>
      ) : null}
    </div>
  )
}

/**
 * Admin → Consumi: monthly tenant consumption (ConsumptionLog, `Monthly`)
 * against the plan limits, broken down per agent and per model key.
 */
export function AdminConsumptionsDashboard() {
  const notify = useNotify()
  const [offset, setOffset] = useState(0)
  const data = useMemo(() => tenantMonth(offset), [offset])
  const { totals, agents, keys } = data
  const tokens = totals.promptTokens + totals.completionTokens
  const keyTotal = keys.reduce(
    (a, k) => a + k.promptTokens + k.completionTokens,
    0,
  )
  const today = new Date()

  const agentColumns = useMemo<ColumnDef<TenantAgentRow>[]>(
    () => [
      {
        accessorKey: 'agent',
        header: 'Agente',
        minSize: 200,
        cell: ({ row }) => (
          <span className={s.cellStack}>
            <span className={styles.tableCellText}>{row.original.agent}</span>
            <span className={s.cellSub}>{row.original.owner}</span>
          </span>
        ),
      },
      {
        accessorKey: 'validSessions',
        header: () => <span className={s.num}>Chat valide</span>,
        size: 130,
        cell: ({ row: { original: r } }) => (
          <NumCell
            value={formatInt(r.validSessions)}
            sub={
              r.deepThoughtValidSessions
                ? `${formatInt(r.deepThoughtValidSessions)} con PP`
                : null
            }
          />
        ),
      },
      {
        accessorKey: 'completions',
        header: () => <span className={s.num}>Risposte IA</span>,
        size: 140,
        cell: ({ row: { original: r } }) => (
          <NumCell
            value={formatInt(r.completions)}
            sub={
              r.nonChargeableCompletions
                ? `+${formatInt(r.nonChargeableCompletions)} non conteggiate`
                : null
            }
          />
        ),
      },
      {
        accessorKey: 'deepThoughtCompletions',
        header: () => <span className={s.num}>Risposte IA con PP</span>,
        size: 150,
        cell: ({ row: { original: r } }) => (
          <NumCell
            value={formatInt(r.deepThoughtCompletions)}
            sub={
              r.nonChargeableDeepThoughtCompletions
                ? `+${formatInt(r.nonChargeableDeepThoughtCompletions)} non conteggiate`
                : null
            }
          />
        ),
      },
      {
        accessorKey: 'importedSize',
        header: () => <span className={s.num}>Pagine importate</span>,
        size: 140,
        cell: ({ row: { original: r } }) => (
          <NumCell
            value={formatInt(pages(r.importedSize))}
            sub={
              r.nonChargeableImportedSize
                ? `+${formatInt(pages(r.nonChargeableImportedSize))} non conteggiate`
                : null
            }
          />
        ),
      },
      {
        id: 'tokens',
        header: () => <span className={s.num}>Token</span>,
        size: 150,
        accessorFn: r => r.promptTokens + r.completionTokens,
        cell: ({ row: { original: r } }) => (
          <NumCell
            value={formatCompact(r.promptTokens + r.completionTokens)}
            sub={`${formatCompact(r.promptTokens)} in · ${formatCompact(r.completionTokens)} out`}
          />
        ),
      },
    ],
    [],
  )

  const keyColumns = useMemo<ColumnDef<TenantKeyRow>[]>(
    () => [
      {
        accessorKey: 'model',
        header: 'Modello',
        minSize: 200,
        cell: ({ row }) => (
          <span className={s.cellStack}>
            <span className={styles.tableCellText}>{row.original.model}</span>
            <span className={s.cellSub}>{row.original.provider}</span>
          </span>
        ),
      },
      {
        accessorKey: 'platformKey',
        header: 'Chiave',
        size: 130,
        cell: ({ row }) =>
          row.original.platformKey ? (
            <Tag color="primary">Memori</Tag>
          ) : (
            <Tag color="default">Del tenant</Tag>
          ),
      },
      {
        accessorKey: 'promptTokens',
        header: () => <span className={s.num}>Token prompt</span>,
        size: 130,
        cell: ({ getValue }) => (
          <NumCell value={formatInt(getValue<number>())} />
        ),
      },
      {
        accessorKey: 'completionTokens',
        header: () => <span className={s.num}>Token completion</span>,
        size: 150,
        cell: ({ getValue }) => (
          <NumCell value={formatInt(getValue<number>())} />
        ),
      },
      {
        id: 'share',
        header: 'Quota sul totale',
        size: 180,
        accessorFn: r => r.promptTokens + r.completionTokens,
        cell: ({ getValue }) => {
          const pct = (getValue<number>() / Math.max(1, keyTotal)) * 100
          return (
            <span className={s.shareCell}>
              <span
                className={s.shareTrack}
                aria-hidden
              >
                <span
                  className={s.shareFill}
                  style={{ width: `${pct}%`, display: 'block' }}
                />
              </span>
              <span className={s.shareValue}>
                {pct.toLocaleString('it-IT', { maximumFractionDigits: 1 })}%
              </span>
            </span>
          )
        },
      },
    ],
    [keyTotal],
  )

  const exportCsv = () => {
    const ym = `${data.month.getFullYear()}${String(data.month.getMonth() + 1).padStart(2, '0')}`
    downloadCsv(`consumi-${ym}.csv`, [
      [
        'user',
        'agent',
        'promptTokens',
        'completionTokens',
        'totalTokens',
        'validSessions',
        'completions',
        'deepThoughtValidSessions',
        'deepThoughtCompletions',
        'importedSize',
        'nonChargeableCompletions',
        'nonChargeableDeepThoughtCompletions',
        'nonChargeableImportedSize',
      ],
      ...agents.map(r => [
        r.owner,
        r.agent,
        r.promptTokens,
        r.completionTokens,
        r.promptTokens + r.completionTokens,
        r.validSessions,
        r.completions,
        r.deepThoughtValidSessions,
        r.deepThoughtCompletions,
        r.importedSize,
        r.nonChargeableCompletions,
        r.nonChargeableDeepThoughtCompletions,
        r.nonChargeableImportedSize,
      ]),
    ])
    notify(`CSV di ${formatMonth(data.month)} scaricato`)
  }

  const nonChargeable =
    totals.nonChargeableCompletions + totals.nonChargeableDeepThoughtCompletions

  return (
    <div className={styles.page}>
      <Section
        title="Admin · Consumi"
        description="Consumi mensili del tenant rispetto ai limiti del piano, per agente e per modello."
        icon={
          <Gauge
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <div className={s.root}>
        <div className={s.filters}>
          <div
            className={s.monthStepper}
            role="group"
            aria-label="Mese di riferimento"
          >
            <Button
              type="button"
              variant="ghost"
              size="sm"
              shape="circle"
              aria-label="Mese precedente"
              icon={
                <ChevronLeft
                  size={18}
                  aria-hidden
                />
              }
              onClick={() => setOffset(o => o + 1)}
            />
            <span
              className={s.monthLabel}
              aria-live="polite"
            >
              {formatMonth(data.month)}
              <span className={s.monthLabelHint}>
                {data.isCurrent
                  ? `In corso, fino al ${today.getDate()}`
                  : 'Mese chiuso'}
              </span>
            </span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              shape="circle"
              aria-label="Mese successivo"
              icon={
                <ChevronRight
                  size={18}
                  aria-hidden
                />
              }
              disabled={offset === 0}
              onClick={() => setOffset(o => Math.max(0, o - 1))}
            />
          </div>
          {offset > 0 ? (
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOffset(0)}
            >
              Torna al mese corrente
            </Button>
          ) : null}
          <div className={s.filtersEnd}>
            <Button
              type="button"
              variant="outline"
              icon={
                <Download
                  size={16}
                  aria-hidden
                />
              }
              disabled={!agents.length}
              onClick={exportCsv}
            >
              Esporta CSV
            </Button>
          </div>
        </div>

        {!agents.length ? (
          <Empty
            icon={
              <Gauge
                size={32}
                aria-hidden
              />
            }
            description={`Nessun consumo registrato in ${formatMonth(data.month)}.`}
          />
        ) : (
          <>
            <section
              className={s.panel}
              aria-labelledby="consumi-piano"
            >
              <div>
                <h2
                  id="consumi-piano"
                  className={s.panelTitle}
                >
                  Utilizzo del piano
                </h2>
                <p className={s.panelDescription}>
                  Chat, risposte e pagine sono del mese selezionato; agenti e
                  utenti sono quelli attivi oggi.
                </p>
              </div>
              <dl className={s.meters}>
                <Meter
                  label="Chat valide"
                  used={totals.validSessions}
                  max={TENANT_LIMITS.maxFreeSessions}
                />
                <Meter
                  label="Risposte IA"
                  used={totals.completions}
                  max={TENANT_LIMITS.maxCompletions}
                />
                <Meter
                  label="Pagine importate"
                  used={pages(totals.importedSize)}
                  max={pages(TENANT_LIMITS.maxImportSize)}
                />
                <Meter
                  label="Agenti"
                  used={TENANT_COUNTS.agents}
                  max={TENANT_LIMITS.maxTotalMemori}
                />
                <Meter
                  label="Utenti"
                  used={TENANT_COUNTS.users}
                  max={TENANT_LIMITS.maxUsers}
                />
                <Meter
                  label="Amministratori"
                  used={TENANT_COUNTS.admins}
                  max={TENANT_LIMITS.maxAdmins}
                />
              </dl>
            </section>

            <StatCard.Grid className={s.kpis}>
              <StatCard
                label="Token totali"
                value={formatCompact(tokens)}
                delta={`${formatCompact(totals.promptTokens)} prompt · ${formatCompact(totals.completionTokens)} completion`}
              />
              <StatCard
                label="Chat con Pensiero Profondo"
                value={formatInt(totals.deepThoughtValidSessions)}
                delta={`${Math.round((totals.deepThoughtValidSessions / Math.max(1, totals.validSessions)) * 100)}% delle chat valide`}
              />
              <StatCard
                label="Risposte IA con PP"
                value={formatInt(totals.deepThoughtCompletions)}
              />
              <StatCard
                label="Non conteggiate"
                value={formatInt(nonChargeable)}
                delta={`risposte IA escluse dal piano${totals.nonChargeableImportedSize ? ` · ${formatInt(pages(totals.nonChargeableImportedSize))} pagine` : ''}`}
              />
            </StatCard.Grid>

            <Tabs.Root
              defaultValue="agents"
              variant="underline"
            >
              <Tabs.List
                aria-label="Dettaglio consumi"
                className={styles.tabsList}
              >
                <Tabs.Tab value="agents">Per agente</Tabs.Tab>
                <Tabs.Tab value="keys">Per modello</Tabs.Tab>
                <Tabs.Indicator />
              </Tabs.List>

              <Tabs.Panel
                value="agents"
                className={styles.tabPanel}
              >
                <Table<TenantAgentRow>
                  data={agents}
                  columns={agentColumns}
                  getRowId={r => r.id}
                  enablePagination
                  initialPageSize={25}
                  pageSizeOptions={[25, 50, 100]}
                  paginationVariant="simplified"
                  globalFilterPlaceholder="Cerca agente o proprietario"
                />
              </Tabs.Panel>

              <Tabs.Panel
                value="keys"
                className={styles.tabPanel}
              >
                <p className={s.footnote}>
                  Chiave Memori: consumi addebitati in crediti. Chiave del
                  tenant: fatturati dal provider sul vostro account.
                </p>
                <Table<TenantKeyRow>
                  data={keys}
                  columns={keyColumns}
                  getRowId={r => r.id}
                  globalFilterPlaceholder="Cerca modello o provider"
                />
              </Tabs.Panel>
            </Tabs.Root>
          </>
        )}
      </div>
    </div>
  )
}
