import * as React from 'react'

let fallbackIdCounter = 0

export function useStableId(prefix = 'memori'): string {
  const [id] = React.useState(() => {
    fallbackIdCounter += 1
    return `${prefix}-${fallbackIdCounter}`
  })

  return id
}
