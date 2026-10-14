import * as React from 'react'
import { Avatar as BaseAvatar } from '@base-ui/react'
import cx from 'classnames'
import { User } from 'lucide-react'
import './styles.css'

export interface AvatarProps {
  /**
   * Image URL. While loading, or if it fails, the fallback is shown.
   */
  src?: string

  /**
   * Alternative text for the image. Also used as accessible name of the fallback.
   */
  alt?: string

  /**
   * Initials shown when the image is missing or fails to load.
   */
  initials?: string

  /**
   * Icon shown when there is no image and no `initials`.
   * @default <User />
   */
  icon?: React.ReactNode

  /**
   * Avatar size: preset or pixel value.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | number

  /**
   * Avatar shape.
   * @default 'circle'
   */
  shape?: 'circle' | 'square'

  /**
   * Additional CSS class name for the root element.
   */
  className?: string

  /**
   * Inline styles for the root element.
   */
  style?: React.CSSProperties
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt,
      initials,
      icon,
      size = 'md',
      shape = 'circle',
      className,
      style,
    },
    ref,
  ) => {
    const isPixelSize = typeof size === 'number'
    const sizeStyle: React.CSSProperties | undefined = isPixelSize
      ? {
          width: size,
          height: size,
          fontSize: Math.max(10, Math.round(size * 0.4)),
        }
      : undefined
    const trimmedInitials = initials?.trim()

    return (
      <BaseAvatar.Root
        ref={ref}
        className={cx(
          'memori-avatar',
          !isPixelSize && `memori-avatar--${size}`,
          `memori-avatar--${shape}`,
          className,
        )}
        style={{ ...sizeStyle, ...style }}
      >
        {src && (
          <BaseAvatar.Image
            className="memori-avatar__image"
            src={src}
            alt={alt ?? ''}
          />
        )}
        <BaseAvatar.Fallback
          className="memori-avatar__fallback"
          {...(alt ? { role: 'img', 'aria-label': alt } : {})}
        >
          {trimmedInitials ? (
            <span className="memori-avatar__initials">{trimmedInitials}</span>
          ) : (
            <span
              className="memori-avatar__icon"
              aria-hidden="true"
            >
              {icon ?? <User />}
            </span>
          )}
        </BaseAvatar.Fallback>
      </BaseAvatar.Root>
    )
  },
)

Avatar.displayName = 'Avatar'

export default Avatar
