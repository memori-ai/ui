/**
 * Demo data for the agent "Statistiche" and tenant "Consumi" pages.
 *
 * Shapes mirror what the production frontend (cloud-memori-ai-fe-v2) gets
 * from the API, so the UI only shows figures that really exist:
 * - agent: chat logs with per-line `llmUsage` (tokens, provider/model,
 *   energy/CO₂/water), event logs (`MemoriOpened` per IP), per-user chat logs;
 * - tenant: monthly `ConsumptionLog`s per user/agent with prompt/completion
 *   tokens keyed by `provider|key|model`, plus the tenant plan limits.
 */

/* ------------------------------------------------------------------ */
/* Deterministic randomness                                             */
/* ------------------------------------------------------------------ */

function seeded(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const DAY_MS = 86_400_000

export function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export function addDays(d: Date, n: number) {
  return new Date(d.getTime() + n * DAY_MS)
}

export function daysBetween(from: Date, to: Date) {
  return (
    Math.round(
      (startOfDay(to).getTime() - startOfDay(from).getTime()) / DAY_MS,
    ) + 1
  )
}

/* ------------------------------------------------------------------ */
/* Formatting                                                           */
/* ------------------------------------------------------------------ */

const LOCALE = 'it-IT'

export function formatInt(n: number) {
  return Math.round(n).toLocaleString(LOCALE)
}

/** 1.284 · 12,9k · 4,2 Mln — compact from 10k up. */
export function formatCompact(n: number) {
  const abs = Math.abs(n)
  const fmt = (v: number, unit: string) =>
    `${v.toLocaleString(LOCALE, { maximumFractionDigits: v < 10 ? 1 : 0 })}${unit}`
  if (abs >= 1e9) return fmt(n / 1e9, ' Mld')
  if (abs >= 1e6) return fmt(n / 1e6, ' Mln')
  if (abs >= 1e4) return fmt(n / 1e3, 'k')
  return formatInt(n)
}

export function formatDayShort(d: Date) {
  return d.toLocaleDateString(LOCALE, { day: '2-digit', month: '2-digit' })
}

export function formatDayLong(d: Date) {
  return d.toLocaleDateString(LOCALE, {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  })
}

export function formatMonth(d: Date) {
  const s = d.toLocaleDateString(LOCALE, { month: 'long', year: 'numeric' })
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export type ImpactMetric = 'energy' | 'co2' | 'water'

/** kWh / kg / L, stepped down to the unit that keeps the figure readable. */
export function formatImpact(value: number, metric: ImpactMetric) {
  const steps: Record<ImpactMetric, [string, string, string]> = {
    energy: ['kWh', 'Wh', 'mWh'],
    co2: ['kg', 'g', 'mg'],
    water: ['L', 'mL', 'μL'],
  }
  const [big, mid, small] = steps[metric]
  const fmt = (v: number) =>
    v.toLocaleString(LOCALE, {
      maximumFractionDigits: Math.abs(v) >= 100 ? 0 : 1,
    })
  const abs = Math.abs(value)
  if (abs === 0) return '0'
  if (abs >= 1) return `${fmt(value)} ${big}`
  if (abs * 1000 >= 1) return `${fmt(value * 1000)} ${mid}`
  return `${fmt(value * 1e6)} ${small}`
}

/* ------------------------------------------------------------------ */
/* Agent                                                                */
/* ------------------------------------------------------------------ */

export type AgentDay = {
  date: Date
  /** Conversations with at least one LLM call. */
  conversations: number
  /** Assistant lines with `llmUsage`. */
  aiReplies: number
  inputTokens: number
  outputTokens: number
  /** kWh */
  energy: number
  /** kg CO₂eq (GWP) */
  co2: number
  /** L (WCF) */
  water: number
  /** Unique IPs that opened the agent (`MemoriOpened`). */
  sessions: number
  /** IPs that opened it more than once that day. */
  recurringUsers: number
}

export type ModelUsage = {
  provider: string
  model: string
  inputTokens: number
  outputTokens: number
  aiReplies: number
}

export type AgentUserUsage = {
  userID: string
  userName: string
  email: string
  tenantName: string
  validChats: number
  aiMessages: number
  totalMessages: number
}

const AGENT_MODELS = [
  {
    provider: 'OpenAI',
    model: 'gpt-4.1-mini',
    share: 0.58,
    inPerReply: 3100,
    outPerReply: 290,
  },
  {
    provider: 'Anthropic',
    model: 'claude-sonnet-4-5',
    share: 0.27,
    inPerReply: 4200,
    outPerReply: 410,
  },
  {
    provider: 'Mistral',
    model: 'mistral-small-latest',
    share: 0.1,
    inPerReply: 1900,
    outPerReply: 220,
  },
  {
    provider: 'OpenAI',
    model: 'gpt-4.1-nano',
    share: 0.05,
    inPerReply: 1200,
    outPerReply: 120,
  },
] as const

/** kWh per 1k tokens, kg CO₂ per kWh, L per kWh — orders of magnitude of the API estimates. */
const KWH_PER_KTOK = 0.00011
const KG_CO2_PER_KWH = 0.27
const L_WATER_PER_KWH = 1.9

export function agentDays(from: Date, to: Date, seed = 7): AgentDay[] {
  const n = daysBetween(from, to)
  const out: AgentDay[] = []
  for (let i = 0; i < n; i++) {
    const date = addDays(startOfDay(from), i)
    const rnd = seeded(seed * 1000 + Math.floor(date.getTime() / DAY_MS))
    const weekday = date.getDay()
    const weekend = weekday === 0 || weekday === 6
    // Slow growth across the period, quieter weekends, a little noise.
    const base = 22 + 10 * Math.sin(date.getTime() / (DAY_MS * 17))
    const conversations = Math.max(
      0,
      Math.round(base * (weekend ? 0.45 : 1) * (0.75 + rnd() * 0.5)),
    )
    const aiReplies = Math.round(conversations * (3.4 + rnd() * 2))
    let inputTokens = 0
    let outputTokens = 0
    for (const m of AGENT_MODELS) {
      const replies = aiReplies * m.share
      inputTokens += replies * m.inPerReply * (0.85 + rnd() * 0.3)
      outputTokens += replies * m.outPerReply * (0.85 + rnd() * 0.3)
    }
    const energy = ((inputTokens + outputTokens) / 1000) * KWH_PER_KTOK
    const sessions = Math.round(conversations * (1.25 + rnd() * 0.35))
    out.push({
      date,
      conversations,
      aiReplies,
      inputTokens: Math.round(inputTokens),
      outputTokens: Math.round(outputTokens),
      energy,
      co2: energy * KG_CO2_PER_KWH,
      water: energy * L_WATER_PER_KWH,
      sessions,
      recurringUsers: Math.round(sessions * (0.12 + rnd() * 0.12)),
    })
  }
  return out
}

export function agentModelBreakdown(days: AgentDay[]): ModelUsage[] {
  const replies = days.reduce((a, d) => a + d.aiReplies, 0)
  return AGENT_MODELS.map(m => ({
    provider: m.provider,
    model: m.model,
    aiReplies: Math.round(replies * m.share),
    inputTokens: Math.round(replies * m.share * m.inPerReply),
    outputTokens: Math.round(replies * m.share * m.outPerReply),
  })).sort(
    (a, b) => b.inputTokens + b.outputTokens - (a.inputTokens + a.outputTokens),
  )
}

const USER_NAMES = [
  ['giulia.ferri', 'giulia.ferri@acme.it'],
  ['marco.bianchi', 'marco.bianchi@acme.it'],
  ['support.bot', 'support@acme.it'],
  ['l.romano', 'luca.romano@acme.it'],
  ['sara.conti', 'sara.conti@acme.it'],
  ['demo.user', 'demo@memori.ai'],
  ['f.ricci', 'francesca.ricci@partner.example'],
  ['a.greco', 'andrea.greco@partner.example'],
  ['elena.marino', 'elena.marino@acme.it'],
  ['p.gallo', 'paolo.gallo@acme.it'],
  ['chiara.costa', 'chiara.costa@acme.it'],
  ['qa.tester', 'qa@acme.it'],
] as const

export function agentUsers(days: AgentDay[], seed = 11): AgentUserUsage[] {
  const rnd = seeded(seed + days.length)
  const chats = days.reduce((a, d) => a + d.conversations, 0)
  const weights = USER_NAMES.map(
    (_, i) => Math.pow(0.72, i) * (0.7 + rnd() * 0.6),
  )
  const total = weights.reduce((a, w) => a + w, 0)
  return USER_NAMES.map(([userName, email], i) => {
    // Logged-in users account for roughly a third of all conversations.
    const validChats = Math.round((chats * 0.35 * weights[i]!) / total)
    const aiMessages = Math.round(validChats * (3.2 + rnd() * 2))
    return {
      userID: `u-${i + 1}`,
      userName,
      email,
      tenantName: email.endsWith('partner.example')
        ? 'partner.example'
        : 'aisuru.com',
      validChats,
      aiMessages,
      totalMessages: aiMessages * 2 + Math.round(rnd() * validChats),
    }
  }).filter(u => u.validChats > 0)
}

/* ------------------------------------------------------------------ */
/* Tenant                                                               */
/* ------------------------------------------------------------------ */

/** Plan limits from the `Tenant` record (0 / undefined = unlimited). */
export const TENANT_LIMITS = {
  name: 'aisuru.com',
  maxFreeSessions: 2500,
  maxCompletions: 12000,
  /** Characters; one "page" is 3.000 characters in the product. */
  maxImportSize: 600 * 3000,
  maxTotalMemori: 25,
  maxUsers: 50,
  maxAdmins: 5,
}

export const TENANT_COUNTS = { agents: 18, users: 34, admins: 3 }

export const CHARS_PER_PAGE = 3000

export type ConsumptionCounts = {
  promptTokens: number
  completionTokens: number
  validSessions: number
  deepThoughtValidSessions: number
  completions: number
  deepThoughtCompletions: number
  /** Characters imported. */
  importedSize: number
  nonChargeableCompletions: number
  nonChargeableDeepThoughtCompletions: number
  nonChargeableImportedSize: number
}

export type TenantAgentRow = ConsumptionCounts & {
  id: string
  agent: string
  owner: string
}

export type TenantKeyRow = {
  id: string
  provider: string
  model: string
  /** `$` in the key: the platform's own credentials, billed as credits. */
  platformKey: boolean
  promptTokens: number
  completionTokens: number
  agents: number
}

const TENANT_AGENTS = [
  ['Supporto Clienti', 'giulia.ferri', 1.0],
  ['Sales Copilot', 'marco.bianchi', 0.82],
  ['Onboarding HR', 'sara.conti', 0.55],
  ['Assistente Legale', 'l.romano', 0.48],
  ['Guida Museo', 'elena.marino', 0.36],
  ['Layout Storybook', 'demo.user', 0.22],
  ['Helpdesk IT', 'p.gallo', 0.19],
  ['FAQ Prodotto', 'chiara.costa', 0.12],
  ['Legacy Bot', 'old.user', 0.03],
] as const

const TENANT_KEYS = [
  {
    provider: 'OpenAI',
    model: 'gpt-4.1-mini',
    platformKey: true,
    share: 0.46,
    outRatio: 0.09,
  },
  {
    provider: 'Anthropic',
    model: 'claude-sonnet-4-5',
    platformKey: true,
    share: 0.24,
    outRatio: 0.1,
  },
  {
    provider: 'Azure OpenAI',
    model: 'gpt-4o',
    platformKey: false,
    share: 0.17,
    outRatio: 0.08,
  },
  {
    provider: 'Mistral',
    model: 'mistral-small-latest',
    platformKey: true,
    share: 0.08,
    outRatio: 0.11,
  },
  {
    provider: 'OpenAI',
    model: 'text-embedding-3-small',
    platformKey: true,
    share: 0.05,
    outRatio: 0,
  },
] as const

/**
 * One month of tenant consumption. `monthOffset` 0 is the current month,
 * which is only `elapsed` of the way through.
 */
export function tenantMonth(monthOffset: number, today = new Date()) {
  const month = new Date(today.getFullYear(), today.getMonth() - monthOffset, 1)
  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0,
  ).getDate()
  const elapsed = monthOffset === 0 ? today.getDate() / daysInMonth : 1
  const rnd = seeded(month.getFullYear() * 12 + month.getMonth())
  const volume = (0.85 + rnd() * 0.3) * elapsed

  const agents: TenantAgentRow[] = TENANT_AGENTS.map(
    ([agent, owner, weight], i) => {
      const w = weight * volume * (0.85 + rnd() * 0.3)
      const validSessions = Math.round(520 * w)
      const deepThoughtValidSessions = Math.round(
        validSessions * (0.04 + rnd() * 0.08),
      )
      const completions = Math.round(validSessions * (3.6 + rnd() * 1.4))
      const deepThoughtCompletions = Math.round(
        deepThoughtValidSessions * (2.5 + rnd()),
      )
      const importedPages =
        i % 3 === 0 ? Math.round(40 * w + rnd() * 20) : Math.round(rnd() * 8)
      return {
        id: `agent-${i}`,
        agent,
        owner,
        promptTokens: Math.round(completions * (2900 + rnd() * 900)),
        completionTokens: Math.round(completions * (260 + rnd() * 90)),
        validSessions,
        deepThoughtValidSessions,
        completions,
        deepThoughtCompletions,
        importedSize: importedPages * CHARS_PER_PAGE,
        nonChargeableCompletions: Math.round(completions * rnd() * 0.04),
        nonChargeableDeepThoughtCompletions: Math.round(
          deepThoughtCompletions * rnd() * 0.05,
        ),
        nonChargeableImportedSize: i === 0 ? 12 * CHARS_PER_PAGE : 0,
      }
    },
  ).filter(r => r.validSessions + r.completions + r.importedSize > 0)

  const totals = sumCounts(agents)
  const keys: TenantKeyRow[] = TENANT_KEYS.map((k, i) => {
    const promptTokens = Math.round(
      totals.promptTokens * k.share * (0.9 + rnd() * 0.2),
    )
    return {
      id: `key-${i}`,
      provider: k.provider,
      model: k.model,
      platformKey: k.platformKey,
      promptTokens,
      completionTokens: Math.round(promptTokens * k.outRatio),
      agents: Math.max(1, Math.round(agents.length * (k.share + 0.25))),
    }
  }).sort(
    (a, b) =>
      b.promptTokens +
      b.completionTokens -
      (a.promptTokens + a.completionTokens),
  )

  return { month, isCurrent: monthOffset === 0, agents, keys, totals }
}

export function sumCounts(rows: ConsumptionCounts[]): ConsumptionCounts {
  const zero: ConsumptionCounts = {
    promptTokens: 0,
    completionTokens: 0,
    validSessions: 0,
    deepThoughtValidSessions: 0,
    completions: 0,
    deepThoughtCompletions: 0,
    importedSize: 0,
    nonChargeableCompletions: 0,
    nonChargeableDeepThoughtCompletions: 0,
    nonChargeableImportedSize: 0,
  }
  return rows.reduce<ConsumptionCounts>((acc, r) => {
    for (const k of Object.keys(zero) as (keyof ConsumptionCounts)[]) {
      acc[k] += r[k]
    }
    return acc
  }, zero)
}

/* ------------------------------------------------------------------ */
/* CSV                                                                  */
/* ------------------------------------------------------------------ */

export function downloadCsv(filename: string, rows: (string | number)[][]) {
  const escape = (v: string | number) => {
    const s = String(v)
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
  }
  const csv = rows.map(r => r.map(escape).join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
