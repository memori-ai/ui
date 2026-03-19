import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, FieldGroup } from './Field'
import { Input } from '../Input/Input'
import styles from './styles.module.css'

const meta = {
  title: 'Form/Field',
  component: FieldGroup,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Form field wrapper built on @base-ui/react Field. Provides labeling, description, and error messaging with correct ARIA association. WCAG 2.1 AA+. Use FieldGroup for a simple label + control + helper/error API, or Field.Root + Field.Label + Field.Description + Field.Error for full control.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper or description text',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message (use with invalid=true)',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Show required indicator',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the field',
    },
    invalid: {
      control: { type: 'boolean' },
      description: 'Mark field as invalid (shows error when error prop is set)',
    },
  },
  args: {
    label: 'Email',
    helperText: 'We will never share your email.',
    required: false,
    disabled: false,
    invalid: false,
    children: (
      <Input
        placeholder="you@example.com"
        type="email"
      />
    ),
  },
} satisfies Meta<typeof FieldGroup>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Default field with label and optional helper text.
 */
export const Default: Story = {
  args: {
    label: 'Email',
    helperText: 'We will never share your email.',
  },
  render: args => (
    <FieldGroup {...args}>
      {args.children ?? (
        <Input
          placeholder="you@example.com"
          type="email"
        />
      )}
    </FieldGroup>
  ),
}

/**
 * Required field with asterisk indicator.
 */
export const Required: Story = {
  args: {
    label: 'Username',
    required: true,
    children: <Input placeholder="Choose a username" />,
  },
  render: args => (
    <FieldGroup {...args}>
      {args.children ?? <Input placeholder="Choose a username" />}
    </FieldGroup>
  ),
}

/**
 * Field with validation error.
 */
export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'Please enter a valid email address.',
    invalid: true,
    children: (
      <Input
        placeholder="you@example.com"
        variant="error"
        defaultValue="invalid"
      />
    ),
  },
  render: args => (
    <FieldGroup {...args}>
      {args.children ?? (
        <Input
          placeholder="you@example.com"
          variant="error"
          defaultValue="invalid"
        />
      )}
    </FieldGroup>
  ),
}

/**
 * Disabled field.
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    helperText: 'This field is disabled.',
    disabled: true,
    children: (
      <Input
        placeholder="Cannot edit"
        disabled
      />
    ),
  },
  render: args => (
    <FieldGroup {...args}>
      {args.children ?? (
        <Input
          placeholder="Cannot edit"
          disabled
        />
      )}
    </FieldGroup>
  ),
}

/**
 * Field with description (helper text).
 */
export const WithDescription: Story = {
  args: {
    label: 'Bio',
    helperText: 'Tell us a little about yourself. Max 500 characters.',
    children: <Input placeholder="Write something..." />,
  },
  render: args => (
    <FieldGroup {...args}>
      {args.children ?? <Input placeholder="Write something..." />}
    </FieldGroup>
  ),
}

/**
 * Compound API: full control with Field.Root, Field.Label, Input, Field.Description, Field.Error.
 */
export const Composition: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Use the compound API when you need full control over structure and validation.',
      },
    },
  },
  render: () => (
    <Field.Root>
      <Field.Label>
        Full name
        <span
          className={styles.requiredIndicator}
          aria-hidden="true"
        >
          *
        </span>
      </Field.Label>
      <Input placeholder="First and last name" />
      <Field.Description>As it appears on your ID.</Field.Description>
      <Field.Error match={true}>This field is required.</Field.Error>
    </Field.Root>
  ),
}

/**
 * Built-in validation with validate callback and validationMode.
 */
export const Validation: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Field.Root validate and validationMode (e.g. onBlur) with custom error message.',
      },
    },
  },
  render: () => (
    <Field.Root
      validate={value => {
        const v = String(value ?? '').trim()
        if (v.length === 0) return 'Value is required.'
        if (v.length < 3) return 'Must be at least 3 characters.'
        return null
      }}
      validationMode="onBlur"
    >
      <Field.Label>Username</Field.Label>
      <Input placeholder="Min 3 characters" />
      <Field.Validity>
        {validity =>
          validity.errors?.length ? (
            <Field.Error match={true}>{validity.errors[0]}</Field.Error>
          ) : null
        }
      </Field.Validity>
    </Field.Root>
  ),
}
