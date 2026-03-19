import * as React from 'react'
import { Field as BaseField } from '@base-ui/react/field'
import type {
  FieldRootProps,
  FieldLabelProps,
  FieldDescriptionProps,
  FieldErrorProps,
} from '@base-ui/react/field'
import cx from 'classnames'
import styles from './styles.module.css'

/* ----------------------------------------------------------------------------
 * Styled Root
 * -------------------------------------------------------------------------- */

const FieldRoot = React.forwardRef<HTMLDivElement, FieldRootProps>(
  ({ className, style, ...props }, ref) => {
    const mergedClassName =
      typeof className === 'function'
        ? (state: import('@base-ui/react/field').FieldRoot.State) =>
            cx(styles.root, className(state))
        : cx(styles.root, className)

    const mergedStyle =
      typeof style === 'function'
        ? (state: import('@base-ui/react/field').FieldRoot.State) => ({
            ...style(state),
          })
        : style

    return (
      <BaseField.Root
        ref={ref}
        className={mergedClassName}
        style={mergedStyle}
        {...props}
      />
    )
  },
)
FieldRoot.displayName = 'Field.Root'

/* ----------------------------------------------------------------------------
 * Styled Label
 * -------------------------------------------------------------------------- */

const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, style, ...props }, ref) => {
    const mergedClassName =
      typeof className === 'function'
        ? (state: import('@base-ui/react/field').FieldLabel.State) =>
            cx(styles.label, className(state))
        : cx(styles.label, className)

    const mergedStyle =
      typeof style === 'function'
        ? (state: import('@base-ui/react/field').FieldLabel.State) => ({
            ...style(state),
          })
        : style

    return (
      <BaseField.Label
        ref={ref}
        className={mergedClassName}
        style={mergedStyle}
        {...props}
      />
    )
  },
)
FieldLabel.displayName = 'Field.Label'

/* ----------------------------------------------------------------------------
 * Styled Description
 * -------------------------------------------------------------------------- */

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  FieldDescriptionProps
>(({ className, style, ...props }, ref) => {
  const mergedClassName =
    typeof className === 'function'
      ? (state: import('@base-ui/react/field').FieldDescription.State) =>
          cx(styles.description, className(state))
      : cx(styles.description, className)

  const mergedStyle =
    typeof style === 'function'
      ? (state: import('@base-ui/react/field').FieldDescription.State) => ({
          ...style(state),
        })
      : style

  return (
    <BaseField.Description
      ref={ref}
      className={mergedClassName}
      style={mergedStyle}
      {...props}
    />
  )
})
FieldDescription.displayName = 'Field.Description'

/* ----------------------------------------------------------------------------
 * Styled Error
 * -------------------------------------------------------------------------- */

const FieldError = React.forwardRef<HTMLDivElement, FieldErrorProps>(
  ({ className, style, ...props }, ref) => {
    const mergedClassName =
      typeof className === 'function'
        ? (state: import('@base-ui/react/field').FieldError.State) =>
            cx(styles.error, className(state))
        : cx(styles.error, className)

    const mergedStyle =
      typeof style === 'function'
        ? (state: import('@base-ui/react/field').FieldError.State) => ({
            ...style(state),
          })
        : style

    return (
      <BaseField.Error
        ref={ref}
        className={mergedClassName}
        style={mergedStyle}
        {...props}
      />
    )
  },
)
FieldError.displayName = 'Field.Error'

/* ----------------------------------------------------------------------------
 * Compound Field export
 * -------------------------------------------------------------------------- */

export const Field: {
  Root: typeof FieldRoot
  Label: typeof FieldLabel
  Description: typeof FieldDescription
  Error: typeof FieldError
  Control: typeof BaseField.Control
  Item: typeof BaseField.Item
  Validity: typeof BaseField.Validity
} = {
  Root: FieldRoot,
  Label: FieldLabel,
  Description: FieldDescription,
  Error: FieldError,
  Control: BaseField.Control,
  Item: BaseField.Item,
  Validity: BaseField.Validity,
}

/* ----------------------------------------------------------------------------
 * Convenience wrapper (MUI / Chakra / Ant Design aligned)
 * -------------------------------------------------------------------------- */

export interface FieldGroupProps extends Omit<
  FieldRootProps,
  'className' | 'style'
> {
  /** Label text (renders Field.Label when provided). */
  label?: React.ReactNode
  /** Helper or description text (renders Field.Description when provided). */
  helperText?: React.ReactNode
  /** Error message (renders Field.Error when provided). Use with invalid=true for ARIA. */
  error?: React.ReactNode
  /** Show required indicator next to label and pass required to context. */
  required?: boolean
  /** Root className (merged with default styles). */
  className?: string
  /** Root style. */
  style?: React.CSSProperties
  /** The form control (e.g. Input, Select). */
  children: React.ReactNode
}

const FieldGroup = React.forwardRef<HTMLDivElement, FieldGroupProps>(
  (
    {
      label,
      helperText,
      error,
      required = false,
      className,
      style,
      disabled,
      invalid,
      children,
      ...rootProps
    },
    ref,
  ) => {
    const showError = Boolean(invalid && error)

    return (
      <Field.Root
        ref={ref}
        disabled={disabled}
        invalid={showError || invalid}
        className={className}
        style={style}
        {...rootProps}
      >
        {label != null && (
          <Field.Label>
            {label}
            {required && (
              <span
                className={styles.requiredIndicator}
                aria-hidden="true"
              >
                *
              </span>
            )}
          </Field.Label>
        )}
        <div className={styles.controlWrapper}>{children}</div>
        {helperText != null && !showError && (
          <Field.Description>{helperText}</Field.Description>
        )}
        {showError && error != null && (
          <Field.Error match={true}>{error}</Field.Error>
        )}
      </Field.Root>
    )
  },
)
FieldGroup.displayName = 'FieldGroup'

export { FieldGroup }

export default Field
