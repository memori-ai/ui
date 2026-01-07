import type { Meta, StoryObj } from '@storybook/react'
import { SelectBox } from './SelectBox'

const meta: Meta<typeof SelectBox> = {
  title: 'Components/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof SelectBox>

const options = [
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
    options: options,
  },
}

export const Preselected: Story = {
  args: {
    label: 'Favorite Fruit',
    value: 'banana',
    options: options,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    placeholder: 'Cannot select',
    options: options,
    disabled: true,
  },
}

export const ErrorState: Story = {
  args: {
    label: 'Error Select',
    options: options,
    error: true,
  },
}

export const WithManyOptions: Story = {
  args: {
    label: 'Long List',
    options: [
      ...options,
      { value: 'fig', label: 'Fig' },
      { value: 'grape', label: 'Grape' },
      { value: 'honeydew', label: 'Honeydew' },
    ],
  },
}
