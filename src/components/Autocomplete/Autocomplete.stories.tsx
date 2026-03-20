import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Image, Wrench } from 'lucide-react'
import { Autocomplete } from './Autocomplete'
import type {
  AutocompleteGroupOption,
  AutocompleteOption,
} from './Autocomplete'

const meta: Meta<typeof Autocomplete> = {
  title: 'Form/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A text field with optional suggestions, built on `@base-ui/react/autocomplete`. Free-form input is supported; the list filters as you type. Keyboard navigation and ARIA follow the WAI-ARIA combobox pattern (WCAG 2.1 AA+). **When users must pick exactly one option from a fixed set** (and arbitrary text is not allowed), prefer **Combobox** instead—see Base UI guidance.',
      },
    },
  },
  argTypes: {
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    loading: { control: 'boolean' },
    clearable: { control: 'boolean' },
    placeholder: { control: 'text' },
    mode: {
      control: 'select',
      options: ['list', 'both', 'inline', 'none'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Autocomplete>

const flatOptions: AutocompleteOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
]

export const Default: Story = {
  args: {
    label: 'Favorite fruit',
    placeholder: 'Type to search…',
    options: flatOptions,
  },
}

export const WithDefaultValue: Story = {
  args: {
    label: 'Favorite fruit',
    placeholder: 'Type to search…',
    defaultValue: 'cherry',
    options: flatOptions,
  },
}

function ControlledAutocomplete(
  props: React.ComponentProps<typeof Autocomplete>,
) {
  const [value, setValue] = useState(props.value ?? '')
  return (
    <Autocomplete
      {...props}
      value={value}
      onChange={(v, d) => {
        setValue(v)
        props.onChange?.(v, d)
      }}
    />
  )
}

export const Controlled: Story = {
  render: args => <ControlledAutocomplete {...args} />,
  args: {
    label: 'Controlled',
    placeholder: 'Type to search…',
    value: 'banana',
    options: flatOptions,
  },
}

const groupedOptions: AutocompleteGroupOption[] = [
  {
    groupLabel: 'Mistral',
    options: [
      { value: 'mistral-7b', label: 'Mistral 7B' },
      { value: 'mistral-nemo', label: 'Mistral Nemo' },
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
    label: 'Model',
    placeholder: 'Search models…',
    options: groupedOptions,
  },
}

export const Loading: Story = {
  args: {
    label: 'Async (loading state)',
    placeholder: 'Search…',
    options: flatOptions,
    loading: true,
    loadingText: 'Loading suggestions…',
  },
}

function LoadingAsyncStory(props: React.ComponentProps<typeof Autocomplete>) {
  const [loading, setLoading] = useState(true)
  const [opts, setOpts] = useState<AutocompleteOption[]>([])

  useEffect(() => {
    const t = window.setTimeout(() => {
      setOpts(flatOptions)
      setLoading(false)
    }, 1200)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <Autocomplete
      {...props}
      options={opts}
      loading={loading}
      emptyText={loading ? 'Loading…' : 'No results'}
    />
  )
}

export const AsyncSimulated: Story = {
  render: args => <LoadingAsyncStory {...args} />,
  args: {
    label: 'Async load',
    placeholder: 'Wait for options…',
  },
}

export const Clearable: Story = {
  args: {
    label: 'Clearable',
    placeholder: 'Type something…',
    options: flatOptions,
    clearable: true,
    defaultValue: 'Apple',
  },
}

export const ModeInline: Story = {
  args: {
    label: 'Mode: inline',
    placeholder: 'Arrow down to preview',
    options: flatOptions,
    mode: 'inline',
  },
}

export const ModeBoth: Story = {
  args: {
    label: 'Mode: both',
    placeholder: 'Filter + inline completion',
    options: flatOptions,
    mode: 'both',
  },
}

const optionsWithIcons: AutocompleteOption[] = [
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
]

export const WithOptionIcons: Story = {
  args: {
    label: 'Options with icons',
    placeholder: 'Search…',
    options: optionsWithIcons,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Cannot edit',
    options: flatOptions,
    disabled: true,
    defaultValue: 'Apple',
  },
}

export const Required: Story = {
  args: {
    label: 'Required field',
    placeholder: 'Type to search…',
    options: flatOptions,
    required: true,
  },
}
