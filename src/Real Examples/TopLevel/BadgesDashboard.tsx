import React from 'react'
import { Award, CheckCircle2, Lock } from 'lucide-react'
import { Card } from '../../components/Card'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import styles from '../realExamples.module.css'

const UNLOCKED = [
  {
    id: '1',
    name: 'Primo agente',
    description: 'Hai creato il tuo primo agente.',
  },
  {
    id: '2',
    name: '100 conversazioni',
    description: 'Hai raggiunto 100 chat con gli utenti.',
  },
]

const LOCKED = [
  {
    id: '3',
    name: 'Integratore',
    description: 'Collega almeno 3 integrazioni.',
  },
  {
    id: '4',
    name: 'Power user',
    description: 'Usa funzioni avanzate e MCP.',
  },
]

/**
 * Badges: sbloccati e bloccati.
 */
export function BadgesDashboard() {
  return (
    <div className={styles.page}>
      <Section
        title="Badge"
        description="Traguardi e riconoscimenti del tuo percorso su AIsuru."
        icon={
          <Award
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <h2 className={styles.sectionTitle}>Sbloccati ({UNLOCKED.length})</h2>
      <div className={styles.cardGrid}>
        {UNLOCKED.map(badge => (
          <Card
            key={badge.id}
            variant="outlined"
            title={
              <span className={styles.cellWithIcon}>
                <CheckCircle2
                  size={18}
                  aria-hidden
                />
                {badge.name}
                <Tag color="success">Ottenuto</Tag>
              </span>
            }
            description={badge.description}
          />
        ))}
      </div>

      <h2 className={`${styles.sectionTitle} ${styles.sectionTitleSpaced}`}>
        Bloccati ({LOCKED.length})
      </h2>
      <div className={styles.cardGrid}>
        {LOCKED.map(badge => (
          <Card
            key={badge.id}
            variant="flat"
            className={styles.lockedCard}
            title={
              <span className={styles.cellWithIcon}>
                <Lock
                  size={18}
                  aria-hidden
                />
                {badge.name}
                <Tag color="default">Bloccato</Tag>
              </span>
            }
            description={badge.description}
          />
        ))}
      </div>
    </div>
  )
}
