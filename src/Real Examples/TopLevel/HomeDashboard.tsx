import React, { useMemo, useState } from 'react'
import { Bot, Plus, Search } from 'lucide-react'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

type AgentCard = {
  id: string
  name: string
  description: string
  visibility: 'public' | 'private' | 'link'
}

const AGENTS: AgentCard[] = [
  {
    id: '1',
    name: 'Layout Storybook',
    description: 'Agente di test per storybook e layout UI.',
    visibility: 'public',
  },
  {
    id: '2',
    name: 'Supporto Clienti',
    description: 'FAQ, ticket e assistenza di primo livello.',
    visibility: 'private',
  },
  {
    id: '3',
    name: 'Onboarding HR',
    description: 'Guida i nuovi assunti su policy e process.',
    visibility: 'link',
  },
  {
    id: '4',
    name: 'Sales Copilot',
    description: 'Supporto commerciale su prodotti e listini.',
    visibility: 'public',
  },
]

const visibilityLabel = {
  public: 'Pubblico',
  private: 'Privato',
  link: 'Solo link',
} as const

/**
 * Home: elenco agenti con ricerca e card.
 */
export function HomeDashboard() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search.trim()) return AGENTS
    const q = search.toLowerCase()
    return AGENTS.filter(
      a =>
        a.name.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q),
    )
  }, [search])

  return (
    <div className={styles.page}>
      <Section
        title="I tuoi Agenti"
        description="Cerca, apri e crea agenti conversazionali."
        icon={
          <Bot
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
            Nuovo agente
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
            placeholder="Cerca agente…"
            aria-label="Cerca agente"
          />
        </div>
      </div>

      <div className={styles.cardGrid}>
        {filtered.map(agent => (
          <Card
            key={agent.id}
            variant="outlined"
            title={
              <span className={styles.cellWithIcon}>
                {agent.name}
                <Tag
                  color={agent.visibility === 'public' ? 'success' : 'default'}
                >
                  {visibilityLabel[agent.visibility]}
                </Tag>
              </span>
            }
            description={agent.description}
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
