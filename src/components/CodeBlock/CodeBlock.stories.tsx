import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { CodeBlock } from './CodeBlock'

const SNIPPET = `import Memori from '@memori.ai/memori-react'

<Memori
  memoriName="Layout Storybook"
  ownerUserName="demo"
  tenantID="aisuru.com"
/>`

const meta = {
  title: 'Contenuto/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  args: { code: SNIPPET, language: 'tsx', onCopy: fn() },
  argTypes: {
    code: { control: 'text' },
    language: { control: 'text' },
    copyable: { control: 'boolean' },
    wrap: { control: 'boolean' },
    maxHeight: { control: 'text' },
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Monospace snippet with optional language label and copy button. Scrolls horizontally by default; `wrap` wraps long lines. The `<pre>` is focusable so keyboard users can scroll it.',
      },
    },
  },
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Plain: Story = {
  args: {
    code: "typeMessage('Ciao mondo!', true, false)",
    language: undefined,
    copyable: false,
  },
}

export const Wrapped: Story = {
  args: {
    language: 'JSON',
    wrap: true,
    code: '{"status":"ok","sessionID":"5e1c2a6b-0f3e-4d0a-9a4e-1f2b3c4d5e6f","answer":"Ciao! Come posso aiutarti oggi con il tuo ordine?"}',
  },
}

export const MaxHeight: Story = {
  args: {
    maxHeight: 120,
    code: Array.from({ length: 20 }, (_, i) => `line ${i + 1}`).join('\n'),
  },
}
