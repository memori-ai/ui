import React, { useState } from 'react'
import cx from 'classnames'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../../components/Button'
import { Collapsible } from '../../components/Collapsible'
import { Drawer } from '../../components/Drawer'
import { Switch } from '../../components/Switch'
import { Tag } from '../../components/Tag'
import { StatCard } from '../../components/StatCard'
import styles from '../realExamples.module.css'

type ChatLogSummary = {
  id: string
  titolo: string
  mail: string
  dataInizio: string
  ruolo?: string
}

type Line = {
  from: 'user' | 'agent'
  text: string
  time: string
  context?: string[]
  tokens?: number
}

const LINES: Line[] = [
  { from: 'agent', text: 'Ciao! Come posso aiutarti oggi?', time: '16:41' },
  {
    from: 'user',
    text: 'ciao, questo è un test',
    time: '16:41',
    context: ['ROUTE: HOME'],
  },
  {
    from: 'agent',
    text: 'Perfetto, ti ricevo forte e chiaro. Vuoi provare una domanda sui nostri prodotti?',
    time: '16:41',
    context: ['ROUTE: HOME', 'TOPIC: TEST'],
    tokens: 312,
  },
]

type ChatLogDrawerProps = {
  conversation: ChatLogSummary | null
  conversations: ChatLogSummary[]
  onNavigate: (c: ChatLogSummary) => void
  onClose: () => void
}

/** ChatLogPanel: conversation transcript, session info, consumption. */
export function ChatLogDrawer<T extends ChatLogSummary>({
  conversation,
  conversations,
  onNavigate,
  onClose,
}: Omit<ChatLogDrawerProps, 'conversations' | 'onNavigate'> & {
  conversations: T[]
  onNavigate: (c: T) => void
}) {
  const [showInfo, setShowInfo] = useState(false)
  const [showConsumption, setShowConsumption] = useState(false)
  const [showContext, setShowContext] = useState(false)
  const index = conversation
    ? conversations.findIndex(c => c.id === conversation.id)
    : -1
  const prev = index > 0 ? conversations[index - 1] : undefined
  const next =
    index >= 0 && index < conversations.length - 1
      ? conversations[index + 1]
      : undefined

  return (
    <Drawer
      open={!!conversation}
      onOpenChange={o => !o && onClose()}
      anchor="right"
      width="min(48rem, 96vw)"
      title="Dettagli conversazione"
      description={conversation?.titolo}
      footer={
        <div className={styles.drawerFooter}>
          <Button
            type="button"
            variant="outline"
            disabled={!prev}
            icon={
              <ChevronLeft
                size={16}
                aria-hidden
              />
            }
            onClick={() => prev && onNavigate(prev)}
          >
            Precedente
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={!next}
            icon={
              <ChevronRight
                size={16}
                aria-hidden
              />
            }
            iconPosition="right"
            onClick={() => next && onNavigate(next)}
          >
            Successivo
          </Button>
        </div>
      }
    >
      {conversation ? (
        <div className={styles.formStack}>
          <dl className={styles.detailList}>
            <dt>Data inizio</dt>
            <dd>{conversation.dataInizio}</dd>
            <dt>Utente</dt>
            <dd>{conversation.mail}</dd>
            <dt>Ruolo</dt>
            <dd>{conversation.ruolo ?? '—'}</dd>
            <dt>Lingua</dt>
            <dd>Italiano</dd>
          </dl>

          <div className={styles.toolbarRow}>
            <Switch
              size="sm"
              checked={showInfo}
              onCheckedChange={setShowInfo}
              label="Mostra info"
            />
            <Switch
              size="sm"
              checked={showConsumption}
              onCheckedChange={setShowConsumption}
              label="Mostra consumi"
            />
            <Switch
              size="sm"
              checked={showContext}
              onCheckedChange={setShowContext}
              label="Mostra contesto per messaggio"
            />
          </div>

          {showInfo ? (
            <Collapsible
              summary="Informazioni sessione"
              defaultOpen
            >
              <dl className={styles.detailList}>
                <dt>ID sessione</dt>
                <dd className={styles.monoCell}>
                  5d2c9a1e-4f3b-4c51-9e2a-{conversation.id}
                </dd>
                <dt>Referral</dt>
                <dd>https://www.example.com/contatti</dd>
                <dt>Indirizzo IP</dt>
                <dd>93.44.12.xxx</dd>
                <dt>User Agent</dt>
                <dd>
                  Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) Safari/605.1
                </dd>
              </dl>
            </Collapsible>
          ) : null}

          {showConsumption ? (
            <StatCard.Grid>
              <StatCard
                variant="plain"
                label="Token totali"
                value="312"
              />
              <StatCard
                variant="plain"
                label="Risposte IA"
                value="1"
              />
            </StatCard.Grid>
          ) : null}

          <ol className={styles.chatLog}>
            {LINES.map((line, i) => (
              <li
                key={i}
                className={cx(
                  styles.chatLine,
                  line.from === 'user' && styles.chatLineUser,
                )}
              >
                <span className={styles.chatBubble}>{line.text}</span>
                <span className={styles.chatMeta}>
                  {line.from === 'user' ? 'Utente' : 'Agente'} · {line.time}
                  {showConsumption && line.tokens
                    ? ` · ${line.tokens} token`
                    : null}
                </span>
                {showContext && line.context ? (
                  <span className={styles.pillGroup}>
                    {line.context.map(c => (
                      <Tag
                        key={c}
                        size="sm"
                      >
                        {c}
                      </Tag>
                    ))}
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </Drawer>
  )
}
