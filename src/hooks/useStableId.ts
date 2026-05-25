import * as React from 'react'

type ReactWithOptionalUseId = typeof React & {
  useId?: () => string
}

let fallbackIdCounter = 0

export function useStableId(prefix = 'memori'): string {
  const [fallbackId] = React.useState(() => {
    fallbackIdCounter += 1
    return `${prefix}-${fallbackIdCounter}`
  })
  const reactUseId = (React as ReactWithOptionalUseId).useId
  const reactId = typeof reactUseId === 'function' ? reactUseId() : undefined

  return reactId ?? fallbackId
}
