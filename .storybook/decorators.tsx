import React, { useState, type CSSProperties, type ReactNode } from 'react'

const FIXED_SURFACE_STYLE: CSSProperties = {
  position: 'relative',
  height: 480,
  width: '100%',
  maxWidth: 720,
  margin: '24px auto',
  overflow: 'hidden',
  border: '1px solid var(--memori-border-color)',
  borderRadius: 'var(--memori-radius-md, 8px)',
  contain: 'layout',
  padding: 'var(--memori-spacing-md, 16px)',
  background:
    'var(--memori-main-background, var(--memori-secondary-background))',
}

export interface FixedSurfaceProps {
  /** Render prop receives the surface element for `container={surface}`. */
  children: (surface: HTMLDivElement | null) => ReactNode
  height?: number
  className?: string
  style?: CSSProperties
}

/**
 * Fixed-height clip surface that mirrors the widget embed case
 * (`contain: layout` + overflow hidden). Use with portal `container`.
 */
export function FixedSurface({
  children,
  height = 480,
  className,
  style,
}: FixedSurfaceProps) {
  const [surface, setSurface] = useState<HTMLDivElement | null>(null)

  return (
    <div
      ref={setSurface}
      data-memori-ui-root=""
      className={className}
      style={{ ...FIXED_SURFACE_STYLE, height, ...style }}
    >
      {children(surface)}
    </div>
  )
}
