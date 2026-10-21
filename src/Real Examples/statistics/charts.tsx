import React, { useLayoutEffect, useRef, useState } from 'react'
import cx from 'classnames'
import { Collapsible } from '../../components/Collapsible'
import styles from './statistics.module.css'

/**
 * Small, dependency-free charts for the statistics pages.
 *
 * - One y-axis per chart: two measures of different scale get two charts.
 * - Series colors come from `--stats-series-N` (validated for CVD, light and
 *   dark); text always uses text tokens.
 * - Hover and arrow keys drive the same readout; every value is also in the
 *   table view under the chart.
 */

export type ChartSeries = {
  key: string
  label: string
  /** Categorical slot (1-based) → `--stats-series-N`. */
  slot: 1 | 2
}

export type ChartDatum = {
  /** Axis label, e.g. "21/10". */
  label: string
  /** Readout title, e.g. "mar 21 ottobre". */
  title: string
  values: Record<string, number>
}

type Format = (value: number) => string

const AXIS_FONT_PX = 12
const PAD_TOP = 8
const PAD_RIGHT = 8
const X_AXIS_H = 24
const BAR_MAX = 24
const GAP = 2
const RADIUS = 4

function useWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    setWidth(el.clientWidth)
    const ro = new ResizeObserver(([entry]) => {
      if (entry) setWidth(Math.round(entry.contentRect.width))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return [ref, width] as const
}

/** 0 → max in `count` clean steps (1 / 2 / 2.5 / 5 × 10ⁿ). */
function niceTicks(max: number, count = 4) {
  if (max <= 0) return [0, 1]
  const raw = max / count
  const pow = Math.pow(10, Math.floor(Math.log10(raw)))
  const step =
    [1, 2, 2.5, 5, 10].map(m => m * pow).find(s => s >= raw) ?? 10 * pow
  const ticks: number[] = []
  for (let v = 0; v <= max + step * 0.001; v += step) ticks.push(v)
  if (ticks[ticks.length - 1]! < max)
    ticks.push(ticks[ticks.length - 1]! + step)
  return ticks
}

/** Column path: square at the baseline, rounded data-end on top. */
function columnPath(
  x: number,
  y: number,
  w: number,
  h: number,
  round: boolean,
) {
  if (h <= 0) return ''
  const r = round ? Math.min(RADIUS, w / 2, h) : 0
  return [
    `M${x},${y + h}`,
    `V${y + r}`,
    r ? `Q${x},${y} ${x + r},${y}` : '',
    `H${x + w - r}`,
    r ? `Q${x + w},${y} ${x + w},${y + r}` : '',
    `V${y + h}`,
    'Z',
  ].join('')
}

function seriesColor(slot: number) {
  return `var(--stats-series-${slot})`
}

/* ------------------------------------------------------------------ */
/* Legend + readout                                                     */
/* ------------------------------------------------------------------ */

export function ChartLegend({
  series,
  shape,
}: {
  series: ChartSeries[]
  shape: 'rect' | 'line'
}) {
  if (series.length < 2) return null
  return (
    <ul className={styles.legend}>
      {series.map(s => (
        <li
          key={s.key}
          className={styles.legendItem}
        >
          <span
            className={cx(
              styles.legendKey,
              shape === 'line' && styles.legendKeyLine,
            )}
            style={{ background: seriesColor(s.slot) }}
            aria-hidden
          />
          {s.label}
        </li>
      ))}
    </ul>
  )
}

function Readout({
  datum,
  series,
  format,
  showTotal,
  x,
  width,
}: {
  datum: ChartDatum
  series: ChartSeries[]
  format: Format
  showTotal: boolean
  x: number
  width: number
}) {
  const total = series.reduce((a, s) => a + (datum.values[s.key] ?? 0), 0)
  // Flip to the left of the pointer in the right half so it never overflows.
  const flip = x > width / 2
  return (
    <div
      className={styles.readout}
      style={{
        left: x,
        transform: `translateX(${flip ? 'calc(-100% - 12px)' : '12px'})`,
      }}
      role="status"
      aria-live="polite"
    >
      <div className={styles.readoutTitle}>{datum.title}</div>
      {series.map(s => (
        <div
          key={s.key}
          className={styles.readoutRow}
        >
          <span
            className={styles.readoutKey}
            style={{ background: seriesColor(s.slot) }}
            aria-hidden
          />
          <strong>{format(datum.values[s.key] ?? 0)}</strong>
          <span>{s.label}</span>
        </div>
      ))}
      {showTotal && series.length > 1 ? (
        <div className={cx(styles.readoutRow, styles.readoutTotal)}>
          <span
            className={styles.readoutKey}
            aria-hidden
          />
          <strong>{format(total)}</strong>
          <span>Totale</span>
        </div>
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Table view                                                           */
/* ------------------------------------------------------------------ */

export function ChartTable({
  data,
  series,
  format,
  firstColumn = 'Giorno',
}: {
  data: ChartDatum[]
  series: ChartSeries[]
  format: Format
  firstColumn?: string
}) {
  return (
    <Collapsible summary="Mostra i dati in tabella">
      <div className={styles.dataTableWrap}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th scope="col">{firstColumn}</th>
              {series.map(s => (
                <th
                  key={s.key}
                  scope="col"
                >
                  {s.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(d => (
              <tr key={d.title}>
                <th scope="row">{d.title}</th>
                {series.map(s => (
                  <td key={s.key}>{format(d.values[s.key] ?? 0)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Collapsible>
  )
}

/* ------------------------------------------------------------------ */
/* Time chart (columns or lines)                                        */
/* ------------------------------------------------------------------ */

export type TimeChartProps = {
  data: ChartDatum[]
  series: ChartSeries[]
  /** `columns` stack the series; `lines` overlay them. */
  kind: 'columns' | 'lines'
  /** Axis + readout formatting. */
  format: Format
  /** Compact axis tick formatting (defaults to `format`). */
  formatTick?: Format
  /** Accessible name, e.g. "Token al giorno". */
  label: string
  height?: number
}

export function TimeChart({
  data,
  series,
  kind,
  format,
  formatTick = format,
  label,
  height = 220,
}: TimeChartProps) {
  const [ref, width] = useWidth<HTMLDivElement>()
  const [active, setActive] = useState<number | null>(null)

  const n = data.length
  const totals = data.map(d =>
    kind === 'columns'
      ? series.reduce((a, s) => a + (d.values[s.key] ?? 0), 0)
      : Math.max(...series.map(s => d.values[s.key] ?? 0)),
  )
  const ticks = niceTicks(Math.max(0, ...totals))
  const yMax = ticks[ticks.length - 1]!
  const tickLabels = ticks.map(formatTick)
  const axisW =
    Math.max(...tickLabels.map(t => t.length)) * (AXIS_FONT_PX * 0.62) + 10
  const plotW = Math.max(0, width - axisW - PAD_RIGHT)
  const plotH = height - PAD_TOP - X_AXIS_H
  const band = n ? plotW / n : 0
  const y = (v: number) => PAD_TOP + plotH - (v / yMax) * plotH
  const cx0 = (i: number) => axisW + band * (i + 0.5)

  // Thin x labels so they never collide (~64px per label).
  const every = Math.max(1, Math.ceil(n / Math.max(1, Math.floor(plotW / 64))))

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!n) return
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault()
      const dir = e.key === 'ArrowRight' ? 1 : -1
      setActive(a => Math.min(n - 1, Math.max(0, (a ?? n - 1) + dir)))
    } else if (e.key === 'Home') setActive(0)
    else if (e.key === 'End') setActive(n - 1)
    else if (e.key === 'Escape') setActive(null)
  }

  const barW = Math.max(1, Math.min(BAR_MAX, band * 0.62, band - GAP))

  return (
    <div
      ref={ref}
      className={styles.chart}
      style={{ height }}
      tabIndex={0}
      role="group"
      aria-label={`${label}. Usa le frecce per leggere i valori giorno per giorno.`}
      onKeyDown={onKeyDown}
      onFocus={() => setActive(a => a ?? n - 1)}
      onBlur={() => setActive(null)}
      onPointerLeave={() => setActive(null)}
    >
      {width > 0 ? (
        <svg
          width={width}
          height={height}
          aria-hidden
          className={styles.chartSvg}
        >
          {ticks.map((t, i) => (
            <g key={t}>
              <line
                x1={axisW}
                x2={width - PAD_RIGHT}
                y1={y(t)}
                y2={y(t)}
                className={i === 0 ? styles.baseline : styles.gridline}
              />
              <text
                x={axisW - 8}
                y={y(t)}
                className={styles.tickY}
              >
                {tickLabels[i]}
              </text>
            </g>
          ))}

          {active != null ? (
            <rect
              x={axisW + band * active}
              y={PAD_TOP}
              width={band}
              height={plotH}
              className={styles.activeBand}
            />
          ) : null}

          {kind === 'columns'
            ? data.map((d, i) => {
                let acc = 0
                const visible = series.filter(s => (d.values[s.key] ?? 0) > 0)
                return (
                  <g key={d.title}>
                    {visible.map((s, j) => {
                      const v = d.values[s.key] ?? 0
                      const top = y(acc + v)
                      const bottom = y(acc)
                      acc += v
                      // 2px surface gap between stacked segments.
                      const h = bottom - top - (j > 0 ? GAP : 0)
                      return (
                        <path
                          key={s.key}
                          d={columnPath(
                            cx0(i) - barW / 2,
                            top,
                            barW,
                            Math.max(0, h),
                            j === visible.length - 1,
                          )}
                          fill={seriesColor(s.slot)}
                        />
                      )
                    })}
                  </g>
                )
              })
            : series.map(s => {
                const pts = data.map(
                  (d, i) => `${cx0(i)},${y(d.values[s.key] ?? 0)}`,
                )
                const last = data[n - 1]
                return (
                  <g key={s.key}>
                    <polyline
                      points={pts.join(' ')}
                      className={styles.line}
                      stroke={seriesColor(s.slot)}
                    />
                    {last && active == null ? (
                      <circle
                        cx={cx0(n - 1)}
                        cy={y(last.values[s.key] ?? 0)}
                        r={4}
                        className={styles.dot}
                        fill={seriesColor(s.slot)}
                      />
                    ) : null}
                  </g>
                )
              })}

          {kind === 'lines' && active != null
            ? series.map(s => (
                <circle
                  key={s.key}
                  cx={cx0(active)}
                  cy={y(data[active]!.values[s.key] ?? 0)}
                  r={4}
                  className={styles.dot}
                  fill={seriesColor(s.slot)}
                />
              ))
            : null}

          {data.map((d, i) =>
            i % every === 0 ? (
              <text
                key={d.title}
                x={cx0(i)}
                y={height - 6}
                className={styles.tickX}
              >
                {d.label}
              </text>
            ) : null,
          )}

          {/* Hit targets: the whole band, not just the painted mark. */}
          {data.map((d, i) => (
            <rect
              key={d.title}
              x={axisW + band * i}
              y={PAD_TOP}
              width={band}
              height={plotH}
              fill="transparent"
              onPointerEnter={() => setActive(i)}
            />
          ))}
        </svg>
      ) : null}

      {active != null && data[active] ? (
        <Readout
          datum={data[active]}
          series={series}
          format={format}
          showTotal={kind === 'columns'}
          x={cx0(active)}
          width={width}
        />
      ) : null}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Horizontal bar list (ranking)                                        */
/* ------------------------------------------------------------------ */

export type BarListItem = {
  id: string
  label: string
  sublabel?: string
  values: Record<string, number>
}

export function BarList({
  items,
  series,
  format,
  label,
}: {
  items: BarListItem[]
  series: ChartSeries[]
  format: Format
  label: string
}) {
  const totals = items.map(it =>
    series.reduce((a, s) => a + (it.values[s.key] ?? 0), 0),
  )
  const max = Math.max(1, ...totals)
  return (
    <ul
      className={styles.barList}
      aria-label={label}
    >
      {items.map((it, i) => {
        const visible = series.filter(s => (it.values[s.key] ?? 0) > 0)
        const breakdown = series
          .map(s => `${s.label} ${format(it.values[s.key] ?? 0)}`)
          .join(', ')
        return (
          <li
            key={it.id}
            className={styles.barRow}
            title={breakdown}
          >
            <div className={styles.barLabel}>
              <span className={styles.barName}>{it.label}</span>
              {it.sublabel ? (
                <span className={styles.barSub}>{it.sublabel}</span>
              ) : null}
            </div>
            <div
              className={styles.barTrack}
              aria-hidden
            >
              <div
                className={styles.barFill}
                style={{ width: `${(totals[i]! / max) * 100}%` }}
              >
                {visible.map(s => (
                  <span
                    key={s.key}
                    className={styles.barSegment}
                    style={{
                      flexGrow: it.values[s.key] ?? 0,
                      background: seriesColor(s.slot),
                    }}
                  />
                ))}
              </div>
            </div>
            <div className={styles.barValue}>
              {format(totals[i]!)}
              <span className={styles.visuallyHidden}>: {breakdown}</span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
