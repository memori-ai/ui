import React, { useMemo, useState } from 'react'
import { Plug, Search } from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { Section } from '../components/Section'
import { Tag } from '../components/Tag'
import '../components/Input/styles.css'
import styles from './realExamples.module.css'

type McpSchema = {
  id: string
  name: string
  description: string
  category: 'productivity' | 'data' | 'devops'
  connected: boolean
}

const SCHEMAS: McpSchema[] = [
  {
    id: 'notion',
    name: 'Notion',
    description: 'Cerca pagine e database Notion collegati all’agente.',
    category: 'productivity',
    connected: true,
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Invia messaggi e leggi canali Slack autorizzati.',
    category: 'productivity',
    connected: false,
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    description: 'Esegui query in sola lettura sul database aziendale.',
    category: 'data',
    connected: false,
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Apri issue, PR e consulta repository collegati.',
    category: 'devops',
    connected: true,
  },
  {
    id: 'drive',
    name: 'Google Drive',
    description: 'Cerca e riassume file Drive con permessi OAuth.',
    category: 'data',
    connected: false,
  },
  {
    id: 'jira',
    name: 'Jira',
    description: 'Crea e aggiorna ticket Jira dal dialogo.',
    category: 'devops',
    connected: false,
  },
]

const FILTERS = [
  { id: 'all', label: 'Tutti' },
  { id: 'productivity', label: 'Productivity' },
  { id: 'data', label: 'Data' },
  { id: 'devops', label: 'DevOps' },
  { id: 'connected', label: 'Connessi' },
] as const

/**
 * MCP: filtri, ricerca e card connettori.
 */
export function McpDashboard() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['id']>('all')

  const filtered = useMemo(() => {
    let rows = [...SCHEMAS]
    if (filter === 'connected') {
      rows = rows.filter(r => r.connected)
    } else if (filter !== 'all') {
      rows = rows.filter(r => r.category === filter)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      rows = rows.filter(
        r =>
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q),
      )
    }
    return rows
  }, [filter, search])

  return (
    <div className={styles.page}>
      <Section
        title="MCP"
        description="Collega server MCP e connettori aziendali all’agente."
        icon={
          <Plug
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <div className={styles.toolbarRow}>
        <div className={styles.searchField}>
          <span className={styles.searchIconWrap}>
            <Search aria-hidden />
          </span>
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Cerca connettore…"
            aria-label="Cerca connettore MCP"
          />
        </div>
      </div>

      <div
        className={styles.chipRow}
        role="group"
        aria-label="Filtri MCP"
      >
        {FILTERS.map(f => (
          <Button
            key={f.id}
            type="button"
            size="sm"
            variant={filter === f.id ? 'primary' : 'outline'}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      <div className={styles.cardGrid}>
        {filtered.map(schema => (
          <Card
            key={schema.id}
            variant="outlined"
            title={
              <span className={styles.cellWithIcon}>
                {schema.name}
                {schema.connected ? (
                  <Tag color="success">Connesso</Tag>
                ) : (
                  <Tag color="default">Disponibile</Tag>
                )}
              </span>
            }
            description={schema.description}
            hoverable
          >
            <Button
              type="button"
              variant={schema.connected ? 'outline' : 'primary'}
              size="sm"
            >
              {schema.connected ? 'Gestisci' : 'Connetti'}
            </Button>
          </Card>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className={styles.tabPlaceholder}>
          Nessun connettore corrisponde ai filtri selezionati.
        </p>
      ) : null}
    </div>
  )
}
