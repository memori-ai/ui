import type { Meta, StoryObj } from '@storybook/react'
import { Image, Wrench } from 'lucide-react'
import { Combobox } from './Combobox'
import type { ComboboxOption, ComboboxGroupOption } from './Combobox'

const meta: Meta<typeof Combobox> = {
  title: 'Form/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A combobox (select with search) built on @base-ui/react Combobox. Fully accessible (WCAG 2.1 AA+) with keyboard navigation, focus management, and correct ARIA attributes. The trigger shows the selected value; the popup contains a search input and a filterable list, with optional groups and per-option icons.',
      },
    },
  },
  argTypes: {
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    searchPlaceholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Combobox>

const flatOptions: ComboboxOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
]

export const Default: Story = {
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Pick a fruit',
    searchPlaceholder: 'Search fruits…',
    options: flatOptions,
  },
}

export const WithValue: Story = {
  args: {
    label: 'Modello IA - LLM',
    placeholder: 'Select model',
    searchPlaceholder: 'Search…',
    value: 'chat-gpt-4o-mini',
    options: [
      { value: 'chat-gpt-4o-mini', label: 'Chat GPT 4o Mini' },
      { value: 'chat-gpt-4o', label: 'Chat GPT 4o' },
      { value: 'claude-3-5-sonnet', label: 'Claude 3.5 Sonnet' },
      ...flatOptions,
    ],
  },
}

const groupedOptions: ComboboxGroupOption[] = [
  {
    groupLabel: 'Mistral',
    options: [
      { value: 'mistral-7b', label: 'Mistral 7B' },
      { value: 'mistral-8x22b', label: 'Mistral 8X22B' },
      { value: 'mistral-nemo', label: 'Mistral Nemo' },
      { value: 'mistral-small', label: 'Mistral Small' },
    ],
  },
  {
    groupLabel: 'Other',
    options: [
      { value: 'pixtral-12b', label: 'Pixtral 12B' },
      { value: 'llama-3-70b', label: 'Llama 3 70B' },
    ],
  },
]

export const Grouped: Story = {
  args: {
    label: 'Modello IA - LLM',
    placeholder: 'Select model',
    searchPlaceholder: 'Search…',
    options: groupedOptions,
  },
}

const manyOptions: ComboboxOption[] = [
  ...flatOptions,
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
  { value: 'honeydew', label: 'Honeydew' },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'lemon', label: 'Lemon' },
  { value: 'mango', label: 'Mango' },
  { value: 'nectarine', label: 'Nectarine' },
  { value: 'orange', label: 'Orange' },
  { value: 'papaya', label: 'Papaya' },
  { value: 'quince', label: 'Quince' },
]

export const WithSearch: Story = {
  args: {
    label: 'Long List',
    placeholder: 'Pick a fruit',
    searchPlaceholder: 'Search fruits…',
    options: manyOptions,
  },
}

const optionsWithIcons: ComboboxOption[] = [
  { value: 'mistral-7b', label: 'Mistral 7B' },
  {
    value: 'pixtral-12b',
    label: 'Pixtral 12B',
    icons: [
      <Wrench
        key="w"
        size={14}
      />,
      <Image
        key="i"
        size={14}
      />,
    ],
  },
  {
    value: 'mistral-small',
    label: 'Mistral Small',
    icon: <Wrench size={14} />,
  },
  { value: 'llama-3-70b', label: 'Llama 3 70B' },
]

export const WithOptionIcons: Story = {
  args: {
    label: 'Modello IA - LLM',
    placeholder: 'Select model',
    searchPlaceholder: 'Search…',
    options: optionsWithIcons,
  },
}

export const WithTriggerIcon: Story = {
  args: {
    label: 'Modello IA - LLM',
    placeholder: 'Select model',
    searchPlaceholder: 'Search…',
    value: 'chat-gpt-4o-mini',
    triggerEndIcons: <Wrench size={16} />,
    options: [
      { value: 'chat-gpt-4o-mini', label: 'Chat GPT 4o Mini' },
      { value: 'chat-gpt-4o', label: 'Chat GPT 4o' },
      ...flatOptions,
    ],
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Combobox',
    placeholder: 'Cannot select',
    searchPlaceholder: 'Search…',
    options: flatOptions,
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    label: 'Required field',
    placeholder: 'Pick an option',
    searchPlaceholder: 'Search…',
    options: flatOptions,
    required: true,
  },
}
