import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { FileSpreadsheet } from 'lucide-react'
import { FileDropzone } from './FileDropzone'

const meta = {
  title: 'Form/FileDropzone',
  component: FileDropzone,
  tags: ['autodocs'],
  args: {
    onFilesSelected: fn(),
    accept: '.pdf,.docx,.txt',
    multiple: true,
    description: 'PDF, DOCX o TXT · max 20 MB',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['area', 'button'],
      table: { defaultValue: { summary: 'area' } },
    },
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    title: { control: 'text' },
    description: { control: 'text' },
    buttonLabel: { control: 'text' },
    icon: { control: false },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'File picker built on a native `<input type="file">`: drag & drop, click and keyboard. Files not matching `accept` are filtered out of drops. `button` is the compact form for inline uploads.',
      },
    },
  },
} satisfies Meta<typeof FileDropzone>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomContent: Story = {
  args: {
    accept: '.csv',
    multiple: false,
    icon: <FileSpreadsheet size={28} />,
    title: 'Carica un CSV con colonne Domanda / Risposta',
    description: 'Un file alla volta',
  },
}

export const ButtonVariant: Story = {
  args: {
    variant: 'button',
    accept: '.json',
    multiple: false,
    buttonLabel: 'Importa funzioni',
    description: 'File .json esportato da un altro agente',
  },
}

export const Disabled: Story = { args: { disabled: true } }
