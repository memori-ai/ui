import React, { useState } from 'react'
import {
  Award,
  Bell,
  Coins,
  Gauge,
  LogOut,
  Megaphone,
  Menu,
  MessageSquarePlus,
  UserRound,
  Zap,
} from 'lucide-react'
import { Avatar } from '../../components/Avatar'
import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Divider } from '../../components/Divider'
import { Dropdown } from '../../components/Dropdown'
import { Tooltip } from '../../components/Tooltip'
import { useNotify } from '../shared/useNotify'
import type { SectionId } from './navigation'
import {
  USER_CREDITS,
  UserConsumptionsMenuPanel,
  UserConsumptionsModal,
  formatUserCredits,
} from './UserConsumptions'
import styles from '../realExamples.module.css'

type AppHeaderProps = {
  active: SectionId
  unreadNotifications: number
  sidebarOpen: boolean
  onToggleSidebar: () => void
  onNavigate: (id: SectionId) => void
  /** Primary navigation rendered after the brand (top-nav layout). */
  primaryNav?: React.ReactNode
}

const USER = { name: 'Utente Demo', email: 'demo@aisuru.com', initials: 'UD' }

/** Aisuru mark: the brand's interlaced rings (teal → violet), without the inner wordmark. */
function AisuruMark() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={styles.appBrandMark}
    >
      <defs>
        <linearGradient
          id="aisuru-rings"
          x1="4"
          y1="3"
          x2="26"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            stopColor="#3cc8d8"
          />
          <stop
            offset="0.45"
            stopColor="#2f8fc4"
          />
          <stop
            offset="1"
            stopColor="#7b3fa6"
          />
        </linearGradient>
      </defs>
      <g
        stroke="url(#aisuru-rings)"
        strokeWidth="1.5"
      >
        <ellipse
          cx="14.5"
          cy="16.5"
          rx="12"
          ry="10"
          transform="rotate(-28 14.5 16.5)"
        />
        <ellipse
          cx="17.5"
          cy="15"
          rx="11.5"
          ry="10.5"
          transform="rotate(32 17.5 15)"
        />
        <ellipse
          cx="16"
          cy="16.5"
          rx="10.5"
          ry="13"
          transform="rotate(75 16 16.5)"
        />
      </g>
    </svg>
  )
}

/**
 * Global top bar: brand, notifications and the user menu. Account-level pages
 * (Account, Badge, Novità, Feedback) live here so the sidebar stays about work.
 * Credits sit in the menu head; Consumi opens a modal and also has a summary
 * panel inside the same dropdown.
 */
export function AppHeader({
  active,
  unreadNotifications,
  sidebarOpen,
  onToggleSidebar,
  onNavigate,
  primaryNav,
}: AppHeaderProps) {
  const notify = useNotify()
  const [menuOpen, setMenuOpen] = useState(false)
  const [consumptionsOpen, setConsumptionsOpen] = useState(false)

  const openConsumptions = () => {
    setMenuOpen(false)
    setConsumptionsOpen(true)
  }

  return (
    <>
      <header className={styles.appHeader}>
        <Button
          variant="ghost"
          className={styles.appMenuToggle}
          ariaLabel={sidebarOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={sidebarOpen}
          aria-controls="app-sidebar"
          icon={
            <Menu
              size={20}
              aria-hidden
            />
          }
          onClick={onToggleSidebar}
        />

        <a
          href="#home"
          className={styles.appBrand}
          onClick={e => {
            e.preventDefault()
            onNavigate('home')
          }}
        >
          <AisuruMark />
          <span className={styles.appBrandName}>Aisuru</span>
        </a>

        {primaryNav}

        <div className={styles.appHeaderActions}>
          <Tooltip content="Novità">
            <Button
              variant="ghost"
              ariaLabel="Novità"
              active={active === 'changelog'}
              aria-current={active === 'changelog' ? 'page' : undefined}
              icon={
                <Megaphone
                  size={20}
                  aria-hidden
                />
              }
              onClick={() => onNavigate('changelog')}
            />
          </Tooltip>

          <Tooltip content="Notifiche">
            <Button
              variant="ghost"
              ariaLabel={
                unreadNotifications > 0
                  ? `Notifiche, ${unreadNotifications} non lette`
                  : 'Notifiche'
              }
              active={active === 'notifications'}
              aria-current={active === 'notifications' ? 'page' : undefined}
              icon={
                <Badge
                  count={unreadNotifications}
                  max={9}
                >
                  <Bell
                    size={20}
                    aria-hidden
                  />
                </Badge>
              }
              onClick={() => onNavigate('notifications')}
            />
          </Tooltip>

          <Tooltip content="Consumi">
            <Button
              variant="ghost"
              ariaLabel="Consumi"
              active={consumptionsOpen}
              icon={
                <Gauge
                  size={20}
                  aria-hidden
                />
              }
              onClick={() => setConsumptionsOpen(true)}
            />
          </Tooltip>

          <Divider
            orientation="vertical"
            className={styles.appHeaderDivider}
          />

          <Dropdown
            open={menuOpen}
            onOpenChange={setMenuOpen}
          >
            <Dropdown.Trigger
              className={styles.appUserTrigger}
              aria-label={`Menu utente, ${USER.name}`}
            >
              <Avatar
                initials={USER.initials}
                size="sm"
              />
              <span className={styles.appUserName}>{USER.name}</span>
            </Dropdown.Trigger>
            <Dropdown.Menu
              align="end"
              className={styles.appUserMenu}
            >
              <div className={styles.appUserMenuHead}>
                <span className={styles.appUserMenuName}>{USER.name}</span>
                <span className={styles.appUserMenuEmail}>{USER.email}</span>
                <button
                  type="button"
                  className={styles.appUserMenuCredits}
                  onClick={openConsumptions}
                >
                  <Coins
                    size={14}
                    aria-hidden
                  />
                  <span>
                    <strong>{formatUserCredits(USER_CREDITS)}</strong> crediti
                  </span>
                </button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className={styles.appUserMenuBuy}
                  icon={
                    <Zap
                      size={14}
                      aria-hidden
                    />
                  }
                  onClick={() => {
                    setMenuOpen(false)
                    window.open(
                      'https://billing.memori.ai/',
                      '_blank',
                      'noopener',
                    )
                  }}
                >
                  Acquista crediti
                </Button>
              </div>
              <Dropdown.Separator />
              <UserConsumptionsMenuPanel onOpenDetails={openConsumptions} />
              <Dropdown.Separator />
              <Dropdown.Item onClick={() => onNavigate('account')}>
                <UserRound
                  size={16}
                  aria-hidden
                />
                Account
              </Dropdown.Item>
              <Dropdown.Item onClick={() => onNavigate('badges')}>
                <Award
                  size={16}
                  aria-hidden
                />
                Badge
              </Dropdown.Item>
              <Dropdown.Item onClick={() => onNavigate('feedback')}>
                <MessageSquarePlus
                  size={16}
                  aria-hidden
                />
                Invia feedback
              </Dropdown.Item>
              <Dropdown.Separator />
              <Dropdown.Item
                onClick={() => notify('Disconnessione effettuata')}
              >
                <LogOut
                  size={16}
                  aria-hidden
                />
                Esci
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>

      <UserConsumptionsModal
        open={consumptionsOpen}
        onOpenChange={setConsumptionsOpen}
      />
    </>
  )
}
