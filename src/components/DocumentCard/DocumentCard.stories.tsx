import type { Meta, StoryObj } from '@storybook/react'
import { File } from 'lucide-react'
import DocumentCard from './DocumentCard'

const meta: Meta<typeof DocumentCard> = {
  title: 'Components/DocumentCard',
  component: DocumentCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DocumentCard>

export const Default: Story = {
  args: {
    title: 'quarterly-report.pdf',
    badge: 'PDF',
    style: { width: 120, height: 120 },
  },
}

export const WithIconAndMeta: Story = {
  args: {
    title: 'meeting-notes.txt',
    badge: 'TXT',
    meta: '12 KB',
    icon: <File className="memori-document-card__icon-svg" />,
    style: { width: 160, minHeight: 100 },
  },
}

export const LongTitle: Story = {
  args: {
    title:
      'very-long-filename-that-should-clamp-across-multiple-lines-in-the-tile.pdf',
    badge: 'PDF',
    style: { width: 120, height: 120 },
  },
}
