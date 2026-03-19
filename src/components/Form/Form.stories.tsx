import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Form } from './Form'
import { FieldGroup } from '../Field/Field'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

const meta = {
  title: 'Form/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'Native form element with consolidated error handling, built on @base-ui/react Form. Use with Field/FieldGroup for labeling and validation. Supports onSubmit, onFormSubmit (values object), errors map, and validationMode. WCAG 2.1 AA+ with correct ARIA association and keyboard submit.',
      },
    },
  },
  argTypes: {
    validationMode: {
      control: { type: 'select' },
      options: ['onSubmit', 'onBlur', 'onChange'],
      description: 'When to run validation',
    },
    method: {
      control: { type: 'select' },
      options: ['get', 'post'],
      description: 'Form method',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the form',
    },
  },
  args: {
    validationMode: 'onSubmit',
    method: 'post',
    disabled: false,
  },
} satisfies Meta<typeof Form>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Default form with FieldGroup, Input, and submit Button.
 * Submit via Enter or button; validation runs on submit.
 */
export const Default: Story = {
  render: () => (
    <Form
      onSubmit={e => {
        e.preventDefault()
        console.log('Submitted (native)')
      }}
    >
      <FieldGroup
        label="Email"
        helperText="We will never share your email."
        required
      >
        <Input
          name="email"
          type="email"
          placeholder="you@example.com"
        />
      </FieldGroup>
      <FieldGroup label="Password">
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
        />
      </FieldGroup>
      <Button type="submit">Submit</Button>
    </Form>
  ),
}

/**
 * Use onFormSubmit to receive form values as an object.
 * preventDefault() is called automatically when onFormSubmit is provided.
 */
export const WithOnFormSubmit: Story = {
  render: () => (
    <Form
      onFormSubmit={formValues => {
        console.log('Form values:', formValues)
      }}
    >
      <FieldGroup label="Username">
        <Input
          name="username"
          placeholder="johndoe"
        />
      </FieldGroup>
      <FieldGroup label="Quantity">
        <Input
          name="quantity"
          type="number"
          placeholder="1"
          defaultValue="1"
        />
      </FieldGroup>
      <Button type="submit">Submit</Button>
    </Form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'onFormSubmit provides form values as a Record<string, unknown> keyed by input name. Useful for API calls or transforming data before submit.',
      },
    },
  },
}

/**
 * Pass server or schema validation errors via the errors prop.
 * Keys must match the name attribute on Field.Root / form controls.
 */
export const WithErrors: Story = {
  args: {
    errors: {
      email: 'Please enter a valid email address.',
      password: 'Password must be at least 8 characters.',
    },
  },
  render: args => (
    <Form {...args}>
      <FieldGroup
        name="email"
        label="Email"
        error={
          Array.isArray(args.errors?.email)
            ? args.errors.email[0]
            : args.errors?.email
        }
        invalid={Boolean(args.errors?.email)}
      >
        <Input
          name="email"
          type="email"
          placeholder="you@example.com"
          variant="error"
        />
      </FieldGroup>
      <FieldGroup
        name="password"
        label="Password"
        error={
          Array.isArray(args.errors?.password)
            ? args.errors.password[0]
            : args.errors?.password
        }
        invalid={Boolean(args.errors?.password)}
      >
        <Input
          name="password"
          type="password"
          placeholder="••••••••"
          variant="error"
        />
      </FieldGroup>
      <Button type="submit">Submit</Button>
    </Form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Set errors from server response or Zod/schema validation. Field names in the errors object should match the name attribute on controls.',
      },
    },
  },
}

/**
 * validationMode controls when fields validate: onSubmit (default), onBlur, or onChange.
 */
export const ValidationModeOnBlur: Story = {
  render: () => (
    <Form validationMode="onBlur">
      <FieldGroup
        label="Username"
        required
      >
        <Input
          name="username"
          placeholder="Min 3 characters"
        />
      </FieldGroup>
      <FieldGroup
        label="Email"
        required
      >
        <Input
          name="email"
          type="email"
          placeholder="you@example.com"
        />
      </FieldGroup>
      <Button type="submit">Submit</Button>
    </Form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Validation runs when a field loses focus (onBlur). Use with Field.Root validate + Field.Validity for messages.',
      },
    },
  },
}

/**
 * Disabled form: all controls are disabled.
 */
export const Disabled: Story = {
  render: () => (
    <Form disabled>
      <FieldGroup
        label="Email"
        helperText="Form is disabled."
      >
        <Input
          name="email"
          type="email"
          placeholder="you@example.com"
          disabled
        />
      </FieldGroup>
      <Button
        type="submit"
        disabled
      >
        Submit
      </Button>
    </Form>
  ),
}

/**
 * Custom className and style are merged with root styles.
 */
export const CustomStyling: Story = {
  render: () => (
    <Form
      className="custom-form"
      style={{
        padding: 'var(--memori-spacing-lg)',
        border: '1px solid var(--memori-border-color)',
        borderRadius: 'var(--memori-radius-box)',
      }}
    >
      <FieldGroup label="Name">
        <Input
          name="name"
          placeholder="Your name"
        />
      </FieldGroup>
      <Button type="submit">Submit</Button>
    </Form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'className and style are merged with the default root styles.',
      },
    },
  },
}
