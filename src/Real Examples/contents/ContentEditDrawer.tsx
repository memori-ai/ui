import React, { useState } from 'react'
import { Link as LinkIcon, Plus, Sparkles, Trash2, X } from 'lucide-react'
import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import { Collapsible } from '../../components/Collapsible'
import { Drawer } from '../../components/Drawer'
import { FileDropzone } from '../../components/FileDropzone'
import { FieldGroup } from '../../components/Field'
import { Input } from '../../components/Input'
import { Radio, RadioGroup } from '../../components/Radio'
import { SelectBox } from '../../components/SelectBox'
import { Tag } from '../../components/Tag'
import { Textarea } from '../../components/Textarea'
import '../../components/Input/styles.css'
import { Callout } from '../../components/Callout'
import { useNotify } from '../shared/useNotify'
import styles from '../realExamples.module.css'

export type ContentKind = 'question' | 'article' | 'memory'

export type ContentDraft = {
  kind: ContentKind
  question: string
  answer: string
  contextVarsToMatch: string[]
  contextVarsToSet: string[]
  tags: string[]
  receiver?: string
}

type ContentEditDrawerProps = {
  open: boolean
  title: string
  initial?: Partial<ContentDraft>
  /** Default answers need at least a context constraint */
  variant?: 'content' | 'defaultAnswer'
  onClose: () => void
  onSave: (draft: ContentDraft) => void
  onDelete?: () => void
}

function ListEditor({
  label,
  values,
  onChange,
  placeholder,
  addLabel,
}: {
  label: string
  values: string[]
  onChange: (v: string[]) => void
  placeholder: string
  addLabel: string
}) {
  const [draft, setDraft] = useState('')
  return (
    <FieldGroup label={label}>
      <div className={styles.formStack}>
        {values.length > 0 ? (
          <div className={styles.pillGroup}>
            {values.map(v => (
              <Tag
                key={v}
                closable
                closeLabel={`Rimuovi ${v}`}
                onClose={() => onChange(values.filter(x => x !== v))}
              >
                {v}
              </Tag>
            ))}
          </div>
        ) : null}
        <div className={styles.inputWithActions}>
          <Input
            fullWidth
            value={draft}
            placeholder={placeholder}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && draft.trim()) {
                e.preventDefault()
                onChange([...values, draft.trim()])
                setDraft('')
              }
            }}
          />
          <Button
            type="button"
            variant="outline"
            size="md"
            disabled={!draft.trim()}
            onClick={() => {
              onChange([...values, draft.trim()])
              setDraft('')
            }}
          >
            {addLabel}
          </Button>
        </div>
      </div>
    </FieldGroup>
  )
}

/**
 * EditContentPanel: question / article / story with variants, answers,
 * receiver, context variables, tags, media, links and advanced options.
 */
export function ContentEditDrawer({
  open,
  title,
  initial,
  variant = 'content',
  onClose,
  onSave,
  onDelete,
}: ContentEditDrawerProps) {
  const notify = useNotify()
  const [kind, setKind] = useState<ContentKind>(initial?.kind ?? 'question')
  const [question, setQuestion] = useState(initial?.question ?? '')
  const [variants, setVariants] = useState<string[]>([])
  const [answers, setAnswers] = useState<string[]>([initial?.answer ?? ''])
  const [receiver, setReceiver] = useState(initial?.receiver ?? 'public')
  const [toMatch, setToMatch] = useState(initial?.contextVarsToMatch ?? [])
  const [toSet, setToSet] = useState(initial?.contextVarsToSet ?? [])
  const [tags, setTags] = useState(initial?.tags ?? [])
  const [links, setLinks] = useState<{ url: string; title: string }[]>([])
  const [linkUrl, setLinkUrl] = useState('')
  const [linkTitle, setLinkTitle] = useState('')
  const [error, setError] = useState('')

  const isQuestion = kind === 'question'
  const mainLabel = isQuestion ? 'Domanda' : 'Titolo'

  const save = () => {
    if (variant === 'content' && !question.trim()) {
      setError(
        isQuestion
          ? 'Il testo della domanda è obbligatorio'
          : 'Il titolo è obbligatorio',
      )
      return
    }
    if (variant === 'defaultAnswer' && toMatch.length === 0) {
      setError(
        'Devi specificare almeno uno tra questi: un argomento necessario, un luogo o una data.',
      )
      return
    }
    onSave({
      kind,
      question,
      answer: answers[0] ?? '',
      contextVarsToMatch: toMatch,
      contextVarsToSet: toSet,
      tags,
      receiver,
    })
  }

  return (
    <Drawer
      open={open}
      onOpenChange={o => !o && onClose()}
      anchor="right"
      width="min(52rem, 96vw)"
      title={title}
      footer={
        <div className={styles.drawerFooter}>
          {onDelete ? (
            <Button
              type="button"
              variant="outline"
              danger
              icon={
                <Trash2
                  size={16}
                  aria-hidden
                />
              }
              onClick={onDelete}
              className={styles.footerStart}
            >
              Elimina
            </Button>
          ) : null}
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
          >
            Annulla
          </Button>
          <Button
            type="button"
            variant="primary"
            onClick={save}
          >
            Salva
          </Button>
        </div>
      }
    >
      <div className={styles.formStack}>
        {error ? <Callout severity="error">{error}</Callout> : null}

        {variant === 'content' ? (
          <FieldGroup label="Tipo">
            <RadioGroup
              value={kind}
              onValueChange={v => setKind(v as ContentKind)}
              orientation="horizontal"
            >
              <Radio
                value="question"
                label="Domanda"
              />
              <Radio
                value="article"
                label="Articolo"
              />
              <Radio
                value="memory"
                label="Storia"
              />
            </RadioGroup>
          </FieldGroup>
        ) : null}

        {variant === 'content' ? (
          <>
            <FieldGroup
              label={mainLabel}
              required
              helperText={
                !isQuestion
                  ? "Attenzione: il titolo risulta molto importante perchè l'IA potrà selezionarlo o meno in base ad esso."
                  : undefined
              }
            >
              <Input
                fullWidth
                value={question}
                onChange={e => {
                  setQuestion(e.target.value)
                  setError('')
                }}
              />
            </FieldGroup>
            <FieldGroup
              label={isQuestion ? 'Varianti domanda' : 'Varianti titolo'}
            >
              <div className={styles.formStack}>
                {variants.map((v, i) => (
                  <div
                    key={i}
                    className={styles.inputWithActions}
                  >
                    <Input
                      fullWidth
                      value={v}
                      onChange={e =>
                        setVariants(
                          variants.map((x, j) =>
                            j === i ? e.target.value : x,
                          ),
                        )
                      }
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      shape="circle"
                      aria-label="Rimuovi variante"
                      icon={
                        <X
                          size={16}
                          aria-hidden
                        />
                      }
                      onClick={() =>
                        setVariants(variants.filter((_, j) => j !== i))
                      }
                    />
                  </div>
                ))}
                <div className={styles.toolbarRow}>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    icon={
                      <Plus
                        size={16}
                        aria-hidden
                      />
                    }
                    onClick={() => setVariants([...variants, ''])}
                  >
                    Aggiungi una variante
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    disabled={!answers[0]?.trim()}
                    title={
                      !answers[0]?.trim()
                        ? 'Aggiungi una risposta per poter generare la domanda'
                        : undefined
                    }
                    icon={
                      <Sparkles
                        size={16}
                        aria-hidden
                      />
                    }
                    onClick={() =>
                      setVariants([
                        ...variants,
                        `${question} (variante suggerita)`,
                      ])
                    }
                  >
                    Suggerisci varianti
                  </Button>
                </div>
              </div>
            </FieldGroup>
          </>
        ) : null}

        <FieldGroup
          label="Risposte"
          required
        >
          <div className={styles.formStack}>
            {answers.map((a, i) => (
              <div
                key={i}
                className={styles.inputWithActions}
              >
                <Textarea
                  value={a}
                  rows={4}
                  onChange={e =>
                    setAnswers(
                      answers.map((x, j) => (j === i ? e.target.value : x)),
                    )
                  }
                  aria-label={`Risposta ${i + 1}`}
                />
                {answers.length > 1 ? (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    shape="circle"
                    aria-label="Rimuovi risposta"
                    icon={
                      <X
                        size={16}
                        aria-hidden
                      />
                    }
                    onClick={() =>
                      setAnswers(answers.filter((_, j) => j !== i))
                    }
                  />
                ) : null}
              </div>
            ))}
            <div className={styles.toolbarRow}>
              <Button
                type="button"
                variant="outline"
                size="sm"
                icon={
                  <Plus
                    size={16}
                    aria-hidden
                  />
                }
                onClick={() => setAnswers([...answers, ''])}
              >
                Aggiungi una risposta
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                disabled={!question.trim()}
                icon={
                  <Sparkles
                    size={16}
                    aria-hidden
                  />
                }
                onClick={() =>
                  setAnswers([
                    `Risposta suggerita per: ${question}`,
                    ...answers.slice(1),
                  ])
                }
              >
                Suggerisci risposta
              </Button>
            </div>
          </div>
        </FieldGroup>

        <FieldGroup label="Assegnato a">
          <SelectBox
            options={[
              { value: 'public', label: 'Pubblico' },
              { value: 'atleta', label: 'Atleta' },
              { value: 'cliente', label: 'Cliente' },
            ]}
            value={receiver}
            onChange={v => setReceiver(v ?? 'public')}
          />
        </FieldGroup>

        <div>
          <Checkbox label="Non casuale" />
          <p className={styles.fieldHint}>
            Quando attivo, la domanda non può essere proposta casualmente se
            l&apos;utente resta inattivo.
          </p>
        </div>

        <ListEditor
          label="Argomenti necessari"
          values={toMatch}
          onChange={setToMatch}
          placeholder="CHIAVE:VALORE"
          addLabel="Aggiungi"
        />
        <ListEditor
          label="Argomenti impostati"
          values={toSet}
          onChange={setToSet}
          placeholder="CHIAVE:VALORE"
          addLabel="Aggiungi"
        />
        <ListEditor
          label="Tag"
          values={tags}
          onChange={setTags}
          placeholder="Inserire un tag"
          addLabel="Aggiungi"
        />

        <Collapsible summary="Luogo e data">
          <div className={styles.twoColumns}>
            <FieldGroup label="Luogo">
              <Input
                fullWidth
                placeholder="Es. Milano"
              />
            </FieldGroup>
            <FieldGroup label="Data">
              <Input
                fullWidth
                type="date"
              />
            </FieldGroup>
          </div>
        </Collapsible>

        <FieldGroup label="Media">
          <FileDropzone
            accept="image/*,video/*,audio/*,.pdf"
            title="Trascina qui un media oppure sfoglia"
            description="Immagini, video, audio o PDF"
            onFilesSelected={files => notify(`${files[0]!.name} caricato`)}
          />
        </FieldGroup>

        <FieldGroup label="Link">
          <div className={styles.formStack}>
            {links.map(l => (
              <div
                key={l.url}
                className={styles.plainListItem}
              >
                <span className={styles.cellWithIcon}>
                  <LinkIcon
                    size={14}
                    aria-hidden
                  />
                  {l.title || l.url}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  shape="circle"
                  aria-label={`Rimuovi ${l.url}`}
                  icon={
                    <Trash2
                      size={16}
                      aria-hidden
                    />
                  }
                  onClick={() => setLinks(links.filter(x => x.url !== l.url))}
                />
              </div>
            ))}
            <div className={styles.twoColumns}>
              <Input
                fullWidth
                type="url"
                placeholder="Url"
                value={linkUrl}
                onChange={e => setLinkUrl(e.target.value)}
                aria-label="Url"
              />
              <Input
                fullWidth
                placeholder="Titolo link"
                value={linkTitle}
                onChange={e => setLinkTitle(e.target.value)}
                aria-label="Titolo link"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={!linkUrl.trim()}
              icon={
                <Plus
                  size={16}
                  aria-hidden
                />
              }
              onClick={() => {
                setLinks([...links, { url: linkUrl, title: linkTitle }])
                setLinkUrl('')
                setLinkTitle('')
              }}
            >
              Aggiungi un nuovo link
            </Button>
          </div>
        </FieldGroup>

        <Collapsible summary="Avanzate: timeout">
          <div className={styles.formStack}>
            <p className={styles.fieldHint}>
              Qui puoi impostare un timeout personalizzato per questa domanda.
              Il tempo di timeout sarà scelto casualmente tra i due valori
              inseriti.
            </p>
            <div className={styles.twoColumns}>
              <FieldGroup label="Timeout minimo">
                <Input type="number" />
              </FieldGroup>
              <FieldGroup label="Timeout massimo">
                <Input type="number" />
              </FieldGroup>
            </div>
          </div>
        </Collapsible>
        <Collapsible summary="Avanzate: integrazione DCM">
          <div className={styles.twoColumns}>
            <FieldGroup
              label="Tipo Outcome"
              helperText="Es: COMMON"
            >
              <Input fullWidth />
            </FieldGroup>
            <FieldGroup
              label="Codice Outcome"
              helperText="Es: T93D"
            >
              <Input fullWidth />
            </FieldGroup>
          </div>
        </Collapsible>
      </div>
    </Drawer>
  )
}
