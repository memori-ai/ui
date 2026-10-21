import React from 'react'
import { Headset, Plus } from 'lucide-react'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Section } from '../../components/Section'
import { Tabs } from '../../components/Tabs'
import { Tag } from '../../components/Tag'
import styles from '../realExamples.module.css'

const SPACES = [
  {
    id: '1',
    name: 'Showroom VR',
    description: 'Spazio immersivo per demo prodotto.',
    status: 'Pubblicato',
  },
  {
    id: '2',
    name: 'Training Lab',
    description: 'Ambiente di formazione per nuovi utenti.',
    status: 'Bozza',
  },
]

const MODELS = [
  {
    id: 'm1',
    name: 'Avatar Consulente',
    description: 'Modello 3D per sessioni di supporto.',
  },
  {
    id: 'm2',
    name: 'Host Eventi',
    description: 'Avatar per event experience.',
  },
]

/**
 * Virtual Spaces: spazi e modelli 3D.
 */
export function VirtualSpacesDashboard() {
  return (
    <div className={styles.page}>
      <Section
        title="Spazi virtuali"
        description="Gestisci ambienti VR e modelli 3D collegati agli agenti."
        icon={
          <Headset
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
            Nuovo spazio
          </Button>
        }
        className={styles.contentSection}
      />

      <Tabs.Root
        defaultValue="spaces"
        variant="underline"
      >
        <Tabs.List
          aria-label="Sezioni spazi virtuali"
          className={styles.tabsList}
        >
          <Tabs.Tab value="spaces">Spazi</Tabs.Tab>
          <Tabs.Tab value="models">Modelli</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>

        <Tabs.Panel
          value="spaces"
          className={styles.tabPanel}
        >
          <div className={styles.cardGrid}>
            {SPACES.map(space => (
              <Card
                key={space.id}
                variant="outlined"
                title={
                  <span className={styles.cellWithIcon}>
                    {space.name}
                    <Tag
                      color={
                        space.status === 'Pubblicato' ? 'success' : 'warning'
                      }
                    >
                      {space.status}
                    </Tag>
                  </span>
                }
                description={space.description}
                hoverable
              >
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                >
                  Gestisci
                </Button>
              </Card>
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel
          value="models"
          className={styles.tabPanel}
        >
          <div className={styles.cardGrid}>
            {MODELS.map(model => (
              <Card
                key={model.id}
                variant="outlined"
                title={model.name}
                description={model.description}
                hoverable
              >
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                >
                  Modifica
                </Button>
              </Card>
            ))}
          </div>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}
