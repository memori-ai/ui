import React, { useState } from 'react'
import { Bot, Coins, FileUp, MessageSquare, Sparkles, Zap } from 'lucide-react'
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal'
import { SelectBox } from '../../components/SelectBox'
import { StatCard } from '../../components/StatCard'
import styles from '../realExamples.module.css'

/** Demo balance + period usage — mirrors the production Consumi dashboard. */
export const USER_CREDITS = 1240

export const USER_CONSUMPTION = {
  agents: 3,
  chats: 128,
  deepThoughtChats: 24,
  aiReplies: 856,
  deepThoughtReplies: 72,
  importedPages: 410,
} as const

const periodOptions = [
  { value: 'month', label: 'Mese corrente' },
  { value: '30', label: 'Ultimi 30 giorni' },
  { value: '60', label: 'Ultimi 60 giorni' },
  { value: 'custom', label: 'Personalizzato' },
]

function formatCredits(n: number) {
  return n.toLocaleString('it-IT')
}

/** Compact stats for the user menu dropdown panel. */
export function UserConsumptionsMenuPanel({
  onOpenDetails,
}: {
  onOpenDetails: () => void
}) {
  const c = USER_CONSUMPTION
  return (
    <div className={styles.appUserMenuConsumptions}>
      <div className={styles.appUserMenuConsumptionsHead}>
        <span className={styles.appUserMenuConsumptionsTitle}>Consumi</span>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onOpenDetails}
        >
          Dettagli
        </Button>
      </div>
      <StatCard.Grid className={styles.appUserMenuStatGrid}>
        <StatCard
          variant="plain"
          label="Agenti"
          value={c.agents}
          icon={
            <Bot
              size={14}
              aria-hidden
            />
          }
        />
        <StatCard
          variant="plain"
          label="Chat valide"
          value={c.chats}
          icon={
            <MessageSquare
              size={14}
              aria-hidden
            />
          }
        />
        <StatCard
          variant="plain"
          label="Risposte IA"
          value={formatCredits(c.aiReplies)}
          icon={
            <Sparkles
              size={14}
              aria-hidden
            />
          }
        />
        <StatCard
          variant="plain"
          label="Doc. importati"
          value={formatCredits(c.importedPages)}
          icon={
            <FileUp
              size={14}
              aria-hidden
            />
          }
        />
      </StatCard.Grid>
    </div>
  )
}

/** Full consumptions modal — period + all production metrics in StatCards. */
export function UserConsumptionsModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [period, setPeriod] = useState<string | null>('month')
  const c = USER_CONSUMPTION

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="I tuoi consumi"
      description="Monitora crediti e utilizzo nel periodo selezionato."
      size="lg"
      footer={
        <div className={styles.drawerFooter}>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Chiudi
          </Button>
          <Button
            type="button"
            variant="primary"
            icon={
              <Zap
                size={16}
                aria-hidden
              />
            }
            onClick={() =>
              window.open('https://billing.memori.ai/', '_blank', 'noopener')
            }
          >
            Acquista crediti
          </Button>
        </div>
      }
    >
      <div className={styles.userConsumptionsBody}>
        <div className={styles.toolbarRow}>
          <SelectBox
            className={styles.periodSelect}
            label="Periodo"
            options={periodOptions}
            value={period}
            onChange={setPeriod}
          />
          <div className={styles.userCreditsPill}>
            <Coins
              size={16}
              aria-hidden
            />
            <span>
              <strong>{formatCredits(USER_CREDITS)}</strong> crediti
            </span>
          </div>
        </div>

        <StatCard.Grid>
          <StatCard
            label="Agenti conversazionali"
            value={c.agents}
            icon={
              <Bot
                size={16}
                aria-hidden
              />
            }
          />
          <StatCard
            label="Chat valide"
            value={c.chats}
            icon={
              <MessageSquare
                size={16}
                aria-hidden
              />
            }
          />
          <StatCard
            label="Chat con Pensiero Profondo"
            value={c.deepThoughtChats}
            icon={
              <Sparkles
                size={16}
                aria-hidden
              />
            }
          />
          <StatCard
            label="Risposte generate dall'IA"
            value={formatCredits(c.aiReplies)}
            icon={
              <Sparkles
                size={16}
                aria-hidden
              />
            }
          />
          <StatCard
            label="Risposte IA con Pensiero Profondo"
            value={c.deepThoughtReplies}
            icon={
              <Zap
                size={16}
                aria-hidden
              />
            }
          />
          <StatCard
            label="Documenti importati"
            value={formatCredits(c.importedPages)}
            delta="pagine"
            trend="neutral"
            icon={
              <FileUp
                size={16}
                aria-hidden
              />
            }
          />
        </StatCard.Grid>
      </div>
    </Modal>
  )
}

export function formatUserCredits(n: number = USER_CREDITS) {
  return formatCredits(n)
}
