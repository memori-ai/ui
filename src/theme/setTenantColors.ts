/**
 * Utility functions for setting tenant-specific colors dynamically
 *
 * This module provides functions to set primary and secondary colors
 * for different tenants in a cross-tenant platform.
 */

/**
 * Extracts lightness from an oklch color string
 */
function extractLightness(oklchColor: string): number {
  const match = oklchColor.match(/oklch\(([\d.]+)%/)
  if (match && match[1]) {
    return parseFloat(match[1]) / 100
  }
  return 0.5 // Default to middle lightness
}

/**
 * Calculates an appropriate content color (text color) based on the background color
 * Uses light text (98% lightness) for dark backgrounds, dark text (20% lightness) for light backgrounds
 */
function calculateContentColor(oklchColor: string): string {
  const lightness = extractLightness(oklchColor)

  // Extract chroma and hue from the original color
  const chromaMatch = oklchColor.match(/oklch\([\d.]+%\s+([\d.]+)\s+([\d.]+)\)/)
  const chroma =
    chromaMatch && chromaMatch[1] ? parseFloat(chromaMatch[1]) : 0.01
  const hue = chromaMatch && chromaMatch[2] ? parseFloat(chromaMatch[2]) : 240

  // Use light text for dark backgrounds (lightness < 0.5), dark text for light backgrounds
  const contentLightness = lightness < 0.5 ? 98 : 20

  return `oklch(${contentLightness}% 0.01 ${hue})`
}

/**
 * Calculates background colors that have perfect contrast with the primary color
 * Uses the same hue as the primary color but with very low chroma (neutral)
 * Adjusts lightness to ensure proper contrast
 */
function calculateBackgroundColors(primaryOklch: string): {
  main: string
  secondary: string
  tertiary: string
} {
  const primaryLightness = extractLightness(primaryOklch)

  // Extract hue from primary color
  const hueMatch = primaryOklch.match(/oklch\([\d.]+%\s+[\d.]+\s+([\d.]+)\)/)
  const hue = hueMatch && hueMatch[1] ? parseFloat(hueMatch[1]) : 240

  // For light theme: if primary is dark, use light backgrounds; if primary is light, use darker backgrounds
  // This ensures maximum contrast between primary color and backgrounds
  if (primaryLightness < 0.5) {
    // Primary is dark - use light backgrounds (high lightness)
    return {
      main: `oklch(98% 0.02 ${hue})`, // Very light background
      secondary: `oklch(95% 0.03 ${hue})`, // Slightly darker for hover states
      tertiary: `oklch(92% 0.04 ${hue})`, // Even darker for borders
    }
  } else {
    // Primary is light - use darker backgrounds (low lightness)
    return {
      main: `oklch(20% 0.02 ${hue})`, // Dark background
      secondary: `oklch(25% 0.03 ${hue})`, // Slightly lighter for hover states
      tertiary: `oklch(30% 0.04 ${hue})`, // Even lighter for borders
    }
  }
}

/**
 * Converts a color in various formats to oklch format
 * Supports: hex (#rrggbb), rgb(r, g, b), and oklch(...) strings
 *
 * Note: For production use, consider using a color conversion library like 'culori'
 * for more accurate conversions. This is a simplified implementation.
 */
function colorToOklch(color: string): string {
  // If already in oklch format, return as-is
  if (color.trim().startsWith('oklch(')) {
    return color.trim()
  }

  // Create a temporary element to use browser's color parsing
  const tempEl = document.createElement('div')
  tempEl.style.color = color
  document.body.appendChild(tempEl)

  const computedColor = window.getComputedStyle(tempEl).color
  document.body.removeChild(tempEl)

  // Parse rgb(r, g, b) format
  const rgbMatch = computedColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
  if (!rgbMatch || !rgbMatch[1] || !rgbMatch[2] || !rgbMatch[3]) {
    throw new Error(`Unable to parse color: ${color}`)
  }

  const r = parseInt(rgbMatch[1]) / 255
  const g = parseInt(rgbMatch[2]) / 255
  const b = parseInt(rgbMatch[3]) / 255

  // Convert RGB to linear RGB
  const toLinear = (c: number) => {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }
  const rLinear = toLinear(r)
  const gLinear = toLinear(g)
  const bLinear = toLinear(b)

  // Convert to OKLab (simplified approximation)
  // Using a simplified conversion - for production, consider using a library like culori
  const l =
    0.4122214708 * rLinear + 0.5363325363 * gLinear + 0.0514459929 * bLinear
  const m =
    0.2119034982 * rLinear + 0.6806995451 * gLinear + 0.1073969566 * bLinear
  const s =
    0.0883024619 * rLinear + 0.2817188376 * gLinear + 0.6299787005 * bLinear

  const l_ = Math.cbrt(l)
  const m_ = Math.cbrt(m)
  const s_ = Math.cbrt(s)

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_

  // Convert to OKLCH
  const C = Math.sqrt(a * a + b_ * b_)
  const H = Math.atan2(b_, a) * (180 / Math.PI)
  const H_normalized = H < 0 ? H + 360 : H

  // Format as oklch(L% C H)
  return `oklch(${(L * 100).toFixed(1)}% ${C.toFixed(3)} ${H_normalized.toFixed(1)})`
}

/**
 * Sets tenant colors for the current document
 * Automatically calculates appropriate content colors (text on colored backgrounds)
 *
 * @param colors - Object containing primary and/or secondary colors
 * @param colors.primary - Primary brand color (hex, rgb, or oklch format)
 * @param colors.secondary - Secondary brand color (hex, rgb, or oklch format)
 *
 * @example
 * ```ts
 * setTenantColors({
 *   primary: '#8246AF', // or 'rgb(130, 70, 175)' or 'oklch(48% 0.19 297)'
 *   secondary: '#00AEC7'
 * })
 * ```
 */
export function setTenantColors(colors: {
  primary?: string
  secondary?: string
}): void {
  const root = document.documentElement

  if (colors.primary) {
    try {
      const oklchColor = colorToOklch(colors.primary)
      const contentColor = calculateContentColor(oklchColor)
      const backgrounds = calculateBackgroundColors(oklchColor)

      root.style.setProperty('--memori-tenant-primary', oklchColor)
      root.style.setProperty('--memori-tenant-primary-content', contentColor)

      // Update background colors to have perfect contrast with primary
      root.style.setProperty(
        '--memori-tenant-main-background',
        backgrounds.main,
      )
      root.style.setProperty(
        '--memori-tenant-secondary-background',
        backgrounds.secondary,
      )
      root.style.setProperty(
        '--memori-tenant-tertiary-background',
        backgrounds.tertiary,
      )
    } catch (error) {
      console.warn(`Failed to set primary color: ${error}`)
    }
  }

  if (colors.secondary) {
    try {
      const oklchColor = colorToOklch(colors.secondary)
      const contentColor = calculateContentColor(oklchColor)
      root.style.setProperty('--memori-tenant-secondary', oklchColor)
      root.style.setProperty('--memori-tenant-secondary-content', contentColor)
    } catch (error) {
      console.warn(`Failed to set secondary color: ${error}`)
    }
  }
}

/**
 * Resets tenant colors to default values
 */
export function resetTenantColors(): void {
  const root = document.documentElement
  root.style.removeProperty('--memori-tenant-primary')
  root.style.removeProperty('--memori-tenant-primary-content')
  root.style.removeProperty('--memori-tenant-secondary')
  root.style.removeProperty('--memori-tenant-secondary-content')
  root.style.removeProperty('--memori-tenant-main-background')
  root.style.removeProperty('--memori-tenant-secondary-background')
  root.style.removeProperty('--memori-tenant-tertiary-background')
}

/**
 * Gets the current tenant colors
 *
 * @returns Object with current primary and secondary colors, or null if not set
 */
export function getTenantColors(): {
  primary: string | null
  primaryContent: string | null
  secondary: string | null
  secondaryContent: string | null
} {
  const root = document.documentElement
  const styles = getComputedStyle(root)

  return {
    primary: styles.getPropertyValue('--memori-tenant-primary').trim() || null,
    primaryContent:
      styles.getPropertyValue('--memori-tenant-primary-content').trim() || null,
    secondary:
      styles.getPropertyValue('--memori-tenant-secondary').trim() || null,
    secondaryContent:
      styles.getPropertyValue('--memori-tenant-secondary-content').trim() ||
      null,
  }
}
