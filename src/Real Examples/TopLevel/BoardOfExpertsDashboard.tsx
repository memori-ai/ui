import React, { useMemo, useState } from 'react'
import { Plus, Search, UsersRound } from 'lucide-react'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

type BoardCard = {
  id: string
  name: string
  experts: number
  description: string
}

const BOARDS: BoardCard[] = [
  {
    id: '1',
    name: 'Consiglio Vendite',
    experts: 4,
    description: 'Board commerciale con esperti prodotto e pricing.',
  },
  {
    id: '2',
    name: 'Tavolo Tecnico',
    experts: 3,
    description: 'Esperti API, infrastruttura e troubleshooting.',
  },
]

/**
 * Board of Experts: elenco board (top-level menu).
 */
export function BoardOfExpertsDashboard() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return BOARDS
    const q = search.toLowerCase()
    return BOARDS.filter(
      b =>
        b.name.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q),
    )
  }, [search])

  return (
    <div className={styles.page}>
      <Section
        title="Board of Experts"
        description="Crea e gestisci board multi-esperto."
        icon={
          <UsersRound
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        actions={
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
            Nuova board
          </Button>
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
            placeholder="Cerca board…"
            aria-label="Cerca board"
          />
        </div>
      </div>

      <div className={styles.cardGrid}>
        {filtered.map(board => (
          <Card
            key={board.id}
            variant="outlined"
            title={
              <span className={styles.cellWithIcon}>
                {board.name}
                <Tag color="primary">{board.experts} esperti</Tag>
              </span>
            }
            description={board.description}
            hoverable
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
            >
              Apri
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
