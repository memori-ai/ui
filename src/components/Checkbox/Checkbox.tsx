import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import cx from 'classnames'

import './Checkbox.css'

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label?: string
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: FC<Props> = ({
  label,
  className,
  disabled = false,
  indeterminate = false,
  checked,
  onChange,
  name,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  return (
    <label
      className={cx('memori-checkbox', className, {
        'memori-checkbox--disabled': disabled,
        'memori-checkbox--indeterminate': indeterminate,
      })}
    >
      <span className="memori-checkbox--input-wrapper">
        <input
          ref={inputRef}
          type="checkbox"
          {...props}
          name={name}
          disabled={disabled}
          checked={checked || indeterminate}
          className="memori-checkbox--input"
          onChange={onChange}
        />
        <span className="memori-checkbox--inner" />
      </span>
      {!!label?.length && (
        <span className="memori-checkbox--text">{label}</span>
      )}
    </label>
  )
}

export default Checkbox
