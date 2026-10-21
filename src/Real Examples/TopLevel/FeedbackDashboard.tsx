import React, { useState } from 'react'
import { MessageSquareHeart } from 'lucide-react'
import { Button } from '../../components/Button'
import { FieldGroup } from '../../components/Field'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { SelectBox } from '../../components/SelectBox'
import { Textarea } from '../../components/Textarea'
import '../../components/Input/styles.css'
import styles from '../realExamples.module.css'

const topicOptions = [
  { value: 'bug', label: 'Bug / problema' },
  { value: 'idea', label: 'Idea / miglioramento' },
  { value: 'other', label: 'Altro' },
]

/**
 * Feedback: form di invio segnalazioni.
 */
export function FeedbackDashboard() {
  const [topic, setTopic] = useState<string | null>('idea')
  const [message, setMessage] = useState('')

  return (
    <div className={styles.page}>
      <Section
        title="Feedback"
        description="Segnala un problema o proponi un miglioramento al team."
        icon={
          <MessageSquareHeart
            size={24}
            strokeWidth={1.75}
            aria-hidden
          />
        }
        className={styles.contentSection}
      />

      <div className={styles.formStack}>
        <FieldGroup
          label="Oggetto"
          required
        >
          <Input
            fullWidth
            placeholder="Breve titolo"
            defaultValue="Miglioramento filtri conversazioni"
          />
        </FieldGroup>
        <FieldGroup
          label="Tipo"
          required
        >
          <SelectBox
            options={topicOptions}
            value={topic}
            onChange={setTopic}
          />
        </FieldGroup>
        <FieldGroup
          label="Messaggio"
          required
        >
          <Textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Descrivi il feedback…"
            rows={6}
            style={{ width: '100%' }}
          />
        </FieldGroup>
        <Button
          type="button"
          variant="primary"
          size="md"
        >
          Invia feedback
        </Button>
      </div>
    </div>
  )
}
