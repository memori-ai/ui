import * as React from 'react'
import { Form as BaseForm } from '@base-ui/react/form'
import type { FormProps as BaseFormProps } from '@base-ui/react/form'
import cx from 'classnames'
import styles from './styles.module.css'

/* ----------------------------------------------------------------------------
 * Styled Form Root
 * ----------------------------------------------------------------------------
 * Native <form> with consolidated error handling, validation mode, and
 * onFormSubmit. Aligns with Base UI, MUI, Ant Design, and Chakra form patterns.
 * WCAG 2.1 AA+: proper association via Field, focus-visible, keyboard submit.
 * -------------------------------------------------------------------------- */

type FormState = import('@base-ui/react/form').Form.State

export interface FormProps extends Omit<
  BaseFormProps<Record<string, unknown>>,
  'className' | 'style'
> {
  /**
   * Validation errors keyed by field name (e.g. from server or schema).
   * Keys should match the `name` attribute on form controls.
   */
  errors?: BaseFormProps<Record<string, unknown>>['errors']
  /**
   * Called when form is submitted with values as an object.
   * When used, preventDefault() is called on the native submit event.
   */
  onFormSubmit?: BaseFormProps<Record<string, unknown>>['onFormSubmit']
  /**
   * When to run validation: 'onSubmit' | 'onBlur' | 'onChange'.
   * @default 'onSubmit'
   */
  validationMode?: BaseFormProps<Record<string, unknown>>['validationMode']
  /**
   * Native form submit handler (use onFormSubmit for values object).
   */
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  /**
   * Form action URL (native).
   */
  action?: string
  /**
   * Form method (native).
   */
  method?: 'get' | 'post'
  /**
   * When true, form submission is disabled (use with disabled on submit Button for UX).
   * Note: native <form> has no disabled attribute; disable individual controls as needed.
   */
  disabled?: boolean
  /**
   * CSS class (merged with root styles). Can be a function (state) => string for Base UI compatibility.
   */
  className?: string | ((state: FormState) => string | undefined)
  /**
   * Inline styles (merged with root styles). Can be a function (state) => CSSProperties for Base UI compatibility.
   */
  style?:
    | React.CSSProperties
    | ((state: FormState) => React.CSSProperties | undefined)
  /**
   * Form content (use Field + inputs + Button type="submit").
   */
  children?: React.ReactNode
}

const FormRoot = React.forwardRef<HTMLFormElement, FormProps>(
  (
    {
      className,
      style,
      errors,
      onFormSubmit,
      validationMode,
      onSubmit,
      action,
      method,
      disabled,
      children,
      ...rest
    },
    ref,
  ) => {
    const mergedClassName =
      typeof className === 'function'
        ? (state: FormState) => cx(styles.root, className(state))
        : cx(styles.root, className)

    const mergedStyle =
      typeof style === 'function'
        ? (state: FormState) => ({ ...style(state) })
        : style

    return (
      <BaseForm
        ref={ref}
        className={mergedClassName}
        style={mergedStyle}
        errors={errors}
        onFormSubmit={onFormSubmit}
        validationMode={validationMode}
        onSubmit={onSubmit}
        action={action}
        method={method}
        {...rest}
      >
        {children}
      </BaseForm>
    )
  },
)
FormRoot.displayName = 'Form'

/* ----------------------------------------------------------------------------
 * Compound export (align with Base UI naming; Form is the root)
 * -------------------------------------------------------------------------- */

export const Form = FormRoot
export default Form
