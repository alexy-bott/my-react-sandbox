export type UseBooleanReturn = {
  value: boolean
  setTrue: () => void
  setFalse: () => void
}

export function useBoolean(initialValue = false): UseBooleanReturn {
  return {
    value: initialValue,
    setTrue: () => undefined,
    setFalse: () => undefined,
  }
}
