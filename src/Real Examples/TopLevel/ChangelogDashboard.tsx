import React from 'react'
import { Megaphone } from 'lucide-react'
import { Card } from '../../components/Card'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import styles from '../realExamples.module.css'

const ENTRIES = [
  {
    id: '1',
    title: 'Nuovi filtri sulle conversazioni',
    date: '18 marzo 2026',
    tag: 'Feature',
    summary: 'Ricerca per sessionID e filtro minimo messaggi migliorati.',
  },
  {
    id: '2',
    title: 'Fix export SCORM',
    date: '10 marzo 2026',
    tag: 'Fix',
    summary: 'Corretto il download del pacchetto su tenant multi-agente.',
  },
  {
    id: '3',
    title: 'MCP connettori aziendali',
    date: '2 marzo 2026',
    tag: 'Feature',
    summary: 'Aggiunta la galleria di schema MCP tenant-managed.',
  },
]

/**
 * Changelog: elenco novità prodotto.
 */
export function ChangelogDashboard() {
  return (
    <div className={styles.page}>
      <Section
        title="Changelog"
        description="Novità, fix e aggiornamenti della piattaforma."
        icon={
          <Megaphone
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <div className={styles.entryList}>
        {ENTRIES.map(entry => (
          <Card
            key={entry.id}
            variant="outlined"
            title={
              <span className={styles.cellWithIcon}>
                {entry.title}
                <Tag color={entry.tag === 'Fix' ? 'warning' : 'primary'}>
                  {entry.tag}
                </Tag>
              </span>
            }
          >
            <p className={styles.entryMeta}>
              <time>{entry.date}</time>
            </p>
            <p className={styles.tabPlaceholder}>{entry.summary}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
