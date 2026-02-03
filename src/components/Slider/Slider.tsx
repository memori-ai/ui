import React, { useState, useRef, useEffect } from 'react'
import cx from 'classnames'
import './styles.css'

export interface SliderProps {
  min?: number
  max?: number
  step?: number
  /**
   * Controlled value. When provided, the thumb position is driven by this prop
   * (e.g. for presets). Omit to use uncontrolled mode with defaultValue.
   */
  value?: number
  defaultValue?: number
  label?: string | React.ReactNode
  onChange?: (value: number) => void
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

const CustomSlider = ({
  min = 0,
  max = 100,
  step = 1,
  value: valueProp,
  defaultValue = 50,
  label,
  onChange,
  disabled = false,
}: SliderProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = valueProp !== undefined
  const value = isControlled ? valueProp : internalValue
  const setValue = (v: number) => {
    if (!isControlled) setInternalValue(v)
    onChange?.(v)
  }
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const percentage = ((value - min) / (max - min)) * 100

  const marks = []
  for (let i = min; i <= max; i += (max - min) / 4) {
    marks.push(Math.round(i))
  }

  const calculateNewValue = (clientX: number) => {
    if (!sliderRef.current) return value

    const bounds = sliderRef.current.getBoundingClientRect()
    const position = clientX - bounds.left
    const sliderWidth = bounds.width
    const percentage = Math.max(
      0,
      Math.min(100, (position / sliderWidth) * 100),
    )
    const newValue = Math.round((percentage / 100) * (max - min) + min)
    const steppedValue = Math.round(newValue / step) * step
    return Math.min(Math.max(steppedValue, min), max)
  }

  const handleInteractionStart = (clientX: number) => {
    if (disabled) return
    setIsDragging(true)
    const newValue = calculateNewValue(clientX)
    setValue(newValue)
  }

  const handleInteractionMove = (clientX: number) => {
    if (!isDragging || disabled) return
    const newValue = calculateNewValue(clientX)
    setValue(newValue)
  }

  const handleInteractionEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      e.preventDefault() // Prevent scrolling while dragging
      handleInteractionMove(e.touches[0]?.clientX ?? 0)
    }

    const handleMouseMove = (e: MouseEvent) => {
      handleInteractionMove(e.clientX)
    }

    const handleEndInteraction = () => {
      handleInteractionEnd()
    }

    if (isDragging) {
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('touchend', handleEndInteraction)
      window.addEventListener('mouseup', handleEndInteraction)
    }

    return () => {
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchend', handleEndInteraction)
      window.removeEventListener('mouseup', handleEndInteraction)
    }
  }, [isDragging])

  useEffect(() => {
    if (!isControlled) setInternalValue(defaultValue)
  }, [defaultValue, isControlled])

  return (
    <div
      className={cx('memori-slider', {
        'memori-slider--disabled': disabled,
      })}
      style={{ '--percentage': `${percentage}%` } as React.CSSProperties}
    >
      <div className="memori-slider__header">
        {label && <div className="memori-slider__label">{label}</div>}
        <div className="memori-slider__value">{value}</div>
      </div>

      <div
        ref={sliderRef}
        className="memori-slider__track-container"
        onMouseDown={e => handleInteractionStart(e.clientX)}
        onTouchStart={e => handleInteractionStart(e.touches[0]?.clientX ?? 0)}
      >
        <div className="memori-slider__track">
          <div className="memori-slider__track-fill" />
        </div>

        <div className="memori-slider__marks">
          {marks.map(mark => (
            <div
              key={mark}
              className="memori-slider__mark"
            >
              <div className="memori-slider__mark-line" />
              <span className="memori-slider__mark-value">{mark}</span>
            </div>
          ))}
        </div>

        <div
          className="memori-slider__thumb"
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          tabIndex={disabled ? -1 : 0}
        />
      </div>
    </div>
  )
}

export default CustomSlider
