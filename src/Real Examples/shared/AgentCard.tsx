import React, { useState } from 'react'
import {
  Ban,
  FolderOpen,
  Link as LinkIcon,
  Lock,
  LockOpen,
  LogIn,
  Pencil,
  ThumbsUp,
  Users,
} from 'lucide-react'
import { InfoHint } from '../../components/InfoHint'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Expandable } from '../../components/Expandable'
import { Tag } from '../../components/Tag'
import { Tooltip } from '../../components/Tooltip'
import styles from '../realExamples.module.css'

export type AgentPrivacy = 'PUBLIC' | 'PRIVATE' | 'SECRET'

export type AgentInvitation = {
  state: 'PENDING' | 'ACCEPTED'
  type: 'GIVER' | 'RECEIVER'
  /** Receiver role name, shown next to the agent name */
  tag?: string
  text?: string
}

export type Agent = {
  id: string
  name: string
  ownerUserName: string
  description: string
  privacy: AgentPrivacy
  /** Has a public page (shown in homepage) */
  exposed: boolean
  categories: string[]
  coverColor: string
  initials: string
  nsfw?: boolean
  isReceiver?: boolean
  blockedUntil?: string
  requireLogin?: boolean
  invitation?: AgentInvitation
}

const MAX_VISIBLE_TAGS = 2

type AgentCardProps = {
  agent: Agent
  /** own = list "I tuoi Agenti", public = community / user page */
  variant: 'own' | 'shared' | 'public'
  loggedIn?: boolean
  notEnoughCredits?: boolean
  onEdit?: (agent: Agent) => void
  onManage?: (agent: Agent) => void
  onOpen?: (agent: Agent) => void
  onTagClick?: (tag: string) => void
  onAcceptInvitation?: (agent: Agent) => void
  onRejectInvitation?: (agent: Agent) => void
}

/**
 * Agent card (MemoriCard): cover + avatar, privacy icons, expandable description,
 * category tags, invitation actions and the right CTA for owner / guest / visitor.
 */
export function AgentCard({
  agent,
  variant,
  loggedIn = true,
  notEnoughCredits = false,
  onEdit,
  onManage,
  onOpen,
  onTagClick,
  onAcceptInvitation,
  onRejectInvitation,
}: AgentCardProps) {
  const [showAllTags, setShowAllTags] = useState(false)
  const isPublic = variant === 'public'
  const invitation = agent.invitation
  const hiddenTags = agent.categories.length - MAX_VISIBLE_TAGS
  const visibleTags = showAllTags
    ? agent.categories
    : agent.categories.slice(0, MAX_VISIBLE_TAGS)
  const canEdit =
    variant === 'own' ||
    (invitation?.state === 'ACCEPTED' && invitation.type === 'GIVER')
  const hasPublicLink = agent.exposed && agent.privacy !== 'SECRET'
  const blocked = !!agent.blockedUntil || (!isPublic && notEnoughCredits)

  return (
    <Card
      variant="outlined"
      padding="md"
      className={styles.agentCard}
      cover={
        <div
          className={styles.agentCardCover}
          style={{ background: agent.coverColor }}
        >
          <span
            className={styles.agentCardAvatar}
            aria-hidden
          >
            {agent.initials}
          </span>
        </div>
      }
    >
      <div className={styles.agentCardBody}>
        {!isPublic || agent.nsfw ? (
          <div className={styles.agentCardIcons}>
            {!isPublic && agent.privacy === 'SECRET' ? (
              <Tooltip content="Segreto">
                <Lock
                  size={16}
                  aria-label="Segreto"
                />
              </Tooltip>
            ) : null}
            {!isPublic && agent.privacy === 'PRIVATE' ? (
              <Tooltip content="Privato">
                <LockOpen
                  size={16}
                  aria-label="Privato"
                />
              </Tooltip>
            ) : null}
            {!isPublic && agent.isReceiver ? (
              <Tooltip content="Destinatario">
                <Users
                  size={16}
                  aria-label="Destinatario"
                />
              </Tooltip>
            ) : null}
            {agent.nsfw ? (
              <span
                title="Contenuti per adulti"
                aria-label="Contenuti per adulti"
              >
                🔞
              </span>
            ) : null}
          </div>
        ) : null}

        <h3 className={styles.agentCardTitle}>
          {agent.name}
          {invitation?.tag && invitation.type === 'RECEIVER' ? (
            <span className={styles.agentCardRole}> – {invitation.tag}</span>
          ) : null}
        </h3>

        <Expandable
          rows={3}
          className={styles.agentCardDescription}
          expandSymbol={() => 'Vedi tutto'}
          collapseSymbol={() => 'Vedi meno'}
        >
          {agent.description}
        </Expandable>

        {blocked ? (
          <Tooltip
            content={
              agent.blockedUntil
                ? `Agente bloccato fino al ${agent.blockedUntil} perchè ha superato la soglia mensile di chat ammesse. Puoi sempre gestirlo in qualità di amministratore, ma altri utenti non potranno interrogarlo.`
                : 'Non hai abbastanza crediti'
            }
          >
            <span>
              <Tag
                color="error"
                icon={
                  <Ban
                    size={12}
                    aria-hidden
                  />
                }
              >
                Bloccato
              </Tag>
            </span>
          </Tooltip>
        ) : null}

        {agent.categories.length > 0 ? (
          <div className={styles.pillGroup}>
            {visibleTags.map(tag => (
              <button
                key={tag}
                type="button"
                className={styles.tagButton}
                title={`Cerca per la categoria: ${tag}`}
                onClick={() => onTagClick?.(tag)}
              >
                <Tag size="sm">{tag}</Tag>
              </button>
            ))}
            {hiddenTags > 0 && !showAllTags ? (
              <button
                type="button"
                className={styles.tagButton}
                aria-label={`Mostra altre ${hiddenTags} categorie`}
                onClick={() => setShowAllTags(true)}
              >
                <Tag
                  size="sm"
                  color="primary"
                >
                  +{hiddenTags}
                </Tag>
              </button>
            ) : null}
          </div>
        ) : null}

        {invitation?.state === 'PENDING' ? (
          <div className={styles.agentCardInvite}>
            {invitation.text ? (
              <InfoHint
                content={invitation.text}
                ariaLabel="Messaggio dell'invito"
              />
            ) : null}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onRejectInvitation?.(agent)}
            >
              Rifiuta
            </Button>
            <Button
              type="button"
              variant="primary"
              size="sm"
              icon={
                <ThumbsUp
                  size={14}
                  aria-hidden
                />
              }
              onClick={() => onAcceptInvitation?.(agent)}
            >
              Accetta
            </Button>
          </div>
        ) : null}

        {invitation ? (
          <p className={styles.agentCardMeta}>
            Condiviso da: {agent.ownerUserName}
          </p>
        ) : null}
      </div>

      <div className={styles.agentCardFooter}>
        {/* Primary CTA */}
        {variant === 'own' ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            icon={
              <FolderOpen
                size={16}
                aria-hidden
              />
            }
            onClick={() => onManage?.(agent)}
          >
            Gestisci
          </Button>
        ) : null}
        {variant === 'shared' &&
        invitation &&
        invitation.state !== 'PENDING' ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            icon={
              invitation.type === 'GIVER' ? (
                <FolderOpen
                  size={16}
                  aria-hidden
                />
              ) : (
                <LinkIcon
                  size={16}
                  aria-hidden
                />
              )
            }
            onClick={() =>
              invitation.type === 'GIVER' ? onManage?.(agent) : onOpen?.(agent)
            }
          >
            {invitation.type === 'GIVER' ? 'Gestisci' : 'Apri'}
          </Button>
        ) : null}
        {isPublic && hasPublicLink && (!agent.requireLogin || loggedIn) ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            icon={
              <LinkIcon
                size={16}
                aria-hidden
              />
            }
            onClick={() => onOpen?.(agent)}
          >
            Scopri
          </Button>
        ) : null}
        {isPublic && hasPublicLink && agent.requireLogin && !loggedIn ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            icon={
              <LogIn
                size={16}
                aria-hidden
              />
            }
          >
            Accedi
          </Button>
        ) : null}

        {/* Secondary icon actions (owner / giver only) */}
        {!isPublic ? (
          <div className={styles.agentCardIconActions}>
            {hasPublicLink ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                shape="circle"
                aria-label={`Apri la pagina pubblica di ${agent.name}`}
                title="Scopri"
                icon={
                  <LinkIcon
                    size={16}
                    aria-hidden
                  />
                }
                onClick={() => onOpen?.(agent)}
              />
            ) : null}
            {canEdit ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                shape="circle"
                aria-label={`Modifica ${agent.name}`}
                title="Modifica"
                icon={
                  <Pencil
                    size={16}
                    aria-hidden
                  />
                }
                onClick={() => onEdit?.(agent)}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </Card>
  )
}
