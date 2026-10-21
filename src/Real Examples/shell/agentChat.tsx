import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import cx from 'classnames'
import { RotateCcw, Send } from 'lucide-react'
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea'
import styles from '../realExamples.module.css'

/**
 * Shared Prova / Istruiscimi chat mockup: state hook + log + composer, so the
 * drawer, the docked panel and the floating window behave the same.
 */

export type AgentChatMode = 'prova' | 'istruiscimi'

export type ChatLine = {
  id: string
  from: 'user' | 'agent'
  text: string
  time: string
}

function nowTime() {
  return new Date().toLocaleTimeString('it-IT', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

function seedLines(mode: AgentChatMode, agentName: string): ChatLine[] {
  return [
    {
      id: `seed-${mode}`,
      from: 'agent',
      text:
        mode === 'istruiscimi'
          ? `Ciao, sono ${agentName}. In modalità Istruiscimi puoi correggermi o insegnarmi nuove risposte: scrivi cosa vorresti che dicessi in situazioni simili.`
          : `Ciao! Sono ${agentName}. Questa è una sessione di prova: puoi farmi domande come farebbe un utente finale.`,
      time: nowTime(),
    },
  ]
}

function mockReply(mode: AgentChatMode, userText: string): string {
  const trimmed = userText.trim()
  if (mode === 'istruiscimi') {
    return `Ho registrato l’istruzione: «${trimmed}». Nella prossima conversazione di prova userò questa guida (mockup).`
  }
  if (/ciao|salve|buongiorno|buonasera/i.test(trimmed)) {
    return 'Ciao! Come posso aiutarti oggi?'
  }
  if (/prezz|cost|quanto/i.test(trimmed)) {
    return 'Dipende dal piano scelto. Vuoi che ti riassuma le opzioni principali?'
  }
  return `Ho ricevuto: «${trimmed}». Nella versione reale qui risponderebbe il modello configurato nelle impostazioni IA.`
}

export function useAgentChat(mode: AgentChatMode, agentName: string) {
  const [draft, setDraft] = useState('')
  const [lines, setLines] = useState<ChatLine[]>(() =>
    seedLines(mode, agentName),
  )
  const [pending, setPending] = useState(false)

  const reset = useCallback(() => {
    setDraft('')
    setPending(false)
    setLines(seedLines(mode, agentName))
  }, [mode, agentName])

  // A new mode or agent starts a new session.
  useEffect(reset, [reset])

  const send = () => {
    const text = draft.trim()
    if (!text || pending) return
    setLines(prev => [
      ...prev,
      { id: `u-${Date.now()}`, from: 'user', text, time: nowTime() },
    ])
    setDraft('')
    setPending(true)
    window.setTimeout(() => {
      setLines(prev => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          from: 'agent',
          text: mockReply(mode, text),
          time: nowTime(),
        },
      ])
      setPending(false)
    }, 650)
  }

  return { mode, lines, pending, draft, setDraft, send, reset }
}

export type AgentChatState = ReturnType<typeof useAgentChat>

export function AgentChatLog({
  chat,
  agentName,
  className,
}: {
  chat: AgentChatState
  agentName: string
  className?: string
}) {
  const listRef = useRef<HTMLOListElement>(null)
  const isTeach = chat.mode === 'istruiscimi'

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [chat.lines, chat.pending])

  return (
    <ol
      ref={listRef}
      className={cx(styles.chatLog, className)}
      aria-live="polite"
      aria-relevant="additions"
    >
      {chat.lines.map(line => (
        <li
          key={line.id}
          className={cx(
            styles.chatLine,
            line.from === 'user' && styles.chatLineUser,
          )}
        >
          <span className={styles.chatBubble}>{line.text}</span>
          <span className={styles.chatMeta}>
            {line.from === 'user'
              ? isTeach
                ? 'Tu (istruzione)'
                : 'Tu'
              : agentName}{' '}
            · {line.time}
          </span>
        </li>
      ))}
      {chat.pending ? (
        <li className={styles.chatLine}>
          <span className={cx(styles.chatBubble, styles.agentChatTyping)}>
            {agentName} sta scrivendo…
          </span>
        </li>
      ) : null}
    </ol>
  )
}

export function AgentChatComposer({
  chat,
  showReset = true,
}: {
  chat: AgentChatState
  /** Hide when the container already offers “Ricomincia”. */
  showReset?: boolean
}) {
  const formId = useId()
  const isTeach = chat.mode === 'istruiscimi'
  return (
    <form
      id={formId}
      className={styles.agentChatComposer}
      onSubmit={e => {
        e.preventDefault()
        chat.send()
      }}
    >
      <Textarea
        aria-label={isTeach ? 'Istruzione o correzione' : 'Messaggio'}
        placeholder={
          isTeach
            ? 'Es. Se chiedono il prezzo, rispondi con…'
            : 'Scrivi un messaggio…'
        }
        value={chat.draft}
        rows={2}
        onChange={e => chat.setDraft(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            chat.send()
          }
        }}
      />
      <div className={styles.agentChatComposerActions}>
        {showReset ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            icon={
              <RotateCcw
                size={16}
                aria-hidden
              />
            }
            onClick={chat.reset}
          >
            Ricomincia
          </Button>
        ) : (
          <span className={styles.agentChatHint}>
            Invio per inviare, Maiusc+Invio per andare a capo
          </span>
        )}
        <Button
          type="submit"
          variant="primary"
          size="sm"
          disabled={!chat.draft.trim() || chat.pending}
          icon={
            <Send
              size={16}
              aria-hidden
            />
          }
        >
          Invia
        </Button>
      </div>
    </form>
  )
}
